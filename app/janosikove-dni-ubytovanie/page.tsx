import type { Metadata } from "next";
import { CTAButton } from "@/components/cta-button";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PhotoSection } from "@/components/photo-section";
import { SectionHeader } from "@/components/section-header";
import {
  absoluteUrl,
  contact,
  imageCredits,
  images,
  janosikoveDniBenefits,
  janosikoveDniOffer,
  pageMetadata,
  site,
} from "@/lib/site-data";

const pageDescription = `Ubytovanie na Jánošíkove dni 2026 blízko Terchovej: Pallov Dvor v Lutišiach je ${janosikoveDniOffer.distance} od festivalu a ponúka akciu na jednu jednotku za ${janosikoveDniOffer.unitPromoPrice} a celý objekt za ${janosikoveDniOffer.wholeObjectPromoPrice}.`;

export const metadata: Metadata = pageMetadata({
  title: "Jánošíkove dni 2026 ubytovanie blízko Terchovej",
  description: pageDescription,
  path: janosikoveDniOffer.href,
  image: images.janosikoveDniHero,
  keywords: [
    "Jánošíkove dni ubytovanie",
    "Jánošíkove dni 2026",
    "ubytovanie Terchová",
    "chata blízko Terchovej",
    "Pallov Dvor Lutiše",
  ],
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl(`${janosikoveDniOffer.href}#webpage`),
      url: absoluteUrl(janosikoveDniOffer.href),
      name: "Ubytovanie na Jánošíkove dni 2026",
      description: pageDescription,
      inLanguage: "sk-SK",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl(`${janosikoveDniOffer.href}#janosikove-dni-2026`),
      },
    },
    {
      "@type": "Event",
      "@id": absoluteUrl(`${janosikoveDniOffer.href}#janosikove-dni-2026`),
      name: janosikoveDniOffer.title,
      startDate: janosikoveDniOffer.eventStartDate,
      endDate: janosikoveDniOffer.eventEndDate,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: janosikoveDniOffer.location,
        address: {
          "@type": "PostalAddress",
          addressLocality: janosikoveDniOffer.location,
          addressCountry: "SK",
        },
      },
      url: janosikoveDniOffer.officialProgramUrl,
    },
    {
      "@type": "Offer",
      "@id": absoluteUrl(`${janosikoveDniOffer.href}#offer-unit`),
      name: "Akcia na 1 samostatnú jednotku počas Jánošíkových dní",
      description: `Cena za 1 samostatnú jednotku ${janosikoveDniOffer.unitPromoPrice} namiesto ${janosikoveDniOffer.unitOriginalPrice} počas festivalového termínu podľa dostupnosti.`,
      price: janosikoveDniOffer.unitPromoPriceValue,
      priceCurrency: janosikoveDniOffer.priceCurrency,
      availability: "https://schema.org/InStock",
      validFrom: "2026-07-27",
      validThrough: janosikoveDniOffer.eventEndDate,
      url: absoluteUrl(janosikoveDniOffer.href),
      seller: {
        "@id": absoluteUrl("/#pallov-dvor"),
      },
      itemOffered: {
        "@type": "Accommodation",
        name: "1 samostatná ubytovacia jednotka v Pallovom Dvore",
      },
    },
    {
      "@type": "Offer",
      "@id": absoluteUrl(`${janosikoveDniOffer.href}#offer-whole-object`),
      name: "Akcia na celý objekt počas Jánošíkových dní",
      description: `Cena za celý objekt ${janosikoveDniOffer.wholeObjectPromoPrice} namiesto ${janosikoveDniOffer.wholeObjectOriginalPrice} počas festivalového termínu podľa dostupnosti.`,
      price: janosikoveDniOffer.wholeObjectPromoPriceValue,
      priceCurrency: janosikoveDniOffer.priceCurrency,
      availability: "https://schema.org/InStock",
      validFrom: "2026-07-27",
      validThrough: janosikoveDniOffer.eventEndDate,
      url: absoluteUrl(janosikoveDniOffer.href),
      seller: {
        "@id": absoluteUrl("/#pallov-dvor"),
      },
      itemOffered: {
        "@type": "Accommodation",
        name: "Celý objekt Pallov Dvor",
      },
    },
  ],
} as const;

const structuredDataScript = JSON.stringify(structuredData).replace(/</g, "\\u003c");

