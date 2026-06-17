'use client';

import { useState, useEffect } from 'react';
import './SupportBanner.css';

export default function SupportBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false); // Mount it so it exists in DOM

  useEffect(() => {
    // Only show if not dismissed in localStorage
    const dismissed = localStorage.getItem('support_banner_dismissed');
    if (dismissed) {
      setIsDismissed(true);
    } else {
      // Small delay for animation
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isDismissed) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('support_banner_dismissed', 'true');
    setTimeout(() => setIsDismissed(true), 300); // Wait for animation
  };

  return (
    <div className={`support-banner-wrapper ${isVisible ? 'visible' : ''}`}>
      <div className="support-banner glass-panel">
        <div className="support-icon">❤️</div>
        <div className="support-content">
          <p>
            <strong>Love LearnMandarinFree?</strong> Want to make this web app even better with more AI-powered learning? 
            Please consider supporting us for just $5 a month to keep the servers and AI running!
          </p>
        </div>
        <div className="support-actions">
          <a href="https://patreon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm support-btn">
            Support $5/mo
          </a>
          <button className="support-dismiss" onClick={handleDismiss} aria-label="Dismiss">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
