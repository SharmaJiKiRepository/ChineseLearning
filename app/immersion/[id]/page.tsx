'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { getImmersionVideoById } from '@/data/immersion';
import YouTube from 'react-youtube';
import '../immersion.css';

export default function ImmersionVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const video = getImmersionVideoById(id);
  const [currentTime, setCurrentTime] = useState(0);
  const [savingWord, setSavingWord] = useState<string | null>(null);
  const playerRef = useRef<any>(null);

  if (!video) notFound();

  const handleSaveWord = async (e: React.MouseEvent, chinese: string) => {
    e.stopPropagation(); // prevent seek
    setSavingWord(chinese);
    try {
      await fetch('/api/flashcards/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wordId: chinese })
      });
      // Could show a toast, but we'll just indicate success briefly
      setTimeout(() => setSavingWord(null), 1000);
    } catch (err) {
      console.error(err);
      setSavingWord(null);
    }
  };

  const handleStateChange = (event: any) => {
    // Start interval to track time when playing
    if (event.data === 1) { // 1 = playing
      setInterval(() => {
        if (event.target.getCurrentTime) {
          setCurrentTime(event.target.getCurrentTime());
        }
      }, 500);
    }
  };

  const seekTo = async (time: number) => {
    if (playerRef.current) {
      const player = await playerRef.current.internalPlayer;
      if (player) {
        player.seekTo(time);
        player.playVideo();
      }
    }
  };

  return (
    <div className="max-w-container" style={{ padding: '2rem 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      <Link href="/immersion" style={{ color: 'var(--text-tertiary)', marginBottom: '1.5rem', display: 'inline-block' }}>
        ← Back to Video Hub
      </Link>

      <div style={{ marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{video.title}</h1>
      </div>

      <div className="player-layout">
        {/* Left Side: Video Player */}
        <div className="video-section">
          <div className="video-container">
            <YouTube 
              ref={playerRef}
              videoId={video.youtubeId} 
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                  controls: 1,
                  rel: 0,
                  modestbranding: 1
                }
              }}
              onStateChange={handleStateChange}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <p className="text-tertiary">{video.description}</p>
          </div>
        </div>

        {/* Right Side: Interactive Transcript */}
        <div className="transcript-panel">
          <div className="transcript-header">
            <h3>Interactive Transcript</h3>
            <p className="text-tertiary" style={{ fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>
              Click any line to jump, hover any word to translate.
            </p>
          </div>
          
          <div className="transcript-content">
            {video.transcript.map((line, idx) => {
              const isActive = currentTime >= line.startTime && currentTime <= line.endTime;
              
              return (
                <div 
                  key={idx} 
                  className={`transcript-line ${isActive ? 'active' : ''}`}
                  onClick={() => seekTo(line.startTime)}
                >
                  <div className="interactive-chinese">
                    {line.words.map((word, wIdx) => (
                      <div key={wIdx} className="interactive-word" style={{ position: 'relative' }}>
                        <span className="pinyin">{word.pinyin}</span>
                        <span>{word.chinese}</span>
                        
                        <div className="word-tooltip">
                          <div className="word-tooltip-meaning">{word.meaning}</div>
                          {word.hskLevel && <div className="word-tooltip-level">HSK {word.hskLevel}</div>}
                          <div style={{ marginTop: '0.5rem' }}>
                            <button 
                              className="btn btn-primary" 
                              style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }} 
                              onClick={(e) => handleSaveWord(e, word.chinese)}
                              disabled={savingWord === word.chinese}
                            >
                              {savingWord === word.chinese ? '✅ Saved!' : '+ Save Word'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="line-english">{line.english}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
