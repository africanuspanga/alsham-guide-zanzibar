"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import BookingModal from "@/components/ui/BookingModal";

const galleryImages = [
  "/images/taxi-new-1.jpeg",
  "/images/taxi-new-2.jpeg",
  "/images/taxi-new-3.jpeg",
  "/images/taxi-new-4.jpeg",
  "/images/taxi-new-5.jpeg",
];

const pricingFr = [
  { route: "Aéroport → Stone Town", price: "15€", popular: true },
  { route: "Aéroport → Nungwi", price: "35€", popular: false },
  { route: "Aéroport → Kendwa", price: "35€", popular: false },
  { route: "Aéroport → Paje", price: "35€", popular: false },
  { route: "Aéroport → Jambiani", price: "35€", popular: false },
  { route: "Stone Town → Nungwi", price: "35€", popular: false },
  { route: "Stone Town → Paje", price: "35€", popular: false },
  { route: "Stone Town → Kiwengwa", price: "35€", popular: false },
  { route: "Nungwi → Paje / Jambiani", price: "45€", popular: false },
  { route: "Nungwi → Kizimkazi", price: "50€", popular: false },
  { route: "Nungwi → Michamvi", price: "50€", popular: false },
  { route: "Nungwi → Makunduchi", price: "50€", popular: false },
];

const pricingEn = [
  { route: "Airport → Stone Town", price: "15€", popular: true },
  { route: "Airport → Nungwi", price: "35€", popular: false },
  { route: "Airport → Kendwa", price: "35€", popular: false },
  { route: "Airport → Paje", price: "35€", popular: false },
  { route: "Airport → Jambiani", price: "35€", popular: false },
  { route: "Stone Town → Nungwi", price: "35€", popular: false },
  { route: "Stone Town → Paje", price: "35€", popular: false },
  { route: "Stone Town → Kiwengwa", price: "35€", popular: false },
  { route: "Nungwi → Paje / Jambiani", price: "45€", popular: false },
  { route: "Nungwi → Kizimkazi", price: "50€", popular: false },
  { route: "Nungwi → Michamvi", price: "50€", popular: false },
  { route: "Nungwi → Makunduchi", price: "50€", popular: false },
];

