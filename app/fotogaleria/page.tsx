import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { PhotoGallery } from "@/components/photo-gallery";
import { SectionHeader } from "@/components/section-header";
import { accommodationUnits, propertyPhotos } from "@/lib/photography";
import { images, pageMetadata, site } from "@/lib/site-data";

const sharedAlbums = [
  { id: "spolocny-priestor", title: "Spoločný priestor", text: "Spoločenská miestnosť s posedením a projektorom pre hostí oboch jednotiek.", photos: propertyPhotos.filter((photo) => photo.group === "Spoločný priestor") },
  { id: "exterier", title: "Exteriér a wellness", text: "Dvor, kryté posedenie, gril, sauna a vonkajšia kaďa. Spoločné zázemie Pallovho Dvora.", photos: propertyPhotos.filter((photo) => photo.group === "Exteriér a wellness") },
];

export const metadata: Metadata = pageMetadata({
  title: "Fotogaléria chaty Lutiše",
  description: "41 fotografií Pallovho Dvora v samostatných albumoch: jednotky ML a PS, spoločenská miestnosť a exteriér s wellness.",
  path: "/fotogaleria", image: images.wholeObject,
});

export default function GalleryPage() {
  return (
    <>
      <Hero eyebrow="Spoznajte každý kút" image={images.wholeObject} imageAlt="Pallov Dvor a jeho súkromný dvor" title="Nahliadnite k nám."
        subtitle="Každá jednotka má svoj vlastný album. Prezrite si jej prízemie aj poschodie a potom spoznajte priestory, ktoré dopĺňajú pobyt v oboch jednotkách."
        actions={[{ label: site.primaryCta, href: site.ctaHref }, { label: "Pozrieť ubytovanie", href: "/ubytovanie" }]} />

      <nav className="border-b border-[var(--border)] bg-[var(--surface)]" aria-label="Albumy fotografií">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[...accommodationUnits, ...sharedAlbums].map((album) => (
            <a href={`#${album.id}`} key={album.id} className="flex items-center justify-between gap-3 rounded-lg border border-[var(--border)] px-4 py-4 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              {album.title}<span className="shrink-0 text-xs text-[var(--muted)]">{album.photos.length} {album.photos.length < 5 ? "zábery" : "záberov"} ↓</span>
            </a>
          ))}
        </div>
      </nav>

      {accommodationUnits.map((unit, index) => (
        <section key={unit.id} id={unit.id} className={`section-pad ${index === 1 ? "bg-[var(--surface)]" : ""}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionHeader eyebrow={`Ubytovacia jednotka · ${index + 1} / 2`} title={unit.title} text="Vlastná kuchyňa, obývačka, tri spálne a dve kúpeľne pre najviac 8 hostí." />
              <Link className="shrink-0 text-sm font-semibold text-[var(--accent)] underline underline-offset-8" href={`/ubytovanie#${unit.id}`}>Viac o tejto jednotke ↗</Link>
            </div>
            <PhotoGallery images={unit.photos} filterBy="floor" label={unit.title} />
          </div>
        </section>
      ))}

      {sharedAlbums.map((album, index) => (
        <section key={album.id} id={album.id} className={`section-pad ${index === 1 ? "bg-[var(--surface)]" : ""}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeader eyebrow="Spoločné zázemie" title={album.title} text={album.text} />
            <PhotoGallery images={album.photos} filterBy={false} label={album.title} />
          </div>
        </section>
      ))}

      <CTASection title="Už viete, kde si oddýchnete?" text="Napíšte nám svoj termín a počet hostí. Radi vám potvrdíme dostupnosť jednej jednotky alebo celej chaty." secondary={{ label: "Pozrieť cenník", href: "/cennik" }} />
    </>
  );
}
