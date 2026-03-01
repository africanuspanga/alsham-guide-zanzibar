"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { BookingFormData } from "@/types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle?: string;
}

const WHATSAPP_NUMBER = "255777596239";
const EMAIL = "Aliyshaib2017@gmail.com";

const defaultForm: BookingFormData = {
  fullName: "",
  email: "",
  phone: "",
  numberOfPeople: 1,
  preferredDate: "",
  country: "",
  specialRequests: "",
};

export default function BookingModal({
  isOpen,
  onClose,
  tourTitle,
}: BookingModalProps) {
  const t = useTranslations("booking");
  const [form, setForm] = useState<BookingFormData>(defaultForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setForm(defaultForm);
      setErrors({});
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  function validate(): boolean {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!form.fullName.trim()) newErrors.fullName = t("required");
    if (!form.email.trim()) newErrors.email = t("required");
    if (!form.phone.trim()) newErrors.phone = t("required");
    if (!form.preferredDate) newErrors.preferredDate = t("required");
    if (!form.country.trim()) newErrors.country = t("required");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function buildMessage() {
    return [
      `🌴 *Réservation — AlSham Guide Zanzibar*`,
      tourTitle ? `*Excursion :* ${tourTitle}` : "",
      `*Nom :* ${form.fullName}`,
      `*Email :* ${form.email}`,
      `*Téléphone :* ${form.phone}`,
      `*Personnes :* ${form.numberOfPeople}`,
      `*Date :* ${form.preferredDate}`,
      `*Pays :* ${form.country}`,
      form.specialRequests ? `*Demandes :* ${form.specialRequests}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleWhatsApp() {
    if (!validate()) return;
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    onClose();
  }

  function handleEmail() {
    if (!validate()) return;
    const subject = encodeURIComponent(
      `Réservation${tourTitle ? ` — ${tourTitle}` : ""}`
    );
    const body = encodeURIComponent(buildMessage());
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    onClose();
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-gray-50 placeholder-gray-400";
  const labelClass = "block text-sm font-bold text-gray-800 mb-1";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 pt-8 pb-4 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-light leading-none"
            aria-label={t("close")}
          >
            ×
          </button>
          <h2 className="text-3xl font-black text-brand-blue-dark text-center">
            {t("title")}
          </h2>
          {tourTitle && (
            <p className="text-center text-gray-500 mt-1 text-sm">{tourTitle}</p>
          )}
        </div>

        {/* Form */}
        <div className="px-8 py-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className={labelClass}>
              {t("fullName")} <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              type="text"
              placeholder={t("fullNamePlaceholder")}
              value={form.fullName}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>
              {t("email")} <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>
              {t("phone")} <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              placeholder={t("phonePlaceholder")}
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>

          {/* People + Date row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>
                {t("people")} <span className="text-red-500">*</span>
              </label>
              <input
                name="numberOfPeople"
                type="number"
                min="1"
                max="50"
                value={form.numberOfPeople}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                {t("date")} <span className="text-red-500">*</span>
              </label>
              <input
                name="preferredDate"
                type="date"
                value={form.preferredDate}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.preferredDate && (
                <p className={errorClass}>{errors.preferredDate}</p>
              )}
            </div>
          </div>

          {/* Country */}
          <div>
            <label className={labelClass}>
              {t("country")} <span className="text-red-500">*</span>
            </label>
            <input
              name="country"
              type="text"
              placeholder={t("countryPlaceholder")}
              value={form.country}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.country && <p className={errorClass}>{errors.country}</p>}
          </div>

          {/* Special Requests */}
          <div>
            <label className={labelClass}>{t("specialRequests")}</label>
            <textarea
              name="specialRequests"
              rows={3}
              placeholder={t("specialRequestsPlaceholder")}
              value={form.specialRequests}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t("submitWhatsapp")}
            </button>
            <button
              onClick={handleEmail}
              className="w-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {t("submitEmail")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
