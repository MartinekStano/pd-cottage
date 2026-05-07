type PriceCardProps = {
  title: string;
  price: string;
  text: string;
  items?: string[];
  highlighted?: boolean;
};

export function PriceCard({
  title,
  price,
  text,
  items = [],
  highlighted = false,
}: PriceCardProps) {
  return (
    <article
      className={`motion-card rounded-lg border p-6 shadow-sm ${
        highlighted
          ? "border-[var(--accent)] bg-[var(--dark)] text-[var(--surface)]"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
      } transition duration-300 hover:shadow-lg`}
      data-animate
    >
      <h3 className="font-serif text-2xl leading-tight">{title}</h3>
      <p
        className={`mt-4 font-serif text-4xl ${
          highlighted ? "text-white" : "text-[var(--accent)]"
        }`}
      >
        {price}
      </p>
      <p
        className={`mt-4 text-base leading-7 ${
          highlighted ? "text-white/76" : "text-[var(--muted)]"
        }`}
      >
        {text}
      </p>
      {items.length ? (
        <ul className="mt-5 grid gap-2 text-sm">
          {items.map((item) => (
            <li className="flex gap-2" key={item}>
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
