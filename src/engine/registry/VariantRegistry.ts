/**
 * Variant-Aware Block Registry
 *
 * Maps section type + variant to the correct React component.
 * This replaces the old flat BlockRegistry that only supported one layout per type.
 *
 * Usage:
 *   const Component = variantRegistry.get('hero', 'B');
 *   <Component config={section.config} sectionId={section.id} />
 */

import { lazy, type ComponentType } from 'react';
import type { BlockComponent, BlockRegistryEntry, SectionType, Variant } from '../types';

// Lazy-loaded block variants for code splitting
// Hero variants
const HeroA = lazy(() => import('../blocks/hero/HeroA'));
const HeroB = lazy(() => import('../blocks/hero/HeroB'));
const HeroC = lazy(() => import('../blocks/hero/HeroC'));
const HeroD = lazy(() => import('../blocks/hero/HeroD'));

// Features variants
const FeaturesA = lazy(() => import('../blocks/features/FeaturesA'));
const FeaturesB = lazy(() => import('../blocks/features/FeaturesB'));
const FeaturesC = lazy(() => import('../blocks/features/FeaturesC'));

// Testimonials variants
const TestimonialsA = lazy(() => import('../blocks/testimonials/TestimonialsA'));
const TestimonialsB = lazy(() => import('../blocks/testimonials/TestimonialsB'));

// Gallery variants
const GalleryA = lazy(() => import('../blocks/gallery/GalleryA'));
const GalleryB = lazy(() => import('../blocks/gallery/GalleryB'));

// Pricing variants
const PricingA = lazy(() => import('../blocks/pricing/PricingA'));
const PricingB = lazy(() => import('../blocks/pricing/PricingB'));

// FAQ variants
const FAQA = lazy(() => import('../blocks/faq/FAQA'));
const FAQB = lazy(() => import('../blocks/faq/FAQB'));

// Contact variants
const ContactA = lazy(() => import('../blocks/contact/ContactA'));
const ContactB = lazy(() => import('../blocks/contact/ContactB'));

// CTA variants
const CTAA = lazy(() => import('../blocks/cta/CTAA'));
const CTAB = lazy(() => import('../blocks/cta/CTAB'));

// Footer variants
const FooterA = lazy(() => import('../blocks/footer/FooterA'));
const FooterB = lazy(() => import('../blocks/footer/FooterB'));

// Navbar variants
const NavbarA = lazy(() => import('../blocks/navbar/NavbarA'));
const NavbarB = lazy(() => import('../blocks/navbar/NavbarB'));

// About variants
const AboutA = lazy(() => import('../blocks/about/AboutA'));
const AboutB = lazy(() => import('../blocks/about/AboutB'));

// Stats
const StatsA = lazy(() => import('../blocks/stats/StatsA'));

// Team
const TeamA = lazy(() => import('../blocks/team/TeamA'));

/**
 * The master registry of all block types, their variants, and metadata.
 */
