'use client';

import { useState } from 'react';
import './Learn.css';

interface AIResponse {
    Chinese: string;
    Pinyin: string;
    Meaning: string;
    PronunciationGuide: string;
    ToneExplanation: string;
    HindiPronunciation?: string;
    error?: string;
}

export default function LearnMode() {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<AIResponse | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        setIsLoading(true);
        setResult(null);

        try {
            const res = await fetch('/api/pipeline', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: inputText, context: 'learn_mode' })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to generate');

            setResult(data);
        } catch (err: any) {
            setResult({ error: err.message } as AIResponse);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="learn-container animate-fade-in">
            <div className="learn-header">
                <h1 className="text-gradient">Learn Mode</h1>
                <p>Enter a Chinese word, English meaning, or sentence to generate a flashcard.</p>
            </div>

            <form onSubmit={handleSubmit} className="learn-form">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="e.g. Hello, 我想你, wǒ ài nǐ"
                    className="learn-input glass-panel"
                />
                <button type="submit" disabled={isLoading || !inputText.trim()} className="learn-button">
                    {isLoading ? 'Generating...' : 'Learn'}
                </button>
            </form>

            {result && !result.error && (
                <div className="flashcard glass-panel animate-slide-up">
                    <div className="flashcard-chinese">{result.Chinese}</div>
                    <div className="flashcard-pinyin">{result.Pinyin}</div>
                    <div className="flashcard-meaning">{result.Meaning}</div>

                    <div className="flashcard-details">
                        <div className="detail-item">
                            <span className="detail-label">Pronunciation</span>
                            <span className="detail-value text-gradient">{result.PronunciationGuide}</span>
                        </div>
                        {result.HindiPronunciation && (
                            <div className="detail-item">
                                <span className="detail-label">Hindi</span>
                                <span className="detail-value">{result.HindiPronunciation}</span>
                            </div>
                        )}
                        <div className="detail-item">
                            <span className="detail-label">Tones</span>
                            <span className="detail-value">{result.ToneExplanation}</span>
                        </div>
                    </div>
                </div>
            )}

            {result?.error && (
                <div className="error-card glass-panel">
                    {result.error}
                </div>
            )}
        </div>
    );
}
