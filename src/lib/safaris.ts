import { SafariPackage } from "@/types";

export const safariPackages: SafariPackage[] = [
  {
    id: "serengeti-ngorongoro",
    titleFr: "Serengeti + Ngorongoro — 3 Jours / 2 Nuits",
    titleEn: "Serengeti + Ngorongoro — 3 Days / 2 Nights",
    descriptionFr: "Grande migration, cratère Ngorongoro, game drives privés et nuit en camp dans la savane.",
    descriptionEn: "Great migration, Ngorongoro Crater, private game drives and a night in a savanna camp.",
    duration: "3 Jours / 2 Nuits",
    coverImage: "/images/serengeti-1.jpeg",
    images: [
      "/images/serengeti-1.jpeg",
      "/images/serengeti-2.jpeg",
      "/images/serengeti-3.jpeg",
      "/images/serengeti-4.jpeg",
      "/images/serengeti-6.jpeg",
      "/images/safari-maasai.jpeg",
    ],
    itineraryFr: [
      {
        day: 1,
        title: "Zanzibar → Serengeti",
        description: "Départ de Zanzibar vers l'aéroport de Seronera en Tanzanie. Votre jeep privée vous attend pour commencer le safari vers 11h00. Game drive jusqu'à 13h00, pique-nique dans la savane, puis visite jusqu'à 18h00. Dîner et nuit au Serengeti Sound Camp.",
      },
      {
        day: 2,
        title: "Serengeti → Karatu",
        description: "Réveil à 6h00, petit-déjeuner matinal. Game drive toute la matinée jusqu'à midi. Déjeuner et repos. Départ pour Karatu, arrivée vers 16h00. Repos à l'hôtel 'Farm of Dream'. Possibilité de nager en piscine et se balader en ville.",
      },
      {
        day: 3,
        title: "Ngorongoro → Zanzibar",
        description: "Dernière journée — visite du cratère Ngorongoro, l'un des plus beaux spectacles naturels d'Afrique. Game drive toute la journée. Pique-nique dans le parc vers 13h00. Départ pour Arusha puis retour à Zanzibar.",
      },
    ],
    itineraryEn: [
      {
        day: 1,
        title: "Zanzibar → Serengeti",
        description: "Depart Zanzibar to Seronera Airport in Tanzania. Your private jeep awaits to begin the safari around 11:00am. Game drive until 1:00pm, picnic in the savanna, then continue until 6:00pm. Dinner and overnight at Serengeti Sound Camp.",
      },
      {
        day: 2,
        title: "Serengeti → Karatu",
        description: "Wake up at 6:00am, early breakfast. Morning game drive until midday. Lunch and rest. Depart for Karatu, arriving around 4:00pm. Rest at the 'Farm of Dream' hotel. Option to swim in the pool and explore the town.",
      },
      {
        day: 3,
        title: "Ngorongoro → Zanzibar",
        description: "Last day — visit to Ngorongoro Crater, one of Africa's most spectacular natural sights. Full-day game drive. Picnic in the park around 1:00pm. Depart for Arusha then return to Zanzibar.",
      },
    ],
    includedFr: [
      "Transport en jeep 4x4 privée",
      "Guide anglophone/francophone",
      "Nuit en camp (Serengeti Sound Camp)",
      "Nuit à l'hôtel Farm of Dream (Karatu)",
      "Tous les repas (pique-nique + dîner)",
      "Frais d'entrée des parcs",
      "Vol Zanzibar ↔ Serengeti",
    ],
    includedEn: [
      "Private 4x4 jeep transport",
      "English/French-speaking guide",
      "1 night at Serengeti Sound Camp",
      "1 night at Farm of Dream hotel (Karatu)",
      "All meals (picnic + dinner)",
      "Park entry fees",
      "Flight Zanzibar ↔ Serengeti",
    ],
  },
  {
    id: "mikumi",
    titleFr: "Parc National de Mikumi — 3 Jours / 2 Nuits",
    titleEn: "Mikumi National Park — 3 Days / 2 Nights",
    descriptionFr: "Lions, éléphants, buffles — safari authentique en Tanzanie avec visite d'un village Masaï.",
    descriptionEn: "Lions, elephants, buffalo — authentic Tanzania safari with a Maasai village visit.",
    duration: "3 Jours / 2 Nuits",
    coverImage: "/images/safari-hero.jpeg",
    images: [
      "/images/safari-hero.jpeg",
      "/images/safari-2.jpeg",
      "/images/safari-3.jpeg",
      "/images/safari-4.jpeg",
      "/images/safari-5.jpeg",
      "/images/safari-maasai.jpeg",
    ],
    itineraryFr: [
      {
        day: 1,
        title: "Zanzibar → Mikumi",
        description: "Ferry depuis Zanzibar à 7h00, arrivée à Dar es Salaam à 8h50. Train jusqu'à Morogoro (1h30), puis voiture jusqu'à Mikumi (2h). Hôtel, douche et repas. En soirée, visite d'un village masaï avec coucher de soleil. Retour à l'hôtel vers 19h30 pour le dîner.",
      },
      {
        day: 2,
        title: "Game Drive — Mikumi",
        description: "Safari en jeep toute la journée dans le parc national de Mikumi. Observation des animaux sauvages : lions, éléphants, buffles, zèbres, girafes... Repas dans le parc. Une journée inoubliable au cœur de la savane tanzanienne.",
      },
      {
        day: 3,
        title: "Mikumi → Zanzibar",
        description: "Petit-déjeuner matinal, puis retour vers Dar es Salaam. Repas en chemin. Ferry pour Zanzibar. Fin du safari.",
      },
    ],
    itineraryEn: [
      {
        day: 1,
        title: "Zanzibar → Mikumi",
        description: "Ferry from Zanzibar at 7:00am, arriving Dar es Salaam at 8:50am. Train to Morogoro (1.5h), then drive to Mikumi (2h). Hotel, shower and meal. In the evening, visit a Maasai village at sunset. Return to hotel around 7:30pm for dinner.",
      },
      {
        day: 2,
        title: "Game Drive — Mikumi",
        description: "Full-day jeep safari in Mikumi National Park. Wildlife spotting: lions, elephants, buffalo, zebras, giraffes... Meals in the park. An unforgettable day in the heart of the Tanzanian savanna.",
      },
      {
        day: 3,
        title: "Mikumi → Zanzibar",
        description: "Early breakfast, then return toward Dar es Salaam. Lunch on the way. Ferry back to Zanzibar. End of safari.",
      },
    ],
    includedFr: [
      "Ferry Zanzibar ↔ Dar es Salaam",
      "Transport en train et voiture",
      "Jeep 4x4 pour le game drive",
      "Guide local",
      "2 nuits à l'hôtel",
      "Tous les repas",
      "Visite village Masaï",
      "Frais d'entrée du parc",
    ],
    includedEn: [
      "Ferry Zanzibar ↔ Dar es Salaam",
      "Train and car transport",
      "4x4 jeep for game drive",
      "Local guide",
      "2 hotel nights",
      "All meals",
      "Maasai village visit",
      "Park entry fees",
    ],
  },
];
