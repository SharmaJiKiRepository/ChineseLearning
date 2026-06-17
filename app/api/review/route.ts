import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// GET: Get words due for review
export async function GET() {
  try {
    let mockUser = await prisma.user.findFirst();
    if (!mockUser) {
      mockUser = await prisma.user.create({ data: { level: 1 } });
    }

    const now = new Date();

    const dueWords = await prisma.wordProgress.findMany({
      where: {
        userId: mockUser.id,
        nextReview: { lte: now },
      },
      orderBy: { nextReview: 'asc' },
      take: 30, // Max 30 words per review session
    });

    return NextResponse.json({
      dueWords,
      totalDue: dueWords.length,
      user: { streak: mockUser.streak },
    });
  } catch (error) {
    console.error('Review API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
