import { NextResponse } from 'next/server';
import { routeAIRequest } from '@/lib/ai-router';
import { Situation } from '@/data/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const situationSchema = {
    type: 'object',
    properties: {
        id: { type: 'string', description: 'A URL-friendly ID, e.g., custom-taxi-argument' },
        title: { type: 'string', description: 'A catchy title for the situation' },
        description: { type: 'string', description: 'A brief description of what you will learn' },
        level: { type: 'number', description: 'The HSK level (1, 2, 3, or 4)' },
        icon: { type: 'string', description: 'A single relevant emoji' },
        aiPrompt: { type: 'string', description: 'The system prompt to give the AI when the user enters the live roleplay for this scenario.' },
        vocabulary: {
            type: 'array',
            description: '3 to 5 crucial vocabulary words needed for this situation',
            items: {
                type: 'object',
                properties: {
                    chinese: { type: 'string' },
                    pinyin: { type: 'string' },
                    english: { type: 'string' }
                },
                required: ['chinese', 'pinyin', 'english']
            }
        },
        dialogue: {
            type: 'array',
            description: 'A back-and-forth dialogue between You and another character (e.g., Taxi Driver, Barista). About 6-8 lines total.',
            items: {
                type: 'object',
                properties: {
                    character: { type: 'string', description: 'The name of the speaker, either "You" or the other role' },
                    chinese: { type: 'string' },
                    pinyin: { type: 'string' },
                    english: { type: 'string' },
                    hindiPronunciation: { type: 'string', description: 'A phonetic pronunciation guide using Hindi script (Devanagari)' }
                },
                required: ['character', 'chinese', 'pinyin', 'english', 'hindiPronunciation']
            }
        },
        exercises: {
            type: 'array',
            description: '2 to 3 sentence building exercises based on the dialogue',
            items: {
                type: 'object',
                properties: {
                    type: { type: 'string', description: 'Always "sentence_building"' },
                    english: { type: 'string', description: 'The english sentence to translate' },
                    correctChinese: { type: 'string', description: 'The correct chinese translation' },
                    blocks: {
                        type: 'array',
                        description: 'The chinese sentence broken down into 3-5 scrambled blocks',
                        items: {
                            type: 'object',
                            properties: {
                                chinese: { type: 'string' },
                                pinyin: { type: 'string' }
                            },
                            required: ['chinese', 'pinyin']
                        }
                    }
                },
                required: ['type', 'english', 'correctChinese', 'blocks']
            }
        }
    },
    required: ['id', 'title', 'description', 'level', 'icon', 'aiPrompt', 'vocabulary', 'dialogue', 'exercises']
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { topic, level = 1 } = body;

        if (!topic) {
            return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
        }

        console.log(`[Situation Generator] Generating scenario for: "${topic}" at HSK level ${level}`);

        const systemPrompt = `You are an expert Chinese language teacher. The user wants to learn how to handle a specific real-world situation in Chinese.
        
You must generate a comprehensive, structured lesson for this scenario.
The target HSK level is ${level}. Keep vocabulary and grammar strictly appropriate for this level.

Follow this structure carefully:
1. Provide 3-5 essential vocabulary words.
2. Provide a 6-8 line dialogue between "You" and the other person.
3. Provide 2-3 sentence building exercises based EXACTLY on sentences from the dialogue. Break the Chinese sentence into 3-5 logical blocks.
4. Provide an 'aiPrompt' which will instruct an LLM on how to act out the other role in a live chat roleplay later.`;

        const userPrompt = `Generate a Chinese learning scenario for the following topic: "${topic}"`;

        // We use Gemini by default for cost-efficiency, as requested by the user to save credits
        const { data: result } = await routeAIRequest<Situation>(
            systemPrompt,
            userPrompt,
            situationSchema as any,
            {
                temperature: 0.7, // Slightly higher for creativity in scenarios
                preferredModel: 'gemini' 
            }
        );

        // Ensure exercises have the correct type literal
        if (result.exercises) {
            result.exercises = result.exercises.map(ex => ({ ...ex, type: 'sentence_building' as const }));
        }

        return NextResponse.json(result);
    } catch (error: any) {
        console.error('Situation Generator Error:', error);
        
        if (error.status === 429 || error.message?.includes('429') || error.message?.includes('Quota')) {
             return NextResponse.json({ 
                 error: 'Daily AI Limit Reached! Google Gemini only allows a certain number of free requests per day. Please try again tomorrow or upgrade your API key.' 
             }, { status: 429 });
        }

        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
