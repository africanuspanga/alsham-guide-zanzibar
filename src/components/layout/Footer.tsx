import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import OceanDivider from "@/components/ui/OceanDivider";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer>
      <OceanDivider />

      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <Image
                src="/alsham-logo.png"
                alt="AlSham Guide Zanzibar"
                width={120}
                height={48}
                className="mb-4 brightness-200"
              />
              <p className="text-brand-sky text-sm leading-relaxed">
                {t("description")}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-black text-white text-lg mb-4">{t("services")}</h3>
              <ul className="space-y-2 text-brand-sky text-sm">
                <li><Link href="/excursion" className="hover:text-brand-gold transition-colors">{nav("excursion")}</Link></li>
                <li><Link href="/safari" className="hover:text-brand-gold transition-colors">{nav("safari")}</Link></li>
                <li><Link href="/taxi-transfer" className="hover:text-brand-gold transition-colors">{nav("taxiTransfer")}</Link></li>
                <li><Link href="/car-rental" className="hover:text-brand-gold transition-colors">{nav("carRental")}</Link></li>
              </ul>
              <Link
                href="/excursion"
                className="inline-block mt-5 bg-brand-gold hover:bg-brand-gold-light text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Réserver Maintenant
              </Link>
            </div>

            {/* Important */}
            <div>
              <h3 className="font-black text-white text-lg mb-4">{t("important")}</h3>
              <ul className="space-y-2 text-brand-sky text-sm">
                <li><Link href="/" className="hover:text-brand-gold transition-colors">{nav("home")}</Link></li>
                <li><Link href="/excursion" className="hover:text-brand-gold transition-colors">{nav("excursion")}</Link></li>
                <li><Link href="/safari" className="hover:text-brand-gold transition-colors">{nav("safari")}</Link></li>
                <li><Link href="/contact" className="hover:text-brand-gold transition-colors">{nav("contact")}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-black text-white text-lg mb-4">{t("getInTouch")}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-brand-sky">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <a href="https://wa.me/255777596239" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                    +255 777 596 239
                  </a>
                </li>
                <li className="flex items-center gap-2 text-brand-sky">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a href="tel:+255714226778" className="hover:text-brand-gold transition-colors">
                    +255 714 226 778
                  </a>
                </li>
                <li className="flex items-center gap-2 text-brand-sky">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a href="mailto:info@alshamzanzibar.com" className="hover:text-brand-gold transition-colors break-all">
                    info@alshamzanzibar.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-brand-sky">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a href="mailto:Aliyshaib2017@gmail.com" className="hover:text-brand-gold transition-colors break-all">
                    Aliyshaib2017@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-brand-sky">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0 mt-0.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Zanzibar Town Center, Zanzibar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-brand-sky text-xs">
            <p>© {new Date().getFullYear()} AlSham Guide Zanzibar. <a href="https://www.driftmark.co.tz/" target="_blank" rel="noopener noreferrer" className="text-brand-sky hover:text-brand-gold transition-colors">{t("rights")}</a></p>
            <p className="text-brand-sky/60">Guide Francophone · Zanzibar & Tanzania</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
