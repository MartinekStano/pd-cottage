import { plural } from "@/lib/plural";
import { absoluteUrl, contact, site } from "@/lib/site-data";

// Only the validated choices from the form. Free text (name, message) is left out on purpose:
// the e-mail goes to whatever address was typed in, so it must not carry text a stranger wrote.
export type InquirySummary = {
  terminOd: string;
  terminDo: string;
  pocetOsob: string;
  typPrenajmu: string;
  typPobytu: string;
};

const colors = {
  page: "#f3eee6",
  card: "#fffaf2",
  text: "#1f1c18",
  muted: "#6f665d",
  accent: "#7a5c3e",
  dark: "#171512",
  line: "#e6dfd4",
};

const serif = "Georgia, 'Times New Roman', serif";
const sans = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day}. ${month}. ${year}`;
}

function countNights(from: string, to: string) {
  const nights = Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000);
  return nights > 0 ? nights : null;
}

function summaryRows(summary: InquirySummary) {
  const nights = summary.terminOd && summary.terminDo ? countNights(summary.terminOd, summary.terminDo) : null;
  const persons = Number(summary.pocetOsob);

  return [
    ["Príchod", summary.terminOd && formatDate(summary.terminOd)],
    ["Odchod", summary.terminDo && formatDate(summary.terminDo)],
    ["Počet nocí", nights && plural(nights, "noc", "noci", "nocí")],
    ["Počet osôb", persons > 0 && plural(persons, "osoba", "osoby", "osôb")],
    ["Typ prenájmu", summary.typPrenajmu],
    ["Typ pobytu", summary.typPobytu],
  ].filter((row): row is [string, string] => Boolean(row[1]));
}

export function buildInquiryConfirmation(summary: InquirySummary) {
  const subject = `Váš dopyt sme prijali – ${site.name}`;
  const rows = summaryRows(summary);
  const pricingUrl = absoluteUrl("/cennik");
  const galleryUrl = absoluteUrl("/fotogaleria");
  const intro =
    "ďakujeme za záujem o pobyt v Pallovom Dvore v Lutišiach. Váš dopyt sme prijali a čo najskôr vám potvrdíme dostupnosť termínu a pripravíme cenu.";
  const nextSteps = `Dopyt je nezáväzný. Ak chcete niečo doplniť alebo zmeniť, stačí odpovedať na tento e-mail alebo zavolať na ${contact.phone}.`;
  const footerNote =
    "Túto správu sme poslali automaticky, pretože na webe pallovdvor.sk bol odoslaný dopyt s touto e-mailovou adresou. Ak ste ho neposielali vy, správu môžete ignorovať.";

  const text = [
    "Dobrý deň,",
    "",
    intro,
    "",
    ...(rows.length
      ? ["Zhrnutie vášho dopytu:", ...rows.map(([label, value]) => `- ${label}: ${value}`), ""]
      : []),
    nextSteps,
    "",
    `Cenník: ${pricingUrl}`,
    `Fotogaléria: ${galleryUrl}`,
    "",
    "Tešíme sa na vás,",
    site.name,
    `${contact.address} · ${contact.phone} · ${site.url}`,
    "",
    footerNote,
  ].join("\n");

  const summaryHtml = rows.length
    ? `
              <p style="margin:32px 0 12px;font:600 12px/1.4 ${sans};letter-spacing:0.12em;text-transform:uppercase;color:${colors.accent};">Zhrnutie vášho dopytu</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;background:${colors.page};border-radius:10px;">
${rows
  .map(
    ([label, value], index) => `                <tr>
                  <td style="padding:13px 18px;font:14px/1.5 ${sans};color:${colors.muted};${index ? `border-top:1px solid ${colors.line};` : ""}">${escapeHtml(label)}</td>
                  <td align="right" style="padding:13px 18px;font:600 14px/1.5 ${sans};color:${colors.text};${index ? `border-top:1px solid ${colors.line};` : ""}">${escapeHtml(value)}</td>
                </tr>`,
  )
  .join("\n")}
              </table>`
    : "";

  const html = `<!doctype html>
<html lang="sk">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:${colors.page};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Ďakujeme, váš dopyt evidujeme a čoskoro sa vám ozveme.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${colors.page};">
      <tr>
        <td align="center" style="padding:32px 16px 40px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
            <tr>
              <td align="center" style="padding:0 0 20px;">
                <a href="${site.url}" style="text-decoration:none;"><img src="${absoluteUrl("/brand/logo-email.png")}" width="240" height="120" alt="${escapeHtml(site.name)} – Lutiše" style="display:block;width:240px;max-width:100%;height:auto;border:0;"></a>
              </td>
            </tr>
            <tr>
              <td style="background:${colors.card};border:1px solid ${colors.line};border-radius:14px;padding:40px 36px;">
              <p style="margin:0;font:600 12px/1.4 ${sans};letter-spacing:0.12em;text-transform:uppercase;color:${colors.accent};">Nezáväzný dopyt</p>
              <h1 style="margin:12px 0 0;font:400 30px/1.25 ${serif};color:${colors.text};">Ďakujeme, váš dopyt evidujeme</h1>
              <p style="margin:24px 0 0;font:16px/1.7 ${sans};color:${colors.text};">Dobrý deň,<br>${escapeHtml(intro)}</p>${summaryHtml}
              <p style="margin:28px 0 0;font:15px/1.7 ${sans};color:${colors.muted};">Dopyt je nezáväzný. Ak chcete niečo doplniť alebo zmeniť, stačí odpovedať na tento e-mail alebo zavolať na <a href="${contact.phoneHref}" style="color:${colors.accent};font-weight:600;text-decoration:none;">${escapeHtml(contact.phone)}</a>.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:32px 0 0;">
                <tr>
                  <td style="border-radius:999px;background:${colors.dark};">
                    <a href="${pricingUrl}" style="display:inline-block;padding:14px 28px;font:600 14px/1.2 ${sans};color:${colors.card};text-decoration:none;border-radius:999px;">Pozrieť cenník</a>
                  </td>
                  <td style="padding-left:20px;">
                    <a href="${galleryUrl}" style="font:600 14px/1.2 ${sans};color:${colors.accent};text-decoration:none;">Fotogaléria &rarr;</a>
                  </td>
                </tr>
              </table>
              <p style="margin:36px 0 0;font:16px/1.6 ${sans};color:${colors.text};">Tešíme sa na vás,<br><span style="font:400 20px/1.6 ${serif};">${escapeHtml(site.name)}</span></p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 12px 0;font:13px/1.7 ${sans};color:${colors.muted};">
                ${escapeHtml(contact.address)} · <a href="${contact.phoneHref}" style="color:${colors.muted};text-decoration:none;">${escapeHtml(contact.phone)}</a> · <a href="${site.url}" style="color:${colors.muted};text-decoration:none;">pallovdvor.sk</a>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:12px 24px 0;font:12px/1.6 ${sans};color:${colors.muted};">${escapeHtml(footerNote)}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

  return { subject, text, html };
}
