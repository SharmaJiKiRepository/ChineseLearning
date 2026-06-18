'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HSK_LEVELS } from '@/data';
import { useGamification } from '@/lib/gamification';
import './dashboard.css';

interface ProgressData {
  wordProgress: { wordId: string; lastResult: string | null; repetitions: number }[];
  lessonProgress: { hskLevel: number; unit: number; completed: boolean }[];
  quizResults: { hskLevel: number; unit: number; score: number; total: number; createdAt: string }[];
  user: { streak: number; lastStudyDate: string | null };
}

export default function DashboardPage() {
  const [data, setData] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);
  const { state: gamification } = useGamification();

  useEffect(() => {
    fetch('/api/progress')
      .then(r => r.json())
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="dashboard-page animate-fade-in">
        <div className="dash-loading">Loading your progress...</div>
      </div>
    );
  }

  if (data && 'error' in data) {
    return (
      <div className="dashboard-page animate-fade-in">
        <div className="dash-loading" style={{ color: 'var(--error)' }}>
          Failed to load progress. Please ensure database is connected.
        </div>
      </div>
    );
  }

  const wordCount = data?.wordProgress?.length ?? 0;
  const correctWords = data?.wordProgress?.filter(w => w.lastResult === 'correct').length ?? 0;
  const lessonsCompleted = data?.lessonProgress?.filter(l => l.completed).length ?? 0;
  const streak = gamification.streak > 0 ? gamification.streak : (data?.user?.streak ?? 0);
  
  const xpForNextLevel = gamification.level * 100;
  const xpProgressPct = Math.min(100, Math.round((gamification.xp / xpForNextLevel) * 100));

  return (
    <div className="dashboard-page animate-fade-in">
      <div className="dash-header">
        <h1>Your <span className="text-gradient">Progress</span></h1>
        <p>Track your Chinese learning journey across all HSK levels. Keep learning to earn XP and level up!</p>
      </div>

      {/* Stats cards */}
      <div className="stats-grid">
        <div className="stat-card glass-panel animate-slide-up stagger-1" style={{ opacity: 0 }}>
          <div className="stat-icon streak-flame">🔥</div>
          <div className="stat-value">{streak}</div>
          <div className="stat-name">Day Streak</div>
        </div>
        <div className="stat-card glass-panel animate-slide-up stagger-2" style={{ opacity: 0 }}>
          <div className="stat-icon xp-star">⭐</div>
          <div className="stat-value">{gamification.xp}</div>
          <div className="stat-name">Total XP</div>
          <div className="xp-progress-bar-container">
            <div className="xp-progress-bar" style={{ width: `${xpProgressPct}%` }}></div>
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>
            {gamification.xp} / {xpForNextLevel} to next level
          </div>
        </div>
        <div className="stat-card glass-panel animate-slide-up stagger-3" style={{ opacity: 0 }}>
          <div className="stat-icon">👑</div>
          <div className="stat-value">Lvl {gamification.level}</div>
          <div className="stat-name">Fluency Level</div>
        </div>
        <div className="stat-card glass-panel animate-slide-up stagger-4" style={{ opacity: 0 }}>
          <div className="stat-icon">📝</div>
          <div className="stat-value">{wordCount}</div>
          <div className="stat-name">Words Studied</div>
        </div>
        <div className="stat-card glass-panel animate-slide-up stagger-5" style={{ opacity: 0 }}>
          <div className="stat-icon">✅</div>
          <div className="stat-value">{lessonsCompleted}</div>
          <div className="stat-name">Lessons Completed</div>
        </div>
        <div className="stat-card glass-panel animate-slide-up stagger-6" style={{ opacity: 0 }}>
          <div className="stat-icon">🎯</div>
          <div className="stat-value">{wordCount > 0 ? Math.round((correctWords / wordCount) * 100) : 0}%</div>
          <div className="stat-name">Accuracy</div>
        </div>
      </div>

      {/* Per-level progress */}
      <div className="level-progress-section">
        <h2 className="section-title">Level Progress</h2>
        <div className="level-progress-grid">
          {HSK_LEVELS.map(level => {
            const levelLessons = data?.lessonProgress?.filter(l => l.hskLevel === level.level && l.completed) ?? [];
            const levelWords = data?.wordProgress?.filter(w => w.wordId.startsWith(`hsk${level.level}-`)) ?? [];
            const pctLessons = Math.round((levelLessons.length / level.unitCount) * 100);
            const pctWords = Math.round((levelWords.length / level.wordCount) * 100);

            return (
              <Link
                key={level.level}
                href={`/hsk/${level.level}`}
                className="level-progress-card glass-panel"
                style={{ '--level-color': level.color } as React.CSSProperties}
              >
                <div className="lp-header">
                  <span className="lp-badge" style={{ background: level.color }}>HSK {level.level}</span>
                  <span className="lp-subtitle">{level.subtitle}</span>
                </div>
                
                <div className="lp-rings-container">
                  <div className="progress-ring-wrapper">
                    <svg className="progress-ring" viewBox="0 0 100 100">
                      <circle className="progress-ring-circle-bg" cx="50" cy="50" r="40" />
                      <circle 
                        className="progress-ring-circle" 
                        cx="50" cy="50" r="40" 
                        style={{ stroke: level.color, strokeDasharray: 251.2, strokeDashoffset: 251.2 - (251.2 * pctWords / 100) }} 
                      />
                    </svg>
                    <div className="ring-text">
                      <div className="ring-val">{pctWords}%</div>
                      <div className="ring-lbl">Words</div>
                    </div>
                  </div>

                  <div className="progress-ring-wrapper">
                    <svg className="progress-ring" viewBox="0 0 100 100">
                      <circle className="progress-ring-circle-bg" cx="50" cy="50" r="40" />
                      <circle 
                        className="progress-ring-circle" 
                        cx="50" cy="50" r="40" 
                        style={{ stroke: level.color, strokeDasharray: 251.2, strokeDashoffset: 251.2 - (251.2 * pctLessons / 100) }} 
                      />
                    </svg>
                    <div className="ring-text">
                      <div className="ring-val">{pctLessons}%</div>
                      <div className="ring-lbl">Units</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent quiz results */}
      {(data?.quizResults?.length ?? 0) > 0 && (
        <div className="recent-quizzes">
          <h2 className="section-title">Recent Quizzes</h2>
          <div className="quiz-history-list">
            {data!.quizResults!.slice(0, 8).map((qr, idx) => {
              const pct = Math.round((qr.score / qr.total) * 100);
              const passed = pct >= 70;
              return (
                <div key={idx} className="quiz-history-item glass-panel">
                  <span className="qh-badge" style={{
                    background: HSK_LEVELS.find(l => l.level === qr.hskLevel)?.color
                  }}>HSK {qr.hskLevel}</span>
                  <span className="qh-unit">Unit {qr.unit}</span>
                  <span className="qh-score" style={{ color: passed ? 'var(--success)' : 'var(--error)' }}>
                    {qr.score}/{qr.total} ({pct}%)
                  </span>
                  <span className={`badge ${passed ? 'badge-success' : 'badge-error'}`}>
                    {passed ? 'Passed' : 'Failed'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick actions */}
      <div className="quick-actions">
        <Link href="/hsk" className="btn btn-primary btn-lg">Start Learning →</Link>
        <Link href="/review" className="btn btn-secondary btn-lg">Review Due Words</Link>
      </div>
    </div>
  );
}
