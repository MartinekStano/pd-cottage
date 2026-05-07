import { site } from "@/lib/site-data";
import { CTAButton } from "./cta-button";

type CTASectionProps = {
  title: string;
  text: string;
  secondary?: {
    label: string;
    href: string;
  };
};

export function CTASection({ title, text, secondary }: CTASectionProps) {
  return (
    <section className="bg-[var(--dark)] text-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-3xl" data-animate>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row" data-animate>
          <CTAButton href={site.ctaHref} variant="light">
            {site.primaryCta}
          </CTAButton>
          {secondary ? (
            <CTAButton href={secondary.href} variant="ghost">
              {secondary.label}
            </CTAButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
