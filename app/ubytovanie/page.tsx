import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PhotoSection } from "@/components/photo-section";
import { PriceCard } from "@/components/price-card";
import { SectionHeader } from "@/components/section-header";
import {
  capacityCards,
  images,
  pageMetadata,
  priceCards,
  rooms,
  site,
  unitLayout,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Ubytovanie",
  description:
    "Ubytovanie v Pallovom Dvore ponúka dve samostatné jednotky, kapacitu až 16 osôb, spálne, kúpeľne, kuchyňu s obývacou miestnosťou a spoločenský priestor.",
  path: "/ubytovanie",
  image: images.interior,
});

export default function AccommodationPage() {
  return (
    <>
      <Hero
        eyebrow="Ubytovanie v Pallovom Dvore"
        image={images.interior}
        imageAlt="Interiér ubytovacej jednotky Pallov Dvor"
        title="Ubytovanie v Pallovom Dvore"
        subtitle="Pohodlné krátkodobé ubytovanie v dvoch samostatných jednotkách s celkovou kapacitou až 16 osôb. Vhodné pre rodiny, dospelých hostí aj menšie firemné kolektívy, ktoré hľadajú súkromie, komfort a praktické zázemie."
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť cenník", href: "/cennik" },
        ]}
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            title="Dve samostatné jednotky, viac súkromia a flexibility"
            text="Pallov Dvor je rozdelený na dve samostatné ubytovacie jednotky. Každá jednotka má kapacitu maximálne 8 osôb, pričom celý objekt poskytuje ubytovanie až pre 16 hostí."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capacityCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <PhotoSection
        reverse
        image={images.livingKitchen}
        alt="Kuchyňa spojená s obývacou miestnosťou"
        eyebrow="Rozloženie jednej jednotky"
        title="Praktické rozloženie pre pohodlný pobyt"
        text="Každá ubytovacia jednotka ponúka dostatok priestoru na oddych, spánok aj spoločné chvíle. Hostia majú k dispozícii tri spálne, dve kúpeľne so sprchami, kuchyňu spojenú s obývacou miestnosťou a jedálenský priestor."
      />

      <section className="bg-[var(--surface)] py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-3 px-5 sm:px-8 lg:px-10">
          {unitLayout.map((item) => (
            <span
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-semibold text-[var(--text)]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            title="Izby a spálne"
            text="Každá jednotka má tri spálne a praktické rozloženie lôžok pre pohodlný pobyt."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {rooms.map((room) => (
              <article
                className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm"
                key={room.title}
              >
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative col-span-2 aspect-[4/3]">
                    <Image
                      alt={room.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      src={room.images[0]}
                    />
                  </div>
                  {room.images.slice(1).map((image) => (
                    <div className="relative aspect-[4/3]" key={image}>
                      <Image
                        alt={room.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 1024px) 50vw, 16vw"
                        src={image}
                      />
                    </div>
                  ))}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl leading-tight text-[var(--text)]">
                    {room.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
                    {room.beds}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {room.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            title="Priestor na spoločné chvíle"
            text="Súčasťou chaty je kuchyňa spojená s obývacou miestnosťou a jedálenským stolom. Hostia majú k dispozícii aj spoločenský priestor s plátnom, projektorom a herným vybavením."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ImageCard
              alt="Obývacia miestnosť s kuchyňou"
              image={images.livingKitchen}
              title="Obývačka s kuchyňou"
            />
            <ImageCard
              alt="Jedálenský priestor Pallov Dvor"
              image={images.dining}
              title="Jedálenský priestor"
            />
            <ImageCard
              alt="Spoločenský priestor s projektorom"
              image={images.projector}
              title="Priestor s projektorom"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Kúpeľne a exteriér"
              title="Dve kúpeľne so sprchami a vybavený vonkajší priestor"
              text="Každá ubytovacia jednotka má dve kúpeľne so sprchami, jednu na prízemí a druhú na poschodí. Pobyt pokračuje aj v exteriéri s altánkom, letnou kuchynkou bez varnej dosky, grilom, vonkajšou kaďou a saunou pre 6 osôb."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ImageCard
              alt="Kúpeľňa na prízemí"
              image={images.bathroomGround}
              title="Kúpeľňa prízemie"
            />
            <ImageCard
              alt="Kúpeľňa na poschodí"
              image={images.bathroomUpper}
              title="Kúpeľňa poschodie"
            />
            <ImageCard
              alt="Altánok pri chate"
              image={images.gazebo}
              title="Altánok"
            />
            <ImageCard
              alt="Gril v exteriéri Pallovho Dvora"
              image={images.grill}
              title="Gril"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <SectionHeader
            eyebrow="Možnosti prenájmu"
            title="Vyberte si jednotku alebo celý objekt"
            text="Cena závisí od sezóny, termínu a rozsahu prenájmu. Sauna a vonkajšia kaďa sú dostupné ako doplnok k pobytu."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {priceCards.map((card, index) => (
              <PriceCard key={card.title} highlighted={index === 1} {...card} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Overte si dostupnosť ubytovania"
        text="Plánujete rodinný pobyt, pokojný víkend alebo menšie firemné stretnutie? Pallov Dvor ponúka komfortné ubytovanie v súkromí s kapacitou až 16 osôb."
        secondary={{ label: "Pozrieť cenník", href: "/cennik" }}
      />
    </>
  );
}
