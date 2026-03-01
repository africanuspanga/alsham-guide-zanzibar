import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface HeroSectionProps {
  titleLine1: string;
  titleLine2?: string;
  titleLine3?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  compact?: boolean;
}

export default function HeroSection({
  titleLine1,
  titleLine2,
  titleLine3,
  subtitle,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  compact = false,
}: HeroSectionProps) {
  if (compact) {
    return (
      <section className="relative bg-brand-blue-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            {titleLine1}{" "}
            {titleLine2 && <span className="text-brand-gold">{titleLine2}</span>}
            {titleLine3 && <> {titleLine3}</>}
          </h1>
          {subtitle && (
            <p className="text-lg text-brand-sky max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-blue min-h-[560px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            {titleLine1}
            <br />
            {titleLine2 && (
              <span className="text-brand-gold">{titleLine2}</span>
            )}
            {titleLine3 && (
              <>
                <br />
                <span className="text-white">{titleLine3}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="text-brand-sky text-lg leading-relaxed mb-8 max-w-lg">
              {subtitle}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-block bg-brand-gold hover:bg-brand-gold-light text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
            >
              {ctaLabel}
            </Link>
          )}
        </div>

        {/* Image */}
        <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
