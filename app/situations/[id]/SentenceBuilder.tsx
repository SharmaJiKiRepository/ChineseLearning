'use client';

import { useState } from 'react';
import type { SentenceBuildingExercise } from '@/data/types';
import '../situations.css';

export default function SentenceBuilder({ exercises }: { exercises: SentenceBuildingExercise[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlocks, setSelectedBlocks] = useState<{ chinese: string; pinyin: string }[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const exercise = exercises[currentIndex];
  const isFinished = currentIndex >= exercises.length;

  if (isFinished) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎉</div>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Great Job!</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
          You've completed all the sentence practice for this situation. Your Chinese is getting better!
        </p>
        <button className="btn btn-primary btn-lg" onClick={() => window.location.reload()}>
          Practice Again
        </button>
      </div>
    );
  }

  // Get available blocks by filtering out the ones already selected
  const getAvailableBlocks = () => {
    const available = [...exercise.blocks];
    for (const block of selectedBlocks) {
      const idx = available.findIndex(b => b.chinese === block.chinese);
      if (idx !== -1) available.splice(idx, 1);
    }
    return available;
  };

  const handleSelectBlock = (block: { chinese: string; pinyin: string }) => {
    if (showResult) return;
    setSelectedBlocks([...selectedBlocks, block]);
  };

  const handleRemoveBlock = (index: number) => {
    if (showResult) return;
    const newSelected = [...selectedBlocks];
    newSelected.splice(index, 1);
    setSelectedBlocks(newSelected);
  };

  const checkAnswer = () => {
    const userSentence = selectedBlocks.map(b => b.chinese).join('');
    
    // Strip all punctuation and whitespace from both strings for comparison
    // This prevents false negatives when the AI generates a sentence with '？' but the blocks don't include it.
    const stripPunctuation = (str: string) => str.replace(/[\s\p{P}]/gu, '');
    
    const correct = stripPunctuation(userSentence) === stripPunctuation(exercise.correctChinese);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    if (isCorrect) {
      setCurrentIndex(curr => curr + 1);
    }
    setSelectedBlocks([]);
    setShowResult(false);
  };

  const renderCorrectAnswerWithPinyin = () => {
    let remainingChinese = exercise.correctChinese;
    const orderedBlocks = [];
    const availBlocks = [...exercise.blocks];
    
    while (remainingChinese.length > 0) {
      let matched = false;
      for (let i = 0; i < availBlocks.length; i++) {
        if (remainingChinese.startsWith(availBlocks[i].chinese)) {
          orderedBlocks.push(availBlocks[i]);
          remainingChinese = remainingChinese.slice(availBlocks[i].chinese.length);
          availBlocks.splice(i, 1);
          matched = true;
          break;
        }
      }
      if (!matched) break;
    }

    if (remainingChinese.length > 0) {
       return <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{exercise.correctChinese}</p>;
    }

    return (
      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        {orderedBlocks.map((block, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>{block.pinyin}</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>{block.chinese}</span>
          </div>
        ))}
      </div>
    );
  };

  const availableBlocks = getAvailableBlocks();

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--hsk1-color)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          ✍️ Translate
        </h2>
        <span className="stat-pill">
          {currentIndex + 1} / {exercises.length}
        </span>
      </div>

      <div className="builder-title">
        "{exercise.english}"
      </div>

      {/* Answer Slot Area */}
      <div className="drop-zone">
        {selectedBlocks.map((block, idx) => (
          <button
            key={idx}
            onClick={() => handleRemoveBlock(idx)}
            className="pinyin-block selected animate-scale-in"
          >
            <span className="block-pinyin">{block.pinyin}</span>
            <span className="block-chinese">{block.chinese}</span>
          </button>
        ))}
        {selectedBlocks.length === 0 && (
          <span style={{ color: 'var(--text-tertiary)', fontStyle: 'italic', paddingBottom: '0.5rem' }}>Select blocks below...</span>
        )}
      </div>

      {/* Word Bank */}
      <div className="word-bank">
        {availableBlocks.map((block, idx) => (
          <button
            key={`avail-${idx}`}
            onClick={() => handleSelectBlock(block)}
            disabled={showResult}
            className="pinyin-block animate-scale-in"
            style={{ opacity: showResult ? 0.3 : 1, cursor: showResult ? 'not-allowed' : 'pointer' }}
          >
            <span className="block-pinyin">{block.pinyin}</span>
            <span className="block-chinese">{block.chinese}</span>
          </button>
        ))}
      </div>

      {/* Footer Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {showResult ? (
          <div style={{ 
            width: '100%', 
            padding: '1.5rem', 
            borderRadius: '1rem', 
            marginBottom: '1rem',
            background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: isCorrect ? 'var(--success)' : 'var(--error)' }}>
                {isCorrect ? '✓' : '✗'}
              </span>
              <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: isCorrect ? 'var(--success)' : 'var(--error)' }}>
                {isCorrect ? 'Excellent!' : 'Incorrect'}
              </p>
            </div>
            
            {!isCorrect && (
              <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '0.75rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '0.5rem' }}>Correct Answer</p>
                {renderCorrectAnswerWithPinyin()}
              </div>
            )}
            
            <button 
              onClick={handleNext} 
              className="btn btn-primary"
              style={{ 
                width: '100%', 
                background: isCorrect ? 'var(--success)' : 'var(--error)',
                boxShadow: isCorrect ? '0 4px 15px rgba(16, 185, 129, 0.3)' : '0 4px 15px rgba(239, 68, 68, 0.3)'
              }}
            >
              {isCorrect ? 'Continue' : 'Got it'}
            </button>
          </div>
        ) : (
          <button 
            onClick={checkAnswer}
            disabled={selectedBlocks.length === 0}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', opacity: selectedBlocks.length === 0 ? 0.5 : 1 }}
          >
            Check Answer
          </button>
        )}
      </div>
    </div>
  );
}
