// components/CalendlyEmbed.tsx
"use client";

export default function CalendlyEmbed({ url }: { url: string }) {
  // Gracefully handles cases where the URL hasn't been added to data/barbers.ts yet
  if (!url) {
    return (
      <div className="w-full h-[500px] bg-brand-surface border border-brand-border rounded-xl flex items-center justify-center p-6 text-center">
        <p className="text-brand-text/60">
          Booking calendar loading or temporarily unavailable.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[650px] bg-brand-surface border border-brand-border rounded-xl overflow-hidden transition-all duration-300">
      <iframe
        src={`${url}?embed_domain=${typeof window !== "undefined" ? window.location.hostname : ""}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
        width="100%"
        height="100%"
        title="Select an appointment window"
        className="bg-transparent border-0"
        allow="geolocation; microphone; camera; display-capture"
      />
    </div>
  );
}
