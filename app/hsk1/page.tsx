'use client';

import { useState } from 'react';
import './HSK1.css';

const HSK1_WORDS = [
    { chinese: '爱', pinyin: 'ài', meaning: 'to love' },
    { chinese: '八', pinyin: 'bā', meaning: 'eight' },
    { chinese: '爸爸', pinyin: 'bà ba', meaning: 'dad, father' },
    { chinese: '杯子', pinyin: 'bēi zi', meaning: 'cup, glass' },
    { chinese: '北京', pinyin: 'běi jīng', meaning: 'Beijing' },
    { chinese: '本', pinyin: 'běn', meaning: 'measure word for books' },
    { chinese: '不客气', pinyin: 'bù kè qì', meaning: "you're welcome" },
    { chinese: '不', pinyin: 'bù', meaning: 'not, no' },
    { chinese: '菜', pinyin: 'cài', meaning: 'dish, cuisine' },
    { chinese: '茶', pinyin: 'chá', meaning: 'tea' },
    { chinese: '吃', pinyin: 'chī', meaning: 'to eat' },
    { chinese: '出租车', pinyin: 'chū zū chē', meaning: 'taxi' },
    { chinese: '打电话', pinyin: 'dǎ diàn huà', meaning: 'to make a phone call' },
    { chinese: '大', pinyin: 'dà', meaning: 'big, large' },
    { chinese: '的', pinyin: 'de', meaning: 'structural particle (possessive)' },
];

interface AIResponse {
    Chinese: string;
    Pinyin: string;
    Meaning: string;
    PronunciationGuide: string;
    ToneExplanation: string;
    HindiPronunciation?: string;
    error?: string;
}

export default function HSK1Mode() {
    const [selectedWord, setSelectedWord] = useState<typeof HSK1_WORDS[0] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [flashcard, setFlashcard] = useState<AIResponse | null>(null);

    const handleWordClick = async (word: typeof HSK1_WORDS[0]) => {
        setSelectedWord(word);
        setFlashcard(null);
        setIsLoading(true);

        try {
            const res = await fetch('/api/pipeline', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: word.chinese, context: 'learn_mode' })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to generate');

            setFlashcard(data);
        } catch (err: any) {
            setFlashcard({ error: err.message } as AIResponse);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="hsk-container animate-fade-in">
            <div className="hsk-header">
                <h1 className="text-gradient">HSK 1 Complete Course</h1>
                <p>Master the essential 150 words. Click any word to generate an AI tutoring flashcard.</p>
            </div>

            <div className="hsk-layout">
                {/* Vocabulary Grid */}
                <div className="hsk-grid glass-panel">
                    {HSK1_WORDS.map((word, idx) => (
                        <button
                            key={idx}
                            className={`hsk-word-card ${selectedWord?.chinese === word.chinese ? 'active' : ''}`}
                            onClick={() => handleWordClick(word)}
                        >
                            <div className="word-chinese">{word.chinese}</div>
                            <div className="word-pinyin">{word.pinyin}</div>
                        </button>
                    ))}
                </div>

                {/* AI Tutor Panel */}
                <div className="hsk-tutor-panel glass-panel">
                    {!selectedWord ? (
                        <div className="tutor-empty">
                            <div className="empty-icon">👈</div>
                            <p>Select a word to start learning</p>
                        </div>
                    ) : isLoading ? (
                        <div className="tutor-loading">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    ) : flashcard && !flashcard.error ? (
                        <div className="tutor-flashcard animate-slide-up">
                            <div className="tutor-chinese">{flashcard.Chinese}</div>
                            <div className="tutor-pinyin">{flashcard.Pinyin}</div>
                            <div className="tutor-meaning">{flashcard.Meaning}</div>

                            <div className="tutor-details">
                                <div className="detail-item">
                                    <span className="detail-label">Pronunciation</span>
                                    <span className="detail-value text-gradient">{flashcard.PronunciationGuide}</span>
                                </div>
                                {flashcard.HindiPronunciation && (
                                    <div className="detail-item">
                                        <span className="detail-label">Hindi</span>
                                        <span className="detail-value">{flashcard.HindiPronunciation}</span>
                                    </div>
                                )}
                                <div className="detail-item">
                                    <span className="detail-label">Tones</span>
                                    <span className="detail-value">{flashcard.ToneExplanation}</span>
                                </div>
                            </div>
                        </div>
                    ) : flashcard?.error ? (
                        <div className="tutor-error">{flashcard.error}</div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
