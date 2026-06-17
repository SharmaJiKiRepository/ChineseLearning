'use client';

import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSituationById } from '@/data/situations';
import SentenceBuilder from './SentenceBuilder';
import RoleplaySimulator from './RoleplaySimulator';
import '../situations.css';

export default function SituationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const hardcodedSituation = getSituationById(id);
  
  const [situation, setSituation] = useState<any>(hardcodedSituation);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showEnglish, setShowEnglish] = useState(true);
  const [showHindi, setShowHindi] = useState(true);
  const [currentTab, setCurrentTab] = useState<'vocab' | 'dialogue' | 'practice' | 'roleplay'>('vocab');

  useEffect(() => {
    if (!hardcodedSituation) {
      const customSituations = JSON.parse(localStorage.getItem('custom_situations') || '[]');
      const custom = customSituations.find((s: any) => s.id === id);
      if (custom) {
        setSituation(custom);
      }
    }
  }, [id, hardcodedSituation]);

  if (!situation) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: 'white' }}>Loading or not found...</div>;
  }

  // If the situation doesn't have vocabulary, default to dialogue
  if (currentTab === 'vocab' && (!situation.vocabulary || situation.vocabulary.length === 0)) {
    setCurrentTab('dialogue');
  }

  return (
    <div className="max-w-container" style={{ padding: '2rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/situations" style={{ color: 'var(--text-tertiary)', marginBottom: '1.5rem', display: 'inline-block' }}>
        ← Back to Conversations
      </Link>

      <div style={{ marginBottom: '2rem' }}>
        <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{situation.icon}</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{situation.title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{situation.description}</p>
      </div>

      <div className="tabs-container">
        {situation.vocabulary && situation.vocabulary.length > 0 && (
          <button 
            className={`tab-btn ${currentTab === 'vocab' ? 'active' : ''}`}
            onClick={() => setCurrentTab('vocab')}
          >
            Key Vocab
          </button>
        )}
        <button 
          className={`tab-btn ${currentTab === 'dialogue' ? 'active' : ''}`}
          onClick={() => setCurrentTab('dialogue')}
        >
          Read Dialogue
        </button>
        <button 
          className={`tab-btn ${currentTab === 'practice' ? 'active' : ''}`}
          onClick={() => setCurrentTab('practice')}
        >
          Practice Sentences
        </button>
        <button 
          className={`tab-btn ${currentTab === 'roleplay' ? 'active' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onClick={() => setCurrentTab('roleplay')}
        >
          Roleplay with AI <span className="badge badge-success" style={{ fontSize: '0.6rem', padding: '0.1rem 0.4rem' }}>Beta</span>
        </button>
      </div>

      {currentTab === 'vocab' && situation.vocabulary && (
        <div className="animate-fade-in vocab-section">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Master these essential words before starting the dialogue:</p>
          <div className="vocab-list">
            {situation.vocabulary.map((word: any, idx: number) => (
              <div key={idx} className="vocab-item glass-panel" style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '100px 150px 1fr', gap: '1rem', alignItems: 'center' }}>
                <span className="chinese-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{word.chinese}</span>
                <span style={{ color: 'var(--accent-primary)' }}>{word.pinyin}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{word.english}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={() => setCurrentTab('dialogue')}>
              I'm Ready → Read Dialogue
            </button>
          </div>
        </div>
      )}

      {currentTab === 'dialogue' && (
        <div className="animate-fade-in">
          <div className="chat-toggles">
            <label className="toggle-label">
              <input type="checkbox" checked={showPinyin} onChange={e => setShowPinyin(e.target.checked)} /> Pinyin
            </label>
            <label className="toggle-label">
              <input type="checkbox" checked={showHindi} onChange={e => setShowHindi(e.target.checked)} /> Hindi (हिंदी)
            </label>
            <label className="toggle-label">
              <input type="checkbox" checked={showEnglish} onChange={e => setShowEnglish(e.target.checked)} /> English
            </label>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            {situation.dialogue.map((line: any, idx: number) => {
              const isYou = line.character === 'You';
              return (
                <div key={idx} className={`dialogue-bubble-wrapper ${isYou ? 'you' : 'other'}`}>
                  <span className="speaker-name">{line.character}</span>
                  <div className={`chat-bubble ${isYou ? 'you' : 'other'}`}>
                    <div className="bubble-chinese">{line.chinese}</div>
                    {showPinyin && <div className="bubble-pinyin">{line.pinyin}</div>}
                    {showHindi && line.hindiPronunciation && <div className="bubble-hindi">{line.hindiPronunciation}</div>}
                    {showEnglish && <div className="bubble-english">{line.english}</div>}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={() => setCurrentTab('practice')}>
              Practice These Sentences
            </button>
          </div>
        </div>
      )}

      {currentTab === 'practice' && (
        <SentenceBuilder exercises={situation.exercises} />
      )}

      {currentTab === 'roleplay' && (
        <RoleplaySimulator aiPrompt={situation.aiPrompt || ''} situationTitle={situation.title} />
      )}
    </div>
  );
}
