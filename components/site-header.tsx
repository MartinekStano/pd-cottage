import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/site-data";
import { CTAButton } from "./cta-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          className="group flex min-w-0 items-center gap-3"
          href="/"
          aria-label="Pallov Dvor domov"
        >
          <Image
            alt=""
            className="h-12 w-auto shrink-0 transition duration-300 group-hover:opacity-80 sm:h-14"
            height={333}
            preload
            src={site.brandLogo}
            width={455}
          />
          <span className="flex min-w-0 flex-col">
            <span className="font-serif text-lg leading-none text-[var(--text)] transition group-hover:text-[var(--accent)] sm:text-xl">
              {site.name}
            </span>
            <span className="mt-1 hidden text-xs font-medium uppercase text-[var(--muted)] sm:block">
              {site.subtitle}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavná navigácia">
          {navItems.map((item) => (
            <Link
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href={site.ctaHref}>{site.headerCta}</CTAButton>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)] marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,22rem)] rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl">
            <nav className="grid gap-1" aria-label="Mobilná navigácia">
              {navItems.map((item) => (
                <Link
                  className="rounded-md px-3 py-3 text-base font-medium text-[var(--text)] transition hover:bg-[var(--bg)]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <CTAButton className="mt-3 w-full" href={site.ctaHref}>
              {site.primaryCta}
            </CTAButton>
          </div>
        </details>
      </div>
    </header>
  );
}
