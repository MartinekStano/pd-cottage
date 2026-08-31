import type { LocalEvent } from "@/lib/events-data";

export function EventCard({
  date,
  month,
  dateTime,
  time,
  title,
  description,
  location,
  category,
  url,
  source,
}: LocalEvent) {
  return (
    <article
      className="motion-card flex h-full flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition duration-300 hover:border-[var(--accent)] hover:shadow-lg"
      data-animate
    >
      <div className="flex items-start gap-4">
        <time
          className="grid min-h-20 w-20 shrink-0 place-content-center rounded-lg bg-[var(--pine)] px-2 text-center text-white"
          dateTime={dateTime}
        >
          <span className="font-serif text-2xl leading-none">{date}</span>
          {month ? (
            <span className="mt-1 text-xs font-semibold tracking-[0.18em] text-white/72">
              {month}
            </span>
          ) : null}
        </time>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase text-[var(--accent)]">
            {category}
          </p>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[var(--text)]">
            {title}
          </h2>
        </div>
      </div>

      <p className="mt-5 text-base leading-7 text-[var(--muted)]">{description}</p>

      <dl className="mt-5 grid gap-3 border-t border-[var(--border)] pt-5 text-sm">
        <div>
          <dt className="font-semibold text-[var(--text)]">Miesto</dt>
          <dd className="mt-0.5 text-[var(--muted)]">{location}</dd>
        </div>
        {time ? (
          <div>
            <dt className="font-semibold text-[var(--text)]">Čas</dt>
            <dd className="mt-0.5 text-[var(--muted)]">{time}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-auto pt-6">
        <a
          className="text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--text)]"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          Program a aktuálne informácie
        </a>
        <p className="mt-2 text-xs leading-5 text-[var(--muted)]">Zdroj: {source}</p>
      </div>
    </article>
  );
}
