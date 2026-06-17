'use client';

import { useState, useRef, useEffect } from 'react';
import './tutor.css';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export default function AITutorPage() {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: "你好！I'm your AI Chinese Tutor, powered by NVIDIA Nemotron. How can I help you study today? We can practice a conversation, review your weak words, or tackle some tough grammar." }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modelUsed, setModelUsed] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: inputText
        };

        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputText('');
        setIsLoading(true);
        setModelUsed(null);

        try {
            const res = await fetch('/api/tutor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages.map(m => ({ role: m.role, content: m.content })),
                    userContext: {
                        level: 'HSK 1', // We can grab this from context/DB later
                        weaknesses: ['tones', 'measure words']
                    }
                })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to connect to tutor');

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.response
            };

            setMessages(prev => [...prev, aiMessage]);
            setModelUsed(data._modelUsed);

        } catch (err: any) {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: `Error: ${err.message}`
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickAction = (action: string) => {
        setInputText(action);
        // We defer submit slightly so the input state updates
        setTimeout(() => {
            const form = document.getElementById('tutor-form') as HTMLFormElement;
            if (form) form.requestSubmit();
        }, 50);
    };

    return (
        <div className="tutor-container animate-fade-in">
            <div className="tutor-layout">
                
                {/* Main Chat Area */}
                <div className="tutor-chat-section glass-panel">
                    <div className="tutor-header">
                        <div className="tutor-avatar-container">
                            <div className="tutor-avatar">🧠</div>
                            {isLoading && <div className="tutor-glow-ring"></div>}
                        </div>
                        <div>
                            <h2>Personal AI Tutor</h2>
                            <div className="tutor-status">
                                {isLoading ? (
                                    <span className="status-text typing"><span className="dot"></span><span className="dot"></span><span className="dot"></span> Thinking deeply...</span>
                                ) : (
                                    <span className="status-text ready">Online</span>
                                )}
                                {modelUsed && !isLoading && (
                                    <span className="ai-powered-badge animate-scale-in">
                                        Powered by {modelUsed === 'nemotron' ? 'NVIDIA Nemotron' : 'Gemini'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="tutor-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`tutor-msg-wrapper ${msg.role} animate-slide-up`}>
                                {msg.role === 'assistant' && <div className="msg-avatar">🧠</div>}
                                <div className="tutor-bubble">
                                    {msg.content}
                                </div>
                                {msg.role === 'user' && <div className="msg-avatar">👤</div>}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="quick-actions">
                        <button className="btn btn-secondary btn-sm" onClick={() => handleQuickAction('Test me on HSK 1 vocabulary.')}>Test Vocab</button>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleQuickAction('Let\'s roleplay ordering food at a restaurant.')}>Roleplay</button>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleQuickAction('Explain when to use 了 (le).')}>Grammar: 了</button>
                    </div>

                    <form id="tutor-form" onSubmit={handleSubmit} className="tutor-input-area">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Ask me anything about Chinese..."
                            className="tutor-input glow-border"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !inputText.trim()} className="btn btn-primary tutor-send">
                            Send
                        </button>
                    </form>
                </div>

                {/* Context Sidebar */}
                <div className="tutor-context-sidebar glass-panel">
                    <h3>Your Profile</h3>
                    <div className="tutor-stats">
                        <div className="stat-card">
                            <span className="stat-label">Current Level</span>
                            <span className="level-badge hsk1">HSK 1</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-label">Words Mastered</span>
                            <span className="stat-value text-gradient">42 / 150</span>
                        </div>
                    </div>
                    
                    <div className="tutor-focus-area">
                        <h4>Focus Areas</h4>
                        <ul className="focus-list">
                            <li>🎯 3rd Tone Pronunciation</li>
                            <li>🎯 Measure words (个 vs 本)</li>
                            <li>🎯 Directional verbs</li>
                        </ul>
                    </div>

                    <div className="nemotron-promo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" alt="Nvidia Logo" className="nvidia-logo" />
                        <p>Your tutor is powered by <strong>Nemotron 3 Ultra</strong> — a 550B parameter open-weight model capable of incredibly deep reasoning and adaptive teaching.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
