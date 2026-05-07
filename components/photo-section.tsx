import Image from "next/image";
import { CTAButton } from "./cta-button";
import { SectionHeader } from "./section-header";

type PhotoSectionProps = {
  eyebrow?: string;
  title: string;
  text: string | string[];
  image: string;
  alt: string;
  reverse?: boolean;
  cta?: {
    label: string;
    href: string;
  };
};

export function PhotoSection({
  eyebrow,
  title,
  text,
  image,
  alt,
  reverse = false,
  cta,
}: PhotoSectionProps) {
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <section className="section-pad">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className={reverse ? "lg:order-2" : ""} data-animate>
          <SectionHeader eyebrow={eyebrow} title={title} />
          <div className="mt-5 grid gap-4 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {cta ? (
            <div className="mt-8">
              <CTAButton href={cta.href} variant="secondary">
                {cta.label}
              </CTAButton>
            </div>
          ) : null}
        </div>
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)] shadow-sm ${
            reverse ? "lg:order-1" : ""
          }`}
          data-animate="image"
        >
          <Image
            alt={alt}
            className="object-cover transition duration-700 hover:scale-[1.025]"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={image}
          />
        </div>
      </div>
    </section>
  );
}
