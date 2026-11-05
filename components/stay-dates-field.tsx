"use client";

import { differenceInCalendarDays, format, startOfToday } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { sk } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { plural } from "@/lib/plural";

const isoDate = (date: Date | undefined) => (date ? format(date, "yyyy-MM-dd") : "");
const displayDate = (date: Date) => format(date, "EEEEEE d. M. yyyy", { locale: sk });

// Arrival–departure picker; submits ISO dates in hidden `termin_od` / `termin_do` inputs.
export function StayDatesField({ fromError, toError }: { fromError?: string; toError?: string }) {
  const [range, setRange] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);
  const [months, setMonths] = useState(1);
  const trigger = useRef<HTMLButtonElement>(null);
  const fromInput = useRef<HTMLInputElement>(null);
  const nights = range?.from && range.to ? differenceInCalendarDays(range.to, range.from) : 0;
  const error = fromError ?? toError;

  // The form is reset natively after a successful submit; clear the picker with it.
  useEffect(() => {
    const form = fromInput.current?.form;
    const reset = () => {
      setRange(undefined);
      setOpen(false);
    };
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, []);

  function toggle() {
    if (!open) {
      setMonths(window.matchMedia("(min-width: 1280px)").matches ? 2 : 1);
    }
    setOpen(!open);
  }

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  function select(next: DateRange | undefined) {
    setRange(next);
    if (next?.from && next.to) {
      close();
    }
  }

  const hint = !range?.from ? "Vyberte deň príchodu" : !range.to ? "Teraz vyberte deň odchodu" : plural(nights, "noc", "noci", "nocí");

  return (
    <div className="grid gap-2">
      <span className="text-sm font-semibold text-[var(--text)]" id="termin-label">
        Termín pobytu
      </span>
      <button
        aria-controls="termin-kalendar"
        aria-describedby={error ? "termin-chyba" : undefined}
        aria-expanded={open}
        aria-labelledby="termin-label"
        className={`grid grid-cols-2 overflow-hidden rounded-lg border bg-white/70 text-left transition hover:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--accent)_16%,transparent)] ${open || error ? "border-[var(--accent)]" : "border-[var(--border-strong)]"}`}
        onClick={toggle}
        ref={trigger}
        type="button"
      >
        {(["Príchod", "Odchod"] as const).map((label, index) => {
          const date = index === 0 ? range?.from : range?.to;
          return (
            <span className={`grid gap-0.5 px-4 py-3 ${index ? "border-l border-[var(--border)]" : ""}`} key={label}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{label}</span>
              <span className={date ? "font-semibold text-[var(--text)]" : "text-[var(--muted)]"}>
                {date ? displayDate(date) : "Pridať dátum"}
              </span>
            </span>
          );
        })}
      </button>
      {nights > 0 && !open ? (
        <p className="text-sm text-[var(--muted)]">
          {plural(nights, "noc", "noci", "nocí")} ·{" "}
          <button className="font-semibold text-[var(--accent)] underline-offset-2 hover:underline" onClick={toggle} type="button">
            zmeniť termín
          </button>
        </p>
      ) : null}
      <input name="termin_od" readOnly ref={fromInput} type="hidden" value={isoDate(range?.from)} />
      <input name="termin_do" readOnly type="hidden" value={isoDate(range?.to)} />

      {open ? (
        <div
          aria-label="Výber termínu pobytu"
          className="stay-calendar rounded-lg border border-[var(--border)] bg-white p-3 shadow-lg transition duration-200 starting:-translate-y-1 starting:opacity-0 sm:p-4"
          id="termin-kalendar"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.stopPropagation();
              close();
            }
          }}
          role="group"
        >
          <DayPicker
            animate
            defaultMonth={range?.from ?? startOfToday()}
            disabled={{ before: startOfToday() }}
            excludeDisabled
            locale={sk}
            min={1}
            mode="range"
            numberOfMonths={months}
            onSelect={select}
            resetOnSelect
            selected={range}
            startMonth={startOfToday()}
          />
          <div className="mt-2 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-3 text-sm">
            <span aria-live="polite" className="text-[var(--muted)]">{hint}</span>
            <span className="flex gap-4">
              {range?.from ? (
                <button className="font-semibold text-[var(--muted)] hover:text-[var(--text)]" onClick={() => setRange(undefined)} type="button">
                  Vymazať
                </button>
              ) : null}
              <button className="font-semibold text-[var(--accent)] hover:text-[var(--text)]" onClick={close} type="button">
                Hotovo
              </button>
            </span>
          </div>
        </div>
      ) : null}

      {error ? (
        <span className="text-sm font-medium text-[#9b2f24]" id="termin-chyba">
          {error}
        </span>
      ) : null}
    </div>
  );
}
