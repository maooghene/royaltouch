// components/BarberCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import { Barber } from "@/types/barber";

export default function BarberCard({ barber }: { barber: Barber }) {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden group transition-all duration-300 hover:border-brand-accent/40">
      {/* Profile Image Container */}
      <div className="relative h-72 w-full bg-brand-bg">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent z-10" />
        <Image
          src={barber.profileImage}
          alt={barber.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl text-brand-text font-semibold tracking-wide">
            {barber.name}
          </h3>
          <div className="flex items-center space-x-1 text-brand-accent">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-brand-text">
              {barber.rating}
            </span>
          </div>
        </div>

        <p className="text-sm text-brand-text/60 mb-4 line-clamp-1">
          {barber.specialty}
        </p>

        {/* Footer actions row inside the card */}
        <div className="flex justify-between items-center pt-4 border-t border-brand-border">
          <div>
            <span className="text-xs uppercase tracking-wider text-brand-text/40 block">
              Starting At
            </span>
            {/* Replace the old dollar price display string block with this: */}
            <span className="text-lg font-bold text-brand-accent">
              &#8358;{barber.price.toLocaleString()}
            </span>
          </div>
          <Link
            href={`/barbers/${barber.id}`}
            className="flex items-center space-x-1 px-4 py-2 bg-brand-border text-brand-text text-sm font-medium rounded-lg transition-all hover:bg-brand-accent hover:text-brand-bg"
          >
            <span>View Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
