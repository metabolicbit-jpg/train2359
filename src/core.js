/* ===== Train 23:59 · src/core.js — منطقِ بازی ===== */
var ACT=4,TRAV=3;
var G=(function(){function fr(){return{st:1,tot:15,d:1,food:70,fuel:72,time:100,sanity:78,scrap:12,pax:[],clues:[],upg:{},pur:18,cm:23*60+59,arch:null,loc:[],shop:null,refused:[],lost:0};}var St=fr(),K='t59save';
 return{S:function(){return St;},reset:function(){St=fr();},save:function(){try{localStorage.setItem(K,JSON.stringify(St));}catch(e){}},clear:function(){try{localStorage.removeItem(K);}catch(e){}},has:function(id){return St.pax.some(function(p){return p.id===id;});},addPax:function(p){St.pax.push({id:p.id,nm:p.nm,ro:p.ro,sk:p.sk,bg:p.bg,ly:50,md:100});},upg:function(id){return St.upg[id]||0;},lvl:function(){var n=0;for(var k in St.upg)n+=St.upg[k];return 1+Math.floor(n/2);},tot:function(n){St.tot=n;}};})();
function timeClock(t){return 23*60+59+Math.round((100-clamp(t,0,100))/100*331);}
var Re=(function(){function ap(f){var s=G.S();if(!f)return;for(var k in f){if(k==='scrap')s.scrap=Math.max(0,s.scrap+f[k]);else if(s[k]!=null)s[k]=clamp(s[k]+f[k]);}}
 function aff(c){return !c||G.S().scrap>=(c.scrap||0);}function pay(c){if(c&&c.scrap)G.S().scrap-=c.scrap;}
 function end(){var s=G.S();var cook=s.pax.some(function(p){return p.sk==='cook';}),lead=s.pax.some(function(p){return p.sk==='leader';});var e=Math.max(1,s.pax.length);if(cook)e=Math.round(e*.6);if(G.upg('kitchen'))e=Math.max(1,e-1);s.food=clamp(s.food-e);s.fuel=clamp(s.fuel-(4-(G.upg('engine')?2:0)));if(lead)s.sanity=clamp(s.sanity+2);if(G.upg('clinic'))s.sanity=clamp(s.sanity+2);s.sanity=clamp(s.sanity-2);if(s.food<15)s.sanity=clamp(s.sanity-5);if(s.fuel<10)s.pur=clamp(s.pur+5,0,100);if(s.sanity<25&&Math.random()<.5)s.sanity=clamp(s.sanity-3);}
 return{ap:ap,aff:aff,pay:pay,end:end};})();
var Stn=(function(){function gen(){var s=G.S(),a=pk(AR.length?AR:[{id:'ind',nm:'?',f:4,u:3}]);s.arch=a.id;var pool=(LO||[]).slice(),lo=[];for(var i=0;i<4&&pool.length;i++){var k=ri(pool.length);lo.push({id:pool[k].id,used:false});pool.splice(k,1);}s.loc=lo;s.shop={food:{pr:a.f,st:20},fuel:{pr:a.u,st:16},medkit:{pr:16,st:2},alcohol:{pr:9,st:3},map:{pr:24,st:1}};}
 function an(){var a=(AR||[]).filter(function(z){return z.id===G.S().arch;})[0];return a?SL(a.nm):'';}function def(id){return (LO||[]).filter(function(l){return l.id===id;})[0]||{nm:'?',o:[]};}return{gen:gen,an:an,def:def};})();
var Sy=(function(){function clue(id){var s=G.S();if(id&&s.clues.indexOf(id)<0){s.clues.push(id);return true;}return false;}
 function end(){var s=G.S(),a=s.pax.length,c=s.clues.length,vv=s.sanity;if(s.pur>=100)return'pursued';if(s.time<=0)return'dawn';if(s.food<=0||s.fuel<=0||vv<=0)return'ruin';if(c>=5&&a>=3&&vv>=50)return'hope';if(c>=5)return'mystery';if(a===0&&s.lost>=1)return'alone';return'bitter';}
 return{clue:clue,end:end};})();
