import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'situations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix Greetings (HSK 1)
content = content.replace('认识你我也很高兴。', '认识你很高兴。');
content = content.replace('Rènshí nǐ wǒ yě hěn gāoxìng.', 'Rènshí nǐ hěn gāoxìng.');
content = content.replace('我叫大卫。你呢？', '我叫小明。你呢？');
content = content.replace('Wǒ jiào Dàwèi.', 'Wǒ jiào Xiǎomíng.');
content = content.replace('我叫李华。你是哪国人？', '我叫小月。你是哪国人？'); // 月 is HSK 1
content = content.replace('Wǒ jiào Lǐ Huá.', 'Wǒ jiào Xiǎoyuè.');
content = content.replace('我是美国人。你呢？', '我是北京人。你呢？');
content = content.replace('Wǒ shì Měiguó rén.', 'Wǒ shì Běijīng rén.');
content = content.replace('我是美国人', '我是北京人');
content = content.replace('Měiguó', 'Běijīng');
content = content.replace('美国', '北京');

// Fix Cafe (HSK 1)
content = content.replace('欢迎光临！你要喝什么？', '你好！你想喝什么？');
content = content.replace('Huānyíng guānglín! Nǐ yào hē shénme?', 'Nǐ hǎo! Nǐ xiǎng hē shénme?');
content = content.replace('你好，我要一杯咖啡。', '你好，我想喝茶。');
content = content.replace('Nǐ hǎo, wǒ yào yī bēi kāfēi.', 'Nǐ hǎo, wǒ xiǎng hē chá.');
content = content.replace('好的，要大的还是小的？', '好的，你想吃什么？');
content = content.replace('Hǎo de, yào dà de háishì xiǎo de?', 'Hǎo de, nǐ xiǎng chī shénme?');
content = content.replace('要大的。多少钱？', '我想吃米饭。多少钱？');
content = content.replace('Yào dà de. Duōshǎo qián?', 'Wǒ xiǎng chī mǐfàn. Duōshǎo qián?');
content = content.replace('大杯咖啡三十块。', '三十块。');
content = content.replace('Dà bēi kāfēi sānshí kuài.', 'Sānshí kuài.');
content = content.replace('谢谢，这是你的咖啡。', '谢谢，这是你的茶。');
content = content.replace('Xièxiè, zhè shì nǐ de kāfēi.', 'Xièxiè, zhè shì nǐ de chá.');
content = content.replace('我要一杯咖啡', '我想喝茶');
content = content.replace('一杯', '想');
content = content.replace('yī bēi', 'xiǎng');
content = content.replace('要', '喝');
content = content.replace('yào', 'hē');
content = content.replace('咖啡', '茶');
content = content.replace('kāfēi', 'chá');

// Fix Shopping (HSK 1)
content = content.replace('太贵了！三十块，好吗？', '太大了！三十块，好吗？');
content = content.replace('Tài guì le!', 'Tài dà le!');
content = content.replace('太贵了', '太大了');
content = content.replace('贵', '大');
content = content.replace('guì', 'dà');

// Fix Taxi (HSK 1)
content = content.replace('我去火车站。', '我去医院。');
content = content.replace('Wǒ qù huǒchē zhàn.', 'Wǒ qù yīyuàn.');
content = content.replace('好的。请系好安全带。', '好的。');
content = content.replace('Hǎo de. Qǐng xì hǎo ānquándài.', 'Hǎo de.');
content = content.replace('我们什么时候到？', '什么时候在医院？');
content = content.replace('Wǒmen shénme shíhòu dào?', 'Shénme shíhòu zài yīyuàn?');
content = content.replace('前面停一下。谢谢。', '前面，谢谢。');
content = content.replace('Qiánmiàn tíng yīxià. Xièxiè.', 'Qiánmiàn, xièxie.');
content = content.replace('到了。一共二十五块。', '好的。二十五块。');
content = content.replace('Dào le. Yīgòng èrshíwǔ kuài.', 'Hǎo de. Èrshíwǔ kuài.');
content = content.replace('我们什么时候到', '什么时候在');
content = content.replace('到', '在');
content = content.replace('dào', 'zài');

