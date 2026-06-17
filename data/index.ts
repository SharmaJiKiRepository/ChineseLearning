// Central data index — import everything from here
import { hsk1Words, getHsk1Units } from './hsk1';
import { hsk2Words, getHsk2Units } from './hsk2';
import { hsk3Words, getHsk3Units } from './hsk3';
import { hsk4Words, getHsk4Units } from './hsk4';
import { hsk5Words, getHsk5Units } from './hsk5';
import { hsk6Words, getHsk6Units } from './hsk6';
import { grammarPoints, getGrammarByLevel } from './grammar';
import { readingPassages, getReadingsByLevel } from './readings';
import { situations, getSituationsByLevel, getSituationById } from './situations';
import { immersionVideos, getImmersionVideoById } from './immersion';
import type { HskWord, HskUnit, GrammarPoint, ReadingPassage, QuizQuestion, QuizType, Situation, DialogueLine, SentenceBuildingExercise, ImmersionVideo, TranscriptLine } from './types';

// All words by level
export function getWordsByLevel(level: 1 | 2 | 3 | 4 | 5 | 6): HskWord[] {
  switch (level) {
    case 1: return hsk1Words;
    case 2: return hsk2Words;
    case 3: return hsk3Words;
    case 4: return hsk4Words;
    case 5: return hsk5Words;
    case 6: return hsk6Words;
  }
}

// All units by level
export function getUnitsByLevel(level: 1 | 2 | 3 | 4 | 5 | 6): HskUnit[] {
  switch (level) {
    case 1: return getHsk1Units();
    case 2: return getHsk2Units();
    case 3: return getHsk3Units();
    case 4: return getHsk4Units();
    case 5: return getHsk5Units();
    case 6: return getHsk6Units();
  }
}

// Get a specific unit
export function getUnit(level: 1 | 2 | 3 | 4 | 5 | 6, unitNum: number): HskUnit | undefined {
  return getUnitsByLevel(level).find(u => u.unit === unitNum);
}

// Get a specific word by ID
export function getWordById(id: string): HskWord | undefined {
  const allWords = [...hsk1Words, ...hsk2Words, ...hsk3Words, ...hsk4Words, ...hsk5Words, ...hsk6Words];
  return allWords.find(w => w.id === id);
}

// Level metadata
export const HSK_LEVELS = [
  { level: 1 as const, name: 'HSK 1', subtitle: 'Beginner', wordCount: hsk1Words.length, unitCount: getHsk1Units().length, color: '#10b981', description: 'Master the most essential Chinese words. Learn greetings, numbers, basic verbs, and simple sentence patterns.' },
  { level: 2 as const, name: 'HSK 2', subtitle: 'Elementary', wordCount: hsk2Words.length, unitCount: getHsk2Units().length, color: '#3b82f6', description: 'Expand your vocabulary. Handle daily conversations about shopping, food, travel, and express simple opinions.' },
  { level: 3 as const, name: 'HSK 3', subtitle: 'Intermediate', wordCount: hsk3Words.length, unitCount: getHsk3Units().length, color: '#f59e0b', description: 'Discuss work, hobbies, feelings, and navigate Chinese culture with growing confidence.' },
  { level: 4 as const, name: 'HSK 4', subtitle: 'Upper Intermediate', wordCount: hsk4Words.length, unitCount: getHsk4Units().length, color: '#ef4444', description: 'Express complex ideas about society, science, business, and engage in nuanced discussions.' },
  { level: 5 as const, name: 'HSK 5', subtitle: 'Advanced Fluency', wordCount: hsk5Words.length, unitCount: getHsk5Units().length, color: '#8b5cf6', description: 'Discuss academic research, analyze social issues, and engage in deep cultural discourse.' },
  { level: 6 as const, name: 'HSK 6', subtitle: 'Mastery', wordCount: hsk6Words.length, unitCount: getHsk6Units().length, color: '#ec4899', description: 'Read advanced literature, debate philosophy, and conduct high-level diplomacy.' },
] as const;

export {
  hsk1Words, getHsk1Units,
  hsk2Words, getHsk2Units,
  hsk3Words, getHsk3Units,
  hsk4Words, getHsk4Units,
  hsk5Words, getHsk5Units,
  hsk6Words, getHsk6Units,
  grammarPoints, getGrammarByLevel,
  readingPassages, getReadingsByLevel,
  situations,
  getSituationsByLevel,
  getSituationById,
  immersionVideos,
  getImmersionVideoById
};

export type { HskWord, HskUnit, GrammarPoint, ReadingPassage, QuizQuestion, QuizType };
