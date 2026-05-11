import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { PhotoGallery } from "@/components/photo-gallery";
import { SectionHeader } from "@/components/section-header";
import { galleryImages, images, pageMetadata, site } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Fotogaléria",
  description:
    "Fotogaléria Pallovho Dvora: izby, spoločné priestory, kúpeľne, exteriér, altánok, sauna a vonkajšia kaďa.",
  path: "/fotogaleria",
  image: images.livingKitchen,
});

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Fotogaléria"
        image={images.livingKitchen}
        imageAlt="Obývacia miestnosť s kuchyňou v Pallovom Dvore"
        title="Fotogaléria Pallov Dvor"
        subtitle="Prezrite si izby, spoločné priestory, kúpeľne, exteriér a oddychovú zónu. Kliknutím na fotografiu otvoríte galériu a môžete prechádzať medzi zábermi."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť ubytovanie", href: "/ubytovanie" },
        ]}
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            eyebrow="Priestory chaty"
            title="Izby, spoločné priestory a exteriér"
            text="Výber fotografií ukazuje hlavné časti Pallovho Dvora, od ubytovacích jednotiek až po altánok, gril, saunu a vonkajšiu kaďu."
          />
          <PhotoGallery images={galleryImages} />
        </div>
      </section>

      <CTASection
        title="Páči sa vám Pallov Dvor?"
        text="Pošlite nám nezáväzný dopyt a overte si dostupnosť termínu pre rodinný pobyt, pokojný víkend alebo menšie firemné stretnutie."
        secondary={{ label: "Pozrieť cenník", href: "/cennik" }}
      />
    </>
  );
}
