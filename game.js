const allCards=[

{word:"genuine",meaning:"本物の",atk:20,hp:120,rarity:"R",
choices:["古い","偽物の","新しい","大きい","速い"]},
{word:"mania",meaning:"（過度の）熱中",atk:20,hp:120,rarity:"R",
choices:["（普通の）好奇心","（穏やかな）関心","（軽い）興味","退屈","無関心"]},
{word:"contempt",meaning:"軽蔑",atk:31,hp:140,rarity:"R",
choices:["尊敬","愛情","賞賛","感謝","友情"]},
{word:"exposure",meaning:"露出",atk:27,hp:130,rarity:"R",
choices:["絶縁","拒否","隠蔽","保護","沈黙"]},
{word:"onslaught",meaning:"激しい攻撃",atk:42,hp:180,rarity:"SR",
choices:["穏やかな風","静かな場所","優しい言葉","平和な時間","穏やかな生活"]},
{word:"frenzy",meaning:"逆上",atk:44,hp:170,rarity:"SR",
choices:["安定","静寂","平穏","冷静","落ち着き"]},
{word:"circuit",meaning:"回路",atk:28,hp:150,rarity:"R",
choices:["時間","空間","道","建物","言葉"]},
{word:"descendant",meaning:"子孫",atk:24,hp:160,rarity:"N",
choices:["後継","親族","系譜","祖先","家系"]},
{word:"exaltation",meaning:"有頂天",atk:37,hp:150,rarity:"R",
choices:["静寂","平穏","悲哀","絶望","孤独"]},
{word:"dedication",meaning:"献身",atk:34,hp:170,rarity:"R",
choices:["不信","疑念","無関心","怠慢","裏切り"]},
{word:"botanical",meaning:"植物の",atk:23,hp:140,rarity:"N",
choices:["科学の","美術の","音楽の","歴史の","文学の"]},
{word:"minister",meaning:"大臣",atk:36,hp:160,rarity:"R",
choices:["教師","弁護士","医者","警察官","技師"]},
{word:"merely",meaning:"単に",atk:18,hp:110,rarity:"N",
choices:["ほんの","ただ","単純に","突然","完全に"]},
{word:"revolution",meaning:"革命",atk:58,hp:200,rarity:"SSR",
choices:["進展","改革","変革","安定","停滞"]},
{word:"transform",meaning:"を変形させる",atk:41,hp:180,rarity:"SR",
choices:["を保存する","を削除する","を固定させる","を修理する","を移動させる"]},
{word:"inevitable",meaning:"避けられない",atk:38,hp:170,rarity:"R",
choices:["不可能","選択肢","偶然","自由","希望"]},
{word:"imply",meaning:"を示唆する",atk:33,hp:140,rarity:"R",
choices:["を明言する","を隠す","を否定する","を説明する","を強調する"]},
{word:"panorama",meaning:"広大な眺め",atk:29,hp:150,rarity:"R",
choices:["静かな場所","おいしい料理","明るい未来","小さな部屋","古い建物"]},
{word:"encyclopedia",meaning:"百科事典",atk:35,hp:190,rarity:"R",
choices:["辞書","雑誌","カタログ","新聞","小説"]},
{word:"legislature",meaning:"立法機関",atk:37,hp:180,rarity:"R",
choices:["警察","行政機関","裁判所","軍隊","学校"]},
{word:"abuse",meaning:"を悪用する",atk:27,hp:130,rarity:"R",
choices:["を守る","を助ける","を避ける","を修理する","を改善する"]},
{word:"subscriber",meaning:"購読者",atk:22,hp:140,rarity:"N",
choices:["情報提供者","編集者","作家","販売員","広告主"]},
{word:"forefinger",meaning:"人差し指",atk:19,hp:120,rarity:"N",
choices:["薬指","小指","親指","中指","手首"]},
{word:"caucus",meaning:"党員集会",atk:30,hp:170,rarity:"R",
choices:["サークル活動","（市民の）声","（政治家の）支持者","選挙演説","政治運動"]},
{word:"peculiar",meaning:"奇妙な",atk:34,hp:150,rarity:"R",
choices:["楽しい","素晴らしい","普通な","安全な","便利な"]},
{word:"locomotive",meaning:"機関車",atk:28,hp:170,rarity:"R",
choices:["自転車","飛行機","船","自動車","バス"]},
{word:"undertaking",meaning:"（大規模な）事業",atk:39,hp:200,rarity:"R",
choices:["（簡単な）作業","（個人的な）趣味","（小さな）仕事","日常生活","遊び"]},
{word:"anguish",meaning:"激しい苦痛",atk:43,hp:190,rarity:"SR",
choices:["穏やかな喜び","心の不安","軽い気分","安心","満足"]},
{word:"scandal",meaning:"不祥事",atk:32,hp:150,rarity:"R",
choices:["週刊誌","取材","報道","広告","出版"]},
{word:"comprehend",meaning:"理解する",atk:42,hp:180,rarity:"SR",
choices:["聞く","考える","見る","覚える","知る"]},
{word:"jury",meaning:"陪審員",atk:23,hp:120,rarity:"N",
choices:["裁判所","法廷","判決","裁判官","弁護士"]},
{word:"objective",meaning:"目的",atk:52,hp:190,rarity:"SSR",
choices:["手段","結果","条件","計画","方法"]},
{word:"visually",meaning:"視覚的に",atk:28,hp:140,rarity:"R",
choices:["心地よく","静かに","優雅に","感覚的に","印象的に"]},
{word:"guilty of",meaning:"罪を犯して",atk:45,hp:175,rarity:"SR",
choices:["潔白な","無罪の","正当な","合法の","正しい"]},
{word:"hysteria",meaning:"病的興奮",atk:24,hp:135,rarity:"N",
choices:["静止","理解","冷静","落ち着き","平静"]},
{word:"formal",meaning:"正式な",atk:31,hp:150,rarity:"R",
choices:["日常的な","軽い","自由な","気軽な","普段の"]},
{word:"reinforce",meaning:"を強化する",atk:48,hp:185,rarity:"SR",
choices:["を弱める","を無視する","を破壊する","を減らす","を否定する"]},
{word:"in the meantime",meaning:"とりあえず",atk:20,hp:110,rarity:"N",
choices:["後で","そのうち","今のところ","最終的に","すぐに"]},
{word:"accuracy",meaning:"正確さ",atk:54,hp:200,rarity:"SSR",
choices:["速さ","強さ","大きさ","長さ","重さ"]},
{word:"aspiration",meaning:"熱望",atk:37,hp:165,rarity:"R",
choices:["願望","目標","希望","理想","期待"]},
{word:"industrial",meaning:"産業の",atk:18,hp:100,rarity:"N",
choices:["美しい","古い","静かな","自然の","文化の"]},
{word:"enthusiasm",meaning:"熱意",atk:43,hp:180,rarity:"SR",
choices:["無関心","冷静さ","不安","疑い","退屈"]},
{word:"inspection",meaning:"点検",atk:29,hp:150,rarity:"R",
choices:["修理","改善","建設","整備","改良"]},
{word:"confident",meaning:"自信がある",atk:56,hp:210,rarity:"SSR",
choices:["怒っている","不安な","恥ずかしい","緊張した","困った"]},
{word:"discontent",meaning:"不満",atk:22,hp:120,rarity:"N",
choices:["喜び","満足","快適","幸福","安心"]},

];

