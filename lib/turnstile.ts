const verifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const verifyTimeoutMs = 10_000;

// Fails closed: a missing secret, a network error or an invalid token all reject the submission.
export async function verifyTurnstileToken(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("Missing required environment variable TURNSTILE_SECRET_KEY");
    return false;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch(verifyUrl, {
      body: new URLSearchParams({ response: token, secret }),
      method: "POST",
      signal: AbortSignal.timeout(verifyTimeoutMs),
    });
    const result = (await response.json()) as { success?: boolean; "error-codes"?: string[] };

    if (!result.success) {
      console.warn("Turnstile verification failed", result["error-codes"]);
    }

    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification error", error);
    return false;
  }
}
