// types/barber.ts
export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Barber {
  id: string;
  name: string;
  specialty: string;
  price: number;
  bio: string;
  calendlyUrl: string;
  whatsAppNumber: string; // Dynamic international format without spaces/symbols (e.g., "2348012345678")
  profileImage: string;
  galleryImages: string[];
  rating: number;
  reviews: Review[];
}
