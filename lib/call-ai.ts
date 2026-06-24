/**
 * Unified AI Caller — Nemotron-first with automatic Gemini key-rotation fallback.
 * Replaces the scattered try/catch boilerplate across all API routes.
 */
import { generateNemotronResponse, NemotronOptions } from './nemotron';
import { generateWithGeminiFallback } from './gemini-fallback';

export interface CallAIOptions {
  systemPrompt: string;
  messages: { role: string; content: string }[];
  nemotronOpts?: NemotronOptions;
  geminiSchema?: any;
  temperature?: number;
  maxTokens?: number;
}

/**
 * Extracts valid JSON from a string that might be wrapped in markdown fences.
 * Handles ```json ... ```, stray whitespace, and partial markdown.
 */
export function extractJSON(raw: string): any {
  const cleaned = raw.replace(/```(?:json)?\s*/gi, '').replace(/```\s*/g, '').trim();
  // Try direct parse first
  try { return JSON.parse(cleaned); } catch {}
  // Try to find the first { ... } or [ ... ] block
  const match = cleaned.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
  if (match) {
    try { return JSON.parse(match[1]); } catch {}
  }
  throw new Error('Failed to extract valid JSON from AI response.');
}

/**
 * Calls Nemotron first; if it fails, seamlessly falls back to Gemini with key rotation.
 * Returns { text, model } so the caller knows which engine responded.
 */
export async function callAI(opts: CallAIOptions): Promise<{ text: string; model: string }> {
  const {
    systemPrompt, messages, nemotronOpts = {},
    geminiSchema, temperature = 0.7, maxTokens = 2048
  } = opts;

  // Build Nemotron message array (system prompt + conversation)
  const nemotronMessages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
    { role: 'system', content: systemPrompt },
    ...messages.map(m => ({
      role: (m.role === 'model' ? 'assistant' : m.role) as 'user' | 'assistant',
      content: m.content
    }))
  ];

  try {
    const text = await generateNemotronResponse(nemotronMessages, {
      temperature, max_tokens: maxTokens, ...nemotronOpts
    });
    return { text, model: 'nemotron' };
  } catch (nemotronErr) {
    console.warn('[callAI] Nemotron failed, cascading to Gemini:', nemotronErr);
  }

  // Gemini fallback — convert messages to Gemini format
  const geminiContents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  const text = await generateWithGeminiFallback(
    geminiContents, systemPrompt, geminiSchema, temperature, maxTokens
  );
  return { text, model: 'gemini' };
}
