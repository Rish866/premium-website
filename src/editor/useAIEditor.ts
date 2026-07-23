/**
 * AI Editor Hook
 *
 * Integrates AI editing commands with the editor state.
 * Handles the flow: user command → AI processing → state update.
 */

import { useState, useCallback } from 'react';
import type { SectionConfig } from '../engine/types';
import type { DesignTokens } from '../themes/tokens';
import { executeEditCommand, applyEditPatch, type EditPatch } from '../ai/editWebsite';

export type AIEditStatus = 'idle' | 'processing' | 'success' | 'error';

/**
 * Hook for AI-powered editing commands.
 */
export function useAIEditor(
  sections: SectionConfig[],
  tokens: DesignTokens,
  selectedSectionId: string | null,
  onApply: (newSections: SectionConfig[], newTokens: DesignTokens) => void,
) {
  const [status, setStatus] = useState<AIEditStatus>('idle');
  const [lastExplanation, setLastExplanation] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<{ command: string; explanation: string }[]>([]);

  /**
   * Execute an AI editing command.
   */
  const execute = useCallback(
    async (command: string) => {
      if (!command.trim()) return;

      setStatus('processing');
      setError(null);

      try {
        const patch: EditPatch = await executeEditCommand(
          command,
          sections,
          tokens,
          selectedSectionId ?? undefined,
        );

        // Apply the patch
        const { sections: newSections, tokens: newTokens } = applyEditPatch(
          patch,
          sections,
          tokens,
        );

        onApply(newSections, newTokens);
        setLastExplanation(patch.explanation);
        setHistory((prev) => [...prev, { command, explanation: patch.explanation }]);
        setStatus('success');

        // Reset status after a delay
        setTimeout(() => setStatus('idle'), 3000);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Command failed';
        setError(message);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    },
    [sections, tokens, selectedSectionId, onApply],
  );

  return {
    execute,
    status,
    lastExplanation,
    error,
    history,
    isProcessing: status === 'processing',
  };
}
