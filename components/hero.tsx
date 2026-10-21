import Image from "next/image";
import { CTAButton } from "./cta-button";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "light" | "ghost";
};

type ImageCredit = {
  label: string;
  sourceHref: string;
  licenseLabel: string;
  licenseHref: string;
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imageCredit?: ImageCredit;
  actions?: HeroAction[];
  home?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  imageCredit,
  actions = [],
  home = false,
}: HeroProps) {
  if (home) {
    return (
      <section className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:py-20 lg:pl-12 lg:pr-10 xl:pl-20">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] leading-6 text-[var(--accent)]">{eyebrow}</p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.98] tracking-tight text-[var(--text)] sm:text-7xl xl:text-8xl">{title}</h1>
            <p className="mt-4 font-serif text-3xl leading-tight text-[var(--accent)] sm:text-4xl">Priestor byť spolu.</p>
            <p className="mt-7 max-w-lg text-base leading-8 text-[var(--muted)] sm:text-lg">{subtitle}</p>
            <div className="mt-8 flex flex-col items-start gap-5 xl:flex-row xl:items-center">
              {actions.map((action, index) => (
                <CTAButton href={action.href} key={action.href} variant={index === 0 ? "primary" : "secondary"}>{action.label}</CTAButton>
              ))}
            </div>
            <p className="mt-9 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Súkromná chata v Lutišiach</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[620px]">
            <Image src={image} alt={imageAlt} fill fetchPriority="high" sizes="(max-width: 1023px) 100vw, 60vw" className="object-cover object-center" />
            <div className="absolute bottom-5 left-5 rounded-full bg-[var(--surface)]/95 px-4 py-2 text-xs font-semibold text-[var(--text)] shadow-sm sm:bottom-8 sm:left-8">Dve jednotky. Jeden Pallov Dvor.</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative isolate flex overflow-hidden bg-[var(--dark)] ${
        home ? "min-h-[68svh]" : "min-h-[46svh]"
      }`}
    >
      <Image
        alt={imageAlt}
        className="hero-image object-cover"
        fetchPriority="high"
        fill
        sizes="100vw"
        src={image}
      />
      <div className="hero-overlay absolute inset-0" />
      {imageCredit ? (
        <p className="absolute bottom-3 right-4 z-20 max-w-[calc(100%-2rem)] rounded-full bg-black/30 px-3 py-1 text-right text-[11px] leading-5 text-white/72 backdrop-blur">
          <a
            className="underline decoration-white/30 underline-offset-2 hover:text-white"
            href={imageCredit.sourceHref}
            rel="noreferrer"
            target="_blank"
          >
            {imageCredit.label}
          </a>
          {" · "}
          <a
            className="underline decoration-white/30 underline-offset-2 hover:text-white"
            href={imageCredit.licenseHref}
            rel="noreferrer"
            target="_blank"
          >
            {imageCredit.licenseLabel}
          </a>
        </p>
      ) : null}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="hero-copy max-w-3xl text-white">
          {eyebrow ? (
            <p className="mb-5 text-sm font-semibold uppercase text-white/78">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-serif text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl sm:leading-9">
            {subtitle}
          </p>
          {actions.length ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {actions.map((action, index) => (
                <CTAButton
                  href={action.href}
                  key={`${action.label}-${action.href}`}
                  variant={action.variant ?? (index === 0 ? "light" : "ghost")}
                >
                  {action.label}
                </CTAButton>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
