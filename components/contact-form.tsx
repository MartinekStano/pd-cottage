"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";
import { submitContactForm, type ContactFormState } from "@/app/kontakt/actions";
import {
  contact,
  contactForm,
  rentalTypeOptions,
  stayTypeOptions,
} from "@/lib/site-data";
import { ChoiceChips } from "./choice-chips";
import { GuestStepper } from "./guest-stepper";
import { StayDatesField } from "./stay-dates-field";
import { TurnstileWidget } from "./turnstile-widget";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const inputClass =
  "min-h-12 w-full rounded-lg border border-[var(--border-strong)] bg-white/70 px-4 py-3 text-base text-[var(--text)] outline-none transition placeholder:text-[color-mix(in_srgb,var(--muted)_75%,transparent)] hover:border-[var(--accent)] focus:border-[var(--accent)] focus:bg-white focus:ring-4 focus:ring-[color-mix(in_srgb,var(--accent)_16%,transparent)] aria-[invalid=true]:border-[#9b2f24] [color-scheme:light]";

const labelClass = "grid gap-2 text-sm font-semibold text-[var(--text)]";

const sectionTitleClass =
  "text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]";

// Labels and hints for the options validated in app/kontakt/actions.ts.
const rentalChoiceText: Record<string, { label: string; hint: string }> = {
  "1 samostatná ubytovacia jednotka": { label: "Jedna jednotka", hint: "ML alebo PS, do 8 hostí" },
  "Celý objekt": { label: "Celý objekt", hint: "Obe jednotky, do 16 hostí" },
  "Ešte neviem": { label: "Ešte neviem", hint: "Radi vám poradíme" },
};

