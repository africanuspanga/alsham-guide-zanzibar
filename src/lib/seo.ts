import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://www.alshamzanzibar.com";

// Canonical + hreflang links for a page. `path` is the route without locale, e.g. "/safari" ("" for home).
export function pageAlternates(locale: string, path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `${SITE_URL}/${l}${path}`;
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${path}`;
  return { canonical: `${SITE_URL}/${locale}${path}`, languages };
}
