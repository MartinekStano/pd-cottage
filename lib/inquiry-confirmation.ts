import {
  addressLineHtml,
  buttonHtml,
  countNights,
  detailsTableHtml,
  emailColors,
  emailDocument,
  escapeHtml,
  eyebrowHtml,
  formatDate,
  sans,
  serif,
} from "@/lib/email-layout";
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

  const content = `              ${eyebrowHtml("Nezáväzný dopyt")}
              <h1 style="margin:12px 0 0;font:400 30px/1.25 ${serif};color:${emailColors.text};">Ďakujeme, váš dopyt evidujeme</h1>
              <p style="margin:24px 0 0;font:16px/1.7 ${sans};color:${emailColors.text};">Dobrý deň,<br>${escapeHtml(intro)}</p>${
                rows.length
                  ? `
              ${eyebrowHtml("Zhrnutie vášho dopytu", "32px 0 12px")}
              ${detailsTableHtml(rows.map(([label, value]) => [label, escapeHtml(value)]))}`
                  : ""
              }
              <p style="margin:28px 0 0;font:15px/1.7 ${sans};color:${emailColors.muted};">Dopyt je nezáväzný. Ak chcete niečo doplniť alebo zmeniť, stačí odpovedať na tento e-mail alebo zavolať na <a href="${contact.phoneHref}" style="color:${emailColors.accent};font-weight:600;text-decoration:none;">${escapeHtml(contact.phone)}</a>.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:32px 0 0;">
                <tr>
                  ${buttonHtml(pricingUrl, "Pozrieť cenník")}
                  <td style="padding-left:20px;">
                    <a href="${galleryUrl}" style="font:600 14px/1.2 ${sans};color:${emailColors.accent};text-decoration:none;">Fotogaléria &rarr;</a>
                  </td>
                </tr>
              </table>
              <p style="margin:36px 0 0;font:16px/1.6 ${sans};color:${emailColors.text};">Tešíme sa na vás,<br><span style="font:400 20px/1.6 ${serif};">${escapeHtml(site.name)}</span></p>`;

  const html = emailDocument({
    content,
    footer: [addressLineHtml, escapeHtml(footerNote)],
    preheader: "Ďakujeme, váš dopyt evidujeme a čoskoro sa vám ozveme.",
    title: subject,
  });

  return { subject, text, html };
}
