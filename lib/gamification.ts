'use client';

import { useState, useEffect } from 'react';

export interface GamificationState {
  xp: number;
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  level: number;
}

const DEFAULT_STATE: GamificationState = {
  xp: 0,
  streak: 0,
  lastActiveDate: '',
  level: 1,
};

const getTodayDateString = () => new Date().toISOString().split('T')[0];

export function useGamification() {
  const [state, setState] = useState<GamificationState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from local storage
    const stored = localStorage.getItem('learnMandarin_gamification');
    if (stored) {
      try {
        const parsed: GamificationState = JSON.parse(stored);
        
        // Check streak
        const today = getTodayDateString();
        const lastActive = parsed.lastActiveDate;
        
        if (lastActive) {
          const lastDate = new Date(lastActive);
          const currentDate = new Date(today);
          const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
          
          if (diffDays === 1) {
            // Maintained streak! This will be incremented when they earn XP today
          } else if (diffDays > 1) {
            // Lost streak
            parsed.streak = 0;
          }
        }
        
        setState(parsed);
      } catch (e) {
        console.error("Failed to parse gamification state");
      }
    }
    setIsLoaded(true);
  }, []);

  const saveState = (newState: GamificationState) => {
    setState(newState);
    localStorage.setItem('learnMandarin_gamification', JSON.stringify(newState));
  };

  const addXP = (amount: number) => {
    if (!isLoaded) return;
    
    const today = getTodayDateString();
    let newStreak = state.streak;
    
    // If first activity today, increment streak
    if (state.lastActiveDate !== today) {
      // If last active was yesterday, increment. If earlier, it was reset to 0 in load, so it becomes 1.
      newStreak += 1;
    }
    
    const newXp = state.xp + amount;
    // Simple level formula: 1 level per 500 XP
    const newLevel = Math.floor(newXp / 500) + 1;
    
    saveState({
      xp: newXp,
      streak: newStreak,
      lastActiveDate: today,
      level: newLevel,
    });
  };

  return { state, addXP, isLoaded };
}
