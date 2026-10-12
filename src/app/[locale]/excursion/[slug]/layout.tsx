import type { Metadata } from "next";
import { getTourBySlug } from "@/lib/tours";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  const title = locale === "fr" ? tour.titleFr : tour.titleEn;
  const description =
    locale === "fr" ? tour.descriptionFr : tour.descriptionEn;

  return {
    title,
    description,
    alternates: pageAlternates(locale, `/excursion/${slug}`),
    openGraph: {
      title: `${title} | AlSham Guide Zanzibar`,
      description,
      images: [{ url: tour.coverImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AlSham Guide Zanzibar`,
      description,
      images: [tour.coverImage],
    },
  };
}

export default function TourSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