let owned=[];
let deck=[];
let bossHP=150;
let bossLevel=1;
let bossATK=50;
let playerHP = 0;

function openPack(){

document.getElementById("packResult").innerHTML="";

document.getElementById("packArea").innerHTML = `

<div class="packWrapper" id="packBox" onclick="openAnimation()">

<div class="packTop"></div>

<div class="packBottom"></div>

<div class="packLogo">WORD<br>PACK</div>

</div>

`;

}

function addDeck(index){

if(deck.length>=5){
alert("デッキは5枚まで！");
return;
}

const card = owned[index];

if(deck.some(c => c.word === card.word)){
alert("同じカードは入れられません！");
return;
}

deck.push(card);

saveGame();

update();

}

function addDeckFromBook(word){

if(deck.length>=5){
alert("デッキは5枚まで！");
return;
}

const card = owned.find(c => c.word === word);

if(!card) return;

if(deck.some(c => c.word === word)){
alert("同じカードは入れられません！");
return;
}

deck.push(card);

saveGame();
update();

}

function update(){

const deckArea=document.getElementById("deckCards");

deckArea.innerHTML="";

deck.forEach((c,i)=>{

deckArea.innerHTML+=`

<div class="card ${c.rarity.toLowerCase()}">

<div class="word">${c.word}</div>
<div class="meaning">${c.meaning}</div>
<div class="stat">ATK ${c.atk}</div>
<div class="stat">HP ${c.hp}</div>

<button onclick="removeDeck(${i})">デッキから外す</button>

</div>

`;

});

const col=document.getElementById("collection");

col.innerHTML="";

const grouped={};

owned.forEach(c=>{

if(!grouped[c.word]){
grouped[c.word]={...c,count:0};
}

grouped[c.word].count++;

});

for(const key in grouped){

const c=grouped[key];

col.innerHTML+=`

<div class="card ${c.rarity.toLowerCase()}">

<div class="word">${c.word}</div>
<div class="meaning">${c.meaning}</div>
<div class="stat">ATK ${c.atk}</div>
<div class="stat">HP ${c.hp}</div>
<div class="stat">枚数 ×${c.count}</div>

<button onclick="addDeckFromBook('${c.word}')">デッキに入れる</button>

</div>

`;

}

calcDeckStats();

}

