/**
 * Converts Chinese pinyin to approximate English phonetic pronunciation.
 * Example: "nǐ hǎo" → "nee how"
 * 
 * This gives learners an instant "say it like this" guide without needing
 * the AI API. Think of it as training wheels for pronunciation.
 */

// Mapping of pinyin syllable initials to English-friendly sounds
const initialMap: Record<string, string> = {
  'b': 'b', 'p': 'p', 'm': 'm', 'f': 'f',
  'd': 'd', 't': 't', 'n': 'n', 'l': 'l',
  'g': 'g', 'k': 'k', 'h': 'h',
  'j': 'j', 'q': 'ch', 'x': 'sh',
  'zh': 'j', 'ch': 'ch', 'sh': 'sh', 'r': 'r',
  'z': 'dz', 'c': 'ts', 's': 's',
  'y': 'y', 'w': 'w',
};

// Mapping of pinyin finals (vowel parts) to English-friendly sounds
const finalMap: Record<string, string> = {
  // Simple vowels
  'a': 'ah', 'o': 'oh', 'e': 'uh', 'i': 'ee',
  'u': 'oo', 'ü': 'yoo', 'v': 'yoo',
  
  // Compound vowels
  'ai': 'eye', 'ei': 'ay', 'ao': 'ow', 'ou': 'oh',
  'ia': 'yah', 'ie': 'yeh', 'iu': 'yo', 'iao': 'yow',
  'ua': 'wah', 'uo': 'woh', 'ui': 'way', 'uai': 'why',
  'üe': 'yoo-eh', 've': 'yoo-eh',
  
  // Nasal finals
  'an': 'ahn', 'en': 'un', 'in': 'een', 'un': 'wen',
  'ün': 'yoon', 'vn': 'yoon',
  'ang': 'ahng', 'eng': 'ung', 'ing': 'eeng', 'ong': 'oong',
  'ian': 'yen', 'iang': 'yahng', 'iong': 'yoong',
  'uan': 'wahn', 'uang': 'wahng', 'ueng': 'wung',
  'üan': 'yoo-en', 'van': 'yoo-en',
};

