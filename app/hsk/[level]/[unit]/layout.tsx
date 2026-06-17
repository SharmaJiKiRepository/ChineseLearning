import { getUnit, HSK_LEVELS } from '@/data';

interface Props {
  params: Promise<{ level: string; unit: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { level: levelStr, unit: unitStr } = await params;
  const level = parseInt(levelStr) as 1 | 2 | 3 | 4;
  const unitNum = parseInt(unitStr);
  
  const unit = getUnit(level, unitNum);
  const levelMeta = HSK_LEVELS.find(l => l.level === level);

  if (!unit || !levelMeta) {
    return { title: 'Lesson Not Found' };
  }

  // Generate a comma-separated list of some words for SEO keywords
  const topWords = unit.words.slice(0, 5).map(w => w.chinese).join(', ');

  return {
    title: `HSK ${level} Unit ${unitNum}: ${unit.name} | FreeChineseLearn`,
    description: `Learn ${unit.words.length} Chinese words including ${topWords} with free AI-powered pronunciation guides, grammar explanations, and quizzes.`,
    keywords: `learn chinese, HSK ${level}, unit ${unitNum}, ${topWords}, mandarin, flashcards`,
  };
}

export default function UnitLayout({ children }: Props) {
  return <>{children}</>;
}
