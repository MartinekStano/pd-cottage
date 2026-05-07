import net from "node:net";
import { randomUUID } from "node:crypto";
import tls from "node:tls";

type SMTPConfig = {
  host: string;
  port: number;
  from: string;
  auth: boolean;
  starttls: boolean;
  ssl: boolean;
  user?: string;
  password?: string;
};

type MailMessage = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
};

type SocketLike = net.Socket | tls.TLSSocket;

const smtpTimeoutMs = 10_000;

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined) {
    return fallback;
  }

  return ["1", "true", "yes"].includes(value.toLowerCase());
}

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable ${name}`);
  }

  return value;
}

export function getSMTPConfig(): SMTPConfig {
  const port = Number(process.env.KEYCLOAK_SMTP_PORT ?? "25");

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("KEYCLOAK_SMTP_PORT must be a valid port number");
  }

  return {
    host: requireEnv("KEYCLOAK_SMTP_HOST"),
    port,
    from: requireEnv("KEYCLOAK_SMTP_FROM"),
    auth: parseBoolean(process.env.KEYCLOAK_SMTP_AUTH, false),
    starttls: parseBoolean(process.env.KEYCLOAK_SMTP_STARTTLS, false),
    ssl: parseBoolean(process.env.KEYCLOAK_SMTP_SSL, false),
    user: process.env.KEYCLOAK_SMTP_USER,
    password: process.env.KEYCLOAK_SMTP_PASSWORD,
  };
}

function encodeHeader(value: string) {
  if (/^[\x20-\x7e]*$/.test(value)) {
    return value;
  }

  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeSMTPData(value: string) {
  return value
    .replace(/\r?\n/g, "\r\n")
    .split("\r\n")
    .map((line) => (line.startsWith(".") ? `.${line}` : line))
    .join("\r\n");
}

function buildMessage({ to, from, replyTo, subject, text }: MailMessage) {
  const headers = [
    `From: ${sanitizeHeader(from)}`,
    `To: ${sanitizeHeader(to)}`,
    replyTo ? `Reply-To: ${sanitizeHeader(replyTo)}` : null,
    `Subject: ${encodeHeader(sanitizeHeader(subject))}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${randomUUID()}@pallovdvor.sk>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
  ].filter(Boolean);

  return `${headers.join("\r\n")}\r\n\r\n${escapeSMTPData(text)}`;
}

function createSocket(config: SMTPConfig): Promise<SocketLike> {
  return new Promise((resolve, reject) => {
    const socket = config.ssl
      ? tls.connect({
          host: config.host,
          port: config.port,
          servername: config.host,
        })
      : net.connect({
          host: config.host,
          port: config.port,
        });

    socket.setTimeout(smtpTimeoutMs);
    socket.once(config.ssl ? "secureConnect" : "connect", () => resolve(socket));
    socket.once("error", reject);
    socket.once("timeout", () => {
      socket.destroy();
      reject(new Error("SMTP connection timed out"));
    });
  });
}

class SMTPClient {
  private buffer = "";

  constructor(
    private socket: SocketLike,
    private readonly host: string,
  ) {}

  async connect() {
    await this.readResponse(220);
  }

  async ehlo() {
    await this.command(`EHLO ${this.host}`, 250);
  }

  async startTLS() {
    await this.command("STARTTLS", 220);
    this.socket = await new Promise<tls.TLSSocket>((resolve, reject) => {
      const secureSocket = tls.connect(
        {
          socket: this.socket,
          servername: this.host,
        },
        () => resolve(secureSocket),
      );

      secureSocket.once("error", reject);
      secureSocket.once("timeout", () => {
        secureSocket.destroy();
        reject(new Error("SMTP STARTTLS timed out"));
      });
      secureSocket.setTimeout(smtpTimeoutMs);
    });
    this.buffer = "";
    await this.ehlo();
  }

  async authLogin(user: string, password: string) {
    await this.command("AUTH LOGIN", 334);
    await this.command(Buffer.from(user, "utf8").toString("base64"), 334);
    await this.command(Buffer.from(password, "utf8").toString("base64"), 235);
  }

  async send(message: MailMessage) {
    await this.command(`MAIL FROM:<${message.from}>`, 250);
    await this.command(`RCPT TO:<${message.to}>`, 250);
    await this.command("DATA", 354);
    await this.command(`${buildMessage(message)}\r\n.`, 250);
  }

  async quit() {
    await this.command("QUIT", 221);
    this.socket.end();
  }

  private command(command: string, expectedCode: number) {
    this.socket.write(`${command}\r\n`);
    return this.readResponse(expectedCode);
  }

  private readResponse(expectedCode: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const cleanup = () => {
        this.socket.off("data", onData);
        this.socket.off("error", onError);
        this.socket.off("timeout", onTimeout);
      };

      const onError = (error: Error) => {
        cleanup();
        reject(error);
      };

      const onTimeout = () => {
        cleanup();
        reject(new Error("SMTP response timed out"));
      };

      const onData = (chunk: Buffer) => {
        this.buffer += chunk.toString("utf8");
        const lines = this.buffer.split(/\r?\n/).filter(Boolean);
        const lastLine = lines.at(-1);

        if (!lastLine || !/^\d{3}\s/.test(lastLine)) {
          return;
        }

        this.buffer = "";
        cleanup();

        const code = Number(lastLine.slice(0, 3));
        const response = lines.join("\n");

        if (code !== expectedCode) {
          reject(new Error(`Unexpected SMTP response ${code}: ${response}`));
          return;
        }

        resolve(response);
      };

      this.socket.on("data", onData);
      this.socket.once("error", onError);
      this.socket.once("timeout", onTimeout);
    });
  }
}

export async function sendSMTPMail(message: MailMessage) {
  const config = getSMTPConfig();

  if (config.auth && (!config.user || !config.password)) {
    throw new Error("SMTP auth is enabled but credentials are missing");
  }

  const socket = await createSocket(config);
  const client = new SMTPClient(socket, config.host);

  await client.connect();
  await client.ehlo();

  if (config.starttls) {
    await client.startTLS();
  }

  if (config.auth && config.user && config.password) {
    await client.authLogin(config.user, config.password);
  }

  await client.send({
    ...message,
    from: config.from,
  });
  await client.quit();
}
