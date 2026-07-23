import type { DesignTokens, StylePreset } from '../tokens';
import { luxuryPreset } from './luxury';
import { modernPreset } from './modern';
import { boldPreset } from './bold';
import { minimalPreset } from './minimal';
import { corporatePreset } from './corporate';
import { darkPreset } from './dark';
import { colorfulPreset } from './colorful';

export const presets: Record<StylePreset, DesignTokens> = {
  luxury: luxuryPreset,
  modern: modernPreset,
  bold: boldPreset,
  minimal: minimalPreset,
  corporate: corporatePreset,
  dark: darkPreset,
  colorful: colorfulPreset,
};

export function getPreset(style: StylePreset): DesignTokens {
  return presets[style] ?? presets.modern;
}

export { luxuryPreset, modernPreset, boldPreset, minimalPreset, corporatePreset, darkPreset, colorfulPreset };
