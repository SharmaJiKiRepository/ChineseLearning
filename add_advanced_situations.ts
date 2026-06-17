import fs from 'fs';
import path from 'path';

const newSituations = `
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
      { character: 'Colleague', characterName: 'Colleague', chinese: '我们需要平衡工作和生活。', pinyin: 'Wǒmen xūyào pínghéng gōngzuò hé shēnghuó.', english: 'We need to balance work and life.', hindiPronunciation: 'वोमेन शुयाओ फिंगहेंग गोंग्ज़ुओ हे शेंगहुओ.' }
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

const filePath = path.join(process.cwd(), 'data', 'situations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The file ends with:
// export const getSituationById = (id: string) => situations.find(s => s.id === id);
// export const getSituationsByLevel = (level: number) => situations.filter(s => s.level === level);

// Find the end of the situations array.
const endOfArrayStr = '];\\n\\nexport const getSituationById';
const insertIndex = content.indexOf('];\\n\\nexport const getSituationById');

if (insertIndex !== -1) {
  content = content.slice(0, insertIndex) + ',' + newSituations + '\\n\\nexport const getSituationById' + content.slice(insertIndex + endOfArrayStr.length);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully appended advanced situations to situations.ts');
} else {
  console.log('Could not find the insertion point.');
}
