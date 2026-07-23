/**
 * AI Website Generation Orchestrator
 *
 * This is the new generation service that replaces the old template-based approach.
 * It orchestrates:
 * 1. Section selection (based on industry)
 * 2. Variant selection (based on style + randomization)
 * 3. Copy generation (AI or enhanced fallback)
 * 4. Image selection
 * 5. Theme token selection
 *
 * The output is a complete WebsiteConfig ready to be rendered.
 */

import type { GenerationInput, GenerationOutput } from './types';
import type { SectionConfig, Variant } from '../engine/types';
import type { DesignTokens } from '../themes/tokens';
import { selectSectionsForIndustry } from '../industry/sectionMap';
import { selectVariants } from './variantSelector';
import { generateCopy } from './generateCopy';
import { generateFallbackCopy } from './fallbackCopyGenerator';
import { getPreset } from '../themes/presets';
import { getIndustryImages } from '../services/stockImages';

/**
 * Main generation function.
 * Takes simplified user input and produces a complete website configuration.
 */
export async function generateWebsite(input: GenerationInput): Promise<{
  sections: SectionConfig[];
  tokens: DesignTokens;
  navLinks: string[];
}> {
  // 1. Select which sections to include
  const sectionTypes = selectSectionsForIndustry(input.industry);

  // 2. Select layout variants for each section
  const variants = selectVariants(sectionTypes, input.stylePreset);

  // 3. Generate copy (uses AI if available, otherwise enhanced fallback)
  const copy = await generateCopyForWebsite(input);

  // 4. Get images
  const images = getIndustryImages(input.industry);

  // 5. Get design tokens from style preset
  const tokens = getPreset(input.stylePreset);

  // 6. Assemble sections with full configs
  const sections = assembleSections(sectionTypes, variants, copy, images, input);

  // 7. Generate nav links from sections
  const navLinks = generateNavLinks(sectionTypes);

  return { sections, tokens, navLinks };
}

/**
 * Generate copy - tries AI first, falls back to enhanced templates.
 */
async function generateCopyForWebsite(input: GenerationInput) {
  return generateCopy(input);
}

/**
 * Assemble sections from types, variants, copy, and images.
 */
function assembleSections(
  types: string[],
  variants: Record<string, Variant | undefined>,
  copy: ReturnType<typeof generateFallbackCopy> extends Promise<infer T> ? T : never,
  images: { hero: string; gallery: string[]; trustLogos: string[] },
  input: GenerationInput,
): SectionConfig[] {
  const sections: SectionConfig[] = [];

  for (const type of types) {
    const variant = variants[type] ?? 'A';
    const id = `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    let config: Record<string, unknown> = {};

    switch (type) {
      case 'navbar':
        config = {
          brandName: input.businessName,
          links: generateNavLinks(types),
          ctaText: copy.hero.buttonText,
        };
        break;

      case 'hero':
        config = {
          eyebrow: copy.hero.eyebrow,
          title: copy.hero.title,
          subtitle: copy.hero.subtitle,
          buttonText: copy.hero.buttonText,
          secondaryButtonText: copy.hero.secondaryButtonText,
          heroImage: images.hero,
          trustLogos: copy.hero.trustLogos,
          stats: copy.about?.stats?.slice(0, 3),
          features: copy.features?.items?.slice(0, 4).map((i) => i.title),
        };
        break;

      case 'about':
        config = {
          eyebrow: copy.about.eyebrow,
          title: copy.about.title,
          description: copy.about.description,
          mission: copy.about.mission,
          values: copy.about.values,
          stats: copy.about.stats,
          image: images.gallery[0],
        };
        break;

      case 'features':
        config = {
          eyebrow: copy.features.eyebrow,
          title: copy.features.title,
          subtitle: copy.features.subtitle,
          items: copy.features.items,
        };
        break;

      case 'gallery':
        config = {
          eyebrow: 'Gallery',
          title: `Experience ${input.businessName}`,
          images: images.gallery,
        };
        break;

      case 'testimonials':
        config = {
          eyebrow: copy.testimonials.eyebrow,
          title: copy.testimonials.title,
          items: copy.testimonials.items,
        };
        break;

      case 'pricing':
        config = {
          eyebrow: copy.pricing.eyebrow,
          title: copy.pricing.title,
          subtitle: copy.pricing.subtitle,
          plans: copy.pricing.plans,
        };
        break;

      case 'faq':
        config = {
          eyebrow: copy.faq.eyebrow,
          title: copy.faq.title,
          subtitle: copy.faq.subtitle,
          items: copy.faq.items,
        };
        break;

      case 'contact':
        config = {
          title: copy.contact.title,
          subtitle: copy.contact.subtitle,
          address: input.location,
        };
        break;

      case 'cta':
        config = {
          eyebrow: copy.cta.eyebrow,
          title: copy.cta.title,
          subtitle: copy.cta.subtitle,
          buttonText: copy.cta.buttonText,
          secondaryButtonText: 'Learn More',
        };
        break;

      case 'stats':
        config = {
          items: copy.stats?.items ?? copy.about.stats ?? [],
        };
        break;

      case 'team':
        config = {
          eyebrow: copy.team?.eyebrow ?? 'Our Team',
          title: copy.team?.title ?? 'Meet the Experts',
          members: copy.team?.members ?? [],
        };
        break;

      case 'footer':
        config = {
          brandName: input.businessName,
          tagline: copy.footer.tagline,
          links: generateNavLinks(types),
          services: copy.features.items.slice(0, 6).map((i) => i.title),
          address: input.location,
        };
        break;

      default:
        config = {};
    }

    sections.push({ id, type: type as any, variant, config });
  }

  return sections;
}

/**
 * Generate navigation links from included section types.
 */
function generateNavLinks(types: string[]): string[] {
  const linkMap: Record<string, string> = {
    hero: 'Home',
    about: 'About',
    features: 'Services',
    gallery: 'Gallery',
    pricing: 'Pricing',
    team: 'Team',
    testimonials: 'Reviews',
    faq: 'FAQ',
    contact: 'Contact',
  };

  return types
    .filter((t) => linkMap[t])
    .map((t) => linkMap[t])
    .slice(0, 6); // Max 6 nav links
}
