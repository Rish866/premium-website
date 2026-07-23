/**
 * Variant Selector
 *
 * Intelligently selects layout variants for each section based on:
 * - Style preset (luxury prefers centered, bold prefers asymmetric)
 * - Industry (photography prefers gallery-heavy layouts)
 * - Randomization (ensures variety across generations)
 */

import type { StylePreset } from '../themes/tokens';
import type { SectionType, Variant } from '../engine/types';
import type { VariantSelections } from './types';

/**
 * Weighted variant preferences per style preset.
 * Higher weight = more likely to be selected.
 */
const styleVariantPreferences: Record<StylePreset, Partial<Record<SectionType, Partial<Record<Variant, number>>>>> = {
  luxury: {
    hero: { A: 2, B: 5, C: 3, D: 1 },       // Prefers centered (B)
    features: { A: 2, B: 5, C: 2 },          // Prefers editorial (B)
    testimonials: { A: 2, B: 5 },             // Prefers featured quote (B)
    faq: { A: 3, B: 5 },                     // Prefers two-column (B)
    footer: { A: 4, B: 2 },                  // Prefers multi-column (A)
  },
  modern: {
    hero: { A: 4, B: 3, C: 2, D: 4 },       // Split or Bento
    features: { A: 3, B: 2, C: 5 },          // Prefers bento (C)
    testimonials: { A: 4, B: 3 },
    faq: { A: 5, B: 2 },                     // Prefers accordion (A)
    footer: { A: 3, B: 4 },
  },
  bold: {
    hero: { A: 2, B: 2, C: 5, D: 3 },       // Prefers fullscreen (C)
    features: { A: 4, B: 2, C: 4 },
    testimonials: { A: 3, B: 4 },
    faq: { A: 4, B: 3 },
    footer: { A: 4, B: 3 },
  },
  minimal: {
    hero: { A: 3, B: 5, C: 1, D: 2 },       // Prefers centered (B)
    features: { A: 5, B: 3, C: 2 },          // Prefers clean grid (A)
    testimonials: { A: 5, B: 2 },
    faq: { A: 3, B: 5 },                     // Prefers two-column (B)
    footer: { A: 2, B: 5 },                  // Prefers minimal (B)
  },
  corporate: {
    hero: { A: 5, B: 3, C: 1, D: 2 },       // Prefers split (A)
    features: { A: 5, B: 3, C: 2 },          // Prefers grid (A)
    testimonials: { A: 5, B: 2 },
    faq: { A: 5, B: 3 },
    footer: { A: 5, B: 2 },
  },
  dark: {
    hero: { A: 3, B: 3, C: 4, D: 3 },       // Balanced with slight fullscreen preference
    features: { A: 3, B: 3, C: 4 },          // Slight bento preference
    testimonials: { A: 3, B: 4 },
    faq: { A: 4, B: 3 },
    footer: { A: 4, B: 3 },
  },
  colorful: {
    hero: { A: 3, B: 2, C: 2, D: 5 },       // Prefers bento/asymmetric (D)
    features: { A: 3, B: 2, C: 5 },          // Prefers bento (C)
    testimonials: { A: 4, B: 3 },
    faq: { A: 4, B: 3 },
    footer: { A: 4, B: 3 },
  },
};

/**
 * Select a variant using weighted random selection.
 */
function weightedRandomPick(weights: Partial<Record<Variant, number>>): Variant {
  const entries = Object.entries(weights) as [Variant, number][];
  const totalWeight = entries.reduce((sum, [, w]) => sum + w, 0);
  let random = Math.random() * totalWeight;

  for (const [variant, weight] of entries) {
    random -= weight;
    if (random <= 0) return variant;
  }

  return entries[0][0]; // Fallback
}

/**
 * Default variant weights when no style-specific preference exists.
 */
const defaultWeights: Record<Variant, number> = { A: 3, B: 3, C: 2, D: 2 };

/**
 * Select layout variants for all sections in a generation.
 */
export function selectVariants(
  sections: SectionType[],
  stylePreset: StylePreset,
): VariantSelections {
  const preferences = styleVariantPreferences[stylePreset] ?? {};
  const result: VariantSelections = {};

  for (const section of sections) {
    const sectionPrefs = preferences[section];

    if (sectionPrefs) {
      result[section] = weightedRandomPick(sectionPrefs as Partial<Record<Variant, number>>);
    } else {
      // Use default random (only A and B for sections without many variants)
      const twoVariantTypes: SectionType[] = ['about', 'gallery', 'contact', 'cta', 'footer', 'navbar', 'pricing', 'faq', 'testimonials'];
      if (twoVariantTypes.includes(section)) {
        result[section] = Math.random() > 0.5 ? 'A' : 'B';
      } else {
        result[section] = weightedRandomPick(defaultWeights);
      }
    }
  }

  return result;
}