var ENDEF={
 pursued:{t:'پایانِ تعقیب|Hunted',d:'قطارِ سیاه رسید و چراغ‌هایت را خاموش کرد.|The black train caught you.'},
 dawn:{t:'پایانِ ماندن|Still Aboard',d:'سپیده دمید و تو یکی از آن‌ها شدی...|Dawn broke. You became one of them...'},
 ruin:{t:'پایانِ خالی‌شدن|Emptied',d:'نه سوختی، نه نانی، نه خودی.|No fuel, no bread, no self.'},
 hope:{t:'پایانِ امید|Hope',d:'با همراهانت به سپیده رسیدی و راز را کامل کردی.|You reached dawn with your companions and completed the truth.'},
 mystery:{t:'پایانِ راز|Mystery',d:'راز را فهمیدی، اما تنها.|You understood the truth, but alone.'},
 alone:{t:'پایانِ تنها|Alone',d:'همه را از دست دادی.|You lost them all.'},
 bitter:{t:'پایانِ تلخ|Bitter',d:'به ایستگاه آخر رسیدی، اما چیزی از خودت جا گذاشتی.|You reached the last station, but left a part of yourself behind.'}
};
var tr=false,tt=0,pa=null,pn=null,started=false,peak=290,dur=6,TIPMODE=false;
var SPD=1,DIST=20;
var vetB=document.getElementById('vetBtn');
function byId(id){for(var i=0;i<PO.length;i++)if(PO[i].id===id)return PO[i];return null;}
function cycSpeed(){SPD=SPD===1?2:(SPD===2?4:1);var b=document.getElementById('spdBtn');if(b)b.textContent=N(SPD)+'×';if(tr&&dur>0){var p=tt/dur;dur=DIST/SPD;tt=p*dur;}return SPD;}
function stationFlavor(){var s=G.S();if(Math.random()<.35&&s.scrap<200){s.scrap+=2;try{nSay(SL('یک تکهٔ دورریختنی روی سکو پیدا کردی. +۲ ضایعات.|You find something on the platform. +2 scrap.'));}catch(e){}}if(s.pax.length&&Math.random()<.5){var p=pk(s.pax);var l=p.say;if(l&&l.length){try{nSay(SL(p.nm)+': '+SL(pk(l)));}catch(e){}}}}
function triggerStory(){var s=G.S();
 if(s.pur>70&&!GF.purW){GF.purW=1;try{nSay(SL(REACT.pur));}catch(e){}}
 var bt=null;for(var i=0;i<STORY.length;i++)if(STORY[i].st===s.st)bt=STORY[i];
 if(bt){try{nSay(SL(bt.t));}catch(e){}}
 if(returnBeat())return true;
 stationFlavor();
 return false;}
function returnBeat(){var s=G.S();if(!s.refused||!s.refused.length)return false;
 for(var i=0;i<s.refused.length;i++){var r=s.refused[i];if(s.st>=r.at+3){s.refused.splice(i,1);var pp=byId(r.id);if(!pp)return false;pn=pp;UI.setKind('ret');UI.setText(SL('همان مسافری که راندی... زخمی برگشته.|The one you turned away... has returned wounded.'));UI.show('npc');return true;}}
 return false;}
function startS(){var s=G.S();Sc.setNpc(true);vetB.classList.remove('hidden');Stn.gen();UI.setText('');UI.setPax('');UI.res();UI.show('main');Sc.waiters();G.save();
 if(!triggerStory()){try{nCheck();}catch(e){}}}
