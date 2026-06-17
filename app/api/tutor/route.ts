import { NextResponse } from 'next/server';
import { routeConversation } from '@/lib/ai-router';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages, userContext } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
        }

        const systemPrompt = `You are a personalized, highly intelligent Chinese language tutor.
Your goal is to help the user master Mandarin Chinese.
Be encouraging, adapt to their level, and provide constructive feedback.

User Context:
${JSON.stringify(userContext || { level: 'Beginner' }, null, 2)}

When you respond, occasionally correct their mistakes (if they type in Chinese), suggest better ways to phrase things, and ask follow-up questions to keep them practicing.
You have access to their progress, so reference their weak words or recent lessons if relevant.
Keep responses concise but highly educational.`;

        // The AI Tutor uses conversation mode and heavily prefers Nemotron
        // because of the massive context window and strong reasoning.
        const result = await routeConversation(
            messages,
            systemPrompt,
            null, // No strict JSON schema needed for raw chat
            { preferredModel: 'nemotron', temperature: 0.7, maxTokens: 1024 }
        );

        return NextResponse.json({
            response: result.content,
            _modelUsed: result.model
        });

    } catch (error: any) {
        console.error('Tutor API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process tutor response' },
            { status: 500 }
        );
    }
}
