/* ===== Train 23:59 · src/render.js — گرافیک (Canvas) ===== */
var Sc=(function(){var c=document.getElementById('c'),x=c.getContext('2d'),W=0,H=0,D=1;
 function rs(){D=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;c.width=W*D;c.height=H*D;c.style.width=W+'px';c.style.height=H+'px';}
 function GY(){return H*.42;}function TB(){return H*.55;}
 function mk(w,h,cT,cB,amp,base,f1,f2){var cv=document.createElement('canvas');cv.width=w;cv.height=h;var g=cv.getContext('2d');var gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,cT);gr.addColorStop(1,cB);var ys=[];for(var i=0;i<=w;i++)ys.push(base+amp*Math.sin(6.283*f1*i/w)+amp*.55*Math.sin(6.283*f2*i/w+1.3));g.beginPath();g.moveTo(0,h);for(var j=0;j<=w;j++)g.lineTo(j,ys[j]);g.lineTo(w,h);g.closePath();g.fillStyle=gr;g.fill();g.strokeStyle='rgba(226,232,255,.42)';g.lineWidth=2.2;g.beginPath();for(var k=0;k<=w;k++){if(k===0)g.moveTo(k,ys[k]);else g.lineTo(k,ys[k]);}g.stroke();return cv;}
 function pl(){var w=320,h=230,cv=document.createElement('canvas');cv.width=w;cv.height=h;var g=cv.getContext('2d');function p(px){g.strokeStyle='#0a0d1a';g.lineWidth=5;g.beginPath();g.moveTo(px,h);g.lineTo(px,30);g.stroke();g.lineWidth=3.5;g.beginPath();g.moveTo(px-22,52);g.lineTo(px+22,52);g.stroke();g.beginPath();g.moveTo(px-18,70);g.lineTo(px+18,70);g.stroke();g.strokeStyle='rgba(10,13,26,.5)';g.lineWidth=1.4;g.beginPath();g.moveTo(px-160,60);g.quadraticCurveTo(px-80,78,px,64);g.stroke();}p(70);p(230);return cv;}
 function gt(){var w=360,h=120,cv=document.createElement('canvas');cv.width=w;cv.height=h;var g=cv.getContext('2d');var gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'rgba(22,28,50,.95)');gr.addColorStop(1,'rgba(7,10,20,1)');g.fillStyle=gr;g.fillRect(0,0,w,h);g.fillStyle='#161d33';for(var i=0;i<w;i+=30)g.fillRect(i,42,16,11);g.fillStyle='#2b3352';g.fillRect(0,46,w,3);g.fillStyle='rgba(255,215,120,.22)';g.fillRect(0,46,w,1);return cv;}
 var far,mid,po,gr,stars=[],imgs=[],lmP=[],birds=[],BIOME=0;
 function bs(){stars=[];var n=Math.min(140,W*H/1e4|0);for(var i=0;i<n;i++)stars.push({x:Math.random(),y:Math.random()*.42,r:Math.random()*1.3+.3,p:Math.random()*6.28,a:.25+Math.random()*.45});}
 function bi(){imgs=[];for(var i=0;i<A_BB.length;i++){var im=new Image();im.crossOrigin='anonymous';im.src=A_BB[i];imgs.push(im);}}
 function initBirds(){birds=[];for(var i=0;i<5;i++){birds.push({type:(i%2===1)?'bat':'owl',x:(i+0.5)*W/5,vx:(Math.random()-.5)*40,vy:(Math.random()-.5)*16,y:H*(0.10+Math.random()*0.18),ph:Math.random()*6.28,st:'fly',t:0,perT:4+Math.random()*6,flap:Math.random()*6.28,px:0,py:0});}}
 function bd(){far=mk(900,320,'#242c4e','#131830',44,142,2,5);mid=mk(760,240,'#161c36','#0d1226',38,112,3,7);po=pl();gr=gt();bs();bi();initBirds();}
 var sc=0,sp=0,shk=0,tm=0,ldt=0,pf=[],npf=[],mode='',npcOn=false,tipping=false,WFL=1,WG=1,WC='255,205,110';
 var st={on:false,base:0,figs:[]};
 var SW=[['m-old-cane'],['m-pack','w-bag'],['w-suitcase','m-bag'],[],['kid-boy','kid-girl'],[],['w-suitcase'],['m-sack','w-pack','trunk'],['mystery'],[],['w-bag'],['trunk'],['m-suitcase'],['w-pack']];
 function rr(a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath();}
 function setBiome(k){BIOME=k||0;}
 function hashI(n){n=(n<<13)^n;return((n*(n*n*15731+789221)+1376312589)&0x7fffffff)/0x7fffffff;}
 function gm(){var lv=G.lvl();var tw=Math.min(W*.74,250+lv*22),th=tw*.30;return{tw:tw,th:th,yb:TB()};}
 function wheel(cx,cy,r){x.beginPath();x.arc(cx,cy,r,0,6.283);x.fill();x.save();x.translate(cx,cy);x.rotate(sc*.05);x.strokeStyle='rgba(255,255,255,.14)';x.lineWidth=1.4;for(var a=0;a<3;a++){x.rotate(1.047);x.beginPath();x.moveTo(-r*.7,0);x.lineTo(r*.7,0);x.stroke();}x.restore();}
 function car(a,yb,w,h,bob,i,stl,br){var y=yb-h+bob;x.fillStyle=stl?'#12303a':'#1b2138';rr(a,y,w,h,6);x.fill();x.fillStyle=stl?'#16394a':'#242c48';rr(a,y,w,h*.22,6);x.fill();var pd=w*.1,wv=(w-pd*2)/3,pax=(G.S()&&G.S().pax.length)||0;for(var k=0;k<3;k++){var fa=.3+br*.7;x.fillStyle=stl?'rgba(120,220,235,'+(fa*(.5+.28*Math.sin(tm*2.6+k*1.9+i))).toFixed(2)+')':'rgba('+WC+','+(fa*(.55+.30*Math.sin(tm*2.6+k*1.9+i*.9))*WFL*WG).toFixed(2)+')';rr(a+pd+k*wv,y+h*.3,wv*.66,h*.34,2);x.fill();x.fillStyle='rgba(9,11,22,.5)';x.beginPath();x.arc(a+pd+k*wv+wv*.33,y+h*.47,h*.055,0,6.283);x.fill();if(pax>0&&(i*3+k)<pax){var wcx=a+pd+k*wv+wv*.33;x.fillStyle='rgba(7,9,16,.62)';x.beginPath();x.arc(wcx,y+h*.42,h*.058,0,6.283);x.fill();x.beginPath();x.ellipse(wcx,y+h*.56,h*.1,h*.11,0,0,6.283);x.fill();}}x.fillStyle='#0b0e1c';wheel(a+w*.26,yb-2,h*.13);wheel(a+w*.74,yb-2,h*.13);}
 function loco(a,yb,w,h,bob,stl,br){var y=yb-h+bob;x.fillStyle=stl?'#10303a':'#20283f';rr(a,y+h*.28,w,h*.72,7);x.fill();x.fillStyle=stl?'#14424e':'#262f4a';rr(a+w*.30,y+h*.30,w*.70,h*.42,8);x.fill();x.fillStyle=stl?'#0e2830':'#1b2138';rr(a+w*.02,y+h*.02,w*.36,h*.62,6);x.fill();x.fillStyle=stl?'rgba(120,220,235,.6)':'rgba('+WC+','+((.4+br*.5)*WFL*WG*(.82+.18*Math.sin(tm*2.6))).toFixed(2)+')';rr(a+w*.08,y+h*.12,w*.22,h*.28,2);x.fill();x.fillStyle='#151a2c';rr(a+w*.72,y+h*.06,w*.12,h*.26,3);x.fill();x.fillStyle=stl?'rgba(150,230,240,.7)':'#ffd76a';x.beginPath();x.arc(a+w*.99,y+h*.6,h*.06,0,6.283);x.fill();x.fillStyle='#0b0e1c';wheel(a+w*.16,yb-2,h*.17);wheel(a+w*.46,yb-2,h*.13);wheel(a+w*.72,yb-2,h*.13);}
 function train(){var g=gm(),yb=g.yb,ln=Math.min(1,sp/260),stl=(mode==='stealth'),lvl=G.lvl(),ncar=2+Math.min(3,Math.floor(lvl/2)),cl=(G.S()&&G.S().clues.length)||0,br=Math.min(1,.40+lvl*.05+cl*.05),bob=Math.sin(tm*(3.2+ln*3.5))*(1.4+ln*3.2);
  var ss=G.S(),pp=ss?ss.pur:0,san=ss?ss.sanity:80;WFL=(pp>55&&Math.sin(tm*30)<-0.3)?0.35:1;WG=0.6+(san/100)*0.55;WC=(pp>70)?'255,150,120':'255,205,110';
  var lw=g.tw*.30,gp=g.tw*.012,cw=(g.tw-lw-ncar*gp)/ncar;var x0=W*.5-g.tw*.5;
  x.save();if(stl)x.globalAlpha=.42;x.translate(W*.5,yb);x.rotate(-ln*.012);x.translate(-W*.5,-yb);
  for(var i=0;i<ncar;i++)car(x0+i*(cw+gp),yb,cw,g.th,bob,i,stl,br);loco(x0+ncar*(cw+gp),yb,lw,g.th,bob,stl,br);
  var hx=x0+ncar*(cw+gp)+lw,hy=yb-g.th*.62+bob;
  if(!stl){var ia=.35+br*.5;var bg=x.createRadialGradient(hx,hy,2,hx,hy,g.tw*(.45+br*.2));bg.addColorStop(0,'rgba(255,240,190,'+ia.toFixed(2)+')');bg.addColorStop(1,'rgba(255,240,190,0)');x.fillStyle=bg;x.beginPath();x.moveTo(hx,hy);x.lineTo(hx+g.tw*.5,hy-g.th*.3);x.lineTo(hx+g.tw*.5,hy+g.th*.3);x.closePath();x.fill();}
  else{var cg=x.createRadialGradient(W*.5,yb-g.th*.5,4,W*.5,yb-g.th*.5,g.tw*.6);cg.addColorStop(0,'rgba(120,200,230,.12)');cg.addColorStop(1,'rgba(120,200,230,0)');x.fillStyle=cg;x.beginPath();x.ellipse(W*.5,yb-g.th*.4,g.tw*.55,g.th*.9,0,0,6.283);x.fill();}
  x.restore();
  if(mode==='fast'&&sp>90){var inten=Math.min(1,sp/420);x.save();x.strokeStyle='rgba(190,215,255,'+(0.10+0.14*inten).toFixed(2)+')';x.lineWidth=1+1.4*inten;for(var i2=0;i2<18;i2++){var ly=H*(.16+Math.random()*.6);var ln2=60+Math.random()*160*inten;var sx0=W*.5+120+Math.random()*(W*.4);x.beginPath();x.moveTo(sx0,ly);x.lineTo(sx0+ln2,ly);x.stroke();}x.restore();}
  var s=G.S();if(s&&s.pur>50){var al=(s.pur-50)/50,px=W*.9,py=yb-H*.06,pg2=x.createRadialGradient(px,py,1,px,py,80*(.6+al)+40);pg2.addColorStop(0,'rgba(255,70,70,'+(.30+.35*al).toFixed(2)+')');pg2.addColorStop(1,'rgba(255,70,70,0)');x.fillStyle=pg2;x.beginPath();x.arc(px,py,80*(.6+al)+40,0,6.283);x.fill();}}
 function tile(t,f,yt){var o=(sc*f)%t.width;if(o<0)o+=t.width;for(var i=-o;i<W;i+=t.width)x.drawImage(t,Math.round(i),Math.round(yt));}
 function drawGroundWave(){x.strokeStyle='rgba(160,205,240,.16)';x.lineWidth=1;var ro=((sc*1)%38+38)%38;for(var iw=-38;iw<W+38;iw+=38){var wyy=GY()+6+((iw*5)%26);x.beginPath();x.moveTo(iw-ro,wyy);x.lineTo(iw-ro+16,wyy);x.stroke();}}
 function tree(t,bxx,base,hh,gc,r){
  if(t===0){x.fillStyle='#3a2a1c';x.fillRect(bxx-2.2,base-hh*.16,4.4,hh*.16);x.fillStyle=gc;var byy=base-hh*.12;for(var L=0;L<3;L++){var fw=hh*.30*(1-L*.24),ty=byy-hh*.46+hh*.30*L;x.beginPath();x.moveTo(bxx,ty-hh*.22);x.lineTo(bxx-fw,ty);x.lineTo(bxx+fw,ty);x.closePath();x.fill();}x.fillStyle='rgba(150,205,165,.14)';x.beginPath();x.moveTo(bxx,byy-hh*.68);x.lineTo(bxx-hh*.08,byy-hh*.46);x.lineTo(bxx+hh*.02,byy-hh*.46);x.closePath();x.fill();}
  else if(t===1){x.fillStyle='#3a2a1c';x.fillRect(bxx-2,base-hh*.18,4,hh*.18);x.fillStyle=gc;x.beginPath();x.ellipse(bxx,base-hh*.56,hh*.17,hh*.48,0,0,6.283);x.fill();x.fillStyle='rgba(150,205,165,.12)';x.beginPath();x.ellipse(bxx-hh*.05,base-hh*.62,hh*.055,hh*.38,0,0,6.283);x.fill();}
  else if(t===2){x.fillStyle='#3a2a1c';x.fillRect(bxx-2.4,base-hh*.34,4.8,hh*.34);x.fillStyle=gc;x.beginPath();x.arc(bxx,base-hh*.64,hh*.36,Math.PI,0);x.fill();x.fillRect(bxx-hh*.36,base-hh*.64,hh*.72,hh*.04);x.strokeStyle='rgba(120,175,135,.5)';x.lineWidth=1.4;for(var i2=0;i2<6;i2++){var sx=bxx-hh*.3+i2*(hh*.6/5),sy=base-hh*.63;x.beginPath();x.moveTo(sx,sy);x.quadraticCurveTo(sx+(i2-2.5)*2.2,sy+hh*.3,sx+(i2-2.5)*3.4,sy+hh*.5);x.stroke();}}
  else{x.fillStyle='#3a2a1c';x.fillRect(bxx-2.6,base-hh*.3,5.2,hh*.3);x.fillStyle=gc;x.beginPath();x.arc(bxx,base-hh*.62,hh*.42,0,6.283);x.fill();x.beginPath();x.arc(bxx-hh*.24,base-hh*.5,hh*.22,0,6.283);x.fill();x.beginPath();x.arc(bxx+hh*.24,base-hh*.5,hh*.22,0,6.283);x.fill();x.fillStyle='rgba(145,205,165,.15)';x.beginPath();x.arc(bxx-hh*.13,base-hh*.74,hh*.2,0,6.283);x.fill();x.fillStyle='#3a2a1c';x.beginPath();x.moveTo(bxx-hh*.05,base-hh*.42);x.lineTo(bxx,base-hh*.2);x.lineTo(bxx+hh*.05,base-hh*.42);x.closePath();x.fill();
   if(t===5||t===6){x.fillStyle=t===5?'#c1432f':'#c0405a';for(var d=0;d<4;d++){var a2=r*6.28+d*1.7;x.beginPath();x.arc(bxx+Math.cos(a2)*hh*.3,base-hh*.62+Math.sin(a2)*hh*.3,1.7,0,6.283);x.fill();}}
   else{x.fillStyle='rgba(150,120,70,.55)';for(var d2=0;d2<3;d2++){var a3=r*6.28+d2*2.2;x.beginPath();x.arc(bxx+Math.cos(a3)*hh*.28,base-hh*.6+Math.sin(a3)*hh*.28,1.6,0,6.283);x.fill();}}
  }
 }
 function drawScenery(){if(BIOME===2)return;var gy=GY();var ssp=100,off=((sc%ssp)+ssp)%ssp;var gpal=['#20402f','#1c3a2e','#234433','#1f3d2c','#254534'];
  for(var xi=-ssp;xi<W+ssp;xi+=ssp){var wi=Math.floor((sc+xi)/ssp);var r=hashI(wi*97+3);var bxx=xi-off+(hashI(wi*13)*24-12);var base=gy+2+hashI(wi*29)*7;var hh=52+hashI(wi*17)*48;var gc=gpal[Math.floor(hashI(wi*53)*5)];
   var t;if(BIOME===1){t=r<.55?0:1;}else if(BIOME===3){t=r<.3?2:(r<.72?6:3);}else{t=Math.floor(hashI(wi*41)*7);}
   tree(t,bxx,base,hh,gc,r);
   if(hashI(wi*61)>.75){x.fillStyle='#223d30';x.beginPath();x.arc(bxx+hh*.58,base-hh*.07,hh*.11,0,6.283);x.fill();}
   if(BIOME===3){x.strokeStyle='#234a37';x.lineWidth=1.6;for(var gg=0;gg<3;gg++){x.beginPath();x.moveTo(bxx-hh*.6+gg*4,base+1);x.lineTo(bxx-hh*.6+gg*4+(hashI(wi*7+gg)-.5)*6,base-6-hashI(wi+gg)*7);x.stroke();}}
  }
 }
 function person(px,f,uh){var y=GY(),t=f.t,ph=Math.sin(t*2),q=uh;
  var tags=(f.tp||'').split('-');function tag(n){return tags.indexOf(n)>=0;}
  var isW=tag('w')||tag('girl'),isOld=tag('old'),isTrunk=tag('trunk')||tag('mystery');
  var prop=isTrunk?'trunk':tag('cane')?'cane':tag('suitcase')?'suitcase':tag('pack')?'pack':tag('bag')?'bag':tag('sack')?'sack':'';
  var seed=0,tp=f.tp||'';for(var si=0;si<tp.length;si++)seed=(seed*33+tp.charCodeAt(si))%997;
  var coat=['#2a3350','#3a2f4a','#243a3c','#3a3220','#2e2c46','#343a2a','#2b3446'][seed%7],hairC=(isOld?['#cfcabf','#bdb6a6','#d8d4ca']:['#20242f','#3a2b22','#4a3b2a','#2a2a2a','#553b28'])[seed%5],skin='#d9c3a5',skd='#c6b092';
  x.save();x.globalAlpha=f.a;
  x.fillStyle='rgba(0,0,0,.42)';x.beginPath();x.ellipse(px,y+2,q*.22,q*.05,0,0,6.283);x.fill();
  var bob=Math.abs(ph)*q*.006,hipY=y-q*.47,shoY=y-q*.80,l1=ph*q*.045,l2=-l1;
  if(isW){x.fillStyle='#141a2e';x.beginPath();x.moveTo(px-q*.17,y-q*.005);x.lineTo(px+q*.17,y-q*.005);x.lineTo(px+q*.105,hipY);x.lineTo(px-q*.105,hipY);x.closePath();x.fill();x.fillStyle='#0c101d';x.fillRect(px-q*.115+l1,y-q*.035,q*.10,q*.037);x.fillRect(px+q*.015+l2,y-q*.035,q*.10,q*.037);}
  else{x.fillStyle='#161c2e';x.fillRect(px-q*.10+l1,y-q*.48,q*.075,q*.45);x.fillRect(px+q*.025+l2,y-q*.48,q*.075,q*.45);x.fillStyle='#0c101d';x.fillRect(px-q*.13+l1,y-q*.035,q*.13,q*.037);x.fillRect(px-q*.005+l2,y-q*.035,q*.13,q*.037);}
  x.fillStyle='rgba(0,0,0,.20)';x.fillRect(px-q*.185,shoY+q*.02,q*.062,q*.34);
  x.fillStyle=coat;x.beginPath();x.moveTo(px-q*.155,shoY+bob);x.lineTo(px+q*.155,shoY+bob);x.lineTo(px+q*.125,hipY);x.lineTo(px-q*.125,hipY);x.closePath();x.fill();
  x.fillStyle='rgba(0,0,0,.16)';x.beginPath();x.moveTo(px+q*.02,shoY+bob);x.lineTo(px+q*.155,shoY+bob);x.lineTo(px+q*.125,hipY);x.lineTo(px+q*.02,hipY);x.closePath();x.fill();
  x.fillStyle='rgba(255,222,150,.12)';x.beginPath();x.moveTo(px+q*.095,shoY+bob);x.lineTo(px+q*.155,shoY+bob);x.lineTo(px+q*.125,hipY);x.lineTo(px+q*.085,hipY);x.closePath();x.fill();
  x.fillStyle='rgba(0,0,0,.26)';x.beginPath();x.moveTo(px-q*.075,shoY+bob);x.lineTo(px,shoY+bob+q*.11);x.lineTo(px+q*.075,shoY+bob);x.closePath();x.fill();
  if(isW){x.fillStyle='rgba(255,222,150,.10)';x.beginPath();x.moveTo(px-q*.02,shoY+bob+q*.04);x.lineTo(px+q*.02,shoY+bob+q*.04);x.lineTo(px,shoY+bob+q*.17);x.closePath();x.fill();}
  var asw=-ph*q*.05;
  x.fillStyle=coat;x.fillRect(px+q*.10,shoY+q*.03+asw*.25,q*.06,q*.32);
  x.fillStyle=skd;x.fillRect(px+q*.10,shoY+q*.35+asw*.25,q*.058,q*.05);x.fillRect(px-q*.18,shoY+q*.35,q*.05,q*.05);
  x.fillStyle='#7a3350';x.fillRect(px-q*.082,shoY+bob,q*.164,q*.05);
  x.fillStyle=skd;x.fillRect(px-q*.035,shoY-q*.045,q*.07,q*.065);
  x.fillStyle='#141a30';
  if(prop==='trunk'){rr(px+q*.17,hipY-q*.02,q*.34,q*.22,q*.03);x.fill();x.strokeStyle='#0b0f1e';x.lineWidth=1;x.beginPath();x.moveTo(px+q*.30,hipY-q*.02);x.lineTo(px+q*.30,hipY-q*.10);x.stroke();}
  else if(prop==='suitcase'){rr(px+q*.16,hipY-q*.01,q*.26,q*.20,q*.05);x.fill();x.strokeStyle='#0b0f1e';x.lineWidth=1;x.beginPath();x.moveTo(px+q*.29,hipY-q*.01);x.lineTo(px+q*.29,hipY-q*.08);x.stroke();}
  else if(prop==='bag'){rr(px+q*.17,hipY+q*.09,q*.20,q*.16,q*.05);x.fill();x.strokeStyle='#0b0f1e';x.lineWidth=1;x.beginPath();x.moveTo(px+q*.27,hipY+q*.09);x.lineTo(px+q*.27,hipY+q*.02);x.stroke();}
  else if(prop==='sack'){x.beginPath();x.moveTo(px+q*.15,hipY+q*.02);x.quadraticCurveTo(px+q*.20,hipY-q*.06,px+q*.25,hipY+q*.02);x.lineTo(px+q*.27,hipY+q*.20);x.quadraticCurveTo(px+q*.20,hipY+q*.26,px+q*.13,hipY+q*.20);x.closePath();x.fill();}
  else if(prop==='pack'){x.save();x.translate(px-q*.02,hipY);rr(-q*.16,-q*.02,q*.30,q*.26,q*.05);x.fill();x.restore();x.strokeStyle='#0b0f1e';x.lineWidth=1;x.beginPath();x.moveTo(px-q*.11,shoY+q*.06);x.lineTo(px-q*.13,hipY+q*.01);x.stroke();x.beginPath();x.moveTo(px+q*.10,shoY+q*.06);x.lineTo(px+q*.12,hipY+q*.01);x.stroke();}
  if(prop==='cane'||isOld){x.strokeStyle='#6b4a2a';x.lineWidth=q*.03;x.beginPath();x.moveTo(px+q*.205,shoY+q*.32);x.lineTo(px+q*.225,y);x.stroke();}
  var hy=shoY-q*.085+bob;
  x.fillStyle=skin;x.beginPath();x.arc(px,hy,q*.092,0,6.283);x.fill();
  x.fillStyle=hairC;x.beginPath();x.arc(px,hy-q*.006,q*.095,Math.PI*1.03,Math.PI*1.97);x.fill();
  if(isW){x.beginPath();x.moveTo(px-q*.10,hy-q*.01);x.quadraticCurveTo(px-q*.185,hy+q*.18,px-q*.115,hy+q*.34);x.quadraticCurveTo(px-q*.055,hy+q*.16,px-q*.055,hy+q*.01);x.closePath();x.fill();x.beginPath();x.moveTo(px+q*.10,hy-q*.01);x.quadraticCurveTo(px+q*.185,hy+q*.18,px+q*.115,hy+q*.34);x.quadraticCurveTo(px+q*.055,hy+q*.16,px+q*.055,hy+q*.01);x.closePath();x.fill();}
  x.strokeStyle='rgba(255,222,150,.30)';x.lineWidth=1.1;x.beginPath();x.arc(px+q*.01,hy,q*.092,-1.15,0.55);x.stroke();
  if(isOld){x.fillStyle='rgba(232,232,238,.5)';x.fillRect(px-q*.055,hy+q*.05,q*.11,q*.036);x.strokeStyle='rgba(232,232,238,.45)';x.lineWidth=1;x.beginPath();x.moveTo(px-q*.055,hy+q*.068);x.lineTo(px+q*.055,hy+q*.068);x.stroke();}
  x.restore();}
 function npc(){if(!npcOn)return;var s0=Math.min(W,H)*.055,s=tipping?s0*1.12:s0,bx=W*.15,by=H*.30,thr=(G.S().pur>70),brth=Math.sin(tm*1.2)*1.1,sway=tipping?0:Math.sin(tm*1.05)*.012;
  if(thr)sway=Math.sin(tm*5)*.028;
  var gl=x.createRadialGradient(bx+s*1.0,by+s*1.85,1,bx+s*1.0,by+s*1.85,s*2.2);gl.addColorStop(0,'rgba(255,205,110,'+(thr?.14:.24)+')');gl.addColorStop(1,'rgba(255,205,110,0)');x.fillStyle=gl;x.beginPath();x.arc(bx+s*1.0,by+s*1.85,s*2.2,0,6.283);x.fill();
  x.save();x.translate(bx,by+brth*.4);x.rotate(sway);
  x.fillStyle='#3a2b1c';rr(-s*1.14,s*1.2,s*2.36,s*.17,3);x.fill();
  x.fillStyle='#241a10';rr(-s*1.04,s*1.37,s*.16,s*.52,2);x.fill();rr(s*.88,s*1.37,s*.16,s*.52,2);x.fill();
  x.fillStyle='#2f2316';rr(-s*1.06,s*.34,s*.15,s*.9,2);x.fill();rr(s*.91,s*.34,s*.15,s*.9,2);x.fill();
  x.fillStyle='#3a2b1c';rr(-s*1.06,s*.4,s*2.12,s*.13,2);x.fill();
  x.fillStyle='#1b2238';rr(-s*.30,s*1.02,s*.84,s*.24,3);x.fill();x.fillStyle='#141a2c';rr(-s*.30,s*1.14,s*.22,s*.62,2);x.fill();
  x.fillStyle='#20283c';rr(s*.02,s*1.04,s*.84,s*.24,3);x.fill();x.fillStyle='#10161f';rr(s*.62,s*1.16,s*.22,s*.6,2);x.fill();
  x.fillStyle='#0c101d';rr(-s*.36,s*1.72,s*.4,s*.15,2);x.fill();rr(s*.56,s*1.7,s*.4,s*.15,2);x.fill();
  x.fillStyle='#242f4a';rr(-s*.52,s*.02,s*1.04,s*1.14,3);x.fill();
  x.fillStyle='#7a3350';x.fillRect(-s*.55,s*.2,s*1.1,s*.26);
  x.fillStyle='#242f4a';rr(-s*.68,s*.28,s*.18,s*.72,2);x.fill();
  x.fillStyle='#d9c3a5';x.beginPath();x.arc(-s*.59,s*1.0,s*.1,0,6.283);x.fill();
  var hy=-s*.16;
  x.fillStyle='#d9c3a5';x.beginPath();x.arc(0,hy,s*.5,0,6.283);x.fill();
  x.fillStyle='#1b2238';rr(-s*.4,hy-s*.62,s*.8,s*.42,2);x.fill();x.fillStyle='#0e1320';rr(-s*.62,hy-s*.3,s*1.24,s*.14,2);x.fill();
  var bl=(Math.sin(tm*1.2)>.95)?.15:1;x.fillStyle='#ffd76a';x.beginPath();x.ellipse(-s*.17,hy,s*.07,s*.07*bl,0,0,6.283);x.fill();x.beginPath();x.ellipse(s*.17,hy,s*.07,s*.07*bl,0,0,6.283);x.fill();
  var cgx=s*1.02,cgy=s*1.4;x.fillStyle='#6b4a2a';rr(cgx+s*.04,cgy-s*.5,s*.32,s*.1,2);x.fill();x.fillStyle='rgba(255,190,110,'+(.8+.2*Math.sin(tm*7)).toFixed(2)+')';rr(cgx+s*.07,cgy-s*.42,s*.26,s*.44,2);x.fill();x.fillStyle='#6b4a2a';x.fillRect(cgx+s*.02,cgy,s*.36,s*.12);x.fill();
  x.fillStyle='rgba(255,120,60,'+(.6+.4*Math.sin(tm*9)).toFixed(2)+')';x.beginPath();x.arc(-s*.49,s*.9,s*.05,0,6.283);x.fill();
  x.restore();
  if(Math.random()<1.2*ldt)npf.push({x:bx-s*.45,y:by+s*.8,vx:6+Math.random()*8,vy:-(8+Math.random()*6),l:0,m:2.0+Math.random(),r:1.4+Math.random()*1.3});
  for(var i=npf.length-1;i>=0;i--){var p=npf[i];p.l+=ldt;p.x+=p.vx*ldt;p.y+=p.vy*ldt;p.r+=2*ldt;if(p.l>=p.m)npf.splice(i,1);else{x.fillStyle='rgba(190,195,210,'+((1-p.l/p.m)*.26).toFixed(3)+')';x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill();}}}
 function lamp(lx,top){var fy=top-8,ph=74,fl=(Math.sin(tm*7+lx*.13)>.97)?.6:1;var hx=lx+16,hy=fy-ph+10;
  x.strokeStyle='#0b0f1e';x.lineWidth=3;x.beginPath();x.moveTo(lx,fy);x.lineTo(lx,fy-ph);x.stroke();x.lineWidth=2.6;x.beginPath();x.moveTo(lx,fy-ph);x.quadraticCurveTo(lx+10,fy-ph-4,lx+16,fy-ph+9);x.stroke();
  var cone=x.createLinearGradient(hx,hy,hx,fy+12);cone.addColorStop(0,'rgba(255,232,168,'+(.20*fl).toFixed(2)+')');cone.addColorStop(.55,'rgba(255,226,160,'+(.10*fl).toFixed(2)+')');cone.addColorStop(1,'rgba(255,220,150,0)');x.fillStyle=cone;x.beginPath();x.moveTo(hx-5,hy);x.lineTo(hx+5,hy);x.lineTo(hx+58,fy+12);x.lineTo(hx-58,fy+12);x.closePath();x.fill();
  var g=x.createRadialGradient(hx,hy+2,1,hx,hy+2,32);g.addColorStop(0,'rgba(255,240,190,'+(.34*fl).toFixed(2)+')');g.addColorStop(.45,'rgba(255,232,170,'+(.13*fl).toFixed(2)+')');g.addColorStop(1,'rgba(255,232,170,0)');x.fillStyle=g;x.beginPath();x.arc(hx,hy+2,32,0,6.283);x.fill();
  x.fillStyle='#141a2e';rr(hx-6,hy-3,12,7,2);x.fill();x.fillStyle='rgba(255,242,195,'+(.92*fl).toFixed(2)+')';x.beginPath();x.ellipse(hx,hy+2,4.4,2.5,0,0,6.283);x.fill();
  var pg=x.createRadialGradient(hx,fy+3,1,hx,fy+3,64);pg.addColorStop(0,'rgba(255,234,172,'+(.22*fl).toFixed(2)+')');pg.addColorStop(1,'rgba(255,234,172,0)');x.fillStyle=pg;x.beginPath();x.ellipse(hx,fy+3,62,14,0,0,6.283);x.fill();
  if(Math.random()<0.35*ldt)lmP.push({x:hx+(Math.random()-.5)*8,y:hy+8,r:.3+Math.random()*.5,vx:(Math.random()-.5)*4,vy:3+Math.random()*6,ph:Math.random()*6.28,l:0,m:3.4+Math.random()*3.6});}
 function clock(px,top){var s0=G.S(),t=(s0&&s0.time!=null)?s0.time:100,tot=23*60+59+(100-t)/100*331,hh=(tot/60)%24,mn=tot%60,ph=58,r=15,fl=(Math.sin(tm*2)>.9)?.6:1;
  x.strokeStyle='#0b0f1e';x.lineWidth=3;x.beginPath();x.moveTo(px,top);x.lineTo(px,top-ph);x.stroke();
  x.fillStyle='#0b0f1e';x.beginPath();x.moveTo(px-8,top-ph+r+2);x.lineTo(px+8,top-ph+r+2);x.lineTo(px,top-ph+3);x.closePath();x.fill();
  x.save();x.translate(px,top-ph);
  var g=x.createRadialGradient(0,0,2,0,0,r*3);g.addColorStop(0,'rgba(255,235,180,'+(.22*fl).toFixed(2)+')');g.addColorStop(1,'rgba(255,235,180,0)');x.fillStyle=g;x.beginPath();x.arc(0,0,r*3,0,6.283);x.fill();
  x.fillStyle='#12182c';x.beginPath();x.arc(0,0,r,0,6.283);x.fill();x.strokeStyle='rgba(255,215,120,.7)';x.lineWidth=1.6;x.stroke();
  x.strokeStyle='rgba(255,215,120,.5)';x.lineWidth=1;for(var i=0;i<12;i++){var a2=i*Math.PI/6;x.beginPath();x.moveTo(Math.sin(a2)*r*.78,-Math.cos(a2)*r*.78);x.lineTo(Math.sin(a2)*r*.94,-Math.cos(a2)*r*.94);x.stroke();}
  var ha=((hh%12)+mn/60)*Math.PI/6,ma=mn*Math.PI/30;x.strokeStyle='#ffd76a';x.lineWidth=2;x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(ha)*r*.5,-Math.cos(ha)*r*.5);x.stroke();x.strokeStyle='#f2e9cf';x.lineWidth=1.3;x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(ma)*r*.78,-Math.cos(ma)*r*.78);x.stroke();x.fillStyle='#ffd76a';x.beginPath();x.arc(0,0,1.7,0,6.283);x.fill();
  x.restore();}
 function drawStation(){if(!st.on)return;var cx=W*.5+(st.base-sc),top=GY(),WH=104;
  x.save();x.fillStyle='rgba(13,18,34,.94)';x.fillRect(cx-380,top-WH-8,760,WH);x.fillStyle='rgba(255,215,120,.14)';x.fillRect(cx-380,top-WH-8,760,2);
  var bbs=[{lx:-320,w:150,h:58,c:'#33406b',ac:'#ffd76a',k:0},{lx:-150,w:130,h:58,c:'#3a2f55',ac:'#c89bff',k:1},{lx:0,w:120,h:58,c:'#2f4a4a',ac:'#6ee7a8',k:2},{lx:140,w:140,h:58,c:'#4a3320',ac:'#ffb454',k:3},{lx:300,w:120,h:58,c:'#3a2f55',ac:'#5ad1ff',k:1}];
  for(var bi2=0;bi2<bbs.length;bi2++){var b=bbs[bi2],bx=cx+b.lx,by=top-WH+8;var im=imgs[bi2%4];
   if(im&&im.complete&&im.naturalWidth>0){x.save();x.beginPath();rr(bx,by,b.w,b.h,4);x.clip();x.drawImage(im,bx,by,b.w,b.h);x.restore();x.strokeStyle='rgba(255,255,255,.14)';x.lineWidth=1;rr(bx,by,b.w,b.h,4);x.stroke();}
   else{x.fillStyle=b.c;rr(bx,by,b.w,b.h,4);x.fill();x.strokeStyle='rgba(255,255,255,.14)';x.lineWidth=1;rr(bx,by,b.w,b.h,4);x.stroke();x.fillStyle=b.ac;
    if(b.k===0){x.fillRect(bx+12,by+14,b.w-24,5);x.fillRect(bx+12,by+26,b.w-60,4);x.fillRect(bx+12,by+38,b.w-90,3);}
    else if(b.k===1){x.beginPath();x.arc(bx+b.w/2,by+b.h/2,15,0,6.283);x.fill();x.fillStyle='rgba(0,0,0,.25)';x.beginPath();x.arc(bx+b.w/2,by+b.h/2,7,0,6.283);x.fill();}
    else if(b.k===2){for(var si=0;si<3;si++)x.fillRect(bx+14+si*20,by+14,11,b.h-28);}
    else{x.beginPath();x.moveTo(bx+14,by+b.h-14);x.lineTo(bx+30,by+16);x.lineTo(bx+46,by+b.h-14);x.closePath();x.fill();x.beginPath();x.moveTo(bx+50,by+b.h-14);x.lineTo(bx+66,by+16);x.lineTo(bx+82,by+b.h-14);x.closePath();x.fill();}}
   x.fillStyle='#0d1220';x.fillRect(bx+6,by+b.h,5,top-(by+b.h));x.fillRect(bx+b.w-11,by+b.h,5,top-(by+b.h));}
  x.fillStyle='rgba(20,26,46,.96)';x.fillRect(cx-380,top-8,760,16);x.fillStyle='rgba(255,215,120,.34)';x.fillRect(cx-380,top-8,760,2);
  for(var li=-3;li<=3;li++)lamp(cx+li*120,top);clock(cx+95,top);x.restore();}
 function drawFigs(){if(!st.on)return;var dx=W*.5+(st.base-sc);for(var i=0;i<st.figs.length;i++){var f=st.figs[i];person(dx+f.lx,f,Math.min(H*.1,W*.14)*((f.tp.indexOf('kid')>=0)?.7:1));}}
 function perchTarget(bx){var list=[];
  if(st.on){var cx=W*.5+(st.base-sc);for(var li=-3;li<=3;li++)list.push({x:cx+li*120,y:GY()-82});}
  var o=(sc*.85)%320;if(o<0)o+=320;for(var i=-o;i<W+320;i+=320){list.push({x:i+70,y:GY()-200});list.push({x:i+230,y:GY()-200});}
  var best=null,bd=1e9;for(var k=0;k<list.length;k++){var pt=list[k];if(pt.x<-30||pt.x>W+30)continue;var d=Math.abs(pt.x-bx)+Math.abs(pt.y-(H*.16))*.5;if(d<bd){bd=d;best=pt;}}
  return best||{x:Math.min(W-20,Math.max(20,bx)),y:GY()-200};}
 function updBirds(dt){for(var i=0;i<birds.length;i++){var b=birds[i];b.t+=dt;b.flap+=dt*(b.type==='bat'?20:11);
  if(b.st==='fly'){
   b.vx+=Math.sin(b.ph+b.t*.7)*10*dt;b.vy+=Math.cos(b.ph*1.3+b.t*.6)*7*dt;
   if(b.vx>60)b.vx=60;if(b.vx<-60)b.vx=-60;if(b.vy>24)b.vy=24;if(b.vy<-24)b.vy=-24;
   b.x+=b.vx*dt;b.y+=b.vy*dt;
   if(b.x<-30)b.x=W+30;if(b.x>W+30)b.x=-30;
   var bt=H*.06,bb=H*.32;if(b.y<bt){b.y=bt;b.vy=Math.abs(b.vy);}if(b.y>bb){b.y=bb;b.vy=-Math.abs(b.vy);}
   if(b.t>b.perT){b.st='perch';b.t=0;var tg=perchTarget(b.x);b.px=tg.x;b.py=tg.y;b.perT=2.5+Math.random()*3.5;}
  } else {
   b.x+=(b.px-b.x)*Math.min(1,dt*3.2);b.y+=(b.py-b.y)*Math.min(1,dt*3.2);
   if(Math.abs(b.px-b.x)<1.6&&Math.abs(b.py-b.y)<1.6){b.x=b.px;b.y=b.py;if(b.t>b.perT){b.st='fly';b.t=0;b.vx=(Math.random()<.5?-1:1)*(22+Math.random()*24);b.vy=-(4+Math.random()*9);b.perT=6+Math.random()*9;}}
  }}}
 function drawBirds(){if(!st.on)return;for(var i=0;i<birds.length;i++){var b=birds[i];var fly=(b.st==='fly');x.save();x.translate(b.x,b.y);x.lineJoin='round';x.fillStyle='rgba(9,11,20,.96)';x.strokeStyle='rgba(175,198,238,.5)';x.lineWidth=.9;
  if(b.type==='bat'){var f=fly?Math.sin(b.flap)*.9:.22;
   x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(-4.2,-3.6-f*3.6,-8,-.6);x.quadraticCurveTo(-4,1.5,0,1.9);x.quadraticCurveTo(4,1.5,8,-.6);x.quadraticCurveTo(4.2,-3.6-f*3.6,0,0);x.closePath();x.fill();x.stroke();}
  else{
   if(fly){var f2=Math.sin(b.flap)*.85;x.beginPath();x.moveTo(0,-1.2);x.quadraticCurveTo(-6.5,-5-f2*4.5,9.5,.6);x.quadraticCurveTo(-2.4,2.4,0,2.6);x.closePath();x.fill();x.stroke();x.beginPath();x.moveTo(0,-1.2);x.quadraticCurveTo(6.5,-5-f2*4.5,-9.5,.6);x.quadraticCurveTo(2.4,2.4,0,2.6);x.closePath();x.fill();x.stroke();}
   x.beginPath();x.ellipse(0,0,4.4,5.4,0,0,6.283);x.fill();x.stroke();
   x.beginPath();x.moveTo(-2.9,-4.1);x.lineTo(-1,-6.6);x.lineTo(0,-4.1);x.closePath();x.fill();x.stroke();
   x.beginPath();x.moveTo(2.9,-4.1);x.lineTo(1,-6.6);x.lineTo(0,-4.1);x.closePath();x.fill();x.stroke();
   x.fillStyle='rgba(255,220,140,.85)';x.beginPath();x.arc(-1.3,-.7,.85,0,6.283);x.fill();x.beginPath();x.arc(1.3,-.7,.85,0,6.283);x.fill();}
  x.restore();}}
 function updP(dt){var g=gm(),cx=W*.5+2*(g.tw*.2),cy=g.yb-g.th+g.th*.06;if(Math.random()<(.9+sp*.02)*dt*8)pf.push({x:cx,y:cy,vx:-(20+sp*.25)-Math.random()*20,vy:-(28+Math.random()*24),l:0,m:1.6+Math.random()*1.2,s:6+Math.random()*6});
  for(var i=pf.length-1;i>=0;i--){var p=pf[i];p.l+=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=10*dt;p.s+=14*dt;if(p.l>=p.m)pf.splice(i,1);}}
 function updLmP(dt){for(var i=lmP.length-1;i>=0;i--){var p=lmP[i];p.l+=dt;p.x+=(p.vx+Math.sin(p.ph+p.l*1.6)*4)*dt;p.y+=p.vy*dt;p.r+=.5*dt;if(p.l>=p.m)lmP.splice(i,1);}if(lmP.length>110)lmP.splice(0,lmP.length-110);}
 function updSt(dt){if(!st.on)return;for(var i=st.figs.length-1;i>=0;i--){var f=st.figs[i];f.t+=dt;if(f.st==='w')f.a=Math.min(1,f.a+dt*3);else if(f.st==='b'){f.lx+=(0-f.lx)*Math.min(1,dt*2.2);f.a-=dt*.85;}else{f.lx+=70*dt;f.a-=dt*.6;}if(f.a<=.02)st.figs.splice(i,1);}if((sc-st.base)>W*1.6){st.on=false;st.figs=[];}}
 function render(){x.setTransform(D,0,0,D,0,0);x.fillStyle='#080b16';x.fillRect(0,0,W,H);x.save();var s0=G.S();var cs=(s0&&s0.pur>72)?(0.006*(s0.pur-72)):0;if(shk>.01||cs)x.translate((Math.random()-.5)*(shk*14+cs*W),(Math.random()-.5)*(shk*14+cs*W));
  var g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0a0e22');g.addColorStop(.42,'#171a38');g.addColorStop(.66,'#2a2148');g.addColorStop(1,'#3a2a45');x.fillStyle=g;x.fillRect(0,0,W,H);
  x.save();x.globalAlpha=.13;for(var au=0;au<3;au++){var ax=W*(.24+au*.28)+Math.sin(tm*.2+au)*40;var ag=x.createRadialGradient(ax,H*.085,4,ax,H*.085,W*.42);ag.addColorStop(0,au%2?'rgba(120,255,190,1)':'rgba(150,180,255,1)');ag.addColorStop(1,'rgba(120,255,190,0)');x.fillStyle=ag;x.beginPath();x.ellipse(ax,H*.095,W*.32,H*.042,0,0,6.283);x.fill();}x.restore();
  for(var i=0;i<stars.length;i++){var s=stars[i],sx=(s.x*W-sc*.03)%W;if(sx<0)sx+=W;x.globalAlpha=Math.max(.05,s.a+s.a*Math.sin(tm*1.6+s.p));x.fillStyle='#e8ecff';x.beginPath();x.arc(sx,s.y*H,s.r,0,6.283);x.fill();}x.globalAlpha=1;
  var mx=W*.78,my=H*.11,mr=Math.min(W,H)*.042,mg=x.createRadialGradient(mx,my,mr*.3,mx,my,mr*6);mg.addColorStop(0,'rgba(240,230,200,.32)');mg.addColorStop(1,'rgba(240,230,200,0)');x.fillStyle=mg;x.beginPath();x.arc(mx,my,mr*6,0,6.283);x.fill();x.fillStyle='#f2e9cf';x.beginPath();x.arc(mx,my,mr,0,6.283);x.fill();
  var gy=GY();tile(far,.12,gy-310);tile(mid,.28,gy-230);tile(po,.85,gy-230);
  if(BIOME===2){var wg2=x.createLinearGradient(0,gy,0,H);wg2.addColorStop(0,'#16395a');wg2.addColorStop(.35,'#0e2942');wg2.addColorStop(1,'#08182a');x.fillStyle=wg2;x.fillRect(0,gy,W,H-gy);drawGroundWave();}
  else{var gg2=x.createLinearGradient(0,gy,0,H);gg2.addColorStop(0,'#0f1726');gg2.addColorStop(.5,'#0a0f1c');gg2.addColorStop(1,'#05070f');x.fillStyle=gg2;x.fillRect(0,gy,W,H-gy);}
  tile(gr,1,TB()-46);drawScenery();
  drawStation();drawFigs();train();npc();drawBirds();
  for(var k=0;k<pf.length;k++){var p=pf[k];x.fillStyle='rgba(180,185,210,'+((1-p.l/p.m)*.34).toFixed(3)+')';x.beginPath();x.arc(p.x,p.y,p.s,0,6.283);x.fill();}
  for(var q=0;q<lmP.length;q++){var lp=lmP[q];var lk=Math.sin((lp.l/lp.m)*Math.PI);x.fillStyle='rgba(255,236,190,'+(lk*.30).toFixed(3)+')';x.beginPath();x.arc(lp.x,lp.y,lp.r,0,6.283);x.fill();}
  var s2=G.S();if(s2&&s2.pur>40){var fa2=(s2.pur-40)/60*0.42;var fg2=x.createRadialGradient(W*.5,H*.55,H*.2,W*.5,H*.55,H*.95);fg2.addColorStop(0,'rgba(120,130,150,0)');fg2.addColorStop(1,'rgba(120,130,150,'+fa2.toFixed(2)+')');x.fillStyle=fg2;x.fillRect(0,0,W,H);}
  x.restore();
  var vg=x.createRadialGradient(W*.5,H*.46,H*.30,W*.5,H*.5,H*.84);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.5)');x.fillStyle=vg;x.fillRect(0,0,W,H);}
 function step(dt){ldt=dt;tm+=dt;sp+=((window.__sp||0)-sp)*Math.min(1,dt*3);sc+=sp*dt;shk*=Math.pow(.002,dt);updP(dt);updSt(dt);updBirds(dt);updLmP(dt);render();}
 function waiters(){var idx=(G.S().st-1)%SW.length,tps=SW[idx]||[];st.on=true;st.base=sc;st.figs=[];for(var i=0;i<tps.length;i++)st.figs.push({tp:tps[i],lx:80+i*66,a:0,t:Math.random()*3,st:'w'});}
 function leavers(){st.figs.push({tp:'m-suitcase',lx:20,a:1,t:0,st:'l'});}
 function board(){for(var i=0;i<st.figs.length;i++)if(st.figs[i].st==='w')st.figs[i].st='b';}
 return{rs:rs,bd:bd,step:step,waiters:waiters,leavers:leavers,board:board,setMode:function(m){mode=m;},setBiome:setBiome,shake:function(v){shk=v||.5;},setNpc:function(v){npcOn=v;},tip:function(v){tipping=v;}};})();
window.__sp=0;