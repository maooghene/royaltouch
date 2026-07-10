// app/barbers/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Star,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { barbers } from "@/data/barbers";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import BarberGallery from "@/components/BarberGallery";

// Generates static paths at build time for instant file loading performance
export function generateStaticParams() {
  return barbers.map((barber) => ({ id: barber.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BarberProfilePage({ params }: PageProps) {
  const { id } = await params;
  const barber = barbers.find((b) => b.id === id);

  if (!barber) notFound();

  // Custom pre-filled WhatsApp message for quick student inquiries
  const whatsAppMessage = encodeURIComponent(
    `Hi ${barber.name}, I am a student booking a room-delivery cut on campus through Royal Touch. Just wanted to connect!`,
  );

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Navigation Breadcrumb Link */}
        <Link
          href="/barbers"
          className="inline-flex items-center space-x-2 text-sm text-brand-text/60 hover:text-brand-accent mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all barbers</span>
        </Link>

        {/* Barber Overview Summary Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-brand-border bg-brand-surface">
              <Image
                src={barber.profileImage}
                alt={barber.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between py-2">
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
                  {barber.name}
                </h1>
                <div className="flex items-center space-x-1 px-3 py-1 bg-brand-surface border border-brand-border rounded-full text-brand-accent text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold text-brand-text">
                    {barber.rating}
                  </span>
                </div>
              </div>
              <p className="text-lg text-brand-accent font-medium mb-4">
                {barber.specialty}
              </p>
              <p className="text-brand-text/80 leading-relaxed mb-6 max-w-2xl">
                {barber.bio}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-brand-border">
              <div>
                <span className="text-xs uppercase tracking-wider text-brand-text/40 block">
                  In-Room Delivery Rate
                </span>
                <span className="text-2xl font-bold text-brand-text">
                  ${barber.price}{" "}
                  <span className="text-sm font-normal text-brand-text/60">
                    per cut
                  </span>
                </span>
              </div>
              <a
                href={`https://wa.me{barber.whatsAppNumber}?text=${whatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] text-[#0E0B09] font-bold px-6 py-3 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Booking Frame split with Portfolio Feedback column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Scheduling Calendar Engine Widget (Left Column) */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold tracking-wide border-b border-brand-border pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
              <span>Select Date & Time</span>
            </h2>
            <CalendlyEmbed url={barber.calendlyUrl} />
          </div>

          {/* Social Proof + Portfolio Content (Right Column) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-xl font-semibold tracking-wide border-b border-brand-border pb-3 mb-4 flex items-center gap-2">
                <span>Recent Work</span>
              </h2>
              <BarberGallery images={barber.galleryImages} />
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-wide border-b border-brand-border pb-3 mb-4">
                Student Feedback
              </h2>
              <div className="space-y-4">
                {barber.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 bg-brand-surface border border-brand-border rounded-xl"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-brand-text text-sm flex items-center gap-1.5">
                        {review.customerName}
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent fill-current text-brand-surface" />
                      </span>
                      <span className="text-xs text-brand-text/40">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex text-brand-accent mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-brand-text/70 italic">
                      &quot;{review.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
