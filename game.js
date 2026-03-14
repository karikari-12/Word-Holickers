
const allCards=[
{word:"genuine",meaning:"本物の",atk:20,hp:120,rarity:"R",choices:["古い","偽物の","新しい","大きい","速い"]},
{word:"mania",meaning:"（過度の）熱中",atk:20,hp:120,rarity:"R",choices:["（普通の）好奇心","（穏やかな）関心","（軽い）興味","退屈","無関心"]},
{word:"contempt",meaning:"軽蔑",atk:31,hp:140,rarity:"R",choices:["尊敬","愛情","賞賛","感謝","友情"]},
{word:"exposure",meaning:"露出",atk:27,hp:130,rarity:"R",choices:["絶縁","拒否","隠蔽","保護","沈黙"]},
{word:"onslaught",meaning:"激しい攻撃",atk:42,hp:180,rarity:"SR",choices:["穏やかな風","静かな場所","優しい言葉","平和な時間","穏やかな生活"]},
{word:"frenzy",meaning:"逆上",atk:44,hp:170,rarity:"SR",choices:["安定","静寂","平穏","冷静","落ち着き"]},
{word:"circuit",meaning:"回路",atk:28,hp:150,rarity:"R",choices:["時間","空間","道","建物","言葉"]},
{word:"descendant",meaning:"子孫",atk:24,hp:160,rarity:"N",choices:["後継","親族","系譜","祖先","家系"]},
{word:"exaltation",meaning:"有頂天",atk:37,hp:150,rarity:"R",choices:["静寂","平穏","悲哀","絶望","孤独"]},
{word:"dedication",meaning:"献身",atk:34,hp:170,rarity:"R",choices:["不信","疑念","無関心","怠慢","裏切り"]},
{word:"botanical",meaning:"植物の",atk:23,hp:140,rarity:"N",choices:["科学の","美術の","音楽の","歴史の","文学の"]},
{word:"minister",meaning:"大臣",atk:36,hp:160,rarity:"R",choices:["教師","弁護士","医者","警察官","技師"]},
{word:"merely",meaning:"単に",atk:18,hp:110,rarity:"N",choices:["ほんの","ただ","単純に","突然","完全に"]},
{word:"revolution",meaning:"革命",atk:58,hp:200,rarity:"SSR",choices:["進展","改革","変革","安定","停滞"]},
{word:"transform",meaning:"を変形させる",atk:41,hp:180,rarity:"SR",choices:["を保存する","を削除する","を固定させる","を修理する","を移動させる"]},
{word:"inevitable",meaning:"避けられない",atk:38,hp:170,rarity:"R",choices:["不可能","選択肢","偶然","自由","希望"]},
{word:"imply",meaning:"を示唆する",atk:33,hp:140,rarity:"R",choices:["を明言する","を隠す","を否定する","を説明する","を強調する"]},
{word:"panorama",meaning:"広大な眺め",atk:29,hp:150,rarity:"R",choices:["静かな場所","おいしい料理","明るい未来","小さな部屋","古い建物"]},
{word:"encyclopedia",meaning:"百科事典",atk:35,hp:190,rarity:"R",choices:["辞書","雑誌","カタログ","新聞","小説"]},
{word:"legislature",meaning:"立法機関",atk:37,hp:180,rarity:"R",choices:["警察","行政機関","裁判所","軍隊","学校"]},
{word:"abuse",meaning:"を悪用する",atk:27,hp:130,rarity:"R",choices:["を守る","を助ける","を避ける","を修理する","を改善する"]},
{word:"subscriber",meaning:"購読者",atk:22,hp:140,rarity:"N",choices:["情報提供者","編集者","作家","販売員","広告主"]},
{word:"forefinger",meaning:"人差し指",atk:19,hp:120,rarity:"N",choices:["薬指","小指","親指","中指","手首"]},
{word:"peculiar",meaning:"奇妙な",atk:34,hp:150,rarity:"R",choices:["楽しい","素晴らしい","普通な","安全な","便利な"]},
{word:"anguish",meaning:"激しい苦痛",atk:43,hp:190,rarity:"SR",choices:["穏やかな喜び","心の不安","軽い気分","安心","満足"]},
{word:"comprehend",meaning:"理解する",atk:42,hp:180,rarity:"SR",choices:["聞く","考える","見る","覚える","知る"]},
{word:"objective",meaning:"目的",atk:52,hp:190,rarity:"SSR",choices:["手段","結果","条件","計画","方法"]},
{word:"reinforce",meaning:"を強化する",atk:48,hp:185,rarity:"SR",choices:["を弱める","を無視する","を破壊する","を減らす","を否定する"]},
{word:"accuracy",meaning:"正確さ",atk:54,hp:200,rarity:"SSR",choices:["速さ","強さ","大きさ","長さ","重さ"]},
{word:"enthusiasm",meaning:"熱意",atk:43,hp:180,rarity:"SR",choices:["無関心","冷静さ","不安","疑い","退屈"]},
{word:"confident",meaning:"自信がある",atk:56,hp:210,rarity:"SSR",choices:["怒っている","不安な","恥ずかしい","緊張した","困った"]},
{word:"consensus",meaning:"合意",atk:42,hp:180,rarity:"SR",choices:["対立","不確実性","疑念","反対","争い"]},
{word:"salary",meaning:"給与",atk:58,hp:200,rarity:"SSR",choices:["収入","手当","報酬","賃金","利益"]},
{word:"eclipse",meaning:"日食",atk:44,hp:180,rarity:"SR",choices:["星空","月明り","流星群","彗星","星座"]},
{word:"emigrant",meaning:"（他国への）移住者",atk:44,hp:180,rarity:"SR",choices:["（移動手段の）旅行者","（特定地域の）居住者","（国内の）住民","観光客","通勤者"]},
{word:"organic",meaning:"有機的な",atk:46,hp:185,rarity:"SR",choices:["無機的な","機械的な","科学的な","人工的な","技術的な"]},
{word:"insult",meaning:"を侮辱する",atk:40,hp:175,rarity:"SR",choices:["を賞賛する","を称える","を助ける","を守る","を励ます"]},
{word:"penetrate",meaning:"に侵入する",atk:41,hp:175,rarity:"SR",choices:["を避ける","を観察する","を修理する","を防ぐ","を無視する"]},
{word:"intrusion",meaning:"（私生活への）侵害",atk:43,hp:180,rarity:"SR",choices:["（自由な）行動","（他人との）交流","（大声での）発言","参加","発表"]},
{word:"withstand",meaning:"に耐える",atk:41,hp:175,rarity:"SR",choices:["に勝つ","に備える","に従う","に頼る","に避ける"]},
{word:"revolution",meaning:"革命",atk:58,hp:200,rarity:"SSR",choices:["進展","改革","変革","安定","停滞"]},
{word:"poverty",meaning:"貧困",atk:24,hp:140,rarity:"N",choices:["繁栄","富裕","豊かさ","裕福","成功"]},
{word:"layman",meaning:"素人",atk:22,hp:135,rarity:"N",choices:["研究者","専門家","技術者","学者","教授"]},
{word:"climate",meaning:"気候",atk:25,hp:135,rarity:"N",choices:["気温","環境","温暖化","天気","湿度"]},
{word:"industrial",meaning:"産業の",atk:18,hp:100,rarity:"N",choices:["美しい","古い","静かな","自然の","文化の"]},
];
allCards.forEach(c=>c.type="english");

