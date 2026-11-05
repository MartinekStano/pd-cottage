import { absoluteUrl, contact, site } from "@/lib/site-data";

// Shared look of the transactional e-mails: inline styles and tables, because mail clients ignore most CSS.
export const emailColors = {
  page: "#f3eee6",
  card: "#fffaf2",
  text: "#1f1c18",
  muted: "#6f665d",
  accent: "#7a5c3e",
  dark: "#171512",
  line: "#e6dfd4",
};

export const serif = "Georgia, 'Times New Roman', serif";
export const sans = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// "2026-12-27" → "27. 12. 2026", or "so 27. 12. 2026" with the weekday.
export function formatDate(isoDate: string, withWeekday = false) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = `${day}. ${month}. ${year}`;

  if (!withWeekday) {
    return date;
  }

  const weekday = new Intl.DateTimeFormat("sk-SK", { timeZone: "UTC", weekday: "short" }).format(Date.UTC(year, month - 1, day));
  return `${weekday} ${date}`;
}

export function countNights(from: string, to: string) {
  const nights = Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000);
  return nights > 0 ? nights : null;
}

export function eyebrowHtml(text: string, margin = "0") {
  return `<p style="margin:${margin};font:600 12px/1.4 ${sans};letter-spacing:0.12em;text-transform:uppercase;color:${emailColors.accent};">${escapeHtml(text)}</p>`;
}

// Label / value rows. Values are HTML so they can carry links; the caller escapes everything it puts in.
export function detailsTableHtml(rows: [string, string][]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;background:${emailColors.page};border-radius:10px;">
${rows
  .map(
    ([label, value], index) => `                <tr>
                  <td style="padding:13px 18px;font:14px/1.5 ${sans};color:${emailColors.muted};${index ? `border-top:1px solid ${emailColors.line};` : ""}">${escapeHtml(label)}</td>
                  <td align="right" style="padding:13px 18px;font:600 14px/1.5 ${sans};color:${emailColors.text};word-break:break-word;overflow-wrap:anywhere;${index ? `border-top:1px solid ${emailColors.line};` : ""}">${value}</td>
                </tr>`,
  )
  .join("\n")}
              </table>`;
}

export function buttonHtml(href: string, label: string, variant: "dark" | "light" = "dark") {
  const cell = variant === "dark" ? `background:${emailColors.dark};` : `border:1px solid ${emailColors.line};background:#ffffff;`;
  const color = variant === "dark" ? emailColors.card : emailColors.text;
  return `<td style="border-radius:999px;${cell}"><a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 26px;font:600 14px/1.2 ${sans};color:${color};text-decoration:none;border-radius:999px;">${escapeHtml(label)}</a></td>`;
}

export const addressLineHtml = `${escapeHtml(contact.address)} · <a href="${contact.phoneHref}" style="color:${emailColors.muted};text-decoration:none;">${escapeHtml(contact.phone)}</a> · <a href="${site.url}" style="color:${emailColors.muted};text-decoration:none;">pallovdvor.sk</a>`;

// Logo, the content card and small footer lines (already HTML) on the page background.
export function emailDocument({ title, preheader, content, footer }: { title: string; preheader: string; content: string; footer: string[] }) {
  return `<!doctype html>
<html lang="sk">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${emailColors.page};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${emailColors.page};">
      <tr>
        <td align="center" style="padding:32px 16px 40px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
            <tr>
              <td align="center" style="padding:0 0 20px;">
                <a href="${site.url}" style="text-decoration:none;"><img src="${absoluteUrl("/brand/logo-email.png")}" width="240" height="120" alt="${escapeHtml(site.name)} – Lutiše" style="display:block;width:240px;max-width:100%;height:auto;border:0;"></a>
              </td>
            </tr>
            <tr>
              <td style="background:${emailColors.card};border:1px solid ${emailColors.line};border-radius:14px;padding:40px 36px;">
${content}
              </td>
            </tr>
${footer
  .map(
    (line, index) => `            <tr>
              <td align="center" style="padding:${index ? "12px 24px 0" : "24px 12px 0"};font:${index ? "12px" : "13px"}/1.7 ${sans};color:${emailColors.muted};">${line}</td>
            </tr>`,
  )
  .join("\n")}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
