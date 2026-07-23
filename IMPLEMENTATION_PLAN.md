# AI Website Builder - Complete Redesign Implementation Plan

## Executive Summary

Transform the current template-based website generator into a true AI-powered website builder
that produces unique, premium, agency-quality websites for every generation.

---

## Current State Analysis

### Why Current Output Feels Generic

| Problem | Root Cause | Impact |
|---------|-----------|--------|
| Every site looks the same | Single layout per block type | No visual variety |
| Copy feels placeholder-ish | Template string interpolation, no LLM | Generic text |
| Same color scheme everywhere | Hardcoded cyan/purple in blocks | Theme not applied |
| Same section order | Fixed array in generateWebsite.ts | Predictable structure |
| No industry personality | Only text content varies | Restaurant = Law Firm visually |
| Theme settings ignored | Blocks don't consume theme context | Wasted user input |
| Limited editing | Only text fields + raw JSON | Not production-ready |
| No style variety | No concept of Luxury/Modern/Bold | One-size-fits-all |

### Current Architecture Limitations

```
Current Flow:
Onboarding → industryTemplates.ts → generateWebsite.ts → Supabase → BlockRegistry → Render

Problems:
- industryTemplates.ts: Only stores text content, no visual/layout info
- generateWebsite.ts: Hardcoded section order, no AI
- BlockRegistry: 1 component per block type, no variants
- Blocks: Hardcoded styles, ignore theme context
- Editor: Property panel with text inputs only
```


---

## Target Architecture

```
New Flow:
Onboarding (simplified) 
  → AI Engine (LLM) generates:
      - Page structure (which sections, what order)
      - Professional copy (all text content)
      - Design tokens (from style preset + industry)
      - Layout variant selection (Hero A, Features C, etc.)
      - Image suggestions (matched to business)
  → Theme Engine applies design tokens to CSS variables
  → Layout Engine renders selected variants with theme
  → Visual Editor for post-generation editing
  → AI Editor for natural language modifications
  → Export Engine for code output
```

### New Folder Structure

