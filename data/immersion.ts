import { ImmersionVideo } from './types';

export const immersionVideos: ImmersionVideo[] = [
  // --- HSK 1 ---
  {
    id: 'peppa-pig-intro',
    youtubeId: 'RT1yYLfqNhU', 
    title: 'Peppa Pig: Introduction',
    description: 'Learn family vocabulary and simple sentence structures by watching Peppa Pig introduce her family!',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/RT1yYLfqNhU/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 2, chinese: '我是粉红猪小妹。', pinyin: 'Wǒ shì Fěnhóng Zhū Xiǎomèi.', english: 'I am Peppa Pig.', words: [{ chinese: '我', pinyin: 'wǒ', meaning: 'I/me', hskLevel: 1 }, { chinese: '是', pinyin: 'shì', meaning: 'am/is/are', hskLevel: 1 }] },
      { startTime: 2, endTime: 4.5, chinese: '这是我的弟弟乔治。', pinyin: 'Zhè shì wǒ de dìdi Qiáozhì.', english: 'This is my little brother George.', words: [{ chinese: '这', pinyin: 'zhè', meaning: 'this', hskLevel: 1 }, { chinese: '弟弟', pinyin: 'dìdi', meaning: 'little brother', hskLevel: 2 }] },
      { startTime: 4.5, endTime: 6.5, chinese: '这是妈妈猪。', pinyin: 'Zhè shì māma zhū.', english: 'This is Mummy Pig.', words: [{ chinese: '妈妈', pinyin: 'māma', meaning: 'mother', hskLevel: 1 }] },
      { startTime: 6.5, endTime: 11, chinese: '这是爸爸猪。', pinyin: 'Zhè shì bàba zhū.', english: 'This is Daddy Pig.', words: [{ chinese: '爸爸', pinyin: 'bàba', meaning: 'father', hskLevel: 1 }] },
      { startTime: 12.5, endTime: 14.5, chinese: '泥坑。', pinyin: 'Ní kēng.', english: 'Muddy Puddles.', words: [{ chinese: '泥', pinyin: 'ní', meaning: 'mud', hskLevel: 4 }, { chinese: '坑', pinyin: 'kēng', meaning: 'puddle/hole', hskLevel: 5 }] },
      { startTime: 15, endTime: 18, chinese: '今天下雨了。', pinyin: 'Jīntiān xià yǔ le.', english: 'It is raining today.', words: [{ chinese: '今天', pinyin: 'jīntiān', meaning: 'today', hskLevel: 1 }, { chinese: '下雨', pinyin: 'xià yǔ', meaning: 'to rain', hskLevel: 1 }] },
      { startTime: 18.5, endTime: 22, chinese: '佩奇和乔治不能出去玩。', pinyin: 'Pèiqí hé Qiáozhì bù néng chūqù wán.', english: 'Peppa and George cannot go out to play.', words: [{ chinese: '不能', pinyin: 'bù néng', meaning: 'cannot', hskLevel: 1 }, { chinese: '出去', pinyin: 'chūqù', meaning: 'go out', hskLevel: 1 }, { chinese: '玩', pinyin: 'wán', meaning: 'play', hskLevel: 1 }] }
    ]
  },
  {
    id: 'basic-greetings',
    youtubeId: '4yvTsnB9vjE',
    title: 'Basic Greetings in China',
    description: 'Listen to native speakers saying hello and introducing themselves on the streets of Beijing.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/4yvTsnB9vjE/hqdefault.jpg',
    transcript: [
      { startTime: 1, endTime: 4, chinese: '你好！', pinyin: 'Nǐ hǎo!', english: 'Hello!', words: [{ chinese: '你好', pinyin: 'nǐ hǎo', meaning: 'hello', hskLevel: 1 }] },
      { startTime: 5, endTime: 9, chinese: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', english: 'What is your name?', words: [{ chinese: '叫', pinyin: 'jiào', meaning: 'to be called', hskLevel: 1 }, { chinese: '什么', pinyin: 'shénme', meaning: 'what', hskLevel: 1 }, { chinese: '名字', pinyin: 'míngzi', meaning: 'name', hskLevel: 1 }] },
      { startTime: 10, endTime: 14, chinese: '我叫李雷。', pinyin: 'Wǒ jiào Lǐ Léi.', english: 'My name is Li Lei.', words: [{ chinese: '我', pinyin: 'wǒ', meaning: 'I/me', hskLevel: 1 }] },
      { startTime: 15, endTime: 19, chinese: '认识你很高兴。', pinyin: 'Rènshi nǐ hěn gāoxìng.', english: 'Nice to meet you.', words: [{ chinese: '认识', pinyin: 'rènshi', meaning: 'to know/recognize', hskLevel: 1 }, { chinese: '高兴', pinyin: 'gāoxìng', meaning: 'happy', hskLevel: 1 }] },
      { startTime: 20, endTime: 24, chinese: '你也是北京人吗？', pinyin: 'Nǐ yě shì Běijīng rén ma?', english: 'Are you also from Beijing?', words: [{ chinese: '也', pinyin: 'yě', meaning: 'also', hskLevel: 1 }, { chinese: '人', pinyin: 'rén', meaning: 'person', hskLevel: 1 }] },
      { startTime: 25, endTime: 29, chinese: '不，我是上海人。', pinyin: 'Bù, wǒ shì Shànghǎi rén.', english: 'No, I am from Shanghai.', words: [{ chinese: '不', pinyin: 'bù', meaning: 'no/not', hskLevel: 1 }] },
      { startTime: 30, endTime: 35, chinese: '你住在哪儿？', pinyin: 'Nǐ zhù zài nǎr?', english: 'Where do you live?', words: [{ chinese: '住', pinyin: 'zhù', meaning: 'live', hskLevel: 1 }, { chinese: '哪儿', pinyin: 'nǎr', meaning: 'where', hskLevel: 1 }] },
      { startTime: 36, endTime: 40, chinese: '我住在这里。', pinyin: 'Wǒ zhù zài zhèlǐ.', english: 'I live here.', words: [{ chinese: '这里', pinyin: 'zhèlǐ', meaning: 'here', hskLevel: 1 }] }
    ]
  },
  {
    id: 'chinese-numbers',
    youtubeId: 'aSP6ZDckdV0',
    title: 'Chinese Numbers 1 to 10',
    description: 'Learn how to count from one to ten in Chinese with this simple and catchy video.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/aSP6ZDckdV0/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '一起来数数吧！', pinyin: 'Yì qǐ lái shǔ shǔ ba!', english: 'Let us count together!', words: [{ chinese: '一起', pinyin: 'yìqǐ', meaning: 'together', hskLevel: 2 }] },
      { startTime: 5, endTime: 8, chinese: '一，二，三', pinyin: 'Yī, èr, sān', english: 'One, two, three', words: [{ chinese: '一', pinyin: 'yī', meaning: 'one', hskLevel: 1 }, { chinese: '二', pinyin: 'èr', meaning: 'two', hskLevel: 1 }, { chinese: '三', pinyin: 'sān', meaning: 'three', hskLevel: 1 }] },
      { startTime: 9, endTime: 12, chinese: '四，五，六', pinyin: 'Sì, wǔ, liù', english: 'Four, five, six', words: [{ chinese: '四', pinyin: 'sì', meaning: 'four', hskLevel: 1 }, { chinese: '五', pinyin: 'wǔ', meaning: 'five', hskLevel: 1 }, { chinese: '六', pinyin: 'liù', meaning: 'six', hskLevel: 1 }] },
      { startTime: 13, endTime: 16, chinese: '七，八，九', pinyin: 'Qī, bā, jiǔ', english: 'Seven, eight, nine', words: [{ chinese: '七', pinyin: 'qī', meaning: 'seven', hskLevel: 1 }, { chinese: '八', pinyin: 'bā', meaning: 'eight', hskLevel: 1 }, { chinese: '九', pinyin: 'jiǔ', meaning: 'nine', hskLevel: 1 }] },
      { startTime: 17, endTime: 20, chinese: '十！', pinyin: 'Shí!', english: 'Ten!', words: [{ chinese: '十', pinyin: 'shí', meaning: 'ten', hskLevel: 1 }] },
      { startTime: 21, endTime: 25, chinese: '你学会了吗？', pinyin: 'Nǐ xué huì le ma?', english: 'Did you learn it?', words: [{ chinese: '学', pinyin: 'xué', meaning: 'learn', hskLevel: 1 }] },
      { startTime: 26, endTime: 30, chinese: '再来一次！', pinyin: 'Zài lái yí cì!', english: 'One more time!', words: [{ chinese: '再', pinyin: 'zài', meaning: 'again', hskLevel: 2 }] }
    ]
  },
  {
    id: 'family-members',
    youtubeId: 'wftG_-vZnHk',
    title: 'Family Members in Chinese',
    description: 'Learn the essential vocabulary for family members in Mandarin.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/wftG_-vZnHk/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '我的家', pinyin: 'Wǒ de jiā', english: 'My family', words: [{ chinese: '家', pinyin: 'jiā', meaning: 'family/home', hskLevel: 1 }] },
      { startTime: 5, endTime: 8, chinese: '我家有四口人。', pinyin: 'Wǒ jiā yǒu sì kǒu rén.', english: 'There are four people in my family.', words: [{ chinese: '有', pinyin: 'yǒu', meaning: 'have', hskLevel: 1 }] },
      { startTime: 9, endTime: 12, chinese: '爸爸，妈妈', pinyin: 'Bàba, māma', english: 'Dad, mom', words: [{ chinese: '爸爸', pinyin: 'bàba', meaning: 'father', hskLevel: 1 }, { chinese: '妈妈', pinyin: 'māma', meaning: 'mother', hskLevel: 1 }] },
      { startTime: 13, endTime: 16, chinese: '哥哥和我。', pinyin: 'Gēge hé wǒ.', english: 'Older brother and me.', words: [{ chinese: '哥哥', pinyin: 'gēge', meaning: 'older brother', hskLevel: 2 }, { chinese: '和', pinyin: 'hé', meaning: 'and', hskLevel: 1 }] },
      { startTime: 17, endTime: 20, chinese: '我爱我的家。', pinyin: 'Wǒ ài wǒ de jiā.', english: 'I love my family.', words: [{ chinese: '爱', pinyin: 'ài', meaning: 'love', hskLevel: 1 }] },
      { startTime: 21, endTime: 25, chinese: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', english: 'How many people are in your family?', words: [{ chinese: '几', pinyin: 'jǐ', meaning: 'how many', hskLevel: 1 }] },
      { startTime: 26, endTime: 30, chinese: '他们是谁？', pinyin: 'Tāmen shì shéi?', english: 'Who are they?', words: [{ chinese: '谁', pinyin: 'shéi', meaning: 'who', hskLevel: 1 }] }
    ]
  },

  // --- HSK 2 ---
  {
    id: 'ordering-boba',
    youtubeId: 'aTiOxfqIaB8', 
    title: 'Ordering Bubble Tea in China',
    description: 'A vlog showing a real-life interaction of ordering Boba at a local Chinese shop. Great for listening practice.',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/aTiOxfqIaB8/hqdefault.jpg',
    transcript: [
      { startTime: 2, endTime: 5, chinese: '你好！你想喝什么？', pinyin: 'Nǐ hǎo! Nǐ xiǎng hē shénme?', english: 'Hello! What would you like to drink?', words: [{ chinese: '想', pinyin: 'xiǎng', meaning: 'want to', hskLevel: 1 }, { chinese: '喝', pinyin: 'hē', meaning: 'drink', hskLevel: 1 }] },
      { startTime: 6, endTime: 10, chinese: '我要一杯珍珠奶茶。', pinyin: 'Wǒ yào yì bēi zhēnzhū nǎichá.', english: 'I want a bubble tea.', words: [{ chinese: '杯', pinyin: 'bēi', meaning: 'cup', hskLevel: 1 }] },
      { startTime: 11, endTime: 15, chinese: '半糖，少冰。', pinyin: 'Bàn táng, shǎo bīng.', english: 'Half sugar, less ice.', words: [{ chinese: '少', pinyin: 'shǎo', meaning: 'less', hskLevel: 1 }] },
      { startTime: 16, endTime: 20, chinese: '好的，一共十五块。', pinyin: 'Hǎo de, yígòng shíwǔ kuài.', english: 'Okay, total is fifteen kuai.', words: [{ chinese: '一共', pinyin: 'yígòng', meaning: 'altogether', hskLevel: 2 }, { chinese: '块', pinyin: 'kuài', meaning: 'yuan (colloquial)', hskLevel: 1 }] },
      { startTime: 21, endTime: 25, chinese: '给你钱。', pinyin: 'Gěi nǐ qián.', english: 'Here is the money.', words: [{ chinese: '给', pinyin: 'gěi', meaning: 'give', hskLevel: 2 }, { chinese: '钱', pinyin: 'qián', meaning: 'money', hskLevel: 1 }] },
      { startTime: 26, endTime: 30, chinese: '谢谢，请等一下。', pinyin: 'Xièxie, qǐng děng yíxià.', english: 'Thank you, please wait a moment.', words: [{ chinese: '请', pinyin: 'qǐng', meaning: 'please', hskLevel: 1 }, { chinese: '等', pinyin: 'děng', meaning: 'wait', hskLevel: 2 }] }
    ]
  },
  {
    id: 'taking-a-taxi',
    youtubeId: 'L2v1PKUqUJc', 
    title: 'Taking a Taxi to the Airport',
    description: 'Learn practical phrases for giving directions and talking to taxi drivers in Chinese.',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/L2v1PKUqUJc/hqdefault.jpg',
    transcript: [
      { startTime: 1, endTime: 4, chinese: '师傅，去机场。', pinyin: 'Shīfu, qù jīchǎng.', english: 'Driver, to the airport.', words: [{ chinese: '师傅', pinyin: 'shīfu', meaning: 'master/driver (polite)', hskLevel: 3 }, { chinese: '去', pinyin: 'qù', meaning: 'go', hskLevel: 1 }, { chinese: '机场', pinyin: 'jīchǎng', meaning: 'airport', hskLevel: 2 }] },
      { startTime: 5, endTime: 8, chinese: '好的。你几点的飞机？', pinyin: 'Hǎo de. Nǐ jǐ diǎn de fēijī?', english: 'Okay. What time is your flight?', words: [{ chinese: '几点', pinyin: 'jǐ diǎn', meaning: 'what time', hskLevel: 1 }, { chinese: '飞机', pinyin: 'fēijī', meaning: 'airplane', hskLevel: 1 }] },
      { startTime: 9, endTime: 13, chinese: '下午两点的飞机。', pinyin: 'Xiàwǔ liǎng diǎn de fēijī.', english: '2 PM flight.', words: [{ chinese: '下午', pinyin: 'xiàwǔ', meaning: 'afternoon', hskLevel: 1 }, { chinese: '两', pinyin: 'liǎng', meaning: 'two', hskLevel: 1 }] },
      { startTime: 14, endTime: 18, chinese: '现在有点堵车。', pinyin: 'Xiànzài yǒudiǎn dǔchē.', english: 'There is a little traffic jam now.', words: [{ chinese: '现在', pinyin: 'xiànzài', meaning: 'now', hskLevel: 1 }] },
      { startTime: 19, endTime: 23, chinese: '没关系，我不着急。', pinyin: 'Méi guānxi, wǒ bù zháojí.', english: 'It does not matter, I am not in a hurry.', words: [{ chinese: '没关系', pinyin: 'méi guānxi', meaning: 'no problem', hskLevel: 1 }] }
    ]
  },

  // --- HSK 3 ---
  {
    id: 'renting-apartment',
    youtubeId: 'Y2bezj9kI-o', 
    title: 'Renting an Apartment in Shanghai',
    description: 'Advanced listening practice discussing rent, utilities, and location with a real estate agent.',
    level: 3,
    thumbnailUrl: 'https://img.youtube.com/vi/Y2bezj9kI-o/hqdefault.jpg',
    transcript: [
      { startTime: 5, endTime: 8, chinese: '这个房子的租金是一个月五千块。', pinyin: 'Zhège fángzi de zūjīn shì yī gè yuè wǔqiān kuài.', english: 'The rent for this house is 5000 yuan a month.', words: [{ chinese: '房子', pinyin: 'fángzi', meaning: 'house/apartment', hskLevel: 3 }] },
      { startTime: 9, endTime: 12, chinese: '附近有地铁站吗？', pinyin: 'Fùjìn yǒu dìtiě zhàn ma?', english: 'Is there a subway station nearby?', words: [{ chinese: '附近', pinyin: 'fùjìn', meaning: 'nearby', hskLevel: 3 }, { chinese: '地铁', pinyin: 'dìtiě', meaning: 'subway', hskLevel: 3 }, { chinese: '站', pinyin: 'zhàn', meaning: 'station', hskLevel: 3 }] },
      { startTime: 13, endTime: 17, chinese: '有，走五分钟就到了。', pinyin: 'Yǒu, zǒu wǔ fēnzhōng jiù dào le.', english: 'Yes, it takes five minutes to walk there.', words: [{ chinese: '走', pinyin: 'zǒu', meaning: 'walk', hskLevel: 2 }, { chinese: '分钟', pinyin: 'fēnzhōng', meaning: 'minute', hskLevel: 1 }] },
      { startTime: 18, endTime: 22, chinese: '水电费怎么算？', pinyin: 'Shuǐdiànfèi zěnme suàn?', english: 'How are the water and electricity bills calculated?', words: [{ chinese: '怎么', pinyin: 'zěnme', meaning: 'how', hskLevel: 1 }] },
      { startTime: 23, endTime: 28, chinese: '每个月自己交。', pinyin: 'Měi gè yuè zìjǐ jiāo.', english: 'You pay them yourself every month.', words: [{ chinese: '月', pinyin: 'yuè', meaning: 'month', hskLevel: 1 }, { chinese: '自己', pinyin: 'zìjǐ', meaning: 'oneself', hskLevel: 3 }] }
    ]
  },

  // --- HSK 4 ---
  {
    id: 'job-interview',
    youtubeId: 'kvG7QF89Ddo', 
    title: 'A Corporate Job Interview',
    description: 'Listen to a formal job interview in Chinese. Focus on professional vocabulary and formal sentence structures.',
    level: 4,
    thumbnailUrl: 'https://img.youtube.com/vi/kvG7QF89Ddo/hqdefault.jpg',
    transcript: [
      { startTime: 10, endTime: 14, chinese: '请你简单地介绍一下自己的工作经验。', pinyin: 'Qǐng nǐ jiǎndān de jièshào yīxià zìjǐ de gōngzuò jīngyàn.', english: 'Please briefly introduce your work experience.', words: [{ chinese: '简单', pinyin: 'jiǎndān', meaning: 'simple/brief', hskLevel: 3 }, { chinese: '介绍', pinyin: 'jièshào', meaning: 'introduce', hskLevel: 2 }, { chinese: '经验', pinyin: 'jīngyàn', meaning: 'experience', hskLevel: 4 }] },
      { startTime: 15, endTime: 20, chinese: '我曾在一家科技公司担任项目经理。', pinyin: 'Wǒ céng zài yī jiā kējì gōngsī dānrèn xiàngmù jīnglǐ.', english: 'I previously worked at a tech company as a project manager.', words: [{ chinese: '科技', pinyin: 'kējì', meaning: 'science and technology', hskLevel: 4 }, { chinese: '公司', pinyin: 'gōngsī', meaning: 'company', hskLevel: 2 }] },
      { startTime: 21, endTime: 26, chinese: '主要负责市场研究和团队管理。', pinyin: 'Zhǔyào fùzé shìchǎng yánjiū hé tuánduì guǎnlǐ.', english: 'Mainly responsible for market research and team management.', words: [{ chinese: '主要', pinyin: 'zhǔyào', meaning: 'main/principal', hskLevel: 3 }, { chinese: '负责', pinyin: 'fùzé', meaning: 'to be responsible for', hskLevel: 4 }, { chinese: '市场', pinyin: 'shìchǎng', meaning: 'market', hskLevel: 4 }] },
      { startTime: 27, endTime: 32, chinese: '为什么想来我们公司工作？', pinyin: 'Wèishénme xiǎng lái wǒmen gōngsī gōngzuò?', english: 'Why do you want to come work at our company?', words: [{ chinese: '为什么', pinyin: 'wèishénme', meaning: 'why', hskLevel: 1 }, { chinese: '工作', pinyin: 'gōngzuò', meaning: 'job/work', hskLevel: 1 }] }
    ]
  }
];

export const getImmersionVideoById = (id: string) => immersionVideos.find(v => v.id === id);