function battle(){

let atk=0;

deck.forEach(c=>{
atk+=c.atk;
});

bossHP -= atk;

playerHP -= bossATK;

document.getElementById("playerHP").textContent = playerHP;
document.getElementById("bossHP").textContent = bossHP;

if(bossHP <= 0){
alert("勝利！");

bossLevel++;
bossHP = 150 + bossLevel * 50;
bossATK = 50 + bossLevel * 20;

document.getElementById("bossLevel").textContent = bossLevel;
document.getElementById("bossHP").textContent = bossHP;
document.getElementById("bossATK").textContent = bossATK;

startBattle(); // ←追加
}

if(playerHP <= 0){
alert("負けた...");

bossHP = 150 + bossLevel * 50;

document.getElementById("bossHP").textContent = bossHP;

startBattle();
}

}

function startBattle(){

let hp = 0;

deck.forEach(c=>{
hp += c.hp;
});

playerHP = hp;

document.getElementById("playerHP").textContent = playerHP;

}

function show(id){

if(versusMode && id !== "versus"){
alert("対戦中です！");
return;
}

document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));

if(id==="battle"){

if(deck.length === 0){
alert("デッキを編成してください！");
show("deck");
return;
}

if(deck.length < 5){
alert("デッキは5枚編成してください！");
show("deck");
return;
}

inBattle = true; 
startBattle();
generateQuiz();

}

document.getElementById(id).classList.add("active");

update();

}

function saveGame(){

const data={
owned:owned,
deck:deck,
bossHP:bossHP,
bossLevel:bossLevel,
bossATK:bossATK
};

localStorage.setItem("wordCardGame",JSON.stringify(data));

}

function loadGame(){

const data=localStorage.getItem("wordCardGame");

if(data){

const save=JSON.parse(data);

owned=save.owned || [];
deck=save.deck || [];
bossHP=save.bossHP || 150;
bossLevel=save.bossLevel || 1;
bossATK = save.bossATK || 50;
document.getElementById("bossLevel").textContent=bossLevel;
document.getElementById("bossATK").textContent=bossATK;
document.getElementById("bossHP").textContent=bossHP;

}

update();

}

