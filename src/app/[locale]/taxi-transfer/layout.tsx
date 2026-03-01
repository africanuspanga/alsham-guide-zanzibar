import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Taxi Transfer Zanzibar",
      description:
        "Private taxi transfers across Zanzibar — airport pickups, hotel transfers, Stone Town tours and more. Reliable, comfortable and available 24/7.",
    };
  }
  return {
    title: "Transfert Taxi Zanzibar",
    description:
      "Transferts en taxi privé à Zanzibar — transferts aéroport, hôtels, visites de Stone Town et plus encore. Fiable, confortable et disponible 24h/24.",
  };
}

export default function TaxiTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
