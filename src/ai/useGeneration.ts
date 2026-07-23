/**
 * useGeneration Hook
 *
 * React hook that manages the website generation pipeline.
 * Provides progress updates to the UI during generation.
 */

import { useState, useCallback } from 'react';
import type { GenerationInput } from './types';
import type { SectionConfig } from '../engine/types';
import type { DesignTokens } from '../themes/tokens';
import { generateWebsite } from './generateWebsite';

export type GenerationStatus =
  | 'idle'
  | 'selecting-structure'
  | 'generating-copy'
  | 'selecting-images'
  | 'applying-design'
  | 'complete'
  | 'error';

export type GenerationProgress = {
  status: GenerationStatus;
  message: string;
  percent: number;
};

export type GenerationResult = {
  sections: SectionConfig[];
  tokens: DesignTokens;
  navLinks: string[];
} | null;

const progressMessages: Record<GenerationStatus, string> = {
  idle: '',
  'selecting-structure': 'Analyzing industry and selecting website structure...',
  'generating-copy': 'Writing professional copy for your business...',
  'selecting-images': 'Finding the perfect images...',
  'applying-design': 'Applying design system and layout variants...',
  complete: 'Your website is ready!',
  error: 'Something went wrong. Please try again.',
};

const progressPercent: Record<GenerationStatus, number> = {
  idle: 0,
  'selecting-structure': 20,
  'generating-copy': 50,
  'selecting-images': 75,
  'applying-design': 90,
  complete: 100,
  error: 0,
};

/**
 * Hook for managing website generation with progress tracking.
 */
export function useGeneration() {
  const [progress, setProgress] = useState<GenerationProgress>({
    status: 'idle',
    message: '',
    percent: 0,
  });
  const [result, setResult] = useState<GenerationResult>(null);
  const [error, setError] = useState<string | null>(null);

  const updateProgress = (status: GenerationStatus) => {
    setProgress({
      status,
      message: progressMessages[status],
      percent: progressPercent[status],
    });
  };

  const generate = useCallback(async (input: GenerationInput) => {
    setError(null);
    setResult(null);

    try {
      updateProgress('selecting-structure');
      await delay(400); // Brief delay for UI feedback

      updateProgress('generating-copy');
      await delay(300);

      updateProgress('selecting-images');

      // Run the actual generation
      const output = await generateWebsite(input);

      updateProgress('applying-design');
      await delay(400);

      updateProgress('complete');
      setResult(output);

      return output;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Generation failed';
      setError(message);
      updateProgress('error');
      console.error('[Generation]', err);
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setProgress({ status: 'idle', message: '', percent: 0 });
    setResult(null);
    setError(null);
  }, []);

  return {
    generate,
    reset,
    progress,
    result,
    error,
    isGenerating: !['idle', 'complete', 'error'].includes(progress.status),
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
