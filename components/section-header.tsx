type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      data-animate
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
