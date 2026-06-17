import { HskWord, HskUnit } from './types';

const hsk1Words: HskWord[] = [
  // Unit 1: Greetings & Basics (10 words)
  { id: 'hsk1-001', chinese: '你', pinyin: 'nǐ', meaning: 'you', partOfSpeech: 'pronoun', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics', exampleSentence: { chinese: '你好！', pinyin: 'nǐ hǎo!', meaning: 'Hello!' } },
  { id: 'hsk1-002', chinese: '好', pinyin: 'hǎo', meaning: 'good; well', partOfSpeech: 'adjective', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics', exampleSentence: { chinese: '你好吗？', pinyin: 'nǐ hǎo ma?', meaning: 'How are you?' } },
  { id: 'hsk1-003', chinese: '你好', pinyin: 'nǐ hǎo', meaning: 'hello', partOfSpeech: 'greeting', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics' },
  { id: 'hsk1-004', chinese: '谢谢', pinyin: 'xiè xie', meaning: 'thank you', partOfSpeech: 'greeting', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics' },
  { id: 'hsk1-005', chinese: '不客气', pinyin: 'bù kè qi', meaning: "you're welcome", partOfSpeech: 'greeting', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics' },
  { id: 'hsk1-006', chinese: '再见', pinyin: 'zài jiàn', meaning: 'goodbye', partOfSpeech: 'greeting', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics' },
  { id: 'hsk1-007', chinese: '请', pinyin: 'qǐng', meaning: 'please; to invite', partOfSpeech: 'verb', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics', exampleSentence: { chinese: '请坐。', pinyin: 'qǐng zuò.', meaning: 'Please sit.' } },
  { id: 'hsk1-008', chinese: '对不起', pinyin: 'duì bu qǐ', meaning: 'sorry', partOfSpeech: 'greeting', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics' },
  { id: 'hsk1-009', chinese: '没关系', pinyin: 'méi guān xi', meaning: "it doesn't matter", partOfSpeech: 'phrase', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics' },
  { id: 'hsk1-010', chinese: '是', pinyin: 'shì', meaning: 'to be; is; am; are', partOfSpeech: 'verb', hskLevel: 1, unit: 1, unitName: 'Greetings & Basics', exampleSentence: { chinese: '我是学生。', pinyin: 'wǒ shì xué sheng.', meaning: 'I am a student.' } },

  // Unit 2: People & Pronouns (10 words)
  { id: 'hsk1-011', chinese: '我', pinyin: 'wǒ', meaning: 'I; me', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns', exampleSentence: { chinese: '我叫小明。', pinyin: 'wǒ jiào xiǎo míng.', meaning: 'My name is Xiao Ming.' } },
  { id: 'hsk1-012', chinese: '他', pinyin: 'tā', meaning: 'he; him', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns' },
  { id: 'hsk1-013', chinese: '她', pinyin: 'tā', meaning: 'she; her', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns' },
  { id: 'hsk1-014', chinese: '们', pinyin: 'men', meaning: 'plural marker for pronouns', partOfSpeech: 'particle', hskLevel: 1, unit: 2, unitName: 'People & Pronouns', exampleSentence: { chinese: '我们是朋友。', pinyin: 'wǒ men shì péng you.', meaning: 'We are friends.' } },
  { id: 'hsk1-015', chinese: '这', pinyin: 'zhè', meaning: 'this', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns', exampleSentence: { chinese: '这是什么？', pinyin: 'zhè shì shén me?', meaning: 'What is this?' } },
  { id: 'hsk1-016', chinese: '那', pinyin: 'nà', meaning: 'that', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns', exampleSentence: { chinese: '那是我的书。', pinyin: 'nà shì wǒ de shū.', meaning: 'That is my book.' } },
  { id: 'hsk1-017', chinese: '谁', pinyin: 'shéi', meaning: 'who', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns', exampleSentence: { chinese: '你是谁？', pinyin: 'nǐ shì shéi?', meaning: 'Who are you?' } },
  { id: 'hsk1-018', chinese: '什么', pinyin: 'shén me', meaning: 'what', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns' },
  { id: 'hsk1-019', chinese: '哪', pinyin: 'nǎ', meaning: 'which; where', partOfSpeech: 'pronoun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns' },
  { id: 'hsk1-020', chinese: '人', pinyin: 'rén', meaning: 'person; people', partOfSpeech: 'noun', hskLevel: 1, unit: 2, unitName: 'People & Pronouns', exampleSentence: { chinese: '他是中国人。', pinyin: 'tā shì zhōng guó rén.', meaning: 'He is Chinese.' } },

  // Unit 3: Family (10 words)
  { id: 'hsk1-021', chinese: '爸爸', pinyin: 'bà ba', meaning: 'dad; father', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family', exampleSentence: { chinese: '我爸爸是医生。', pinyin: 'wǒ bà ba shì yī shēng.', meaning: 'My dad is a doctor.' } },
  { id: 'hsk1-022', chinese: '妈妈', pinyin: 'mā ma', meaning: 'mom; mother', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family' },
  { id: 'hsk1-023', chinese: '儿子', pinyin: 'ér zi', meaning: 'son', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family' },
  { id: 'hsk1-024', chinese: '女儿', pinyin: 'nǚ ér', meaning: 'daughter', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family' },
  { id: 'hsk1-025', chinese: '家', pinyin: 'jiā', meaning: 'home; family', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family', exampleSentence: { chinese: '我的家很大。', pinyin: 'wǒ de jiā hěn dà.', meaning: 'My home is very big.' } },
  { id: 'hsk1-026', chinese: '先生', pinyin: 'xiān sheng', meaning: 'Mr.; sir; husband', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family' },
  { id: 'hsk1-027', chinese: '小姐', pinyin: 'xiǎo jiě', meaning: 'Miss; young lady', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family' },
  { id: 'hsk1-028', chinese: '朋友', pinyin: 'péng you', meaning: 'friend', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family', exampleSentence: { chinese: '他是我的朋友。', pinyin: 'tā shì wǒ de péng you.', meaning: 'He is my friend.' } },
  { id: 'hsk1-029', chinese: '同学', pinyin: 'tóng xué', meaning: 'classmate', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family' },
  { id: 'hsk1-030', chinese: '老师', pinyin: 'lǎo shī', meaning: 'teacher', partOfSpeech: 'noun', hskLevel: 1, unit: 3, unitName: 'Family', exampleSentence: { chinese: '她是我的老师。', pinyin: 'tā shì wǒ de lǎo shī.', meaning: 'She is my teacher.' } },

  // Unit 4: Numbers & Time (10 words)
  { id: 'hsk1-031', chinese: '一', pinyin: 'yī', meaning: 'one', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-032', chinese: '二', pinyin: 'èr', meaning: 'two', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-033', chinese: '三', pinyin: 'sān', meaning: 'three', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-034', chinese: '四', pinyin: 'sì', meaning: 'four', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-035', chinese: '五', pinyin: 'wǔ', meaning: 'five', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-036', chinese: '六', pinyin: 'liù', meaning: 'six', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-037', chinese: '七', pinyin: 'qī', meaning: 'seven', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-038', chinese: '八', pinyin: 'bā', meaning: 'eight', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-039', chinese: '九', pinyin: 'jiǔ', meaning: 'nine', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },
  { id: 'hsk1-040', chinese: '十', pinyin: 'shí', meaning: 'ten', partOfSpeech: 'number', hskLevel: 1, unit: 4, unitName: 'Numbers & Time' },

  // Unit 5: More Numbers & Dates (10 words)
  { id: 'hsk1-041', chinese: '零', pinyin: 'líng', meaning: 'zero', partOfSpeech: 'number', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },
  { id: 'hsk1-042', chinese: '两', pinyin: 'liǎng', meaning: 'two (before measure words)', partOfSpeech: 'number', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates', exampleSentence: { chinese: '两个人', pinyin: 'liǎng gè rén', meaning: 'two people' } },
  { id: 'hsk1-043', chinese: '个', pinyin: 'gè', meaning: 'general measure word', partOfSpeech: 'measure word', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },
  { id: 'hsk1-044', chinese: '年', pinyin: 'nián', meaning: 'year', partOfSpeech: 'noun', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },
  { id: 'hsk1-045', chinese: '月', pinyin: 'yuè', meaning: 'month; moon', partOfSpeech: 'noun', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },
  { id: 'hsk1-046', chinese: '日', pinyin: 'rì', meaning: 'day; sun', partOfSpeech: 'noun', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },
  { id: 'hsk1-047', chinese: '号', pinyin: 'hào', meaning: 'day of a month; number', partOfSpeech: 'noun', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },
  { id: 'hsk1-048', chinese: '今天', pinyin: 'jīn tiān', meaning: 'today', partOfSpeech: 'noun', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates', exampleSentence: { chinese: '今天星期几？', pinyin: 'jīn tiān xīng qī jǐ?', meaning: 'What day is today?' } },
  { id: 'hsk1-049', chinese: '明天', pinyin: 'míng tiān', meaning: 'tomorrow', partOfSpeech: 'noun', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },
  { id: 'hsk1-050', chinese: '昨天', pinyin: 'zuó tiān', meaning: 'yesterday', partOfSpeech: 'noun', hskLevel: 1, unit: 5, unitName: 'More Numbers & Dates' },

  // Unit 6: Time & Clock (10 words)
  { id: 'hsk1-051', chinese: '星期', pinyin: 'xīng qī', meaning: 'week', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },
  { id: 'hsk1-052', chinese: '点', pinyin: 'diǎn', meaning: "o'clock", partOfSpeech: 'measure word', hskLevel: 1, unit: 6, unitName: 'Time & Clock', exampleSentence: { chinese: '现在几点？', pinyin: 'xiàn zài jǐ diǎn?', meaning: 'What time is it?' } },
  { id: 'hsk1-053', chinese: '分钟', pinyin: 'fēn zhōng', meaning: 'minute', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },
  { id: 'hsk1-054', chinese: '现在', pinyin: 'xiàn zài', meaning: 'now', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },
  { id: 'hsk1-055', chinese: '时候', pinyin: 'shí hou', meaning: 'time; moment', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock', exampleSentence: { chinese: '什么时候去？', pinyin: 'shén me shí hou qù?', meaning: 'When to go?' } },
  { id: 'hsk1-056', chinese: '上午', pinyin: 'shàng wǔ', meaning: 'morning; AM', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },
  { id: 'hsk1-057', chinese: '中午', pinyin: 'zhōng wǔ', meaning: 'noon', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },
  { id: 'hsk1-058', chinese: '下午', pinyin: 'xià wǔ', meaning: 'afternoon; PM', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },
  { id: 'hsk1-059', chinese: '前面', pinyin: 'qián miàn', meaning: 'in front of; ahead', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },
  { id: 'hsk1-060', chinese: '后面', pinyin: 'hòu miàn', meaning: 'behind; at the back', partOfSpeech: 'noun', hskLevel: 1, unit: 6, unitName: 'Time & Clock' },

  // Unit 7: Common Verbs I (10 words)
  { id: 'hsk1-061', chinese: '吃', pinyin: 'chī', meaning: 'to eat', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I', exampleSentence: { chinese: '你想吃什么？', pinyin: 'nǐ xiǎng chī shén me?', meaning: 'What do you want to eat?' } },
  { id: 'hsk1-062', chinese: '喝', pinyin: 'hē', meaning: 'to drink', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I', exampleSentence: { chinese: '喝茶吗？', pinyin: 'hē chá ma?', meaning: 'Drink tea?' } },
  { id: 'hsk1-063', chinese: '看', pinyin: 'kàn', meaning: 'to look; to see; to watch', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I', exampleSentence: { chinese: '我在看书。', pinyin: 'wǒ zài kàn shū.', meaning: 'I am reading a book.' } },
  { id: 'hsk1-064', chinese: '听', pinyin: 'tīng', meaning: 'to listen; to hear', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I' },
  { id: 'hsk1-065', chinese: '说', pinyin: 'shuō', meaning: 'to speak; to say', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I', exampleSentence: { chinese: '你说中文吗？', pinyin: 'nǐ shuō zhōng wén ma?', meaning: 'Do you speak Chinese?' } },
  { id: 'hsk1-066', chinese: '读', pinyin: 'dú', meaning: 'to read', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I' },
  { id: 'hsk1-067', chinese: '写', pinyin: 'xiě', meaning: 'to write', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I', exampleSentence: { chinese: '请写你的名字。', pinyin: 'qǐng xiě nǐ de míng zi.', meaning: 'Please write your name.' } },
  { id: 'hsk1-068', chinese: '叫', pinyin: 'jiào', meaning: 'to call; to be called', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I', exampleSentence: { chinese: '你叫什么名字？', pinyin: 'nǐ jiào shén me míng zi?', meaning: 'What is your name?' } },
  { id: 'hsk1-069', chinese: '来', pinyin: 'lái', meaning: 'to come', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I' },
  { id: 'hsk1-070', chinese: '去', pinyin: 'qù', meaning: 'to go', partOfSpeech: 'verb', hskLevel: 1, unit: 7, unitName: 'Common Verbs I', exampleSentence: { chinese: '我去学校。', pinyin: 'wǒ qù xué xiào.', meaning: 'I go to school.' } },

  // Unit 8: Common Verbs II (10 words)
  { id: 'hsk1-071', chinese: '回', pinyin: 'huí', meaning: 'to return; to go back', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II', exampleSentence: { chinese: '我想回家。', pinyin: 'wǒ xiǎng huí jiā.', meaning: 'I want to go home.' } },
  { id: 'hsk1-072', chinese: '住', pinyin: 'zhù', meaning: 'to live; to reside', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II' },
  { id: 'hsk1-073', chinese: '买', pinyin: 'mǎi', meaning: 'to buy', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II', exampleSentence: { chinese: '我想买这个。', pinyin: 'wǒ xiǎng mǎi zhè ge.', meaning: 'I want to buy this.' } },
  { id: 'hsk1-074', chinese: '做', pinyin: 'zuò', meaning: 'to do; to make', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II' },
  { id: 'hsk1-075', chinese: '想', pinyin: 'xiǎng', meaning: 'to think; to want to', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II' },
  { id: 'hsk1-076', chinese: '开', pinyin: 'kāi', meaning: 'to open; to drive', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II' },
  { id: 'hsk1-077', chinese: '坐', pinyin: 'zuò', meaning: 'to sit; to take (transport)', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II', exampleSentence: { chinese: '请坐！', pinyin: 'qǐng zuò!', meaning: 'Please sit!' } },
  { id: 'hsk1-078', chinese: '打电话', pinyin: 'dǎ diàn huà', meaning: 'to make a phone call', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II' },
  { id: 'hsk1-079', chinese: '学习', pinyin: 'xué xí', meaning: 'to study; to learn', partOfSpeech: 'verb', hskLevel: 1, unit: 8, unitName: 'Common Verbs II', exampleSentence: { chinese: '我在学习中文。', pinyin: 'wǒ zài xué xí zhōng wén.', meaning: 'I am studying Chinese.' } },
  { id: 'hsk1-080', chinese: '工作', pinyin: 'gōng zuò', meaning: 'to work; work', partOfSpeech: 'verb/noun', hskLevel: 1, unit: 8, unitName: 'Common Verbs II' },

  // Unit 9: Common Verbs III (10 words)
  { id: 'hsk1-081', chinese: '睡觉', pinyin: 'shuì jiào', meaning: 'to sleep', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III', exampleSentence: { chinese: '我想睡觉了。', pinyin: 'wǒ xiǎng shuì jiào le.', meaning: 'I want to sleep.' } },
  { id: 'hsk1-082', chinese: '看见', pinyin: 'kàn jiàn', meaning: 'to see; to catch sight of', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III' },
  { id: 'hsk1-083', chinese: '爱', pinyin: 'ài', meaning: 'to love', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III', exampleSentence: { chinese: '我爱你。', pinyin: 'wǒ ài nǐ.', meaning: 'I love you.' } },
  { id: 'hsk1-084', chinese: '喜欢', pinyin: 'xǐ huan', meaning: 'to like', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III', exampleSentence: { chinese: '我喜欢中国菜。', pinyin: 'wǒ xǐ huan zhōng guó cài.', meaning: 'I like Chinese food.' } },
  { id: 'hsk1-085', chinese: '认识', pinyin: 'rèn shi', meaning: 'to know (a person)', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III' },
  { id: 'hsk1-086', chinese: '知道', pinyin: 'zhī dào', meaning: 'to know (a fact)', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III' },
  { id: 'hsk1-087', chinese: '会', pinyin: 'huì', meaning: 'can; to be able to', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III', exampleSentence: { chinese: '你会说中文吗？', pinyin: 'nǐ huì shuō zhōng wén ma?', meaning: 'Can you speak Chinese?' } },
  { id: 'hsk1-088', chinese: '能', pinyin: 'néng', meaning: 'can; to be able to', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III' },
  { id: 'hsk1-089', chinese: '下雨', pinyin: 'xià yǔ', meaning: 'to rain', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III', exampleSentence: { chinese: '今天下雨了。', pinyin: 'jīn tiān xià yǔ le.', meaning: 'It rained today.' } },
  { id: 'hsk1-090', chinese: '有', pinyin: 'yǒu', meaning: 'to have; there is', partOfSpeech: 'verb', hskLevel: 1, unit: 9, unitName: 'Common Verbs III', exampleSentence: { chinese: '我有一个苹果。', pinyin: 'wǒ yǒu yī gè píng guǒ.', meaning: 'I have an apple.' } },

  // Unit 10: Places & Directions (10 words)
  { id: 'hsk1-091', chinese: '中国', pinyin: 'zhōng guó', meaning: 'China', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-092', chinese: '北京', pinyin: 'běi jīng', meaning: 'Beijing', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-093', chinese: '学校', pinyin: 'xué xiào', meaning: 'school', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-094', chinese: '医院', pinyin: 'yī yuàn', meaning: 'hospital', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-095', chinese: '商店', pinyin: 'shāng diàn', meaning: 'shop; store', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-096', chinese: '饭店', pinyin: 'fàn diàn', meaning: 'restaurant; hotel', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-097', chinese: '里', pinyin: 'lǐ', meaning: 'inside; in', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-098', chinese: '上', pinyin: 'shàng', meaning: 'up; above; on', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-099', chinese: '下', pinyin: 'xià', meaning: 'down; below; under', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },
  { id: 'hsk1-100', chinese: '出租车', pinyin: 'chū zū chē', meaning: 'taxi', partOfSpeech: 'noun', hskLevel: 1, unit: 10, unitName: 'Places & Directions' },

  // Unit 11: Food & Drinks (10 words)
  { id: 'hsk1-101', chinese: '米饭', pinyin: 'mǐ fàn', meaning: 'cooked rice', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks', exampleSentence: { chinese: '我想吃米饭。', pinyin: 'wǒ xiǎng chī mǐ fàn.', meaning: 'I want to eat rice.' } },
  { id: 'hsk1-102', chinese: '菜', pinyin: 'cài', meaning: 'dish; vegetable', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },
  { id: 'hsk1-103', chinese: '水果', pinyin: 'shuǐ guǒ', meaning: 'fruit', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },
  { id: 'hsk1-104', chinese: '苹果', pinyin: 'píng guǒ', meaning: 'apple', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },
  { id: 'hsk1-105', chinese: '水', pinyin: 'shuǐ', meaning: 'water', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },
  { id: 'hsk1-106', chinese: '茶', pinyin: 'chá', meaning: 'tea', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },
  { id: 'hsk1-107', chinese: '杯子', pinyin: 'bēi zi', meaning: 'cup; glass', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },
  { id: 'hsk1-108', chinese: '钱', pinyin: 'qián', meaning: 'money', partOfSpeech: 'noun', hskLevel: 1, unit: 11, unitName: 'Food & Drinks', exampleSentence: { chinese: '多少钱？', pinyin: 'duō shao qián?', meaning: 'How much money?' } },
  { id: 'hsk1-109', chinese: '块', pinyin: 'kuài', meaning: 'yuan (spoken); piece', partOfSpeech: 'measure word', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },
  { id: 'hsk1-110', chinese: '些', pinyin: 'xiē', meaning: 'some; a few', partOfSpeech: 'measure word', hskLevel: 1, unit: 11, unitName: 'Food & Drinks' },

  // Unit 12: Adjectives & Descriptions (10 words)
  { id: 'hsk1-111', chinese: '大', pinyin: 'dà', meaning: 'big; large', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },
  { id: 'hsk1-112', chinese: '小', pinyin: 'xiǎo', meaning: 'small; little', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },
  { id: 'hsk1-113', chinese: '多', pinyin: 'duō', meaning: 'many; much', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },
  { id: 'hsk1-114', chinese: '少', pinyin: 'shǎo', meaning: 'few; little', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },
  { id: 'hsk1-115', chinese: '冷', pinyin: 'lěng', meaning: 'cold', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions', exampleSentence: { chinese: '今天很冷。', pinyin: 'jīn tiān hěn lěng.', meaning: 'Today is very cold.' } },
  { id: 'hsk1-116', chinese: '热', pinyin: 'rè', meaning: 'hot', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },
  { id: 'hsk1-117', chinese: '高兴', pinyin: 'gāo xìng', meaning: 'happy; glad', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions', exampleSentence: { chinese: '我很高兴。', pinyin: 'wǒ hěn gāo xìng.', meaning: 'I am very happy.' } },
  { id: 'hsk1-118', chinese: '漂亮', pinyin: 'piào liang', meaning: 'beautiful; pretty', partOfSpeech: 'adjective', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },
  { id: 'hsk1-119', chinese: '多少', pinyin: 'duō shao', meaning: 'how many; how much', partOfSpeech: 'pronoun', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },
  { id: 'hsk1-120', chinese: '几', pinyin: 'jǐ', meaning: 'how many; several', partOfSpeech: 'pronoun', hskLevel: 1, unit: 12, unitName: 'Adjectives & Descriptions' },

  // Unit 13: Everyday Objects (10 words)
  { id: 'hsk1-121', chinese: '书', pinyin: 'shū', meaning: 'book', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-122', chinese: '本', pinyin: 'běn', meaning: 'measure word for books', partOfSpeech: 'measure word', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-123', chinese: '桌子', pinyin: 'zhuō zi', meaning: 'table; desk', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-124', chinese: '椅子', pinyin: 'yǐ zi', meaning: 'chair', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-125', chinese: '电脑', pinyin: 'diàn nǎo', meaning: 'computer', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects', exampleSentence: { chinese: '我的电脑很新。', pinyin: 'wǒ de diàn nǎo hěn xīn.', meaning: 'My computer is very new.' } },
  { id: 'hsk1-126', chinese: '电视', pinyin: 'diàn shì', meaning: 'television', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-127', chinese: '电影', pinyin: 'diàn yǐng', meaning: 'movie; film', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-128', chinese: '衣服', pinyin: 'yī fu', meaning: 'clothes', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-129', chinese: '东西', pinyin: 'dōng xi', meaning: 'thing; stuff', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },
  { id: 'hsk1-130', chinese: '名字', pinyin: 'míng zi', meaning: 'name', partOfSpeech: 'noun', hskLevel: 1, unit: 13, unitName: 'Everyday Objects' },

  // Unit 14: Grammar Words & Particles (10 words)
  { id: 'hsk1-131', chinese: '的', pinyin: 'de', meaning: 'possessive/descriptive particle', partOfSpeech: 'particle', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles', exampleSentence: { chinese: '我的书', pinyin: 'wǒ de shū', meaning: 'my book' } },
  { id: 'hsk1-132', chinese: '了', pinyin: 'le', meaning: 'completed action particle', partOfSpeech: 'particle', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles' },
  { id: 'hsk1-133', chinese: '吗', pinyin: 'ma', meaning: 'question particle', partOfSpeech: 'particle', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles' },
  { id: 'hsk1-134', chinese: '呢', pinyin: 'ne', meaning: 'question particle ("and you?")', partOfSpeech: 'particle', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles' },
  { id: 'hsk1-135', chinese: '不', pinyin: 'bù', meaning: 'not; no', partOfSpeech: 'adverb', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles' },
  { id: 'hsk1-136', chinese: '没', pinyin: 'méi', meaning: 'not (for 有); have not', partOfSpeech: 'adverb', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles' },
  { id: 'hsk1-137', chinese: '很', pinyin: 'hěn', meaning: 'very', partOfSpeech: 'adverb', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles' },
  { id: 'hsk1-138', chinese: '太', pinyin: 'tài', meaning: 'too (excessively)', partOfSpeech: 'adverb', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles', exampleSentence: { chinese: '太好了！', pinyin: 'tài hǎo le!', meaning: 'Great! / Too good!' } },
  { id: 'hsk1-139', chinese: '都', pinyin: 'dōu', meaning: 'all; both', partOfSpeech: 'adverb', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles' },
  { id: 'hsk1-140', chinese: '在', pinyin: 'zài', meaning: 'at; in; (ongoing action)', partOfSpeech: 'preposition', hskLevel: 1, unit: 14, unitName: 'Grammar Words & Particles', exampleSentence: { chinese: '他在家。', pinyin: 'tā zài jiā.', meaning: 'He is at home.' } },

  // Unit 15: Weather, Health & More (10 words)
  { id: 'hsk1-141', chinese: '天气', pinyin: 'tiān qì', meaning: 'weather', partOfSpeech: 'noun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More', exampleSentence: { chinese: '今天天气怎么样？', pinyin: 'jīn tiān tiān qì zěn me yàng?', meaning: 'How is the weather today?' } },
  { id: 'hsk1-142', chinese: '医生', pinyin: 'yī shēng', meaning: 'doctor', partOfSpeech: 'noun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More' },
  { id: 'hsk1-143', chinese: '学生', pinyin: 'xué sheng', meaning: 'student', partOfSpeech: 'noun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More' },
  { id: 'hsk1-144', chinese: '汉语', pinyin: 'hàn yǔ', meaning: 'Chinese language', partOfSpeech: 'noun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More' },
  { id: 'hsk1-145', chinese: '中文', pinyin: 'zhōng wén', meaning: 'Chinese (language)', partOfSpeech: 'noun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More' },
  { id: 'hsk1-146', chinese: '字', pinyin: 'zì', meaning: 'character; word', partOfSpeech: 'noun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More' },
  { id: 'hsk1-147', chinese: '岁', pinyin: 'suì', meaning: 'years old', partOfSpeech: 'measure word', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More', exampleSentence: { chinese: '你几岁了？', pinyin: 'nǐ jǐ suì le?', meaning: 'How old are you?' } },
  { id: 'hsk1-148', chinese: '怎么', pinyin: 'zěn me', meaning: 'how; why', partOfSpeech: 'pronoun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More' },
  { id: 'hsk1-149', chinese: '怎么样', pinyin: 'zěn me yàng', meaning: 'how is it; how about', partOfSpeech: 'pronoun', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More' },
  { id: 'hsk1-150', chinese: '和', pinyin: 'hé', meaning: 'and; with', partOfSpeech: 'conjunction', hskLevel: 1, unit: 15, unitName: 'Weather, Health & More', exampleSentence: { chinese: '我和你', pinyin: 'wǒ hé nǐ', meaning: 'me and you' } },
];

// Group words into units
export function getHsk1Units(): HskUnit[] {
  const unitMap = new Map<number, HskWord[]>();
  for (const word of hsk1Words) {
    if (!unitMap.has(word.unit)) unitMap.set(word.unit, []);
    unitMap.get(word.unit)!.push(word);
  }

  return Array.from(unitMap.entries()).map(([unitNum, words]) => ({
    unit: unitNum,
    name: words[0].unitName,
    hskLevel: 1 as const,
    description: `Master ${words.length} essential words for ${words[0].unitName.toLowerCase()}.`,
    words,
  }));
}

export { hsk1Words };
export default hsk1Words;
