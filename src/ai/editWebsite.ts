/**
 * AI Website Editing Service
 *
 * Handles natural language editing commands like:
 * - "Make it more premium"
 * - "Make it darker"
 * - "Add a pricing section"
 * - "Rewrite the hero"
 * - "Make it look like Apple"
 */

import type { SectionConfig, Variant } from '../engine/types';
import type { DesignTokens } from '../themes/tokens';
import { generateJSON, isConfigured } from './providers';
import { getEditSystemPrompt, getEditUserPrompt } from './prompts/editCommands';

/**
 * The result of an AI edit command.
 */
export type EditPatch = {
  themeChanges?: Partial<{
    colors: Partial<DesignTokens['colors']>;
    typography: Partial<DesignTokens['typography']>;
    spacing: Partial<DesignTokens['spacing']>;
    shapes: Partial<DesignTokens['shapes']>;
    effects: Partial<DesignTokens['effects']>;
  }>;
  sectionChanges?: Array<
    | { sectionId: string; action: 'update'; configPatch: Record<string, unknown> }
    | { action: 'add'; type: string; variant: Variant; config: Record<string, unknown>; position?: string }
    | { sectionId: string; action: 'remove' }
    | { sectionId: string; action: 'changeVariant'; newVariant: Variant }
    | { sectionId: string; action: 'move'; position: string }
  >;
  explanation: string;
};

/**
 * Execute an AI editing command on the current website state.
 *
 * @param command - Natural language command from the user
 * @param sections - Current website sections
 * @param tokens - Current design tokens
 * @param selectedSectionId - Currently selected section (for context)
 * @returns EditPatch describing the changes to apply
 */
export async function executeEditCommand(
  command: string,
  sections: SectionConfig[],
  tokens: DesignTokens,
  selectedSectionId?: string,
): Promise<EditPatch> {
  if (!isConfigured()) {
    // Handle common commands without AI
    return handleLocalCommand(command, sections, tokens);
  }

  try {
    const systemPrompt = getEditSystemPrompt();
    const userPrompt = getEditUserPrompt(command, sections, tokens, selectedSectionId);

    const result = await generateJSON<EditPatch>(systemPrompt, userPrompt, {
      model: 'gpt-4o-mini',
      temperature: 0.6,
      maxTokens: 2048,
    });

    return result;
  } catch (error) {
    console.error('[AI Edit] Command execution failed:', error);
    // Try local handling as fallback
    return handleLocalCommand(command, sections, tokens);
  }
}

/**
 * Handle common edit commands locally without AI.
 * Covers the most frequent commands as a fallback.
 */
function handleLocalCommand(
  command: string,
  sections: SectionConfig[],
  tokens: DesignTokens,
): EditPatch {
  const cmd = command.toLowerCase().trim();

  // Dark mode / make it darker
  if (cmd.includes('dark')) {
    return {
      themeChanges: {
        colors: {
          background: '#030712',
          surface: 'rgba(255,255,255,0.03)',
          text: '#f9fafb',
          textMuted: 'rgba(255,255,255,0.6)',
          border: 'rgba(255,255,255,0.06)',
        },
      },
      explanation: 'Switched to dark mode with deep black backgrounds.',
    };
  }

  // Light mode / make it lighter
  if (cmd.includes('light') || cmd.includes('bright')) {
    return {
      themeChanges: {
        colors: {
          background: '#ffffff',
          surface: '#f8fafc',
          text: '#0f172a',
          textMuted: '#475569',
          border: '#e2e8f0',
        },
      },
      explanation: 'Switched to light mode with clean white backgrounds.',
    };
  }

  // Luxury / premium
  if (cmd.includes('luxury') || cmd.includes('premium') || cmd.includes('elegant')) {
    return {
      themeChanges: {
        colors: {
          primary: '#c9a84c',
          primaryLight: '#dfc06e',
          background: '#0d0d0d',
          gradient: { from: '#c9a84c', to: '#8b6914', angle: 135 },
        },
        typography: {
          headingFont: "'Playfair Display', serif",
          bodyFont: "'Cormorant Garamond', serif",
        },
        shapes: {
          radius: '4px',
          cardRadius: '4px',
          buttonRadius: '2px',
        },
      },
      explanation: 'Applied luxury styling with gold accents, serif fonts, and sharp edges.',
    };
  }

  // Modern
  if (cmd.includes('modern') || cmd.includes('futuristic')) {
    return {
      themeChanges: {
        colors: {
          primary: '#6366f1',
          secondary: '#06b6d4',
          gradient: { from: '#6366f1', to: '#06b6d4', angle: 135 },
        },
        typography: {
          headingFont: "'Inter', sans-serif",
        },
        shapes: {
          radius: '12px',
          cardRadius: '16px',
          buttonRadius: '9999px',
        },
        effects: {
          glassmorphism: true,
          gridPattern: true,
        },
      },
      explanation: 'Applied modern styling with vibrant gradients, rounded shapes, and glassmorphism.',
    };
  }

  // More whitespace / spacing
  if (cmd.includes('whitespace') || cmd.includes('space') || cmd.includes('breathing')) {
    return {
      themeChanges: {
        spacing: {
          sectionY: '8rem',
          gap: '2rem',
          gapLg: '4rem',
          cardPadding: '2.5rem',
        },
      },
      explanation: 'Increased spacing throughout for more breathing room.',
    };
  }

  // Serif fonts
  if (cmd.includes('serif')) {
    return {
      themeChanges: {
        typography: {
          headingFont: "'Playfair Display', serif",
          bodyFont: "'Source Serif 4', serif",
        },
      },
      explanation: 'Switched to serif typography for a classic, editorial feel.',
    };
  }

  // Sans-serif fonts
  if (cmd.includes('sans')) {
    return {
      themeChanges: {
        typography: {
          headingFont: "'Inter', sans-serif",
          bodyFont: "'Inter', sans-serif",
        },
      },
      explanation: 'Switched to clean sans-serif typography.',
    };
  }

  // Remove a section
  if (cmd.includes('remove') || cmd.includes('delete')) {
    const sectionTypes = ['hero', 'about', 'features', 'gallery', 'pricing', 'testimonials', 'faq', 'contact', 'cta', 'stats', 'team'];
    const targetType = sectionTypes.find((t) => cmd.includes(t));
    if (targetType) {
      const target = sections.find((s) => s.type === targetType);
      if (target) {
        return {
          sectionChanges: [{ sectionId: target.id, action: 'remove' }],
          explanation: `Removed the ${targetType} section.`,
        };
      }
    }
  }

  // Default: no changes
  return {
    explanation: 'Command not recognized. Try commands like "make it darker", "use luxury colors", "add more whitespace", or "remove the FAQ section".',
  };
}

