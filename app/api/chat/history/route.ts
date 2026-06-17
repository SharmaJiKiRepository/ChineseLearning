import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userMessage, aiResponse } = body;

        if (!userMessage || !aiResponse) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Mock user ID for now since auth isn't setup
        let mockUser = await prisma.user.findFirst();
        if (!mockUser) {
            mockUser = await prisma.user.create({ data: { level: 1 } });
        }

        const newChatHistory = await prisma.chatHistory.create({
            data: {
                userId: mockUser.id,
                message: userMessage,
                response: aiResponse
            }
        });

        return NextResponse.json(newChatHistory, { status: 201 });
    } catch (error) {
        console.error('Chat History API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
