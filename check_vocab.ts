import { grammarPoints } from './data/grammar';
import { situations } from './data/situations';
import { getWordsByLevel } from './data/index';

// Extract all characters for a given level (and below)
function getAllowedChars(level: number): Set<string> {
  const allowed = new Set<string>();
  const maxLevel = Math.min(level, 4);
  for (let i = 1; i <= maxLevel; i++) {
    const words = getWordsByLevel(i as 1|2|3|4);
    for (const word of words) {
      for (const char of word.chinese) {
        allowed.add(char);
      }
    }
  }
  return allowed;
}

const punctuation = new Set(['。', '？', '！', '，', '、', '：', '“', '”', ' ', 'A', 'B', 'X', 'Y', '—']);

console.log('--- GRAMMAR CURRICULUM AUDIT ---');

grammarPoints.forEach(point => {
  const allowedChars = getAllowedChars(point.hskLevel);
  const issues: string[] = [];

  const checkText = (text: string, context: string) => {
    for (const char of text) {
      if (!allowedChars.has(char) && !punctuation.has(char)) {
        issues.push(`Out of bounds char: "${char}" in ${context} ("${text}")`);
      }
    }
  };

  point.examples.forEach(ex => checkText(ex.chinese, 'Example'));
  
  if (point.quizzes) {
    point.quizzes.forEach(q => {
      if (q.promptChinese) checkText(q.promptChinese, 'Quiz Prompt');
      if (q.options) {
        q.options.forEach(opt => {
          if (typeof opt === 'string') checkText(opt, 'Quiz Option');
          else checkText(opt.chinese, 'Quiz Option');
        });
      }
      if (typeof q.correctAnswer === 'string') checkText(q.correctAnswer, 'Quiz Correct Answer');
      if (q.scrambled) {
        q.scrambled.forEach(s => {
          if (typeof s === 'string') checkText(s, 'Scrambled Block');
          else checkText(s.chinese, 'Scrambled Block');
        });
      }
    });
  }

  if (issues.length > 0) {
    console.log(`\n🚨 [HSK ${point.hskLevel}] Grammar Point: ${point.title} (${point.id})`);
    issues.forEach(i => console.log(`   - ${i}`));
  }
});

console.log('\n--- SITUATIONS CURRICULUM AUDIT ---');

situations.forEach(sit => {
  if (sit.level > 4) return; // Skip HSK 5/6 because we don't have vocab data
  const allowedChars = getAllowedChars(sit.level);
  const issues: string[] = [];

  const checkText = (text: string, context: string) => {
    for (const char of text) {
      if (!allowedChars.has(char) && !punctuation.has(char)) {
        issues.push(`Out of bounds char: "${char}" in ${context} ("${text}")`);
      }
    }
  };

  sit.dialogue.forEach((line, idx) => {
    checkText(line.chinese, `Dialogue Line ${idx + 1}`);
  });

  sit.exercises.forEach((ex, idx) => {
    checkText(ex.correctChinese, `Exercise ${idx + 1}`);
  });

  if (issues.length > 0) {
    console.log(`\n🚨 [HSK ${sit.level}] Situation: ${sit.title} (${sit.id})`);
    issues.forEach(i => console.log(`   - ${i}`));
  }
});

console.log('\nAudit complete.');
