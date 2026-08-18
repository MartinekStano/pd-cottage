import { site } from "@/lib/site-data";
import { SectionHeader } from "./section-header";

export function BookingReviewSection() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
        <div>
          <SectionHeader
            eyebrow="Hodnotenia hostí"
            title="Pozrite si naše hodnotenia na Booking.com"
            text="Aktuálne hodnotenie a skúsenosti hostí nájdete priamo na našom profile na Booking.com."
          />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="rounded-lg bg-[var(--pine)] px-4 py-3 text-center text-white shadow-sm">
              <span className="block font-serif text-3xl leading-none">{site.bookingRating.value}</span>
              <span className="mt-1 block text-xs text-white/75">z 10</span>
            </div>
            <p className="text-sm leading-6 text-[var(--muted)]">
              Skutočne výnimočné<br />
              <span className="font-semibold text-[var(--text)]">{site.bookingRating.reviewCount} hodnotenia</span>
            </p>
          </div>
        </div>
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--dark)] px-6 py-3 text-center text-sm font-semibold text-[var(--surface)] shadow-sm transition hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          href={site.bookingUrl}
          rel="noreferrer"
          target="_blank"
        >
          Zobraziť hodnotenia
        </a>
      </div>
    </section>
  );
}
