import Link from 'next/link';
import { situations } from '@/data/situations';
import { Metadata } from 'next';
import './situations.css';

import CustomScenarioForm from './CustomScenarioForm';

export const metadata: Metadata = {
  title: 'Daily Life Conversations | LearnMandarinFree',
  description: 'Learn Chinese through immersive daily life conversations and interactive sentence building exercises.',
};

export default function SituationsHub() {
  const levels = [
    { num: 1, title: 'HSK 1: Survival', desc: 'The absolute essentials to survive your first trip to China.', badge: 'Beginner Level' },
    { num: 2, title: 'HSK 2: Daily Life', desc: 'Expanding your world and having real conversations.', badge: 'Elementary Level' },
    { num: 3, title: 'HSK 3: Intermediate', desc: 'Handle more complex interactions and expressing opinions.', badge: 'Intermediate Level' },
    { num: 4, title: 'HSK 4: Upper Intermediate', desc: 'Deep discussions, professional environments, and abstract ideas.', badge: 'Upper Intermediate' },
    { num: 5, title: 'HSK 5: Advanced Fluency', desc: 'Academic debates, societal issues, and cultural nuances.', badge: 'Advanced Fluency' },
    { num: 6, title: 'HSK 6: Mastery', desc: 'Philosophical debates, high-level negotiations, and historical analysis.', badge: 'Mastery Level' }
  ];

  return (
    <div className="situations-container animate-fade-in">
      <div className="situations-header">
        <h1>Daily Life <span className="text-gradient">Conversations</span></h1>
        <p>
          Learn Chinese exactly how it's spoken in the real world. Practice with interactive dialogues, native audio, and active recall sentence building.
        </p>
      </div>

      <CustomScenarioForm />

      {levels.map(levelInfo => {
        const levelSits = situations.filter(s => s.level === levelInfo.num);
        if (levelSits.length === 0) return null;

        return (
          <div className="level-section" key={levelInfo.num}>
            <div className="level-header">
              <span className={`level-badge hsk${levelInfo.num}`}>{levelInfo.badge}</span>
              <h2>{levelInfo.title}</h2>
              <p className="text-tertiary">{levelInfo.desc}</p>
            </div>
            
            <div className="situations-grid">
              {levelSits.map((sit, idx) => (
                <Link
                  href={`/situations/${sit.id}`}
                  key={sit.id}
                  className={`situation-card hsk${levelInfo.num} animate-slide-up stagger-${Math.min(idx + 1, 6)}`}
                  style={{ opacity: 0 } as React.CSSProperties}
                >
                  <div className="card-header">
                    <div className="card-icon">{sit.icon}</div>
                    <h3 className="card-title">{sit.title}</h3>
                  </div>
                  
                  <p className="card-desc">{sit.description}</p>
                  
                  <div className="card-stats">
                    <span className="stat-pill">💬 {sit.dialogue.length} Lines</span>
                    <span className="stat-pill">🧩 {sit.exercises.length} Exercises</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}

    </div>
  );
}