const kobunCards=[
{
  word:"おどろく",
  meaning:"目を覚ます / ハッと気づく",
  rarity:"SR", atk:44, hp:178,
  reading:"おどろく", hinshi:"動詞（四段活用）",
  detail:"古典では「びっくりする」という意味はまれ。「はっと気づく・目が覚める・注意が向く」が核心。現代語の意味で読むと誤訳しやすい最重要語。",
  example:"草の上に露おきて、おどろかれぬ。",
  exampleMeaning:"草の上に露が置いて、（それに）はっと気づかされた。",
  source:"枕草子",
  quizzes:[
    {correct:"目を覚ます",   choices:["目を覚ます","ぐっすり眠る","うとうとする","夢を見る","目を閉じる","眠りに落ちる"]},
    {correct:"ハッと気づく", choices:["ハッと気づく","見落とす","聞き流す","気に留めない","ぼんやりする","勘違いする"]},
    {correct:"びっくりする", choices:["びっくりする","落ち着き払う","平然とする","動じない","冷静に対処する","気に留めない"]},
  ]
},
{
  word:"あく",
  meaning:"十分満足する / 飽きる",
  rarity:"R", atk:28, hp:157,
  reading:"あく", hinshi:"動詞（四段活用）",
  detail:"「満足する」と「飽きる」は紙一重。満ち足りてそれ以上求めない状態が核心。現代語の「飽きる」は否定的だが、古文では「十分に満たされた」という肯定的な意味も持つ。",
  example:"花を見てあくこともなし。",
  exampleMeaning:"花を見て満足することもない（＝いくら見ても飽きない）。",
  source:"古今和歌集",
  quizzes:[
    {correct:"十分満足する", choices:["十分満足する","物足りなく思う","渇望する","執着する","求め続ける","惜しむ"]},
    {correct:"飽きる",       choices:["飽きる","なじむ","落ち着く","慣れ親しむ","距離を置く","不満に思う"]},
  ]
},
{
  word:"ながむ",
  meaning:"物思いに沈む / 詩を吟じる",
  rarity:"SR", atk:43, hp:191,
  reading:"ながむ", hinshi:"動詞（マ行下二段活用）",
  detail:"「眺む」はぼんやりと遠くを見ながら物思いにふける状態が核心。「詠む」は和歌・詩を声に出して吟じること。同じ読みで意味が異なる二語が存在するため文脈判断が必須。",
  example:"月をながめて、涙おとしけり。",
  exampleMeaning:"月をぼんやり見ながら物思いして、涙を落とした。",
  source:"源氏物語",
  quizzes:[
    {correct:"物思いに沈む", choices:["物思いに沈む","急いで行動する","気晴らしをする","立ち去る","笑い飛ばす","目を閉じる"]},
    {correct:"吟じる",       choices:["吟じる","黙り込む","耳を塞ぐ","聞き流す","大声で叫ぶ","口を閉ざす"]},
  ]
},
{
  word:"ねんず",
  meaning:"祈る / 我慢する",
  rarity:"R", atk:31, hp:149,
  reading:"ねんず", hinshi:"動詞（サ行変格活用）",
  detail:"「念ず」が原義。神仏に祈ることから、じっと耐え我慢することへと意味が広がった。「我慢する」の意味が試験で問われやすい。",
  example:"ただ念じて堪へたり。",
  exampleMeaning:"ただじっと我慢して耐えていた。",
  source:"今昔物語集",
  quizzes:[
    {correct:"祈る",     choices:["祈る","呪う","神に背く","祈りを捧げない","信仰を疑う","嘆き悲しむ"]},
    {correct:"我慢する", choices:["我慢する","取り乱す","嘆き悲しむ","怒りをあらわにする","投げやりになる","諦める"]},
  ]
},
{
  word:"わぶ",
  meaning:"思い嘆く / 心細く思う / 落ちぶれる / 〜しかねる",
  rarity:"SR", atk:41, hp:183,
  reading:"わぶ", hinshi:"動詞（ハ行上二段活用）",
  detail:"失望・困惑・悩みなどの感情を抱くことが核心。「思い嘆く」「心細く思う」「落ちぶれる」「〜しかねる」と幅広い意味を持つ多義語。",
  example:"かくわびしき身を、いかがすべき。",
  exampleMeaning:"このように落ちぶれた身を、どうすればよいのか。",
  source:"大和物語",
  quizzes:[
    {correct:"思い嘆く",   choices:["思い嘆く","喜び浮かれる","気晴らしをする","無関心でいる","さっぱりする","楽観する"]},
    {correct:"心細く思う", choices:["心細く思う","頼もしく思う","安心しきる","堂々とする","心強く感じる","余裕をもつ"]},
    {correct:"落ちぶれる", choices:["落ちぶれる","出世する","栄える","成り上がる","名声を得る","豊かになる"]},
    {correct:"〜しかねる", choices:["〜しかねる","〜せずにいられない","〜したくてたまらない","〜やすい","〜し終える","〜しきる"]},
  ]
},
{
  word:"あくがる",
  meaning:"離れさまよう / 落ち着かない",
  rarity:"R", atk:34, hp:162,
  reading:"あくがる", hinshi:"動詞（ラ行下二段活用）",
  detail:"「あこがれる」とは訳さないことが重要。本来いるべき場所・身体から魂や心が離れてさまよう状態が核心。現代語の意味で訳すと大きな誤りになる。",
  example:"魂のあくがるるやうなる心地して。",
  exampleMeaning:"魂が離れてさまようような気持ちがして。",
  source:"源氏物語",
  quizzes:[
    {correct:"離れさまよう", choices:["離れさまよう","引き寄せられる","強く惹かれる","近づいていく","執着する","留まり続ける"]},
    {correct:"落ち着かない", choices:["落ち着かない","どっしり構える","安らかでいる","平静を保つ","腰を落ち着ける","満ち足りている"]},
  ]
},
{
  word:"とぶらふ",
  meaning:"見舞う / とむらう",
  rarity:"R", atk:29, hp:144,
  reading:"とぶらふ", hinshi:"動詞（ハ行四段活用）",
  detail:"「見舞う」は「訪」の字を当て、人を訪ねて様子を見ること。「弔う」は現代語に近く、死者を悼むこと。どちらの意味かは文脈で判断する。",
  example:"病の人をとぶらひに行きたり。",
  exampleMeaning:"病気の人を見舞いに行った。",
  source:"枕草子",
  quizzes:[
    {correct:"見舞う",   choices:["見舞う","無視する","避けて通る","突き放す","知らぬふりをする","遠ざかる"]},
    {correct:"とむらう", choices:["とむらう","祝いを述べる","宴を開く","誕生を喜ぶ","門出を祝う","吉報を伝える"]},
  ]
},
{
  word:"ののしる",
  meaning:"大声で騒ぐ / 大騒ぎする / 評判が良い",
  rarity:"R", atk:32, hp:155,
  reading:"ののしる", hinshi:"動詞（ラ行四段活用）",
  detail:"現代語の「罵倒する」とは大違い。「大声で騒ぎ立てる」「世間で盛んに評判になる」が核心。賑やかさや名声の高さを表す語。",
  example:"世にののしりたまふ光源氏。",
  exampleMeaning:"世間で評判高くいらっしゃる光源氏。",
  source:"源氏物語",
  quizzes:[
    {correct:"大声で騒ぐ", choices:["大声で騒ぐ","静まり返る","ひっそりする","息をひそめる","黙り込む","物音を立てない"]},
    {correct:"大騒ぎする", choices:["大騒ぎする","落ち着き払う","粛々と行う","しんみりする","厳かに進める","静かに見守る"]},
    {correct:"評判が良い", choices:["評判が良い","悪口を言われる","陰口をたたかれる","罵倒される","嫌われる","貶められる"]},
  ]
},
{
  word:"ありく",
  meaning:"歩き回る / いつも〜する",
  rarity:"N", atk:21, hp:118,
  reading:"ありく", hinshi:"動詞（カ行四段活用）",
  detail:"ただ歩くだけでなく「歩き回る」が原義。補助動詞として用いると「いつも〜する・〜し回る」という反復・継続の意味を表す。",
  example:"野山にありきて、花を見る。",
  exampleMeaning:"野山を歩き回って、花を見る。",
  source:"徒然草",
  quizzes:[
    {correct:"歩き回る",     choices:["歩き回る","立ち止まる","座り込む","じっとしている","引きこもる","動かずにいる"]},
    {correct:"いつも〜する", choices:["いつも〜する","一度だけ〜する","たまに〜する","〜するのをやめる","〜しなくなる","めったに〜しない"]},
  ]
},
{
  word:"まもる",
  meaning:"じっと見つめる / 世話をする / 守護をする",
  rarity:"R", atk:30, hp:148,
  reading:"まもる", hinshi:"動詞（ラ行四段活用）",
  detail:"目（ま）＋守（も）るが原義で「じっと見守る」が核心。「まぼる」とも書く。単に守るだけでなく、目を離さずに見つめることに重点がある。",
  example:"ただじっとまもりゐたり。",
  exampleMeaning:"ただじっと見つめていた。",
  source:"源氏物語",
  quizzes:[
    {correct:"じっと見つめる", choices:["じっと見つめる","目を逸らす","見て見ぬふりをする","顔を背ける","目を閉じる","素通りする"]},
    {correct:"世話をする",     choices:["世話をする","放り出す","突き放す","無関心でいる","干渉しない","見捨てる"]},
    {correct:"守護をする",     choices:["守護をする","攻め立てる","踏み荒らす","脅かす","蹂躙する","見捨てて逃げる"]},
  ]
},
{
  word:"わづらふ",
  meaning:"苦しむ / 〜しかねる",
  rarity:"R", atk:33, hp:160,
  reading:"わづらふ", hinshi:"動詞（ハ行四段活用）",
  detail:"病気による身体的苦しみだけでなく、精神的な苦しみや悩みも表す。補助動詞では「〜しかねる・〜するのに困る」という意味になる。",
  example:"心にわづらふことありて、臥したり。",
  exampleMeaning:"心に苦しむことがあって、横になっていた。",
  source:"源氏物語",
  quizzes:[
    {correct:"苦しむ",     choices:["苦しむ","安らかに過ごす","のびのびとする","心地よく眠る","悠々と構える","楽しみにする"]},
    {correct:"〜しかねる", choices:["〜しかねる","〜せずにいられない","〜したくてたまらない","〜し終える","〜やすい","〜しきる"]},
  ]
},
{
  word:"なやむ",
  meaning:"苦しむ / 非難する",
  rarity:"N", atk:23, hp:126,
  reading:"なやむ", hinshi:"動詞（マ行四段活用）",
  detail:"主に病気など身体的に苦しむ意が核心。「悩む」よりも肉体的な苦痛に重きが置かれる。また人をせめさいなむ「非難する」の意味も持つ。",
  example:"病になやみて、起き上がれず。",
  exampleMeaning:"病気で苦しんで、起き上がれない。",
  source:"枕草子",
  quizzes:[
    {correct:"苦しむ",   choices:["苦しむ","快方に向かう","元気を取り戻す","安らかに眠る","すっかり癒える","健やかでいる"]},
    {correct:"非難する", choices:["非難する","褒めたたえる","かばい立てする","見て見ぬふりをする","優しく諭す","労わる"]},
  ]
},
{
  word:"おこたる",
  meaning:"（病気が）なおる / 中断する",
  rarity:"R", atk:27, hp:141,
  reading:"おこたる", hinshi:"動詞（ラ行四段活用）",
  detail:"「中断する・怠る」が原義で、そこから「病気が中断する＝病気が治る」へと意味が派生した。現代語の「怠ける」とは異なるので注意。",
  example:"やうやうおこたりて、起き出でたり。",
  exampleMeaning:"だんだんと病気が回復して、起き出した。",
  source:"源氏物語",
  quizzes:[
    {correct:"（病気が）なおる", choices:["（病気が）なおる","重篤になる","悪化する","寝込む","床に伏す","命を落とす"]},
    {correct:"中断する",         choices:["中断する","継続する","やり遂げる","突き進む","勢いを増す","励み続ける"]},
  ]
},
{
  word:"あきらむ",
  meaning:"明らかにする / （憂さを）晴らす / （心中を）明かす",
  rarity:"R", atk:35, hp:167,
  reading:"あきらむ", hinshi:"動詞（マ行下二段活用）",
  detail:"「あきらめる」とは訳さないことが最重要。「明らか」にすることが核心で、物事をはっきりさせる・心の内を打ち明ける・憂いを払い晴らすという意味を持つ。",
  example:"心のうちをあきらめて語りぬ。",
  exampleMeaning:"心の内を打ち明けて語った。",
  source:"大鏡",
  quizzes:[
    {correct:"明らかにする",     choices:["明らかにする","隠し通す","うやむやにする","曖昧にする","ごまかす","そらとぼける"]},
    {correct:"（憂さを）晴らす", choices:["（憂さを）晴らす","悲しみに沈む","鬱々と過ごす","嘆き続ける","思い悩む","塞ぎ込む"]},
    {correct:"（心中を）明かす", choices:["（心中を）明かす","口を閉ざす","秘め続ける","打ち明けずにいる","隠し立てする","黙り込む"]},
  ]
},
{
  word:"かなし",
  meaning:"かわいい / 不憫だ / 気の毒だ",
  rarity:"SR", atk:42, hp:188,
  reading:"かなし", hinshi:"形容詞（シク活用）",
  detail:"「愛し」と書けばかわいい・いとしい、「悲（哀）し」と書けば気の毒だ・かわいそうだの意。現代語の「悲しい」に引きずられると誤訳しやすい重要多義語。",
  example:"いとかなしき児のありければ。",
  exampleMeaning:"たいそうかわいらしい子供がいたので。",
  source:"竹取物語",
  quizzes:[
    {correct:"かわいい",  choices:["かわいい","憎らしい","疎ましい","うとましい","煩わしい","目障りだ"]},
    {correct:"不憫だ",    choices:["不憫だ","羨ましい","誇らしい","頼もしい","眩しい","ありがたい"]},
    {correct:"気の毒だ",  choices:["気の毒だ","腹立たしい","妬ましい","恨めしい","疎ましい","憎たらしい"]},
  ]
},
{
  word:"こころにくし",
  meaning:"奥ゆかしい",
  rarity:"N", atk:24, hp:132,
  reading:"こころにくし", hinshi:"形容詞（ク活用）",
  detail:"現代語の「心憎い」に憎いの意味はない。奥深くて思わず引き込まれるような魅力・品格があることが核心。上品で近寄りがたい美しさを表す褒め言葉。",
  example:"心にくくおはする御ありさまかな。",
  exampleMeaning:"奥ゆかしくいらっしゃるご様子よ。",
  source:"源氏物語",
  quizzes:[
    {correct:"奥ゆかしい", choices:["奥ゆかしい","憎らしい","腹立たしい","疎ましい","恨めしい","いまいましい"]},
  ]
},
];
kobunCards.forEach(c=>c.type="kobun");

