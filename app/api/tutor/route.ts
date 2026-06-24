import { NextResponse } from 'next/server';
import { callAI } from '@/lib/call-ai';

export async function POST(req: Request) {
    try {
        const { messages, userContext } = await req.json();
        if (!messages?.length) return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });

        const systemPrompt = `You are a personalized, highly intelligent Chinese language tutor powered by NVIDIA Nemotron 3 Ultra.
Your goal is to help the user master Mandarin Chinese.
Be encouraging, adapt to their level, and provide incredibly constructive feedback.

User Context:
${JSON.stringify(userContext || { level: 'Beginner' }, null, 2)}

Instructions:
1. When you respond, provide hyper-detailed grammatical breakdowns if they make a mistake.
2. If they type in Chinese, correct any unnatural phrasing and explain the cultural context behind native alternatives.
3. Use your deep reasoning capabilities to deduce the exact rule they are misunderstanding, and explain it simply.
4. Always ask a follow-up question to keep them practicing.
Keep responses highly educational, but don't overwhelm beginners. Use Pinyin where appropriate.`;

        const { text, model } = await callAI({
            systemPrompt,
            messages,
            nemotronOpts: { enable_thinking: true, reasoning_budget: 1024 },
            temperature: 0.7,
            maxTokens: 2048
        });

        return NextResponse.json({ response: text, _modelUsed: model });
    } catch (error: any) {
        console.error('Tutor API Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to process tutor response' }, { status: 500 });
    }
}
