"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/lib/tours";
import TourCard from "@/components/ui/TourCard";
import BookingModal from "@/components/ui/BookingModal";
import { use } from "react";

export default function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const tour = getTourBySlug(slug);
  const locale = useLocale();
  const t = useTranslations("excursion");
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!tour) notFound();

  const title = locale === "fr" ? tour.titleFr : tour.titleEn;
  const description = locale === "fr" ? tour.longDescriptionFr : tour.longDescriptionEn;
  const included = locale === "fr" ? tour.includedFr : tour.includedEn;
  const duration = locale === "fr" ? tour.duration : tour.durationEn;

  const related = tours
    .filter((t) => t.slug !== tour.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/excursion" className="hover:text-brand-blue transition-colors">
            {t("pageTitle")}
          </Link>
          <span>/</span>
          <span className="text-brand-blue-dark font-medium">{title}</span>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={tour.coverImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{title}</h1>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-gold">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
                </svg>
                ${tour.price} / personne
              </span>
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                {duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Description + Gallery */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-black text-brand-blue-dark mb-4">
                {locale === "fr" ? "À propos" : "About"}
              </h2>
              <div className="prose prose-lg text-gray-600 whitespace-pre-line leading-relaxed">
                {description}
              </div>
            </div>

            {/* Included */}
            {included && included.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-brand-blue-dark mb-4">
                  {t("included")}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="w-5 h-5 bg-brand-gold/20 rounded-full flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-brand-gold">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-black text-brand-blue-dark mb-4">
                {t("gallery")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tour.images.map((img, i) => (
                  <button
                    key={img}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxSrc(img)}
                  >
                    <Image
                      src={img}
                      alt={`${title} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking card (sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white border-2 border-brand-blue/20 rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-black text-brand-gold">${tour.price}</div>
                <div className="text-gray-500 text-sm">{locale === "fr" ? "par personne" : "per person"}</div>
                <div className="text-brand-blue text-sm mt-1">{duration}</div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-brand-gold hover:bg-brand-gold-light text-white font-black py-4 rounded-xl text-lg transition-colors mb-3"
              >
                {locale === "fr" ? "Réserver Maintenant" : "Book Now"}
              </button>
              <a
                href="https://wa.me/255777596239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-3 rounded-xl transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <div className="mt-4 text-center">
                <Link
                  href="/excursion"
                  className="text-brand-blue text-sm hover:underline"
                >
                  {t("backToList")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related tours */}
        <div className="mt-16">
          <h2 className="text-2xl font-black text-brand-blue-dark mb-8">
            {t("relatedTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <TourCard
                key={r.slug}
                slug={r.slug}
                title={locale === "fr" ? r.titleFr : r.titleEn}
                description={locale === "fr" ? r.descriptionFr : r.descriptionEn}
                coverImage={r.coverImage}
                price={r.price}
                duration={locale === "fr" ? r.duration : r.durationEn}
                badge={r.badge}
                onBook={() => setModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light"
            onClick={() => setLightboxSrc(null)}
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={lightboxSrc}
              alt="Gallery"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tourTitle={title}
      />
    </>
  );
}
