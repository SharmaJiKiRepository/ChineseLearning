'use client';

import { useState } from 'react';
import './Song.css';

interface SongLine {
    id: string;
    original: string;
    chinese?: string;
    pinyin?: string;
    meaning?: string;
    pronunciation?: string;
    hindiPronunciation?: string;
    isLoading?: boolean;
    error?: string;
}

export default function SongMode() {
    const [lyrics, setLyrics] = useState('');
    const [processedLines, setProcessedLines] = useState<SongLine[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleProcessLyrics = async () => {
        if (!lyrics.trim()) return;

        // Split by newlines and filter out empty lines
        const lines = lyrics.split('\n').filter(line => line.trim().length > 0);

        // Initialize processing state
        const initialLines = lines.map((line, index) => ({
            id: index.toString(),
            original: line,
            isLoading: true
        }));

        setProcessedLines(initialLines);
        setIsProcessing(true);

        // Process lines sequentially to avoid overloading the mock API or a real API
        for (let i = 0; i < initialLines.length; i++) {
            const line = initialLines[i];
            try {
                const res = await fetch('/api/pipeline', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: line.original, context: 'song_mode' })
                });

                const data = await res.json();

                if (!res.ok) throw new Error(data.error);

                setProcessedLines(prev => prev.map(pLine =>
                    pLine.id === line.id
                        ? {
                            ...pLine,
                            isLoading: false,
                            chinese: data.Chinese,
                            pinyin: data.Pinyin,
                            meaning: data.Meaning,
                            pronunciation: data.PronunciationGuide,
                            hindiPronunciation: data.HindiPronunciation
                        }
                        : pLine
                ));
            } catch (err: any) {
                setProcessedLines(prev => prev.map(pLine =>
                    pLine.id === line.id
                        ? { ...pLine, isLoading: false, error: err.message }
                        : pLine
                ));
            }
        }

        setIsProcessing(false);
    };

    return (
        <div className="song-container animate-fade-in">
            <div className="song-header">
                <h1 className="text-gradient">Song Mode</h1>
                <p>Paste lyrics to generate line-by-line singable pronunciation</p>
            </div>

            <div className="song-input-area glass-panel">
                <textarea
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                    placeholder="Paste Chinese lyrics here...&#10;我爱你&#10;我想你"
                    className="song-textarea"
                    rows={6}
                />
                <button
                    onClick={handleProcessLyrics}
                    disabled={isProcessing || !lyrics.trim()}
                    className="song-button"
                >
                    {isProcessing ? 'Processing Lyrics...' : 'Generate Pronunciation'}
                </button>
            </div>

            {processedLines.length > 0 && (
                <div className="lyrics-display">
                    {processedLines.map((line) => (
                        <div key={line.id} className="lyric-line glass-panel">
                            {line.isLoading ? (
                                <div className="lyric-loading">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            ) : line.error ? (
                                <div className="lyric-error">Error: {line.error}</div>
                            ) : (
                                <div className="lyric-content">
                                    <div className="lyric-chinese">{line.chinese}</div>
                                    <div className="lyric-pinyin">{line.pinyin}</div>
                                    <div className="lyric-pronunciation text-gradient">"{line.pronunciation}"</div>
                                    {line.hindiPronunciation && (
                                        <div className="lyric-hindi">"{line.hindiPronunciation}"</div>
                                    )}
                                    <div className="lyric-meaning">{line.meaning}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
