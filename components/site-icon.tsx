import type { ReactNode } from "react";

export type SiteIconName =
  | "amenities"
  | "euro"
  | "map"
  | "units"
  | "users"
  | "wellness";

const paths: Record<SiteIconName, ReactNode> = {
  amenities: (
    <>
      <path d="M6 19h12" />
      <path d="M8 15h8" />
      <path d="M9 11h6" />
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <path d="M7 11l-2 8" />
      <path d="M17 11l2 8" />
    </>
  ),
  euro: (
    <>
      <path d="M18 7.5a6 6 0 0 0-10.5 2" />
      <path d="M18 16.5a6 6 0 0 1-10.5-2" />
      <path d="M4 10h9" />
      <path d="M4 14h8" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  units: (
    <>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6 9.5V20h5v-5h2v5h5V9.5" />
      <path d="M9 20h6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M14.5 15.5A4.5 4.5 0 0 1 21 19" />
    </>
  ),
  wellness: (
    <>
      <path d="M8 4c1.6 1.5 1.6 3.1 0 4.6" />
      <path d="M12 3c1.8 1.8 1.8 3.7 0 5.5" />
      <path d="M16 4c1.6 1.5 1.6 3.1 0 4.6" />
      <path d="M5 13h14" />
      <path d="M7 13v3a5 5 0 0 0 10 0v-3" />
      <path d="M9 21h6" />
    </>
  ),
};

export function SiteIcon({ name }: { name: SiteIconName }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
