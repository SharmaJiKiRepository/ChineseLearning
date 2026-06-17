'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css';

const NAV_ITEMS = [
  { href: '/hsk', label: 'HSK Courses', emoji: '📚' },
  { href: '/dashboard', label: 'Dashboard', emoji: '📊' },
  { href: '/review', label: 'Review', emoji: '🔄' },
  { href: '/learn', label: 'Flashcards', emoji: '🃏' },
  { href: '/chat', label: 'Chat', emoji: '💬' },
  { href: '/reading', label: 'Reading', emoji: '📖' },
  { href: '/song', label: 'Song', emoji: '🎵' },
  { href: '/situations', label: 'Situations', emoji: '🗣️' },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <span className="text-gradient">Learn</span>MandarinFree
        </Link>

        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${pathname?.startsWith(item.href) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-emoji">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
        </button>
      </div>
    </header>
  );
}
