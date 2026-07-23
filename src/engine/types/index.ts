/**
 * Core Engine Types
 *
 * These types define the data model for generated websites.
 * The engine renders sections based on their type + variant + config.
 */

/**
 * Section variant identifiers
 */
export type Variant = 'A' | 'B' | 'C' | 'D';

/**
 * Available section types for the website builder.
 * Includes both generic sections and industry-specific ones.
 */
export type SectionType =
  // Core sections (every website)
  | 'navbar'
  | 'hero'
  | 'features'
  | 'about'
  | 'gallery'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'contact'
  | 'cta'
  | 'footer'
  | 'team'
  | 'stats'
  | 'blog'
  // Industry-specific sections
  | 'menu'           // Restaurant
  | 'reservation'    // Restaurant
  | 'doctors'        // Clinic
  | 'treatments'     // Clinic
  | 'appointment'    // Clinic
  | 'properties'     // Real Estate
  | 'agents'         // Real Estate
  | 'membership'     // Gym
  | 'trainers'       // Gym
  | 'schedule'       // Gym
  | 'portfolio'      // Agency
  | 'process'        // Agency
  | 'practiceAreas'  // Law Firm
  | 'attorneys'      // Law Firm
  | 'caseStudies';   // Law Firm / Agency

/**
 * A single section in a page. Contains all data needed to render it.
 */
export type SectionConfig = {
  id: string;
  type: SectionType;
  variant: Variant;
  config: Record<string, unknown>;
  /** Optional style overrides per-section */
  styleOverrides?: {
    background?: string;
    textColor?: string;
    padding?: string;
  };
};

/**
 * A page within the generated website.
 */
export type PageConfig = {
  id: string;
  title: string;
  slug: string;
  isHome: boolean;
  sections: SectionConfig[];
  sortOrder: number;
};

/**
 * Complete generated website configuration.
 * This is the output of the AI generation pipeline.
 */
export type WebsiteConfig = {
  id: string;
  businessName: string;
  industry: string;
  description: string;
  location: string;
  stylePreset: string;
  pages: PageConfig[];
  designTokens: string; // serialized DesignTokens id/name
  metadata: {
    generatedAt: string;
    version: string;
    aiModel?: string;
  };
};

/**
 * Props interface that ALL block components receive.
 * Blocks get their section config and can access theme via useTheme().
 */
export type BlockProps<T extends Record<string, unknown> = Record<string, unknown>> = {
  config: T;
  sectionId: string;
  /** Whether the block is in edit mode (enables inline editing) */
  editable?: boolean;
  /** Callback when config changes (editor mode) */
  onConfigChange?: (newConfig: T) => void;
};

/**
 * Block component type - what gets stored in the registry
 */
export type BlockComponent<T extends Record<string, unknown> = Record<string, unknown>> =
  React.ComponentType<BlockProps<T>>;

/**
 * Registry entry for a section type
 */
export type BlockRegistryEntry = {
  type: SectionType;
  label: string;
  description: string;
  variants: Partial<Record<Variant, BlockComponent>>;
  defaultConfig: Record<string, unknown>;
  /** Which industries this section is relevant for (empty = all) */
  industries?: string[];
};
