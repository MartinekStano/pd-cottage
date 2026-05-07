"use server";

import { contact, rentalTypeOptions, site, stayTypeOptions } from "@/lib/site-data";
import { sendSMTPMail } from "@/lib/smtp";

type ContactField =
  | "email"
  | "meno"
  | "pocet_osob"
  | "sprava"
  | "telefon"
  | "termin"
  | "typ_pobytu"
  | "typ_prenajmu";

export type ContactFormState = {
  fieldErrors?: Partial<Record<ContactField, string>>;
  message: string;
  status: "idle" | "error" | "success";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readValue(formData: FormData, key: ContactField, maxLength = 500) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function readSingleLine(formData: FormData, key: ContactField, maxLength = 160) {
  return readValue(formData, key, maxLength).replace(/\s+/g, " ");
}

function buildEmailText(data: Record<ContactField, string>) {
  return [
    `Nový nezáväzný dopyt z webu ${site.name}`,
    "",
    `Meno a priezvisko: ${data.meno}`,
    `E-mail: ${data.email}`,
    `Telefón: ${data.telefon || "neuvedené"}`,
    `Požadovaný termín pobytu: ${data.termin || "neuvedené"}`,
    `Počet osôb: ${data.pocet_osob || "neuvedené"}`,
    `Typ prenájmu: ${data.typ_prenajmu || "neuvedené"}`,
    `Typ pobytu: ${data.typ_pobytu || "neuvedené"}`,
    "",
    "Správa:",
    data.sprava || "neuvedené",
  ].join("\n");
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("firma");

  if (typeof honeypot === "string" && honeypot.trim()) {
    return {
      message: "Ďakujeme, dopyt bol prijatý.",
      status: "success",
    };
  }

  const data: Record<ContactField, string> = {
    email: readSingleLine(formData, "email", 180).toLowerCase(),
    meno: readSingleLine(formData, "meno", 160),
    pocet_osob: readSingleLine(formData, "pocet_osob", 3),
    sprava: readValue(formData, "sprava", 3000),
    telefon: readSingleLine(formData, "telefon", 60),
    termin: readSingleLine(formData, "termin", 160),
    typ_pobytu: readSingleLine(formData, "typ_pobytu", 120),
    typ_prenajmu: readSingleLine(formData, "typ_prenajmu", 120),
  };

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!data.meno) {
    fieldErrors.meno = "Uveďte meno a priezvisko.";
  }

  if (!emailPattern.test(data.email)) {
    fieldErrors.email = "Uveďte platný e-mail.";
  }

  if (data.pocet_osob && Number(data.pocet_osob) < 1) {
    fieldErrors.pocet_osob = "Počet osôb musí byť aspoň 1.";
  }

  if (
    data.typ_prenajmu &&
    !rentalTypeOptions.includes(data.typ_prenajmu as (typeof rentalTypeOptions)[number])
  ) {
    fieldErrors.typ_prenajmu = "Vyberte platný typ prenájmu.";
  }

  if (
    data.typ_pobytu &&
    !stayTypeOptions.includes(data.typ_pobytu as (typeof stayTypeOptions)[number])
  ) {
    fieldErrors.typ_pobytu = "Vyberte platný typ pobytu.";
  }

  if (Object.keys(fieldErrors).length) {
    return {
      fieldErrors,
      message: "Skontrolujte, prosím, zvýraznené polia.",
      status: "error",
    };
  }

  try {
    await sendSMTPMail({
      from: process.env.KEYCLOAK_SMTP_FROM ?? contact.email,
      replyTo: data.email,
      subject: `Nový dopyt z webu ${site.name}`,
      text: buildEmailText(data),
      to: contact.email,
    });

    return {
      message:
        "Ďakujeme, dopyt bol odoslaný. Ozveme sa vám s potvrdením dostupnosti termínu.",
      status: "success",
    };
  } catch (error) {
    console.error("Contact form SMTP error", error);

    return {
      message:
        "Dopyt sa nepodarilo odoslať. Skúste to, prosím, neskôr alebo nás kontaktujte telefonicky.",
      status: "error",
    };
  }
}
