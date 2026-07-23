/**
 * AI Edit Command Prompts
 *
 * Prompts for the AI editing interface that modifies existing websites
 * based on natural language commands.
 */

import type { SectionConfig } from '../../engine/types';
import type { DesignTokens } from '../../themes/tokens';

/**
 * System prompt for AI editing commands.
 */
export function getEditSystemPrompt(): string {
  return `You are an AI website editor. Users describe changes they want to make to their website using natural language, and you produce a JSON patch describing what to change.

You can:
1. Modify theme/design tokens (colors, fonts, spacing, effects)
2. Update section content (text, images, config)
3. Add new sections
4. Remove sections
5. Reorder sections
6. Change section variants (layout)

You MUST respond with valid JSON matching the schema below. No text outside JSON.

Response schema:
{
  "themeChanges": { ... partial token updates, only include what changes },
  "sectionChanges": [
    { "sectionId": "id", "action": "update", "configPatch": { ... partial config updates } },
    { "action": "add", "type": "pricing", "variant": "A", "config": { ... full config }, "position": "after:sectionId" },
    { "sectionId": "id", "action": "remove" },
    { "sectionId": "id", "action": "changeVariant", "newVariant": "B" },
    { "sectionId": "id", "action": "move", "position": "after:otherSectionId" }
  ],
  "explanation": "Brief description of what was changed"
}

Rules:
- Only include changes that are necessary for the user's request
- Keep existing content unless explicitly asked to change it
- When changing style, update the theme tokens, not individual section configs
- Use realistic, professional content when adding new sections
- Match the existing tone and style of the website`;
}

/**
 * Build the user prompt for an edit command.
 */
export function getEditUserPrompt(
  command: string,
  sections: SectionConfig[],
  tokens: DesignTokens,
  selectedSectionId?: string,
): string {
  // Compact section summary (don't send full config to save tokens)
  const sectionSummary = sections.map((s) => ({
    id: s.id,
    type: s.type,
    variant: s.variant,
    // Include key text fields only
    title: (s.config as Record<string, unknown>).title,
    eyebrow: (s.config as Record<string, unknown>).eyebrow,
  }));

  return `CURRENT WEBSITE STATE:

Sections: ${JSON.stringify(sectionSummary, null, 2)}

Theme: ${tokens.name} (${tokens.mode} mode)
- Primary: ${tokens.colors.primary}
- Background: ${tokens.colors.background}
- Font: ${tokens.typography.headingFont}

${selectedSectionId ? `Currently selected section: ${selectedSectionId}` : 'No section selected.'}

USER COMMAND: "${command}"

Generate the JSON patch to apply this change.`;
}
