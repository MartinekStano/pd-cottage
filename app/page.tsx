import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PhotoSection } from "@/components/photo-section";
import { PriceCard } from "@/components/price-card";
import { SectionHeader } from "@/components/section-header";
import { SiteIcon } from "@/components/site-icon";
import {
  homeBenefits,
  images,
  pageMetadata,
  priceCards,
  quickFacts,
  site,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Súkromná chata v Lutišiach",
  description:
    "Pallov Dvor je súkromná chata v obci Lutiše s kapacitou až 16 osôb, saunou, vonkajšou kaďou, altánkom a spoločenským priestorom.",
  path: "/",
  image: images.hero,
});

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Súkromná chata v Lutišiach"
        home
        image={images.hero}
        imageAlt="Exteriér chaty Pallov Dvor v Lutišiach"
        title="Pallov Dvor"
        subtitle="Súkromná chata pre pokojný oddych a spoločné chvíle v obci Lutiše. Komfortné krátkodobé ubytovanie až pre 16 osôb so saunou, vonkajšou kaďou, altánkom s grilom a spoločenským priestorom s projektorom."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť ubytovanie", href: "/ubytovanie" },
        ]}
      />

      <section className="soft-band border-b border-[var(--border)]">
        <div className="stagger-list relative z-20 mx-auto grid w-full max-w-7xl gap-4 px-5 pb-10 pt-6 sm:grid-cols-2 sm:px-8 lg:-mt-12 lg:grid-cols-3 lg:px-10 xl:grid-cols-6">
          {quickFacts.map((fact) => (
            <article
              className="motion-card group min-h-36 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition duration-300 hover:border-[var(--accent)] hover:shadow-lg"
              data-animate
              key={fact.value}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-white">
                <SiteIcon name={fact.icon} />
              </div>
              <p className="mt-5 font-serif text-2xl leading-tight text-[var(--text)]">
                {fact.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{fact.label}</p>
            </article>
          ))}
        </div>
      </section>

      <PhotoSection
        cta={{ label: "Zistiť viac o chate", href: "/o-nas" }}
        eyebrow="Komfort v súkromí"
        image={images.interior}
        alt="Interiér ubytovacej jednotky v Pallovom Dvore"
        title="Komfortné ubytovanie v súkromí"
        text={[
          "Pallov Dvor ponúka pohodlné zázemie pre hostí, ktorí hľadajú pokoj, súkromie a priestor na spoločné chvíle. Chata je vhodná pre rodiny s deťmi, dospelých hostí aj menšie firemné kolektívy.",
          "V interiéri nájdete spálne, dve kúpeľne, kuchyňu s obývacou miestnosťou, Wi-Fi, TV a spoločenský priestor s projektorom. Vonku je k dispozícii altánok s grilom, sauna a vonkajšia kaďa.",
        ]}
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            title="Prečo si vybrať Pallov Dvor"
            text="Pokojné prostredie, praktické vybavenie a reálne zázemie pre pobyt v súkromí."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homeBenefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Prehľad cien"
              title="Ubytovanie od 159 € / noc"
              text="Vyberte si prenájom jednej samostatnej ubytovacej jednotky alebo celého objektu podľa veľkosti skupiny a typu pobytu."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {priceCards.map((card) => (
                <PriceCard key={card.title} {...card} />
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ImageCard
              alt="Sauna a vonkajšia kaďa pri chate"
              image={images.saunaTub}
              meta="Relax"
              title="Sauna a vonkajšia kaďa"
              text="Oddych priamo pri chate ako doplnok k pobytu."
            />
            <ImageCard
              alt="Altánok s posedením v Pallovom Dvore"
              image={images.gazebo}
              meta="Exteriér"
              title="Altánok a gril"
              text="Praktické miesto na spoločné chvíle v oplotenom objekte."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Naplánujte si pokojný pobyt v Pallovom Dvore"
        text="Overte si dostupnosť termínu a pripravte si pobyt v súkromí s komfortným zázemím, saunou, vonkajšou kaďou a priestorom na spoločné chvíle."
        secondary={{ label: "Pozrieť celý cenník", href: "/cennik" }}
      />
    </>
  );
}
