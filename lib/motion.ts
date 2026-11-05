// Mirrors the --ease-out token in app/globals.css for animations started from JS (WAAPI).
export const easeOut = "cubic-bezier(0.23, 1, 0.32, 1)";

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
