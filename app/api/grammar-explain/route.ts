import { NextResponse } from 'next/server';
import { routeAIRequest } from '@/lib/ai-router';
import { Type } from '@google/genai';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { grammarId, title, pattern, context } = body;

        if (!grammarId || !title || !pattern) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const systemPrompt = `You are an expert Chinese linguistics professor.
Your task is to explain the grammar point "${title}" (Pattern: ${pattern}).

Make the explanation deeply engaging, easy to understand, and memorable.
Use analogies comparing Chinese grammar to English (or Hindi if helpful).
Include exactly 3 practical, natural examples used in daily life.
Highlight common mistakes learners make with this grammar point.

The user context (if any) is: ${context || 'None provided'}`;

        const userPrompt = `Please explain the grammar point: ${title}`;

        // Schema for Gemini fallback
        const responseSchema = {
            type: Type.OBJECT,
            properties: {
                explanation: { type: Type.STRING, description: 'Clear, engaging explanation with analogies' },
                examples: {
                    type: Type.ARRAY,
                    description: '3 practical examples',
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            chinese: { type: Type.STRING },
                            pinyin: { type: Type.STRING },
                            english: { type: Type.STRING }
                        },
                        required: ['chinese', 'pinyin', 'english']
                    }
                },
                commonMistakes: { type: Type.STRING, description: 'What learners often get wrong' },
                memoryTrick: { type: Type.STRING, description: 'A mnemonic or trick to remember this' }
            },
            required: ['explanation', 'examples', 'commonMistakes', 'memoryTrick']
        };

        // Let the router pick the best model (prefers Nemotron for teaching)
        const result = await routeAIRequest<any>(
            systemPrompt,
            userPrompt,
            responseSchema,
            { preferredModel: 'nemotron', temperature: 0.5 }
        );

        return NextResponse.json({
            ...result.data,
            _modelUsed: result.model
        });

    } catch (error: any) {
        console.error('Grammar Explain API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to explain grammar' },
            { status: 500 }
        );
    }
}
