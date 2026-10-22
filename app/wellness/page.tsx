import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PhotoSection } from "@/components/photo-section";
import { ResponsiveTable } from "@/components/responsive-table";
import { SectionHeader } from "@/components/section-header";
import {
  images,
  pageMetadata,
  site,
  wellnessCards,
  wellnessRows,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Chata so saunou a kaďou Lutiše",
  description:
    "Chata so saunou a vonkajšou kaďou v Lutišiach. Pallov Dvor ponúka ubytovanie s oddychovou zónou priamo pri chate.",
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
        subtitle="Teplo sauny, vonkajšia kaďa a chvíľa pre seba. Oddychová zóna je spoločným zázemím oboch jednotiek a využíva sa ako doplnková služba k pobytu."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť cenník", href: "/cennik" },
        ]}
      />

      <PhotoSection
        image={images.sauna}
        alt="Drevený interiér sauny s lavicami v Pallovom Dvore"
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
        image={images.relaxRoom}
        alt="Oddychová miestnosť pri saune s posedením a dreveným stropom"
        eyebrow="Ešte chvíľu nikam"
        title="Oddych má aj svoj vlastný priestor."
        text="Medzi saunovaním si doprajte prestávku v oddychovej miestnosti. Posaďte sa, spomaľte a nechajte večer plynúť. Na spoločné chvíle potom môžete nadviazať pri stole v altánku alebo pri filme."
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

      <CTASection
        title="Doprajte si pokojný relax v Pallovom Dvore"
        text="Overte si dostupnosť termínu a naplánujte si pobyt, kde môžete spojiť súkromné ubytovanie, spoločné chvíle a oddych v saune či vonkajšej kadi."
        secondary={{ label: "Fotografie wellness", href: "/fotogaleria#exterier" }}
      />
    </>
  );
}
