/**
 * Page Renderer
 *
 * Renders a complete page from an array of SectionConfigs.
 * Uses the VariantRegistry to resolve components and
 * ThemeProvider to inject design tokens.
 */

import { Suspense } from 'react';
import type { SectionConfig } from '../types';
import type { DesignTokens } from '../../themes/tokens';
import ThemeProvider from '../../themes/ThemeProvider';
import { getBlockComponent } from '../registry/VariantRegistry';

type PageRendererProps = {
  sections: SectionConfig[];
  tokens: DesignTokens;
  /** Whether blocks are in edit mode */
  editable?: boolean;
  /** Called when a section's config changes (editor mode) */
  onSectionConfigChange?: (sectionId: string, newConfig: Record<string, unknown>) => void;
  /** Called when a section is selected (editor mode) */
  onSectionSelect?: (sectionId: string) => void;
  /** Currently selected section ID */
  selectedSectionId?: string;
};

/**
 * Fallback loading component for lazy-loaded blocks.
 */
function BlockSkeleton() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent opacity-30" />
    </div>
  );
}

/**
 * Renders a single section with its resolved variant component.
 */
function SectionRenderer({
  section,
  editable,
  onConfigChange,
  onSelect,
  isSelected,
}: {
  section: SectionConfig;
  editable?: boolean;
  onConfigChange?: (newConfig: Record<string, unknown>) => void;
  onSelect?: () => void;
  isSelected?: boolean;
}) {
  const Component = getBlockComponent(section.type, section.variant);

  if (!Component) {
    return (
      <div className="flex min-h-[100px] items-center justify-center border border-dashed border-red-500/30 bg-red-500/5 p-4 text-sm text-red-400">
        Unknown block type: {section.type} (variant {section.variant})
      </div>
    );
  }

  return (
    <div
      data-section-id={section.id}
      data-section-type={section.type}
      className={`relative ${editable ? 'cursor-pointer transition-all' : ''} ${
        isSelected && editable ? 'ring-2 ring-blue-500/50' : ''
      }`}
      onClick={editable ? onSelect : undefined}
      style={section.styleOverrides}
    >
      <Suspense fallback={<BlockSkeleton />}>
        <Component
          config={section.config}
          sectionId={section.id}
          editable={editable}
          onConfigChange={onConfigChange}
        />
      </Suspense>
    </div>
  );
}

/**
 * Main page renderer.
 * Wraps all sections in a ThemeProvider and renders them in order.
 */
export default function PageRenderer({
  sections,
  tokens,
  editable = false,
  onSectionConfigChange,
  onSectionSelect,
  selectedSectionId,
}: PageRendererProps) {
  return (
    <ThemeProvider tokens={tokens}>
      <div className="page-renderer">
        {sections.map((section) => (
          <SectionRenderer
            key={section.id}
            section={section}
            editable={editable}
            onConfigChange={
              onSectionConfigChange
                ? (newConfig) => onSectionConfigChange(section.id, newConfig)
                : undefined
            }
            onSelect={
              onSectionSelect
                ? () => onSectionSelect(section.id)
                : undefined
            }
            isSelected={selectedSectionId === section.id}
          />
        ))}
      </div>
    </ThemeProvider>
  );
}
