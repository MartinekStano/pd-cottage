"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type NavLinkProps = ComponentProps<typeof Link> & { className?: string; activePaths?: string[] };

export function NavLink({ href, className = "", activePaths = [], ...props }: NavLinkProps) {
  const pathname = usePathname();
  const current = pathname === href;
  const active = current || activePaths.includes(pathname);
  return <Link href={href} aria-current={current ? "page" : undefined} data-active={active} className={`${className} data-[active=true]:bg-[var(--bg)] data-[active=true]:text-[var(--accent)]`} {...props} />;
}
