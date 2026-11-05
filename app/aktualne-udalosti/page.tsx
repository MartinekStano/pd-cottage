import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { EventCard } from "@/components/event-card";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { novemberEvents, ongoingExhibitions } from "@/lib/events-data";
import { images, pageMetadata, site } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Aktuálne udalosti v okolí – november 2026",
  description:
    "Podujatia v okolí Pallovho Dvora počas novembra 2026: koncerty, divadlo, rozprávky pre deti, film, vianočné trhy a výstavy v Žiline, Čadci, Terchovej a na Kysuciach.",
  path: "/aktualne-udalosti",
  image: images.attractionsHero,
  keywords: [
    "podujatia v okolí Lutiší november 2026",
    "podujatia Žilina november 2026",
    "vianočné trhy Žilina 2026",
    "udalosti Čadca",
    "program v okolí Lutiší",
  ],
});

export default function CurrentEventsPage() {
  return (
    <>
      <Hero
        eyebrow="Kalendár podujatí · november 2026"
        image={images.attractionsHero}
        imageAlt="Horská krajina v okolí Pallovho Dvora"
        title="Aktuálne udalosti v okolí"
        subtitle="Vybrali sme koncerty, divadlo, rodinné podujatia, prvé vianočné trhy aj prebiehajúce výstavy, ktoré môžete spojiť s novembrovým pobytom v Pallovom Dvore."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť atrakcie", href: "/atrakcie" },
        ]}
      />

      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-8 text-sm leading-6 text-[var(--muted)] sm:px-8 md:grid-cols-[auto_1fr] md:items-center md:gap-8 lg:px-10">
          <p className="font-semibold uppercase text-[var(--accent)]">
            Aktualizované 5. novembra 2026
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
            eyebrow="November 2026"
            title="Čo môžete zažiť v novembri"
            text="Zostávajúci novembrový program v Žiline, Čadci, Terchovej, Kysuckom Novom Meste a okolí, overený k 5. novembru. Koncom mesiaca sa začína advent a prvé vianočné trhy."
          />
          <div className="stagger-list mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {novemberEvents.map((event) => (
              <EventCard key={`${event.date}-${event.title}`} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--border)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Prebiehajúce výstavy"
            title="Tipy aj mimo konkrétneho termínu"
            text="Tieto výstavy môžete navštíviť počas novembrového pobytu. Dátum na karte označuje koniec výstavy; pred cestou si overte otváracie hodiny a vstupné."
          />
          <div className="stagger-list mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ongoingExhibitions.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
          <SectionHeader
            eyebrow="Praktický tip"
            title="Vyberte si program podľa nálady aj počasia"
            text="Na podujatia v Žiline, Čadci a okolí počítajte s cestou autom. Skanzen vo Vychylovke je od novembra zatvorený; výnimočne bude otvorený 6. decembra a 27. – 30. decembra od 10:00 do 15:00."
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
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--accent)] transition pressable hover:border-[var(--accent)] hover:text-[var(--text)]"
                href="https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021"
                rel="noreferrer"
                target="_blank"
              >
                Kysucké múzeum – podujatia vo Vychylovke
              </a>
              <a
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--accent)] transition pressable hover:border-[var(--accent)] hover:text-[var(--text)]"
                href="https://kultura.mestocadca.sk/kulturne-podujatia"
                rel="noreferrer"
                target="_blank"
              >
                Dom kultúry v Čadci – aktuálny program
              </a>
              <a
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--accent)] transition pressable hover:border-[var(--accent)] hover:text-[var(--text)]"
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
        title="Spojte novembrový pobyt so zážitkom v okolí"
        text="Vyberte si podujatie, naplánujte si výlet a večer sa vráťte do súkromia Pallovho Dvora so saunou a vonkajšou kaďou."
        secondary={{ label: "Pozrieť atrakcie", href: "/atrakcie" }}
      />
    </>
  );
}
