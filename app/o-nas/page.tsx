import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PhotoSection } from "@/components/photo-section";
import { SectionHeader } from "@/components/section-header";
import { images, pageMetadata, site, values } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "O nás",
  description:
    "Spoznajte Pallov Dvor, súkromnú chatu v obci Lutiše vytvorenú pre pokojné pobyty, rodinné chvíle a menšie firemné stretnutia.",
  path: "/o-nas",
  image: images.aboutExterior,
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="O Pallovom Dvore"
        image={images.aboutExterior}
        imageAlt="Exteriér chaty Pallov Dvor"
        title="O Pallovom Dvore"
        subtitle="Súkromná chata v obci Lutiše vytvorená pre pokojné pobyty, rodinné chvíle, oddych dospelých hostí a menšie firemné stretnutia."
        actions={[{ label: site.primaryCta, href: site.ctaHref }]}
      />

      <PhotoSection
        image={images.aboutInterior}
        alt="Útulný interiér Pallovho Dvora"
        eyebrow="Charakter chaty"
        title="Miesto, kde má pobyt pokojnejšie tempo"
        text={[
          "Pallov Dvor je chata určená pre hostí, ktorí si chcú oddýchnuť od bežného tempa a stráviť čas v súkromí. Atmosféra je postavená na kultivovanom pobyte, spoločných rozhovoroch, rodinnom oddychu a pokojnom stretnutí.",
          "Chata spája praktické vybavenie s útulnou atmosférou. Vďaka dvom samostatným ubytovacím jednotkám ponúka dostatok priestoru aj súkromia pre rodiny, dospelých hostí aj menšie firemné kolektívy.",
        ]}
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Čo u nás nájdete"
              title="Súkromie, komfort a priestor na spoločné chvíle"
              text="Hostia majú k dispozícii pohodlné ubytovanie, spálne, kúpeľne so sprchami, kuchyňu s obývacou miestnosťou, Wi-Fi, TV a spoločenský priestor s projektorom."
            />
            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Exteriér dopĺňa altánok s grilom, sauna, vonkajšia kaďa,
              oplotený objekt a 4 parkovacie miesta priamo pri chate.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ImageCard
              alt="Spoločenský priestor s projektorom"
              image={images.social}
              title="Spoločenský priestor"
              text="Miestnosť s plátnom, projektorom a herným vybavením."
            />
            <ImageCard
              alt="Detail interiéru chaty Pallov Dvor"
              image={images.detail}
              title="Útulné detaily"
              text="Príjemné zázemie pre pobyt s rodinou, dospelými hosťami alebo kolegami."
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader align="center" title="Na čom nám záleží" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <PhotoSection
        reverse
        image={images.exterior}
        alt="Pallov Dvor s exteriérovým priestorom"
        eyebrow="Pre koho je vhodný"
        title="Chata pre hostí, ktorí hľadajú pokoj a pohodlie"
        text="Pallov Dvor je vhodný pre rodiny s deťmi, dospelých hostí, páry, menšie skupiny priateľov aj firemné kolektívy. Každá skupina tu nájde priestor na iný typ pobytu: rodinný víkend, pokojný oddych, pracovné stretnutie alebo relax po aktívnom dni."
      />

      <CTASection
        title="Zažite Pallov Dvor na vlastnom pobyte"
        text="Ak hľadáte súkromnú chatu s pokojnou atmosférou, komfortným vybavením a priestorom na oddych, Pallov Dvor môže byť vhodným miestom pre váš pobyt."
      />
    </>
  );
}
