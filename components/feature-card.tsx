type FeatureCardProps = {
  title: string;
  text: string;
  eyebrow?: string;
};

export function FeatureCard({ title, text, eyebrow }: FeatureCardProps) {
  return (
    <article
      className="motion-card rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition duration-300 hover:border-[var(--accent)] hover:shadow-lg"
      data-animate
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="font-serif text-2xl leading-tight text-[var(--text)]">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-[var(--muted)]">{text}</p>
    </article>
  );
}
