"use client";

export default function CalendlyEmbed({ url }: { url: string }) {
  const embedDomain = window.location.hostname;

  return (
    <div className="w-full h-[650px] bg-brand-surface border border-brand-border rounded-2xl overflow-hidden">
      <iframe
        src={`${url}?embed_domain=${embedDomain}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
        width="100%"
        height="100%"
        title="Select an appointment window"
        className="bg-transparent border-0"
        allow="geolocation; microphone; camera; display-capture"
      />
    </div>
  );
}
