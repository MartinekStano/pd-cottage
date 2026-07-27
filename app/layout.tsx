import type { Metadata } from "next";
import { AnimationObserver } from "@/components/animation-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { metadataBase, site, structuredData } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.name} | ${site.subtitle}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Chata Lutiše na prenájom pre rodiny, skupiny a menšie firemné pobyty. Ubytovanie na Kysuciach so saunou, kaďou a kapacitou až 16 osôb.",
  applicationName: site.name,
  openGraph: {
    siteName: site.name,
    locale: "sk_SK",
    type: "website",
  },
};

const structuredDataScript = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataScript }}
        />
        <AnimationObserver />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
