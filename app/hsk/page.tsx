import Link from 'next/link';
import { HSK_LEVELS } from '@/data';
import './hsk-hub.css';

export const metadata = {
  title: 'HSK Courses | Learn Chinese',
  description: 'Choose your HSK level and start learning Chinese. From beginner (HSK 1) to upper intermediate (HSK 4).',
};

export default function HskHub() {
  const totalWords = HSK_LEVELS.reduce((sum, level) => sum + level.wordCount, 0);
  const totalUnits = HSK_LEVELS.reduce((sum, level) => sum + level.unitCount, 0);

  return (
    <div className="hsk-hub animate-fade-in">
      <div className="hsk-hub-header">
        <h1>Choose Your <span className="text-gradient">HSK Level</span></h1>
        <p>From zero to fluent. Pick your starting point and master Chinese step by step.</p>
      </div>

      <div className="hsk-levels-grid">
        {HSK_LEVELS.map((level, idx) => (
          <Link
            key={level.level}
            href={`/hsk/${level.level}`}
            className={`hsk-level-card glass-panel animate-slide-up stagger-${idx + 1}`}
            style={{ '--level-color': level.color } as React.CSSProperties}
          >
            <div className="level-badge" style={{ background: level.color }}>
              HSK {level.level}
            </div>
            <h2 className="level-title">{level.name}</h2>
            <span className="level-subtitle">{level.subtitle}</span>
            <p className="level-description">{level.description}</p>
            <div className="level-stats">
              <div className="level-stat">
                <span className="stat-number">{level.wordCount}</span>
                <span className="stat-label">Words</span>
              </div>
              <div className="level-stat">
                <span className="stat-number">{level.unitCount}</span>
                <span className="stat-label">Units</span>
              </div>
            </div>
            <div className="level-cta" style={{ background: level.color }}>
              Start Learning →
            </div>
          </Link>
        ))}
      </div>

      <div className="hsk-total-stats glass-panel">
        <div className="total-stat">
          <span className="total-number text-gradient">{totalWords.toLocaleString()}</span>
          <span className="total-label">Total Words</span>
        </div>
        <div className="total-divider" />
        <div className="total-stat">
          <span className="total-number text-gradient">{totalUnits}</span>
          <span className="total-label">Lesson Units</span>
        </div>
        <div className="total-divider" />
        <div className="total-stat">
          <span className="total-number text-gradient">18</span>
          <span className="total-label">Grammar Patterns</span>
        </div>
        <div className="total-divider" />
        <div className="total-stat">
          <span className="total-number text-gradient">Free</span>
          <span className="total-label">Forever</span>
        </div>
      </div>
    </div>
  );
}
