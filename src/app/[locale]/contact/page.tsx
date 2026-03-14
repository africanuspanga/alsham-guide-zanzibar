"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import HeroSection from "@/components/sections/HeroSection";
import BookingModal from "@/components/ui/BookingModal";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [customModalOpen, setCustomModalOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message — AlSham Guide Zanzibar`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:Aliyshaib2017@gmail.com?subject=${subject}&body=${body}`, "_blank");
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-gray-50 placeholder-gray-400";
  const labelClass = "block text-sm font-bold text-gray-700 mb-1";

  return (
    <>
      <HeroSection
        compact
        titleLine1={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        imageSrc="/images/fishing-ship.jpg"
        imageAlt="Contact AlSham Guide Zanzibar"
      />

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="text-3xl font-black text-brand-blue-dark mb-8">
                {locale === "fr" ? "Informations de Contact" : "Contact Information"}
              </h2>

              <div className="space-y-5">
                {/* Bio */}
                <div className="bg-[#f0f8ff] rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed italic">
                    {locale === "fr"
                      ? "Je suis guide francophone, j'organise toutes les activités à Zanzibar et en Tanzanie — safaris, excursions, transferts. Je suis joignable à toute heure."
                      : "I am a French-speaking guide, I organise all activities in Zanzibar and Tanzania — safaris, excursions, transfers. I'm reachable at any time."}
                  </p>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/255777596239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white border-2 border-[#25D366]/30 hover:border-[#25D366] rounded-2xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">WhatsApp</p>
                    <p className="text-brand-blue-dark font-bold text-lg group-hover:text-[#25D366] transition-colors">
                      +255 777 596 239
                    </p>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:+255714226778"
                  className="flex items-center gap-4 p-5 bg-white border-2 border-brand-blue/20 hover:border-brand-blue rounded-2xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{t("phone")}</p>
                    <p className="text-brand-blue-dark font-bold text-lg group-hover:text-brand-blue transition-colors">
                      +255 714 226 778
                    </p>
                  </div>
                </a>

                {/* Email 1 */}
                <a
                  href="mailto:info@alshamzanzibar.com"
                  className="flex items-center gap-4 p-5 bg-white border-2 border-brand-gold/30 hover:border-brand-gold rounded-2xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{t("email")}</p>
                    <p className="text-brand-blue-dark font-bold group-hover:text-brand-gold transition-colors break-all">
                      info@alshamzanzibar.com
                    </p>
                  </div>
                </a>

                {/* Email 2 */}
                <a
                  href="mailto:Aliyshaib2017@gmail.com"
                  className="flex items-center gap-4 p-5 bg-white border-2 border-brand-gold/30 hover:border-brand-gold rounded-2xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{t("email")}</p>
                    <p className="text-brand-blue-dark font-bold group-hover:text-brand-gold transition-colors break-all">
                      Aliyshaib2017@gmail.com
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 p-5 bg-white border-2 border-gray-100 rounded-2xl">
                  <div className="w-12 h-12 bg-brand-blue-dark rounded-xl flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{t("address")}</p>
                    <p className="text-brand-blue-dark font-bold">Zanzibar Town Center, Zanzibar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map + Contact Form */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-72">
                <iframe
                  src="https://maps.google.com/maps?q=-6.1603,39.1996&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="AlSham Guide Zanzibar Location"
                />
              </div>

              {/* Quick contact form */}
              <div className="bg-[#f0f8ff] rounded-2xl p-7">
                <h3 className="font-black text-brand-blue-dark text-xl mb-5">
                  {t("sendMessage")}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={labelClass}>{t("nameLabel")}</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t("emailLabel")}</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t("messageLabel")}</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder={locale === "fr" ? "Votre message..." : "Your message..."}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-gold hover:bg-brand-gold-light text-white font-bold py-4 rounded-xl transition-colors"
                  >
                    {t("submitBtn")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CUSTOM TOUR CTA ─── */}
      <section className="bg-brand-blue-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-bold px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            {locale === "fr" ? "Sur mesure" : "Tailor-made"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            {locale === "fr"
              ? "Créez votre tour personnalisé"
              : "Create your custom tour"}
          </h2>
          <p className="text-brand-sky/80 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            {locale === "fr"
              ? "Vous avez une idée précise de votre aventure idéale ? Nous la concrétisons. Destinations, durée, activités — vous décidez, nous organisons."
              : "Have a specific adventure in mind? We'll make it happen. Destinations, duration, activities — you decide, we organize."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCustomModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-2xl shadow-brand-gold/30"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
              </svg>
              {locale === "fr" ? "Planifier mon tour" : "Plan my custom tour"}
            </button>
            <a
              href="https://wa.me/255777596239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
        tourTitle={locale === "fr" ? "Tour Personnalisé" : "Custom Tour"}
      />
    </>
  );
}
