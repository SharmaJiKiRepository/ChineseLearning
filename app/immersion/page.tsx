import Link from 'next/link';
import { immersionVideos } from '@/data/immersion';
import { Metadata } from 'next';
import './immersion.css';

export const metadata: Metadata = {
  title: 'Immersion Hub | LearnMandarinFree',
  description: 'Watch native Chinese videos with interactive dual-subtitles. Click on any word to translate it and save it to your flashcards.',
};

export default async function ImmersionHub({ searchParams }: { searchParams: Promise<{ level?: string }> }) {
  const { level } = await searchParams;
  const targetLevel = level ? parseInt(level) : null;
  
  const hsk1Videos = immersionVideos.filter(v => v.level === 1);
  const hsk2Videos = immersionVideos.filter(v => v.level === 2);
  const hsk3Videos = immersionVideos.filter(v => v.level === 3);
  const hsk4Videos = immersionVideos.filter(v => v.level === 4);

  return (
    <div className="immersion-container animate-fade-in">
      <div className="immersion-header">
        <h1>Video <span className="text-gradient">Immersion</span></h1>
        <p>
          Learn Chinese the natural way. Watch real native videos, vlogs, and shows with interactive dual-subtitles. 
          Click on any word you don't know to instantly translate it.
        </p>
      </div>

      <div className="grammar-levels">
        {/* HSK 1 */}
        {(!targetLevel || targetLevel === 1) && hsk1Videos.length > 0 && (
          <section className="level-section">
            <h2><span className="level-badge hsk1">HSK 1</span> Beginner Immersion</h2>
            <div className="video-grid">
              {hsk1Videos.map((video, idx) => (
                <VideoCard key={video.id} video={video} idx={idx} />
              ))}
            </div>
          </section>
        )}

        {/* HSK 2 */}
        {(!targetLevel || targetLevel === 2) && hsk2Videos.length > 0 && (
          <section className="level-section">
            <h2><span className="level-badge hsk2">HSK 2</span> Elementary Immersion</h2>
            <div className="video-grid">
              {hsk2Videos.map((video, idx) => (
                <VideoCard key={video.id} video={video} idx={idx} />
              ))}
            </div>
          </section>
        )}
        
        {/* HSK 3 */}
        {(!targetLevel || targetLevel === 3) && hsk3Videos.length > 0 && (
          <section className="level-section">
            <h2><span className="level-badge hsk3">HSK 3</span> Intermediate Immersion</h2>
            <div className="video-grid">
              {hsk3Videos.map((video, idx) => (
                <VideoCard key={video.id} video={video} idx={idx} />
              ))}
            </div>
          </section>
        )}

        {/* HSK 4 */}
        {(!targetLevel || targetLevel === 4) && hsk4Videos.length > 0 && (
          <section className="level-section">
            <h2><span className="level-badge hsk4">HSK 4</span> Advanced Immersion</h2>
            <div className="video-grid">
              {hsk4Videos.map((video, idx) => (
                <VideoCard key={video.id} video={video} idx={idx} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function VideoCard({ video, idx }: { video: any, idx: number }) {
  return (
    <Link
      href={`/immersion/${video.id}`}
      className={`video-card animate-slide-up stagger-${Math.min(idx + 1, 6)}`}
      style={{ opacity: 0 } as React.CSSProperties}
    >
      <div className="video-thumbnail">
        <img src={video.thumbnailUrl} alt={video.title} />
        <div className="play-overlay">
          <span className="play-icon">▶</span>
        </div>
      </div>
      
      <div className="video-info">
        <span className={`level-badge hsk${video.level}`}>HSK {video.level}</span>
        <h3 className="video-title">{video.title}</h3>
        <p className="video-desc">{video.description}</p>
      </div>
    </Link>
  );
}