// Complete syllable overrides for common syllables that don't follow rules cleanly
const syllableOverrides: Record<string, string> = {
  // Common greetings & particles
  'ni': 'nee', 'hao': 'how', 'ma': 'mah', 'ne': 'nuh',
  'de': 'duh', 'le': 'luh', 'me': 'muh', 'ge': 'guh',
  'he': 'huh', 'ke': 'kuh', 'se': 'suh', 'ze': 'dzuh',
  'ce': 'tsuh', 're': 'ruh',
  
  // Common words
  'wo': 'woh', 'ta': 'tah', 'shi': 'shir',
  'zhi': 'jir', 'chi': 'chir', 'ri': 'rir',
  'zi': 'dzih', 'ci': 'tsih', 'si': 'sih',
  'ye': 'yeh', 'yue': 'yoo-eh',
  
  // Special sounds
  'zhe': 'juh', 'che': 'chuh', 'she': 'shuh',
  'zhu': 'joo', 'chu': 'choo', 'shu': 'shoo', 'ru': 'roo',
  'ju': 'joo', 'qu': 'choo', 'xu': 'shoo',
  'lü': 'lyoo', 'nü': 'nyoo',
  'lv': 'lyoo', 'nv': 'nyoo',
  
  // Numbers (si, shi already defined above)
  'yi': 'ee', 'er': 'ar', 'san': 'sahn',
  'wu': 'woo', 'liu': 'lyo', 'qi': 'chee', 'ba': 'bah',
  'jiu': 'jyo',
  
  // Misc common
  'bei': 'bay', 'jing': 'jeeng', 'xue': 'shoo-eh',
  'sheng': 'shung', 'ren': 'run', 'men': 'mun',
  'wen': 'wun', 'hen': 'hun', 'gen': 'gun',
  'dian': 'dyen', 'tian': 'tyen', 'nian': 'nyen',
  'lian': 'lyen', 'jian': 'jyen', 'qian': 'chyen',
  'xian': 'shyen', 'mian': 'myen', 'bian': 'byen',
  'pian': 'pyen',
  'dui': 'dway', 'hui': 'hway', 'gui': 'gway',
  'sui': 'sway', 'zui': 'dzway', 'cui': 'tsway',
  'mei': 'may', 'fei': 'fay',
  'lei': 'lay', 'pei': 'pay', 'wei': 'way',
  'gei': 'gay', 'nei': 'nay',
  'kai': 'kye', 'lai': 'lye', 'mai': 'my',
  'nai': 'nye', 'pai': 'pie', 'tai': 'tie',
  'zai': 'dzye', 'cai': 'tsye', 'sai': 'sye',
  'hai': 'hi', 'dai': 'dye',
  'gao': 'gow', 'lao': 'low',
  'mao': 'mow', 'bao': 'bow', 'dao': 'dow',
  'tao': 'tow', 'zhao': 'jow', 'shao': 'show',
  'xiao': 'shyow', 'jiao': 'jyow', 'qiao': 'chyow',
  'piao': 'pyow', 'biao': 'byow', 'miao': 'myow',
  'diao': 'dyow', 'tiao': 'tyow', 'liao': 'lyow', 'niao': 'nyow',
  'chang': 'chahng', 'zhang': 'jahng', 'shang': 'shahng',
  'fang': 'fahng', 'gang': 'gahng', 'hang': 'hahng',
  'lang': 'lahng', 'dang': 'dahng', 'tang': 'tahng',
  'wang': 'wahng', 'yang': 'yahng', 'jiang': 'jyahng',
  'qiang': 'chyahng', 'xiang': 'shyahng', 'liang': 'lyahng',
  'niang': 'nyahng',
  'zhong': 'joong', 'gong': 'goong', 'kong': 'koong',
  'dong': 'doong', 'tong': 'toong', 'nong': 'noong',
  'long': 'loong', 'hong': 'hoong', 'song': 'soong',
  'cong': 'tsoong', 'rong': 'roong',
  'bing': 'beeng', 'ding': 'deeng', 'ting': 'teeng',
  'ning': 'neeng', 'ling': 'leeng', 'ming': 'meeng',
  'ping': 'peeng', 'xing': 'sheeng',
  'qing': 'cheeng', 'ying': 'yeeng',
  'zuo': 'dzwoh', 'cuo': 'tswoh', 'suo': 'swoh',
  'duo': 'dwoh', 'tuo': 'twoh', 'nuo': 'nwoh',
  'luo': 'lwoh', 'guo': 'gwoh', 'huo': 'hwoh',
  'zhuo': 'jwoh', 'chuo': 'chwoh', 'shuo': 'shwoh',
  'ruo': 'rwoh',
  'chao': 'chow',
  'zhan': 'jahn', 'chan': 'chahn', 'shan': 'shahn',
  'ran': 'rahn', 'fan': 'fahn', 'ban': 'bahn',
  'pan': 'pahn', 'man': 'mahn', 'dan': 'dahn',
  'tan': 'tahn', 'nan': 'nahn', 'lan': 'lahn',
  'gan': 'gahn', 'han': 'hahn', 'kan': 'kahn',
  'wan': 'wahn', 'guan': 'gwahn', 'huan': 'hwahn',
  'duan': 'dwahn', 'tuan': 'twahn', 'luan': 'lwahn',
  'zhuan': 'jwahn', 'chuan': 'chwahn', 'shuan': 'shwahn',
  'ruan': 'rwahn', 'suan': 'swahn', 'kuan': 'kwahn',
  'yuan': 'yoo-en', 'quan': 'choo-en', 'xuan': 'shoo-en',
  'juan': 'joo-en',
  'you': 'yo', 'dou': 'doh', 'tou': 'toh',
  'gou': 'goh', 'hou': 'hoh', 'kou': 'koh',
  'lou': 'loh', 'mou': 'moh', 'rou': 'roh',
  'sou': 'soh', 'zou': 'dzoh', 'cou': 'tsoh',
  'zhou': 'joh', 'chou': 'choh', 'shou': 'shoh',
  'cha': 'chah', 'sha': 'shah', 'zha': 'jah',

};

/**
 * Strip tone marks from pinyin and return the base syllable
 */
function stripTones(pinyin: string): string {
  const toneMap: Record<string, string> = {
    'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
    'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
    'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
    'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
    'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
    'ǖ': 'ü', 'ǘ': 'ü', 'ǚ': 'ü', 'ǜ': 'ü',
  };
  
  return pinyin.split('').map(ch => toneMap[ch] || ch).join('');
}

/**
 * Convert a single pinyin syllable to phonetic English
 */
function syllableToPhonetic(syllable: string): string {
  const clean = stripTones(syllable.toLowerCase().trim());
  
  if (!clean) return '';
  
  // Check override map first
  if (syllableOverrides[clean]) return syllableOverrides[clean];
  
  // Try to split into initial + final
  // Check two-letter initials first (zh, ch, sh)
  let initial = '';
  let final = clean;
  
  const twoLetterInitials = ['zh', 'ch', 'sh'];
  if (twoLetterInitials.some(i => clean.startsWith(i))) {
    initial = clean.slice(0, 2);
    final = clean.slice(2);
  } else if (clean.length > 1 && initialMap[clean[0]]) {
    initial = clean[0];
    final = clean.slice(1);
  }
  
  const mappedInitial = initial ? (initialMap[initial] || initial) : '';
  const mappedFinal = finalMap[final] || final;
  
  return mappedInitial + mappedFinal;
}

/**
 * Convert full pinyin string to phonetic English pronunciation guide.
 * 
 * @example
 * pinyinToPhonetic("nǐ hǎo") // "nee how"
 * pinyinToPhonetic("xiè xie") // "shyeh shyeh"
 * pinyinToPhonetic("běi jīng") // "bay jeeng"
 */
export function pinyinToPhonetic(pinyin: string): string {
  if (!pinyin) return '';
  
  // Split by spaces, convert each syllable
  return pinyin
    .split(/\s+/)
    .map(syllable => syllableToPhonetic(syllable))
    .filter(Boolean)
    .join(' ');
}

export default pinyinToPhonetic;
