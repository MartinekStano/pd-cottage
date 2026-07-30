import Image from "next/image";
import { imageCredits, images, janosikoveDniOffer, site } from "@/lib/site-data";
import { CTAButton } from "./cta-button";

type JanosikoveDniPromoProps = {
  context?: "home" | "pricing";
};

const introText = {
  home: `Festival v Terchovej sa koná ${janosikoveDniOffer.eventDate}. Pallov Dvor v Lutišiach je ${janosikoveDniOffer.distance} od programu a v akcii má už len jednu samostatnú obytnú jednotku.`,
  pricing: `Počas festivalu ${janosikoveDniOffer.title} platí zvýhodnená cena pre poslednú dostupnú samostatnú obytnú jednotku: ${janosikoveDniOffer.unitPromoPrice}.`,
};

function PromoPriceTile({
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
      className={`rounded-lg border p-5 shadow-sm backdrop-blur ${
        highlighted
          ? "border-[var(--clay)] bg-[var(--surface)] text-[var(--text)]"
          : "border-white/24 bg-black/38 text-white"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${
            highlighted
              ? "bg-[var(--clay)] text-white"
              : "bg-[var(--clay)] text-white"
          }`}
        >
          Akcia
        </span>
      </div>
      <div className="mt-5">
        <p
          className={`text-xl font-semibold line-through decoration-2 ${
            highlighted ? "text-[var(--muted)]" : "text-white/68"
          }`}
        >
          {oldPrice}
        </p>
        <p
          className={`mt-1 font-serif text-5xl leading-none ${
            highlighted ? "text-[var(--accent)]" : "text-white"
          }`}
        >
          {newPrice}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
        <span
          className={`rounded-full px-3 py-1 ${
            highlighted
              ? "bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] text-[var(--accent)]"
              : "bg-white/14 text-white"
          }`}
        >
          {savings}
        </span>
        <span
          className={`rounded-full px-3 py-1 ${
            highlighted
              ? "bg-[var(--bg)] text-[var(--muted)]"
              : "bg-white/14 text-white"
          }`}
        >
          {capacity}
        </span>
      </div>
    </article>
  );
}

export function JanosikoveDniPromo({ context = "home" }: JanosikoveDniPromoProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--dark)] text-white">
      <Image
        alt="Horská krajina Malej Fatry pri Terchovej"
        className="object-cover"
        fill
        sizes="100vw"
        src={images.janosikoveDniHero}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,21,18,0.9),rgba(23,21,18,0.72)_48%,rgba(23,21,18,0.48))]" />
      <p className="absolute bottom-3 right-4 z-20 max-w-[calc(100%-2rem)] rounded-full bg-black/30 px-3 py-1 text-right text-[11px] leading-5 text-white/70 backdrop-blur">
        <a
          className="underline decoration-white/30 underline-offset-2 hover:text-white"
          href={imageCredits.janosikoveDniHero.sourceHref}
          rel="noreferrer"
          target="_blank"
        >
          {imageCredits.janosikoveDniHero.label}
        </a>
        {" · "}
        <a
          className="underline decoration-white/30 underline-offset-2 hover:text-white"
          href={imageCredits.janosikoveDniHero.licenseHref}
          rel="noreferrer"
          target="_blank"
        >
          {imageCredits.janosikoveDniHero.licenseLabel}
        </a>
      </p>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-10">
        <div data-animate>
          <p className="mb-3 text-sm font-bold uppercase text-white/74">
            Aktuálna akcia
          </p>
          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
            Jánošíkove dni 2026: ubytovanie blízko Terchovej
          </h2>
          <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg">
            {introText[context]}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={janosikoveDniOffer.href} variant="light">
              Pozrieť akciu
            </CTAButton>
            <CTAButton href={site.ctaHref} variant="ghost">
              Overiť termín
            </CTAButton>
            <CTAButton href={janosikoveDniOffer.officialProgramUrl} variant="ghost" external>
              Oficiálny program
            </CTAButton>
          </div>
        </div>
        <div className="grid gap-4 lg:max-w-xl lg:justify-self-end" data-animate>
          <PromoPriceTile
            highlighted
            title="1 samostatná obytná jednotka"
            oldPrice={janosikoveDniOffer.unitOriginalPrice}
            newPrice={janosikoveDniOffer.unitPromoPrice}
            savings={janosikoveDniOffer.unitSavings}
            capacity={janosikoveDniOffer.unitCapacity}
          />
        </div>
      </div>
    </section>
  );
}
