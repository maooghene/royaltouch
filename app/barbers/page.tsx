// app/barbers/page.tsx
import { barbers } from "@/data/barbers";
import BarberCard from "@/components/BarberCard";

export const metadata = {
  title: "Available Barbers | Royal Touch Campus Service",
  description:
    "Browse professional student barbers available for room delivery service on campus.",
};

export default function BarbersPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Block Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent text-sm uppercase font-semibold tracking-widest block mb-2">
            The Roster
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
            Elite Campus Artists
          </h1>
          <p className="text-brand-text/60">
            Select a verified styling partner. Book directly into their calendar
            workflow to reserve premium on-campus home grooming services.
          </p>
        </div>

        {/* Dynamic Responsive Layout Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </div>
    </main>
  );
}
