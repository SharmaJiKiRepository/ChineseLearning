import { Situation } from './types';

export const situations: Situation[] = [
  // --- HSK 1 ---
  {
    id: 'greetings-basics',
    title: 'Greetings & Introductions',
    description: 'Learn how to say hello, ask for names, and introduce yourself to a native speaker.',
    level: 1,
    icon: '👋',
    aiPrompt: 'You are a friendly Chinese native speaker. I am a foreigner. Ask me my name and where I am from using HSK 1 vocabulary. Do not use complex grammar.',
    dialogue: [
      {
        character: 'A',
        chinese: '你好！',
        pinyin: 'Nǐ hǎo!',
        english: 'Hello!',
        hindiPronunciation: 'नी हाओ!'
      },
      {
        character: 'B',
        chinese: '你好！认识你很高兴。',
        pinyin: 'Nǐ hǎo! Rènshí nǐ hěn gāoxìng.',
        english: 'Hello! Nice to meet you.',
        hindiPronunciation: 'नी हाओ! रेनशी नी हन गाओशिंग.'
      },
      {
        character: 'A',
        chinese: '认识你很高兴。你叫什么名字？',
        pinyin: 'Rènshí nǐ hěn gāoxìng. Nǐ jiào shénme míngzì?',
        english: 'Nice to meet you too. What is your name?',
        hindiPronunciation: 'रेनशी नी वो ये हन गाओशिंग. नी जियाओ शेनमे मिंग्जी?'
      },
      {
        character: 'B',
        chinese: '我叫小明。你呢？',
        pinyin: 'Wǒ jiào Xiǎomíng. Nǐ ne?',
        english: 'My name is David. And you?',
        hindiPronunciation: 'वो जियाओ दा वेई. नी ने?'
      },
      {
        character: 'A',
        chinese: '我叫小月。你是哪国人？',
        pinyin: 'Wǒ jiào Xiǎoyuè. Nǐ shì nǎ guó rén?',
        english: 'My name is Li Hua. Which country are you from?',
        hindiPronunciation: 'वो जियाओ ली हुआ. नी शी ना गुओ रेन?'
      },
      {
        character: 'B',
        chinese: '我是北京人。你呢？',
        pinyin: 'Wǒ shì Běijīng rén. Nǐ ne?',
        english: 'I am American. And you?',
        hindiPronunciation: 'वो शी मेई गुओ रेन. नी ने?'
      },
      {
        character: 'A',
        chinese: '我是中国人。',
        pinyin: 'Wǒ shì Zhōngguó rén.',
        english: 'I am Chinese.',
        hindiPronunciation: 'वो शी जोंग गुओ रेन.'
      },
      {
        character: 'B',
        chinese: '你是老师吗？',
        pinyin: 'Nǐ shì lǎoshī ma?',
        english: 'Are you a teacher?',
        hindiPronunciation: 'नी शी लाओशी मा?'
      },
      {
        character: 'A',
        chinese: '不是，我是学生。',
        pinyin: 'Bù shì, wǒ shì xuéshēng.',
        english: 'No, I am a student.',
        hindiPronunciation: 'बू शी, वो शी शुएशेंग.'
      },
      {
        character: 'B',
        chinese: '太好了！我们是朋友。',
        pinyin: 'Tài hǎo le! Wǒmen shì péngyǒu.',
        english: 'Great! We are friends.',
        hindiPronunciation: 'ताई हाओ ले! वोमेन शी पेंग्यो.'
      }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'What is your name?',
        correctChinese: '你叫什么名字',
        blocks: [
          { chinese: '什么', pinyin: 'shénme' },
          { chinese: '叫', pinyin: 'jiào' },
          { chinese: '名字', pinyin: 'míngzì' },
          { chinese: '你', pinyin: 'nǐ' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'I am American.',
        correctChinese: '我是北京人',
        blocks: [
          { chinese: '人', pinyin: 'rén' },
          { chinese: '是', pinyin: 'shì' },
          { chinese: '我', pinyin: 'wǒ' },
          { chinese: '北京', pinyin: 'Běijīng' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Are you a teacher?',
        correctChinese: '你是老师吗',
        blocks: [
          { chinese: '吗', pinyin: 'ma' },
          { chinese: '老师', pinyin: 'lǎoshī' },
          { chinese: '你', pinyin: 'nǐ' },
          { chinese: '是', pinyin: 'shì' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'I am not a student.',
        correctChinese: '我不是学生',
        blocks: [
          { chinese: '是', pinyin: 'shì' },
          { chinese: '学生', pinyin: 'xuéshēng' },
          { chinese: '不', pinyin: 'bù' },
          { chinese: '我', pinyin: 'wǒ' }
        ]
      }
    ]
  },
  {
    id: 'cafe-ordering',
    title: 'Ordering at a Cafe',
    description: 'Learn how to order drinks, ask about prices, and interact with a barista.',
    level: 1,
    icon: '☕',
    aiPrompt: 'You are a barista at a Chinese coffee shop. Greet me, ask what I want to drink, and tell me the price. Keep vocabulary HSK 1 level.',
    dialogue: [
      { character: 'Barista', chinese: '你好！你想喝什么？', pinyin: 'Nǐ hǎo! Nǐ xiǎng hē shénme?', english: 'Welcome! What do you want to drink?', hindiPronunciation: 'हुआनयिंग गुआंगलिन! नी याओ हे शेनमे?' },
      { character: 'You', chinese: '你好，我想喝茶。', pinyin: 'Nǐ hǎo, wǒ xiǎng hē chá.', english: 'Hello, I want a cup of coffee.', hindiPronunciation: 'नी हाओ, वो याओ यी बेई काफेई.' },
      { character: 'Barista', chinese: '好的，你想吃什么？', pinyin: 'Hǎo de, nǐ xiǎng chī shénme?', english: 'Okay, do you want a large or small one?', hindiPronunciation: 'हाओ दे, याओ दा दे हाईशी शियाओ दे?' },
      { character: 'You', chinese: '我想吃米饭。多少钱？', pinyin: 'Wǒ xiǎng chī mǐfàn. Duōshǎo qián?', english: 'I want a large one. How much is it?', hindiPronunciation: 'याओ दा दे. दुओशाओ छ्यान?' },
      { character: 'Barista', chinese: '三十块。', pinyin: 'Sānshí kuài.', english: 'A large coffee is 30 yuan.', hindiPronunciation: 'दा बेई काफेई सानशी कुआई.' },
      { character: 'You', chinese: '好的，给你钱。', pinyin: 'Hǎo de, gěi nǐ qián.', english: 'Okay, here is the money.', hindiPronunciation: 'हाओ दे, गेई नी छ्यान.' },
      { character: 'Barista', chinese: '谢谢，这是你的茶。', pinyin: 'Xièxiè, zhè shì nǐ de chá.', english: 'Thank you, here is your coffee.', hindiPronunciation: 'शिएशिए, झे शी नी दे काफेई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'I want a cup of coffee.',
        correctChinese: '我想喝茶',
        blocks: [
          { chinese: '茶', pinyin: 'chá' },
          { chinese: '我', pinyin: 'wǒ' },
          { chinese: '想', pinyin: 'xiǎng' },
          { chinese: '喝', pinyin: 'hē' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'How much money is it?',
        correctChinese: '多少钱',
        blocks: [
          { chinese: '钱', pinyin: 'qián' },
          { chinese: '多少', pinyin: 'duōshǎo' }
        ]
      }
    ]
  },
  {
    id: 'shopping-haggling',
    title: 'Shopping & Haggling',
    description: 'Learn how to ask for prices, express opinions on items, and haggle slightly.',
    level: 1,
    icon: '🛍️',
    aiPrompt: 'You are a shopkeeper in a Chinese market. I am looking at clothes. Ask me what I want to buy and try to sell it to me. Keep it to HSK 1 level vocabulary.',
    dialogue: [
      { character: 'Shopkeeper', chinese: '你想买什么？', pinyin: 'Nǐ xiǎng mǎi shénme?', english: 'What do you want to buy?', hindiPronunciation: 'नी शियांग माई शेनमे?' },
      { character: 'You', chinese: '我想买衣服。这个多少钱？', pinyin: 'Wǒ xiǎng mǎi yīfú. Zhège duōshǎo qián?', english: 'I want to buy clothes. How much is this?', hindiPronunciation: 'वो शियांग माई यीफू. झेगे दुओशाओ छ्यान?' },
      { character: 'Shopkeeper', chinese: '这个五十块。很漂亮！', pinyin: 'Zhège wǔshí kuài. Hěn piàoliang!', english: 'This is 50 yuan. Very pretty!', hindiPronunciation: 'झेगे वूशी कुआई. हन पियाोलियांग!' },
      { character: 'You', chinese: '太大了！三十块，好吗？', pinyin: 'Tài dà le! Sānshí kuài, hǎo ma?', english: 'Too expensive! 30 yuan, okay?', hindiPronunciation: 'ताई गुई ले! सानशी कुआई, हाओ मा?' },
      { character: 'Shopkeeper', chinese: '三十块太少了。四十块！', pinyin: 'Sānshí kuài tài shǎo le. Sìshí kuài!', english: '30 yuan is too little. 40 yuan!', hindiPronunciation: 'सानशी कुआई ताई शाओ ले. सीशी कुआई!' },
      { character: 'You', chinese: '好的，我买这个。', pinyin: 'Hǎo de, wǒ mǎi zhège.', english: 'Okay, I will buy this.', hindiPronunciation: 'हाओ दे, वो माई झेगे.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'This is too expensive!',
        correctChinese: '太大了',
        blocks: [
          { chinese: '大', pinyin: 'dà' },
          { chinese: '太', pinyin: 'tài' },
          { chinese: '了', pinyin: 'le' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'What do you want to buy?',
        correctChinese: '你想买什么',
        blocks: [
          { chinese: '想', pinyin: 'xiǎng' },
          { chinese: '什么', pinyin: 'shénme' },
          { chinese: '你', pinyin: 'nǐ' },
          { chinese: '买', pinyin: 'mǎi' }
        ]
      }
    ]
  },
  {
    id: 'taking-taxi',
    title: 'Taking a Taxi',
    description: 'Learn how to direct a taxi driver, ask them to stop, and pay the fare.',
    level: 1,
    icon: '🚕',
    aiPrompt: 'You are a taxi driver in Beijing. Greet me, ask where I want to go, and respond to my directions using simple HSK 1 level Chinese.',
    dialogue: [
      { character: 'Driver', chinese: '你好，去哪里？', pinyin: 'Nǐ hǎo, qù nǎlǐ?', english: 'Hello, where to?', hindiPronunciation: 'नी हाओ, छू नाली?' },
      { character: 'You', chinese: '我去医院。', pinyin: 'Wǒ qù yīyuàn.', english: 'I am going to the train station.', hindiPronunciation: 'वो छू हुओचे झान.' },
      { character: 'Driver', chinese: '好的。', pinyin: 'Hǎo de.', english: 'Okay. Please fasten your seatbelt.', hindiPronunciation: 'हाओ दे. छिंग शी हाओ आन्छुअन्दाई.' },
      { character: 'You', chinese: '什么时候在医院？', pinyin: 'Shénme shíhòu zài yīyuàn?', english: 'When will we arrive?', hindiPronunciation: 'वोमेन शेनमे शीहोउ दाओ?' },
      { character: 'Driver', chinese: '十分钟。', pinyin: 'Shífēn zhōng.', english: 'Ten minutes.', hindiPronunciation: 'शीफेन जोंग.' },
      { character: 'You', chinese: '前面，谢谢。', pinyin: 'Qiánmiàn, xièxie.', english: 'Please stop ahead. Thank you.', hindiPronunciation: 'छ्यानमियाँ टिंग यीशिया. शिएशिए.' },
      { character: 'Driver', chinese: '好的。二十五块。', pinyin: 'Hǎo de. Èrshíwǔ kuài.', english: 'We have arrived. Altogether 25 yuan.', hindiPronunciation: 'दाओ ले. यीगोंग अरशीवू कुआई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Where are you going?',
        correctChinese: '你去哪里',
        blocks: [
          { chinese: '去', pinyin: 'qù' },
          { chinese: '哪里', pinyin: 'nǎlǐ' },
          { chinese: '你', pinyin: 'nǐ' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'When will we arrive?',
        correctChinese: '什么时候在',
        blocks: [
          { chinese: '什么时候', pinyin: 'shénme shíhòu' },
          { chinese: '在', pinyin: 'zài' },
          { chinese: '我们', pinyin: 'wǒmen' }
        ]
      }
    ]
  },
  {
    id: 'family-introductions',
    title: 'Talking about Family',
    description: 'Learn to talk about your family members and ask others about theirs.',
    level: 1,
    icon: '👨‍👩‍👧‍👦',
    aiPrompt: 'You are a new friend. Ask me about my family members, if I have siblings, and how many people are in my family using HSK 1 vocabulary.',
    dialogue: [
      { character: 'Friend', chinese: '你家有几个人？', pinyin: 'Nǐ jiā yǒu jǐ gè rén?', english: 'How many people are in your family?', hindiPronunciation: 'नी जिया योउ जी कोउ रेन?' },
      { character: 'You', chinese: '我家有三个人：爸爸、妈妈和我。', pinyin: 'Wǒ jiā yǒu sān gè rén: bàba, māma hé wǒ.', english: 'There are three people in my family: dad, mom, and me.', hindiPronunciation: 'वो जिया योउ सान कोउ रेन: बाबा, मामा हे वो.' },
      { character: 'Friend', chinese: '你有儿子吗？', pinyin: 'Nǐ yǒu érzi ma?', english: 'Do you have an older brother or older sister?', hindiPronunciation: 'नी योउ मेइयोउ गेगे हुओ जिएजिए?' },
      { character: 'You', chinese: '我没有儿子，也没有女儿。你呢？', pinyin: "Wǒ méiyǒu érzi, yě méiyǒu nǚ'ér. Nǐ ne?", english: "I don't have an older brother, nor an older sister. And you?", hindiPronunciation: 'वो मेइयोउ गेगे, ये मेइयोउ जिएजिए. नी ने?' },
      { character: 'Friend', chinese: '我有一个儿子。他今年十岁。', pinyin: 'Wǒ yǒu yī gè érzi. Tā jīnnián shí suì.', english: 'I have a younger brother. He is ten years old this year.', hindiPronunciation: 'वो योउ यी गे दीदी. ता जिननियन शी सुई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'How many people are in your family?',
        correctChinese: '你家有几个人',
        blocks: [
          { chinese: '几', pinyin: 'jǐ' },
          { chinese: '家', pinyin: 'jiā' },
          { chinese: '有', pinyin: 'yǒu' },
          { chinese: '人', pinyin: 'rén' },
          { chinese: '个', pinyin: 'gè' },
          { chinese: '你', pinyin: 'nǐ' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'I have a younger brother.',
        correctChinese: '我有一个儿子',
        blocks: [
          { chinese: '一个', pinyin: 'yī gè' },
          { chinese: '弟弟', pinyin: 'érzi' },
          { chinese: '有', pinyin: 'yǒu' },
          { chinese: '我', pinyin: 'wǒ' }
        ]
      }
    ]
  },
  // --- HSK 2 ---
  {
    id: 'asking-directions',
    title: 'Asking for Directions',
    description: 'Navigate the city, ask for street directions, and understand distance.',
    level: 2,
    icon: '🗺️',
    aiPrompt: 'You are a local on the street. I am asking you how to get to the hospital. Tell me it is straight ahead and then turn right, using HSK 2 vocabulary.',
    dialogue: [
      { character: 'You', chinese: '请问，去医院怎么走？', pinyin: 'Qǐngwèn, qù yīyuàn zěnme zǒu?', english: 'Excuse me, how do I get to the hospital?', hindiPronunciation: 'छिंगवेन, छू यीयुआन ज़ेनमे ज़ोउ?' },
      { character: 'Local', chinese: '在前面。', pinyin: 'Zài qiánmiàn.', english: 'Go straight ahead, then turn right.', hindiPronunciation: 'यीझी वांग छ्यान ज़ोउ, रानहोउ योउ झुआन.' },
      { character: 'You', chinese: '医院大吗？', pinyin: 'Yīyuàn dà ma?', english: 'Is it far from here?', hindiPronunciation: 'ली झेली युआन मा?' },
      { character: 'Local', chinese: '不大。', pinyin: 'Bù dà.', english: 'Not far, a ten-minute walk and you will arrive.', hindiPronunciation: 'बू युआन, ज़ोउलू शी फेनजोंग जिउ दाओ ले.' },
      { character: 'You', chinese: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you very much!', hindiPronunciation: 'फेइचांग गानशिए!' },
      { character: 'Local', chinese: '不客气。', pinyin: 'Bù kèqì.', english: 'You are welcome.', hindiPronunciation: 'बू केछी.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'How do I get to the hospital?',
        correctChinese: '去医院怎么走',
        blocks: [
          { chinese: '走', pinyin: 'zǒu' },
          { chinese: '怎么', pinyin: 'zěnme' },
          { chinese: '医院', pinyin: 'yīyuàn' },
          { chinese: '去', pinyin: 'qù' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Is it far from here?',
        correctChinese: '医院大吗',
        blocks: [
          { chinese: '吗', pinyin: 'ma' },
          { chinese: '这里', pinyin: 'zhèlǐ' },
          { chinese: '大', pinyin: 'dà' },
          { chinese: '离', pinyin: 'lí' }
        ]
      }
    ]
  },
  {
    id: 'health-body',
    title: 'Seeing a Doctor',
    description: 'Explain symptoms, talk about body parts, and buy medicine.',
    level: 2,
    icon: '🏥',
    aiPrompt: 'You are a doctor in China. Ask me what is wrong. I will tell you my stomach hurts. Prescribe me medicine and tell me to rest, using HSK 2 vocabulary.',
    dialogue: [
      { character: 'Doctor', chinese: '你怎么样？', pinyin: 'Nǐ zěnmeyàng?', english: 'Where do you feel unwell?', hindiPronunciation: 'नी नाली बू शूफ़ू?' },
      { character: 'You', chinese: '我生病了。', pinyin: 'Wǒ shēngbìng le.', english: 'My stomach hurts, and I also feel a little feverish.', hindiPronunciation: 'वो दूज़ी तेंग, हाई जुएदे योउदियन फाशाओ.' },
      { character: 'Doctor', chinese: '你吃错东西了吗？', pinyin: 'Nǐ chī cuò dōngxī le ma?', english: 'Did you eat something bad?', hindiPronunciation: 'नी ची चुओ दोंगशी ले मा?' },
      { character: 'You', chinese: '可能是昨天晚上的米饭。', pinyin: 'Kěnéng shì zuótiān wǎnshàng de mǐfàn.', english: 'Maybe it was the seafood from last night.', hindiPronunciation: 'केनेंग शी ज़ुओतियां वानशांग दे हाईशियान.' },
      { character: 'Doctor', chinese: '你需要吃药，多喝水，多休息。', pinyin: 'Nǐ xūyào chī yào, duō hē shuǐ, duō xiūxí.', english: 'You need to take medicine, drink more water, and rest more.', hindiPronunciation: 'नी शुयाओ ची याओ, दुओ हे शुई, दुओ शिउशी.' },
      { character: 'You', chinese: '好的，谢谢医生。', pinyin: 'Hǎo de, xièxiè yīshēng.', english: 'Okay, thank you doctor.', hindiPronunciation: 'हाओ दे, शिएशिए यीशेंग.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Where do you feel unwell?',
        correctChinese: '你怎么样',
        blocks: [
          { chinese: '生病', pinyin: 'shēngbìng' },
          { chinese: '哪里', pinyin: 'nǎlǐ' },
          { chinese: '你', pinyin: 'nǐ' },
          { chinese: '不', pinyin: 'bù' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'My stomach hurts.',
        correctChinese: '我生病了',
        blocks: [
          { chinese: '了', pinyin: 'le' },
          { chinese: '生病', pinyin: 'shēngbìng' },
          { chinese: '我', pinyin: 'wǒ' }
        ]
      }
    ]
  },
  {
    id: 'ordering-food',
    title: 'Ordering in a Restaurant',
    description: 'Learn how to order food, ask for the bill, and express your preferences.',
    level: 2,
    icon: '🍜',
    aiPrompt: 'You are a waiter in a Chinese restaurant. Welcome me, ask what I want to eat, and recommend a dish. Use HSK 2 vocabulary.',
    vocabulary: [
      { chinese: '点菜', pinyin: 'diǎn cài', english: 'to order food' },
      { chinese: '好吃', pinyin: 'hǎo chī', english: 'delicious' },
      { chinese: '服务员', pinyin: 'fú wù yuán', english: 'waiter/waitress' },
      { chinese: '买单', pinyin: 'mǎi dān', english: 'to pay the bill' }
    ],
    dialogue: [
      { character: 'Waiter', chinese: '欢迎光临！请问您想吃什么？', pinyin: 'Huānyíng guānglín! Qǐngwèn nín xiǎng chī shénme?', english: 'Welcome! What would you like to eat?', hindiPronunciation: 'हुआनयिंग गुआंगलिन! छिंगवेन निन शियांग ची शेनमे?' },
      { character: 'You', chinese: '服务员，我想点菜。你们的牛肉面好吃吗？', pinyin: 'Fúwùyuán, wǒ xiǎng diǎncài. Nǐmen de niúròumiàn hǎochī ma?', english: 'Waiter, I would like to order. Is your beef noodle soup delicious?', hindiPronunciation: 'फूवूयुआन, वो शियांग दियानचाई. नीमेन दे निउरोउमियान हाओची मा?' },
      { character: 'Waiter', chinese: '非常好吃！你要一碗吗？', pinyin: 'Fēicháng hǎochī! Nǐ yào yī wǎn ma?', english: 'Very delicious! Do you want a bowl?', hindiPronunciation: 'फेइचांग हाओची! नी याओ यी वान मा?' },
      { character: 'You', chinese: '好的，要一碗。再要一杯绿茶。', pinyin: 'Hǎo de, yào yī wǎn. Zài yào yī bēi lǜchá.', english: 'Okay, I will take one bowl. And a glass of green tea.', hindiPronunciation: 'हाओ दे, याओ यी वान. ज़ाई याओ यी बेई लुचा.' },
      { character: 'Waiter', chinese: '好的，请等一下。', pinyin: 'Hǎo de, qǐng děng yíxià.', english: 'Okay, please wait a moment.', hindiPronunciation: 'हाओ दे, छिंग देंग यीशिया.' },
      { character: 'You', chinese: '服务员，买单。一共多少钱？', pinyin: 'Fúwùyuán, mǎidān. Yīgòng duōshǎo qián?', english: 'Waiter, bill please. How much is it altogether?', hindiPronunciation: 'फूवूयुआन, माईदान. यीगोंग दुओशाओ छ्यान?' },
      { character: 'Waiter', chinese: '一共四十五块。', pinyin: 'Yīgòng sìshíwǔ kuài.', english: 'It is 45 yuan altogether.', hindiPronunciation: 'यीगोंग सीशीवू कुआई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Waiter, I would like to order.',
        correctChinese: '服务员我想点菜',
        blocks: [
          { chinese: '我想', pinyin: 'wǒ xiǎng' },
          { chinese: '点菜', pinyin: 'diǎncài' },
          { chinese: '服务员', pinyin: 'fúwùyuán' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'How much is it altogether?',
        correctChinese: '一共多少钱',
        blocks: [
          { chinese: '一共', pinyin: 'yīgòng' },
          { chinese: '钱', pinyin: 'qián' },
          { chinese: '多少', pinyin: 'duōshǎo' }
        ]
      }
    ]
  },
  {
    id: 'hotel-booking',
    title: 'Booking a Hotel',
    description: 'Book a room, ask about breakfast, and handle check-in.',
    level: 2,
    icon: '🏨',
    aiPrompt: 'You are a hotel receptionist in Beijing. Greet me, ask if I have a reservation, and tell me the room number. Use HSK 2 vocabulary.',
    vocabulary: [
      { chinese: '房间', pinyin: 'fángjiān', english: 'room' },
      { chinese: '住', pinyin: 'zhù', english: 'to live/stay' },
      { chinese: '早饭', pinyin: 'zǎofàn', english: 'breakfast' },
      { chinese: '几天', pinyin: 'jǐ tiān', english: 'how many days' }
    ],
    dialogue: [
      { character: 'Receptionist', chinese: '你好，欢迎。你要住几天？', pinyin: 'Nǐ hǎo, huānyíng. Nǐ yào zhù jǐ tiān?', english: 'Hello, welcome. How many days will you stay?', hindiPronunciation: 'नी हाओ, हुआनयिंग. नी याओ झू जी तियान?' },
      { character: 'You', chinese: '你好，我要住三天。有房间吗？', pinyin: 'Nǐ hǎo, wǒ yào zhù sān tiān. Yǒu fángjiān ma?', english: 'Hello, I want to stay for three days. Do you have a room?', hindiPronunciation: 'नी हाओ, वो याओ झू सान तियान. योउ फांगजियान मा?' },
      { character: 'Receptionist', chinese: '有。你要大房间还是小房间？', pinyin: 'Yǒu. Nǐ yào dà fángjiān háishì xiǎo fángjiān?', english: 'Yes. Do you want a big room or a small room?', hindiPronunciation: 'योउ. नी याओ दा फांगजियान हाईशी शियाओ फांगजियान?' },
      { character: 'You', chinese: '我要大房间。有早饭吗？', pinyin: 'Wǒ yào dà fángjiān. Yǒu zǎofàn ma?', english: 'I want a big room. Is there breakfast?', hindiPronunciation: 'वो याओ दा फांगजियान. योउ ज़ाओफान मा?' },
      { character: 'Receptionist', chinese: '有早饭。你的房间是二零八。', pinyin: 'Yǒu zǎofàn. Nǐ de fángjiān shì èr líng bā.', english: 'There is breakfast. Your room is 208.', hindiPronunciation: 'योउ ज़ाओफान. नी दे फांगजियान शी अर लिंग बा.' },
      { character: 'You', chinese: '谢谢你。', pinyin: 'Xièxie nǐ.', english: 'Thank you.', hindiPronunciation: 'शिएशिए नी.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'How many days will you stay?',
        correctChinese: '你要住几天',
        blocks: [
          { chinese: '住', pinyin: 'zhù' },
          { chinese: '几天', pinyin: 'jǐ tiān' },
          { chinese: '你要', pinyin: 'nǐ yào' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'I want a big room.',
        correctChinese: '我要大房间',
        blocks: [
          { chinese: '大', pinyin: 'dà' },
          { chinese: '房间', pinyin: 'fángjiān' },
          { chinese: '我要', pinyin: 'wǒ yào' }
        ]
      }
    ]
  },
  {
    id: 'talking-hobbies',
    title: 'Talking about Hobbies',
    description: 'Learn how to discuss sports, music, and weekend activities.',
    level: 2,
    icon: '⚽',
    aiPrompt: 'You are a new classmate. Ask me what I like to do on the weekends and tell me your hobbies. Use HSK 2 vocabulary.',
    vocabulary: [
      { chinese: '运动', pinyin: 'yùndòng', english: 'sports/exercise' },
      { chinese: '唱歌', pinyin: 'chànggē', english: 'to sing' },
      { chinese: '周末', pinyin: 'zhōumò', english: 'weekend' },
      { chinese: '一起', pinyin: 'yìqǐ', english: 'together' }
    ],
    dialogue: [
      { character: 'Classmate', chinese: '周末你喜欢做什么？', pinyin: 'Zhōumò nǐ xǐhuān zuò shénme?', english: 'What do you like to do on weekends?', hindiPronunciation: 'झोउमो नी शिहुआँ ज़ुओ शेनमे?' },
      { character: 'You', chinese: '我喜欢运动，特别是踢足球。你呢？', pinyin: 'Wǒ xǐhuān yùndòng, tèbié shì tī zúqiú. Nǐ ne?', english: 'I like sports, especially playing football. And you?', hindiPronunciation: 'वो शिहुआँ युनदोंग, तेबिए शी ती ज़ूछियु. नी ने?' },
      { character: 'Classmate', chinese: '我不喜欢运动。我喜欢唱歌和听音乐。', pinyin: 'Wǒ bù xǐhuān yùndòng. Wǒ xǐhuān chànggē hé tīng yīnyuè.', english: 'I don\'t like sports. I like singing and listening to music.', hindiPronunciation: 'वो बू शिहुआँ युनदोंग. वो शिहुआँ चांगगे हे तिंग यिनयुए.' },
      { character: 'You', chinese: '你唱歌唱得好吗？', pinyin: 'Nǐ chànggē chàng de hǎo ma?', english: 'Do you sing well?', hindiPronunciation: 'नी चांगगे चांग दे हाओ मा?' },
      { character: 'Classmate', chinese: '很好！我们周末一起去唱歌吧！', pinyin: 'Hěn hǎo! Wǒmen zhōumò yìqǐ qù chànggē ba!', english: 'Very well! Let\'s go singing together this weekend!', hindiPronunciation: 'हन हाओ! वोमेन झोउमो यीछी छू चांगगे बा!' },
      { character: 'You', chinese: '好啊，很高兴。', pinyin: 'Hǎo a, hěn gāoxìng.', english: 'Sure, I\'m very happy to.', hindiPronunciation: 'हाओ आ, हन गाओशिंग.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'What do you like to do on weekends?',
        correctChinese: '周末你喜欢做什么',
        blocks: [
          { chinese: '喜欢', pinyin: 'xǐhuān' },
          { chinese: '周末', pinyin: 'zhōumò' },
          { chinese: '做什么', pinyin: 'zuò shénme' },
          { chinese: '你', pinyin: 'nǐ' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Let\'s go singing together!',
        correctChinese: '我们一起去唱歌吧',
        blocks: [
          { chinese: '一起去', pinyin: 'yìqǐ qù' },
          { chinese: '我们', pinyin: 'wǒmen' },
          { chinese: '吧', pinyin: 'ba' },
          { chinese: '唱歌', pinyin: 'chànggē' }
        ]
      }
    ]
  },
  {
    id: 'travel-plans',
    title: 'Making Travel Plans',
    description: 'Discuss dates, buying tickets, and traveling to another city.',
    level: 2,
    icon: '✈️',
    aiPrompt: 'You are a friend. Ask me where I am going for the holiday, and discuss buying plane tickets or train tickets. Use HSK 2 vocabulary.',
    vocabulary: [
      { chinese: '旅游', pinyin: 'lǚyóu', english: 'to travel' },
      { chinese: '票', pinyin: 'piào', english: 'ticket' },
      { chinese: '飞机', pinyin: 'fēijī', english: 'airplane' },
      { chinese: '远', pinyin: 'yuǎn', english: 'far' }
    ],
    dialogue: [
      { character: 'Friend', chinese: '下个月我们要放假了。你想去哪里旅游？', pinyin: 'Xià gè yuè wǒmen yào fàngjià le. Nǐ xiǎng qù nǎlǐ lǚyóu?', english: 'Next month we will have a holiday. Where do you want to travel?', hindiPronunciation: 'शिया गे युए वोमेन याओ फांगजिया ले. नी शियांग छू नाली लुयोउ?' },
      { character: 'You', chinese: '我想去北京旅游。北京远吗？', pinyin: 'Wǒ xiǎng qù Běijīng lǚyóu. Běijīng yuǎn ma?', english: 'I want to travel to Beijing. Is Beijing far?', hindiPronunciation: 'वो शियांग छू बेइजिंग लुयोउ. बेइजिंग युआन मा?' },
      { character: 'Friend', chinese: '很远。你要坐飞机去。', pinyin: 'Hěn yuǎn. Nǐ yào zuò fēijī qù.', english: 'Very far. You need to take an airplane to go.', hindiPronunciation: 'हन युआन. नी याओ ज़ुओ फेइजी छू.' },
      { character: 'You', chinese: '飞机票贵不贵？', pinyin: 'Fēijī piào guì bù guì?', english: 'Are airplane tickets expensive or not?', hindiPronunciation: 'फेइजी फियाओ गुई बू गुई?' },
      { character: 'Friend', chinese: '不贵。现在买票很便宜。', pinyin: 'Bù guì. Xiànzài mǎi piào hěn piányí.', english: 'Not expensive. Buying tickets now is very cheap.', hindiPronunciation: 'बू गुई. शियांजाई माई फियाओ हन फियांयी.' },
      { character: 'You', chinese: '太好了，我今天买票。', pinyin: 'Tài hǎo le, wǒ jīntiān mǎi piào.', english: 'Great, I will buy the ticket today.', hindiPronunciation: 'ताई हाओ ले, वो जिन्तियां माई फियाओ.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Where do you want to travel?',
        correctChinese: '你想去哪里旅游',
        blocks: [
          { chinese: '旅游', pinyin: 'lǚyóu' },
          { chinese: '去哪里', pinyin: 'qù nǎlǐ' },
          { chinese: '你想', pinyin: 'nǐ xiǎng' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Are airplane tickets expensive?',
        correctChinese: '飞机票贵不贵',
        blocks: [
          { chinese: '贵不贵', pinyin: 'guì bù guì' },
          { chinese: '飞机', pinyin: 'fēijī' },
          { chinese: '票', pinyin: 'piào' }
        ]
      }
    ]
  },
  // --- HSK 3 ---
  {
    id: 'renting-apartment',
    title: 'Renting an Apartment',
    description: 'Learn how to discuss rent, furniture, and location with a landlord.',
    level: 3,
    icon: '🏠',
    aiPrompt: 'You are a landlord in Shanghai. I am looking to rent an apartment. Describe the apartment, tell me the rent is 5000 RMB a month, and negotiate if I ask for a discount. Use HSK 3 vocabulary.',
    vocabulary: [
      { chinese: '租', pinyin: 'zū', english: 'to rent' },
      { chinese: '房子', pinyin: 'fángzi', english: 'apartment / house' },
      { chinese: '环境', pinyin: 'huánjìng', english: 'environment / surroundings' },
      { chinese: '附近', pinyin: 'fùjìn', english: 'nearby' }
    ],
    dialogue: [
      { character: 'You', chinese: '你好，我想租房子。', pinyin: 'Nǐ hǎo, wǒ xiǎng zū fángzi.', english: 'Hello, I want to rent an apartment.', hindiPronunciation: 'नी हाओ, वो शियांग ज़ू फांगजी.' },
      { character: 'Landlord', chinese: '好的，这个房子环境很好，附近有地铁站。', pinyin: 'Hǎo de, zhège fángzi huánjìng hěn hǎo, fùjìn yǒu dìtiě zhàn.', english: 'Okay, this apartment has a very good environment, and there is a subway station nearby.', hindiPronunciation: 'हाओ दे, झेगे फांगजी हुंआजिंग हन हाओ, फूजिन योउ दीथिये झान.' },
      { character: 'You', chinese: '每个月房租多少钱？', pinyin: 'Měi gè yuè fángzū duōshǎo qián?', english: 'How much is the rent every month?', hindiPronunciation: 'मेई गे युए फांगज़ू दुओशाओ छ्यान?' },
      { character: 'Landlord', chinese: '每个月五千块。', pinyin: 'Měi gè yuè wǔqiān kuài.', english: '5000 yuan every month.', hindiPronunciation: 'मेई गे युए वूचियान कुआई.' },
      { character: 'You', chinese: '有点儿贵。可以便宜一点吗？', pinyin: 'Yǒudiǎnr guì. Kěyǐ piányí yīdiǎn ma?', english: 'A bit expensive. Can it be a little cheaper?', hindiPronunciation: 'योउदियान गुई. केयी फियानयी यीदियान मा?' },
      { character: 'Landlord', chinese: '如果你租一年，可以四千八百块。', pinyin: 'Rúguǒ nǐ zū yī nián, kěyǐ sìqiān bābǎi kuài.', english: 'If you rent for a year, it can be 4800 yuan.', hindiPronunciation: 'रूगुओ नी ज़ू यी नियन, केयी सीचियान बाबाई कुआई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'I want to rent an apartment.',
        correctChinese: '我想租房子',
        blocks: [
          { chinese: '房子', pinyin: 'fángzi' },
          { chinese: '想', pinyin: 'xiǎng' },
          { chinese: '租', pinyin: 'zū' },
          { chinese: '我', pinyin: 'wǒ' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Can it be a little cheaper?',
        correctChinese: '可以便宜一点吗',
        blocks: [
          { chinese: '吗', pinyin: 'ma' },
          { chinese: '可以', pinyin: 'kěyǐ' },
          { chinese: '一点', pinyin: 'yīdiǎn' },
          { chinese: '便宜', pinyin: 'piányí' }
        ]
      }
    ]
  },
  {
    id: 'bank-account',
    title: 'Opening a Bank Account',
    description: 'Learn how to navigate a bank, open an account, and deal with currency exchange.',
    level: 3,
    icon: '🏦',
    aiPrompt: 'You are a bank teller in China. I want to open a bank account and exchange some dollars to RMB. Ask for my passport and explain the process using HSK 3 vocabulary.',
    vocabulary: [
      { chinese: '银行', pinyin: 'yínháng', english: 'bank' },
      { chinese: '护照', pinyin: 'hùzhào', english: 'passport' },
      { chinese: '换', pinyin: 'huàn', english: 'to exchange/change' },
      { chinese: '信用卡', pinyin: 'xìnyòngkǎ', english: 'credit card' }
    ],
    dialogue: [
      { character: 'Teller', chinese: '您好，请问您需要办理什么业务？', pinyin: 'Nín hǎo, qǐngwèn nín xūyào bànlǐ shénme yèwù?', english: 'Hello, what service do you need?', hindiPronunciation: 'निन हाओ, छिंगवेन निन शुयाओ बानली शेनमे येवू?' },
      { character: 'You', chinese: '我想开一个银行账户。', pinyin: 'Wǒ xiǎng kāi yígè yínháng zhànghù.', english: 'I want to open a bank account.', hindiPronunciation: 'वो शियांग काई यीगे यिनहांग झांगहू.' },
      { character: 'Teller', chinese: '好的。请给我看您的护照。', pinyin: 'Hǎo de. Qǐng gěi wǒ kàn nín de hùzhào.', english: 'Okay. Please show me your passport.', hindiPronunciation: 'हाओ दे. छिंग गेई वो कान निन दे हूझाओ.' },
      { character: 'You', chinese: '给你。我还想把美元换成人民币。', pinyin: 'Gěi nǐ. Wǒ hái xiǎng bǎ měiyuán huàn chéng rénmínbì.', english: 'Here you go. I also want to exchange US dollars into RMB.', hindiPronunciation: 'गेई नी. वो हाई शियांग बा मेईयुआन हुआन चेंग रेनमिन्बी.' },
      { character: 'Teller', chinese: '没问题。今天的汇率很好。', pinyin: 'Méi wèntí. Jīntiān de huìlǜ hěn hǎo.', english: 'No problem. Today\'s exchange rate is very good.', hindiPronunciation: 'मेई वेंती. जिन्तियां दे हुईल्यु हन हाओ.' },
      { character: 'You', chinese: '谢谢。我可以办信用卡吗？', pinyin: 'Xièxiè. Wǒ kěyǐ bàn xìnyòngkǎ ma?', english: 'Thank you. Can I apply for a credit card?', hindiPronunciation: 'शिएशिए. वो केयी बान शिनयोंगका मा?' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'I want to open a bank account.',
        correctChinese: '我想开一个银行账户',
        blocks: [
          { chinese: '我想开', pinyin: 'wǒ xiǎng kāi' },
          { chinese: '银行', pinyin: 'yínháng' },
          { chinese: '账户', pinyin: 'zhànghù' },
          { chinese: '一个', pinyin: 'yígè' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Please show me your passport.',
        correctChinese: '请给我看您的护照',
        blocks: [
          { chinese: '看', pinyin: 'kàn' },
          { chinese: '请给我', pinyin: 'qǐng gěi wǒ' },
          { chinese: '护照', pinyin: 'hùzhào' },
          { chinese: '您的', pinyin: 'nín de' }
        ]
      }
    ]
  },
  {
    id: 'lost-item',
    title: 'Reporting a Lost Item',
    description: 'Explain losing your belongings and asking for help at the police station.',
    level: 3,
    icon: '🛂',
    aiPrompt: 'You are a police officer. I lost my bag on the subway. Ask me what color it is, what is inside, and when I lost it. Use HSK 3 vocabulary.',
    vocabulary: [
      { chinese: '发现', pinyin: 'fāxiàn', english: 'to discover/find out' },
      { chinese: '包', pinyin: 'bāo', english: 'bag' },
      { chinese: '着急', pinyin: 'zháojí', english: 'anxious/worried' },
      { chinese: '记得', pinyin: 'jìde', english: 'to remember' }
    ],
    dialogue: [
      { character: 'Officer', chinese: '你怎么了？别着急，慢慢说。', pinyin: 'Nǐ zěnme le? Bié zháojí, mànman shuō.', english: 'What happened? Don\'t worry, speak slowly.', hindiPronunciation: 'नी ज़ेनमे ले? बिए झाओजी, मानमान शुओ.' },
      { character: 'You', chinese: '我把我的包丢在地铁上了。', pinyin: 'Wǒ bǎ wǒ de bāo diū zài dìtiě shàng le.', english: 'I lost my bag on the subway.', hindiPronunciation: 'वो बा वो दे बाओ दिउ ज़ाई दीथिये शांग ले.' },
      { character: 'Officer', chinese: '你的包是什么颜色的？', pinyin: 'Nǐ de bāo shì shénme yánsè de?', english: 'What color is your bag?', hindiPronunciation: 'नी दे बाओ शी शेनमे यांसे दे?' },
      { character: 'You', chinese: '是黑色的。里面有我的护照和钱包。', pinyin: 'Shì hēisè de. Lǐmiàn yǒu wǒ de hùzhào hé qiánbāo.', english: 'It is black. Inside are my passport and wallet.', hindiPronunciation: 'शी हेइसे दे. लिमियान योउ वो दे हूझाओ हे छियानबाओ.' },
      { character: 'Officer', chinese: '你记得是几点发现不见的吗？', pinyin: 'Nǐ jìde shì jǐ diǎn fāxiàn bú jiàn de ma?', english: 'Do you remember what time you noticed it missing?', hindiPronunciation: 'नी जिदे शी जी दियान फाशियान बू जियान दे मा?' },
      { character: 'You', chinese: '大概半个小时前。我很着急。', pinyin: 'Dàgài bàn gè xiǎoshí qián. Wǒ hěn zháojí.', english: 'About half an hour ago. I am very anxious.', hindiPronunciation: 'दागाई बान गे शियाओशी छ्यान. वो हन झाओजी.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'I lost my bag on the subway.',
        correctChinese: '我把我的包丢在地铁上了',
        blocks: [
          { chinese: '丢在地铁上了', pinyin: 'diū zài dìtiě shàng le' },
          { chinese: '包', pinyin: 'bāo' },
          { chinese: '我把', pinyin: 'wǒ bǎ' },
          { chinese: '我的', pinyin: 'wǒ de' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Don\'t worry, speak slowly.',
        correctChinese: '别着急慢慢说',
        blocks: [
          { chinese: '着急', pinyin: 'zháojí' },
          { chinese: '慢慢', pinyin: 'mànman' },
          { chinese: '说', pinyin: 'shuō' },
          { chinese: '别', pinyin: 'bié' }
        ]
      }
    ]
  },
  {
    id: 'visiting-hospital',
    title: 'Visiting a Friend in the Hospital',
    description: 'Express concern, ask about recovery, and talk about health routines.',
    level: 3,
    icon: '💐',
    aiPrompt: 'You are recovering in the hospital. I am visiting you. Tell me what happened, how you feel now, and thank me for the fruits. Use HSK 3 vocabulary.',
    vocabulary: [
      { chinese: '检查', pinyin: 'jiǎnchá', english: 'to examine/check' },
      { chinese: '发烧', pinyin: 'fāshāo', english: 'to have a fever' },
      { chinese: '一直', pinyin: 'yìzhí', english: 'continuously/always' },
      { chinese: '照顾', pinyin: 'zhàogù', english: 'to take care of' }
    ],
    dialogue: [
      { character: 'You', chinese: '听说你生病了，好点儿了吗？', pinyin: 'Tīngshuō nǐ shēngbìng le, hǎo diǎnr le ma?', english: 'I heard you got sick, are you feeling any better?', hindiPronunciation: 'तिंगशुओ नी शेंगबिंग ले, हाओ दियान ले मा?' },
      { character: 'Friend', chinese: '好多了。昨天一直发烧，所以来医院检查。', pinyin: 'Hǎo duō le. Zuótiān yìzhí fāshāo, suǒyǐ lái yīyuàn jiǎnchá.', english: 'Much better. I had a continuous fever yesterday, so I came to the hospital for a checkup.', hindiPronunciation: 'हाओ दुओ ले. ज़ुओतियां यीझी फाशाओ, सुओयी लाई यीयुआन जियांछा.' },
      { character: 'You', chinese: '医生怎么说？严重吗？', pinyin: 'Yīshēng zěnme shuō? Yánzhòng ma?', english: 'What did the doctor say? Is it serious?', hindiPronunciation: 'यीशेंग ज़ेनमे शुओ? यांझोंग मा?' },
      { character: 'Friend', chinese: '不严重，医生说需要好好休息。', pinyin: 'Bù yánzhòng, yīshēng shuō xūyào hǎohāo xiūxi.', english: 'Not serious, the doctor said I need to rest well.', hindiPronunciation: 'बू यांझोंग, यीशेंग शुओ शुयाओ हाओहाओ शिउशि.' },
      { character: 'You', chinese: '这是给你买的水果。你需要什么，告诉我。', pinyin: 'Zhè shì gěi nǐ mǎi de shuǐguǒ. Nǐ xūyào shénme, gàosu wǒ.', english: 'These are fruits I bought for you. If you need anything, tell me.', hindiPronunciation: 'झे शी गेई नी माई दे शुइगुओ. नी शुयाओ शेनमे, गाओसु वो.' },
      { character: 'Friend', chinese: '谢谢你来看我，不用担心。', pinyin: 'Xièxiè nǐ lái kàn wǒ, búyòng dānxīn.', english: 'Thank you for coming to see me, don\'t worry.', hindiPronunciation: 'शिएशिए नी लाई कान वो, बूयोंग दानशिन.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Are you feeling any better?',
        correctChinese: '好点儿了吗',
        blocks: [
          { chinese: '了吗', pinyin: 'le ma' },
          { chinese: '好', pinyin: 'hǎo' },
          { chinese: '点儿', pinyin: 'diǎnr' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'I had a continuous fever yesterday.',
        correctChinese: '昨天一直发烧',
        blocks: [
          { chinese: '一直', pinyin: 'yìzhí' },
          { chinese: '发烧', pinyin: 'fāshāo' },
          { chinese: '昨天', pinyin: 'zuótiān' }
        ]
      }
    ]
  },
  // --- HSK 4 ---
  {
    id: 'job-interview',
    title: 'A Job Interview',
    description: 'Learn advanced professional vocabulary to discuss experience, qualifications, and salary.',
    level: 4,
    icon: '💼',
    aiPrompt: 'You are an HR manager conducting a job interview. Ask me about my work experience, my strengths, and why I want to work at your company. Use HSK 4 vocabulary.',
    vocabulary: [
      { chinese: '面试', pinyin: 'miànshì', english: 'interview' },
      { chinese: '经验', pinyin: 'jīngyàn', english: 'experience' },
      { chinese: '专业', pinyin: 'zhuānyè', english: 'major / professional' },
      { chinese: '符合', pinyin: 'fúhé', english: 'to conform to / match' }
    ],
    dialogue: [
      { character: 'Interviewer', chinese: '请你先自我介绍一下。', pinyin: 'Qǐng nǐ xiān zìwǒ jièshào yīxià.', english: 'Please briefly introduce yourself first.', hindiPronunciation: 'छिंग नी शियान जीओ जिशाओ यीशिया.' },
      { character: 'You', chinese: '你好，我有三年的工作经验。', pinyin: 'Nǐ hǎo, wǒ yǒu sān nián de gōngzuò jīngyàn.', english: 'Hello, I have three years of work experience.', hindiPronunciation: 'नी हाओ, वो योउ सान नियन दे गोंग्ज़ुओ जिंगयान.' },
      { character: 'Interviewer', chinese: '你的专业很符合我们的要求。', pinyin: 'Nǐ de zhuānyè hěn fúhé wǒmen de yāoqiú.', english: 'Your major matches our requirements very well.', hindiPronunciation: 'नी दे झुआनये हन फूहे वोमेन दे याओछियु.' },
      { character: 'You', chinese: '谢谢。我很喜欢贵公司的文化。', pinyin: 'Xièxiè. Wǒ hěn xǐhuān guì gōngsī de wénhuà.', english: 'Thank you. I really like your company’s culture.', hindiPronunciation: 'शिएशिए. वो हन शिहुआँ गुई गोंग्सी दे वैनहुआ.' },
      { character: 'Interviewer', chinese: '你对薪水有什么期望？', pinyin: 'Nǐ duì xīnshuǐ yǒu shénme qīwàng?', english: 'What are your salary expectations?', hindiPronunciation: 'नी दुई शिन्शुई योउ शेनमे छियावांग?' },
      { character: 'You', chinese: '我相信公司会提供合理的薪水。', pinyin: 'Wǒ xiāngxìn gōngsī huì tígōng hélǐ de xīnshuǐ.', english: 'I believe the company will provide a reasonable salary.', hindiPronunciation: 'वो शियांगशिन गोंग्सी हुई तिगोंग हेली दे शिन्शुई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Please briefly introduce yourself first.',
        correctChinese: '请你先自我介绍一下',
        blocks: [
          { chinese: '先', pinyin: 'xiān' },
          { chinese: '一下', pinyin: 'yīxià' },
          { chinese: '请你', pinyin: 'qǐng nǐ' },
          { chinese: '自我介绍', pinyin: 'zìwǒ jièshào' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'I have three years of work experience.',
        correctChinese: '我有三年的工作经验',
        blocks: [
          { chinese: '三年', pinyin: 'sān nián' },
          { chinese: '工作经验', pinyin: 'gōngzuò jīngyàn' },
          { chinese: '的', pinyin: 'de' },
          { chinese: '我有', pinyin: 'wǒ yǒu' }
        ]
      }
    ]
  },
  {
    id: 'business-meeting',
    title: 'Business Negotiation',
    description: 'Discuss pricing, quality standards, and signing a contract.',
    level: 4,
    icon: '🤝',
    aiPrompt: 'You are a Chinese supplier. I am a foreign buyer. Let us negotiate the price and quality standards before signing the contract. Use HSK 4 vocabulary.',
    vocabulary: [
      { chinese: '商量', pinyin: 'shāngliang', english: 'to discuss/negotiate' },
      { chinese: '质量', pinyin: 'zhìliàng', english: 'quality' },
      { chinese: '价格', pinyin: 'jiàgé', english: 'price' },
      { chinese: '标准', pinyin: 'biāozhǔn', english: 'standard' }
    ],
    dialogue: [
      { character: 'You', chinese: '经理，我们来商量一下这次的合同。', pinyin: 'Jīnglǐ, wǒmen lái shāngliang yíxià zhè cì de hétong.', english: 'Manager, let\'s discuss the contract this time.', hindiPronunciation: 'जिंगली, वोमेन लाई शांगलिआंग यीशिया झे ची दे हेतोंग.' },
      { character: 'Supplier', chinese: '好的，关于价格，我们不能再降低了。', pinyin: 'Hǎo de, guānyú jiàgé, wǒmen bùnéng zài jiàngdī le.', english: 'Okay. Regarding the price, we cannot lower it any further.', hindiPronunciation: 'हाओ दे, गुआनयु जियागे, वोमेन बू नेंग ज़ाई जियांगदी ले.' },
      { character: 'You', chinese: '如果价格不能降，你们能保证质量标准吗？', pinyin: 'Rúguǒ jiàgé bùnéng jiàng, nǐmen néng bǎozhèng zhìliàng biāozhǔn ma?', english: 'If the price cannot drop, can you guarantee the quality standard?', hindiPronunciation: 'रूगुओ जियागे बू नेंग जियांग, नीमेन नेंग बाओझेंग झिलियांग बिआओझुन मा?' },
      { character: 'Supplier', chinese: '当然。我们的质量是最好的，绝对符合要求。', pinyin: 'Dāngrán. Wǒmen de zhìliàng shì zuì hǎo de, juéduì fúhé yāoqiú.', english: 'Of course. Our quality is the best, it absolutely meets the requirements.', hindiPronunciation: 'दांगरान. वोमेन दे झिलियांग शी ज़ुई हाओ दे, जुएदुई फूहे याओछियु.' },
      { character: 'You', chinese: '只要质量好，我们就愿意合作。', pinyin: 'Zhǐyào zhìliàng hǎo, wǒmen jiù yuànyì hézuò.', english: 'As long as the quality is good, we are willing to cooperate.', hindiPronunciation: 'झीयाओ झिलियांग हाओ, वोमेन जिउ युआनयी हेज़ुओ.' },
      { character: 'Supplier', chinese: '太好了，预祝我们合作愉快！', pinyin: 'Tài hǎo le, yùzhù wǒmen hézuò yúkuài!', english: 'Excellent, here is to a pleasant cooperation!', hindiPronunciation: 'ताई हाओ ले, युझू वोमेन हेज़ुओ युकुआई!' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Regarding the price, we cannot lower it any further.',
        correctChinese: '关于价格我们不能再降低了',
        blocks: [
          { chinese: '不能再降低了', pinyin: 'bùnéng zài jiàngdī le' },
          { chinese: '关于价格', pinyin: 'guānyú jiàgé' },
          { chinese: '我们', pinyin: 'wǒmen' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'Can you guarantee the quality standard?',
        correctChinese: '你们能保证质量标准吗',
        blocks: [
          { chinese: '保证', pinyin: 'bǎozhèng' },
          { chinese: '质量标准', pinyin: 'zhìliàng biāozhǔn' },
          { chinese: '你们能', pinyin: 'nǐmen néng' },
          { chinese: '吗', pinyin: 'ma' }
        ]
      }
    ]
  },
  {
    id: 'returning-goods',
    title: 'Returning Defective Goods',
    description: 'Explain product issues and ask for a refund or replacement.',
    level: 4,
    icon: '📦',
    aiPrompt: 'You are customer service. I bought a phone that is broken. Explain the return policy and offer to replace it. Use HSK 4 vocabulary.',
    vocabulary: [
      { chinese: '退货', pinyin: 'tuì huò', english: 'to return goods' },
      { chinese: '坏', pinyin: 'huài', english: 'broken/bad' },
      { chinese: '毛病', pinyin: 'máobìng', english: 'fault/defect' },
      { chinese: '解决', pinyin: 'jiějué', english: 'to solve' }
    ],
    dialogue: [
      { character: 'You', chinese: '你好，我在你们这里买的手机坏了，我想退货。', pinyin: 'Nǐ hǎo, wǒ zài nǐmen zhèlǐ mǎi de shǒujī huài le, wǒ xiǎng tuì huò.', english: 'Hello, the phone I bought here is broken, I want to return it.', hindiPronunciation: 'नी हाओ, वो ज़ाई नीमेन झेली माई दे शौजी हुआई ले, वो शियांग तुई हुओ.' },
      { character: 'Service', chinese: '对不起，请问手机有什么毛病？', pinyin: 'Duìbùqǐ, qǐngwèn shǒujī yǒu shénme máobìng?', english: 'I apologize. What is the defect with the phone?', hindiPronunciation: 'दुईबूछी, छिंगवेन शौजी योउ शेनमे माओबिंग?' },
      { character: 'You', chinese: '屏幕不亮了，而且没有声音。', pinyin: 'Píngmù bú liàng le, érqiě méiyǒu shēngyīn.', english: 'The screen won\'t light up, and furthermore there is no sound.', hindiPronunciation: 'फिंगमू बू लियांग ले, अरछिये मेइयोउ शेंगयिन.' },
      { character: 'Service', chinese: '了解了。如果您愿意，我们可以免费给您换一台新的。', pinyin: 'Liǎojiě le. Rúguǒ nín yuànyì, wǒmen kěyǐ miǎnfèi gěi nín huàn yì tái xīn de.', english: 'Understood. If you are willing, we can replace it with a new one for free.', hindiPronunciation: 'लियाओजिए ले. रूगुओ निन युआनयी, वोमेन केयी मियानफेई गेई निन हुआन यी ताई शिन दे.' },
      { character: 'You', chinese: '好吧，那就换一台新的。如果还有问题怎么办？', pinyin: 'Hǎo ba, nà jiù huàn yì tái xīn de. Rúguǒ hái yǒu wèntí zěnme bàn?', english: 'Alright, then change to a new one. What if there are still problems?', hindiPronunciation: 'हाओ बा, ना जिउ हुआन यी ताई शिन दे. रूगुओ हाई योउ वेंती ज़ेनमे बान?' },
      { character: 'Service', chinese: '别担心，我们一定会为您解决问题。', pinyin: 'Bié dānxīn, wǒmen yídìng huì wèi nín jiějué wèntí.', english: 'Do not worry, we will definitely solve the problem for you.', hindiPronunciation: 'बिए दानशिन, वोमेन यीदिंग हुई वेई निन जिएजुए वेंती.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'I want to return the goods.',
        correctChinese: '我想退货',
        blocks: [
          { chinese: '我', pinyin: 'wǒ' },
          { chinese: '想', pinyin: 'xiǎng' },
          { chinese: '退货', pinyin: 'tuì huò' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'We will definitely solve the problem for you.',
        correctChinese: '我们一定会为您解决问题',
        blocks: [
          { chinese: '一定会', pinyin: 'yídìng huì' },
          { chinese: '解决问题', pinyin: 'jiějué wèntí' },
          { chinese: '为您', pinyin: 'wèi nín' },
          { chinese: '我们', pinyin: 'wǒmen' }
        ]
      }
    ]
  },
  {
    id: 'environmental-protection',
    title: 'Discussing the Environment',
    description: 'Talk about pollution, recycling, and protecting the earth.',
    level: 4,
    icon: '🌍',
    aiPrompt: 'You are my colleague. Let us have a deep discussion about climate change, air pollution in the city, and the importance of public transportation. Use HSK 4 vocabulary.',
    vocabulary: [
      { chinese: '保护', pinyin: 'bǎohù', english: 'to protect' },
      { chinese: '环境', pinyin: 'huánjìng', english: 'environment' },
      { chinese: '污染', pinyin: 'wūrǎn', english: 'pollution' },
      { chinese: '塑料袋', pinyin: 'sùliàodài', english: 'plastic bag' }
    ],
    dialogue: [
      { character: 'Colleague', chinese: '最近空气污染越来越严重了。', pinyin: 'Zuìjìn kōngqì wūrǎn yuè lái yuè yánzhòng le.', english: 'Recently, air pollution has become increasingly severe.', hindiPronunciation: 'ज़ुईजिन कोंगछी वूरान युए लाई युए यांझोंग ले.' },
      { character: 'You', chinese: '是啊，保护环境是我们每个人的责任。', pinyin: 'Shì a, bǎohù huánjìng shì wǒmen měi gè rén de zérèn.', english: 'Yes, protecting the environment is everyone\'s responsibility.', hindiPronunciation: 'शी आ, बाओहू हुंआजिंग शी वोमेन मेई गे रेन दे ज़ेरेन.' },
      { character: 'Colleague', chinese: '你说得对。比如去超市，我们应该少用塑料袋。', pinyin: 'Nǐ shuō de duì. Bǐrú qù chāoshì, wǒmen yīnggāi shǎo yòng sùliàodài.', english: 'You are right. For example, going to the supermarket, we should use fewer plastic bags.', hindiPronunciation: 'नी शुओ दे दुई. बीरू छू छाओशी, वोमेन यिंगगाई शाओ योंग सुलिआओदाई.' },
      { character: 'You', chinese: '而且为了减少污染，我打算以后多坐地铁。', pinyin: 'Érqiě wèile jiǎnshǎo wūrǎn, wǒ dǎsuàn yǐhòu duō zuò dìtiě.', english: 'And in order to reduce pollution, I plan to take the subway more often in the future.', hindiPronunciation: 'अरछिये वेइले जियांशाओ वूरान, वो दासुआन यीहोउ दुओ ज़ुओ दीथिये.' },
      { character: 'Colleague', chinese: '好主意，坐地铁不仅环保，还不会堵车。', pinyin: 'Hǎo zhǔyì, zuò dìtiě bùjǐn huánbǎo, hái bú huì dǔchē.', english: 'Good idea, taking the subway is not only environmentally friendly, but there are also no traffic jams.', hindiPronunciation: 'हाओ झुयी, ज़ुओ दीथिये बुजिन हुआनबाओ, हाई बू हुई दूचे.' },
      { character: 'You', chinese: '只要大家共同努力，环境一定会好起来。', pinyin: 'Zhǐyào dàjiā gòngtóng nǔlì, huánjìng yídìng huì hǎo qǐlái.', english: 'As long as everyone works hard together, the environment will definitely improve.', hindiPronunciation: 'झीयाओ दाजिया गोंगतोंग नूली, हुंआजिंग यीदिंग हुई हाओ छीलाई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Protecting the environment is everyone\'s responsibility.',
        correctChinese: '保护环境是我们每个人的责任',
        blocks: [
          { chinese: '责任', pinyin: 'zérèn' },
          { chinese: '我们每个人的', pinyin: 'wǒmen měi gè rén de' },
          { chinese: '是', pinyin: 'shì' },
          { chinese: '保护环境', pinyin: 'bǎohù huánjìng' }
        ]
      },
      {
        type: 'sentence_building',
        english: 'We should use fewer plastic bags.',
        correctChinese: '我们应该少用塑料袋',
        blocks: [
          { chinese: '塑料袋', pinyin: 'sùliàodài' },
          { chinese: '少用', pinyin: 'shǎo yòng' },
          { chinese: '我们应该', pinyin: 'wǒmen yīnggāi' }
        ]
      }
    ]
  },
  // --- HSK 5 ---
  {
    id: 'academic-discussion',
    title: 'Academic Discussion',
    description: 'Discuss research methodology, literature review, and thesis topics with a professor.',
    level: 5,
    icon: '🎓',
    aiPrompt: 'You are a university professor. I am a graduate student discussing my thesis. Ask me about my methodology and expected conclusions. Use HSK 5 vocabulary.',
    vocabulary: [
      { chinese: '论文', pinyin: 'lùnwén', english: 'thesis / paper' },
      { chinese: '研究', pinyin: 'yánjiū', english: 'research' },
      { chinese: '结论', pinyin: 'jiélùn', english: 'conclusion' },
      { chinese: '缺乏', pinyin: 'quēfá', english: 'to lack' }
    ],
    dialogue: [
      { character: 'Professor', chinese: '你的论文研究得怎么样了？', pinyin: 'Nǐ de lùnwén yánjiū de zěnmeyàng le?', english: 'How is your thesis research going?', hindiPronunciation: 'नी दे लुनवेन यानजिउ दे ज़ेनमेयांग ले?' },
      { character: 'You', chinese: '教授，我目前还在整理资料，发现缺乏一些数据。', pinyin: 'Jiàoshòu, wǒ mùqián hái zài zhěnglǐ zīliào, fāxiàn quēfá yìxiē shùjù.', english: 'Professor, I am currently still organizing materials, and found a lack of some data.', hindiPronunciation: 'जिआओशोउ, वो मूछियान हाई ज़ाई झेंगली ज़िलिआओ, फाशियान छुएफा यीशिए शूज्यू.' },
      { character: 'Professor', chinese: '数据确实很重要，你打算怎么解决？', pinyin: 'Shùjù quèshí hěn zhòngyào, nǐ dǎsuàn zěnme jiějué?', english: 'Data is indeed very important, how do you plan to solve it?', hindiPronunciation: 'शूज्यू छुएशी हन झोंगयाओ, नी दासुआन ज़ेनमे जिएजुए?' },
      { character: 'You', chinese: '我计划下周去图书馆查阅更多相关文献。', pinyin: 'Wǒ jìhuà xià zhōu qù túshūguǎn cháyuè gèng duō xiāngguān wénxiàn.', english: 'I plan to go to the library next week to consult more relevant literature.', hindiPronunciation: 'वो जिहुआ शिया झोउ छू तूशूगुआन चायुए गेंग दुओ शियांगगुआन वैनशियां.' },
      { character: 'Professor', chinese: '很好，希望你能尽早得出结论。', pinyin: 'Hěn hǎo, xīwàng nǐ néng jǐnzǎo déchū jiélùn.', english: 'Very good, I hope you can draw a conclusion as soon as possible.', hindiPronunciation: 'हन हाओ, शिवांग नी नेंग जिन्ज़ाओ देचू जिएलून.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'I plan to go to the library next week to consult more literature.',
        correctChinese: '我计划下周去图书馆查阅更多文献',
        blocks: [
          { chinese: '查阅', pinyin: 'cháyuè' },
          { chinese: '更多文献', pinyin: 'gèng duō wénxiàn' },
          { chinese: '我计划', pinyin: 'wǒ jìhuà' },
          { chinese: '下周去图书馆', pinyin: 'xià zhōu qù túshūguǎn' }
        ]
      }
    ]
  },
  {
    id: 'social-issues',
    title: 'Debating Social Issues',
    description: 'Discuss societal changes, modern work culture, and work-life balance.',
    level: 5,
    icon: '⚖️',
    aiPrompt: 'You are my colleague. Let us discuss the modern work culture and how it affects young peoples health and family life. Use HSK 5 vocabulary.',
    vocabulary: [
      { chinese: '压力', pinyin: 'yālì', english: 'pressure' },
      { chinese: '竞争', pinyin: 'jìngzhēng', english: 'competition' },
      { chinese: '享受', pinyin: 'xiǎngshòu', english: 'to enjoy' },
      { chinese: '导致', pinyin: 'dǎozhì', english: 'to lead to / cause' }
    ],
    dialogue: [
      { character: 'Colleague', chinese: '现在的年轻人工作压力太大了。', pinyin: 'Xiànzài de niánqīng rén gōngzuò yālì tài dà le.', english: 'The work pressure on young people today is too great.', hindiPronunciation: 'शियांज़ाई दे नियांछिंग रेन गोंग्ज़ुओ याली ताई दा ले.' },
      { character: 'You', chinese: '是啊，社会竞争激烈，很多人经常加班。', pinyin: 'Shì a, shèhuì jìngzhēng jīliè, hěn duō rén jīngcháng jiābān.', english: 'Yes, social competition is fierce, and many people often work overtime.', hindiPronunciation: 'शी आ, शेहुई जिंगझेंग जिलिए, हन दुओ रेन जिंगचांग जियाबान.' },
      { character: 'Colleague', chinese: '这导致他们没有时间享受生活。', pinyin: 'Zhè dǎozhì tāmen méiyǒu shíjiān xiǎngshòu shēnghuó.', english: 'This leads to them having no time to enjoy life.', hindiPronunciation: 'झे दाओझी तामेन मेइयोउ शिजियान शियांगशोउ शेंगहुओ.' },
      { character: 'You', chinese: '不仅如此，也会影响身体健康。', pinyin: 'Bùjǐn rúcǐ, yě huì yǐngxiǎng shēntǐ jiànkāng.', english: 'Not only that, it will also affect physical health.', hindiPronunciation: 'बुजिन रूची, ये हुई यिंगशियांग शेनती जियांकांग.' },
      { character: 'Colleague', chinese: '我们需要平衡工作和生活。', pinyin: 'Wǒmen xūyào pínghéng gōngzuò hé shēnghuó.', english: 'We need to balance work and life.', hindiPronunciation: 'वोमेन शुयाओ फिंगहेंग गोंग्ज़ुओ हे शेंगहुओ.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'This leads to them having no time to enjoy life.',
        correctChinese: '这导致他们没有时间享受生活',
        blocks: [
          { chinese: '享受生活', pinyin: 'xiǎngshòu shēnghuó' },
          { chinese: '没有时间', pinyin: 'méiyǒu shíjiān' },
          { chinese: '他们', pinyin: 'tāmen' },
          { chinese: '这导致', pinyin: 'zhè dǎozhì' }
        ]
      }
    ]
  },
  {
    id: 'cultural-differences',
    title: 'Cultural Nuances',
    description: 'Explain Chinese traditions, etiquette, and dining customs.',
    level: 5,
    icon: '🍵',
    aiPrompt: 'You are a foreign exchange student. Ask me about Chinese dining etiquette and traditions. I will explain them to you using HSK 5 vocabulary.',
    vocabulary: [
      { chinese: '传统', pinyin: 'chuántǒng', english: 'tradition' },
      { chinese: '礼貌', pinyin: 'lǐmào', english: 'politeness / manners' },
      { chinese: '尊重', pinyin: 'zūnzhòng', english: 'to respect' },
      { chinese: '筷子', pinyin: 'kuàizi', english: 'chopsticks' }
    ],
    dialogue: [
      { character: 'Student', chinese: '在中国吃饭有什么特别的规矩吗？', pinyin: 'Zài Zhōngguó chīfàn yǒu shénme tèbié de guīju ma?', english: 'Are there any special rules for eating in China?', hindiPronunciation: 'ज़ाई जोंगगुओ चीफान योउ शेनमे तेबिए दे गुइजु मा?' },
      { character: 'You', chinese: '有的。比如，不能把筷子插在米饭上。', pinyin: 'Yǒu de. Bǐrú, bù néng bǎ kuàizi chā zài mǐfàn shàng.', english: 'Yes. For example, you cannot stick chopsticks upright in rice.', hindiPronunciation: 'योउ दे. बीरू, बू नेंग बा कुआईजी छा ज़ाई मीफान शांग.' },
      { character: 'Student', chinese: '为什么？这是中国的传统吗？', pinyin: 'Wèishénme? Zhè shì Zhōngguó de chuántǒng ma?', english: 'Why? Is this a Chinese tradition?', hindiPronunciation: 'वेइशेनमे? झे शी जोंगगुओ दे चुआनतोंग मा?' },
      { character: 'You', chinese: '是的，那样做不礼貌。吃饭时我们要尊重老人。', pinyin: 'Shì de, nàyàng zuò bù lǐmào. Chīfàn shí wǒmen yào zūnzhòng lǎorén.', english: 'Yes, doing that is impolite. During meals we must respect the elderly.', hindiPronunciation: 'शी दे, नायांग ज़ुओ बू लीमाओ. चीफान शी वोमेन याओ ज़ुनझोंग लाओरेन.' },
      { character: 'Student', chinese: '明白了，谢谢你的解释。', pinyin: 'Míngbái le, xièxie nǐ de jiěshì.', english: 'Understood, thank you for your explanation.', hindiPronunciation: 'मिंगबाई ले, शिएशिए नी दे जिएशी.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Doing that is impolite.',
        correctChinese: '那样做不礼貌',
        blocks: [
          { chinese: '不礼貌', pinyin: 'bù lǐmào' },
          { chinese: '那样做', pinyin: 'nàyàng zuò' }
        ]
      }
    ]
  },
  {
    id: 'career-dilemma',
    title: 'Career Progression',
    description: 'Discuss changing careers, company culture, and future prospects.',
    level: 5,
    icon: '📈',
    aiPrompt: 'You are a career counselor. I am considering changing my job because I feel limited. Give me advice using HSK 5 vocabulary.',
    vocabulary: [
      { chinese: '辞职', pinyin: 'cízhí', english: 'to resign' },
      { chinese: '发展', pinyin: 'fāzhǎn', english: 'development' },
      { chinese: '挑战', pinyin: 'tiǎozhàn', english: 'challenge' },
      { chinese: '鼓励', pinyin: 'gǔlì', english: 'to encourage' }
    ],
    dialogue: [
      { character: 'You', chinese: '我最近想辞职，我觉得在这个公司没有发展。', pinyin: 'Wǒ zuìjìn xiǎng cízhí, wǒ juéde zài zhège gōngsī méiyǒu fāzhǎn.', english: 'I want to resign recently, I feel there is no development in this company.', hindiPronunciation: 'वो ज़ुईजिन शियांग चीझी, वो जुएदे ज़ाई झेगे गोंग्सी मेइयोउ फाझान.' },
      { character: 'Counselor', chinese: '换工作是一个大挑战，你考虑清楚了吗？', pinyin: 'Huàn gōngzuò shì yígè dà tiǎozhàn, nǐ kǎolǜ qīngchu le ma?', english: 'Changing jobs is a big challenge, have you thought it through clearly?', hindiPronunciation: 'हुआन गोंग्ज़ुओ शी यीगे दा तियाओझान, नी खाओल्यू छिंगचू ले मा?' },
      { character: 'You', chinese: '是的，我希望找一个更适合我的平台。', pinyin: 'Shì de, wǒ xīwàng zhǎo yígè gèng shìhé wǒ de píngtái.', english: 'Yes, I hope to find a platform more suitable for me.', hindiPronunciation: 'शी दे, वो शिवांग झाओ यीगे गेंग शीहे वो दे फिंगताई.' },
      { character: 'Counselor', chinese: '我鼓励你勇敢去尝试，不要害怕失败。', pinyin: 'Wǒ gǔlì nǐ yǒnggǎn qù chángshì, búyào hàipā shībài.', english: 'I encourage you to bravely try, do not be afraid of failure.', hindiPronunciation: 'वो गुली नी योंगगान छू चांगशी, बूयाओ हाईपा शीबाई.' },
      { character: 'You', chinese: '谢谢您的鼓励。', pinyin: 'Xièxie nín de gǔlì.', english: 'Thank you for your encouragement.', hindiPronunciation: 'शिएशिए निन दे गुली.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Changing jobs is a big challenge.',
        correctChinese: '换工作是一个大挑战',
        blocks: [
          { chinese: '大挑战', pinyin: 'dà tiǎozhàn' },
          { chinese: '是一个', pinyin: 'shì yígè' },
          { chinese: '换工作', pinyin: 'huàn gōngzuò' }
        ]
      }
    ]
  },
  // --- HSK 6 ---
  {
    id: 'philosophical-debate',
    title: 'Philosophical Debate',
    description: 'Discuss abstract concepts, life fulfillment, and traditional philosophy.',
    level: 6,
    icon: '☯️',
    aiPrompt: 'You are a philosopher. Let us debate the meaning of success and whether spiritual wealth is more important than material wealth. Use HSK 6 vocabulary.',
    vocabulary: [
      { chinese: '财富', pinyin: 'cáifù', english: 'wealth' },
      { chinese: '精神', pinyin: 'jīngshén', english: 'spirit / mind' },
      { chinese: '追求', pinyin: 'zhuīqiú', english: 'to pursue' },
      { chinese: '意义', pinyin: 'yìyì', english: 'meaning / significance' }
    ],
    dialogue: [
      { character: 'Philosopher', chinese: '你认为人生的真正意义是什么？', pinyin: 'Nǐ rènwéi rénshēng de zhēnzhèng yìyì shì shénme?', english: 'What do you think is the true meaning of life?', hindiPronunciation: 'नी रेनवेई रेनशेंग दे झेनझेंग यीयी शी शेनमे?' },
      { character: 'You', chinese: '我认为，精神财富比物质财富更重要。', pinyin: 'Wǒ rènwéi, jīngshén cáifù bǐ wùzhì cáifù gèng zhòngyào.', english: 'I think spiritual wealth is more important than material wealth.', hindiPronunciation: 'वो रेनवेई, जिंगशेन चाईफू बी वूझी चाईफू गेंग झोंगयाओ.' },
      { character: 'Philosopher', chinese: '可是，现代社会有太多人盲目追求金钱。', pinyin: 'Kěshì, xiàndài shèhuì yǒu tài duō rén mángmù zhuīqiú jīnqián.', english: 'But in modern society too many people blindly pursue money.', hindiPronunciation: 'केशी, शियानदाई शेहुई योउ ताई दुओ रेन मांगमू झुइछिउ जिंछियान.' },
      { character: 'You', chinese: '是的，这种追求往往会让人感到空虚。', pinyin: 'Shì de, zhè zhǒng zhuīqiú wǎngwǎng huì ràng rén gǎndào kōngxū.', english: 'Yes, this kind of pursuit often makes people feel empty.', hindiPronunciation: 'शी दे, झे झोंग झुइछिउ वांगवांग हुई रांग रेन गान्दाओ कोंगशू.' },
      { character: 'Philosopher', chinese: '只有内心的平静，才能带来真正的幸福。', pinyin: 'Zhǐyǒu nèixīn de píngjìng, cái néng dàilái zhēnzhèng de xìngfú.', english: 'Only inner peace can bring true happiness.', hindiPronunciation: 'झीयोउ नेइशिन दे फिंगजिंग, चाई नेंग दाईलाई झेनझेंग दे शिंगफू.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Spiritual wealth is more important than material wealth.',
        correctChinese: '精神财富比物质财富更重要',
        blocks: [
          { chinese: '更重要', pinyin: 'gèng zhòngyào' },
          { chinese: '物质财富', pinyin: 'wùzhì cáifù' },
          { chinese: '比', pinyin: 'bǐ' },
          { chinese: '精神财富', pinyin: 'jīngshén cáifù' }
        ]
      }
    ]
  },
  {
    id: 'economic-trends',
    title: 'Economic & Tech Trends',
    description: 'Discuss the global economy, AI advancements, and the stock market.',
    level: 6,
    icon: '📊',
    aiPrompt: 'You are a financial analyst. Discuss the impact of artificial intelligence on the global economy and future employment with me. Use HSK 6 vocabulary.',
    vocabulary: [
      { chinese: '人工智能', pinyin: 'réngōng zhìnéng', english: 'artificial intelligence' },
      { chinese: '趋势', pinyin: 'qūshì', english: 'trend' },
      { chinese: '危机', pinyin: 'wēijī', english: 'crisis' },
      { chinese: '投资', pinyin: 'tóuzī', english: 'investment' }
    ],
    dialogue: [
      { character: 'Analyst', chinese: '人工智能的发展是未来的必然趋势。', pinyin: 'Réngōng zhìnéng de fāzhǎn shì wèilái de bìrán qūshì.', english: 'The development of AI is an inevitable trend for the future.', hindiPronunciation: 'रेनगोंग झीनेंग दे फाझान शी वेइलाई दे बीरान छूशी.' },
      { character: 'You', chinese: '确实如此，但这也会给就业市场带来危机。', pinyin: 'Quèshí rúcǐ, dàn zhè yě huì gěi jiùyè shìchǎng dàilái wēijī.', english: 'Indeed so, but this will also bring a crisis to the job market.', hindiPronunciation: 'छुएशी रूची, दान झे ये हुई गेई जिउये शीचांग दाईलाई वेइजी.' },
      { character: 'Analyst', chinese: '另一方面，它也创造了新的投资机会。', pinyin: 'Lìng yì fāngmiàn, tā yě chuàngzào le xīn de tóuzī jīhuì.', english: 'On the other hand, it has also created new investment opportunities.', hindiPronunciation: 'लिंग यी फांगमियान, ता ये चुआंगज़ाओ ले शिन दे तोउज़ी जिहुई.' },
      { character: 'You', chinese: '我们需要不断学习，适应这种深刻的改变。', pinyin: 'Wǒmen xūyào búduàn xuéxí, shìyìng zhè zhǒng shēnkè de gǎibiàn.', english: 'We need to constantly learn and adapt to this profound change.', hindiPronunciation: 'वोमेन शुयाओ बूदुआन शुएशी, शीइंग झे झोंग शेनके दे गाईबियन.' },
      { character: 'Analyst', chinese: '没错，创新永远是经济增长的动力。', pinyin: 'Méicuò, chuàngxīn yǒngyuǎn shì jīngjì zēngzhǎng de dònglì.', english: 'Exactly, innovation is always the driving force of economic growth.', hindiPronunciation: 'मेइचुओ, चुआंगशिन योंगयुआन शी जिंगजी ज़ेंगझांग दे दोंग्ली.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'We need to adapt to this profound change.',
        correctChinese: '我们需要适应这种深刻的改变',
        blocks: [
          { chinese: '改变', pinyin: 'gǎibiàn' },
          { chinese: '深刻的', pinyin: 'shēnkè de' },
          { chinese: '这种', pinyin: 'zhè zhǒng' },
          { chinese: '适应', pinyin: 'shìyìng' },
          { chinese: '我们需要', pinyin: 'wǒmen xūyào' }
        ]
      }
    ]
  },
  {
    id: 'diplomatic-negotiation',
    title: 'High-Level Negotiations',
    description: 'Simulate a corporate merger, discuss terms, and find mutual benefit.',
    level: 6,
    icon: '👔',
    aiPrompt: 'You are the CEO of a competing company. I want our companies to merge. Discuss the strategic benefits and mutual interests using formal HSK 6 vocabulary.',
    vocabulary: [
      { chinese: '谈判', pinyin: 'tánpàn', english: 'negotiation' },
      { chinese: '合并', pinyin: 'hébìng', english: 'to merge' },
      { chinese: '利益', pinyin: 'lìyì', english: 'interest / benefit' },
      { chinese: '协议', pinyin: 'xiéyì', english: 'agreement' }
    ],
    dialogue: [
      { character: 'You', chinese: '感谢您出席今天的谈判，我们希望两家公司能合并。', pinyin: 'Gǎnxiè nín chūxí jīntiān de tánpàn, wǒmen xīwàng liǎng jiā gōngsī néng hébìng.', english: 'Thank you for attending today\'s negotiation, we hope our two companies can merge.', hindiPronunciation: 'गानशिए निन चूशी जिन्तियां दे तानपान, वोमेन शिवांग लियांग जिया गोंग्सी नेंग हेबिंग.' },
      { character: 'CEO', chinese: '合并对双方都有利，但我们要保护员工的利益。', pinyin: 'Hébìng duì shuāngfāng dōu yǒulì, dàn wǒmen yào bǎohù yuángōng de lìyì.', english: 'A merger is beneficial to both parties, but we must protect our employees\' interests.', hindiPronunciation: 'हेबिंग दुई शुआंगफांग दोउ योउली, दान वोमेन याओ बाओहू युआनगोंग दे लीयी.' },
      { character: 'You', chinese: '我们完全同意，会在协议里详细说明。', pinyin: 'Wǒmen wánquán tóngyì, huì zài xiéyì lǐ xiángxì shuōmíng.', english: 'We completely agree, and will explain in detail in the agreement.', hindiPronunciation: 'वोमेन वांचुआन तोंगयी, हुई ज़ाई शियेयी ली शियांगशी शुओमिंग.' },
      { character: 'CEO', chinese: '如果在核心条款上达成一致，我们就可以签字。', pinyin: 'Rúguǒ zài héxīn tiáokuǎn shàng dáchéng yízhì, wǒmen jiù kěyǐ qiānzì.', english: 'If we reach a consensus on the core clauses, we can sign.', hindiPronunciation: 'रूगुओ ज़ाई हेक्सिन तियाओकुआन शांग दाचेंग यीझी, वोमेन जिउ केयी छियांज़ी.' },
      { character: 'You', chinese: '期待我们能够实现双赢。', pinyin: 'Qīdài wǒmen nénggòu shíxiàn shuāngyíng.', english: 'I look forward to us achieving a win-win situation.', hindiPronunciation: 'छीदाई वोमेन नेंगगोउ शीशियान शुआंगयिंग.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'We hope the two companies can merge.',
        correctChinese: '我们希望两家公司能合并',
        blocks: [
          { chinese: '合并', pinyin: 'hébìng' },
          { chinese: '能', pinyin: 'néng' },
          { chinese: '两家公司', pinyin: 'liǎng jiā gōngsī' },
          { chinese: '我们希望', pinyin: 'wǒmen xīwàng' }
        ]
      }
    ]
  },
  {
    id: 'historical-analysis',
    title: 'Historical Heritage',
    description: 'Discuss the preservation of historical artifacts and Chinese dynasties.',
    level: 6,
    icon: '📜',
    aiPrompt: 'You are a historian. I am interviewing you about the cultural significance of the Tang Dynasty and the preservation of historical relics. Use HSK 6 vocabulary.',
    vocabulary: [
      { chinese: '历史', pinyin: 'lìshǐ', english: 'history' },
      { chinese: '遗产', pinyin: 'yíchǎn', english: 'heritage' },
      { chinese: '繁荣', pinyin: 'fánróng', english: 'prosperous' },
      { chinese: '反映', pinyin: 'fǎnyìng', english: 'to reflect' }
    ],
    dialogue: [
      { character: 'You', chinese: '请问，唐朝为什么在中国历史上那么重要？', pinyin: 'Qǐngwèn, Tángcháo wèi shénme zài Zhōngguó lìshǐ shàng nàme zhòngyào?', english: 'Excuse me, why is the Tang Dynasty so important in Chinese history?', hindiPronunciation: 'छिंगवेन, तांगचाओ वेइ शेनमे ज़ाई जोंगगुओ लीशी शांग नामे झोंगयाओ?' },
      { character: 'Historian', chinese: '因为那时候经济繁荣，文化也非常发达。', pinyin: 'Yīnwèi nà shíhòu jīngjì fánróng, wénhuà yě fēicháng fādá.', english: 'Because at that time the economy was prosperous, and the culture was also very developed.', hindiPronunciation: 'यिनवेई ना शीहोउ जिंगजी फानरोंग, वैनहुआ ये फेइचांग फादा.' },
      { character: 'You', chinese: '这些珍贵的文化遗产，反映了古人的智慧。', pinyin: 'Zhèxiē zhēnguì de wénhuà yíchǎn, fǎnyìng le gǔrén de zhìhuì.', english: 'These precious cultural heritages reflect the wisdom of the ancients.', hindiPronunciation: 'झेशिए झेनगुई दे वैनहुआ यीछान, फानयिंग ले गूरेन दे झिहुई.' },
      { character: 'Historian', chinese: '没错，所以我们有责任保护好它们。', pinyin: 'Méicuò, suǒyǐ wǒmen yǒu zérèn bǎohù hǎo tāmen.', english: 'Exactly, so we have a responsibility to protect them well.', hindiPronunciation: 'मेइचुओ, सुओयी वोमेन योउ ज़ेरेन बाओहू हाओ तामेन.' },
      { character: 'You', chinese: '了解历史可以让我们更好地走向未来。', pinyin: 'Liǎojiě lìshǐ kěyǐ ràng wǒmen gèng hǎo de zǒuxiàng wèilái.', english: 'Understanding history allows us to move towards the future better.', hindiPronunciation: 'लियाओजिए लीशी केयी रांग वोमेन गेंग हाओ दे ज़ोउशियांग वेइलाई.' }
    ],
    exercises: [
      {
        type: 'sentence_building',
        english: 'Because at that time the economy was prosperous.',
        correctChinese: '因为那时候经济繁荣',
        blocks: [
          { chinese: '繁荣', pinyin: 'fánróng' },
          { chinese: '经济', pinyin: 'jīngjì' },
          { chinese: '那时候', pinyin: 'nà shíhòu' },
          { chinese: '因为', pinyin: 'yīnwèi' }
        ]
      }
    ]
  }
];

export const getSituationById = (id: string) => situations.find(s => s.id === id);
export const getSituationsByLevel = (level: number) => situations.filter(s => s.level === level);
