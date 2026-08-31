import type { Metadata } from "next";
import { AttractionCard } from "@/components/attraction-card";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { PhotoSection } from "@/components/photo-section";
import { SectionHeader } from "@/components/section-header";
import {
  attractionTypes,
  contact,
  images,
  pageMetadata,
  site,
  stayIdeas,
  summerAttractions,
  winterAttractions,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Chata Lutiše a výlety v okolí",
  description:
    "Letné a zimné atrakcie pri chate v Lutišiach: Jánošíkove diery, Vrátna, Veľká Rača, Vychylovka, Strečno aj lyžovanie na Kysuciach.",
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
        subtitle="Vyberte si program podľa ročného obdobia. V lete vás čaká turistika, lanovky, pamiatky a rodinné atrakcie, v zime lyžovanie, skialp, bežkovanie aj pokojné prechádzky."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Aktuálne udalosti", href: "/aktualne-udalosti" },
        ]}
      />

      <PhotoSection
        image={images.gazeboEvening}
        alt="Večerný altánok pri chate Pallov Dvor"
        eyebrow="Pobyt a výlety"
        title="Oddych na chate aj aktívne dni v okolí"
        text={[
          "Pallov Dvor ponúka príjemné zázemie pre hostí, ktorí chcú počas pobytu spojiť oddych a zážitky na Kysuciach. Ráno môžete vyraziť na prechádzku, výlet alebo nenáročnú aktivitu v okolí a večer sa vrátiť do súkromia chaty.",
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

      <section className="section-pad" id="leto">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Leto a teplejšie dni"
            title="Letné atrakcie a výlety"
            text="Turistika, lanovky, kultúra aj rodinné atrakcie. Vzdialenosti sú orientačné; prevádzku, počasie a podmienky na trase si pred výletom overte cez odkaz pri každom tipe."
          />
          <div className="stagger-list mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {summerAttractions.map((attraction) => (
              <AttractionCard key={attraction.title} {...attraction} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]" id="zima">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Zima a sneh"
            title="Zimné atrakcie v okolí"
            text="Tipy na lyžovanie, skialp, bežkovanie a zimné výlety. Horské strediská menia prevádzku podľa snehu, vetra a počasia, preto si v deň návštevy skontrolujte aktuálny stav."
          />
          <div className="stagger-list mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {winterAttractions.map((attraction) => (
              <AttractionCard key={attraction.title} {...attraction} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
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
