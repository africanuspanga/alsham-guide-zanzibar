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
      alternates: pageAlternates(locale, "/contact"),
      title: "Contact",
      description:
        "Contact AlSham Guide Zanzibar. Reach us via WhatsApp, phone or email to plan your excursions, safaris, taxi transfers or custom tour.",
    };
  }
  return {
    alternates: pageAlternates(locale, "/contact"),
    title: "Contact",
    description:
      "Contactez AlSham Guide Zanzibar. Rejoignez-nous via WhatsApp, téléphone ou e-mail pour planifier vos excursions, safaris, transferts ou tour personnalisé.",
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
