import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { EventCard } from "@/components/event-card";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { septemberEvents } from "@/lib/events-data";
import { images, pageMetadata, site } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Aktuálne udalosti v okolí – september 2026",
  description:
    "Podujatia v okolí Pallovho Dvora počas septembra 2026: koncerty, festivaly, rodinný program, kultúra a šport v Čadci a Žiline.",
  path: "/aktualne-udalosti",
  image: images.attractionsHero,
  keywords: [
    "podujatia Kysuce september 2026",
    "podujatia Žilina september 2026",
    "udalosti Čadca",
    "program v okolí Lutiší",
  ],
});

export default function CurrentEventsPage() {
  return (
    <>
      <Hero
        eyebrow="Kalendár podujatí · september 2026"
        image={images.attractionsHero}
        imageAlt="Horská krajina v okolí Pallovho Dvora"
        title="Aktuálne udalosti v okolí"
        subtitle="Vybrali sme kultúrne, rodinné, gastronomické a športové podujatia, ktoré môžete spojiť so septembrovým pobytom v Pallovom Dvore."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť atrakcie", href: "/atrakcie" },
        ]}
      />

      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-8 text-sm leading-6 text-[var(--muted)] sm:px-8 md:grid-cols-[auto_1fr] md:items-center md:gap-8 lg:px-10">
          <p className="font-semibold uppercase text-[var(--accent)]">
            Aktualizované 31. augusta 2026
          </p>
          <p>
            Termíny sme overili na stránkach organizátorov a mestských kultúrnych
            inštitúcií. Program sa môže zmeniť, preto si pred cestou otvorte odkaz
            pri vybranom podujatí.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="September 2026"
            title="Čo sa deje v Čadci a Žiline"
            text="Výber pokrýva celý mesiac – od prvého septembrového víkendu až po podujatie, ktoré pokračuje začiatkom októbra."
          />
          <div className="stagger-list mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {septemberEvents.map((event) => (
              <EventCard key={`${event.date}-${event.title}`} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
          <SectionHeader
            eyebrow="Praktický tip"
            title="Vyberte si program podľa nálady aj počasia"
            text="Na podujatia v Žiline a Čadci počítajte s cestou autom. Ak sa zmení počasie, kultúrny program je príjemnou alternatívou k turistike."
          />
          <div
            className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-8"
            data-animate
          >
            <h2 className="font-serif text-2xl text-[var(--text)]">
              Ďalšie kalendáre, ktoré sa oplatí sledovať
            </h2>
            <div className="mt-5 grid gap-3">
              <a
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
                href="https://kulturneleto.eu/podujatia/"
                rel="noreferrer"
                target="_blank"
              >
                Žilinské kultúrne leto – všetky podujatia
              </a>
              <a
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
                href="https://www.kultura.mestocadca.sk/kulturne-podujatia.html"
                rel="noreferrer"
                target="_blank"
              >
                Dom kultúry v Čadci – aktuálny program
              </a>
              <a
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
                href="https://www.tikzilina.eu/"
                rel="noreferrer"
                target="_blank"
              >
                Turistická informačná kancelária mesta Žilina
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Spojte septembrový pobyt so zážitkom v okolí"
        text="Vyberte si podujatie, naplánujte si výlet a večer sa vráťte do súkromia Pallovho Dvora so saunou a vonkajšou kaďou."
        secondary={{ label: "Pozrieť atrakcie", href: "/atrakcie" }}
      />
    </>
  );
}
