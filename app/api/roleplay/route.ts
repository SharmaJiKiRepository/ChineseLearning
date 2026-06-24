import { NextResponse } from 'next/server';
import { callAI, extractJSON } from '@/lib/call-ai';
import { Type } from '@google/genai';

const ROLEPLAY_SCHEMA = {
    type: Type.OBJECT,
    properties: {
        response: { type: Type.STRING, description: 'The Chinese response' },
        pinyin: { type: Type.STRING, description: 'The pinyin for the Chinese response' },
        english: { type: Type.STRING, description: 'The English translation of the response' },
        correction: { type: Type.STRING, description: 'Grammar/vocabulary correction if any, empty string if none' }
    },
    required: ['response', 'pinyin', 'english', 'correction']
};

export async function POST(req: Request) {
    try {
        const { messages, systemInstruction } = await req.json();
        if (!messages?.length) return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });

        const enhancedSystem = `${systemInstruction}

CRITICAL: You MUST respond ONLY with a raw JSON object and nothing else. Do not use Markdown blocks (no \`\`\`json). The JSON object must have exactly these keys:
{
  "response": "The Chinese response",
  "pinyin": "The pinyin for the Chinese response",
  "english": "The English translation of the response",
  "correction": "If the user made a grammar or vocabulary mistake in their previous message, explain the correction here in English. If no mistake, return empty string."
}`;

        const { text, model } = await callAI({
            systemPrompt: enhancedSystem,
            messages,
            nemotronOpts: { enable_thinking: false },
            geminiSchema: ROLEPLAY_SCHEMA,
            temperature: 0.7,
            maxTokens: 1024
        });

        let parsed;
        try {
            parsed = extractJSON(text);
        } catch {
            parsed = { response: text, pinyin: '', english: '', correction: 'Failed to parse JSON response.' };
        }

        return NextResponse.json({
            response: parsed.response || text,
            pinyin: parsed.pinyin || '',
            english: parsed.english || '',
            correction: parsed.correction || '',
            _modelUsed: model
        });
    } catch (error: any) {
        console.error('Roleplay API Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to process roleplay response' }, { status: 500 });
    }
}
