import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import TourCardServer from "@/components/ui/TourCardServer";
import { tours } from "@/lib/tours";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Excursions Zanzibar",
      description:
        "Explore all our Zanzibar excursions: Prison Island, Mnemba Island, Safari Blue, Jozani Forest, Nakupenda Beach and more. Book with your French-speaking guide.",
    };
  }
  return {
    title: "Excursions Zanzibar",
    description:
      "Découvrez toutes nos excursions à Zanzibar : Prison Island, Mnemba Island, Safari Blue, Forêt de Jozani, Plage de Nakupenda et bien plus. Réservez avec votre guide francophone.",
  };
}

export default async function ExcursionPage() {
  const t = await getTranslations("excursion");
  const locale = await getLocale();

  return (
    <>
      <HeroSection
        compact
        titleLine1={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        imageSrc="/images/nakupenda-beach-1.jpeg"
        imageAlt="Excursions Zanzibar"
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <TourCardServer key={tour.slug} tour={tour} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
