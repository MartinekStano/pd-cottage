import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/site-data";
import { CTAButton } from "./cta-button";

const desktopLinkBase =
  "whitespace-nowrap rounded-full py-2 text-sm font-semibold transition";
const desktopLinkPlain =
  "px-3 text-[var(--muted)] hover:bg-[var(--bg)] hover:text-[var(--text)]";
const desktopLinkFeatured =
  "border border-[var(--clay)] bg-[var(--clay)] px-4 text-white shadow-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]";
const mobileLinkBase = "rounded-md px-3 py-3 text-base font-medium transition";
const mobileLinkPlain = "text-[var(--text)] hover:bg-[var(--bg)]";
const mobileLinkFeatured =
  "border border-[var(--clay)] bg-[var(--clay)] text-white shadow-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-28 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:min-h-32 sm:px-8 lg:px-10">
        <Link
          className="group flex min-w-0 items-center gap-3"
          href="/"
          aria-label="Pallov Dvor domov"
        >
          <Image
            alt={site.name}
            className="h-20 w-auto shrink-0 transition duration-300 group-hover:opacity-80 sm:h-24"
            height={887}
            preload
            src={site.brandLogo}
            width={1774}
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Hlavná navigácia">
          {navItems.map((item) =>
            item.children?.length ? (
              <div className="group relative" key={item.href}>
                <Link
                  className={`${desktopLinkBase} ${desktopLinkPlain} flex items-center gap-1.5`}
                  href={item.href}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="mt-[-3px] h-1.5 w-1.5 rotate-45 border-b border-r border-current transition group-hover:rotate-[225deg] group-focus-within:rotate-[225deg]"
                  />
                </Link>
                <div className="invisible absolute left-0 top-full min-w-48 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        className="rounded-md px-3 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--bg)]"
                        href={child.href}
                        key={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                className={`${desktopLinkBase} ${
                  item.featured ? desktopLinkFeatured : desktopLinkPlain
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden xl:block">
          <CTAButton href={site.ctaHref}>{site.headerCta}</CTAButton>
        </div>

        <details className="group relative xl:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)] marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,22rem)] rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl">
            <nav className="grid gap-1" aria-label="Mobilná navigácia">
              {navItems.map((item) =>
                item.children?.length ? (
                  <div className="grid gap-1" key={item.href}>
                    <Link
                      className={`${mobileLinkBase} ${mobileLinkPlain}`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-3 grid gap-1 border-l border-[var(--border)] pl-3">
                      {item.children.map((child) => (
                        <Link
                          className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
                          href={child.href}
                          key={child.href}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    className={`${mobileLinkBase} ${
                      item.featured ? mobileLinkFeatured : mobileLinkPlain
                    }`}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ),
              )}
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
