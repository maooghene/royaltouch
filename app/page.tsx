// app/page.tsx
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Smartphone,
  ShieldCheck,
  MapPin,
  CheckCircle,
  Crown,
} from "lucide-react";
import { barbers } from "@/data/barbers";
import BarberCard from "@/components/BarberCard";

export default function HomePage() {
  const faqs = [
    {
      q: "How does the home-service booking work?",
      a: "Browse our elite roster, choose a barber, select an available slot via their Calendly embed, and they will come straight to your room or hostel apartment.",
    },
    {
      q: "Do I need to provide any hair cutting equipment?",
      a: "Not at all. Every verified Royal Touch barber arrives fully equipped with professional clippers, premium styling tools, sanitizers, and clean-up sheets.",
    },
    {
      q: "How do I make payments for my session?",
      a: "To keep our MVP simple, payments are handled directly between you and your barber via cash or bank transfer upon a successful cut.",
    },
  ];

  return (
    <main className="bg-brand-bg text-brand-text min-h-screen">
      {/* 1. HERO SECTION (Designed around your existing luxury slideshow) */}
      <section className="relative pt-32 pb-20 px-4 text-center max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[85vh]">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-surface border border-brand-border rounded-full text-brand-accent text-xs uppercase tracking-widest mb-6">
          <Crown className="w-3.5 h-3.5 fill-current" />
          <span>Skip the Shop. Book the Barber.</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif mb-6 leading-tight">
          Premium Grooming <br />
          <span className="text-brand-accent">Delivered to Your Door</span>
        </h1>
        <p className="text-base sm:text-xl text-brand-text/60 max-w-2xl mb-10 leading-relaxed">
          Skip the long salon lines off-campus. Book elite student barbers who
          bring crisp skin fades and sharp line-ups straight to your room.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/barbers"
            className="px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-xl shadow-lg transition-transform transform hover:scale-[1.03] text-center"
          >
            Browse Available Barbers
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-brand-surface border border-brand-border font-medium rounded-xl text-brand-text hover:border-brand-accent/40 transition-colors text-center"
          >
            Support Line
          </Link>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-brand-surface border-y border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-brand-accent text-xs uppercase tracking-widest font-semibold block mb-2">
              Process Flow
            </span>
            <h2 className="text-3xl font-bold tracking-wide">
              3 Steps to a Fresh Cut
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-brand-bg border border-brand-border rounded-xl text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center mx-auto text-brand-accent font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold">Select an Artist</h3>
              <p className="text-sm text-brand-text/60">
                Browse real profiles, lookbooks, pricing metrics, and accurate
                student feedback ratings.
              </p>
            </div>
            <div className="p-6 bg-brand-bg border border-brand-border rounded-xl text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center mx-auto text-brand-accent font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold">Pick Your Slot</h3>
              <p className="text-sm text-brand-text/60">
                Secure your exact appointment time instantly through our
                integrated native Calendly booking widget.
              </p>
            </div>
            <div className="p-6 bg-brand-bg border border-brand-border rounded-xl text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center mx-auto text-brand-accent font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold">Relax in Comfort</h3>
              <p className="text-sm text-brand-text/60">
                Your assigned barber delivers elite craftsmanship straight to
                your designated campus location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROSTER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="text-brand-accent text-xs uppercase tracking-widest font-semibold block mb-2">
              Verified Talent
            </span>
            <h2 className="text-3xl font-bold tracking-wide">
              Featured Campus Masters
            </h2>
          </div>
          <Link
            href="/barbers"
            className="text-sm font-semibold text-brand-accent hover:underline flex items-center gap-1"
          >
            See entire roster &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.slice(0, 3).map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-brand-surface border-t border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-accent text-xs uppercase tracking-widest font-semibold block mb-2">
              The Standard
            </span>
            <h2 className="text-3xl font-bold tracking-wide mb-6">
              Built Around Your Hustle
            </h2>
            <p className="text-brand-text/60 leading-relaxed mb-8">
              We know balancing lectures, projects, and social commitments is
              tough. Royal Touch eliminates the commute so you maintain premium
              aesthetic standard seamlessly.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">
                    Vetted Campus Professionals Only
                  </h4>
                  <p className="text-xs text-brand-text/50">
                    Every active barber is interview-verified for clean speed
                    and absolute skill mastery.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">
                    Sanitation Priority Guidelines
                  </h4>
                  <p className="text-xs text-brand-text/50">
                    Compulsory chemical blade sterilization procedures executed
                    before every single booking cut.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-brand-bg border border-brand-border rounded-2xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-brand-accent">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4 divide-y divide-brand-border">
              {faqs.map((faq, i) => (
                <div key={i} className={`${i !== 0 ? "pt-4" : ""}`}>
                  <h4 className="text-sm font-semibold mb-1 text-brand-text">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-brand-text/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
