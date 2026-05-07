import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PhotoSection } from "@/components/photo-section";
import { ResponsiveTable } from "@/components/responsive-table";
import { SectionHeader } from "@/components/section-header";
import {
  images,
  pageMetadata,
  site,
  wellnessAudience,
  wellnessCards,
  wellnessRows,
} from "@/lib/site-data";

const relaxIdeas = [
  {
    title: "Oddych v súkromí",
    text: "Pokojné tempo pobytu v oplotenom objekte s vlastným zázemím.",
  },
  {
    title: "Večer v teple sauny",
    text: "Príjemné uvoľnenie po výlete, pracovnom programe alebo spoločnom dni.",
  },
  {
    title: "Relax po výlete",
    text: "Návrat z prírody môžete doplniť vonkajšou kaďou a posedením v altánku.",
  },
  {
    title: "Firemný reset",
    text: "Menší kolektív môže spojiť pracovné stretnutie s oddychom v súkromí.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Wellness",
  description:
    "Súkromný oddych v Pallovom Dvore so saunou pre 6 osôb, vonkajšou kaďou a pokojnou atmosférou priamo pri chate.",
  path: "/wellness",
  image: images.wellnessHero,
});

export default function WellnessPage() {
  return (
    <>
      <Hero
        eyebrow="Wellness & Oddych"
        image={images.wellnessHero}
        imageAlt="Sauna a vonkajšia kaďa pri chate Pallov Dvor"
        title="Wellness & Oddych v Pallovom Dvore"
        subtitle="Súkromný relax priamo pri chate. Doprajte si pokojný oddych v saune, vonkajšej kadi a príjemnom prostredí, ktoré je vytvorené pre spomalenie, regeneráciu a spoločné chvíle."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť cenník", href: "/cennik" },
        ]}
      />

      <PhotoSection
        image={images.saunaTub}
        alt="Oddychová zóna so saunou a vonkajšou kaďou"
        eyebrow="Relax v súkromí"
        title="Oddych bez zhonu a rušivého prostredia"
        text="Pallov Dvor ponúka hosťom možnosť oddýchnuť si priamo v areáli chaty. Nájdete tu súkromný priestor, kde si môžete vychutnať pokoj, teplo sauny, vonkajšiu kaďu a príjemnú atmosféru po dni strávenom výletmi, aktivitami alebo spoločným programom."
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader align="center" title="Sauna a vonkajšia kaďa" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {wellnessCards.map((card) => (
              <ImageCard
                alt={card.alt}
                image={card.image}
                key={card.title}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </section>

      <PhotoSection
        reverse
        image={images.gazeboEvening}
        alt="Večerný altánok pri Pallovom Dvore"
        eyebrow="Rituál pokojného večera"
        title="Rituál pokojného večera"
        text="Po dni strávenom v prírode, na výlete alebo spoločným programom si môžete dopriať pokojný večer v Pallovom Dvore. Začnite oddychom v saune, pokračujte posedením vo vonkajšej kadi a večer zakončite v altánku alebo spoločenskom priestore."
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
          <SectionHeader
            eyebrow="Príplatky"
            title="Ceny za saunu a vonkajšiu kaďu"
            text="Sauna a vonkajšia kaďa sú dostupné ako doplnkové služby k pobytu. Zvýhodnený balík je výhodnejší než samostatné objednanie oboch možností."
          />
          <ResponsiveTable
            caption="Ceny za saunu a vonkajšiu kaďu"
            compact
            headers={["Služba", "Cena"]}
            rows={wellnessRows}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader align="center" title="Pre koho je oddychová zóna vhodná" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {wellnessAudience.map((audience) => (
              <FeatureCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader align="center" title="Inšpirácie na relaxačný pobyt" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relaxIdeas.map((idea) => (
              <FeatureCard key={idea.title} {...idea} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Doprajte si pokojný relax v Pallovom Dvore"
        text="Overte si dostupnosť termínu a naplánujte si pobyt, kde môžete spojiť súkromné ubytovanie, spoločné chvíle a oddych v saune či vonkajšej kadi."
        secondary={{ label: "Pozrieť cenník", href: "/cennik" }}
      />
    </>
  );
}
