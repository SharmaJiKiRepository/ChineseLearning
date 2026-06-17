import { GrammarPoint } from './types';

export const grammarPoints: GrammarPoint[] = [
  // HSK 1 Grammar
  { 
    id: 'g1-01', hskLevel: 1, unit: 1, title: 'Basic sentence with 是 (shì)', pattern: 'Subject + 是 + Noun', explanation: 'Use 是 to equate two nouns, similar to "is/am/are" in English. It cannot be used to link a noun and an adjective.', 
    examples: [
      { chinese: '我是学生。', pinyin: 'wǒ shì xué sheng.', meaning: 'I am a student.' }, 
      { chinese: '他是老师。', pinyin: 'tā shì lǎo shī.', meaning: 'He is a teacher.' },
      { chinese: '这是我的书。', pinyin: 'zhè shì wǒ de shū.', meaning: 'This is my book.' },
      { chinese: '那是医院。', pinyin: 'nà shì yī yuàn.', meaning: 'That is a hospital.' }
    ],
    quizzes: [
      { id: 'g1-01-q1', type: 'multiple-choice', prompt: 'Which sentence correctly translates: "I am a doctor"?', options: [{chinese: '我很医生。', pinyin: 'wǒ hěn yī shēng.'}, {chinese: '我是医生。', pinyin: 'wǒ shì yī shēng.'}, {chinese: '我不医生。', pinyin: 'wǒ bù yī shēng.'}], correctAnswer: '我是医生。', explanation: '是 is used to equate "I" with "doctor".' },
      { id: 'g1-01-q2', type: 'fill-blank', prompt: '她___中国人。 (She is Chinese.)', correctAnswer: '是', explanation: '是 (shì) is used to say "She is Chinese".' },
      { id: 'g1-01-q3', type: 'word-order', prompt: 'Translate: "He is my friend."', scrambled: [{chinese: '朋友', pinyin: 'péng you'}, {chinese: '他', pinyin: 'tā'}, {chinese: '的', pinyin: 'de'}, {chinese: '是', pinyin: 'shì'}, {chinese: '我', pinyin: 'wǒ'}], correctOrder: ['他', '是', '我', '的', '朋友'], explanation: 'Follow the pattern: Subject (He) + 是 (is) + Noun (my friend).' },
      { id: 'g1-01-q4', type: 'word-order', prompt: 'Translate: "I am a teacher."', scrambled: [{chinese: '老师', pinyin: 'lǎo shī'}, {chinese: '是', pinyin: 'shì'}, {chinese: '我', pinyin: 'wǒ'}], correctOrder: ['我', '是', '老师'], explanation: 'Subject + 是 + Noun.' }
    ]
  },
  { 
    id: 'g1-02', hskLevel: 1, unit: 2, title: 'Questions with 吗 (ma)', pattern: 'Statement + 吗？', explanation: 'Add 吗 to the end of any statement to turn it into a yes/no question. Do not change the word order of the statement.', 
    examples: [
      { chinese: '你好吗？', pinyin: 'nǐ hǎo ma?', meaning: 'Are you well?' }, 
      { chinese: '你是中国人吗？', pinyin: 'nǐ shì zhōng guó rén ma?', meaning: 'Are you Chinese?' },
      { chinese: '他喜欢喝茶吗？', pinyin: 'tā xǐ huān hē chá ma?', meaning: 'Does he like drinking tea?' },
      { chinese: '今天冷吗？', pinyin: 'jīn tiān lěng ma?', meaning: 'Is it cold today?' }
    ],
    quizzes: [
      { id: 'g1-02-q1', type: 'multiple-choice', prompt: 'How do you ask: "Are you a student?"', options: [{chinese: '你是吗学生？', pinyin: 'nǐ shì ma xué sheng?'}, {chinese: '你是学生吗？', pinyin: 'nǐ shì xué sheng ma?'}, {chinese: '吗你是学生？', pinyin: 'ma nǐ shì xué sheng?'}], correctAnswer: '你是学生吗？', explanation: '吗 always goes at the very end of the statement.' },
      { id: 'g1-02-q2', type: 'word-order', prompt: 'Translate: "Are they doctors?"', scrambled: [{chinese: '医生', pinyin: 'yī shēng'}, {chinese: '吗', pinyin: 'ma'}, {chinese: '他们', pinyin: 'tā men'}, {chinese: '是', pinyin: 'shì'}], correctOrder: ['他们', '是', '医生', '吗'], explanation: 'Statement "They are doctors" + 吗.' }
    ]
  },
  { id: 'g1-03', hskLevel: 1, unit: 3, title: 'Possession with 的 (de)', pattern: 'Owner + 的 + Thing', explanation: '的 shows possession, like "\'s" in English.', examples: [{ chinese: '我的书', pinyin: 'wǒ de shū', meaning: 'my book' }, { chinese: '妈妈的朋友', pinyin: 'mā ma de péng you', meaning: "mom's friend" }] },
  { id: 'g1-04', hskLevel: 1, unit: 7, title: 'Negation with 不 (bù)', pattern: 'Subject + 不 + Verb/Adjective', explanation: '不 negates verbs and adjectives in the present/future. Use 没 for past actions.', examples: [{ chinese: '我不喝茶。', pinyin: 'wǒ bù hē chá.', meaning: "I don't drink tea." }, { chinese: '他不高兴。', pinyin: 'tā bù gāo xìng.', meaning: 'He is not happy.' }] },
  { id: 'g1-05', hskLevel: 1, unit: 9, title: 'Expressing existence with 有 (yǒu)', pattern: 'Subject + 有 + Object', explanation: '有 means "to have" or "there is/are".', examples: [{ chinese: '我有两个朋友。', pinyin: 'wǒ yǒu liǎng gè péng you.', meaning: 'I have two friends.' }, { chinese: '桌子上有一本书。', pinyin: 'zhuō zi shàng yǒu yī běn shū.', meaning: 'There is a book on the table.' }] },
  { id: 'g1-06', hskLevel: 1, unit: 12, title: 'Adjective predicates with 很 (hěn)', pattern: 'Subject + 很 + Adjective', explanation: 'In Chinese, adjectives act as verbs. Use 很 before single adjectives to make a statement (without it, it implies comparison).', examples: [{ chinese: '今天很冷。', pinyin: 'jīn tiān hěn lěng.', meaning: 'Today is very cold.' }, { chinese: '她很漂亮。', pinyin: 'tā hěn piào liang.', meaning: 'She is very pretty.' }] },
  { id: 'g1-07', hskLevel: 1, unit: 14, title: 'Completed action with 了 (le)', pattern: 'Subject + Verb + 了 + Object', explanation: '了 after a verb indicates a completed action (past tense equivalent).', examples: [{ chinese: '我吃了米饭。', pinyin: 'wǒ chī le mǐ fàn.', meaning: 'I ate rice.' }, { chinese: '他买了一本书。', pinyin: 'tā mǎi le yī běn shū.', meaning: 'He bought a book.' }] },

  // HSK 2 Grammar
  { id: 'g2-01', hskLevel: 2, unit: 2, title: 'Ongoing action with 在 (zài)', pattern: 'Subject + 在 + Verb', explanation: '在 before a verb indicates an action happening right now (like English "-ing").', examples: [{ chinese: '我在学习。', pinyin: 'wǒ zài xué xí.', meaning: 'I am studying.' }, { chinese: '他在吃饭。', pinyin: 'tā zài chī fàn.', meaning: 'He is eating.' }] },
  { id: 'g2-02', hskLevel: 2, unit: 5, title: 'Expressing "because...so..." (因为...所以...)', pattern: '因为 + Reason + 所以 + Result', explanation: 'This paired conjunction explains cause and effect.', examples: [{ chinese: '因为下雨，所以我不去了。', pinyin: 'yīn wèi xià yǔ, suǒ yǐ wǒ bù qù le.', meaning: "Because it's raining, I won't go." }] },
  { id: 'g2-03', hskLevel: 2, unit: 13, title: 'Comparison with 比 (bǐ)', pattern: 'A + 比 + B + Adjective', explanation: '比 is used to compare two things directly.', examples: [{ chinese: '他比我高。', pinyin: 'tā bǐ wǒ gāo.', meaning: 'He is taller than me.' }, { chinese: '今天比昨天冷。', pinyin: 'jīn tiān bǐ zuó tiān lěng.', meaning: 'Today is colder than yesterday.' }] },
  { id: 'g2-04', hskLevel: 2, unit: 15, title: 'Experience with 过 (guo)', pattern: 'Subject + Verb + 过 + Object', explanation: '过 after a verb indicates a past experience ("have done something before").', examples: [{ chinese: '我去过中国。', pinyin: 'wǒ qù guo zhōng guó.', meaning: 'I have been to China.' }, { chinese: '你吃过中国菜吗？', pinyin: 'nǐ chī guo zhōng guó cài ma?', meaning: 'Have you eaten Chinese food?' }] },

  // HSK 3 Grammar
  { id: 'g3-01', hskLevel: 3, unit: 14, title: 'The 把 (bǎ) construction', pattern: 'Subject + 把 + Object + Verb + Complement', explanation: 'The 把 construction moves the object before the verb to emphasize what happens to it. Think of it as "take X and do Y to it."', examples: [{ chinese: '请把门关上。', pinyin: 'qǐng bǎ mén guān shàng.', meaning: 'Please close the door.' }, { chinese: '他把书放在桌子上。', pinyin: 'tā bǎ shū fàng zài zhuō zi shàng.', meaning: 'He put the book on the table.' }] },
  { id: 'g3-02', hskLevel: 3, unit: 14, title: 'Passive voice with 被 (bèi)', pattern: 'Receiver + 被 + (Doer) + Verb', explanation: 'The 被 construction forms the passive voice. Often used for unpleasant situations.', examples: [{ chinese: '我的咖啡被他喝了。', pinyin: 'wǒ de kā fēi bèi tā hē le.', meaning: 'My coffee was drunk by him.' }, { chinese: '蛋糕被他吃了。', pinyin: 'dàn gāo bèi tā chī le.', meaning: 'The cake was eaten by him.' }] },
  { id: 'g3-03', hskLevel: 3, unit: 16, title: 'Progressive comparison 越来越', pattern: 'Subject + 越来越 + Adjective', explanation: 'Expresses that something is becoming more and more of a quality over time.', examples: [{ chinese: '天气越来越冷了。', pinyin: 'tiān qì yuè lái yuè lěng le.', meaning: 'The weather is getting colder and colder.' }, { chinese: '他的中文越来越好。', pinyin: 'tā de zhōng wén yuè lái yuè hǎo.', meaning: 'His Chinese is getting better and better.' }] },

  // HSK 4 Grammar
  { 
    id: 'g4-01', hskLevel: 4, unit: 16, title: 'Complex connectors: 不仅...而且...', pattern: '不仅 + A + 而且 + B', explanation: '"Not only A, but also B" — used to add emphasis and extra information.', 
    examples: [{ chinese: '他不仅会说中文，而且会说日语。', pinyin: 'tā bù jǐn huì shuō zhōng wén, ér qiě huì shuō rì yǔ.', meaning: 'He can not only speak Chinese, but also Japanese.' }],
    quizzes: [
      { id: 'g4-01-q1', type: 'fill-blank', prompt: '这个菜___好吃，而且很便宜。 (This dish is not only delicious, but also very cheap.)', correctAnswer: '不仅', explanation: '不仅 (not only) pairs with 而且 (but also).' },
      { id: 'g4-01-q2', type: 'word-order', prompt: 'Translate: "He not only likes to read, but also likes to write."', scrambled: [{chinese: '而且', pinyin: 'ér qiě'}, {chinese: '喜欢', pinyin: 'xǐ huan'}, {chinese: '看书', pinyin: 'kàn shū'}, {chinese: '他', pinyin: 'tā'}, {chinese: '不仅', pinyin: 'bù jǐn'}, {chinese: '写字', pinyin: 'xiě zì'}], correctOrder: ['他', '不仅', '喜欢', '看书', '而且', '喜欢', '写字'], explanation: 'Subject + 不仅 + A + 而且 + B' }
    ]
  },
  { 
    id: 'g4-02', hskLevel: 4, unit: 16, title: 'Despite/Although: 尽管...但是...', pattern: '尽管 + Concession + 但是 + Main point', explanation: '"Despite/Although X, Y" — used for contrast.', 
    examples: [{ chinese: '尽管很累，但是我很开心。', pinyin: 'jǐn guǎn hěn lèi, dàn shì wǒ hěn kāi xīn.', meaning: 'Although I am tired, I am very happy.' }],
    quizzes: [
      { id: 'g4-02-q1', type: 'multiple-choice', prompt: 'How do you say "Although it rained, we still went"?', options: [{chinese: '尽管下雨，但是我们去了。', pinyin: 'jǐn guǎn xià yǔ, dàn shì wǒ men qù le.'}, {chinese: '因为下雨，所以我们去了。', pinyin: 'yīn wèi xià yǔ, suǒ yǐ wǒ men qù le.'}], correctAnswer: '尽管下雨，但是我们去了。', explanation: '尽管...但是 expresses "although...but".' }
    ]
  },
  { 
    id: 'g4-03', hskLevel: 4, unit: 26, title: 'Expressing certainty with 肯定', pattern: 'Subject + 肯定 + Verb/Adjective', explanation: '肯定 means "definitely/certainly" and expresses strong belief.', 
    examples: [{ chinese: '他肯定会来的。', pinyin: 'tā kěn dìng huì lái de.', meaning: 'He will definitely come.' }],
    quizzes: [
      { id: 'g4-03-q1', type: 'word-order', prompt: 'Translate: "I am definitely going tomorrow."', scrambled: [{chinese: '肯定', pinyin: 'kěn dìng'}, {chinese: '去', pinyin: 'qù'}, {chinese: '我', pinyin: 'wǒ'}, {chinese: '明天', pinyin: 'míng tiān'}], correctOrder: ['我', '明天', '肯定', '去'], explanation: 'Subject + Time + 肯定 + Verb' }
    ]
  },
  { 
    id: 'g4-04', hskLevel: 4, unit: 24, title: 'Result complement: Verb + 得 + Description', pattern: 'Verb + 得 + Adj/Description', explanation: '得 connects a verb to a description of how the action was done (result/degree complement).', 
    examples: [{ chinese: '她说得很好。', pinyin: 'tā shuō de hěn hǎo.', meaning: 'She speaks very well.' }, { chinese: '他跑得很快。', pinyin: 'tā pǎo de hěn kuài.', meaning: 'He runs very fast.' }],
    quizzes: [
      { id: 'g4-04-q1', type: 'multiple-choice', prompt: 'Which sentence is grammatically correct for "He does it well"?', options: [{chinese: '他做得好。', pinyin: 'tā zuò de hǎo.'}, {chinese: '他做很好。', pinyin: 'tā zuò hěn hǎo.'}], correctAnswer: '他做得好。', explanation: 'You must use 得 to connect the verb (做) with the adjective describing it (好).' }
    ]
  },
  {
    id: 'g4-05', hskLevel: 4, unit: 28, title: 'Even if: 即使...也...', pattern: '即使 + Condition, Subject + 也 + Result', explanation: '即使...也... expresses a hypothetical concession, translating to "Even if..., still...".', 
    examples: [{ chinese: '即使下雨，我也要去。', pinyin: 'jí shǐ xià yǔ, wǒ yě yào qù.', meaning: 'Even if it rains, I will still go.' }],
    quizzes: [
      { id: 'g4-05-q1', type: 'fill-blank', prompt: '___很累，他也要工作。 (Even if he is tired, he still has to work.)', correctAnswer: '即使', explanation: '即使 pairs with 也 to express "even if".' }
    ]
  },
  {
    id: 'g4-06', hskLevel: 4, unit: 32, title: 'As one pleases: 随便', pattern: '随便 + Verb', explanation: '随便 means "casual" or "to do as one pleases". Used before a verb, it means doing that action freely.', 
    examples: [{ chinese: '你可以随便看。', pinyin: 'nǐ kě yǐ suí biàn kàn.', meaning: 'You can look around as you please.' }],
    quizzes: [
      { id: 'g4-06-q1', type: 'multiple-choice', prompt: 'How do you say "Sit anywhere you like"?', options: [{chinese: '随便坐。', pinyin: 'suí biàn zuò.'}, {chinese: '坐随便。', pinyin: 'zuò suí biàn.'}], correctAnswer: '随便坐。', explanation: '随便 acts as an adverb modifying the verb 坐.' }
    ]
  },
  {
    id: 'g4-07', hskLevel: 4, unit: 36, title: 'Contrary to expectations: 却', pattern: 'Subject + 却 + Verb', explanation: '却 is an adverb used to indicate a turn in meaning, similar to "but" or "however". It must be placed after the subject, unlike 但是.', 
    examples: [{ chinese: '他很聪明，却不努力。', pinyin: 'tā hěn cōng míng, què bù nǔ lì.', meaning: 'He is smart, but doesn\'t work hard.' }],
    quizzes: [
      { id: 'g4-07-q1', type: 'word-order', prompt: 'Translate: "I know him, but he doesn\'t know me."', scrambled: [{chinese: '却', pinyin: 'què'}, {chinese: '认识', pinyin: 'rèn shi'}, {chinese: '他', pinyin: 'tā'}, {chinese: '我', pinyin: 'wǒ'}, {chinese: '不', pinyin: 'bù'}, {chinese: '他 ', pinyin: 'tā'}, {chinese: '我 ', pinyin: 'wǒ'}, {chinese: '认识 ', pinyin: 'rèn shi'}], correctOrder: ['我', '认识', '他', '他 ', '却', '不', '认识 ', '我 '], explanation: '却 must come after the subject (他).' }
    ]
  }
];

export function getGrammarByLevel(level: 1 | 2 | 3 | 4): GrammarPoint[] {
  return grammarPoints.filter(g => g.hskLevel === level);
}

export default grammarPoints;