```
src/
├── ai/                          # AI generation layer
│   ├── providers/               # LLM provider adapters (OpenAI, Anthropic)
│   │   ├── openai.ts
│   │   ├── anthropic.ts
│   │   └── index.ts
│   ├── prompts/                 # System prompts for generation
│   │   ├── copyGeneration.ts
│   │   ├── structureGeneration.ts
│   │   ├── editCommands.ts
│   │   └── imageSuggestions.ts
│   ├── generateWebsite.ts       # Main orchestrator
│   ├── generateCopy.ts          # Professional copy generation
│   ├── generateStructure.ts     # Page/section structure decisions
│   ├── generateDesign.ts        # Design token generation
│   ├── editWebsite.ts           # AI editing commands
│   └── imageService.ts          # Image generation/selection
│
├── engine/                      # Rendering engine
│   ├── blocks/                  # Block components (multiple variants each)
│   │   ├── hero/
│   │   │   ├── HeroA.tsx        # Split layout with image right
│   │   │   ├── HeroB.tsx        # Centered text, background image
│   │   │   ├── HeroC.tsx        # Video background, overlay text
│   │   │   ├── HeroD.tsx        # Asymmetric, floating elements
│   │   │   └── index.ts         # Variant registry
│   │   ├── features/
│   │   │   ├── FeaturesA.tsx    # Grid cards
│   │   │   ├── FeaturesB.tsx    # Alternating rows with images
│   │   │   ├── FeaturesC.tsx    # Icon list with descriptions
│   │   │   └── index.ts
│   │   ├── testimonials/
│   │   │   ├── TestimonialsA.tsx # Carousel
│   │   │   ├── TestimonialsB.tsx # Grid with photos
│   │   │   └── index.ts
│   │   ├── gallery/
│   │   │   ├── GalleryA.tsx     # Masonry grid
│   │   │   ├── GalleryB.tsx     # Full-width carousel
│   │   │   └── index.ts
│   │   ├── pricing/
│   │   │   ├── PricingA.tsx     # Card columns
│   │   │   ├── PricingB.tsx     # Comparison table
│   │   │   └── index.ts
│   │   ├── contact/
│   │   ├── cta/
│   │   ├── faq/
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── about/
│   │   ├── team/
│   │   └── industry/            # Industry-specific blocks
│   │       ├── MenuBlock.tsx
│   │       ├── ReservationBlock.tsx
│   │       ├── DoctorsBlock.tsx
│   │       ├── PropertiesBlock.tsx
│   │       ├── ScheduleBlock.tsx
│   │       ├── PortfolioBlock.tsx
│   │       └── index.ts
│   ├── registry/
│   │   └── BlockRegistry.ts     # Maps type+variant to component
│   └── renderer/
│       └── PageRenderer.tsx      # Renders a page from section config
│
├── themes/                      # Design system
│   ├── presets/                  # Style presets
│   │   ├── luxury.ts
│   │   ├── modern.ts
│   │   ├── bold.ts
│   │   ├── minimal.ts
│   │   ├── corporate.ts
│   │   ├── dark.ts
│   │   └── colorful.ts
│   ├── tokens.ts                # Design token types
│   ├── ThemeProvider.tsx         # React context providing tokens
│   └── themeEngine.ts           # Generates tokens from preset + inputs
│
├── industry/                    # Industry intelligence
│   ├── presets/                  # Per-industry configuration
│   │   ├── restaurant.ts
│   │   ├── clinic.ts
│   │   ├── gym.ts
│   │   ├── lawFirm.ts
│   │   ├── realEstate.ts
│   │   └── ...
│   ├── sectionMap.ts            # Which sections each industry needs
│   └── imageMap.ts              # Image categories per industry
│
├── editor/                      # Visual editing
│   ├── EditorCanvas.tsx         # Main editing surface
│   ├── InlineEditor.tsx         # Click-to-edit text
│   ├── SectionDragDrop.tsx      # Drag to reorder
│   ├── ToolbarPanel.tsx         # Left toolbar
│   ├── StylePanel.tsx           # Right panel for styles
│   ├── AICommandBar.tsx         # AI editing input
│   ├── UndoRedoManager.ts      # Undo/redo state machine
│   └── hooks/
│       ├── useEditorState.ts
│       ├── useUndoRedo.ts
│       └── useDragDrop.ts
│
├── export/                      # Code export
│   ├── exporters/
│   │   ├── nextjs.ts
│   │   ├── react.ts
│   │   ├── html.ts
│   │   └── tailwind.ts
│   ├── ExportDialog.tsx
│   └── zipGenerator.ts
│
├── onboarding/                  # Simplified onboarding
│   ├── OnboardingWizard.tsx
│   ├── steps/
│   │   ├── IndustryStep.tsx
│   │   ├── BusinessInfoStep.tsx # Name + description
│   │   ├── LocationStep.tsx
│   │   ├── LogoStep.tsx
│   │   └── StyleStep.tsx        # Luxury/Modern/Bold/etc.
│   └── types.ts
│
├── components/                  # Shared UI components
├── lib/                         # Utilities
├── hooks/                       # Shared hooks
├── types/                       # Global types
└── pages/                       # Route pages
```


---

## Phase 1: Modular Architecture Restructure

**Goal:** Reorganize the project without breaking existing functionality.

### Steps:
1. Create new folder structure alongside existing code
2. Move/refactor existing blocks into the new `engine/blocks/` structure
3. Create the ThemeProvider context
4. Create the new BlockRegistry that supports variants
5. Update imports throughout the app
6. Verify existing functionality still works

### Key Files to Create:
- `src/themes/tokens.ts` - Design token type definitions
- `src/themes/ThemeProvider.tsx` - Context provider
- `src/engine/registry/BlockRegistry.ts` - New variant-aware registry
- `src/ai/generateWebsite.ts` - New orchestrator (initially wrapping old logic)

---

## Phase 2: Intelligent Design System

**Goal:** Every style choice produces a completely different visual feel.

### Design Token Structure:

```typescript
type DesignTokens = {
  // Colors
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    gradient: { from: string; to: string; angle: number };
  };
  
  // Typography
  typography: {
    headingFont: string;       // e.g., 'Playfair Display' for luxury
    bodyFont: string;          // e.g., 'Inter' for modern
    headingWeight: number;
    bodyWeight: number;
    headingSize: { h1: string; h2: string; h3: string };
    lineHeight: number;
    letterSpacing: string;
  };
  
  // Spacing & Layout
  spacing: {
    sectionPadding: string;
    containerWidth: string;
    gap: string;
    cardPadding: string;
  };
  
  // Shapes
  shapes: {
    borderRadius: string;
    cardRadius: string;
    buttonRadius: string;
    imageRadius: string;
  };
  
  // Effects
  effects: {
    shadow: string;
    cardShadow: string;
    buttonShadow: string;
    glassmorphism: boolean;
    gradientOverlay: boolean;
    noise: boolean;
    gridPattern: boolean;
  };
  
  // Buttons
  buttons: {
    primary: { bg: string; text: string; hover: string; padding: string };
    secondary: { bg: string; text: string; border: string; padding: string };
  };
  
  // Mode
  mode: 'dark' | 'light';
};
```