// =============================================
//  STATE
// =============================================
// current active mode: "english" | "kobun"
let currentMode = "english";

// Per-mode state containers
const modeState = {
  english: {
    deck: [],
    bossHP: 150, bossMaxHP: 150, bossLevel: 1, bossATK: 50,
    missionCount: 0
  },
  kobun: {
    deck: [],
    bossHP: 100, bossMaxHP: 100, bossLevel: 1, bossATK: 35,
    missionCount: 0
  }
};

// Shared state
let owned = [];
let coins = 0, materials = 0, diamonds = 0;
let lastLoginDate = "", missionDate = "";

// Runtime battle state
let playerHP = 0, playerMaxHP = 0;
let inBattle = false;
let quizAnswer = "", quizLocked = false;
let versusMode = false, versusCode = "", enemyDeck = [];
let enemyHP = 0, enemyATK = 0, playerTurn = true, playerFirst = true;
let rarityFilter = "all", sortType = "none", packOpening = false;

// Boss visuals
const bossEmojisEnglish = ["👹","👺","🧟","💀","👾","🐉","🦹","🤖","👻","🔥"];
const bossEmojisKobun   = ["👘","🏯","⛩️","🌸","🗡️","🎭","📜","🌙","🦊","👑"];

function ms(){ return modeState[currentMode]; }
function cardPool(){ return currentMode==="english" ? allCards : kobunCards; }


