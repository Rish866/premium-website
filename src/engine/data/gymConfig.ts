import type { WebsiteConfig } from "../types";

export const gymConfig: WebsiteConfig = {
  id: "gym-demo",
  industry: "Gym",
  brand: {
    name: "IronCore Fitness",
    tagline: "Train harder. Transform faster.",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
  },
  theme: {
    primary: "cyan",
    secondary: "purple",
  },
  hero: {
    eyebrow: "Premium Gym Website",
    headline: "A high-energy fitness website built to convert visitors into members.",
    subheadline:
      "Membership plans, trainer profiles, transformations, trial booking and WhatsApp CTA from JSON.",
    cta: "Start Free Trial",
  },
  services: {
    title: "Gym Website Blocks",
    items: ["Membership Plans", "Personal Training", "Transformation Gallery", "Diet Support", "Trial Booking", "Trainer Profiles"],
  },
  gallery: ["Strength Zone", "Cardio Area", "Personal Training", "Transformation Wall"],
  pricing: {
    title: "Gym Website Packages",
    plans: [
      {
        name: "Starter Gym",
        price: "₹9,999",
        features: ["Landing page", "Plans section", "WhatsApp CTA"],
      },
      {
        name: "Premium Gym",
        price: "₹24,999",
        features: ["Transformations", "Trainer profiles", "Trial booking", "SEO setup"],
      },
    ],
  },
  testimonials: [
    {
      name: "Gym Owner",
      text: "The website looks premium and helped us promote trial memberships.",
    },
    {
      name: "Fitness Studio Founder",
      text: "Our plans and transformations are now presented much better.",
    },
  ],
  sections: ["hero", "services", "gallery", "pricing", "testimonials", "contact"],
};
