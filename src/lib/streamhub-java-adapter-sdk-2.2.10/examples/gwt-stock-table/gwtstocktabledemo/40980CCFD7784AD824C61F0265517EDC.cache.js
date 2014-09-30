(function(){var $gwt_version = "1.6.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var ae='',Ed=' ',jb=' (',mb='"',ob='$',ab='http://localhost:7979/streamhub/',cc="'; please report this bug to the GWT team",kb=')',fe=', Row size: ',rb=', Size: ',bb='-',ue='0',cb='0.0 (0.00%)',pb=':',ye='BA',ze='BAC',t='C',je='Cannot create a column with a negative index: ',ke='Cannot create a row with a negative index: ',A='Change',y='Company',kd='DOMMouseScroll',lb='For input string: "',qb='Index: ',u='KO',z='Last Price',gb='LastPrice',v='MCD',Bb='Object;',hb='PercentChange',de='Row index: ',yb='String;',x='Symbol',r="Unexpected typeof result '",w='WMT',Ab='Widget;',zb='[Lcom.google.gwt.user.client.ui.',xb='[Ljava.lang.',nb='\\',tc='\\"',uc='\\\\',D='\\b',Db='\\f',tb='\\n',Eb='\\r',ib='\\t',nc='\\u0000',yc='\\u0001',dd='\\u0002',od='\\u0003',zd='\\u0004',ee='\\u0005',pe='\\u0006',s='\\u0007',Cb='\\u000B',Fb='\\u000E',ac='\\u000F',bc='\\u0010',dc='\\u0011',ec='\\u0012',fc='\\u0013',gc='\\u0014',hc='\\u0015',ic='\\u0016',jc='\\u0017',kc='\\u0018',lc='\\u0019',mc='\\u001A',oc='\\u001B',pc='\\u001C',qc='\\u001D',rc='\\u001E',sc='\\u001F',vc='__gwt_initWindowCloseHandler',Ad='__uiObjectID',we='align',eb='black',wc='blur',re='bottom',ve='cellPadding',te='cellSpacing',oe='center',xc='change',Dd='className',zc='click',ne='col',me='colgroup',wb='com.streamhub.client.GWTStockTableDemo',ld='contextmenu',Ac='dblclick',id='error',Bc='focus',Bd='function',Cd='function ',db='green',Cc='keydown',Dc='keypress',Ec='keyup',Fd='left',Fc='load',ad='losecapture',F='mainPanel',se='middle',ub='moduleStartup',bd='mousedown',cd='mousemove',ed='mouseout',fd='mouseover',gd='mouseup',jd='mousewheel',vb='onModuleLoadStart',wd='onblur',md='onclick',yd='oncontextmenu',xd='ondblclick',vd='onfocus',sd='onkeydown',td='onkeypress',ud='onkeyup',nd='onmousedown',qd='onmousemove',pd='onmouseup',rd='onmousewheel',ce='position',fb='red',qe='right',q='script',hd='scroll',sb='startup',B='stockTable',C='stockTableHeader',E='stockTableNumeric',he='table',ie='tbody',le='td',be='top',ge='tr',xe='verticalAlign';var _;function mt(a){return this===(a==null?null:a)}
function nt(){return this.$H||(this.$H=++kf)}
function kt(){}
_=kt.prototype={};_.eQ=mt;_.hC=nt;_.tM=vy;_.tI=1;function bf(b,a){return b.tM==vy||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function df(a){return a.tM==vy||a.tI==2?a.hC():a.$H||(a.$H=++kf)}
function hf(a){return a.$H||(a.$H=++kf)}
var kf=0;function vf(a,c){var b;b=a.createElement(q);b.text=c;return b}
function xf(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function qf(b,a){return b===a||b.contains(a)}
var sf=null;function Bg(){}
_=Bg.prototype=new kt();_.tI=0;_.a=false;_.b=null;function sg(a){Ap()}
function tg(b){var a;if(rg){a=new pg();wh(b,a)}}
function ug(){return rg}
function pg(){}
_=pg.prototype=new Bg();_.m=sg;_.q=ug;_.tI=0;var rg=null;function yg(){}
_=yg.prototype=new kt();_.tI=0;function Dg(a){a.a=++ah;return a}
function Fg(){return this.a}
function Cg(){}
_=Cg.prototype=new kt();_.hC=Fg;_.tI=0;_.a=0;var ah=0;function sh(b,c,a){if(b.b>0){uh(b,fh(new eh(),b,c,a))}else{lh(b.d,c,a)}return new yg()}
function uh(b,a){if(!b.a){b.a=jx(new ix())}lx(b.a,a)}
function wh(c,a){var b;if(a.a){a.a=false;a.b=null}b=a.b;a.b=c.e;try{++c.b;nh(c.d,a,c.c)}finally{--c.b;if(c.b==0){xh(c)}}if(b==null){a.a=true;a.b=null}else{a.b=b}}
function xh(c){var a,b;if(c.a){try{for(b=bw(new Fv(),c.a);b.a<b.b.b;){a=bk(ew(b),2);lh(a.a.d,a.c,a.b)}}finally{c.a=null}}}
function dh(){}
_=dh.prototype=new kt();_.tI=0;_.a=null;_.b=0;_.c=false;_.d=null;_.e=null;function fh(b,a,d,c){b.a=a;b.c=d;b.b=c;return b}
function eh(){}
_=eh.prototype=new kt();_.tI=7;_.a=null;_.b=null;_.c=null;function kh(a){a.a=wx(new vx());return a}
function lh(c,d,a){var b;b=bk(tv(c.a,d),3);if(!b){b=jx(new ix());zv(c.a,d,b)}Bj(b.a,b.b++,a)}
function nh(i,e,h){var d,f,g,j,a,b,c;j=e.q();d=(a=bk(tv(i.a,j),3),!a?0:a.b);if(h){for(g=d-1;g>=0;--g){f=(b=bk(tv(i.a,j),3),bk((jw(g,b.b),b.a[g]),12));e.m(f)}}else{for(g=0;g<d;++g){f=(c=bk(tv(i.a,j),3),bk((jw(g,c.b),c.a[g]),12));e.m(f)}}}
function ih(){}
_=ih.prototype=new kt();_.tI=0;function lj(){}
_=lj.prototype=new kt();_.tI=0;function Bh(b,a){b.a=a;return b}
function Dh(a){if(!(a!=null&&ak(a.tI,13))){return false}return this.a==bk(a,13).a}
function Eh(){return hf(this.a)}
function Ah(){}
_=Ah.prototype=new lj();_.eQ=Dh;_.hC=Eh;_.tI=8;_.a=null;function ci(){ci=vy;di=(ci(),new ai());ei=new ai()}
function fi(a){ci();if(a){return ei}else{return di}}
function ai(){}
_=ai.prototype=new lj();_.tI=0;var di,ei;function iu(){}
_=iu.prototype=new kt();_.tI=3;function ts(){}
_=ts.prototype=new iu();_.tI=4;function ot(){}
_=ot.prototype=new ts();_.tI=5;function hi(b,a){return b}
function gi(){}
_=gi.prototype=new ot();_.tI=9;function li(){li=vy;ni=(li(),new ji())}
function ji(){}
_=ji.prototype=new lj();_.tI=0;var ni;function pi(a,b){a.a=b;return a}
function ri(a){if(!(a!=null&&ak(a.tI,14))){return false}return this.a==bk(a,14).a}
function si(){return ~~Math.max(Math.min(ps(new os(),this.a).a,2147483647),-2147483648)}
function oi(){}
_=oi.prototype=new lj();_.eQ=ri;_.hC=si;_.tI=10;_.a=0;function ui(b,a){b.a=a;return b}
function xi(d,c){var b,a;if(c==null){throw new Fs()}return b=d.a[c],a=(Ci(),ej)[typeof b],a?a(b):dj(typeof b)}
function yi(a){if(!(a!=null&&ak(a.tI,15))){return false}return this.a==bk(a,15).a}
function zi(){return hf(this.a)}
function ti(){}
_=ti.prototype=new lj();_.eQ=yi;_.hC=zi;_.tI=11;_.a=null;function Ci(){Ci=vy;ej={'boolean':Di,number:Ei,string:aj,object:Fi,'function':Fi,undefined:bj}}
function Di(a){return fi(a)}
function Ei(a){return pi(new oi(),a)}
function Fi(b){if(!b){return li(),ni}var c=b.valueOf?b.valueOf():b;if(c!==b){var a=ej[typeof c];return a?a(c):dj(typeof c)}else if(b instanceof Array||b instanceof $wnd.Array){return Bh(new Ah(),b)}else{return ui(new ti(),b)}}
function aj(a){return gj(new fj(),a)}
function bj(){return null}
function dj(a){Ci();throw hi(new gi(),r+a+cc)}
var ej;function hj(){var a;hj=vy;a=[nc,yc,dd,od,zd,ee,pe,s,D,ib,tb,Cb,Db,Eb,Fb,ac,bc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,oc,pc,qc,rc,sc];a[34]=tc;a[92]=uc}
function gj(a,b){hj();if(b==null){throw new Fs()}a.a=b;return a}
function ij(a){if(!(a!=null&&ak(a.tI,16))){return false}return Ct(this.a,bk(a,16).a)}
function jj(){return yt(this.a)}
function fj(){}
_=fj.prototype=new lj();_.eQ=ij;_.hC=jj;_.tI=12;_.a=null;function yj(d,c){var a=new Array(c);if(d>0){var e=[null,0,false,[0,0]][d];for(var b=0;b<c;++b){a[b]=e}}return a}
function zj(a,f,c,b,e){var d;d=yj(e,b);pj();uj(d,qj,rj);d.tI=f;d.qI=c;return d}
function Aj(b,d,c,a){pj();uj(a,qj,rj);a.tI=d;a.qI=c;return a}
function Bj(a,b,c){if(c!=null){if(a.qI>0&&!Fj(c.tI,a.qI)){throw new bs()}if(a.qI<0&&(c.tM==vy||c.tI==2)){throw new bs()}}return a[b]=c}
function nj(){}
_=nj.prototype=new kt();_.tI=0;_.length=0;_.qI=0;function pj(){pj=vy;qj=[];rj=[];sj(new nj(),qj,rj)}
function sj(e,a,b){var c=0,f;for(var d in e){if(f=e[d]){a[c]=d;b[c]=f;++c}}}
function uj(a,c,d){pj();for(var e=0,b=c.length;e<b;++e){a[c[e]]=d[e]}}
var qj,rj;function ak(b,a){return b&&!!nk[b][a]}
function Fj(b,a){return b&&nk[b][a]}
function bk(b,a){if(b!=null&&!Fj(b.tI,a)){throw new fs()}return b}
var nk=[{},{},{1:1,8:1,9:1,10:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{2:1},{13:1},{8:1,17:1},{14:1},{15:1},{16:1},{4:1},{6:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1,18:1},{12:1},{4:1,5:1,6:1,7:1,18:1},{4:1,5:1,6:1,7:1},{19:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,10:1,20:1},{8:1,17:1},{8:1},{8:1,10:1,21:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{9:1},{8:1,17:1},{24:1},{24:1},{22:1},{22:1},{22:1},{24:1},{3:1,8:1},{8:1,23:1},{8:1,24:1},{22:1},{8:1,17:1},{11:1}];function dl(b,a,c){var d;if(a==gl){if(jm(b.type)==8192){gl=null}}d=cl;cl=b;try{c.w(b)}finally{cl=d}}
function fl(a){return true}
function il(a,b){lm();fm(a,b)}
var cl=null,gl=null;function vl(a){Dl();return wl(rg?rg:(rg=Dg(new Cg())),a)}
function wl(b,a){return sh(Bl(),b,a)}
function yl(){if(xl){tg(Bl())}}
function zl(){var a;if(xl){a=(nl(),new ll());Al(a);return null}return null}
function Al(a){if(Cl){wh(Cl,a)}}
function Bl(){if(!Cl){Cl=sl(new rl())}return Cl}
function Dl(){if(!xl){Bm(Am(),vc);xl=true}}
var xl=false,Cl=null;function nl(){nl=vy;ol=Dg(new Cg())}
function pl(a){null.D()}
function ql(){return ol}
function ll(){}
_=ll.prototype=new Bg();_.m=pl;_.q=ql;_.tI=0;var ol;function sl(a){a.d=kh(new ih());a.e=null;a.c=false;return a}
function rl(){}
_=rl.prototype=new dh();_.tI=13;function jm(a){switch(a){case wc:return 4096;case xc:return 1024;case zc:return 1;case Ac:return 2;case Bc:return 2048;case Cc:return 128;case Dc:return 256;case Ec:return 512;case Fc:return 32768;case ad:return 8192;case bd:return 4;case cd:return 64;case ed:return 32;case fd:return 16;case gd:return 8;case hd:return 16384;case id:return 65536;case jd:return 131072;case kd:return 131072;case ld:return 262144;}}
function lm(){if(!nm){dm();nm=true}}
var nm=false;function dm(){hm=function(){var c=sf;sf=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!fl($wnd.event)){sf=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(!(b!=null&&(b.tM!=vy&&b.tI!=2))&&(b!=null&&ak(b.tI,5))){dl($wnd.event,a,b)}}sf=c};gm=function(){var a=$doc.createEventObject();if($wnd.event.returnValue==null){$wnd.event.srcElement.fireEvent(md,a)}if(this.__eventBits&2){hm.call(this)}else if($wnd.event.returnValue==null){$wnd.event.returnValue=true;fl($wnd.event)}};var e=function(){hm.call($doc.body)};var d=function(){gm.call($doc.body)};$doc.body.attachEvent(md,e);$doc.body.attachEvent(nd,e);$doc.body.attachEvent(pd,e);$doc.body.attachEvent(qd,e);$doc.body.attachEvent(rd,e);$doc.body.attachEvent(sd,e);$doc.body.attachEvent(td,e);$doc.body.attachEvent(ud,e);$doc.body.attachEvent(vd,e);$doc.body.attachEvent(wd,e);$doc.body.attachEvent(xd,d);$doc.body.attachEvent(yd,e)}
function em(c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b])}
function fm(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?hm:null;if(b&3)c.ondblclick=a&3?gm:null;if(b&4)c.onmousedown=a&4?hm:null;if(b&8)c.onmouseup=a&8?hm:null;if(b&16)c.onmouseover=a&16?hm:null;if(b&32)c.onmouseout=a&32?hm:null;if(b&64)c.onmousemove=a&64?hm:null;if(b&128)c.onkeydown=a&128?hm:null;if(b&256)c.onkeypress=a&256?hm:null;if(b&512)c.onkeyup=a&512?hm:null;if(b&1024)c.onchange=a&1024?hm:null;if(b&2048)c.onfocus=a&2048?hm:null;if(b&4096)c.onblur=a&4096?hm:null;if(b&8192)c.onlosecapture=a&8192?hm:null;if(b&16384)c.onscroll=a&16384?hm:null;if(b&32768)c.onload=a&32768?hm:null;if(b&65536)c.onerror=a&65536?hm:null;if(b&131072)c.onmousewheel=a&131072?hm:null;if(b&262144)c.oncontextmenu=a&262144?hm:null}
var gm=null,hm=null;function rm(a){a.a=jx(new ix());return a}
function tm(d,b){var c,a;c=(a=b[Ad],a==null?-1:a);if(c<0){return null}return bk(nx(d.a,c),6)}
function um(d,b){var c,a;c=(a=b[Ad],a==null?-1:a);b[Ad]=null;px(d.a,c,null)}
function pm(){}
_=pm.prototype=new kt();_.tI=0;function Am(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function Bm(b,a){var c;b=au(b,Bd,Cd+a);c=vf($doc,b);$doc.body.appendChild(c);Cm();$doc.body.removeChild(c)}
function Cm(){$wnd.__gwt_initWindowCloseHandler(function(){return zl()},function(){yl()})}
function eq(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new ot()}j=du(j);if(j.length==0){throw new vs()}i=c[Dd]==null?null:String(c[Dd]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Ed}c[Dd]=i+j}}else{if(e!=-1){b=du(i.substr(0,e-0));d=du(bu(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Ed+d}c[Dd]=h}}}
function aq(){}
_=aq.prototype=new kt();_.tI=14;_.j=null;function Cq(b){var a;if(b.g){throw new ys()}b.g=true;b.j.__listener=b;a=b.h;b.h=-1;if(a>0){ar(b,a)}b.n();b.x()}
function Dq(a){if(!a.g){throw new ys()}try{a.y()}finally{a.o();a.j.__listener=null;a.g=false}}
function Eq(a){if(!a.i){zp();if(qv(Ep.a,a)){Dq(a);Cv(Ep.a,a)!=null}}else if(a.i){a.i.z(a)}else if(a.i){throw new ys()}}
function Fq(c,b){var a;a=c.i;if(!b){if(!!a&&a.g){Dq(c)}c.i=null}else{if(a){throw new ys()}c.i=b;if(b.g){Cq(c)}}}
function ar(b,a){if(b.h==-1){il(b.j,a|(b.j.__eventBits||0))}else{b.h|=a}}
function br(){}
function cr(){}
function dr(a){var b;switch(jm(a.type)){case 16:case 32:b=a.relatedTarget||(a.type==ed?a.toElement:a.fromElement);if(!!b&&qf(this.j,b)){return}}}
function er(){}
function fr(){}
function mq(){}
_=mq.prototype=new aq();_.n=br;_.o=cr;_.w=dr;_.x=er;_.y=fr;_.tI=15;_.g=false;_.h=0;_.i=null;function op(){var a,b;for(b=this.u();b.t();){a=bk(b.v(),7);Cq(a)}}
function pp(){var a,b;for(b=this.u();b.t();){a=bk(b.v(),7);Dq(a)}}
function qp(){}
function rp(){}
function mp(){}
_=mp.prototype=new mq();_.n=op;_.o=pp;_.x=qp;_.y=rp;_.tI=16;function jn(c,a,b){Eq(a);vq(c.e,a);b.appendChild(a.j);Fq(a,c)}
function ln(b,c){var a;if(c.i!=b){return false}Fq(c,null);a=c.j;a.parentElement.removeChild(a);Aq(b.e,c);return true}
function mn(){return qq(new oq(),this.e)}
function nn(a){return ln(this,a)}
function gn(){}
_=gn.prototype=new mp();_.u=mn;_.z=nn;_.tI=17;function Fm(a,b){jn(a,b,a.j)}
function bn(a){a.style[Fd]=ae;a.style[be]=ae;a.style[ce]=ae}
function cn(b){var a;a=ln(this,b);if(a){bn(b.j)}return a}
function Em(){}
_=Em.prototype=new gn();_.z=cn;_.tI=18;function dn(){}
_=dn.prototype=new gn();_.tI=19;_.c=null;_.d=null;function ro(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw Cs(new Bs(),de+a+fe+b)}}
function wo(b,a){var c;if(a!=b.a.rows.length){ro(b,a)}c=$doc.createElement(ge);em(b.a,c,a);return a}
function xo(d,c,a){var b,e;b=xf(c);e=null;if(b){e=bk(tm(d.f,b),7)}if(e){yo(d,e);return true}else{if(a){c.innerHTML=ae}return false}}
function yo(b,c){var a;if(c.i!=b){return false}Fq(c,null);a=c.j;a.parentElement.removeChild(a);um(b.f,a);return true}
function Ao(b,a){b.c=a;jo(b.c)}
function Co(f,c,a,e){var d,b;un(f,c,a);d=(b=f.b.a.a.rows[c].cells[a],xo(f,b,e==null),b);if(e!=null){d.innerText=e||ae}}
function Do(){return An(new yn(),this)}
function xn(){}
_=xn.prototype=new mp();_.u=Do;_.tI=20;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;function sn(a){a.f=rm(new pm());a.e=$doc.createElement(he);a.a=$doc.createElement(ie);a.e.appendChild(a.a);a.j=a.e;a.b=qn(new pn(),a);a.d=lo(new ko(),a);Ao(a,ho(new go(),a));return a}
function un(e,d,b){var a,c;vn(e,d);if(b<0){throw Cs(new Bs(),je+b)}a=(ro(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){wn(e.a,d,c)}}
function vn(d,b){var a,c;if(b<0){throw Cs(new Bs(),ke+b)}c=d.a.rows.length;for(a=c;a<=b;++a){wo(d,a)}}
function wn(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(le);e.appendChild(a)}}
function on(){}
_=on.prototype=new xn();_.tI=21;function ao(e,b,a,c){var d;un(e.a,b,a);d=e.a.a.rows[b].cells[a];eq(d,c,true)}
function fo(d,b,a,c){un(d.a,b,a);d.a.a.rows[b].cells[a][Dd]=c}
function Fn(){}
_=Fn.prototype=new kt();_.tI=0;_.a=null;function qn(b,a){b.a=a;return b}
function pn(){}
_=pn.prototype=new Fn();_.tI=0;function An(b,a){b.b=a;b.c=b.b.f.a;Cn(b);return b}
function Cn(a){while(++a.a<a.c.b){if(nx(a.c,a.a)!=null){return}}}
function Dn(){return this.a<this.c.b}
function En(){var a;if(this.a>=this.c.b){throw new oy()}a=bk(nx(this.c,this.a),7);Cn(this);return a}
function yn(){}
_=yn.prototype=new kt();_.t=Dn;_.v=En;_.tI=0;_.a=-1;_.b=null;function ho(b,a){b.b=a;return b}
function jo(a){if(!a.a){a.a=$doc.createElement(me);em(a.b.e,a.a,0);a.a.appendChild($doc.createElement(ne))}}
function go(){}
_=go.prototype=new kt();_.tI=0;_.a=null;_.b=null;function lo(b,a){b.a=a;return b}
function mo(c,a,b){eq((vn(c.a,a),c.a.a.rows[a]),b,true)}
function ko(){}
_=ko.prototype=new kt();_.tI=0;_.a=null;function cp(){cp=vy;ap(new Fo(),oe);ep=ap(new Fo(),Fd);ap(new Fo(),qe);dp=ep}
var dp,ep;function ap(b,a){b.a=a;return b}
function Fo(){}
_=Fo.prototype=new kt();_.tI=0;_.a=null;function ip(){ip=vy;gp(new fp(),re);gp(new fp(),se);jp=gp(new fp(),be)}
var jp;function gp(a,b){a.a=b;return a}
function fp(){}
_=fp.prototype=new kt();_.tI=0;_.a=null;function zp(){zp=vy;Dp=wx(new vx());Ep=Ax(new zx())}
function yp(b,a){zp();b.e=uq(new nq());b.j=a;Cq(b);return b}
function Ap(){var b,a;zp();var c,d;for(d=(b=vu(new uu(),bx(Ep.a).b.a),rw(new qw(),b));dw(d.a.a);){c=bk((a=bk(ew(d.a.a),22),a.r()),7);if(c.g){Dq(c)}}ov(Ep.a);ov(Dp)}
function Cp(b){zp();var a,c;c=bk(tv(Dp,b),18);a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(c){if(!a||c.j==a){return c}}if(Dp.d==0){vl(new tp())}if(!a){c=wp(new vp())}else{c=yp(new sp(),a)}zv(Dp,b,c);Bx(Ep,c);return c}
function sp(){}
_=sp.prototype=new Em();_.tI=22;var Dp,Ep;function tp(){}
_=tp.prototype=new kt();_.tI=23;function xp(){xp=vy;zp()}
function wp(a){xp();yp(a,$doc.body);return a}
function vp(){}
_=vp.prototype=new sp();_.tI=24;function hq(a){a.e=uq(new nq());a.d=$doc.createElement(he);a.c=$doc.createElement(ie);a.d.appendChild(a.c);a.j=a.d;a.a=(cp(),dp);a.b=(ip(),jp);a.d[te]=ue;a.d[ve]=ue;return a}
function iq(c,e){var b,d,a;d=$doc.createElement(ge);b=(a=$doc.createElement(le),(a[we]=c.a.a,undefined),(a.style[xe]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);Eq(e);vq(c.e,e);b.appendChild(e.j);Fq(e,c)}
function lq(c){var a,b;b=c.j.parentElement;a=ln(this,c);if(a){this.c.removeChild(b.parentElement)}return a}
function fq(){}
_=fq.prototype=new dn();_.z=lq;_.tI=25;function uq(a){a.a=zj(qk,0,7,4,0);return a}
function vq(a,b){yq(a,b,a.b)}
function xq(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function yq(d,e,a){var b,c;if(a<0||a>d.b){throw new Bs()}if(d.b==d.a.length){c=zj(qk,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){Bj(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){Bj(d.a,b,d.a[b-1])}Bj(d.a,a,e)}
function zq(c,b){var a;if(b<0||b>=c.b){throw new Bs()}--c.b;for(a=b;a<c.b;++a){Bj(c.a,a,c.a[a+1])}Bj(c.a,c.b,null)}
function Aq(b,c){var a;a=xq(b,c);if(a==-1){throw new oy()}zq(b,a)}
function nq(){}
_=nq.prototype=new kt();_.tI=0;_.a=null;_.b=0;function qq(b,a){b.b=a;return b}
function sq(){return this.a<this.b.b-1}
function tq(){if(this.a>=this.b.b){throw new oy()}return this.b.a[++this.a]}
function oq(){}
_=oq.prototype=new kt();_.t=sq;_.v=tq;_.tI=0;_.a=-1;_.b=null;function ir(a){a.b=hq(new fq());a.c=Aj(sk,0,1,[ye,ze,t,u,v,w]);return a}
function jr(f){var a,b,c,d,e;for(c=f.c,d=0,e=c.length;d<e;++d){b=c[d];a=or(new nr(),b);pr(a,f.a);lx((vr(),wr),a);$wnd.gwtStreamHub.subscribe(b,$wnd.gwtStreamHubUpdate)}}
function mr(b){var a;b.a=(a=sn(new on()),Co(a,0,0,x),Co(a,0,1,y),Co(a,0,2,z),Co(a,0,3,A),eq(a.j,B,true),mo(a.d,0,C),ao(a.b,0,2,E),ao(a.b,0,3,E),a.e[ve]=6,a);iq(b.b,b.a);eq(b.b.j,F,true);Fm(Cp(B),b.b);vr();$wnd.gwtStreamHub=new $wnd.StreamHub();new tr();$wnd.gwtStreamHubUpdate=xr;$wnd.gwtStreamHub.connect(ab);jr(b)}
function gr(){}
_=gr.prototype=new kt();_.tI=0;_.a=null;function or(b,a){b.e=a;b.a=bb;b.d=0;return b}
function pr(b,a){b.b=a;b.c=a.a.rows.length;Co(a,b.c,0,b.e);Co(a,b.c,1,b.a);Co(a,b.c,2,ae+b.d);Co(a,b.c,3,cb);ao(a.b,b.c,2,E);ao(a.b,b.c,3,E)}
function rr(b,a){if(a.a>0){fo(b.b.b,b.c,3,db)}else if(a.a==0){fo(b.b.b,b.c,3,eb)}else{fo(b.b.b,b.c,3,fb)}}
function sr(f,g,h){var a,b,c,d,e;if(Ct(f.e,g)){d=bk(xi(h,gb),16).a;c=bk(xi(h,y),16).a;e=bk(xi(h,hb),16).a;a=bk(xi(h,A),16).a;b=ps(new os(),ht(a));Co(f.b,f.c,1,c);Co(f.b,f.c,2,d);Co(f.b,f.c,3,a+jb+e+kb);rr(f,b)}}
function nr(){}
_=nr.prototype=new kt();_.tI=26;_.a=null;_.b=null;_.c=0;_.d=0;_.e=null;function vr(){vr=vy;wr=jx(new ix())}
function xr(d,e){vr();var a,b,c;a=ui(new ti(),e);for(c=bw(new Fv(),wr);c.a<c.b.b;){b=bk(ew(c),19);sr(b,d,a)}}
function tr(){}
_=tr.prototype=new kt();_.tI=0;var wr;function bs(){}
_=bs.prototype=new ot();_.tI=28;function is(c,a){var b;b=new es();return b}
function es(){}
_=es.prototype=new kt();_.tI=0;function fs(){}
_=fs.prototype=new ot();_.tI=32;function ht(a){var b;b=it(a);if(isNaN(b)){throw dt(new ct(),lb+a+mb)}return b}
function it(b){var a=jt;if(!a){a=jt=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i}if(a.test(b)){return parseFloat(b)}else{return Number.NaN}}
function bt(){}
_=bt.prototype=new kt();_.tI=33;var jt=null;function ps(a,b){a.a=b;return a}
function rs(a){return a!=null&&ak(a.tI,21)&&bk(a,21).a==this.a}
function ss(){return ~~Math.max(Math.min(this.a,2147483647),-2147483648)}
function os(){}
_=os.prototype=new bt();_.eQ=rs;_.hC=ss;_.tI=34;_.a=0;function vs(){}
_=vs.prototype=new ot();_.tI=35;function ys(){}
_=ys.prototype=new ot();_.tI=36;function Cs(b,a){return b}
function Bs(){}
_=Bs.prototype=new ot();_.tI=37;function Fs(){}
_=Fs.prototype=new ot();_.tI=38;function dt(b,a){return b}
function ct(){}
_=ct.prototype=new vs();_.tI=39;function Ct(b,a){if(!(a!=null&&ak(a.tI,1))){return false}return String(b)==a}
function au(c,a,b){b=fu(b);return c.replace(RegExp(a),b)}
function bu(b,a){return b.substr(a,b.length-a)}
function du(c){if(c.length==0||c[0]>Ed&&c[c.length-1]>Ed){return c}var a=c.replace(/^(\s*)/,ae);var b=a.replace(/\s*$/,ae);return b}
function fu(b){var a;a=0;while(0<=(a=b.indexOf(nb,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+ob+bu(b,++a)}else{b=b.substr(0,a-0)+bu(b,++a)}}return b}
function gu(a){return Ct(this,a)}
function hu(){return yt(this)}
_=String.prototype;_.eQ=gu;_.hC=hu;_.tI=2;function tt(){tt=vy;ut={};xt={}}
function vt(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function yt(c){tt();var a=pb+c;var b=xt[a];if(b!=null){return b}b=ut[a];if(b==null){b=vt(c)}zt();return xt[a]=b}
function zt(){if(wt==256){ut=xt;xt={};wt=0}++wt}
var ut,wt=0,xt;function ku(){}
_=ku.prototype=new ot();_.tI=41;function ou(a,b){var c;while(a.t()){c=a.v();if(b==null?c==null:bf(b,c)){return a}}return null}
function qu(a){throw new ku()}
function ru(b){var a;a=ou(this.u(),b);return !!a}
function nu(){}
_=nu.prototype=new kt();_.k=qu;_.l=ru;_.tI=0;function bx(b){var a;a=zu(new tu(),b);return ww(new pw(),b,a)}
function cx(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ak(c.tI,23))){return false}e=bk(c,23);if(bk(this,23).d!=e.d){return false}for(b=vu(new uu(),zu(new tu(),e).a);dw(b.a);){a=bk(ew(b.a),22);d=a.r();f=a.s();if(!(d==null?bk(this,23).c:d!=null&&ak(d.tI,1)?vv(bk(this,23),bk(d,1)):uv(bk(this,23),d,~~df(d)))){return false}if(!uy(f,d==null?bk(this,23).b:d!=null&&ak(d.tI,1)?bk(this,23).e[pb+bk(d,1)]:rv(bk(this,23),d,~~df(d)))){return false}}return true}
function dx(){var a,b,c;c=0;for(b=vu(new uu(),zu(new tu(),bk(this,23)).a);dw(b.a);){a=bk(ew(b.a),22);c+=a.hC();c=~~c}return c}
function ow(){}
_=ow.prototype=new kt();_.eQ=cx;_.hC=dx;_.tI=0;function mv(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function nv(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=kv(e,c.substring(1));a.k(b)}}}
function ov(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function qv(b,a){return a==null?b.c:a!=null&&ak(a.tI,1)?vv(b,bk(a,1)):uv(b,a,~~df(a))}
function tv(b,a){return a==null?b.b:a!=null&&ak(a.tI,1)?b.e[pb+bk(a,1)]:rv(b,a,~~df(a))}
function rv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return c.s()}}}return null}
function uv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return true}}}return false}
function vv(b,a){return pb+a in b.e}
function zv(b,a,c){return a==null?xv(b,c):a!=null&&ak(a.tI,1)?yv(b,bk(a,1),c):wv(b,a,c,~~df(a))}
function wv(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(i.p(g,d)){var h=c.s();c.A(j);return h}}}else{a=i.a[e]=[]}var c=hy(new gy(),g,j);a.push(c);++i.d;return null}
function xv(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function yv(d,a,e){var b,c=d.e;a=pb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Cv(b,a){return !a?Bv(b):Av(b,a,~~(a.$H||(a.$H=++kf)))}
function Av(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.s()}}}return null}
function Bv(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function Dv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&bf(a,b)}
function su(){}
_=su.prototype=new ow();_.p=Dv;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function gx(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ak(b.tI,24))){return false}c=bk(b,24);if(c.B()!=this.B()){return false}for(a=c.u();a.t();){d=a.v();if(!this.l(d)){return false}}return true}
function hx(){var a,b,c;a=0;for(b=this.u();b.t();){c=b.v();if(c!=null){a+=df(c);a=~~a}}return a}
function ex(){}
_=ex.prototype=new nu();_.eQ=gx;_.hC=hx;_.tI=42;function zu(b,a){b.a=a;return b}
function Bu(d,c){var a,b,e;if(c!=null&&ak(c.tI,22)){a=bk(c,22);b=a.r();if(qv(d.a,b)){e=tv(d.a,b);return yx(a.s(),e)}}return false}
function Cu(a){return Bu(this,a)}
function Du(){return vu(new uu(),this.a)}
function Eu(){return this.a.d}
function tu(){}
_=tu.prototype=new ex();_.l=Cu;_.u=Du;_.B=Eu;_.tI=43;_.a=null;function vu(c,b){var a;c.b=b;a=jx(new ix());if(c.b.c){lx(a,av(new Fu(),c.b))}nv(c.b,a);mv(c.b,a);c.a=bw(new Fv(),a);return c}
function xu(){return dw(this.a)}
function yu(){return bk(ew(this.a),22)}
function uu(){}
_=uu.prototype=new kt();_.t=xu;_.v=yu;_.tI=0;_.a=null;_.b=null;function Ew(b){var a;if(b!=null&&ak(b.tI,22)){a=bk(b,22);if(uy(this.r(),a.r())&&uy(this.s(),a.s())){return true}}return false}
function Fw(){var a,b;a=0;b=0;if(this.r()!=null){a=df(this.r())}if(this.s()!=null){b=df(this.s())}return a^b}
function Cw(){}
_=Cw.prototype=new kt();_.eQ=Ew;_.hC=Fw;_.tI=44;function av(b,a){b.a=a;return b}
function cv(){return null}
function dv(){return this.a.b}
function ev(a){return xv(this.a,a)}
function Fu(){}
_=Fu.prototype=new Cw();_.r=cv;_.s=dv;_.A=ev;_.tI=45;_.a=null;function gv(c,a,b){c.b=b;c.a=a;return c}
function iv(){return this.a}
function jv(){return this.b.e[pb+this.a]}
function kv(b,a){return gv(new fv(),a,b)}
function lv(a){return yv(this.b,this.a,a)}
function fv(){}
_=fv.prototype=new Cw();_.r=iv;_.s=jv;_.A=lv;_.tI=46;_.a=null;_.b=null;function iw(a){kx(this,this.B(),a);return true}
function jw(a,b){if(a<0||a>=b){mw(a,b)}}
function kw(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ak(e.tI,3))){return false}f=bk(e,3);if(this.B()!=f.b){return false}c=bw(new Fv(),bk(this,3));d=bw(new Fv(),f);while(c.a<c.b.b){a=ew(c);b=ew(d);if(!(a==null?b==null:bf(a,b))){return false}}return true}
function lw(){var a,b,c;b=1;a=bw(new Fv(),bk(this,3));while(a.a<a.b.b){c=ew(a);b=31*b+(c==null?0:df(c));b=~~b}return b}
function mw(a,b){throw Cs(new Bs(),qb+a+rb+b)}
function nw(){return bw(new Fv(),bk(this,3))}
function Ev(){}
_=Ev.prototype=new nu();_.k=iw;_.eQ=kw;_.hC=lw;_.u=nw;_.tI=0;function bw(b,a){b.b=a;return b}
function dw(a){return a.a<a.b.b}
function ew(a){if(a.a>=a.b.b){throw new oy()}return nx(a.b,a.a++)}
function fw(){return this.a<this.b.b}
function gw(){return ew(this)}
function Fv(){}
_=Fv.prototype=new kt();_.t=fw;_.v=gw;_.tI=0;_.a=0;_.b=null;function ww(b,a,c){b.a=a;b.b=c;return b}
function zw(a){return qv(this.a,a)}
function Aw(){var a;return a=vu(new uu(),this.b.a),rw(new qw(),a)}
function Bw(){return this.b.a.d}
function pw(){}
_=pw.prototype=new ex();_.l=zw;_.u=Aw;_.B=Bw;_.tI=47;_.a=null;_.b=null;function rw(a,b){a.a=b;return a}
function uw(){return dw(this.a.a)}
function vw(){var a;return a=bk(ew(this.a.a),22),a.r()}
function qw(){}
_=qw.prototype=new kt();_.t=uw;_.v=vw;_.tI=0;_.a=null;function jx(a){a.a=zj(rk,0,0,0,0);a.b=0;return a}
function lx(b,a){Bj(b.a,b.b++,a);return true}
function kx(c,a,b){if(a<0||a>c.b){mw(a,c.b)}c.a.splice(a,0,b);++c.b}
function nx(b,a){jw(a,b.b);return b.a[a]}
function ox(c,b,a){for(;a<c.b;++a){if(uy(b,c.a[a])){return a}}return -1}
function px(d,a,b){var c;c=(jw(a,d.b),d.a[a]);Bj(d.a,a,b);return c}
function qx(a){return Bj(this.a,this.b++,a),true}
function rx(a){return ox(this,a,0)!=-1}
function sx(){return this.b}
function ix(){}
_=ix.prototype=new Ev();_.k=qx;_.l=rx;_.B=sx;_.tI=48;_.a=null;_.b=0;function wx(a){ov(a);return a}
function yx(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&bf(a,b)}
function vx(){}
_=vx.prototype=new su();_.tI=49;function Ax(a){a.a=wx(new vx());return a}
function Bx(c,a){var b;b=zv(c.a,a,c);return b==null}
function Fx(b){var a;return a=zv(this.a,b,this),a==null}
function ay(a){return qv(this.a,a)}
function by(){var a;return a=vu(new uu(),bx(this.a).b.a),rw(new qw(),a)}
function cy(){return this.a.d}
function zx(){}
_=zx.prototype=new ex();_.k=Fx;_.l=ay;_.u=by;_.B=cy;_.tI=50;_.a=null;function hy(b,a,c){b.a=a;b.b=c;return b}
function jy(){return this.a}
function ky(){return this.b}
function my(b){var a;a=this.b;this.b=b;return a}
function gy(){}
_=gy.prototype=new Cw();_.r=jy;_.s=ky;_.A=my;_.tI=51;_.a=null;_.b=null;function oy(){}
_=oy.prototype=new ot();_.tI=52;function uy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&bf(a,b)}
function Fr(){!!$stats&&$stats({moduleName:$moduleName,subSystem:sb,evtGroup:ub,millis:(new Date()).getTime(),type:vb,className:wb});mr(ir(new gr()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Fr()}catch(a){b(d)}else{Fr()}}
function vy(){}
var sk=is(xb,yb),qk=is(zb,Ab),rk=is(xb,Bb);$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (gwtstocktabledemo) gwtstocktabledemo.onScriptLoad(gwtOnLoad);})();