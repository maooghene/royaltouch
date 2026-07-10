// app/contact/page.tsx
import { MessageSquare, Phone, Mail, Clock, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Contact Royal Touch | Campus Support & Business Inquiries",
};

export default function ContactPage() {
  const genericMessage = encodeURIComponent(
    "Hi Royal Touch, I am a student looking to make inquiries regarding campus barber house-delivery services!",
  );

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Main Header Header Section */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-accent text-sm uppercase font-semibold tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold tracking-wide mb-4">
            We Are Here To Help
          </h1>
          <p className="text-brand-text/60">
            Have questions about bookings, available barbers, or house-delivery
            coverage? Reach out directly via our verified campus hotlines.
          </p>
        </div>

        {/* Support Grid Details Row Layout Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column Box Contact Cards Array */}
          <div className="space-y-4">
            {/* Direct WhatsApp Message Integration Target */}
            <a
              href={`https://wa.me{genericMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-brand-surface border border-brand-border rounded-xl group hover:border-brand-accent/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-bg border border-brand-border rounded-lg group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/40 transition-colors">
                  <MessageSquare className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text">
                    WhatsApp Hotlines
                  </h3>
                  <p className="text-sm text-brand-text/60 mt-0.5">
                    Instant chat assistance
                  </p>
                </div>
              </div>
            </a>

            {/* Direct Phone Call Support Module */}
            <a
              href="tel:+2348012345678"
              className="block p-6 bg-brand-surface border border-brand-border rounded-xl group hover:border-brand-accent/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-bg border border-brand-border rounded-lg group-hover:text-brand-accent transition-colors">
                  <Phone className="w-6 h-6 text-brand-text/80" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text">
                    Call Support
                  </h3>
                  <p className="text-sm text-brand-text/60 mt-0.5">
                    +234 801 234 5678
                  </p>
                </div>
              </div>
            </a>

            {/* Support Mailbox Routing Asset Element */}
            <a
              href="mailto:support@royaltouchcampus.com"
              className="block p-6 bg-brand-surface border border-brand-border rounded-xl group hover:border-brand-accent/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-bg border border-brand-border rounded-lg group-hover:text-brand-accent transition-colors">
                  <Mail className="w-6 h-6 text-brand-text/80" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text">
                    Email Inquiries
                  </h3>
                  <p className="text-sm text-brand-text/60 mt-0.5">
                    support@royaltouchcampus.com
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column Box Context Operations Status Rules Block */}
          <div className="p-8 bg-brand-surface border border-brand-border rounded-2xl space-y-6">
            <h2 className="text-lg font-serif font-bold text-brand-text tracking-wide border-b border-brand-border pb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-accent" />
              <span>Operational Hours</span>
            </h2>

            <div className="space-y-3 text-sm text-brand-text/80">
              <div className="flex justify-between">
                <span className="text-brand-text/50">Hostel Deliveries:</span>
                <span>Mon — Sun (8am - 9pm)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-text/50">Support Chat Desk:</span>
                <span>24/7 Monitored Response</span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border space-y-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-accent" />
                <span>MVP Note</span>
              </h3>
              <p className="text-xs text-brand-text/50 leading-relaxed">
                Royal Touch is currently in live testing across regional campus
                sectors. All appointment windows booked through Calendly are
                dispatched instantly to your chosen platform professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