export default function TaxiTransferPage() {
  const t = useTranslations("taxiTransfer");
  const locale = useLocale();
  const [modalOpen, setModalOpen] = useState(false);
  const pricing = locale === "fr" ? pricingFr : pricingEn;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-brand-blue-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/taxi-new-1.jpeg"
            alt="Taxi Transfer Zanzibar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-gold text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-lg">
              {locale === "fr" ? "Transfert & Taxi" : "Transfer & Taxi"}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              {locale === "fr" ? (
                <>
                  Voyagez{" "}
                  <span className="text-brand-gold">confortablement</span>{" "}
                  à Zanzibar
                </>
              ) : (
                <>
                  Travel{" "}
                  <span className="text-brand-gold">comfortably</span>{" "}
                  in Zanzibar
                </>
              )}
            </h1>
            <p className="text-brand-sky text-xl leading-relaxed mb-10">
              {locale === "fr"
                ? "Transferts aéroport, hôtels et excursions — chauffeurs locaux expérimentés, disponibles à toute heure."
                : "Airport transfers, hotels and excursions — experienced local drivers, available around the clock."}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-block bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-5 rounded-full text-lg transition-all shadow-2xl shadow-brand-gold/30 hover:scale-105"
              >
                {t("bookTransfer")} →
              </button>
              <a
                href="https://wa.me/255777596239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-5 rounded-full text-lg transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand-gold py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "24/7", labelFr: "Disponibilité", labelEn: "Availability" },
              { stat: "200+", labelFr: "Transferts", labelEn: "Transfers" },
              { stat: "5★", labelFr: "Service", labelEn: "Service" },
              { stat: "15€", labelFr: "Depuis l'aéroport", labelEn: "From airport" },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-3xl md:text-4xl font-black text-white">{item.stat}</div>
                <div className="text-white/80 text-sm font-semibold mt-1">
                  {locale === "fr" ? item.labelFr : item.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={img}
                className={`relative rounded-2xl overflow-hidden group ${
                  i === 0 ? "col-span-2 md:col-span-2 row-span-2 h-64 md:h-full" : "h-44 md:h-48"
                }`}
                style={{ minHeight: i === 0 ? "280px" : undefined }}
              >
                <Image
                  src={img}
                  alt={`Transfer ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-blue-dark/0 group-hover:bg-brand-blue-dark/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark mb-3">
              {locale === "fr" ? "Nos Services" : "Our Services"}
            </h2>
            <p className="text-gray-500 text-lg">
              {locale === "fr"
                ? "Des transferts fiables pour chaque situation"
                : "Reliable transfers for every situation"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                gradient: "from-brand-blue to-brand-blue-dark",
                iconPath: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
                titleFr: "Transfert Aéroport",
                titleEn: "Airport Transfer",
                descFr: "Arrivée ou départ — prise en charge à l'aéroport Abeid Amani Karume avec panneau nominatif. Ponctualité garantie.",
                descEn: "Arrival or departure — pickup at Abeid Amani Karume Airport with name sign. Punctuality guaranteed.",
                detailFr: "À partir de 15€ / trajet",
                detailEn: "From 15€ / trip",
              },
              {
                gradient: "from-brand-gold to-[#e67e22]",
                iconPath: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
                titleFr: "Transfert Hôtel",
                titleEn: "Hotel Transfer",
                descFr: "Navette confortable entre votre hôtel et n'importe quelle destination sur l'île. Véhicules climatisés.",
                descEn: "Comfortable shuttle between your hotel and any destination on the island. Air-conditioned vehicles.",
                detailFr: "Tarif sur devis",
                detailEn: "Price on request",
              },
              {
                gradient: "from-[#1a5276] to-navy",
                iconPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                titleFr: "Tour en Taxi",
                titleEn: "City Tour by Taxi",
                descFr: "Explorez Stone Town et les merveilles de Zanzibar avec un chauffeur local passionné à votre disposition.",
                descEn: "Explore Stone Town and Zanzibar's wonders with a passionate local driver at your disposal.",
                detailFr: "Journée complète possible",
                detailEn: "Full day option available",
              },
            ].map((s) => (
              <div
                key={s.titleFr}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-br ${s.gradient} p-8`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                      <path d={s.iconPath} />
                    </svg>
                  </div>
                  <h3 className="font-black text-white text-2xl">
                    {locale === "fr" ? s.titleFr : s.titleEn}
                  </h3>
                  <p className="text-white/70 text-sm font-semibold mt-1">
                    {locale === "fr" ? s.detailFr : s.detailEn}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {locale === "fr" ? s.descFr : s.descEn}
                  </p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="mt-4 text-brand-gold font-bold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {locale === "fr" ? "Réserver →" : "Book →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-blue-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-3">
              {locale === "fr" ? "Réservation Simplifiée" : "Simple Booking"}
            </h2>
            <p className="text-brand-sky text-lg">
              {locale === "fr" ? "3 étapes — 5 minutes" : "3 steps — 5 minutes"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                titleFr: "Contactez-nous",
                titleEn: "Contact us",
                descFr: "Via WhatsApp ou le formulaire de réservation — disponible 24h/24.",
                descEn: "Via WhatsApp or the booking form — available 24/7.",
              },
              {
                num: "2",
                titleFr: "On confirme",
                titleEn: "We confirm",
                descFr: "Nous confirmons votre trajet, l'heure de prise en charge et le tarif.",
                descEn: "We confirm your trip, pickup time and price.",
              },
              {
                num: "3",
                titleFr: "On vous attend",
                titleEn: "We wait for you",
                descFr: "Votre chauffeur est là à l'heure — panneau nominatif ou contact direct.",
                descEn: "Your driver is there on time — name sign or direct contact.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5">
                <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-black text-white text-xl mb-2">
                    {locale === "fr" ? step.titleFr : step.titleEn}
                  </h3>
                  <p className="text-brand-sky text-sm leading-relaxed">
                    {locale === "fr" ? step.descFr : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-blue-dark mb-3">
              {locale === "fr" ? "Tarifs Indicatifs" : "Price Guide"}
            </h2>
            <p className="text-gray-500">
              {locale === "fr" ? "Prix par trajet · véhicule complet" : "Per trip · full vehicle"}
            </p>
          </div>

          <div className="bg-brand-blue-dark rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-brand-gold/20 px-6 py-4 flex justify-between items-center border-b border-white/10">
              <span className="text-brand-gold font-black text-sm uppercase tracking-widest">
                {locale === "fr" ? "Trajet" : "Route"}
              </span>
              <span className="text-brand-gold font-black text-sm uppercase tracking-widest">
                {locale === "fr" ? "Prix" : "Price"}
              </span>
            </div>
            {pricing.map((row, i) => (
              <div
                key={row.route}
                className={`flex justify-between items-center px-6 py-4 border-b border-white/5 ${
                  row.popular ? "bg-brand-gold/10" : i % 2 === 0 ? "bg-white/5" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-sky shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-white text-sm">{row.route}</span>
                  {row.popular && (
                    <span className="bg-brand-gold text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                      {locale === "fr" ? "Populaire" : "Popular"}
                    </span>
                  )}
                </div>
                <span className="text-brand-gold font-black text-lg">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            {locale === "fr"
              ? "* Tarifs à confirmer — contactez-nous pour un devis personnalisé"
              : "* Prices to confirm — contact us for a custom quote"}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-dark py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/30 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 text-brand-gold text-sm font-bold px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            {locale === "fr" ? "Disponible 24h/24" : "Available 24/7"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            {locale === "fr" ? (
              <>Besoin d'un <span className="text-brand-gold">transfert</span> ?</>
            ) : (
              <>Need a <span className="text-brand-gold">transfer</span>?</>
            )}
          </h2>
          <p className="text-brand-sky text-xl mb-10 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Contactez-nous pour réserver votre transfert à Zanzibar. Réponse rapide garantie via WhatsApp."
              : "Contact us to book your transfer in Zanzibar. Fast response guaranteed via WhatsApp."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-2xl shadow-brand-gold/30"
            >
              {t("bookTransfer")} →
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
        tourTitle={t("pageTitle")}
      />
    </>
  );
}