const rentalChoices = rentalTypeOptions.map((value) => ({ value, ...(rentalChoiceText[value] ?? { label: value }) }));
const stayChoices = stayTypeOptions.map((value) => ({ value, label: value }));

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <span className="text-sm font-medium text-[#9b2f24]">{message}</span>;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  if (!contactForm.enabled) {
    return (
      <section id="formular" className="scroll-mt-36 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8" aria-labelledby="dopyt-title">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">Nezáväzný dopyt</p>
        <h2 id="dopyt-title" className="mt-4 font-serif text-3xl sm:text-4xl">Nájdime termín pre váš pobyt.</h2>
        <p className="mt-5 text-base leading-8 text-[var(--muted)]">Zavolajte nám alebo napíšte e-mail. Radi overíme dostupnosť a pripravíme cenu pre vašu rodinu či skupinu.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--dark)] px-6 py-3 text-sm font-semibold text-[var(--surface)] transition pressable hover:bg-[var(--accent)]" href={contact.phoneHref}>Zavolať {contact.phone}</a>
          <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold transition pressable hover:border-[var(--accent)]" href={contact.emailHref}>Napísať e-mail</a>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-6">
          <h3 className="font-semibold text-[var(--text)]">Čo nám pomôže pri overení termínu</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--muted)]">
            <li>Plánovaný dátum príchodu a odchodu.</li>
            <li>Počet dospelých a detí.</li>
            <li>Jednotka ML (bližšie k ceste), PS (bližšie k saune) alebo celý objekt.</li>
            <li>Či máte záujem aj o saunu alebo vonkajšiu kaďu.</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">Dostupnosť a konečnú cenu vám potvrdíme osobne. Dopyt je nezáväzný.</p>
        </div>
      </section>
    );
  }

  return (
    <form
      aria-labelledby="dopyt-title"
      className="grid scroll-mt-28 gap-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-8"
      id="formular"
      // Submitting through a transition keeps everything the guest filled in when the server returns an error;
      // the form is reset only after a successful send.
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        startTransition(() => formAction(data));
      }}
      ref={formRef}
    >
      <div>
        <p className={sectionTitleClass}>Nezáväzný dopyt</p>
        <h2 className="mt-3 font-serif text-3xl text-[var(--text)] sm:text-4xl" id="dopyt-title">
          Nájdime termín pre váš pobyt
        </h2>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">
          Vyberte termín a pár údajov o pobyte. Dostupnosť a cenu vám potvrdíme
          osobne.
        </p>
      </div>

      <label className="sr-only" htmlFor="firma">
        Firma
      </label>
      <input
        autoComplete="off"
        className="hidden"
        id="firma"
        name="firma"
        tabIndex={-1}
        type="text"
      />

      <section aria-labelledby="dopyt-pobyt" className="grid gap-5">
        <h3 className={sectionTitleClass} id="dopyt-pobyt">
          Pobyt
        </h3>
        <StayDatesField
          fromError={state.fieldErrors?.termin_od}
          toError={state.fieldErrors?.termin_do}
        />
        <GuestStepper
          error={state.fieldErrors?.pocet_osob}
          hint="Celý objekt je pre najviac 16 hostí."
          max={16}
          name="pocet_osob"
        />
        <ChoiceChips
          choices={rentalChoices}
          columns
          error={state.fieldErrors?.typ_prenajmu}
          legend="Čo si chcete prenajať"
          name="typ_prenajmu"
        />
        <ChoiceChips
          choices={stayChoices}
          error={state.fieldErrors?.typ_pobytu}
          legend="Typ pobytu"
          name="typ_pobytu"
        />
      </section>

      <section aria-labelledby="dopyt-kontakt" className="grid gap-5 border-t border-[var(--border)] pt-8">
        <h3 className={sectionTitleClass} id="dopyt-kontakt">
          Kontakt
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={`${labelClass} sm:col-span-2`}>
            Meno a priezvisko
            <input
              aria-invalid={Boolean(state.fieldErrors?.meno)}
              autoComplete="name"
              className={inputClass}
              name="meno"
              required
              type="text"
            />
            <FieldError message={state.fieldErrors?.meno} />
          </label>
          <label className={labelClass}>
            E-mail
            <input
              aria-invalid={Boolean(state.fieldErrors?.email)}
              autoComplete="email"
              className={inputClass}
              name="email"
              required
              type="email"
            />
            <FieldError message={state.fieldErrors?.email} />
          </label>
          <label className={labelClass}>
            <span>
              Telefón <span className="font-normal text-[var(--muted)]">(nepovinné)</span>
            </span>
            <input
              aria-invalid={Boolean(state.fieldErrors?.telefon)}
              autoComplete="tel"
              className={inputClass}
              name="telefon"
              type="tel"
            />
            <FieldError message={state.fieldErrors?.telefon} />
          </label>
          <label className={`${labelClass} sm:col-span-2`}>
            <span>
              Správa <span className="font-normal text-[var(--muted)]">(nepovinné)</span>
            </span>
            <textarea
              aria-invalid={Boolean(state.fieldErrors?.sprava)}
              className={`${inputClass} min-h-32 resize-y`}
              name="sprava"
              placeholder="Napríklad: prídeme s deťmi, máme záujem o saunu a vonkajšiu kaďu…"
            />
            <FieldError message={state.fieldErrors?.sprava} />
          </label>
        </div>
      </section>

      <div className="grid gap-5 border-t border-[var(--border)] pt-8">
        {turnstileSiteKey ? (
          <TurnstileWidget resetSignal={state} siteKey={turnstileSiteKey} />
        ) : null}

        {state.status !== "idle" ? (
          <p
            aria-live="polite"
            className={`rounded-lg border px-4 py-3 text-sm font-medium ${
              state.status === "success"
                ? "border-[color-mix(in_srgb,var(--sage)_45%,var(--border))] bg-[color-mix(in_srgb,var(--sage)_12%,white)] text-[var(--pine)]"
                : "border-[#d7a9a1] bg-[#fff2ef] text-[#9b2f24]"
            }`}
            role={state.status === "error" ? "alert" : "status"}
          >
            {state.message}
          </p>
        ) : null}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[var(--muted)]">
            Dopyt je nezáväzný. Potvrdenie vám pošleme na e-mail.
          </p>
          <button
            className="pressable inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--dark)] px-7 py-3 text-sm font-semibold text-[var(--surface)] transition hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            disabled={isPending}
            type="submit"
          >
            {isPending ? "Odosielam…" : "Odoslať dopyt"}
            {isPending ? null : <span aria-hidden="true">→</span>}
          </button>
        </div>
      </div>
    </form>
  );
}
