import Link from "next/link";
import { contact, navItems, site } from "@/lib/site-data";
import { CTAButton } from "./cta-button";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--dark)] text-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-4 max-w-md text-base leading-7 text-white/72">
            Súkromná chata pre pokojný oddych a spoločné chvíle.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={site.ctaHref} variant="light">
              {site.primaryCta}
            </CTAButton>
            <CTAButton href="/ubytovanie" variant="ghost">
              Pozrieť ubytovanie
            </CTAButton>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-white/58">Navigácia</p>
          <nav className="mt-4 grid gap-2" aria-label="Navigácia v pätičke">
            {navItems.map((item) => (
              <Link
                className="text-sm text-white/72 transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-white/58">Kontakt</p>
          <address className="mt-4 grid gap-2 text-sm not-italic leading-6 text-white/72">
            <span>{contact.address}</span>
            <a className="transition hover:text-white" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="transition hover:text-white" href={contact.emailHref}>
              {contact.email}
            </a>
            <span>{contact.parking}</span>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Krátkodobé ubytovanie v súkromí v obci Lutiše.</span>
        </div>
      </div>
    </footer>
  );
}
