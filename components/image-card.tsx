import Image from "next/image";

type ImageCardProps = {
  title: string;
  text?: string;
  image: string;
  alt: string;
  meta?: string;
  aspect?: "wide" | "square" | "tall";
  credit?: {
    label: string;
    sourceHref: string;
    licenseLabel: string;
    licenseHref: string;
  };
};

const aspectClass = {
  wide: "aspect-[4/3]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
};

export function ImageCard({
  title,
  text,
  image,
  alt,
  meta,
  aspect = "wide",
  credit,
}: ImageCardProps) {
  return (
    <article
      className="motion-card overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-300 hover:border-[var(--accent)] hover:shadow-lg"
      data-animate
    >
      <div className={`relative ${aspectClass[aspect]}`}>
        <Image
          alt={alt}
          className="object-cover transition duration-500 hover:scale-[1.03]"
          fill
          sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 3rem), (max-width: 1279px) 33vw, 384px"
          src={image}
        />
      </div>
      <div className="p-6">
        {meta ? (
          <p className="mb-3 text-sm font-semibold uppercase text-[var(--accent)]">
            {meta}
          </p>
        ) : null}
        <h3 className="font-serif text-2xl leading-tight text-[var(--text)]">
          {title}
        </h3>
        {text ? (
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">{text}</p>
        ) : null}
        {credit ? (
          <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
            <a
              className="underline decoration-[var(--border-strong)] underline-offset-2 hover:text-[var(--text)]"
              href={credit.sourceHref}
              rel="noreferrer"
              target="_blank"
            >
              {credit.label}
            </a>
            {" · "}
            <a
              className="underline decoration-[var(--border-strong)] underline-offset-2 hover:text-[var(--text)]"
              href={credit.licenseHref}
              rel="noreferrer"
              target="_blank"
            >
              {credit.licenseLabel}
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
