import { restaurantConfig } from "../data/restaurantConfig";
import { clinicConfig } from "../data/clinicConfig";
import { gymConfig } from "../data/gymConfig";
import { transportConfig } from "../data/transportConfig";
import type { WebsiteConfig } from "../types";

export const templateRegistry: Record<string, WebsiteConfig> = {
  restaurant: restaurantConfig,
  clinic: clinicConfig,
  gym: gymConfig,
  transport: transportConfig,
};

export const templateOptions = Object.entries(templateRegistry).map(([key, config]) => ({
  key,
  label: config.industry,
  description: config.brand.tagline,
}));
