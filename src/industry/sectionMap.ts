/**
 * Industry Section Map
 *
 * Defines which sections are relevant for each industry.
 * The AI generation service uses this to decide what sections to include
 * instead of using the same fixed order for every website.
 */

import type { SectionType } from '../engine/types';

export type IndustrySectionConfig = {
  /** Sections to always include */
  required: SectionType[];
  /** Sections that may be included based on user data */
  optional: SectionType[];
  /** Sections that are NOT relevant for this industry */
  excluded: SectionType[];
};

export const industrySectionMap: Record<string, IndustrySectionConfig> = {
  restaurant: {
    required: ['navbar', 'hero', 'features', 'gallery', 'testimonials', 'contact', 'footer'],
    optional: ['about', 'pricing', 'faq', 'cta', 'stats'],
    excluded: ['team', 'portfolio', 'membership', 'doctors', 'properties'],
  },
  clinic: {
    required: ['navbar', 'hero', 'features', 'about', 'testimonials', 'faq', 'contact', 'footer'],
    optional: ['team', 'pricing', 'gallery', 'stats', 'cta'],
    excluded: ['portfolio', 'membership', 'properties'],
  },
  salon: {
    required: ['navbar', 'hero', 'features', 'gallery', 'pricing', 'testimonials', 'contact', 'footer'],
    optional: ['about', 'team', 'faq', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties'],
  },
  gym: {
    required: ['navbar', 'hero', 'features', 'pricing', 'testimonials', 'gallery', 'contact', 'footer'],
    optional: ['team', 'about', 'faq', 'stats', 'cta'],
    excluded: ['portfolio', 'doctors', 'properties'],
  },
  hotel: {
    required: ['navbar', 'hero', 'features', 'gallery', 'pricing', 'testimonials', 'contact', 'footer'],
    optional: ['about', 'faq', 'stats', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties', 'team'],
  },
  'real-estate': {
    required: ['navbar', 'hero', 'features', 'gallery', 'testimonials', 'contact', 'footer'],
    optional: ['about', 'pricing', 'faq', 'stats', 'team', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors'],
  },
  transport: {
    required: ['navbar', 'hero', 'features', 'about', 'stats', 'testimonials', 'contact', 'footer'],
    optional: ['gallery', 'faq', 'pricing', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties', 'team'],
  },
  manufacturer: {
    required: ['navbar', 'hero', 'features', 'about', 'stats', 'gallery', 'contact', 'footer'],
    optional: ['testimonials', 'faq', 'pricing', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties'],
  },
  school: {
    required: ['navbar', 'hero', 'features', 'about', 'gallery', 'testimonials', 'faq', 'contact', 'footer'],
    optional: ['team', 'pricing', 'stats', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties'],
  },
  ecommerce: {
    required: ['navbar', 'hero', 'features', 'testimonials', 'pricing', 'cta', 'footer'],
    optional: ['gallery', 'faq', 'about', 'stats'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties', 'team', 'contact'],
  },
  'law-firm': {
    required: ['navbar', 'hero', 'features', 'about', 'team', 'testimonials', 'faq', 'contact', 'footer'],
    optional: ['stats', 'cta', 'pricing'],
    excluded: ['gallery', 'portfolio', 'membership', 'doctors', 'properties'],
  },
  construction: {
    required: ['navbar', 'hero', 'features', 'gallery', 'about', 'stats', 'testimonials', 'contact', 'footer'],
    optional: ['pricing', 'faq', 'team', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties'],
  },
  travel: {
    required: ['navbar', 'hero', 'features', 'gallery', 'pricing', 'testimonials', 'contact', 'footer'],
    optional: ['about', 'faq', 'stats', 'cta'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties', 'team'],
  },
  interior: {
    required: ['navbar', 'hero', 'features', 'gallery', 'testimonials', 'pricing', 'contact', 'footer'],
    optional: ['about', 'faq', 'team', 'cta', 'stats'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties'],
  },
  ngo: {
    required: ['navbar', 'hero', 'about', 'features', 'stats', 'testimonials', 'cta', 'contact', 'footer'],
    optional: ['gallery', 'team', 'faq'],
    excluded: ['pricing', 'portfolio', 'membership', 'doctors', 'properties'],
  },
  photography: {
    required: ['navbar', 'hero', 'gallery', 'features', 'pricing', 'testimonials', 'contact', 'footer'],
    optional: ['about', 'faq', 'cta'],
    excluded: ['team', 'portfolio', 'membership', 'doctors', 'properties', 'stats'],
  },
  consulting: {
    required: ['navbar', 'hero', 'features', 'about', 'team', 'testimonials', 'faq', 'cta', 'contact', 'footer'],
    optional: ['stats', 'pricing', 'gallery'],
    excluded: ['portfolio', 'membership', 'doctors', 'properties'],
  },
  'local-shop': {
    required: ['navbar', 'hero', 'features', 'gallery', 'testimonials', 'contact', 'footer'],
    optional: ['about', 'pricing', 'faq', 'cta'],
    excluded: ['team', 'portfolio', 'membership', 'doctors', 'properties', 'stats'],
  },
};

/**
 * Get the section configuration for an industry.
 * Falls back to a generic set if industry is not mapped.
 */
export function getIndustrySections(industry: string): IndustrySectionConfig {
  return industrySectionMap[industry] ?? {
    required: ['navbar', 'hero', 'features', 'about', 'testimonials', 'contact', 'footer'],
    optional: ['gallery', 'pricing', 'faq', 'team', 'stats', 'cta'],
    excluded: [],
  };
}

/**
 * Get all sections to generate for an industry (required + some optional).
 * Randomly includes 2-4 optional sections for variety.
 */
export function selectSectionsForIndustry(industry: string): SectionType[] {
  const config = getIndustrySections(industry);

  // Shuffle and pick some optional sections
  const shuffled = [...config.optional].sort(() => Math.random() - 0.5);
  const optionalCount = Math.min(shuffled.length, 2 + Math.floor(Math.random() * 3));
  const selectedOptional = shuffled.slice(0, optionalCount);

  // Merge required + selected optional, maintaining logical order
  const sectionOrder: SectionType[] = [
    'navbar', 'hero', 'about', 'features', 'stats', 'gallery',
    'team', 'pricing', 'testimonials', 'faq', 'cta', 'contact', 'footer',
  ];

  const allSelected = new Set([...config.required, ...selectedOptional]);

  return sectionOrder.filter((s) => allSelected.has(s));
}
