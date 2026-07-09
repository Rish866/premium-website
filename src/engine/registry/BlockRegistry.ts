import HeroBlock from "../blocks/HeroBlock";
import FeaturesBlock from "../blocks/FeaturesBlock";
import ContactBlock from "../blocks/ContactBlock";
import PricingBlock from "../blocks/PricingBlock";
import FAQBlock from "../blocks/FAQBlock";
import GalleryBlock from "../blocks/GalleryBlock";
import TestimonialsBlock from "../blocks/TestimonialsBlock";
import TeamBlock from "../blocks/TeamBlock";
import AboutBlock from "../blocks/AboutBlock";
import CTABlock from "../blocks/CTABlock";

export const BlockRegistry: Record<string, React.ComponentType<{ config: any }>> = {
  hero: HeroBlock,
  features: FeaturesBlock,
  contact: ContactBlock,
  pricing: PricingBlock,
  faq: FAQBlock,
  gallery: GalleryBlock,
  testimonials: TestimonialsBlock,
  team: TeamBlock,
  about: AboutBlock,
  cta: CTABlock,
};

export const availableBlocks = [
  { type: "hero", label: "Hero", description: "Main landing section with headline and CTA" },
  { type: "about", label: "About", description: "Business story, mission, and stats" },
  { type: "features", label: "Features / Services", description: "List of services or features" },
  { type: "gallery", label: "Gallery", description: "Image showcase grid" },
  { type: "pricing", label: "Pricing", description: "Plans and pricing tables" },
  { type: "testimonials", label: "Testimonials", description: "Customer reviews and feedback" },
  { type: "team", label: "Team", description: "Team members showcase" },
  { type: "faq", label: "FAQ", description: "Frequently asked questions" },
  { type: "contact", label: "Contact", description: "Contact form and information" },
  { type: "cta", label: "Call to Action", description: "Conversion-focused banner" },
];
