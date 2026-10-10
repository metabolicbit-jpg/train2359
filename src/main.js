/* ===== Train 23:59 · src/main.js — راه‌انداز ===== */
function boot(){var c=null;try{var s=localStorage.getItem(CACHE);if(s)c=JSON.parse(s);}catch(e){}if(c&&c.ui){DATA=c;ready();}else{attempt(0);}}
function attempt(n){document.getElementById('loadMsg').textContent='در حال بارگذاری محتوا…';document.getElementById('retryBtn').classList.add('hidden');fetchAll(function(m){if(m&&m.ui){DATA=m;try{localStorage.setItem(CACHE,JSON.stringify(m));}catch(e){}ready();}else{if(n<1){attempt(n+1);return;}document.getElementById('loadMsg').textContent=LANG==='fa'?'برای اولین بار به اینترنت وصل شو و بازی را باز کن (بعد آفلاین هم کار می‌کند).':'Connect to the internet once to load content.';document.getElementById('retryBtn').classList.remove('hidden');}});}
var last=0,tenT=0;
function loop(ts){var dt=Math.min((ts-last)/1000||0,.05);last=ts;if(tr){tt+=dt;if(!(dur>0))dur=6;var p=Math.min(1,tt/dur);window.__sp=peak*Math.sin(3.14159*p);if(p>=1){window.__sp=0;arrive();}}tenT+=dt;if(tenT>0.8){tenT=0;try{var ss=G.S();if(ss)Au.tension(ss.pur);}catch(e){}}Sc.step(dt);UI.tick(dt);requestAnimationFrame(loop);}
function T59boot(){
 Sc.rs();Sc.bd();
 document.getElementById('mute').addEventListener('click',function(){var m=Au.toggle();this.innerHTML=ic(m?'muted':'sound','s');});
 document.getElementById('musicBtn').addEventListener('click',function(){var o=Au.toggleMusic();this.innerHTML=ic(o?'musicOff':'music','s');});
 var _sb=document.getElementById('spdBtn');if(_sb)_sb.addEventListener('click',function(){try{cycSpeed();}catch(e){}});
 document.getElementById('hideBtn').addEventListener('click',function(){var h=document.body.classList.toggle('hideui');this.innerHTML=ic(h?'eye':'eyeOff','s');});
 document.getElementById('bubble').addEventListener('click',function(){nAdv();});
 vetB.addEventListener('click',function(){if(!started||tr)return;TIPMODE=true;Sc.tip(true);try{nClear();}catch(e){}try{nSay(SL(TQ));}catch(e){}setTimeout(function(){if(TIPMODE){TIPMODE=false;Sc.tip(false);}},25000);});
 document.getElementById('langBtn').addEventListener('click',function(){LANG=LANG==='fa'?'en':'fa';if(DATA)appLang();});
 document.getElementById('startBtn').addEventListener('click',function(){Au.init();Au.music();newGame();});
 document.getElementById('helpBtnTitle').addEventListener('click',function(){document.getElementById('helpScreen').classList.remove('hidden');});
 document.getElementById('helpBack').addEventListener('click',function(){document.getElementById('helpScreen').classList.add('hidden');});
 document.getElementById('achBack').addEventListener('click',function(){document.getElementById('achScreen').classList.add('hidden');});
 document.getElementById('introNext').addEventListener('click',function(){document.getElementById('introScreen').classList.add('hidden');pickS();});
 document.getElementById('journalBack').addEventListener('click',function(){document.getElementById('journalScreen').classList.add('hidden');});
 document.getElementById('restartBtn').addEventListener('click',function(){newGame();});
 document.getElementById('retryBtn').addEventListener('click',function(){attempt(0);});
 document.addEventListener('pointerdown',function(e){if(e.target.closest('.overlay')||e.target.closest('.sheet')||e.target.closest('#hideBtn')||e.target.closest('#bubble')||e.target.closest('#vetBtn'))return;UI.fin();},{passive:true});
 addEventListener('resize',function(){Sc.rs();Sc.bd();});
 UI.bind(act);appLang();boot();
 requestAnimationFrame(function(t){last=t;requestAnimationFrame(loop);});
}