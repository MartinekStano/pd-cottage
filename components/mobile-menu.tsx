"use client";

import { useRef } from "react";
import { NavLink } from "./nav-link";
import { navItems, site } from "@/lib/site-data";
import { easeOut, prefersReducedMotion } from "@/lib/motion";
import { CTAButton } from "./cta-button";

const mobileLinkBase = "rounded-md px-3 py-3 text-base font-medium transition";
const mobileLinkPlain = "text-[var(--text)] hover:bg-[var(--bg)] active:bg-[var(--bg)]";
const mobileLinkFeatured =
  "border border-[var(--clay)] bg-[var(--clay)] text-white shadow-sm hover:border-[var(--accent)] hover:bg-[var(--accent)] active:bg-[var(--accent)]";

export function MobileMenu() {
  const panel = useRef<HTMLDivElement>(null);

  function closeMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  // Started on the click that opens the menu, so the first painted frame is already the animation's start; closing stays instant.
  function animateOpen(event: React.MouseEvent<HTMLElement>) {
    if (event.currentTarget.closest("details")?.open) return;
    panel.current?.animate(
      prefersReducedMotion()
        ? [{ opacity: 0 }, { opacity: 1 }]
        : [{ opacity: 0, transform: "translateY(-4px) scale(0.96)" }, { opacity: 1, transform: "none" }],
      { duration: 180, easing: easeOut },
    );
  }

  return (
    <details className="group relative xl:hidden">
      <summary
        className="pressable flex min-h-11 cursor-pointer list-none items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)] transition marker:hidden"
        onClick={animateOpen}
      >
        Menu
      </summary>
      <div
        className="absolute right-0 top-14 max-h-[calc(100svh-12rem)] w-[min(88vw,22rem)] origin-top-right overflow-y-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl"
        ref={panel}
      >
        <nav className="grid gap-1" aria-label="Mobilná navigácia">
          {navItems.map((item) =>
            item.children?.length ? (
              <div className="grid gap-1" key={item.href}>
                <NavLink
                  activePaths={item.children.map((child) => child.href)}
                  className={`${mobileLinkBase} ${mobileLinkPlain}`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
                <div className="ml-3 grid gap-1 border-l border-[var(--border)] pl-3">
                  {item.children.map((child) => (
                    <NavLink
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--bg)] hover:text-[var(--text)] active:bg-[var(--bg)]"
                      href={child.href}
                      key={child.href}
                      onClick={closeMenu}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                className={`${mobileLinkBase} ${
                  item.featured ? mobileLinkFeatured : mobileLinkPlain
                }`}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
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
