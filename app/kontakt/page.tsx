import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CTAButton } from "@/components/cta-button";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { ImageCard } from "@/components/image-card";
import { PriceCard } from "@/components/price-card";
import { SectionHeader } from "@/components/section-header";
import { contact, images, pageMetadata, priceCards, site } from "@/lib/site-data";

export const runtime = "nodejs";

const practicalInfo = [
  {
    title: "Pokojné krátkodobé pobyty",
    text: "Chata je určená na oddychové pobyty v súkromí.",
  },
  {
    title: "Kapacita až 16 osôb",
    text: "Pallov Dvor tvoria 2 samostatné ubytovacie jednotky.",
  },
  {
    title: "Oplotený objekt",
    text: "Súkromie dopĺňa praktický exteriér s altánkom a grilom.",
  },
  {
    title: "Parkovanie pri objekte",
    text: "K dispozícii sú 4 parkovacie miesta priamo pri chate.",
  },
  {
    title: "Sauna a vonkajšia kaďa",
    text: "Oddychová zóna je dostupná ako doplnok k pobytu.",
  },
  {
    title: "Cena podľa termínu",
    text: "Presnú cenu a dostupnosť potvrdíme po odoslaní dopytu.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Kontaktujte Pallov Dvor v Lutišiach, overte dostupnosť termínu a pošlite nezáväzný dopyt na pobyt v súkromnej chate.",
  path: "/kontakt",
  image: images.contactHero,
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Kontakt"
        image={images.contactHero}
        imageAlt="Exteriér chaty Pallov Dvor"
        title="Kontaktujte Pallov Dvor"
        subtitle="Plánujete rodinný pobyt, pokojný víkend, oddych v súkromí alebo menšie firemné stretnutie? Napíšte nám a overte si dostupnosť termínu."
        actions={[
          { label: site.primaryCta, href: "#formular" },
          { label: "Poslať nezáväzný dopyt", href: "#formular" },
        ]}
      />

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-10">
          <ContactForm />
          <aside className="grid gap-5">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <p className="font-serif text-3xl text-[var(--text)]">Kontaktné údaje</p>
              <address className="mt-5 grid gap-4 not-italic">
                <a
                  className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-4 text-base font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
                  href={contact.phoneHref}
                >
                  Telefón: {contact.phone}
                </a>
                <a
                  className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-4 text-base font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
                  href={contact.emailHref}
                >
                  E-mail: {contact.email}
                </a>
                <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-4 text-base font-semibold text-[var(--text)]">
                  Adresa: {contact.address}
                </span>
                <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-4 text-base font-semibold text-[var(--text)]">
                  {contact.parking}
                </span>
              </address>
            </div>
            <ImageCard
              alt="Exteriér Pallovho Dvora"
              image={images.contactExterior}
              title="Pallov Dvor"
              text="Súkromná chata v obci Lutiše s komfortným zázemím pre pokojný pobyt."
            />
          </aside>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Poloha chaty"
              title="Kde nás nájdete"
              text="Pallov Dvor sa nachádza v obci Lutiše, Ulica 373. Poloha je vhodná pre hostí, ktorí hľadajú pokojné ubytovanie v súkromí s možnosťou oddychu, výletov a spoločných chvíľ."
            />
            <div className="mt-8">
              <CTAButton external href={contact.mapsHref} variant="secondary">
                Zobraziť v navigácii
              </CTAButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg)] shadow-sm">
            <iframe
              className="h-[22rem] w-full border-0 sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={contact.mapEmbed}
              title="Mapa Pallov Dvor, Lutiše, Ulica 373"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            align="center"
            title="Praktické informácie pred pobytom"
            text="Základné informácie, ktoré sa hodia pri plánovaní dopytu a pobytu."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practicalInfo.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-10">
          <SectionHeader
            eyebrow="Krátky cenník"
            title="Základné ceny ubytovania"
            text="Cena pobytu závisí od sezóny, dňa v týždni, dĺžky pobytu a toho, či máte záujem o jednu samostatnú jednotku alebo celý objekt."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {priceCards.map((card) => (
              <PriceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Naplánujte si pobyt v Pallovom Dvore"
        text="Pošlite nám nezáväzný dopyt a overte si dostupnosť termínu pre váš rodinný pobyt, oddychový víkend alebo menšie firemné stretnutie."
        secondary={{ label: "Pozrieť cenník", href: "/cennik" }}
      />
    </>
  );
}
