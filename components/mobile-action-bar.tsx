import Link from "next/link";
import { contact, site } from "@/lib/site-data";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_94%,transparent)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(31,28,24,0.08)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-[0.8fr_1.2fr] gap-2">
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] px-3 text-center text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          href={contact.phoneHref}
        >
          Zavolať
        </a>
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--dark)] px-3 text-center text-sm font-semibold text-[var(--surface)] shadow-sm transition hover:bg-[var(--accent)]"
          href={site.ctaHref}
        >
          Overiť termín
        </Link>
      </div>
    </div>
  );
}
