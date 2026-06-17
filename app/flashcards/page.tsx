import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import './flashcards.css';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function FlashcardsPage() {
  const mockUser = await prisma.user.findFirst();
  let flashcards: any[] = [];
  
  if (mockUser) {
    flashcards = await prisma.wordProgress.findMany({
      where: { userId: mockUser.id },
      orderBy: { createdAt: 'desc' }
    });
  }

  const newCards = flashcards.filter(f => f.repetitions === 0);
  const learningCards = flashcards.filter(f => f.repetitions > 0 && f.interval < 21);
  const masteredCards = flashcards.filter(f => f.interval >= 21);
  const dueCards = flashcards.filter(f => new Date(f.nextReview) <= new Date());

  return (
    <div className="flashcards-page max-w-container animate-fade-in">
      <div className="page-header">
        <h1>Flashcards <span className="text-gradient">Library</span></h1>
        <p className="text-secondary">Manage your saved vocabulary from Immersion Hub and Grammar lessons.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <div className="stat-icon">🔥</div>
          <div className="stat-info">
            <div className="stat-value">{dueCards.length}</div>
            <div className="stat-label">Due for Review</div>
          </div>
          {dueCards.length > 0 && (
            <Link href="/review" className="btn btn-primary btn-sm stat-action">Review Now</Link>
          )}
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon">🌱</div>
          <div className="stat-info">
            <div className="stat-value">{newCards.length}</div>
            <div className="stat-label">New Words</div>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon">🧠</div>
          <div className="stat-info">
            <div className="stat-value">{learningCards.length}</div>
            <div className="stat-label">Learning</div>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon">👑</div>
          <div className="stat-info">
            <div className="stat-value">{masteredCards.length}</div>
            <div className="stat-label">Mastered</div>
          </div>
        </div>
      </div>

      <div className="library-section glass-panel">
        <div className="library-header">
          <h2>All Saved Words ({flashcards.length})</h2>
          <div className="library-filters">
            <button className="badge badge-info">All</button>
            <button className="badge badge-success">Due</button>
            <button className="badge badge-warning">Mastered</button>
          </div>
        </div>

        {flashcards.length === 0 ? (
          <div className="empty-state">
            <div className="empty-emoji">📚</div>
            <h3>Your library is empty</h3>
            <p>Go to the Immersion Hub or Grammar lessons and click "Save to Flashcards" on words you want to learn!</p>
            <Link href="/immersion" className="btn btn-primary">Go to Immersion Hub</Link>
          </div>
        ) : (
          <div className="cards-grid">
            {flashcards.map(card => (
              <div key={card.id} className="word-card">
                <div className="word-card-chinese">{card.wordId}</div>
                <div className="word-card-meta">
                  <span className={`status-dot ${new Date(card.nextReview) <= new Date() ? 'due' : 'wait'}`}></span>
                  {new Date(card.nextReview) <= new Date() ? 'Due' : `Int: ${card.interval}d`}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
