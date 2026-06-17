'use client';

import { useState } from 'react';
import { readingPassages, HSK_LEVELS } from '@/data';
import { pinyinToPhonetic } from '@/lib/pinyin-to-phonetic';
import './reading.css';

export default function ReadingPage() {
  const [selectedLevel, setSelectedLevel] = useState<number>(0); // 0 = all
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);

  const filtered = selectedLevel
    ? readingPassages.filter(p => p.hskLevel === selectedLevel)
    : readingPassages;

  return (
    <div className="reading-page animate-fade-in">
      <div className="reading-header">
        <h1>Reading <span className="text-gradient">Practice</span></h1>
        <p>Build reading comprehension with graded passages for every HSK level.</p>
      </div>

      <div className="reading-controls glass-panel">
        <div className="filter-row">
          <button
            className={`filter-btn ${selectedLevel === 0 ? 'active' : ''}`}
            onClick={() => setSelectedLevel(0)}
          >All</button>
          {HSK_LEVELS.map(l => (
            <button
              key={l.level}
              className={`filter-btn ${selectedLevel === l.level ? 'active' : ''}`}
              onClick={() => setSelectedLevel(l.level)}
              style={{ '--level-color': l.color } as React.CSSProperties}
            >HSK {l.level}</button>
          ))}
        </div>
        <div className="toggle-row">
          <label className="toggle-item">
            <input type="checkbox" checked={showPinyin} onChange={e => setShowPinyin(e.target.checked)} />
            Show Pinyin
          </label>
          <label className="toggle-item">
            <input type="checkbox" checked={showTranslation} onChange={e => setShowTranslation(e.target.checked)} />
            Show Translation
          </label>
        </div>
      </div>

      <div className="readings-list">
        {filtered.map(passage => {
          const levelMeta = HSK_LEVELS.find(l => l.level === passage.hskLevel);
          const isExpanded = expandedId === passage.id;
          return (
            <div key={passage.id} className="reading-card glass-panel">
              <button
                className="reading-card-header"
                onClick={() => setExpandedId(isExpanded ? null : passage.id)}
              >
                <span className="reading-badge" style={{ background: levelMeta?.color }}>
                  HSK {passage.hskLevel}
                </span>
                <h3>{passage.title}</h3>
                <span className="reading-expand">{isExpanded ? '−' : '+'}</span>
              </button>

              {isExpanded && (
                <div className="reading-content animate-slide-down">
                  <div className="reading-chinese chinese-text">
                    {passage.chinese}
                  </div>
                  {showPinyin && (
                    <div className="reading-pinyin">
                      {passage.pinyin}
                    </div>
                  )}
                  {showPinyin && (
                    <div className="reading-pronunciation pronunciation-guide">
                      "{pinyinToPhonetic(passage.pinyin)}"
                    </div>
                  )}
                  {showTranslation && (
                    <div className="reading-translation">
                      {passage.meaning}
                    </div>
                  )}
                  <div className="reading-actions">
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => setShowPinyin(!showPinyin)}
                    >
                      {showPinyin ? 'Hide' : 'Show'} Pinyin
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => setShowTranslation(!showTranslation)}
                    >
                      {showTranslation ? 'Hide' : 'Show'} Translation
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