function expl(i,depth){var s=G.S(),l=s.loc[i];if(!l||l.used)return;var cost=depth===1?2:(depth===2?4:8);
 if(s.time<cost){UI.setKind('main');UI.setText(S('noTime'));UI.show('result');return;}
 l.used=true;s.time-=cost;var df=Stn.def(l.id),pool=(df.o||[]);
 if(depth===1){var safe=pool.filter(function(o){for(var k in (o.f||{}))if(o.f[k]<0)return false;return true;});if(safe.length)pool=safe;}
 var o=wp(pool),mult=depth===3?1.5:(depth===1?0.7:1),fx={};for(var k in(o.f||{}))fx[k]=Math.round(o.f[k]*mult);
 if(fx.scrap&&G.upg('storage'))fx.scrap=Math.round(fx.scrap*1.3);Re.ap(fx);
 var out=[SL(o.r)];
 if(o.cl){var nw=Sy.clue(o.cl);out.push((nw?S('newClue'):S('oldClue'))+(nw?SL(CL[o.cl]||''):''));}
 if(depth===3&&Math.random()<0.30){var unf=Object.keys(CL).filter(function(c){return s.clues.indexOf(c)<0;});if(unf.length){var cc=pk(unf);Sy.clue(cc);out.push(S('newClue')+SL(CL[cc]));}}
 var hz=(depth===2?0.30:depth===3?0.55:0);
 if(Math.random()<hz){var q=Math.random();if(q<0.4){var dd=8+ri(9);s.sanity=clamp(s.sanity-dd);out.push(SL('⚠ خطر: چیزی از تاریکی آسیب زد. (−'+FA(dd)+' سلامت)|⚠ Danger: something hurt you. (−'+dd+' health)'));}else if(q<0.75){s.food=clamp(s.food-6);out.push(SL('⚠ چیزی از کوله‌ات دزدید. (−۶ غذا)|⚠ Something stole from your pack.'));}else{s.pur=clamp(s.pur+8,0,100);out.push(SL('⚠ صدایی راهزن‌ها را خبر کرد. (+۸ تعقیب)|⚠ A noise alerted the raiders.'));}Sc.shake(.8);Au.bad();}
 else if(depth===3&&Math.random()<0.25){s.scrap+=10;out.push(SL('💰 یافتهٔ بزرگ: ۱۰ ضایعات|💰 Big find: 10 scrap'));Au.good();}
 UI.res();G.save();
 if(Math.random()<.22){var cd=(PO||[]).filter(function(p){return !G.has(p.id);});if(cd.length){pn=pk(cd);UI.setKind('main');UI.setText(out.join(' '));UI.show('npc');try{nCheck();}catch(e){}return;}}
 UI.setKind('main');UI.setText(out.join(' '));UI.show('result');try{nCheck();}catch(e){}}
function buy(k){var s=G.S(),q=s.shop[k];if(!q||q.st<=0)return;var u=(k==='food'||k==='fuel')?5:1,co=q.pr*u;if(s.scrap<co){Au.bad();return;}s.scrap-=co;q.st-=u;if(k==='food')s.food=clamp(s.food+u*4);else if(k==='fuel')s.fuel=clamp(s.fuel+u*4);else if(k==='medkit')s.sanity=clamp(s.sanity+12);else if(k==='alcohol'){s.sanity=clamp(s.sanity+15);s.food=clamp(s.food-3);}else if(k==='map'){Sy.clue('c5');Sy.clue('c1');}Au.good();q.pr=Math.round(q.pr*1.15);UI.res();G.save();UI.show('shop');}
function upg(id){var s=G.S(),q=(UG||[]).filter(function(z){return z.id===id;})[0];if(!q)return;var co=Math.round(q.co*(1+G.upg(id)*.7));if(s.scrap<co){Au.bad();return;}s.scrap-=co;s.upg[id]=(s.upg[id]||0)+1;Au.good();UI.res();G.save();UI.show('upg');}
function talk(i){var s=G.S(),p=s.pax[i];if(!p)return;if(s.time<ACT){UI.setPax(SL('وقت کافی نیست.|Not enough time.'));UI.show('pax');return;}s.time-=ACT;p.md=clamp((p.md==null?100:p.md)+25);p.ly=clamp(p.ly+10);s.sanity=clamp(s.sanity+4);var msg=null;
 if(p.ly>=70&&Math.random()<0.4){var unf=Object.keys(CL).filter(function(c){return s.clues.indexOf(c)<0;});if(unf.length){var cc=pk(unf);Sy.clue(cc);msg=SL('او تکه‌ای از خاطره‌اش را به تو داد:|They gave you a fragment of memory:')+' '+SL(CL[cc]);}}
 var lines=p.say;UI.setPax(msg||(lines&&lines.length?SL(pk(lines)):SL(p.nm)+' — '+SL(p.ro)));Au.click();UI.res();G.save();UI.show('pax');try{nCheck();}catch(e){}}
