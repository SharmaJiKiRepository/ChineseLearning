'use client';

import { useState, useRef, useEffect } from 'react';
import './Chat.css';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    isAiResponse?: boolean;
    chineseContent?: string;
    pinyinContent?: string;
    pronunciation?: string;
}

export default function ChatMode() {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: '你好! What do you want to learn how to say today?' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/pipeline', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: userMessage.content,
                    context: 'chat_mode'
                })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to generate response');

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.Meaning,
                isAiResponse: true,
                chineseContent: data.Chinese,
                pinyinContent: data.Pinyin,
                pronunciation: data.PronunciationGuide
            };

            setMessages(prev => [...prev, aiMessage]);

            // Save chat history to DB via separate endpoint
            await fetch('/api/chat/history', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userMessage: userMessage.content,
                    aiResponse: JSON.stringify(data)
                })
            });

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

    return (
        <div className="chat-container animate-fade-in">
            <div className="chat-header">
                <h1 className="text-gradient">Chat Context</h1>
                <p>Ask how to say things naturally</p>
            </div>

            <div className="chat-window glass-panel">
                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message-wrapper ${msg.role}`}>
                            <div className="message-bubble">
                                {msg.isAiResponse ? (
                                    <div className="ai-structured-response">
                                        <div className="ai-chinese">{msg.chineseContent}</div>
                                        <div className="ai-pinyin">{msg.pinyinContent}</div>
                                        <div className="ai-meaning">{msg.content}</div>
                                        <div className="ai-pronunciation">{msg.pronunciation}</div>
                                    </div>
                                ) : (
                                    msg.content
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message-wrapper assistant">
                            <div className="message-bubble loading-bubble">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="chat-input-wrapper">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your question..."
                        className="chat-input"
                    />
                    <button type="submit" disabled={isLoading || !inputText.trim()} className="chat-send">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
