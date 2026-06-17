import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { routeAIRequest } from '@/lib/ai-router';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export interface AIResponsePayload {
    Chinese: string;
    Pinyin: string;
    Meaning: string;
    PronunciationGuide: string;
    ToneExplanation: string;
    Mnemonic: string;
    Etymology: string;
    HindiPronunciation?: string;
}

const responseSchema = {
    type: 'object',
    properties: {
        Chinese: { type: 'string', description: 'The Chinese translation or response.' },
        Pinyin: { type: 'string', description: 'The Pinyin for the Chinese text.' },
        Meaning: { type: 'string', description: 'The English meaning or translation.' },
        PronunciationGuide: { type: 'string', description: 'A phonetic pronunciation guide using simple English sounds (e.g., "nee hao").' },
        ToneExplanation: { type: 'string', description: 'A brief explanation of the tones used.' },
        Mnemonic: { type: 'string', description: 'A clever, highly memorable psychological trick or story to easily remember the word and its meaning.' },
        Etymology: { type: 'string', description: 'A breakdown of the Chinese characters/radicals showing where the word came from (e.g. 明 is Sun + Moon).' },
        HindiPronunciation: { type: 'string', description: 'A phonetic pronunciation guide using Hindi script (Devanagari) (e.g., "नी हाओ").' }
    },
    required: ['Chinese', 'Pinyin', 'Meaning', 'PronunciationGuide', 'ToneExplanation', 'Mnemonic', 'Etymology', 'HindiPronunciation'],
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { text, context } = body;

        if (!text) {
            return NextResponse.json({ error: 'Text input is required' }, { status: 400 });
        }

        console.log(`[Core AI Engine] Processing: "${text}" with context:`, context);

        let systemPrompt = `You are an elite, world-class Chinese learning assistant. The user input is: "${text}".\n`;

        if (context === 'learn_mode') {
            systemPrompt += `You are creating an ultra-rich, deep-dive flashcard. Break down the character etymology masterfully, and provide an incredibly memorable mnemonic trick.\n`;
        } else if (context === 'chat_mode') {
            systemPrompt += `Respond conversationally to this question or statement, acting as a language tutor.\n`;
        } else if (context === 'song_mode') {
            systemPrompt += `Provide the pronunciation and meaning for this specific line of lyrics.\n`;
        }

        // Use the Dual AI Engine, defaulting to Gemini for cost-efficiency (free tier)
        const { data: result } = await routeAIRequest<AIResponsePayload>(
            systemPrompt,
            "Provide the detailed JSON response.",
            responseSchema as any,
            {
                temperature: 0.2,
                preferredModel: 'gemini'
            }
        );

        // If context is learn_mode, save to DB
        if (context === 'learn_mode') {
            let mockUser = await prisma.user.findFirst();
            if (!mockUser) {
                mockUser = await prisma.user.create({ data: { level: 1 } });
            }

            await prisma.vocabulary.create({
                data: {
                    userId: mockUser.id,
                    chinese: result.Chinese,
                    pinyin: result.Pinyin,
                    meaning: result.Meaning,
                    pronunciation: result.PronunciationGuide,
                    hindiPronunciation: result.HindiPronunciation || null,
                    toneExplanation: result.ToneExplanation,
                    mnemonic: result.Mnemonic,
                    etymology: result.Etymology
                }
            });
        }

        return NextResponse.json(result);
    } catch (error: any) {
        console.error('API Pipeline Error:', error);
        
        // Handle Gemini Quota Limit specifically
        if (error.status === 429 || error.message?.includes('429') || error.message?.includes('Quota')) {
             return NextResponse.json({ 
                 error: 'Daily AI Limit Reached! Google Gemini only allows a certain number of free requests per day. Please try again tomorrow or upgrade your API key.' 
             }, { status: 429 });
        }

        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
