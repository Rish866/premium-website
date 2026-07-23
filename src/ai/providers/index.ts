/**
 * AI Provider Registry
 *
 * Exports a unified interface for AI generation.
 * Currently supports OpenAI, with ability to add Anthropic, etc.
 */

export { generateText, generateJSON, isConfigured } from './openai';
export type { OpenAIModel, GenerateOptions } from './openai';
