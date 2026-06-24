'use client';

import { useState } from 'react';
import './essay.css';

interface Correction { original: string; better: string; reason: string; }
interface GraderResponse { score: number; overall_feedback: string; corrections: Correction[]; }

const MAX_LENGTH = 2000;

export default function EssayGraderPage() {
  const [essayText, setEssayText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GraderResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const charCount = essayText.length;
  const isOverLimit = charCount > MAX_LENGTH;
  const canSubmit = charCount >= 5 && !isOverLimit && !isLoading;

  const handleGrade = async () => {
    if (!canSubmit) return;
    setIsLoading(true); setResult(null); setError(null);
    try {
      const res = await fetch('/api/essay-grader', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ essay: essayText })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to grade essay');
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) =>
    score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444';

  const getScoreLabel = (score: number) =>
    score >= 90 ? 'Excellent!' : score >= 80 ? 'Great Job!' : score >= 60 ? 'Good Effort' : score >= 40 ? 'Keep Practicing' : 'Needs Work';

  return (
    <div className="essay-container animate-fade-in">
      <div className="essay-header">
        <div className="essay-badge">✍️ AI-Powered Writing Analysis</div>
        <h1>Dynamic <span className="text-gradient">Essay Grader</span></h1>
        <p className="essay-subtitle">
          Practice your Chinese writing. Paste a paragraph below, and our AI will grade it, 
          point out awkward phrasing, and suggest native alternatives.
        </p>
      </div>

      <div className="essay-layout">
        <div className="essay-input-section glass-card">
          <div className="textarea-header">
            <span className="textarea-label">Your Chinese Text</span>
            <span className={`char-counter ${isOverLimit ? 'over-limit' : charCount > MAX_LENGTH * 0.9 ? 'near-limit' : ''}`}>
              {charCount.toLocaleString()} / {MAX_LENGTH.toLocaleString()}
            </span>
          </div>
          <textarea
            className="essay-textarea"
            placeholder="Type your Chinese text here... (e.g., 今天天气很好，我和朋友一起去公园玩了。我们在公园里散步，看到了很多美丽的花。)"
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            disabled={isLoading}
            maxLength={MAX_LENGTH + 50}
          />
          {isOverLimit && (
            <p className="limit-warning">⚠️ Your text exceeds the {MAX_LENGTH} character limit. Please shorten it.</p>
          )}
          <div className="essay-actions">
            <button className="btn btn-primary grade-btn" onClick={handleGrade} disabled={!canSubmit}>
              {isLoading ? (
                <><span className="btn-spinner" /> Analyzing...</>
              ) : (
                <>🎓 Grade My Essay</>
              )}
            </button>
          </div>
          {error && <div className="error-banner animate-fade-in">❌ {error}</div>}
        </div>

        {isLoading && (
          <div className="loading-state glass-card animate-fade-in">
            <div className="loading-pulse" />
            <p className="loading-text">Nemotron is analyzing your grammar and sentence structure...</p>
            <div className="loading-steps">
              <span className="step active">Parsing</span>
              <span className="step-dot">→</span>
              <span className="step">Analyzing Grammar</span>
              <span className="step-dot">→</span>
              <span className="step">Generating Feedback</span>
            </div>
          </div>
        )}

        {result && !isLoading && (
          <div className="essay-results animate-slide-up">
            {/* Score Card */}
            <div className="score-card glass-card" style={{ '--score-color': getScoreColor(result.score) } as React.CSSProperties}>
              <div className="score-ring" style={{ '--score': result.score, '--score-color': getScoreColor(result.score) } as React.CSSProperties}>
                <svg viewBox="0 0 120 120" className="score-svg">
                  <circle cx="60" cy="60" r="54" className="score-track" />
                  <circle cx="60" cy="60" r="54" className="score-fill"
                    style={{ strokeDashoffset: `${339.292 - (339.292 * result.score / 100)}` }} />
                </svg>
                <div className="score-inner">
                  <span className="score-number">{result.score}</span>
                  <span className="score-max">/100</span>
                </div>
              </div>
              <div className="score-meta">
                <h3 style={{ color: getScoreColor(result.score) }}>{getScoreLabel(result.score)}</h3>
                <p>Grammar accuracy, native phrasing, and vocabulary usage.</p>
              </div>
            </div>

            {/* Overall Feedback */}
            <div className="feedback-card glass-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4><span className="section-icon">🎯</span> Overall Feedback</h4>
              <div className="overall-feedback">{result.overall_feedback}</div>
            </div>

            {/* Corrections */}
            {result.corrections?.length > 0 && (
              <div className="corrections-card glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h4><span className="section-icon">📝</span> Suggested Corrections <span className="correction-count">{result.corrections.length}</span></h4>
                <div className="corrections-list">
                  {result.corrections.map((corr, idx) => (
                    <div key={idx} className="correction-item animate-fade-in" style={{ animationDelay: `${0.3 + idx * 0.08}s` }}>
                      <div className="correction-row original-row">
                        <span className="correction-label error-label">✗ Original</span>
                        <span className="correction-text">{corr.original}</span>
                      </div>
                      <div className="correction-arrow">↓</div>
                      <div className="correction-row better-row">
                        <span className="correction-label success-label">✓ Better</span>
                        <span className="correction-text">{corr.better}</span>
                      </div>
                      <div className="correction-reason">
                        <span className="reason-icon">💡</span> {corr.reason}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result.corrections?.length === 0 && (
              <div className="perfect-card glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="perfect-icon">🌟</div>
                <h4>Perfect Essay!</h4>
                <p>No major grammatical errors found. Your Chinese writing is excellent!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
