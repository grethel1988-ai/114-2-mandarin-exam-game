// ==========================================================================
// 1. 遊戲資料庫 (50題完整題目與關卡分配)
// ==========================================================================
const STAGE_TITLES = {
  1: "關卡 1：語文小旅行 (國字注音)",
  2: "關卡 2：錯字大糾察",
  3: "關卡 3：成語連連看",
  4: "關卡 4：課文大挑戰",
  5: "關卡 5：短語照照鏡",
  6: "關卡 6：造句重組大沙盒",
  7: "關卡 7：閱讀大森林"
};

const database = [
  // --- 關卡 1：國字注音（1-15題，類型：choice） ---
  {
    id: 1, stage: 1, type: "choice",
    text: "「小松鼠奇奇在清（ㄔㄣˊ）出門。」請問括號中注音的國字寫法是？",
    options: ["晨", "辰", "臣", "塵"], answer: 0,
    explain: "清晨的「晨」表示早晨、清早。"
  },
  {
    id: 2, stage: 1, type: "choice",
    text: "「小松鼠（奇奇）在清晨出門。」請問括號中生字的正確注音是？",
    options: ["ㄑㄧˊ ㄑㄧˊ", "ㄐㄧ ㄐㄧ", "ㄑㄧˇ ㄑㄧˇ", "ㄑㄧˋ ㄑㄧˋ"], answer: 0,
    explain: "神奇、奇特的「奇」注音為ㄑㄧˊ。"
  },
  {
    id: 3, stage: 1, type: "choice",
    text: "「因為他要送蘋果給住在山腳下的老山（羊）。」請問括號中生字的正確注音是？",
    options: ["ㄧㄤˊ", "ㄧㄤˇ", "ㄤˊ", "ㄧㄤ"], answer: 0,
    explain: "山羊的「羊」注音為ㄧㄤˊ。"
  },
  {
    id: 4, stage: 1, type: "choice",
    text: "「一路上，奇奇遇到一隻（ㄊㄠˊ）氣的小鳥。」請問括號中注音的國字寫法是？",
    options: ["淘", "桃", "逃", "陶"], answer: 0,
    explain: "淘氣的「淘」表示頑皮、頑皮的。"
  },
  {
    id: 5, stage: 1, type: "choice",
    text: "「小鳥正在樹上（晃）動著翅膀。」請問括號中生字的正確注音是？",
    options: ["ㄏㄨㄤˋ", "ㄏㄨㄤˇ", "ㄏㄨㄤ", "ㄍㄨㄤ"], answer: 0,
    explain: "晃動的「晃」在此讀四聲ㄏㄨㄤˋ，表示搖動。"
  },
  {
    id: 6, stage: 1, type: "choice",
    text: "「小鳥晃動著（ㄔˋ）膀對奇奇打招呼。」請問括號中注音的國字寫法是？",
    options: ["翅", "赤", "斥", "敕"], answer: 0,
    explain: "翅膀的「翅」代表鳥類飛行的器官。"
  },
  {
    id: 7, stage: 1, type: "choice",
    text: "「老山羊剛吃完（ㄧㄠˋ）在休息。」請問括號中注音的國字寫法是？",
    options: ["藥", "要", "耀", "鑰"], answer: 0,
    explain: "吃藥的「藥」是治病的物品。"
  },
  {
    id: 8, stage: 1, type: "choice",
    text: "「小鳥說：我們不要去打（ㄖㄠˇ）老山羊。」請問括號中注音的國字寫法是？",
    options: ["擾", "繞", "遙", "優"], answer: 0,
    explain: "打擾的「擾」表示擾亂、妨礙。"
  },
  {
    id: 9, stage: 1, type: "choice",
    text: "「要讓老山羊好好（休）息。」請問括號中生字的正確注音是？",
    options: ["ㄒㄧㄡ", "ㄒㄧㄡˊ", "ㄒㄧㄡˇ", "ㄒㄧㄡˋ"], answer: 0,
    explain: "休息的「休」注音為ㄒㄧㄡ。"
  },
  {
    id: 10, stage: 1, type: "choice",
    text: "「這時，奇奇看見老山羊的屋（ㄉㄧㄥˇ）上開滿了花。」請問括號中注音的國字寫法是？",
    options: ["頂", "鼎", "訂", "丁"], answer: 0,
    explain: "屋頂的「頂」代表建築物或物體的最高部分。"
  },
  {
    id: 11, stage: 1, type: "choice",
    text: "「屋頂上開滿了（奇）特的花朵。」請問括號中生字的正確注音是？",
    options: ["ㄑㄧˊ", "ㄐㄧ", "ㄑㄧˇ", "ㄑㄧˋ"], answer: 0,
    explain: "奇特的「奇」注音為ㄑㄧˊ。"
  },
  {
    id: 12, stage: 1, type: "choice",
    text: "「（ㄩㄢˇ）ㄩㄢˇ看去，那些花瓣非常美麗。」請問括號中注音的國字寫法是？",
    options: ["遠", "園", "原", "願"], answer: 0,
    explain: "遠遠的「遠」代表距離大。"
  },
  {
    id: 13, stage: 1, type: "choice",
    text: "「那些花瓣的（ㄒㄧㄥˊ）狀就像一串寶石。」請問括號中注音的國字寫法是？",
    options: ["形", "行", "星", "刑"], answer: 0,
    explain: "形狀的「形」代表外觀、樣貌。"
  },
  {
    id: 14, stage: 1, type: "choice",
    text: "「就像一串亮（ㄐㄧㄥ）ㄐㄧㄥ的寶石。」請問括號中注音的國字寫法是？",
    options: ["晶", "金", "京", "睛"], answer: 0,
    explain: "亮晶晶的「晶」代表光亮。"
  },
  {
    id: 15, stage: 1, type: "choice",
    text: "「亮晶晶的（ㄅㄠˇ）石在陽光下閃爍。」請問括號中注音的國字寫法是？",
    options: ["寶", "保", "包", "飽"], answer: 0,
    explain: "寶石的「寶」代表珍貴的物品。"
  },

  // --- 關卡 2：改錯字（16-20題，類型：choice） ---
  {
    id: 16, stage: 2, type: "choice",
    text: "「姊姊在『舞稻』班認真練習，希望表現完美。」請問『舞稻』中寫錯的字應該怎麼寫？",
    options: ["導", "蹈", "道", "稻"], answer: 1,
    explain: "舞蹈的「蹈」是指踏步而舞，原字「稻」是農作物。"
  },
  {
    id: 17, stage: 2, type: "choice",
    text: "「小明花了整個下午的時間，終於做好了飛機『膜型』。」請問『膜型』中寫錯的字應該怎麼寫？",
    options: ["模", "摸", "漠", "謀"], answer: 0,
    explain: "模型的「模」是指規範、標準，原字「膜」是薄皮。"
  },
  {
    id: 18, stage: 2, type: "choice",
    text: "「聽說林阿姨生病『往院』了，我們下午準備去探望她。」請問『往院』中寫錯的字應該怎麼寫？",
    options: ["注", "住", "主", "助"], answer: 1,
    explain: "住院的「住」表示居住、留宿，原字「往」是前往。"
  },
  {
    id: 19, stage: 2, type: "choice",
    text: "「他是學校著名的『大力土』，一個人就能搬動課桌椅。」請問『大力土』中寫錯的字應該怎麼寫？",
    options: ["土", "士", "志", "仕"], answer: 1,
    explain: "大力士的「士」代表有專長的人，原字「土」是泥土。"
  },
  {
    id: 20, stage: 2, type: "choice",
    text: "「垃圾車的音樂響起了，我趕快幫忙去『到垃圾』。」請問『到垃圾』中寫錯的字應該怎麼寫？",
    options: ["倒", "道", "導", "刀"], answer: 0,
    explain: "倒垃圾的「倒」是指傾倒，原字「到」是抵達。"
  },

  // --- 關卡 3：四字詞語填空（21-28題，類型：choice） ---
  {
    id: 21, stage: 3, type: "choice",
    text: "「這對雙胞胎姐妹不僅長得□□□□，連說話的聲音都很像。」空格中應填入？",
    options: ["一模一樣", "閃閃發光", "琅琅上口", "蹦蹦跳跳"], answer: 0,
    explain: "「一模一樣」形容外貌或形體完全相同。"
  },
  {
    id: 22, stage: 3, type: "choice",
    text: "「聽到爸爸決定要帶我們去遊樂園玩，全家人都高興得□□□□。」空格中應填入？",
    options: ["大吃一驚", "手舞足蹈", "四處飛散", "不可思議"], answer: 1,
    explain: "「手舞足蹈」形容高興到了極點，雙手舞動、兩腳跳躍。"
  },
  {
    id: 23, stage: 3, type: "choice",
    text: "「媽媽一打開房門，發現原本亂七八糟的房間變得一塵不染，讓她□□□□。」空格中應填入？",
    options: ["大吃一驚", "琅琅上口", "閃閃發光", "手舞足蹈"], answer: 0,
    explain: "「大吃一驚」形容極度驚奇。"
  },
  {
    id: 24, stage: 3, type: "choice",
    text: "「夜晚的星空中，有好多□□□□的小星星，像亮晶晶的寶石。」空格中應填入？",
    options: ["蹦蹦跳跳", "一模一樣", "閃閃發光", "四處飛散"], answer: 2,
    explain: "「閃閃發光」形容光芒明亮、閃爍不定。"
  },
  {
    id: 25, stage: 3, type: "choice",
    text: "「老師教我們唱的童謠旋律簡單，聽了幾次就□□□□。」空格中應填入？",
    options: ["琅琅上口", "不可思議", "手舞足蹈", "大吃一驚"], answer: 0,
    explain: "「琅琅上口」形容誦讀詩文或歌唱極為流暢。"
  },
  {
    id: 26, stage: 3, type: "choice",
    text: "「突然一陣大風吹過來，把桌上的考卷吹得□□□□，大家趕快幫忙撿。」空格中應填入？",
    options: ["閃閃發光", "一模一樣", "四處飛散", "琅琅上口"], answer: 2,
    explain: "「四處飛散」形容東西往各個方向飄散開來。"
  },
  {
    id: 27, stage: 3, type: "choice",
    text: "「這隻小狗竟然會幫主人拿報紙，真是太□□□□了！」空格中應填入？",
    options: ["不可思議", "手舞足蹈", "一模一樣", "蹦蹦跳跳"], answer: 0,
    explain: "「不可思議」原為佛教用語，現常用於形容事情奇特，無法用常理解釋。"
  },
  {
    id: 28, stage: 3, type: "choice",
    text: "「下課鐘聲響了，小朋友在草地上□□□□的追著皮球，非常開心。」空格中應填入？",
    options: ["大吃一驚", "四處飛散", "琅琅上口", "蹦蹦跳跳"], answer: 3,
    explain: "「蹦蹦跳跳」形容精力充沛、歡快地跳躍。"
  },

  // --- 關卡 4：課文選擇題（29-36題，類型：choice） ---
  {
    id: 29, stage: 4, type: "choice",
    text: "在《月光河》一文中，動物們想了什麼好辦法，讓無法出門的小白兔也能看到月亮？",
    options: [
      "畫一幅月光的圖畫送給他",
      "在院子挖大坑，請小象噴水變成小池塘反射月光",
      "拿出一面大鏡子把月光照進他家",
      "大家合力把小白兔抬到月光河邊"
    ], answer: 1,
    explain: "動物們發揮愛心與創意，利用小象噴水做成池塘，在水面倒映出月光送給小白兔。"
  },
  {
    id: 30, stage: 4, type: "choice",
    text: "在《黃狗生蛋》一文中，黃狗媽媽窩裡的那顆蛋，到底是怎麼來的？",
    options: [
      "是黃狗媽媽自己生下來的",
      "是鵝媽媽出門找朋友，請黃狗媽媽幫忙照顧的",
      "是鴨子不小心忘在狗窩裡的",
      "是鴕鳥媽媽借放在那裡的"
    ], answer: 1,
    explain: "那是鵝媽媽託黃狗媽媽代為看顧的蛋，並不是黃狗自己生的。"
  },
  {
    id: 31, stage: 4, type: "choice",
    text: "在《神筆馬良》一文中，面對貪心的皇帝，馬良最後用了什麼聰明的方法解決？",
    options: [
      "畫了一隻大老虎把皇帝嚇跑",
      "畫了一艘大船和狂風大浪，把皇帝的船吹得看不見了",
      "畫了一座迷宮把皇帝困在裡面",
      "畫了許多金元寶給皇帝，讓皇帝放了他"
    ], answer: 1,
    explain: "馬良在海中畫了金山，當皇帝坐船出海時，馬良畫了大風大浪，大船因此翻覆。"
  },
  {
    id: 32, stage: 4, type: "choice",
    text: "在《小熊的邀請》一文中，袋鼠媽媽被小熊邀請時，為什麼願意停下來和小熊一起讀書？",
    options: [
      "因為她剛好很無聊沒有事做",
      "因為她想把小熊的故事書帶回自己家",
      "因為她想起了小時候聽故事的快樂時光",
      "因為她想教小袋鼠怎麼認字"
    ], answer: 2,
    explain: "小熊誠摯的共讀邀請，勾起了袋鼠媽媽童年聽故事的溫馨回憶。"
  },
  {
    id: 33, stage: 4, type: "choice",
    text: "在《巨人山》一文中，為什麼大家會稱呼被綁在海邊的那個人為「巨人山」？",
    options: [
      "因為他的名字裡面剛好有一個「山」字",
      "因為他的身體非常巨大，對小人國的主角們來說就像高大的山一樣",
      "因為他是從很高很高的山上走下來的",
      "因為他的身上長滿了像樹木一樣的植物"
    ], answer: 1,
    explain: "在小人國居民（格列佛遊記背景）的眼中，主角的身材極為龐大，宛如高山。"
  },
  {
    id: 34, stage: 4, type: "choice",
    text: "在《黃狗生蛋》一文中，從公雞的行為中，我們可以學到什麼重要的事情？",
    options: [
      "遇到事情要先弄清楚真相，不能急躁的亂傳話",
      "狗真的會生蛋，世界上有很多不可思議的事",
      "鵝媽媽不應該把蛋借放在別人家",
      "公雞跑得最快，非常適合當森林廣播員"
    ], answer: 0,
    explain: "公雞沒查明真相就大肆傳播謠言，我們應學會「遇事查證」的道理。"
  },
  {
    id: 35, stage: 4, type: "choice",
    text: "在《神筆馬良》一文中，故事最主要想告訴我們哪一個道理？",
    options: [
      "畫畫是一項很好的興趣，可以幫自己賺大錢",
      "貪心的人最後都會有好報，善良的人容易被欺負",
      "應該用自己的能力去幫助別人，不向貪心做壞事的人低頭",
      "遇到強大的人，不管對錯都一定要遵守對方的命令"
    ], answer: 2,
    explain: "馬良用神筆造福人群，面對強權更堅貞不屈，體現了善良與勇氣。"
  },
  {
    id: 36, stage: 4, type: "choice",
    text: "在《巨人山》一文中，從小人國居民的視角描寫巨人，這主要是在告訴我們什麼？",
    options: [
      "遇到聽不懂別人在說什麼的時候，就要趕快跑開",
      "運用豐富的想像力與觀察力，從不同的角度看待未知的事物",
      "絕對不可以一次吃掉好幾百人份的食物，會變怪物",
      "在海邊睡覺是一件很危險的事情"
    ], answer: 1,
    explain: "從不同視角看世界能發現不同的美，換位思考能讓人學會包容與理解。"
  },

  // --- 關卡 5：短語照照鏡（37-40題，類型：choice） ---
  {
    id: 37, stage: 5, type: "choice",
    text: "例句：『（一條）（神秘）的（河）』。請問哪一個短語的結構與例句「完全相同」？",
    options: [
      "（一片）（蔚藍）的（天）",
      "（飛機模型）不可能那麼（小）",
      "（小狗）的（尾巴）這麼（長）",
      "（奔跑）在（草地）上"
    ], answer: 0,
    explain: "例句結構為「（量詞）（形容詞）的（名詞）」，只有選項 1 符合此結構。"
  },
  {
    id: 38, stage: 5, type: "choice",
    text: "例句：『（鴕鳥蛋）不可能那麼（小）』。請問哪一個短語的結構與例句「完全相同」？",
    options: [
      "（一個）（溫暖）的（家）",
      "（巨人的腳）不可能那麼（窄）",
      "（甲蟲）的（世界）這麼（奇妙）",
      "（閃閃發光）的（寶石）"
    ], answer: 1,
    explain: "例句結構為「（名詞）不可能那麼（形容詞）」，選項 2 完全符合。"
  },
  {
    id: 39, stage: 5, type: "choice",
    text: "例句：『（甲蟲）的（世界）這麼（奇妙）』。請問哪一個短語的結構與例句「完全相同」？",
    options: [
      "（森林）的（夜晚）這麼（安靜）",
      "（鴕鳥蛋）不可能那麼（大）",
      "（一條）（美麗）的（河）",
      "（蹦蹦跳跳）的（兔子）"
    ], answer: 0,
    explain: "例句結構為「（名詞）的（名詞）這麼（形容詞）」，選項 1 符合此結構。"
  },
  {
    id: 40, stage: 5, type: "choice",
    text: "例句：『（閃閃發光）的（寶石）』。請問哪一個短語的結構與例句「完全相同」？",
    options: [
      "（意想不到）的（驚喜）",
      "（妹妹）的（書包）這麼（重）",
      "（飛機）不可能那麼（慢）",
      "（一個）（精彩）的（故事）"
    ], answer: 0,
    explain: "例句結構為「（四字形容詞）的（名詞）」，「意想不到」是四字形容詞，「驚喜」是名詞，故選 1。"
  },

  // --- 關卡 6：造句重組大沙盒（41-44題，類型：reorder） ---
  {
    id: 41, stage: 6, type: "reorder",
    text: "請利用「一邊……一邊……」重組出通順的句子：",
    pool: ["一邊", "小熊", "，", "一邊", "吃著蘋果", "看著故事書。"],
    answer: ["小熊", "一邊", "吃著蘋果", "，", "一邊", "看著故事書。"],
    explain: "「一邊……一邊……」表示兩個動作同時進行。正確句子：小熊一邊吃著蘋果，一邊看著故事書。"
  },
  {
    id: 42, stage: 6, type: "reorder",
    text: "請利用「好像……又好像……」重組出通順的句子：",
    pool: ["又好像一隻小羊", "好像棉花糖", "天空的白雲", "，"],
    answer: ["天空的白雲", "好像棉花糖", "，", "又好像一隻小羊"],
    explain: "「好像……又好像……」形容一樣事物給人多種不同的聯想。正確句子：天空的白雲好像棉花糖，又好像一隻小羊。"
  },
  {
    id: 43, stage: 6, type: "reorder",
    text: "請利用「因為……所以……」重組出通順的句子：",
    pool: ["所以不能出門玩。", "因為小白兔生病了", "，"],
    answer: ["因為小白兔生病了", "，", "所以不能出門玩。"],
    explain: "「因為……所以……」是因果關係句型。正確句子：因為小白兔生病了，所以不能出門玩。"
  },
  {
    id: 44, stage: 6, type: "reorder",
    text: "請利用「不但……更……」重組出通順的句子：",
    pool: ["更體會了共讀的樂趣。", "不但欣賞了月亮", "動物們", "，"],
    answer: ["動物們", "抓取不但", "，", "更體會了共讀的樂趣。"], // 這裡寫正確檢核順序
    // 為了安全起見，檢核可以用簡單的字串拼接來比對
    correctString: "動物們不但欣賞了月亮，更體會了共讀的樂趣。",
    explain: "「不但……更……」表示層遞關係。正確句子：動物們不但欣賞了月亮，更體會了共讀的樂趣。"
  },

  // --- 關卡 7：閱讀大森林（45-50題，類型：reading） ---
  {
    id: 45, stage: 7, type: "reading",
    text: "根據短文，松鼠奇奇在哪裡舉辦了「語文遊樂園」讀書會？",
    options: ["巨人的城堡裡", "美麗的陽光森林裡", "裝滿甲蟲的圖書館", "海邊的沙灘上"], answer: 1,
    explain: "文章第一段提到：「松鼠奇奇...決定在晴朗的午後舉辦一場『語文遊樂園』讀書會，邀請動物朋友們在陽光森林裡同樂。」"
  },
  {
    id: 46, stage: 7, type: "reading",
    text: "故事中，急躁的公雞因為看到了什麼，才到處宣傳不可思議的消息？",
    options: ["看到馬良在畫畫", "看到狗窩裡有一顆蛋", "看到小白兔生病了", "看到大象在噴水"], answer: 1,
    explain: "第二段提到：「公雞因為看到狗窩裡的蛋，還沒弄清楚事情的真相，就急著到處宣傳。」"
  },
  {
    id: 47, stage: 7, type: "reading",
    text: "遇見急躁的公雞時，奇奇給了他什麼建議？",
    options: ["趕快去幫忙孵蛋", "遇事要先弄清楚真相，別急著亂傳話", "用神筆畫出金山銀山", "去邀請皇帝一起來"], answer: 1,
    explain: "第二段中奇奇笑著說：「遇到事情要先弄清楚真相，別急著亂傳話，先坐下來和我們一起看書吧！」"
  },
  {
    id: 48, stage: 7, type: "reading",
    text: "在《神筆馬良》的故事中，馬良最後用什麼方法解決貪心皇帝的威脅？",
    options: ["畫了一座噴火的巨人山", "畫了五個大木桶把皇帝困住", "畫了狂風大浪把皇帝的船吹得不見了", "畫了許多金元寶給皇帝"], answer: 2,
    explain: "第三段提到：「馬良卻機智地畫了狂風大浪，把皇帝的船吹得不見了。」"
  },
  {
    id: 49, stage: 7, type: "reading",
    text: "聽完《巨人山》的故事後，動物們學到了什麼？",
    options: ["用不同的角度和想像力來看待未知的事物", "遇到高大的人要趕快拔腿就跑", "小人國的船可以載很多人", "不能一餐吃掉五百個蘋果"], answer: 0,
    explain: "第四段結尾提到：「這個故事讓動物們學會用不同的角度來看待未知的事物。」"
  },
  {
    id: 50, stage: 7, type: "reading",
    text: "這篇短文最主要想告訴我們什麼道理？",
    options: [
      "生病的時候一定要多看故事書才會康復",
      "閱讀是一件充滿驚奇與快樂的事，和朋友共讀能帶來更多喜悅",
      "世界上真的有會生蛋的狗和會畫出實物的水彩筆",
      "晚上的森林很危險，不可以在外面看書"
    ], answer: 1,
    explain: "文章最後一段點出主題：大家體會到了與朋友共讀的無比樂趣。"
  }
];