function rest(){var s=G.S();if(s.time<ACT)return;s.time-=ACT;s.sanity=clamp(s.sanity+12);Au.good();UI.res();G.save();UI.show('main');}
function depart(){Au.click();UI.show('route');}
function go(m){var s=G.S();var fast=(m==='fast'),stl=(m==='stealth');
 peak=fast?520:(stl?170:270);DIST=20+ri(21);if(!(SPD>0))SPD=1;dur=DIST/SPD;if(!(dur>0))dur=6;
 tr=true;tt=0;window.__sp=peak;pa={ev:(Math.random()<.38?pk(EVo||[]):null)};
 try{Sc.setNpc(false);}catch(e){}try{vetB.classList.add('hidden');}catch(e){}
 try{if(Sc.setBiome)Sc.setBiome(ri(4));}catch(e){}
 if(fast){s.fuel=clamp(s.fuel-10);s.pur=clamp(s.pur-8,0,100);}else if(stl){s.time=clamp(s.time-20,0,100);s.pur=clamp(s.pur+3,0,100);}else{s.pur=clamp(s.pur+8,0,100);}
 s.time=clamp(s.time-TRAV,0,100);try{Sc.setMode(m);}catch(e){}try{Re.end();}catch(e){}
 for(var i=0;i<s.pax.length;i++){var p=s.pax[i];p.md=clamp((p.md==null?100:p.md)-9);}
 var lost=0;for(var j=s.pax.length-1;j>=0;j--){if(s.pax[j].md<=0){lost++;s.pax.splice(j,1);}}
 if(lost){s.lost+=lost;s.pur=clamp(s.pur+5,0,100);s.sanity=clamp(s.sanity-12);try{nSay(SL('یکی از همراهان تاب نیاورد و رفت...|One companion could not hold on...'));}catch(e){}}
 try{Sc.board();}catch(e){}
 try{UI.hide();}catch(e){}try{UI.note(true,S('onTrip'));}catch(e){}
 try{Au.horn();}catch(e){}try{Sc.shake(fast?.9:(stl?.25:.5));}catch(e){}
 try{G.save();UI.res();}catch(e){}}
function arrive(){tr=false;window.__sp=0;try{Au.brake();}catch(e){}Sc.setMode('');var s=G.S();s.st++;s.d++;var p=pa||{};pa=null;UI.note(false);
 if(s.pur>=75&&!GF.pw75){GF.pw75=1;nSay(SL('اون نزدیکه... باید بریم!|It is close... we must go!'));Au.bad();}
 if(s.pur>=100||s.time<=0||s.food<=0||s.fuel<=0||s.sanity<=0){end();return;}if(s.st>s.tot){end();return;}
 if(p.ev){UI.setEv(p.ev);UI.show('event');UI.res();G.save();return;}startS();Sc.leavers();}
function evch(i){var e=UI.getEv();if(!e)return;var c=e.ch[i];if(!c)return;if(c.co&&!Re.aff(c.co)){Au.bad();return;}if(c.co)Re.pay(c.co);Re.ap(c.f);if(c.cl)Sy.clue(c.cl);Au.click();UI.res();G.save();UI.setEv(null);UI.setKind('station');UI.setText(SL(c.r));UI.show('result');try{nCheck();}catch(e){}}
function rec(){var s=G.S();if(pn){G.addPax(pn);pn=null;s.food=clamp(s.food-6);s.time=clamp(s.time-ACT,0,100);s.sanity=clamp(s.sanity+3);Au.good();UI.res();G.save();}UI.setKind('main');UI.setText(SL('مسافر سوار شد؛ اما سهمی از غذا و وقتِ تو دارد.|A passenger boarded — they take a share of your food and time.'));UI.show('result');try{nCheck();}catch(e){}}
function refuse(){var s=G.S();var isR=(UI.getKind()==='ret');if(pn&&!isR){s.refused=s.refused||[];s.refused.push({id:pn.id,at:s.st});}s.sanity=clamp(s.sanity-(isR?14:8));pn=null;Au.bad();UI.res();G.save();UI.setKind('main');UI.setText(isR?SL('باز هم رهایش کردی. −۱۴ سلامت|You abandoned them again. −14 health'):SL('ردش کردی. −۸ سلامت|You turned them away. −8 health'));UI.show('result');}
function score3(){var s=G.S();var surv=Math.round((s.sanity+s.food+s.fuel)/3);var tr=Math.round(s.clues.length/6*100);var ly=s.pax.length?Math.round(s.pax.reduce(function(a,p){return a+p.ly;},0)/s.pax.length):0;var bond=Math.min(100,s.pax.length*20+ly/2);return[surv,tr,Math.round(bond)];}
function earn(){var s=G.S(),e=[];if(s.pax.length>=3)e.push('rescuer');if(s.clues.length>=5)e.push('seeker');if(s.sanity>70)e.push('calm');e.push('survivor');if(s.scrap>=50)e.push('rich');if(s.pax.some(function(p){return p.ly>80;}))e.push('bond');return e;}
function end(){var s=G.S(),k=Sy.end(),e=(DATA.endings||{})[k]||ENDEF[k]||ENDEF.bitter;document.getElementById('endTitle').textContent=SL(e.t);document.getElementById('endDesc').textContent=SL(e.d);
 var sc3=score3(),LBL=[S('scSurv'),S('scTruth'),S('scBond')],COL=['#6ee7a8','#c89bff','#ffd76a'],h='';
 for(var i=0;i<3;i++)h+='<div style="font-size:11px">'+LBL[i]+' — '+N(sc3[i])+'</div><div class="mini"><i style="width:'+sc3[i]+'%;background:'+COL[i]+'"></i></div>';
 h+=S('stns')+N(Math.min(s.st-1,s.tot))+' / '+N(s.tot)+' · '+S('cluesW')+N(s.clues.length)+'/'+N(6)+' · '+S('comp')+N(s.pax.length)+' · '+SL('ازدست‌رفته|lost')+' '+N(s.lost);
 document.getElementById('endStats').innerHTML=h;
 earn().forEach(function(id){UNL[id]=1;});saveAch();
 UI.hide();UI.note(false);Sc.setNpc(false);vetB.classList.add('hidden');try{Au.tension(0);}catch(e){}document.getElementById('endScreen').classList.remove('hidden');G.clear();}
