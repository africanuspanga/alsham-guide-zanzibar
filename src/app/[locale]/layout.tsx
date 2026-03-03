import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickBookingBar from "@/components/ui/QuickBookingBar";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: {
        default: "AlSham Guide Zanzibar — Your French-Speaking Guide",
        template: "%s | AlSham Guide Zanzibar",
      },
      description:
        "Local French-speaking guide in Zanzibar. Excursions, safaris, taxi transfers and car rental. Contact us to organise your unforgettable Zanzibar adventure.",
      keywords: [
        "Zanzibar guide",
        "Zanzibar excursions",
        "safari Tanzania",
        "Prison Island",
        "Mnemba Island",
        "Safari Blue",
        "French-speaking guide",
        "Zanzibar tours",
      ],
      openGraph: {
        title: "AlSham Guide Zanzibar — Your French-Speaking Guide",
        description:
          "Local French-speaking guide in Zanzibar. Excursions, safaris, taxi transfers and car rental. Unforgettable adventures await.",
        siteName: "AlSham Guide Zanzibar",
        images: [
          {
            url: "/images/island-paradise.jpg",
            width: 1200,
            height: 630,
            alt: "AlSham Guide Zanzibar — Island Paradise",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "AlSham Guide Zanzibar — Your French-Speaking Guide",
        description:
          "Local French-speaking guide in Zanzibar. Excursions, safaris, taxi transfers and car rental.",
        images: ["/images/island-paradise.jpg"],
      },
    };
  }

  return {
    title: {
      default: "AlSham Guide Zanzibar — Votre Guide Francophone",
      template: "%s | AlSham Guide Zanzibar",
    },
    description:
      "Guide local francophone à Zanzibar. Excursions, safaris, transferts taxi et location de voiture. Contactez-nous pour organiser votre aventure inoubliable.",
    keywords: [
      "guide francophone Zanzibar",
      "excursions Zanzibar",
      "safari Tanzanie",
      "Prison Island",
      "Mnemba Island",
      "Safari Blue",
      "guide français Zanzibar",
      "tours Zanzibar",
    ],
    openGraph: {
      title: "AlSham Guide Zanzibar — Votre Guide Francophone",
      description:
        "Guide local francophone à Zanzibar. Excursions, safaris, transferts et location de voiture. Des aventures inoubliables vous attendent.",
      siteName: "AlSham Guide Zanzibar",
      images: [
        {
          url: "/images/island-paradise.jpg",
          width: 1200,
          height: 630,
          alt: "AlSham Guide Zanzibar — Paradis Insulaire",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AlSham Guide Zanzibar — Votre Guide Francophone",
      description:
        "Guide local francophone à Zanzibar. Excursions, safaris, transferts et location de voiture.",
      images: ["/images/island-paradise.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geist.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <QuickBookingBar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
