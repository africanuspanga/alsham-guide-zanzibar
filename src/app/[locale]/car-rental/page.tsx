"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import BookingModal from "@/components/ui/BookingModal";

const vehicles = [
  {
    nameFr: "Sedan",
    nameEn: "Sedan",
    categoryFr: "Économique",
    categoryEn: "Economy",
    capacity: "1–2",
    image: "/images/taxi-transfer-2.jpeg",
    priceFr: "30€",
    priceEn: "30€",
    periodFr: "/ jour",
    periodEn: "/ day",
    featuresFr: [
      "Climatisation",
      "Jusqu'à 2 passagers",
      "Idéal pour couples",
      "Permis de conduire valide requis",
      "Passeport requis",
    ],
    featuresEn: [
      "Air conditioning",
      "Up to 2 passengers",
      "Ideal for couples",
      "Valid driver's license required",
      "Passport required",
    ],
  },
  {
    nameFr: "Comfort 4x4 SUV",
    nameEn: "Comfort 4x4 SUV",
    categoryFr: "Confort",
    categoryEn: "Comfort",
    capacity: "1–2",
    image: "/images/taxi-transfer-4.jpeg",
    priceFr: "27€",
    priceEn: "27€",
    periodFr: "/ jour",
    periodEn: "/ day",
    featuresFr: [
      "Climatisation",
      "Jusqu'à 2 passagers",
      "Idéal pour toute l'île & pistes",
      "Permis de conduire valide requis",
      "Passeport requis",
    ],
    featuresEn: [
      "Air conditioning",
      "Up to 2 passengers",
      "Ideal for the whole island & dirt roads",
      "Valid driver's license required",
      "Passport required",
    ],
  },
  {
    nameFr: "Mini Bus",
    nameEn: "Mini Bus",
    categoryFr: "Groupe",
    categoryEn: "Group",
    capacity: "1–6",
    image: "/images/taxi-transfer-6.jpeg",
    priceFr: "40€",
    priceEn: "40€",
    periodFr: "/ jour",
    periodEn: "/ day",
    featuresFr: [
      "Climatisation",
      "Jusqu'à 6 passagers",
      "Idéal pour groupes & familles",
      "Permis de conduire valide requis",
      "Passeport requis",
    ],
    featuresEn: [
      "Air conditioning",
      "Up to 6 passengers",
      "Ideal for groups & families",
      "Valid driver's license required",
      "Passport required",
    ],
  },
];

const requirementsFr = [
  "Un permis de conduire valide",
  "Une pièce d'identité",
  "Un passeport",
  "Vérifier la voiture avant de partir (vous pouvez filmer)",
  "Signer un contrat avant de partir",
  "Avoir l'autorisation de conduire d'ici (Permis local) — 10€",
];

const requirementsEn = [
  "A valid driver's license",
  "An ID document",
  "A passport",
  "Check the vehicle before leaving (you can film)",
  "Sign a contract before leaving",
  "Have a local driving permit — 10€",
];

const perks = [
  {
    iconPath:
      "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
    statFr: "24h/24",
    statEn: "24/7",
    titleFr: "Disponible",
    titleEn: "Available",
    descFr: "7 jours sur 7",
    descEn: "7 days a week",
  },
  {
    iconPath:
      "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
    statFr: "✈",
    statEn: "✈",
    titleFr: "Aéroport",
    titleEn: "Airport",
    descFr: "Prise en charge directe",
    descEn: "Direct pickup",
  },
  {
    iconPath:
      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    statFr: "🌴",
    statEn: "🌴",
    titleFr: "Île Entière",
    titleEn: "Full Island",
    descFr: "Nord, Sud, Est, Ouest",
    descEn: "North, South, East, West",
  },
  {
    iconPath:
      "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    statFr: "👨‍✈️",
    statEn: "👨‍✈️",
    titleFr: "Toyota & Nissan",
    titleEn: "Toyota & Nissan",
    descFr: "Rav4, Alphard, Juke...",
    descEn: "Rav4, Alphard, Juke...",
  },
];