### Style Presets:

| Preset | Fonts | Colors | Shapes | Effects |
|--------|-------|--------|--------|---------|
| Luxury | Playfair Display + Cormorant | Gold/Black/Ivory | Sharp corners | Subtle gradients, no noise |
| Modern | Inter + Space Grotesk | Vibrant gradients | Large radius | Glassmorphism, grid |
| Bold | Monument Extended + Inter | High contrast, neon | Medium radius | Strong shadows, noise |
| Minimal | Satoshi + DM Sans | Muted neutrals | Small radius | No effects, clean |
| Corporate | Plus Jakarta + Inter | Blue/Navy/White | Medium radius | Clean shadows |
| Dark | Geist + Manrope | Deep blacks, accent pops | Large radius | Glow effects, gradients |
| Colorful | Clash Display + Poppins | Multi-color palette | Rounded | Gradients, playful |

### Implementation:
- Each preset exports a complete `DesignTokens` object
- ThemeProvider injects tokens as CSS custom properties on `:root`
- All blocks consume tokens via CSS variables: `var(--color-primary)`, `var(--font-heading)`
- Blocks NEVER hardcode colors/fonts - everything comes from tokens


---

## Phase 3: Layout Variant System

**Goal:** Each section type has 3-4 visual layouts. AI randomly combines them.

### Variant Library:

```
Hero:
  A - Split: Text left, image right (standard)
  B - Centered: Full-width text center, background image/gradient
  C - Fullscreen: Video/image background, overlay text, floating CTA
  D - Asymmetric: Offset grid, floating cards, staggered animation

Features/Services:
  A - Grid: 3-column card grid with icons
  B - Alternating: Left/right rows with large images
  C - Bento: Bento grid with mixed sizes
  D - Minimal list: Clean list with descriptions and arrows

Testimonials:
  A - Carousel: Sliding cards with photos and stars
  B - Grid: Masonry layout with varied card sizes
  C - Marquee: Infinite scrolling testimonial strip
  D - Featured: One large featured quote + smaller ones

Gallery:
  A - Masonry: Variable height grid
  B - Carousel: Full-width sliding images
  C - Lightbox grid: Uniform grid with zoom overlay
  D - Parallax: Scrolling parallax images

Pricing:
  A - Cards: Side-by-side plan cards with highlight
  B - Table: Comparison table with checkmarks
  C - Slider: Interactive slider showing features per tier

FAQ:
  A - Accordion: Classic collapsible
  B - Two-column: Questions left, answers right
  C - Cards: Card-based FAQ with categories

Contact:
  A - Split: Form left, info right
  B - Centered: Centered form with map below
  C - Minimal: Just essential info + WhatsApp CTA

Footer:
  A - Multi-column: Logo, links, contact, newsletter
  B - Minimal: Single row with essential links
  C - Mega: Full sitemap with social and map

CTA:
  A - Banner: Full-width gradient with centered text
  B - Card: Floating card with glow effect
  C - Split: Text left, form right
```

### How Variants Work:

```typescript
// Each block folder exports variants
// src/engine/blocks/hero/index.ts
export { default as HeroA } from './HeroA';
export { default as HeroB } from './HeroB';
export { default as HeroC } from './HeroC';
export { default as HeroD } from './HeroD';

export const heroVariants = ['A', 'B', 'C', 'D'] as const;

// Registry maps type + variant to component
// src/engine/registry/BlockRegistry.ts
const registry = {
  hero: { A: HeroA, B: HeroB, C: HeroC, D: HeroD },
  features: { A: FeaturesA, B: FeaturesB, C: FeaturesC, D: FeaturesD },
  // ...
};

// Section config includes variant
type SectionConfig = {
  type: string;         // 'hero'
  variant: string;      // 'B'
  config: Record<string, any>;
};

// AI selects variants during generation
function selectVariants(industry: string, style: string): Record<string, string> {
  // Can be random, or AI-chosen based on style/industry
  return {
    hero: randomPick(['A', 'B', 'C', 'D']),
    features: randomPick(['A', 'B', 'C']),
    testimonials: randomPick(['A', 'B', 'C']),
    // ...
  };
}
```

