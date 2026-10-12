import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      alternates: pageAlternates(locale, "/safari"),
      title: "Safari Tanzania",
      description:
        "Join an unforgettable Tanzania safari with AlSham Guide Zanzibar. Serengeti, Ngorongoro Crater, and more — expertly guided multi-day packages.",
    };
  }
  return {
    alternates: pageAlternates(locale, "/safari"),
    title: "Safari Tanzanie",
    description:
      "Partez en safari inoubliable en Tanzanie avec AlSham Guide Zanzibar. Serengeti, Cratère du Ngorongoro et plus encore — forfaits multi-jours guidés par des experts.",
  };
}

export default function SafariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