// =============================================
//  MODE TAB SWITCHING
// =============================================
function switchMode(mode){
  if(versusMode && mode !== currentMode){ alert("対戦中はモード変更できません！"); return; }
  currentMode = mode;
  inBattle = false;

  document.body.classList.toggle("kobun-theme", mode==="kobun");

  // Update tab styles
  document.getElementById("modeTab-english").className = "modeTab" + (mode==="english" ? " active-english" : "");
  document.getElementById("modeTab-kobun").className   = "modeTab" + (mode==="kobun"   ? " active-kobun"   : "");

  // Update screen titles
  if(mode==="english"){
    document.getElementById("packTitle").textContent    = "🎴 英語ガチャ";
    document.getElementById("deckTitle").textContent    = "🃏 英語デッキ（5枚）";
    document.getElementById("battleTitle").textContent  = "⚔️ ボス戦（英語）";
    document.getElementById("versusTitle").textContent  = "🆚 プレイヤー対戦（英語）";
    document.getElementById("englishGachaSection").style.display = "block";
    document.getElementById("kobunGachaSection").style.display   = "none";
  } else {
    document.getElementById("packTitle").textContent    = "🎴 古文ガチャ";
    document.getElementById("deckTitle").textContent    = "🃏 古文デッキ（5枚）";
    document.getElementById("battleTitle").textContent  = "⚔️ ボス戦（古文）";
    document.getElementById("versusTitle").textContent  = "🆚 プレイヤー対戦（古文）";
    document.getElementById("englishGachaSection").style.display = "none";
    document.getElementById("kobunGachaSection").style.display   = "block";
  }

  // Clear quiz area to avoid stale quiz from old mode
  document.getElementById("bossQuizArea").innerHTML = "";
  document.getElementById("packResult").innerHTML   = "";
  document.getElementById("packArea").innerHTML     = "";

  // Re-render current screen with new mode data
  const currentScreen = document.querySelector(".screen.active");
  const screenId = currentScreen ? currentScreen.id : "pack";

  if(screenId === "battle"){
    const d = currentDeck();
    if(d.length < 5){
      show("deck");
    } else {
      startBattle();
      const state = ms();
      document.getElementById("bossLevel").textContent      = state.bossLevel;
      document.getElementById("bossATKDisplay").textContent = state.bossATK;
      updateBossVisual();
      updateHPBars();
      generateQuiz();
    }
  } else {
    update();
  }
}


// =============================================
//  KOBUN DETAIL MODAL
// =============================================
function showKobunDetail(word){
  const card = kobunCards.find(c=>c.word===word);
  if(!card) return;
  const rarityColor = {N:"#aaa",R:"#6BCB77",SR:"#4D96FF",SSR:"#FFD93D"}[card.rarity]||"#fff";
  document.getElementById("kobunModalContent").innerHTML=`
    <div class="km-rarity" style="color:${rarityColor}">${card.rarity}</div>
    <div class="km-word">${card.word}</div>
    <div class="km-reading">読み：${card.reading}</div>
    <div class="km-meaning">意味：<span>${card.meaning}</span></div>
    <div class="km-hinshi">品詞：${card.hinshi}</div>
    <hr class="km-hr">
    <div class="km-section-title">📖 解説</div>
    <div class="km-detail">${card.detail}</div>
    <div class="km-section-title">✍️ 用例</div>
    <div class="km-example">「${card.example}」</div>
    <div class="km-example-meaning">→ ${card.exampleMeaning}</div>
    <div class="km-source">出典：${card.source}</div>
    <hr class="km-hr">
    <div class="km-stats"><span>⚔️ ATK ${card.atk}</span><span>❤️ HP ${card.hp}</span></div>`;
  document.getElementById("kobunModal").classList.add("open");
}
function closeKobunModal(){ document.getElementById("kobunModal").classList.remove("open"); }

