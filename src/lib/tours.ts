import { Tour } from "@/types";

export interface TourWithPricing extends Tour {
  pricingTiers?: { people: string; price: string }[];
  minimumPeople?: string;
}

export const tours: TourWithPricing[] = [
  {
    slug: "prison-island",
    titleFr: "Île Prison",
    titleEn: "Prison Island",
    descriptionFr: "Visitez l'île historique de Changuu et ses célèbres tortues géantes des Seychelles.",
    descriptionEn: "Visit the historic Changuu Island and its famous giant Seychelles tortoises.",
    longDescriptionFr: `Située à quelques kilomètres au large de Zanzibar City, Prison Island (Changuu Island) est l'un des sites historiques les plus fascinants de l'archipel. Malgré son nom, elle n'a jamais réellement servi de prison au sens classique. À la fin du XIXe siècle, elle fut utilisée comme station de quarantaine pour les personnes atteintes de maladies contagieuses.\n\nAujourd'hui, c'est une attraction touristique incontournable. Vous pouvez y découvrir les ruines de la prison en pierre, profiter d'eaux cristallines pour la baignade et le snorkeling, et rencontrer les célèbres tortues géantes des Seychelles, offertes en cadeau au troisième Sultan de Zanzibar après l'abolition de l'esclavage.`,
    longDescriptionEn: `Located a few kilometres off the coast of Zanzibar City, Prison Island (Changuu Island) is one of the most fascinating historic sites in the archipelago. Despite its name, it never truly served as a conventional prison. In the late 19th century, it was primarily used as a quarantine station for those arriving with contagious diseases.\n\nToday it is a must-visit tourist attraction where you can explore the stone ruins, swim and snorkel in crystal-clear waters, and meet the famous giant Seychelles tortoises — a gift to the third Sultan of Zanzibar after the abolition of slavery.`,
    price: 60,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/prison-island-1.jpeg",
    images: [
      "/images/prison-island-1.jpeg",
      "/images/prison-island-2.jpeg",
      "/images/prison-island-3.jpeg",
      "/images/prison-island-4.jpeg",
    ],
    badge: "Populaire",
    includedFr: ["Bateau privé", "Guide local francophone", "Entrée incluse", "Matériel de snorkeling"],
    includedEn: ["Private boat", "French-speaking local guide", "Entry fees", "Snorkeling equipment"],
    pricingTiers: [
      { people: "1-2", price: "60€" },
      { people: "3-5", price: "50€" },
      { people: "6-10", price: "45€" },
    ],
  },
  {
    slug: "maalum-cave",
    titleFr: "Grotte Maalum",
    titleEn: "Maalum Cave",
    descriptionFr: "Une piscine naturelle sacrée cachée dans une grotte de calcaire à Jambiani.",
    descriptionEn: "A sacred natural pool hidden inside a limestone cave in Jambiani.",
    longDescriptionFr: `À quelques minutes de Paje, à Jambiani, se cache Maalum Cave — une grotte de calcaire abritant une piscine naturelle d'une clarté absolue. Le nom "Maalum" signifie "Spécial" en Swahili.\n\nL'eau douce, filtrée par les roches, est fraîche et cristalline : le lieu parfait pour une baignade régénératrice. Maalum limite le nombre de visiteurs par créneau, garantissant une expérience intime. Sur place, vous pouvez également réserver un massage, déjeuner au restaurant, et vous détendre dans le jardin magnifique entourant la grotte.`,
    longDescriptionEn: `Just a few minutes from Paje, in Jambiani, lies Maalum Cave — a limestone cave sheltering a natural pool of absolute clarity. "Maalum" means "Special" in Swahili.\n\nThe fresh water, filtered through the rocks, is cool and crystal-clear — the perfect spot for a refreshing swim. Maalum limits visitor numbers per time slot, ensuring an intimate experience. On site you can also book a massage, have lunch at the restaurant, and relax in the beautiful garden surrounding the cave.`,
    price: 28,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/maalum-cave-1.jpeg",
    images: [
      "/images/maalum-cave-1.jpeg",
      "/images/maalum-cave-2.jpeg",
      "/images/maalum-cave-3.jpeg",
    ],
    includedFr: ["Transport", "Guide local", "Entrée incluse"],
    includedEn: ["Transport", "Local guide", "Entry fee included"],
  },
  {
    slug: "mnemba-island",
    titleFr: "Île Mnemba — Dauphins & Snorkeling",
    titleEn: "Mnemba Island — Dolphins & Snorkeling",
    descriptionFr: "Dauphins, snorkeling et banc de sable paradisiaque autour de l'île privée de Mnemba.",
    descriptionEn: "Dolphins, snorkeling and a paradisiacal sandbank around the private Mnemba Island.",
    longDescriptionFr: `Partez pour une demi-journée inoubliable au large de Zanzibar, à la découverte des eaux turquoise de Mnemba Island — l'un des plus beaux spots marins de l'archipel.\n\n🐬 Observation des dauphins dans leur environnement naturel, avec possibilité de nager à leurs côtés.\n🤿 Snorkeling dans des fonds marins exceptionnels : poissons tropicaux multicolores, coraux.\n🏖️ Pause sur un banc de sable paradisiaque avec plateau de fruits frais.\n\nMnemba Island est une île privée emblématique, réserve marine protégée, offrant un panorama spectaculaire.`,
    longDescriptionEn: `Set off on an unforgettable half-day off the coast of Zanzibar, discovering the turquoise waters of Mnemba Island — one of the most beautiful marine spots in the archipelago.\n\n🐬 Dolphin watching in their natural environment, with the possibility to swim alongside them.\n🤿 Snorkeling in exceptional waters: colourful tropical fish, coral reefs.\n🏖️ Stop on a paradisiacal sandbank with a fresh fruit platter.\n\nMnemba Island is an iconic private island and protected marine reserve offering a spectacular panorama.`,
    price: 50,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/mnemba-island-1.png",
    images: [
      "/images/mnemba-island-1.png",
      "/images/mnemba-island-2.jpeg",
      "/images/mnemba-island-3.jpeg",
      "/images/mnemba-island-4.jpeg",
      "/images/mnemba-island-5.jpeg",
      "/images/mnemba-island-8.jpeg",
      "/images/mnemba-island-11.jpeg",
      "/images/mnemba-island-12.jpeg",
    ],
    badge: "Populaire",
    includedFr: ["Bateau privé", "Guide francophone", "Matériel de snorkeling", "Plateau de fruits frais", "Frais d'entrée"],
    includedEn: ["Private boat", "French-speaking guide", "Snorkeling equipment", "Fresh fruit platter", "Entry fees"],
    pricingTiers: [
      { people: "1-2", price: "50€" },
      { people: "3-5", price: "40€" },
      { people: "6-10", price: "35€" },
    ],
  },
  {
    slug: "mtende-beach",
    titleFr: "Plage de Mtende",
    titleEn: "Mtende Beach",
    descriptionFr: "Le secret le mieux gardé du sud — une plage sculptée entre deux falaises de corail.",
    descriptionEn: "The best-kept secret of the south — a beach carved between two coral cliffs.",
    longDescriptionFr: `Située à la pointe sud de l'île, Mtende Beach ne ressemble à aucune autre plage de Zanzibar. Encastrée entre deux falaises de corail, la plage disparaît à marée haute pour laisser place à une lagune turquoise émeraude.\n\nOn y accède par des escaliers en bois artisanaux. Ne manquez pas le célèbre restaurant perché sur les rochers, accessible par un pont suspendu, idéal pour siroter une noix de coco face au grand bleu. Vous pourrez également observer les femmes locales qui fabriquent de la corde à partir de la cosse de noix de coco.`,
    longDescriptionEn: `Located at the southern tip of the island, Mtende Beach is like no other beach in Zanzibar. Nestled between two coral cliffs, the beach disappears at high tide, giving way to an emerald-turquoise lagoon.\n\nYou access it via hand-crafted wooden stairs. Don't miss the famous restaurant perched on the rocks, accessible by a suspension bridge — perfect for sipping a coconut while gazing at the open sea. You can also watch local women making rope from coconut husks.`,
    price: 25,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/mtende beach 1.jpeg",
    images: [
      "/images/mtende beach 1.jpeg",
      "/images/mtende beach 2.jpeg",
      "/images/mtende beach 3.jpeg",
      "/images/mtende-beach-4.jpeg",
    ],
    includedFr: ["Frais d'entrée", "Guide local", "Fruits"],
    includedEn: ["Entry fee", "Local guide", "Fruits"],
    pricingTiers: [
      { people: "1-2", price: "25€" },
      { people: "3-5", price: "20€" },
    ],
  },
  {
    slug: "nakupenda-beach",
    titleFr: "Plage Nakupenda",
    titleEn: "Nakupenda Beach",
    descriptionFr: "\"Je t'aime\" en Swahili — un banc de sable magique à 30 minutes de Stone Town.",
    descriptionEn: "\"I love you\" in Swahili — a magical sandbank 30 minutes from Stone Town.",
    longDescriptionFr: `Nakupenda Beach — dont le nom signifie "Je t'aime" en Swahili — est une magnifique plage au large de Stone Town. À seulement 30 minutes de bateau, c'est un banc de sable blanc entouré d'eaux turquoise et cristallines.\n\nLa plage apparaît à marée basse et peut disparaître partiellement à marée haute, lui donnant un aspect presque magique. L'eau y est calme, chaude et idéale pour la baignade et le snorkeling. Un cadre paradisiaque pour se détendre, admirer le paysage et profiter d'une atmosphère paisible.`,
    longDescriptionEn: `Nakupenda Beach — whose name means "I love you" in Swahili — is a magnificent beach off the coast of Stone Town. Just 30 minutes by boat, it is a white sandbank surrounded by turquoise crystal-clear waters.\n\nThe beach appears at low tide and can partially disappear at high tide, giving it an almost magical quality. The water is calm, warm and ideal for swimming and snorkelling. A paradisiacal setting to relax, admire the scenery and enjoy a peaceful atmosphere.`,
    price: 55,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/nakupenda-beach-1.jpeg",
    images: [
      "/images/nakupenda-beach-1.jpeg",
      "/images/nakupenda-beach-2.jpeg",
      "/images/nakupenda-beach-3.jpeg",
      "/images/nakupenda-beach-4.jpeg",
    ],
    badge: "Populaire",
    includedFr: ["Frais d'entrée", "Bateau privé", "Guide", "Déjeuner"],
    includedEn: ["Entry fee", "Private boat", "Guide", "Lunch"],
    pricingTiers: [
      { people: "1-2", price: "55€" },
      { people: "3-4", price: "50€" },
      { people: "5-10", price: "45€" },
    ],
    minimumPeople: "2",
  },
  {
    slug: "nakupenda-bis",
    titleFr: "Nakupenda Bis — Banc de Sable Privé",
    titleEn: "Nakupenda Bis — Private Sandbank",
    descriptionFr: "L'extension exclusive de Nakupenda — un banc de sable privé loin de la foule.",
    descriptionEn: "The exclusive extension of Nakupenda — a private sandbank away from the crowds.",
    longDescriptionFr: `Nakupenda Bis (un banc de sable privé) — Nakupenda c'est un mot romantique ça veut dire "Je t'aime" en swahili.

C'est une extension plus récente et plus tranquille du célèbre banc de sable de Nakupenda, située au large de Zanzibar, loin de Stone Town il y a presque une heure en bateau c'est pour cela qu'il y a moins de monde là-bas.

🌊 Un coin encore plus exclusif
Moins fréquenté que le banc principal, Nakupenda Bis offre une atmosphère plus intime et préservée il apparaît et disparaît au rythme des marées. Le sable y est tout aussi blanc et fin entouré d'eaux turquoise limpides, mais l'ambiance y est souvent plus calme, idéale pour ceux qui recherchent la tranquillité.

🐠 Expérience sur place
Les excursions vers Nakupenda Bis incluent généralement :
• Traversée en bateau traditionnel depuis Stone Town
• Baignade dans une belle magnifique plage
• Snorkeling autour de l'île de bawe c'est incroyable là-bas
• Déjeuner de fruits de mer ou pique-nique sur le sable (Barbecue) et des fruits exotiques. L'île mangue, passion, avocat, ananas 🍌🥑🥭🍉

🌅 Atmosphère
Le paysage reste spectaculaire : une étendue de sable blanc isolée au milieu de l'océan Indien, avec une vue panoramique à 360° sur l'eau. L'absence d'infrastructures permanentes renforce l'impression d'être sur une île éphémère et privée.

Nakupenda Bis est donc une alternative plus paisible au banc principal, parfaite pour les visiteurs souhaitant profiter tranquillement pour passer un bon moment inoubliable. Aussi c'est l'endroit le plus beau pour faire des belles photos avec un drone ou le téléphone qui te laisse pleins de souvenirs incroyables ! Vous serez émerveillé par cette expérience incroyable.`,
    longDescriptionEn: `Nakupenda Bis (a private sandbank) — Nakupenda is a romantic word that means "I love you" in Swahili.

This is a newer and quieter extension of the famous Nakupenda sandbank, located off the coast of Zanzibar, far from Stone Town — almost an hour by boat, which is why there are fewer people there.

🌊 An even more exclusive spot
Less crowded than the main sandbank, Nakupenda Bis offers a more intimate and preserved atmosphere. It appears and disappears with the tides. The sand is just as white and fine, surrounded by crystal-clear turquoise waters, but the atmosphere is often calmer — ideal for those seeking tranquility.

🐠 On-site experience
Excursions to Nakupenda Bis generally include:
• Traditional boat crossing from Stone Town
• Swimming at a beautiful beach
• Snorkeling around Bawe Island — it's incredible there
• Seafood lunch or picnic on the sand (BBQ) with exotic fruits: mango, passion fruit, avocado, pineapple 🍌🥑🥭🍉

🌅 Atmosphere
The landscape remains spectacular: an isolated stretch of white sand in the middle of the Indian Ocean, with a 360° panoramic view of the water. The absence of permanent infrastructure reinforces the feeling of being on an ephemeral and private island.

Nakupenda Bis is therefore a more peaceful alternative to the main sandbank, perfect for visitors wanting to enjoy a tranquil and unforgettable moment. It's also the most beautiful place to take stunning photos with a drone or phone that will leave you with incredible memories! You will be amazed by this incredible experience.`,
    price: 75,
    duration: "Journée complète",
    durationEn: "Full Day",
    coverImage: "/images/NAKUPENDA BIS.jpeg",
    images: [
      "/images/NAKUPENDA BIS.jpeg",
      "/images/NAKUPENDA BIS 2.jpeg",
      "/images/NAKUPENDA BIS 3.jpeg",
    ],
    badge: "Exclusif",
    includedFr: ["Bateau privé", "Déjeuner", "Fruits et boissons", "Guide", "Frais d'entrée"],
    includedEn: ["Private boat", "Lunch", "Fruits and drinks", "Guide", "Entry fee"],
    pricingTiers: [
      { people: "1-2", price: "75€" },
      { people: "3-4", price: "65€" },
      { people: "5-10", price: "55€" },
    ],
  },
  {
    slug: "forodhani-gardens",
    titleFr: "Jardins Forodhani",
    titleEn: "Forodhani Gardens",
    descriptionFr: "Le marché nocturne emblématique de Stone Town — fruits de mer, pizza zanzibarie, ambiance locale.",
    descriptionEn: "Stone Town's iconic night market — seafood, Zanzibari pizza, local atmosphere.",
    longDescriptionFr: `Le Jardin de Forodhani est un parc public situé le long du front de mer de Stone Town, face à la House of Wonders et l'Old Fort. Pendant la journée, c'est un espace verdoyant parfait pour se détendre avec une vue magnifique sur l'océan Indien.\n\nÀ partir de 18h, le parc se transforme en un marché de rue animé : fruits de mer grillés, pizza zanzibarie, samosas, mishkaki (brochettes), jus de canne à sucre... Un lieu de rencontre culturel où touristes et habitants se retrouvent, avec l'ambiance unique de "HABIB WELCOME TO ZANZIBAR — ZANZIBAR HAKUNA MATATA!"`,
    longDescriptionEn: `Forodhani Gardens is a public park along Stone Town's waterfront, facing the House of Wonders and the Old Fort. During the day it is a verdant space perfect for relaxing with a magnificent view of the Indian Ocean.\n\nFrom 6pm, the park transforms into a lively street market: grilled seafood, Zanzibari pizza, samosas, mishkaki (skewers), sugarcane juice... A cultural meeting place where tourists and locals gather, with the unique atmosphere of "HABIB WELCOME TO ZANZIBAR — ZANZIBAR HAKUNA MATATA!"`,
    price: 25,
    duration: "2 heures",
    durationEn: "2 hours",
    coverImage: "/images/forodhani-gardens-1.jpeg",
    images: [
      "/images/forodhani-gardens-1.jpeg",
      "/images/forodhani-gardens-2.jpeg",
      "/images/forodhani-gardens-3.jpeg",
      "/images/forodhani-gardens-4.jpeg",
    ],
    includedFr: ["Guide", "Visite"],
    includedEn: ["Guide", "Visit"],
  },
  {
    slug: "spice-farm",
    titleFr: "Ferme aux Épices",
    titleEn: "Spice Farm",
    descriptionFr: "Découvrez pourquoi Zanzibar est surnommée l'île aux épices — une expérience sensorielle unique.",
    descriptionEn: "Discover why Zanzibar is called the Spice Island — a unique sensory experience.",
    longDescriptionFr: `La ferme d'épices de Zanzibar est une plantation agricole traditionnelle où poussent clous de girofle, cannelle, cardamome, vanille, poivre noir, curcuma, gingembre et bien d'autres, sous le climat tropical de l'île.\n\nLors de la visite guidée, vous marchez à travers de vastes jardins, sentez, touchez et goûtez les épices directement sur les plantes. Vous apprenez comment elles sont cultivées, récoltées, transformées et utilisées dans la cuisine, la médecine traditionnelle et les rituels locaux. Zanzibar fut le premier producteur mondial de clous de girofle — un héritage vivant.`,
    longDescriptionEn: `Zanzibar's spice farm is a traditional agricultural plantation growing cloves, cinnamon, cardamom, vanilla, black pepper, turmeric, ginger and many more, in the island's tropical climate.\n\nDuring the guided tour, you walk through vast gardens, smell, touch and taste the spices directly on the plants. You learn how they are grown, harvested, processed and used in cooking, traditional medicine and local rituals. Zanzibar was once the world's largest clove producer — a living heritage.`,
    price: 30,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/spice-farm-1.jpeg",
    images: [
      "/images/spice-farm-1.jpeg",
      "/images/spice-farm-2.jpeg",
      "/images/spice-farm-3.jpeg",
    ],
    includedFr: ["Frais d'entrée", "Guide local", "Dégustation d'épices et de fruits"],
    includedEn: ["Entry fee", "Local guide", "Spice and fruit tasting"],
    pricingTiers: [
      { people: "1-2", price: "30€" },
      { people: "3-4", price: "25€" },
      { people: "5-10", price: "20€" },
    ],
  },
  {
    slug: "pungume-island",
    titleFr: "Île Pungume",
    titleEn: "Pungume Island",
    descriptionFr: "Snorkeling, banc de sable, singes à dos rouge et mangroves — une journée complète en mer.",
    descriptionEn: "Snorkeling, sandbank, red colobus monkeys and mangroves — a full day at sea.",
    longDescriptionFr: `L'île de Pungume fait partie d'une aire marine protégée — idéale pour les amateurs de plages tranquilles, d'eaux claires et de snorkeling loin des foules. Les visiteurs prennent un bateau local pour faire du snorkeling, chercher des étoiles de mer, se reposer sur le banc de sable et déguster des fruits avec un barbecue de fruits de mer (langouste, calamars, crevettes, poissons).\n\nEnsuite, direction l'île de Uzi pour observer les singes à dos rouge et découvrir les mangroves — ces plantes fascinantes qui poussent dans l'eau de mer.`,
    longDescriptionEn: `Pungume Island is part of a protected marine area — perfect for lovers of quiet beaches, clear waters and snorkelling away from the crowds. Visitors take a local boat to snorkel, look for starfish, relax on the sandbank and enjoy a seafood barbecue (lobster, squid, shrimp, fish with fries).\n\nThen head to Uzi Island to observe the red colobus monkeys and discover the mangroves — those fascinating plants that grow in seawater.`,
    price: 75,
    duration: "Journée complète",
    durationEn: "Full Day",
    coverImage: "/images/pungume-island-1.jpeg",
    images: [
      "/images/pungume-island-1.jpeg",
      "/images/pungume-island-3.jpeg",
      "/images/pungume-island-5.jpeg",
      "/images/pungume-island-extra-1.jpeg",
      "/images/pungume-island-extra-2.jpeg",
    ],
    includedFr: ["Frais d'entrée", "Bateau privé", "Déjeuner", "Guide"],
    includedEn: ["Entry fee", "Private boat", "Lunch", "Guide"],
    pricingTiers: [
      { people: "1-2", price: "75€" },
      { people: "3-4", price: "70€" },
      { people: "5-10", price: "65€" },
    ],
    minimumPeople: "2",
  },
  {
    slug: "safari-blue",
    titleFr: "Safari Blue",
    titleEn: "Safari Blue",
    descriptionFr: "Journée complète en mer dans la Menai Bay — snorkeling, voile traditionnelle, barbecue de fruits de mer.",
    descriptionEn: "Full day at sea in Menai Bay — snorkeling, traditional sailing, seafood barbecue.",
    longDescriptionFr: `Safari Blue est une excursion en mer d'une journée complète autour de la Menai Bay Conservation Area, zone marine protégée au large de la côte sud-ouest de Zanzibar.\n\nDépart du village de pêcheurs de Fumba à bord d'un bateau traditionnel en bois. Circuit avec arrêts snorkeling dans les récifs coralliens, visite d'un banc de sable isolé, et moment fort : le déjeuner barbecue swahili avec poissons grillés, langoustes, calamars et fruits tropicaux sur une petite île.\n\nAprès-midi : exploration d'un baobab géant, lagune de mangrove cachée, puis retour à Fumba.`,
    longDescriptionEn: `Safari Blue is a full-day boat excursion around the Menai Bay Conservation Area, a protected marine zone off Zanzibar's south-west coast.\n\nDepart from the fishing village of Fumba aboard a traditional wooden boat. The circuit includes snorkelling stops at colourful coral reefs, a visit to an isolated sandbank, and the highlight: a Swahili barbecue lunch with grilled fish, lobster, squid and tropical fruits on a small island.\n\nAfternoon: exploration of a giant baobab, hidden mangrove lagoon, then return to Fumba.`,
    price: 60,
    duration: "Journée complète",
    durationEn: "Full Day (~8-9h)",
    coverImage: "/images/safari-blue-1.jpeg",
    images: [
      "/images/safari-blue-1.jpeg",
      "/images/safari-blue-2.jpeg",
      "/images/safari-blue-3.jpeg",
      "/images/safari-blue-4.jpeg",
      "/images/safari-blue-5.jpeg",
      "/images/safari-blue-6.jpeg",
      "/images/safari-blue-7.jpeg",
      "/images/safari-blue-8.jpeg",
    ],
    badge: "Populaire",
    includedFr: ["Frais d'entrée", "Bateau privé", "Déjeuner", "Guide"],
    includedEn: ["Entry fee", "Private boat", "Lunch", "Guide"],
    pricingTiers: [
      { people: "1-2", price: "60€" },
      { people: "3-5", price: "55€" },
      { people: "6-10", price: "50€" },
    ],
    minimumPeople: "2",
  },
  {
    slug: "jozani-forest",
    titleFr: "Forêt de Jozani",
    titleEn: "Jozani Forest",
    descriptionFr: "Le seul parc national de Zanzibar — observez les singes colobes rouges endémiques.",
    descriptionEn: "Zanzibar's only national park — observe the endemic red colobus monkeys.",
    longDescriptionFr: `La forêt de Jozani, seul parc national de Zanzibar (Jozani Chwaka Bay), est une réserve naturelle protégée connue pour sa végétation dense : grands arbres tropicaux, mangroves et plantes médicinales.\n\nElle abrite le célèbre singe colobus à dos rouge de Zanzibar — espèce rare que l'on ne trouve nulle part ailleurs dans le monde. Les visiteurs se promènent sur des sentiers aménagés, découvrent la biodiversité locale et visitent les zones de mangroves. Un lieu calme et naturel, idéal pour les amoureux de la nature.`,
    longDescriptionEn: `Jozani Forest, Zanzibar's only national park (Jozani Chwaka Bay), is a protected natural reserve known for its dense vegetation: large tropical trees, mangroves and medicinal plants.\n\nIt is home to the famous Zanzibar red colobus monkey — a rare species found nowhere else in the world. Visitors walk along well-marked trails, discover local biodiversity and visit the mangrove areas. A peaceful natural setting, ideal for nature lovers.`,
    price: 35,
    duration: "2h30",
    durationEn: "2.5 hours",
    coverImage: "/images/jozani-forest-1.jpeg",
    images: [
      "/images/jozani-forest-1.jpeg",
      "/images/jozani-forest-2.jpeg",
      "/images/jozani-forest-3.jpeg",
      "/images/jozani-forest-4.jpeg",
    ],
    includedFr: ["Frais d'entrée", "Guide"],
    includedEn: ["Entry fee", "Guide"],
    pricingTiers: [
      { people: "1-4", price: "35€" },
      { people: "5-10", price: "30€" },
    ],
  },
  {
    slug: "stone-town",
    titleFr: "Stone Town",
    titleEn: "Stone Town",
    descriptionFr: "Visite guidée du patrimoine mondial UNESCO — ruelles, portes sculptées, histoire swahilie.",
    descriptionEn: "Guided tour of the UNESCO World Heritage site — alleyways, carved doors, Swahili history.",
    longDescriptionFr: `Stone Town, vieille ville de Zanzibar classée au patrimoine mondial de l'UNESCO depuis 2000, est célèbre pour son architecture unique mêlant influences swahilie, arabe, perse, indienne et européenne.\n\nLabyrinthe de ruelles bordées de maisons en pierre de corail, grandes portes en bois sculptées, Old Fort omanais du XVIIe siècle, Maison de Merveille (Beit el-Ajaib), marché aux esclaves, maison natale de Freddie Mercury... Une ville vivante et authentique, avec les marchés animés, cafés traditionnels et couchers de soleil spectaculaires face à l'océan Indien.`,
    longDescriptionEn: `Stone Town, Zanzibar's old city listed as a UNESCO World Heritage Site since 2000, is famous for its unique architecture blending Swahili, Arab, Persian, Indian and European influences.\n\nA labyrinth of narrow streets lined with coral stone houses, large carved wooden doors, the 17th-century Omani Old Fort, the House of Wonders (Beit el-Ajaib), the slave market, and Freddie Mercury's birthplace... A vibrant and authentic city, with lively markets, traditional cafés and spectacular sunsets over the Indian Ocean.`,
    price: 30,
    duration: "3 heures",
    durationEn: "3 hours",
    coverImage: "/images/stone-town-1.jpeg",
    images: [
      "/images/stone-town-1.jpeg",
      "/images/stone-town-2.jpeg",
      "/images/stone-town-3.jpeg",
      "/images/stone-town-4.jpeg",
      "/images/stone-town-5.jpeg",
      "/images/stone-town-6.jpeg",
    ],
    includedFr: ["Guide", "Visite"],
    includedEn: ["Guide", "Visit"],
    pricingTiers: [
      { people: "1-2", price: "30€" },
      { people: "3-5", price: "25€" },
      { people: "6-10", price: "20€" },
    ],
  },
  {
    slug: "quad-tour",
    titleFr: "Tour en Quad",
    titleEn: "Quad Tour",
    descriptionFr: "Explorez les villages, plantations et plages de Zanzibar à bord d'un quad tout-terrain.",
    descriptionEn: "Explore Zanzibar's villages, plantations and beaches on an all-terrain quad bike.",
    longDescriptionFr: `Une aventure inoubliable pour découvrir l'île autrement. Un guide local vous accueille, vous explique les consignes de sécurité et vous équipe. Même les débutants peuvent participer — la prise en main est simple et l'accompagnement constant.\n\nL'excursion traverse villages traditionnels, plantations de cocotiers et champs de canne à sucre sur des chemins de terre rouge. Vous observez la vie locale, échangez avec les habitants, dégustez des fruits et visitez une plage.\n\n✓ 3 heures de visite · Pause village · Dégustation de fruits · Visite de la plage`,
    longDescriptionEn: `An unforgettable adventure to discover the island differently. A local guide welcomes you, explains the safety rules and equips you. Even beginners can participate — easy handling and constant supervision.\n\nThe excursion takes you through traditional villages, coconut plantations and sugarcane fields on red dirt roads. You observe local life, chat with residents, taste fruits and visit a beach.\n\n✓ 3 hours · Village stop · Fruit tasting · Beach visit`,
    price: 90,
    duration: "3 heures",
    durationEn: "3 hours",
    coverImage: "/images/quad-tour-1.jpeg",
    images: [
      "/images/quad-tour-1.jpeg",
      "/images/quad-tour-2.jpeg",
      "/images/quad-tour-3.jpeg",
      "/images/quad-tour-4.jpeg",
    ],
    includedFr: ["Visite en quad", "Guide", "Frais d'entrée"],
    includedEn: ["Quad tour", "Guide", "Entry fee"],
  },
  {
    slug: "blue-lagoon",
    titleFr: "Blue Lagoon",
    titleEn: "Blue Lagoon",
    descriptionFr: "Des eaux d'une clarté exceptionnelle près de Michamvi — snorkeling et détente dans un cadre idyllique.",
    descriptionEn: "Exceptionally clear waters near Michamvi — snorkeling and relaxation in an idyllic setting.",
    longDescriptionFr: `Le Blue Lagoon, situé sur la côte est de l'île près du village de Michamvi, est réputé pour la clarté exceptionnelle de son eau et ses magnifiques nuances de bleu turquoise.\n\nEntouré de récifs coralliens abritant une grande variété de poissons tropicaux, l'eau est généralement calme, chaude et transparente — idéale pour le snorkeling et la baignade. À proximité se trouve le célèbre The Rock Restaurant. Le coucher de soleil sur le lagon est spectaculaire.`,
    longDescriptionEn: `Blue Lagoon, located on the island's east coast near the village of Michamvi, is renowned for the exceptional clarity of its water and its magnificent turquoise hues.\n\nSurrounded by coral reefs sheltering a wide variety of tropical fish, the water is generally calm, warm and transparent — ideal for snorkelling and swimming. Nearby is the famous The Rock Restaurant. The sunset over the lagoon is spectacular.`,
    price: 40,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/blue-lagoon-1.jpeg",
    images: [
      "/images/blue-lagoon-1.jpeg",
      "/images/blue-lagoon-2.jpeg",
      "/images/blue-lagoon-4.jpeg",
    ],
    includedFr: ["Frais d'entrée", "Bateau privé", "Guide", "Fruits", "Matériel de snorkeling"],
    includedEn: ["Entry fee", "Private boat", "Guide", "Fruits", "Snorkeling equipment"],
    pricingTiers: [
      { people: "1-2", price: "40€" },
      { people: "3-5", price: "35€" },
      { people: "6-10", price: "30€" },
    ],
  },
  {
    slug: "salaam-cave",
    price: 25,
    titleFr: "Salaam Cave",
    titleEn: "Salaam Cave",
    descriptionFr: "Grotte naturelle en corail avec piscine d'eau claire aux reflets bleus — nagez avec les tortues dans ce sanctuaire préservé.",
    descriptionEn: "Natural coral cave with crystal clear blue water pool — swim with turtles in this preserved sanctuary.",
    longDescriptionFr: `C'est une attraction naturelle située près du village de Kizimkazi Dimbani sur l'île d'Unguja (Zanzibar), dans le sud de Zanzibar, Tanzanie.

La Cave est une grotte naturelle en corail et calcaire, formée par des siècles d'érosion et d'eau souterraine. À l'intérieur se trouve une vaste piscine d'eau claire aux reflets bleus spectaculaires où l'on peut nager, flotter, ou simplement se détendre dans un milieu calme et frais, loin du soleil extérieur.

🐢 Interaction avec les tortues

Le site est connu pour être un sanctuaire de conservation de tortues marines :
• On peut nager avec les tortues qui y vivent, les observer dans l'eau et parfois les nourrir avec des algues, sous la surveillance des guides.
• C'est une expérience unique qui permet de se rapprocher de ces animaux tout en apprenant sur les efforts de protection.
• La cave est propre et beau paysage pour faire des photos.`,
    longDescriptionEn: `This is a natural attraction located near Kizimkazi Dimbani village on Unguja Island (Zanzibar), in the south of Zanzibar, Tanzania.

The Cave is a natural coral and limestone cave, formed over centuries by erosion and groundwater. Inside is a large pool of crystal clear water with spectacular blue reflections where you can swim, float, or simply relax in a calm and cool environment, away from the outside sun.

🐢 Turtle Interaction

The site is known as a sea turtle conservation sanctuary:
• You can swim with the turtles that live there, observe them in the water and sometimes feed them algae, under the supervision of guides.
• It's a unique experience that allows you to get close to these animals while learning about conservation efforts.
• The cave is clean and has beautiful scenery for taking photos.`,
    price: 25,
    duration: "Demi-journée",
    durationEn: "Half Day",
    coverImage: "/images/Salaam Cave 1.jpeg",
    images: [
      "/images/Salaam Cave 1.jpeg",
      "/images/Salaam Cave 2.jpeg",
      "/images/Salaam Cave 3.jpeg",
      "/images/Salaam Cave 4.jpeg",
    ],
    includedFr: ["Transport", "Guide local", "Entrée à la grotte", "Interaction avec les tortues"],
    includedEn: ["Transport", "Local guide", "Cave entry", "Turtle interaction"],
  },
];

export function getTourBySlug(slug: string): TourWithPricing | undefined {
  return tours.find((t) => t.slug === slug);
}
