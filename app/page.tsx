import Link from 'next/link';
import { HSK_LEVELS } from '@/data';
import './home.css';

export default function Home() {
  const features = [
    { href: '/hsk', emoji: '📚', title: 'HSK Courses', desc: 'Structured curriculum from HSK 1 to HSK 4 with 1,200 words.', color: 'var(--accent-primary)' },
    { href: '/dashboard', emoji: '📊', title: 'Progress Dashboard', desc: 'Track streaks, accuracy, and see your growth over time.', color: 'var(--accent-blue)' },
    { href: '/review', emoji: '🔄', title: 'Spaced Repetition', desc: 'Smart review system that shows hard words more often.', color: 'var(--accent-teal)' },
    { href: '/situations', emoji: '🗣️', title: 'Situations & Roleplay', desc: 'Interactive daily life dialogues and AI roleplay.', color: 'var(--accent-gradient)' },
    { href: '/learn', emoji: '🃏', title: 'AI Flashcards', desc: 'Deep pronunciation guides and context for every word.', color: 'var(--accent-secondary)' },
    { href: '/reading', emoji: '📖', title: 'Reading Practice', desc: 'Graded passages with toggleable pinyin and translation.', color: 'var(--success)' },
    { href: '/chat', emoji: '💬', title: 'AI Chat', desc: 'Practice conversation with an AI tutor who remembers you.', color: 'var(--accent-purple)' },
    { href: '/song', emoji: '🎵', title: 'Song Mode', desc: 'Learn Chinese through music with line-by-line pronunciation.', color: 'var(--warning)' },
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          Master Mandarin Through <br />
          <span className="text-gradient">Immersion</span>
        </h1>
        <p className="hero-subtitle">
          Free, open-source platform combining spaced repetition, contextual reading, and roleplay.
        </p>
        <div className="hero-cta">
          <Link href="/hsk1" className="btn btn-primary">
            Start Learning Free →
          </Link>
          <Link href="/review" className="btn btn-secondary">
            Review Vocab
          </Link>
        </div>
      </section>

      {/* HSK Level Preview */}
      <section className="level-preview">
        <div className="level-preview-grid">
          {HSK_LEVELS.map((level, idx) => (
            <Link
              key={level.level}
              href={`/hsk/${level.level}`}
              className={`level-mini-card glass-panel animate-slide-up stagger-${idx + 1}`}
              style={{ '--level-color': level.color, opacity: 0 } as React.CSSProperties}
            >
              <div className="lmc-badge" style={{ background: level.color }}>HSK {level.level}</div>
              <div className="lmc-info">
                <span className="lmc-name">{level.subtitle}</span>
                <span className="lmc-count">{level.wordCount} words • {level.unitCount} units</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="features-section">
        <h2 className="features-heading">Everything You Need to <span className="text-gradient">Learn Chinese</span></h2>
        <div className="features-grid">
          {features.map((feat, idx) => (
            <Link
              key={feat.href}
              href={feat.href}
              className={`feature-card glass-panel animate-slide-up stagger-${Math.min(idx + 1, 6)}`}
              style={{ opacity: 0 }}
            >
              <span className="feature-emoji">{feat.emoji}</span>
              <h3 style={{ color: feat.color }}>{feat.title}</h3>
              <p>{feat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bottom-cta glass-panel">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of learners mastering Chinese with our AI-powered platform.</p>
        <Link href="/hsk" className="btn btn-primary btn-lg">Begin Learning →</Link>
      </section>
    </div>
  );
}