function journal(){var s=G.S(),el=document.getElementById('clueList'),h='';var all=Object.keys(CL);var found=s.clues;
 if(!found.length)h='<div class="clue">'+S('noClue')+'</div>';
 else{found.forEach(function(id,i){h+='<div class="clue"><b style="color:#ffd76a">'+SL('سرنخ')+' '+N(i+1)+' / '+N(6)+'</b><br>'+SL(CL[id])+'</div>';});
  var miss=all.filter(function(c){return found.indexOf(c)<0;});miss.forEach(function(id){h+='<div class="clue" style="opacity:.5;border-color:#444">'+SL('سرنخِ نایافته — هنوز در تاریکی است.|Undiscovered clue.')+'</div>';});
  if(found.length>=3&&found.length<6)h+='<div class="clue" style="border-color:#c89bff">'+SL(CONN)+'</div>';
  if(found.length>=6)h+='<div class="clue" style="border-color:#6ee7a8">'+SL(TRUTH)+'</div>';}
 el.innerHTML=h;document.getElementById('journalScreen').classList.remove('hidden');}
function buildAch(){var el=document.getElementById('achList');el.innerHTML='';ACH.forEach(function(a){var got=UNL[a[0]];el.innerHTML+='<div class="card'+(got?'':' lk')+'"><div class="chd"><div class="ci">'+ic(got?'trophy':'alert')+'</div><h3>'+(got?SL(a[1]):'؟')+'</h3></div><p>'+(got?SL(a[2]):SL('ناشناخته...|Unknown...'))+'</p></div>';});document.getElementById('achScreen').classList.remove('hidden');}
function guide(){var el=document.getElementById('guideBody');el.innerHTML='';(GD||[]).forEach(function(g){el.innerHTML+='<div class="card"><div class="chd"><div class="ci">'+ic(g.i)+'</div><h3>'+SL(g.h)+'</h3></div>'+SL(g.p)+'</div>';});}
function act(a,b){if(TIPMODE){TIPMODE=false;Sc.tip(false);try{nClear();}catch(e){}if(TIP[a]){try{nSay(SL(TIP[a]));}catch(e){}}}run(a,b);}
function run(a,b){switch(a){case'explore':UI.show('explore');break;case'loc':UI.setLoc(+b);UI.show('depth');break;case'deep':expl(UI.getLoc(),+b);break;case'expbk':UI.show('explore');break;case'shop':UI.show('shop');break;case'buy':buy(b);break;case'pax':UI.show('pax');break;case'talk':talk(+b);break;case'upg':UI.show('upg');break;case'upgItem':upg(b);break;case'rest':rest();break;case'journal':journal();break;case'ach':buildAch();break;case'help':document.getElementById('helpScreen').classList.remove('hidden');break;case'depart':depart();break;case'go':go(b);break;case'evch':evch(+b);break;case'recruit':rec();break;case'refuse':refuse();break;case'back':if(UI.getM()==='result'){if(UI.getKind()==='station')startS();else UI.show('main');}else if(UI.getM()==='depth')UI.show('explore');else UI.show('main');break;}}
var it=null;
function intro(){var el=document.getElementById('introText'),i=0,t2=SL(DATA.intro||'');document.getElementById('introNext').classList.add('hidden');el.textContent='';if(it)clearInterval(it);it=setInterval(function(){i++;el.textContent=t2.slice(0,i);if(i>=t2.length){clearInterval(it);it=null;document.getElementById('introNext').classList.remove('hidden');}},26);}
function pickS(){document.getElementById('introScreen').classList.add('hidden');var el=document.getElementById('pickList');el.innerHTML='';var three=[PO[0],PO[1],PO[2]].filter(Boolean);three.forEach(function(p){var b=document.createElement('button');b.className='choice';b.innerHTML=ic(skIc(p.sk),'','#c9b98a')+' <b>'+SL(p.nm)+'</b> — '+SL(p.ro)+'<span class="sub">'+SL(p.bg)+' · '+SL(SK[p.sk]||'')+'</span>';b.addEventListener('click',function(){G.addPax(p);Au.good();begin();});el.appendChild(b);});document.getElementById('pickScreen').classList.remove('hidden');}
function begin(){started=true;Sc.setNpc(true);document.getElementById('pickScreen').classList.add('hidden');document.getElementById('titleScreen').classList.add('hidden');document.getElementById('introScreen').classList.add('hidden');startS();
 if(FIRST){FIRST=false;try{localStorage.setItem('t59vet','1');}catch(e){}try{if(NPC.intro&&NPC.intro.length)NPC.intro.forEach(function(l){nSay(SL(l));});}catch(e){}}}
