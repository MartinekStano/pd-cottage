import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { CTAButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { PhotoSection } from "@/components/photo-section";
import { PriceCard } from "@/components/price-card";
import { SectionHeader } from "@/components/section-header";
import { accommodationUnits } from "@/lib/photography";
import { images, pageMetadata, priceCards, site } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({ title: "Ubytovanie Lutiše", description: "Dve samostatné jednotky v Pallovom Dvore: ML (bližšie k ceste) a PS (bližšie k saune). Každá pre 8 hostí s tromi spálňami, kuchyňou a dvoma kúpeľňami.", path: "/ubytovanie", image: images.wholeObject });

export default function AccommodationPage() {
  return (
    <>
      <Hero eyebrow="Ubytovanie v Lutišiach" image={images.wholeObject} imageAlt="Chata Pallov Dvor s dvoma samostatnými jednotkami"
        title="Spolu, s priestorom pre seba."
        subtitle="Dve samostatné jednotky v jednej chate. Každá pre najviac 8 hostí, s vlastnou kuchyňou, obývačkou, tromi spálňami a dvoma kúpeľňami. Alebo celý objekt len pre vás."
        actions={[{ label: site.primaryCta, href: site.ctaHref }, { label: "Pozrieť cenník", href: "/cennik" }]} />
      <nav className="border-b border-[var(--border)] bg-[var(--surface)]" aria-label="Ubytovacie jednotky">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-6 sm:gap-8 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Vyberte si priestor</span>
          {accommodationUnits.map((unit) => <a href={`#${unit.id}`} key={unit.id} className="py-2 text-sm font-semibold text-[var(--accent)] underline underline-offset-8">{unit.title} ↓</a>)}
          <span className="text-sm text-[var(--muted)] lg:ml-auto">Celý objekt · až 16 hostí</span>
        </div>
      </nav>

      {accommodationUnits.map((unit, index) => (
        <section id={unit.id} key={unit.id} className={`section-pad ${index === 1 ? "bg-[var(--surface)]" : ""}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <SectionHeader eyebrow={`Samostatné ubytovanie · ${index + 1} / 2`} title={unit.title} text={unit.description} />
                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">{unit.label}</p>
                <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-[var(--border)] py-5">
                  {[["8", "hostí"], ["3", "spálne"], ["2", "kúpeľne"]].map(([value,label]) => <div key={label}><dt className="text-sm text-[var(--muted)]">{label}</dt><dd className="mt-1 font-serif text-3xl">{value}</dd></div>)}
                </dl>
                <p className="mt-6 text-base leading-7 text-[var(--muted)]">Na prízemí sa býva a stoluje, na poschodí odpočíva. Kúpeľňa so sprchou je na každom podlaží. Samozrejmosťou je Wi-Fi a TV.</p>
                <div className="mt-7"><CTAButton href={site.ctaHref} variant="secondary">Overiť termín</CTAButton></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[unit.living, unit.bedroom].map((photo) => <figure key={photo.src}><div className="relative aspect-[3/4] overflow-hidden rounded-lg"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1023px) 50vw, 30vw" className="object-cover" /></div><figcaption className="mt-3 text-xs leading-5 text-[var(--muted)]">{photo.title} · {photo.floor}</figcaption></figure>)}
              </div>
            </div>
            <div className="mt-12 border-t border-[var(--border)] pt-8">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <h2 className="font-serif text-2xl sm:text-3xl">Tri spálne na pokojné noci</h2>
                <p className="text-sm text-[var(--muted)]">{unit.title} · Poschodie</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {unit.rooms.map((photo) => <figure key={photo.src}><div className="relative aspect-[3/4] overflow-hidden rounded-lg"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) 50vw, 33vw" className="object-cover" /></div><figcaption className="mt-3 text-sm leading-6 text-[var(--muted)]">{photo.title}</figcaption></figure>)}
              </div>
              <Link href={`/fotogaleria#${unit.id}`} className="mt-7 inline-block text-sm font-semibold text-[var(--accent)] underline underline-offset-8">Pozrieť aj kuchyňu, kúpeľne a ďalšie zábery ↗</Link>
            </div>
          </div>
        </section>
      ))}

      <PhotoSection image={images.projector} alt="Spoločenská miestnosť s projektorom a premietacím plátnom" eyebrow="Spoločné zázemie" title="Keď chcete byť všetci spolu."
        text="Obe jednotky dopĺňa spoločenská miestnosť s projektorom. Vonku vás čaká krytý altánok s grilom a oplotený dvor. Priamo pri chate sú štyri parkovacie miesta."
        cta={{ label: "Prezrieť spoločné priestory", href: "/fotogaleria#spolocny-priestor" }} />
      <PhotoSection reverse image={images.saunaTub} alt="Sauna a kúpacia kaďa v spoločnom dvore" eyebrow="Váš čas na oddych" title="Zo spálne len na skok do sauny."
        text="Po výlete si doprajte teplo sauny alebo vonkajšej kade. Oddychová zóna je spoločným zázemím objektu a využíva sa ako doplnková služba k pobytu."
        cta={{ label: "Všetko o wellness", href: "/wellness" }} />
      <section className="section-pad bg-[var(--surface)]"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><SectionHeader eyebrow="Možnosti prenájmu" title="Jednotka alebo celý Pallov Dvor?" text="Vyberte si podľa počtu hostí. Presnú cenu a dostupnosť potvrdíme pre váš termín." /><div className="grid gap-5 sm:grid-cols-2">{priceCards.map((card,index)=><PriceCard key={card.title} highlighted={index === 1} {...card} />)}</div></div></section>
      <CTASection title="Nájdime termín pre váš pobyt." text="Napíšte nám počet hostí a plánovaný termín. Radi vám potvrdíme dostupnosť jednej jednotky alebo celého objektu." secondary={{ label: "Pozrieť cenník", href: "/cennik" }} />
    </>
  );
}
