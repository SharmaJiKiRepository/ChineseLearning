// Shared TypeScript types for the Chinese Learning App

export interface HskWord {
  id: string;            // e.g. "hsk1-001"
  chinese: string;       // 你好
  pinyin: string;        // nǐ hǎo
  meaning: string;       // hello
  partOfSpeech: string;  // greeting / verb / noun / adj etc.
  hskLevel: 1 | 2 | 3 | 4;
  unit: number;
  unitName: string;
  exampleSentence?: {
    chinese: string;
    pinyin: string;
    meaning: string;
  };
}

export interface HskUnit {
  unit: number;
  name: string;
  hskLevel: 1 | 2 | 3 | 4;
  description: string;
  words: HskWord[];
}

export interface GrammarPoint {
  id: string;
  hskLevel: 1 | 2 | 3 | 4;
  unit: number;
  title: string;
  pattern: string;        // e.g. "Subject + 是 + Noun"
  explanation: string;
  examples: {
    chinese: string;
    pinyin: string;
    meaning: string;
  }[];
  quizzes?: QuizQuestion[];
}

export interface ReadingPassage {
  id: string;
  hskLevel: 1 | 2 | 3 | 4;
  title: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  vocabularyHighlights: string[]; // word IDs
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'match-pairs' | 'word-order';
  prompt: string;
  promptChinese?: string;
  options?: (string | { chinese: string; pinyin: string })[];
  correctAnswer?: string;
  explanation?: string;
  
  // For word-order
  scrambled?: { chinese: string; pinyin: string }[];
  correctOrder?: string[];
}

export type QuizType = 'char-to-meaning' | 'meaning-to-char' | 'pinyin-to-char' | 'fill-blank';

export interface DialogueLine {
  character: string;     // e.g. "A", "Waiter", "Customer"
  chinese: string;     // "你好，你要点什么？"
  pinyin: string;      // "nǐ hǎo, nǐ yào diǎn shén me?"
  english: string;     // "Hello, what would you like to order?"
  hindiPronunciation?: string;      // Hindi phonetic e.g., "नी हाओ"
}

export interface SentenceBuildingExercise {
  type?: 'sentence_building';
  english: string;     // The sentence to translate
  correctChinese: string; // The correct sequence of characters
  blocks: { chinese: string; pinyin: string }[]; // Scrambled blocks with pinyin
}

export interface Situation {
  id: string;          // e.g. "cafe-ordering"
  title: string;       // "Ordering at a Cafe"
  description: string; // "Learn how to order drinks and specify sizes."
  level: 1 | 2 | 3 | 4;
  icon: string;        // emoji or icon name
  aiPrompt: string;    // The prompt given to Gemini to act as the character
  vocabulary?: { chinese: string; pinyin: string; english: string }[]; // Key words to pre-learn
  dialogue: DialogueLine[];
  exercises: SentenceBuildingExercise[];
}
export interface TranscriptLine {
  startTime: number; // in seconds
  endTime: number;
  chinese: string;
  pinyin: string;
  english: string;
  words: { chinese: string; pinyin: string; meaning: string; hskLevel?: number }[];
}

export interface ImmersionVideo {
  id: string;          // custom ID, e.g., 'peppa-pig-ep1'
  youtubeId: string;   // the actual YouTube video ID
  title: string;
  description: string;
  level: 1 | 2 | 3 | 4;
  thumbnailUrl: string;
  transcript: TranscriptLine[];
}
