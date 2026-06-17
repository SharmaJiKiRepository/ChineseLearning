'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CustomScenarioForm() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('1');
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    setIsGenerating(true);
    try {
      const res = await fetch('/api/situations/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, level: parseInt(level) })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        alert(data.error || 'Failed to generate scenario');
        setIsGenerating(false);
        return;
      }

      // Save the generated situation to localStorage so it can be retrieved on the individual page
      const existing = JSON.parse(localStorage.getItem('custom_situations') || '[]');
      localStorage.setItem('custom_situations', JSON.stringify([...existing, data]));

      // Navigate to the new situation
      router.push(`/situations/${data.id}`);
    } catch (err) {
      console.error(err);
      alert('An error occurred while generating the scenario.');
      setIsGenerating(false);
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem', border: '1px solid var(--accent-primary)' }}>
      <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span>✨</span> Infinite Custom Scenarios
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        Want to learn how to argue with a landlord? Or order spicy hotpot in Chengdu? Type any situation below, and our AI will instantly generate a complete lesson with vocabulary, dialogues, and roleplay prompts!
      </p>

      <form onSubmit={handleGenerate} style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="e.g., Complaining about the AC in a hotel"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isGenerating}
            style={{
              flex: 1,
              minWidth: '250px',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              fontSize: '1rem'
            }}
            required
          />
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            disabled={isGenerating}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              fontSize: '1rem'
            }}
          >
            <option value="1">HSK 1 (Beginner)</option>
            <option value="2">HSK 2 (Elementary)</option>
            <option value="3">HSK 3 (Intermediate)</option>
            <option value="4">HSK 4 (Advanced)</option>
          </select>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isGenerating}
            style={{ whiteSpace: 'nowrap' }}
          >
            {isGenerating ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="dot"></span><span className="dot"></span><span className="dot"></span> Generating...
              </span>
            ) : (
              'Generate Scenario 🚀'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
