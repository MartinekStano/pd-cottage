"use client";

import { useEffect, useRef, useState } from "react";
import { plural } from "@/lib/plural";

const stepButton =
  "pressable flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white text-xl text-[var(--text)] transition hover:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[var(--border-strong)]";

export function GuestStepper({ name, initial = 2, min = 1, max, hint, error }: { name: string; initial?: number; min?: number; max: number; hint?: string; error?: string }) {
  const [count, setCount] = useState(initial);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const form = input.current?.form;
    const reset = () => setCount(initial);
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, [initial]);

  return (
    <div className="grid gap-2">
      <span className="text-sm font-semibold text-[var(--text)]" id={`${name}-label`}>
        Počet osôb
      </span>
      <div
        aria-labelledby={`${name}-label`}
        className="flex items-center justify-between gap-4 rounded-lg border border-[var(--border-strong)] bg-white/70 px-3 py-2"
        role="group"
      >
        <button aria-label="Menej osôb" className={stepButton} disabled={count <= min} onClick={() => setCount(count - 1)} type="button">
          −
        </button>
        <output aria-live="polite" className="text-center text-base font-semibold text-[var(--text)]">
          {plural(count, "osoba", "osoby", "osôb")}
        </output>
        <button aria-label="Viac osôb" className={stepButton} disabled={count >= max} onClick={() => setCount(count + 1)} type="button">
          +
        </button>
      </div>
      <input name={name} readOnly ref={input} type="hidden" value={count} />
      {error ? <span className="text-sm font-medium text-[#9b2f24]">{error}</span> : hint ? <span className="text-sm text-[var(--muted)]">{hint}</span> : null}
    </div>
  );
}
