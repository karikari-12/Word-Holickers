// =============================================
//  CARD DATA
// =============================================
const allCards=[
{word:"abuse",meaning:"を悪用する",atk:27,hp:130,rarity:"R",choices:["を守る","を助ける","を避ける","を修理する","を改善する"],partOfSpeech:"動詞",example:"It is wrong to abuse power.",exampleJp:"権力を悪用することは間違っている。"},
{word:"accuracy",meaning:"正確さ",atk:54,hp:200,rarity:"SSR",choices:["速さ","強さ","大きさ","長さ","重さ"],partOfSpeech:"名詞",example:"The accuracy of the data is important.",exampleJp:"データの正確さは重要だ。"},
{word:"acquire",meaning:"を獲得する",atk:38,hp:170,rarity:"R",choices:["を失う","を借りる","を売る","を手放す","を捨てる"],partOfSpeech:"動詞",example:"She worked hard to acquire new skills.",exampleJp:"彼女は新しいスキルを獲得するために懸命に働いた。"},
{word:"addicted",meaning:"癖になった",atk:32,hp:155,rarity:"R",choices:["明るい","静かな","新鮮な","無関心な","飽きた"],partOfSpeech:"形容詞",example:"He became addicted to coffee.",exampleJp:"彼はコーヒーに癖になった。"},
{word:"administration",meaning:"管理",atk:40,hp:175,rarity:"SR",choices:["実行","協力","計画","運営","指導"],partOfSpeech:"名詞",example:"The administration of the hospital is efficient.",exampleJp:"病院の管理は効率的だ。"},
{word:"affair",meaning:"出来事",atk:28,hp:145,rarity:"R",choices:["感情","約束","責任","状況","関係"],partOfSpeech:"名詞",example:"The whole affair was very confusing.",exampleJp:"その出来事全体がとても混乱していた。"},
{word:"allegiance",meaning:"忠誠",atk:42,hp:178,rarity:"SR",choices:["信頼","責任","支援","服従","誠実"],partOfSpeech:"名詞",example:"Soldiers swear allegiance to their country.",exampleJp:"兵士は国への忠誠を誓う。"},
{word:"anguish",meaning:"激しい苦痛",atk:43,hp:190,rarity:"SR",choices:["穏やかな喜び","心の不安","軽い気分","安心","満足"],partOfSpeech:"名詞",example:"She cried out in anguish.",exampleJp:"彼女は激しい苦痛で叫んだ。"},
{word:"annex",meaning:"別館",atk:30,hp:148,rarity:"R",choices:["施設","部屋","校舎","本館","倉庫"],partOfSpeech:"名詞",example:"The library annex was built last year.",exampleJp:"図書館の別館は昨年建てられた。"},
{word:"apparently",meaning:"どうやら〜のようだ",atk:33,hp:155,rarity:"R",choices:["絶対に〜だ","明らかに〜ではない","まったく〜ではない","おそらく〜だろう","確かに〜だ"],partOfSpeech:"副詞",example:"Apparently, she left early this morning.",exampleJp:"どうやら、彼女は今朝早く出発したようだ。"},
{word:"applause",meaning:"拍手",atk:29,hp:148,rarity:"R",choices:["批判","叫び","静寂","歓声","抗議"],partOfSpeech:"名詞",example:"The audience broke into applause.",exampleJp:"聴衆は拍手を送り始めた。"},
{word:"as follows",meaning:"次の通り",atk:27,hp:140,rarity:"R",choices:["これから","その後","例えば","以下の","上記の"],partOfSpeech:"熟語",example:"The rules are as follows.",exampleJp:"規則は次の通りだ。"},
{word:"botanical",meaning:"植物の",atk:23,hp:140,rarity:"N",choices:["科学の","美術の","音楽の","歴史の","文学の"],partOfSpeech:"形容詞",example:"We visited the botanical garden.",exampleJp:"私たちは植物園を訪れた。"},
{word:"bulge",meaning:"出っ張り",atk:31,hp:150,rarity:"R",choices:["面","棒","穴","くぼみ","平面"],partOfSpeech:"名詞",example:"There was a strange bulge in the wall.",exampleJp:"壁に奇妙な出っ張りがあった。"},
{word:"by degrees",meaning:"徐々に",atk:28,hp:143,rarity:"R",choices:["急速に","一度に","完全に","突然に","急激に"],partOfSpeech:"熟語",example:"By degrees, she recovered from her illness.",exampleJp:"徐々に、彼女は病気から回復した。"},
{word:"circuit",meaning:"回路",atk:28,hp:150,rarity:"R",choices:["時間","空間","道","建物","言葉"],partOfSpeech:"名詞",example:"The electric circuit was damaged.",exampleJp:"電気回路が損傷していた。"},
{word:"climate",meaning:"気候",atk:25,hp:135,rarity:"N",choices:["気温","環境","温暖化","天気","湿度"],partOfSpeech:"名詞",example:"The climate here is very mild.",exampleJp:"ここの気候はとても穏やかだ。"},
{word:"comprehend",meaning:"理解する",atk:42,hp:180,rarity:"SR",choices:["聞く","考える","見る","覚える","知る"],partOfSpeech:"動詞",example:"I couldn't comprehend what he said.",exampleJp:"彼が言ったことを理解できなかった。"},
{word:"condemnation",meaning:"激しい非難",atk:43,hp:180,rarity:"SR",choices:["感謝","支援","賞賛","批評","指摘"],partOfSpeech:"名詞",example:"The decision met with widespread condemnation.",exampleJp:"その決定は広範な激しい非難を受けた。"},
{word:"confident",meaning:"自信がある",atk:56,hp:210,rarity:"SSR",choices:["怒っている","不安な","恥ずかしい","緊張した","困った"],partOfSpeech:"形容詞",example:"He was confident in his abilities.",exampleJp:"彼は自分の能力に自信があった。"},
{word:"conflict",meaning:"衝突",atk:36,hp:165,rarity:"R",choices:["一致","有効","契約","対立","争い"],partOfSpeech:"名詞",example:"The conflict between the two countries lasted for years.",exampleJp:"二国間の衝突は何年も続いた。"},
{word:"conquer",meaning:"征服する",atk:41,hp:176,rarity:"SR",choices:["観察する","助ける","逃げる","守る","従う"],partOfSpeech:"動詞",example:"Alexander the Great conquered many lands.",exampleJp:"アレクサンドロス大王は多くの土地を征服した。"},
{word:"consensus",meaning:"合意",atk:42,hp:180,rarity:"SR",choices:["対立","不確実性","疑念","反対","争い"],partOfSpeech:"名詞",example:"The team reached a consensus.",exampleJp:"チームは合意に達した。"},
{word:"consider",meaning:"を考える",atk:25,hp:138,rarity:"N",choices:["を避ける","を忘れる","を閉じる","を無視する","を否定する"],partOfSpeech:"動詞",example:"Please consider all your options.",exampleJp:"すべての選択肢を考えてください。"},
{word:"container",meaning:"容器",atk:22,hp:130,rarity:"N",choices:["袋","箱","瓶","ケース","入れ物"],partOfSpeech:"名詞",example:"Put the leftovers in a container.",exampleJp:"残り物を容器に入れてください。"},
{word:"contempt",meaning:"軽蔑",atk:31,hp:140,rarity:"R",choices:["尊敬","愛情","賞賛","感謝","友情"],partOfSpeech:"名詞",example:"He looked at the mess with contempt.",exampleJp:"彼はその散らかりを軽蔑の目で見た。"},
{word:"crucial",meaning:"重要な",atk:38,hp:170,rarity:"R",choices:["静かな","美しい","楽しい","緊急な","必要な"],partOfSpeech:"形容詞",example:"This decision is crucial for our future.",exampleJp:"この決断は私たちの未来にとって重要だ。"},
{word:"cure",meaning:"治療",atk:35,hp:162,rarity:"R",choices:["診断","病気","運命","処置","薬"],partOfSpeech:"名詞",example:"Scientists are searching for a cure.",exampleJp:"科学者たちは治療法を探している。"},
{word:"dedication",meaning:"献身",atk:34,hp:170,rarity:"R",choices:["不信","疑念","無関心","怠慢","裏切り"],partOfSpeech:"名詞",example:"Her dedication to work was admirable.",exampleJp:"仕事への彼女の献身は称賛に値した。"},
{word:"demise",meaning:"消滅",atk:40,hp:174,rarity:"SR",choices:["成長","発展","繁栄","消失","終焉"],partOfSpeech:"名詞",example:"The demise of the company shocked everyone.",exampleJp:"会社の消滅は皆を驚かせた。"},
{word:"deny",meaning:"を否定する",atk:34,hp:158,rarity:"R",choices:["を説明する","を強調する","を受け入れる","を認める","を証明する"],partOfSpeech:"動詞",example:"He denied stealing the money.",exampleJp:"彼はお金を盗んだことを否定した。"},
{word:"descendant",meaning:"子孫",atk:24,hp:160,rarity:"N",choices:["後継","親族","系譜","祖先","家系"],partOfSpeech:"名詞",example:"She is a descendant of the royal family.",exampleJp:"彼女は王族の子孫だ。"},
{word:"eclipse",meaning:"日食",atk:44,hp:180,rarity:"SR",choices:["星空","月明り","流星群","彗星","星座"],partOfSpeech:"名詞",example:"The solar eclipse lasted three minutes.",exampleJp:"日食は3分間続いた。"},
{word:"emigrant",meaning:"（他国への）移住者",atk:44,hp:180,rarity:"SR",choices:["（移動手段の）旅行者","（特定地域の）居住者","（国内の）住民","観光客","通勤者"],partOfSpeech:"名詞",example:"Many emigrants left for a better life.",exampleJp:"多くの移住者がより良い生活を求めて出発した。"},
{word:"encyclopedia",meaning:"百科事典",atk:35,hp:190,rarity:"R",choices:["辞書","雑誌","カタログ","新聞","小説"],partOfSpeech:"名詞",example:"I looked it up in the encyclopedia.",exampleJp:"私はそれを百科事典で調べた。"},
{word:"enthusiasm",meaning:"熱意",atk:43,hp:180,rarity:"SR",choices:["無関心","冷静さ","不安","疑い","退屈"],partOfSpeech:"名詞",example:"She showed great enthusiasm for the project.",exampleJp:"彼女はプロジェクトに大きな熱意を示した。"},
{word:"etiquette",meaning:"礼儀作法",atk:90,hp:220,rarity:"UR",skill:"critical33",choices:["習慣","マナー","規則","作法","慣習"],partOfSpeech:"名詞",example:"Proper etiquette is important at formal events.",exampleJp:"正式な場では適切な礼儀作法が重要だ。"},
{word:"exaltation",meaning:"有頂天",atk:37,hp:150,rarity:"R",choices:["静寂","平穏","悲哀","絶望","孤独"],partOfSpeech:"名詞",example:"He felt a sense of exaltation after winning.",exampleJp:"勝利後、彼は有頂天の気持ちになった。"},
{word:"exposure",meaning:"露出",atk:27,hp:130,rarity:"R",choices:["絶縁","拒否","隠蔽","保護","沈黙"],partOfSpeech:"名詞",example:"Long exposure to sunlight can damage your skin.",exampleJp:"長時間の日光露出は肌を傷める。"},
{word:"favor",meaning:"好意",atk:26,hp:140,rarity:"N",choices:["拒絶","約束","契約","親切","援助"],partOfSpeech:"名詞",example:"Could you do me a favor?",exampleJp:"お願いがあるのですが、好意で助けてもらえますか？"},
{word:"finesse",meaning:"手際の良さ",atk:38,hp:168,rarity:"R",choices:["難しさ","単純さ","急ぎ","器用さ","素早さ"],partOfSpeech:"名詞",example:"She handled the situation with great finesse.",exampleJp:"彼女は素晴らしい手際の良さで状況を処理した。"},
{word:"forefinger",meaning:"人差し指",atk:19,hp:120,rarity:"N",choices:["薬指","小指","親指","中指","手首"],partOfSpeech:"名詞",example:"She pointed with her forefinger.",exampleJp:"彼女は人差し指で指さした。"},
{word:"frenzy",meaning:"逆上",atk:44,hp:170,rarity:"SR",choices:["安定","静寂","平穏","冷静","落ち着き"],partOfSpeech:"名詞",example:"The crowd was in a frenzy of excitement.",exampleJp:"群衆は興奮して逆上していた。"},
{word:"frequency",meaning:"頻度",atk:30,hp:148,rarity:"R",choices:["強度","状態","量","回数","周期"],partOfSpeech:"名詞",example:"The frequency of the meetings increased.",exampleJp:"会議の頻度が増えた。"},
{word:"from time to time",meaning:"時々",atk:24,hp:135,rarity:"N",choices:["頻繁に","まれに","常に","しばしば","ときおり"],partOfSpeech:"熟語",example:"From time to time, I visit my grandparents.",exampleJp:"時々、祖父母を訪ねる。"},
{word:"genuine",meaning:"本物の",atk:20,hp:120,rarity:"R",choices:["古い","偽物の","新しい","大きい","速い"],partOfSpeech:"形容詞",example:"This is a genuine leather bag.",exampleJp:"これは本物の革のバッグです。"},
{word:"halve",meaning:"半分になる",atk:33,hp:155,rarity:"R",choices:["分かれる","合計する","増える","減る","倍になる"],partOfSpeech:"動詞",example:"We need to halve our expenses.",exampleJp:"費用を半分にする必要がある。"},
{word:"imply",meaning:"を示唆する",atk:33,hp:140,rarity:"R",choices:["を明言する","を隠す","を否定する","を説明する","を強調する"],partOfSpeech:"動詞",example:"His silence seemed to imply agreement.",exampleJp:"彼の沈黙は同意を示唆するように見えた。"},
{word:"in terms of",meaning:"に関して",atk:35,hp:160,rarity:"R",choices:["に対して","によって","について","に応じて","に比べて"],partOfSpeech:"熟語",example:"In terms of cost, this is the best option.",exampleJp:"費用に関して、これが最良の選択肢だ。"},
{word:"inauguration",meaning:"就任式",atk:44,hp:180,rarity:"SR",choices:["記者会見","退任式","投票日","選挙戦","宣誓式"],partOfSpeech:"名詞",example:"The inauguration ceremony was broadcast live.",exampleJp:"就任式の式典はライブ中継された。"},
{word:"industrial",meaning:"産業の",atk:18,hp:100,rarity:"N",choices:["美しい","古い","静かな","自然の","文化の"],partOfSpeech:"形容詞",example:"The industrial revolution changed society.",exampleJp:"産業の革命は社会を変えた。"},
{word:"inevitable",meaning:"避けられない",atk:38,hp:170,rarity:"R",choices:["不可能","選択肢","偶然","自由","希望"],partOfSpeech:"形容詞",example:"Change is inevitable.",exampleJp:"変化は避けられない。"},
{word:"institution",meaning:"公共機関",atk:39,hp:172,rarity:"R",choices:["家族","会社","個人","団体","組織"],partOfSpeech:"名詞",example:"The university is a respected institution.",exampleJp:"その大学は尊敬される公共機関だ。"},
{word:"insult",meaning:"を侮辱する",atk:40,hp:175,rarity:"SR",choices:["を賞賛する","を称える","を助ける","を守る","を励ます"],partOfSpeech:"動詞",example:"Don't insult your colleagues.",exampleJp:"同僚を侮辱しないこと。"},
{word:"interpretation",meaning:"解釈",atk:37,hp:167,rarity:"R",choices:["意見","説明","分析","理解","見解"],partOfSpeech:"名詞",example:"Her interpretation of the poem was unique.",exampleJp:"詩の彼女の解釈は独特だった。"},
{word:"intestine",meaning:"腸",atk:28,hp:145,rarity:"R",choices:["心臓","肝臓","肺","胃","腎臓"],partOfSpeech:"名詞",example:"The small intestine absorbs nutrients.",exampleJp:"小腸は栄養素を吸収する。"},
{word:"intrusion",meaning:"（私生活への）侵害",atk:43,hp:180,rarity:"SR",choices:["（自由な）行動","（他人との）交流","（大声での）発言","参加","発表"],partOfSpeech:"名詞",example:"The intrusion of privacy is illegal.",exampleJp:"プライバシーへの侵害は違法だ。"},
{word:"layman",meaning:"素人",atk:22,hp:135,rarity:"N",choices:["研究者","専門家","技術者","学者","教授"],partOfSpeech:"名詞",example:"He explained it in terms a layman could understand.",exampleJp:"彼は素人にも理解できる言葉で説明した。"},
{word:"legislature",meaning:"立法機関",atk:37,hp:180,rarity:"R",choices:["警察","行政機関","裁判所","軍隊","学校"],partOfSpeech:"名詞",example:"The legislature passed a new law.",exampleJp:"立法機関が新しい法律を可決した。"},
{word:"mania",meaning:"（過度の）熱中",atk:20,hp:120,rarity:"R",choices:["（普通の）好奇心","（穏やかな）関心","（軽い）興味","退屈","無関心"],partOfSpeech:"名詞",example:"There was a mania for collecting stamps in the 1980s.",exampleJp:"1980年代には切手収集への熱中があった。"},
{word:"merely",meaning:"単に",atk:18,hp:110,rarity:"N",choices:["ほんの","ただ","単純に","突然","完全に"],partOfSpeech:"副詞",example:"I merely wanted to help.",exampleJp:"私は単に助けたかっただけだ。"},
{word:"minister",meaning:"大臣",atk:36,hp:160,rarity:"R",choices:["教師","弁護士","医者","警察官","技師"],partOfSpeech:"名詞",example:"The prime minister gave a speech.",exampleJp:"首相がスピーチをした。"},
{word:"navy",meaning:"海軍",atk:36,hp:163,rarity:"R",choices:["船舶","海洋","海賊","艦隊","水兵"],partOfSpeech:"名詞",example:"He served in the navy for ten years.",exampleJp:"彼は10年間海軍に勤めた。"},
{word:"negotiation",meaning:"交渉",atk:40,hp:174,rarity:"SR",choices:["料理","勉強","旅行","協議","話し合い"],partOfSpeech:"名詞",example:"The negotiation took several weeks.",exampleJp:"交渉には数週間かかった。"},
{word:"objective",meaning:"目的",atk:52,hp:190,rarity:"SSR",choices:["手段","結果","条件","計画","方法"],partOfSpeech:"名詞",example:"Our main objective is to win.",exampleJp:"私たちの主な目的は勝つことだ。"},
{word:"occupant",meaning:"占有者",atk:34,hp:158,rarity:"R",choices:["旅行者","借主","通行人","居住者","入居者"],partOfSpeech:"名詞",example:"The occupant of the house moved in last month.",exampleJp:"家の占有者は先月引っ越してきた。"},
{word:"on the contrary",meaning:"その反対で",atk:35,hp:160,rarity:"R",choices:["もちろん","同様に","その結果","それどころか","むしろ"],partOfSpeech:"熟語",example:"I don't dislike it; on the contrary, I love it.",exampleJp:"嫌いではない。その反対で、大好きだ。"},
{word:"onslaught",meaning:"激しい攻撃",atk:42,hp:180,rarity:"SR",choices:["穏やかな風","静かな場所","優しい言葉","平和な時間","穏やかな生活"],partOfSpeech:"名詞",example:"The army faced a fierce onslaught.",exampleJp:"軍は激しい攻撃に直面した。"},
{word:"organic",meaning:"有機的な",atk:46,hp:185,rarity:"SR",choices:["無機的な","機械的な","科学的な","人工的な","技術的な"],partOfSpeech:"形容詞",example:"We buy organic vegetables.",exampleJp:"私たちは有機的な野菜を買う。"},
{word:"out of place",meaning:"場違いで",atk:32,hp:153,rarity:"R",choices:["適切で","普通で","自然で","ふさわしく","相応しく"],partOfSpeech:"熟語",example:"He felt out of place at the formal party.",exampleJp:"彼は正式なパーティーで場違いだと感じた。"},
{word:"panorama",meaning:"広大な眺め",atk:29,hp:150,rarity:"R",choices:["静かな場所","おいしい料理","明るい未来","小さな部屋","古い建物"],partOfSpeech:"名詞",example:"The mountain offered a beautiful panorama.",exampleJp:"山は美しい広大な眺めを提供した。"},
{word:"peculiar",meaning:"奇妙な",atk:34,hp:150,rarity:"R",choices:["楽しい","素晴らしい","普通な","安全な","便利な"],partOfSpeech:"形容詞",example:"There was a peculiar smell in the room.",exampleJp:"部屋の中に奇妙な匂いがした。"},
{word:"penetrate",meaning:"に侵入する",atk:41,hp:175,rarity:"SR",choices:["を避ける","を観察する","を修理する","を防ぐ","を無視する"],partOfSpeech:"動詞",example:"The rain managed to penetrate the roof.",exampleJp:"雨が屋根に侵入した。"},
{word:"poverty",meaning:"貧困",atk:24,hp:140,rarity:"N",choices:["繁栄","富裕","豊かさ","裕福","成功"],partOfSpeech:"名詞",example:"Many people live in poverty.",exampleJp:"多くの人々が貧困の中で生活している。"},
{word:"punishment",meaning:"罰",atk:34,hp:157,rarity:"R",choices:["報酬","助け","支援","制裁","刑罰"],partOfSpeech:"名詞",example:"The punishment for the crime was severe.",exampleJp:"その罪に対する罰は厳しかった。"},
{word:"pupil",meaning:"生徒",atk:20,hp:122,rarity:"N",choices:["教師","学生","教室","児童","受講生"],partOfSpeech:"名詞",example:"The pupil studied hard for the exam.",exampleJp:"その生徒は試験のために懸命に勉強した。"},
{word:"reinforce",meaning:"を強化する",atk:48,hp:185,rarity:"SR",choices:["を弱める","を無視する","を破壊する","を減らす","を否定する"],partOfSpeech:"動詞",example:"We need to reinforce the walls.",exampleJp:"壁を強化する必要がある。"},
{word:"revolution",meaning:"革命",atk:58,hp:200,rarity:"SSR",choices:["進展","改革","変革","安定","停滞"],partOfSpeech:"名詞",example:"The French Revolution changed history.",exampleJp:"フランス革命は歴史を変えた。"},
{word:"salary",meaning:"給与",atk:58,hp:200,rarity:"SSR",choices:["収入","手当","報酬","賃金","利益"],partOfSpeech:"名詞",example:"Her salary increased this year.",exampleJp:"彼女の給与は今年増えた。"},
{word:"sanity",meaning:"正気",atk:38,hp:169,rarity:"R",choices:["勇気","悲しみ","喜び","理性","冷静"],partOfSpeech:"名詞",example:"She began to question her own sanity.",exampleJp:"彼女は自分の正気を疑い始めた。"},
{word:"spiritual",meaning:"精神の",atk:36,hp:164,rarity:"R",choices:["物理の","具体の","現実の","肉体の","物質の"],partOfSpeech:"形容詞",example:"He went on a spiritual journey.",exampleJp:"彼は精神の旅に出た。"},
{word:"subscriber",meaning:"購読者",atk:22,hp:140,rarity:"N",choices:["情報提供者","編集者","作家","販売員","広告主"],partOfSpeech:"名詞",example:"The magazine has one million subscribers.",exampleJp:"その雑誌には100万人の購読者がいる。"},
{word:"substitute",meaning:"代用品",atk:31,hp:151,rarity:"R",choices:["基本品","原材料","最適品","代替品","交換品"],partOfSpeech:"名詞",example:"Margarine is a substitute for butter.",exampleJp:"マーガリンはバターの代用品だ。"},
{word:"suicide",meaning:"自殺",atk:42,hp:177,rarity:"SR",choices:["冒険","幸福","希望","犯罪","事故"],partOfSpeech:"名詞",example:"Prevention of suicide is a public health priority.",exampleJp:"自殺の防止は公衆衛生の優先事項だ。"},
{word:"therapy",meaning:"治療",atk:33,hp:156,rarity:"R",choices:["食事","運動","休息","処置","診断"],partOfSpeech:"名詞",example:"She underwent therapy for anxiety.",exampleJp:"彼女は不安のための治療を受けた。"},
{word:"transform",meaning:"を変形させる",atk:41,hp:180,rarity:"SR",choices:["を保存する","を削除する","を固定させる","を修理する","を移動させる"],partOfSpeech:"動詞",example:"Music can transform your mood.",exampleJp:"音楽は気分を変形させることができる。"},
{word:"trend",meaning:"傾向",atk:29,hp:147,rarity:"R",choices:["冒険","知識","友情","動向","流れ"],partOfSpeech:"名詞",example:"There is a growing trend toward healthy eating.",exampleJp:"健康的な食事への傾向が高まっている。"},
{word:"utilize",meaning:"を活用する",atk:36,hp:163,rarity:"R",choices:["を捨てる","を壊す","を隠す","を使用する","を応用する"],partOfSpeech:"動詞",example:"We should utilize all available resources.",exampleJp:"利用可能なすべてのリソースを活用すべきだ。"},
{word:"vague",meaning:"曖昧な",atk:31,hp:150,rarity:"R",choices:["詳しい","正確な","明確な","不明瞭な","不確かな"],partOfSpeech:"形容詞",example:"His answer was vague and unsatisfying.",exampleJp:"彼の答えは曖昧で不満足だった。"},
{word:"vanity",meaning:"虚栄心",atk:39,hp:171,rarity:"R",choices:["友情","幸福","勇気","自尊心","自惚れ"],partOfSpeech:"名詞",example:"His vanity prevented him from admitting mistakes.",exampleJp:"虚栄心が彼に過ちを認めさせなかった。"},
{word:"vogue",meaning:"流行",atk:35,hp:160,rarity:"R",choices:["旅行","映画","料理","ブーム","トレンド"],partOfSpeech:"名詞",example:"Yoga is in vogue these days.",exampleJp:"ヨガは最近流行だ。"},
{word:"ward",meaning:"区画",atk:27,hp:143,rarity:"R",choices:["整形","決定","声明","地区","病棟"],partOfSpeech:"名詞",example:"She works in the children's ward.",exampleJp:"彼女は小児科区画で働いている。"},
{word:"withstand",meaning:"に耐える",atk:41,hp:175,rarity:"SR",choices:["に勝つ","に備える","に従う","に頼る","に避ける"],partOfSpeech:"動詞",example:"The bridge can withstand heavy loads.",exampleJp:"その橋は重い荷物に耐えることができる。"},
{word:"work out",meaning:"うまくいく",atk:30,hp:148,rarity:"R",choices:["運動する","組み合わせる","計算する","解決する","実現する"],partOfSpeech:"熟語",example:"Everything will work out in the end.",exampleJp:"最終的にはすべてうまくいくだろう。"}
];
allCards.forEach(c=>c.type="english");

const kobunCards=[
{
  word:"おどろく",
  meaning:"目を覚ます / ハッと気づく",
  rarity:"SSR", atk:62, hp:190,
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
  rarity:"SSR", atk:61, hp:195,
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
  rarity:"SSR", atk:63, hp:192,
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
{
  word:"としごろ", meaning:"数年来 / 長年",
  rarity:"N", atk:20, hp:116,
  reading:"としごろ", hinshi:"名詞",
  detail:"現代語の「年頃（適齢期）」とは全く異なる。「数年来・長年」という時間の経過を表す語。現代語の感覚で安易に訳さないよう特に注意が必要。",
  example:"としごろ思ひつることを、果たしはべりぬ。",
  exampleMeaning:"長年思っていたことを、成し遂げました。",
  source:"竹取物語",
  quizzes:[
    {correct:"数年来", choices:["数年来","今年になって","つい最近","今日明日","ここ数日","ほんのしばらく"]},
    {correct:"長年",   choices:["長年","一瞬","あっという間","ほんの少しの間","すぐに","たちまち"]},
  ]
},
{
  word:"おと", meaning:"便り / うわさ",
  rarity:"N", atk:18, hp:109,
  reading:"おと", hinshi:"名詞",
  detail:"「音に聞く」で「うわさに聞く・有名な」の意味になる。音が遠くまで届くように、評判・便りが広まるイメージが核心。",
  example:"おとに聞きし人の、いとをかしげなり。",
  exampleMeaning:"うわさに聞いていた人が、たいそう趣がある。",
  source:"源氏物語",
  quizzes:[
    {correct:"便り",   choices:["便り","実物","本人","直接会うこと","現物","現場"]},
    {correct:"うわさ", choices:["うわさ","真実","事実","証拠","確かな情報","直接聞いた話"]},
  ]
},
{
  word:"かげ", meaning:"光 / 姿 / おかげ / 恩恵",
  rarity:"R", atk:30, hp:149,
  reading:"かげ", hinshi:"名詞",
  detail:"「影」は光・姿、「陰」はおかげ・恩恵と漢字で区別する。光があるから影ができるという原義から、光そのものや輝く姿、さらに守ってくれる恩恵の意味へと広がった。",
  example:"月のかげのいとあかきに。",
  exampleMeaning:"月の光がたいそう明るいので。",
  source:"源氏物語",
  quizzes:[
    {correct:"光",   choices:["光","闇","暗闇","夜","影","陰り"]},
    {correct:"姿",   choices:["姿","声","匂い","気配","足音","温もり"]},
    {correct:"おかげ", choices:["おかげ","せい（責任）","原因","結果","理由","動機"]},
    {correct:"恩恵", choices:["恩恵","災い","呪い","罰","祟り","不幸"]},
  ]
},
{
  word:"つとめて", meaning:"早朝 / 翌早朝",
  rarity:"N", atk:19, hp:112,
  reading:"つとめて", hinshi:"名詞",
  detail:"「努めて（一生懸命に）」とは別の語。夜明け方の早い時間を指す。特に男性が女性のもとに泊まった翌朝の意味で使われることが多い。",
  example:"つとめて、文をやる。",
  exampleMeaning:"翌早朝、手紙を送る。",
  source:"源氏物語",
  quizzes:[
    {correct:"早朝",   choices:["早朝","真夜中","夕暮れ","昼下がり","日没","宵の口"]},
    {correct:"翌早朝", choices:["翌早朝","翌夜","翌昼","翌夕方","数日後","翌晩"]},
  ]
},
{
  word:"さすがに", meaning:"そういうものの",
  rarity:"R", atk:27, hp:140,
  reading:"さすがに", hinshi:"副詞",
  detail:"「さすがに」が受ける直前の内容に注意。「そうはいっても・そういうものの、やはり」が核心。「さすがなり（形容動詞）」は「そうもいかない」の意味になる。",
  example:"さすがに、忘れがたく思ひ出でらるれば。",
  exampleMeaning:"そういうものの、やはり忘れがたく思い出されるので。",
  source:"源氏物語",
  quizzes:[
    {correct:"そういうものの", choices:["そういうものの","当然のように","やっぱり思った通り","予想どおり","当たり前に","もちろん"]},
    {correct:"そうもいかない", choices:["そうもいかない","やはりそうだ","その通りだ","当然だ","もっともだ","予想通りだ"]},
  ]
},
{
  word:"なほ", meaning:"やはり / いっそう",
  rarity:"N", atk:21, hp:118,
  reading:"なほ", hinshi:"副詞",
  detail:"「変わらず・やはり・何といってもやはり」が核心。比較の文脈では「いっそう・さらに」の意味にもなる。状態の持続・強調を表す重要副詞。",
  example:"なほ見まほしき御有様かな。",
  exampleMeaning:"やはり見たいお姿よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"やはり",   choices:["やはり","突然","全く逆に","意外にも","そうではなく","改めて"]},
    {correct:"いっそう", choices:["いっそう","少しずつ","変わらず","ほどほどに","控えめに","だんだん減って"]},
  ]
},
{
  word:"やうやう", meaning:"次第に / やっと",
  rarity:"N", atk:16, hp:103,
  reading:"やうやう", hinshi:"副詞",
  detail:"事態がゆっくりと次第に変化する様子を表す。「やうやく」とも書く。「春はあけぼの、やうやう白くなりゆく」が有名な用例。",
  example:"やうやう白くなりゆく山ぎは。",
  exampleMeaning:"次第に白んでいく山の稜線。",
  source:"枕草子",
  quizzes:[
    {correct:"次第に", choices:["次第に","突然","いきなり","一気に","あっという間に","たちまち"]},
    {correct:"やっと", choices:["やっと","すぐに","たやすく","難なく","あっさりと","造作もなく"]},
  ]
},
{
  word:"そこら", meaning:"たくさん / たいそう",
  rarity:"N", atk:17, hp:106,
  reading:"そこら", hinshi:"副詞",
  detail:"「その辺り」の意味ではない。「ら」は複数・不定を表す接尾語で、数量・程度が多いことを示す。「そこばく」とも書く。",
  example:"そこらの人を集めて。",
  exampleMeaning:"たくさんの人を集めて。",
  source:"竹取物語",
  quizzes:[
    {correct:"たくさん", choices:["たくさん","少し","わずかに","ほんの少し","かすかに","ちょっとだけ"]},
    {correct:"たいそう", choices:["たいそう","少しも","全く","さほど","それほどでも","あまり"]},
  ]
},
{
  word:"わざと", meaning:"正式に / わざわざ",
  rarity:"N", atk:20, hp:114,
  reading:"わざと", hinshi:"副詞",
  detail:"「わざわざ意識して行う」から「正式に・特に」の意味へ。現代語の「わざと（故意に）」とはニュアンスが異なり、特別に改まった行為を指す。",
  example:"わざとの装束にて参りたり。",
  exampleMeaning:"正式な装束で参上した。",
  source:"枕草子",
  quizzes:[
    {correct:"正式に",   choices:["正式に","こっそり","内々に","略式に","非公式に","内緒で"]},
    {correct:"わざわざ", choices:["わざわざ","うっかり","偶然に","なりゆきで","自然と","たまたま"]},
  ]
},
{
  word:"やがて", meaning:"そのまま / すぐに / つまり",
  rarity:"R", atk:26, hp:136,
  reading:"やがて", hinshi:"副詞",
  detail:"「そのまま・すぐに」の意味が重要。現代語の「やがて（そのうち）」の意味では問われない。間を置かず直後に続く状態が核心。",
  example:"やがて出でたまひぬ。",
  exampleMeaning:"そのまま（すぐに）お出になった。",
  source:"源氏物語",
  quizzes:[
    {correct:"そのまま", choices:["そのまま","改めて","やり直して","変えて","別の方法で","新たに"]},
    {correct:"すぐに",   choices:["すぐに","しばらくして","やがて（現代語）","いつかそのうち","じっくりと","ゆっくりと"]},
    {correct:"つまり",   choices:["つまり","しかし","ところが","それゆえ","一方で","なぜなら"]},
  ]
},
{
  word:"すなはち", meaning:"すぐに / 瞬間 / つまりは / そこで",
  rarity:"R", atk:29, hp:143,
  reading:"すなはち", hinshi:"副詞・接続詞",
  detail:"「すぐに・即刻」の意味に注意。時間的な即時性と、論理的な帰結（つまり・そこで）の両方の用法を持つ。文脈による使い分けが重要。",
  example:"すなはち出でたまひぬ。",
  exampleMeaning:"すぐにお出になった。",
  source:"源氏物語",
  quizzes:[
    {correct:"すぐに",   choices:["すぐに","しばらくして","いつかそのうち","後になって","やがて","じっくりと"]},
    {correct:"瞬間",     choices:["瞬間","長い時間","しばらくの間","少しの間","ひとしきり","永い年月"]},
    {correct:"つまりは", choices:["つまりは","しかし","ところが","一方で","それでも","なぜなら"]},
    {correct:"そこで",   choices:["そこで","それなのに","それでも","ところが","しかしながら","それとも"]},
  ]
},
{
  word:"みる", meaning:"結婚する / 理解する / 判断する / 世話をする",
  rarity:"SR", atk:41, hp:175,
  reading:"みる", hinshi:"動詞（マ行上一段活用）",
  detail:"古典では「結婚する」の意味が最重要。男女が共に暮らし始めることを指す。また「理解する・判断する・世話をする」など幅広い意味を持つ多義語。",
  example:"この女をみるほどに。",
  exampleMeaning:"この女性と結婚して暮らしているうちに。",
  source:"伊勢物語",
  quizzes:[
    {correct:"結婚する",   choices:["結婚する","別れる","離縁する","縁を切る","絶縁する","袂を分かつ"]},
    {correct:"理解する",   choices:["理解する","見落とす","気づかない","無視する","見過ごす","聞き流す"]},
    {correct:"判断する",   choices:["判断する","迷う","躊躇する","決めかねる","戸惑う","途方に暮れる"]},
    {correct:"世話をする", choices:["世話をする","放り出す","見捨てる","無関心でいる","干渉しない","突き放す"]},
  ]
},
{
  word:"あふ", meaning:"結婚する / つり合う / 我慢する / 完全に〜しきる",
  rarity:"SR", atk:43, hp:180,
  reading:"あふ", hinshi:"動詞（ハ行四段活用）",
  detail:"男女が逢うことは結婚することと同義。「逢ふ」は男女の契り、「合ふ」はつり合う・一致する、「堪ふ」は我慢する、補助動詞では完全に〜しきるの意。",
  example:"ねんごろにあひ語らひて。",
  exampleMeaning:"親しく結婚して語り合って。",
  source:"伊勢物語",
  quizzes:[
    {correct:"結婚する",       choices:["結婚する","別れる","離縁する","縁を切る","絶縁する","袂を分かつ"]},
    {correct:"つり合う",       choices:["つり合う","かけ離れる","不釣り合いだ","差がある","見劣りする","格が違う"]},
    {correct:"我慢する",       choices:["我慢する","取り乱す","嘆き悲しむ","怒りをあらわにする","投げやりになる","諦める"]},
    {correct:"完全に〜しきる", choices:["完全に〜しきる","中途半端に〜する","〜しかねる","〜しそびれる","〜しきれない","途中でやめる"]},
  ]
},
{
  word:"よばふ", meaning:"求婚する / 呼び続ける",
  rarity:"R", atk:31, hp:150,
  reading:"よばふ", hinshi:"動詞（ハ行四段活用）",
  detail:"「呼ぶ＋ふ（反復・継続）」＝呼び続けるから求婚するの意味に。古典では男性が女性のもとへ通い続けることが求婚を意味した。",
  example:"年ごろよばひわたりけれど。",
  exampleMeaning:"長年求婚し続けていたが。",
  source:"伊勢物語",
  quizzes:[
    {correct:"求婚する",   choices:["求婚する","別れを告げる","縁を切る","離縁を申し出る","逃げ去る","遠ざかる"]},
    {correct:"呼び続ける", choices:["呼び続ける","黙り込む","口を閉ざす","声をひそめる","遠ざかる","立ち去る"]},
  ]
},
{
  word:"ときめく", meaning:"寵愛を受ける / 時勢にあって栄える",
  rarity:"R", atk:34, hp:158,
  reading:"ときめく", hinshi:"動詞（カ行四段活用）",
  detail:"「時めく」と書く。時勢にあって栄えるが原義。権力者に気に入られて寵愛を受ける状態や、世の中で活躍して名声を得る状態を表す。",
  example:"ときめきたまふありさまなり。",
  exampleMeaning:"寵愛を受けていらっしゃるご様子だ。",
  source:"源氏物語",
  quizzes:[
    {correct:"寵愛を受ける",     choices:["寵愛を受ける","冷遇される","疎まれる","遠ざけられる","見放される","嫌われる"]},
    {correct:"時勢にあって栄える", choices:["時勢にあって栄える","時代に取り残される","落ちぶれる","没落する","衰退する","世に忘れられる"]},
  ]
},
{
  word:"にほふ", meaning:"美しく咲く / 美しく輝く / 恩恵が及ぶ",
  rarity:"R", atk:32, hp:154,
  reading:"にほふ", hinshi:"動詞（ハ行四段活用）",
  detail:"においを発するではなく、においが立つような視覚的な美しさを表す。色彩が鮮やかに輝く・美しく映える状態が核心。現代語の「匂う」と混同しないよう注意。",
  example:"桜の花のにほふあたりに。",
  exampleMeaning:"桜の花が美しく咲き輝くあたりに。",
  source:"古今和歌集",
  quizzes:[
    {correct:"美しく咲く",  choices:["美しく咲く","枯れる","散る","色あせる","しおれる","朽ちる"]},
    {correct:"美しく輝く",  choices:["美しく輝く","くすむ","色を失う","暗くなる","濁る","陰る"]},
    {correct:"恩恵が及ぶ",  choices:["恩恵が及ぶ","害が及ぶ","災いが降りかかる","影響が遮られる","縁が切れる","恵みが絶える"]},
  ]
},
{
  word:"うつろふ", meaning:"色あせる / 移転する / 移り変わる",
  rarity:"R", atk:30, hp:147,
  reading:"うつろふ", hinshi:"動詞（ハ行四段活用）",
  detail:"花の色が変わり色あせることが原義。そこから心変わり・場所の移転・状況の変化まで幅広く使われる。「心うつろふ＝心変わりする」は重要な用法。",
  example:"心のうつろひやすきにつけて。",
  exampleMeaning:"心が移り変わりやすいことにつけて。",
  source:"源氏物語",
  quizzes:[
    {correct:"色あせる",   choices:["色あせる","鮮やかになる","色づく","色めく","艶やかになる","美しく輝く"]},
    {correct:"移転する",   choices:["移転する","留まる","定住する","腰を落ち着ける","動かずにいる","根を張る"]},
    {correct:"移り変わる", choices:["移り変わる","変わらずにいる","一定のままだ","留まり続ける","変化しない","固定される"]},
  ]
},
{
  word:"やつる", meaning:"地味な服装になる / 目立たぬようになる",
  rarity:"N", atk:22, hp:122,
  reading:"やつる", hinshi:"動詞（ラ行下二段活用）",
  detail:"「やつれる（やせ衰える）」から地味になるの意味に発展した。出家・変装・身分を隠すために外見を質素にする行為が核心。",
  example:"やつれたる姿にて歩きたまふ。",
  exampleMeaning:"地味な服装で歩いていらっしゃる。",
  source:"源氏物語",
  quizzes:[
    {correct:"地味な服装になる",   choices:["地味な服装になる","華やかに着飾る","盛装する","豪華な衣をまとう","艶やかになる","美しく装う"]},
    {correct:"目立たぬようになる", choices:["目立たぬようになる","注目を集める","人目を引く","華やかに振る舞う","存在感を示す","目立つ"]},
  ]
},
{
  word:"おこなふ", meaning:"勤行する / 修行する / 治める",
  rarity:"R", atk:28, hp:142,
  reading:"おこなふ", hinshi:"動詞（ハ行四段活用）",
  detail:"「行」は「勤行・修行」の意味。仏道における実践的な行いが原義で、そこから物事を実施・管理するの意味に広がった。",
  example:"念仏をおこなひて。",
  exampleMeaning:"念仏の勤行をして。",
  source:"源氏物語",
  quizzes:[
    {correct:"勤行する", choices:["勤行する","怠ける","さぼる","修行を避ける","信仰を捨てる","俗世に戻る"]},
    {correct:"修行する", choices:["修行する","遊び惚ける","現世の楽しみに耽る","修行を諦める","俗世に溺れる","怠惰に過ごす"]},
    {correct:"治める",   choices:["治める","乱す","荒らす","捨て置く","顧みない","無秩序にする"]},
  ]
},
{
  word:"かしづく", meaning:"大切に育てる / 大切に世話をする",
  rarity:"R", atk:27, hp:138,
  reading:"かしづく", hinshi:"動詞（カ行四段活用）",
  detail:"「かしら（頭）をつけて」敬意を持って養育するが原義。大切な人を丁寧に育て上げ、手厚く世話をする行為が核心。",
  example:"いつくしうかしづきたてまつりたまふ。",
  exampleMeaning:"丁寧に大切にお育て申し上げていらっしゃる。",
  source:"源氏物語",
  quizzes:[
    {correct:"大切に育てる",     choices:["大切に育てる","放任する","ほったらかす","突き放す","冷たくあしらう","見捨てる"]},
    {correct:"大切に世話をする", choices:["大切に世話をする","粗末に扱う","無関心でいる","干渉しない","見て見ぬふりをする","放り出す"]},
  ]
},
{
  word:"あそぶ", meaning:"管絃などの遊びをする / 遊び興じる / 歩き回る",
  rarity:"R", atk:26, hp:135,
  reading:"あそぶ", hinshi:"動詞（バ行四段活用）",
  detail:"古典で「あそび」といえばまず管絃の遊びを指す。貴族の優雅な娯楽（音楽・詩歌・舞）が原義で、現代語の「遊ぶ」より格調高い行為を表す。",
  example:"管絃のあそびをぞしたまふ。",
  exampleMeaning:"管絃の演奏をなさっている。",
  source:"源氏物語",
  quizzes:[
    {correct:"管絃などの遊びをする", choices:["管絃などの遊びをする","武芸に励む","戦の準備をする","農作業をする","読経する","写経する"]},
    {correct:"遊び興じる",           choices:["遊び興じる","真剣に働く","懸命に励む","厳かに過ごす","静かに謹む","慎み深く生きる"]},
    {correct:"歩き回る",             choices:["歩き回る","じっとしている","引きこもる","立ち止まる","座り込む","動かずにいる"]},
  ]
},
{
  word:"おくる", meaning:"先立たれる / 劣る",
  rarity:"R", atk:29, hp:144,
  reading:"おくる", hinshi:"動詞（ラ行四段活用）",
  detail:"「遅れを取る」が原義で、人の死に遅れを取る＝先立たれるの意味に。また他と比べて後れを取る＝劣るの意味も持つ。",
  example:"おくれ先立つならひを思へば。",
  exampleMeaning:"先立たれたり先立ったりするならわしを思うと。",
  source:"源氏物語",
  quizzes:[
    {correct:"先立たれる", choices:["先立たれる","先立つ","見送る側になる","長生きする","後に残す","見届ける"]},
    {correct:"劣る",       choices:["劣る","勝る","優れる","抜きん出る","際立つ","上回る"]},
  ]
},
{
  word:"いむ", meaning:"忌み嫌う / 受戒する / 不吉だ",
  rarity:"R", atk:31, hp:149,
  reading:"いむ", hinshi:"動詞（マ行四段活用）・形容詞",
  detail:"「忌み嫌う」は「忌」の字、「受戒する」は「斎」の字を当てる。神仏への畏敬から禁忌を守る・戒律を受けるという意味に発展した。",
  example:"いみじき物忌みして。",
  exampleMeaning:"ひどく物忌みをして（不吉なものを忌み避けて）。",
  source:"枕草子",
  quizzes:[
    {correct:"忌み嫌う",  choices:["忌み嫌う","ありがたがる","崇める","大切にする","慕う","敬い奉る"]},
    {correct:"受戒する",  choices:["受戒する","戒律を破る","俗世に戻る","修行を諦める","信仰を捨てる","誓いを違える"]},
    {correct:"不吉だ",    choices:["不吉だ","縁起が良い","めでたい","吉兆だ","幸先が良い","おめでたい"]},
  ]
},
{
  word:"しほたる", meaning:"海水に濡れてしずくが垂れる / 涙などで袖が濡れる",
  rarity:"N", atk:23, hp:127,
  reading:"しほたる", hinshi:"動詞（ラ行下二段活用）",
  detail:"「潮＋垂る」で海水が垂れるが原義。そこから転じて涙で袖がぐっしょり濡れる状態を表す。恋の悲しみや別れの涙を詠む和歌に多く使われる。",
  example:"袖しほたれて。",
  exampleMeaning:"袖が涙で濡れて。",
  source:"古今和歌集",
  quizzes:[
    {correct:"海水に濡れてしずくが垂れる", choices:["海水に濡れてしずくが垂れる","乾いて干からびる","日に焼けてひび割れる","砂に埋もれる","風にさらされる","凪いで静まる"]},
    {correct:"涙などで袖が濡れる",         choices:["涙などで袖が濡れる","袖を翻して立ち去る","袖を振って別れを告げる","袖を合わせて喜ぶ","袖を絞って乾かす","晴れやかに袖をはためかす"]},
  ]
},
{
  word:"はつ", meaning:"終わる / 〜しきる / 〜し終わる",
  rarity:"R", atk:25, hp:133,
  reading:"はつ", hinshi:"動詞（タ行下二段活用）",
  detail:"現代語の「果てる」に相当。終わりを迎える・命が尽きるが核心。補助動詞として「〜しきる・〜し終わる」の意味でも使われる。",
  example:"命はてぬべし。",
  exampleMeaning:"命が終わってしまいそうだ。",
  source:"源氏物語",
  quizzes:[
    {correct:"終わる",     choices:["終わる","始まる","出発する","起こる","生まれる","開く"]},
    {correct:"〜しきる",   choices:["〜しきる","〜しかねる","〜しそびれる","〜しきれない","途中でやめる","〜し始める"]},
    {correct:"〜し終わる", choices:["〜し終わる","〜し続ける","〜しかける","〜し始める","〜しそこなう","途中でやめる"]},
  ]
},
{
  word:"やむごとなし", meaning:"たいそう尊い / やむをえない / 並々でない",
  rarity:"SR", atk:46, hp:185,
  reading:"やむごとなし", hinshi:"形容詞（ク活用）",
  detail:"「止む事なし」というほどに「たいそう尊い」の意。「やんごとなし」とも書く。身分・地位・品格が最高級であることを表す最上級の褒め言葉。",
  example:"やむごとなき御方々。",
  exampleMeaning:"たいそう尊い方々。",
  source:"源氏物語",
  quizzes:[
    {correct:"たいそう尊い",  choices:["たいそう尊い","取るに足らない","卑しい","身分が低い","平凡だ","どこにでもいる"]},
    {correct:"やむをえない",  choices:["やむをえない","避けられる","どうにかなる","なんとかできる","選択の余地がある","打開できる"]},
    {correct:"並々でない",    choices:["並々でない","ごく普通だ","ありふれている","どこにでもある","目立たない","平凡だ"]},
  ]
},
{
  word:"すきずきし", meaning:"好色めいている / 風流だ",
  rarity:"R", atk:33, hp:157,
  reading:"すきずきし", hinshi:"形容詞（シク活用）",
  detail:"古典の世界では好色と風流は通じる。「好き（風雅を好む）」が重なった語で、恋愛に積極的で風雅を解する態度が核心。",
  example:"すきずきしき御心にて。",
  exampleMeaning:"好色で風流なお気持ちで。",
  source:"源氏物語",
  quizzes:[
    {correct:"好色めいている", choices:["好色めいている","貞淑だ","慎み深い","節度がある","品行方正だ","奥ゆかしい"]},
    {correct:"風流だ",         choices:["風流だ","野暮ったい","無粋だ","趣がない","無骨だ","風情がない"]},
  ]
},
{
  word:"おほけなし", meaning:"身分不相応だ / 恐れ多い",
  rarity:"R", atk:32, hp:153,
  reading:"おほけなし", hinshi:"形容詞（ク活用）",
  detail:"その人の態度や思いがある限度を超えた状態が核心。身分や立場をわきまえずに高いものを望む・近づこうとする態度の大きさを表す。",
  example:"おほけなく、うき世の民におほふかな。",
  exampleMeaning:"身分不相応にも、世の人々を覆おうとすることよ。",
  source:"千載和歌集",
  quizzes:[
    {correct:"身分不相応だ", choices:["身分不相応だ","分をわきまえている","身の程をわかっている","相応しい立場だ","釣り合いが取れている","ふさわしい"]},
    {correct:"恐れ多い",     choices:["恐れ多い","気安い","親しみやすい","遠慮がない","気兼ねしない","臆せず向き合える"]},
  ]
},
{
  word:"おぼつかなし", meaning:"はっきりしない / 心細い / 気がかりだ",
  rarity:"R", atk:30, hp:148,
  reading:"おぼつかなし", hinshi:"形容詞（ク活用）",
  detail:"はっきりとしないぼんやりとしたさまが核心。視覚的な不鮮明さから、心理的な不安・気がかりな状態まで幅広く使われる。",
  example:"おぼつかなく、霞みわたりて。",
  exampleMeaning:"はっきりせず、一面霞がかかって。",
  source:"源氏物語",
  quizzes:[
    {correct:"はっきりしない", choices:["はっきりしない","明らかだ","はっきりしている","疑いようがない","明白だ","確かだ"]},
    {correct:"心細い",         choices:["心細い","心強い","頼もしい","安心だ","揺るぎない","たのもしい"]},
    {correct:"気がかりだ",     choices:["気がかりだ","安心だ","気にならない","問題ない","心配いらない","のんきだ"]},
  ]
},
{
  word:"かごとがまし", meaning:"恨みがましい様子だ",
  rarity:"N", atk:21, hp:119,
  reading:"かごとがまし", hinshi:"形容詞（シク活用）",
  detail:"「かごと（恨みごと）」と一緒に覚える。相手を恨んでいる気持ちが言動ににじみ出ている様子を表す。「かごと」単体は「恨みごと・言い訳」の意。",
  example:"かごとがましき御けしきにて。",
  exampleMeaning:"恨みがましいご様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"恨みがましい様子だ", choices:["恨みがましい様子だ","感謝に満ちている","晴れやかだ","恨みなど全くない","清々しい","さっぱりしている"]},
  ]
},
{
  word:"いまめかし", meaning:"当世風だ / 現代風だ / 今さらめいている",
  rarity:"N", atk:22, hp:121,
  reading:"いまめかし", hinshi:"形容詞（シク活用）",
  detail:"「今＋めく（らしくみえる）」から転じた語。今風でモダンな様子を褒める場合と、今さら時代遅れのことをするという批判的な用法の両方がある。",
  example:"いまめかしく、をかしき御ありさまかな。",
  exampleMeaning:"当世風で、趣あるご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"当世風だ",       choices:["当世風だ","時代遅れだ","古くさい","時代錯誤だ","流行遅れだ","昔風だ"]},
    {correct:"現代風だ",       choices:["現代風だ","古風だ","旧式だ","時代がかっている","骨董品のようだ","古めかしい"]},
    {correct:"今さらめいている", choices:["今さらめいている","新鮮だ","目新しい","斬新だ","最先端だ","時代の先をいく"]},
  ]
},
{
  word:"そこはかとなし", meaning:"とりとめもない",
  rarity:"N", atk:18, hp:108,
  reading:"そこはかとなし", hinshi:"形容詞（ク活用）",
  detail:"「そこはかと（はっきりと）＋なし（しない）」の構成。これといった理由や中心がなく、漠然としてとりとめがない状態が核心。",
  example:"そこはかとなく書きつくれば。",
  exampleMeaning:"とりとめもなく書きつけると。",
  source:"徒然草",
  quizzes:[
    {correct:"とりとめもない", choices:["とりとめもない","はっきりしている","明確だ","筋道が通っている","理路整然だ","きちんとしている"]},
  ]
},
{
  word:"くちをし", meaning:"残念だ / 情けない / つまらない / 卑しい",
  rarity:"R", atk:34, hp:160,
  reading:"くちをし", hinshi:"形容詞（シク活用）",
  detail:"期待外れの結果に残念で情けない気持ちが核心。「口惜し」と書き、口にするのも惜しいほど残念な状態を表す。",
  example:"くちをしく、ねたく思ひけり。",
  exampleMeaning:"残念で、悔しく思った。",
  source:"枕草子",
  quizzes:[
    {correct:"残念だ",   choices:["残念だ","嬉しい","清々しい","満足だ","喜ばしい","胸が躍る"]},
    {correct:"情けない", choices:["情けない","誇らしい","頼もしい","堂々としている","胸を張れる","晴れやかだ"]},
    {correct:"つまらない", choices:["つまらない","胸躍る","わくわくする","刺激的だ","面白い","やりがいがある"]},
    {correct:"卑しい",   choices:["卑しい","高貴だ","気品がある","由緒ある","立派な家柄だ","身分が高い"]},
  ]
},
{
  word:"きよらなり", meaning:"上品で美しい",
  rarity:"R", atk:28, hp:141,
  reading:"きよらなり", hinshi:"形容動詞（ナリ活用）",
  detail:"光輝くような上品で美しいさまが核心。清らかで華やかな美しさを表す最上級の美の形容語。源氏物語で光源氏の容貌を描写する際に多く用いられる。",
  example:"きよらにおはします光源氏。",
  exampleMeaning:"上品で美しくいらっしゃる光源氏。",
  source:"源氏物語",
  quizzes:[
    {correct:"上品で美しい", choices:["上品で美しい","下品で醜い","薄汚い","みすぼらしい","粗野だ","がさつだ"]},
  ]
},
{
  word:"つれづれなり", meaning:"所在ない / 退屈だ / 退屈でもの寂しい",
  rarity:"N", atk:24, hp:131,
  reading:"つれづれなり", hinshi:"形容動詞（ナリ活用）",
  detail:"同じような状態が続く退屈さが核心。兼好法師の「つれづれなるままに」が有名。することがなく手持ち無沙汰な状態から、もの寂しさへと続く感情を表す。",
  example:"つれづれなるままに、日暮らし。",
  exampleMeaning:"所在ないままに、一日中。",
  source:"徒然草",
  quizzes:[
    {correct:"所在ない",       choices:["所在ない","忙しい","やることがある","充実している","することが多い","忙しなく動き回る"]},
    {correct:"退屈だ",         choices:["退屈だ","楽しくてたまらない","刺激的だ","胸躍る","わくわくする","面白い"]},
    {correct:"退屈でもの寂しい", choices:["退屈でもの寂しい","楽しく賑やかだ","活気がある","心が弾む","生き生きしている","喜びに満ちている"]},
  ]
},
{
  word:"むげなり", meaning:"全くひどい / あんまりだ / 身分が低い / 紛れもない",
  rarity:"R", atk:35, hp:162,
  reading:"むげなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「無下（下無し）」＝最低という原義から「全くひどい・あんまりだ」へ。また程度の甚だしさを強調して「紛れもない・全くの」の意にもなる。",
  example:"むげにおとりぬべき御心かな。",
  exampleMeaning:"全くひどく劣ってしまいそうなお気持ちよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"全くひどい",  choices:["全くひどい","申し分ない","すばらしい","見事だ","立派だ","完璧だ"]},
    {correct:"あんまりだ",  choices:["あんまりだ","当然だ","もっともだ","仕方ない","理にかなっている","納得できる"]},
    {correct:"身分が低い",  choices:["身分が低い","高貴だ","由緒ある","気品がある","身分が高い","立派な家柄だ"]},
    {correct:"紛れもない",  choices:["紛れもない","怪しい","疑わしい","曖昧だ","不確かだ","はっきりしない"]},
  ]
},
{
  word:"ふみ", meaning:"書物 / 手紙 / 漢詩文 / 学問",
  rarity:"R", atk:33, hp:156,
  reading:"ふみ", hinshi:"名詞",
  detail:"「ふみ（書物）→書物は学問→学問は漢詩文」という連想で覚える。手紙の意味も重要。和歌ではなく漢詩・漢文を指す場合が多い。",
  example:"ふみをたてまつれど、御返りもなし。",
  exampleMeaning:"手紙を差し上げたが、お返事もない。",
  source:"源氏物語",
  quizzes:[
    {correct:"書物",   choices:["書物","絵画","彫刻","音楽","建物","道具"]},
    {correct:"手紙",   choices:["手紙","直接会うこと","使者","口伝え","噂話","風の便り"]},
    {correct:"漢詩文", choices:["漢詩文","和歌","俳句","物語","日記","随筆"]},
    {correct:"学問",   choices:["学問","武芸","遊び","商売","農業","職人仕事"]},
  ]
},
{
  word:"おほやけ", meaning:"天皇 / 朝廷 / 公的なこと",
  rarity:"R", atk:36, hp:164,
  reading:"おほやけ", hinshi:"名詞",
  detail:"「朝廷・天皇」が試験で問われる最重要の意味。「大宅（おほやけ）＝大きな家」が原義で、最大の権力者とその居所を指す。「私（わたくし）」の対義語。",
  example:"おほやけごとに仕うまつりて。",
  exampleMeaning:"朝廷の公務にお仕えして。",
  source:"源氏物語",
  quizzes:[
    {correct:"天皇",     choices:["天皇","将軍","公家","武士","僧侶","豪族"]},
    {correct:"朝廷",     choices:["朝廷","寺院","武家政権","市場","民家","宿場"]},
    {correct:"公的なこと", choices:["公的なこと","私的なこと","内輪のこと","秘密のこと","個人的なこと","内緒のこと"]},
  ]
},
{
  word:"くもゐ", meaning:"宮中 / 天",
  rarity:"N", atk:23, hp:128,
  reading:"くもゐ", hinshi:"名詞",
  detail:"「雲がある遠いところ」が原義。雲の上＝手が届かない遠く高いところから、宮中・天上という意味へ発展した。",
  example:"くもゐのよそにながめしを。",
  exampleMeaning:"宮中を遠くから眺めていたのに。",
  source:"源氏物語",
  quizzes:[
    {correct:"宮中", choices:["宮中","市場","寺院","農村","武家屋敷","港"]},
    {correct:"天",   choices:["天","地面","海の底","奈落","地の果て","暗闇"]},
  ]
},
{
  word:"みやび", meaning:"風雅",
  rarity:"N", atk:24, hp:130,
  reading:"みやび", hinshi:"名詞",
  detail:"「みやぶ（宮廷風だ・優雅だ）」から。宮廷の洗練された上品な趣・優雅さが核心。対義語の「ひなぶ（田舎くさくなる）」と合わせて覚えると効果的。",
  example:"みやびにをかしき御ありさまかな。",
  exampleMeaning:"風雅で趣あるご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"風雅", choices:["風雅","野暮ったい","無粋だ","田舎くさい","洗練されていない","無骨だ"]},
  ]
},
{
  word:"あいぎやう", meaning:"かわいらしさ / 思いやり",
  rarity:"N", atk:21, hp:117,
  reading:"あいぎやう", hinshi:"名詞",
  detail:"現代語にない「思いやり」の意味に注意。「愛敬（あいぎょう）」と書き、人を惹きつける可愛らしさと、相手を思いやる優しさの両方を表す。",
  example:"あいぎやうおはして、心にくき御有様かな。",
  exampleMeaning:"かわいらしさがおありで、奥ゆかしいご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"かわいらしさ", choices:["かわいらしさ","醜さ","不気味さ","おぞましさ","疎ましさ","目障りなさ"]},
    {correct:"思いやり",     choices:["思いやり","冷たさ","薄情さ","無関心","突き放した態度","残酷さ"]},
  ]
},
{
  word:"ざえ", meaning:"学才 / 学問 / 技芸",
  rarity:"R", atk:29, hp:145,
  reading:"ざえ", hinshi:"名詞",
  detail:"男子が身に着けるべき漢詩文などの学問・才能が核心。「才（ざえ）」と書き、知的な能力・学識・技術的な腕前を幅広く表す。",
  example:"ざえある人の。",
  exampleMeaning:"学才のある人が。",
  source:"枕草子",
  quizzes:[
    {correct:"学才", choices:["学才","武勇","腕力","体力","武芸の腕前","剛力"]},
    {correct:"学問", choices:["学問","遊び","商売","農業","武芸","職人仕事"]},
    {correct:"技芸", choices:["技芸","財産","地位","家柄","血筋","容姿"]},
  ]
},
{
  word:"みち", meaning:"政道 / 道理 / 方法 / 仏道 / （学問・芸道の）方面",
  rarity:"SR", atk:44, hp:182,
  reading:"みち", hinshi:"名詞",
  detail:"「道」の内容を文脈から吟味しながら読む必要がある重要多義語。人が進むべき道から、政治・論理・宗教・学芸の各分野まで幅広く使われる。",
  example:"みちに心を入れて。",
  exampleMeaning:"学問の道に心を傾けて。",
  source:"徒然草",
  quizzes:[
    {correct:"政道",             choices:["政道","戦乱","反乱","騒動","謀反","争い"]},
    {correct:"道理",             choices:["道理","不条理","でたらめ","理屈に合わないこと","筋違い","無法"]},
    {correct:"方法",             choices:["方法","目的","結果","理由","動機","原因"]},
    {correct:"仏道",             choices:["仏道","神道","儒学","武道","茶道","歌道"]},
    {correct:"（学問・芸道の）方面", choices:["（学問・芸道の）方面","農業の分野","商業の分野","武芸の分野","建築の分野","漁業の分野"]},
  ]
},
{
  word:"うしろみ", meaning:"後見（人）",
  rarity:"N", atk:20, hp:115,
  reading:"うしろみ", hinshi:"名詞",
  detail:"「後ろから見る人」が原義で「後見人」の意。幼い主人や女性の後ろ盾となって守り支える人物を指す。古典では重要な社会的役割。",
  example:"うしろみする人もなくて。",
  exampleMeaning:"後見してくれる人もいなくて。",
  source:"源氏物語",
  quizzes:[
    {correct:"後見（人）", choices:["後見（人）","先導者","主君","仇敵","批判者","傍観者"]},
  ]
},
{
  word:"いろ", meaning:"顔色 / 風流 / 恋愛",
  rarity:"R", atk:30, hp:147,
  reading:"いろ", hinshi:"名詞",
  detail:"「いろ→顔色→恋愛→風流」の流れで覚える。色彩から人の表情・感情、さらに恋愛や風雅な心へと意味が広がった多義語。",
  example:"いろめく御ありさまかな。",
  exampleMeaning:"恋愛めいたご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"顔色", choices:["顔色","声色","身振り","足音","気配","匂い"]},
    {correct:"風流", choices:["風流","野暮ったい","無粋","田舎くさい","無骨","趣がない"]},
    {correct:"恋愛", choices:["恋愛","友情","師弟関係","主従関係","親子の絆","兄弟の情"]},
  ]
},
{
  word:"なさけ", meaning:"風流心 / 思いやり",
  rarity:"N", atk:22, hp:124,
  reading:"なさけ", hinshi:"名詞",
  detail:"風流心と思いやりの両方を表す。詩歌・音楽などの風雅を解する感性と、人の気持ちを汲み取る優しさが核心。現代語の「情け（哀れみ）」より意味が広い。",
  example:"なさけある人の。",
  exampleMeaning:"思いやりのある人が。",
  source:"源氏物語",
  quizzes:[
    {correct:"風流心",   choices:["風流心","野暮ったさ","無粋さ","無骨さ","趣のなさ","感受性のなさ"]},
    {correct:"思いやり", choices:["思いやり","冷淡さ","薄情さ","無関心","残酷さ","冷たさ"]},
  ]
},
{
  word:"こころ", meaning:"気持ち / 思慮 / 風流心 / 意味 / 中心 / 本質",
  rarity:"SSR", atk:65, hp:195,
  reading:"こころ", hinshi:"名詞",
  detail:"人の精神・物事の本質など訳し分けが必要な最重要多義語。「心」が表す内容は文脈によって大きく異なり、気持ち・知性・感性・意味・核心まで幅広く使われる。",
  example:"こころをつくして。",
  exampleMeaning:"心を尽くして（精一杯）。",
  source:"源氏物語",
  quizzes:[
    {correct:"気持ち",   choices:["気持ち","外見","容姿","声色","振る舞い","身なり"]},
    {correct:"思慮",     choices:["思慮","無鉄砲さ","軽率さ","向こう見ずさ","浅はかさ","無謀さ"]},
    {correct:"風流心",   choices:["風流心","野暮ったさ","無粋さ","無骨さ","趣のなさ","感受性のなさ"]},
    {correct:"意味",     choices:["意味","音","形","色","匂い","感触"]},
    {correct:"中心",     choices:["中心","端","周辺","外側","表面","縁"]},
    {correct:"本質",     choices:["本質","見かけ","外見","表面上","うわべ","形"]},
  ]
},
{
  word:"ちぎり", meaning:"約束 / 前世からの因縁",
  rarity:"R", atk:32, hp:153,
  reading:"ちぎり", hinshi:"名詞",
  detail:"「ちぎる（約束する）」から生まれた語。現世での約束から、前世にさかのぼる宿縁・因縁へと意味が深まった。男女の縁や仏との縁に多く使われる。",
  example:"前の世のちぎりにや。",
  exampleMeaning:"前世からの因縁なのだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"約束",         choices:["約束","裏切り","約束を破ること","縁を切ること","拒絶","無視"]},
    {correct:"前世からの因縁", choices:["前世からの因縁","偶然の出会い","気まぐれな縁","その場限りの関係","一時の気の迷い","現世だけの縁"]},
  ]
},
{
  word:"ほい・ほんい", meaning:"本来の志 / 真意 / 本望",
  rarity:"R", atk:31, hp:150,
  reading:"ほい・ほんい", hinshi:"名詞",
  detail:"「本意（ほんい）」の「ん」が抜けて「ほい」になった語。もともとの心からの望み・真の意図が核心。表向きの理由とは異なる本当の気持ちを指す。",
  example:"ほいのままに、出でたまひぬ。",
  exampleMeaning:"本来の志のままに、お出になった。",
  source:"源氏物語",
  quizzes:[
    {correct:"本来の志", choices:["本来の志","一時の気まぐれ","その場の思いつき","浮ついた望み","表向きの建前","偽りの目的"]},
    {correct:"真意",     choices:["真意","建前","口実","表向きの理由","言い訳","偽りの言葉"]},
    {correct:"本望",     choices:["本望","未練","諦め","失望","悔い","不満"]},
  ]
},
{
  word:"よ", meaning:"現世 / 世の中 / 夫婦の仲 / 時代 / 年齢",
  rarity:"SSR", atk:64, hp:193,
  reading:"よ", hinshi:"名詞",
  detail:"「よのなか（世の中）」は男女の仲かもしれないと読み取る感性が重要。「世」が表す内容は文脈によって現世・社会・夫婦関係・時代・年齢と多岐にわたる。",
  example:"この世にののしりたまふ。",
  exampleMeaning:"この世で評判高くいらっしゃる。",
  source:"源氏物語",
  quizzes:[
    {correct:"現世",     choices:["現世","来世","前世","冥界","彼岸","天上界"]},
    {correct:"世の中",   choices:["世の中","あの世","異界","山奥","海の底","遠い国"]},
    {correct:"夫婦の仲", choices:["夫婦の仲","主従関係","親子の絆","師弟関係","兄弟の情","友人関係"]},
    {correct:"時代",     choices:["時代","場所","身分","家柄","地位","財産"]},
    {correct:"年齢",     choices:["年齢","身長","体重","容姿","声色","体力"]},
  ]
},
{
  word:"ゐる", meaning:"すわる / 連れる",
  rarity:"N", atk:18, hp:108,
  reading:"ゐる", hinshi:"動詞",
  detail:"「居る」はすわる・いる、「率る」は連れるの意。同じ読みで漢字が異なる二語。「率ゐる（ひきゐる）」の形で使われることも多い。",
  example:"ゐて奉りたまへ。",
  exampleMeaning:"連れてお仕え申し上げよ。",
  source:"源氏物語",
  quizzes:[
    {correct:"すわる", choices:["すわる","立つ","走る","飛ぶ","倒れる","這う"]},
    {correct:"連れる", choices:["連れる","置いてきぼりにする","追い払う","遠ざける","別れる","引き離す"]},
  ]
},
{
  word:"ぐす", meaning:"備える / 従う / 持つ / 連れ添う",
  rarity:"R", atk:30, hp:146,
  reading:"ぐす", hinshi:"動詞（サ行変格活用）",
  detail:"「具（備える）」の意味を持つ言葉。必要なものを揃える・人を従えるなど、何かを伴う・揃えるという行為が核心。",
  example:"人々ぐして参りたり。",
  exampleMeaning:"人々を連れ添って参上した。",
  source:"枕草子",
  quizzes:[
    {correct:"備える",   choices:["備える","欠く","取り除く","失う","手放す","除外する"]},
    {correct:"従う",     choices:["従う","逆らう","背く","抵抗する","反抗する","拒む"]},
    {correct:"持つ",     choices:["持つ","捨てる","手放す","失う","置き去りにする","捨て置く"]},
    {correct:"連れ添う", choices:["連れ添う","別れる","離れる","遠ざかる","袂を分かつ","縁を切る"]},
  ]
},
{
  word:"いそぐ", meaning:"準備する",
  rarity:"N", atk:19, hp:111,
  reading:"いそぐ", hinshi:"動詞（ガ行四段活用）",
  detail:"「急いで準備する」と覚える。現代語の「急ぐ（急いで移動する）」の意味だけでなく、行事・儀式などの準備に取りかかる意味が古典では重要。",
  example:"旅立ちいそぎたまひて。",
  exampleMeaning:"旅立ちの準備をなさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"準備する", choices:["準備する","後回しにする","先延ばしにする","怠ける","ほったらかす","そのままにする"]},
  ]
},
{
  word:"まうく", meaning:"用意する / 身に受ける / 授かる",
  rarity:"R", atk:26, hp:136,
  reading:"まうく", hinshi:"動詞（カ行下二段活用）",
  detail:"「あらかじめ設けておく」ことから「用意・準備する」が原義。そこから「身に受ける・授かる」という受動的な意味へも発展した。",
  example:"あらかじめまうけたまひて。",
  exampleMeaning:"あらかじめご用意なさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"用意する",   choices:["用意する","後回しにする","先延ばしにする","ほったらかす","放置する","忘れる"]},
    {correct:"身に受ける", choices:["身に受ける","押し付ける","拒む","返す","手放す","遠ざける"]},
    {correct:"授かる",     choices:["授かる","奪う","横取りする","失う","捨てる","手放す"]},
  ]
},
{
  word:"ねぶ", meaning:"おとなびる / 年をとる",
  rarity:"N", atk:20, hp:113,
  reading:"ねぶ", hinshi:"動詞（バ行上二段活用）",
  detail:"実際の年齢より大人びているさまが核心。幼い子が実年齢を超えた落ち着きや成熟を見せる状態に使われる。「年ぶ（ねぶ）」が語源。",
  example:"ねびまさりたまふけはひして。",
  exampleMeaning:"おとなびていらっしゃる様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"おとなびる", choices:["おとなびる","子供っぽくなる","幼くなる","あどけなくなる","無邪気になる","未熟になる"]},
    {correct:"年をとる",   choices:["年をとる","若返る","若々しくなる","みずみずしくなる","年齢を重ねずにいる","若さを保つ"]},
  ]
},
{
  word:"およすく", meaning:"成長する / おとなびる / 地味にする",
  rarity:"N", atk:21, hp:116,
  reading:"およすく", hinshi:"動詞（カ行四段活用）",
  detail:"「老ゆ」から変化してできた語。「およずく」「およすぐ」とも書く。子供が大人へと成長する過程、または派手な状態から落ち着いた状態へと変化することが核心。",
  example:"およすきたる御けはひにて。",
  exampleMeaning:"成長された（おとなびた）ご様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"成長する",   choices:["成長する","退化する","衰える","幼くなる","未熟になる","縮んでいく"]},
    {correct:"おとなびる", choices:["おとなびる","子供っぽくなる","幼稚になる","あどけなくなる","無邪気になる","未熟になる"]},
    {correct:"地味にする", choices:["地味にする","華やかに着飾る","豪華になる","盛装する","艶やかになる","目立つようになる"]},
  ]
},
{
  word:"やる", meaning:"送る / 行かせる / 導き入れる / （心を）晴らす / 〜しきる",
  rarity:"SR", atk:45, hp:183,
  reading:"やる", hinshi:"動詞（ラ行四段活用）",
  detail:"「遣る」と書く。送るはもちろん、導き入れる・心を晴らす・〜しきるの意味にも注意。補助動詞で「〜しきる・〜してしまう」の意味になる用法が重要。",
  example:"文をやりたまふ。",
  exampleMeaning:"手紙をお送りになる。",
  source:"源氏物語",
  quizzes:[
    {correct:"送る",        choices:["送る","受け取る","手元に置く","引き留める","持ち帰る","戻す"]},
    {correct:"行かせる",    choices:["行かせる","引き止める","連れ戻す","足止めする","帰らせない","近づけない"]},
    {correct:"導き入れる",  choices:["導き入れる","追い払う","締め出す","遠ざける","拒む","入れずにおく"]},
    {correct:"（心を）晴らす", choices:["（心を）晴らす","悲しみに沈む","塞ぎ込む","鬱々とする","思い悩む","嘆き続ける"]},
    {correct:"〜しきる",    choices:["〜しきる","〜しかねる","〜しそびれる","途中でやめる","〜しきれない","〜し始める"]},
  ]
},
{
  word:"おこす", meaning:"よこす / （こちらへ）送ってくる / こちらへ〜する",
  rarity:"N", atk:22, hp:123,
  reading:"おこす", hinshi:"動詞（サ行四段活用）",
  detail:"「遣す」と書く。こちらへ向かってくる動作を表すのが核心。「やる（遣る）」の対義的な語で、話し手のいる方向への動きを示す。",
  example:"文をおこしたまへり。",
  exampleMeaning:"手紙を送ってくださった。",
  source:"源氏物語",
  quizzes:[
    {correct:"よこす",             choices:["よこす","突き返す","受け取らない","突き放す","拒絶する","送り返す"]},
    {correct:"（こちらへ）送ってくる", choices:["（こちらへ）送ってくる","向こうへ送り出す","遠ざける","持ち去る","引き上げる","遠くへ届ける"]},
    {correct:"こちらへ〜する",     choices:["こちらへ〜する","向こうへ〜する","遠くへ〜する","去っていく","立ち去りながら〜する","背を向けて〜する"]},
  ]
},
{
  word:"はかなし", meaning:"頼りない / ちょっとした",
  rarity:"N", atk:20, hp:114,
  reading:"はかなし", hinshi:"形容詞（ク活用）",
  detail:"心細く頼りない気持ちが核心。「はか（仕事の進み具合・見通し）」がない状態から、頼りなくはかないさまを表す。軽微で取るに足らないものを指す場合もある。",
  example:"はかなき夢を見てけり。",
  exampleMeaning:"頼りないはかない夢を見たことよ。",
  source:"古今和歌集",
  quizzes:[
    {correct:"頼りない",     choices:["頼りない","頼もしい","心強い","揺るぎない","安心できる","たのもしい"]},
    {correct:"ちょっとした", choices:["ちょっとした","重大な","深刻な","重々しい","大げさな","重要な"]},
  ]
},
{
  word:"はかばかし", meaning:"はっきりしている / しっかりしている",
  rarity:"N", atk:21, hp:117,
  reading:"はかばかし", hinshi:"形容詞（シク活用）",
  detail:"「はか（仕事の進み具合）」を重ねた言葉。物事がきちんと進んでいる・意志や思考がしっかりしているさまが核心。多くは否定形「はかばかしくない」で使われる。",
  example:"はかばかしく御返りもなし。",
  exampleMeaning:"はっきりとしたお返事もない。",
  source:"源氏物語",
  quizzes:[
    {correct:"はっきりしている",   choices:["はっきりしている","曖昧だ","ぼんやりしている","あやふやだ","不明瞭だ","うやむやだ"]},
    {correct:"しっかりしている",   choices:["しっかりしている","頼りない","ふらふらしている","気弱だ","意志が弱い","うろたえる"]},
  ]
},
{
  word:"いとほし", meaning:"かわいそうだ / かわいい",
  rarity:"R", atk:27, hp:139,
  reading:"いとほし", hinshi:"形容詞（シク活用）",
  detail:"他人に対する同情・憐れみの気持ちが核心。かわいそうに思う気持ちと、いとおしくかわいいと思う気持ちの両方を表す。「いとをし」とも書く。",
  example:"いとほしと思ひて、助けたり。",
  exampleMeaning:"かわいそうと思って、助けた。",
  source:"今昔物語集",
  quizzes:[
    {correct:"かわいそうだ", choices:["かわいそうだ","羨ましい","誇らしい","頼もしい","ありがたい","嬉しい"]},
    {correct:"かわいい",     choices:["かわいい","憎らしい","疎ましい","うとましい","煩わしい","目障りだ"]},
  ]
},
{
  word:"らうたし", meaning:"かわいらしい",
  rarity:"N", atk:19, hp:111,
  reading:"らうたし", hinshi:"形容詞（ク活用）",
  detail:"「労（らう）＋甚（いた）し」からいたわりたいほどかわいいの意。幼い子や愛らしい人に向けられる優しい愛情が核心。",
  example:"らうたき稚児の、うつくしげなる。",
  exampleMeaning:"かわいらしい幼子の、愛らしい様子。",
  source:"源氏物語",
  quizzes:[
    {correct:"かわいらしい", choices:["かわいらしい","憎らしい","疎ましい","うとましい","煩わしい","目障りだ"]},
  ]
},
{
  word:"かしこし", meaning:"恐れ多い / 高貴だ",
  rarity:"R", atk:30, hp:147,
  reading:"かしこし", hinshi:"形容詞（ク活用）",
  detail:"自然の霊力や権力者の威光を恐れ敬う意味が核心。「畏し」と書き、崇高なものへの畏敬の念と、それゆえの高貴さを表す。",
  example:"かしこき御前にさぶらひて。",
  exampleMeaning:"恐れ多い御前にお仕えして。",
  source:"枕草子",
  quizzes:[
    {correct:"恐れ多い", choices:["恐れ多い","気安い","親しみやすい","遠慮がない","気兼ねしない","臆せず向き合える"]},
    {correct:"高貴だ",   choices:["高貴だ","卑しい","身分が低い","取るに足らない","みすぼらしい","粗末だ"]},
  ]
},
{
  word:"かたじけなし", meaning:"恐れ多い / 恥ずかしい",
  rarity:"R", atk:29, hp:144,
  reading:"かたじけなし", hinshi:"形容詞（ク活用）",
  detail:"上位者に対して下位の者が感じる気持ちが核心。身に余るご厚意への恐れ多さと、自分の至らなさへの恥ずかしさの両方を表す。",
  example:"かたじけなき御心ざしのほどを。",
  exampleMeaning:"恐れ多いお気持ちの程を。",
  source:"源氏物語",
  quizzes:[
    {correct:"恐れ多い",   choices:["恐れ多い","気安い","親しみやすい","遠慮がない","気兼ねしない","臆せず向き合える"]},
    {correct:"恥ずかしい", choices:["恥ずかしい","誇らしい","堂々としている","得意げだ","自慢したい","胸を張りたい"]},
  ]
},
{
  word:"こころづきなし", meaning:"気に食わない",
  rarity:"N", atk:22, hp:120,
  reading:"こころづきなし", hinshi:"形容詞（ク活用）",
  detail:"「自分の心に気づかない（無関心）」が原義から「気に食わない・気が向かない」の意味に。相手の行為が自分の好みや期待に合わない不満の感情が核心。",
  example:"こころづきなき事ありて。",
  exampleMeaning:"気に食わないことがあって。",
  source:"枕草子",
  quizzes:[
    {correct:"気に食わない", choices:["気に食わない","気に入った","好ましい","心惹かれる","好きだ","気に入っている"]},
  ]
},
{
  word:"つきづきし", meaning:"似つかわしい",
  rarity:"N", atk:21, hp:118,
  reading:"つきづきし", hinshi:"形容詞（シク活用）",
  detail:"「付く＋付く」＝二つのことがぴったり付く、が原義。場所・人・状況にふさわしくよく似合っている状態が核心。",
  example:"つきづきしく、あはれに。",
  exampleMeaning:"似つかわしく、しみじみと。",
  source:"徒然草",
  quizzes:[
    {correct:"似つかわしい", choices:["似つかわしい","不釣り合いだ","場違いだ","似合わない","ちぐはぐだ","調和しない"]},
  ]
},
{
  word:"になし", meaning:"たぐいない",
  rarity:"N", atk:23, hp:126,
  reading:"になし", hinshi:"形容詞（ク活用）",
  detail:"「二＋無し」または「似＋無し」で二つとないという意。他に類を見ないほど優れた状態が核心。最上級の称賛を表す語。",
  example:"になき御有様かな。",
  exampleMeaning:"たぐいないご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"たぐいない", choices:["たぐいない","ありふれている","よく見かける","どこにでもある","平凡だ","当たり前だ"]},
  ]
},
{
  word:"またなし", meaning:"またとない",
  rarity:"N", atk:20, hp:113,
  reading:"またなし", hinshi:"形容詞（ク活用）",
  detail:"「又＋無し」＝またとないという意。二度と得られないほど貴重で優れた状態が核心。「になし」と同様に最上級の称賛を表す。",
  example:"またなき御心ざしかな。",
  exampleMeaning:"またとないお気持ちよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"またとない", choices:["またとない","ありふれている","何度もある","よく見かける","いくらでもある","どこにでもある"]},
  ]
},
{
  word:"あはれ（感動詞）", meaning:"ああ",
  rarity:"N", atk:18, hp:108,
  reading:"あはれ", hinshi:"感動詞",
  detail:"「ああしみじみと心にしみる」がキーワード。感動詞としての「ああ」が原義。そこから名詞・形容動詞へと意味が広がった。品詞によって訳が全く異なる重要語。",
  example:"あはれ、いみじき御事かな。",
  exampleMeaning:"ああ、なんと尊いことよ。",
  source:"源氏物語",
  quizzes:[
    {correct:"ああ", choices:["ああ","おや","まあ","そうか","なるほど","いやいや"]},
  ]
},
{
  word:"あはれ（名詞）", meaning:"しみじみとした情緒",
  rarity:"SR", atk:48, hp:188,
  reading:"あはれ", hinshi:"名詞",
  detail:"「ああしみじみと心にしみる」がキーワード。名詞としては深く心に染みる情緒・感動そのものを指す。「もののあはれ」は日本文学の根本的な美意識。",
  example:"もののあはれを知る人こそ。",
  exampleMeaning:"しみじみとした情緒を理解する人こそ。",
  source:"源氏物語",
  quizzes:[
    {correct:"しみじみとした情緒", choices:["しみじみとした情緒","激しい怒り","喜びの叫び","強い憎しみ","高ぶった興奮","荒々しい感情"]},
  ]
},
{
  word:"あはれなり", meaning:"しみじみと情緒深い / 心にしみて気の毒だ",
  rarity:"SR", atk:46, hp:186,
  reading:"あはれなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「ああしみじみと心にしみる」がキーワード。形容動詞として情緒的な美しさ・深みを称える場合と、相手への深い同情を表す場合がある。",
  example:"あはれなる御物語かな。",
  exampleMeaning:"しみじみと情緒深いお話よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"しみじみと情緒深い",   choices:["しみじみと情緒深い","無味乾燥だ","味気ない","感情がない","冷淡だ","無感動だ"]},
    {correct:"心にしみて気の毒だ",   choices:["心にしみて気の毒だ","羨ましい","誇らしい","頼もしい","晴れやかだ","嬉しい"]},
  ]
},
{
  word:"をかし", meaning:"興趣がある / 美しい / 風情がある",
  rarity:"SR", atk:44, hp:183,
  reading:"をかし", hinshi:"形容詞（シク活用）",
  detail:"興味・好感・称賛など前向きな評価の言葉が核心。清少納言が「枕草子」で多用した。知的な美しさや趣を感じる感覚を表す。現代語の「おかしい」とは異なる。",
  example:"春はあけぼの、をかし。",
  exampleMeaning:"春は夜明けが趣深い。",
  source:"枕草子",
  quizzes:[
    {correct:"興趣がある", choices:["興趣がある","退屈だ","つまらない","味気ない","面白みがない","無味乾燥だ"]},
    {correct:"美しい",     choices:["美しい","醜い","みすぼらしい","薄汚い","見苦しい","粗末だ"]},
    {correct:"風情がある", choices:["風情がある","趣がない","野暮ったい","無粋だ","無骨だ","味わいがない"]},
  ]
},
{
  word:"おもしろし", meaning:"趣がある / 興味深い",
  rarity:"R", atk:33, hp:156,
  reading:"おもしろし", hinshi:"形容詞（ク活用）",
  detail:"「面（おも）白し」＝目の前が明るく開ける感覚が原義。心が晴れ晴れするような趣が核心。現代語の「面白い（滑稽）」より格調高い美的感覚を表す。",
  example:"おもしろき御物語かな。",
  exampleMeaning:"興味深いお話よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"趣がある",   choices:["趣がある","趣がない","野暮ったい","無粋だ","味わいがない","風情がない"]},
    {correct:"興味深い",   choices:["興味深い","つまらない","退屈だ","面白みがない","無味乾燥だ","食指が動かない"]},
  ]
},
{
  word:"あへなし", meaning:"どうしようもない / 張り合いがない / あっけない",
  rarity:"R", atk:28, hp:141,
  reading:"あへなし", hinshi:"形容詞（ク活用）",
  detail:"「敢ふ＋無し」＝「しいて〜できない」が原義。予想外にあっさりしていて物足りない・どうしようもない閉塞感が核心。",
  example:"あへなくも、なりにけるかな。",
  exampleMeaning:"どうしようもなく、なってしまったことよ。",
  source:"源氏物語",
  quizzes:[
    {correct:"どうしようもない", choices:["どうしようもない","なんとかなる","打開できる","解決できる","選択の余地がある","うまくいく"]},
    {correct:"張り合いがない",   choices:["張り合いがない","やりがいがある","充実している","手応えがある","熱が入る","力が入る"]},
    {correct:"あっけない",       choices:["あっけない","感動的だ","劇的だ","印象深い","見応えがある","重厚だ"]},
  ]
},
{
  word:"あいなし", meaning:"おもしろくない / ただもう",
  rarity:"N", atk:20, hp:114,
  reading:"あいなし", hinshi:"形容詞（ク活用）",
  detail:"筋違いで不都合なことは面白くないもの。「合ひ無し」＝道理に合わないから、おもしろくないという意味に。副詞的に「ただもう」の意でも使われる。",
  example:"あいなく心ときめきするかな。",
  exampleMeaning:"わけもなくただもうどきどきすることよ。",
  source:"源氏物語",
  quizzes:[
    {correct:"おもしろくない", choices:["おもしろくない","興趣がある","面白い","楽しい","夢中になれる","心惹かれる"]},
    {correct:"ただもう",       choices:["ただもう","全く〜ない","少しも〜ない","まったく","そもそも","いっこうに"]},
  ]
},
{
  word:"よろし", meaning:"適当だ / まあまあだ",
  rarity:"N", atk:18, hp:109,
  reading:"よろし", hinshi:"形容詞（ク活用）",
  detail:"まあまあ普通だといった感じ。「よし（良し）」より程度が低く、「わろし（悪し）」より程度が高い中間的な評価語。",
  example:"よろしき人の。",
  exampleMeaning:"まあまあの身分の人が。",
  source:"枕草子",
  quizzes:[
    {correct:"適当だ",   choices:["適当だ","最高だ","すばらしい","申し分ない","完璧だ","誰もが認める"]},
    {correct:"まあまあだ", choices:["まあまあだ","最低だ","ひどい","取るに足らない","全くだめだ","論外だ"]},
  ]
},
{
  word:"わろし", meaning:"よくない / みっともない / へただ / 貧しい",
  rarity:"R", atk:27, hp:138,
  reading:"わろし", hinshi:"形容詞（ク活用）",
  detail:"相対的によくないという意味を表す。「あし（悪し）」より程度が軽く、比較的マイルドな否定評価。外見・技量・財力など幅広く使われる。",
  example:"わろき衣出で来て。",
  exampleMeaning:"粗末な衣が出てきて。",
  source:"枕草子",
  quizzes:[
    {correct:"よくない",     choices:["よくない","申し分ない","すばらしい","完璧だ","文句なし","理想的だ"]},
    {correct:"みっともない", choices:["みっともない","堂々としている","立派だ","誇らしい","見事だ","威厳がある"]},
    {correct:"へただ",       choices:["へただ","腕がある","上手だ","熟練している","達者だ","さすがだ"]},
    {correct:"貧しい",       choices:["貧しい","裕福だ","豊かだ","余裕がある","満ち足りている","贅沢だ"]},
  ]
},
{
  word:"あし", meaning:"悪い / へただ",
  rarity:"N", atk:21, hp:116,
  reading:"あし", hinshi:"形容詞（ク活用）",
  detail:"絶対的・本質的に悪い状態をいう。「わろし」より程度が強く、本質的な悪さ・拙さを表す。外見・性質・技術など幅広く使われる最重要形容詞。",
  example:"心あしき人の。",
  exampleMeaning:"心根の悪い人が。",
  source:"枕草子",
  quizzes:[
    {correct:"悪い",   choices:["悪い","申し分ない","すばらしい","完璧だ","理想的だ","文句なし"]},
    {correct:"へただ", choices:["へただ","腕がある","上手だ","熟練している","達者だ","さすがだ"]},
  ]
},
{
  word:"はしたなし", meaning:"間が悪い / 中途半端だ / 無遠慮だ",
  rarity:"R", atk:31, hp:149,
  reading:"はしたなし", hinshi:"形容詞（ク活用）",
  detail:"「端（はした）なり」＝中途半端できまりが悪いが語源。場の雰囲気を壊すような気まずさや、デリカシーのない振る舞いを表す。",
  example:"はしたなき目を見ることかな。",
  exampleMeaning:"間の悪い目にあうことよ。",
  source:"枕草子",
  quizzes:[
    {correct:"間が悪い",   choices:["間が悪い","タイミングが良い","絶好の機会だ","好都合だ","うまい具合だ","ちょうどよい"]},
    {correct:"中途半端だ", choices:["中途半端だ","きっぱりしている","徹底している","やり通す","完全だ","申し分ない"]},
    {correct:"無遠慮だ",   choices:["無遠慮だ","礼儀正しい","慎み深い","遠慮がある","気を遣う","控えめだ"]},
  ]
},
{
  word:"なかなかなり", meaning:"中途半端だ / どっちつかずだ / かえって",
  rarity:"R", atk:29, hp:145,
  reading:"なかなかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"中途半端ならかえってしない方がいい、という文脈で使われる。副詞「なかなか」は「かえって」の意で、期待に反した結果を表す。",
  example:"なかなか見ぬよりも。",
  exampleMeaning:"かえって見ないよりも（悪い）。",
  source:"源氏物語",
  quizzes:[
    {correct:"中途半端だ",     choices:["中途半端だ","きっぱりしている","徹底している","完全だ","申し分ない","やり通す"]},
    {correct:"どっちつかずだ", choices:["どっちつかずだ","はっきりしている","明確だ","決断力がある","迷いがない","筋が通っている"]},
    {correct:"かえって",       choices:["かえって","やはり","そのまま","もちろん","当然","やっぱり"]},
  ]
},
{
  word:"おぼろけなり", meaning:"並一通りだ / 並たいていでない",
  rarity:"R", atk:26, hp:136,
  reading:"おぼろけなり", hinshi:"形容動詞（ナリ活用）",
  detail:"ぼんやり特徴のない普通の様子。「おぼろげなり」とも書く。「おぼろけの〜」は「並一通りの〜」、打消を伴うと「並たいていでない」の意になる。",
  example:"おぼろけならぬ御心ざしかな。",
  exampleMeaning:"並たいていでないお気持ちよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"並一通りだ",     choices:["並一通りだ","並外れている","際立っている","群を抜く","抜きん出ている","格別だ"]},
    {correct:"並たいていでない", choices:["並たいていでない","ごく普通だ","ありふれている","どこにでもある","平凡だ","目立たない"]},
  ]
},
{
  word:"なべて", meaning:"一般に / 一面に / 普通に",
  rarity:"N", atk:19, hp:111,
  reading:"なべて", hinshi:"副詞",
  detail:"「並んで」が原義。物事が一様に並ぶことから、一般的に・全体にわたってという意味へ発展した。「なべて世の〜」のような用例が多い。",
  example:"なべて世のはかなさを。",
  exampleMeaning:"一般に世の無常さを。",
  source:"古今和歌集",
  quizzes:[
    {correct:"一般に", choices:["一般に","特別に","例外的に","ひときわ","際立って","とりわけ"]},
    {correct:"一面に", choices:["一面に","一点だけ","ところどころ","まばらに","部分的に","ちらほら"]},
    {correct:"普通に", choices:["普通に","格別に","並外れて","特段に","抜きん出て","ひときわ"]},
  ]
},
{
  word:"あてなり", meaning:"身分が高い / 上品だ",
  rarity:"R", atk:32, hp:152,
  reading:"あてなり", hinshi:"形容動詞（ナリ活用）",
  detail:"一級品の高貴さ・上品さを言う語。「貴（あて）なり」と書き、生まれながらの気品や高貴さが核心。「やむごとなし」に次ぐ高い評価語。",
  example:"あてにをかしき御有様かな。",
  exampleMeaning:"高貴で趣ある御様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"身分が高い", choices:["身分が高い","卑しい","身分が低い","出自が悪い","家柄が貧しい","由緒がない"]},
    {correct:"上品だ",     choices:["上品だ","下品だ","がさつだ","粗野だ","無骨だ","品がない"]},
  ]
},
{
  word:"いうなり", meaning:"優美だ / 優雅だ / 上品だ / 上手だ",
  rarity:"R", atk:34, hp:158,
  reading:"いうなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「言う」ではなく「優（いう）美・優雅の優（いう）」と覚える。容姿・振る舞い・技術など幅広く優れていることを表す上品な称賛語。",
  example:"いうなる御有様かな。",
  exampleMeaning:"優美なご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"優美だ", choices:["優美だ","野暮ったい","無骨だ","粗野だ","がさつだ","洗練されていない"]},
    {correct:"優雅だ", choices:["優雅だ","下品だ","品がない","無粋だ","だらしない","無骨だ"]},
    {correct:"上品だ", choices:["上品だ","卑しい","粗末だ","品がない","みすぼらしい","がさつだ"]},
    {correct:"上手だ", choices:["上手だ","へただ","不器用だ","未熟だ","拙い","腕がない"]},
  ]
},
{
  word:"えんなり", meaning:"優美だ / あでやかで美しい / 色っぽい",
  rarity:"R", atk:33, hp:155,
  reading:"えんなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「艶」から変化した語。あでやかで妖艶な優美さが核心。単なる美しさより官能的・魅惑的なニュアンスを含む。",
  example:"えんにをかしき御有様かな。",
  exampleMeaning:"あでやかで趣あるご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"優美だ",         choices:["優美だ","野暮ったい","無骨だ","粗野だ","がさつだ","洗練されていない"]},
    {correct:"あでやかで美しい", choices:["あでやかで美しい","地味だ","くすんでいる","色あせた","派手さがない","枯れている"]},
    {correct:"色っぽい",       choices:["色っぽい","無骨だ","色気がない","地味だ","朴訥だ","飾り気がない"]},
  ]
},
{
  word:"あらはなり", meaning:"丸見えだ / 無遠慮だ / はっきりしている",
  rarity:"N", atk:22, hp:121,
  reading:"あらはなり", hinshi:"形容動詞（ナリ活用）",
  detail:"はっきりと丸見えの状態が核心。隠れているべきものが露わになる視覚的な意味から、無遠慮な言動・明確な状態まで幅広く使われる。",
  example:"あらはなる御有様にて。",
  exampleMeaning:"丸見えなご様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"丸見えだ",       choices:["丸見えだ","隠れている","見えない","覆われている","秘められている","ひっそりしている"]},
    {correct:"無遠慮だ",       choices:["無遠慮だ","礼儀正しい","慎み深い","遠慮がある","控えめだ","気を遣う"]},
    {correct:"はっきりしている", choices:["はっきりしている","曖昧だ","ぼんやりしている","不明瞭だ","あやふやだ","うやむやだ"]},
  ]
},
{
  word:"みそかなり", meaning:"こっそり / ひそかだ",
  rarity:"N", atk:20, hp:115,
  reading:"みそかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「密」の字を当てる。こっそりひそかな様が核心。人目を避けて密かに行動する状態を表す。「みそかに」の形で副詞的にも使われる。",
  example:"みそかに文をやりたまふ。",
  exampleMeaning:"こっそりと手紙をお送りになる。",
  source:"源氏物語",
  quizzes:[
    {correct:"こっそり", choices:["こっそり","堂々と","公然と","大々的に","あからさまに","声高に"]},
    {correct:"ひそかだ", choices:["ひそかだ","公明正大だ","オープンだ","目立つ","大っぴらだ","公にしている"]},
  ]
},
{
  word:"まめなり", meaning:"忠実だ / まじめだ / 実用的だ",
  rarity:"N", atk:21, hp:118,
  reading:"まめなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「まめ（忠実・誠実）」の意味を持つ語。誠実でまじめな態度が核心。風流を解さない実直さという批判的なニュアンスで使われることもある。",
  example:"まめに、かたくなしき人。",
  exampleMeaning:"誠実で、不器用な人。",
  source:"源氏物語",
  quizzes:[
    {correct:"忠実だ",   choices:["忠実だ","不誠実だ","裏切り者だ","不真面目だ","いい加減だ","ずるい"]},
    {correct:"まじめだ", choices:["まじめだ","不真面目だ","ふざけている","軽率だ","いい加減だ","怠惰だ"]},
    {correct:"実用的だ", choices:["実用的だ","無駄だ","役に立たない","飾りだけだ","無益だ","実がない"]},
  ]
},
{
  word:"あだなり", meaning:"浮気だ / はかない / むだだ / つまらない",
  rarity:"R", atk:28, hp:141,
  reading:"あだなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「あだ（表面だけで実がないこと）」が核心。誠実さのない浮ついた恋愛から、内容のない空虚なものまで幅広く表す。",
  example:"あだなる御心にて。",
  exampleMeaning:"浮気なお気持ちで。",
  source:"源氏物語",
  quizzes:[
    {correct:"浮気だ",   choices:["浮気だ","誠実だ","一途だ","真心がある","心変わりしない","貞節だ"]},
    {correct:"はかない", choices:["はかない","永遠だ","長続きする","確かだ","揺るぎない","永く続く"]},
    {correct:"むだだ",   choices:["むだだ","有益だ","価値がある","意義深い","役に立つ","実りがある"]},
    {correct:"つまらない", choices:["つまらない","胸躍る","刺激的だ","面白い","やりがいがある","わくわくする"]},
  ]
},
{
  word:"ことわり", meaning:"道理",
  rarity:"N", atk:22, hp:122,
  reading:"ことわり", hinshi:"名詞",
  detail:"「理（ことわり）」のこと。「断り」とは全くの別語。物事の道筋・正しい理由が核心。「ことわりなり（もっともだ）」は形容動詞の用法。",
  example:"ことわりや、かかることも。",
  exampleMeaning:"道理だよ、こんなことも（当然だ）。",
  source:"源氏物語",
  quizzes:[
    {correct:"道理", choices:["道理","言い訳","断り","拒絶","辞退","お断り"]},
  ]
},
{
  word:"ことわりなり", meaning:"もっともだ",
  rarity:"N", atk:20, hp:114,
  reading:"ことわりなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「理（ことわり）」から派生した形容動詞。「断りなり」とは全くの別語。道理にかなっている・当然だという判断を表す。",
  example:"ことわりなる御心かな。",
  exampleMeaning:"もっともなお気持ちよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"もっともだ", choices:["もっともだ","理不尽だ","筋が通らない","でたらめだ","言いがかりだ","不条理だ"]},
  ]
},
{
  word:"わりなし", meaning:"わけがわからない / 堪え難い / 苦しい / むやみに",
  rarity:"R", atk:35, hp:162,
  reading:"わりなし", hinshi:"形容詞（ク活用）",
  detail:"「理（ことわり）＋無し」＝道理に合わずつらいが語源。理屈を超えた困難・苦しさ・意味不明な状態を表す。副詞的に「むやみに」の意でも使われる。",
  example:"わりなく悲しく思ひけり。",
  exampleMeaning:"どうしようもなく悲しく思った。",
  source:"伊勢物語",
  quizzes:[
    {correct:"わけがわからない", choices:["わけがわからない","理にかなっている","筋が通っている","納得できる","もっともだ","当然だ"]},
    {correct:"堪え難い",         choices:["堪え難い","余裕がある","耐えやすい","大したことない","平気だ","楽勝だ"]},
    {correct:"苦しい",           choices:["苦しい","楽だ","心地よい","快適だ","余裕がある","のびのびしている"]},
    {correct:"むやみに",         choices:["むやみに","慎重に","計画的に","程よく","節度をもって","適度に"]},
  ]
},
{
  word:"よし（由）", meaning:"理由 / 由緒 / 〜こと",
  rarity:"R", atk:27, hp:139,
  reading:"よし", hinshi:"名詞",
  detail:"「ゆゑ」よりやや劣る由緒や趣。物事の理由・いわれ・内容を表す多義語。「〜こと」の意では「やう」と同様の用法を持つ。",
  example:"かかるよしを申して。",
  exampleMeaning:"こういう理由を申し上げて。",
  source:"竹取物語",
  quizzes:[
    {correct:"理由",   choices:["理由","結果","目的","手段","動機","原因"]},
    {correct:"由緒",   choices:["由緒","噂話","根拠のない話","でたらめ","いい加減な話","作り話"]},
    {correct:"〜こと", choices:["〜こと","〜もの","〜ところ","〜とき","〜ひと","〜ほど"]},
  ]
},
{
  word:"よしなし", meaning:"つまらない / 理由や根拠がない / 無関係だ",
  rarity:"N", atk:21, hp:117,
  reading:"よしなし", hinshi:"形容詞（ク活用）",
  detail:"「よし（由）＋無し」＝由を否定した意味。何の理由も根拠もなく、内容のないつまらないものを表す。",
  example:"よしなし事を思ひつづけて。",
  exampleMeaning:"つまらないことを考え続けて。",
  source:"枕草子",
  quizzes:[
    {correct:"つまらない",       choices:["つまらない","胸躍る","刺激的だ","面白い","わくわくする","やりがいがある"]},
    {correct:"理由や根拠がない", choices:["理由や根拠がない","道理がある","筋が通っている","もっともだ","根拠がある","理にかなっている"]},
    {correct:"無関係だ",         choices:["無関係だ","深い関わりがある","密接だ","切っても切れない","縁が深い","関係が濃い"]},
  ]
},
{
  word:"ゆゑ", meaning:"理由 / 由緒 / 〜ために / 風情 / 情緒 / 教養",
  rarity:"SSR", atk:66, hp:197,
  reading:"ゆゑ", hinshi:"名詞・接続助詞",
  detail:"「由（よし）」よりも先天的で一流の由緒・趣が核心。生まれながらの品格・教養・深い情緒を表す最上級の語。接続助詞として「〜ゆゑに（〜ために）」の用法も重要。",
  example:"いかなるゆゑにかあらむ。",
  exampleMeaning:"どのような理由があるのだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"理由",   choices:["理由","結果","手段","目的","動機","成り行き"]},
    {correct:"由緒",   choices:["由緒","噂話","根拠のない話","でたらめ","作り話","いい加減な話"]},
    {correct:"〜ために", choices:["〜ために","〜なのに","〜だけれど","〜ところで","〜としても","〜ながら"]},
    {correct:"風情",   choices:["風情","騒がしさ","無骨さ","無粋さ","荒々しさ","雑然さ"]},
    {correct:"情緒",   choices:["情緒","冷淡さ","無感動","無味乾燥","感情のなさ","味気なさ"]},
    {correct:"教養",   choices:["教養","無学","無知","学なし","野蛮さ","粗野さ"]},
  ]
},
{
  word:"こと（言）", meaning:"言葉",
  rarity:"N", atk:17, hp:106,
  reading:"こと", hinshi:"名詞",
  detail:"「言」と書けば言葉、「事」と書けばわけ・事柄。どちらかを文脈で見分ける必要がある。「ことの葉（言の葉）」は和歌・言葉の雅称。",
  example:"ことも聞こえず。",
  exampleMeaning:"言葉も申し上げられない。",
  source:"源氏物語",
  quizzes:[
    {correct:"言葉", choices:["言葉","身振り","表情","沈黙","目配せ","態度"]},
  ]
},
{
  word:"こと（事）", meaning:"わけ / 事柄",
  rarity:"N", atk:18, hp:108,
  reading:"こと", hinshi:"名詞",
  detail:"「事」と書けばわけ・事柄、「言」と書けば言葉。「こと」は多義語で文脈での見分けが重要。「ことなれば（わけだから）」のような用法が多い。",
  example:"かかることのあるかな。",
  exampleMeaning:"こんな事柄があることよ。",
  source:"竹取物語",
  quizzes:[
    {correct:"わけ",  choices:["わけ","結果","手段","目的","動機","成り行き"]},
    {correct:"事柄",  choices:["事柄","人物","場所","時間","道具","建物"]},
  ]
},
{
  word:"ことなり", meaning:"他と違っている / 特に優れている",
  rarity:"N", atk:22, hp:120,
  reading:"ことなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「異なり」で他と違っている様を表す。単に違うだけでなく、突出して優れているという称賛の意味でも使われる。",
  example:"ことなる御有様かな。",
  exampleMeaning:"特に優れたご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"他と違っている", choices:["他と違っている","皆と同じだ","ありきたりだ","平凡だ","どこにでもある","変わり映えしない"]},
    {correct:"特に優れている", choices:["特に優れている","取るに足らない","凡庸だ","並みだ","目立たない","ごく普通だ"]},
  ]
},
{
  word:"ひがこと", meaning:"間違い / 悪事",
  rarity:"N", atk:19, hp:112,
  reading:"ひがこと", hinshi:"名詞",
  detail:"「ひが（間違い・ゆがみ）」が核心。「ひがごと」とも書く。道理に外れた誤りや、倫理的に悪い行いを表す。",
  example:"ひがこと申すな。",
  exampleMeaning:"間違ったことを申し上げるな。",
  source:"源氏物語",
  quizzes:[
    {correct:"間違い", choices:["間違い","正しいこと","真実","道理にかなうこと","模範","正論"]},
    {correct:"悪事",   choices:["悪事","善行","美談","徳のある行い","誉れ高い行為","立派なこと"]},
  ]
},
{
  word:"ひがひがし", meaning:"ひねくれている / 無風流だ",
  rarity:"N", atk:20, hp:115,
  reading:"ひがひがし", hinshi:"形容詞（シク活用）",
  detail:"「ひが（普通でない）」の意味を重ねてできた語。素直でなくひねくれた態度や、風雅を解しない無粋な様子が核心。",
  example:"ひがひがしく、かたくなしき人。",
  exampleMeaning:"ひねくれて、頑固な人。",
  source:"源氏物語",
  quizzes:[
    {correct:"ひねくれている", choices:["ひねくれている","素直だ","率直だ","真っ直ぐだ","穏やかだ","柔和だ"]},
    {correct:"無風流だ",       choices:["無風流だ","風流だ","風雅だ","趣がある","情緒豊かだ","粋だ"]},
  ]
},
{
  word:"おもて", meaning:"面目 / 顔",
  rarity:"N", atk:21, hp:117,
  reading:"おもて", hinshi:"名詞",
  detail:"もともと顔の意味だが面目の方が重要。他者の目を意識した体裁・名誉・沽券が核心。「おもてを合わす（顔を合わせる）」などの用例も多い。",
  example:"おもてぶせなることかな。",
  exampleMeaning:"面目のつぶれることよ。",
  source:"枕草子",
  quizzes:[
    {correct:"面目", choices:["面目","恥","屈辱","不名誉","汚名","面目を失うこと"]},
    {correct:"顔",   choices:["顔","後ろ姿","横顔","影","足元","背中"]},
  ]
},
{
  word:"かたち", meaning:"容貌 / 形 / 美人",
  rarity:"N", atk:22, hp:120,
  reading:"かたち", hinshi:"名詞",
  detail:"容貌・形・美人と訳し分けが必要。「かたちよし（顔がよい）」は美人を指す。容貌以外では通常「形」とそのまま訳してよい。",
  example:"かたちいとをかしげなり。",
  exampleMeaning:"容貌がたいそう趣がある（美しい）。",
  source:"源氏物語",
  quizzes:[
    {correct:"容貌", choices:["容貌","声色","体格","身振り","足音","気配"]},
    {correct:"形",   choices:["形","色","音","匂い","重さ","温度"]},
    {correct:"美人", choices:["美人","醜い人","目立たない人","地味な人","平凡な人","印象の薄い人"]},
  ]
},
{
  word:"げに", meaning:"本当に / なるほど",
  rarity:"N", atk:19, hp:111,
  reading:"げに", hinshi:"副詞",
  detail:"「なるほど」と納得してうなずく意が核心。相手の言葉や状況に同意・共感する気持ちを表す。「げにげに」と重ねると強調になる。",
  example:"げに、をかしき御有様かな。",
  exampleMeaning:"本当に、趣あるご様子よなあ。",
  source:"枕草子",
  quizzes:[
    {correct:"本当に",   choices:["本当に","嘘だ","まさか","信じられない","とんでもない","ありえない"]},
    {correct:"なるほど", choices:["なるほど","そうではない","見当違いだ","全く違う","それはおかしい","納得できない"]},
  ]
},
{
  word:"けに", meaning:"一層はなはだしく / 普通と違って",
  rarity:"N", atk:20, hp:113,
  reading:"けに", hinshi:"副詞",
  detail:"「異（け）なり（普通と違う）」の意味の連用形が副詞化したもの。普通と異なる際立った状態や程度のはなはだしさを強調する。",
  example:"けに悲しく思ひけり。",
  exampleMeaning:"一層はなはだしく悲しく思った。",
  source:"伊勢物語",
  quizzes:[
    {correct:"一層はなはだしく", choices:["一層はなはだしく","少しも","わずかに","ほんのわずか","かすかに","ちょっとだけ"]},
    {correct:"普通と違って",     choices:["普通と違って","いつも通り","予想どおり","変わり映えなく","相変わらず","ありきたりに"]},
  ]
},
{
  word:"いさ", meaning:"さあ / さあ（どうだか）",
  rarity:"N", atk:17, hp:107,
  reading:"いさ", hinshi:"感動詞",
  detail:"あいまいにごまかす感動詞。「いさ、知らず」の形で「さあ、どうだか分からない」と曖昧に答える表現が典型的用法。",
  example:"いさ、知らず。",
  exampleMeaning:"さあ、分かりません。",
  source:"古今和歌集",
  quizzes:[
    {correct:"さあ",         choices:["さあ","もちろん","確かに","その通り","間違いなく","絶対に"]},
    {correct:"さあ（どうだか）", choices:["さあ（どうだか）","確かだ","はっきりしている","間違いない","疑いようがない","明らかだ"]},
  ]
},
{
  word:"いざ", meaning:"さあ",
  rarity:"N", atk:18, hp:109,
  reading:"いざ", hinshi:"感動詞",
  detail:"人を誘う時に発する語。「いさ（あいまいにごまかす）」と混同しないよう注意。積極的に誘いかける明確な意志が核心。",
  example:"いざ、給へ。",
  exampleMeaning:"さあ、いらっしゃい。",
  source:"土佐日記",
  quizzes:[
    {correct:"さあ", choices:["さあ","やめよう","待て","後にしよう","そのままで","いや"]},
  ]
},
{
  word:"いで", meaning:"さあ / いやもう",
  rarity:"N", atk:19, hp:110,
  reading:"いで", hinshi:"感動詞",
  detail:"勧誘・感嘆・決意を表す感動詞。「さあ（〜しよう）」と誘う場合と、「いやもう（なんとまあ）」と感嘆する場合がある。",
  example:"いで、あな幼や。",
  exampleMeaning:"いやもう、なんと幼いことよ。",
  source:"源氏物語",
  quizzes:[
    {correct:"さあ",   choices:["さあ","やめよう","待て","後にしよう","いや","そうではない"]},
    {correct:"いやもう", choices:["いやもう","なるほど","確かに","もっともだ","その通り","ごもっとも"]},
  ]
},
{
  word:"したたむ", meaning:"処理する / 取り締まる",
  rarity:"R", atk:28, hp:142,
  reading:"したたむ", hinshi:"動詞（マ行下二段活用）",
  detail:"準備から後始末まできちんと処理する意が核心。物事をきちんと整えて始末をつける・秩序立てて管理するという丁寧な処理の感覚が重要。",
  example:"したためて出でたまひぬ。",
  exampleMeaning:"（旅の準備を）処理してお出になった。",
  source:"源氏物語",
  quizzes:[
    {correct:"処理する",   choices:["処理する","放り出す","ほったらかす","後回しにする","うやむやにする","見て見ぬふりをする"]},
    {correct:"取り締まる", choices:["取り締まる","野放しにする","見逃す","目をつぶる","無法を許す","なすがままにする"]},
  ]
},
{
  word:"たばかる", meaning:"策をめぐらす / だます",
  rarity:"R", atk:32, hp:153,
  reading:"たばかる", hinshi:"動詞（ラ行四段活用）",
  detail:"現代語では「だます」の意味だが古典では「策をめぐらす」が重要。知恵を絞って計画を立てる積極的な行為が原義で、その延長線上にだますの意味がある。",
  example:"いかにたばかりて、会はむとすらむ。",
  exampleMeaning:"どう策をめぐらして、会おうとするだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"策をめぐらす", choices:["策をめぐらす","なりゆきに任せる","行き当たりばったりだ","無計画に進む","思慮なく動く","考えなしに行う"]},
    {correct:"だます",       choices:["だます","正直に打ち明ける","包み隠さず話す","誠実に伝える","真実を告げる","素直に言う"]},
  ]
},
{
  word:"ものす", meaning:"いる / ある / 行く / 来る / 書く / 言う / 〜（で）ある",
  rarity:"UR", atk:95, hp:230,
  skill:"critical",
  reading:"ものす", hinshi:"動詞（サ行変格活用）",
  detail:"英語の「DO」のような働きを持つ最重要多義動詞。文脈によって「いる・ある・行く・来る・書く・言う」など様々な動作を代替する。補助動詞では「〜（で）ある」の意。古典読解の鍵となる語。デッキに入れると20%の確率でクリティカル（ATK×2）が発動する。",
  example:"かかる所にものしたまふ。",
  exampleMeaning:"こんな所においでになる（来る・いる）。",
  source:"源氏物語",
  quizzes:[
    {correct:"いる",        choices:["いる","去る","いなくなる","立ち去る","遠ざかる","消える"]},
    {correct:"ある",        choices:["ある","ない","存在しない","消えてしまう","なくなる","見当たらない"]},
    {correct:"行く",        choices:["行く","留まる","帰る","引き返す","足止めする","動かない"]},
    {correct:"来る",        choices:["来る","去る","離れる","遠ざかる","立ち去る","引き上げる"]},
    {correct:"書く",        choices:["書く","消す","破る","読む","捨てる","燃やす"]},
    {correct:"言う",        choices:["言う","黙る","口を閉ざす","聞き流す","無視する","沈黙する"]},
    {correct:"〜（で）ある", choices:["〜（で）ある","〜ではない","〜でなくなる","〜を否定する","〜から外れる","〜に反する"]},
  ]
},
{
  word:"おぼゆ", meaning:"（自然と）思われる / 似る",
  rarity:"R", atk:28, hp:142,
  reading:"おぼゆ", hinshi:"動詞（ヤ行下二段活用）",
  detail:"思ふ＋ゆ（自然とそうなる）→おもはゆ→おもほゆ→おぼゆ。自分の意志とは関係なく自然と心に浮かぶ感覚が核心。「おぼす（お思いになる）」とは別語。",
  example:"昔のことのみおぼえて。",
  exampleMeaning:"昔のことばかり自然と思い出されて。",
  source:"源氏物語",
  quizzes:[
    {correct:"（自然と）思われる", choices:["（自然と）思われる","意図的に考える","無理やり思い込む","強制的に覚える","意識して記憶する","わざと気にする"]},
    {correct:"似る",               choices:["似る","異なる","かけ離れる","全く違う","似ても似つかない","正反対だ"]},
  ]
},
{
  word:"すまふ", meaning:"抵抗する / 辞退する / 住む",
  rarity:"R", atk:30, hp:148,
  reading:"すまふ", hinshi:"動詞（ハ行四段活用）",
  detail:"１抵抗するは「争ふ」、２辞退するは「辞ふ」、３住むは「住まふ」と漢字で区別する。文脈によって全く異なる意味になる重要多義語。",
  example:"かたくすまひたまひて。",
  exampleMeaning:"固く辞退なさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"抵抗する", choices:["抵抗する","従う","服従する","受け入れる","甘んじる","屈する"]},
    {correct:"辞退する", choices:["辞退する","引き受ける","快諾する","喜んで受ける","進んで行う","承諾する"]},
    {correct:"住む",     choices:["住む","旅立つ","去る","放浪する","流浪する","さすらう"]},
  ]
},
{
  word:"しのぶ", meaning:"我慢する / 懐かしく思う / 秘密にする",
  rarity:"R", atk:31, hp:150,
  reading:"しのぶ", hinshi:"動詞（バ行四段活用）",
  detail:"忍は我慢する、偲ぶは懐かしく思う、と漢字で意味を区別する。感情を内に秘める・過去を思う・隠すという核心が共通する語。",
  example:"袖をしほりてしのびける。",
  exampleMeaning:"袖を濡らして（涙を）こらえていた。",
  source:"古今和歌集",
  quizzes:[
    {correct:"我慢する",     choices:["我慢する","取り乱す","感情をあらわにする","怒りをぶつける","嘆き叫ぶ","堪えられない"]},
    {correct:"懐かしく思う", choices:["懐かしく思う","忘れ去る","思い出したくない","過去を振り返らない","記憶から消す","気にも留めない"]},
    {correct:"秘密にする",   choices:["秘密にする","公言する","吹聴する","言いふらす","隠さずに話す","明かしてしまう"]},
  ]
},
{
  word:"さる", meaning:"避ける / （その時に）なる / もっともな / そういう / しかるべき",
  rarity:"SR", atk:44, hp:181,
  reading:"さる", hinshi:"動詞・形容動詞・連体詞",
  detail:"１避るは「避る」、２去るは「去る」、３然るは「然る」と漢字から判断する。特に「さること（もっともなこと）」「さる人（しかるべき人）」の用法が重要。",
  example:"さることもあらむ。",
  exampleMeaning:"もっともなこともあるだろう。",
  source:"源氏物語",
  quizzes:[
    {correct:"避ける",       choices:["避ける","向かっていく","真正面から立ち向かう","あえて近づく","飛び込む","受け入れる"]},
    {correct:"（その時に）なる", choices:["（その時に）なる","永遠に続く","変わらずにいる","時が止まる","過去に戻る","いつまでも同じだ"]},
    {correct:"もっともな",   choices:["もっともな","理不尽だ","筋が通らない","でたらめだ","言いがかりだ","不条理だ"]},
    {correct:"そういう",     choices:["そういう","まったく違う","正反対の","あり得ない","とんでもない","見当違いの"]},
    {correct:"しかるべき",   choices:["しかるべき","不適切な","場違いな","ふさわしくない","分不相応な","あるまじき"]},
  ]
},
{
  word:"かる", meaning:"離れる / 疎遠になる / かすれる / 干上がる",
  rarity:"R", atk:29, hp:144,
  reading:"かる", hinshi:"動詞（ラ行四段／下二段活用）",
  detail:"１離れるは「離る」、２枯れるは「枯る」、３かすれるは「嗄る」、４干上がるは「涸る」と漢字で区別する。いずれも何かが失われていく状態が共通する核心。",
  example:"人のこころのかれにければ。",
  exampleMeaning:"人の心が離れてしまったので。",
  source:"古今和歌集",
  quizzes:[
    {correct:"離れる",     choices:["離れる","近づく","引き寄せられる","密接になる","くっつく","一体となる"]},
    {correct:"疎遠になる", choices:["疎遠になる","親しくなる","仲が深まる","絆が強まる","打ち解ける","心が通う"]},
    {correct:"かすれる",   choices:["かすれる","鮮明になる","はっきりする","くっきりと出る","声が通る","澄み渡る"]},
    {correct:"干上がる",   choices:["干上がる","潤う","満ちあふれる","みなぎる","水が湧く","豊かに流れる"]},
  ]
},
{
  word:"わたる", meaning:"通る / 行く / ある / 〜（で）ある / 通じる / 一面に〜する",
  rarity:"SR", atk:46, hp:184,
  reading:"わたる", hinshi:"動詞（ラ行四段活用）",
  detail:"現代語の「渡る」よりも意味が広い。空間的な移動から存在・継続・広がりまで幅広く使われる重要多義語。補助動詞では「一面に〜する・ずっと〜する」の意。",
  example:"都にわたりたまひぬ。",
  exampleMeaning:"都においでになった。",
  source:"源氏物語",
  quizzes:[
    {correct:"通る",       choices:["通る","止まる","行き止まりになる","遮られる","塞がれる","引き返す"]},
    {correct:"行く",       choices:["行く","留まる","動かずにいる","足止めされる","引き返す","戻る"]},
    {correct:"ある",       choices:["ある","ない","存在しない","消えてしまう","見当たらない","なくなる"]},
    {correct:"〜（で）ある",  choices:["〜（で）ある","〜ではない","〜でなくなる","〜から外れる","〜に反する","〜を否定する"]},
    {correct:"通じる",     choices:["通じる","遮断される","途切れる","伝わらない","閉ざされる","行き詰まる"]},
    {correct:"一面に〜する", choices:["一面に〜する","一点だけ〜する","ところどころ〜する","まばらに〜する","部分的に〜する","ちらほら〜する"]},
  ]
},
{
  word:"さかし", meaning:"賢い / 気丈だ / こざかしい",
  rarity:"R", atk:32, hp:153,
  reading:"さかし", hinshi:"形容詞（ク活用）",
  detail:"理性的に判断する様が核心。賢い・しっかりしているという褒め言葉にもなるが、「こざかしい」という批判的な意味でも使われる両義的な語。",
  example:"さかしき人も、愚かになる。",
  exampleMeaning:"賢い人も、愚かになる。",
  source:"徒然草",
  quizzes:[
    {correct:"賢い",       choices:["賢い","愚かだ","思慮がない","浅はかだ","無分別だ","考えが足りない"]},
    {correct:"気丈だ",     choices:["気丈だ","気弱だ","ひるむ","取り乱す","心細い","意気地がない"]},
    {correct:"こざかしい", choices:["こざかしい","素直だ","謙虚だ","控えめだ","おとなしい","従順だ"]},
  ]
},
{
  word:"いみじ", meaning:"ひどい / はなはだしい / すばらしい / たいそう",
  rarity:"SR", atk:45, hp:183,
  reading:"いみじ", hinshi:"形容詞（シク活用）",
  detail:"良い意味だけでなく、時に悪い意味も表す重要語。程度のはなはだしさが核心で、文脈によってプラス・マイナス両方に使われる。「いみじくも」は現代語でも使われる。",
  example:"いみじくをかしき御有様かな。",
  exampleMeaning:"たいそう趣深いご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"ひどい",       choices:["ひどい","申し分ない","すばらしい","完璧だ","見事だ","申し訳ない"]},
    {correct:"はなはだしい", choices:["はなはだしい","ほんの少し","わずかに","かすかに","ちょっとした","さほどでもない"]},
    {correct:"すばらしい",   choices:["すばらしい","つまらない","凡庸だ","取るに足らない","平凡だ","価値がない"]},
    {correct:"たいそう",     choices:["たいそう","少しも","全く","さほど","それほどでも","あまり"]},
  ]
},
{
  word:"いたし", meaning:"はなはだしい / ひどい / すばらしい / たいして",
  rarity:"R", atk:35, hp:162,
  reading:"いたし", hinshi:"形容詞（ク活用）",
  detail:"痛いほどにたいそう素晴らしい、が核心。「いみじ」と同様にプラス・マイナス両方の程度のはなはだしさを表す語。副詞「いたく」の形でも頻出。",
  example:"いたく泣きたまひて。",
  exampleMeaning:"ひどく泣かれて。",
  source:"源氏物語",
  quizzes:[
    {correct:"はなはだしい", choices:["はなはだしい","ほんの少し","わずかに","かすかに","ちょっとした","さほどでもない"]},
    {correct:"ひどい",       choices:["ひどい","申し分ない","すばらしい","完璧だ","見事だ","立派だ"]},
    {correct:"すばらしい",   choices:["すばらしい","つまらない","凡庸だ","取るに足らない","平凡だ","価値がない"]},
    {correct:"たいして",     choices:["たいして","全く","少しも","まったく","さほど","これっぽっちも"]},
  ]
},
{
  word:"しどけなし", meaning:"だらしない / 無造作だ",
  rarity:"N", atk:21, hp:118,
  reading:"しどけなし", hinshi:"形容詞（ク活用）",
  detail:"型にとらわれない様子が核心。きちんとしていない・くつろいだ様子を表す語で、批判的な意味と自然体でいいという肯定的なニュアンスの両方がある。",
  example:"しどけなき御姿にて。",
  exampleMeaning:"だらしない（くつろいだ）お姿で。",
  source:"源氏物語",
  quizzes:[
    {correct:"だらしない", choices:["だらしない","きちんとしている","きっちりした","整然としている","几帳面だ","きびきびしている"]},
    {correct:"無造作だ",   choices:["無造作だ","丁寧だ","念入りだ","慎重だ","入念だ","手を抜かない"]},
  ]
},
{
  word:"ゆゆし", meaning:"不吉だ / すばらしい / 恐れ多い",
  rarity:"R", atk:33, hp:156,
  reading:"ゆゆし", hinshi:"形容詞（シク活用）",
  detail:"神聖なものなどを恐れはばかるが原義。「いみ（忌み）」と同じく神聖・禁忌に関わる感覚が核心。恐れ多い崇高さから、素晴らしさや不吉さまで幅広く使われる。",
  example:"ゆゆしき御ありさまかな。",
  exampleMeaning:"恐れ多いほどすばらしいご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"不吉だ",   choices:["不吉だ","縁起が良い","めでたい","吉兆だ","幸先が良い","おめでたい"]},
    {correct:"すばらしい", choices:["すばらしい","つまらない","凡庸だ","取るに足らない","平凡だ","価値がない"]},
    {correct:"恐れ多い", choices:["恐れ多い","気安い","親しみやすい","遠慮がない","気兼ねしない","臆せず向き合える"]},
  ]
},
{
  word:"ゆかし", meaning:"見たい / 聞きたい / 知りたい / 心が惹かれる / 懐かしい",
  rarity:"SR", atk:43, hp:179,
  reading:"ゆかし", hinshi:"形容詞（シク活用）",
  detail:"「〜したい」と心が惹かれる気持ちが核心。好奇心・憧れ・慕情など前向きな欲求を幅広く表す語。現代語の「ゆかしい（上品で趣がある）」とは異なる。",
  example:"いとゆかしき御有様かな。",
  exampleMeaning:"たいそう心惹かれるご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"見たい",     choices:["見たい","目を背けたい","見たくない","直視できない","目に入れたくない","遠ざけたい"]},
    {correct:"聞きたい",   choices:["聞きたい","聞きたくない","耳を塞ぎたい","聞き流したい","無視したい","知りたくない"]},
    {correct:"知りたい",   choices:["知りたい","知りたくない","興味がない","どうでもよい","関心がない","気にも留めない"]},
    {correct:"心が惹かれる", choices:["心が惹かれる","心が離れる","興味が失せる","遠ざかりたい","関わりたくない","気が向かない"]},
    {correct:"懐かしい",   choices:["懐かしい","忘れたい","思い出したくない","過去を振り返らない","記憶から消したい","縁を切りたい"]},
  ]
},
{
  word:"すごし", meaning:"もの寂しい / ぞっとするほどすばらしい",
  rarity:"R", atk:30, hp:147,
  reading:"すごし", hinshi:"形容詞（ク活用）",
  detail:"見てぞっとするような状況が原義。もの寂しく荒涼とした景色や、背筋がぞっとするほどの美しさ・迫力を表す語。現代語の「すごい」の語源。",
  example:"すごき山の中に入りぬ。",
  exampleMeaning:"もの寂しい山の中に入った。",
  source:"源氏物語",
  quizzes:[
    {correct:"もの寂しい",         choices:["もの寂しい","賑やかだ","活気がある","楽しくてたまらない","心が弾む","生き生きしている"]},
    {correct:"ぞっとするほどすばらしい", choices:["ぞっとするほどすばらしい","平凡だ","ありきたりだ","取るに足らない","印象が薄い","目立たない"]},
  ]
},
{
  word:"めざまし", meaning:"心外だ / 気に食わない / すばらしい",
  rarity:"R", atk:29, hp:145,
  reading:"めざまし", hinshi:"形容詞（シク活用）",
  detail:"「目覚む」が変化してできた語。目が覚めるほどの驚きが核心で、予想外の事態への不満・驚き、または目を見張るほどの素晴らしさを表す。",
  example:"めざましき御ことかな。",
  exampleMeaning:"心外なことよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"心外だ",     choices:["心外だ","思った通りだ","予想どおりだ","当然だ","もっともだ","納得できる"]},
    {correct:"気に食わない", choices:["気に食わない","気に入った","好ましい","心惹かれる","好きだ","気に入っている"]},
    {correct:"すばらしい", choices:["すばらしい","つまらない","凡庸だ","取るに足らない","平凡だ","価値がない"]},
  ]
},
{
  word:"ところせし", meaning:"窮屈だ / いばっている / 大げさだ",
  rarity:"N", atk:22, hp:122,
  reading:"ところせし", hinshi:"形容詞（シク活用）",
  detail:"場所が狭いという原義から転じ窮屈だの意味に。身動きが取れないほど窮屈な様子から、いばった態度や大げさな振る舞いまで幅広く使われる。",
  example:"ところせき御いでたちにて。",
  exampleMeaning:"大げさな（いばった）お出かけの支度で。",
  source:"源氏物語",
  quizzes:[
    {correct:"窮屈だ",       choices:["窮屈だ","のびのびしている","余裕がある","広々としている","開放的だ","自由だ"]},
    {correct:"いばっている", choices:["いばっている","謙虚だ","控えめだ","慎み深い","腰が低い","へりくだっている"]},
    {correct:"大げさだ",     choices:["大げさだ","さりげない","控えめだ","ひっそりしている","地味だ","目立たない"]},
  ]
},
{
  word:"かどかどし", meaning:"才気がある / とげとげしい",
  rarity:"N", atk:23, hp:125,
  reading:"かどかどし", hinshi:"形容詞（シク活用）",
  detail:"才気があるは「才々し」、とげとげしいは「角々し」で本来別の語。どちらも鋭さ・尖りが核心で、知性の鋭さとしてプラスにも、人当たりの悪さとしてマイナスにも使われる。",
  example:"かどかどしく、をかしき人。",
  exampleMeaning:"才気があって、趣ある人。",
  source:"枕草子",
  quizzes:[
    {correct:"才気がある",   choices:["才気がある","鈍い","才能がない","凡庸だ","のろまだ","頭が回らない"]},
    {correct:"とげとげしい", choices:["とげとげしい","穏やかだ","柔和だ","温厚だ","丸みがある","角が取れている"]},
  ]
},
{
  word:"さうなし", meaning:"たぐいない / たやすい / あれこれ考えない",
  rarity:"R", atk:27, hp:139,
  reading:"さうなし", hinshi:"形容詞（ク活用）",
  detail:"たぐいなしは「双なし」、たやすいは「左右無し」と漢字で区別する。「双のないほど優れている」「左右（あれこれ）考えない気軽さ」という二つの核心を持つ。",
  example:"さうなき御有様かな。",
  exampleMeaning:"たぐいないご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"たぐいない",     choices:["たぐいない","ありふれている","よく見かける","どこにでもある","平凡だ","当たり前だ"]},
    {correct:"たやすい",       choices:["たやすい","難しい","困難だ","手間がかかる","骨が折れる","一筋縄ではいかない"]},
    {correct:"あれこれ考えない", choices:["あれこれ考えない","思い悩む","あれこれ迷う","くよくよする","熟考する","深く考え込む"]},
  ]
},
{
  word:"あなづらはし", meaning:"軽んじやすい / 気が置けない",
  rarity:"N", atk:20, hp:114,
  reading:"あなづらはし", hinshi:"形容詞（シク活用）",
  detail:"現代語の「あなどる（侮る）」から類推できる語。相手が軽く見やすい存在であること、または気を遣わずに付き合える親しみやすさを表す。",
  example:"あなづらはしと思ひて。",
  exampleMeaning:"軽んじてよいと思って。",
  source:"源氏物語",
  quizzes:[
    {correct:"軽んじやすい", choices:["軽んじやすい","敬いたくなる","尊重したい","大切にしたい","崇めたくなる","重んじたい"]},
    {correct:"気が置けない", choices:["気が置けない","遠慮がある","気を遣う","よそよそしい","打ち解けられない","他人行儀だ"]},
  ]
},
{
  word:"ねたし", meaning:"癪だ / ねたましくなるほどすばらしい",
  rarity:"N", atk:22, hp:120,
  reading:"ねたし", hinshi:"形容詞（ク活用）",
  detail:"相手に引け目を感じたり反感を持つ気持ちが核心。悔しい・腹立たしいというマイナスの感情と、羨ましいほど素晴らしいというプラスの評価の両方を持つ。",
  example:"ねたく、悔しく思ひけり。",
  exampleMeaning:"癪で、悔しく思った。",
  source:"竹取物語",
  quizzes:[
    {correct:"癪だ",                   choices:["癪だ","清々しい","晴れやかだ","すっきりする","胸が躍る","嬉しい"]},
    {correct:"ねたましくなるほどすばらしい", choices:["ねたましくなるほどすばらしい","取るに足らない","凡庸だ","つまらない","平凡だ","どこにでもある"]},
  ]
},
{
  word:"うし", meaning:"つらい / つれない",
  rarity:"N", atk:21, hp:117,
  reading:"うし", hinshi:"形容詞（ク活用）",
  detail:"自分がつらいと相手がつれないの両方の意味を持つ語。「憂し」と書き、心が沈む辛さと相手の冷たさへの恨みが核心。",
  example:"うき世には、かかることのみ。",
  exampleMeaning:"つらいこの世には、こんなことばかり。",
  source:"源氏物語",
  quizzes:[
    {correct:"つらい",   choices:["つらい","楽しい","心地よい","幸せだ","充実している","満ち足りている"]},
    {correct:"つれない", choices:["つれない","思いやりがある","情け深い","優しい","心温かい","親切だ"]},
  ]
},
{
  word:"こころもとなし", meaning:"気がかりだ / 待ち遠しい / ぼんやりしている",
  rarity:"R", atk:28, hp:141,
  reading:"こころもとなし", hinshi:"形容詞（ク活用）",
  detail:"心がむやみに急き立てられる→不安・待ち遠しいの意味に。心が落ち着かずにそわそわする状態と、物がはっきり見えないぼんやりとした状態の両方を表す。",
  example:"いとこころもとなく思ひたまへて。",
  exampleMeaning:"たいそう気がかりに思っておりまして。",
  source:"源氏物語",
  quizzes:[
    {correct:"気がかりだ",     choices:["気がかりだ","安心だ","気にならない","問題ない","心配いらない","のんきだ"]},
    {correct:"待ち遠しい",     choices:["待ち遠しい","待つのが苦でない","早く来てほしくない","興味がない","どうでもよい","急いでいない"]},
    {correct:"ぼんやりしている", choices:["ぼんやりしている","はっきりしている","明確だ","くっきりしている","鮮明だ","明白だ"]},
  ]
},
{
  word:"こまやかなり", meaning:"（色が）濃い / ねんごろだ / 親密だ / 上品だ",
  rarity:"R", atk:31, hp:150,
  reading:"こまやかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"きめ細かく細部にまで行き届いている様が核心。色の濃さ・感情の深さ・人間関係の親密さ・品の良さまで、細やかさ・密度の高さを表す語。",
  example:"こまやかなる御心ざしかな。",
  exampleMeaning:"念入りなお気持ちよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"（色が）濃い", choices:["（色が）濃い","色あせている","薄い","くすんでいる","淡い","色が飛んでいる"]},
    {correct:"ねんごろだ",   choices:["ねんごろだ","いい加減だ","おざなりだ","投げやりだ","手を抜く","大雑把だ"]},
    {correct:"親密だ",       choices:["親密だ","よそよそしい","疎遠だ","他人行儀だ","冷たい","打ち解けない"]},
    {correct:"上品だ",       choices:["上品だ","下品だ","がさつだ","粗野だ","無骨だ","品がない"]},
  ]
},
{
  word:"あながちなり", meaning:"一途だ / むやみだ / 無理だ / 必ずしも",
  rarity:"R", atk:29, hp:146,
  reading:"あながちなり", hinshi:"形容動詞（ナリ活用）",
  detail:"自分勝手に強引に何かをするが原義。一筋に突き進む一途さ・分別のないむやみな行動・道理に合わない無理さが核心。副詞では「必ずしも（〜でない）」の意。",
  example:"あながちにやみがたく思ひて。",
  exampleMeaning:"むやみに忘れられないと思って。",
  source:"源氏物語",
  quizzes:[
    {correct:"一途だ",   choices:["一途だ","気まぐれだ","移り気だ","優柔不断だ","ふらふらしている","定まらない"]},
    {correct:"むやみだ", choices:["むやみだ","慎重だ","計画的だ","節度がある","思慮深い","程よい"]},
    {correct:"無理だ",   choices:["無理だ","たやすい","造作もない","朝飯前だ","難なくできる","簡単だ"]},
    {correct:"必ずしも", choices:["必ずしも","絶対に","確実に","間違いなく","必ず","例外なく"]},
  ]
},
{
  word:"ねんごろなり", meaning:"一途だ / 丁寧だ / 念入りだ / 親密だ",
  rarity:"R", atk:32, hp:153,
  reading:"ねんごろなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「懇」の字を当てる。熱心で一途な様子が核心。誠実に丁寧に物事に向き合う態度、または人間関係の親密さを表す語。「こまやかなり」と意味が近い。",
  example:"ねんごろにあひ語らひて。",
  exampleMeaning:"親密に語り合って。",
  source:"伊勢物語",
  quizzes:[
    {correct:"一途だ",   choices:["一途だ","気まぐれだ","移り気だ","優柔不断だ","ふらふらしている","定まらない"]},
    {correct:"丁寧だ",   choices:["丁寧だ","いい加減だ","ぞんざいだ","おざなりだ","粗雑だ","手を抜く"]},
    {correct:"念入りだ", choices:["念入りだ","大雑把だ","おおざっぱだ","ざっくりしている","適当だ","手を抜く"]},
    {correct:"親密だ",   choices:["親密だ","よそよそしい","疎遠だ","他人行儀だ","冷たい","打ち解けない"]},
  ]
},
{
  word:"なほざりなり", meaning:"いい加減だ / 何気ない / あっさりしている",
  rarity:"N", atk:20, hp:113,
  reading:"なほざりなり", hinshi:"形容動詞（ナリ活用）",
  detail:"深く考えず、何気なく何かをする様子が核心。真剣味がなく軽い態度・わざとらしくない自然な様子・さっぱりした性格を表す語。",
  example:"なほざりにはあらで。",
  exampleMeaning:"いい加減ではなくて。",
  source:"源氏物語",
  quizzes:[
    {correct:"いい加減だ",   choices:["いい加減だ","誠実だ","真摯だ","丁寧だ","念入りだ","手を抜かない"]},
    {correct:"何気ない",     choices:["何気ない","わざとらしい","意図的だ","計算している","わざわざする","改まっている"]},
    {correct:"あっさりしている", choices:["あっさりしている","しつこい","執拗だ","くどい","粘り強い","諦めない"]},
  ]
},
{
  word:"うちつけなり", meaning:"とたんに / 突然だ / 露骨だ / ぶしつけだ",
  rarity:"R", atk:26, hp:136,
  reading:"うちつけなり", hinshi:"形容動詞（ナリ活用）",
  detail:"突然・軽率・ぶしつけがキーワード。何の予告も配慮もなく突然何かをする様子が核心。急に・遠慮なく・見え透いたという意味合いを持つ。",
  example:"うちつけに言ひ出でて。",
  exampleMeaning:"突然言い出して。",
  source:"枕草子",
  quizzes:[
    {correct:"とたんに", choices:["とたんに","じっくりと","少しずつ","徐々に","やがて","しばらくして"]},
    {correct:"突然だ",   choices:["突然だ","予め分かっていた","予告通りだ","想定内だ","計画的だ","段階を踏んだ"]},
    {correct:"露骨だ",   choices:["露骨だ","さりげない","控えめだ","奥ゆかしい","遠回しだ","婉曲だ"]},
    {correct:"ぶしつけだ", choices:["ぶしつけだ","礼儀正しい","慎み深い","遠慮がある","気を遣う","控えめだ"]},
  ]
},
{
  word:"すくよかなり", meaning:"（心身が）しっかりしている / 無愛想だ",
  rarity:"N", atk:21, hp:116,
  reading:"すくよかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"マイナスイメージの意味に注意。「すぐよかなり」とも書く。心身がしっかりしているというプラスの意味と、愛嬌がなく堅苦しいというマイナスの意味を持つ。",
  example:"すくよかにおはする人の。",
  exampleMeaning:"無愛想でいらっしゃる人が。",
  source:"源氏物語",
  quizzes:[
    {correct:"（心身が）しっかりしている", choices:["（心身が）しっかりしている","気弱だ","ひ弱だ","頼りない","意志が弱い","うろたえる"]},
    {correct:"無愛想だ", choices:["無愛想だ","愛嬌がある","愛想がよい","感じがいい","親しみやすい","にこやかだ"]},
  ]
},
{
  word:"おいらかなり", meaning:"おっとりしている / あっさりしている / 率直だ",
  rarity:"N", atk:19, hp:111,
  reading:"おいらかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"感情が穏やかでおっとりとしている様子が核心。温和でさっぱりした性格、飾らない率直さを表す。「おっとりしている」はプラスにも、「あっさりしている」はやや物足りないニュアンスにもなる。",
  example:"おいらかにのみおはして。",
  exampleMeaning:"おっとりとしていらっしゃって。",
  source:"源氏物語",
  quizzes:[
    {correct:"おっとりしている",   choices:["おっとりしている","せっかちだ","気が短い","落ち着きがない","あくせくしている","慌ただしい"]},
    {correct:"あっさりしている",   choices:["あっさりしている","しつこい","執拗だ","くどい","粘り強い","諦めない"]},
    {correct:"率直だ",             choices:["率直だ","回りくどい","婉曲だ","遠回しだ","隠しごとをする","本心を見せない"]},
  ]
},
{
  word:"かたくななり", meaning:"頑固だ / 情緒を解さない / 無骨だ",
  rarity:"N", atk:22, hp:120,
  reading:"かたくななり", hinshi:"形容動詞（ナリ活用）",
  detail:"頑固の「頑」の字は現代語でもかたくなと読む。一度決めたことを曲げない頑固さと、風雅を理解しない野暮な様子が核心。",
  example:"かたくなしく、心よからぬ人。",
  exampleMeaning:"頑固で、気立てのよくない人。",
  source:"源氏物語",
  quizzes:[
    {correct:"頑固だ",       choices:["頑固だ","柔軟だ","素直だ","従順だ","融通がきく","聞き分けがよい"]},
    {correct:"情緒を解さない", choices:["情緒を解さない","風流を解する","情趣がある","感受性が豊かだ","風雅だ","趣を理解する"]},
    {correct:"無骨だ",       choices:["無骨だ","洗練されている","優雅だ","上品だ","あか抜けている","品がある"]},
  ]
},
{
  word:"すずろなり", meaning:"むやみに / 思いがけない / いい加減だ",
  rarity:"N", atk:20, hp:113,
  reading:"すずろなり", hinshi:"形容動詞（ナリ活用）",
  detail:"何となく・わけもなくがキーワード。「そぞろなり」とも書く。これといった理由もなく何かが起こる・する様子が核心。予期せぬ出来事や無目的な行動を表す。",
  example:"すずろに涙おちて。",
  exampleMeaning:"わけもなく涙が落ちて。",
  source:"源氏物語",
  quizzes:[
    {correct:"むやみに",     choices:["むやみに","慎重に","計画的に","程よく","節度をもって","思慮深く"]},
    {correct:"思いがけない", choices:["思いがけない","予想通りだ","当然だ","想定内だ","もっともだ","驚くほどでもない"]},
    {correct:"いい加減だ",   choices:["いい加減だ","誠実だ","真摯だ","丁寧だ","念入りだ","手を抜かない"]},
  ]
},
{
  word:"たより", meaning:"よりどころ / 機会 / 具合",
  rarity:"N", atk:18, hp:108,
  reading:"たより", hinshi:"名詞",
  detail:"「頼みになるもの・よりどころ」が原義。頼れる存在・ちょうどよい機会・物事の具合や手がかりを表す多義語。現代語の「便り（手紙）」の意味もある。",
  example:"たよりあらば聞こえむとす。",
  exampleMeaning:"機会があれば申し上げようとする。",
  source:"源氏物語",
  quizzes:[
    {correct:"よりどころ", choices:["よりどころ","邪魔なもの","足かせ","障害","頼れないもの","重荷"]},
    {correct:"機会",       choices:["機会","障害","邪魔","失敗","躓き","妨げ"]},
    {correct:"具合",       choices:["具合","目的","理由","結果","動機","原因"]},
  ]
},
{
  word:"うたて・うたた", meaning:"ひどく / 嫌なことに / 情けなく / 見苦しく",
  rarity:"R", atk:27, hp:139,
  reading:"うたて・うたた", hinshi:"副詞",
  detail:"ますますひどく→見苦しく→嫌なことにという意味の流れで覚える。程度がひどくなる方向性と、そのことへの嫌悪・情けなさが核心。",
  example:"うたてあはれなることかな。",
  exampleMeaning:"嫌なことに、しみじみとしたことよ。",
  source:"源氏物語",
  quizzes:[
    {correct:"ひどく",     choices:["ひどく","わずかに","少しも","ほんの少し","かすかに","ちょっとだけ"]},
    {correct:"嫌なことに", choices:["嫌なことに","嬉しいことに","喜ばしいことに","めでたいことに","幸いなことに","ありがたいことに"]},
    {correct:"情けなく",   choices:["情けなく","誇らしく","堂々と","胸を張って","清々しく","晴れやかに"]},
    {correct:"見苦しく",   choices:["見苦しく","見事に","立派に","堂々と","美しく","華やかに"]},
  ]
},
{
  word:"おのづから", meaning:"自然と / たまたま",
  rarity:"N", atk:19, hp:112,
  reading:"おのづから", hinshi:"副詞",
  detail:"自然とそうなるの意味から「偶然たまたま」の意味に発展した語。意図せず自然に生じる状態と、偶然の一致を表す。「おのれでから（自分でから）」が語源。",
  example:"おのづから人の聞くことも。",
  exampleMeaning:"自然と人が聞くことも。",
  source:"枕草子",
  quizzes:[
    {correct:"自然と",   choices:["自然と","わざわざ","意図的に","故意に","無理やり","計算して"]},
    {correct:"たまたま", choices:["たまたま","必ず","いつも","常に","絶えず","例外なく"]},
  ]
},
{
  word:"いかで", meaning:"どのように〜か / どうして〜か、いや〜ない / 何とかして",
  rarity:"R", atk:28, hp:143,
  reading:"いかで", hinshi:"副詞",
  detail:"〜か、または〜か、いや〜と訳す。疑問・反語・願望の三用法がある重要副詞。「何とかして」は強い願望を表す用法で、「いかでか」の形をとることが多い。",
  example:"いかでかくしもおぼゆらむ。",
  exampleMeaning:"どうしてこのように思われるのだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"どのように〜か",        choices:["どのように〜か","なぜ〜ない","絶対に〜する","当然〜する","〜に違いない","必ず〜だ"]},
    {correct:"どうして〜か、いや〜ない", choices:["どうして〜か、いや〜ない","もちろん〜だ","当然〜する","間違いなく〜だ","必ず〜になる","確かに〜だ"]},
    {correct:"何とかして",            choices:["何とかして","どうせ〜ない","絶対に無理だ","到底できない","諦めるしかない","不可能だ"]},
  ]
},
{
  word:"いかが", meaning:"どのように〜か / どうして〜か、いや〜ない / どうだろうか",
  rarity:"R", atk:27, hp:140,
  reading:"いかが", hinshi:"副詞",
  detail:"〜か、または〜か、いや〜と訳す。反語ではいや〜を忘れないこと。「いかがはせむ（どうしようもない）」「いかがおぼす（どうお思いになりますか）」が典型的用例。",
  example:"いかがおぼすらむ。",
  exampleMeaning:"どうお思いになるだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"どのように〜か",           choices:["どのように〜か","絶対に〜する","当然〜する","〜に違いない","必ず〜だ","もちろん〜だ"]},
    {correct:"どうして〜か、いや〜ない",  choices:["どうして〜か、いや〜ない","もちろん〜だ","当然〜する","間違いなく〜だ","必ず〜になる","確かに〜だ"]},
    {correct:"どうだろうか",             choices:["どうだろうか","絶対にそうだ","間違いない","決まっている","疑いようがない","明らかだ"]},
  ]
},
{
  word:"など", meaning:"どうして〜か / どうして〜か、いや〜ない",
  rarity:"N", atk:17, hp:106,
  reading:"など", hinshi:"副詞",
  detail:"「何＋と」→「なにと」→「など」と変化した語。疑問と反語の訳し分けに注意。「などか〜ぬ（どうして〜しないのか）」「などか〜む（どうして〜しようか、いや〜しない）」が典型的用例。",
  example:"などかかるうき目を見るらむ。",
  exampleMeaning:"どうしてこんなつらい目にあうのだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"どうして〜か",        choices:["どうして〜か","もちろん〜だ","当然〜する","間違いなく〜だ","必ず〜になる","確かに〜だ"]},
    {correct:"どうして〜か、いや〜ない", choices:["どうして〜か、いや〜ない","絶対にそうだ","間違いない","決まっている","疑いようがない","そうに決まっている"]},
  ]
},
{
  word:"なでふ", meaning:"どうして〜か、いや〜ない / どれほどの〜か、いや〜ない / 何という",
  rarity:"R", atk:29, hp:144,
  reading:"なでふ", hinshi:"副詞・連体詞",
  detail:"読み方は「ナジョー」。疑問と反語の訳し分けに注意。「何でふ（なにというの意）」が変化した語で、強い疑問・反語・感嘆を表す。",
  example:"なでふことかは。",
  exampleMeaning:"どうしてそんなことがあるか（いや、ない）。",
  source:"源氏物語",
  quizzes:[
    {correct:"どうして〜か、いや〜ない",     choices:["どうして〜か、いや〜ない","もちろん〜だ","当然〜する","間違いなく〜だ","必ず〜になる","確かに〜だ"]},
    {correct:"どれほどの〜か、いや〜ない",   choices:["どれほどの〜か、いや〜ない","たいそう〜だ","非常に〜だ","とても〜だ","疑いなく〜だ","まさに〜だ"]},
    {correct:"何という",                     choices:["何という","どこの","いつの","誰の","どれほどの","いくつの"]},
  ]
},
{
  word:"おはす", meaning:"いらっしゃる / おいでになる / 〜（て）いらっしゃる",
  rarity:"SR", atk:43, hp:178,
  reading:"おはす", hinshi:"動詞（サ行変格活用）",
  detail:"「いらっしゃる」も「〜（て）いらっしゃる」もいらっしゃると訳せばOK。「あり・居り・行く・来」の尊敬語で、貴人の存在・動作を表す最重要尊敬語。",
  example:"いとをかしくおはします。",
  exampleMeaning:"たいそう趣ある（趣のある様子で）いらっしゃいます。",
  source:"枕草子",
  quizzes:[
    {correct:"いらっしゃる",       choices:["いらっしゃる","いらっしゃらない","おられない","おいでにならない","不在だ","立ち去る"]},
    {correct:"おいでになる",       choices:["おいでになる","去っていく","離れる","立ち去る","遠ざかる","いなくなる"]},
    {correct:"〜（て）いらっしゃる", choices:["〜（て）いらっしゃる","〜ていらっしゃらない","〜ておいでにならない","〜てはいけない","〜ていない","〜てしまった"]},
  ]
},
{
  word:"おほす", meaning:"おっしゃる / 命じる / 言いつける",
  rarity:"R", atk:30, hp:147,
  reading:"おほす", hinshi:"動詞（サ行四段活用）",
  detail:"命令する・命じるの意味からおっしゃるの意味へ発展した尊敬語。上位者が言葉を発する・指示を与える行為を表す。「おおせ（仰せ）」の形で名詞的にも使われる。",
  example:"かくなんおほせられける。",
  exampleMeaning:"このようにおっしゃった。",
  source:"源氏物語",
  quizzes:[
    {correct:"おっしゃる",   choices:["おっしゃる","黙る","口を閉ざす","沈黙する","言わない","口をつぐむ"]},
    {correct:"命じる",       choices:["命じる","従う","服従する","言いなりになる","指示を受ける","従い奉る"]},
    {correct:"言いつける",   choices:["言いつける","聞き流す","無視する","耳を貸さない","忘れる","放っておく"]},
  ]
},
{
  word:"きこしめす", meaning:"召し上がる / お治めになる",
  rarity:"R", atk:34, hp:159,
  reading:"きこしめす", hinshi:"動詞（サ行四段活用）",
  detail:"聞く＋す＋めす。聞く・食ふ・飲むの最高敬語。天皇など最上位の方の聴く・飲食する・統治するという行為を表す最高敬語の動詞。",
  example:"酒をきこしめして。",
  exampleMeaning:"お酒を召し上がって。",
  source:"源氏物語",
  quizzes:[
    {correct:"召し上がる",    choices:["召し上がる","粗末に扱う","捨てる","拒む","手をつけない","残す"]},
    {correct:"お治めになる",  choices:["お治めになる","乱す","荒らす","捨て置く","顧みない","無秩序にする"]},
  ]
},
{
  word:"めす", meaning:"お呼びになる / お取り寄せになる / 召し上がる / お召しになる / お乗りになる",
  rarity:"SR", atk:45, hp:182,
  reading:"めす", hinshi:"動詞（サ行四段活用）",
  detail:"お呼びになる・お取り寄せになるは呼ぶ・取り寄すの尊敬語、召し上がる・お召しになる・お乗りになるは食ふ・着る・乗るの尊敬語。「召す」一語で多様な動作を表す重要尊敬語。",
  example:"車めしよせて。",
  exampleMeaning:"車をお呼び寄せになって。",
  source:"源氏物語",
  quizzes:[
    {correct:"お呼びになる",     choices:["お呼びになる","黙って去る","無視する","追い払う","拒絶する","遠ざける"]},
    {correct:"お取り寄せになる", choices:["お取り寄せになる","お手放しになる","お捨てになる","お払いになる","お遠ざけになる","お見送りになる"]},
    {correct:"召し上がる",       choices:["召し上がる","粗末に扱う","捨てる","拒む","手をつけない","残す"]},
    {correct:"お召しになる",     choices:["お召しになる","お脱ぎになる","お捨てになる","裸でいらっしゃる","粗末に扱う","着替えをしない"]},
    {correct:"お乗りになる",     choices:["お乗りになる","お降りになる","歩いていらっしゃる","お避けになる","お乗りにならない","徒歩でいらっしゃる"]},
  ]
},
{
  word:"おぼす", meaning:"お思いになる",
  rarity:"N", atk:20, hp:114,
  reading:"おぼす", hinshi:"動詞（サ行四段活用）",
  detail:"思うの尊敬語。「おぼゆ（自然と思われる）」とは全くの別語。貴人が何かを考える・感じる・判断するという行為を表す。「おもほす」とも書く。",
  example:"いかにおぼすらむ。",
  exampleMeaning:"どのようにお思いになるだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"お思いになる", choices:["お思いになる","お忘れになる","気にも留めない","無関心でいらっしゃる","ご存知ない","おわかりにならない"]},
  ]
},
{
  word:"しろしめす", meaning:"ご存じである / お治めになる",
  rarity:"R", atk:31, hp:149,
  reading:"しろしめす", hinshi:"動詞（サ行四段活用）",
  detail:"知る・領（し）る（治める・領有する意）の尊敬語。知識としてご存知である場合と、国土を支配・統治なさる場合の二つの意味を持つ。",
  example:"この国のことをしろしめして。",
  exampleMeaning:"この国のことをお治めになって。",
  source:"竹取物語",
  quizzes:[
    {correct:"ご存じである",  choices:["ご存じである","ご存知でない","おわかりにならない","お気づきでない","ご承知でない","お知りにならない"]},
    {correct:"お治めになる",  choices:["お治めになる","お乱しになる","お荒らしになる","お捨て置きになる","お顧みにならない","ないがしろにされる"]},
  ]
},
{
  word:"おほとのごもる", meaning:"おやすみになる",
  rarity:"N", atk:19, hp:112,
  reading:"おほとのごもる", hinshi:"動詞（ラ行四段活用）",
  detail:"「大殿に籠る」＝寝るの尊敬語。天皇・貴人がお休みになる行為を表す最高敬語のひとつ。対義語は「おほとのごもりさます（お目覚めになる）」。",
  example:"おほとのごもりたまひて。",
  exampleMeaning:"おやすみになって。",
  source:"源氏物語",
  quizzes:[
    {correct:"おやすみになる", choices:["おやすみになる","お起きになる","お目覚めになる","お立ちになる","お出かけになる","お目を覚ましになる"]},
  ]
},
{
  word:"あそばす", meaning:"（楽器などを）演奏なさる / お詠みになる / お作りになる / （歌舞伎・狩猟などを）なさる / 〜あられる / 〜なさる",
  rarity:"SR", atk:47, hp:185,
  reading:"あそばす", hinshi:"動詞（サ行四段活用）",
  detail:"「あそぶ＋す」。現代語の遊ぶより意味が広い尊敬語。貴人が雅な遊び・芸術・創作などを行う行為全般を表す。補助動詞では「〜なさる」の意。",
  example:"琴をあそばしたまひて。",
  exampleMeaning:"琴を演奏なさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"（楽器などを）演奏なさる",    choices:["（楽器などを）演奏なさる","お聴きになる","演奏をお断りになる","お止めになる","お耳を塞ぎになる","そっぽを向かれる"]},
    {correct:"お詠みになる",                choices:["お詠みになる","お読みにならない","お捨てになる","お無視になる","破り捨てられる","振り向かれない"]},
    {correct:"お作りになる",                choices:["お作りになる","お壊しになる","お捨てになる","お手放しになる","放棄なさる","顧みられない"]},
    {correct:"（歌舞伎・狩猟などを）なさる", choices:["（歌舞伎・狩猟などを）なさる","お避けになる","お断りになる","立ち去られる","お止めになる","関わりにならない"]},
    {correct:"〜あられる",                  choices:["〜あられる","〜ていらっしゃらない","〜ておいでにならない","〜てはいけない","〜ていない","〜てしまった"]},
    {correct:"〜なさる",                    choices:["〜なさる","〜なさらない","〜てはいけない","〜おやめになる","〜ご遠慮される","〜お断りになる"]},
  ]
},
{
  word:"ごらんず", meaning:"御覧になる",
  rarity:"N", atk:21, hp:116,
  reading:"ごらんず", hinshi:"動詞（サ行変格活用）",
  detail:"見るの尊敬語。「見給ふ」よりも敬意が強い最高敬語のひとつ。天皇・上皇など最上位の方が見る行為に使われる。名詞「御覧」＋「ず（す）」の構成。",
  example:"この文をごらんぜよ。",
  exampleMeaning:"この手紙をご覧ください。",
  source:"源氏物語",
  quizzes:[
    {correct:"御覧になる", choices:["御覧になる","目を背けられる","お見逃しになる","無視なさる","ご覧にならない","目に入れたくない"]},
  ]
},
{
  word:"きこゆ", meaning:"申し上げる / うわさされる / わかる / （お）〜申し上げる",
  rarity:"R", atk:33, hp:156,
  reading:"きこゆ", hinshi:"動詞（ヤ行下二段活用）",
  detail:"貴人が話題中にあれば「申し上げる・（お）〜申し上げる」の敬語を疑ってみる。聞こえる・聞かせる→申し上げる→評判になるという意味の広がりが核心。",
  example:"かくなんきこゆる。",
  exampleMeaning:"このように申し上げる。",
  source:"源氏物語",
  quizzes:[
    {correct:"申し上げる",          choices:["申し上げる","黙っている","口を閉ざす","言わずにおく","沈黙する","隠し通す"]},
    {correct:"うわさされる",        choices:["うわさされる","忘れ去られる","話題にならない","誰にも知られない","世間に知れない","無名のままだ"]},
    {correct:"わかる",              choices:["わかる","わからない","理解できない","見当もつかない","判断できない","謎のままだ"]},
    {correct:"（お）〜申し上げる",  choices:["（お）〜申し上げる","〜申し上げない","〜ご遠慮する","〜お断り申し上げる","〜お控え申し上げる","〜申すまい"]},
  ]
},
{
  word:"そうす", meaning:"奏上する / 申し上げる / 演奏する",
  rarity:"R", atk:31, hp:150,
  reading:"そうす", hinshi:"動詞（サ行変格活用）",
  detail:"天皇（または院）に申し上げる場合だけ使う最高の謙譲語。「啓す（皇后・東宮への謙譲語）」「申す（それ以外への謙譲語）」と使い分ける。演奏するの意味も持つ。",
  example:"帝に奏したてまつりける。",
  exampleMeaning:"天皇に奏上申し上げた。",
  source:"源氏物語",
  quizzes:[
    {correct:"奏上する",   choices:["奏上する","黙って引き下がる","口を閉ざす","申し上げない","沈黙する","言わずにおく"]},
    {correct:"申し上げる", choices:["申し上げる","黙っている","沈黙する","口をつぐむ","言わずにおく","隠し通す"]},
    {correct:"演奏する",   choices:["演奏する","お聴きになる","演奏を断る","楽器を置く","音を止める","沈黙する"]},
  ]
},
{
  word:"ほど", meaning:"間 / 時間 / ころ / あたり / 身分 / 年齢 / 程度 / 〜くらい / 〜の限り",
  rarity:"UR", atk:92, hp:225,
  skill:"drain",
  reading:"ほど", hinshi:"名詞・副助詞",
  detail:"場面に応じた訳し分けが必要な最重要多義語。時間・空間・程度・身分・年齢など極めて広い意味を持つ。デッキに入れると正解時に与えたダメージの10%をHPとして回復する特殊スキルを持つ。",
  example:"このほど都にをかしきことあり。",
  exampleMeaning:"この頃、都に趣深いことがある。",
  source:"徒然草",
  quizzes:[
    {correct:"間",      choices:["間","終わり","始まり","節目","区切り","終点"]},
    {correct:"時間",    choices:["時間","場所","人物","理由","手段","結果"]},
    {correct:"ころ",    choices:["ころ","場所","人物","手段","理由","動機"]},
    {correct:"あたり",  choices:["あたり","遠く","彼方","別の場所","どこか遠い所","見知らぬ場所"]},
    {correct:"身分",    choices:["身分","容姿","才能","財産","家族","職業"]},
    {correct:"年齢",    choices:["年齢","身長","体重","容姿","声色","体力"]},
    {correct:"程度",    choices:["程度","方向","手段","理由","動機","結果"]},
    {correct:"〜くらい",  choices:["〜くらい","〜だけ","〜しか","〜ほかに","〜のみ","〜だけでなく"]},
    {correct:"〜の限り", choices:["〜の限り","〜の始まり","〜の手前","〜の外側","〜を超えて","〜に至るまで"]},
  ]
},
{
  word:"まかる", meaning:"退出申し上げる / 参ります / ～ます",
  rarity:"SR", atk:40, hp:175,
  reading:"まかる", hinshi:"動詞（ラ行四段活用）",
  detail:"行く・来るの謙譲語。貴所から退出するが原義。「まかり出づ（退出申し上げる）」「まかり参る（参ります）」など貴人への動作に使う。",
  example:"まかりいでむとするに。",
  exampleMeaning:"退出申し上げようとするときに。",
  source:"源氏物語",
  quizzes:[
    {correct:"退出申し上げる", choices:["退出申し上げる","参ります","お留まりになる","とどまる","向かわれる","お帰りになる"]},
    {correct:"参ります",       choices:["参ります","退出申し上げる","お留まりになる","戻ります","向かわれる","立ち去る"]},
    {correct:"～ます",         choices:["～ます","～ません","～ました","～ましょう","～ませんか","～ましたか"]},
  ]
},
{
  word:"つかうまつる", meaning:"お仕えする / （して）さし上げる / （お）～申し上げる",
  rarity:"SR", atk:42, hp:178,
  reading:"つかうまつる", hinshi:"動詞（ラ行四段活用）",
  detail:"すべて動作の受け手への敬意を示す謙譲語。お仕えする・さし上げる・補助動詞「～申し上げる」の三用法が重要。",
  example:"つかうまつりたまひて。",
  exampleMeaning:"お仕え申し上げなさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"お仕えする",         choices:["お仕えする","お命じになる","お使いになる","召し使う","お呼びになる","お取り寄せになる"]},
    {correct:"（して）さし上げる", choices:["（して）さし上げる","（して）いただく","（して）もらう","（して）ほしい","（して）おく","（して）しまう"]},
    {correct:"（お）～申し上げる", choices:["（お）～申し上げる","（お）～になる","（お）～なさる","（お）～いただく","（お）～ください","（お）～くださる"]},
  ]
},
{
  word:"たまふ", meaning:"くださる / ～なさる / お～になる / ～ております",
  rarity:"SSR", atk:65, hp:200,
  skill:"regen",
  reading:"たまふ", hinshi:"動詞（ハ行四段／下二段活用）",
  detail:"尊敬語「くださる」「～なさる・お～になる」か謙譲語「～ております」かを区別する最重要敬語動詞。四段活用が尊敬語、下二段活用が謙譲語。",
  example:"花をたまひて。",
  exampleMeaning:"花をくださって。",
  source:"源氏物語",
  quizzes:[
    {correct:"くださる",       choices:["くださる","いただく","もらう","受け取る","頂戴する","拝受する"]},
    {correct:"～なさる",       choices:["～なさる","～される","～れる","～ておられる","～ていらっしゃる","～ておいでになる"]},
    {correct:"お～になる",     choices:["お～になる","お～くださる","お～いただく","お～なさる","お～される","お～れる"]},
    {correct:"～ております",   choices:["～ております","～ています","～てございます","～ておられます","～ていらっしゃいます","～ておいでです"]},
  ]
},
{
  word:"まゐる", meaning:"参上する / さし上げる / めし上がる / ～（て）さし上げる",
  rarity:"SSR", atk:63, hp:197,
  reading:"まゐる", hinshi:"動詞（ラ行四段活用）",
  detail:"謙譲語「参上する」「さし上げる」「～（て）さし上げる」と尊敬語「召し上がる」の両方の意味がある重要敬語動詞。",
  example:"御前にまゐりて。",
  exampleMeaning:"御前に参上して。",
  source:"源氏物語",
  quizzes:[
    {correct:"参上する",           choices:["参上する","退出する","立ち去る","遠ざかる","引き下がる","お帰りになる"]},
    {correct:"さし上げる",         choices:["さし上げる","いただく","もらう","受け取る","頂戴する","拝受する"]},
    {correct:"めし上がる",         choices:["めし上がる","召し上がらない","お断りになる","手をつけない","拒まれる","残される"]},
    {correct:"～（て）さし上げる", choices:["～（て）さし上げる","～（て）いただく","～（て）もらう","～（て）ほしい","～（て）おく","～（て）くれる"]},
  ]
},
{
  word:"たてまつる", meaning:"さし上げる / （お）～申し上げる / お召しになる / 召し上がる / お乗りになる / 参上させる",
  rarity:"SSR", atk:64, hp:198,
  reading:"たてまつる", hinshi:"動詞（ラ行四段活用）",
  detail:"謙譲語の用法が主だが、お召しになるの尊敬語の用法も。「たいまつる」とも書く。幅広い動作の謙譲・尊敬を表す最重要敬語動詞。",
  example:"御衣たてまつりて。",
  exampleMeaning:"お召し物をお召しになって（着せ申し上げて）。",
  source:"源氏物語",
  quizzes:[
    {correct:"さし上げる",         choices:["さし上げる","いただく","もらう","受け取る","頂戴する","拝受する"]},
    {correct:"（お）～申し上げる", choices:["（お）～申し上げる","（お）～になる","（お）～なさる","（お）～いただく","（お）～ください","（お）～くださる"]},
    {correct:"お召しになる",       choices:["お召しになる","お脱ぎになる","お捨てになる","裸でいらっしゃる","粗末に扱う","着替えをしない"]},
    {correct:"召し上がる",         choices:["召し上がる","粗末に扱う","捨てる","拒む","手をつけない","残す"]},
    {correct:"お乗りになる",       choices:["お乗りになる","お降りになる","歩いていらっしゃる","お避けになる","徒歩でいらっしゃる","お乗りにならない"]},
    {correct:"参上させる",         choices:["参上させる","退出させる","立ち去らせる","遠ざける","引き下がらせる","お帰りいただく"]},
  ]
},
{
  word:"はべり", meaning:"お仕えする / あります / ございます / ～です",
  rarity:"SR", atk:40, hp:174,
  reading:"はべり", hinshi:"動詞（ラ行変格活用）",
  detail:"お仕えするという謙譲語が原義。存在・状態を丁寧に表す「あります・ございます」、丁寧の助動詞的用法「～です」が重要。",
  example:"ここにはべりけり。",
  exampleMeaning:"ここにございました。",
  source:"源氏物語",
  quizzes:[
    {correct:"お仕えする", choices:["お仕えする","お命じになる","召し使う","お使いになる","お呼びになる","支配する"]},
    {correct:"あります",   choices:["あります","ありません","なくなる","消える","存在しない","見当たらない"]},
    {correct:"ございます", choices:["ございます","ございません","なくなります","消えます","存在しません","見当たりません"]},
    {correct:"～です",     choices:["～です","～ではない","～でない","～ません","～ではございません","～でございません"]},
  ]
},
{
  word:"さぶらふ", meaning:"お仕えする / ございます / ～です",
  rarity:"SR", atk:39, hp:172,
  reading:"さぶらふ", hinshi:"動詞（ハ行四段活用）",
  detail:"貴人のお側に控える・貴人にお仕えするが原義。「さうらふ」とも書く。「はべり」と同様の用法を持つ。",
  example:"御前にさぶらひて。",
  exampleMeaning:"御前にお仕えして。",
  source:"源氏物語",
  quizzes:[
    {correct:"お仕えする", choices:["お仕えする","お命じになる","召し使う","お使いになる","お呼びになる","支配する"]},
    {correct:"ございます", choices:["ございます","ございません","なくなります","消えます","存在しません","見当たりません"]},
    {correct:"～です",     choices:["～です","～ではない","～でない","～ません","～ではございません","～でございません"]},
  ]
},
{
  word:"こころう", meaning:"理解できる / 納得がいく / 通じる",
  rarity:"N", atk:22, hp:120,
  reading:"こころう", hinshi:"動詞（ワ行下二段活用）",
  detail:"心＋得。現代語では「心得る」。物事の道理や意味を正しく把握する・受け入れる感覚が核心。",
  example:"よくこころえたまへり。",
  exampleMeaning:"よくご理解なさっていた。",
  source:"源氏物語",
  quizzes:[
    {correct:"理解できる",   choices:["理解できる","理解できない","わからない","見当もつかない","謎のままだ","判断できない"]},
    {correct:"納得がいく",   choices:["納得がいく","納得できない","理不尽だ","腑に落ちない","受け入れられない","筋が通らない"]},
    {correct:"通じる",       choices:["通じる","遮断される","途切れる","伝わらない","閉ざされる","行き詰まる"]},
  ]
},
{
  word:"こころゆく", meaning:"心が晴れ晴れする / 満足する",
  rarity:"N", atk:20, hp:115,
  reading:"こころゆく", hinshi:"動詞（カ行四段活用）",
  detail:"心が満足して晴れ晴れする気持ちが核心。心のつかえが取れてすっきりと満たされた状態を表す。",
  example:"こころゆくまで遊びたまふ。",
  exampleMeaning:"心が晴れ晴れするまでお遊びになる。",
  source:"源氏物語",
  quizzes:[
    {correct:"心が晴れ晴れする", choices:["心が晴れ晴れする","心が曇る","気がふさぐ","憂鬱だ","晴れない","気が重い"]},
    {correct:"満足する",         choices:["満足する","不満だ","物足りない","不十分だ","納得できない","がっかりする"]},
  ]
},
{
  word:"めづ", meaning:"心がひかれる / 感動する / 愛する",
  rarity:"N", atk:21, hp:118,
  reading:"めづ", hinshi:"動詞（ダ行下二段活用）",
  detail:"現代語では「愛（め）でる」。「愛」の字を思い浮かべると意味が明白。美しいものや優れたものに心が動く感覚が核心。",
  example:"花をめでたまふ。",
  exampleMeaning:"花に心がひかれていらっしゃる。",
  source:"源氏物語",
  quizzes:[
    {correct:"心がひかれる", choices:["心がひかれる","心が離れる","興味が失せる","遠ざかりたい","関わりたくない","気が向かない"]},
    {correct:"感動する",     choices:["感動する","無感動だ","冷淡だ","無関心だ","感情がない","心が動かない"]},
    {correct:"愛する",       choices:["愛する","憎む","嫌う","遠ざける","疎む","蔑む"]},
  ]
},
{
  word:"つつむ", meaning:"はばかる / 包み隠す",
  rarity:"N", atk:20, hp:114,
  reading:"つつむ", hinshi:"動詞（マ行四段活用）",
  detail:"「はばかる」は「慎む」、「包み隠す」は「包む」の漢字。重要なのは「はばかる（遠慮する・気をつかう）」の意味。",
  example:"つつみなく言ひけり。",
  exampleMeaning:"はばかることなく言った。",
  source:"源氏物語",
  quizzes:[
    {correct:"はばかる",   choices:["はばかる","遠慮しない","気にしない","臆せず向き合う","ためらわない","構わない"]},
    {correct:"包み隠す",   choices:["包み隠す","公言する","打ち明ける","さらけ出す","隠さずに話す","明かしてしまう"]},
  ]
},
{
  word:"やすらふ", meaning:"ためらう / 休む",
  rarity:"N", atk:19, hp:111,
  reading:"やすらふ", hinshi:"動詞（ハ行四段活用）",
  detail:"休む＋ふ→休み続けるから「ためらう」の意味に。立ち止まって迷う・ぐずぐずするという核心が重要。",
  example:"やすらはで寝なましものを。",
  exampleMeaning:"ためらわずに寝てしまえばよかったのに。",
  source:"古今和歌集",
  quizzes:[
    {correct:"ためらう", choices:["ためらう","迷わず進む","躊躇しない","即断する","思い切る","ためらわない"]},
    {correct:"休む",     choices:["休む","働く","動き続ける","急ぐ","休まない","走り続ける"]},
  ]
},
{
  word:"たふ", meaning:"我慢する / 能力がある",
  rarity:"N", atk:21, hp:117,
  reading:"たふ", hinshi:"動詞（ハ行下二段活用）",
  detail:"現代語の「堪える」。「絶える」とは別語。苦難や困難に耐え忍ぶ強さと、物事をこなせる能力の両方を表す。",
  example:"かかることにたへたまはで。",
  exampleMeaning:"こんなことに我慢できなさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"我慢する",   choices:["我慢する","取り乱す","感情をあらわにする","堪えられない","嘆き叫ぶ","怒りをぶつける"]},
    {correct:"能力がある", choices:["能力がある","能力がない","才能がない","不得意だ","できない","力が及ばない"]},
  ]
},
{
  word:"むすぶ", meaning:"すくいあげる / 作る / 約束する / できる",
  rarity:"N", atk:22, hp:119,
  reading:"むすぶ", hinshi:"動詞（バ行四段活用）",
  detail:"作る・約束する・できるは「結」の漢字。すくいあげるは「掬」の字を使う。文脈による訳し分けが重要。",
  example:"水をむすびて飲みける。",
  exampleMeaning:"水をすくいあげて飲んだ。",
  source:"古今和歌集",
  quizzes:[
    {correct:"すくいあげる", choices:["すくいあげる","捨てる","流す","こぼす","放す","払いのける"]},
    {correct:"作る",         choices:["作る","壊す","解く","ほどく","取り壊す","崩す"]},
    {correct:"約束する",     choices:["約束する","破る","反故にする","取り消す","無視する","拒絶する"]},
    {correct:"できる",       choices:["できる","できない","失敗する","崩れる","壊れる","消える"]},
  ]
},
{
  word:"たゆむ", meaning:"油断する / 怠ける / 油断させる",
  rarity:"N", atk:20, hp:113,
  reading:"たゆむ", hinshi:"動詞（マ行四段活用）",
  detail:"油断するのも怠けるのも気の弛みが核心。気を緩めることで生じる問題を表す語。",
  example:"たゆみなく励みけり。",
  exampleMeaning:"油断せずに励んでいた。",
  source:"徒然草",
  quizzes:[
    {correct:"油断する",   choices:["油断する","気を引き締める","注意を払う","用心する","警戒する","備える"]},
    {correct:"怠ける",     choices:["怠ける","懸命に働く","励む","努力する","精を出す","勤しむ"]},
    {correct:"油断させる", choices:["油断させる","警戒させる","気を引き締めさせる","注意させる","用心させる","備えさせる"]},
  ]
},
{
  word:"ならふ", meaning:"なじむ / 慣れる / 習う",
  rarity:"N", atk:19, hp:110,
  reading:"ならふ", hinshi:"動詞（ハ行四段活用）",
  detail:"習うより慣れることが大切。繰り返し経験することで自然と身につく過程が核心。",
  example:"ならひたまへる御手にて。",
  exampleMeaning:"習い慣れていらっしゃる御筆跡で。",
  source:"源氏物語",
  quizzes:[
    {correct:"なじむ", choices:["なじむ","なじめない","打ち解けられない","よそよそしい","距離を置く","慣れない"]},
    {correct:"慣れる", choices:["慣れる","慣れない","なじめない","戸惑う","違和感がある","慣れ親しまない"]},
    {correct:"習う",   choices:["習う","忘れる","教える","やめる","知らないままでいる","無視する"]},
  ]
},
{
  word:"まねぶ", meaning:"まねる / 伝える / 学ぶ",
  rarity:"N", atk:21, hp:116,
  reading:"まねぶ", hinshi:"動詞（バ行四段活用）",
  detail:"古典では「学ぶ」の意味より「まねる」の意味が中心。他人の言動を模倣する・口真似して伝えるという行為が核心。",
  example:"おとなのまねぶやうに言ひける。",
  exampleMeaning:"大人のまねをするように言った。",
  source:"枕草子",
  quizzes:[
    {correct:"まねる", choices:["まねる","独創する","オリジナルを作る","自分で考える","創り出す","発明する"]},
    {correct:"伝える", choices:["伝える","黙っている","隠す","伝えない","秘密にする","口をつぐむ"]},
    {correct:"学ぶ",   choices:["学ぶ","忘れる","教える","やめる","無視する","知らないままでいる"]},
  ]
},
{
  word:"いらふ", meaning:"返事をする / 挨拶をする",
  rarity:"N", atk:18, hp:109,
  reading:"いらふ", hinshi:"動詞（ハ行四段活用）",
  detail:"「答ふ・応ふ」は「いらふ」とも「こたふ」とも読む。相手の呼びかけや問いに応じる行為が核心。",
  example:"いらへもせで過ぎぬ。",
  exampleMeaning:"返事もせずに通り過ぎた。",
  source:"源氏物語",
  quizzes:[
    {correct:"返事をする",   choices:["返事をする","黙っている","無視する","聞き流す","口をつぐむ","そっぽを向く"]},
    {correct:"挨拶をする",   choices:["挨拶をする","無視する","そっぽを向く","黙って通り過ぎる","礼を失する","知らんぷりする"]},
  ]
},
{
  word:"やむ", meaning:"終わる / 病気などが治る",
  rarity:"N", atk:19, hp:111,
  reading:"やむ", hinshi:"動詞（マ行四段・下二段活用）",
  detail:"四段なら自動詞「終わる」、下二段なら他動詞「やめる」。病気が「止む」→治るの意味にも使われる。",
  example:"病もやみにけり。",
  exampleMeaning:"病気も治ってしまった。",
  source:"源氏物語",
  quizzes:[
    {correct:"終わる",       choices:["終わる","始まる","続く","長引く","永遠に続く","果てしなく続く"]},
    {correct:"病気などが治る", choices:["病気などが治る","悪化する","こじらせる","重くなる","ぶり返す","長引く"]},
  ]
},
{
  word:"もてなす", meaning:"取り計らう / もてはやす",
  rarity:"N", atk:22, hp:120,
  reading:"もてなす", hinshi:"動詞（サ行四段活用）",
  detail:"広く物事を執り行う・取り計らう意が核心。現代語の「もてなす（歓待する）」より意味が広い。",
  example:"よくもてなしたまふ。",
  exampleMeaning:"うまく取り計らいなさる。",
  source:"源氏物語",
  quizzes:[
    {correct:"取り計らう",   choices:["取り計らう","放り出す","ほったらかす","後回しにする","うやむやにする","見て見ぬふりをする"]},
    {correct:"もてはやす",   choices:["もてはやす","けなす","批判する","無視する","冷遇する","蔑む"]},
  ]
},
{
  word:"おきつ", meaning:"取り計らう / 計画を立てる / 指図する",
  rarity:"N", atk:21, hp:117,
  reading:"おきつ", hinshi:"動詞（タ行下二段活用）",
  detail:"掟（計画・法則の意味）が動詞化した語。物事を定めて整える・計画する・指示を与えるという行為が核心。",
  example:"よくおきてたまへり。",
  exampleMeaning:"うまく取り計らいなさっていた。",
  source:"源氏物語",
  quizzes:[
    {correct:"取り計らう",   choices:["取り計らう","放り出す","ほったらかす","後回しにする","うやむやにする","見て見ぬふりをする"]},
    {correct:"計画を立てる", choices:["計画を立てる","行き当たりばったりだ","無計画に進む","思いつきで動く","考えなしに行う","なりゆきに任せる"]},
    {correct:"指図する",     choices:["指図する","従う","指示を受ける","言いなりになる","服従する","命じられる"]},
  ]
},
{
  word:"かこつ", meaning:"かこつける / 恨み嘆く",
  rarity:"N", atk:20, hp:114,
  reading:"かこつ", hinshi:"動詞（タ行四段活用）",
  detail:"名詞「託言」（口実・恨み言の意）が変化した語。何かを口実にして言い訳する・不満を嘆くという核心。",
  example:"身をかこちてぞ泣きける。",
  exampleMeaning:"わが身を恨み嘆いて泣いた。",
  source:"古今和歌集",
  quizzes:[
    {correct:"かこつける",   choices:["かこつける","正直に言う","率直に話す","包み隠さず打ち明ける","素直に認める","正面から向き合う"]},
    {correct:"恨み嘆く",     choices:["恨み嘆く","感謝する","喜ぶ","満足する","清々しく受け入れる","晴れ晴れとする"]},
  ]
},
{
  word:"てうす", meaning:"（こしらえ）整える / 調伏する / 懲らしめる / 調理する",
  rarity:"SR", atk:42, hp:177,
  reading:"てうす", hinshi:"動詞（サ行変格活用）",
  detail:"「調」がサ変動詞化した語。「こしらえ整える」「調伏する（仏教で心身を整えて悪行に打ち勝つこと）」「懲らしめる」が重要。",
  example:"よくてうじたてまつりて。",
  exampleMeaning:"うまく調理してさし上げて。",
  source:"源氏物語",
  quizzes:[
    {correct:"（こしらえ）整える", choices:["（こしらえ）整える","乱す","崩す","ほったらかす","放置する","無秩序にする"]},
    {correct:"調伏する",           choices:["調伏する","悪に屈する","誘惑に負ける","煩悩に流される","堕落する","心が乱れる"]},
    {correct:"懲らしめる",         choices:["懲らしめる","褒める","称える","甘やかす","見逃す","放置する"]},
    {correct:"調理する",           choices:["調理する","生のまま食べる","食べずに捨てる","料理しない","腐らせる","火を通さない"]},
  ]
},
{
  word:"さはる", meaning:"さしつかえる",
  rarity:"N", atk:19, hp:112,
  reading:"さはる", hinshi:"動詞（ラ行四段活用）",
  detail:"現代語の「さわる（触る）」とは別語。物事の妨げになる・支障が生じるという意味が核心。",
  example:"さはることありてまからず。",
  exampleMeaning:"差し支えることがあって退出しない。",
  source:"源氏物語",
  quizzes:[
    {correct:"さしつかえる", choices:["さしつかえる","差し支えない","問題ない","支障がない","都合がよい","うまくいく"]},
  ]
},
{
  word:"まどふ・まとふ", meaning:"迷う / ひどく～（する）",
  rarity:"N", atk:22, hp:121,
  reading:"まどふ・まとふ", hinshi:"動詞（ハ行四段活用）",
  detail:"「惑」を当てる「パニック状態」が核心。正しい方向を見失って迷う状態と、程度のはなはだしさを表す副詞的用法がある。",
  example:"惑ひまどひける。",
  exampleMeaning:"迷い惑っていた。",
  source:"源氏物語",
  quizzes:[
    {correct:"迷う",           choices:["迷う","迷わず進む","即断する","はっきりしている","迷いがない","確信を持つ"]},
    {correct:"ひどく～（する）", choices:["ひどく～（する）","少し～（する）","わずかに～（する）","かすかに～（する）","ほんの少し～（する）","ちょっとだけ～（する）"]},
  ]
},
{
  word:"こうず", meaning:"疲れる / 困る",
  rarity:"N", atk:20, hp:114,
  reading:"こうず", hinshi:"動詞（サ行変格活用）",
  detail:"「困」から変化した語で、困った状態を表す。体力的・精神的に限界になる状態が核心。",
  example:"こうじたまひにけり。",
  exampleMeaning:"疲れてしまわれた。",
  source:"源氏物語",
  quizzes:[
    {correct:"疲れる", choices:["疲れる","元気になる","力がみなぎる","活力がある","疲れ知らずだ","精力的だ"]},
    {correct:"困る",   choices:["困る","うまくいく","解決できる","打開できる","なんとかなる","余裕がある"]},
  ]
},
{
  word:"すさぶ", meaning:"（何かに）興じる / 慰めにする",
  rarity:"N", atk:21, hp:116,
  reading:"すさぶ", hinshi:"動詞（バ行四段活用）",
  detail:"勢いのまま・気の向くままに事を行う意味が核心。何かに夢中になって楽しむ・気晴らしにするという行為を表す。",
  example:"詩をすさびたまひて。",
  exampleMeaning:"詩に興じていらっしゃって。",
  source:"源氏物語",
  quizzes:[
    {correct:"（何かに）興じる", choices:["（何かに）興じる","飽きる","興味を失う","やめる","退屈する","関わらない"]},
    {correct:"慰めにする",       choices:["慰めにする","苦しみの種にする","悩みを増やす","不安になる","つらくなる","悲しみになる"]},
  ]
},
{
  word:"いはけなし", meaning:"幼い",
  rarity:"N", atk:18, hp:108,
  reading:"いはけなし", hinshi:"形容詞（ク活用）",
  detail:"「稚（いは）く」（子供っぽいの意味）＋なし。幼くて世慣れていない・あどけない様子が核心。",
  example:"いはけなき御有様かな。",
  exampleMeaning:"幼いご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"幼い", choices:["幼い","大人びている","成熟している","落ち着いている","老成している","分別がある"]},
  ]
},
{
  word:"しるし・しろし", meaning:"はっきりしている / 際立っている / その通りだ",
  rarity:"N", atk:22, hp:120,
  reading:"しるし・しろし", hinshi:"形容詞（ク活用）",
  detail:"現代語の「いちじるしい」のもとになった語。明白・顕著という核心から、「～もしるし（その通りだ）」の用法も重要。",
  example:"しるくをかしき御有様かな。",
  exampleMeaning:"はっきりと趣あるご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"はっきりしている", choices:["はっきりしている","曖昧だ","ぼんやりしている","不明瞭だ","あやふやだ","うやむやだ"]},
    {correct:"際立っている",     choices:["際立っている","目立たない","平凡だ","ありきたりだ","どこにでもある","印象が薄い"]},
    {correct:"その通りだ",       choices:["その通りだ","そうではない","見当違いだ","全く違う","それはおかしい","納得できない"]},
  ]
},
{
  word:"らうらうじ", meaning:"洗練されている / 上品で美しい",
  rarity:"SR", atk:42, hp:178,
  reading:"らうらうじ", hinshi:"形容詞（シク活用）",
  detail:"キーワードは「洗練された上品さ」。生まれながらの品格と教養から滲み出る美しさが核心。「らうたし（かわいらしい）」とは別語。",
  example:"らうらうじくをかしき人かな。",
  exampleMeaning:"洗練されていて趣ある人よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"洗練されている", choices:["洗練されている","野暮ったい","無骨だ","粗野だ","がさつだ","洗練されていない"]},
    {correct:"上品で美しい",   choices:["上品で美しい","下品だ","がさつだ","粗野だ","品がない","みっともない"]},
  ]
},
{
  word:"かたはらいたし", meaning:"聞き苦しい / 見苦しい / 気の毒に思う / きまりが悪い",
  rarity:"SR", atk:43, hp:180,
  reading:"かたはらいたし", hinshi:"形容詞（ク活用）",
  detail:"傍らにいて見苦しい・聞き苦しいと感じるさまが核心。他人の言動を見聞きして感じる居心地の悪さが共通する感覚。",
  example:"かたはらいたく思ひけり。",
  exampleMeaning:"見苦しく（きまりが悪く）思った。",
  source:"枕草子",
  quizzes:[
    {correct:"聞き苦しい",     choices:["聞き苦しい","聞きやすい","心地よい","聞き心地がよい","耳に心地よい","聞いていて楽しい"]},
    {correct:"見苦しい",       choices:["見苦しい","見事だ","立派だ","堂々としている","美しい","華やかだ"]},
    {correct:"気の毒に思う",   choices:["気の毒に思う","羨ましい","誇らしい","頼もしい","晴れやかだ","嬉しい"]},
    {correct:"きまりが悪い",   choices:["きまりが悪い","堂々としている","誇らしい","胸を張れる","得意げだ","清々しい"]},
  ]
},
{
  word:"とし", meaning:"速い / すぐに / するどい",
  rarity:"N", atk:21, hp:117,
  reading:"とし", hinshi:"形容詞（ク活用）",
  detail:"「すぐに」は疾、「するどい」は利・敏の漢字を当てる。速さ・鋭さという共通した「切れの良さ」が核心。",
  example:"とく、としく走りける。",
  exampleMeaning:"素早く、すぐに走っていた。",
  source:"今昔物語集",
  quizzes:[
    {correct:"速い",     choices:["速い","遅い","のろい","ゆっくりだ","鈍い","もたもたしている"]},
    {correct:"すぐに",   choices:["すぐに","じっくりと","ゆっくりと","時間をかけて","徐々に","少しずつ"]},
    {correct:"するどい", choices:["するどい","鈍い","にぶい","切れない","ぼんやりしている","頭が回らない"]},
  ]
},
{
  word:"らうかはし", meaning:"混雑している / 乱暴だ / 騒々しい",
  rarity:"N", atk:20, hp:113,
  reading:"らうかはし", hinshi:"形容詞（シク活用）",
  detail:"「乱」の字から想像されるイメージ通り。秩序なく混み合った状態・荒々しく騒がしい様子が核心。",
  example:"らうかはしき所にて。",
  exampleMeaning:"騒々しい場所で。",
  source:"枕草子",
  quizzes:[
    {correct:"混雑している", choices:["混雑している","閑散としている","がらがらだ","人気がない","静まり返っている","ひっそりしている"]},
    {correct:"乱暴だ",       choices:["乱暴だ","穏やかだ","丁寧だ","礼儀正しい","慎み深い","優しい"]},
    {correct:"騒々しい",     choices:["騒々しい","静かだ","しんとしている","穏やかだ","落ち着いている","物音ひとつしない"]},
  ]
},
{
  word:"めやすし", meaning:"見苦しくない / 感じがよい",
  rarity:"N", atk:19, hp:111,
  reading:"めやすし", hinshi:"形容詞（ク活用）",
  detail:"「目に安し」で、見た目に感じが良いさまを表す。目にやさしく安心して見ていられる・感じが良いという核心。",
  example:"めやすくをかしき御有様かな。",
  exampleMeaning:"感じよく趣あるご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"見苦しくない", choices:["見苦しくない","見苦しい","みっともない","目に余る","見ていられない","恥ずかしい"]},
    {correct:"感じがよい",   choices:["感じがよい","感じが悪い","不愉快だ","不快だ","じめじめしている","感じが悪い"]},
  ]
},
{
  word:"いぶせし", meaning:"うっとうしい / 気がかりだ",
  rarity:"N", atk:20, hp:114,
  reading:"いぶせし", hinshi:"形容詞（ク活用）",
  detail:"心に引っかかる「もやもや感」を表す語。晴れ晴れしない・心がすっきりしない状態が核心。",
  example:"いぶせき御心地にて。",
  exampleMeaning:"うっとうしいお気持ちで。",
  source:"源氏物語",
  quizzes:[
    {correct:"うっとうしい", choices:["うっとうしい","晴れ晴れしている","清々しい","爽やかだ","すっきりしている","心地よい"]},
    {correct:"気がかりだ",   choices:["気がかりだ","安心だ","気にならない","問題ない","心配いらない","のんきだ"]},
  ]
},
{
  word:"なめし", meaning:"無礼だ",
  rarity:"N", atk:19, hp:110,
  reading:"なめし", hinshi:"形容詞（ク活用）",
  detail:"現代語のなめるから連想されるのは「無礼」。目上の者に対して敬意を欠いた失礼な態度が核心。",
  example:"なめき振る舞ひかな。",
  exampleMeaning:"無礼な振る舞いよなあ。",
  source:"枕草子",
  quizzes:[
    {correct:"無礼だ", choices:["無礼だ","礼儀正しい","慎み深い","丁寧だ","遠慮がある","気を遣う"]},
  ]
},
{
  word:"またし・まつたし", meaning:"完全だ / 決して",
  rarity:"N", atk:21, hp:116,
  reading:"またし・まつたし", hinshi:"形容詞（ク活用）",
  detail:"「完・全」の字を当てると意味は明白。欠けたところなく完全な状態・副詞的に「決して（～ない）」の用法も重要。",
  example:"またくよくなりにけり。",
  exampleMeaning:"完全によくなってしまった。",
  source:"今昔物語集",
  quizzes:[
    {correct:"完全だ", choices:["完全だ","不完全だ","欠けている","不十分だ","中途半端だ","足りない"]},
    {correct:"決して", choices:["決して","必ず","きっと","絶対に","間違いなく","確実に"]},
  ]
},
{
  word:"むくつけし", meaning:"気味が悪い / 無骨だ",
  rarity:"N", atk:20, hp:113,
  reading:"むくつけし", hinshi:"形容詞（ク活用）",
  detail:"人知を超えたものを気味悪く思う気持ちが核心。怪異・異様なものへの恐れとともに、洗練されない無骨さも表す。",
  example:"むくつけき声にて。",
  exampleMeaning:"気味の悪い声で。",
  source:"今昔物語集",
  quizzes:[
    {correct:"気味が悪い", choices:["気味が悪い","心地よい","爽やかだ","清々しい","安心できる","親しみやすい"]},
    {correct:"無骨だ",     choices:["無骨だ","洗練されている","優雅だ","上品だ","あか抜けている","品がある"]},
  ]
},
{
  word:"ともし", meaning:"貧しい / 乏しい / うらやましい",
  rarity:"N", atk:20, hp:114,
  reading:"ともし", hinshi:"形容詞（ク活用）",
  detail:"「乏しい」と他人が「うらやましく」なります、と覚える。不足している状態とそれを羨む気持ちが核心。",
  example:"ともしき世の中かな。",
  exampleMeaning:"貧しい（乏しい）世の中よなあ。",
  source:"徒然草",
  quizzes:[
    {correct:"貧しい",       choices:["貧しい","裕福だ","豊かだ","余裕がある","満ち足りている","贅沢だ"]},
    {correct:"乏しい",       choices:["乏しい","豊富だ","十分だ","あり余る","いくらでもある","潤沢だ"]},
    {correct:"うらやましい", choices:["うらやましい","気の毒だ","かわいそうだ","憐れだ","同情する","気にかける"]},
  ]
},
{
  word:"おどろおどろし", meaning:"大げさだ / 気味が悪い",
  rarity:"N", atk:21, hp:117,
  reading:"おどろおどろし", hinshi:"形容詞（シク活用）",
  detail:"「おどろく」が重なった語。驚きを二重に重ねることで、過度に大げさな様子や不気味さを強調する。",
  example:"おどろおどろしき御夢かな。",
  exampleMeaning:"気味の悪いお夢よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"大げさだ",   choices:["大げさだ","さりげない","控えめだ","ひっそりしている","地味だ","目立たない"]},
    {correct:"気味が悪い", choices:["気味が悪い","心地よい","爽やかだ","清々しい","安心できる","親しみやすい"]},
  ]
},
{
  word:"ことごとし", meaning:"大げさだ",
  rarity:"N", atk:19, hp:110,
  reading:"ことごとし", hinshi:"形容詞（シク活用）",
  detail:"「事」が重なると仰々しいもの。物事を必要以上に大げさに扱う・形式ばった様子が核心。",
  example:"ことごとしくいひけり。",
  exampleMeaning:"大げさに言った。",
  source:"枕草子",
  quizzes:[
    {correct:"大げさだ", choices:["大げさだ","さりげない","控えめだ","ひっそりしている","地味だ","目立たない"]},
  ]
},
{
  word:"こちたし", meaning:"仰々しい / 多すぎる / うるさい",
  rarity:"N", atk:21, hp:116,
  reading:"こちたし", hinshi:"形容詞（ク活用）",
  detail:"「多すぎて仰々しい」の意味が核心。過剰であることへの批判的ニュアンスが共通する。",
  example:"こちたき御装ひかな。",
  exampleMeaning:"仰々しいお装いよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"仰々しい",   choices:["仰々しい","さりげない","控えめだ","ひっそりしている","質素だ","飾り気がない"]},
    {correct:"多すぎる",   choices:["多すぎる","足りない","乏しい","少なすぎる","不十分だ","わずかだ"]},
    {correct:"うるさい",   choices:["うるさい","静かだ","穏やかだ","物音ひとつしない","しんとしている","落ち着いている"]},
  ]
},
{
  word:"けし", meaning:"悪い / 異様だ",
  rarity:"N", atk:19, hp:110,
  reading:"けし", hinshi:"形容詞（ク活用）",
  detail:"「けしからず」（けし＋ず）と同じ語源。本来「普通ではない」が原義で、そこから「悪い・異様だ」の意味に。",
  example:"けしからぬ振る舞ひかな。",
  exampleMeaning:"とんでもない（異様な）振る舞いよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"悪い",   choices:["悪い","申し分ない","すばらしい","完璧だ","理想的だ","文句なし"]},
    {correct:"異様だ", choices:["異様だ","普通だ","ありきたりだ","平凡だ","どこにでもある","変わり映えしない"]},
  ]
},
{
  word:"たいだいし", meaning:"とんでもない / 前途多難だ",
  rarity:"N", atk:20, hp:113,
  reading:"たいだいし", hinshi:"形容詞（シク活用）",
  detail:"人の言動を非難したり嘆いたりする気持ちを表す語。道理に外れたことへの強い批判・将来への憂慮が核心。",
  example:"たいだいしき御ことかな。",
  exampleMeaning:"とんでもないことよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"とんでもない", choices:["とんでもない","もっともだ","当然だ","当たり前だ","理にかなっている","納得できる"]},
    {correct:"前途多難だ",   choices:["前途多難だ","前途有望だ","将来が明るい","うまくいきそうだ","希望がある","見通しが良い"]},
  ]
},
{
  word:"ゆくりなし", meaning:"突然だ / 思いがけない / 軽はずみだ",
  rarity:"N", atk:21, hp:116,
  reading:"ゆくりなし", hinshi:"形容詞（ク活用）",
  detail:"「ゆっくりする暇がない」→「突然だ」と覚える。予告なく急に起こることへの驚き・軽率な行動への批判が核心。",
  example:"ゆくりなく聞こえければ。",
  exampleMeaning:"突然申し上げたので。",
  source:"源氏物語",
  quizzes:[
    {correct:"突然だ",       choices:["突然だ","予め分かっていた","予告通りだ","想定内だ","計画的だ","段階を踏んだ"]},
    {correct:"思いがけない", choices:["思いがけない","予想通りだ","当然だ","もっともだ","驚くほどでもない","想定内だ"]},
    {correct:"軽はずみだ",   choices:["軽はずみだ","慎重だ","思慮深い","よく考えた","計画的だ","熟慮した"]},
  ]
},
{
  word:"まさなし", meaning:"みっともない / 卑怯だ / よくない",
  rarity:"N", atk:20, hp:113,
  reading:"まさなし", hinshi:"形容詞（ク活用）",
  detail:"「正＋無し」で「正しくない・よくない」の意味。道理に外れた恥ずかしい行為への批判が核心。",
  example:"まさなき振る舞ひかな。",
  exampleMeaning:"みっともない振る舞いよなあ。",
  source:"枕草子",
  quizzes:[
    {correct:"みっともない", choices:["みっともない","堂々としている","立派だ","誇らしい","見事だ","威厳がある"]},
    {correct:"卑怯だ",       choices:["卑怯だ","正々堂々だ","勇敢だ","潔い","堂々としている","正直だ"]},
    {correct:"よくない",     choices:["よくない","申し分ない","すばらしい","完璧だ","理想的だ","文句なし"]},
  ]
},
{
  word:"けざやかなり", meaning:"はっきりと（している） / 際立っている",
  rarity:"N", atk:21, hp:116,
  reading:"けざやかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「界＋さやか」で境界がはっきりとしている様。境界線がくっきりと見えるような明確さと鮮やかさが核心。",
  example:"けざやかに見えたまふ。",
  exampleMeaning:"はっきりと際立って見えていらっしゃる。",
  source:"源氏物語",
  quizzes:[
    {correct:"はっきりと（している）", choices:["はっきりと（している）","曖昧だ","ぼんやりしている","不明瞭だ","あやふやだ","うやむやだ"]},
    {correct:"際立っている",           choices:["際立っている","目立たない","平凡だ","ありきたりだ","どこにでもある","印象が薄い"]},
  ]
},
{
  word:"なのめなり", meaning:"平凡だ / ありふれている / いい加減だ / 格別だ",
  rarity:"N", atk:20, hp:113,
  reading:"なのめなり", hinshi:"形容動詞（ナリ活用）",
  detail:"平凡でありふれた感じが原義。打消しを伴うと「格別だ・並外れている」の意味になる重要語。「なのめならず（格別だ）」の形に注意。",
  example:"なのめならぬ御心ざしかな。",
  exampleMeaning:"格別なお気持ちよなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"平凡だ",         choices:["平凡だ","際立っている","格別だ","並外れている","群を抜く","抜きん出ている"]},
    {correct:"ありふれている", choices:["ありふれている","珍しい","希少だ","めったにない","特別だ","唯一無二だ"]},
    {correct:"いい加減だ",     choices:["いい加減だ","誠実だ","真摯だ","丁寧だ","念入りだ","手を抜かない"]},
    {correct:"格別だ",         choices:["格別だ","平凡だ","ありきたりだ","どこにでもある","普通だ","変わり映えしない"]},
  ]
},
{
  word:"とみなり", meaning:"急だ / 急には",
  rarity:"N", atk:19, hp:111,
  reading:"とみなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「頓」（急なこと）から変化した語。予告なく急に起こる様子が核心。副詞的に「急には（～できない）」の用法も重要。",
  example:"とみのことにて。",
  exampleMeaning:"急なことで。",
  source:"枕草子",
  quizzes:[
    {correct:"急だ",   choices:["急だ","ゆっくりだ","徐々に","じっくりと","段階を踏んだ","時間をかけた"]},
    {correct:"急には", choices:["急には","徐々に","少しずつ","ゆっくりと","じっくりと","時間をかけて"]},
  ]
},
{
  word:"けうなり", meaning:"珍しい / とんでもない",
  rarity:"N", atk:20, hp:113,
  reading:"けうなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「希有」は「希に有り」のことで珍しいの意味。めったにないほど珍しい状態から、驚くべき異常さも表す。",
  example:"けうなることかな。",
  exampleMeaning:"珍しいことよなあ。",
  source:"枕草子",
  quizzes:[
    {correct:"珍しい",       choices:["珍しい","ありふれている","よく見かける","どこにでもある","平凡だ","当たり前だ"]},
    {correct:"とんでもない", choices:["とんでもない","もっともだ","当然だ","当たり前だ","理にかなっている","納得できる"]},
  ]
},
{
  word:"あやにくなり", meaning:"あいにくだ / 厳しい",
  rarity:"SR", atk:40, hp:174,
  reading:"あやにくなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「あやにく」は「あいにく」と覚える。折悪しく都合が悪いことや、意地悪で厳しいさまを表す語。",
  example:"あやにくなる雨にて。",
  exampleMeaning:"あいにくの雨で。",
  source:"源氏物語",
  quizzes:[
    {correct:"あいにくだ", choices:["あいにくだ","都合がよい","タイミングが良い","ちょうどよい","好都合だ","うまくいく"]},
    {correct:"厳しい",     choices:["厳しい","優しい","穏やかだ","甘い","寛大だ","寛容だ"]},
  ]
},
{
  word:"せちなり", meaning:"ひどい / しきりに / 重要だ / 大切だ",
  rarity:"SR", atk:41, hp:176,
  reading:"せちなり", hinshi:"形容動詞（ナリ活用）",
  detail:"現代語の「切に」（ひたすら）に相当する語。「せつなり」とも書く。程度のはなはだしさと重要さが核心。",
  example:"せちに思ひたまへて。",
  exampleMeaning:"ひどく（しきりに）思っておりまして。",
  source:"源氏物語",
  quizzes:[
    {correct:"ひどい",   choices:["ひどい","穏やかだ","優しい","申し分ない","すばらしい","たいしたことない"]},
    {correct:"しきりに", choices:["しきりに","たまに","めったに","ほとんど","わずかに","少しだけ"]},
    {correct:"重要だ",   choices:["重要だ","どうでもよい","取るに足らない","些細だ","無意味だ","関係ない"]},
    {correct:"大切だ",   choices:["大切だ","どうでもよい","無価値だ","些細だ","無関係だ","捨て置いてよい"]},
  ]
},
{
  word:"そのかみ", meaning:"その当時",
  rarity:"N", atk:19, hp:111,
  reading:"そのかみ", hinshi:"名詞・副詞",
  detail:"「其の上」の字を当てる。「その当時」が原義。過去のある時点を指す語で、現代語の「昔」より具体的な時点を指すことが多い。",
  example:"そのかみのことをぞ思ひ出でける。",
  exampleMeaning:"その当時のことを思い出した。",
  source:"伊勢物語",
  quizzes:[
    {correct:"その当時", choices:["その当時","現在","今現在","これから先","将来","未来のこと"]},
  ]
},
{
  word:"よろこび", meaning:"叙位や昇進などの慶事 / お礼",
  rarity:"SR", atk:40, hp:174,
  reading:"よろこび", hinshi:"名詞",
  detail:"喜びごとを授かってお礼をするのは当たり前。叙位・任官などの慶事そのものと、それに対してするお礼参りの両方を表す語。",
  example:"よろこびに参りたまひて。",
  exampleMeaning:"お礼参りにいらっしゃって。",
  source:"源氏物語",
  quizzes:[
    {correct:"叙位や昇進などの慶事", choices:["叙位や昇進などの慶事","不幸な出来事","喪に服すること","降格","謹慎","訃報"]},
    {correct:"お礼",               choices:["お礼","お詫び","苦情","批判","文句","謝罪"]},
  ]
},
{
  word:"きは", meaning:"身分 / 程度 / そば / 限り",
  rarity:"N", atk:21, hp:116,
  reading:"きは", hinshi:"名詞",
  detail:"「そば」がほぼ原義→「身分、程度」の意味に。端・際（きわ）の感覚から、身分や程度・限界を表すようになった重要多義語。",
  example:"いとやむごとなききはにはあらぬが。",
  exampleMeaning:"たいして高くない身分の人が。",
  source:"源氏物語",
  quizzes:[
    {correct:"身分", choices:["身分","容姿","才能","財産","年齢","職業"]},
    {correct:"程度", choices:["程度","方向","手段","理由","動機","結果"]},
    {correct:"そば", choices:["そば","遠く","彼方","別の場所","遠い所","見知らぬ場所"]},
    {correct:"限り", choices:["限り","始まり","手前","外側","超えて","至るまで"]},
  ]
},
{
  word:"しな", meaning:"身分 / 段 / 品位",
  rarity:"N", atk:20, hp:113,
  reading:"しな", hinshi:"名詞",
  detail:"「階段」が原義→「身分」や「品位」の意味に。段階・順序から社会的地位・品格を表すようになった語。",
  example:"しないやしき者は。",
  exampleMeaning:"身分の低い者は。",
  source:"枕草子",
  quizzes:[
    {correct:"身分", choices:["身分","容姿","才能","財産","年齢","職業"]},
    {correct:"段",   choices:["段","平面","横幅","奥行き","面積","広さ"]},
    {correct:"品位", choices:["品位","下品さ","粗野さ","がさつさ","品のなさ","無骨さ"]},
  ]
},
{
  word:"かたへ", meaning:"仲間 / 片方 / 一部分",
  rarity:"N", atk:19, hp:110,
  reading:"かたへ", hinshi:"名詞",
  detail:"文字通り「片＋方」で「片方」の意味。同じ立場の仲間・グループの一方・物事の一部分を表す語。",
  example:"かたへの人に見せたまひて。",
  exampleMeaning:"仲間の人にお見せになって。",
  source:"源氏物語",
  quizzes:[
    {correct:"仲間",   choices:["仲間","敵","対立者","競争相手","見知らぬ人","よそ者"]},
    {correct:"片方",   choices:["片方","両方","全部","すべて","どちらも","全体"]},
    {correct:"一部分", choices:["一部分","全体","すべて","全部","どれも","丸ごと"]},
  ]
},
{
  word:"あや", meaning:"波紋 / 理由 / 分別",
  rarity:"N", atk:20, hp:113,
  reading:"あや", hinshi:"名詞",
  detail:"原義は「綾織物」だが「理由、分別」の意味が重要。模様・文様から転じて、物事の筋道・理屈・道理を表す語。",
  example:"あやもなく泣きけり。",
  exampleMeaning:"わけもなく泣いた。",
  source:"古今和歌集",
  quizzes:[
    {correct:"波紋",  choices:["波紋","静水面","凪いだ水面","波のない状態","穏やかな水面","揺れのない面"]},
    {correct:"理由",  choices:["理由","結果","目的","手段","結論","影響"]},
    {correct:"分別",  choices:["分別","無分別","思慮のなさ","無思慮","軽率さ","考えなし"]},
  ]
},
{
  word:"はらから", meaning:"兄弟姉妹",
  rarity:"N", atk:19, hp:110,
  reading:"はらから", hinshi:"名詞",
  detail:"「腹族」が語源。現代語の「同胞」より意味が広く、同じ母から生まれた兄弟姉妹を指す。転じて親族全般を指すこともある。",
  example:"はらからの君達の中にも。",
  exampleMeaning:"兄弟姉妹の君たちの中にも。",
  source:"源氏物語",
  quizzes:[
    {correct:"兄弟姉妹", choices:["兄弟姉妹","赤の他人","敵","友人","主従","夫婦"]},
  ]
},
{
  word:"ほだし", meaning:"足手まとい",
  rarity:"N", atk:20, hp:113,
  reading:"ほだし", hinshi:"名詞",
  detail:"「ほだす」（束縛するの意）の名詞形。自由な行動を妨げる存在・もの・しがらみを表す語。",
  example:"ほだしとなりにける。",
  exampleMeaning:"足手まといになってしまった。",
  source:"源氏物語",
  quizzes:[
    {correct:"足手まとい", choices:["足手まとい","頼もしい存在","心強い味方","大きな助け","なくてはならない存在","頼りになる人"]},
  ]
},
{
  word:"すべ", meaning:"方法 / 手段",
  rarity:"N", atk:19, hp:110,
  reading:"すべ", hinshi:"名詞",
  detail:"「術」の字を当てる。「ずち」の読み方もある。物事を解決するための手段・方法が核心。「すべなし（どうしようもない）」の形で頻出。",
  example:"すべなくて泣き臥したまひぬ。",
  exampleMeaning:"どうしようもなくて泣き伏してしまわれた。",
  source:"源氏物語",
  quizzes:[
    {correct:"方法", choices:["方法","目的","結果","理由","動機","原因"]},
    {correct:"手段", choices:["手段","目標","結末","動機","理由","目的"]},
  ]
},
{
  word:"たづき", meaning:"手段 / 頼る所",
  rarity:"N", atk:20, hp:113,
  reading:"たづき", hinshi:"名詞",
  detail:"「手付き」→「手段、手掛かり」の意味に。物事を進めるよりどころ・頼れる手段が核心。「すべ」と意味が近い。",
  example:"たづきもなく泣き惑ふ。",
  exampleMeaning:"頼る所もなく泣き迷う。",
  source:"源氏物語",
  quizzes:[
    {correct:"手段",   choices:["手段","目標","結末","動機","理由","目的"]},
    {correct:"頼る所", choices:["頼る所","頼れない場所","行き場のない所","拠り所のない状態","孤立無援","頼みの綱が切れた"]},
  ]
},
{
  word:"よすが", meaning:"身を寄せる所 / 縁者",
  rarity:"N", atk:20, hp:114,
  reading:"よすが", hinshi:"名詞",
  detail:"「寄す処」が語源で「身を寄せる所」が原義。頼りにできる場所・人・縁のある人を表す語。",
  example:"よすがなくてものしたまふ。",
  exampleMeaning:"頼る所なくていらっしゃる。",
  source:"源氏物語",
  quizzes:[
    {correct:"身を寄せる所", choices:["身を寄せる所","身を隠す所","逃げ場のない所","孤立した場所","頼れない場所","立ち入れない場所"]},
    {correct:"縁者",         choices:["縁者","赤の他人","敵","見知らぬ人","無関係の人","よそ者"]},
  ]
},
{
  word:"せうそこ・せうそく", meaning:"手紙 / 来意（を告げること） / 取次ぎ（を頼むこと）",
  rarity:"SSR", atk:62, hp:195,
  reading:"せうそこ・せうそく", hinshi:"名詞・動詞",
  detail:"「消」は「死」、「息」は「生」の意味。「安否、動静」が原義→それを問う手紙。来意を伝えること・取次ぎを頼むことも表す重要多義語。",
  example:"せうそこばかり聞こえたまふ。",
  exampleMeaning:"お手紙だけ申し上げなさる。",
  source:"源氏物語",
  quizzes:[
    {correct:"手紙",           choices:["手紙","口頭での伝言","直接の訪問","使者を立てること","沈黙","知らせを絶つこと"]},
    {correct:"来意（を告げること）",     choices:["来意（を告げること）","立ち去ること","帰還を告げること","訪問を断ること","音信を絶つこと","姿を消すこと"]},
    {correct:"取次ぎ（を頼むこと）",    choices:["取次ぎ（を頼むこと）","直接押し入ること","取次ぎを断ること","無断で通り過ぎること","知らせずに立ち去ること","門前払いにすること"]},
  ]
},
{
  word:"とが", meaning:"罰 / 欠点",
  rarity:"N", atk:20, hp:113,
  reading:"とが", hinshi:"名詞",
  detail:"「とがめる」（古語では「とがむ」）の「とが」。罪・過ちに対する罰と、人の欠点・短所の両方を表す語。",
  example:"とがもなき人を。",
  exampleMeaning:"罰を受けるいわれのない人を。",
  source:"源氏物語",
  quizzes:[
    {correct:"罰",  choices:["罰","褒美","報酬","ご褒美","称賛","恩賞"]},
    {correct:"欠点", choices:["欠点","長所","美点","取り柄","優れた点","得意なこと"]},
  ]
},
{
  word:"れい", meaning:"いつも",
  rarity:"N", atk:18, hp:108,
  reading:"れい", hinshi:"名詞・副詞",
  detail:"「いつも～」の意の連想が大切。「例」の字を当て、いつもの通り・例によってという意味を表す。「れいの」の形で頻出。",
  example:"れいのごとく参りたまひて。",
  exampleMeaning:"いつものように参上なさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"いつも", choices:["いつも","特別に","今回に限り","例外的に","滅多にない","初めて"]},
  ]
},
{
  word:"い", meaning:"眠り",
  rarity:"N", atk:17, hp:106,
  reading:"い", hinshi:"名詞",
  detail:"「寝（い）ぬ」の「寝（い）」と同根。「寝」の漢字で覚える。眠ること・睡眠を表す語。「いをし寝（眠りをする）」の形で使われる。",
  example:"いも寝られずなりにけり。",
  exampleMeaning:"眠ることもできなくなってしまった。",
  source:"古今和歌集",
  quizzes:[
    {correct:"眠り", choices:["眠り","目覚め","覚醒","起き上がること","夜明け","朝の始まり"]},
  ]
},
{
  word:"うつつ", meaning:"現実 / 正気",
  rarity:"N", atk:21, hp:117,
  reading:"うつつ", hinshi:"名詞",
  detail:"「夢」の対義語。「夢か、うつつか」と覚える。目が覚めている現実の状態と、正常な精神状態の両方を表す語。",
  example:"夢かうつつかと思ひたまふ。",
  exampleMeaning:"夢か現実かとお思いになる。",
  source:"源氏物語",
  quizzes:[
    {correct:"現実", choices:["現実","夢","幻","まぼろし","非現実","空想の世界"]},
    {correct:"正気", choices:["正気","錯乱","狂気","夢心地","うわの空","正気を失った状態"]},
  ]
},
{
  word:"あるじ・あるじす", meaning:"客をもてなす（こと） / ご馳走する（こと） / 主人",
  rarity:"N", atk:22, hp:120,
  reading:"あるじ・あるじす", hinshi:"名詞・動詞（サ行変格活用）",
  detail:"「御馳走する」は「あるじまうけ・あるじまうけす」の略。宴席を設けて客をもてなすこと・その場の主人という両方の意味を持つ。",
  example:"あるじしたまひけり。",
  exampleMeaning:"おもてなしをなさった。",
  source:"源氏物語",
  quizzes:[
    {correct:"客をもてなす（こと）",  choices:["客をもてなす（こと）","客を追い返す（こと）","門前払いにする（こと）","客を無視する（こと）","もてなしを断る（こと）","冷遇する（こと）"]},
    {correct:"ご馳走する（こと）",    choices:["ご馳走する（こと）","粗末にもてなす（こと）","食事を出さない（こと）","客を断る（こと）","空腹のまま帰す（こと）","振る舞いを拒む（こと）"]},
    {correct:"主人",                  choices:["主人","客人","訪問者","使用人","下男","召し使い"]},
  ]
},
{
  word:"ふるさと", meaning:"旧都 / 昔馴染みの地",
  rarity:"N", atk:20, hp:114,
  reading:"ふるさと", hinshi:"名詞",
  detail:"「古い里」＝「旧都、昔馴染みの土地」の意味。現代語のふるさと（生まれ故郷）とは異なり、かつて都があった場所・かつて住んでいた土地を指す。",
  example:"ふるさとになりにたるを。",
  exampleMeaning:"旧都（廃都）になってしまったのを。",
  source:"土佐日記",
  quizzes:[
    {correct:"旧都",       choices:["旧都","新都","現在の都","今の都","新しい首都","最新の都"]},
    {correct:"昔馴染みの地", choices:["昔馴染みの地","初めて訪れる土地","見知らぬ場所","縁もゆかりもない土地","初めての地","未知の場所"]},
  ]
},
{
  word:"をこ・をこなり", meaning:"愚か（だ）",
  rarity:"N", atk:19, hp:110,
  reading:"をこ・をこなり", hinshi:"名詞・形容動詞（ナリ活用）",
  detail:"「をこ」＝「愚か」のニュアンス。思慮がなく間抜けな様子を表す語。現代語の「おこがましい」の語源とも言われる。",
  example:"をこなることかな。",
  exampleMeaning:"愚かなことよなあ。",
  source:"枕草子",
  quizzes:[
    {correct:"愚か（だ）", choices:["愚か（だ）","賢い","思慮深い","分別がある","聡明だ","判断力がある"]},
  ]
},
{
  word:"むべ・うべ", meaning:"なるほど",
  rarity:"N", atk:19, hp:110,
  reading:"むべ・うべ", hinshi:"副詞",
  detail:"「得可（うべ）」が語源。納得してうなずく様子を表す語。「なるほど・もっともだ」という深い同意・納得の感覚が核心。",
  example:"むべ山風をあらしといふらむ。",
  exampleMeaning:"なるほど山風を嵐というのだろう。",
  source:"古今和歌集",
  quizzes:[
    {correct:"なるほど", choices:["なるほど","まさか","信じられない","とんでもない","納得できない","そんなはずはない"]},
  ]
},
{
  word:"やをら・やはら", meaning:"そっと静かに / おもむろに",
  rarity:"N", atk:19, hp:110,
  reading:"やをら・やはら", hinshi:"副詞",
  detail:"「柔ら」が語源。ゆっくりと行う動作を表す語。音を立てずに静かに・ゆっくり落ち着いて動作するさまが核心。",
  example:"やをらかき消つやうにて。",
  exampleMeaning:"そっと静かに消えるように（消えてしまった）。",
  source:"源氏物語",
  quizzes:[
    {correct:"そっと静かに", choices:["そっと静かに","激しく","乱暴に","大声で","荒々しく","勢いよく"]},
    {correct:"おもむろに",   choices:["おもむろに","突然に","いきなり","急に","慌てて","あわただしく"]},
  ]
},
{
  word:"いとど", meaning:"ますます",
  rarity:"N", atk:19, hp:110,
  reading:"いとど", hinshi:"副詞",
  detail:"「いと」と混同しない。「いと」は「たいそう」だが「いとど」は「ますます」。程度が更に加わっていくさまが核心。",
  example:"いとど心細さまされど。",
  exampleMeaning:"ますます心細さが増すけれど。",
  source:"源氏物語",
  quizzes:[
    {correct:"ますます", choices:["ますます","少しだけ","わずかに","だんだん減る","次第に薄れる","もはや"]},
  ]
},
{
  word:"まだき", meaning:"まだその時期でないうちに",
  rarity:"N", atk:19, hp:110,
  reading:"まだき", hinshi:"副詞",
  detail:"まだその時期ではない状態（時期尚早）が核心。早すぎる・時機が来ていないのにもう、というニュアンスを表す。",
  example:"まだきに起き出でたまひて。",
  exampleMeaning:"まだその時期でないうちに（早くも）起き出していらっしゃって。",
  source:"源氏物語",
  quizzes:[
    {correct:"まだその時期でないうちに", choices:["まだその時期でないうちに","ちょうどよい時に","時機を得て","満を持して","頃合いを見計らって","絶好の時に"]},
  ]
},
{
  word:"あまた", meaning:"たくさん / たいそう",
  rarity:"N", atk:20, hp:113,
  reading:"あまた", hinshi:"副詞",
  detail:"「数多」という漢字表記を覚えれば意味は明らか。数量のたくさんと程度のはなはだしさの両方を表す語。",
  example:"あまたの人を引き連れて。",
  exampleMeaning:"たくさんの人を引き連れて。",
  source:"源氏物語",
  quizzes:[
    {correct:"たくさん", choices:["たくさん","わずかに","ほんの少し","数えるほど","ほとんどない","ひとつだけ"]},
    {correct:"たいそう", choices:["たいそう","少しも","全く","さほど","それほどでも","あまり"]},
  ]
},
{
  word:"かたみに", meaning:"互いに",
  rarity:"N", atk:19, hp:110,
  reading:"かたみに", hinshi:"副詞",
  detail:"「互に」という字を当てる。形見ではない。双方が同じことをし合う・お互いに、という相互性が核心。",
  example:"かたみに袖を濡らして。",
  exampleMeaning:"互いに袖を濡らして（泣いて）。",
  source:"古今和歌集",
  quizzes:[
    {correct:"互いに", choices:["互いに","一方的に","どちらか一方が","片方だけが","一人で","独りよがりに"]},
  ]
},
{
  word:"さがなし", meaning:"意地が悪い / （口）やかましい / いたずらだ",
  rarity:"SR", atk:41, hp:176,
  reading:"さがなし", hinshi:"形容詞（ク活用）",
  detail:"「さが（性）」（性質・性分の意）が形容詞化した語。もとの性質が悪いという核心から、意地悪・口うるさい・いたずらな様子を表す。",
  example:"さがなき童べどもの。",
  exampleMeaning:"いたずらな子供たちが。",
  source:"枕草子",
  quizzes:[
    {correct:"意地が悪い",     choices:["意地が悪い","心優しい","親切だ","思いやりがある","温かい","気立てが良い"]},
    {correct:"（口）やかましい", choices:["（口）やかましい","口数が少ない","無口だ","寡黙だ","物静かだ","黙っている"]},
    {correct:"いたずらだ",     choices:["いたずらだ","おとなしい","従順だ","品行方正だ","真面目だ","礼儀正しい"]},
  ]
},
{
  word:"びんなし", meaning:"不都合だ / つまらない",
  rarity:"N", atk:20, hp:113,
  reading:"びんなし", hinshi:"形容詞（ク活用）",
  detail:"「便」（具合の意）＋「無し」→「具合が悪い」の意味に。都合が悪い・間が悪いという核心から、つまらない・情けないの意味にも。",
  example:"びんなき折にぞ来たりける。",
  exampleMeaning:"不都合な時に来てしまった。",
  source:"源氏物語",
  quizzes:[
    {correct:"不都合だ",   choices:["不都合だ","都合がよい","好都合だ","うまくいく","申し分ない","ちょうどよい"]},
    {correct:"つまらない", choices:["つまらない","面白い","興味深い","趣がある","楽しい","心惹かれる"]},
  ]
},
{
  word:"かひなし", meaning:"むだだ / つまらない",
  rarity:"N", atk:19, hp:110,
  reading:"かひなし", hinshi:"形容詞（ク活用）",
  detail:"「甲斐がない」→「むだだ」の意味に。努力や行為に見合う効果・価値がないという核心から、つまらない・意味がないの意味にも。",
  example:"かひなき嘆きをのみして。",
  exampleMeaning:"むだな嘆きばかりして。",
  source:"源氏物語",
  quizzes:[
    {correct:"むだだ",     choices:["むだだ","意味がある","価値がある","甲斐がある","効果的だ","有益だ"]},
    {correct:"つまらない", choices:["つまらない","面白い","興味深い","趣がある","楽しい","心惹かれる"]},
  ]
},
{
  word:"いふかひなし", meaning:"どうしようもない / 言いようがない / つまらない",
  rarity:"SR", atk:42, hp:177,
  reading:"いふかひなし", hinshi:"形容詞（ク活用）",
  detail:"かひ（甲斐）は「価値」「効果」。言う価値がない→どうしようもない。言葉では表現できないほどひどい状態、または取るに足らないさまを表す。",
  example:"いふかひなき有様にて。",
  exampleMeaning:"どうしようもない有様で。",
  source:"源氏物語",
  quizzes:[
    {correct:"どうしようもない", choices:["どうしようもない","解決できる","なんとかなる","打開できる","うまくいく","方法がある"]},
    {correct:"言いようがない",   choices:["言いようがない","いくらでも言える","言葉に事欠かない","雄弁だ","語り尽くせる","うまく表現できる"]},
    {correct:"つまらない",       choices:["つまらない","面白い","興味深い","趣がある","楽しい","心惹かれる"]},
  ]
},
{
  word:"あり", meaning:"いる / 住む",
  rarity:"N", atk:17, hp:106,
  reading:"あり", hinshi:"動詞（ラ行変格活用）",
  detail:"現代語では「ある」。「いる」は人・動物に、「住む」は居住に使う。関連語「あらむ・あらば・あれど」などの形で頻出。",
  example:"都にありし時。",
  exampleMeaning:"都にいた時。",
  source:"土佐日記",
  quizzes:[
    {correct:"いる",  choices:["いる","いない","去る","立ち去る","消える","いなくなる"]},
    {correct:"住む",  choices:["住む","旅立つ","去る","放浪する","流浪する","さすらう"]},
  ]
},
{
  word:"さり", meaning:"そうだ",
  rarity:"N", atk:18, hp:108,
  reading:"さり", hinshi:"動詞（ラ行変格活用）",
  detail:"指示の副詞「さ」＋ラ変動詞「あり」→さあり→さり。「そのようだ・その通りだ」という同意・確認の意を表す。",
  example:"さりとも、かかるをりに。",
  exampleMeaning:"そうはいっても、こんな折に。",
  source:"源氏物語",
  quizzes:[
    {correct:"そうだ", choices:["そうだ","そうではない","違う","まったく異なる","見当違いだ","全然違う"]},
  ]
},
{
  word:"かづく", meaning:"褒美として頂戴する / 褒美として与える / かぶる / かぶせる / 水中にもぐる",
  rarity:"UR", atk:93, hp:228,
  skill:"firstTurn",
  reading:"かづく", hinshi:"動詞（カ行四段／下二段活用）",
  detail:"「褒美を頂戴する」（四段活用）と「褒美を与える」（下二段活用）。活用の種類で意味が変わる重要多義語。デッキに入れると最初のターンのみATKが2倍になる特殊スキルを持つ。",
  example:"御衣かづけたまひて。",
  exampleMeaning:"お召し物を褒美として与えなさって。",
  source:"源氏物語",
  quizzes:[
    {correct:"褒美として頂戴する", choices:["褒美として頂戴する","褒美を辞退する","褒美を断る","褒美を返す","褒美を拒む","褒美を捨てる"]},
    {correct:"褒美として与える",   choices:["褒美として与える","褒美を取り上げる","褒美を剥奪する","褒美を没収する","褒美を惜しむ","褒美を与えない"]},
    {correct:"かぶる",             choices:["かぶる","脱ぐ","はずす","取り除く","外す","はぎ取る"]},
    {correct:"かぶせる",           choices:["かぶせる","脱がせる","はずさせる","取り除く","外させる","はぎ取る"]},
    {correct:"水中にもぐる",       choices:["水中にもぐる","水面に浮かぶ","水上に出る","陸に上がる","浮き上がる","岸に戻る"]},
  ]
},
{
  word:"わく", meaning:"区別する / 分配する",
  rarity:"N", atk:20, hp:113,
  reading:"わく", hinshi:"動詞（カ行四段／下二段活用）",
  detail:"四段活用は「区別する」、下二段活用は「分配する」。活用の種類で意味が変わる語。物事を分けて扱うという核心が共通。",
  example:"わきても思はぬ心かな。",
  exampleMeaning:"区別して特別に思わない心よ。",
  source:"古今和歌集",
  quizzes:[
    {correct:"区別する", choices:["区別する","混同する","一緒にする","区別しない","ごちゃまぜにする","同一視する"]},
    {correct:"分配する", choices:["分配する","独り占めする","集める","まとめる","奪う","独占する"]},
  ]
},
{
  word:"ふる", meaning:"古びる / 老いる",
  rarity:"N", atk:19, hp:110,
  reading:"ふる", hinshi:"動詞（ラ行上二段活用）",
  detail:"「古」の字を当てる。活用に注意。時間が経って古くなる・年を取るという時間の経過による変化が核心。",
  example:"年ふりにけるかな。",
  exampleMeaning:"年老いてしまったことよ。",
  source:"古今和歌集",
  quizzes:[
    {correct:"古びる", choices:["古びる","新しくなる","生まれ変わる","新鮮になる","若返る","刷新される"]},
    {correct:"老いる", choices:["老いる","若返る","幼くなる","若くなる","生まれ変わる","青春を取り戻す"]},
  ]
},
{
  word:"あらまほし", meaning:"好ましい",
  rarity:"N", atk:21, hp:116,
  reading:"あらまほし", hinshi:"形容詞（シク活用）",
  detail:"組成は「あり」＋願望の助動詞「まほし」。「あってほしい・そうであってほしい」という願望から「好ましい・理想的だ」の意味に。",
  example:"あらまほしき御有様かな。",
  exampleMeaning:"好ましいご様子よなあ。",
  source:"源氏物語",
  quizzes:[
    {correct:"好ましい", choices:["好ましい","好ましくない","望ましくない","あってほしくない","忌まわしい","不快だ"]},
  ]
},
{
  word:"かたし", meaning:"むずかしい / まれだ / ～（し）にくい / 堅固だ",
  rarity:"SSR", atk:61, hp:193,
  skill:"guard",
  reading:"かたし", hinshi:"形容詞（ク活用）",
  detail:"「難し」の字から「難しい」の意味に。難しい・めったにない・しにくい・固いという幅広い意味を持つ重要語。デッキに入れると受けるダメージを20%軽減する特殊スキルを持つ。",
  example:"かたき世の中かな。",
  exampleMeaning:"難しい（生きにくい）世の中よなあ。",
  source:"徒然草",
  quizzes:[
    {correct:"むずかしい",    choices:["むずかしい","たやすい","造作もない","朝飯前だ","難なくできる","簡単だ"]},
    {correct:"まれだ",        choices:["まれだ","ありふれている","よく見かける","どこにでもある","平凡だ","当たり前だ"]},
    {correct:"～（し）にくい", choices:["～（し）にくい","～（し）やすい","～（し）放題だ","～（し）てもよい","難なく～できる","いくらでも～できる"]},
    {correct:"堅固だ",        choices:["堅固だ","もろい","崩れやすい","脆弱だ","頼りない","すぐ壊れる"]},
  ]
},
{
  word:"さらなり", meaning:"言うまでもない",
  rarity:"N", atk:18, hp:108,
  reading:"さらなり", hinshi:"形容動詞（ナリ活用）",
  detail:"さらに繰り返して「言うまでもない」の意に。「更なり」の字を当て、今さら言うまでもない・当然のことだという意味を表す。",
  example:"さらなり、夜昼の空は。",
  exampleMeaning:"言うまでもなく、昼夜の空は（美しい）。",
  source:"枕草子",
  quizzes:[
    {correct:"言うまでもない", choices:["言うまでもない","言わなければならない","説明が必要だ","言いにくい","口に出せない","言葉にならない"]},
  ]
},
{
  word:"いかなり", meaning:"どうだ / どんなだ",
  rarity:"N", atk:19, hp:110,
  reading:"いかなり", hinshi:"形容動詞（ナリ活用）",
  detail:"「いか」が語頭につくと多く疑問または反語の意味。「どのような」「どうした」という状態・様子への疑問が核心。",
  example:"いかなる心ちするらむ。",
  exampleMeaning:"どのような気持ちがするだろうか。",
  source:"源氏物語",
  quizzes:[
    {correct:"どうだ",   choices:["どうだ","決まっている","明らかだ","疑いようがない","当然だ","言うまでもない"]},
    {correct:"どんなだ", choices:["どんなだ","決まっている","明らかだ","疑いようがない","当然だ","言うまでもない"]},
  ]
},
{
  word:"つゆ", meaning:"わずか / 全く",
  rarity:"N", atk:19, hp:110,
  reading:"つゆ", hinshi:"副詞",
  detail:"「露」は、わずかではかないもの。少量の露のようなわずかさから、打消しを伴って「全く～ない」の意味にも使われる。",
  example:"つゆ思はずなりにけり。",
  exampleMeaning:"全く（少しも）思わなくなってしまった。",
  source:"源氏物語",
  quizzes:[
    {correct:"わずか", choices:["わずか","たくさん","大量に","あり余るほど","潤沢に","いくらでも"]},
    {correct:"全く",   choices:["全く","少し","わずかに","かすかに","ほんの少し","多少"]},
  ]
},
{
  word:"よろづ", meaning:"すべて / 何事につけて",
  rarity:"N", atk:20, hp:113,
  reading:"よろづ", hinshi:"名詞・副詞",
  detail:"「万」の字から「すべて、様々なこと」を連想。名詞では「あらゆること・万事」、副詞では「何事につけても」の意味を表す。",
  example:"よろづのことよりも。",
  exampleMeaning:"すべてのことよりも（何事よりも）。",
  source:"枕草子",
  quizzes:[
    {correct:"すべて",     choices:["すべて","一部","ひとつだけ","限られた","わずか","ほんの少し"]},
    {correct:"何事につけて", choices:["何事につけて","何事も無視して","ひとつのことだけに","限られた場合に","特定のことのみ","例外的に"]},
  ]
},
{
  word:"おほかた", meaning:"だいたい / 全然 / そもそも",
  rarity:"SSR", atk:62, hp:197,
  reading:"おほかた", hinshi:"名詞・副詞・接続詞",
  detail:"「だいたい」は名詞、「全然」と「だいたい」は副詞、「そもそも」は接続詞。特に「全然」と「そもそも」の用法に注意。",
  example:"おほかたいかがはすべき。",
  exampleMeaning:"そもそもどうすればよいのか。",
  source:"源氏物語",
  quizzes:[
    {correct:"だいたい",   choices:["だいたい","細かく","詳細に","一つ一つ","ことごとく","余すところなく"]},
    {correct:"全然",       choices:["全然","少し","わずかに","かすかに","多少","ある程度"]},
    {correct:"そもそも",   choices:["そもそも","結局","最終的に","ようやく","ついに","いよいよ"]},
  ]
},
{
  word:"あらまし", meaning:"予定 / 予想",
  rarity:"N", atk:20, hp:113,
  reading:"あらまし", hinshi:"名詞",
  detail:"ラ変動詞「あり」＋「まし」→「あればなあ」が原義。現実にはなっていないが、なるはずのこと・予想されることを表す語。",
  example:"あらましのことを語りて。",
  exampleMeaning:"予定のことを話して。",
  source:"源氏物語",
  quizzes:[
    {correct:"予定", choices:["予定","結果","現実","実際の出来事","成り行き","結末"]},
    {correct:"予想", choices:["予想","事実","現実","確定したこと","実際の結果","既に起きたこと"]},
  ]
},
{
  word:"ただ・ただなり", meaning:"直接 / すぐに / ちょうど / 普通だ",
  rarity:"SR", atk:40, hp:175,
  reading:"ただ・ただなり", hinshi:"副詞・形容動詞（ナリ活用）",
  detail:"「直接」「すぐに」は「直」。「ちょうど」「普通だ」は「只、徒、唯」を当てる。漢字で意味を判断する重要多義語。",
  example:"ただならぬ御けしきにて。",
  exampleMeaning:"普通でないご様子で。",
  source:"源氏物語",
  quizzes:[
    {correct:"直接",   choices:["直接","間接的に","遠回しに","人を介して","回り道して","婉曲に"]},
    {correct:"すぐに", choices:["すぐに","じっくりと","ゆっくりと","時間をかけて","徐々に","少しずつ"]},
    {correct:"ちょうど", choices:["ちょうど","まったく違う","ほど遠い","かけ離れている","全然異なる","似ても似つかない"]},
    {correct:"普通だ", choices:["普通だ","際立っている","格別だ","並外れている","特別だ","異様だ"]},
  ]
},
{
  word:"さ", meaning:"そう",
  rarity:"N", atk:17, hp:106,
  reading:"さ", hinshi:"副詞",
  detail:"指示の副詞。関連語・連語が大切。「さあり→さり（そうだ）」「さもあらば（そうならば）」「さすがに（そうはいっても）」など多くの連語の基となる語。",
  example:"さも思はれけむ。",
  exampleMeaning:"そう思われたことだろう。",
  source:"源氏物語",
  quizzes:[
    {correct:"そう", choices:["そう","違う","そうではない","まったく異なる","見当違いだ","全然違う"]},
  ]
},
{
  word:"かく・かう", meaning:"このように",
  rarity:"N", atk:18, hp:108,
  reading:"かく・かう", hinshi:"副詞",
  detail:"指示する内容の把握が大事。「かく」は直接的に「このように」と示す語。「かかり（このようだ）」「かかる（このような）」の語源。",
  example:"かく思ひたまへても。",
  exampleMeaning:"このように思っておりましても。",
  source:"源氏物語",
  quizzes:[
    {correct:"このように", choices:["このように","あのように","そのように","全く別の方法で","違うやり方で","正反対に"]},
  ]
},
{
  word:"さて", meaning:"そのまま / それ以外 / ところで",
  rarity:"N", atk:19, hp:110,
  reading:"さて", hinshi:"副詞・接続詞",
  detail:"「そのまま、それ以外」という副詞の用法が大切。そのままの状態で継続する意と、話題を転換する接続詞の用法がある。",
  example:"さてもかくてもあらむ。",
  exampleMeaning:"そのままでも（それ以外で）もあるだろう。",
  source:"源氏物語",
  quizzes:[
    {correct:"そのまま",   choices:["そのまま","変えて","改めて","やり直して","別の方法で","一から始めて"]},
    {correct:"それ以外",   choices:["それ以外","それだけ","そのみ","それに限って","それのみ","それ以上でも以下でもない"]},
    {correct:"ところで",   choices:["ところで","したがって","それゆえ","だから","その結果","以上のことから"]},
  ]
},
{
  word:"さも", meaning:"いかにも / そのように / それほど / そうも",
  rarity:"N", atk:20, hp:113,
  reading:"さも", hinshi:"副詞",
  detail:"指示の副詞「さ」＋係助詞「も」。そのように・いかにもという強い同意・肯定の意と、それほど・そうもという程度を表す用法がある。",
  example:"さもあらばあれ。",
  exampleMeaning:"そうであれ（そうなら仕方ない）。",
  source:"源氏物語",
  quizzes:[
    {correct:"いかにも",   choices:["いかにも","まったく違う","そうではない","見当違いだ","全然違う","そんなはずはない"]},
    {correct:"そのように", choices:["そのように","まったく別の方法で","違うやり方で","正反対に","あのように","全然異なる形で"]},
    {correct:"それほど",   choices:["それほど","少しも","全く","さほど","これっぽっちも","まったく"]},
    {correct:"そうも",     choices:["そうも","そうでもなく","違う形で","別の意味で","そうとは限らず","まったく逆に"]},
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
    missionCount: 0, missionCount10: 0
  },
  kobun: {
    deck: [],
    bossHP: 100, bossMaxHP: 100, bossLevel: 1, bossATK: 35,
    missionCount: 0, missionCount10: 0
  }
};

// Shared state
let owned = [];
let coins = 0, materials = 0, diamonds = 0;
let lastLoginDate = "", missionDate = "";
let sharedMissionCount10 = 0; // 英語・古文問わず共通
let missionPackDone = false;  // 英単語ガチャ1回引くミッション
let fukubikiTickets = 0;      // 福引チケット枚数

// Runtime battle state
let playerHP = 0, playerMaxHP = 0;
let firstTurnUsed = false; // かづくのファーストターンスキル管理
let inBattle = false;
let quizAnswer = "", quizLocked = false, quizCard = null;
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
    document.getElementById("battleTitle").textContent  = "⚔️ バトル（英語）";
    document.getElementById("versusTitle").textContent  = "🆚 プレイヤー対戦（英語）";
    document.getElementById("englishGachaSection").style.display = "block";
    document.getElementById("kobunGachaSection").style.display   = "none";
    document.getElementById("fukubikiSection").style.display     = "none";
    document.getElementById("gachaTab-english").className = "modeTab active-english";
    document.getElementById("gachaTab-kobun").className   = "modeTab";
    document.getElementById("gachaTab-fukubiki").className = "modeTab";
  } else {
    document.getElementById("packTitle").textContent    = "🎴 古文ガチャ";
    document.getElementById("deckTitle").textContent    = "🃏 古文デッキ（5枚）";
    document.getElementById("battleTitle").textContent  = "⚔️ バトル（古文）";
    document.getElementById("versusTitle").textContent  = "🆚 プレイヤー対戦（古文）";
    document.getElementById("englishGachaSection").style.display = "none";
    document.getElementById("kobunGachaSection").style.display   = "block";
    document.getElementById("fukubikiSection").style.display     = "none";
    document.getElementById("gachaTab-english").className = "modeTab";
    document.getElementById("gachaTab-kobun").className   = "modeTab active-kobun";
    document.getElementById("gachaTab-fukubiki").className = "modeTab";
  }

  // Clear quiz area to avoid stale quiz from old mode
  document.getElementById("bossQuizArea").innerHTML = ""; const pwa=document.getElementById("prevWordArea"); if(pwa) pwa.innerHTML="";
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
      // モード切り替え時はメニューに戻す
      inBattle = false;
      document.getElementById("battleMenu").style.display = "block";
      document.getElementById("battleMain").style.display = "none";
      document.getElementById("rarityBattleMenu").style.display = "none";
      document.getElementById("bossQuizArea").innerHTML = "";
      const pwa=document.getElementById("prevWordArea"); if(pwa) pwa.innerHTML="";
      update();
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
  const rarityColor = {N:"#aaa",R:"#6BCB77",SR:"#4D96FF",SSR:"#FFD93D",UR:"#ff9500"}[card.rarity]||"#fff";
  const skillLabels = {critical:"⚡ CRITICAL 20%", critical33:"⚡ 正解時CRITICAL 33%", drain:"💚 ドレイン10%", regen:"💛 毎ターンHP+150", firstTurn:"⚡ 初回ATK×2", guard:"🛡 ダメージ20%軽減"};
  const skillBadge = card.skill
    ? `<div class="ur-skill-badge" style="margin:4px 0;display:inline-block">${skillLabels[card.skill]||""}</div>`
    : "";
  document.getElementById("kobunModalContent").innerHTML=`
    <div class="km-rarity" style="color:${rarityColor}">${card.rarity}</div>
    ${skillBadge}
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

function showEnglishDetail(card){
  const rarityColor = {N:"#aaa",R:"#6BCB77",SR:"#4D96FF",SSR:"#FFD93D",UR:"#ff9500"}[card.rarity]||"#fff";
  const skillBadge = card.skill
    ? `<div class="ur-skill-badge" style="margin:6px 0;display:inline-block">${card.skill==="critical33"?"⚡ 正解時CRITICAL 33%":card.skill==="critical"?"⚡ CRITICAL 20%":"💚 ドレイン10%"}</div>`
    : "";
  document.getElementById("englishModalContent").innerHTML=`
    <div style="text-align:center;margin-bottom:12px">
      <div style="font-family:'Fredoka One',cursive;font-size:1.8rem;color:#fff;margin-bottom:4px">${card.word.toUpperCase()}</div>
      <div style="color:${rarityColor};font-weight:700;font-size:0.9rem;margin-bottom:2px">${card.rarity}</div>
      ${skillBadge}
      <div style="font-size:1.1rem;color:var(--pop2);font-weight:700;margin-top:6px">${card.meaning}</div>
    </div>
    <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:12px;margin-bottom:10px">
      <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:4px">品詞</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.85)">${card.partOfSpeech||"—"}</div>
    </div>
    <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:12px;margin-bottom:10px">
      <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:4px">例文</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.6">${card.example||"—"}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:4px">${card.exampleJp||""}</div>
    </div>
    <div style="display:flex;justify-content:center;gap:16px;font-size:13px;color:rgba(255,255,255,0.5)">
      <span>⚔️ ATK ${card.atk}</span>
      <span>❤️ HP ${card.hp}</span>
    </div>`;
  document.getElementById("englishModal").style.display="flex";
}
function closeEnglishModal(){ document.getElementById("englishModal").style.display="none"; }

function showEnglishDetailByWord(word){
  const card = allCards.find(c=>c.word===word);
  if(!card) return;
  showEnglishDetail(card);
}

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
  const emoji = pool[(ms().bossLevel-1) % pool.length];
  el.textContent = emoji;
  // ボタンのアイコンも同期
  const btnIcon = document.getElementById("battleBtnIcon");
  if(btnIcon) btnIcon.textContent = emoji;
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
  quizCard = card;

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

  // 4択はボタンを押してから表示
  const choicesHtml = choices.map(opt=>
    `<button class="quiz-btn" onclick="answerQuiz('${opt.replace(/'/g,"\\'")}',this)">${opt}</button>`
  ).join("");
  document.getElementById("bossQuizArea").innerHTML=`
    <h2>「${card.word}」の意味は？</h2>
    <button onclick="showQuizChoices(this,'${card.word}')" style="background:rgba(77,150,255,0.3);box-shadow:none;border:1px solid rgba(77,150,255,0.5);margin:8px auto;display:block">
      📋 4択を表示
    </button>
    <div class="quiz-options" id="quizChoicesArea" style="display:none">${choicesHtml}</div>`;
}

function answerQuiz(choice, btn){
  if(quizLocked) return;
  quizLocked = true;
  const state = ms();
  let atk = 0;
  state.deck.forEach(c=>atk+=c.atk+(c.upgrade||0)*Math.floor(c.atk*0.05));
  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);

  // ファーストターンスキル（かづく）：最初のターンのみATK×2（正解・不正解問わず）
  const hasFirstTurn = state.deck.some(c=>c.skill==="firstTurn");
  if(hasFirstTurn && !firstTurnUsed){
    atk = atk * 2;
    firstTurnUsed = true;
    const txt = document.createElement("div");
    txt.style.cssText = `position:fixed;top:calc(50% + 60px);left:50%;transform:translateX(-50%);
      font-family:'Fredoka One',cursive;font-size:1.1rem;color:#FFD93D;
      text-shadow:0 0 10px rgba(255,217,61,0.8);pointer-events:none;z-index:9999;
      animation:critical-flash 1.4s ease forwards;white-space:nowrap`;
    txt.textContent = "⚡ 初回ATK×2";
    document.body.appendChild(txt);
    setTimeout(()=>txt.remove(), 1400);
  }

  if(choice===quizAnswer){
    btn.classList.add("correct");
    showCorrectCircle();

    // URカードのクリティカル（正解時のみ）- firstTurnと重なると4倍
    const hasUR = state.deck.some(c=>c.rarity==="UR");
    if(hasUR){
      const hasCrit33 = state.deck.some(c=>c.skill==="critical33");
      const hasCrit20 = state.deck.some(c=>c.skill==="critical");
      const rate = hasCrit33 ? 0.33 : hasCrit20 ? 0.2 : 0;
      if(rate > 0 && Math.random() < rate){
        atk = atk * 2;
        showCritical();
      }
    }

    state.missionCount++;
    if(state.missionCount===3){
      diamonds+=5;
      saveGame();
      showMissionComplete("クイズ3問正解！ 💎×5");
    }
    sharedMissionCount10++;
    if(sharedMissionCount10===10){
      diamonds+=5;
      saveGame();
      showMissionComplete("クイズ10問正解！ 💎×5");
    }
    updateMissionUI();
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".quiz-btn").forEach(b=>{ if(b.textContent===quizAnswer) b.classList.add("correct"); });
  }

  // 正解・不正解どちらでも詳細ボタンを prevWordArea に表示（次の問題でも残る）
  if(quizCard){
    const area = document.getElementById("prevWordArea");
    if(area){
      if(currentMode==="kobun" && quizCard.detail){
        area.innerHTML=`
          <button onclick="showKobunDetail('${quizCard.word.replace(/'/g,"\\'")}') "
            style="margin-top:8px;background:rgba(199,125,255,0.2);box-shadow:none;border:1px solid rgba(199,125,255,0.4);font-size:12px;color:var(--pop5);width:90%">
            📖 前の問題「${quizCard.word}」の詳細
          </button>`;
      } else if(currentMode==="english"){
        area.innerHTML=`
          <button onclick="showEnglishDetailByWord('${quizCard.word.replace(/'/g,"\\'")}') "
            style="margin-top:8px;background:rgba(77,150,255,0.2);box-shadow:none;border:1px solid rgba(77,150,255,0.4);font-size:12px;color:var(--pop4);width:90%">
            📖 前の問題「${quizCard.word.toUpperCase()}」の詳細
          </button>`;
      }
    }
  }

  state.bossHP -= atk;
  let playerDmg = choice===quizAnswer ? Math.floor(state.bossATK/2) : state.bossATK;

  // ガードスキル（かたし）：ダメージ20%軽減
  const hasGuard = state.deck.some(c=>c.skill==="guard");
  if(hasGuard) playerDmg = Math.floor(playerDmg * 0.8);

  playerHP -= playerDmg;

  // ドレインスキル：ほど（UR）がデッキにある場合、与えたダメージの10%を回復
  if(choice===quizAnswer && atk > 0){
    const hasDrain = state.deck.some(c=>c.skill==="drain");
    if(hasDrain){
      const heal = Math.floor(atk * 0.1);
      playerHP = Math.min(playerHP + heal, playerMaxHP);
      showHealPopup(heal, -50); // ドレインは左寄り
    }
  }

  shakeBoss();
  if(atk > 0) showDmgPopup(atk, false);
  if(playerDmg > 0) showDmgPopup(playerDmg, true);

  // リジェネスキル（たまふ）：毎ターンHP+150回復
  const hasRegen = state.deck.some(c=>c.skill==="regen");
  if(hasRegen){
    const regenHeal = 150;
    playerHP = Math.min(playerHP + regenHeal, playerMaxHP);
    showHealPopup(regenHeal, 50); // リジェネは右寄り
  }

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
    const reward = isMillestone ? 20 : 5;
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
  firstTurnUsed = false;
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
  const base = (card.type==="english" ? allCards : kobunCards).find(b=>b.word===card.word);
  const skill = card.skill || (base ? base.skill : undefined);
  d.push({...card, skill});
  saveGame(); update();
}

function addDeckFromBook(word){
  const d = currentDeck();
  if(d.length>=5){alert("デッキは5枚まで！");return;}
  const card = owned.find(c=>c.word===word && c.type===currentMode);
  if(!card) return;
  if(d.some(c=>c.word===word)){alert("同じカードは入れられません！");return;}
  // baseカードからskillを補完
  const base = (currentMode==="english" ? allCards : kobunCards).find(b=>b.word===word);
  const skill = card.skill || (base ? base.skill : undefined);
  d.push({...card, skill});
  saveGame(); update();
}

function removeDeck(index){
  currentDeck().splice(index,1);
  saveGame(); update();
}

function calcDeckStats(){
  const d = currentDeck();
  let totalATK=0, totalHP=0;
  d.forEach(c=>{
    totalATK += c.atk + (c.upgrade||0)*Math.floor(c.atk*0.05);
    totalHP  += c.hp;
  });
  document.getElementById("deckATK").textContent = totalATK;
  document.getElementById("deckHP").textContent = totalHP;
  document.getElementById("battleATK").textContent = totalATK;
  document.getElementById("battleHP").textContent = totalHP;

  // スキル表示
  updateSkillDisplay(d, "battleSkillArea");
  updateSkillDisplay(d, "deckSkillArea");
}

function updateSkillDisplay(deck, areaId){
  const area = document.getElementById(areaId);
  if(!area) return;
  const skills = [];
  deck.forEach(c=>{
    if(c.skill==="critical")    skills.push("⚡ CRITICAL 20% 発動中（ものす）");
    if(c.skill==="critical33")  skills.push("⚡ 正解時CRITICAL 33% 発動中（etiquette）");
    if(c.skill==="drain")       skills.push("💚 ドレイン10% 発動中（ほど）");
    if(c.skill==="regen")       skills.push("💛 毎ターンHP+150 発動中（たまふ）");
    if(c.skill==="firstTurn")   skills.push("⚡ 初回ATK×2 発動中（かづく）");
    if(c.skill==="guard")       skills.push("🛡 ダメージ20%軽減 発動中（かたし）");
  });
  if(skills.length===0){ area.innerHTML=""; return; }
  area.innerHTML = skills.map(s=>
    `<div class="ur-skill-badge" style="font-size:11px;margin:2px 3px;display:inline-block">${s}</div>`
  ).join("");
}

// =============================================
//  UPDATE (render)
// =============================================
function update(){
  // バトル画面のスクロール位置を保存
  const savedScroll = inBattle ? window.scrollY : 0;

  // デッキカードをownedの最新データで同期（強化情報を反映・最高upgrade版を使用）
  ["english","kobun"].forEach(m=>{
    modeState[m].deck = modeState[m].deck.map(dc=>{
      const matches = owned.filter(o=>o.word===dc.word && o.type===dc.type);
      if(!matches.length) return dc;
      const best = matches.reduce((a,b)=>(a.upgrade||0)>=(b.upgrade||0)?a:b);
      // skillフィールドがない場合はベースカードから補完
      const base = (dc.type==="english" ? allCards : kobunCards).find(b=>b.word===dc.word);
      const skill = best.skill || (base ? base.skill : undefined);
      return {...best, skill};
    });
  });

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
  updateSkillDisplay(currentDeck(), "deckSkillArea");

  // Collection (book) - only current mode cards
  const col = document.getElementById("collection");
  col.innerHTML = "";
  const grouped = {};
  let list = owned.filter(c=>c.type===currentMode);
  if(sortType==="atk") list.sort((a,b)=>b.atk-a.atk);
  if(sortType==="hp")  list.sort((a,b)=>b.hp-a.hp);
  if(sortType==="rarity"){ const order={UR:5,SSR:4,SR:3,R:2,N:1}; list.sort((a,b)=>order[b.rarity]-order[a.rarity]); }
  list.forEach(c=>{
    if(!grouped[c.word]){ grouped[c.word]={...c,count:0}; }
    else if((c.upgrade||0) > (grouped[c.word].upgrade||0)){ grouped[c.word]={...c,count:grouped[c.word].count}; }
    grouped[c.word].count++;
  });
  for(const key in grouped){
    const c = grouped[key];
    if(rarityFilter!=="all" && c.rarity!==rarityFilter) continue;
    const isKobun = c.type==="kobun";
    const isEnglish = c.type==="english";
    const isUR = c.rarity==="UR";
    const clickable = isKobun
      ? `onclick="showKobunDetail('${c.word.replace(/'/g,"\\'")}') "`
      : isEnglish
        ? `onclick="showEnglishDetailByWord('${c.word.replace(/'/g,"\\'")}') "`
        : "";
    const hint = (isKobun || isEnglish) ? '<div class="kobun-hint">📖 詳細</div>' : "";
    col.innerHTML+=`<div class="card ${c.rarity.toLowerCase()}${(isKobun||isEnglish)?" kobun-clickable":""}" ${clickable}>
      ${hint}
      <div class="word">${c.word}</div>
      <div class="meaning">${c.meaning}</div>
      <div class="stat">ATK ${c.atk}</div>
      <div class="stat">HP ${c.hp}</div>
      <div class="stat">×${c.count}</div>
      <div class="stat">強化 ${c.upgrade||0}/${getUpgradeMaxLevel(c.word)}</div>
      ${c.skill ? `<div class="ur-skill-badge">${{critical:"⚡ CRITICAL 20%",critical33:"⚡ 正解時CRITICAL 33%",drain:"💚 ドレイン10%",regen:"💛 毎ターンHP+150",firstTurn:"⚡ 初回ATK×2",guard:"🛡 ダメージ20%軽減"}[c.skill]||""}</div>` : ''}
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
    const rarityOrder = ["N","R","SR","SSR","UR"];
    const rarityLabel = {N:"N",R:"R",SR:"SR",SSR:"SSR",UR:"⚡ UR"};
    const rarityColor = {N:"#888",R:"var(--pop3)",SR:"var(--pop4)",SSR:"var(--pop2)",UR:"#ff9500"};
    const gain = Object.fromEntries(['N','R','SR','SSR','UR'].map(r=>[r,getConvertGain(r,currentMode)]));

    rarityOrder.forEach(rarity=>{
      // そのレアリティの重複カードを集計
      const grouped = {};
      owned.filter(c=>c.type===currentMode && c.rarity===rarity).forEach(c=>{
        if(!grouped[c.word]) grouped[c.word] = 0;
        grouped[c.word]++;
      });
      const dupes = Object.entries(grouped).filter(([,cnt])=>cnt>1);
      const totalExtra = dupes.reduce((sum,[,cnt])=>sum+(cnt-1),0);
      if(totalExtra===0) return;

      const g = gain[rarity]||[10,1];
      const reward = convertMode==="coin" ? `🪙×${g[0]*totalExtra}` : `🔧×${g[1]*totalExtra}`;

      conv.innerHTML+=`
        <div class="convert-rarity-block">
          <div class="convert-rarity-header" style="border-color:${rarityColor[rarity]};color:${rarityColor[rarity]}">
            <span>${rarityLabel[rarity]} 重複 ${totalExtra}枚</span>
            <span class="convert-reward">${reward}</span>
          </div>
          <div class="convert-rarity-cards">
            ${dupes.map(([word,cnt])=>{
              const isSelected = bulkSelected.has(word);
              return `
              <div class="convert-mini-card ${rarity.toLowerCase()}${bulkMode?' bulk-selectable':''}${isSelected?' bulk-selected':''}"
                   onclick="${bulkMode?`toggleBulkCard('${word}')`:''}" style="${bulkMode?'cursor:pointer':''}">
                ${bulkMode?`<div class="bulk-check">${isSelected?'✅':''}</div>`:''}
                <div class="convert-word">${word}</div>
                <div class="convert-count">×${cnt}</div>
                ${!bulkMode?`<button onclick="convertCard('${word}')" style="font-size:10px;padding:3px 8px;margin:2px 0">1枚変換</button>`:''}
              </div>`;
            }).join("")}
          </div>
          <button onclick="convertAllRarity('${rarity}')" style="background:linear-gradient(135deg,${rarityColor[rarity]},${rarityColor[rarity]}aa);margin-top:6px;font-size:13px;padding:8px 20px">
            まとめて変換 → ${reward}
          </button>
        </div>`;
    });

    if(conv.innerHTML===""){
      conv.innerHTML=`<div style="color:rgba(255,255,255,0.35);font-size:14px;margin-top:16px">重複カードがありません</div>`;
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
  updateMissionUI();

  // バトル中はスクロール位置を復元
  if(inBattle && savedScroll > 0) window.scrollTo(0, savedScroll);
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
    // バトルメニューを表示（バトル本体は非表示）
    inBattle = false;
    document.getElementById("battleMenu").style.display = "block";
    document.getElementById("battleMain").style.display = "none";
    document.getElementById("bossQuizArea").innerHTML = ""; const pwa=document.getElementById("prevWordArea"); if(pwa) pwa.innerHTML="";
  }

  document.getElementById(id).classList.add("active");
  if(id==="versus") initVersusUI();
  update();

  document.querySelectorAll(".bottomMenu button").forEach(b=>b.classList.remove("active"));
  const map={battle:"btnBattle",pack:"btnPack",deck:"btnDeck",book:"btnBook",convert:"btnConvert",versus:"btnVersus"};
  if(map[id]) document.getElementById(map[id]).classList.add("active");
}

// =============================================
//  DAILY BOSS BATTLE
// =============================================
let dailyBossTab = "english"; // 表示中のタブ
let dailyBossHP = { english: 0, kobun: 0 };
let dailyBossMaxHP = { english: 0, kobun: 0 };
let dailyBossATK = { english: 0, kobun: 0 };

function initDailyBossStats(){
  // 毎日同じ値になるようにその日の日付をシードに使う
  const seed = new Date().toDateString();
  const hash = s => s.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  const rand = (min,max,offset) => min + ((hash(seed)+offset) % (max-min+1));
  if(dailyBossMaxHP.english === 0){
    dailyBossMaxHP.english = rand(3000,6000,0);
    dailyBossATK.english   = rand(200,600,1);
    dailyBossMaxHP.kobun   = rand(3000,6000,2);
    dailyBossATK.kobun     = rand(200,600,3);
  }
}
let dailyPlayerHP = 0;
let dailyPlayerMaxHP = 0;
let inDailyBattle = false;
let dailyQuizAnswer = "";
let dailyQuizCard = null;
let dailyQuizLocked = false;

const dailyBossEmojis = { english: "👾", kobun: "🔱" };

function getDailyKey(type){ return `daily_${type}_${new Date().toDateString()}`; }

function isDailyBossDefeated(type){
  return localStorage.getItem(getDailyKey(type)) === "defeated";
}

function markDailyBossDefeated(type){
  localStorage.setItem(getDailyKey(type), "defeated");
}

function showDailyBoss(){
  initDailyBossStats();
  document.getElementById("battleMenu").style.display = "none";
  document.getElementById("dailyBossArea").style.display = "block";
  switchDailyTab(dailyBossTab);
}

function switchDailyTab(type){
  dailyBossTab = type;
  const eb = document.getElementById("dailyTabEnglish");
  const kb = document.getElementById("dailyTabKobun");
  if(eb) eb.style.background = type==="english" ? "linear-gradient(135deg,#4D96FF,#6BCB77)" : "rgba(255,255,255,0.1)";
  if(kb) kb.style.background = type==="kobun"   ? "linear-gradient(135deg,#C77DFF,#FF6B6B)" : "rgba(255,255,255,0.1)";
  renderDailyBossContent(type);
}

function renderDailyBossContent(type){
  const area = document.getElementById("dailyBossContent");
  const defeated = isDailyBossDefeated(type);
  const emoji = dailyBossEmojis[type];
  const name = type==="english" ? "英語デイリーボス" : "古文デイリーボス";

  if(defeated){
    area.innerHTML=`
      <div style="text-align:center;padding:20px">
        <div style="font-size:3rem;filter:grayscale(1)">${emoji}</div>
        <div style="font-family:'Fredoka One',cursive;font-size:1.1rem;color:rgba(255,255,255,0.4);margin:10px 0">撃破済み！</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.3)">明日また挑戦できます</div>
      </div>`;
    return;
  }

  area.innerHTML=`
    <div style="text-align:center;padding:12px">
      <div style="font-size:3.5rem">${emoji}</div>
      <div style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:var(--pop2);margin:8px 0">${name}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:12px">
        HP: ${dailyBossMaxHP[type]} / ATK: ${dailyBossATK[type]}<br>
        倒すと 💎×15 獲得！
      </div>
      <button onclick="startDailyBattle('${type}')" style="background:linear-gradient(135deg,#FFD93D,#FF6B6B);font-size:1rem;padding:14px 28px">
        ⚔️ 挑戦する！
      </button>
    </div>`;
}

function startDailyBattle(type){
  dailyBossTab = type;
  inDailyBattle = true;

  const deck = modeState[type].deck;
  if(!deck || deck.length < 5){ alert("デッキを5枚編成してください！"); return; }
  dailyPlayerMaxHP = 0;
  deck.forEach(c=>{ dailyPlayerMaxHP += c.hp; });
  dailyPlayerHP = dailyPlayerMaxHP;

  dailyBossHP[type] = dailyBossMaxHP[type];

  document.getElementById("dailyBossArea").style.display = "none";
  document.getElementById("dailyBattleMain").style.display = "block";

  document.getElementById("dailyBossEmoji").textContent = dailyBossEmojis[type];
  document.getElementById("dailyBossLabel").textContent = `🌟 ${type==="english"?"英語":"古文"}デイリーボス`;

  // デッキATK表示
  let totalATK = 0;
  deck.forEach(c=>{ totalATK += c.atk + (c.upgrade||0)*Math.floor(c.atk*0.05); });
  document.getElementById("dailyBattleATK").textContent = totalATK;
  document.getElementById("dailyBattleHP").textContent = dailyPlayerMaxHP;
  document.getElementById("dailyBossATKDisplay").textContent = dailyBossATK[type];

  // スキル表示
  const skillArea = document.getElementById("dailySkillArea");
  updateSkillDisplay(deck, "dailySkillArea");

  updateDailyHPBars();
  generateDailyQuiz();
}

function updateDailyHPBars(){
  const type = dailyBossTab;
  const bossRatio = Math.max(0, dailyBossHP[type] / dailyBossMaxHP[type] * 100);
  const playerRatio = Math.max(0, dailyPlayerHP / dailyPlayerMaxHP * 100);
  document.getElementById("dailyBossHPBar").style.width = bossRatio + "%";
  document.getElementById("dailyPlayerHPBar").style.width = playerRatio + "%";
  document.getElementById("dailyBossHPNum").textContent = Math.max(0, dailyBossHP[type]);
  document.getElementById("dailyPlayerHPNum").textContent = Math.max(0, dailyPlayerHP);
}

function generateDailyQuiz(){
  if(!inDailyBattle) return;
  dailyQuizLocked = false;
  const type = dailyBossTab;
  const pool = type==="english" ? allCards : kobunCards;
  const card = pool[Math.floor(Math.random()*pool.length)];
  dailyQuizCard = card;

  let correct, wrongPool;
  if(card.quizzes && card.quizzes.length > 0){
    const q = card.quizzes[Math.floor(Math.random()*card.quizzes.length)];
    correct = q.correct;
    // 他のカードの正解から不正解選択肢を作る
    wrongPool = pool.filter(c=>c.word!==card.word)
      .map(c=> c.quizzes && c.quizzes.length>0 ? c.quizzes[0].correct : c.meaning)
      .filter(m=>m!==correct);
  } else {
    correct = card.meaning;
    wrongPool = pool.filter(c=>c.word!==card.word).map(c=>c.meaning).filter(m=>m!==correct);
  }

  // 他のカードの正解から3つ選ぶ
  const wrongs = wrongPool.sort(()=>Math.random()-0.5).slice(0,3);
  const choices = [...wrongs, correct].sort(()=>Math.random()-0.5);
  dailyQuizAnswer = correct;

  const choicesHtml = choices.map(opt=>
    `<button class="quiz-btn" onclick="answerDailyQuiz('${opt.replace(/'/g,"\\'")}',this)">${opt}</button>`
  ).join("");
  document.getElementById("dailyQuizArea").innerHTML=`
    <h2>「${card.word}」の意味は？</h2>
    <button onclick="showQuizChoices(this,'daily')" style="background:rgba(77,150,255,0.3);box-shadow:none;border:1px solid rgba(77,150,255,0.5);margin:8px auto;display:block">
      📋 4択を表示
    </button>
    <div class="quiz-options" id="quizChoicesArea" style="display:none">${choicesHtml}</div>`;
}

function answerDailyQuiz(choice, btn){
  if(dailyQuizLocked) return;
  dailyQuizLocked = true;
  const type = dailyBossTab;
  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);

  const deck = modeState[type].deck;
  let atk = 0;
  deck.forEach(c=>{ atk += c.atk + (c.upgrade||0)*Math.floor(c.atk*0.05); });

  if(choice===dailyQuizAnswer){
    btn.classList.add("correct");
    showCorrectCircle();
    // クリティカル判定
    const hasUR = deck.some(c=>c.rarity==="UR");
    if(hasUR && Math.random() < 0.2){
      atk = atk * 2;
      showCritical();
    }
    dailyBossHP[type] -= atk;
    showDailyDmgPopup(atk, false);
    // 共通ミッションカウント
    sharedMissionCount10++;
    if(sharedMissionCount10===10){
      diamonds+=5;
      saveGame();
      showMissionComplete("クイズ10問正解！ 💎×5");
    }
    updateMissionUI();
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".quiz-btn").forEach(b=>{ if(b.textContent===dailyQuizAnswer) b.classList.add("correct"); });
    dailyPlayerHP -= dailyBossATK[type];
    showDailyDmgPopup(dailyBossATK[type], true);
  }

  // 古文モードなら詳細ボタン
  if(type==="kobun" && dailyQuizCard && dailyQuizCard.detail){
    const area = document.getElementById("dailyPrevWordArea");
    if(area) area.innerHTML=`<button onclick="showKobunDetail('${dailyQuizCard.word.replace(/'/g,"\\'")}') "
      style="margin-top:8px;background:rgba(199,125,255,0.2);box-shadow:none;border:1px solid rgba(199,125,255,0.4);font-size:12px;color:var(--pop5);width:90%">
      📖 前の問題「${dailyQuizCard.word}」の詳細</button>`;
  }

  updateDailyHPBars();

  setTimeout(()=>{
    if(dailyBossHP[type] <= 0){
      markDailyBossDefeated(type);
      diamonds += 15;
      saveGame();
      const bothDefeated = isDailyBossDefeated("english") && isDailyBossDefeated("kobun");
      inDailyBattle = false;
      document.getElementById("dailyBattleMain").style.display = "none";
      document.getElementById("dailyBossArea").style.display = "block";
      renderDailyBossContent(type);
      alert(bothDefeated
        ? `🎉 ${type==="english"?"英語":"古文"}ボスを撃破！💎×15獲得！\n両方撃破！合計💎×30獲得！`
        : `🎉 ${type==="english"?"英語":"古文"}ボスを撃破！💎×15獲得！`);
      return;
    }
    if(dailyPlayerHP <= 0){
      inDailyBattle = false;
      document.getElementById("dailyBattleMain").style.display = "none";
      document.getElementById("dailyBossArea").style.display = "block";
      alert("敗北...もう一度挑戦できます！");
      return;
    }
    setTimeout(generateDailyQuiz, 300);
  }, 900);
}

function showDailyDmgPopup(dmg, isPlayer){
  const bossEl = document.getElementById("dailyBossEmoji");
  const ref = isPlayer ? document.getElementById("dailyPlayerHPNum") : bossEl;
  if(!ref) return;
  const rect = ref.getBoundingClientRect();
  const popup = document.createElement("div");
  popup.className = "dmg-popup";
  popup.textContent = (isPlayer ? "-" : "-") + dmg;
  popup.style.color = isPlayer ? "#FF6B6B" : "#FFD93D";
  popup.style.left = rect.left + rect.width/2 + "px";
  popup.style.top  = rect.top + window.scrollY - 10 + "px";
  document.body.appendChild(popup);
  setTimeout(()=>popup.remove(), 900);
}

function backToDailyBoss(){
  inDailyBattle = false;
  document.getElementById("dailyBattleMain").style.display = "none";
  document.getElementById("dailyBossArea").style.display = "block";
  document.getElementById("dailyQuizArea").innerHTML = "";
  document.getElementById("dailyPrevWordArea").innerHTML = "";
}

// =============================================
//  BATTLE MENU
// =============================================
function startNormalBattle(){
  rarityBattleFilter = "ALL";
  document.getElementById("battleMenu").style.display = "none";
  document.getElementById("battleMain").style.display = "block";
  inBattle = true;
  const state = ms();
  document.getElementById("bossLevel").textContent      = state.bossLevel;
  document.getElementById("bossATKDisplay").textContent = state.bossATK;
  updateBossVisual();
  startBattle();
  calcDeckStats();
  document.getElementById("bossQuizArea").innerHTML = "";
  const pwa = document.getElementById("prevWordArea"); if(pwa) pwa.innerHTML="";
  generateQuiz();
}

function startEnhancedBattle(){
  rarityBattleFilter = "ALL";
  document.getElementById("battleMenu").style.display = "none";
  document.getElementById("battleMain").style.display = "block";
  inBattle = true;
  const state = ms();
  // 強化ボス：ATK×1.5（HPは通常のまま）
  const enhancedATK = Math.floor(state.bossATK * 1.5);
  document.getElementById("bossLevel").textContent      = state.bossLevel + "★";
  document.getElementById("bossATKDisplay").textContent = enhancedATK;
  updateBossVisual();
  startBattle();
  state.bossATK = enhancedATK;
  calcDeckStats();
  updateHPBars();
  document.getElementById("bossQuizArea").innerHTML = "";
  const pwa = document.getElementById("prevWordArea"); if(pwa) pwa.innerHTML="";
  generateQuiz();
}

function showRarityBattleMenu(){
  document.getElementById("battleMenu").style.display = "none";
  document.getElementById("rarityBattleMenu").style.display = "block";
}

// レアリティ別ボスレベル（モードごと独立）
const rarityBossState = {
  english: { N:{level:1,hp:150,maxHP:150,atk:30}, R:{level:1,hp:200,maxHP:200,atk:45}, SR:{level:1,hp:250,maxHP:250,atk:60}, SSR:{level:1,hp:300,maxHP:300,atk:80} },
  kobun:   { N:{level:1,hp:150,maxHP:150,atk:30}, R:{level:1,hp:200,maxHP:200,atk:45}, SR:{level:1,hp:250,maxHP:250,atk:60}, SSR:{level:1,hp:300,maxHP:300,atk:80} }
};

let rarityBattleFilter = "ALL";
let raritySelectedDeck = [];
let rarityPoolCards = [];

function startRarityBattle(rarity){
  rarityBattleFilter = rarity;
  document.getElementById("rarityBattleMenu").style.display = "none";
  document.getElementById("rarityDeckSelect").style.display = "block";

  // 他のボタンを無効化
  document.querySelectorAll("button").forEach(b=>b.disabled=true);
  // 戻るボタンだけ有効
  document.querySelector("#rarityDeckSelect button[onclick='backToRarityMenu()']").disabled = false;
  document.querySelectorAll("#rarityDeckSelect button[onclick^='sortRarityPool']").forEach(b=>b.disabled=false);

  const labelMap = {N:"N のみ", R:"R のみ", SR:"SR のみ", SSR:"SSR のみ"};
  const colorMap = {N:"#888", R:"var(--pop3)", SR:"var(--pop4)", SSR:"var(--pop2)"};
  document.getElementById("rarityDeckTitle").innerHTML =
    `<span style="color:${colorMap[rarity]}">⭐ ${labelMap[rarity]} バトル</span>`;

  raritySelectedDeck = [];

  const pool = cardPool();
  const uniqueOwned = {};
  owned.filter(c=>c.type===currentMode && c.rarity===rarity).forEach(c=>{
    if(!uniqueOwned[c.word]){
      const base = pool.find(p=>p.word===c.word);
      uniqueOwned[c.word] = base ? {...base, upgrade:c.upgrade||0, atk:c.atk, hp:c.hp} : c;
    }
  });
  rarityPoolCards = Object.values(uniqueOwned);

  if(rarityPoolCards.length < 5){
    document.getElementById("rarityCardPool").innerHTML =
      `<div style="color:rgba(255,100,100,0.8);font-size:14px;text-align:center;padding:20px">${rarity}カードが5枚未満です。<br>もっとガチャを引いてください！</div>`;
    return;
  }
  renderRarityPool();
}

function sortRarityPool(by){
  if(by==="atk")  rarityPoolCards.sort((a,b)=>b.atk-a.atk);
  if(by==="hp")   rarityPoolCards.sort((a,b)=>b.hp-a.hp);
  if(by==="name") rarityPoolCards.sort((a,b)=>a.word.localeCompare(b.word, "ja"));
  renderRarityPool();
}

function renderRarityPool(){
  const container = document.getElementById("rarityCardPool");
  container.innerHTML = "";
  rarityPoolCards.forEach(card=>{
    const el = document.createElement("div");
    el.className = `card ${card.rarity.toLowerCase()}`;
    const isSelected = raritySelectedDeck.some(c=>c.word===card.word);
    el.style.cssText = `cursor:pointer;position:relative;min-width:110px;max-width:130px;transition:transform 0.15s;${isSelected?"outline:2px solid #FFD93D;transform:scale(1.05)":""}`;
    el.innerHTML = `
      <div class="word">${card.word}</div>
      <div class="meaning" style="font-size:10px">${card.meaning}</div>
      <div class="stat">ATK ${card.atk}</div>
      <div class="stat">HP ${card.hp}</div>
    `;
    el.onclick = ()=>toggleRarityCard(card, el);
    container.appendChild(el);
  });
}

function toggleRarityCard(card, el){
  const idx = raritySelectedDeck.findIndex(c=>c.word===card.word);
  if(idx !== -1){
    raritySelectedDeck.splice(idx, 1);
    el.style.outline = "";
    el.style.transform = "";
  } else {
    if(raritySelectedDeck.length >= 5) return;
    raritySelectedDeck.push(card);
    el.style.outline = "2px solid #FFD93D";
    el.style.transform = "scale(1.05)";
    // 5枚選んだら即確認
    if(raritySelectedDeck.length === 5){
      updateRaritySelectUI();
      setTimeout(()=>{
        if(confirm(`この5枚でバトルしますか？`)){
          confirmRarityDeck();
        }
      }, 50);
      return;
    }
  }
  updateRaritySelectUI();
}

function updateRaritySelectUI(){
  const cnt = raritySelectedDeck.length;
  document.getElementById("raritySelectedInfo").textContent = `選択: ${cnt} / 5`;
}

function confirmRarityDeck(){
  if(raritySelectedDeck.length < 5) return;

  // ボタンを再有効化
  document.querySelectorAll("button").forEach(b=>b.disabled=false);

  document.getElementById("rarityDeckSelect").style.display = "none";
  document.getElementById("battleMain").style.display = "block";
  inBattle = true;

  // レアリティ別ボスステータス
  const bs = rarityBossState[currentMode][rarityBattleFilter];

  // プレイヤーHP = 選択デッキのHP合計
  playerMaxHP = raritySelectedDeck.reduce((s,c)=>s+c.hp, 0);
  playerHP = playerMaxHP;

  // ボス表示
  document.getElementById("bossLevel").textContent = bs.level;
  document.getElementById("bossATKDisplay").textContent = bs.atk;
  document.getElementById("bossHPBar").style.width = "100%";
  document.getElementById("bossHPNum").textContent = bs.hp;
  document.getElementById("playerHPBar").style.width = "100%";
  document.getElementById("playerHPNum").textContent = playerHP;
  updateBossVisual();

  // デッキATK表示
  const totalATK = raritySelectedDeck.reduce((s,c)=>s+c.atk+(c.upgrade||0)*Math.floor(c.atk*0.05),0);
  document.getElementById("battleATK").textContent = totalATK;
  document.getElementById("battleHP").textContent = playerMaxHP;

  // スキル表示
  updateSkillDisplay(raritySelectedDeck, "battleSkillArea");

  document.getElementById("bossQuizArea").innerHTML = "";
  const pwa = document.getElementById("prevWordArea"); if(pwa) pwa.innerHTML="";
  generateRarityQuiz();
}

function generateRarityQuiz(){
  if(!inBattle) return;
  quizLocked = false;
  const pool = cardPool(); // レアリティ問わず全カードから出題
  const card = pool[Math.floor(Math.random()*pool.length)];
  quizCard = card;

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

  const choicesHtml = choices.map(opt=>
    `<button class="quiz-btn" onclick="answerRarityQuiz('${opt.replace(/'/g,"\\'")}',this)">${opt}</button>`
  ).join("");
  document.getElementById("bossQuizArea").innerHTML=`
    <h2>「${card.word}」の意味は？</h2>
    <button onclick="showQuizChoices(this,'${card.word}')" style="background:rgba(77,150,255,0.3);box-shadow:none;border:1px solid rgba(77,150,255,0.5);margin:8px auto;display:block">
      📋 4択を表示
    </button>
    <div class="quiz-options" id="quizChoicesArea" style="display:none">${choicesHtml}</div>`;
}

function answerRarityQuiz(choice, btn){
  if(quizLocked) return;
  quizLocked = true;
  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);

  const bs = rarityBossState[currentMode][rarityBattleFilter];
  let atk = raritySelectedDeck.reduce((s,c)=>s+c.atk+(c.upgrade||0)*Math.floor(c.atk*0.05),0);

  if(choice===quizAnswer){
    btn.classList.add("correct");
    showCorrectCircle();
    // クリティカル判定
    const hasUR = raritySelectedDeck.some(c=>c.rarity==="UR");
    const hasCrit33 = raritySelectedDeck.some(c=>c.skill==="critical33");
    const hasCrit20 = raritySelectedDeck.some(c=>c.skill==="critical");
    const rate = hasCrit33?0.33:hasCrit20?0.2:0;
    if(hasUR && rate > 0 && Math.random()<rate){ atk*=2; showCritical(); }

    bs.hp -= atk;
    showDmgPopup(atk, false);

    // ドレイン
    if(raritySelectedDeck.some(c=>c.skill==="drain")){
      const heal = Math.floor(atk*0.1);
      playerHP = Math.min(playerHP+heal, playerMaxHP);
      showHealPopup(heal, -50);
    }
    // リジェネ
    if(raritySelectedDeck.some(c=>c.skill==="regen")){
      playerHP = Math.min(playerHP+150, playerMaxHP);
      showHealPopup(150, 50);
    }

    // ミッションカウント
    sharedMissionCount10++;
    if(sharedMissionCount10===10){ diamonds+=5; saveGame(); showMissionComplete("クイズ10問正解！ 💎×5"); }
    updateMissionUI();
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".quiz-btn").forEach(b=>{ if(b.textContent===quizAnswer) b.classList.add("correct"); });
    playerHP -= bs.atk;
    showDmgPopup(bs.atk, true);
  }

  // 詳細ボタン
  if(currentMode==="kobun" && quizCard && quizCard.detail){
    const area = document.getElementById("prevWordArea");
    if(area) area.innerHTML=`<button onclick="showKobunDetail('${quizCard.word.replace(/'/g,"\\'")}') "
      style="margin-top:8px;background:rgba(199,125,255,0.2);box-shadow:none;border:1px solid rgba(199,125,255,0.4);font-size:12px;color:var(--pop5);width:90%">
      📖 前の問題「${quizCard.word}」の詳細</button>`;
  } else if(currentMode==="english"){
    const area = document.getElementById("prevWordArea");
    if(area) area.innerHTML=`<button onclick="showEnglishDetailByWord('${quizCard.word.replace(/'/g,"\\'")}') "
      style="margin-top:8px;background:rgba(77,150,255,0.2);box-shadow:none;border:1px solid rgba(77,150,255,0.4);font-size:12px;color:var(--pop4);width:90%">
      📖 前の問題「${quizCard.word.toUpperCase()}」の詳細</button>`;
  }

  // HPバー更新
  document.getElementById("bossHPBar").style.width = Math.max(0, bs.hp/bs.maxHP*100)+"%";
  document.getElementById("bossHPNum").textContent = Math.max(0, bs.hp);
  document.getElementById("playerHPBar").style.width = Math.max(0, playerHP/playerMaxHP*100)+"%";
  document.getElementById("playerHPNum").textContent = Math.max(0, playerHP);

  setTimeout(()=>{
    if(bs.hp <= 0){
      // ボス撃破
      bs.level++;
      const baseHP  = {N:150,R:200,SR:250,SSR:300}[rarityBattleFilter]||150;
      const baseATK = {N:30, R:45, SR:60, SSR:80}[rarityBattleFilter]||30;
      bs.maxHP = baseHP + bs.level*50;
      bs.hp    = bs.maxHP;
      bs.atk   = baseATK + (bs.level-1)*15;
      const isMillestone = bs.level % 10 === 0;
      const reward = isMillestone ? 20 : 5;
      diamonds += reward;
      saveGame();
      const msg = isMillestone ? `Lv.${bs.level} 達成！💎×${reward}！` : `ボスを倒した！💎×${reward}！`;
      showBattleOverlay("victory", msg);
      // HP回復して継続
      playerHP = playerMaxHP;
      document.getElementById("bossLevel").textContent = bs.level;
      document.getElementById("bossATKDisplay").textContent = bs.atk;
      document.getElementById("bossHPBar").style.width = "100%";
      document.getElementById("bossHPNum").textContent = bs.hp;
      document.getElementById("playerHPBar").style.width = "100%";
      document.getElementById("playerHPNum").textContent = playerHP;
      updateBossVisual();
      setTimeout(generateRarityQuiz, 2000);
      return;
    }
    if(playerHP <= 0){
      showBattleOverlay("defeat");
      bs.hp = bs.maxHP; // ボスHP全回復
      playerHP = playerMaxHP;
      document.getElementById("bossHPBar").style.width = "100%";
      document.getElementById("bossHPNum").textContent = bs.hp;
      document.getElementById("playerHPBar").style.width = "100%";
      document.getElementById("playerHPNum").textContent = playerHP;
      setTimeout(generateRarityQuiz, 2000);
      return;
    }
    setTimeout(generateRarityQuiz, 300);
  }, 900);
}

function backToRarityMenu(){
  document.getElementById("rarityDeckSelect").style.display = "none";
  document.getElementById("rarityBattleMenu").style.display = "block";
  raritySelectedDeck = [];
  document.querySelectorAll("button").forEach(b=>b.disabled=false);
}

function showQuizChoices(btn, word){
  btn.style.display = "none";
  const area = document.getElementById("quizChoicesArea");
  if(area) area.style.display = "";
}

function showCorrectCircle(){
  const circle = document.createElement("div");
  circle.style.cssText = `
    position:fixed; top:50%; left:50%;
    transform:translate(-50%,-50%) scale(0);
    width:220px; height:220px;
    border-radius:50%;
    background:rgba(107,203,119,0.25);
    border:6px solid #6BCB77;
    pointer-events:none; z-index:9998;
    animation:correct-circle 0.6s ease forwards;
  `;
  document.body.appendChild(circle);
  setTimeout(()=>circle.remove(), 600);
}

function backToBattleMenu(){
  inBattle = false;
  inDailyBattle = false;
  document.getElementById("battleMenu").style.display = "block";
  document.getElementById("battleMain").style.display = "none";
  document.getElementById("dailyBossArea").style.display = "none";
  document.getElementById("dailyBattleMain").style.display = "none";
  document.getElementById("rarityBattleMenu").style.display = "none";
  document.getElementById("rarityDeckSelect").style.display = "none";
  document.getElementById("bossQuizArea").innerHTML = "";
  const pwa = document.getElementById("prevWordArea"); if(pwa) pwa.innerHTML="";
  // ボスのHP/ATKをリセット
  const state = ms();
  state.bossHP  = state.bossMaxHP;
  state.bossATK = (currentMode==="english"?50:35) + (state.bossLevel-1)*15;
}
function saveGame(){
  const data={
    owned, coins, materials, diamonds,
    lastLoginDate, missionDate, sharedMissionCount10, missionPackDone, fukubikiTickets,
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
    sharedMissionCount10 = save.sharedMissionCount10||0;
    missionPackDone = save.missionPackDone||false;
    fukubikiTickets = save.fukubikiTickets||0;
    if(save.modeState){
      ["english","kobun"].forEach(m=>{
        if(save.modeState[m]){
          const s = save.modeState[m];
          // デッキカードをownedの最新データで同期（upgrade情報を保持）
          modeState[m].deck = (s.deck||[]).map(dc=>{
            const latest = owned.find(o=>o.word===dc.word && o.type===dc.type);
            const base = (dc.type==="english" ? allCards : kobunCards).find(b=>b.word===dc.word);
            const skill = (latest&&latest.skill) || (dc.skill) || (base ? base.skill : undefined);
            return latest ? {...latest, skill} : dc;
          });
          modeState[m].bossHP = s.bossHP || modeState[m].bossHP;
          modeState[m].bossMaxHP = s.bossMaxHP || modeState[m].bossMaxHP;
          modeState[m].bossLevel = s.bossLevel||1;
          modeState[m].bossATK = s.bossATK || modeState[m].bossATK;
          modeState[m].missionCount   = s.missionCount||0;
          modeState[m].missionCount10 = s.missionCount10||0;
        }
      });
    }
  }
}


// =============================================
//  PACK / GACHA
// =============================================
let packCards = [];
let urAnimating = false;

function openPack(){
  if(packOpening) return;
  packOpening = true;
  urAnimating = false;
  document.querySelectorAll("button").forEach(b=>b.disabled=true);
  document.getElementById("packResult").innerHTML="";

  // ガチャミッション達成チェック
  if(!missionPackDone){
    missionPackDone = true;
    materials += 500;
    saveGame();
    showMissionComplete("英単語ガチャ1回！ 🔧×500");
    updateMissionUI();
  }

  packCards = [];
  for(let i=0;i<5;i++){
    packCards.push({...allCards[Math.floor(Math.random()*allCards.length)],type:"english"});
  }

  const hasUR = packCards.some(c=>c.rarity==="UR");

  document.getElementById("packArea").innerHTML=`
    <div class="packWrapper" id="packBox" onclick="packTap()" style="pointer-events:auto">
      <div class="packTop"></div>
      <div class="packBottom"></div>
      <div class="packLogo">WORD<br>PACK</div>
    </div>`;

  if(hasUR){
    urAnimating = true;
    setTimeout(()=>{
      const box = document.getElementById("packBox");
      if(!box) return;
      box.classList.add("pack-ur-gold");
      const logo = box.querySelector(".packLogo");
      if(logo) logo.innerHTML = "✨WORD<br>PACK✨";
      setTimeout(()=>{ urAnimating = false; }, 1200);
    }, 800);
  }
}

function packTap(){
  if(!packOpening) return;
  if(urAnimating) return;
  const packBox = document.getElementById("packBox");
  if(!packBox) return;
  packBox.style.pointerEvents = "none";
  packBox.classList.add("open");
  setTimeout(revealCards, 700);
}

function revealCards(){
  const isNew = card => !owned.filter(o=>o.type==="english").some(o=>o.word===card.word);
  const newFlags = packCards.map(isNew);
  packCards.forEach(card=>owned.push(card));
  saveGame(); update();

  document.getElementById("packArea").innerHTML="";

  const overlay  = document.getElementById("gacha10Overlay");
  const stage    = document.getElementById("gacha10Stage");
  const closeBtn = document.getElementById("gacha10CloseBtn");
  stage.innerHTML = `<div id="gacha10Title">🇺🇸 英語ガチャ！</div>`;
  closeBtn.style.display = "none";
  closeBtn.disabled = false;
  overlay.style.display = "flex";

  packCards.forEach((card, i)=>{
    const wrap = document.createElement("div");
    wrap.className = "gacha10-card-wrap";
    const isNewCard = newFlags[i];
    const isUR = card.rarity==="UR";
    wrap.innerHTML = `<div class="gacha10-card ${card.rarity.toLowerCase()}" onclick="showEnglishDetailByWord('${card.word}')" style="cursor:pointer">
      ${isNewCard?'<div class="pack-new-badge">New!</div>':''}
      <div class="g-word">${card.word}</div>
      <div class="g-meaning">${card.meaning}</div>
      <div class="stat" style="font-size:10px">ATK ${card.atk} / HP ${card.hp}</div>
      <div class="g-rarity">${card.rarity}</div>
      <div style="font-size:9px;color:#888;margin-top:3px">📖 詳細</div>
      ${isUR?`<div class="ur-skill-badge" style="font-size:9px;margin-top:3px">⚡ 正解時CRITICAL 33%</div>`:''}
    </div>`;
    stage.appendChild(wrap);
    setTimeout(()=>{
      if(card.rarity==="SSR"){
        const flash = document.createElement("div");
        flash.className = "ssr-flash";
        document.body.appendChild(flash);
        setTimeout(()=>flash.remove(), 500);
        wrap.classList.add("ssr-reveal");
        spawnGachaParticles(wrap);
      } else if(card.rarity==="UR"){
        const flash = document.createElement("div");
        flash.className = "ur-flash";
        document.body.appendChild(flash);
        setTimeout(()=>flash.remove(), 600);
        wrap.classList.add("ssr-reveal");
        spawnGachaParticles(wrap);
      } else {
        wrap.classList.add("flip");
      }
    }, 150 + i*220);
  });

  setTimeout(()=>{
    closeBtn.style.display = "block";
    closeBtn.disabled = false;
    packOpening = false;
    document.querySelectorAll("button").forEach(b=>b.disabled=false);
  }, 150 + 5*220 + 500);
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
  saveGame(); update();
  slashResultCards = [card];
  slashIs10 = false;
  slashMode = "kobun";
  startSlashOverlay();
}

// 古文 10連ガチャ
function openKobunGacha10(){
  if(packOpening) return;
  if(diamonds<50){alert("💎が足りません（必要: 50）");return;}
  packOpening = true;
  document.querySelectorAll("button").forEach(b=>b.disabled=true);
  diamonds-=50;
  slashResultCards = [];
  for(let i=0;i<9;i++){
    const card={...kobunCards[Math.floor(Math.random()*kobunCards.length)],type:"kobun"};
    owned.push(card); slashResultCards.push(card);
  }
  const ssrPool = kobunCards.filter(c=>c.rarity==="SSR");
  const ssrCard = {...ssrPool[Math.floor(Math.random()*ssrPool.length)],type:"kobun"};
  owned.push(ssrCard); slashResultCards.push(ssrCard);
  saveGame(); update();
  slashIs10 = true;
  slashMode = "kobun";
  setTimeout(startSlashOverlay, 50);
}

// 英語 1回ガチャ
// ===== スライド演出 =====
let slashResultCards = [];
let slashIs10 = false;
let slashDone = false;
let slashMode = "kobun"; // "kobun" or "english"

function spawnRainbowParticles(){
  const colors = ["#FF6B6B","#FFD93D","#6BCB77","#4D96FF","#C77DFF","#FF9500","#fff"];
  for(let i=0;i<20;i++){
    setTimeout(()=>{
      const p = document.createElement("div");
      p.style.cssText = `
        position:fixed;
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        width:${6+Math.random()*8}px;
        height:${6+Math.random()*8}px;
        border-radius:50%;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        pointer-events:none;
        z-index:7050;
        animation:rainbow-particle ${0.8+Math.random()*0.8}s ease forwards;
        box-shadow:0 0 8px currentColor;
      `;
      document.body.appendChild(p);
      setTimeout(()=>p.remove(), 1600);
    }, i*80);
  }
}

function setupSlashInput(el){
  let startX = null;

  function onStart(e){
    const pt = e.touches ? e.touches[0] : e;
    startX = pt.clientX;
  }

  function onMove(e){
    if(startX === null) return;
    const pt = e.touches ? e.touches[0] : e;
    const dx = pt.clientX - startX;
    // 横に40px以上動かしたらスラッシュ
    if(Math.abs(dx) > 40){
      startX = null;
      doSlash(pt.clientX, pt.clientY || window.innerHeight/2);
    }
  }

  el.addEventListener("touchstart", onStart, {passive:true});
  el.addEventListener("touchmove",  onMove,  {passive:true});
  el.addEventListener("mousedown",  onStart);
  el.addEventListener("mousemove",  onMove);
}

function startSlashOverlay(){
  slashDone = false;
  const overlay = document.getElementById("slashOverlay");
  const hint    = document.getElementById("slashHint");
  overlay.style.cssText = "display:flex; position:fixed; inset:0; background:#0a0a18; z-index:7000; align-items:center; justify-content:center; flex-direction:column; overflow:hidden;";
  hint.textContent = "👆 横にスライド！";
  document.getElementById("slashRemain").textContent = slashIs10 ? (slashMode==="english" ? "5連" : "10連") : "1回";

  const hasUR = slashResultCards.some(c=>c.rarity==="UR");

  // イベント登録（既存を消してから再登録）+ visibility リセット
  const packEl = document.getElementById("slashPack0");
  packEl.style.visibility = "visible";
  packEl.classList.remove("slashing","slashed","ur-rainbow");
  packEl.replaceWith(packEl.cloneNode(true));
  const newPack = document.getElementById("slashPack0");
  newPack.style.visibility = "visible";

  // UR確定は最初から虹色
  if(hasUR){
    document.querySelectorAll(".slash-pack").forEach(p=>p.classList.add("ur-rainbow"));
    spawnRainbowParticles();
  }

  setupSlashInput(newPack);
}

function doSlash(x, y){
  if(slashDone) return;
  slashDone = true;

  const isUR = slashResultCards.some(c=>c.rarity==="UR");
  const lineColor = isUR
    ? "linear-gradient(90deg,transparent,#FFD93D,#FF6B6B,#C77DFF,transparent)"
    : "linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)";

  // パック要素を取得してサイズと位置を記録
  const packEl = document.getElementById("slashPack0");
  const rect = packEl.getBoundingClientRect();
  const midY = rect.top + rect.height / 2;

  // 横方向の光線（パックの真ん中）
  const line = document.createElement("div");
  line.style.cssText = `
    position:fixed; top:${midY}px; left:0; width:0; height:4px;
    background:${lineColor};
    z-index:7100; pointer-events:none;
    animation:slash-h 0.2s ease forwards;
    box-shadow:0 0 14px rgba(255,255,255,0.9);
    border-radius:2px;
  `;
  document.body.appendChild(line);
  setTimeout(()=>line.remove(), 280);

  // パックの上半分（真上へ飛ぶ）
  const top = document.createElement("div");
  top.style.cssText = `
    position:fixed;
    left:${rect.left}px; top:${rect.top}px;
    width:${rect.width}px; height:${rect.height/2}px;
    overflow:hidden;
    pointer-events:none; z-index:7080;
    animation:cut-top 0.45s ease forwards;
  `;
  top.innerHTML = packEl.outerHTML.replace(/id="[^"]*"/, '');
  document.body.appendChild(top);

  // パックの下半分（真下へ飛ぶ）
  const bot = document.createElement("div");
  bot.style.cssText = `
    position:fixed;
    left:${rect.left}px; top:${rect.top + rect.height/2}px;
    width:${rect.width}px; height:${rect.height/2}px;
    overflow:hidden;
    pointer-events:none; z-index:7080;
    animation:cut-bottom 0.45s ease forwards;
  `;
  // 下半分はパックの下半分を見せるためにネガティブマージン
  const inner = document.createElement("div");
  inner.style.cssText = `margin-top:-${rect.height/2}px;`;
  inner.innerHTML = packEl.outerHTML.replace(/id="[^"]*"/, '');
  bot.appendChild(inner);
  document.body.appendChild(bot);

  // 元のパックを即隠す
  packEl.style.visibility = "hidden";

  setTimeout(()=>{ top.remove(); bot.remove(); }, 500);

  setTimeout(()=>{
    const so=document.getElementById("slashOverlay"); so.style.display="none";
    showSlashResults();
  }, 460);
}

function skipSlash(){
  slashDone = true;
  const so=document.getElementById("slashOverlay"); so.style.display="none";
  showSlashResults();
}

function showSlashResults(){
  const overlay  = document.getElementById("gacha10Overlay");
  const stage    = document.getElementById("gacha10Stage");
  const closeBtn = document.getElementById("gacha10CloseBtn");
  const title = slashMode==="english"
    ? (slashIs10 ? "🇺🇸 英語 5連ガチャ！" : "🇺🇸 英語ガチャ！")
    : (slashIs10 ? "📜 古文 10連ガチャ！" : "📜 古文ガチャ！");
  stage.innerHTML = `<div id="gacha10Title">${title}</div>`;
  closeBtn.style.display = "none";
  closeBtn.disabled = false;
  overlay.style.display = "flex";

  slashResultCards.forEach((card,i)=>{
    const wrap = document.createElement("div");
    wrap.className = "gacha10-card-wrap";
    const isEng = slashMode==="english";
    const clickHandler = isEng
      ? `onclick="showEnglishDetailByWord('${card.word}')" style="cursor:pointer"`
      : `onclick="showKobunDetail('${card.word}')" style="cursor:pointer"`;
    wrap.innerHTML = `<div class="gacha10-card ${card.rarity.toLowerCase()}" ${clickHandler}>
      <div class="g-word">${card.word}</div>
      <div class="g-meaning">${card.meaning}</div>
      <div class="stat" style="font-size:10px">ATK ${card.atk} / HP ${card.hp}</div>
      <div class="g-rarity">${card.rarity}</div>
      <div style="font-size:9px;color:#888;margin-top:3px">📖 詳細</div>
    </div>`;
    stage.appendChild(wrap);
    setTimeout(()=>{
      if(card.rarity==="SSR"){
        const flash = document.createElement("div");
        flash.className = "ssr-flash";
        document.body.appendChild(flash);
        setTimeout(()=>flash.remove(), 500);
        wrap.classList.add("ssr-reveal");
        spawnGachaParticles(wrap);
      } else if(card.rarity==="UR"){
        const flash = document.createElement("div");
        flash.className = "ur-flash";
        document.body.appendChild(flash);
        setTimeout(()=>flash.remove(), 600);
        wrap.classList.add("ssr-reveal");
        spawnGachaParticles(wrap);
        spawnRainbowParticles();
      } else {
        wrap.classList.add("flip");
      }
    }, 150 + i*220);
  });

  const totalCards = slashResultCards.length;
  setTimeout(()=>{
    closeBtn.style.display = "block";
    closeBtn.disabled = false;
    packOpening = false;
    document.querySelectorAll("button").forEach(b=>b.disabled=false);
  }, 150 + totalCards*220 + 500);
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
  document.querySelectorAll("button").forEach(b=>b.disabled=false);
  update();
}

// =============================================
//  UPGRADE / CONVERT
// =============================================
function getUpgradeCost(r, word){
  const base = {N:3,R:3,SR:10,SSR:50,UR:125}[r]||3;
  const maxLevel = getUpgradeMaxLevel(word||"");
  if(maxLevel >= 30) return Math.floor(base * 2);
  if(maxLevel >= 20) return Math.floor(base * 1.5);
  return base;
}

function getConvertGain(rarity, mode){
  if(mode==="kobun"){
    return {N:[30,5],R:[50,12],SR:[100,30],SSR:[500,70],UR:[3000,300]}[rarity]||[30,5];
  }
  return {N:[10,1],R:[10,2],SR:[50,5],SSR:[300,30],UR:[1000,100]}[rarity]||[10,1];
}

function upgradeCard(word){
  const idx = owned.findIndex(c=>c.word===word && c.type===currentMode);
  if(idx===-1) return;
  const card = owned[idx];
  if(!card.upgrade) card.upgrade=0;
  const maxLevel = getUpgradeMaxLevel(word);
  if(card.upgrade>=maxLevel){
    // 上限拡張を提案
    if(maxLevel < 30){
      const cost = maxLevel === 10 ? 3000 : 6000;
      if(confirm(`強化上限（${maxLevel}回）に達しました。\n🪙${cost}コインで上限を${maxLevel+10}回まで拡張しますか？`)){
        expandUpgradeLimit(word);
      }
    } else {
      alert("最大強化です（上限30回）");
    }
    return;
  }
  if(materials<getUpgradeCost(card.rarity, word)){alert("素材が足りません");return;}
  materials -= getUpgradeCost(card.rarity, word);
  card.atk = Math.floor(card.atk * 1.05);
  card.hp  = Math.floor(card.hp  * 1.10);
  card.upgrade++;
  owned[idx]=card;

  // デッキ内の同カードも更新
  ["english","kobun"].forEach(m=>{
    modeState[m].deck.forEach((dc,di)=>{
      if(dc.word===word && dc.type===currentMode){
        modeState[m].deck[di] = {...card};
      }
    });
  });

  saveGame(); update();
}

let convertMode = "coin";
function setConvertMode(mode){
  convertMode=mode;
  const label = mode==="coin" ? "🪙 コインに変換" : "🔧 素材に変換";
  alert("変換モード: "+(mode==="coin"?"コイン":"素材"));
  update();
}

// ===== 変換レートモーダル =====
function showConvertRates(){
  document.getElementById("convertRateModal").style.display="flex";
}
function closeConvertRates(){
  document.getElementById("convertRateModal").style.display="none";
}

function showUpgradeRates(){
  document.getElementById("upgradeRateModal").style.display="flex";
}
function closeUpgradeRates(){
  document.getElementById("upgradeRateModal").style.display="none";
}

// ===== まとめて選択モード =====
let bulkMode = false;
let bulkSelected = new Set();

function toggleBulkMode(){
  bulkMode = !bulkMode;
  bulkSelected.clear();
  const btn = document.getElementById("bulkModeBtn");
  const actions = document.getElementById("bulkActions");
  if(bulkMode){
    btn.style.background = "rgba(255,217,61,0.25)";
    btn.style.color = "var(--pop2)";
    btn.style.border = "1px solid rgba(255,217,61,0.4)";
    actions.style.display = "block";
  } else {
    btn.style.background = "rgba(255,255,255,0.12)";
    btn.style.color = "";
    btn.style.border = "";
    actions.style.display = "none";
  }
  update();
}

function toggleBulkCard(word){
  if(!bulkMode) return;
  if(bulkSelected.has(word)) bulkSelected.delete(word);
  else bulkSelected.add(word);
  update();
}

function selectAllBulk(){
  const pool = owned.filter(c=>c.type===currentMode);
  const grouped = {};
  pool.forEach(c=>{ if(!grouped[c.word]) grouped[c.word]=0; grouped[c.word]++; });
  Object.entries(grouped).filter(([,cnt])=>cnt>1).forEach(([word])=>bulkSelected.add(word));
  update();
}

function clearBulkSelect(){
  bulkSelected.clear();
  update();
}

function bulkConvertSelected(){
  if(bulkSelected.size===0){ alert("カードを選択してください"); return; }

  // 変換量を先に計算
  let totalCoins=0, totalMats=0, totalCards=0;
  bulkSelected.forEach(word=>{
    const cards = owned.filter(c=>c.word===word && c.type===currentMode);
    if(cards.length<=1) return;
    const extra = cards.length-1;
    totalCards += extra;
    const g = getConvertGain(cards[0].rarity, currentMode);
    totalCoins += g[0]*extra;
    totalMats  += g[1]*extra;
  });

  const reward = convertMode==="coin" ? `🪙×${totalCoins}` : `🔧×${totalMats}`;
  if(!confirm(`${totalCards}枚を変換して ${reward} を獲得しますか？`)) return;

  bulkSelected.forEach(word=>{
    const cards = owned.filter(c=>c.word===word && c.type===currentMode);
    if(cards.length<=1) return;
    const toRemove = [...cards].sort((a,b)=>(a.upgrade||0)-(b.upgrade||0)).slice(0, cards.length-1);
    toRemove.forEach(rem=>{
      const idx = owned.findIndex(c=>c.word===rem.word && c.type===currentMode && (c.upgrade||0)===(rem.upgrade||0));
      if(idx!==-1) owned.splice(idx,1);
    });
  });
  if(convertMode==="coin") coins+=totalCoins;
  else materials+=totalMats;
  bulkSelected.clear();
  saveGame(); update();
  alert(`変換完了！ ${reward} 獲得！`);
}

function convertCard(word){
  let cards = owned.filter(c=>c.word===word && c.type===currentMode);
  if(cards.length<=1){alert("変換できるカードがありません");return;}
  // upgradeが少ない順にソートして余剰分を削除対象に
  const sorted = [...cards].sort((a,b)=>(a.upgrade||0)-(b.upgrade||0));
  const toRemove = sorted.slice(0, cards.length-1);
  const gain = getConvertGain(cards[0].rarity, currentMode);
  toRemove.forEach(()=>{ if(convertMode==="coin") coins+=gain[0]; else materials+=gain[1]; });
  const removeSet = new Set(toRemove.map((_,i)=>i));
  let removeCount = toRemove.length;
  owned = owned.filter(c=>{
    if(c.word===word && c.type===currentMode && removeCount>0){
      // upgradeが少ない方から消す
      const idx = toRemove.findIndex(r=>(r.upgrade||0)===(c.upgrade||0));
      if(idx!==-1){ toRemove.splice(idx,1); removeCount--; return false; }
    }
    return true;
  });
  saveGame(); update();
}

function convertAllRarity(rarity){
  const gain=getConvertGain(rarity,currentMode);
  const grouped = {};
  owned.filter(c=>c.type===currentMode && c.rarity===rarity).forEach(c=>{
    if(!grouped[c.word]) grouped[c.word]=0;
    grouped[c.word]++;
  });
  let totalConverted = Object.values(grouped).reduce((sum,cnt)=>sum+(cnt-1),0);
  if(totalConverted===0){alert("変換できるカードがありません");return;}

  const reward = convertMode==="coin" ? `🪙×${gain[0]*totalConverted}` : `🔧×${gain[1]*totalConverted}`;
  if(!confirm(`${rarity}カード ${totalConverted}枚を変換して ${reward} を獲得しますか？`)) return;

  Object.entries(grouped).forEach(([word, cnt])=>{
    if(cnt<=1) return;
    // upgradeが少ない順に余剰分を削除
    const cards = owned.filter(c=>c.word===word && c.type===currentMode);
    const toRemove = [...cards].sort((a,b)=>(a.upgrade||0)-(b.upgrade||0)).slice(0, cnt-1);
    toRemove.forEach(rem=>{
      const idx = owned.findIndex(c=>c.word===rem.word && c.type===currentMode && (c.upgrade||0)===(rem.upgrade||0));
      if(idx!==-1) owned.splice(idx,1);
    });
  });
  if(convertMode==="coin") coins+=gain[0]*totalConverted;
  else materials+=gain[1]*totalConverted;
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
    showCorrectCircle();
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
    diamonds+=10;
    alert("ログインボーナス！💎10");
    lastLoginDate=today;
    saveGame();
  }
}
function checkMission(){
  const today=new Date().toDateString();
  if(missionDate!==today){ missionDate=today; modeState.english.missionCount=0; modeState.kobun.missionCount=0; modeState.english.missionCount10=0; modeState.kobun.missionCount10=0; sharedMissionCount10=0; missionPackDone=false; }
  updateMissionUI();
}

function showHealPopup(heal, offsetX){
  const ref = document.getElementById("playerHPNum");
  if(!ref) return;
  const rect = ref.getBoundingClientRect();
  const popup = document.createElement("div");
  popup.className = "dmg-popup";
  popup.textContent = "+" + heal;
  popup.style.color = "#6BCB77";
  popup.style.left = rect.left + rect.width/2 + (offsetX||0) + "px";
  popup.style.top  = rect.top + window.scrollY - 10 + "px";
  document.body.appendChild(popup);
  setTimeout(()=>popup.remove(), 900);
}

function showCritical(){
  // 画面オレンジフラッシュ
  const flash = document.createElement("div");
  flash.style.cssText = `
    position:fixed; inset:0; background:rgba(255,149,0,0.35);
    z-index:8000; pointer-events:none;
    animation:flash-out 0.5s ease forwards;
  `;
  document.body.appendChild(flash);
  setTimeout(()=>flash.remove(), 500);

  // CRITICALテキスト
  const popup = document.createElement("div");
  popup.className = "critical-popup";
  popup.textContent = "⚡ CRITICAL!!";
  popup.style.left = "50%";
  popup.style.top  = "30%";
  popup.style.transform = "translateX(-50%)";
  document.body.appendChild(popup);
  setTimeout(()=>popup.remove(), 1400);

  // パーティクル
  const colors = ["#FF9500","#FFD93D","#FF6B6B","#fff"];
  for(let i=0;i<12;i++){
    const p = document.createElement("div");
    p.style.cssText = `
      position:fixed;
      left:${Math.random()*100}%; top:${Math.random()*60+20}%;
      width:8px; height:8px; border-radius:50%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      pointer-events:none; z-index:8001;
      animation:critical-particle 0.9s ease forwards;
      animation-delay:${Math.random()*0.2}s;
    `;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(), 1200);
  }
}

// =============================================
//  MISSION UI
// =============================================
function switchGachaTab(tab){
  document.getElementById("englishGachaSection").style.display = tab==="english" ? "block" : "none";
  document.getElementById("kobunGachaSection").style.display   = tab==="kobun"   ? "block" : "none";
  document.getElementById("fukubikiSection").style.display     = tab==="fukubiki"? "block" : "none";
  document.getElementById("packArea").innerHTML   = "";
  document.getElementById("packResult").innerHTML = "";
  document.getElementById("gachaTab-english").className  = "modeTab" + (tab==="english"  ? " active-english" : "");
  document.getElementById("gachaTab-kobun").className    = "modeTab" + (tab==="kobun"    ? " active-kobun"   : "");
  document.getElementById("gachaTab-fukubiki").className = "modeTab" + (tab==="fukubiki" ? " active-english" : "");
  if(tab==="fukubiki"){
    document.getElementById("packTitle").textContent = "🎰 福引";
    updateFukubikiUI();
  } else if(tab==="english"){
    document.getElementById("packTitle").textContent = "🎴 英語ガチャ";
  } else {
    document.getElementById("packTitle").textContent = "🎴 古文ガチャ";
  }
}

function updateFukubikiUI(){
  const el = document.getElementById("fukubikiTicketCount");
  if(el) el.textContent = fukubikiTickets;
}

const FUKUBIKI_TABLE = [
  { name:"白", color:"#f0f0f0", border:"#bbb",    prob:0.60, mats:500,   coins:500,   dias:0    },
  { name:"緑", color:"#48bb78", border:"#2f855a",  prob:0.20, mats:800,   coins:1000,  dias:0    },
  { name:"青", color:"#4299e1", border:"#2b6cb0",  prob:0.10, mats:2000,  coins:4000,  dias:50   },
  { name:"黄", color:"#ecc94b", border:"#b7791f",  prob:0.06, mats:3000,  coins:9000,  dias:150  },
  { name:"赤", color:"#fc8181", border:"#c53030",  prob:0.03, mats:4000,  coins:10000, dias:400  },
  { name:"虹", color:"rainbow", border:"#b794f4",  prob:0.01, mats:10000, coins:18000, dias:1000 },
];

function drawFukubiki(){
  if(fukubikiTickets <= 0){
    alert("福引チケットがありません！\nデイリーミッションを全て達成するともらえます。");
    return;
  }
  fukubikiTickets--;

  // 抽選
  const r = Math.random();
  let cum = 0, result = FUKUBIKI_TABLE[0];
  for(const tier of FUKUBIKI_TABLE){
    cum += tier.prob;
    if(r < cum){ result = tier; break; }
  }

  // 報酬付与
  materials += result.mats;
  coins     += result.coins;
  diamonds  += result.dias;
  saveGame(); update();
  updateFukubikiUI();

  // ガラガラアニメーション
  showFukubikiAnimation(result);
}

function showFukubikiAnimation(result){
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(10,8,25,0.92);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    z-index:9000;backdrop-filter:blur(8px);touch-action:none;
  `;

  const isRainbow = result.name === "虹";
  const ballBg = isRainbow
    ? "background:linear-gradient(135deg,#fc8181,#ecc94b,#48bb78,#4299e1,#b794f4)"
    : `background:${result.color}`;
  const ballBorder = isRainbow ? "#b794f4" : (result.border||result.color);

  const rewardText = [
    result.dias  ? `💎×${result.dias.toLocaleString()}` : "",
    `🔧×${result.mats.toLocaleString()}`,
    `🪙×${result.coins.toLocaleString()}`,
  ].filter(Boolean).join("　");

  overlay.innerHTML = `
    <div id="gHint" style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:10px">ハンドルを時計回りに1回転させてください</div>
    <div style="position:relative;width:260px;height:300px">
      <svg id="garaponSvg" viewBox="0 0 260 300" width="260" height="300" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
        <defs>
          <clipPath id="drumClip">
            <polygon points="80,60 180,60 220,100 220,180 180,220 80,220 40,180 40,100"/>
          </clipPath>
          ${isRainbow ? `<linearGradient id="rainbowGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fc8181"/><stop offset="33%" stop-color="#ecc94b"/><stop offset="66%" stop-color="#48bb78"/><stop offset="100%" stop-color="#4299e1"/></linearGradient>` : ""}
        </defs>
        <!-- base -->
        <rect x="20" y="235" width="220" height="22" rx="4" fill="#C8A96E"/>
        <rect x="30" y="231" width="200" height="8" rx="3" fill="#B8966A"/>
        <!-- tray (red) -->
        <rect x="148" y="233" width="72" height="16" rx="3" fill="#c53030"/>
        <rect x="150" y="235" width="68" height="12" rx="2" fill="#fc8181"/>
        <!-- drum body -->
        <polygon points="80,60 180,60 220,100 220,180 180,220 80,220 40,180 40,100" fill="#D4A96A" stroke="#B8966A" stroke-width="2"/>
        <polygon points="90,72 170,72 205,107 205,173 170,208 90,208 55,173 55,107" fill="#DDB87A" stroke="#C8A96E" stroke-width="1"/>
        <!-- drum center -->
        <circle cx="130" cy="140" r="18" fill="#8B6914" stroke="#6B4F0E" stroke-width="2"/>
        <circle cx="130" cy="140" r="10" fill="#5A3E0A" stroke="#4A2E06" stroke-width="1.5"/>
        <!-- axle -->
        <rect x="118" y="130" width="24" height="20" rx="4" fill="#999" stroke="#777" stroke-width="1"/>
        <!-- handle (rotates around 130,140) -->
        <g id="gHandle" style="transform-origin:130px 140px">
          <rect x="128" y="82" width="8" height="58" rx="4" fill="#888" stroke="#666" stroke-width="1"/>
          <ellipse cx="132" cy="80" rx="10" ry="7" fill="#D4A96A" stroke="#B8966A" stroke-width="1.5"/>
          <ellipse cx="132" cy="78" rx="7" ry="4" fill="#DDB87A"/>
        </g>
        <!-- support frame -->
        <rect x="95" y="214" width="12" height="30" rx="3" fill="#999" stroke="#777" stroke-width="1"/>
        <rect x="153" y="214" width="12" height="30" rx="3" fill="#999" stroke="#777" stroke-width="1"/>
        <rect x="95" y="232" width="70" height="8" rx="3" fill="#aaa" stroke="#888" stroke-width="1"/>
        <ellipse cx="110" cy="236" rx="6" ry="5" fill="#888"/>
        <ellipse cx="130" cy="236" rx="6" ry="5" fill="#888"/>
        <ellipse cx="150" cy="236" rx="6" ry="5" fill="#888"/>
        <!-- chute -->
        <path d="M148 220 Q155 232 155 237" stroke="#B8966A" stroke-width="3" fill="none"/>
        <!-- ball (hidden initially, starts at drum center) -->
        <circle id="gBall" cx="130" cy="140" r="10"
          fill="${isRainbow ? "url(#rainbowGrad)" : result.color}" stroke="${ballBorder}" stroke-width="2"
          opacity="0"/>
      </svg>
    </div>
    <div id="gResult" style="margin-top:8px;min-height:50px;text-align:center"></div>
    <button id="gCloseBtn" style="margin-top:10px;font-size:13px;padding:8px 20px;cursor:pointer;display:none;background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:8px">閉じる</button>
  `;

  document.body.appendChild(overlay);

  const handle   = overlay.querySelector("#gHandle");
  const hint     = overlay.querySelector("#gHint");
  const gResult  = overlay.querySelector("#gResult");
  const closeBtn = overlay.querySelector("#gCloseBtn");
  const ball     = overlay.querySelector("#gBall");
  const svg      = overlay.querySelector("#garaponSvg");

  closeBtn.onclick = ()=>overlay.remove();

  // ---- drag rotation logic ----
  let tracking = false;
  let totalAngle = 0;
  let lastAngle = null;
  let accumulatedDeg = 0;
  let fired = false;
  let handleAngle = 0;

  function getAngle(e){
    const rect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width*(130/260);
    const cy = rect.top  + rect.height*(140/300);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return Math.atan2(clientY - cy, clientX - cx) * 180 / Math.PI;
  }

  function onStart(e){
    if(fired) return;
    e.preventDefault();
    tracking = true;
    lastAngle = getAngle(e);
  }

  function onMove(e){
    if(!tracking || fired) return;
    e.preventDefault();
    const a = getAngle(e);
    let delta = a - lastAngle;
    // normalize to [-180, 180]
    if(delta > 180)  delta -= 360;
    if(delta < -180) delta += 360;
    // only accumulate clockwise (positive delta)
    if(delta > 0){
      accumulatedDeg += delta;
      handleAngle += delta;
      handle.style.transform = `rotate(${handleAngle}deg)`;
    }
    lastAngle = a;
    const pct = Math.min(accumulatedDeg / 360, 1);
    hint.textContent = pct < 0.3 ? "ハンドルを時計回りに1回転させてください"
                     : pct < 0.7 ? "もう少し..."
                     : pct < 1   ? "あと少し！"
                     : "";
    if(accumulatedDeg >= 360 && !fired){
      fired = true;
      tracking = false;
      finishSpin();
    }
  }

  function onEnd(){ tracking = false; }

  overlay.addEventListener("mousedown",  onStart, {passive:false});
  overlay.addEventListener("mousemove",  onMove,  {passive:false});
  overlay.addEventListener("mouseup",    onEnd);
  overlay.addEventListener("touchstart", onStart, {passive:false});
  overlay.addEventListener("touchmove",  onMove,  {passive:false});
  overlay.addEventListener("touchend",   onEnd);

  // ---- spin finish + ball drop ----
  function finishSpin(){
    hint.textContent = "ガラガラ回転中...";
    // spin handle fast 2 more rotations
    const spinDuration = 800;
    const startAngle = handleAngle;
    const targetAngle = startAngle + 720;
    const t0 = performance.now();
    function spinStep(now){
      const p = Math.min((now-t0)/spinDuration, 1);
      const e = 1 - Math.pow(1-p, 2);
      handle.style.transform = `rotate(${startAngle + e*720}deg)`;
      if(p < 1){ requestAnimationFrame(spinStep); } else { dropBall(); }
    }
    requestAnimationFrame(spinStep);
  }

  function dropBall(){
    hint.textContent = "玉が出てきた！";
    // 玉をドラム中心から始める
    ball.setAttribute("cx", "130");
    ball.setAttribute("cy", "140");
    ball.setAttribute("r",  "10");
    ball.style.opacity = "1";

    // ドラム中心 → 下 → チュート出口 → トレイ
    const frames = [
      {cx:130, cy:140, r:10},
      {cx:130, cy:170, r:11},
      {cx:135, cy:195, r:11},
      {cx:143, cy:212, r:12},
      {cx:150, cy:222, r:12},
      {cx:158, cy:232, r:11},
      {cx:168, cy:240, r:11},
      {cx:178, cy:242, r:11},
      {cx:184, cy:241, r:11},
    ];
    let fi = 0;
    function nextFrame(){
      if(fi >= frames.length){ showResult(); return; }
      const f = frames[fi++];
      ball.setAttribute("cx", f.cx);
      ball.setAttribute("cy", f.cy);
      ball.setAttribute("r",  f.r);
      setTimeout(nextFrame, fi < 3 ? 120 : 70);
    }
    nextFrame();
  }

  function showResult(){
    gResult.innerHTML = `
      <div style="color:#fff;font-family:'Fredoka One',cursive;font-size:1.6rem;margin-bottom:6px">${result.name}玉！</div>
      <div style="font-size:1rem;color:rgba(255,255,255,0.85)">${rewardText}</div>`;
    closeBtn.style.display = "block";
  }
}

function updateMissionUI(){
  const el = document.getElementById("missionPanel");
  if(!el) return;
  const state = ms();
  const count3  = Math.min(state.missionCount,   3);
  const count10 = Math.min(sharedMissionCount10, 10);
  const done3   = count3  >= 3;
  const done10  = count10 >= 10;
  const dots3 = [0,1,2].map(i=>
    `<div class="mission-dot ${i < count3 ? 'filled' : ''}"></div>`
  ).join("");
  const dots10 = Array.from({length:10},(_,i)=>
    `<div class="mission-dot ${i < count10 ? 'filled' : ''}" style="width:10px;height:10px"></div>`
  ).join("");
  el.innerHTML = `
    <div class="mission-title">📋 デイリーミッション</div>
    <div class="mission-desc">クイズに3問正解 → 💎×5</div>
    <div class="mission-progress">
      <div class="mission-dots">${dots3}</div>
      <div class="mission-status ${done3 ? 'done' : ''}">${done3 ? '✅ 達成！' : `${count3} / 3`}</div>
    </div>
    <div class="mission-desc" style="margin-top:8px">クイズに10問正解 → 💎×5</div>
    <div class="mission-progress">
      <div class="mission-dots">${dots10}</div>
      <div class="mission-status ${done10 ? 'done' : ''}">${done10 ? '✅ 達成！' : `${count10} / 10`}</div>
    </div>
    <div class="mission-desc" style="margin-top:8px">英単語ガチャを1回引く → 🔧×500</div>
    <div class="mission-progress">
      <div class="mission-dots"><div class="mission-dot ${missionPackDone ? 'filled' : ''}"></div></div>
      <div class="mission-status ${missionPackDone ? 'done' : ''}">${missionPackDone ? '✅ 達成！' : '0 / 1'}</div>
    </div>`;

  // 全ミッション達成でチケット付与
  if(done3 && done10 && missionPackDone){
    const allDoneKey = "allMissionDone_" + missionDate;
    if(!localStorage.getItem(allDoneKey)){
      localStorage.setItem(allDoneKey, "1");
      fukubikiTickets++;
      saveGame();
      updateFukubikiUI();
      showMissionComplete("全ミッション達成！🎰 福引チケット×1");
    }
  }
}

function showMissionComplete(msg){
  const popup = document.createElement("div");
  popup.style.cssText = `
    position:fixed; top:80px; left:50%; transform:translateX(-50%);
    background:linear-gradient(135deg,#FFD93D,#FF6B6B);
    color:#1a1a2e; font-family:'Fredoka One',cursive; font-size:1.1rem;
    padding:12px 24px; border-radius:20px; z-index:9999;
    box-shadow:0 4px 20px rgba(255,217,61,0.5);
    animation:mission-pop 2.5s ease forwards;
  `;
  popup.textContent = "🎉 " + (msg||"ミッション達成！ 💎×5");
  document.body.appendChild(popup);
  setTimeout(()=>popup.remove(), 2500);
}

// =============================================
//  DEBUG
// =============================================
function addDiamondsDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  diamonds+=1000; update(); saveGame(); alert("💎1000追加");
}

function addResourcesDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  coins+=10000; materials+=10000; update(); saveGame(); alert("🪙10000 + 🔧10000追加");
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

function resetDailyBossDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  localStorage.removeItem(getDailyKey("english"));
  localStorage.removeItem(getDailyKey("kobun"));
  // ボスステータスも再抽選
  dailyBossMaxHP = { english: 0, kobun: 0 };
  dailyBossATK   = { english: 0, kobun: 0 };
  dailyBossHP    = { english: 0, kobun: 0 };
  alert("🌟 日替わりボスをリセットしました！");
  if(document.getElementById("dailyBossArea").style.display !== "none"){
    initDailyBossStats();
    switchDailyTab(dailyBossTab);
  }
}

function addTicketsDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  fukubikiTickets+=1000; updateFukubikiUI(); saveGame(); alert("🎰 チケット1000枚追加");
}

function resetUpgradeDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  owned.forEach(c=>{ c.upgrade=0; });
  // allCardsとkobunCardsの元の値に戻す
  owned.forEach(c=>{
    const base = (c.type==="english" ? allCards : kobunCards).find(b=>b.word===c.word);
    if(base){ c.atk=base.atk; c.hp=base.hp; }
  });
  ["english","kobun"].forEach(m=>{
    modeState[m].deck = modeState[m].deck.map(dc=>{
      const base = (dc.type==="english" ? allCards : kobunCards).find(b=>b.word===dc.word);
      return base ? {...base, type:dc.type, upgrade:0} : dc;
    });
  });
  saveGame(); update(); alert("🔧 全カード強化リセット！");
}

function maxUpgradeDebug(){
  if(typeof DEBUG === "undefined" || !DEBUG) return;
  owned.forEach(c=>{
    const base = (c.type==="english" ? allCards : kobunCards).find(b=>b.word===c.word);
    if(!base) return;
    c.upgrade = 10;
    c.atk = Math.floor(base.atk * Math.pow(1.05, 10));
    c.hp  = Math.floor(base.hp  * Math.pow(1.10, 10));
  });
  ["english","kobun"].forEach(m=>{
    modeState[m].deck = modeState[m].deck.map(dc=>{
      const latest = owned.find(o=>o.word===dc.word && o.type===dc.type);
      return latest ? {...latest} : dc;
    });
  });
  saveGame(); update(); alert("🔧 全カード強化MAX（10回）！");
}

// =============================================
//  UPGRADE LIMIT EXPANSION
// =============================================
// 強化上限拡張: 3000コインで+10回(max20)、6000コインで+10回(max30)
function getUpgradeMaxLevel(word){
  const key = `upgradeExpand_${word}`;
  return parseInt(localStorage.getItem(key)||"10");
}

function expandUpgradeLimit(word){
  const current = getUpgradeMaxLevel(word);
  if(current >= 30){ alert("これ以上強化上限を拡張できません（最大30回）"); return; }
  const cost = current === 10 ? 3000 : 6000;
  const nextMax = current + 10;
  if(coins < cost){ alert(`コインが足りません（必要: 🪙${cost}）`); return; }
  if(!confirm(`🪙${cost}コインで強化上限を${nextMax}回まで拡張しますか？`)){ return; }
  coins -= cost;
  localStorage.setItem(`upgradeExpand_${word}`, String(nextMax));
  saveGame(); update();
  alert(`✅ 強化上限を${nextMax}回まで拡張しました！`);
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