// =============================================
//  HP BARS & BOSS VISUAL
// =============================================
function updateHPBars(){
  const state = ms();
  const bossBar = document.getElementById("bossHPBar");
  const playerBar = document.getElementById("playerHPBar");
  if(bossBar){
    bossBar.style.width = Math.max(0, state.bossHP/state.bossMaxHP*100)+"%";
    document.getElementById("bossHPNum").textContent = Math.max(0, state.bossHP);
  }
  if(playerBar){
    playerBar.style.width = (playerMaxHP?Math.max(0,playerHP/playerMaxHP*100):0)+"%";
    document.getElementById("playerHPNum").textContent = Math.max(0, playerHP);
  }
}

function updateBossVisual(){
  const el = document.getElementById("bossVisual");
  if(!el) return;
  const pool = currentMode==="english" ? bossEmojisEnglish : bossEmojisKobun;
  el.textContent = pool[(ms().bossLevel-1) % pool.length];
}

function shakeBoss(){
  const el = document.getElementById("bossVisual");
  if(!el) return;
  el.classList.remove("boss-shake");
  void el.offsetWidth;
  el.classList.add("boss-shake");
  setTimeout(()=>el.classList.remove("boss-shake"),500);
}

function showDmgPopup(dmg, isPlayer){
  const popup = document.createElement("div");
  popup.className = "dmg-popup";
  popup.textContent = (isPlayer?"-":"⚔️ -")+dmg;
  popup.style.color = isPlayer?"#FF6B6B":"#FFD93D";
  popup.style.left = (Math.random()*60+20)+"%";
  popup.style.top = isPlayer?"60%":"30%";
  document.body.appendChild(popup);
  setTimeout(()=>popup.remove(),1200);
}

// =============================================
//  BATTLE OVERLAY
// =============================================
function showBattleOverlay(type){
  const overlay = document.getElementById("battleOverlay");
  overlay.className = "show "+type;
  if(type==="victory"){
    document.getElementById("overlayEmoji").textContent="🏆";
    document.getElementById("overlayTitle").textContent="VICTORY!";
    document.getElementById("overlayMsg").textContent="ボスを倒した！次のレベルへ…";
    spawnStars();
  } else {
    document.getElementById("overlayEmoji").textContent="💀";
    document.getElementById("overlayTitle").textContent="DEFEAT...";
    document.getElementById("overlayMsg").textContent="やられた…もう一度挑戦しよう！";
  }
}

function spawnStars(){
  const stars=["⭐","🌟","✨","💫","🎉","🎊"];
  for(let i=0;i<12;i++){
    setTimeout(()=>{
      const s=document.createElement("div");
      s.className="star-burst";
      s.textContent=stars[Math.floor(Math.random()*stars.length)];
      s.style.left=(Math.random()*90+5)+"%";
      s.style.top=(Math.random()*80+10)+"%";
      s.style.animationDelay=(Math.random()*0.5)+"s";
      document.body.appendChild(s);
      setTimeout(()=>s.remove(),2000);
    },i*100);
  }
}

function closeOverlay(){ document.getElementById("battleOverlay").className=""; }

// =============================================
//  QUIZ (BATTLE)
// =============================================
function generateQuiz(){
  if(!inBattle) return;
  quizLocked = false;
  const pool = cardPool();
  const card = pool[Math.floor(Math.random()*pool.length)];

  // quizzesがある場合はランダムに1問選ぶ、ない場合は旧来のchoicesを使う
  let correct, choices;
  if(card.quizzes && card.quizzes.length > 0){
    const q = card.quizzes[Math.floor(Math.random()*card.quizzes.length)];
    correct = q.correct;
    // choicesからcorrect以外を4つ選んでcorrectと合わせてシャッフル
    const wrongs = q.choices.filter(c=>c!==correct).sort(()=>Math.random()-0.5).slice(0,3);
    choices = [...wrongs, correct].sort(()=>Math.random()-0.5);
  } else {
    correct = card.meaning;
    const wrongs = [...card.choices].sort(()=>Math.random()-0.5).slice(0,3);
    choices = [...wrongs, correct].sort(()=>Math.random()-0.5);
  }
  quizAnswer = correct;

  let html=`<h2>「${card.word}」の意味は？</h2><div class="quiz-options">`;
  choices.forEach(opt=>{
    html+=`<button class="quiz-btn" onclick="answerQuiz('${opt.replace(/'/g,"\\'")}',this)">${opt}</button>`;
  });
  html+="</div>";
  document.getElementById("bossQuizArea").innerHTML=html;
}

function answerQuiz(choice, btn){
  if(quizLocked) return;
  quizLocked = true;
  const state = ms();
  let atk = 0;
  state.deck.forEach(c=>atk+=c.atk+(c.upgrade||0)*Math.floor(c.atk*0.05));
  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);

  if(choice===quizAnswer){
    btn.classList.add("correct");
    atk = Math.floor(atk/2);
    state.missionCount++;
    if(state.missionCount===3){ diamonds+=3; saveGame(); }
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".quiz-btn").forEach(b=>{ if(b.textContent===quizAnswer) b.classList.add("correct"); });
  }

  state.bossHP -= atk;
  playerHP -= (choice===quizAnswer ? Math.floor(state.bossATK/2) : state.bossATK);
  shakeBoss();
  showDmgPopup(atk, false);
  showDmgPopup(choice===quizAnswer?Math.floor(state.bossATK/2):state.bossATK, true);
  updateHPBars();

  setTimeout(()=>{
    checkBattle();
    if(inBattle) setTimeout(generateQuiz,300);
  },900);
}

function checkBattle(){
  const state = ms();
  if(state.bossHP<=0){
    state.bossLevel++;
    state.bossMaxHP = (currentMode==="english"?150:100) + state.bossLevel*50;
    state.bossHP = state.bossMaxHP;
    state.bossATK = (currentMode==="english"?50:35) + state.bossLevel*15;
    document.getElementById("bossLevel").textContent = state.bossLevel;
    document.getElementById("bossATKDisplay").textContent = state.bossATK;
    updateBossVisual();
    updateHPBars();
    saveGame();
    showBattleOverlay("victory");
    startBattle();
    return;
  }
  if(playerHP<=0){
    showBattleOverlay("defeat");
    startBattle();
    return;
  }
}

function startBattle(){
  const state = ms();
  let hp=0;
  state.deck.forEach(c=>hp+=c.hp);
  playerHP = hp;
  playerMaxHP = hp;
  updateHPBars();
}

