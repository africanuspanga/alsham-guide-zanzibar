import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { tours } from "@/lib/tours";
import { SITE_URL } from "@/lib/seo";

const staticPaths = ["", "/excursion", "/safari", "/taxi-transfer", "/car-rental", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...staticPaths, ...tours.map((t) => `/excursion/${t.slug}`)];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path.startsWith("/excursion/") ? "monthly" : "weekly",
      priority: path === "" ? 1 : path.startsWith("/excursion/") ? 0.8 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
