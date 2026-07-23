/**
 * OpenAI Provider
 *
 * Integrates with OpenAI's API for content generation.
 * Uses structured output (JSON mode) for reliable parsing.
 * Supports both GPT-4o-mini (fast/cheap) and GPT-4o (complex tasks).
 */

import OpenAI from 'openai';

let clientInstance: OpenAI | null = null;

/**
 * Get or create the OpenAI client instance.
 * Uses VITE_OPENAI_API_KEY from environment.
 */
function getClient(): OpenAI {
  if (!clientInstance) {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('VITE_OPENAI_API_KEY is not set. Add it to your .env file.');
    }
    clientInstance = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true, // Required for client-side usage
    });
  }
  return clientInstance;
}

export type OpenAIModel = 'gpt-4o-mini' | 'gpt-4o';

export type GenerateOptions = {
  model?: OpenAIModel;
  temperature?: number;
  maxTokens?: number;
};

/**
 * Generate a text completion from OpenAI.
 */
export async function generateText(
  systemPrompt: string,
  userPrompt: string,
  options: GenerateOptions = {},
): Promise<string> {
  const client = getClient();
  const { model = 'gpt-4o-mini', temperature = 0.7, maxTokens = 4096 } = options;

  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature,
    max_tokens: maxTokens,
  });

  return response.choices[0]?.message?.content ?? '';
}

/**
 * Generate a JSON response from OpenAI using structured output.
 * The response is guaranteed to be valid JSON matching the expected shape.
 */
export async function generateJSON<T>(
  systemPrompt: string,
  userPrompt: string,
  options: GenerateOptions = {},
): Promise<T> {
  const client = getClient();
  const { model = 'gpt-4o-mini', temperature = 0.7, maxTokens = 4096 } = options;

  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature,
    max_tokens: maxTokens,
    response_format: { type: 'json_object' },
  });

  const content = response.choices[0]?.message?.content ?? '{}';

  try {
    return JSON.parse(content) as T;
  } catch (e) {
    console.error('Failed to parse OpenAI JSON response:', content);
    throw new Error('AI returned invalid JSON response');
  }
}

/**
 * Check if the OpenAI API key is configured.
 */
export function isConfigured(): boolean {
  return !!import.meta.env.VITE_OPENAI_API_KEY;
}