function newGame(){G.reset();GF={};SPD=1;var b=document.getElementById('spdBtn');if(b)b.textContent=N(1)+'×';Sc.setNpc(false);vetB.classList.add('hidden');document.getElementById('endScreen').classList.add('hidden');document.getElementById('titleScreen').classList.add('hidden');document.getElementById('journalScreen').classList.add('hidden');intro();document.getElementById('introScreen').classList.remove('hidden');}
function appLang(){document.documentElement.lang=LANG;document.documentElement.dir=LANG==='fa'?'rtl':'ltr';document.getElementById('langBtn').textContent=LANG==='fa'?'EN':'فا';document.getElementById('titleH1').innerHTML=LANG==='fa'?'قطار <span>۲۳:۵۹</span>':'Train <span>23:59</span>';document.getElementById('titleTag').textContent=S('tag');document.getElementById('startBtn').textContent=S('start');document.getElementById('helpBtnTitle').textContent=S('help');document.getElementById('introNext').textContent=S('cont');document.getElementById('pickTitle').textContent=S('pick');document.getElementById('pickSub').textContent=S('pickS');document.getElementById('restartBtn').textContent=S('restart');document.getElementById('journalTitle').textContent=S('journal');document.getElementById('journalBack').textContent=S('back');document.getElementById('achTitle').textContent=S('ach');document.getElementById('achBack').textContent=S('back');document.getElementById('helpTitle').textContent=S('help');document.getElementById('helpBack').textContent=S('gotIt');document.getElementById('lblPath').textContent=S('path');document.getElementById('lblChase').textContent=S('chase');document.getElementById('stnBox').innerHTML=S('station')+' <b id="stnNow">'+N(G.S().st)+'</b>/<b id="stnTot">'+N(G.S().tot)+'</b>';guide();try{localStorage.setItem('t59lang',LANG);}catch(e){}UI.res();if(started)UI.render();}
function merge(js){var m={};js.forEach(function(j){if(j)for(var k in j)m[k]=j[k];});return m;}
function fetchAll(cb){var reqs=FILES.map(function(f){return fetch(BASE+f,{cache:'no-store'}).then(function(r){return r.ok?r.json():null;}).catch(function(){return null;});});Promise.all(reqs).then(function(rs){cb(merge(rs));}).catch(function(){cb(null);});}
function ready(){bind();npcBind();if(DATA.sn&&DATA.sn.length)G.tot(DATA.sn.length);appLang();document.getElementById('loadScreen').classList.add('hidden');document.getElementById('titleScreen').classList.remove('hidden');document.getElementById('hideBtn').innerHTML=ic('eyeOff','s');}