### Variant Constraints:
- Some variants work better with certain styles (Luxury prefers Hero B centered)
- AI can learn which combinations produce best results
- User can switch variants in the editor without losing content


---

## Phase 4: AI-Powered Content Generation

**Goal:** Generate unique, premium-quality copy that sounds like an agency wrote it.

### AI Provider Setup:

```typescript
// src/ai/providers/index.ts
// Support multiple providers with fallback
type AIProvider = {
  generateText(prompt: string, options?: GenerateOptions): Promise<string>;
  generateJSON<T>(prompt: string, schema: z.ZodType<T>): Promise<T>;
};

// Use OpenAI as primary, with structured output (JSON mode)
// Environment variable: VITE_OPENAI_API_KEY
```

### Generation Pipeline:

```
User Input (simplified):
  - Industry
  - Business name
  - Description (2-5 lines)
  - City/Country
  - Logo (optional)
  - Style preference

AI Pipeline:
  1. Structure Generation
     → Determine which pages to create
     → Determine which sections per page
     → Select appropriate section types for industry
     
  2. Copy Generation
     → Hero headline + subtitle + CTA
     → About section narrative
     → Service descriptions (not generic)
     → Feature highlights
     → FAQ (real questions for that industry)
     → Testimonials (realistic, industry-appropriate)
     → Contact section
     → Footer tagline
     
  3. Design Generation
     → Take style preset as base
     → Adjust based on industry (restaurant = warm, law = conservative)
     → Generate color palette variations
     → Select typography pairing
     
  4. Layout Selection
     → Pick variant for each section
     → Consider style preset affinity (Luxury → centered hero)
     → Ensure visual variety (not all sections use same layout pattern)
     
  5. Image Selection
     → Generate search queries per section
     → Fetch from Unsplash API / Pexels
     → Match business type specifically
     → Fallback: AI-generated placeholder descriptions
```

### Prompt Engineering:

```typescript
// Example: Copy generation prompt
const copyPrompt = `
You are a premium digital agency copywriter. Generate website copy for:

Business: ${businessName}
Industry: ${industry}
Description: ${description}
Location: ${city}, ${country}
Style: ${stylePreset}

Requirements:
- Hero headline: Maximum 8 words. Powerful, specific to this business. Not generic.
- Hero subtitle: 1-2 sentences that create desire/urgency.
- CTA: Action-oriented, specific (not "Get Started" or "Learn More")
- Services: Write 6 service descriptions (title + 1 sentence each). Be specific to THIS business.
- About: 3 paragraphs telling this business's story. Sound authentic.
- Testimonials: 4 realistic reviews. Use local names matching the country.
- FAQ: 5 questions real customers would ask about THIS specific business.

Tone: ${styleTone[stylePreset]}
  - Luxury: Sophisticated, exclusive, understated confidence
  - Modern: Clean, forward-thinking, innovative
  - Bold: Energetic, confident, attention-grabbing
  - Minimal: Calm, precise, intentional
  - Corporate: Professional, trustworthy, authoritative

Output as JSON matching this exact schema...
`;
```

### Fallback Strategy:
- If AI API unavailable → Enhanced template generation (better than current)
- Rate limiting → Queue system with loading states
- Cost control → Cache similar generations, use GPT-3.5 for simple fields


---

## Phase 5: Visual Editor

**Goal:** Framer/Webflow-like editing experience after generation.

### Editor Features:

#### Inline Text Editing
- Click any text element → contentEditable with floating toolbar
- Toolbar: Bold, Italic, Link, Heading size
- Click outside → auto-save
- Supports markdown-style shortcuts

#### Section Management
- Drag handle on hover → reorder sections
- Delete button → remove section
- Duplicate button → clone section
- Add button between sections → open section picker

#### Style Controls (Right Panel)
- Color picker for primary/secondary/accent
- Font selector with live preview
- Border radius slider
- Shadow intensity slider
- Section background override
- Button style editor
- Spacing controls

#### Image Editing
- Click any image → replace/upload dialog
- AI image suggestions
- Unsplash search integration
- Upload from device
- Crop/resize tools

#### Undo/Redo System
```typescript
type EditorState = {
  sections: SectionConfig[];
  theme: DesignTokens;
  activePageId: string;
};

type UndoStack = {
  past: EditorState[];
  present: EditorState;
  future: EditorState[];
};

// Every edit pushes to history
// Cmd+Z / Ctrl+Z → undo
// Cmd+Shift+Z → redo
// Max 50 history entries
```

