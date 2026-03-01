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
                    <span className="inline-block bg-brand-gold/10 text-brand-gold font-bold text-sm px-3 py-1 rounded-full mb-3">
                      {pkg.duration}
                    </span>
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

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tourTitle={selectedSafari}
      />
    </>
  );
}
