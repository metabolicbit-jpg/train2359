/* ===== Train 23:59 · src/lang.js — متن‌ها، آیکون‌ها، کمک‌ها ===== */
var BASE='https://cdn.jsdelivr.net/gh/metabolicbit-jpg/train2359@main/';
var FILES=['content.json','guide.json','content/stations.json','content/events.json','content/people.json','content/guide.json'];
var A_MUSIC=BASE+'assets/audio/music.mp3';
var A_BB=[BASE+'assets/img/bb1.png',BASE+'assets/img/bb2.png',BASE+'assets/img/bb3.png',BASE+'assets/img/bb4.png'];
var CACHE='t59c16';
var LANG='fa';try{var _v=localStorage.getItem('t59lang');if(_v==='fa'||_v==='en')LANG=_v;}catch(e){}
var FIRST=true;try{FIRST=localStorage.getItem('t59vet')!=='1';}catch(e){}
function SL(s){if(s==null)return'';var i=s.indexOf('|');if(i<0)return s;return LANG==='fa'?s.slice(0,i):s.slice(i+1);}
var FD='۰۱۲۳۴۵۶۷۸۹';
function FA(x){return String(x).replace(/\d/g,function(d){return FD[+d];});}
function N(x){return LANG==='fa'?FA(x):String(x);}
function clamp(v,a,b){a=a==null?0:a;b=b==null?100:b;return Math.max(a,Math.min(b,v));}
function ri(x){return Math.floor(Math.random()*x);}
function pk(a){return a[ri(a.length)];}
function wp(l){if(!l||!l.length)return{r:'',f:{}};var t=0,i;for(i=0;i<l.length;i++)t+=l[i].w||1;var r=Math.random()*t;for(i=0;i<l.length;i++){r-=l[i].w||1;if(r<=0)return l[i];}return l[l.length-1];}
function clk(m){var v=((m%1440)+1440)%1440,h=Math.floor(v/60),mm=v%60;return(LANG==='fa'?(h<10?'۰':'')+FA(h):(h<10?'0':'')+h)+':'+(LANG==='fa'?(mm<10?'۰':'')+FA(mm):(mm<10?'0':'')+mm);}
var ACH=[['rescuer','نجات‌دهنده|Rescuer','۳ همراهِ زنده'],['seeker','حقیقت‌جو|Seeker','۵ سرنخ'],['calm','آرام|Calm','سلامت بالای ۷۰'],['survivor','بازمانده|Survivor','یک سفر را تمام کن'],['rich','ثروتمند|Rich','۵۰ ضایعات'],['bond','همراهِ راه|Bond','وفاداری بالای ۸۰']];
var P={food:'<path d="M3 12h18"/><path d="M5.5 12a6.5 6.5 0 0 0 13 0"/>',fuel:'<path d="M12 3.5S6 10 6 14a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5Z"/>',time:'<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>',sanity:'<path d="M12 20.5S4 15.5 4 10.3A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 8 2.7c0 5.2-8 10.2-8 10.2Z"/>',scrap:'<path d="M12 3.5 19 7.5v9l-7 4-7-4v-9z"/>',explore:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.2-4.2"/>',shop:'<path d="M5 8h14l-1.2 11H6.2z"/><path d="M9 8a3 3 0 0 1 6 0"/>',people:'<circle cx="9" cy="8" r="3"/><path d="M3.5 19.5C3.5 16 6 14 9 14s5.5 2 5.5 5.5"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15 19.5c0-2.4 1.6-3.9 3.9-3.9"/>',upgrade:'<path d="M12 19V6"/><path d="M6.5 11.5 12 6l5.5 5.5"/>',rest:'<path d="M20 14.5A8 8 0 1 1 10 4.5a6.3 6.3 0 0 0 10 10Z"/>',journal:'<path d="M6.5 3.5h11v17h-11z"/><path d="M9.5 8h5M9.5 12h5"/>',train:'<rect x="6" y="4" width="12" height="12" rx="2.5"/><path d="M6 16l-1.5 4M18 16l1.5 4"/><path d="M9.5 8h5"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.4 2.4 0 1 1 3.3 2.2c-.8.4-.9.9-.9 1.6"/><path d="M12 16.6h.01"/>',sound:'<path d="M4 9v6h3l4 3V6L7 9z"/><path d="M15 9a4 4 0 0 1 0 6"/>',muted:'<path d="M4 9v6h3l4 3V6L7 9z"/><path d="M16 9l5 6M21 9l-5 6"/>',music:'<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',musicOff:'<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/><path d="M3 3l18 18"/>',eye:'<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6"/>',eyeOff:'<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/><path d="M3 3l18 18"/>',trophy:'<path d="M8 4h8v4a4 4 0 0 1-8 0z"/><path d="M6 5H4a2 2 0 0 0 2 2M18 5h2a2 2 0 0 1-2 2"/><path d="M10 12h4v4h-4z"/><path d="M8 20h8"/>',alert:'<path d="M12 4 21 19H3z"/><path d="M12 10v4M12 16.4h.01"/>',person:'<circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5"/>',star:'<path d="M12 4l2.3 4.8 5.2.7-3.8 3.6.9 5.2L12 16.9 7.4 18.3l.9-5.2-3.8-3.6 5.2-.7z"/>',shield:'<path d="M12 3.5l7 2.5v6c0 4-3 7-7 8.5-4-1.5-7-4.5-7-8.5V6z"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M4.2 7.5l2.1 1.2M17.7 15.3l2.1 1.2M4.2 16.5l2.1-1.2M17.7 8.7l2.1-1.2"/>',cross:'<path d="M12 5v14M5 12h14"/>',bolt:'<path d="M13 3 5 13h6l-1 8 8-10h-6z"/>',cloud:'<path d="M7 18a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.5 1.6A3.5 3.5 0 0 1 17 18Z"/>',arrow:'<path d="M4 12h13"/><path d="M12 7l5 5-5 5"/>'};
function ic(n,c,col){return '<svg class="ic '+(c||'')+'" viewBox="0 0 24 24" fill="none" stroke="'+(col||'currentColor')+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(P[n]||P.person)+'</svg>';}
function skIc(s){return s==='doctor'?'cross':s==='engineer'?'gear':s==='guard'?'shield':s==='cook'?'food':s==='leader'?'star':'person';}
var TIP={
 shop:'بازار: با ضایعات غذا و سوخت بخر. هر خرید گران‌ترش می‌کند؛ دارو حال را بالا می‌برد.|Market: buy food and fuel with scrap; each buy costs more; medicine lifts your mood.',
 explore:'کاوش سه عمق دارد: سطحی بی‌خطر، متوسط ۳۰٪ خطر، اعماق ۵۵٪ خطر ولی سرنخِ محتمل. جسور باش، نه احمق.|Three depths: shallow (safe), medium 30%, deep 55% but likely a clue.',
 pax:'حالِ همراهان هر سفر کم می‌شود؛ با گفت‌وگو برشان گردان وگرنه از دستشان می‌دهی.|Companions\' mood falls each trip; talk to restore it or you lose them.',
 upg:'هر ارتقاء قطار را بزرگ‌تر و روشن‌تر می‌کند؛ موتور سوخت کمتری می‌برد و آشپزخانه غذا را نگه می‌دارد.|Each upgrade makes the train bigger and brighter.',
 rest:'استراحت: ۴ زمان می‌دهی و ۱۲ سلامت می‌گیری.|Rest: spend 4 time to gain 12 health.',
 depart:'تند = سریع و پرخرج؛ مخفی = آهسته و بی‌خطر؛ معمولی = میانه. تعقیب را چشمت باشد.|Fast, Stealth or Normal route — and always watch the pursuit.'
};
var TQ='ارباب، برای کدام قسمت راهنمایی می‌خواهی؟ روی همان دکمه بزن.|Boss, which part? Tap that button.';
var STORY=[
 {st:5,t:'در شیشهٔ واگن به انعکاس خودت نگاه می‌کنی... مسافران دیده می‌شوند، اما جای تو در انعکاس خالی است.|You look at your reflection in the carriage glass... the passengers are there, but your place in it is empty.'},
 {st:7,t:'از وقتی سوار شدی، یک لقمه هم نخوردی... ولی نمردی. این عجیب نیست؟|Since you boarded, you haven\'t taken a single bite... yet you haven\'t died.'},
 {st:9,t:'هر بار از کنار کسی می‌گذری، هوا سرد می‌شود. کسی لرزان می‌پرسد: «چرا وقتی رد می‌شی، هوا سرد می‌شه؟»|Each time you pass someone, the air turns cold. Someone asks: "Why does it go cold when you pass?"'},
 {st:12,t:'در دفترچه صفحه‌ای با تاریخِ فردا پیدا می‌کنی — با دستخطِ خودت نوشته شده.|In the journal you find a page dated tomorrow — written in your own hand.'}
];
var REACT={pur:'اون داره میاد... باید فوراً حرکت کنیم!|They\'re coming... we have to move, now!'};
var TRUTH='حقیقت کامل شد: تو همان شب سوار نشدی؛ مرده بودی. قطار کارهای ناتمام را می‌برد — و کارِ ناتمامِ تو، برگرداندنِ آن‌ها بود.|The truth is complete: you never boarded that night — you had died.';
var CONN='سرنخ‌ها در ذهنت به هم می‌پیوندند... تصویری تار شکل می‌گیرد. چند تکهٔ دیگر مانده.|The clues knit together in your mind... a blurred picture forms.';
var NPCDEF={name:'کهنه‌سوار|The Veteran',intro:['سلام مسافر... من کهنه‌سوارم. هر وقت کمک خواستی روی من بزن.|Hello, passenger... I\'m the Veteran. Tap me whenever you need help.'],lines:[]};