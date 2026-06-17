/**
 * AI Router — The Traffic Cop for Our Dual AI Engine
 * 
 * This module decides which AI model to use based on the task:
 * 
 *   🏎️ Gemini Flash  → Fast, cheap, great for simple translations & flashcards
 *   🧠 Nemotron Ultra → Powerful reasoning, 1M context, great for teaching & roleplay
 * 
 * If Nemotron is unavailable (no API key, rate limited, etc.), we gracefully
 * fall back to Gemini so the app never breaks.
 */

import { GoogleGenAI, Type, Schema } from '@google/genai';
import { NemotronClient, NemotronMessage } from 'nemotron-openrouter-client';

// Initialize Gemini client
const geminiAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Initialize the standalone Nemotron client
const nemotronAI = new NemotronClient({
  apiKey: process.env.OPENROUTER_API_KEY || '',
  appName: 'LearnMandarinFree',
  referer: 'https://learnmandarinfree.com'
});

export type AIModel = 'gemini' | 'nemotron';

export interface AIRouterOptions {
  /** Which model to prefer. If the preferred model fails, we'll try the other. */
  preferredModel?: AIModel;
  temperature?: number;
  maxTokens?: number;
  /** If true, the response should be valid JSON */
  jsonMode?: boolean;
}

/**
 * Check if Nemotron (OpenRouter) is available.
 * Simply checks if the API key exists — we don't ping the API to save quota.
 */
export function isNemotronAvailable(): boolean {
  return !!process.env.OPENROUTER_API_KEY;
}

/**
 * Route a structured JSON request to the best available AI model.
 * 
 * This is the main function most API routes should use. It handles:
 * 1. Model selection (Nemotron for complex tasks, Gemini for simple ones)
 * 2. Automatic fallback if the preferred model fails
 * 3. JSON parsing and validation
 * 
 * @param systemPrompt - Instructions for the AI (who it should be, what to do)
 * @param userPrompt - The actual user request
 * @param responseSchema - Gemini schema for structured output (used when falling back to Gemini)
 * @param options - Configuration options
 * @returns Parsed JSON response from whichever model succeeded
 */
export async function routeAIRequest<T>(
  systemPrompt: string,
  userPrompt: string,
  responseSchema: Schema,
  options: AIRouterOptions = {}
): Promise<{ data: T; model: AIModel }> {
  const {
    preferredModel = 'gemini',
    temperature = 0.3,
    maxTokens = 2048,
  } = options;

  // Try the preferred model first
  if (preferredModel === 'nemotron' && isNemotronAvailable()) {
    try {
      const data = await nemotronAI.generateJSON<T>(systemPrompt, userPrompt, {
        temperature,
        maxTokens,
      });
      return { data, model: 'nemotron' };
    } catch (error) {
      console.warn('[AI Router] Nemotron failed, falling back to Gemini:', error);
      // Fall through to Gemini
    }
  }

  // Try Gemini (either as primary or fallback)
  try {
    const data = await callGemini<T>(systemPrompt, userPrompt, responseSchema, temperature);
    return { data, model: 'gemini' };
  } catch (geminiError) {
    // If Gemini also fails and we haven't tried Nemotron yet, try it as last resort
    if (preferredModel !== 'nemotron' && isNemotronAvailable()) {
      try {
        const data = await nemotronAI.generateJSON<T>(systemPrompt, userPrompt, {
          temperature,
          maxTokens,
        });
        return { data, model: 'nemotron' };
      } catch (nemotronError) {
        console.error('[AI Router] Both models failed');
        throw geminiError; // Throw the original Gemini error as it's more informative
      }
    }
    throw geminiError;
  }
}

/**
 * Route a conversational (multi-turn) request — ideal for chat & roleplay.
 * 
 * @param messages - Full conversation history
 * @param systemPrompt - System instructions
 * @param responseSchema - Schema for Gemini fallback
 * @param options - Configuration
 * @returns The AI's response text and which model was used
 */
export async function routeConversation(
  messages: Array<{ role: 'user' | 'assistant'; content: string }>,
  systemPrompt: string,
  responseSchema: Schema | null,
  options: AIRouterOptions = {}
): Promise<{ content: string; model: AIModel }> {
  const {
    preferredModel = 'gemini',
    temperature = 0.7,
    maxTokens = 1024,
  } = options;

  // Try Nemotron first if preferred
  if (preferredModel === 'nemotron' && isNemotronAvailable()) {
    try {
      const nemotronMessages: NemotronMessage[] = [
        { role: 'system', content: systemPrompt },
        ...messages.map(m => ({
          role: m.role === 'assistant' ? 'assistant' as const : 'user' as const,
          content: m.content,
        })),
      ];

      const result = await nemotronAI.chat(nemotronMessages, {
        temperature,
        maxTokens,
        jsonMode: !!responseSchema,
      });

      return { content: result.content, model: 'nemotron' };
    } catch (error) {
      console.warn('[AI Router] Nemotron conversation failed, falling back to Gemini:', error);
    }
  }

  // Gemini fallback
  const contents = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));

  const config: Record<string, unknown> = {
    systemInstruction: systemPrompt,
    temperature,
    maxOutputTokens: maxTokens,
  };

  if (responseSchema) {
    config.responseMimeType = 'application/json';
    config.responseSchema = responseSchema;
  }

  const response = await geminiAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents,
    config,
  });

  return { content: response.text || '', model: 'gemini' };
}

/**
 * Internal helper to call Gemini with structured output.
 */
async function callGemini<T>(
  systemPrompt: string,
  userPrompt: string,
  responseSchema: Schema,
  temperature: number
): Promise<T> {
  const response = await geminiAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `${systemPrompt}\n\n${userPrompt}`,
    config: {
      responseMimeType: 'application/json',
      responseSchema,
      temperature,
    },
  });

  const text = response.text;
  if (!text) throw new Error('Empty response from Gemini');
  return JSON.parse(text) as T;
}
