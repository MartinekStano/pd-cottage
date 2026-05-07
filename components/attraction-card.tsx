import Image from "next/image";

type AttractionCardProps = {
  title: string;
  description: string;
  distance: string;
  category: string;
  suitableFor: string;
  image: string;
  url?: string;
  credit: string;
};

export function AttractionCard({
  title,
  description,
  distance,
  category,
  suitableFor,
  image,
  url,
  credit,
}: AttractionCardProps) {
  return (
    <article
      className="motion-card overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-300 hover:border-[var(--accent)] hover:shadow-lg"
      data-animate
    >
      <div className="relative aspect-[4/3]">
        <Image
          alt={title}
          className="object-cover transition duration-700 hover:scale-[1.025]"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
        />
      </div>
      <div className="grid gap-4 p-6">
        <div>
          <p className="text-sm font-semibold uppercase text-[var(--accent)]">
            {distance}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-tight text-[var(--text)]">
            {title}
          </h3>
        </div>
        <p className="text-base leading-7 text-[var(--muted)]">{description}</p>
        <dl className="grid gap-3 text-sm text-[var(--muted)]">
          <div>
            <dt className="font-semibold text-[var(--text)]">Typ</dt>
            <dd>{category}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--text)]">Vhodné pre</dt>
            <dd>{suitableFor}</dd>
          </div>
        </dl>
        <p className="text-xs leading-5 text-[var(--muted)]">{credit}</p>
        {url ? (
          <a
            className="text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--text)]"
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            Otvoriť zdroj tipu
          </a>
        ) : null}
      </div>
    </article>
  );
}
