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
import NavbarBlock from "../blocks/NavbarBlock";
import FooterBlock from "../blocks/FooterBlock";

export const BlockRegistry: Record<string, React.ComponentType<{ config: any }>> = {
  navbar: NavbarBlock,
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
  footer: FooterBlock,
};

export const availableBlocks = [
  { type: "navbar", label: "Navbar", description: "Sticky navigation with logo and links" },
  { type: "hero", label: "Hero", description: "Main landing with headline, CTA, and image" },
  { type: "about", label: "About", description: "Business story, mission, and stats" },
  { type: "features", label: "Services", description: "Service cards with icons and hover effects" },
  { type: "gallery", label: "Gallery", description: "Image showcase with zoom overlays" },
  { type: "pricing", label: "Pricing", description: "Plans with popular badge and CTAs" },
  { type: "testimonials", label: "Testimonials", description: "Client reviews with stars and avatars" },
  { type: "team", label: "Team", description: "Team members with avatars" },
  { type: "faq", label: "FAQ", description: "Accordion-style questions" },
  { type: "cta", label: "Call to Action", description: "Conversion banner with gradient" },
  { type: "contact", label: "Contact", description: "Form + info with social links" },
  { type: "footer", label: "Footer", description: "Sitemap, social, copyright" },
];