const offerFacts = [
  {
    value: janosikoveDniOffer.eventDateShort,
    label: "termín festivalu",
  },
  {
    value: janosikoveDniOffer.distance,
    label: "Pallov Dvor - Terchová",
  },
  {
    value: janosikoveDniOffer.unitPromoPrice,
    label: "1 samostatná jednotka",
  },
  {
    value: janosikoveDniOffer.wholeObjectPromoPrice,
    label: "celý objekt",
  },
  {
    value: janosikoveDniOffer.wholeObjectCapacity,
    label: "kapacita celého objektu",
  },
];

function OfferPriceCard({
  title,
  oldPrice,
  newPrice,
  savings,
  capacity,
  highlighted = false,
}: {
  title: string;
  oldPrice: string;
  newPrice: string;
  savings: string;
  capacity: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`motion-card rounded-lg border p-6 shadow-sm ${
        highlighted
          ? "border-[var(--accent)] bg-[var(--dark)] text-[var(--surface)]"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
      }`}
      data-animate
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-serif text-2xl leading-tight">{title}</h3>
        <span className="rounded-full bg-[var(--clay)] px-3 py-1 text-xs font-bold uppercase text-white">
          Akcia
        </span>
      </div>
      <div className="mt-6">
        <p
          className={`text-xl font-semibold line-through decoration-2 ${
            highlighted ? "text-white/58" : "text-[var(--muted)]"
          }`}
        >
          {oldPrice}
        </p>
        <p
          className={`mt-1 font-serif text-5xl leading-none ${
            highlighted ? "text-white" : "text-[var(--accent)]"
          }`}
        >
          {newPrice}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
        <span
          className={`rounded-full px-3 py-1 ${
            highlighted
              ? "bg-white/12 text-white"
              : "bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] text-[var(--accent)]"
          }`}
        >
          {savings}
        </span>
        <span
          className={`rounded-full px-3 py-1 ${
            highlighted ? "bg-white/12 text-white" : "bg-[var(--bg)] text-[var(--muted)]"
          }`}
        >
          {capacity}
        </span>
      </div>
      <p className={`mt-5 text-base leading-7 ${highlighted ? "text-white/74" : "text-[var(--muted)]"}`}>
        {janosikoveDniOffer.availabilityNote}
      </p>
    </article>
  );
}

export default function JanosikoveDniAccommodationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataScript }}
      />

      <Hero
        eyebrow="Akcia na festivalový termín"
        image={images.janosikoveDniHero}
        imageAlt="Folklórni hudobníci počas Jánošíkových dní v Terchovej"
        imageCredit={imageCredits.janosikoveDniHero}
        title="Ubytovanie na Jánošíkove dni 2026"
        subtitle={`Jánošíkove dni v Terchovej sa konajú ${janosikoveDniOffer.eventDate}. Pallov Dvor v Lutišiach ponúka súkromné ubytovanie ${janosikoveDniOffer.distance} od Terchovej: 1 samostatná jednotka za ${janosikoveDniOffer.unitPromoPrice}, celý objekt za ${janosikoveDniOffer.wholeObjectPromoPrice}.`}
        actions={[
          { label: site.primaryCta, href: site.ctaHref },
          { label: "Pozrieť cenník", href: "/cennik" },
        ]}
      />

      <section className="soft-band border-b border-[var(--border)]">
        <div className="stagger-list relative z-20 mx-auto grid w-full max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-10">
          {offerFacts.map((fact) => (
            <article
              className="motion-card min-h-32 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
              data-animate
              key={fact.label}
            >
              <p className="font-serif text-2xl leading-tight text-[var(--text)]">
                {fact.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {fact.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]" id="akcia">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Festivalová ponuka"
              title="Cena, ktorú si všimnete hneď"
              text={`Akciové ceny platia pre ubytovanie počas Jánošíkových dní 2026 v Terchovej. Jedna samostatná jednotka je za ${janosikoveDniOffer.unitPromoPrice}, celý objekt za ${janosikoveDniOffer.wholeObjectPromoPrice}.`}
            />
            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Pallov Dvor je vhodný pre hostí, ktorí chcú byť blízko festivalu, ale
              večer sa vrátiť do pokojného, oploteného objektu s vlastným zázemím.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={site.ctaHref}>Overiť dostupnosť akcie</CTAButton>
              <CTAButton href={janosikoveDniOffer.officialProgramUrl} variant="secondary" external>
                Oficiálny program
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <OfferPriceCard
              title="1 samostatná jednotka"
              oldPrice={janosikoveDniOffer.unitOriginalPrice}
              newPrice={janosikoveDniOffer.unitPromoPrice}
              savings={janosikoveDniOffer.unitSavings}
              capacity={janosikoveDniOffer.unitCapacity}
            />
            <OfferPriceCard
              highlighted
              title="Celý objekt"
              oldPrice={janosikoveDniOffer.wholeObjectOriginalPrice}
              newPrice={janosikoveDniOffer.wholeObjectPromoPrice}
              savings={janosikoveDniOffer.wholeObjectSavings}
              capacity={janosikoveDniOffer.wholeObjectCapacity}
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            eyebrow="Atmosféra Terchovej"
            title="Folklórny program, Jánošík a blízkosť Terchovej"
            text="Folklór, ľudová hudba a symbolika Jánošíka patria k Terchovej. Pallov Dvor dáva skupine zázemie blízko programu a zároveň pokoj mimo hlavného ruchu."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ImageCard
              alt="Folklórni hudobníci počas Jánošíkových dní v Terchovej"
              credit={imageCredits.janosikoveDniFolklore}
              image={images.janosikoveDniFolklore}
              meta="Jánošíkove dni"
              title="Festivalová atmosféra"
              text="Folklórny program v Terchovej je hlavným dôvodom, prečo má zmysel riešiť ubytovanie v predstihu."
            />
            <ImageCard
              alt="Socha Juraja Jánošíka v Terchovej"
              credit={imageCredits.janosikStatue}
              image={images.janosikStatue}
              meta="Terchová"
              title="Symbol Jánošíkovho kraja"
              text="Terchová a okolie Malej Fatry sú prirodzeným cieľom pre hostí, ktorí chcú spojiť pobyt s výletom a programom."
            />
          </div>
        </div>
      </section>

      <PhotoSection
        image={images.gazeboEvening}
        alt="Večerný altánok pri chate Pallov Dvor"
        eyebrow="Po programe v súkromí"
        title="Festival v Terchovej, oddych v Lutišiach"
        text={[
          "Po dni v Terchovej sa môžete vrátiť do vlastného zázemia mimo hlavného ruchu festivalu. Chata je praktická pre skupiny, ktoré chcú mať spoločný priestor, kuchyňu, altánok a pohodlné izby.",
          "Ak plánujete Jánošíkove dni ako rodinný alebo priateľský pobyt, celý objekt dáva skupine viac súkromia a flexibilitu počas celého festivalového víkendu.",
        ]}
        cta={{ label: "Pozrieť ubytovanie", href: "/ubytovanie" }}
      />

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            title="Prečo riešiť Jánošíkove dni z Pallovho Dvora"
            text="Blízkosť Terchovej, súkromie a kapacita celého objektu dávajú zmysel najmä pre skupiny, ktoré nechcú riešiť ubytovanie priamo v centre festivalového ruchu."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {janosikoveDniBenefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Jánošíkove dni 2026"
              title="Program v Terchovej od 29. júla do 2. augusta"
              text="Oficiálny program festivalu odporúčame skontrolovať pred cestou, najmä pre presné časy vystúpení, dopravu a parkovanie počas hlavného víkendu."
            />
            <div className="mt-8">
              <CTAButton href={janosikoveDniOffer.officialProgramUrl} variant="secondary" external>
                Otvoriť oficiálny program
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ImageCard
              alt="Celý objekt Pallov Dvor"
              image={images.wholeObject}
              meta="Ubytovanie"
              title="Celý objekt pre skupinu"
              text="Kapacita až 16 osôb v dvoch samostatných jednotkách."
            />
            <ImageCard
              alt="Sauna a vonkajšia kaďa pri chate Pallov Dvor"
              image={images.saunaTub}
              meta="Relax"
              title="Zázemie po festivale"
              text="Sauna, kaďa, altánok a gril ako priestor na spoločný večer."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Overte si voľný termín na Jánošíkove dni"
        text={`Napíšte nám plánovaný počet osôb a termín pobytu. Dostupnosť akcie vám potvrdíme telefonicky na ${contact.phone} alebo cez dopytový formulár.`}
        secondary={{ label: "Pozrieť celý cenník", href: "/cennik" }}
      />
    </>
  );
}
