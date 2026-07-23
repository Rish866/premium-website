export type WebsiteSection =
  | "hero"
  | "services"
  | "gallery"
  | "pricing"
  | "testimonials"
  | "contact";

export type WebsiteConfig = {
  id: string;
  industry: string;
  brand: {
    name: string;
    tagline: string;
    phone: string;
    whatsapp: string;
  };
  theme: {
    primary: string;
    secondary: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  services: {
    title: string;
    items: string[];
  };
  gallery: string[];
  pricing: {
    title: string;
    plans: {
      name: string;
      price: string;
      features: string[];
    }[];
  };
  testimonials: {
    name: string;
    text: string;
  }[];
  sections: WebsiteSection[];
};

// Re-export new types for backwards compatibility
// Blocks import from '../../types' which resolves to this file
export type { SectionConfig, SectionType, Variant, BlockProps, BlockComponent, BlockRegistryEntry, PageConfig } from './types/index';