// =============================================
//  DECK
// =============================================
function currentDeck(){ return ms().deck; }

function addDeck(ownedIndex){
  const d = currentDeck();
  if(d.length>=5){alert("デッキは5枚まで！");return;}
  const card = owned[ownedIndex];
  if(card.type !== currentMode){alert(`このカードは${currentMode==="english"?"英語":"古文"}モード専用です`);return;}
  if(d.some(c=>c.word===card.word)){alert("同じカードは入れられません！");return;}
  d.push(card);
  saveGame(); update();
}

function addDeckFromBook(word){
  const d = currentDeck();
  if(d.length>=5){alert("デッキは5枚まで！");return;}
  const card = owned.find(c=>c.word===word && c.type===currentMode);
  if(!card) return;
  if(d.some(c=>c.word===word)){alert("同じカードは入れられません！");return;}
  d.push(card);
  saveGame(); update();
}

function removeDeck(index){
  currentDeck().splice(index,1);
  saveGame(); update();
}

function calcDeckStats(){
  const d = currentDeck();
  let totalATK=0, totalHP=0;
  d.forEach(c=>{totalATK+=c.atk; totalHP+=c.hp;});
  document.getElementById("deckATK").textContent = totalATK;
  document.getElementById("deckHP").textContent = totalHP;
  document.getElementById("battleATK").textContent = totalATK;
  document.getElementById("battleHP").textContent = totalHP;
}

// =============================================
//  UPDATE (render)
// =============================================
function update(){
  // Deck cards
  const deckArea = document.getElementById("deckCards");
  deckArea.innerHTML = "";
  currentDeck().forEach((c,i)=>{
    deckArea.innerHTML+=`<div class="card ${c.rarity.toLowerCase()}">
      <div class="word">${c.word}</div>
      <div class="meaning">${c.meaning}</div>
      <div class="stat">ATK ${c.atk}</div>
      <div class="stat">HP ${c.hp}</div>
      <button onclick="removeDeck(${i})">外す</button>
    </div>`;
  });

  // Collection (book) - only current mode cards
  const col = document.getElementById("collection");
  col.innerHTML = "";
  const grouped = {};
  let list = owned.filter(c=>c.type===currentMode);
  if(sortType==="atk") list.sort((a,b)=>b.atk-a.atk);
  if(sortType==="hp")  list.sort((a,b)=>b.hp-a.hp);
  if(sortType==="rarity"){ const order={SSR:4,SR:3,R:2,N:1}; list.sort((a,b)=>order[b.rarity]-order[a.rarity]); }
  list.forEach(c=>{ if(!grouped[c.word]) grouped[c.word]={...c,count:0}; grouped[c.word].count++; });
  for(const key in grouped){
    const c = grouped[key];
    if(rarityFilter!=="all" && c.rarity!==rarityFilter) continue;
    const isKobun = c.type==="kobun";
    col.innerHTML+=`<div class="card ${c.rarity.toLowerCase()}${isKobun?" kobun-clickable":""}" ${isKobun?`onclick="showKobunDetail('${c.word}')"`:""}>
      ${isKobun?'<div class="kobun-hint">📖 詳細</div>':''}
      <div class="word">${c.word}</div>
      <div class="meaning">${c.meaning}</div>
      <div class="stat">ATK ${c.atk}</div>
      <div class="stat">HP ${c.hp}</div>
      <div class="stat">×${c.count}</div>
      <div class="stat">強化 ${c.upgrade||0}/10</div>
      <button onclick="event.stopPropagation();addDeckFromBook('${c.word}')">デッキへ</button>
      <button onclick="event.stopPropagation();upgradeCard('${c.word}')">強化</button>
    </div>`;
  }

  // Collection rate
  const pool = cardPool();
  const unique = new Set(owned.filter(c=>c.type===currentMode).map(c=>c.word));
  document.getElementById("collectionRate").textContent = pool.length ? Math.floor(unique.size/pool.length*100) : 0;

  // Convert - only current mode
  const conv = document.getElementById("convertCards");
  if(conv){
    conv.innerHTML = "";
    const grouped2 = {};
    owned.filter(c=>c.type===currentMode).forEach(c=>{
      if(!grouped2[c.word]) grouped2[c.word]={...c,count:0};
      grouped2[c.word].count++;
    });
    for(const key in grouped2){
      const c = grouped2[key];
      if(c.count>1){
        conv.innerHTML+=`<div class="card ${c.rarity.toLowerCase()}">
          <div class="word">${c.word}</div>
          <div class="stat">枚数 ${c.count}</div>
          <button onclick="convertCard('${c.word}')">変換</button>
        </div>`;
      }
    }
  }

  calcDeckStats();
  document.getElementById("diamonds").textContent = diamonds;
  document.getElementById("coins").textContent = coins;
  document.getElementById("materials").textContent = materials;
  const cc = document.getElementById("convertCoins");
  const cm = document.getElementById("convertMaterials");
  if(cc) cc.textContent = coins;
  if(cm) cm.textContent = materials;
}

// =============================================
//  SHOW SCREEN
// =============================================
function show(id){
  if(versusMode && id!=="versus"){alert("対戦中です！");return;}
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));

  if(id==="battle"){
    const d = currentDeck();
    if(d.length===0){alert("デッキを編成してください！");show("deck");return;}
    if(d.length<5){alert("デッキは5枚編成してください！");show("deck");return;}
    inBattle = true;
    const state = ms();
    document.getElementById("bossLevel").textContent      = state.bossLevel;
    document.getElementById("bossATKDisplay").textContent = state.bossATK;
    updateBossVisual();
    startBattle();
    generateQuiz();
  }

  document.getElementById(id).classList.add("active");
  update();

  document.querySelectorAll(".bottomMenu button").forEach(b=>b.classList.remove("active"));
  const map={battle:"btnBattle",pack:"btnPack",deck:"btnDeck",book:"btnBook",convert:"btnConvert"};
  if(map[id]) document.getElementById(map[id]).classList.add("active");
}

// =============================================
//  SAVE / LOAD
// =============================================
function saveGame(){
  const data={
    owned, coins, materials, diamonds,
    lastLoginDate, missionDate,
    modeState
  };
  localStorage.setItem("wordCardGame_v2", JSON.stringify(data));
}

function loadGame(){
  const raw = localStorage.getItem("wordCardGame_v2");
  if(raw){
    const save = JSON.parse(raw);
    owned = save.owned || [];
    owned.forEach(c=>{ if(!c.type) c.type="english"; });
    coins = save.coins||0;
    materials = save.materials||0;
    diamonds = save.diamonds||0;
    lastLoginDate = save.lastLoginDate||"";
    missionDate = save.missionDate||"";
    if(save.modeState){
      ["english","kobun"].forEach(m=>{
        if(save.modeState[m]){
          const s = save.modeState[m];
          modeState[m].deck = (s.deck||[]);
          modeState[m].bossHP = s.bossHP || modeState[m].bossHP;
          modeState[m].bossMaxHP = s.bossMaxHP || modeState[m].bossMaxHP;
          modeState[m].bossLevel = s.bossLevel||1;
          modeState[m].bossATK = s.bossATK || modeState[m].bossATK;
          modeState[m].missionCount = s.missionCount||0;
        }
      });
    }
  }
}


