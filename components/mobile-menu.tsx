"use client";

import Link from "next/link";
import { navItems, site } from "@/lib/site-data";
import { CTAButton } from "./cta-button";

const mobileLinkBase = "rounded-md px-3 py-3 text-base font-medium transition";
const mobileLinkPlain = "text-[var(--text)] hover:bg-[var(--bg)]";
const mobileLinkFeatured =
  "border border-[var(--clay)] bg-[var(--clay)] text-white shadow-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]";

export function MobileMenu() {
  function closeMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
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
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                <div className="ml-3 grid gap-1 border-l border-[var(--border)] pl-3">
                  {item.children.map((child) => (
                    <Link
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
                      href={child.href}
                      key={child.href}
                      onClick={closeMenu}
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
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <CTAButton className="mt-3 w-full" href={site.ctaHref} onClick={closeMenu}>
          {site.primaryCta}
        </CTAButton>
      </div>
    </details>
  );
}
