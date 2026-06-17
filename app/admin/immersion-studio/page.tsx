'use client';

import { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import './studio.css';

interface SentenceSync {
  text: string;
  startTime: number;
  endTime: number;
}

export default function ImmersionStudio() {
  const [youtubeId, setYoutubeId] = useState('RT1yYLfqNhU');
  const [rawText, setRawText] = useState('');
  const [sentences, setSentences] = useState<SentenceSync[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const playerRef = useRef<any>(null);

  // Split raw text by punctuation
  const handleSplit = () => {
    const parts = rawText
      .replace(/[\n\r]+/g, '')
      .split(/([。！？.!?]+)/)
      .filter(Boolean);
      
    const parsed: SentenceSync[] = [];
    for (let i = 0; i < parts.length; i += 2) {
      const text = parts[i] + (parts[i+1] || '');
      if (text.trim()) {
        parsed.push({ text: text.trim(), startTime: 0, endTime: 0 });
      }
    }
    setSentences(parsed);
    setActiveIdx(0);
  };

  const fetchTranscript = async () => {
    setIsFetching(true);
    setFetchError('');
    try {
      const res = await fetch('/api/fetch-transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId: youtubeId })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      
      setRawText(data.text);
      setFetchError('✅ Transcript fetched! Please add punctuation (periods, question marks) before clicking Split.');
    } catch (err: any) {
      setFetchError('❌ ' + err.message + ' (Note: YouTube disables transcripts for many kids videos like Peppa Pig. Try ID: aTiOxfqIaB8)');
    }
    setIsFetching(false);
  };

  const startSync = async () => {
    setIsSyncing(true);
    setActiveIdx(0);
    if (playerRef.current) {
      const player = await playerRef.current.internalPlayer;
      if (player) {
        player.playVideo();
        player.seekTo(0);
      }
    }
  };

  const handleKeyPress = async (e: KeyboardEvent) => {
    if (e.code === 'Space' && isSyncing && activeIdx < sentences.length) {
      e.preventDefault(); // prevent scroll
      if (!playerRef.current) return;
      
      const player = await playerRef.current.internalPlayer;
      if (!player) return;

      const currentTime = await player.getCurrentTime();
      
      setSentences(prev => {
        const next = [...prev];
        // The end time of current sentence is NOW.
        next[activeIdx].endTime = currentTime;
        
        // If it's not the first sentence, its start time is the previous sentence's end time.
        if (activeIdx > 0) {
          next[activeIdx].startTime = next[activeIdx - 1].endTime;
        } else {
          next[activeIdx].startTime = 0;
        }
        return next;
      });

      if (activeIdx === sentences.length - 1) {
        setIsSyncing(false);
        player.pauseVideo();
      }
      setActiveIdx(prev => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isSyncing, activeIdx, sentences.length]);

  const processWithAI = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch('/api/immersion-studio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentences })
      });
      const data = await res.json();
      setJsonOutput(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
      alert('Error processing with AI');
    }
    setIsProcessing(false);
  };

  return (
    <div className="studio-container">
      <div className="studio-header">
        <h1>Immersion Studio (Tap-to-Sync)</h1>
        <p className="text-secondary">Automate perfectly timed interactive subtitles using Gemini AI.</p>
      </div>

      <div className="studio-grid">
        {/* Left Panel: Setup & Video */}
        <div className="panel">
          <h2 className="panel-title">1. Setup Video & Text</h2>
          
          <div className="form-group">
            <label className="form-label">YouTube ID</label>
            <input 
              type="text" 
              className="form-input" 
              value={youtubeId}
              onChange={(e) => setYoutubeId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label className="form-label" style={{ marginBottom: 0 }}>Raw Chinese Transcript</label>
              <button 
                className="btn btn-secondary" 
                style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}
                onClick={fetchTranscript}
                disabled={isFetching || !youtubeId}
              >
                {isFetching ? 'Fetching...' : '📥 Fetch from YouTube'}
              </button>
            </div>
            {fetchError && (
              <div style={{ fontSize: '0.85rem', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px', background: fetchError.startsWith('❌') ? 'rgba(231, 76, 60, 0.2)' : 'rgba(46, 204, 113, 0.2)', color: fetchError.startsWith('❌') ? '#e74c3c' : '#2ecc71' }}>
                {fetchError}
              </div>
            )}
            <textarea 
              className="form-textarea" 
              placeholder="Paste Chinese text here or click Fetch..."
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
            />
          </div>
          
          <button className="btn btn-primary" onClick={handleSplit} style={{ marginBottom: '2rem' }}>
            Split into Sentences
          </button>

          <div className="video-container">
            <YouTube 
              ref={playerRef}
              videoId={youtubeId} 
              opts={{ width: '100%', height: '100%', playerVars: { controls: 1 } }}
            />
          </div>
        </div>

        {/* Right Panel: Sync & Process */}
        <div className="panel">
          <h2 className="panel-title">2. Tap to Sync</h2>
          
          {sentences.length === 0 ? (
            <p className="text-tertiary">Paste text and click Split to begin.</p>
          ) : (
            <>
              <div className="sentences-list">
                {sentences.map((s, idx) => (
                  <div key={idx} className={`sentence-item ${idx === activeIdx ? 'active' : ''} ${s.endTime > 0 ? 'synced' : ''}`}>
                    <div className="sentence-time">
                      [{s.startTime.toFixed(2)}s - {s.endTime.toFixed(2)}s]
                    </div>
                    <div className="sentence-text">{s.text}</div>
                  </div>
                ))}
              </div>

              <div className="sync-controls">
                <div>
                  <button 
                    className={`btn ${isSyncing ? 'btn-secondary' : 'btn-primary'}`} 
                    onClick={startSync}
                    disabled={isSyncing}
                  >
                    {isSyncing ? 'Syncing (Press Spacebar...)' : 'Start Syncing'}
                  </button>
                  <p className="text-tertiary" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    Press SPACEBAR exactly when the highlighted sentence FINISHES speaking.
                  </p>
                </div>
                
                <button 
                  className="btn btn-primary" 
                  style={{ background: 'var(--success)' }}
                  onClick={processWithAI}
                  disabled={isProcessing || isSyncing || sentences.some(s => s.endTime === 0)}
                >
                  {isProcessing ? 'Processing...' : 'Process with AI'}
                </button>
              </div>
            </>
          )}

          {jsonOutput && (
            <div style={{ marginTop: '2rem' }}>
              <h2 className="panel-title">3. Output JSON</h2>
              <p className="text-tertiary" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Copy and paste this into `data/immersion.ts` inside the `transcript` array!
              </p>
              <textarea className="json-output" readOnly value={jsonOutput} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
