"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguagePicker from "@/components/ui/LanguagePicker";

const navLinks = [
  { key: "home", href: "/" },
  { key: "carRental", href: "/car-rental" },
  { key: "taxiTransfer", href: "/taxi-transfer" },
  { key: "safari", href: "/safari" },
  { key: "excursion", href: "/excursion" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/alsham-logo.png"
              alt="AlSham Guide Zanzibar"
              width={210}
              height={84}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ key, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-brand-gold border-b-2 border-brand-gold pb-0.5"
                      : "text-brand-blue-dark hover:text-brand-gold"
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguagePicker />
            <Link
              href="/contact"
              className="bg-brand-gold hover:bg-brand-gold-light text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguagePicker />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 text-brand-blue-dark"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[112px] z-40 bg-white px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-brand-blue-dark font-bold uppercase tracking-wide text-lg border-b border-gray-100 pb-3 hover:text-brand-gold transition-colors"
              >
                {t(key)}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-brand-gold text-white font-bold text-center py-3 rounded-full text-lg"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
