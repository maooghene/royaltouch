// data/barbers.ts
import { Barber } from "@/types/barber";

export const barbers: Barber[] = [
  {
    id: "alex-gold",
    name: "Alex 'Gold' Touch",
    specialty: "Luxury Fades & Beard Sculpting",
    price: 25,
    bio: "With over 5 years of campus styling experience, Alex specializes in premium skin fades, razor-sharp lineups, and custom beard treatment. Bringing precision styling straight to your hostel doorstep.",
    calendlyUrl: "https://calendly.com",
    whatsAppNumber: "2348012345678",
    profileImage: "/images/alex-profile.jpg",
    galleryImages: [
      "/images/gallery-fade-1.jpg",
      "/images/gallery-fade-2.jpg",
      "/images/gallery-fade-3.jpg",
    ],
    rating: 4.9,
    reviews: [
      {
        id: "r1",
        customerName: "Tunde O.",
        rating: 5,
        comment:
          "Best fade I have gotten on campus. Clean work and prompt arrival.",
        date: "2 days ago",
      },
      {
        id: "r2",
        customerName: "David K.",
        rating: 5,
        comment:
          "Incredibly convenient. Did not have to leave my room during exams.",
        date: "1 week ago",
      },
    ],
  },
  {
    id: "marcus-vibe",
    name: "Marcus Vibe",
    specialty: "Classic Cuts & Texturized Styling",
    price: 20,
    bio: "Specializing in traditional campus trends, taper fades, and afro-textured maintenance. Marcus brings elite energy and immaculate grooming cleanups right to your door.",
    calendlyUrl: "https://calendly.com",
    whatsAppNumber: "2348011112222",
    profileImage: "/images/marcus-profile.jpg",
    galleryImages: [
      "/images/gallery-classic-1.jpg",
      "/images/gallery-classic-2.jpg",
    ],
    rating: 4.8,
    reviews: [
      {
        id: "r3",
        customerName: "Emeka A.",
        rating: 4,
        comment: "Super friendly guy and the lineup was perfectly symmetrical.",
        date: "3 days ago",
      },
    ],
  },
];
