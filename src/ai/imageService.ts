/**
 * AI Image Service
 *
 * Handles intelligent image selection for generated websites.
 * Supports:
 * 1. Unsplash API search (when API key available)
 * 2. Curated industry-specific image sets (fallback)
 * 3. AI-generated image descriptions (for placeholder)
 */

import type { GenerationInput } from './types';

const UNSPLASH_BASE = 'https://api.unsplash.com';

type UnsplashImage = {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
};

/**
 * Search Unsplash for images matching a query.
 * Uses VITE_UNSPLASH_ACCESS_KEY from environment.
 */
async function searchUnsplash(query: string, count: number = 5): Promise<string[]> {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  if (!accessKey) return [];

  try {
    const params = new URLSearchParams({
      query,
      per_page: String(count),
      orientation: 'landscape',
    });

    const response = await fetch(`${UNSPLASH_BASE}/search/photos?${params}`, {
      headers: { Authorization: `Client-ID ${accessKey}` },
    });

    if (!response.ok) return [];

    const data = await response.json();
    return (data.results as UnsplashImage[]).map(
      (img) => `${img.urls.regular}&w=800&q=80`,
    );
  } catch (error) {
    console.error('[Image] Unsplash search failed:', error);
    return [];
  }
}

/**
 * Generate search queries for an industry.
 * These are specific, high-quality queries that return relevant results.
 */
function getSearchQueries(industry: string, businessName: string): { hero: string; gallery: string[] } {
  const queries: Record<string, { hero: string; gallery: string[] }> = {
    restaurant: {
      hero: 'fine dining restaurant interior elegant',
      gallery: ['gourmet food plating', 'restaurant interior design', 'chef cooking professional', 'wine dining atmosphere', 'dessert presentation elegant'],
    },
    clinic: {
      hero: 'modern medical clinic interior clean',
      gallery: ['doctor patient consultation', 'medical equipment modern', 'hospital reception clean', 'healthcare professional'],
    },
    salon: {
      hero: 'luxury hair salon interior modern',
      gallery: ['hair styling professional', 'beauty treatment spa', 'salon interior design', 'manicure pedicure elegant'],
    },
    gym: {
      hero: 'modern gym equipment fitness center',
      gallery: ['personal training session', 'group fitness class', 'gym equipment modern', 'fitness transformation'],
    },
    hotel: {
      hero: 'luxury hotel room interior design',
      gallery: ['hotel lobby luxury', 'swimming pool resort', 'hotel restaurant fine dining', 'spa wellness'],
    },
    'real-estate': {
      hero: 'luxury apartment building modern architecture',
      gallery: ['modern house interior', 'luxury villa exterior', 'apartment living room', 'real estate aerial view'],
    },
    'law-firm': {
      hero: 'professional law office interior',
      gallery: ['business meeting professional', 'legal books library', 'handshake business deal', 'courthouse architecture'],
    },
    photography: {
      hero: 'professional photographer studio setup',
      gallery: ['wedding photography beautiful', 'portrait photography studio', 'event photography candid', 'product photography setup'],
    },
    consulting: {
      hero: 'business consulting meeting office',
      gallery: ['team brainstorming whiteboard', 'presentation boardroom', 'business strategy planning', 'professional office modern'],
    },
  };

  return queries[industry] ?? {
    hero: `${industry} professional business ${businessName}`,
    gallery: [`${industry} professional`, `${industry} modern office`, `${industry} team`, `${industry} workspace`],
  };
}

/**
 * Fetch images for a generated website.
 * Tries Unsplash first, falls back to curated sets.
 */
export async function fetchImages(
  input: GenerationInput,
): Promise<{ hero: string; gallery: string[] }> {
  const queries = getSearchQueries(input.industry, input.businessName);

  // Try Unsplash API
  const heroImages = await searchUnsplash(queries.hero, 1);
  const galleryImages: string[] = [];

  for (const query of queries.gallery.slice(0, 5)) {
    const results = await searchUnsplash(query, 1);
    galleryImages.push(...results);
  }

  if (heroImages.length > 0 && galleryImages.length >= 3) {
    return {
      hero: heroImages[0],
      gallery: galleryImages,
    };
  }

  // Fallback to curated images from stockImages service
  const { getIndustryImages } = await import('../services/ai/stockImages');
  const fallback = getIndustryImages(input.industry);

  return {
    hero: heroImages[0] ?? fallback.hero,
    gallery: galleryImages.length >= 3 ? galleryImages : fallback.gallery,
  };
}

/**
 * Check if Unsplash is configured.
 */
export function isUnsplashConfigured(): boolean {
  return !!import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
}
