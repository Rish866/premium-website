import type { WebsiteConfig } from "../types";

export const transportConfig: WebsiteConfig = {
  id: "transport-demo",
  industry: "Transport",
  brand: {
    name: "RapidFleet Logistics",
    tagline: "Reliable fleet movement",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
  },
  theme: {
    primary: "cyan",
    secondary: "purple",
  },
  hero: {
    eyebrow: "Premium Transport Website",
    headline: "A professional logistics website built for fleet owners and transporters.",
    subheadline:
      "Fleet strength, service routes, industries served, client trust and quote enquiry generated from JSON.",
    cta: "Request Quote",
  },
  services: {
    title: "Transport Website Blocks",
    items: ["Fleet Details", "Routes", "Industries Served", "Client Logos", "Quote Request", "Contact CTA"],
  },
  gallery: ["Trailer Fleet", "Container Movement", "Hywa Transport", "Logistics Yard"],
  pricing: {
    title: "Transport Website Packages",
    plans: [
      {
        name: "Transport Basic",
        price: "₹14,999",
        features: ["Fleet page", "Route details", "WhatsApp enquiry"],
      },
      {
        name: "Transport Premium",
        price: "₹34,999",
        features: ["Client sections", "Quote form", "SEO setup", "Service pages"],
      },
    ],
  },
  testimonials: [
    {
      name: "Fleet Owner",
      text: "Our company finally looks professional when sending links to new clients.",
    },
    {
      name: "Transport Agent",
      text: "The quote enquiry section helped us get more serious leads.",
    },
  ],
  sections: ["hero", "services", "gallery", "pricing", "testimonials", "contact"],
};
