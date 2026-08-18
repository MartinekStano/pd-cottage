import { faqItems } from "@/lib/site-data";
import { SectionHeader } from "./section-header";

export function FAQSection() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
        <SectionHeader
          eyebrow="Časté otázky"
          title="Pred pobytom chcete vedieť"
          text="Zhrnuli sme praktické informácie, ktoré hosťom najčastejšie pomáhajú pri plánovaní pobytu v Pallovom Dvore."
        />
        <div className="grid gap-3">
          {faqItems.map((item) => (
            <details
              className="group rounded-lg border border-[var(--border)] bg-[var(--bg)] px-5 py-4"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--text)] marker:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-normal text-[var(--accent)] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-3 leading-7 text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
