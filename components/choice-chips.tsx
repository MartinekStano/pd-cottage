export type Choice = { value: string; label: string; hint?: string };

// Radio group styled as selectable cards; plain radios, so native form reset and validation keep working.
export function ChoiceChips({ name, legend, choices, columns = false, error }: { name: string; legend: string; choices: Choice[]; columns?: boolean; error?: string }) {
  return (
    <fieldset aria-describedby={error ? `${name}-chyba` : undefined} className="grid gap-2">
      <legend className="mb-2 text-sm font-semibold text-[var(--text)]">{legend}</legend>
      <div className={columns ? "grid gap-2 sm:grid-cols-3" : "flex flex-wrap gap-2"}>
        {choices.map((choice) => (
          <label
            className={`pressable relative flex cursor-pointer flex-col justify-center border border-[var(--border-strong)] bg-white/70 text-[var(--text)] transition hover:border-[var(--accent)] has-[:checked]:border-[var(--pine)] has-[:checked]:bg-[var(--pine)] has-[:checked]:text-white has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-[color-mix(in_srgb,var(--accent)_20%,transparent)] ${columns ? "min-h-16 rounded-lg px-4 py-3" : "min-h-11 rounded-full px-4 py-2.5"}`}
            key={choice.value}
          >
            <input className="sr-only" name={name} type="radio" value={choice.value} />
            <span className="text-sm font-semibold">{choice.label}</span>
            {choice.hint ? <span className="mt-0.5 text-xs opacity-75">{choice.hint}</span> : null}
          </label>
        ))}
      </div>
      {error ? <span className="text-sm font-medium text-[#9b2f24]" id={`${name}-chyba`}>{error}</span> : null}
    </fieldset>
  );
}
