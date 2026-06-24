import { NextResponse } from 'next/server';
import { callAI, extractJSON } from '@/lib/call-ai';
import { Type } from '@google/genai';

const GRADER_SCHEMA = {
    type: Type.OBJECT,
    properties: {
        score: { type: Type.INTEGER, description: 'Score out of 100' },
        overall_feedback: { type: Type.STRING, description: 'Overall feedback paragraph in English' },
        corrections: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    original: { type: Type.STRING },
                    better: { type: Type.STRING },
                    reason: { type: Type.STRING }
                },
                required: ['original', 'better', 'reason']
            }
        }
    },
    required: ['score', 'overall_feedback', 'corrections']
};

const MAX_ESSAY_LENGTH = 2000;

export async function POST(req: Request) {
    try {
        const { essay } = await req.json();
        if (!essay || typeof essay !== 'string') {
            return NextResponse.json({ error: 'Valid essay text is required' }, { status: 400 });
        }
        if (essay.length > MAX_ESSAY_LENGTH) {
            return NextResponse.json({ error: `Essay exceeds maximum length of ${MAX_ESSAY_LENGTH} characters.` }, { status: 400 });
        }

        const systemPrompt = `You are a strict but helpful Chinese language professor.
Your job is to grade the user's Chinese essay out of 100, provide overall feedback, and correct any grammatical errors or unnatural phrasing.

CRITICAL: You MUST respond ONLY with a raw JSON object and nothing else. Do not use Markdown blocks (no \`\`\`json). The JSON object must have exactly these keys:
{
  "score": <number from 0 to 100>,
  "overall_feedback": "A paragraph explaining what they did well and what they need to improve (in English).",
  "corrections": [
    {
      "original": "The awkward or incorrect sentence from their essay",
      "better": "A more native, correct way to say it",
      "reason": "An explanation of why the original was wrong or awkward"
    }
  ]
}

If the essay is perfect, the corrections array should be empty.`;

        const { text } = await callAI({
            systemPrompt,
            messages: [{ role: 'user', content: essay }],
            nemotronOpts: { enable_thinking: false },
            geminiSchema: GRADER_SCHEMA,
            temperature: 0.3,
            maxTokens: 2048
        });

        const parsed = extractJSON(text);
        return NextResponse.json(parsed);
    } catch (error: any) {
        console.error('Essay Grader API Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to process essay' }, { status: 500 });
    }
}
