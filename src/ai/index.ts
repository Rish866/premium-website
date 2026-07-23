/**
 * AI Module - Public API
 *
 * This module handles all AI-powered generation and editing.
 */

export { generateWebsite } from './generateWebsite';
export { generateCopy, regenerateSection } from './generateCopy';
export { generateFallbackCopy } from './fallbackCopyGenerator';
export { selectVariants } from './variantSelector';
export { executeEditCommand, applyEditPatch } from './editWebsite';
export type { EditPatch } from './editWebsite';
export { isConfigured } from './providers';
export type { GenerationInput, GenerationOutput, GeneratedCopy, VariantSelections } from './types';
