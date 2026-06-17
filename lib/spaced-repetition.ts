/**
 * SM-2 Spaced Repetition Algorithm
 * 
 * Think of this like a smart flashcard system. It figures out which words
 * you know well (shows them less often) and which you struggle with 
 * (shows them more often). Like a personal tutor who remembers your weak spots.
 * 
 * Key concepts:
 * - ease: How "easy" a word is for you (starts at 2.5, goes up when you get it right)
 * - interval: Days until you see this word again
 * - repetitions: How many times in a row you got it right
 */

export interface ReviewResult {
  ease: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
}

/**
 * Calculate the next review schedule based on how well you answered.
 * 
 * @param quality - How well you knew the answer (0-5):
 *   0 = "No idea" 
 *   1 = "Wrong, but recognized it"
 *   2 = "Wrong, but it was close"
 *   3 = "Correct, but took effort"
 *   4 = "Correct, pretty easy"
 *   5 = "Correct, knew it instantly"
 * @param currentEase - Current ease factor (starts at 2.5)
 * @param currentInterval - Current interval in days
 * @param currentRepetitions - Current streak of correct answers
 */
export function calculateNextReview(
  quality: number,
  currentEase: number = 2.5,
  currentInterval: number = 0,
  currentRepetitions: number = 0
): ReviewResult {
  // Clamp quality between 0 and 5
  quality = Math.max(0, Math.min(5, quality));

  let newEase = currentEase;
  let newInterval: number;
  let newRepetitions: number;

  if (quality >= 3) {
    // Correct answer — increase interval
    if (currentRepetitions === 0) {
      newInterval = 1;  // First correct: review tomorrow
    } else if (currentRepetitions === 1) {
      newInterval = 6;  // Second correct: review in 6 days
    } else {
      newInterval = Math.round(currentInterval * currentEase);
    }
    newRepetitions = currentRepetitions + 1;
  } else {
    // Wrong answer — reset to beginning
    newInterval = 1;     // Review tomorrow
    newRepetitions = 0;  // Reset streak
  }

  // Update ease factor (how "easy" this card is)
  // This formula makes the ease go up for easy cards and down for hard ones
  newEase = currentEase + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  
  // Ease should never go below 1.3 (prevents intervals from shrinking too much)
  newEase = Math.max(1.3, newEase);

  // Calculate the actual next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + newInterval);

  return {
    ease: Math.round(newEase * 100) / 100, // Round to 2 decimal places
    interval: newInterval,
    repetitions: newRepetitions,
    nextReview,
  };
}

/**
 * Check if a word is due for review
 */
export function isDueForReview(nextReview: Date): boolean {
  return new Date() >= new Date(nextReview);
}

/**
 * Convert a quiz result (correct/wrong) to SM-2 quality score
 */
export function quizResultToQuality(correct: boolean, timeSpent?: number): number {
  if (!correct) return 1; // Wrong but saw the answer
  if (timeSpent && timeSpent < 3000) return 5; // Knew it instantly (< 3 seconds)
  if (timeSpent && timeSpent < 8000) return 4; // Pretty quick (< 8 seconds)
  return 3; // Correct but took effort
}