// =============================================
//  PACK / GACHA
// =============================================
function openPack(){
  if(packOpening) return;
  packOpening = true;
  document.querySelectorAll("button").forEach(b=>b.disabled=true);
  document.getElementById("packResult").innerHTML="";
  document.getElementById("packArea").innerHTML=`
    <div class="packWrapper" id="packBox" onclick="openAnimation()">
      <div class="packTop"></div>
      <div class="packBottom"></div>
      <div class="packLogo">WORD<br>PACK</div>
    </div>`;
}

function openAnimation(){
  if(!packOpening) return;
  document.getElementById("packBox").classList.add("open");
  setTimeout(revealCards,700);
}

function revealCards(){
  let html="";
  for(let i=0;i<5;i++){
    const card = allCards[Math.floor(Math.random()*allCards.length)];
    owned.push({...card,type:"english"});
    html+=`<div class="card ${card.rarity.toLowerCase()}">
      <div class="word">${card.word}</div>
      <div class="meaning">${card.meaning}</div>
      <div class="stat">ATK ${card.atk}</div>
      <div class="stat">HP ${card.hp}</div>
      <div class="stat">${card.rarity}</div>
      <button onclick="addDeck(${owned.length-1})">デッキへ</button>
    </div>`;
  }
  document.getElementById("packArea").innerHTML="";
  document.getElementById("packResult").innerHTML=html;
  saveGame(); update();
  packOpening=false;
  document.querySelectorAll("button").forEach(b=>b.disabled=false);
}

// 古文 1回ガチャ
function openKobunGacha1(){
  if(diamonds<5){alert("💎が足りません（必要: 5）");return;}
  diamonds-=5;
  const card = kobunCards[Math.floor(Math.random()*kobunCards.length)];
  owned.push({...card,type:"kobun"});
  document.getElementById("packResult").innerHTML=`
    <div class="card ${card.rarity.toLowerCase()} kobun-clickable" onclick="showKobunDetail('${card.word}')">
      <div class="kobun-hint">📖 詳細</div>
      <div class="word">${card.word}</div>
      <div class="meaning">${card.meaning}</div>
      <div class="stat">ATK ${card.atk}</div>
      <div class="stat">HP ${card.hp}</div>
      <div class="stat">${card.rarity}</div>
    </div>`;
  saveGame(); update();
}

// 古文 10連ガチャ
function openKobunGacha10(){
  if(diamonds<50){alert("💎が足りません（必要: 50）");return;}
  diamonds-=50;
  const results=[];
  for(let i=0;i<10;i++){
    const card={...kobunCards[Math.floor(Math.random()*kobunCards.length)],type:"kobun"};
    owned.push(card); results.push(card);
  }
  saveGame(); update();

  const overlay=document.getElementById("gacha10Overlay");
  const stage=document.getElementById("gacha10Stage");
  const closeBtn=document.getElementById("gacha10CloseBtn");
  stage.innerHTML=`<div id="gacha10Title">📜 古文 10連ガチャ！</div>`;
  closeBtn.style.display="none";
  overlay.style.display="flex";

  results.forEach((card,i)=>{
    const wrap=document.createElement("div");
    wrap.className="gacha10-card-wrap";
    wrap.innerHTML=`<div class="gacha10-card ${card.rarity.toLowerCase()}" onclick="showKobunDetail('${card.word}')" style="cursor:pointer">
      <div class="g-word">${card.word}</div>
      <div class="g-meaning">${card.meaning}</div>
      <div class="stat" style="font-size:10px">ATK ${card.atk} / HP ${card.hp}</div>
      <div class="g-rarity">${card.rarity}</div>
      <div style="font-size:9px;color:#888;margin-top:3px">📖 詳細</div>
    </div>`;
    stage.appendChild(wrap);
    setTimeout(()=>{
      if(card.rarity==="SSR"){
        const flash=document.createElement("div");
        flash.className="ssr-flash";
        document.body.appendChild(flash);
        setTimeout(()=>flash.remove(),500);
        wrap.classList.add("ssr-reveal");
        spawnGachaParticles(wrap);
      } else {
        wrap.classList.add("flip");
      }
    }, 200+i*280);
  });
  setTimeout(()=>{ closeBtn.style.display="block"; }, 200+10*280+600);
}

function spawnGachaParticles(wrap){
  const emojis=["⭐","✨","💫","🌟","💎","🎊"];
  const rect=wrap.getBoundingClientRect();
  const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
  for(let i=0;i<10;i++){
    const p=document.createElement("div");
    p.className="g-particle";
    p.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    const angle=Math.random()*360, dist=80+Math.random()*120;
    p.style.left=cx+"px"; p.style.top=cy+"px";
    p.style.setProperty("--dx",Math.cos(angle*Math.PI/180)*dist+"px");
    p.style.setProperty("--dy",Math.sin(angle*Math.PI/180)*dist+"px");
    p.style.animationDelay=(Math.random()*0.3)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1500);
  }
}

function closeGacha10(){
  document.getElementById("gacha10Overlay").style.display="none";
  document.getElementById("gacha10Stage").innerHTML="";
  update();
}

// =============================================
//  UPGRADE / CONVERT
// =============================================
function getUpgradeCost(r){ return {N:3,R:3,SR:10,SSR:50}[r]||3; }

function upgradeCard(word){
  const idx = owned.findIndex(c=>c.word===word && c.type===currentMode);
  if(idx===-1) return;
  const card = owned[idx];
  if(!card.upgrade) card.upgrade=0;
  if(card.upgrade>=10){alert("最大強化です");return;}
  if(materials<getUpgradeCost(card.rarity)){alert("素材が足りません");return;}
  materials -= getUpgradeCost(card.rarity);
  card.atk += Math.floor(card.atk*0.05);
  card.hp  += Math.floor(card.hp*0.10);
  card.upgrade++;
  owned[idx]=card;
  saveGame(); update();
}

let convertMode = "coin";
function setConvertMode(mode){ convertMode=mode; alert("変換モード: "+(mode==="coin"?"コイン":"素材")); }

function convertCard(word){
  let cards = owned.filter(c=>c.word===word && c.type===currentMode);
  if(cards.length<=1){alert("変換できるカードがありません");return;}
  let cnt = cards.length-1;
  owned = owned.filter(c=>{
    if(c.word===word && c.type===currentMode && cnt>0){
      cnt--;
      const gain={N:[10,1],R:[10,2],SR:[50,5],SSR:[300,30]}[c.rarity]||[10,1];
      if(convertMode==="coin") coins+=gain[0]; else materials+=gain[1];
      return false;
    }
    return true;
  });
  saveGame(); update();
}

