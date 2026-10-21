import Image from "next/image";
import Link from "next/link";
import { accommodationUnits } from "@/lib/photography";
import { SectionHeader } from "./section-header";

export function UnitOverview() {
  return (
    <section className="section-pad" id="jednotky">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Bývanie po vašom"
            title="Jedna chata. Dva vlastné priestory."
            text="Vyberte si jednu samostatnú jednotku pre najviac 8 hostí alebo celý Pallov Dvor pre 16."
          />
          <Link className="shrink-0 text-sm font-semibold text-[var(--accent)] underline underline-offset-8" href="/ubytovanie">
            Všetko o ubytovaní ↗
          </Link>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {accommodationUnits.map((unit) => (
            <article className="group" key={unit.id}>
              <Link className="block" href={`/ubytovanie#${unit.id}`} aria-label={`Pozrieť ubytovanie: ${unit.title}`}>
                <div className="grid grid-cols-[1.1fr_0.9fr] gap-2 overflow-hidden rounded-lg">
                  {[unit.living, unit.bedroom].map((photo) => (
                    <div className="relative aspect-[3/4] overflow-hidden" key={photo.src}>
                      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <h3 className="font-serif text-3xl text-[var(--text)]">{unit.title}</h3>
                  <span className="text-2xl text-[var(--accent)]" aria-hidden="true">↗</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[var(--accent)]">Do 8 hostí · 3 spálne · 2 kúpeľne</p>
                <p className="mt-3 max-w-lg text-base leading-7 text-[var(--muted)]">{unit.description}</p>
              </Link>
              <Link className="mt-5 inline-block text-sm font-semibold text-[var(--accent)] underline underline-offset-8" href={`/fotogaleria#${unit.id}`}>Fotografie tejto jednotky ↗</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
