/**
 * Design Token System
 *
 * Every visual decision in the app is controlled by these tokens.
 * Blocks NEVER hardcode colors, fonts, or spacing — they consume tokens
 * via CSS custom properties injected by ThemeProvider.
 */

export type ColorTokens = {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  surfaceHover: string;
  text: string;
  textMuted: string;
  textSubtle: string;
  border: string;
  borderHover: string;
  gradient: {
    from: string;
    to: string;
    angle: number;
  };
};

export type TypographyTokens = {
  headingFont: string;
  bodyFont: string;
  headingWeight: number;
  bodyWeight: number;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  body: string;
  small: string;
  lineHeight: number;
  headingLineHeight: number;
  letterSpacing: string;
  headingLetterSpacing: string;
};

export type SpacingTokens = {
  sectionY: string;
  sectionX: string;
  containerMax: string;
  gap: string;
  gapLg: string;
  cardPadding: string;
  cardPaddingLg: string;
};

export type ShapeTokens = {
  radius: string;
  radiusSm: string;
  radiusLg: string;
  radiusXl: string;
  radiusFull: string;
  cardRadius: string;
  buttonRadius: string;
  imageRadius: string;
  inputRadius: string;
};

export type EffectTokens = {
  shadow: string;
  shadowLg: string;
  cardShadow: string;
  buttonShadow: string;
  glowColor: string;
  glowOpacity: number;
  glassmorphism: boolean;
  gradientOverlay: boolean;
  noise: boolean;
  gridPattern: boolean;
  animationSpeed: 'fast' | 'normal' | 'slow' | 'none';
};

export type ButtonTokens = {
  primary: {
    bg: string;
    text: string;
    hoverBg: string;
    shadow: string;
    padding: string;
    fontSize: string;
    fontWeight: number;
  };
  secondary: {
    bg: string;
    text: string;
    border: string;
    hoverBg: string;
    padding: string;
    fontSize: string;
    fontWeight: number;
  };
};

export type DesignTokens = {
  id: string;
  name: string;
  mode: 'dark' | 'light';
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shapes: ShapeTokens;
  effects: EffectTokens;
  buttons: ButtonTokens;
};

/**
 * Style presets available to the user during onboarding
 */
export type StylePreset =
  | 'luxury'
  | 'modern'
  | 'bold'
  | 'minimal'
  | 'corporate'
  | 'dark'
  | 'colorful';

export const stylePresetLabels: Record<StylePreset, string> = {
  luxury: 'Luxury',
  modern: 'Modern',
  bold: 'Bold',
  minimal: 'Minimal',
  corporate: 'Corporate',
  dark: 'Dark',
  colorful: 'Colorful',
};

export const stylePresetDescriptions: Record<StylePreset, string> = {
  luxury: 'Serif fonts, gold accents, elegant and exclusive',
  modern: 'Clean gradients, glassmorphism, forward-thinking',
  bold: 'High contrast, strong typography, attention-grabbing',
  minimal: 'Whitespace, precision, intentional simplicity',
  corporate: 'Professional blue, clean layouts, trustworthy',
  dark: 'Deep blacks, subtle glows, premium feel',
  colorful: 'Vibrant palette, playful gradients, energetic',
};