#### Variant Switcher
- In section hover toolbar: "Switch Layout" button
- Opens visual picker showing all variants for that section type
- Content transfers to new variant automatically
- Preview on hover before confirming

---

## Phase 6: AI Editing Commands

**Goal:** Natural language editing that modifies the website intelligently.

### Command Interface:
- Floating command bar (Cmd+K style)
- Understands context of currently selected section
- Can modify individual sections or entire site

### Example Commands and Actions:

| Command | Action |
|---------|--------|
| "Make it more premium" | Increase spacing, add gold accents, upgrade font |
| "Make it darker" | Switch to dark mode, deepen backgrounds |
| "Use luxury colors" | Apply gold/black/ivory palette |
| "Rewrite this section" | Regenerate copy for selected section |
| "Shorten hero" | Reduce hero headline/subtitle length |
| "Add one more service" | Add a service card with generated content |
| "Replace images" | Fetch new images matching business |
| "Generate new testimonials" | Create new realistic testimonials |
| "Add a pricing section" | Insert pricing block with AI content |
| "Make it look like Apple" | Minimal, large typography, lots of whitespace |
| "Make it more modern" | Add gradients, glassmorphism, modern fonts |
| "Change font to serif" | Update typography tokens |
| "Add more whitespace" | Increase section padding and gaps |

### Implementation:

```typescript
async function executeAIEdit(command: string, context: EditorContext) {
  const prompt = `
    Current website state: ${JSON.stringify(context.sections)}
    Current theme: ${JSON.stringify(context.theme)}
    Selected section: ${context.selectedSection?.type ?? 'none'}
    
    User command: "${command}"
    
    Determine what changes to make. Output a JSON patch:
    {
      "themeChanges": { ... partial theme token updates },
      "sectionChanges": [
        { "sectionId": "...", "action": "update", "config": { ... } },
        { "action": "add", "type": "pricing", "variant": "A", "config": { ... } },
        { "sectionId": "...", "action": "remove" }
      ],
      "explanation": "What was changed and why"
    }
  `;
  
  const result = await ai.generateJSON(prompt, editPatchSchema);
  applyPatch(result); // Applies changes with undo support
}
```


---

## Phase 7: Export System

**Goal:** Export generated websites as production-ready code.

### Export Formats:

#### 1. HTML/CSS (Static)
- Single HTML file with inline Tailwind classes
- All images embedded or linked
- Responsive, production-ready
- No JavaScript dependencies

#### 2. React + Tailwind
- Component-based structure
- Tailwind CSS for styling
- Responsive hooks
- Ready to deploy on Vercel/Netlify

#### 3. Next.js
- App Router structure
- Server components where possible
- Metadata/SEO included
- Tailwind configuration
- Optimized images via next/image

#### 4. ZIP Download
- All files packaged
- README with setup instructions
- package.json included
- Ready to `npm install && npm run dev`

### Export Architecture:

```typescript
// src/export/exporters/react.ts
export function exportAsReact(config: WebsiteConfig): ExportResult {
  return {
    files: [
      { path: 'src/App.tsx', content: generateAppComponent(config) },
      { path: 'src/components/Hero.tsx', content: generateHero(config) },
      { path: 'src/styles/theme.css', content: generateThemeCSS(config.tokens) },
      { path: 'package.json', content: generatePackageJson() },
      { path: 'tailwind.config.ts', content: generateTailwindConfig(config.tokens) },
      // ...
    ],
  };
}
```

---

## Phase 8: Industry-Specific Intelligence

### Industry Section Mapping:

```typescript
const industrySections: Record<string, string[]> = {
  restaurant: ['navbar', 'hero', 'menu', 'reservation', 'gallery', 'testimonials', 'contact', 'footer'],
  clinic: ['navbar', 'hero', 'doctors', 'treatments', 'appointment', 'testimonials', 'faq', 'contact', 'footer'],
  'law-firm': ['navbar', 'hero', 'practiceAreas', 'attorneys', 'caseStudies', 'testimonials', 'faq', 'contact', 'footer'],
  'real-estate': ['navbar', 'hero', 'properties', 'agents', 'gallery', 'testimonials', 'contact', 'footer'],
  gym: ['navbar', 'hero', 'membership', 'trainers', 'schedule', 'gallery', 'testimonials', 'cta', 'footer'],
  agency: ['navbar', 'hero', 'services', 'portfolio', 'process', 'testimonials', 'cta', 'contact', 'footer'],
  // ...
};
```