export const blockRegistry: Record<string, BlockRegistryEntry> = {
  navbar: {
    type: 'navbar',
    label: 'Navigation',
    description: 'Site navigation with logo and links',
    variants: { A: NavbarA as unknown as BlockComponent, B: NavbarB as unknown as BlockComponent },
    defaultConfig: { brandName: 'Business', links: ['Home', 'About', 'Services', 'Contact'], ctaText: 'Get Started' },
  },
  hero: {
    type: 'hero',
    label: 'Hero',
    description: 'Main landing section with headline and CTA',
    variants: {
      A: HeroA as unknown as BlockComponent,
      B: HeroB as unknown as BlockComponent,
      C: HeroC as unknown as BlockComponent,
      D: HeroD as unknown as BlockComponent,
    },
    defaultConfig: { title: 'Your Business, Elevated', subtitle: 'Premium digital presence.', buttonText: 'Get Started' },
  },
  features: {
    type: 'features',
    label: 'Features / Services',
    description: 'Showcase services or features with cards',
    variants: {
      A: FeaturesA as unknown as BlockComponent,
      B: FeaturesB as unknown as BlockComponent,
      C: FeaturesC as unknown as BlockComponent,
    },
    defaultConfig: { title: 'Our Services', items: [] },
  },
  about: {
    type: 'about',
    label: 'About',
    description: 'Business story and mission',
    variants: { A: AboutA as unknown as BlockComponent, B: AboutB as unknown as BlockComponent },
    defaultConfig: { title: 'About Us', description: '' },
  },
  gallery: {
    type: 'gallery',
    label: 'Gallery',
    description: 'Image showcase',
    variants: { A: GalleryA as unknown as BlockComponent, B: GalleryB as unknown as BlockComponent },
    defaultConfig: { title: 'Gallery', images: [] },
  },
  testimonials: {
    type: 'testimonials',
    label: 'Testimonials',
    description: 'Client reviews and social proof',
    variants: { A: TestimonialsA as unknown as BlockComponent, B: TestimonialsB as unknown as BlockComponent },
    defaultConfig: { title: 'What Our Clients Say', items: [] },
  },
  pricing: {
    type: 'pricing',
    label: 'Pricing',
    description: 'Plans and pricing tables',
    variants: { A: PricingA as unknown as BlockComponent, B: PricingB as unknown as BlockComponent },
    defaultConfig: { title: 'Pricing', plans: [] },
  },
  faq: {
    type: 'faq',
    label: 'FAQ',
    description: 'Frequently asked questions',
    variants: { A: FAQA as unknown as BlockComponent, B: FAQB as unknown as BlockComponent },
    defaultConfig: { title: 'Frequently Asked Questions', items: [] },
  },
  contact: {
    type: 'contact',
    label: 'Contact',
    description: 'Contact form and information',
    variants: { A: ContactA as unknown as BlockComponent, B: ContactB as unknown as BlockComponent },
    defaultConfig: { title: 'Get in Touch' },
  },
  cta: {
    type: 'cta',
    label: 'Call to Action',
    description: 'Conversion banner',
    variants: { A: CTAA as unknown as BlockComponent, B: CTAB as unknown as BlockComponent },
    defaultConfig: { title: 'Ready to get started?', buttonText: 'Contact Us' },
  },
  footer: {
    type: 'footer',
    label: 'Footer',
    description: 'Site footer with links and info',
    variants: { A: FooterA as unknown as BlockComponent, B: FooterB as unknown as BlockComponent },
    defaultConfig: { brandName: 'Business' },
  },
  stats: {
    type: 'stats',
    label: 'Statistics',
    description: 'Key numbers and metrics',
    variants: { A: StatsA as unknown as BlockComponent },
    defaultConfig: { items: [] },
  },
  team: {
    type: 'team',
    label: 'Team',
    description: 'Team member profiles',
    variants: { A: TeamA as unknown as BlockComponent },
    defaultConfig: { title: 'Our Team', members: [] },
  },
};

/**
 * Get the component for a section type + variant.
 * Falls back to variant A if requested variant doesn't exist.
 */
export function getBlockComponent(type: string, variant: Variant = 'A'): ComponentType<any> | null {
  const entry = blockRegistry[type];
  if (!entry) return null;
  return (entry.variants[variant] ?? entry.variants.A ?? null) as ComponentType<any> | null;
}

/**
 * Get all available variants for a section type.
 */
export function getAvailableVariants(type: string): Variant[] {
  const entry = blockRegistry[type];
  if (!entry) return [];
  return Object.keys(entry.variants) as Variant[];
}

/**
 * Get metadata about all section types (for the "Add Section" panel).
 */
export function getAllBlockTypes(): { type: string; label: string; description: string; variants: Variant[] }[] {
  return Object.entries(blockRegistry).map(([type, entry]) => ({
    type,
    label: entry.label,
    description: entry.description,
    variants: Object.keys(entry.variants) as Variant[],
  }));
}
