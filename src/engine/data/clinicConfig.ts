import type { WebsiteConfig } from "../types";

export const clinicConfig: WebsiteConfig = {
  id: "clinic-demo",
  industry: "Clinic",
  brand: {
    name: "Nova Care Clinic",
    tagline: "Modern healthcare, trusted doctors",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
  },
  theme: {
    primary: "cyan",
    secondary: "purple",
  },
  hero: {
    eyebrow: "Premium Clinic Website",
    headline: "A trusted medical website built for appointments and patient confidence.",
    subheadline:
      "Doctors, treatments, appointment CTA, reviews and contact details generated from one JSON file.",
    cta: "Book Appointment",
  },
  services: {
    title: "Clinic Website Blocks",
    items: ["Doctor Profiles", "Treatments", "Appointment Booking", "Timings", "Patient Reviews", "Location"],
  },
  gallery: ["Reception", "Doctor Cabin", "Treatment Room", "Patient Care"],
  pricing: {
    title: "Clinic Website Packages",
    plans: [
      {
        name: "Basic Clinic",
        price: "₹12,999",
        features: ["Doctor profile", "Treatment list", "WhatsApp appointment"],
      },
      {
        name: "Premium Clinic",
        price: "₹29,999",
        features: ["Multi doctor sections", "SEO setup", "Reviews", "Lead form"],
      },
    ],
  },
  testimonials: [
    {
      name: "Clinic Owner",
      text: "The website instantly made our clinic look more trustworthy and premium.",
    },
    {
      name: "Doctor",
      text: "Patients now understand our services before calling us.",
    },
  ],
  sections: ["hero", "services", "gallery", "pricing", "testimonials", "contact"],
};
