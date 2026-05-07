import Image from "next/image";
import { CTAButton } from "./cta-button";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "light" | "ghost";
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  actions?: HeroAction[];
  home?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  actions = [],
  home = false,
}: HeroProps) {
  return (
    <section
      className={`relative isolate flex overflow-hidden bg-[var(--dark)] ${
        home ? "min-h-[68svh]" : "min-h-[46svh]"
      }`}
    >
      <Image
        alt={imageAlt}
        className="hero-image object-cover"
        fill
        loading={home ? undefined : "eager"}
        preload={home}
        sizes="100vw"
        src={image}
      />
      <div className="hero-overlay absolute inset-0" />
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