export default function CarRentalPage() {
  const t = useTranslations("carRental");
  const locale = useLocale();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  function openModal(name: string) {
    setSelectedVehicle(name);
    setModalOpen(true);
  }

  const requirements = locale === "fr" ? requirementsFr : requirementsEn;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-brand-blue-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/taxi-transfer-1.jpeg"
            alt="Car Rental Zanzibar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/75 to-brand-blue-dark/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-gold text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-lg">
              {locale === "fr" ? "Location de Voiture" : "Car Rental"}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              {locale === "fr" ? (
                <>
                  Explorez Zanzibar{" "}
                  <span className="text-brand-gold">à votre rythme</span>
                </>
              ) : (
                <>
                  Explore Zanzibar{" "}
                  <span className="text-brand-gold">your way</span>
                </>
              )}
            </h1>
            <p className="text-brand-sky text-xl leading-relaxed mb-10">
              {locale === "fr"
                ? "On vous propose un service spécialisé qui permet à un client d'utiliser un véhicule Toyota (Rav4, Alphard, Nissan Juke, etc.) pour une période courte ou longue."
                : "We offer a specialized service that allows you to rent a Toyota vehicle (Rav4, Alphard, Nissan Juke, etc.) for short or long periods."}
            </p>
            <button
              onClick={() => openModal(t("pageTitle"))}
              className="inline-block bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-5 rounded-full text-lg transition-all shadow-2xl shadow-brand-gold/30 hover:scale-105"
            >
              {locale === "fr" ? "Réserver maintenant →" : "Book now →"}
            </button>
          </div>
        </div>
      </section>

      {/* PERKS BAR */}
      <section className="bg-brand-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.titleFr} className="flex items-center gap-3 text-white">
                <div className="text-2xl shrink-0">{locale === "fr" ? p.statFr : p.statEn}</div>
                <div>
                  <div className="font-black text-white text-sm">
                    {locale === "fr" ? p.titleFr : p.titleEn}
                  </div>
                  <div className="text-brand-sky text-xs">
                    {locale === "fr" ? p.descFr : p.descEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-blue-dark mb-6">
            {locale === "fr" ? "Comment fonctionne la location ?" : "How does car rental work?"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {locale === "fr"
              ? "Le client choisit le modèle selon ses besoins, signe un contrat et paie un tarif journalier. Le prix dépend généralement du type de véhicule, de la durée de location, et des options supplémentaires (GPS, siège bébé, conducteur additionnel)."
              : "You choose the model according to your needs, sign a contract and pay a daily rate. The price generally depends on the type of vehicle, the rental period, and additional options (GPS, baby seat, additional driver)."}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {locale === "fr"
              ? "Pour la location de voiture, vous pouvez pratiquer pour les voyages, les déplacements professionnels, les vacances."
              : "Car rental is perfect for travel, business trips, and vacations."}
          </p>
        </div>
      </section>

      {/* FLEET */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark mb-3">
              {locale === "fr" ? "Notre Flotte" : "Our Fleet"}
            </h2>
            <p className="text-brand-gray text-lg">
              {locale === "fr"
                ? "Tous nos véhicules sont climatisés et régulièrement entretenus"
                : "All vehicles are air-conditioned and regularly maintained"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((v) => {
              const name = locale === "fr" ? v.nameFr : v.nameEn;
              const category = locale === "fr" ? v.categoryFr : v.categoryEn;
              const price = locale === "fr" ? v.priceFr : v.priceEn;
              const period = locale === "fr" ? v.periodFr : v.periodEn;
              const features = locale === "fr" ? v.featuresFr : v.featuresEn;

              return (
                <div
                  key={v.nameFr}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={v.image}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-blue-dark text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        {category}
                      </span>
                    </div>
                    {/* Price overlay at bottom */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-blue-dark/90 to-transparent px-5 py-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-brand-gold">{price}</span>
                        <span className="text-white/70 text-sm">{period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-black text-brand-blue-dark">{name}</h3>
                      <span className="bg-brand-blue/10 text-brand-blue text-sm font-bold px-3 py-1 rounded-full">
                        {v.capacity} {locale === "fr" ? "pers." : "pax"}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="w-5 h-5 bg-brand-gold/20 rounded-full flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-brand-gold">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => openModal(name)}
                      className="w-full bg-brand-gold hover:bg-brand-gold-light text-white font-black py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-gold/20 text-base"
                    >
                      {t("bookVehicle")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            {locale === "fr"
              ? "* Tarifs indicatifs · Contactez-nous pour un devis personnalisé"
              : "* Indicative prices · Contact us for a custom quote"}
          </p>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-brand-blue-dark mb-3">
              {locale === "fr" ? "Conditions de Location" : "Rental Requirements"}
            </h2>
            <p className="text-gray-500">
              {locale === "fr"
                ? "Ce dont vous avez besoin pour louer un véhicule"
                : "What you need to rent a vehicle"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5"
              >
                <div className="w-10 h-10 bg-brand-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-brand-gold font-black">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-brand-blue-dark mb-3">
              {locale === "fr" ? "Comment ça Marche ?" : "How It Works"}
            </h2>
            <p className="text-gray-500">
              {locale === "fr"
                ? "Réservez votre véhicule en 3 étapes simples"
                : "Book your vehicle in 3 simple steps"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                titleFr: "Choisissez votre véhicule",
                titleEn: "Choose your vehicle",
                descFr: "Sélectionnez la berline, le SUV ou le minibus selon vos besoins et votre groupe.",
                descEn: "Select the sedan, SUV or minibus based on your needs and group size.",
                iconPath: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
              },
              {
                step: "02",
                titleFr: "Envoyez votre demande",
                titleEn: "Send your request",
                descFr: "Remplissez le formulaire ou contactez-nous directement via WhatsApp — réponse rapide garantie.",
                descEn: "Fill in the form or contact us directly via WhatsApp — fast response guaranteed.",
                iconPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
              },
              {
                step: "03",
                titleFr: "Profitez de l'île !",
                titleEn: "Enjoy the island!",
                descFr: "Votre véhicule vous attend à l'heure convenue. Explorez Zanzibar à votre propre rythme.",
                descEn: "Your vehicle is waiting at the agreed time. Explore Zanzibar at your own pace.",
                iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-brand-blue/10 rounded-3xl mb-5 mx-auto">
                  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-brand-blue">
                    <path d={item.iconPath} />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-gold text-white text-xs font-black rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-black text-brand-blue-dark text-xl mb-2">
                  {locale === "fr" ? item.titleFr : item.titleEn}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {locale === "fr" ? item.descFr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-brand-blue-dark py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/30 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 text-brand-gold text-sm font-bold px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            {locale === "fr" ? "Besoin d'une voiture ?" : "Need a car?"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            {locale === "fr" ? (
              <>
                Louez votre <span className="text-brand-gold">véhicule</span> maintenant
              </>
            ) : (
              <>
                Rent your <span className="text-brand-gold">vehicle</span> now
              </>
            )}
          </h2>
          <p className="text-brand-sky text-xl mb-10 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Contactez-nous dès maintenant pour réserver votre véhicule et explorer Zanzibar à votre rythme."
              : "Contact us now to book your vehicle and explore Zanzibar at your own pace."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(t("pageTitle"))}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-2xl shadow-brand-gold/30"
            >
              {t("bookVehicle")} →
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
        tourTitle={selectedVehicle}
      />
    </>
  );
}
