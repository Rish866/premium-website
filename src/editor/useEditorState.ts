/**
 * Editor State Management
 *
 * Manages the full editor state with undo/redo support.
 * This is the core state machine for the visual editor.
 */

import { useState, useCallback, useRef } from 'react';
import type { SectionConfig } from '../engine/types';
import type { DesignTokens } from '../themes/tokens';

export type EditorState = {
  sections: SectionConfig[];
  tokens: DesignTokens;
  selectedSectionId: string | null;
};

type HistoryEntry = {
  sections: SectionConfig[];
  tokens: DesignTokens;
};

const MAX_HISTORY = 50;

/**
 * Core editor state hook with undo/redo.
 */
export function useEditorState(initialSections: SectionConfig[], initialTokens: DesignTokens) {
  const [sections, setSections] = useState<SectionConfig[]>(initialSections);
  const [tokens, setTokens] = useState<DesignTokens>(initialTokens);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

  // Undo/redo stacks
  const past = useRef<HistoryEntry[]>([]);
  const future = useRef<HistoryEntry[]>([]);

  /**
   * Push current state to history before making a change.
   */
  const pushHistory = useCallback(() => {
    past.current.push({ sections: [...sections], tokens: { ...tokens } });
    if (past.current.length > MAX_HISTORY) {
      past.current.shift();
    }
    future.current = []; // Clear redo stack on new change
  }, [sections, tokens]);

  /**
   * Undo the last change.
   */
  const undo = useCallback(() => {
    if (past.current.length === 0) return;
    const prev = past.current.pop()!;
    future.current.push({ sections: [...sections], tokens: { ...tokens } });
    setSections(prev.sections);
    setTokens(prev.tokens);
  }, [sections, tokens]);

  /**
   * Redo the last undone change.
   */
  const redo = useCallback(() => {
    if (future.current.length === 0) return;
    const next = future.current.pop()!;
    past.current.push({ sections: [...sections], tokens: { ...tokens } });
    setSections(next.sections);
    setTokens(next.tokens);
  }, [sections, tokens]);

  /**
   * Update a section's config.
   */
  const updateSectionConfig = useCallback(
    (sectionId: string, newConfig: Record<string, unknown>) => {
      pushHistory();
      setSections((prev) =>
        prev.map((s) => (s.id === sectionId ? { ...s, config: { ...s.config, ...newConfig } } : s)),
      );
    },
    [pushHistory],
  );

  /**
   * Replace a section's full config (not merge).
   */
  const replaceSectionConfig = useCallback(
    (sectionId: string, config: Record<string, unknown>) => {
      pushHistory();
      setSections((prev) =>
        prev.map((s) => (s.id === sectionId ? { ...s, config } : s)),
      );
    },
    [pushHistory],
  );

  /**
   * Change a section's layout variant.
   */
  const changeSectionVariant = useCallback(
    (sectionId: string, variant: 'A' | 'B' | 'C' | 'D') => {
      pushHistory();
      setSections((prev) =>
        prev.map((s) => (s.id === sectionId ? { ...s, variant } : s)),
      );
    },
    [pushHistory],
  );

  /**
   * Remove a section.
   */
  const removeSection = useCallback(
    (sectionId: string) => {
      pushHistory();
      setSections((prev) => prev.filter((s) => s.id !== sectionId));
      if (selectedSectionId === sectionId) {
        setSelectedSectionId(null);
      }
    },
    [pushHistory, selectedSectionId],
  );

  /**
   * Duplicate a section.
   */
  const duplicateSection = useCallback(
    (sectionId: string) => {
      pushHistory();
      setSections((prev) => {
        const idx = prev.findIndex((s) => s.id === sectionId);
        if (idx < 0) return prev;
        const original = prev[idx];
        const clone: SectionConfig = {
          ...original,
          id: `${original.type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          config: { ...original.config },
        };
        const newSections = [...prev];
        newSections.splice(idx + 1, 0, clone);
        return newSections;
      });
    },
    [pushHistory],
  );

  /**
   * Move a section up or down.
   */
  const moveSection = useCallback(
    (sectionId: string, direction: 'up' | 'down') => {
      pushHistory();
      setSections((prev) => {
        const idx = prev.findIndex((s) => s.id === sectionId);
        if (idx < 0) return prev;
        if (direction === 'up' && idx === 0) return prev;
        if (direction === 'down' && idx === prev.length - 1) return prev;

        const newSections = [...prev];
        const swap = direction === 'up' ? idx - 1 : idx + 1;
        [newSections[idx], newSections[swap]] = [newSections[swap], newSections[idx]];
        return newSections;
      });
    },
    [pushHistory],
  );

  /**
   * Add a new section at a specific position.
   */
  const addSection = useCallback(
    (section: SectionConfig, afterSectionId?: string) => {
      pushHistory();
      setSections((prev) => {
        if (afterSectionId) {
          const idx = prev.findIndex((s) => s.id === afterSectionId);
          if (idx >= 0) {
            const newSections = [...prev];
            newSections.splice(idx + 1, 0, section);
            return newSections;
          }
        }
        // Add before footer if it exists
        const footerIdx = prev.findIndex((s) => s.type === 'footer');
        if (footerIdx >= 0) {
          const newSections = [...prev];
          newSections.splice(footerIdx, 0, section);
          return newSections;
        }
        return [...prev, section];
      });
    },
    [pushHistory],
  );

  /**
   * Update design tokens.
   */
  const updateTokens = useCallback(
    (newTokens: DesignTokens) => {
      pushHistory();
      setTokens(newTokens);
    },
    [pushHistory],
  );

  /**
   * Partially update tokens (merge).
   */
  const patchTokens = useCallback(
    (patch: Partial<DesignTokens>) => {
      pushHistory();
      setTokens((prev) => ({ ...prev, ...patch }));
    },
    [pushHistory],
  );

  /**
   * Bulk update: set both sections and tokens at once (for AI edit commands).
   */
  const bulkUpdate = useCallback(
    (newSections: SectionConfig[], newTokens: DesignTokens) => {
      pushHistory();
      setSections(newSections);
      setTokens(newTokens);
    },
    [pushHistory],
  );

  return {
    // State
    sections,
    tokens,
    selectedSectionId,

    // Selection
    selectSection: setSelectedSectionId,
    clearSelection: () => setSelectedSectionId(null),

    // Section operations
    updateSectionConfig,
    replaceSectionConfig,
    changeSectionVariant,
    removeSection,
    duplicateSection,
    moveSection,
    addSection,

    // Theme operations
    updateTokens,
    patchTokens,

    // Bulk operations
    bulkUpdate,

    // Undo/Redo
    undo,
    redo,
    canUndo: past.current.length > 0,
    canRedo: future.current.length > 0,
  };
}