// 閱讀測驗短文內容
const READING_PASSAGE = `
<h3>陽光森林的「語文遊樂園」</h3>
<p>在美麗的陽光森林裡，有一隻喜歡讀書的松鼠奇奇。他決定在晴朗的午後舉辦一場「語文遊樂園」讀書會，邀請動物朋友們一起來分享故事。</p>
<p>奇奇推著裝滿故事書的小車出門。在路上，他遇到了急匆匆的公雞。公雞因為看到狗窩裡的蛋，還沒弄清楚事情的真相，就急著到處宣傳「黃狗生蛋」的不可思議消息。奇奇笑著對公雞說：「遇到事情要先弄清楚真相，別急著亂傳話，先坐下來和我們一起看書吧！」</p>
<p>接著，奇奇去探望生病不能出門的小白兔。小白兔覺得不能去河邊玩很可惜，奇奇便翻開《神筆馬良》的故事念給她聽。故事裡的馬良得到神筆後，天天為窮人畫畫。後來貪心的皇帝把馬良抓走，逼他畫出金山銀山，馬良卻機智地畫了狂風大浪，把皇帝的船吹得不見了。小白兔聽得津津有味，十分佩服馬良的善良與勇敢。</p>
<p>傍晚時分，袋鼠媽媽牽著小袋鼠來了，大象和小鳥也靠了過來，琅琅的讀書聲傳遍了四方。奇奇為大家念了《巨人山》的故事。大家驚奇地發現，原來在小人國居民的眼中，正常人的一根頭髮竟然像粗壯的樹根，一餐就能吃下好幾百人份的食物，因此被當成了可怕的怪物。這個故事讓動物們學會用不同的角度來看待未知的事物。</p>
<p>天黑了，微風吹過，大家圍坐在奇奇身邊，體會到了與朋友共讀的無比樂趣。</p>
`;

