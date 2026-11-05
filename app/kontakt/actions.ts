"use server";

import {
  contactForm,
  rentalTypeOptions,
  site,
  stayTypeOptions,
} from "@/lib/site-data";
import { after } from "next/server";
import { buildInquiryConfirmation } from "@/lib/inquiry-confirmation";
import { buildInquiryNotification } from "@/lib/inquiry-notification";
import { sendSMTPMail } from "@/lib/smtp";
import { verifyTurnstileToken } from "@/lib/turnstile";

type ContactField =
  | "email"
  | "meno"
  | "pocet_osob"
  | "sprava"
  | "telefon"
  | "termin_do"
  | "termin_od"
  | "typ_pobytu"
  | "typ_prenajmu";

export type ContactFormState = {
  fieldErrors?: Partial<Record<ContactField, string>>;
  message: string;
  status: "idle" | "error" | "success";
};

// No brackets, quotes or separators: the address ends up in SMTP commands and mail headers.
const emailPattern = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

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

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (!contactForm.enabled) {
    return {
      message: contactForm.unavailableMessage,
      status: "error",
    };
  }

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
    termin_do: readSingleLine(formData, "termin_do", 10),
    termin_od: readSingleLine(formData, "termin_od", 10),
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

  if (data.pocet_osob && (!/^\d{1,3}$/.test(data.pocet_osob) || Number(data.pocet_osob) < 1)) {
    fieldErrors.pocet_osob = "Počet osôb musí byť aspoň 1.";
  }

  if (data.termin_od && !isoDatePattern.test(data.termin_od)) {
    fieldErrors.termin_od = "Uveďte platný dátum príchodu.";
  }

  if (data.termin_do && !isoDatePattern.test(data.termin_do)) {
    fieldErrors.termin_do = "Uveďte platný dátum odchodu.";
  } else if (data.termin_od && data.termin_do && data.termin_od > data.termin_do) {
    fieldErrors.termin_do = "Dátum odchodu musí byť po dátume príchodu.";
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

  const turnstileToken = formData.get("cf-turnstile-response");

  if (!(await verifyTurnstileToken(typeof turnstileToken === "string" ? turnstileToken : ""))) {
    return {
      message: "Nepodarilo sa overiť, že dopyt neposiela robot. Skúste ho, prosím, odoslať znova.",
      status: "error",
    };
  }

  try {
    await sendSMTPMail({
      from: process.env.KEYCLOAK_SMTP_FROM ?? contactForm.recipient,
      fromName: site.name,
      replyTo: data.email,
      to: contactForm.recipient,
      ...buildInquiryNotification({
        email: data.email,
        meno: data.meno,
        pocetOsob: data.pocet_osob,
        receivedAt: new Date(),
        sprava: data.sprava,
        telefon: data.telefon,
        terminDo: data.termin_do,
        terminOd: data.termin_od,
        typPobytu: data.typ_pobytu,
        typPrenajmu: data.typ_prenajmu,
      }),
    });

    // The guest's confirmation goes out after the response, so a slow or failing send never delays or fails the inquiry.
    after(async () => {
      try {
        await sendSMTPMail({
          from: process.env.KEYCLOAK_SMTP_FROM ?? contactForm.recipient,
          fromName: site.name,
          to: data.email,
          ...buildInquiryConfirmation({
            pocetOsob: data.pocet_osob,
            terminDo: data.termin_do,
            terminOd: data.termin_od,
            typPobytu: data.typ_pobytu,
            typPrenajmu: data.typ_prenajmu,
          }),
        });
      } catch (error) {
        console.error("Contact form confirmation SMTP error", error);
      }
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
