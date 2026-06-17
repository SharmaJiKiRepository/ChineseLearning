'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { getUnit, getWordsByLevel, HSK_LEVELS, HskWord } from '@/data';
import { pinyinToPhonetic } from '@/lib/pinyin-to-phonetic';
import './quiz.css';

interface QuizItem {
  word: HskWord;
  type: 'char-to-meaning' | 'meaning-to-char' | 'pinyin-to-char';
  options: string[];
  correctIndex: number;
}

export default function QuizPage({ params }: { params: Promise<{ level: string; unit: string }> }) {
  const [quizItems, setQuizItems] = useState<QuizItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [level, setLevel] = useState(1);
  const [unitNum, setUnitNum] = useState(1);

  useEffect(() => {
    params.then(({ level: l, unit: u }) => {
      const lv = parseInt(l) as 1 | 2 | 3 | 4;
      const un = parseInt(u);
      setLevel(lv);
      setUnitNum(un);

      const unit = getUnit(lv, un);
      if (!unit) return;

      const allWords = getWordsByLevel(lv);
      const items: QuizItem[] = [];

      // Generate quiz items from unit words
      for (const word of unit.words) {
        const types: QuizItem['type'][] = ['char-to-meaning', 'meaning-to-char', 'pinyin-to-char'];
        const type = types[Math.floor(Math.random() * types.length)];

        // Get 3 wrong answers from other words
        const otherWords = allWords.filter(w => w.id !== word.id);
        const shuffled = otherWords.sort(() => Math.random() - 0.5).slice(0, 3);

        let options: string[];
        let correctAnswer: string;

        if (type === 'char-to-meaning') {
          correctAnswer = word.meaning;
          options = [correctAnswer, ...shuffled.map(w => w.meaning)];
        } else if (type === 'meaning-to-char') {
          correctAnswer = word.chinese;
          options = [correctAnswer, ...shuffled.map(w => w.chinese)];
        } else {
          correctAnswer = word.chinese;
          options = [correctAnswer, ...shuffled.map(w => w.chinese)];
        }

        // Shuffle options
        const shuffledOptions = options.sort(() => Math.random() - 0.5);
        const correctIndex = shuffledOptions.indexOf(correctAnswer);

        items.push({ word, type, options: shuffledOptions, correctIndex });
      }

      // Shuffle the quiz items
      setQuizItems(items.sort(() => Math.random() - 0.5));
    });
  }, [params]);

  const handleAnswer = useCallback(async (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    const isCorrect = index === quizItems[currentIndex].correctIndex;
    if (isCorrect) setScore(prev => prev + 1);
    setAnswers(prev => [...prev, isCorrect]);

    // Track word progress
    const wordId = quizItems[currentIndex].word.id;
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wordId, correct: isCorrect }),
    }).catch(() => {});

    // Auto-advance after delay
    setTimeout(() => {
      if (currentIndex + 1 >= quizItems.length) {
        // Save quiz result
        const finalScore = isCorrect ? score + 1 : score;
        fetch('/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            hskLevel: level,
            unit: unitNum,
            score: finalScore,
            total: quizItems.length,
          }),
        }).catch(() => {});
        setIsFinished(true);
      } else {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
      }
    }, 1200);
  }, [selectedAnswer, currentIndex, quizItems, score, level, unitNum]);

  if (quizItems.length === 0) {
    return (
      <div className="quiz-page animate-fade-in">
        <div className="quiz-loading">Loading quiz...</div>
      </div>
    );
  }

  const levelMeta = HSK_LEVELS.find(l => l.level === level);
  const current = quizItems[currentIndex];
  const percentage = isFinished
    ? Math.round((score / quizItems.length) * 100)
    : Math.round((currentIndex / quizItems.length) * 100);

  if (isFinished) {
    const passed = (score / quizItems.length) >= 0.7;
    return (
      <div className="quiz-page animate-fade-in">
        <div className="quiz-results glass-panel animate-scale-in">
          <div className="results-emoji">{passed ? '🎉' : '💪'}</div>
          <h1 className="results-title">
            {passed ? 'Excellent Work!' : 'Keep Practicing!'}
          </h1>
          <div className="results-score">
            <span className="score-big text-gradient">{score}/{quizItems.length}</span>
            <span className="score-percent" style={{ color: passed ? 'var(--success)' : 'var(--warning)' }}>
              {percentage}%
            </span>
          </div>
          <div className="progress-bar" style={{ margin: '1rem 0' }}>
            <div
              className="progress-bar-fill"
              style={{
                width: `${percentage}%`,
                background: passed ? 'var(--success)' : 'var(--warning)',
              }}
            />
          </div>
          {passed && (
            <p className="results-message">
              🏆 Unit {unitNum} completed! This lesson is now marked as finished.
            </p>
          )}
          {!passed && (
            <p className="results-message">
              You need 70% to pass. Review the words and try again!
            </p>
          )}

          {/* Wrong answers review */}
          {answers.some(a => !a) && (
            <div className="wrong-answers">
              <h3>Review These Words</h3>
              {quizItems.map((item, idx) => (
                !answers[idx] && (
                  <div key={idx} className="wrong-word">
                    <span className="chinese-text">{item.word.chinese}</span>
                    <span>{item.word.pinyin}</span>
                    <span className="pronunciation-guide">"{pinyinToPhonetic(item.word.pinyin)}"</span>
                    <span>{item.word.meaning}</span>
                  </div>
                )
              ))}
            </div>
          )}

          <div className="results-actions">
            <button onClick={() => {
              setCurrentIndex(0);
              setSelectedAnswer(null);
              setScore(0);
              setIsFinished(false);
              setAnswers([]);
              setQuizItems(prev => [...prev].sort(() => Math.random() - 0.5));
            }} className="btn btn-primary">
              Retry Quiz
            </button>
            <Link href={`/hsk/${level}/${unitNum}`} className="btn btn-secondary">
              Back to Lesson
            </Link>
            <Link href={`/hsk/${level}`} className="btn btn-ghost">
              All Units
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page animate-fade-in">
      <div className="quiz-header">
        <Link href={`/hsk/${level}/${unitNum}`} className="back-link">← Back to Lesson</Link>
        <div className="quiz-progress-info">
          <span>Question {currentIndex + 1} of {quizItems.length}</span>
          <span className="quiz-score-live">Score: {score}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
        </div>
      </div>

      <div className="quiz-card glass-panel animate-scale-in" key={currentIndex}>
        <div className="quiz-type-badge">
          {current.type === 'char-to-meaning' && 'What does this mean?'}
          {current.type === 'meaning-to-char' && 'Which character matches?'}
          {current.type === 'pinyin-to-char' && 'Which character is this?'}
        </div>

        <div className="quiz-prompt">
          {current.type === 'char-to-meaning' && (
            <>
              <div className="prompt-chinese chinese-text">{current.word.chinese}</div>
              <div className="prompt-pinyin">{current.word.pinyin}</div>
              <div className="prompt-pronunciation pronunciation-guide">
                "{pinyinToPhonetic(current.word.pinyin)}"
              </div>
            </>
          )}
          {current.type === 'meaning-to-char' && (
            <div className="prompt-meaning">{current.word.meaning}</div>
          )}
          {current.type === 'pinyin-to-char' && (
            <>
              <div className="prompt-pinyin-big">{current.word.pinyin}</div>
              <div className="prompt-pronunciation pronunciation-guide">
                "{pinyinToPhonetic(current.word.pinyin)}"
              </div>
            </>
          )}
        </div>

        <div className="quiz-options">
          {current.options.map((option, idx) => {
            let optionClass = 'quiz-option';
            if (selectedAnswer !== null) {
              if (idx === current.correctIndex) optionClass += ' correct';
              else if (idx === selectedAnswer) optionClass += ' wrong';
            }
            return (
              <button
                key={idx}
                className={optionClass}
                onClick={() => handleAnswer(idx)}
                disabled={selectedAnswer !== null}
              >
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className={`option-text ${current.type !== 'char-to-meaning' ? 'chinese-text' : ''}`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
