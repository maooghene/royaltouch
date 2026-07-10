"use client";

import dynamic from "next/dynamic";

const CalendlyEmbed = dynamic(() => import("@/components/CalendlyEmbed"), {
  ssr: false,
});

export default CalendlyEmbed;
