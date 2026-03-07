import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BookingTrigger from "./BookingTrigger";
import { Tour } from "@/types";

interface TourCardServerProps {
  tour: Tour;
  locale: string;
}

export default async function TourCardServer({ tour, locale }: TourCardServerProps) {
  const t = await getTranslations("excursion");

  const title = locale === "fr" ? tour.titleFr : tour.titleEn;
  const description = locale === "fr" ? tour.descriptionFr : tour.descriptionEn;
  const duration = locale === "fr" ? tour.duration : tour.durationEn;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={tour.coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {tour.badge && (
          <span className="absolute top-3 right-3 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {tour.badge}
          </span>
        )}
      </div>

      {/* Info bar */}
      <div className="bg-brand-blue-dark text-white px-4 py-2 flex items-center justify-between text-sm">
        <span className="font-semibold">€{tour.price}{t("pricePerPerson")}</span>
        {duration && (
          <span className="flex items-center gap-1 text-brand-sky">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
            {duration}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-black text-brand-blue-dark text-lg leading-tight mb-2">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 flex-1">{description}</p>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Link
            href={`/excursion/${tour.slug}`}
            className="flex-1 text-center border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-semibold py-2 rounded-xl text-sm transition-colors"
          >
            {t("viewDetails")} →
          </Link>
          <BookingTrigger
            tourTitle={title}
            className="flex-1 bg-brand-gold hover:bg-brand-gold-light text-white font-semibold py-2 rounded-xl text-sm transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
