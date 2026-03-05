"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import HeroSection from "@/components/sections/HeroSection";
import WaveDivider from "@/components/ui/WaveDivider";
import BookingModal from "@/components/ui/BookingModal";
import { safariPackages } from "@/lib/safaris";

export default function SafariPage() {
  const t = useTranslations("safari");
  const locale = useLocale();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSafari, setSelectedSafari] = useState("");

  function openBooking(title: string) {
    setSelectedSafari(title);
    setModalOpen(true);
  }

  return (
    <>
      <HeroSection
        compact
        titleLine1={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        imageSrc="/images/safari-hero.jpeg"
        imageAlt="Safari Tanzania"
      />

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {safariPackages.map((pkg, index) => {
            const title = locale === "fr" ? pkg.titleFr : pkg.titleEn;
            const description = locale === "fr" ? pkg.descriptionFr : pkg.descriptionEn;
            const itinerary = locale === "fr" ? pkg.itineraryFr : pkg.itineraryEn;
            const included = locale === "fr" ? pkg.includedFr : pkg.includedEn;

            return (
              <div key={pkg.id}>
                {/* Package header */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image grid */}
                  <div className={`grid grid-cols-2 gap-2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    {pkg.images.slice(0, 4).map((img, i) => (
                      <div key={img} className={`relative rounded-xl overflow-hidden ${i === 0 ? "col-span-2 h-56" : "h-36"}`}>
                        <Image
                          src={img}
                          alt={`${title} ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Text */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block bg-brand-gold/10 text-brand-gold font-bold text-sm px-3 py-1 rounded-full">
                        {pkg.duration}
                      </span>
                      {pkg.price && (
                        <span className="inline-block bg-brand-blue-dark text-white font-bold text-sm px-3 py-1 rounded-full">
                          {pkg.price}
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-black text-brand-blue-dark mb-4">{title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

                    {/* Included */}
                    <div className="mb-6">
                      <h3 className="font-black text-brand-blue-dark mb-3">{t("included")}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {included.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
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

                    <button
                      onClick={() => openBooking(title)}
                      className="bg-brand-gold hover:bg-brand-gold-light text-white font-black px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
                    >
                      {t("bookSafari")}
                    </button>
                  </div>
                </div>

                {/* Itinerary */}
                <div className="mt-12">
                  <h3 className="text-2xl font-black text-brand-blue-dark mb-6">{t("itinerary")}</h3>
                  <div className="space-y-4">
                    {itinerary.map((day) => (
                      <div
                        key={day.day}
                        className="flex gap-5 bg-gray-50 rounded-xl p-5"
                      >
                        <div className="shrink-0 w-12 h-12 bg-brand-blue-dark text-white rounded-xl flex flex-col items-center justify-center">
                          <span className="text-[10px] font-bold uppercase opacity-70">{t("day")}</span>
                          <span className="text-xl font-black leading-none">{day.day}</span>
                        </div>
                        <div>
                          <h4 className="font-black text-brand-blue-dark mb-1">{day.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {index < safariPackages.length - 1 && (
                  <WaveDivider topColor="#ffffff" bottomColor="#f0f8ff" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue-dark py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/30 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 text-brand-gold text-sm font-bold px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            {locale === "fr" ? "Prêt pour l'aventure ?" : "Ready for adventure?"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            {locale === "fr" ? (
              <>Réservez votre <span className="text-brand-gold">safari</span> maintenant</>
            ) : (
              <>Book your <span className="text-brand-gold">safari</span> now</>
            )}
          </h2>
          <p className="text-brand-sky text-xl mb-10 max-w-2xl mx-auto">
            {locale === "fr" 
              ? "Contactez-nous pour réserver votre safari en Tanzanie et vivre une expérience inoubliable au cœur de la savane africaine."
              : "Contact us to book your Tanzania safari and experience an unforgettable adventure in the heart of the African savanna."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openBooking(locale === "fr" ? "Safari" : "Safari")}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-2xl shadow-brand-gold/30"
            >
              {locale === "fr" ? "Réserver maintenant →" : "Book now →"}
            </button>
            <a
              href="https://wa.me/255777596239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tourTitle={selectedSafari}
      />
    </>
  );
}
