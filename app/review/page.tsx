'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getWordById } from '@/data';
import { pinyinToPhonetic } from '@/lib/pinyin-to-phonetic';
import HanziWriterCard from '@/components/HanziWriterCard';
import './review.css';

interface DueWord {
  id: string;
  wordId: string;
  ease: number;
  interval: number;
  repetitions: number;
}

export default function ReviewPage() {
  const [dueWords, setDueWords] = useState<DueWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  useEffect(() => {
    fetch('/api/review')
      .then(r => r.json())
      .then(data => setDueWords(data.dueWords || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleGrade = async (quality: number) => {
    const current = dueWords[currentIndex];
    if (!current) return;

    // Send result to progress API
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        wordId: current.wordId,
        correct: quality >= 3,
        timeSpent: quality === 5 ? 2000 : quality === 4 ? 5000 : 10000,
      }),
    }).catch(() => {});

    setCompleted(prev => prev + 1);

    if (currentIndex + 1 >= dueWords.length) {
      setSessionDone(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  if (loading) {
    return (
      <div className="review-page animate-fade-in">
        <div className="review-loading">Loading review session...</div>
      </div>
    );
  }

  if (dueWords.length === 0) {
    return (
      <div className="review-page animate-fade-in">
        <div className="review-empty glass-panel animate-scale-in">
          <div className="empty-emoji">🎉</div>
          <h2>All Caught Up!</h2>
          <p>No words due for review right now. Study new lessons to add words to your review queue.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link href="/hsk" className="btn btn-primary">Study New Words</Link>
            <Link href="/dashboard" className="btn btn-secondary">Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }

  if (sessionDone) {
    return (
      <div className="review-page animate-fade-in">
        <div className="review-complete glass-panel animate-scale-in">
          <div className="empty-emoji">✨</div>
          <h2>Review Complete!</h2>
          <p>You reviewed <strong>{completed}</strong> words. Great work!</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link href="/dashboard" className="btn btn-primary">See Progress</Link>
            <Link href="/hsk" className="btn btn-secondary">Study More</Link>
          </div>
        </div>
      </div>
    );
  }

  const current = dueWords[currentIndex];
  const word = getWordById(current.wordId);

  if (!word) {
    handleGrade(5); // Skip unknown words
    return null;
  }

  return (
    <div className="review-page animate-fade-in">
      <div className="review-header">
        <h1>Spaced Repetition <span className="text-gradient">Review</span></h1>
        <div className="review-progress-info">
          <span>{currentIndex + 1} of {dueWords.length}</span>
          <span className="review-completed">{completed} reviewed</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${(currentIndex / dueWords.length) * 100}%` }} />
        </div>
      </div>

      <div className="review-card glass-panel animate-scale-in" key={currentIndex}>
        <div className="review-chinese chinese-text">
          {word.chinese}
          <button onClick={() => playAudio(word.chinese)} className="play-audio-btn" title="Listen">🔊</button>
        </div>

        {!showAnswer ? (
          <button className="btn btn-primary btn-lg show-answer-btn" onClick={() => setShowAnswer(true)}>
            Show Answer
          </button>
        ) : (
          <div className="review-answer animate-slide-up" style={{ opacity: 0 }}>
            <div className="mb-4 flex justify-center">
               <HanziWriterCard character={word.chinese[0]} mode="quiz" />
            </div>
            <div className="review-pinyin">{word.pinyin}</div>
            <div className="review-pronunciation pronunciation-guide">
              "{pinyinToPhonetic(word.pinyin)}"
            </div>
            <div className="review-meaning">{word.meaning}</div>
            {word.exampleSentence && (
              <div className="review-example">
                <span className="chinese-text">{word.exampleSentence.chinese}</span>
                <span>{word.exampleSentence.meaning}</span>
              </div>
            )}

            <div className="grade-buttons">
              <button className="grade-btn grade-again" onClick={() => handleGrade(1)}>
                <span className="grade-label">Again</span>
                <span className="grade-desc">Didn't know</span>
              </button>
              <button className="grade-btn grade-hard" onClick={() => handleGrade(3)}>
                <span className="grade-label">Hard</span>
                <span className="grade-desc">Took effort</span>
              </button>
              <button className="grade-btn grade-good" onClick={() => handleGrade(4)}>
                <span className="grade-label">Good</span>
                <span className="grade-desc">Remembered</span>
              </button>
              <button className="grade-btn grade-easy" onClick={() => handleGrade(5)}>
                <span className="grade-label">Easy</span>
                <span className="grade-desc">Instant</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
