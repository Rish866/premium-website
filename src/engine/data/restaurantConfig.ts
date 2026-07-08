import type { WebsiteConfig } from "../types";

export const restaurantConfig: WebsiteConfig = {
  id: "restaurant-demo",
  industry: "Restaurant",
  brand: {
    name: "Urban Spice",
    tagline: "Premium dining experience",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
  },
  theme: {
    primary: "cyan",
    secondary: "purple",
  },
  hero: {
    eyebrow: "Fine Dining Restaurant",
    headline: "Modern Indian dining crafted for unforgettable evenings.",
    subheadline:
      "Online menu, table booking, offers, gallery, reviews and WhatsApp orders generated from one JSON file.",
    cta: "Book a Table",
  },
  services: {
    title: "Restaurant Website Blocks",
    items: ["Digital Menu", "Table Booking", "Chef Specials", "Party Orders", "Gallery", "Reviews"],
  },
  gallery: ["Signature Dish", "Luxury Interior", "Family Dining", "Chef Special"],
  pricing: {
    title: "Website Packages",
    plans: [
      {
        name: "Starter",
        price: "₹9,999",
        features: ["Single page website", "WhatsApp CTA", "Mobile responsive"],
      },
      {
        name: "Premium",
        price: "₹24,999",
        features: ["Menu sections", "Gallery", "Booking form", "SEO setup"],
      },
    ],
  },
  testimonials: [
    {
      name: "Restaurant Owner",
      text: "AgencyOS helped us launch a premium website without hiring a full agency team.",
    },
    {
      name: "Cafe Founder",
      text: "The website feels expensive and customers now message directly on WhatsApp.",
    },
  ],
  sections: ["hero", "services", "gallery", "pricing", "testimonials", "contact"],
};
