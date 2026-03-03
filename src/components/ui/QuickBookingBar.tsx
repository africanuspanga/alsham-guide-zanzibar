"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

const zanzibarLocations = [
  "Zanzibar International Airport (ZNZ)",
  "Stone Town",
  "Nungwi",
  "Kendwa",
  "Paje",
  "Jambiani",
  "Matemwe",
  "Kiwengwa",
  "Pongwe",
  "Michamvi",
  "Kizimkazi",
  "Bwejuu",
  "Uroa",
  "Jozani Forest",
  "Mnemba Island",
  "Blue Safari Fumba",
  "Safari Blue Fumba",
  "Fumba",
  "Makunduchi",
  "Zanzibar Port",
  "Zanzibar City",
];

const vehicleOptions = [
  { value: "van", labelFr: "Van (1-5)", labelEn: "Van (1-5)", capacity: "1-5" },
  { value: "minibus", labelFr: "Mini Bus (1-10)", labelEn: "Mini Bus (1-10)", capacity: "1-10" },
  { value: "bus", labelFr: "Bus (1-28)", labelEn: "Bus (1-28)", capacity: "1-28" },
];

export default function QuickBookingBar() {
  const locale = useLocale();
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    passengers: "2",
    date: "",
    time: "",
    vehicle: "van",
  });
  const [showLocations, setShowLocations] = useState<"pickup" | "dropoff" | null>(null);

  const handleSubmit = () => {
    const vehicle = vehicleOptions.find((v) => v.value === formData.vehicle);
    const vehicleLabel = locale === "fr" ? vehicle?.labelFr : vehicle?.labelEn;
    
    const message = locale === "fr"
      ? `Bonjour ! Je souhaite réserver un transfert:\n\n🚗 Véhicule: ${vehicleLabel}\n📍 Départ: ${formData.pickup || "Non spécifié"}\n📍 Arrivée: ${formData.dropoff || "Non spécifié"}\n👥 Passagers: ${formData.passengers}\n📅 Date: ${formData.date || "Non spécifiée"}\n🕐 Heure: ${formData.time || "Non spécifiée"}\n\nPouvez-vous me confirmer la disponibilité et le prix ?`
      : `Hello! I would like to book a transfer:\n\n🚗 Vehicle: ${vehicleLabel}\n📍 From: ${formData.pickup || "Not specified"}\n📍 To: ${formData.dropoff || "Not specified"}\n👥 Passengers: ${formData.passengers}\n📅 Date: ${formData.date || "Not specified"}\n🕐 Time: ${formData.time || "Not specified"}\n\nCan you confirm availability and price?`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/255777596239?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  };

  const filterLocations = (query: string) => {
    return zanzibarLocations.filter((loc) =>
      loc.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Title */}
        <h2 className="text-2xl font-black text-brand-blue-dark mb-6">
          {locale === "fr" ? "Réservez votre transfert" : "Book Your Ride"}
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Pick Up Location */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {locale === "fr" ? "Lieu de prise en charge" : "Pick Up Location"}
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.pickup}
                onChange={(e) => {
                  setFormData({ ...formData, pickup: e.target.value });
                  setShowLocations("pickup");
                }}
                onFocus={() => setShowLocations("pickup")}
                placeholder={locale === "fr" ? "Entrez le lieu" : "Type location"}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              />
              <svg viewBox="0 0 24 24" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 fill-current">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            {showLocations === "pickup" && formData.pickup && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl max-h-48 overflow-y-auto z-50">
                {filterLocations(formData.pickup).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setFormData({ ...formData, pickup: loc });
                      setShowLocations(null);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Drop Off Location */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {locale === "fr" ? "Lieu de destination" : "Drop Off Location"}
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.dropoff}
                onChange={(e) => {
                  setFormData({ ...formData, dropoff: e.target.value });
                  setShowLocations("dropoff");
                }}
                onFocus={() => setShowLocations("dropoff")}
                placeholder={locale === "fr" ? "Entrez le lieu" : "Type location"}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              />
              <svg viewBox="0 0 24 24" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 fill-current">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            {showLocations === "dropoff" && formData.dropoff && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl max-h-48 overflow-y-auto z-50">
                {filterLocations(formData.dropoff).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setFormData({ ...formData, dropoff: loc });
                      setShowLocations(null);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {locale === "fr" ? "Passagers" : "Passengers"}
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="28"
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              />
              <svg viewBox="0 0 24 24" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 fill-current">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
          </div>

          {/* Pick Up Date */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {locale === "fr" ? "Date" : "Pick Up Date"}
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              />
              <svg viewBox="0 0 24 24" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 fill-current pointer-events-none">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
              </svg>
            </div>
          </div>

          {/* Pick Up Time */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {locale === "fr" ? "Heure" : "Pick Up Time"}
            </label>
            <div className="relative">
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              />
              <svg viewBox="0 0 24 24" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 fill-current pointer-events-none">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {locale === "fr" ? "Type de véhicule" : "Vehicle Type"}
            </label>
            <select
              value={formData.vehicle}
              onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-white"
            >
              {vehicleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {locale === "fr" ? option.labelFr : option.labelEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto bg-brand-gold hover:bg-brand-gold-light text-white font-black px-10 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            {locale === "fr" ? "RÉSERVER SUR WHATSAPP" : "BOOK ON WHATSAPP"}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
