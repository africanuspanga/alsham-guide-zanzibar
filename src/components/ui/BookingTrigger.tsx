"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";
import { useTranslations } from "next-intl";

interface BookingTriggerProps {
  tourTitle: string;
  className?: string;
  label?: string;
  variant?: "gold" | "outline" | "whatsapp";
}

export default function BookingTrigger({
  tourTitle,
  className,
  label,
  variant = "gold",
}: BookingTriggerProps) {
  const t = useTranslations("excursion");
  const [open, setOpen] = useState(false);

  const base =
    variant === "gold"
      ? "bg-brand-gold hover:bg-brand-gold-light text-white font-semibold py-2 rounded-xl text-sm transition-colors"
      : variant === "outline"
      ? "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-semibold py-2 rounded-xl text-sm transition-colors"
      : "bg-brand-gold hover:bg-brand-gold-light text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg";

  return (
    <>
      <button onClick={() => setOpen(true)} className={className ?? base}>
        {label ?? t("bookNow")}
      </button>
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        tourTitle={tourTitle}
      />
    </>
  );
}
