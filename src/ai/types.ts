/**
 * AI Module Types
 *
 * Types for the AI generation pipeline input/output.
 */

import type { StylePreset } from '../themes/tokens';
import type { SectionType, Variant } from '../engine/types';

/**
 * Simplified onboarding input for the new flow.
 * User only provides 5-7 pieces of information.
 */
export type GenerationInput = {
  industry: string;
  businessName: string;
  description: string;        // 2-5 lines
  location: string;           // City, Country
  logo?: string;              // Optional uploaded logo URL/base64
  stylePreset: StylePreset;
};

/**
 * AI-generated copy for a section.
 */
export type GeneratedCopy = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    secondaryButtonText: string;
    trustLogos: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    mission?: string;
    values?: string[];
    stats?: { value: string; label: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; icon?: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { name: string; role: string; quote: string; rating: number }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    plans: { name: string; price: string; features: string[]; popular?: boolean }[];
  };
  contact: {
    title: string;
    subtitle: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
  footer: {
    tagline: string;
  };
  stats?: {
    items: { value: string; label: string }[];
  };
  team?: {
    eyebrow: string;
    title: string;
    members: { name: string; role: string; bio?: string }[];
  };
};

/**
 * AI-generated layout variant selections.
 */
export type VariantSelections = Partial<Record<SectionType, Variant>>;

/**
 * Complete output of the AI generation pipeline.
 */
export type GenerationOutput = {
  /** Which sections to include (in order) */
  sections: SectionType[];
  /** Which variant for each section */
  variants: VariantSelections;
  /** All generated copy */
  copy: GeneratedCopy;
  /** Image URLs for each section */
  images: {
    hero?: string;
    gallery: string[];
    about?: string;
  };
  /** Navigation links */
  navLinks: string[];
  /** Generated business-specific services list */
  services: string[];
};

/**
 * AI provider interface. Supports multiple LLM backends.
 */
export type AIProvider = {
  generateText(prompt: string): Promise<string>;
  generateJSON<T>(prompt: string): Promise<T>;
};
