import type { MetadataRoute } from "next";
import { absoluteUrl, sitemapPages, siteLastModified } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${siteLastModified}T00:00:00.000Z`);

  return sitemapPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    images: page.images.map((image) => absoluteUrl(image)),
  }));
}
