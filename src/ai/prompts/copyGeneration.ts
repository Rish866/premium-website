/**
 * Copy Generation Prompts
 *
 * System and user prompts for generating premium website copy.
 * The AI generates all text content: headlines, descriptions, services, FAQ, testimonials, etc.
 */

import type { GenerationInput } from '../types';
import type { StylePreset } from '../../themes/tokens';

/**
 * Tone descriptions mapped to style presets.
 */
const styleTones: Record<StylePreset, string> = {
  luxury: 'Sophisticated, exclusive, understated confidence. Use refined language that evokes elegance and prestige. Avoid anything casual or overly enthusiastic.',
  modern: 'Clean, forward-thinking, innovative. Crisp sentences, tech-aware language. Convey progress and cutting-edge thinking.',
  bold: 'Energetic, confident, attention-grabbing. Short punchy sentences. Use power words. Be direct and impactful.',
  minimal: 'Calm, precise, intentional. Every word earns its place. Short descriptions. Let white space do the talking.',
  corporate: 'Professional, trustworthy, authoritative. Clear and structured. Convey competence and reliability.',
  dark: 'Premium, mysterious, refined. Slightly edgy but sophisticated. Convey exclusivity and quality.',
  colorful: 'Friendly, energetic, approachable. Enthusiastic without being childish. Convey warmth and creativity.',
};

/**
 * Get the system prompt for copy generation.
 */
export function getCopySystemPrompt(): string {
  return `You are an elite digital agency copywriter who writes website copy for premium businesses. 

Your copy:
- Sounds like a $50,000 agency wrote it, not a template generator
- Is specific to the actual business, not generic placeholder text
- Creates desire and builds trust
- Uses varied sentence structures and rhythm
- Avoids clichés like "Welcome to", "We are dedicated to", "Your one-stop shop"
- Never uses placeholder names like "John Doe" or "Jane Smith"
- Uses culturally appropriate names for the business location

You MUST respond with valid JSON matching the exact schema specified in the user prompt. Do not include any text outside the JSON.`;
}

/**
 * Get the user prompt for full website copy generation.
 */
export function getCopyUserPrompt(input: GenerationInput): string {
  const tone = styleTones[input.stylePreset];

  return `Generate complete premium website copy for this business:

BUSINESS DETAILS:
- Name: ${input.businessName}
- Industry: ${input.industry}
- Description: ${input.description}
- Location: ${input.location}
- Visual Style: ${input.stylePreset}

WRITING TONE: ${tone}

Generate the following as a JSON object:

{
  "hero": {
    "eyebrow": "Short badge text, 2-3 words (e.g., 'Since 2018', 'Award Winning', industry-specific)",
    "title": "Powerful headline, max 8 words. Must be unique and memorable. NOT the business name.",
    "subtitle": "1-2 compelling sentences that create desire. Specific to THIS business.",
    "buttonText": "Action-oriented CTA, 2-4 words. Specific to this industry.",
    "secondaryButtonText": "Softer CTA, 2-3 words",
    "trustLogos": ["4 trust signals relevant to this industry and location, like 'Google 4.9★', '500+ Clients', 'ISO Certified', etc."]
  },
  "about": {
    "eyebrow": "Section label, 2 words",
    "title": "Compelling about section title",
    "description": "3-4 sentences telling this business's story. Sound authentic and professional. Mention the location naturally.",
    "mission": "One powerful sentence about their mission/purpose",
    "values": ["4-5 core values relevant to this industry"],
    "stats": [
      {"value": "number+suffix", "label": "what it measures"},
      {"value": "number+suffix", "label": "what it measures"},
      {"value": "number+suffix", "label": "what it measures"},
      {"value": "number+suffix", "label": "what it measures"}
    ]
  },
  "features": {
    "eyebrow": "Section label",
    "title": "Services/features section title",
    "subtitle": "One sentence about what makes their services special",
    "items": [
      {"title": "Service name", "description": "One sentence describing this specific service professionally"},
      ... (generate 6 items)
    ]
  },
  "testimonials": {
    "eyebrow": "Section label",
    "title": "Testimonials section title",
    "items": [
      {"name": "Realistic name for ${input.location}", "role": "Their relationship to the business", "quote": "Realistic 1-2 sentence review. Sound human, not AI.", "rating": 5},
      ... (generate 4 items)
    ]
  },
  "faq": {
    "eyebrow": "Section label",
    "title": "FAQ section title",
    "subtitle": "One sentence",
    "items": [
      {"question": "Real question a customer would ask about THIS business", "answer": "Helpful, specific answer (2-3 sentences)"},
      ... (generate 5 items)
    ]
  },
  "pricing": {
    "eyebrow": "Section label",
    "title": "Pricing section title",
    "subtitle": "One sentence about their pricing philosophy",
    "plans": [
      {"name": "Tier name", "price": "Price in local currency or 'Custom'", "features": ["5-6 specific features"], "popular": false},
      {"name": "Tier name", "price": "Price", "features": ["6-7 features"], "popular": true},
      {"name": "Tier name", "price": "Price", "features": ["7-8 features"], "popular": false}
    ]
  },
  "contact": {
    "title": "Contact section title (not just 'Contact Us')",
    "subtitle": "Warm, inviting sentence encouraging them to reach out"
  },
  "cta": {
    "eyebrow": "Urgency label",
    "title": "Compelling call-to-action headline",
    "subtitle": "One sentence creating urgency or desire",
    "buttonText": "Action CTA"
  },
  "stats": {
    "items": [
      {"value": "number+", "label": "metric"},
      {"value": "number+", "label": "metric"},
      {"value": "number+", "label": "metric"},
      {"value": "number+", "label": "metric"}
    ]
  },
  "team": {
    "eyebrow": "Section label",
    "title": "Team section title",
    "members": [
      {"name": "Realistic name for ${input.location}", "role": "Professional title", "bio": "One sentence about their expertise"},
      ... (generate 3-4 members)
    ]
  },
  "footer": {
    "tagline": "Short brand tagline, max 8 words"
  }
}

IMPORTANT RULES:
- All names must be culturally appropriate for ${input.location}
- Prices should be in local currency format
- Trust signals should be realistic for a ${input.industry} in ${input.location}
- FAQ questions should be ones REAL customers ask about ${input.industry} businesses
- Testimonial quotes should sound genuinely human, not corporate
- Stats should be realistic and impressive (not outrageous)
- Service descriptions should be SPECIFIC to ${input.businessName}, not generic`;
}
