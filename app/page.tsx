import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { BookingReviewSection } from "@/components/booking-review-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { PhotoSection } from "@/components/photo-section";
import { SectionHeader } from "@/components/section-header";
import { UnitOverview } from "@/components/unit-overview";
import { images, pageMetadata, site } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Chata Lutiše na prenájom",
  description: "Pallov Dvor v Lutišiach: dve samostatné jednotky až pre 16 hostí, sauna, vonkajšia kaďa a súkromný dvor. Pozrite si chatu a overte si termín.",
  path: "/", image: images.hero,
});

export default function Home() {
  return (
    <>
      <Hero
        home eyebrow="Lutiše · Kysuce · Váš spoločný čas"
        image={images.hero} imageAlt="Chata Pallov Dvor so súkromným dvorom v Lutišiach"
        title="Pallov Dvor"
        subtitle="Zostaňte o chvíľu dlhšie. Pri spoločných raňajkách, v teple sauny alebo len tak spolu. Vaše pokojné miesto na Kysuciach."
        actions={[{ label: site.primaryCta, href: site.ctaHref }, { label: "Spoznajte chatu", href: "#jednotky" }]}
      />
      <section className="border-y border-[var(--border)] bg-[var(--surface)]" aria-label="Základné informácie o chate">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-9 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[
            ["Až 16 hostí", "spolu v jednej chate"],
            ["2 jednotky", "každá s vlastným zázemím"],
            ["Sauna a kaďa", "oddýchnite si po svojom"],
            ["Od 159 € / noc", "za jednu jednotku"],
          ].map(([value, label]) => (
            <div key={value}>
              <p className="font-serif text-2xl text-[var(--text)]">{value}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <UnitOverview />

      <PhotoSection
        image={images.saunaTub} alt="Drevená sauna a vonkajšia kúpacia kaďa v dvore Pallovho Dvora"
        eyebrow="Spomaľte. Ste na chate."
        title="Deň vonku. Večer v teple."
        text="Z výletu rovno do sauny, z teplej kade k spoločnému stolu. Oddychová zóna je priamo vo dvore — váš večerný program tak môže byť celkom jednoduchý."
        cta={{ label: "Sauna, kaďa a oddych", href: "/wellness" }}
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeader eyebrow="Miesto na spoločné chvíle" title="Vonku pri stole. Vnútri pri filme." />
            <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">Kryté posedenie s grilom na dlhé obedy a miestnosť s projektorom na pokojné večery. Zázemie pre rodinu, priateľov aj menší pracovný tím.</p>
          </div>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-[1.3fr_0.7fr]">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={images.gazeboCovered} alt="Krytý altánok s veľkým stolom a výhľadom na dvor" fill sizes="(max-width: 767px) 100vw, 65vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 text-sm text-[var(--muted)]">Stôl, pri ktorom sa stretnete všetci.</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src={images.projector} alt="Spoločenská miestnosť so sedačkou a premietacím plátnom" fill sizes="(max-width: 767px) 100vw, 35vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 text-sm text-[var(--muted)]">Na film, rozhovory a chvíle bez zhonu.</figcaption>
            </figure>
          </div>
          <Link className="mt-8 inline-block text-sm font-semibold text-[var(--accent)] underline underline-offset-8" href="/fotogaleria">Pozrieť celú fotogalériu ↗</Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <SectionHeader eyebrow="Jedna jednotka alebo celá chata" title="Koľko vás príde?" text="Jedna jednotka od 159 € za noc, celý objekt od 319 € za noc. Presnú cenu potvrdíme podľa termínu, počtu hostí a dĺžky pobytu." />
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link className="rounded-full bg-[var(--dark)] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[var(--pine)]" href="/cennik">Pozrieť cenník</Link>
            <Link className="rounded-full border border-[var(--border-strong)] px-7 py-4 text-center text-sm font-semibold" href="/atrakcie">Tipy na výlety</Link>
          </div>
        </div>
      </section>
      <FAQSection />
      <BookingReviewSection />
      <CTASection title="Doprajte si pár dní spolu." text="Vyberte si termín a ozvite sa nám. Radi vám pomôžeme naplánovať pobyt v Pallovom Dvore." secondary={{ label: "Pozrieť ubytovanie", href: "/ubytovanie" }} />
    </>
  );
}
