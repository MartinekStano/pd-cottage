"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function AnimationObserver() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      delete document.documentElement.dataset.motion;
      return;
    }

    document.documentElement.dataset.motion = "enabled";

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.dataset.visible = "true";
            observer.unobserve(target);
          }
        });
      },
      {
        rootMargin: "18% 0px 28% 0px",
        threshold: 0.01,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
