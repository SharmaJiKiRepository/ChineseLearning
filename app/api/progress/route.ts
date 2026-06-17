import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { calculateNextReview, quizResultToQuality } from '@/lib/spaced-repetition';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// GET: Fetch progress for a user (word progress, lesson progress)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const hskLevel = searchParams.get('level');

    let mockUser = await prisma.user.findFirst();
    if (!mockUser) {
      mockUser = await prisma.user.create({ data: { level: 1 } });
    }

    const wordProgress = await prisma.wordProgress.findMany({
      where: {
        userId: mockUser.id,
        ...(hskLevel ? { wordId: { startsWith: `hsk${hskLevel}-` } } : {}),
      },
    });

    const lessonProgress = await prisma.lessonProgress.findMany({
      where: {
        userId: mockUser.id,
        ...(hskLevel ? { hskLevel: parseInt(hskLevel) } : {}),
      },
    });

    const quizResults = await prisma.quizResult.findMany({
      where: {
        userId: mockUser.id,
        ...(hskLevel ? { hskLevel: parseInt(hskLevel) } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    return NextResponse.json({
      wordProgress,
      lessonProgress,
      quizResults,
      user: { streak: mockUser.streak, lastStudyDate: mockUser.lastStudyDate },
    });
  } catch (error) {
    console.error('Progress API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST: Update word progress (after learning or reviewing a word)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { wordId, correct, timeSpent } = body;

    if (!wordId) {
      return NextResponse.json({ error: 'wordId is required' }, { status: 400 });
    }

    let mockUser = await prisma.user.findFirst();
    if (!mockUser) {
      mockUser = await prisma.user.create({ data: { level: 1 } });
    }

    // Find existing progress or create new
    const existing = await prisma.wordProgress.findUnique({
      where: { userId_wordId: { userId: mockUser.id, wordId } },
    });

    const quality = quizResultToQuality(correct ?? true, timeSpent);
    const result = calculateNextReview(
      quality,
      existing?.ease ?? 2.5,
      existing?.interval ?? 0,
      existing?.repetitions ?? 0
    );

    const progress = await prisma.wordProgress.upsert({
      where: { userId_wordId: { userId: mockUser.id, wordId } },
      update: {
        ease: result.ease,
        interval: result.interval,
        repetitions: result.repetitions,
        nextReview: result.nextReview,
        lastResult: correct ? 'correct' : 'wrong',
      },
      create: {
        userId: mockUser.id,
        wordId,
        ease: result.ease,
        interval: result.interval,
        repetitions: result.repetitions,
        nextReview: result.nextReview,
        lastResult: correct ? 'correct' : 'wrong',
      },
    });

    // Update streak
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastStudy = mockUser.lastStudyDate ? new Date(mockUser.lastStudyDate) : null;
    if (lastStudy) lastStudy.setHours(0, 0, 0, 0);

    let newStreak = mockUser.streak;
    if (!lastStudy || lastStudy.getTime() < today.getTime()) {
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastStudy && lastStudy.getTime() === yesterday.getTime()) {
        newStreak = mockUser.streak + 1;
      } else if (!lastStudy || lastStudy.getTime() < yesterday.getTime()) {
        newStreak = 1;
      }
    }

    await prisma.user.update({
      where: { id: mockUser.id },
      data: { lastStudyDate: new Date(), streak: newStreak },
    });

    return NextResponse.json({ progress, streak: newStreak });
  } catch (error) {
    console.error('Progress API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
