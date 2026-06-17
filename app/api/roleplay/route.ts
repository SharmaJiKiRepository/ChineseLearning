import { NextResponse } from 'next/server';
import { routeConversation } from '@/lib/ai-router';
import { Type } from '@google/genai';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages, systemInstruction } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
        }

        const responseSchema = {
            type: Type.OBJECT,
            properties: {
                response: { type: Type.STRING, description: 'The Chinese response' },
                pinyin: { type: Type.STRING, description: 'The pinyin for the Chinese response' },
                english: { type: Type.STRING, description: 'The English translation of the response' },
                correction: { type: Type.STRING, description: 'If the user made a grammar or vocabulary mistake in their previous message, explain the correction here in English. If no mistake, return empty string.' }
            },
            required: ['response', 'pinyin', 'english', 'correction']
        };

        const result = await routeConversation(
            messages,
            systemInstruction,
            responseSchema,
            { preferredModel: 'nemotron', temperature: 0.7, maxTokens: 1024 }
        );

        // Nemotron/Gemini might return it as a JSON string, so we parse it
        let parsed;
        try {
            parsed = JSON.parse(result.content);
        } catch {
            // Fallback if parsing fails
            parsed = { response: result.content, pinyin: '', english: '', correction: '' };
        }

        return NextResponse.json({ 
            response: parsed.response || result.content,
            pinyin: parsed.pinyin || '',
            english: parsed.english || '',
            correction: parsed.correction || '',
            _modelUsed: result.model
        });
    } catch (error: any) {
        console.error('Roleplay API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process roleplay response' },
            { status: 500 }
        );
    }
}
