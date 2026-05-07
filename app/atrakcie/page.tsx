import type { Metadata } from "next";
import { AttractionCard } from "@/components/attraction-card";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { PhotoSection } from "@/components/photo-section";
import { SectionHeader } from "@/components/section-header";
import {
  attractionTypes,
  attractions,
  contact,
  images,
  pageMetadata,
  site,
  stayIdeas,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Atrakcie",
  description:
    "Tipy na výlety a zážitky v okolí Pallovho Dvora: Vrátna dolina, Jánošíkove diery, Terchová, Veľká Rača, Vychylovka a Hrad Strečno.",
  path: "/atrakcie",
  image: images.attractionsHero,
});

export default function AttractionsPage() {
  return (
    <>
      <Hero
        eyebrow="Atrakcie a zážitky v okolí"
        image={images.attractionsHero}
        imageAlt="Horská krajina Malej Fatry"
        title="Atrakcie a zážitky v okolí Pallovho Dvora"
        subtitle="Spojte pokojný pobyt v súkromí s výletmi, prechádzkami, aktivitami v prírode a objavovaním okolia. Pallov Dvor je vhodným miestom pre hostí, ktorí chcú oddychovať a dopriať si aj príjemný program."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Kontaktovať nás", href: "/kontakt" },
        ]}
      />

      <PhotoSection
        image={images.gazeboEvening}
        alt="Večerný altánok pri chate Pallov Dvor"
        eyebrow="Pobyt a výlety"
        title="Oddych na chate aj aktívne dni v okolí"
        text={[
          "Pallov Dvor ponúka príjemné zázemie pre hostí, ktorí chcú počas pobytu spojiť oddych a zážitky. Ráno môžete vyraziť na prechádzku, výlet alebo nenáročnú aktivitu v okolí a večer sa vrátiť do súkromia chaty.",
          "Po návrate môžete využiť altánok s grilom, spoločenský priestor, saunu alebo vonkajšiu kaďu. Vďaka tomu je pobyt vhodný pre rodiny s deťmi, páry, dospelých hostí aj menšie firemné kolektívy.",
        ]}
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            title="Čo môžete počas pobytu zažiť"
            text="Okolie Lutiší ponúka pokojný program aj aktívnejšie výlety pre rôzne typy pobytov."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {attractionTypes.map((type) => (
              <FeatureCard key={type.title} {...type} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            title="Odporúčané miesta v okolí"
            text="Vzdialenosti a časy sú orientačné. Pred výletom odporúčame overiť aktuálne podmienky priamo pri zvolenom mieste."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.title} {...attraction} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader align="center" title="Inšpirácie na pobyt v Pallovom Dvore" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stayIdeas.map((idea) => (
              <FeatureCard key={idea.title} {...idea} />
            ))}
          </div>
        </div>
      </section>

      <PhotoSection
        reverse
        image={images.social}
        alt="Spoločenský priestor v Pallovom Dvore"
        eyebrow="Návrat do súkromia"
        title="Po zážitkoch vás čaká pokojné zázemie"
        text="Najväčšou výhodou pobytu v Pallovom Dvore je možnosť spojiť program v okolí so súkromím vlastnej chaty. Po výlete alebo spoločnej aktivite si môžete oddýchnuť v spoločenskom priestore, posedieť v altánku, pripraviť si jedlo na grile alebo si dopriať relax v saune a vonkajšej kadi."
        cta={{ label: "Kontaktovať nás", href: "/kontakt" }}
      />

      <CTASection
        title="Naplánujte si pobyt s oddychom aj zážitkami"
        text={`Vyberte si termín, ktorý vám vyhovuje, a spojte komfortné ubytovanie v súkromí s výletmi, aktivitami a pokojnými večermi v Pallovom Dvore. Ozvite sa nám na ${contact.phone} alebo cez dopytový formulár.`}
        secondary={{ label: "Kontaktovať nás", href: "/kontakt" }}
      />
    </>
  );
}
