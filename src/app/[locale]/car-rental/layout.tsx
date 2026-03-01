import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Car Rental Zanzibar",
      description:
        "Rent a car in Zanzibar with or without a driver. Airport pickups, island-wide coverage, 4x4s, SUVs and sedans available 24/7. Book now.",
    };
  }
  return {
    title: "Location de Voiture Zanzibar",
    description:
      "Louez une voiture à Zanzibar avec ou sans chauffeur. Transferts aéroport, couverture toute l'île, 4x4, SUV et berlines disponibles 24h/24. Réservez maintenant.",
  };
}

export default function CarRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