### Industry-Specific Blocks:
- **MenuBlock**: Restaurant menu with categories, items, prices, images
- **ReservationBlock**: Table booking form with date/time/guests
- **DoctorsBlock**: Doctor cards with specialization, experience, booking
- **PropertiesBlock**: Property cards with specs, price, images, map
- **ScheduleBlock**: Weekly class schedule grid (gym/studio)
- **PortfolioBlock**: Project showcase with case studies
- **AttorneysBlock**: Lawyer profiles with practice areas
- **MembershipBlock**: Gym/club membership comparison

---

## Implementation Timeline

| Phase | Duration | Priority | Dependencies |
|-------|----------|----------|--------------|
| Phase 1: Architecture | 2-3 days | Critical | None |
| Phase 2: Design System | 2-3 days | Critical | Phase 1 |
| Phase 3: Layout Variants | 3-4 days | Critical | Phase 1 |
| Phase 4: AI Generation | 3-4 days | Critical | Phases 1-3 |
| Phase 5: Visual Editor | 4-5 days | High | Phases 1-3 |
| Phase 6: AI Editing | 2-3 days | High | Phase 4-5 |
| Phase 7: Export | 2-3 days | Medium | Phases 1-3 |
| Phase 8: Industry Blocks | 3-4 days | Medium | Phases 1-3 |

**Total estimated: 3-4 weeks for full implementation**

---

## Technical Decisions

### State Management
- **Zustand** for editor state (lightweight, no boilerplate)
- Undo/redo via immer patches
- Persist to Supabase on debounced save

### AI Provider
- **OpenAI GPT-4o-mini** for fast generation (good enough for copy, cheap)
- **GPT-4o** for complex editing commands
- Structured output (JSON mode) for reliable parsing
- Zod schemas for validation

### Styling Approach
- CSS custom properties for theming (instant updates, no re-render)
- Tailwind for utility classes within blocks
- All blocks use `var(--token-name)` instead of hardcoded values

### Image Strategy
- **Unsplash API** for stock photos (free tier: 50 req/hour)
- **Pexels API** as fallback
- AI-generated placeholder descriptions when no image available
- Future: DALL-E / Stable Diffusion integration

### Performance
- Lazy load block components (React.lazy + Suspense)
- Image optimization with srcset/lazy loading
- Virtual scrolling for long pages in editor
- Debounced saves (800ms)

---

## Simplified Onboarding (7 Steps → 5 Steps)

### New Flow:

```
Step 1: Select Industry (grid of cards)
Step 2: Business Name + Short Description (2-5 lines)
Step 3: City/Country (auto-suggest)
Step 4: Upload Logo (optional, skip button)
Step 5: Choose Style (Luxury | Modern | Bold | Minimal | Corporate | Dark | Colorful)
       → Visual preview of each style

[Generate Button]
→ Loading screen with progress: "Generating structure... Writing copy... Selecting images... Applying design..."
→ Redirect to editor with generated website
```

### What Gets Removed from Current Onboarding:
- Phone, email, address (can add in editor)
- Social links (can add in editor)
- Services list (AI generates from description)
- Opening hours (can add in editor)
- Primary/secondary color pickers (determined by style preset)
- All the detailed fields that make onboarding feel like a form

---

## Migration Strategy

### Approach: Gradual Replacement
1. Build new system alongside old code
2. Feature flag to switch between old and new generation
3. Once new system works → remove old code
4. Existing projects in Supabase remain compatible (same section schema)

### Backwards Compatibility:
- Keep existing `sections` table structure
- Add `variant` column to sections
- Add `design_tokens` JSON column to projects
- Old projects render with default variant (A)

---

## Success Metrics

After implementation, every generated website should:

- [ ] Look visually distinct from others in the same industry
- [ ] Have professional copy that sounds agency-written
- [ ] Apply the chosen style preset consistently across all sections
- [ ] Use industry-specific sections (menu for restaurant, not generic features)
- [ ] Have relevant, high-quality images
- [ ] Be fully editable with inline text, style, and layout changes
- [ ] Support AI editing commands for rapid modifications
- [ ] Export as clean, production-ready code
- [ ] Load under 3 seconds
- [ ] Score 90+ on Lighthouse
