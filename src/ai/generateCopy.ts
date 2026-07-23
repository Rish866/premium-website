/**
 * AI Copy Generation Service
 *
 * Generates professional website copy using OpenAI.
 * Falls back to the enhanced template generator if the API is unavailable.
 */

import type { GenerationInput, GeneratedCopy } from './types';
import { generateJSON, isConfigured } from './providers';
import { getCopySystemPrompt, getCopyUserPrompt } from './prompts/copyGeneration';
import { generateFallbackCopy } from './fallbackCopyGenerator';

/**
 * Generate complete website copy.
 * Uses AI if configured, otherwise falls back to enhanced templates.
 */
export async function generateCopy(input: GenerationInput): Promise<GeneratedCopy> {
  // Check if AI is available
  if (!isConfigured()) {
    console.log('[AI] OpenAI not configured, using fallback copy generator');
    return generateFallbackCopy(input);
  }

  try {
    console.log('[AI] Generating copy with OpenAI...');

    const systemPrompt = getCopySystemPrompt();
    const userPrompt = getCopyUserPrompt(input);

    const result = await generateJSON<GeneratedCopy>(systemPrompt, userPrompt, {
      model: 'gpt-4o-mini',
      temperature: 0.8,
      maxTokens: 4096,
    });

    // Validate essential fields exist
    if (!result.hero?.title || !result.features?.items) {
      console.warn('[AI] Incomplete response, merging with fallback');
      const fallback = generateFallbackCopy(input);
      return mergeCopy(fallback, result);
    }

    console.log('[AI] Copy generation complete');
    return result;
  } catch (error) {
    console.error('[AI] Copy generation failed, using fallback:', error);
    return generateFallbackCopy(input);
  }
}

/**
 * Merge AI-generated copy with fallback copy.
 * Uses AI values where available, fallback for missing fields.
 */
function mergeCopy(fallback: GeneratedCopy, partial: Partial<GeneratedCopy>): GeneratedCopy {
  return {
    hero: { ...fallback.hero, ...partial.hero },
    about: { ...fallback.about, ...partial.about },
    features: partial.features?.items?.length ? partial.features : fallback.features,
    testimonials: partial.testimonials?.items?.length ? partial.testimonials : fallback.testimonials,
    faq: partial.faq?.items?.length ? partial.faq : fallback.faq,
    pricing: partial.pricing?.plans?.length ? partial.pricing : fallback.pricing,
    contact: { ...fallback.contact, ...partial.contact },
    cta: { ...fallback.cta, ...partial.cta },
    stats: partial.stats?.items?.length ? partial.stats : fallback.stats,
    team: partial.team?.members?.length ? partial.team : fallback.team,
    footer: { ...fallback.footer, ...partial.footer },
  };
}

/**
 * Regenerate copy for a specific section only.
 * Used by the AI editor when user says "rewrite this section".
 */
export async function regenerateSection(
  sectionType: string,
  input: GenerationInput,
  currentConfig: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  if (!isConfigured()) {
    // Return current config if no AI available
    return currentConfig;
  }

  try {
    const systemPrompt = `You are a premium copywriter. Rewrite the content for a "${sectionType}" section of a website. 
Keep the same structure but make the copy more compelling, specific, and premium-sounding.
Respond with valid JSON only.`;

    const userPrompt = `Business: ${input.businessName} (${input.industry}) in ${input.location}
Description: ${input.description}
Style: ${input.stylePreset}

Current section config: ${JSON.stringify(currentConfig)}

Rewrite the text content to be more professional and engaging. Keep the same JSON structure, only improve the text values.`;

    const result = await generateJSON<Record<string, unknown>>(systemPrompt, userPrompt, {
      model: 'gpt-4o-mini',
      temperature: 0.9,
      maxTokens: 2048,
    });

    return { ...currentConfig, ...result };
  } catch (error) {
    console.error('[AI] Section regeneration failed:', error);
    return currentConfig;
  }
}
