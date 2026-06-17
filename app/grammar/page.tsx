import Link from 'next/link';
import { grammarPoints } from '@/data/grammar';
import { Metadata } from 'next';
import './grammar.css';

export const metadata: Metadata = {
  title: 'Grammar Wiki | LearnMandarinFree',
  description: 'Master Chinese grammar rules with interactive formulas, examples, and built-in quizzes.',
};

export default async function GrammarWiki({ searchParams }: { searchParams: Promise<{ level?: string }> }) {
  const { level } = await searchParams;
  const targetLevel = level ? parseInt(level) : null;
  
  const hsk1Grammar = grammarPoints.filter(g => g.hskLevel === 1);
  const hsk2Grammar = grammarPoints.filter(g => g.hskLevel === 2);
  const hsk3Grammar = grammarPoints.filter(g => g.hskLevel === 3);
  const hsk4Grammar = grammarPoints.filter(g => g.hskLevel === 4);

  return (
    <div className="grammar-container animate-fade-in">
      <div className="grammar-header">
        <h1>Grammar <span className="text-gradient">Wiki</span></h1>
        <p>
          Say goodbye to boring textbooks. Learn Chinese grammar through interactive formulas, real-world examples, and instant quizzes.
        </p>
      </div>

      <div className="level-filters">
        <Link href="/grammar" className={`filter-btn ${!targetLevel ? 'active' : ''}`}>All Levels</Link>
        <Link href="/grammar?level=1" className={`filter-btn ${targetLevel === 1 ? 'active' : ''}`}>HSK 1</Link>
        <Link href="/grammar?level=2" className={`filter-btn ${targetLevel === 2 ? 'active' : ''}`}>HSK 2</Link>
        <Link href="/grammar?level=3" className={`filter-btn ${targetLevel === 3 ? 'active' : ''}`}>HSK 3</Link>
        <Link href="/grammar?level=4" className={`filter-btn ${targetLevel === 4 ? 'active' : ''}`}>HSK 4</Link>
      </div>

      <div className="grammar-levels">
        {/* HSK 1 */}
        {(!targetLevel || targetLevel === 1) && hsk1Grammar.length > 0 && (
        <section className="level-section">
          <h2><span className="level-badge hsk1">HSK 1</span> Beginner Grammar</h2>
          <div className="grammar-grid">
            {hsk1Grammar.map(g => (
              <Link href={`/grammar/${g.id}`} key={g.id} className="grammar-card">
                <div className="grammar-card-header">
                  <h3>{g.title}</h3>
                  <span className="unit-tag">Unit {g.unit}</span>
                </div>
                <div className="grammar-pattern">{g.pattern}</div>
              </Link>
            ))}
          </div>
        </section>
        )}

        {/* HSK 2 */}
        {(!targetLevel || targetLevel === 2) && hsk2Grammar.length > 0 && (
        <section className="level-section">
          <h2><span className="level-badge hsk2">HSK 2</span> Elementary Grammar</h2>
          <div className="grammar-grid">
            {hsk2Grammar.map(g => (
              <Link href={`/grammar/${g.id}`} key={g.id} className="grammar-card">
                <div className="grammar-card-header">
                  <h3>{g.title}</h3>
                  <span className="unit-tag">Unit {g.unit}</span>
                </div>
                <div className="grammar-pattern">{g.pattern}</div>
              </Link>
            ))}
          </div>
        </section>
        )}
        
        {/* HSK 3 */}
        {(!targetLevel || targetLevel === 3) && hsk3Grammar.length > 0 && (
        <section className="level-section">
          <h2><span className="level-badge hsk3">HSK 3</span> Intermediate Grammar</h2>
          <div className="grammar-grid">
            {hsk3Grammar.map(g => (
              <Link href={`/grammar/${g.id}`} key={g.id} className="grammar-card">
                <div className="grammar-card-header">
                  <h3>{g.title}</h3>
                  <span className="unit-tag">Unit {g.unit}</span>
                </div>
                <div className="grammar-pattern">{g.pattern}</div>
              </Link>
            ))}
          </div>
        </section>
        )}

        {/* HSK 4 */}
        {(!targetLevel || targetLevel === 4) && hsk4Grammar.length > 0 && (
        <section className="level-section">
          <h2><span className="level-badge hsk4">HSK 4</span> Advanced Grammar</h2>
          <div className="grammar-grid">
            {hsk4Grammar.map(g => (
              <Link href={`/grammar/${g.id}`} key={g.id} className="grammar-card">
                <div className="grammar-card-header">
                  <h3>{g.title}</h3>
                  <span className="unit-tag">Unit {g.unit}</span>
                </div>
                <div className="grammar-pattern">{g.pattern}</div>
              </Link>
            ))}
          </div>
        </section>
        )}
      </div>
    </div>
  );
}
