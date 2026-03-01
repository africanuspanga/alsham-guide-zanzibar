export interface Tour {
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  longDescriptionFr: string;
  longDescriptionEn: string;
  price: number;
  duration: string;
  durationEn: string;
  images: string[];
  coverImage: string;
  badge?: string;
  includedFr?: string[];
  includedEn?: string[];
}

export interface SafariPackage {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  duration: string;
  images: string[];
  coverImage: string;
  price?: string;
  itineraryFr: { day: number; title: string; description: string }[];
  itineraryEn: { day: number; title: string; description: string }[];
  includedFr: string[];
  includedEn: string[];
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  preferredDate: string;
  country: string;
  specialRequests?: string;
}
