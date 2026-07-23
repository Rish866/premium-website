/**
 * AI Module - Public API
 *
 * This module handles all AI-powered generation and editing.
 */

export { generateWebsite } from './generateWebsite';
export { generateFallbackCopy } from './fallbackCopyGenerator';
export { selectVariants } from './variantSelector';
export type { GenerationInput, GenerationOutput, GeneratedCopy, VariantSelections } from './types';
