import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// POST: Save quiz results
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { hskLevel, unit, score, total } = body;

    if (!hskLevel || !unit || score === undefined || !total) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let mockUser = await prisma.user.findFirst();
    if (!mockUser) {
      mockUser = await prisma.user.create({ data: { level: 1 } });
    }

    const quizResult = await prisma.quizResult.create({
      data: {
        userId: mockUser.id,
        hskLevel,
        unit,
        score,
        total,
      },
    });

    // If score >= 70%, mark the lesson as completed
    if ((score / total) >= 0.7) {
      await prisma.lessonProgress.upsert({
        where: {
          userId_hskLevel_unit: {
            userId: mockUser.id,
            hskLevel,
            unit,
          },
        },
        update: { completed: true },
        create: {
          userId: mockUser.id,
          hskLevel,
          unit,
          completed: true,
        },
      });
    }

    return NextResponse.json(quizResult, { status: 201 });
  } catch (error) {
    console.error('Quiz API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