// =============================================
//  VERSUS
// =============================================
function createVersusCode(){
  const d = currentDeck();
  if(d.length<5){alert("デッキを5枚編成してください");return;}
  const code=prompt("4文字以上の対戦コードを作ってください");
  if(!code||code.length<4){alert("4文字以上にしてください");return;}
  versusCode=code;
  const sendData=code+"|"+currentMode+"|"+d.map(c=>c.word).join(",");
  prompt("この対戦コードを友達に送ってください",sendData);
}

function loadEnemyCode(){
  const data=prompt("相手の対戦コードを入力");
  if(!data) return;
  const parts=data.split("|");
  if(parts.length<3){alert("コードが正しくありません");return;}
  const enemyMode=parts[1];
  if(enemyMode!==currentMode){alert(`モードが違います！相手は${enemyMode==="english"?"英語":"古文"}モードです`);return;}
  const words=parts[2].split(",");
  const pool = currentMode==="english" ? allCards : kobunCards;
  enemyDeck=[];
  words.forEach(w=>{ const c=pool.find(x=>x.word===w); if(c) enemyDeck.push(c); });
  let html="<h3>相手デッキ</h3>";
  enemyDeck.forEach(c=>{
    html+=`<div class="card ${c.rarity.toLowerCase()}"><div class="word">${c.word}</div><div class="stat">ATK ${c.atk}</div><div class="stat">HP ${c.hp}</div></div>`;
  });
  document.getElementById("enemyDeck").innerHTML=html;
}

function startVersus(){
  versusMode=true;
  if(enemyDeck.length===0){alert("相手デッキを読み込んでください");return;}
  playerFirst=Math.random()<0.5;
  playerTurn=playerFirst;
  alert(playerFirst?"あなたが先攻！":"相手が先攻！");
  const d=currentDeck();
  let myHP=0, myATK=0;
  d.forEach(c=>{myHP+=c.hp; myATK+=c.atk;});
  playerHP=myHP;
  enemyHP=0; enemyATK=0;
  enemyDeck.forEach(c=>{enemyHP+=c.hp; enemyATK+=c.atk;});
  document.getElementById("versusResult").innerHTML=`
    <div>あなたHP <span id="vPlayerHP">${playerHP}</span></div>
    <div>あなたATK <span id="vPlayerATK">${myATK}</span></div>
    <div>相手HP <span id="vEnemyHP">${enemyHP}</span></div>
    <div>相手ATK <span id="vEnemyATK">${enemyATK}</span></div>
    <div id="turnText"></div>`;
  document.getElementById("turnText").textContent=playerTurn?"あなたのターン":"相手のターン";
  generateVersusQuiz();
}

function generateVersusQuiz(){
  const pool = cardPool();
  const card = pool[Math.floor(Math.random()*pool.length)];

  let correct, choices;
  if(card.quizzes && card.quizzes.length > 0){
    const q = card.quizzes[Math.floor(Math.random()*card.quizzes.length)];
    correct = q.correct;
    const wrongs = q.choices.filter(c=>c!==correct).sort(()=>Math.random()-0.5).slice(0,3);
    choices = [...wrongs, correct].sort(()=>Math.random()-0.5);
  } else {
    correct = card.meaning;
    const wrongs = [...card.choices].sort(()=>Math.random()-0.5).slice(0,3);
    choices = [...wrongs, correct].sort(()=>Math.random()-0.5);
  }
  quizAnswer = correct;

  let html=`<h2>${card.word} の意味は？</h2><div class="quiz-options">`;
  choices.forEach(opt=>{
    html+=`<button class="quiz-btn" onclick="answerVersusQuiz('${opt.replace(/'/g,"\\'")}',this)">${opt}</button>`;
  });
  html+="</div>";
  document.getElementById("versusQuizArea").innerHTML=html;
}

function answerVersusQuiz(choice,btn){
  if(!versusMode) return;
  let myATK=0; currentDeck().forEach(c=>myATK+=c.atk);
  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);
  if(playerTurn){
    if(choice===quizAnswer){btn.classList.add("correct");playerHP-=Math.floor(enemyATK/2);}
    else{btn.classList.add("wrong");playerHP-=enemyATK;}
  } else {
    if(choice===quizAnswer){btn.classList.add("correct");enemyHP-=Math.floor(myATK/2);}
    else{btn.classList.add("wrong");enemyHP-=myATK;}
  }
  document.getElementById("vEnemyHP").textContent=enemyHP;
  document.getElementById("vPlayerHP").textContent=playerHP;
  if(enemyHP<=0){alert("対戦勝利！");versusMode=false;document.getElementById("versusQuizArea").innerHTML="";return;}
  if(playerHP<=0){alert("対戦敗北...");versusMode=false;document.getElementById("versusQuizArea").innerHTML="";return;}
  playerTurn=!playerTurn;
  document.getElementById("turnText").textContent=playerTurn?"あなたのターン":"相手のターン";
  setTimeout(generateVersusQuiz,800);
}

function stopVersus(){
  versusMode=false; enemyDeck=[];
  document.getElementById("versusQuizArea").innerHTML="";
  alert("対戦を終了しました");
  show("deck");
}

// =============================================
//  SORT / FILTER
// =============================================
function sortCollection(type){sortType=type;update();}
function filterRarity(r){rarityFilter=r;update();}

// =============================================
//  LOGIN BONUS
// =============================================
function checkLoginBonus(){
  const today=new Date().toDateString();
  if(lastLoginDate!==today){
    diamonds+=3;
    alert("ログインボーナス！💎3");
    lastLoginDate=today;
    saveGame();
  }
}
function checkMission(){
  const today=new Date().toDateString();
  if(missionDate!==today){ missionDate=today; modeState.english.missionCount=0; modeState.kobun.missionCount=0; }
}

// =============================================
//  DEBUG
// =============================================
function addDiamondsDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  diamonds+=1000; update(); saveGame(); alert("💎1000追加");
}

function getAllCardsDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  allCards.forEach(c=>{
    if(!owned.some(o=>o.word===c.word && o.type==="english"))
      owned.push({...c, type:"english"});
  });
  kobunCards.forEach(c=>{
    if(!owned.some(o=>o.word===c.word && o.type==="kobun"))
      owned.push({...c, type:"kobun"});
  });
  saveGame(); update();
  alert("✅ 全カード取得！英語 "+allCards.length+"枚 + 古文 "+kobunCards.length+"枚");
}

// =============================================
//  INIT
// =============================================
loadGame();
// Apply initial mode tab visuals (english by default)
document.getElementById("modeTab-english").className = "modeTab active-english";
document.getElementById("modeTab-kobun").className   = "modeTab";
update();
checkLoginBonus();
checkMission();
