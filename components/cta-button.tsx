import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-[var(--dark)] text-[var(--surface)] shadow-sm hover:bg-[var(--accent)]",
  secondary:
    "border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  light:
    "bg-[var(--surface)] text-[var(--dark)] shadow-sm hover:bg-[var(--bg)]",
  ghost:
    "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CTAButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
