import OpenAI from 'openai';

const API_KEYS = [
  process.env.NVIDIA_API_KEY || '',
  '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'
].filter(k => k && k !== 'your-nvidia-api-key-here');

let currentKeyIndex = 0;

/**
 * Standard configuration for Nemotron 3 Ultra
 */
export const NEMOTRON_MODEL = 'nvidia/nemotron-3-ultra-550b-a55b';

export interface NemotronOptions {
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  enable_thinking?: boolean;
  reasoning_budget?: number;
}

/**
 * Generates a response using Nemotron 3 Ultra with built-in API key rotation
 * @param messages The conversation history/prompt
 * @param options Advanced options like enable_thinking
 * @returns The completion content
 */
export async function generateNemotronResponse(
  messages: { role: 'system' | 'user' | 'assistant'; content: string }[],
  options: NemotronOptions = {}
) {
  if (API_KEYS.length === 0) {
    throw new Error('No NVIDIA API keys are configured.');
  }

  // Prepare extra body for advanced Nemotron features
  const extraBody: any = {};
  if (options.enable_thinking !== undefined) {
    extraBody.chat_template_kwargs = { enable_thinking: options.enable_thinking };
  }
  if (options.reasoning_budget !== undefined) {
    extraBody.reasoning_budget = options.reasoning_budget;
  }

  let attempts = 0;
  
  while (attempts < API_KEYS.length) {
    try {
      const client = new OpenAI({
        baseURL: 'https://integrate.api.nvidia.com/v1',
        apiKey: API_KEYS[currentKeyIndex],
      });

      const completion = await client.chat.completions.create({
        model: NEMOTRON_MODEL,
        messages,
        temperature: options.temperature ?? 0.7,
        top_p: options.top_p ?? 0.95,
        max_tokens: options.max_tokens ?? 4096,
        ...(Object.keys(extraBody).length > 0 ? { extra_body: extraBody } : {}),
      });

      return completion.choices[0]?.message?.content || '';
    } catch (e: any) {
      console.warn(`Nemotron key index ${currentKeyIndex} failed:`, e.message);
      if (e.status === 429 || e.message?.includes('429') || e.message?.includes('quota') || e.message?.includes('limit')) {
        // Rate limit hit - move to next key
        currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
        attempts++;
        console.log(`Switching to backup Nemotron API Key. Attempt ${attempts} of ${API_KEYS.length}`);
      } else {
        // Unrelated error (like bad prompt), don't retry, just throw it back to the caller
        throw e;
      }
    }
  }

  throw new Error('All Nemotron API keys exhausted or failed to generate a response.');
}
