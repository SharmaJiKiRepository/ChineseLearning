'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { getUnit, getGrammarByLevel, HSK_LEVELS } from '@/data';
import { pinyinToPhonetic } from '@/lib/pinyin-to-phonetic';
import HanziWriterCard from '@/components/HanziWriterCard';
import { notFound } from 'next/navigation';
import './unit.css';

interface Props {
  params: Promise<{ level: string; unit: string }>;
}

export default function UnitPage({ params }: Props) {
  const { level: levelStr, unit: unitStr } = use(params);
  const [expandedWord, setExpandedWord] = useState<string | null>(null);
  const [aiResult, setAiResult] = useState<Record<string, any>>({});
  const [loadingWord, setLoadingWord] = useState<string | null>(null);

  const level = parseInt(levelStr) as 1 | 2 | 3 | 4;
  const unitNum = parseInt(unitStr);

  const unit = getUnit(level, unitNum);
  const levelMeta = HSK_LEVELS.find(l => l.level === level);
  const grammar = getGrammarByLevel(level).filter(g => g.unit === unitNum);

  if (!unit || !levelMeta) return notFound();

  const handleWordClick = async (wordId: string, chinese: string) => {
    if (expandedWord === wordId) {
      setExpandedWord(null);
      return;
    }
    setExpandedWord(wordId);

    // If we already have AI data for this word, don't refetch
    if (aiResult[wordId]) return;

    setLoadingWord(wordId);
    try {
      const res = await fetch('/api/pipeline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: chinese, context: 'learn_mode' }),
      });
      const data = await res.json();
      if (res.ok) {
        setAiResult(prev => ({ ...prev, [wordId]: data }));

        // Track progress
        await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ wordId, correct: true }),
        });
      }
    } catch {
      // Silent fail — AI enrichment is optional
    } finally {
      setLoadingWord(null);
    }
  };

  const playAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="unit-page animate-fade-in">
      <div className="unit-header">
        <Link href={`/hsk/${level}`} className="back-link">← HSK {level} Units</Link>
        <div className="unit-title-row">
          <span className="level-tag" style={{ background: levelMeta.color }}>
            Unit {unitNum}
          </span>
          <h1>{unit.name}</h1>
        </div>
        <p className="unit-desc">{unit.words.length} words to learn • Click any word for detailed notes & mnemonics</p>
        <Link href={`/hsk/${level}/${unitNum}/quiz`} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
          Take Quiz →
        </Link>
      </div>

      {/* Vocabulary Table */}
      <div className="vocab-section">
        <h2 className="section-title">Vocabulary</h2>
        <div className="vocab-list">
          {unit.words.map((word, idx) => (
            <div key={word.id} className={`vocab-item glass-panel ${expandedWord === word.id ? 'expanded' : ''}`}>
              <button
                className="vocab-row"
                onClick={() => handleWordClick(word.id, word.chinese)}
              >
                <span className="vocab-chinese chinese-text">
                  {word.chinese}
                  <button onClick={(e) => playAudio(e, word.chinese)} className="play-audio-btn" title="Listen">🔊</button>
                </span>
                <span className="vocab-pinyin">{word.pinyin}</span>
                <span className="vocab-pronunciation pronunciation-guide">
                  "{pinyinToPhonetic(word.pinyin)}"
                </span>
                <span className="vocab-meaning">{word.meaning}</span>
                <span className="vocab-pos">{word.partOfSpeech}</span>
                <span className="vocab-expand">{expandedWord === word.id ? '−' : '+'}</span>
              </button>

              {expandedWord === word.id && (
                <div className="vocab-expanded animate-slide-down">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <HanziWriterCard character={word.chinese[0]} mode="animate" />
                  </div>
                  
                  {word.exampleSentence && (
                    <div className="example-sentence">
                      <div className="example-label">Example</div>
                      <div className="example-chinese chinese-text">
                        {word.exampleSentence.chinese}
                        <button onClick={(e) => playAudio(e, word.exampleSentence!.chinese)} className="play-audio-btn" title="Listen">🔊</button>
                      </div>
                      <div className="example-pinyin">{word.exampleSentence.pinyin}</div>
                      <div className="example-pronunciation pronunciation-guide">
                        "{pinyinToPhonetic(word.exampleSentence.pinyin)}"
                      </div>
                      <div className="example-meaning">{word.exampleSentence.meaning}</div>
                    </div>
                  )}

                  {loadingWord === word.id && (
                    <div className="ai-loading">
                      <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                      <span style={{ marginLeft: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>AI tutor is thinking...</span>
                    </div>
                  )}

                  {aiResult[word.id] && (
                    <div className="ai-enrichment">
                      <div className="ai-label">🤖 Detailed Notes</div>
                      
                      <div className="enrichment-grid">
                        <div className="enrichment-col">
                          <div className="detail-item">
                            <span className="detail-label">Pronunciation</span>
                            <span className="detail-value text-gradient">{aiResult[word.id].PronunciationGuide}</span>
                          </div>
                          {aiResult[word.id].HindiPronunciation && (
                            <div className="detail-item">
                              <span className="detail-label">Hindi</span>
                              <span className="detail-value">{aiResult[word.id].HindiPronunciation}</span>
                            </div>
                          )}
                          <div className="detail-item">
                            <span className="detail-label">Tones</span>
                            <span className="detail-value">{aiResult[word.id].ToneExplanation}</span>
                          </div>
                        </div>

                        <div className="enrichment-col">
                          {aiResult[word.id].Etymology && (
                            <div className="deep-dive-box etymology-box">
                              <span className="box-label">🌳 Character Breakdown</span>
                              <p>{aiResult[word.id].Etymology}</p>
                            </div>
                          )}
                          
                          {aiResult[word.id].Mnemonic && (
                            <div className="deep-dive-box mnemonic-box">
                              <span className="box-label">🧠 Memory Trick</span>
                              <p>{aiResult[word.id].Mnemonic}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Grammar Section */}
      {grammar.length > 0 && (
        <div className="grammar-section">
          <h2 className="section-title">Grammar Patterns</h2>
          {grammar.map(g => (
            <div key={g.id} className="grammar-card glass-panel">
              <h3 className="grammar-title">{g.title}</h3>
              <div className="grammar-pattern">{g.pattern}</div>
              <p className="grammar-explanation">{g.explanation}</p>
              <div className="grammar-examples">
                {g.examples.map((ex, i) => (
                  <div key={i} className="grammar-example">
                    <span className="chinese-text">{ex.chinese}</span>
                    <span className="grammar-pinyin">{ex.pinyin}</span>
                    <span className="grammar-meaning">{ex.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="unit-bottom-cta">
        <Link href={`/hsk/${level}/${unitNum}/quiz`} className="btn btn-primary btn-lg">
          Ready? Take the Quiz →
        </Link>
      </div>
    </div>
  );
}
