"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm, type ContactFormState } from "@/app/kontakt/actions";
import {
  contact,
  contactForm,
  rentalTypeOptions,
  stayTypeOptions,
} from "@/lib/site-data";

const inputClass =
  "min-h-12 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-base text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_20%,transparent)] disabled:opacity-60 [color-scheme:light]";

const selectClass = `${inputClass} appearance-none bg-[linear-gradient(45deg,transparent_50%,var(--muted)_50%),linear-gradient(135deg,var(--muted)_50%,transparent_50%)] bg-[length:5px_5px,5px_5px] bg-[position:calc(100%-20px)_52%,calc(100%-15px)_52%] bg-no-repeat pr-11`;

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
  }, [state.status]);

  return (
    <form
      action={formAction}
      className="grid scroll-mt-28 gap-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-7"
      id="formular"
      onSubmit={(event) => {
        if (!contactForm.enabled) {
          event.preventDefault();
        }
      }}
      ref={formRef}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-serif text-3xl text-[var(--text)]">Nezáväzný dopyt</p>
          {!contactForm.enabled ? (
            <span className="rounded-full border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--accent)]">
              {contactForm.statusLabel}
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">
          Vyplňte krátky formulár a uveďte základné informácie o plánovanom
          pobyte. Čím presnejšie údaje pošlete, tým jednoduchšie bude pripraviť
          odpoveď.
        </p>
      </div>

      {!contactForm.enabled ? (
        <div
          className="rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-sm leading-6 text-[var(--muted)]"
          id="formular-wip"
          role="status"
        >
          <p className="font-semibold text-[var(--text)]">
            {contactForm.unavailableMessage}
          </p>
          <p className="mt-1">
            Aktuálne nám môžete zavolať na{" "}
            <a className="font-semibold text-[var(--accent)]" href={contact.phoneHref}>
              {contact.phone}
            </a>{" "}
            alebo napísať na{" "}
            <a className="font-semibold text-[var(--accent)]" href={contact.emailHref}>
              {contact.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <fieldset
        aria-describedby={!contactForm.enabled ? "formular-wip" : undefined}
        className="grid gap-5"
        disabled={!contactForm.enabled}
      >
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

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Meno a priezvisko
            <input
              aria-invalid={Boolean(state.fieldErrors?.meno)}
              className={inputClass}
              name="meno"
              required
              type="text"
            />
            <FieldError message={state.fieldErrors?.meno} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            E-mail
            <input
              aria-invalid={Boolean(state.fieldErrors?.email)}
              className={inputClass}
              name="email"
              required
              type="email"
            />
            <FieldError message={state.fieldErrors?.email} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Telefón
            <input
              aria-invalid={Boolean(state.fieldErrors?.telefon)}
              className={inputClass}
              name="telefon"
              type="tel"
            />
            <FieldError message={state.fieldErrors?.telefon} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Termín od
            <input
              aria-invalid={Boolean(state.fieldErrors?.termin_od)}
              className={inputClass}
              name="termin_od"
              type="date"
            />
            <FieldError message={state.fieldErrors?.termin_od} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Termín do
            <input
              aria-invalid={Boolean(state.fieldErrors?.termin_do)}
              className={inputClass}
              name="termin_do"
              type="date"
            />
            <FieldError message={state.fieldErrors?.termin_do} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Počet osôb
            <input
              aria-invalid={Boolean(state.fieldErrors?.pocet_osob)}
              className={inputClass}
              min="1"
              name="pocet_osob"
              type="number"
            />
            <FieldError message={state.fieldErrors?.pocet_osob} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Typ prenájmu
            <select
              aria-invalid={Boolean(state.fieldErrors?.typ_prenajmu)}
              className={selectClass}
              defaultValue=""
              name="typ_prenajmu"
            >
              <option disabled value="">
                Vyberte možnosť
              </option>
              {rentalTypeOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <FieldError message={state.fieldErrors?.typ_prenajmu} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)] sm:col-span-2">
            Typ pobytu
            <select
              aria-invalid={Boolean(state.fieldErrors?.typ_pobytu)}
              className={selectClass}
              defaultValue=""
              name="typ_pobytu"
            >
              <option disabled value="">
                Vyberte možnosť
              </option>
              {stayTypeOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <FieldError message={state.fieldErrors?.typ_pobytu} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--text)] sm:col-span-2">
            Správa
            <textarea
              aria-invalid={Boolean(state.fieldErrors?.sprava)}
              className={`${inputClass} min-h-36 resize-y`}
              name="sprava"
            />
            <FieldError message={state.fieldErrors?.sprava} />
          </label>
        </div>

        <p className="text-sm leading-6 text-[var(--muted)]">
          Odoslanie formulára je nezáväzné a slúži na overenie dostupnosti
          termínu.
        </p>

        {state.status !== "idle" ? (
          <p
            aria-live="polite"
            className={`rounded-md border px-4 py-3 text-sm font-medium ${
              state.status === "success"
                ? "border-[color-mix(in_srgb,var(--sage)_45%,var(--border))] bg-[color-mix(in_srgb,var(--sage)_12%,white)] text-[var(--pine)]"
                : "border-[#d7a9a1] bg-[#fff2ef] text-[#9b2f24]"
            }`}
            role={state.status === "error" ? "alert" : "status"}
          >
            {state.message}
          </p>
        ) : null}

        <button
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--dark)] px-6 py-3 text-sm font-semibold text-[var(--surface)] transition hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          disabled={!contactForm.enabled || isPending}
          type="submit"
        >
          {!contactForm.enabled
            ? "Formulár pripravujeme"
            : isPending
              ? "Odosielam dopyt..."
              : "Odoslať dopyt"}
        </button>
      </fieldset>
    </form>
  );
}
