import { ImmersionVideo } from './types';

export const immersionVideos: ImmersionVideo[] = [
  // --- HSK 1 ---
  {
    id: 'hsk1-greetings',
    youtubeId: '4yvTsnB9vjE', 
    title: 'HSK 1 Listening Practice: Basic Greetings',
    description: 'Master HSK 1 essential vocabulary for greetings and introductions. Listen to slow, clear pronunciation from a native teacher.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/4yvTsnB9vjE/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 3, chinese: '你好！欢迎学习中文。', pinyin: 'Nǐ hǎo! Huānyíng xuéxí zhōngwén.', english: 'Hello! Welcome to learning Chinese.', words: [{ chinese: '你好', pinyin: 'nǐ hǎo', meaning: 'hello', hskLevel: 1 }] },
      { startTime: 4, endTime: 7, chinese: '我叫王老师。', pinyin: 'Wǒ jiào Wáng lǎoshī.', english: 'My name is Teacher Wang.', words: [{ chinese: '我', pinyin: 'wǒ', meaning: 'I/me', hskLevel: 1 }, { chinese: '叫', pinyin: 'jiào', meaning: 'to be called', hskLevel: 1 }, { chinese: '老师', pinyin: 'lǎoshī', meaning: 'teacher', hskLevel: 1 }] },
      { startTime: 8, endTime: 11, chinese: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', english: 'What is your name?', words: [{ chinese: '什么', pinyin: 'shénme', meaning: 'what', hskLevel: 1 }, { chinese: '名字', pinyin: 'míngzi', meaning: 'name', hskLevel: 1 }] },
      { startTime: 12, endTime: 15, chinese: '认识你很高兴。', pinyin: 'Rènshi nǐ hěn gāoxìng.', english: 'Nice to meet you.', words: [{ chinese: '认识', pinyin: 'rènshi', meaning: 'to know', hskLevel: 1 }, { chinese: '高兴', pinyin: 'gāoxìng', meaning: 'happy', hskLevel: 1 }] }
    ]
  },
  {
    id: 'hsk1-numbers',
    youtubeId: 'aSP6ZDckdV0',
    title: 'HSK 1 Listening Practice: Numbers & Time',
    description: 'Learn how to count and tell time in Mandarin using HSK 1 vocabulary.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/aSP6ZDckdV0/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', english: 'What time is it now?', words: [{ chinese: '现在', pinyin: 'xiànzài', meaning: 'now', hskLevel: 1 }, { chinese: '几', pinyin: 'jǐ', meaning: 'how many/which', hskLevel: 1 }, { chinese: '点', pinyin: 'diǎn', meaning: 'o\'clock', hskLevel: 1 }] },
      { startTime: 5, endTime: 9, chinese: '现在是上午十点。', pinyin: 'Xiànzài shì shàngwǔ shí diǎn.', english: 'It is 10:00 AM now.', words: [{ chinese: '上午', pinyin: 'shàngwǔ', meaning: 'morning', hskLevel: 1 }, { chinese: '十', pinyin: 'shí', meaning: 'ten', hskLevel: 1 }] },
      { startTime: 10, endTime: 14, chinese: '我们十二点吃饭，好吗？', pinyin: 'Wǒmen shí\'èr diǎn chīfàn, hǎo ma?', english: 'We eat at 12:00, okay?', words: [{ chinese: '我们', pinyin: 'wǒmen', meaning: 'we', hskLevel: 1 }, { chinese: '吃饭', pinyin: 'chīfàn', meaning: 'eat a meal', hskLevel: 1 }] },
      { startTime: 15, endTime: 18, chinese: '好的。', pinyin: 'Hǎo de.', english: 'Okay.', words: [{ chinese: '好', pinyin: 'hǎo', meaning: 'good/okay', hskLevel: 1 }] }
    ]
  },

  // --- HSK 2 ---
  {
    id: 'hsk2-restaurant',
    youtubeId: 'aTiOxfqIaB8', 
    title: 'HSK 2 Dialogue: Ordering at a Restaurant',
    description: 'Practical HSK 2 listening exercise. A conversation between a customer and a waiter.',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/aTiOxfqIaB8/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '服务员，请问有菜单吗？', pinyin: 'Fúwùyuán, qǐngwèn yǒu càidān ma?', english: 'Waiter, may I have a menu please?', words: [{ chinese: '服务员', pinyin: 'fúwùyuán', meaning: 'waiter', hskLevel: 2 }] },
      { startTime: 5, endTime: 9, chinese: '有的。你想吃什么？', pinyin: 'Yǒu de. Nǐ xiǎng chī shénme?', english: 'Yes. What would you like to eat?', words: [{ chinese: '想', pinyin: 'xiǎng', meaning: 'want to', hskLevel: 1 }] },
      { startTime: 10, endTime: 14, chinese: '我想点一个羊肉，还有米饭。', pinyin: 'Wǒ xiǎng diǎn yī gè yángròu, hái yǒu mǐfàn.', english: 'I want to order mutton, and also rice.', words: [{ chinese: '羊肉', pinyin: 'yángròu', meaning: 'mutton', hskLevel: 2 }, { chinese: '米饭', pinyin: 'mǐfàn', meaning: 'rice', hskLevel: 1 }] },
      { startTime: 15, endTime: 20, chinese: '好的，一共四十块。', pinyin: 'Hǎo de, yígòng sìshí kuài.', english: 'Okay, total is forty yuan.', words: [{ chinese: '一共', pinyin: 'yígòng', meaning: 'altogether', hskLevel: 2 }] }
    ]
  },
  {
    id: 'hsk2-directions',
    youtubeId: 'L2v1PKUqUJc', 
    title: 'HSK 2 Dialogue: Asking for Directions',
    description: 'Learn how to ask and give directions using HSK 2 grammar structures (离, 远, 近).',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/L2v1PKUqUJc/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 5, chinese: '请问，机场离这里远吗？', pinyin: 'Qǐngwèn, jīchǎng lí zhèlǐ yuǎn ma?', english: 'Excuse me, is the airport far from here?', words: [{ chinese: '离', pinyin: 'lí', meaning: 'away from', hskLevel: 2 }, { chinese: '远', pinyin: 'yuǎn', meaning: 'far', hskLevel: 2 }, { chinese: '机场', pinyin: 'jīchǎng', meaning: 'airport', hskLevel: 2 }] },
      { startTime: 6, endTime: 10, chinese: '不太远。你可以坐公共汽车去。', pinyin: 'Bù tài yuǎn. Nǐ kěyǐ zuò gōnggòng qìchē qù.', english: 'Not too far. You can take the bus to go.', words: [{ chinese: '公共汽车', pinyin: 'gōnggòng qìchē', meaning: 'bus', hskLevel: 2 }] },
      { startTime: 11, endTime: 15, chinese: '要多长时间？', pinyin: 'Yào duō cháng shíjiān?', english: 'How long will it take?', words: [{ chinese: '时间', pinyin: 'shíjiān', meaning: 'time', hskLevel: 2 }] },
      { startTime: 16, endTime: 20, chinese: '大概二十分钟。', pinyin: 'Dàgài èrshí fēnzhōng.', english: 'About 20 minutes.', words: [{ chinese: '分钟', pinyin: 'fēnzhōng', meaning: 'minute', hskLevel: 1 }] }
    ]
  },

  // --- HSK 3 ---
  {
    id: 'hsk3-hobbies',
    youtubeId: 'Y2bezj9kI-o', 
    title: 'HSK 3 Listening: Hobbies & Weekends',
    description: 'Listen to a natural HSK 3 conversation about what people do on their weekends.',
    level: 3,
    thumbnailUrl: 'https://img.youtube.com/vi/Y2bezj9kI-o/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 5, chinese: '周末你一般喜欢做什么？', pinyin: 'Zhōumò nǐ yìbān xǐhuān zuò shénme?', english: 'What do you generally like to do on weekends?', words: [{ chinese: '周末', pinyin: 'zhōumò', meaning: 'weekend', hskLevel: 3 }, { chinese: '一般', pinyin: 'yìbān', meaning: 'generally', hskLevel: 3 }] },
      { startTime: 6, endTime: 10, chinese: '我经常去公园跑步，或者看电影。', pinyin: 'Wǒ jīngcháng qù gōngyuán pǎobù, huòzhě kàn diànyǐng.', english: 'I often go to the park to run, or watch movies.', words: [{ chinese: '经常', pinyin: 'jīngcháng', meaning: 'often', hskLevel: 3 }, { chinese: '或者', pinyin: 'huòzhě', meaning: 'or', hskLevel: 3 }] },
      { startTime: 11, endTime: 16, chinese: '那太健康了。我总是待在家里上网。', pinyin: 'Nà tài jiànkāng le. Wǒ zǒngshì dāi zài jiālǐ shàngwǎng.', english: 'That is so healthy. I always stay at home to surf the internet.', words: [{ chinese: '健康', pinyin: 'jiànkāng', meaning: 'healthy', hskLevel: 3 }, { chinese: '总是', pinyin: 'zǒngshì', meaning: 'always', hskLevel: 3 }, { chinese: '上网', pinyin: 'shàngwǎng', meaning: 'surf the internet', hskLevel: 3 }] }
    ]
  },

  // --- HSK 4 ---
  {
    id: 'hsk4-interview',
    youtubeId: 'kvG7QF89Ddo', 
    title: 'HSK 4 Advanced: Job Interview Preparation',
    description: 'HSK 4 listening test material. Focus on professional vocabulary and formal sentence structures.',
    level: 4,
    thumbnailUrl: 'https://img.youtube.com/vi/kvG7QF89Ddo/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 6, chinese: '请你简单地介绍一下自己的工作经验。', pinyin: 'Qǐng nǐ jiǎndān de jièshào yīxià zìjǐ de gōngzuò jīngyàn.', english: 'Please briefly introduce your work experience.', words: [{ chinese: '简单', pinyin: 'jiǎndān', meaning: 'simple', hskLevel: 3 }, { chinese: '经验', pinyin: 'jīngyàn', meaning: 'experience', hskLevel: 4 }] },
      { startTime: 7, endTime: 13, chinese: '我曾在一家科技公司担任项目经理，主要负责市场研究。', pinyin: 'Wǒ céng zài yī jiā kējì gōngsī dānrèn xiàngmù jīnglǐ, zhǔyào fùzé shìchǎng yánjiū.', english: 'I previously worked at a tech company as a project manager, mainly responsible for market research.', words: [{ chinese: '科技', pinyin: 'kējì', meaning: 'science and tech', hskLevel: 4 }, { chinese: '负责', pinyin: 'fùzé', meaning: 'be responsible for', hskLevel: 4 }, { chinese: '研究', pinyin: 'yánjiū', meaning: 'research', hskLevel: 4 }] },
      { startTime: 14, endTime: 20, chinese: '如果你被录取，你打算怎么提高团队的效率？', pinyin: 'Rúguǒ nǐ bèi lùqǔ, nǐ dǎsuàn zěnme tígāo tuánduì de xiàolǜ?', english: 'If you are hired, how do you plan to improve the team\'s efficiency?', words: [{ chinese: '提高', pinyin: 'tígāo', meaning: 'improve', hskLevel: 3 }, { chinese: '效率', pinyin: 'xiàolǜ', meaning: 'efficiency', hskLevel: 5 }] }
    ]
  }
];

export function getImmersionVideoById(id: string) {
  return immersionVideos.find(v => v.id === id);
}
