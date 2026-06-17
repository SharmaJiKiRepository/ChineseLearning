'use client';

import { useState, useRef, useEffect } from 'react';
import '../situations.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  pinyin?: string;
  english?: string;
  correction?: string;
  translation?: {
    pinyin: string;
    english: string;
  };
}

export default function RoleplaySimulator({ aiPrompt, situationTitle }: { aiPrompt: string, situationTitle: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [translatingId, setTranslatingId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support Speech Recognition. Try Chrome.");
      return;
    }
    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.interimResults = false;
    
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (e: any) => {
      setInputText(prev => prev + (prev ? ' ' : '') + e.results[0][0].transcript);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    
    recognition.start();
  };

  // Initialize chat by sending a hidden system ping to get the AI to start
  useEffect(() => {
    if (messages.length === 0) {
      handleInitialGreeting();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInitialGreeting = async () => {
    setIsLoading(true);
    try {
      const initialMsgs = [{ role: 'user', content: '(Start the roleplay. Speak first based on your system instructions. Do not mention this prompt.)' }];
      const res = await fetch('/api/roleplay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: initialMsgs,
          systemInstruction: aiPrompt,
        }),
      });
      const data = await res.json();
      if (data.response) {
        setMessages([{ id: Date.now().toString(), role: 'assistant', content: data.response, pinyin: data.pinyin, english: data.english, correction: data.correction }]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const newMsg: Message = { id: Date.now().toString(), role: 'user', content: inputText };
    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setInputText('');
    setIsLoading(true);

    try {
      // Map messages for the API (filter out the hidden starting prompt if we had one)
      const apiMessages = updatedMessages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/roleplay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          systemInstruction: aiPrompt,
        }),
      });

      const data = await res.json();
      if (res.ok && data.response) {
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: data.response, pinyin: data.pinyin, english: data.english, correction: data.correction }]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error: any) {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: '⚠️ Error: Could not connect to AI.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslate = async (msgId: string, text: string) => {
    setTranslatingId(msgId);
    try {
      const res = await fetch('/api/pipeline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, context: 'translation' })
      });
      const data = await res.json();
      
      setMessages(prev => prev.map(m => {
        if (m.id === msgId) {
          return { ...m, translation: { pinyin: data.Pinyin, english: data.Meaning } };
        }
        return m;
      }));
    } catch (e) {
      console.error(e);
    } finally {
      setTranslatingId(null);
    }
  };

  return (
    <div className="roleplay-container animate-fade-in">
      <div className="roleplay-header">
        <div>
          <h3 className="roleplay-title">AI Roleplay: {situationTitle}</h3>
          <p className="roleplay-subtitle">Type in Chinese characters or Pinyin</p>
        </div>
        <div className="live-indicator-container">
          <span className="live-dot"></span>
          <span className="live-text">Live AI</span>
        </div>
      </div>

      <div className="roleplay-chat-box">
        {messages.map(msg => {
          const isUser = msg.role === 'user';
          return (
            <div key={msg.id} className={`roleplay-message-wrapper ${isUser ? 'user' : 'assistant'}`}>
              <span className="roleplay-speaker">
                {isUser ? 'You' : 'Character'}
              </span>
              <div className={`roleplay-bubble ${isUser ? 'user' : 'assistant'}`}>
                {msg.pinyin && !isUser && (
                  <div className="roleplay-pinyin" style={{ marginBottom: '0.25rem', opacity: 0.9 }}>{msg.pinyin}</div>
                )}
                <div className="roleplay-bubble-text">
                  {msg.content}
                  {!isUser && (
                    <button onClick={() => playAudio(msg.content)} className="play-audio-btn" title="Listen">🔊</button>
                  )}
                </div>
                {msg.english && !isUser && (
                  <div className="roleplay-english" style={{ marginTop: '0.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{msg.english}</div>
                )}
                
                {msg.correction && !isUser && msg.correction.trim() !== '' && (
                  <div className="teachers-note" style={{ marginTop: '1rem', padding: '0.8rem', background: 'rgba(255,107,107,0.1)', borderLeft: '3px solid var(--primary-color)', borderRadius: '0 8px 8px 0', fontSize: '0.9rem' }}>
                    <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>👩‍🏫 Teacher's Note</strong>
                    {msg.correction}
                  </div>
                )}
                
                {msg.translation && (
                  <div className="roleplay-translation">
                    {!msg.pinyin && <div className="roleplay-pinyin">{msg.translation.pinyin}</div>}
                    <div className="roleplay-english">{msg.translation.english}</div>
                  </div>
                )}
              </div>

              {!isUser && !msg.translation && (
                <button 
                  onClick={() => handleTranslate(msg.id, msg.content)}
                  disabled={translatingId === msg.id}
                  className="translate-btn"
                >
                  {translatingId === msg.id ? 'Translating...' : 'Translate'}
                </button>
              )}
            </div>
          );
        })}
        {isLoading && (
          <div className="roleplay-message-wrapper assistant">
             <span className="roleplay-speaker">Character</span>
             <div className="roleplay-bubble assistant">
               <div className="typing-indicator">
                 <div className="typing-dot"></div>
                 <div className="typing-dot"></div>
                 <div className="typing-dot"></div>
               </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="roleplay-input-form">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Type your response..."
          className="roleplay-input"
          disabled={isLoading}
        />
        <button 
          type="button"
          onClick={startListening}
          className={`mic-btn ${isListening ? 'listening' : ''}`}
          title="Speak (Chinese)"
        >
          {isListening ? '🔴' : '🎙️'}
        </button>
        <button 
          type="submit" 
          disabled={!inputText.trim() || isLoading}
          className="roleplay-send-btn"
        >
          Send
        </button>
      </form>
    </div>
  );
}