/**
 * Apply an edit patch to the current state.
 * Returns new sections and tokens.
 */
export function applyEditPatch(
  patch: EditPatch,
  currentSections: SectionConfig[],
  currentTokens: DesignTokens,
): { sections: SectionConfig[]; tokens: DesignTokens } {
  let newTokens = { ...currentTokens };
  let newSections = [...currentSections];

  // Apply theme changes
  if (patch.themeChanges) {
    if (patch.themeChanges.colors) {
      newTokens = {
        ...newTokens,
        colors: { ...newTokens.colors, ...patch.themeChanges.colors },
      };
    }
    if (patch.themeChanges.typography) {
      newTokens = {
        ...newTokens,
        typography: { ...newTokens.typography, ...patch.themeChanges.typography },
      };
    }
    if (patch.themeChanges.spacing) {
      newTokens = {
        ...newTokens,
        spacing: { ...newTokens.spacing, ...patch.themeChanges.spacing },
      };
    }
    if (patch.themeChanges.shapes) {
      newTokens = {
        ...newTokens,
        shapes: { ...newTokens.shapes, ...patch.themeChanges.shapes },
      };
    }
    if (patch.themeChanges.effects) {
      newTokens = {
        ...newTokens,
        effects: { ...newTokens.effects, ...patch.themeChanges.effects },
      };
    }
  }

  // Apply section changes
  if (patch.sectionChanges) {
    for (const change of patch.sectionChanges) {
      switch (change.action) {
        case 'update': {
          newSections = newSections.map((s) =>
            s.id === change.sectionId
              ? { ...s, config: { ...s.config, ...change.configPatch } }
              : s,
          );
          break;
        }
        case 'remove': {
          newSections = newSections.filter((s) => s.id !== change.sectionId);
          break;
        }
        case 'changeVariant': {
          newSections = newSections.map((s) =>
            s.id === change.sectionId ? { ...s, variant: change.newVariant } : s,
          );
          break;
        }
        case 'add': {
          const newSection: SectionConfig = {
            id: `${change.type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            type: change.type as any,
            variant: change.variant,
            config: change.config,
          };
          // Insert at position or end
          if (change.position?.startsWith('after:')) {
            const afterId = change.position.slice(6);
            const idx = newSections.findIndex((s) => s.id === afterId);
            if (idx >= 0) {
              newSections.splice(idx + 1, 0, newSection);
            } else {
              newSections.push(newSection);
            }
          } else {
            // Add before footer if exists, otherwise at end
            const footerIdx = newSections.findIndex((s) => s.type === 'footer');
            if (footerIdx >= 0) {
              newSections.splice(footerIdx, 0, newSection);
            } else {
              newSections.push(newSection);
            }
          }
          break;
        }
        case 'move': {
          const moveIdx = newSections.findIndex((s) => s.id === change.sectionId);
          if (moveIdx >= 0) {
            const [moved] = newSections.splice(moveIdx, 1);
            if (change.position.startsWith('after:')) {
              const afterId = change.position.slice(6);
              const targetIdx = newSections.findIndex((s) => s.id === afterId);
              newSections.splice(targetIdx + 1, 0, moved);
            } else {
              newSections.push(moved);
            }
          }
          break;
        }
      }
    }
  }

  return { sections: newSections, tokens: newTokens };
}