loadGame();

function removeDeck(index){

deck.splice(index,1);

document.getElementById("bossLevel").textContent=bossLevel;

saveGame();
update();

}

function calcDeckStats(){

let totalATK = 0;
let totalHP = 0;

for(let i=0;i<deck.length;i++){

const card = deck[i];

totalATK += card.atk;
totalHP += card.hp;

}

document.getElementById("deckATK").textContent = totalATK;
document.getElementById("deckHP").textContent = totalHP;

document.getElementById("battleATK").textContent = totalATK;
document.getElementById("battleHP").textContent = totalHP;

}

function openAnimation(){

const pack=document.getElementById("packBox");

pack.classList.add("open");

setTimeout(revealCards,700);

}

function revealCards(){

let html = "";

for(let i=0;i<5;i++){

const r=Math.floor(Math.random()*allCards.length);
const card=allCards[r];

owned.push({...card});

const className = "card " + card.rarity.toLowerCase();

html += `

<div class="${className}">
<div class="word">${card.word}</div>
<div class="meaning">${card.meaning}</div>
<div class="stat">ATK ${card.atk}</div>
<div class="stat">HP ${card.hp}</div>
<div class="stat">${card.rarity}</div>
<button onclick="addDeck(${owned.length-1})">デッキに入れる</button>
</div>

`;

}

document.getElementById("packArea").innerHTML="";
document.getElementById("packResult").innerHTML = html;

saveGame();
update();

}

let quizAnswer = "";
let quizATK = 0;
let inBattle = false;
let versusMode = false;
let enemyHP = 0;
let enemyATK = 0;
let playerTurn = true;
let playerFirst = true;

function generateQuiz(){

if(!inBattle) return;

const r = Math.floor(Math.random()*allCards.length);
const card = allCards[r];

quizAnswer = card.meaning;

let wrong = [...card.choices];

wrong.sort(()=>Math.random()-0.5);

let options = wrong.slice(0,3);

options.push(card.meaning);

options.sort(()=>Math.random()-0.5);

let html = `<h2>${card.word} の意味は？</h2>`;

options.forEach(opt=>{
html += `<button onclick="answerQuiz('${opt}')">${opt}</button>`;
});

document.getElementById("bossQuizArea").innerHTML = html;

}

function answerQuiz(choice){

let atk = 0;

deck.forEach(c=>{
atk += c.atk;
});

if(choice === quizAnswer){

alert("正解！ダメージ半減");
atk = Math.floor(atk/2);

}else{

alert("不正解！等倍ダメージ");

}

bossHP -= atk;
playerHP -= bossATK;

document.getElementById("bossHP").textContent = bossHP;
document.getElementById("playerHP").textContent = playerHP;

checkBattle();

setTimeout(generateQuiz,800);

}

function checkBattle(){

if(bossHP <= 0){

alert("勝利！");

bossLevel++;
bossHP = 150 + bossLevel * 50;
bossATK = 50 + bossLevel * 20;

startBattle();

}

if(playerHP <= 0){

alert("負けた...");

startBattle();

}

}

let versusCode = "";
let enemyDeck = [];

function createVersusCode(){

if(deck.length < 5){
alert("デッキを5枚編成してください");
return;
}

const code = prompt("4文字以上の対戦コードを作ってください");

if(!code || code.length < 4){
alert("4文字以上にしてください");
return;
}

versusCode = code;

const deckWords = deck.map(c => c.word);

const sendData = code + "|" + deckWords.join(",");

prompt("この対戦コードを友達に送ってください", sendData);

}

