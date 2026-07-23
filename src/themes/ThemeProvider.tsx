import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { DesignTokens } from './tokens';
import { getPreset } from './presets';
import type { StylePreset } from './tokens';

type ThemeContextValue = {
  tokens: DesignTokens;
  cssVars: Record<string, string>;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

export function useThemeTokens(): DesignTokens {
  return useTheme().tokens;
}

/**
 * Converts DesignTokens into a flat Record of CSS custom properties.
 * Blocks consume these via var(--token-name).
 */
function tokensToCSSVars(tokens: DesignTokens): Record<string, string> {
  return {
    // Colors
    '--color-primary': tokens.colors.primary,
    '--color-primary-light': tokens.colors.primaryLight,
    '--color-primary-dark': tokens.colors.primaryDark,
    '--color-secondary': tokens.colors.secondary,
    '--color-accent': tokens.colors.accent,
    '--color-background': tokens.colors.background,
    '--color-surface': tokens.colors.surface,
    '--color-surface-hover': tokens.colors.surfaceHover,
    '--color-text': tokens.colors.text,
    '--color-text-muted': tokens.colors.textMuted,
    '--color-text-subtle': tokens.colors.textSubtle,
    '--color-border': tokens.colors.border,
    '--color-border-hover': tokens.colors.borderHover,
    '--color-gradient-from': tokens.colors.gradient.from,
    '--color-gradient-to': tokens.colors.gradient.to,
    '--color-gradient-angle': `${tokens.colors.gradient.angle}deg`,

    // Typography
    '--font-heading': tokens.typography.headingFont,
    '--font-body': tokens.typography.bodyFont,
    '--font-heading-weight': String(tokens.typography.headingWeight),
    '--font-body-weight': String(tokens.typography.bodyWeight),
    '--font-h1': tokens.typography.h1,
    '--font-h2': tokens.typography.h2,
    '--font-h3': tokens.typography.h3,
    '--font-h4': tokens.typography.h4,
    '--font-body-size': tokens.typography.body,
    '--font-small': tokens.typography.small,
    '--line-height': String(tokens.typography.lineHeight),
    '--heading-line-height': String(tokens.typography.headingLineHeight),
    '--letter-spacing': tokens.typography.letterSpacing,
    '--heading-letter-spacing': tokens.typography.headingLetterSpacing,

    // Spacing
    '--section-y': tokens.spacing.sectionY,
    '--section-x': tokens.spacing.sectionX,
    '--container-max': tokens.spacing.containerMax,
    '--gap': tokens.spacing.gap,
    '--gap-lg': tokens.spacing.gapLg,
    '--card-padding': tokens.spacing.cardPadding,
    '--card-padding-lg': tokens.spacing.cardPaddingLg,

    // Shapes
    '--radius': tokens.shapes.radius,
    '--radius-sm': tokens.shapes.radiusSm,
    '--radius-lg': tokens.shapes.radiusLg,
    '--radius-xl': tokens.shapes.radiusXl,
    '--radius-full': tokens.shapes.radiusFull,
    '--card-radius': tokens.shapes.cardRadius,
    '--button-radius': tokens.shapes.buttonRadius,
    '--image-radius': tokens.shapes.imageRadius,
    '--input-radius': tokens.shapes.inputRadius,

    // Effects
    '--shadow': tokens.effects.shadow,
    '--shadow-lg': tokens.effects.shadowLg,
    '--card-shadow': tokens.effects.cardShadow,
    '--button-shadow': tokens.effects.buttonShadow,
    '--glow-color': tokens.effects.glowColor,
    '--glow-opacity': String(tokens.effects.glowOpacity),

    // Buttons
    '--btn-primary-bg': tokens.buttons.primary.bg,
    '--btn-primary-text': tokens.buttons.primary.text,
    '--btn-primary-hover': tokens.buttons.primary.hoverBg,
    '--btn-primary-shadow': tokens.buttons.primary.shadow,
    '--btn-primary-padding': tokens.buttons.primary.padding,
    '--btn-primary-font-size': tokens.buttons.primary.fontSize,
    '--btn-primary-font-weight': String(tokens.buttons.primary.fontWeight),
    '--btn-secondary-bg': tokens.buttons.secondary.bg,
    '--btn-secondary-text': tokens.buttons.secondary.text,
    '--btn-secondary-border': tokens.buttons.secondary.border,
    '--btn-secondary-hover': tokens.buttons.secondary.hoverBg,
    '--btn-secondary-padding': tokens.buttons.secondary.padding,
    '--btn-secondary-font-size': tokens.buttons.secondary.fontSize,
    '--btn-secondary-font-weight': String(tokens.buttons.secondary.fontWeight),
  };
}

type ThemeProviderProps = {
  tokens: DesignTokens;
  children: ReactNode;
};

export default function ThemeProvider({ tokens, children }: ThemeProviderProps) {
  const cssVars = useMemo(() => tokensToCSSVars(tokens), [tokens]);

  const value = useMemo(() => ({ tokens, cssVars }), [tokens, cssVars]);

  return (
    <ThemeContext.Provider value={value}>
      <div style={cssVars as React.CSSProperties} className="theme-root">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * Helper: get a preset and create a ThemeProvider.
 * Used in the generation/preview flow.
 */
export function PresetThemeProvider({
  preset,
  children,
}: {
  preset: StylePreset;
  children: ReactNode;
}) {
  const tokens = useMemo(() => getPreset(preset), [preset]);
  return <ThemeProvider tokens={tokens}>{children}</ThemeProvider>;
}
