import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import WaveDivider from "@/components/ui/WaveDivider";
import BookingTrigger from "@/components/ui/BookingTrigger";
import { tours } from "@/lib/tours";
import { safariPackages } from "@/lib/safaris";

const FEATURED_SLUGS = [
  "prison-island",
  "mnemba-island",
  "safari-blue",
  "jozani-forest",
  "nakupenda-beach",
  "spice-farm",
];

const RECOMMENDATION_LOGOS = [
  {
    src: "/recommednation%20logos/TripAdvisor_Logo.svg.png",
    alt: "TripAdvisor",
    width: 140,
    height: 40,
  },
  {
    src: "/recommednation%20logos/GetYourGuide_2018.webp",
    alt: "GetYourGuide",
    width: 150,
    height: 40,
  },
  {
    src: "/recommednation%20logos/google-reviews-logo.png",
    alt: "Google Reviews",
    width: 130,
    height: 40,
  },
  {
    src: "/recommednation%20logos/trust-pilot-stacked-black.svg",
    alt: "Trustpilot",
    width: 110,
    height: 40,
  },
  {
    src: "/recommednation%20logos/Safari-Booking-Logo.png",
    alt: "Safari Booking",
    width: 140,
    height: 40,
  },
];

const TESTIMONIALS = [
  {
    name: "Sophie Tremblay",
    location: "Montréal, Québec",
    flag: "🇨🇦",
    initial: "S",
    color: "bg-brand-blue",
    tour: "Safari Blue",
    stars: 5,
    quote:
      "Notre guide était d'un professionnalisme rare — patient, drôle et vraiment passionné par son île. Le Safari Blue, c'est la journée parfaite : dauphins en liberté, snorkeling dans des eaux de cristal, déjeuner barbecue de langoustes sur une île déserte... Mon mari et moi on n'oubliera jamais ce voyage. On revient l'an prochain, c'est certain !",
  },
  {
    name: "Jean-Baptiste Moreau",
    location: "Lyon, France",
    flag: "🇫🇷",
    initial: "J",
    color: "bg-brand-blue-dark",
    tour: "Prison Island & Jozani Forest",
    stars: 5,
    quote:
      "J'avais peur de tomber sur un guide générique pour touristes pressés. Pas du tout. Ibrahim nous a emmenés dans des endroits que les guides classiques ne mentionnent jamais. La forêt de Jozani au lever du soleil avec les singes roux, puis Prison Island en bateau privé — une journée qui vaut à elle seule le voyage. Chapeau bas.",
  },
  {
    name: "Camille Laurent",
    location: "Paris, France",
    flag: "🇫🇷",
    initial: "C",
    color: "bg-[#8B5E3C]",
    tour: "Stone Town & Ferme aux Épices",
    stars: 5,
    quote:
      "Réservé via WhatsApp la veille — réponse en moins de cinq minutes. Le lendemain, visite de Stone Town + ferme aux épices + plage de Nakupenda. Organisation parfaite, tarifs honnêtes, véhicule climatisé et propre. Je n'ai rien eu à penser ou à stresser. Je recommande AlSham à absolument tous mes amis qui partent à Zanzibar.",
  },
  {
    name: "Laurent Desmet",
    location: "Bruxelles, Belgique",
    flag: "🇧🇪",
    initial: "L",
    color: "bg-[#1a5276]",
    tour: "Mnemba Island",
    stars: 5,
    quote:
      "Le transfert aéroport s'est fait sans la moindre tension — panneau à mon nom, voiture climatisée, chauffeur souriant et ponctuel. Le lendemain, Mnemba Island : nager parmi les dauphins sauvages, snorkeling au-dessus de coraux multicolores, puis sieste sur un banc de sable en plein océan. Je ne savais pas que le bonheur pouvait ressembler à ça.",
  },
  {
    name: "Marco Ferretti",
    location: "Milano, Italia",
    flag: "🇮🇹",
    initial: "M",
    color: "bg-[#2e7d32]",
    tour: "Island Tour 4x4",
    stars: 5,
    quote:
      "Zanzibar è già straordinaria di per sé, ma con AlSham diventa qualcosa di indimenticabile. Abbiamo noleggiato un 4x4 con autista per girare tutta l'isola — nord, sud, est, ovest — e ogni angolo era una sorpresa. Servizio eccellente, prezzi onesti, nessuna sorpresa spiacevole. Lo consiglio vivamente a tutti gli italiani che vengono qui.",
  },
  {
    name: "Ashley Johnson",
    location: "Miami, Florida — USA",
    flag: "🇺🇸",
    initial: "A",
    color: "bg-brand-gold",
    tour: "Safari Blue",
    stars: 5,
    quote:
      "Booking with AlSham was honestly the best decision of our entire Zanzibar trip. We messaged on WhatsApp late at night and had a confirmed itinerary by morning. Safari Blue was UNREAL — a traditional wooden dhow, wild dolphins swimming alongside us, then grilled lobster and fresh fruit on a sandbar in the middle of the ocean. 10 out of 10, no question.",
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const te = await getTranslations({ locale, namespace: "excursion" });

  const featuredTours = FEATURED_SLUGS
    .map((s) => tours.find((tour) => tour.slug === s))
    .filter(Boolean) as typeof tours;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-brand-blue overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/island-paradise.jpg"
            alt="Zanzibar"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-brand-blue/25" />
        </div>

        {/* Decorative glow blobs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-sky/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              {locale === "fr"
                ? "Guide Certifié · Zanzibar, Tanzanie"
                : "Certified Guide · Zanzibar, Tanzania"}
            </div>

            {/* Giant headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-8">
              <span className="block text-white">{t("heroTitle1")}</span>
              <span className="block text-brand-gold">{t("heroTitle2")}</span>
              <span className="block text-white">{t("heroTitle3")}</span>
            </h1>

            <p className="text-xl text-brand-sky/90 leading-relaxed mb-10 max-w-xl">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/excursion"
                className="inline-block bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-5 rounded-full text-lg transition-all shadow-2xl shadow-brand-gold/40 hover:scale-105"
              >
                {t("heroCta")} →
              </Link>
              <a
                href="https://wa.me/255777596239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-5 rounded-full text-lg transition-colors border border-white/25"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/20">
              {[
                { stat: "13+", labelFr: "Excursions", labelEn: "Excursions" },
                { stat: "2", labelFr: "Safaris", labelEn: "Safaris" },
                { stat: "5★", labelFr: "Service", labelEn: "Service" },
                { stat: "24/7", labelFr: "Disponible", labelEn: "Available" },
              ].map((item) => (
                <div key={item.stat} className="text-center">
                  <div className="text-3xl font-black text-brand-gold">{item.stat}</div>
                  <div className="text-brand-sky text-xs mt-1 font-medium">
                    {locale === "fr" ? item.labelFr : item.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#2C87B8" bottomColor="#ffffff" />

      {/* ─── VALUE PROPS ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                emoji: "🌴",
                titleFr: "Authenticité",
                titleEn: "Authenticity",
                descFr: "Nous ne faisons pas de tours catalogue. Nous créons des moments. Nous vivons ici — nous connaissons chaque recoin caché de l'île.",
                descEn: "We don't do cookie-cutter tours. We create moments. We live here — we know every hidden gem of the island.",
              },
              {
                emoji: "💎",
                titleFr: "Expertise",
                titleEn: "Expertise",
                descFr: "Guide francophone expérimenté. Zanzibar, Tanzanie — chaque piste, chaque plage secrète, chaque épice. Guidé par la passion.",
                descEn: "Experienced French-speaking guide. Zanzibar, Tanzania — every trail, hidden beach, and spice. Driven by passion.",
              },
              {
                emoji: "✨",
                titleFr: "Votre Histoire",
                titleEn: "Your Story",
                descFr: "Certains voyageurs collectionnent des souvenirs. Nous, nous collectionnons des histoires. Écrivons la vôtre ensemble — à votre rythme.",
                descEn: "Some people collect souvenirs. We collect stories. Let's write yours together — at your pace, your way.",
              },
            ].map((item) => (
              <div key={item.titleFr} className="flex flex-col gap-4">
                <div className="text-5xl">{item.emoji}</div>
                <h3 className="text-2xl font-black text-brand-blue-dark">
                  {locale === "fr" ? item.titleFr : item.titleEn}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base">
                  {locale === "fr" ? item.descFr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECOMMENDED BY ─── */}
      <section className="bg-gray-50 border-y border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-10">
            {locale === "fr" ? "Recommandé & référencé sur" : "Recommended & listed on"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {RECOMMENDATION_LOGOS.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: "36px", width: "auto", maxWidth: "160px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor="#f9fafb" bottomColor="#f8fafc" />

      {/* ─── FEATURED EXCURSIONS ─── */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark mb-3">
              {t("toursTitle")}
            </h2>
            <p className="text-brand-gold font-bold text-lg">{t("toursSubtitle")}</p>
          </div>

          {/* 3-column × 2-row grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredTours.map((tour) => {
              const title = locale === "fr" ? tour.titleFr : tour.titleEn;
              const description = locale === "fr" ? tour.descriptionFr : tour.descriptionEn;
              const duration = locale === "fr" ? tour.duration : tour.durationEn;
              return (
                <div
                  key={tour.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tour.coverImage}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Badge */}
                    {tour.badge && (
                      <span className="absolute top-4 right-0 bg-brand-blue-dark text-white text-xs font-black px-4 py-1.5 rounded-l-full shadow-lg uppercase tracking-wide">
                        {tour.badge}
                      </span>
                    )}
                    {/* Info bar at bottom of image */}
                    <div className="absolute bottom-0 inset-x-0 bg-brand-blue-dark/92 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-white font-black text-sm">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-brand-gold shrink-0" aria-hidden="true">
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                        </svg>
                        ${tour.price}{te("pricePerPerson")}
                      </span>
                      <span className="flex items-center gap-1 text-brand-sky text-xs font-semibold">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current shrink-0" aria-hidden="true">
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                        </svg>
                        {duration}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-black text-brand-blue-dark text-lg leading-tight mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 flex-1 mb-4">{description}</p>
                    <div className="flex gap-2">
                      <Link
                        href={`/excursion/${tour.slug}`}
                        className="flex-1 text-center border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black py-3 rounded-2xl text-sm transition-colors"
                      >
                        {te("viewDetails")} →
                      </Link>
                      <BookingTrigger
                        tourTitle={title}
                        label={te("bookNow")}
                        className="flex-1 bg-brand-gold hover:bg-brand-gold-light text-white font-black py-3 rounded-2xl text-sm transition-colors"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              href="/excursion"
              className="inline-block bg-brand-blue-dark hover:bg-brand-blue text-white font-black px-16 py-5 rounded-full text-xl tracking-wide transition-all hover:scale-105 shadow-2xl"
            >
              {locale === "fr" ? "VOIR TOUTES LES EXCURSIONS" : "VIEW ALL EXCURSIONS"} →
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#f8fafc" bottomColor="#0f2744" />

      {/* ─── SAFARI TEASER ─── */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">{t("safariTitle")}</h2>
            <p className="text-brand-gold font-bold text-lg">{t("safariSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safariPackages.map((pkg) => {
              const title = locale === "fr" ? pkg.titleFr : pkg.titleEn;
              const description = locale === "fr" ? pkg.descriptionFr : pkg.descriptionEn;
              return (
                <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pkg.coverImage}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="50vw"
                    />
                    <div className="absolute top-0 right-0 bg-brand-blue-dark text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wider shadow-lg">
                      {pkg.duration}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-brand-blue-dark/90 backdrop-blur-sm px-5 py-3">
                      <span className="text-brand-gold font-black text-sm uppercase tracking-wide">
                        {locale === "fr" ? "Safari Tanzania" : "Tanzania Safari"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-black text-brand-blue-dark text-xl mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm mb-5 line-clamp-2">{description}</p>
                    <Link
                      href="/safari"
                      className="inline-block border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black px-6 py-3 rounded-2xl text-sm transition-colors"
                    >
                      {locale === "fr" ? "Voir ce Safari →" : "View Safari →"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/safari"
              className="inline-block bg-brand-gold hover:bg-brand-gold-light text-white font-black px-16 py-5 rounded-full text-xl tracking-wide transition-all hover:scale-105 shadow-2xl shadow-brand-gold/30"
            >
              {locale === "fr" ? "VOIR TOUS LES SAFARIS" : "VIEW ALL SAFARIS"} →
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#0f2744" bottomColor="#ffffff" />

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark mb-3">
              {locale === "fr" ? "Ce que disent nos voyageurs" : "What our travelers say"}
            </h2>
            <p className="text-brand-gold font-bold text-lg">
              {locale === "fr"
                ? "Des aventures inoubliables — racontées par eux"
                : "Unforgettable adventures — told by them"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-3xl p-7 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-5"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="w-5 h-5 fill-brand-gold" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Tour tag */}
                <span className="inline-block self-start bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">
                  {t.tour}
                </span>

                {/* Quote */}
                <blockquote className="text-gray-600 leading-relaxed text-sm flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Author */}
                <div>
                  <div className="font-black text-brand-blue-dark text-sm">{t.name} <span>{t.flag}</span></div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ─── */}
      <section className="relative py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/island-paradise.jpg"
            alt="Zanzibar paradise"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark/96 via-brand-blue-dark/88 to-brand-blue/75" />
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 text-brand-gold text-sm font-bold px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            {locale === "fr" ? "Prêt à vivre l'aventure ?" : "Ready for the adventure?"}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            {t("contactTitle")}
          </h2>
          <p className="text-brand-sky/80 mb-12 text-xl max-w-xl mx-auto leading-relaxed">
            {t("contactSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/255777596239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-2xl shadow-green-500/30"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t("contactWhatsapp")}
            </a>
            <a
              href="tel:+255777596239"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {t("contactCall")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
