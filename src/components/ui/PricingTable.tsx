"use client";

import { useLocale } from "next-intl";

interface PriceTier {
  people: string;
  price: string;
}

interface PricingTableProps {
  tiers: PriceTier[];
  minimum?: string;
  highlightFirst?: boolean;
}

export default function PricingTable({ tiers, minimum, highlightFirst = true }: PricingTableProps) {
  const locale = useLocale();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
      {/* Header */}
      <div className="bg-brand-blue-dark px-6 py-4">
        <div className="flex justify-between items-center">
          <span className="text-brand-gold font-black text-sm uppercase tracking-widest">
            {locale === "fr" ? "Groupe" : "Group"}
          </span>
          <span className="text-brand-gold font-black text-sm uppercase tracking-widest">
            {locale === "fr" ? "Prix / Pers." : "Price / Pers."}
          </span>
        </div>
      </div>

      {/* Tiers */}
      <div className="divide-y divide-gray-100">
        {tiers.map((tier, index) => (
          <div
            key={tier.people}
            className={`flex justify-between items-center px-6 py-4 ${
              highlightFirst && index === 0
                ? "bg-brand-gold/10"
                : index % 2 === 0
                ? "bg-gray-50/50"
                : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-blue">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{tier.people}</span>
              {index === 0 && minimum && (
                <span className="bg-brand-gold text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  {locale === "fr" ? "Min" : "Min"}
                </span>
              )}
            </div>
            <span className="text-brand-blue-dark font-black text-xl">{tier.price}</span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      {minimum && (
        <div className="bg-brand-blue/5 px-6 py-3 text-center">
          <p className="text-brand-blue text-xs font-medium">
            {locale === "fr" 
              ? `Minimum ${minimum} personnes requis` 
              : `Minimum ${minimum} people required`}
          </p>
        </div>
      )}
    </div>
  );
}
