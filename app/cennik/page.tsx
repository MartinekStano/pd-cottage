import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PriceCard } from "@/components/price-card";
import { ResponsiveTable } from "@/components/responsive-table";
import { SectionHeader } from "@/components/section-header";
import {
  images,
  minimumStay,
  pageMetadata,
  priceCards,
  priceNotes,
  site,
  unitPriceRows,
  wellnessRows,
  wholeObjectPriceRows,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Cenník",
  description:
    "Cenník ubytovania Pallov Dvor pre jednu samostatnú ubytovaciu jednotku, celý objekt a doplnkové využitie sauny a vonkajšej kade.",
  path: "/cennik",
  image: images.pricingHero,
});

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Cenník ubytovania"
        image={images.pricingHero}
        imageAlt="Exteriér chaty Pallov Dvor"
        title="Cenník ubytovania Pallov Dvor"
        subtitle="Vyberte si prenájom jednej samostatnej ubytovacej jednotky alebo celého objektu podľa veľkosti skupiny, termínu a typu pobytu."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Poslať nezáväzný dopyt", href: "/kontakt#formular" },
        ]}
      />

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            title="Rýchly prehľad cien"
            text="Základné ceny sa líšia podľa rozsahu prenájmu, sezóny a dňa v týždni."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {priceCards.map((card, index) => (
              <PriceCard key={card.title} highlighted={index === 1} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <SectionHeader
              eyebrow="1 samostatná jednotka"
              title="Cenník jednej ubytovacej jednotky"
              text="Jedna samostatná jednotka je vhodná pre menší pobyt v súkromí s kapacitou maximálne 8 osôb."
            />
          </div>
          <ResponsiveTable
            caption="Cenník jednej samostatnej ubytovacej jednotky"
            headers={["Obdobie", "Nedeľa - štvrtok", "Piatok - sobota"]}
            rows={unitPriceRows}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Celý objekt"
              title="Cenník prenájmu celého objektu"
              text="Prenájom celého objektu je vhodný pre väčšie rodiny, skupiny dospelých hostí alebo menšie firemné kolektívy. Celková kapacita chaty je maximálne 16 osôb."
            />
          </div>
          <ResponsiveTable
            caption="Cenník prenájmu celého objektu"
            headers={["Obdobie", "Nedeľa - štvrtok", "Piatok - sobota"]}
            rows={wholeObjectPriceRows}
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Dĺžka pobytu"
              title="Minimálna dĺžka pobytu"
              text="Pri vybraných termínoch môže byť minimálna dĺžka pobytu dlhšia. Presné podmienky potvrdíme pri overení dostupnosti."
            />
            <ul className="mt-6 grid gap-3">
              {minimumStay.map((item) => (
                <li
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 text-base font-semibold text-[var(--text)]"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow="Sauna a kaďa"
              title="Doplnkové využitie oddychovej zóny"
              text="Sauna a vonkajšia kaďa sú dostupné ako doplnkové služby k pobytu. Hostia si môžu vybrať samostatné využitie alebo zvýhodnený balík."
            />
            <div className="mt-6">
              <ResponsiveTable
                caption="Ceny doplnkového využitia sauny a vonkajšej kade"
                compact
                headers={["Služba", "Cena"]}
                rows={wellnessRows}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Vybrané termíny"
              title="Silvestrovský pobyt"
              text="Počas Silvestra sa odporúča prenájom celého objektu formou pobytového balíka. Sauna a vonkajšia kaďa môžu byť zahrnuté v cene balíka, aby bol pobyt pre hostí pohodlnejší."
            />
            <div className="mt-8">
              <PriceCard
                highlighted
                title="Silvester - celý objekt"
                price="1 390 € / 3 noci"
                text="Kapacita až 16 osôb. Sauna a vonkajšia kaďa v cene. Vratná kaucia: 200 €."
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ImageCard
              alt="Celý objekt Pallov Dvor"
              image={images.wholeObject}
              title="Celý objekt"
              text="Prenájom oboch samostatných jednotiek pre väčšiu skupinu hostí."
            />
            <ImageCard
              alt="Sauna a vonkajšia kaďa pri chate"
              image={images.wellnessPackage}
              title="Oddychová zóna"
              text="Sauna a vonkajšia kaďa ako doplnok k pobytu."
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">
          <SectionHeader align="center" title="Dôležité informácie" />
          <ul className="mt-8 grid gap-3">
            {priceNotes.map((note) => (
              <li
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 text-base leading-7 text-[var(--muted)]"
                key={note}
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Overte si cenu pre váš termín"
        text="Napíšte nám plánovaný termín, počet osôb a typ pobytu. Radi vám potvrdíme dostupnosť a pripravíme konkrétnu cenovú ponuku."
        secondary={{ label: "Poslať nezáväzný dopyt", href: "/kontakt#formular" }}
      />
    </>
  );
}