// ==========================================================================
// 2. Web Audio API 音效生成引擎 (完全不需外部檔案)
// ==========================================================================
const SoundEngine = {
  ctx: null,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  playCorrect() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    
    // 第一音 (C5)
    this.playTone(523.25, 0.1, now);
    // 第二音 (E5) - 延遲 0.08 秒播放，產生清脆叮咚聲
    this.playTone(659.25, 0.15, now + 0.08);
  },

  playWrong() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    // 嗶—— (低頻 220Hz ➔ 150Hz 快速衰減，帶有鋸齒波)
    this.playTone(220, 0.3, now, "sawtooth");
  },

  playLevelUp() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    // C5 -> E5 -> G5 -> C6 快速琶音
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 0.15, now + idx * 0.08);
    });
  },

  playWin() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    // 簡單凱旋旋律
    const melody = [
      { f: 523.25, d: 0.15, t: 0 },
      { f: 659.25, d: 0.15, t: 0.15 },
      { f: 783.99, d: 0.15, t: 0.3 },
      { f: 1046.50, d: 0.3, t: 0.45 }
    ];
    melody.forEach(item => {
      this.playTone(item.f, item.d, now + item.t);
    });
  },

  playTone(freq, duration, startTime, type = "sine") {
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      
      gain.gain.setValueAtTime(0.1, startTime);
      gain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) {
      console.warn("音效播放失敗:", e);
    }
  }
};

