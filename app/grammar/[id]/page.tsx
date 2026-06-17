'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { grammarPoints } from '@/data/grammar';
import '../grammar.css';

export default function GrammarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const grammar = grammarPoints.find(g => g.id === id);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | string[]>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});

  if (!grammar) notFound();

  const handleOptionSelect = (quizId: string, option: string | string[]) => {
    if (showFeedback[quizId]) return; // prevent changing after submit
    setSelectedAnswers(prev => ({ ...prev, [quizId]: option }));
  };

  const handleWordBlockClick = (quizId: string, word: string) => {
    if (showFeedback[quizId]) return;
    const currentAns = (selectedAnswers[quizId] as string[]) || [];
    if (currentAns.includes(word)) {
      handleOptionSelect(quizId, currentAns.filter(w => w !== word));
    } else {
      handleOptionSelect(quizId, [...currentAns, word]);
    }
  };

  const checkAnswer = (quizId: string) => {
    setShowFeedback(prev => ({ ...prev, [quizId]: true }));
  };

  return (
    <div className="grammar-detail-container animate-fade-in">
      <Link href="/grammar" style={{ color: 'var(--text-tertiary)', marginBottom: '1.5rem', display: 'inline-block' }}>
        ← Back to Grammar Wiki
      </Link>

      <div style={{ marginBottom: '2rem' }}>
        <span className={`level-badge hsk${grammar.hskLevel}`}>HSK {grammar.hskLevel}</span>
        <span className="unit-tag" style={{ marginLeft: '1rem' }}>Unit {grammar.unit}</span>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>{grammar.title}</h1>
      </div>

      <div className="grammar-formula-box">
        <div className="formula-text">{grammar.pattern}</div>
      </div>

      <p className="explanation-text">{grammar.explanation}</p>

      <div className="examples-section">
        <h3>Examples</h3>
        {grammar.examples.map((ex, idx) => (
          <div key={idx} className="example-card">
            <div className="example-chinese">{ex.chinese}</div>
            <div className="example-pinyin">{ex.pinyin}</div>
            <div className="example-english">{ex.meaning}</div>
          </div>
        ))}
      </div>

      {grammar.quizzes && grammar.quizzes.length > 0 && (
        <div className="quiz-section">
          <h3>Test Your Understanding</h3>
          {grammar.quizzes.map((quiz, idx) => {
            const isAnswered = showFeedback[quiz.id];
            
            let isCorrect = false;
            if (quiz.type === 'word-order') {
              const currentAns = (selectedAnswers[quiz.id] as string[]) || [];
              isCorrect = currentAns.join('') === (quiz.correctOrder || []).join('');
            } else {
              isCorrect = selectedAnswers[quiz.id] === quiz.correctAnswer;
            }

            return (
              <div key={quiz.id} className="quiz-card">
                <div className="quiz-prompt">{idx + 1}. {quiz.prompt}</div>
                
                {quiz.type === 'multiple-choice' && quiz.options && (
                  <div className="quiz-options">
                    {quiz.options.map((opt, optIdx) => {
                      const optValue = typeof opt === 'string' ? opt : opt.chinese;
                      let className = 'quiz-option';
                      if (isAnswered) {
                        if (optValue === quiz.correctAnswer) className += ' correct';
                        else if (optValue === selectedAnswers[quiz.id]) className += ' incorrect';
                      } else if (selectedAnswers[quiz.id] === optValue) {
                        className += ' selected';
                      }

                      return (
                        <button 
                          key={optIdx} 
                          className={className}
                          onClick={() => handleOptionSelect(quiz.id, optValue)}
                          disabled={isAnswered}
                          style={{
                            borderColor: selectedAnswers[quiz.id] === optValue && !isAnswered ? 'var(--primary-color)' : '',
                            display: typeof opt !== 'string' ? 'flex' : 'block',
                            flexDirection: typeof opt !== 'string' ? 'column' : 'row',
                            alignItems: 'center',
                            gap: '0.2rem'
                          }}
                        >
                          {typeof opt === 'string' ? opt : (
                            <>
                              <div className="block-pinyin">{opt.pinyin}</div>
                              <div className="block-chinese">{opt.chinese}</div>
                            </>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {quiz.type === 'fill-blank' && (
                  <div style={{ margin: '1.5rem 0' }}>
                    <input 
                      type="text" 
                      className="fill-blank-input" 
                      placeholder="Type here"
                      disabled={isAnswered}
                      value={(selectedAnswers[quiz.id] as string) || ''}
                      onChange={e => handleOptionSelect(quiz.id, e.target.value)}
                      style={{
                        borderColor: isAnswered ? (isCorrect ? '#2ecc71' : '#e74c3c') : 'var(--primary-color)'
                      }}
                    />
                  </div>
                )}

                {quiz.type === 'word-order' && quiz.scrambled && (
                  <div className="word-order-container">
                    <div className={`word-order-dropzone ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
                      {((selectedAnswers[quiz.id] as string[]) || []).length === 0 && (
                        <span className="dropzone-placeholder">Click blocks below to build the sentence</span>
                      )}
                      {((selectedAnswers[quiz.id] as string[]) || []).map((word, wIdx) => {
                        const block = quiz.scrambled?.find(b => b.chinese === word);
                        return (
                          <div 
                            key={wIdx} 
                            className="word-block active"
                            onClick={() => handleWordBlockClick(quiz.id, word)}
                          >
                            {block?.pinyin && <div className="block-pinyin">{block.pinyin}</div>}
                            <div className="block-chinese">{word}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="word-order-pool">
                      {quiz.scrambled.map((block, wIdx) => {
                        const isSelected = ((selectedAnswers[quiz.id] as string[]) || []).includes(block.chinese);
                        return (
                          <div 
                            key={wIdx} 
                            className={`word-block ${isSelected ? 'selected' : ''}`}
                            onClick={() => handleWordBlockClick(quiz.id, block.chinese)}
                          >
                            <div className="block-pinyin">{block.pinyin}</div>
                            <div className="block-chinese">{block.chinese}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {!isAnswered ? (
                  <button 
                    className="btn btn-primary" 
                    style={{ marginTop: '1rem' }}
                    onClick={() => checkAnswer(quiz.id)}
                    disabled={!selectedAnswers[quiz.id]}
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="quiz-feedback">
                    <strong>{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> {quiz.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
