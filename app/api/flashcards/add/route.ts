import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { wordId } = await req.json();

    if (!wordId) {
      return NextResponse.json({ error: 'wordId is required' }, { status: 400 });
    }

    let mockUser = await prisma.user.findFirst();
    if (!mockUser) {
      mockUser = await prisma.user.create({ data: { level: 1 } });
    }

    // Upsert to WordProgress (creates if not exists, safely does nothing if exists)
    const progress = await prisma.wordProgress.upsert({
      where: {
        userId_wordId: {
          userId: mockUser.id,
          wordId: wordId,
        }
      },
      update: {}, // Do nothing if it already exists
      create: {
        userId: mockUser.id,
        wordId: wordId,
        ease: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: new Date(), // Due immediately
      }
    });

    return NextResponse.json({ success: true, progress });
  } catch (error: any) {
    console.error('Flashcard Add Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
