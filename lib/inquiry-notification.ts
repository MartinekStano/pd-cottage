import {
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
import { site } from "@/lib/site-data";

export type Inquiry = {
  meno: string;
  email: string;
  telefon: string;
  terminOd: string;
  terminDo: string;
  pocetOsob: string;
  typPrenajmu: string;
  typPobytu: string;
  sprava: string;
  receivedAt: Date;
};

const missing = `<span style="font-weight:400;color:${emailColors.muted};">neuvedené</span>`;

// "18. 11. – 22. 11. 2026"; the first year is written only when the stay crosses New Year.
function stayRange(from: string, to: string) {
  const sameYear = from.slice(0, 4) === to.slice(0, 4);
  const start = formatDate(from);
  return `${sameYear ? start.slice(0, start.lastIndexOf(" ")) : start} – ${formatDate(to)}`;
}

// Inquiry for the owner, with everything the guest filled in and one-tap reply and call buttons.
export function buildInquiryNotification(inquiry: Inquiry) {
  const nights = inquiry.terminOd && inquiry.terminDo ? countNights(inquiry.terminOd, inquiry.terminDo) : null;
  const persons = Number(inquiry.pocetOsob);
  const dates = inquiry.terminOd && inquiry.terminDo ? stayRange(inquiry.terminOd, inquiry.terminDo) : null;
  const nightsText = nights ? plural(nights, "noc", "noci", "nocí") : null;
  const personsText = persons > 0 ? plural(persons, "osoba", "osoby", "osôb") : null;
  const headline = [dates, nightsText, personsText].filter(Boolean).join(" · ");
  // Short enough to read in the inbox list: "Nový dopyt: Martin, 18. 11. – 22. 11. 2026, 6 osôb".
  const subject = `Nový dopyt: ${[inquiry.meno, dates, personsText].filter(Boolean).join(", ")}`;
  const receivedAt = new Intl.DateTimeFormat("sk-SK", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Bratislava",
  }).format(inquiry.receivedAt);
  const replyHref = `mailto:${encodeURIComponent(inquiry.email).replace("%40", "@")}?subject=${encodeURIComponent(`Váš dopyt – ${site.name}`)}`;
  const phoneHref = inquiry.telefon ? `tel:${inquiry.telefon.replace(/[^\d+]/g, "")}` : null;

  const stayRows: [string, string][] = [
    ["Príchod", inquiry.terminOd ? escapeHtml(formatDate(inquiry.terminOd, true)) : missing],
    ["Odchod", inquiry.terminDo ? escapeHtml(formatDate(inquiry.terminDo, true)) : missing],
    ...(nightsText ? [["Počet nocí", nightsText] as [string, string]] : []),
    ["Počet osôb", personsText ?? missing],
    ["Typ prenájmu", inquiry.typPrenajmu ? escapeHtml(inquiry.typPrenajmu) : missing],
    ["Typ pobytu", inquiry.typPobytu ? escapeHtml(inquiry.typPobytu) : missing],
  ];
  const link = (href: string, label: string) => `<a href="${escapeHtml(href)}" style="color:${emailColors.accent};text-decoration:none;">${escapeHtml(label)}</a>`;
  const contactRows: [string, string][] = [
    ["Meno", escapeHtml(inquiry.meno)],
    ["E-mail", link(replyHref, inquiry.email)],
    ["Telefón", phoneHref ? link(phoneHref, inquiry.telefon) : missing],
  ];

  const text = [
    `Nový dopyt z webu ${site.name}`,
    "",
    [inquiry.meno, headline].filter(Boolean).join(" · "),
    "",
    "POBYT",
    `Príchod: ${inquiry.terminOd ? formatDate(inquiry.terminOd, true) : "neuvedené"}`,
    `Odchod: ${inquiry.terminDo ? formatDate(inquiry.terminDo, true) : "neuvedené"}`,
    `Počet osôb: ${personsText ?? "neuvedené"}`,
    `Typ prenájmu: ${inquiry.typPrenajmu || "neuvedené"}`,
    `Typ pobytu: ${inquiry.typPobytu || "neuvedené"}`,
    "",
    "KONTAKT",
    `Meno: ${inquiry.meno}`,
    `E-mail: ${inquiry.email}`,
    `Telefón: ${inquiry.telefon || "neuvedené"}`,
    "",
    "SPRÁVA",
    inquiry.sprava || "Bez správy.",
    "",
    `Prijaté ${receivedAt} cez formulár na pallovdvor.sk. Na tento e-mail môžete rovno odpovedať, odpoveď pôjde hosťovi.`,
  ].join("\n");

  const content = `              ${eyebrowHtml("Nový dopyt z webu")}
              <h1 style="margin:12px 0 0;font:400 30px/1.25 ${serif};color:${emailColors.text};">${escapeHtml(inquiry.meno)}</h1>
              <p style="margin:10px 0 0;font:600 16px/1.6 ${sans};color:${emailColors.text};">${headline ? escapeHtml(headline) : `<span style="font-weight:400;color:${emailColors.muted};">Termín ani počet osôb neuviedol.</span>`}</p>
              <div style="margin:24px 0 0;font-size:0;">
                <div style="display:inline-block;margin:0 10px 10px 0;vertical-align:top;"><table role="presentation" cellpadding="0" cellspacing="0"><tr>${buttonHtml(replyHref, "Odpovedať e-mailom")}</tr></table></div>${phoneHref ? `
                <div style="display:inline-block;margin:0 0 10px;vertical-align:top;"><table role="presentation" cellpadding="0" cellspacing="0"><tr>${buttonHtml(phoneHref, `Zavolať ${inquiry.telefon}`, "light")}</tr></table></div>` : ""}
              </div>
              ${eyebrowHtml("Pobyt", "32px 0 12px")}
              ${detailsTableHtml(stayRows)}
              ${eyebrowHtml("Kontakt", "28px 0 12px")}
              ${detailsTableHtml(contactRows)}
              ${eyebrowHtml("Správa", "28px 0 12px")}
              <div style="padding:16px 18px;border-left:3px solid ${emailColors.accent};border-radius:8px;background:${emailColors.page};font:15px/1.7 ${sans};color:${inquiry.sprava ? emailColors.text : emailColors.muted};">${inquiry.sprava ? escapeHtml(inquiry.sprava).replace(/\r?\n/g, "<br>") : "Bez správy."}</div>`;

  const html = emailDocument({
    content,
    footer: [
      `Prijaté ${escapeHtml(receivedAt)} cez formulár na pallovdvor.sk`,
      "Na tento e-mail môžete rovno odpovedať, odpoveď pôjde hosťovi.",
    ],
    preheader: [inquiry.meno, headline].filter(Boolean).join(" · "),
    title: subject,
  });

  return { subject, text, html };
}
