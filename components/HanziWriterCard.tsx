'use client';

import { useEffect, useRef } from 'react';
import HanziWriter from 'hanzi-writer';

interface HanziWriterCardProps {
  character: string;
  width?: number;
  height?: number;
  mode?: 'animate' | 'quiz';
}

export default function HanziWriterCard({ character, width = 150, height = 150, mode = 'animate' }: HanziWriterCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || !character) return;

    // Clear previous
    containerRef.current.innerHTML = '';

    // Initialize HanziWriter
    writerRef.current = HanziWriter.create(containerRef.current, character[0], {
      width,
      height,
      padding: 5,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 50,
      strokeColor: '#10b981', // primary color
      radicalColor: '#3b82f6', // secondary color
    });

    if (mode === 'animate') {
      writerRef.current.loopCharacterAnimation();
    } else if (mode === 'quiz') {
      writerRef.current.quiz({
        onMistake: (strokeData: any) => {
          console.log('Mistake!', strokeData);
        },
        onComplete: (summaryData: any) => {
          console.log('Quiz complete!', summaryData);
        }
      });
    }

    return () => {
      if (writerRef.current) {
        writerRef.current.cancelQuiz();
      }
    };
  }, [character, mode, width, height]);

  return (
    <div className="hanzi-writer-container flex flex-col items-center">
      <div ref={containerRef} className="hanzi-writer-canvas" style={{ background: '#f8fafc', borderRadius: '12px', border: '2px dashed #cbd5e1' }} />
      {mode === 'quiz' && <p className="text-sm text-secondary mt-2">Trace the character strokes</p>}
    </div>
  );
}