function startVersus(){

versusMode = true;

if(enemyDeck.length === 0){
alert("相手デッキを読み込んでください");
return;
}

playerFirst = Math.random() < 0.5;

if(playerFirst){
playerTurn = true;
alert("あなたが先攻！");
}else{
playerTurn = false;
alert("相手が先攻！");
}

let myHP = 0;

deck.forEach(c=>{
myHP += c.hp;
});

playerHP = myHP;

enemyHP = 0;
enemyATK = 0;

enemyDeck.forEach(c=>{
enemyHP += c.hp;
enemyATK += c.atk;
});

let myATK = 0;
deck.forEach(c=>{
myATK += c.atk;
});

document.getElementById("versusResult").innerHTML = `
<div>あなたHP <span id="vPlayerHP">${playerHP}</span></div>
<div>あなたATK <span id="vPlayerATK">${myATK}</span></div>

<div>相手HP <span id="vEnemyHP">${enemyHP}</span></div>
<div>相手ATK <span id="vEnemyATK">${enemyATK}</span></div>

<div id="turnText"></div>
`;

document.getElementById("turnText").textContent =
playerTurn ? "あなたのターン" : "相手のターン";

generateVersusQuiz();

}

function loadEnemyCode(){

const data = prompt("相手の対戦コードを入力");

if(!data) return;

const parts = data.split("|");

if(parts.length !== 2){
alert("コードが正しくありません");
return;
}

const words = parts[1].split(",");

enemyDeck = [];

words.forEach(w=>{

const card = allCards.find(c=>c.word === w);

if(card){
enemyDeck.push(card);
}

});

let html = "<h3>相手デッキ</h3>";

enemyDeck.forEach(c=>{

html += `
<div class="card ${c.rarity.toLowerCase()}">
<div class="word">${c.word}</div>
<div class="stat">ATK ${c.atk}</div>
<div class="stat">HP ${c.hp}</div>
</div>
`;

});

document.getElementById("enemyDeck").innerHTML = html;

}

function generateVersusQuiz(){

const r = Math.floor(Math.random()*allCards.length);
const card = allCards[r];

quizAnswer = card.meaning;

let wrong = [...card.choices];
wrong.sort(()=>Math.random()-0.5);

let options = wrong.slice(0,3);
options.push(card.meaning);

options.sort(()=>Math.random()-0.5);

let html = `<h2>${card.word} の意味は？</h2>`;

options.forEach(opt=>{
html += `<button onclick="answerVersusQuiz('${opt}')">${opt}</button>`;
});

document.getElementById("versusQuizArea").innerHTML = html;

}

function answerVersusQuiz(choice){

if(!versusMode){
return;
}

let myATK = 0;
deck.forEach(c=>{
myATK += c.atk;
});

if(playerTurn){

// 自分ターン

if(choice === quizAnswer){
alert("正解！ダメージ半減");
playerHP -= Math.floor(enemyATK/2);
}else{
alert("不正解！等倍ダメージ");
playerHP -= enemyATK;
}

}else{

// 相手ターン

if(choice === quizAnswer){
alert("相手正解！ダメージ半減");
enemyHP -= Math.floor(myATK/2);
}else{
alert("相手不正解！等倍ダメージ");
enemyHP -= myATK;
}

}

document.getElementById("vEnemyHP").textContent = enemyHP;
document.getElementById("vPlayerHP").textContent = playerHP;

if(enemyHP <= 0){
alert("対戦勝利！");
versusMode=false;

document.getElementById("versusQuizArea").innerHTML = ""; // クイズ消す

return;
}

if(playerHP <= 0){
alert("対戦敗北...");
versusMode=false;

document.getElementById("versusQuizArea").innerHTML = ""; // クイズ消す

return;
}

playerTurn = !playerTurn;

document.getElementById("turnText").textContent =
playerTurn ? "あなたのターン" : "相手のターン";

setTimeout(generateVersusQuiz,800);

}

function stopVersus(){

versusMode = false;

enemyDeck = [];

document.getElementById("versusQuizArea").innerHTML = "";

alert("対戦を終了しました");

show("deck");

}