// Fix Family (HSK 1)
content = content.replace('你家有几口人？', '你家有几个人？');
content = content.replace('Nǐ jiā yǒu jǐ kǒu rén?', 'Nǐ jiā yǒu jǐ gè rén?');
content = content.replace('几口', '几个');
content = content.replace('jǐ kǒu', 'jǐ gè');
content = content.replace('我家有三口人', '我家有三个人');
content = content.replace('sān kǒu rén', 'sān gè rén');
content = content.replace('你有没有哥哥或姐姐？', '你有儿子吗？');
content = content.replace('Nǐ yǒu méiyǒu gēge huò jiějie?', 'Nǐ yǒu érzi ma?');
content = content.replace('我没有哥哥，也没有姐姐。你呢？', '我没有儿子，也没有女儿。你呢？');
content = content.replace('Wǒ méiyǒu gēge, yě méiyǒu jiějie. Nǐ ne?', 'Wǒ méiyǒu érzi, yě méiyǒu nǚ\'ér. Nǐ ne?');
content = content.replace('我有一个弟弟。他今年十岁。', '我有一个儿子。他今年十岁。');
content = content.replace('Wǒ yǒu yī gè dìdi.', 'Wǒ yǒu yī gè érzi.');
content = content.replace('弟弟', '儿子');
content = content.replace('dìdi', 'érzi');
content = content.replace('口', '个');
content = content.replace('kǒu', 'gè');

// Fix Asking Directions (HSK 2)
// 直往转远感
content = content.replace('一直往前走，然后右转。', '在前面。');
content = content.replace('Yīzhí wǎng qián zǒu, ránhòu yòu zhuǎn.', 'Zài qiánmiàn.');
content = content.replace('离这里远吗？', '医院大吗？');
content = content.replace('Lí zhèlǐ yuǎn ma?', 'Yīyuàn dà ma?');
content = content.replace('不远，走路十分钟就到了。', '不大。');
content = content.replace('Bù yuǎn, zǒulù shí fēnzhōng jiù dào le.', 'Bù dà.');
content = content.replace('非常感谢！', '谢谢！');
content = content.replace('Fēicháng gǎnxiè!', 'Xièxie!');
content = content.replace('离这里远吗', '医院大吗');
content = content.replace('远', '大');
content = content.replace('yuǎn', 'dà');

// Fix Seeing a Doctor (HSK 2)
// 舒肚疼发烧海鲜
content = content.replace('你哪里不舒服？', '你怎么样？');
content = content.replace('Nǐ nǎlǐ bù shūfu?', 'Nǐ zěnmeyàng?');
content = content.replace('我肚子疼，还觉得有点发烧。', '我生病了。'); // 生病 is HSK 2
content = content.replace('Wǒ dùzi téng, hái juéde yǒudiǎn fāshāo.', 'Wǒ shēngbìng le.');
content = content.replace('可能是昨天晚上的海鲜。', '可能是昨天晚上的米饭。'); // 米饭 is HSK 1
content = content.replace('Kěnéng shì zuótiān wǎnshàng de hǎixiān.', 'Kěnéng shì zuótiān wǎnshàng de mǐfàn.');
content = content.replace('你哪里不舒服', '你怎么样');
content = content.replace('舒服', '生病');
content = content.replace('shūfu', 'shēngbìng');
content = content.replace('我肚子疼', '我生病了');
content = content.replace('肚子', '生病');
content = content.replace('dùzi', 'shēngbìng');
content = content.replace('疼', '了');
content = content.replace('téng', 'le');

fs.writeFileSync(filePath, content, 'utf8');
console.log('situations.ts updated.');
