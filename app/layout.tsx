import type { Metadata } from "next";
import { AnimationObserver } from "@/components/animation-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { metadataBase, site } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.name} | ${site.subtitle}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Súkromná chata v Lutišiach pre pokojný oddych, rodinné pobyty a menšie firemné stretnutia.",
  applicationName: site.name,
  openGraph: {
    siteName: site.name,
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col">
        <AnimationObserver />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
