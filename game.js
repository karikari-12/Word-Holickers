// =============================================
//  CARD DATA
// =============================================
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
{
  word:"うつくし",
  meaning:"かわいらしい / 立派だ",
  rarity:"R", atk:29, hp:143,
  reading:"うつくし", hinshi:"形容詞（シク活用）",
  detail:"小さいもの・幼いものをいつくしむ気持ちが核心。現代語の「美しい」とは異なり、可憐でいとおしいものへの感情を表す。",
  example:"頭は尼そぎなるちごの、うつくしげなること。",
  exampleMeaning:"髪を肩のあたりで切りそろえた幼子の、かわいらしいこと。",
  source:"枕草子",
  quizzes:[
    {correct:"かわいらしい", choices:["かわいらしい","醜い","おぞましい","疎ましい","憎らしい","目障りだ"]},
    {correct:"立派だ",       choices:["立派だ","みすぼらしい","粗末だ","惨めだ","情けない","恥ずかしい"]},
  ]
},
{
  word:"めでたし",
  meaning:"すばらしい / 喜ばしい",
  rarity:"SR", atk:42, hp:176,
  reading:"めでたし", hinshi:"形容詞（ク活用）",
  detail:"最大級の称賛を表す語。５段階評価なら５に相当する。心から称賛・感嘆する気持ちが核心。現代語の「目出度い（おめでたい）」の語源。",
  example:"めでたき御姿かな。",
  exampleMeaning:"すばらしいお姿よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"すばらしい", choices:["すばらしい","みっともない","つまらない","惨めだ","恥ずかしい","情けない"]},
    {correct:"喜ばしい",   choices:["喜ばしい","悲しい","嘆かわしい","腹立たしい","憂鬱だ","残念だ"]},
  ]
},
{
  word:"なまめかし",
  meaning:"優雅だ / みずみずしい / 若々しい",
  rarity:"R", atk:33, hp:158,
  reading:"なまめかし", hinshi:"形容詞（シク活用）",
  detail:"「なま（若々しく美しい）」が原義で、そこから優雅・上品な美しさの意味へと発展した。生き生きとした若さと品のある美しさが核心。",
  example:"なまめかしく、をかしげなる人の。",
  exampleMeaning:"優雅で、趣のある人が。",
  source:"源氏物語",
  quizzes:[
    {correct:"優雅だ",       choices:["優雅だ","野暮ったい","無骨だ","粗野だ","だらしない","品がない"]},
    {correct:"みずみずしい", choices:["みずみずしい","枯れている","色あせた","くたびれた","古びた","生気がない"]},
    {correct:"若々しい",     choices:["若々しい","老いぼれた","衰えた","くたびれた","老け込んだ","年老いた"]},
  ]
},
{
  word:"ありがたし",
  meaning:"めったにない / めったにないほど立派だ / 生きるのが難しい / （実現が）難しい",
  rarity:"SR", atk:45, hp:184,
  reading:"ありがたし", hinshi:"形容詞（ク活用）",
  detail:"「あること」が「難しい」から「めったにない」の意味に。現代語の「ありがとう」の語源でもある。存在することが稀なほど価値が高いというのが核心。",
  example:"ありがたきもの、舅にほめらるる婿。",
  exampleMeaning:"めったにないもの、舅に褒められる婿。",
  source:"枕草子",
  quizzes:[
    {correct:"めったにない",           choices:["めったにない","ありふれている","よく見かける","どこにでもある","平凡だ","当たり前だ"]},
    {correct:"めったにないほど立派だ", choices:["めったにないほど立派だ","取るに足らない","ごく普通だ","凡庸だ","どこにでもいる","平凡な存在だ"]},
    {correct:"生きるのが難しい",       choices:["生きるのが難しい","生きるのが楽しい","暮らしが豊かだ","毎日が充実している","生活に不満がない","幸せに生きている"]},
    {correct:"（実現が）難しい",       choices:["（実現が）難しい","簡単にできる","すぐに叶う","造作もない","たやすい","朝飯前だ"]},
  ]
},
{
  word:"はづかし",
  meaning:"立派だ / 気後れする",
  rarity:"R", atk:30, hp:147,
  reading:"はづかし", hinshi:"形容詞（シク活用）",
  detail:"相手を称える「立派だ」の意味が重要。相手があまりに立派なので自分が恥ずかしくなる、気後れするという心理が核心。",
  example:"はづかしげなる御ありさまにて。",
  exampleMeaning:"気後れするほど立派なご様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"立派だ",     choices:["立派だ","みっともない","恥さらしだ","情けない","粗末だ","みすぼらしい"]},
    {correct:"気後れする", choices:["気後れする","堂々としている","臆さない","自信満々だ","物おじしない","平然としている"]},
  ]
},
{
  word:"やさし",
  meaning:"恥ずかしい / 優美だ",
  rarity:"R", atk:27, hp:139,
  reading:"やさし", hinshi:"形容詞（シク活用）",
  detail:"「痩す（やす）」ほど恥ずかしがる様子が原義。身が細るほど恥ずかしい思いをする状態から、その立ち居振る舞いの優美さへと意味が発展した。",
  example:"やさしく、らうたげなる人の。",
  exampleMeaning:"優美で、かわいらしい人が。",
  source:"源氏物語",
  quizzes:[
    {correct:"恥ずかしい", choices:["恥ずかしい","誇らしい","堂々としている","得意げだ","自慢したい","胸を張りたい"]},
    {correct:"優美だ",     choices:["優美だ","野暮ったい","無骨だ","粗野だ","がさつだ","洗練されていない"]},
  ]
},
{
  word:"めづらし",
  meaning:"すばらしい / めったにない / 目新しい",
  rarity:"R", atk:32, hp:153,
  reading:"めづらし", hinshi:"形容詞（シク活用）",
  detail:"現代語の「珍しい」とはニュアンスが違い、単に見慣れないというより感嘆・称賛の気持ちが強い。目を見張るほど優れているという評価が核心。",
  example:"めづらしき花の姿かな。",
  exampleMeaning:"すばらしい花の様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"すばらしい",   choices:["すばらしい","つまらない","取るに足らない","凡庸だ","平凡だ","どこにでもある"]},
    {correct:"めったにない", choices:["めったにない","ありふれている","よく見かける","珍しくもない","当たり前だ","どこにでもある"]},
    {correct:"目新しい",     choices:["目新しい","見慣れている","古くさい","見飽きた","ありきたりだ","変わり映えしない"]},
  ]
},
{
  word:"なつかし",
  meaning:"親しみが持てる / 慕わしい",
  rarity:"R", atk:28, hp:142,
  reading:"なつかし", hinshi:"形容詞（シク活用）",
  detail:"古典では昔を懐かしむ意味合いは薄い。心が引き寄せられる・そばにいたいという感情が核心で、現代語とは異なる用法に注意。",
  example:"なつかしき御ありさまに、涙おとされぬ。",
  exampleMeaning:"慕わしいお姿に、涙をこぼされた。",
  source:"源氏物語",
  quizzes:[
    {correct:"親しみが持てる", choices:["親しみが持てる","よそよそしい","近寄りがたい","冷たい","打ち解けられない","他人行儀だ"]},
    {correct:"慕わしい",       choices:["慕わしい","憎らしい","疎ましい","遠ざけたい","嫌悪する","うとましい"]},
  ]
},
{
  word:"おとなし",
  meaning:"大人びている / 主だっている / 思慮分別がある / 年配である",
  rarity:"R", atk:36, hp:165,
  reading:"おとなし", hinshi:"形容詞（シク活用）",
  detail:"「大人らし＝おとなし」と覚える。現代語の「おとなしい（静か）」とは全く異なる。成熟した大人の落ち着きや分別が核心。",
  example:"おとなしく、かどかどしき人。",
  exampleMeaning:"思慮分別があり、才気ある人。",
  source:"源氏物語",
  quizzes:[
    {correct:"大人びている",   choices:["大人びている","子供っぽい","幼稚だ","未熟だ","あどけない","無邪気だ"]},
    {correct:"主だっている",   choices:["主だっている","取るに足らない","端役だ","目立たない","脇役だ","影が薄い"]},
    {correct:"思慮分別がある", choices:["思慮分別がある","無鉄砲だ","向こう見ずだ","軽率だ","考えが浅い","分別がない"]},
    {correct:"年配である",     choices:["年配である","若々しい","幼い","あどけない","青二才だ","年若い"]},
  ]
},
{
  word:"さうざうし",
  meaning:"物足りない",
  rarity:"N", atk:20, hp:115,
  reading:"さうざうし", hinshi:"形容詞（シク活用）",
  detail:"現代語の「騒々しい」とは全くの別語。何かが欠けていて心が満たされない、物足りなくもの寂しい感覚が核心。",
  example:"さうざうしくて、おはしますめり。",
  exampleMeaning:"物足りなそうに、いらっしゃるようだ。",
  source:"源氏物語",
  quizzes:[
    {correct:"物足りない", choices:["物足りない","騒がしい","うるさい","やかましい","喧騒だ","賑やかだ"]},
  ]
},
{
  word:"あぢきなし",
  meaning:"おもしろくない / どうにもならない / つまらない / 無益だ",
  rarity:"SR", atk:40, hp:172,
  reading:"あぢきなし", hinshi:"形容詞（ク活用）",
  detail:"現代語の「味気ない」とはニュアンスが違う。どうしようもない閉塞感や、やるせなさが核心。思い通りにならない状況への嘆きを表す。",
  example:"あぢきなく、世を思ひつづけらるれば。",
  exampleMeaning:"どうにもならなく、世の中のことを思い続けてしまうので。",
  source:"源氏物語",
  quizzes:[
    {correct:"おもしろくない",   choices:["おもしろくない","興味深い","夢中になれる","楽しくてたまらない","心惹かれる","面白い"]},
    {correct:"どうにもならない", choices:["どうにもならない","なんとかなる","打開できる","解決できる","うまくいく","可能性がある"]},
    {correct:"つまらない",       choices:["つまらない","胸躍る","わくわくする","刺激的だ","やりがいがある","充実している"]},
    {correct:"無益だ",           choices:["無益だ","有益だ","価値がある","意義深い","役に立つ","実りが多い"]},
  ]
},
{
  word:"すさまじ",
  meaning:"殺風景だ / 興ざめだ",
  rarity:"R", atk:31, hp:150,
  reading:"すさまじ", hinshi:"形容詞（シク活用）",
  detail:"現代語の「すさまじい（激しい）」の意味で訳さないこと。期待外れで興が冷める・場の雰囲気が白ける状態が核心。",
  example:"すさまじきものにして、人の来ぬ。",
  exampleMeaning:"興ざめなこととして、人が来ない。",
  source:"枕草子",
  quizzes:[
    {correct:"殺風景だ", choices:["殺風景だ","趣がある","風情がある","美しい","情緒豊かだ","絵になる"]},
    {correct:"興ざめだ", choices:["興ざめだ","興奮する","感動的だ","心が弾む","盛り上がる","熱狂する"]},
  ]
},
{
  word:"あやし",
  meaning:"不思議だ / （身分が）卑しい",
  rarity:"R", atk:29, hp:145,
  reading:"あやし", hinshi:"形容詞（シク活用）",
  detail:"「怪し」は不思議だ・理解できない、「賤し」は身分・品質が低いの意。同じ読みで漢字が異なる二つの意味を文脈で判断する必要がある重要語。",
  example:"あやしき翁、竹を取りつつ。",
  exampleMeaning:"粗末な老人が竹を取りながら。",
  source:"竹取物語",
  quizzes:[
    {correct:"不思議だ",       choices:["不思議だ","当然だ","納得できる","理にかなっている","もっともだ","当たり前だ"]},
    {correct:"（身分が）卑しい", choices:["（身分が）卑しい","高貴だ","気品がある","身分が高い","立派な家柄だ","由緒ある"]},
  ]
},
{
  word:"あさまし",
  meaning:"驚きあきれるほどだ / 嘆かわしい",
  rarity:"R", atk:34, hp:160,
  reading:"あさまし", hinshi:"形容詞（シク活用）",
  detail:"驚き呆れるほどの状態を表す。良い意味でも悪い意味でも使われ、「…」の内容は文脈から判断する。現代語の「あさましい」より使用範囲が広い。",
  example:"あさましく、心憂き目を見るかな。",
  exampleMeaning:"驚きあきれるほど、つらい目にあうことよ。",
  source:"源氏物語",
  quizzes:[
    {correct:"驚きあきれるほどだ", choices:["驚きあきれるほどだ","当然だ","予想通りだ","驚くほどでもない","ありきたりだ","想定の範囲内だ"]},
    {correct:"嘆かわしい",         choices:["嘆かわしい","喜ばしい","誇らしい","清々しい","晴れやかだ","胸が躍る"]},
  ]
},
{
  word:"つらし",
  meaning:"薄情だ / 恨めしい",
  rarity:"R", atk:32, hp:152,
  reading:"つらし", hinshi:"形容詞（ク活用）",
  detail:"自分がつらいのではなく、相手が薄情だという意味が核心。相手の冷たい仕打ちへの恨みや嘆きを表す語。",
  example:"つらき人の、なほ恋しきかな。",
  exampleMeaning:"薄情な人が、それでも恋しいことよ。",
  source:"古今和歌集",
  quizzes:[
    {correct:"薄情だ",   choices:["薄情だ","思いやりがある","情け深い","優しい","心温かい","親切だ"]},
    {correct:"恨めしい", choices:["恨めしい","ありがたい","感謝している","嬉しい","頼もしい","慕わしい"]},
  ]
},
{
  word:"こころぐるし",
  meaning:"つらい / 気の毒だ",
  rarity:"N", atk:22, hp:128,
  reading:"こころぐるし", hinshi:"形容詞（シク活用）",
  detail:"現代語の「心苦しい（申し訳ない）」ではない。胸が痛むほどつらい状態、または相手への同情・憐れみの気持ちが核心。",
  example:"こころぐるしげなる御けしきにて。",
  exampleMeaning:"つらそうなご様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"つらい",    choices:["つらい","心地よい","清々しい","晴れやかだ","気楽だ","のびのびする"]},
    {correct:"気の毒だ",  choices:["気の毒だ","羨ましい","誇らしい","頼もしい","ありがたい","嬉しい"]},
  ]
},
{
  word:"わびし",
  meaning:"つらい / つまらない / みすぼらしい",
  rarity:"R", atk:30, hp:146,
  reading:"わびし", hinshi:"形容詞（シク活用）",
  detail:"「わぶ」と同じく失望・困難・悩みのニュアンスが核心。心細くやるせない状態、みじめな様子を幅広く表す語。",
  example:"わびしく、心細き旅の空かな。",
  exampleMeaning:"つらく、心細い旅先の空よなあ。",
  source:"土佐日記",
  quizzes:[
    {correct:"つらい",       choices:["つらい","楽しい","心地よい","幸せだ","充実している","満ち足りている"]},
    {correct:"つまらない",   choices:["つまらない","胸躍る","わくわくする","刺激的だ","やりがいがある","面白い"]},
    {correct:"みすぼらしい", choices:["みすぼらしい","立派だ","堂々としている","華やかだ","見栄えがする","威厳がある"]},
  ]
},
{
  word:"あたらし",
  meaning:"惜しい / すばらしい",
  rarity:"R", atk:26, hp:138,
  reading:"あたらし", hinshi:"形容詞（シク活用）",
  detail:"「新しい」より「可惜し（あたらし）＝もったいない・惜しい」が大切。価値あるものが失われることへの惜しむ気持ちと、それほど価値があるというすばらしさが核心。",
  example:"あたらしき御心ばへかな。",
  exampleMeaning:"惜しいほどすばらしいお気持ちよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"惜しい",     choices:["惜しい","どうでもよい","未練がない","捨てても構わない","惜しくもない","執着しない"]},
    {correct:"すばらしい", choices:["すばらしい","つまらない","凡庸だ","取るに足らない","平凡だ","価値がない"]},
  ]
},
{
  word:"うしろめたし",
  meaning:"気がかりだ / 心配だ",
  rarity:"N", atk:21, hp:120,
  reading:"うしろめたし", hinshi:"形容詞（シク活用）",
  detail:"「後ろから見て気がかりだ」が原義。後に残していく人や物事が心配で気になる状態が核心。現代語の「後ろめたい（やましい）」とは異なる。",
  example:"うしろめたく、悲しき別れかな。",
  exampleMeaning:"気がかりで、悲しい別れよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"気がかりだ", choices:["気がかりだ","安心だ","心配いらない","気にならない","問題ない","平気だ"]},
    {correct:"心配だ",     choices:["心配だ","のんきだ","気楽だ","余裕がある","安堵している","落ち着いている"]},
  ]
},
{
  word:"むつかし",
  meaning:"不快だ / （気分が）優れない / 恐ろしい",
  rarity:"R", atk:31, hp:148,
  reading:"むつかし", hinshi:"形容詞（シク活用）",
  detail:"「むずかる（古語ではむつかる）＝不快に思う」から連想。不機嫌・不快感が核心。現代語の「難しい」とは全く異なるので注意。",
  example:"むつかしげなる御気色にて。",
  exampleMeaning:"不快そうなご様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"不快だ",          choices:["不快だ","心地よい","気持ちがいい","爽快だ","すがすがしい","快適だ"]},
    {correct:"（気分が）優れない", choices:["（気分が）優れない","体調が良い","元気いっぱいだ","すこぶる健康だ","快調だ","絶好調だ"]},
    {correct:"恐ろしい",         choices:["恐ろしい","頼もしい","安心できる","心強い","怖くない","穏やかだ"]},
  ]
},
{
  word:"あからさまなり",
  meaning:"ほんのしばらく / 全く",
  rarity:"R", atk:28, hp:144,
  reading:"あからさまなり", hinshi:"形容動詞（ナリ活用）",
  detail:"現代語の「あからさま（露骨）」とは全く異なる。「ほんのちょっとの間」または打消しを伴って「全く〜ない」の意味になる。文脈判断が重要。",
  example:"あからさまに出でたるほどに。",
  exampleMeaning:"ほんのしばらく外出したところ。",
  source:"枕草子",
  quizzes:[
    {correct:"ほんのしばらく", choices:["ほんのしばらく","永遠に","いつまでも","ずっと","長い間","果てしなく"]},
    {correct:"全く",           choices:["全く","少し","ほんの少し","わずかに","ちょっとだけ","かすかに"]},
  ]
},
{
  word:"おろかなり",
  meaning:"いい加減だ / 不十分だ",
  rarity:"N", atk:19, hp:110,
  reading:"おろかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「疎（おろ）か」と覚える。いい加減で不十分なさまが核心。現代語の「愚かだ（知性がない）」の意味では使われないので注意。",
  example:"おろかならず思ひきこゆ。",
  exampleMeaning:"いい加減でなく（＝心から）お慕い申し上げる。",
  source:"源氏物語",
  quizzes:[
    {correct:"いい加減だ", choices:["いい加減だ","誠実だ","真摯だ","丁寧だ","念入りだ","手を抜かない"]},
    {correct:"不十分だ",   choices:["不十分だ","十分すぎる","申し分ない","完璧だ","余りある","申し分ない"]},
  ]
},
{
  word:"いたづらなり",
  meaning:"むだだ / むなしい / つまらない",
  rarity:"N", atk:22, hp:124,
  reading:"いたづらなり", hinshi:"形容動詞（ナリ活用）",
  detail:"現代語の「悪戯（いたずら）」とは全くの別語。何の価値も意味もない空虚な状態が核心。時間や命が無為に過ぎる虚しさを表す。",
  example:"いたづらに日を暮らしつ。",
  exampleMeaning:"むなしく一日を過ごしてしまった。",
  source:"徒然草",
  quizzes:[
    {correct:"むだだ",     choices:["むだだ","意義深い","価値がある","有益だ","実りがある","役に立つ"]},
    {correct:"むなしい",   choices:["むなしい","充実している","満ち足りている","生きがいがある","やりがいがある","心が満たされる"]},
    {correct:"つまらない", choices:["つまらない","胸躍る","わくわくする","刺激的だ","面白い","興味深い"]},
  ]
},
{
  word:"て",
  meaning:"筆跡 / 手段 / 手傷",
  rarity:"N", atk:18, hp:108,
  reading:"て", hinshi:"名詞",
  detail:"「手」の働きによって生じるものが原義。筆を持つ手から「筆跡」、手を使う方法から「手段」、手に受ける傷から「手傷」へと意味が広がった。",
  example:"いとをかしげなる手にて書きたり。",
  exampleMeaning:"たいそう趣のある筆跡で書いてあった。",
  source:"源氏物語",
  quizzes:[
    {correct:"筆跡", choices:["筆跡","声色","身振り","表情","口ぶり","顔つき"]},
    {correct:"手段", choices:["手段","目的","結果","理由","動機","原因"]},
    {correct:"手傷", choices:["手傷","病気","疲労","疫病","老衰","心の傷"]},
  ]
},
{
  word:"うへ",
  meaning:"天皇 / 御殿 / 奥方 / 加えて",
  rarity:"R", atk:35, hp:163,
  reading:"うへ", hinshi:"名詞・副詞",
  detail:"「上」にいる人やその場所から意味が派生した。最も上にいる人＝天皇、上の人がいる場所＝御殿、家の中の上位の人＝奥方、そして「それに加えて」という副詞的用法も持つ。",
  example:"うへの御前にさぶらふ。",
  exampleMeaning:"天皇の御前にお仕えしている。",
  source:"枕草子",
  quizzes:[
    {correct:"天皇", choices:["天皇","将軍","公家","僧侶","武士","貴族"]},
    {correct:"御殿", choices:["御殿","庭園","市場","寺院","城下","港"]},
    {correct:"奥方", choices:["奥方","侍女","乳母","女官","尼僧","巫女"]},
    {correct:"加えて", choices:["加えて","しかし","そして","ところが","それゆえ","つまり"]},
  ]
},
{
  word:"ついで",
  meaning:"順序 / 機会",
  rarity:"N", atk:17, hp:105,
  reading:"ついで", hinshi:"名詞",
  detail:"「次（つぎ）て」が語源で順序が原義。物事の並び順から、ちょうどよい折・機会という意味へ発展した。",
  example:"ついでごとに申しはべりしを。",
  exampleMeaning:"機会あるごとに申し上げていましたが。",
  source:"源氏物語",
  quizzes:[
    {correct:"順序", choices:["順序","目的","結果","理由","原因","動機"]},
    {correct:"機会", choices:["機会","障害","邪魔","失敗","躓き","妨げ"]},
  ]
},
{
  word:"やう",
  meaning:"様子 / 理由 / 〜こと",
  rarity:"R", atk:26, hp:137,
  reading:"やう", hinshi:"名詞",
  detail:"漢字は「様」。「用」や「要」ではない。物事のありさま・理由・内容を広く表す多義語で、文脈によって意味が大きく変わる重要語。",
  example:"かかるやうやはある。",
  exampleMeaning:"このようなことがあるだろうか（＝あるはずがない）。",
  source:"竹取物語",
  quizzes:[
    {correct:"様子",   choices:["様子","声色","心情","気配","匂い","足音"]},
    {correct:"理由",   choices:["理由","結果","目的","手段","結末","成り行き"]},
    {correct:"〜こと", choices:["〜こと","〜もの","〜ところ","〜とき","〜ひと","〜ほど"]},
  ]
},
{
  word:"けしき",
  meaning:"有様（ありさま）/ 趣 / 機嫌 / 兆候",
  rarity:"R", atk:28, hp:148,
  reading:"けしき", hinshi:"名詞",
  detail:"漢字は「気色」であり「景色」ではない。人の表情・様子・気配・兆しまで幅広く表す多義語。自然の風景を指す現代語の「景色」とは全く異なる。",
  example:"あやしきけしきを見せたまふ。",
  exampleMeaning:"不思議な様子をお見せになる。",
  source:"源氏物語",
  quizzes:[
    {correct:"有様（ありさま）", choices:["有様（ありさま）","美しい景色","遠くの眺め","自然の風景","山河の眺め","絶景"]},
    {correct:"趣",               choices:["趣","騒ぎ","勢い","迫力","激しさ","大きさ"]},
    {correct:"機嫌",             choices:["機嫌","体調","才能","身分","年齢","容姿"]},
    {correct:"兆候",             choices:["兆候","結果","記録","証拠","原因","理由"]},
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
  if(versusPhase==="p1deck" || versusPhase==="p2deck"){ alert("デッキ選択中はモード変更できません！"); return; }
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
      inBattle = true;
      startBattle();
      const state = ms();
      document.getElementById("bossLevel").textContent      = state.bossLevel;
      document.getElementById("bossATKDisplay").textContent = state.bossATK;
      updateBossVisual();
      updateHPBars();
      document.getElementById("bossQuizArea").innerHTML = "";
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
function showBattleOverlay(type, msg){
  const overlay = document.getElementById("battleOverlay");
  overlay.className = "show "+type;
  if(type==="victory"){
    document.getElementById("overlayEmoji").textContent="🏆";
    document.getElementById("overlayTitle").textContent="VICTORY!";
    document.getElementById("overlayMsg").textContent = msg || "ボスを倒した！次のレベルへ…";
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

    // ダイヤ報酬
    const isMillestone = state.bossLevel % 10 === 0;
    const reward = isMillestone ? 10 : 3;
    diamonds += reward;
    saveGame();
    update();

    // 勝利メッセージにダイヤ表示
    const msg = isMillestone
      ? `Lv.${state.bossLevel} 達成！💎×${reward} ボーナス！`
      : `ボスを倒した！💎×${reward} 獲得！`;

    showBattleOverlay("victory", msg);
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
    if(d.length===0){
      inBattle = false;
      alert("デッキを編成してください！");
      show("deck");
      return;
    }
    if(d.length<5){
      inBattle = false;
      alert("デッキは5枚編成してください！");
      show("deck");
      return;
    }
    inBattle = true;
    const state = ms();
    document.getElementById("bossLevel").textContent      = state.bossLevel;
    document.getElementById("bossATKDisplay").textContent = state.bossATK;
    updateBossVisual();
    startBattle();
    // クイズエリアをリセットしてから生成
    document.getElementById("bossQuizArea").innerHTML = "";
    generateQuiz();
  }

  document.getElementById(id).classList.add("active");
  if(id==="versus") initVersusUI();
  update();

  document.querySelectorAll(".bottomMenu button").forEach(b=>b.classList.remove("active"));
  const map={battle:"btnBattle",pack:"btnPack",deck:"btnDeck",book:"btnBook",convert:"btnConvert",versus:"btnVersus"};
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
    <div class="packWrapper" id="packBox" onclick="openAnimation()" style="pointer-events:auto">
      <div class="packTop"></div>
      <div class="packBottom"></div>
      <div class="packLogo">WORD<br>PACK</div>
    </div>`;
}

function openAnimation(){
  if(!packOpening) return;
  // パック自体のクリックを即座に無効化して連打防止
  const packBox = document.getElementById("packBox");
  if(packBox) packBox.style.pointerEvents = "none";
  packBox.classList.add("open");
  setTimeout(revealCards, 700);
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
  packOpening = false;
  document.querySelectorAll("button").forEach(b=>b.disabled=false);
}

// 古文 1回ガチャ
function openKobunGacha1(){
  if(packOpening) return;
  if(diamonds<5){alert("💎が足りません（必要: 5）");return;}
  packOpening = true;
  document.querySelectorAll("button").forEach(b=>b.disabled=true);
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
  packOpening = false;
  document.querySelectorAll("button").forEach(b=>b.disabled=false);
}

// 古文 10連ガチャ
function openKobunGacha10(){
  if(packOpening) return;
  if(diamonds<50){alert("💎が足りません（必要: 50）");return;}
  packOpening = true;
  document.querySelectorAll("button").forEach(b=>b.disabled=true);
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
  closeBtn.disabled = false; // 閉じるボタンは常に有効
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

  // 全カード表示後に閉じるボタンを表示（disabledは解除済み）
  setTimeout(()=>{
    closeBtn.style.display="block";
    closeBtn.disabled = false;
  }, 200+10*280+600);
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
  packOpening = false;
  // すべてのボタンを確実に再有効化
  document.querySelectorAll("button").forEach(b=>b.disabled=false);
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

// 対戦状態
let p1Name="プレイヤー1", p2Name="プレイヤー2";
let p1HP=0, p1MaxHP=0, p1ATK=0;
let p2HP=0, p2MaxHP=0, p2ATK=0;
let p1Deck=[], p2Deck=[];
let versusPhase="setup"; // setup | p1deck | p2deck | battle | result
let versusCurrentPlayer=1; // 1 or 2

function initVersusUI(){
  versusPhase="setup";
  versusMode=false;
  p1Deck=[]; p2Deck=[];
  renderVersus();
}

function renderVersus(){
  const area = document.getElementById("versusArea");
  if(!area) return;

  if(versusPhase==="setup"){
    area.innerHTML=`
      <div class="vs-setup">
        <h3>👤 プレイヤー名を設定</h3>
        <div class="vs-name-row">
          <input id="p1NameInput" class="vs-input" placeholder="プレイヤー1の名前" value="${p1Name}" maxlength="10">
          <input id="p2NameInput" class="vs-input" placeholder="プレイヤー2の名前" value="${p2Name}" maxlength="10">
        </div>
        <button onclick="goP1Deck()" style="background:linear-gradient(135deg,#4D96FF,#6BCB77);margin-top:12px">
          ⚔️ 対戦開始
        </button>
      </div>`;

  } else if(versusPhase==="p1deck"){
    area.innerHTML=`
      <div class="vs-deckselect">
        <div class="vs-turn-banner p1-banner">
          👤 ${p1Name} のデッキを選んでください
        </div>
        <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:6px 0 12px">※相手には見えません</p>
        <div id="vsCardPicker"></div>
        <div class="vs-selected-deck">
          <div style="color:rgba(255,255,255,0.6);font-size:13px;margin-bottom:6px">選択中: <span id="vsSelectedCount">0</span>/5</div>
          <div id="vsSelectedCards"></div>
        </div>
        <button id="vsDeckConfirmBtn" onclick="confirmP1Deck()" style="background:linear-gradient(135deg,#6BCB77,#4D96FF);opacity:0.4;cursor:not-allowed" disabled>
          ✅ このデッキで確定
        </button>
      </div>`;
    renderCardPicker(1);

  } else if(versusPhase==="p2deck"){
    area.innerHTML=`
      <div class="vs-deckselect">
        <div class="vs-turn-banner p2-banner">
          👤 ${p2Name} のデッキを選んでください
        </div>
        <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:6px 0 12px">※相手には見えません</p>
        <div id="vsCardPicker"></div>
        <div class="vs-selected-deck">
          <div style="color:rgba(255,255,255,0.6);font-size:13px;margin-bottom:6px">選択中: <span id="vsSelectedCount">0</span>/5</div>
          <div id="vsSelectedCards"></div>
        </div>
        <button id="vsDeckConfirmBtn" onclick="confirmP2Deck()" style="background:linear-gradient(135deg,#C77DFF,#FF6B6B);opacity:0.4;cursor:not-allowed" disabled>
          ✅ このデッキで確定
        </button>
      </div>`;
    renderCardPicker(2);

  } else if(versusPhase==="battle"){
    renderVersusBattle();

  } else if(versusPhase==="result"){
    renderVersusResult();
  }
}

// カードピッカー（所持カードから選ぶ）
let vsPickedWords=[];
function renderCardPicker(player){
  vsPickedWords=[];
  const pool = owned.filter(c=>c.type===currentMode);
  const grouped={};
  pool.forEach(c=>{ if(!grouped[c.word]) grouped[c.word]={...c}; });

  let html="";
  for(const key in grouped){
    const c=grouped[key];
    html+=`<div class="vs-pick-card ${c.rarity.toLowerCase()}" id="vspick-${c.word}" onclick="toggleVsPick('${c.word}','${player}')">
      <div class="word">${c.word}</div>
      <div class="meaning" style="font-size:11px">${c.meaning}</div>
      <div style="font-size:11px">ATK ${c.atk}</div>
    </div>`;
  }
  if(!html) html=`<p style="color:rgba(255,255,255,0.4)">カードがありません。先にガチャを引いてください。</p>`;
  document.getElementById("vsCardPicker").innerHTML=html;
  updateVsSelectedDisplay();
}

function toggleVsPick(word, player){
  const idx=vsPickedWords.indexOf(word);
  const el=document.getElementById("vspick-"+word);
  if(idx>=0){
    vsPickedWords.splice(idx,1);
    el.classList.remove("vs-picked");
  } else {
    if(vsPickedWords.length>=5){ return; }
    vsPickedWords.push(word);
    el.classList.add("vs-picked");
  }
  updateVsSelectedDisplay();
}

function updateVsSelectedDisplay(){
  document.getElementById("vsSelectedCount").textContent=vsPickedWords.length;
  const btn=document.getElementById("vsDeckConfirmBtn");
  if(vsPickedWords.length===5){
    btn.disabled=false;
    btn.style.opacity="1";
    btn.style.cursor="pointer";
  } else {
    btn.disabled=true;
    btn.style.opacity="0.4";
    btn.style.cursor="not-allowed";
  }
  const pool = owned.filter(c=>c.type===currentMode);
  let html="";
  vsPickedWords.forEach(w=>{
    const c=pool.find(x=>x.word===w);
    if(c) html+=`<div class="vs-mini-card ${c.rarity.toLowerCase()}"><div>${c.word}</div><div style="font-size:10px">ATK ${c.atk}</div></div>`;
  });
  document.getElementById("vsSelectedCards").innerHTML=html;
}

function goP1Deck(){
  p1Name=document.getElementById("p1NameInput").value||"プレイヤー1";
  p2Name=document.getElementById("p2NameInput").value||"プレイヤー2";
  versusPhase="p1deck";
  renderVersus();
}

function confirmP1Deck(){
  if(vsPickedWords.length<5){alert("5枚選んでください");return;}
  const pool=owned.filter(c=>c.type===currentMode);
  p1Deck=vsPickedWords.map(w=>pool.find(c=>c.word===w)).filter(Boolean);
  p1HP=0; p1ATK=0;
  p1Deck.forEach(c=>{p1HP+=c.hp; p1ATK+=c.atk;});
  p1MaxHP=p1HP;
  // P2に渡す前に画面を隠す演出
  versusPhase="p2deck";
  renderVersus();
}

function confirmP2Deck(){
  if(vsPickedWords.length<5){alert("5枚選んでください");return;}
  const pool=owned.filter(c=>c.type===currentMode);
  p2Deck=vsPickedWords.map(w=>pool.find(c=>c.word===w)).filter(Boolean);
  p2HP=0; p2ATK=0;
  p2Deck.forEach(c=>{p2HP+=c.hp; p2ATK+=c.atk;});
  p2MaxHP=p2HP;
  // 先攻決定
  versusCurrentPlayer=Math.random()<0.5?1:2;
  versusMode=true;
  versusPhase="battle";
  renderVersus();
}

// バトル画面
function renderVersusBattle(){
  const area=document.getElementById("versusArea");
  const isP1=versusCurrentPlayer===1;
  const name=isP1?p1Name:p2Name;
  const bannerClass=isP1?"p1-banner":"p2-banner";

  area.innerHTML=`
    <div class="vs-battle">
      <div class="vs-turn-banner ${bannerClass}">
        ⚔️ ${name} のターン
      </div>

      <div class="vs-hp-area">
        <div class="vs-hp-block">
          <div class="vs-hp-name">${p1Name}</div>
          <div class="hp-bar-wrap"><div class="hp-bar player" id="vp1Bar" style="width:${p1HP/p1MaxHP*100}%"></div></div>
          <div class="vs-hp-num" id="vp1HP">${p1HP} / ${p1MaxHP}</div>
        </div>
        <div class="vs-vs-badge">VS</div>
        <div class="vs-hp-block">
          <div class="vs-hp-name">${p2Name}</div>
          <div class="hp-bar-wrap"><div class="hp-bar boss" id="vp2Bar" style="width:${p2HP/p2MaxHP*100}%"></div></div>
          <div class="vs-hp-num" id="vp2HP">${p2HP} / ${p2MaxHP}</div>
        </div>
      </div>

      <div id="versusQuizArea"></div>

      <button onclick="stopVersus()" style="background:rgba(255,107,107,0.3);box-shadow:none;font-size:12px;margin-top:8px">❌ 対戦をやめる</button>
    </div>`;

  generateVersusQuiz();
}

function updateVersusBattleHP(){
  const p1Bar=document.getElementById("vp1Bar");
  const p2Bar=document.getElementById("vp2Bar");
  if(p1Bar) p1Bar.style.width=Math.max(0,p1HP/p1MaxHP*100)+"%";
  if(p2Bar) p2Bar.style.width=Math.max(0,p2HP/p2MaxHP*100)+"%";
  const p1El=document.getElementById("vp1HP");
  const p2El=document.getElementById("vp2HP");
  if(p1El) p1El.textContent=Math.max(0,p1HP)+" / "+p1MaxHP;
  if(p2El) p2El.textContent=Math.max(0,p2HP)+" / "+p2MaxHP;
}

function renderVersusResult(){
  const area=document.getElementById("versusArea");
  const winner=p1HP<=0?p2Name:p1Name;
  area.innerHTML=`
    <div class="vs-result">
      <div style="font-size:60px;margin-bottom:10px">🏆</div>
      <div style="font-family:'Fredoka One',cursive;font-size:2rem;color:var(--pop2);margin-bottom:6px">${winner}</div>
      <div style="color:rgba(255,255,255,0.7);margin-bottom:20px">の勝利！</div>
      <button onclick="initVersusUI()" style="background:linear-gradient(135deg,#FFD93D,#FF6B6B)">🔄 もう一度</button>
    </div>`;
  versusMode=false;
}

function generateVersusQuiz(){
  const pool = cardPool();
  const card = pool[Math.floor(Math.random()*pool.length)];
  let correct, choices;
  if(card.quizzes && card.quizzes.length>0){
    const q=card.quizzes[Math.floor(Math.random()*card.quizzes.length)];
    correct=q.correct;
    const wrongs=q.choices.filter(c=>c!==correct).sort(()=>Math.random()-0.5).slice(0,3);
    choices=[...wrongs,correct].sort(()=>Math.random()-0.5);
  } else {
    correct=card.meaning;
    const wrongs=[...card.choices].sort(()=>Math.random()-0.5).slice(0,3);
    choices=[...wrongs,correct].sort(()=>Math.random()-0.5);
  }
  quizAnswer=correct;

  const isP1=versusCurrentPlayer===1;
  const name=isP1?p1Name:p2Name;
  let html=`<div style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:4px">${name}へ</div>`;
  html+=`<h2>「${card.word}」の意味は？</h2><div class="quiz-options">`;
  choices.forEach(opt=>{
    html+=`<button class="quiz-btn" onclick="answerVersusQuiz('${opt.replace(/'/g,"\\'")}',this)">${opt}</button>`;
  });
  html+="</div>";
  document.getElementById("versusQuizArea").innerHTML=html;
}

function answerVersusQuiz(choice, btn){
  if(!versusMode) return;
  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);

  const isP1=versusCurrentPlayer===1;
  const atkDeck=isP1?p1Deck:p2Deck;
  let atk=0; atkDeck.forEach(c=>atk+=c.atk);

  if(choice===quizAnswer){
    btn.classList.add("correct");
    // 正解：相手に半分ダメージ
    if(isP1) p2HP-=Math.floor(atk/2);
    else     p1HP-=Math.floor(atk/2);
  } else {
    btn.classList.add("wrong");
    // 不正解：相手にフルダメージ & 自分にも半分
    if(isP1){ p2HP-=Math.floor(atk/2); p1HP-=Math.floor(atk/4); }
    else     { p1HP-=Math.floor(atk/2); p2HP-=Math.floor(atk/4); }
  }

  updateVersusBattleHP();

  setTimeout(()=>{
    if(p1HP<=0||p2HP<=0){
      versusPhase="result";
      renderVersus();
      return;
    }
    // ターン交代
    versusCurrentPlayer=isP1?2:1;
    // バトル画面ごと再描画（ターンバナー更新）
    renderVersusBattle();
  }, 900);
}

function stopVersus(){
  versusMode=false;
  versusPhase="setup";
  renderVersus();
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