// ==========================================================================
// 3. 遊戲狀態與變數
// ==========================================================================
let state = {
  playerName: "小勇士",
  avatar: "squirrel",
  avatarEmoji: "🐿️",
  currentQIndex: 0, // 0 到 49
  score: 0,
  lives: 5,
  correctCount: 0,
  userOrder: [] // 句子重組目前使用者排好的詞
};

// ==========================================================================
// 4. DOM 節點初始化與事件綁定
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 畫面控制
  const startScreen = document.getElementById("start-screen");
  const playScreen = document.getElementById("play-screen");
  const endScreen = document.getElementById("end-screen");

  // 開場畫面元素
  const btnStart = document.getElementById("btn-start");
  const playerNameInput = document.getElementById("player-name");
  const avatarOptions = document.querySelectorAll(".avatar-option");

  // 答題與狀態元素
  const statusAvatar = document.getElementById("status-avatar");
  const statusName = document.getElementById("status-name");
  const stageTitle = document.getElementById("current-stage-title");
  const scoreVal = document.getElementById("score-val");
  const heartsBox = document.getElementById("hearts-box");
  const progressFill = document.getElementById("progress-fill");
  const progressTxt = document.getElementById("progress-txt");
  
  const questionText = document.getElementById("question-text");
  const optionsBox = document.getElementById("options-box");
  const qIndexTag = document.getElementById("q-index-tag");
  const qTypeTag = document.getElementById("q-type-tag");
  const qCard = document.getElementById("q-card");
  
  // 句子重組元素
  const reorderBox = document.getElementById("reorder-box");
  const reorderSlots = document.getElementById("reorder-slots");
  const reorderPool = document.getElementById("reorder-pool");
  const btnClearReorder = document.getElementById("btn-clear-reorder");

  // 閱讀測驗雙欄元素
  const readingBox = document.getElementById("reading-box");
  const normalBox = document.getElementById("normal-box");
  const passageContent = document.getElementById("passage-content");
  const readingQArea = document.getElementById("reading-q-area");

  // 回饋與結算元素
  const feedbackBox = document.getElementById("feedback-box");
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackExplain = document.getElementById("feedback-explain");
  const btnNext = document.getElementById("btn-next");

  const certPlayerName = document.getElementById("cert-player-name");
  const certScore = document.getElementById("cert-score");
  const certCorrectCount = document.getElementById("cert-correct-count");
  const certRankName = document.getElementById("cert-rank-name");
  const certDate = document.getElementById("cert-date");
  const btnRestart = document.getElementById("btn-restart");

  // --- 夥伴選擇切換 ---
  avatarOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      avatarOptions.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      state.avatar = opt.dataset.avatar;
      state.avatarEmoji = opt.querySelector(".avatar-icon").textContent;
    });
  });

  // --- 點擊開始冒險 ---
  btnStart.addEventListener("click", () => {
    // 初始化音效上下文
    SoundEngine.init();
    
    // 讀取名稱
    const name = playerNameInput.value.trim();
    state.playerName = name ? name : "小勇士";
    
    // 更新狀態列
    statusAvatar.textContent = state.avatarEmoji;
    statusName.textContent = state.playerName;

    // 切換畫面
    startScreen.classList.remove("active");
    playScreen.classList.add("active");

    // 重設遊戲數據
    resetGame();
    // 載入題目
    loadQuestion();
  });

  // --- 清空重組句子的按鈕 ---
  btnClearReorder.addEventListener("click", () => {
    state.userOrder = [];
    renderReorder();
  });

  // --- 下一題按鈕 ---
  btnNext.addEventListener("click", () => {
    feedbackBox.style.display = "none";
    qCard.classList.remove("correct-flash", "wrong-flash");
    
    // 檢查生命值是否歸零
    if (state.lives <= 0) {
      alert("生命值歸零了！別氣餒，我們重新挑戰！");
      resetGame();
      loadQuestion();
      return;
    }

    state.currentQIndex++;
    if (state.currentQIndex < database.length) {
      loadQuestion();
    } else {
      endGame();
    }
  });

  // --- 重新開始按鈕 ---
  btnRestart.addEventListener("click", () => {
    endScreen.classList.remove("active");
    startScreen.classList.add("active");
  });

  // ==========================================================================
  // 5. 遊戲核心邏輯控制
  // ==========================================================================
  
  function resetGame() {
    state.currentQIndex = 0;
    state.score = 0;
    state.lives = 5;
    state.correctCount = 0;
    updateStatusUI();
  }

  function updateStatusUI() {
    scoreVal.textContent = state.score;
    
    // 繪製愛心生命值
    heartsBox.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement("span");
      heart.textContent = i < state.lives ? "❤️" : "🖤";
      heartsBox.appendChild(heart);
    }

    // 更新進度條
    const progressPercent = (state.currentQIndex / database.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressTxt.textContent = `${state.currentQIndex} / ${database.length}`;
  }

  // 載入當前題目
  function loadQuestion() {
    updateStatusUI();
    const q = database[state.currentQIndex];
    
    // 關卡標題變更時播放 LevelUp 音效
    if (state.currentQIndex > 0 && database[state.currentQIndex - 1].stage !== q.stage) {
      SoundEngine.playLevelUp();
    }

    stageTitle.textContent = STAGE_TITLES[q.stage];
    
    // 初始化卡片回饋樣式
    qCard.classList.remove("correct-flash", "wrong-flash");
    feedbackBox.style.display = "none";

    // 處理閱讀測驗與一般排版的切換
    if (q.type === "reading") {
      normalBox.style.display = "none";
      readingBox.style.display = "grid";
      
      passageContent.innerHTML = READING_PASSAGE;
      
      // 渲染閱讀測驗題目
      readingQArea.innerHTML = `
        <div class="q-header">
          <span class="q-index">第 ${q.id} 題</span>
          <span class="q-type-badge">閱讀測驗</span>
        </div>
        <div class="q-text" style="font-size:1.15rem;">${q.text}</div>
        <div class="options-grid" id="reading-options"></div>
      `;
      
      const readingOptions = document.getElementById("reading-options");
      // 打亂選項並保持與正確答案的關聯
      const shuffledOptions = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === q.answer
      }));
      shuffledOptions.sort(() => Math.random() - 0.5);

      shuffledOptions.forEach((optObj, idx) => {
        const btn = createOptionButton(optObj, idx, shuffledOptions);
        readingOptions.appendChild(btn);
      });
      
    } else {
      readingBox.style.display = "none";
      normalBox.style.display = "block";

      qIndexTag.textContent = `第 ${q.id} 題`;
      
      // 根據關卡設定題目類型標籤
      let typeText = "國字注音";
      if (q.stage === 2) typeText = "錯字糾察";
      else if (q.stage === 3) typeText = "成語填空";
      else if (q.stage === 4) typeText = "課文理解";
      else if (q.stage === 5) typeText = "短語結構";
      else if (q.stage === 6) typeText = "句子重組";
      qTypeTag.textContent = typeText;

      questionText.textContent = q.text;

      if (q.type === "reorder") {
        optionsBox.style.display = "none";
        reorderBox.style.display = "flex";
        state.userOrder = [];
        renderReorder();
      } else {
        reorderBox.style.display = "none";
        optionsBox.style.display = "grid";
        optionsBox.innerHTML = "";
        
        // 打亂選項並保持與正確答案的關聯
        const shuffledOptions = q.options.map((opt, idx) => ({
          text: opt,
          isCorrect: idx === q.answer
        }));
        shuffledOptions.sort(() => Math.random() - 0.5);

        shuffledOptions.forEach((optObj, idx) => {
          const btn = createOptionButton(optObj, idx, shuffledOptions);
          optionsBox.appendChild(btn);
        });
      }
    }
  }

  // 建立選擇題選項按鈕
  function createOptionButton(optionObj, idx, shuffledOptions) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    
    const prefixes = ["①", "②", "③", "④"];
    btn.innerHTML = `<span class="option-prefix">${prefixes[idx]}</span> ${optionObj.text}`;
    
    btn.addEventListener("click", () => {
      // 禁用所有選項點擊
      const siblings = btn.parentElement.querySelectorAll(".option-btn");
      siblings.forEach(s => s.classList.add("disabled"));

      if (optionObj.isCorrect) {
        // 答對
        btn.classList.add("correct");
        handleAnswer(true);
      } else {
        // 答錯，亮出正確答案
        btn.classList.add("wrong");
        const correctIdx = shuffledOptions.findIndex(o => o.isCorrect);
        siblings[correctIdx].classList.add("correct");
        handleAnswer(false);
      }
    });

    return btn;
  }

  // --- 句子重組渲染邏輯 ---
  function renderReorder() {
    const q = database[state.currentQIndex];
    reorderSlots.innerHTML = "";
    reorderPool.innerHTML = "";

    // 渲染上方放置區
    if (state.userOrder.length === 0) {
      reorderSlots.innerHTML = `<span style="color:rgba(255,255,255,0.4); font-size:0.95rem;">點擊下方詞語卡拼湊句子...</span>`;
    } else {
      state.userOrder.forEach((word, idx) => {
        const card = document.createElement("div");
        card.className = "word-card";
        card.textContent = word;
        // 點擊可以移除
        card.addEventListener("click", () => {
          state.userOrder.splice(idx, 1);
          renderReorder();
        });
        reorderSlots.appendChild(card);
      });
    }

    // 渲染下方待選池
    q.pool.forEach(word => {
      const card = document.createElement("div");
      card.className = "word-card";
      card.textContent = word;

      // 如果已經被選中，在池中顯示為已選狀態
      const selectCountInUser = state.userOrder.filter(w => w === word).length;
      const totalCountInPool = q.pool.filter(w => w === word).length;
      if (selectCountInUser >= totalCountInPool) {
        card.classList.add("selected");
      } else {
        card.addEventListener("click", () => {
          state.userOrder.push(word);
          renderReorder();
          checkReorderSentence();
        });
      }
      reorderPool.appendChild(card);
    });
  }

  // 檢測重組句子的對錯
  function checkReorderSentence() {
    const q = database[state.currentQIndex];
    // 當排滿時才判定
    if (state.userOrder.length === q.answer.length) {
      // 禁用所有詞卡點擊
      const cards = reorderPool.querySelectorAll(".word-card");
      cards.forEach(c => c.classList.add("selected"));

      let isCorrect = true;
      if (q.correctString) {
        // 用拼出來的字串比對
        const userStr = state.userOrder.join("");
        isCorrect = (userStr === q.correctString);
      } else {
        // 逐一比對陣列
        isCorrect = state.userOrder.every((val, index) => val === q.answer[index]);
      }

      handleAnswer(isCorrect);
    }
  }

  // --- 處理答題後的數據更新與回饋 ---
  function handleAnswer(isCorrect) {
    const q = database[state.currentQIndex];
    
    if (isCorrect) {
      SoundEngine.playCorrect();
      qCard.classList.add("correct-flash");
      state.score += 2; // 每題 2 分
      state.correctCount++;
      
      showFeedback(true, "回答正確！🎉", q.explain);
    } else {
      SoundEngine.playWrong();
      qCard.classList.add("wrong-flash");
      state.lives--;
      
      let correctAnsText = "";
      if (q.type === "reorder") {
        correctAnsText = q.correctString || q.answer.join("");
      } else {
        correctAnsText = q.options[q.answer];
      }
      
      showFeedback(false, "答錯了喔～ 再接再厲！", `【正確答案】 ${correctAnsText}<br><br>${q.explain}`);
    }
    
    updateStatusUI();
  }

  function showFeedback(isCorrect, title, explain) {
    feedbackBox.style.display = "flex";
    feedbackBox.className = `feedback-panel ${isCorrect ? "correct" : "wrong"}`;
    feedbackIcon.textContent = isCorrect ? "🎉" : "💡";
    feedbackTitle.textContent = title;
    feedbackExplain.innerHTML = explain;
  }

  // ==========================================================================
  // 6. 遊戲結束/結算證書
  // ==========================================================================
  function endGame() {
    const playScreen = document.getElementById("play-screen");
    const endScreen = document.getElementById("end-screen");
    
    SoundEngine.playWin();

    playScreen.classList.remove("active");
    endScreen.classList.add("active");

    // 設定證書資料
    certPlayerName.textContent = state.playerName;
    certScore.textContent = state.score;
    certCorrectCount.textContent = state.correctCount;

    // 計算稱號等級
    let rank = "森林語文見習生";
    if (state.score >= 95) rank = "傳奇語文守護神 🏆";
    else if (state.score >= 85) rank = "皇家語文大師 🎖️";
    else if (state.score >= 70) rank = "森林語文小勇士 🌲";
    else if (state.score >= 50) rank = "語文冒險開拓者 🧭";
    certRankName.textContent = rank;

    // 格式化目前日期
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");
    certDate.textContent = `${year} 年 ${month} 月 ${date} 日`;
  }

});
