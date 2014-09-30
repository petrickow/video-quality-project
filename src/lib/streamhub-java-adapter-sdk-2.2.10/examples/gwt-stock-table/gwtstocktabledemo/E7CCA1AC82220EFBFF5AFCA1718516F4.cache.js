(function(){var $gwt_version = "1.6.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var bd='',Fc=' ',z=' (',C='"',ie='http://localhost:7979/streamhub/',r="'; please report this bug to the GWT team",A=')',fd=', Row size: ',ab=', Size: ',je='-',vd='0',t='0.0 (0.00%)',E=':',zd='BA',Ad='BAC',Bd='C',kd='Cannot create a column with a negative index: ',ld='Cannot create a row with a negative index: ',de='Change',be='Company',yc='DOMMouseScroll',B='For input string: "',F='Index: ',Cd='KO',ce='Last Price',x='LastPrice',Dd='MCD',Bc='MouseEvents',kb='Object;',y='PercentChange',ed='Row index: ',gb='String;',ae='Symbol',q="Unexpected typeof result '",Ed='WMT',jb='Widget;',hb='[Lcom.google.gwt.user.client.ui.',fb='[Ljava.lang.',cc='\\"',dc='\\\\',s='\\b',mb='\\f',ib='\\n',nb='\\r',D='\\t',sb='\\u0000',Db='\\u0001',ic='\\u0002',tc='\\u0003',Ec='\\u0004',jd='\\u0005',ud='\\u0006',Fd='\\u0007',lb='\\u000B',ob='\\u000E',pb='\\u000F',qb='\\u0010',rb='\\u0011',tb='\\u0012',ub='\\u0013',vb='\\u0014',wb='\\u0015',xb='\\u0016',yb='\\u0017',zb='\\u0018',Ab='\\u0019',Bb='\\u001A',Cb='\\u001B',Eb='\\u001C',Fb='\\u001D',ac='\\u001E',bc='\\u001F',Cc='__uiObjectID',xd='align',v='black',ec='blur',rd='bottom',wd='cellPadding',td='cellSpacing',pd='center',fc='change',Dc='className',gc='click',od='col',nd='colgroup',eb='com.streamhub.client.GWTStockTableDemo',zc='contextmenu',hc='dblclick',wc='error',jc='focus',u='green',Ac='html',kc='keydown',lc='keypress',mc='keyup',ad='left',nc='load',oc='losecapture',he='mainPanel',sd='middle',cb='moduleStartup',pc='mousedown',qc='mousemove',rc='mouseout',sc='mouseover',uc='mouseup',xc='mousewheel',db='onModuleLoadStart',dd='position',w='red',qd='right',vc='scroll',bb='startup',ee='stockTable',fe='stockTableHeader',ge='stockTableNumeric',hd='table',id='tbody',md='td',cd='top',gd='tr',yd='verticalAlign';var _;function ct(a){return this===(a==null?null:a)}
function dt(){return this.$H||(this.$H=++ze)}
function at(){}
_=at.prototype={};_.eQ=ct;_.hC=dt;_.tM=jy;_.tI=1;function re(b,a){return b.tM==jy||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function te(a){return a.tM==jy||a.tI==2?a.hC():a.$H||(a.$H=++ze)}
function xe(a){return a.$H||(a.$H=++ze)}
var ze=0;function df(){df=jy;De();new Be()}
function gf(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function hf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Ae(){}
_=Ae.prototype=new at();_.tI=0;function bf(){bf=jy;df()}
function af(){}
_=af.prototype=new Ae();_.tI=0;function De(){De=jy;bf()}
function Ee(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Be(){}
_=Be.prototype=new af();_.tI=0;function og(){}
_=og.prototype=new at();_.tI=0;_.a=false;_.b=null;function fg(a){qp()}
function gg(b){var a;if(eg){a=new cg();jh(b,a)}}
function hg(){return eg}
function cg(){}
_=cg.prototype=new og();_.m=fg;_.q=hg;_.tI=0;var eg=null;function lg(){}
_=lg.prototype=new at();_.tI=0;function qg(a){a.a=++tg;return a}
function sg(){return this.a}
function pg(){}
_=pg.prototype=new at();_.hC=sg;_.tI=0;_.a=0;var tg=0;function fh(b,c,a){if(b.b>0){hh(b,yg(new xg(),b,c,a))}else{Eg(b.d,c,a)}return new lg()}
function hh(b,a){if(!b.a){b.a=Dw(new Cw())}Fw(b.a,a)}
function jh(c,a){var b;if(a.a){a.a=false;a.b=null}b=a.b;a.b=c.e;try{++c.b;ah(c.d,a,c.c)}finally{--c.b;if(c.b==0){kh(c)}}if(b==null){a.a=true;a.b=null}else{a.b=b}}
function kh(c){var a,b;if(c.a){try{for(b=vv(new tv(),c.a);b.a<b.b.b;){a=uj(yv(b),2);Eg(a.a.d,a.c,a.b)}}finally{c.a=null}}}
function wg(){}
_=wg.prototype=new at();_.tI=0;_.a=null;_.b=0;_.c=false;_.d=null;_.e=null;function yg(b,a,d,c){b.a=a;b.c=d;b.b=c;return b}
function xg(){}
_=xg.prototype=new at();_.tI=7;_.a=null;_.b=null;_.c=null;function Dg(a){a.a=kx(new jx());return a}
function Eg(c,d,a){var b;b=uj(hv(c.a,d),3);if(!b){b=Dw(new Cw());nv(c.a,d,b)}oj(b.a,b.b++,a)}
function ah(i,e,h){var d,f,g,j,a,b,c;j=e.q();d=(a=uj(hv(i.a,j),3),!a?0:a.b);if(h){for(g=d-1;g>=0;--g){f=(b=uj(hv(i.a,j),3),uj((Dv(g,b.b),b.a[g]),12));e.m(f)}}else{for(g=0;g<d;++g){f=(c=uj(hv(i.a,j),3),uj((Dv(g,c.b),c.a[g]),12));e.m(f)}}}
function Bg(){}
_=Bg.prototype=new at();_.tI=0;function Ei(){}
_=Ei.prototype=new at();_.tI=0;function oh(b,a){b.a=a;return b}
function qh(a){if(!(a!=null&&tj(a.tI,13))){return false}return this.a==uj(a,13).a}
function rh(){return xe(this.a)}
function nh(){}
_=nh.prototype=new Ei();_.eQ=qh;_.hC=rh;_.tI=8;_.a=null;function vh(){vh=jy;wh=(vh(),new th());xh=new th()}
function yh(a){vh();if(a){return xh}else{return wh}}
function th(){}
_=th.prototype=new Ei();_.tI=0;var wh,xh;function Ct(){}
_=Ct.prototype=new at();_.tI=3;function js(){}
_=js.prototype=new Ct();_.tI=4;function et(){}
_=et.prototype=new js();_.tI=5;function Ah(b,a){return b}
function zh(){}
_=zh.prototype=new et();_.tI=9;function Eh(){Eh=jy;ai=(Eh(),new Ch())}
function Ch(){}
_=Ch.prototype=new Ei();_.tI=0;var ai;function ci(a,b){a.a=b;return a}
function ei(a){if(!(a!=null&&tj(a.tI,14))){return false}return this.a==uj(a,14).a}
function fi(){return ~~Math.max(Math.min(fs(new es(),this.a).a,2147483647),-2147483648)}
function bi(){}
_=bi.prototype=new Ei();_.eQ=ei;_.hC=fi;_.tI=10;_.a=0;function hi(b,a){b.a=a;return b}
function ki(d,c){var b,a;if(c==null){throw new vs()}return b=d.a[c],a=(pi(),xi)[typeof b],a?a(b):wi(typeof b)}
function li(a){if(!(a!=null&&tj(a.tI,15))){return false}return this.a==uj(a,15).a}
function mi(){return xe(this.a)}
function gi(){}
_=gi.prototype=new Ei();_.eQ=li;_.hC=mi;_.tI=11;_.a=null;function pi(){pi=jy;xi={'boolean':qi,number:ri,string:ti,object:si,'function':si,undefined:ui}}
function qi(a){return yh(a)}
function ri(a){return ci(new bi(),a)}
function si(b){if(!b){return Eh(),ai}var c=b.valueOf?b.valueOf():b;if(c!==b){var a=xi[typeof c];return a?a(c):wi(typeof c)}else if(b instanceof Array||b instanceof $wnd.Array){return oh(new nh(),b)}else{return hi(new gi(),b)}}
function ti(a){return zi(new yi(),a)}
function ui(){return null}
function wi(a){pi();throw Ah(new zh(),q+a+r)}
var xi;function Ai(){var a;Ai=jy;a=[sb,Db,ic,tc,Ec,jd,ud,Fd,s,D,ib,lb,mb,nb,ob,pb,qb,rb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Eb,Fb,ac,bc];a[34]=cc;a[92]=dc}
function zi(a,b){Ai();if(b==null){throw new vs()}a.a=b;return a}
function Bi(a){if(!(a!=null&&tj(a.tI,16))){return false}return st(this.a,uj(a,16).a)}
function Ci(){return ot(this.a)}
function yi(){}
_=yi.prototype=new Ei();_.eQ=Bi;_.hC=Ci;_.tI=12;_.a=null;function lj(d,c){var a=new Array(c);if(d>0){var e=[null,0,false,[0,0]][d];for(var b=0;b<c;++b){a[b]=e}}return a}
function mj(a,f,c,b,e){var d;d=lj(e,b);cj();hj(d,dj,ej);d.tI=f;d.qI=c;return d}
function nj(b,d,c,a){cj();hj(a,dj,ej);a.tI=d;a.qI=c;return a}
function oj(a,b,c){if(c!=null){if(a.qI>0&&!sj(c.tI,a.qI)){throw new xr()}if(a.qI<0&&(c.tM==jy||c.tI==2)){throw new xr()}}return a[b]=c}
function aj(){}
_=aj.prototype=new at();_.tI=0;_.length=0;_.qI=0;function cj(){cj=jy;dj=[];ej=[];fj(new aj(),dj,ej)}
function fj(e,a,b){var c=0,f;for(var d in e){if(f=e[d]){a[c]=d;b[c]=f;++c}}}
function hj(a,c,d){cj();for(var e=0,b=c.length;e<b;++e){a[c[e]]=d[e]}}
var dj,ej;function tj(b,a){return b&&!!ak[b][a]}
function sj(b,a){return b&&ak[b][a]}
function uj(b,a){if(b!=null&&!sj(b.tI,a)){throw new Br()}return b}
var ak=[{},{},{1:1,8:1,9:1,10:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{2:1},{13:1},{8:1,17:1},{14:1},{15:1},{16:1},{4:1},{6:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1,18:1},{12:1},{4:1,5:1,6:1,7:1,18:1},{4:1,5:1,6:1,7:1},{19:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,10:1,20:1},{8:1,17:1},{8:1},{8:1,10:1,21:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{9:1},{8:1,17:1},{24:1},{24:1},{22:1},{22:1},{22:1},{24:1},{3:1,8:1},{8:1,23:1},{8:1,24:1},{22:1},{8:1,17:1},{11:1}];function wk(b,a,c){var d;if(a==Ak){if(dm((df(),b).type)==8192){Ak=null}}d=vk;vk=b;try{c.w(b)}finally{vk=d}}
var vk=null,Ak=null;function il(a){ql();return jl(eg?eg:(eg=qg(new pg())),a)}
function jl(b,a){return fh(ol(),b,a)}
function ll(){if(kl){gg(ol())}}
function ml(){var a;if(kl){a=(al(),new Ek());nl(a);return null}return null}
function nl(a){if(pl){jh(pl,a)}}
function ol(){if(!pl){pl=fl(new el())}return pl}
function ql(){if(!kl){tm();kl=true}}
var kl=false,pl=null;function al(){al=jy;bl=qg(new pg())}
function cl(a){null.D()}
function dl(){return bl}
function Ek(){}
_=Ek.prototype=new og();_.m=cl;_.q=dl;_.tI=0;var bl;function fl(a){a.d=Dg(new Bg());a.e=null;a.c=false;return a}
function el(){}
_=el.prototype=new wg();_.tI=13;function dm(a){switch(a){case ec:return 4096;case fc:return 1024;case gc:return 1;case hc:return 2;case jc:return 2048;case kc:return 128;case lc:return 256;case mc:return 512;case nc:return 32768;case oc:return 8192;case pc:return 4;case qc:return 64;case rc:return 32;case sc:return 16;case uc:return 8;case vc:return 16384;case wc:return 65536;case xc:return 131072;case yc:return 131072;case zc:return 262144;}}
function fm(){if(!hm){Bl();wl();hm=true}}
function im(a){return !(a!=null&&(a.tM!=jy&&a.tI!=2))&&(a!=null&&tj(a.tI,5))}
var hm=false;function Bl(){am=function(b){if(Fl(b)){var a=El;if(a&&a.__listener){if(im(a.__listener)){wk(b,a,a.__listener);b.stopPropagation()}}}};Fl=function(a){return true};bm=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(im(c)){wk(b,a,c)}}};$wnd.addEventListener(gc,am,true);$wnd.addEventListener(hc,am,true);$wnd.addEventListener(pc,am,true);$wnd.addEventListener(uc,am,true);$wnd.addEventListener(qc,am,true);$wnd.addEventListener(sc,am,true);$wnd.addEventListener(rc,am,true);$wnd.addEventListener(xc,am,true);$wnd.addEventListener(kc,Fl,true);$wnd.addEventListener(mc,Fl,true);$wnd.addEventListener(lc,Fl,true)}
function Cl(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function Dl(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?bm:null;if(b&2)c.ondblclick=a&2?bm:null;if(b&4)c.onmousedown=a&4?bm:null;if(b&8)c.onmouseup=a&8?bm:null;if(b&16)c.onmouseover=a&16?bm:null;if(b&32)c.onmouseout=a&32?bm:null;if(b&64)c.onmousemove=a&64?bm:null;if(b&128)c.onkeydown=a&128?bm:null;if(b&256)c.onkeypress=a&256?bm:null;if(b&512)c.onkeyup=a&512?bm:null;if(b&1024)c.onchange=a&1024?bm:null;if(b&2048)c.onfocus=a&2048?bm:null;if(b&4096)c.onblur=a&4096?bm:null;if(b&8192)c.onlosecapture=a&8192?bm:null;if(b&16384)c.onscroll=a&16384?bm:null;if(b&32768)c.onload=a&32768?bm:null;if(b&65536)c.onerror=a&65536?bm:null;if(b&131072)c.onmousewheel=a&131072?bm:null;if(b&262144)c.oncontextmenu=a&262144?bm:null}
var El=null,Fl=null,am=null,bm=null;function wl(){$wnd.addEventListener(rc,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(Ac==b.target.tagName.toLowerCase()){var c=$doc.createEvent(Bc);c.initMouseEvent(uc,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(yc,am,true)}
function yl(b,a){fm();Dl(b,a);xl(b,a)}
function xl(b,a){if(a&131072){b.addEventListener(yc,bm,false)}}
function lm(a){a.a=Dw(new Cw());return a}
function nm(d,b){var c,a;c=(a=b[Cc],a==null?-1:a);if(c<0){return null}return uj(bx(d.a,c),6)}
function om(d,b){var c,a;c=(a=b[Cc],a==null?-1:a);b[Cc]=null;dx(d.a,c,null)}
function jm(){}
_=jm.prototype=new at();_.tI=0;function tm(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=ml()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{ll()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Ap(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new et()}j=yt(j);if(j.length==0){throw new ls()}i=c[Dc]==null?null:String(c[Dc]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Fc}c[Dc]=i+j}}else{if(e!=-1){b=yt(i.substr(0,e-0));d=yt(wt(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Fc+d}c[Dc]=h}}}
function wp(){}
_=wp.prototype=new at();_.tI=14;_.j=null;function sq(b){var a;if(b.g){throw new os()}b.g=true;b.j.__listener=b;a=b.h;b.h=-1;if(a>0){wq(b,a)}b.n();b.x()}
function tq(a){if(!a.g){throw new os()}try{a.y()}finally{a.o();a.j.__listener=null;a.g=false}}
function uq(a){if(!a.i){pp();if(ev(up.a,a)){tq(a);qv(up.a,a)!=null}}else if(a.i){a.i.z(a)}else if(a.i){throw new os()}}
function vq(c,b){var a;a=c.i;if(!b){if(!!a&&a.g){tq(c)}c.i=null}else{if(a){throw new os()}c.i=b;if(b.g){sq(c)}}}
function wq(b,a){if(b.h==-1){yl(b.j,a|(b.j.__eventBits||0))}else{b.h|=a}}
function xq(){}
function yq(){}
function zq(a){var b;switch(dm((df(),a).type)){case 16:case 32:b=a.relatedTarget;if(!!b&&Ee(this.j,b)){return}}}
function Aq(){}
function Bq(){}
function cq(){}
_=cq.prototype=new wp();_.n=xq;_.o=yq;_.w=zq;_.x=Aq;_.y=Bq;_.tI=15;_.g=false;_.h=0;_.i=null;function ep(){var a,b;for(b=this.u();b.t();){a=uj(b.v(),7);sq(a)}}
function fp(){var a,b;for(b=this.u();b.t();){a=uj(b.v(),7);tq(a)}}
function gp(){}
function hp(){}
function cp(){}
_=cp.prototype=new cq();_.n=ep;_.o=fp;_.x=gp;_.y=hp;_.tI=16;function Em(c,a,b){uq(a);lq(c.e,a);b.appendChild(a.j);vq(a,c)}
function an(b,c){var a;if(c.i!=b){return false}vq(c,null);a=c.j;hf((df(),a)).removeChild(a);qq(b.e,c);return true}
function bn(){return gq(new eq(),this.e)}
function cn(a){return an(this,a)}
function Cm(){}
_=Cm.prototype=new cp();_.u=bn;_.z=cn;_.tI=17;function vm(a,b){Em(a,b,a.j)}
function xm(a){a.style[ad]=bd;a.style[cd]=bd;a.style[dd]=bd}
function ym(b){var a;a=an(this,b);if(a){xm(b.j)}return a}
function um(){}
_=um.prototype=new Cm();_.z=ym;_.tI=18;function zm(){}
_=zm.prototype=new Cm();_.tI=19;_.c=null;_.d=null;function ho(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw ss(new rs(),ed+a+fd+b)}}
function mo(b,a){var c;if(a!=b.a.rows.length){ho(b,a)}c=(df(),$doc).createElement(gd);Cl(b.a,c,a);return a}
function no(d,c,a){var b,e;b=gf((df(),c));e=null;if(b){e=uj(nm(d.f,b),7)}if(e){oo(d,e);return true}else{if(a){c.innerHTML=bd}return false}}
function oo(b,c){var a;if(c.i!=b){return false}vq(c,null);a=c.j;hf((df(),a)).removeChild(a);om(b.f,a);return true}
function qo(b,a){b.c=a;En(b.c)}
function so(f,c,a,e){var d,b;kn(f,c,a);d=(b=f.b.a.a.rows[c].cells[a],no(f,b,e==null),b);if(e!=null){(df(),d).textContent=e||bd}}
function to(){return qn(new on(),this)}
function nn(){}
_=nn.prototype=new cp();_.u=to;_.tI=20;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;function hn(a){a.f=lm(new jm());a.e=(df(),$doc).createElement(hd);a.a=$doc.createElement(id);a.e.appendChild(a.a);a.j=a.e;a.b=fn(new en(),a);a.d=ao(new Fn(),a);qo(a,Cn(new Bn(),a));return a}
function kn(e,d,b){var a,c;ln(e,d);if(b<0){throw ss(new rs(),kd+b)}a=(ho(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){mn(e.a,d,c)}}
function ln(d,b){var a,c;if(b<0){throw ss(new rs(),ld+b)}c=d.a.rows.length;for(a=c;a<=b;++a){mo(d,a)}}
function mn(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(md);e.appendChild(a)}}
function dn(){}
_=dn.prototype=new nn();_.tI=21;function wn(e,b,a,c){var d;kn(e.a,b,a);d=e.a.a.rows[b].cells[a];Ap(d,c,true)}
function An(d,b,a,c){kn(d.a,b,a);d.a.a.rows[b].cells[a][Dc]=c}
function vn(){}
_=vn.prototype=new at();_.tI=0;_.a=null;function fn(b,a){b.a=a;return b}
function en(){}
_=en.prototype=new vn();_.tI=0;function qn(b,a){b.b=a;b.c=b.b.f.a;sn(b);return b}
function sn(a){while(++a.a<a.c.b){if(bx(a.c,a.a)!=null){return}}}
function tn(){return this.a<this.c.b}
function un(){var a;if(this.a>=this.c.b){throw new cy()}a=uj(bx(this.c,this.a),7);sn(this);return a}
function on(){}
_=on.prototype=new at();_.t=tn;_.v=un;_.tI=0;_.a=-1;_.b=null;function Cn(b,a){b.b=a;return b}
function En(a){if(!a.a){a.a=(df(),$doc).createElement(nd);Cl(a.b.e,a.a,0);a.a.appendChild($doc.createElement(od))}}
function Bn(){}
_=Bn.prototype=new at();_.tI=0;_.a=null;_.b=null;function ao(b,a){b.a=a;return b}
function bo(c,a,b){Ap((ln(c.a,a),c.a.a.rows[a]),b,true)}
function Fn(){}
_=Fn.prototype=new at();_.tI=0;_.a=null;function yo(){yo=jy;wo(new vo(),pd);Ao=wo(new vo(),ad);wo(new vo(),qd);zo=Ao}
var zo,Ao;function wo(b,a){b.a=a;return b}
function vo(){}
_=vo.prototype=new at();_.tI=0;_.a=null;function Eo(){Eo=jy;Co(new Bo(),rd);Co(new Bo(),sd);Fo=Co(new Bo(),cd)}
var Fo;function Co(a,b){a.a=b;return a}
function Bo(){}
_=Bo.prototype=new at();_.tI=0;_.a=null;function pp(){pp=jy;tp=kx(new jx());up=ox(new nx())}
function op(b,a){pp();b.e=kq(new dq());b.j=a;sq(b);return b}
function qp(){var b,a;pp();var c,d;for(d=(b=ju(new iu(),vw(up.a).b.a),fw(new ew(),b));xv(d.a.a);){c=uj((a=uj(yv(d.a.a),22),a.r()),7);if(c.g){tq(c)}}cv(up.a);cv(tp)}
function sp(b){pp();var a,c;c=uj(hv(tp,b),18);a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(c){if(!a||c.j==a){return c}}if(tp.d==0){il(new jp())}if(!a){c=mp(new lp())}else{c=op(new ip(),a)}nv(tp,b,c);px(up,c);return c}
function ip(){}
_=ip.prototype=new um();_.tI=22;var tp,up;function jp(){}
_=jp.prototype=new at();_.tI=23;function np(){np=jy;pp()}
function mp(a){np();op(a,$doc.body);return a}
function lp(){}
_=lp.prototype=new ip();_.tI=24;function Dp(a){a.e=kq(new dq());a.d=(df(),$doc).createElement(hd);a.c=$doc.createElement(id);a.d.appendChild(a.c);a.j=a.d;a.a=(yo(),zo);a.b=(Eo(),Fo);a.d[td]=vd;a.d[wd]=vd;return a}
function Ep(c,e){var b,d,a;d=(df(),$doc).createElement(gd);b=(a=$doc.createElement(md),(a[xd]=c.a.a,undefined),(a.style[yd]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);uq(e);lq(c.e,e);b.appendChild(e.j);vq(e,c)}
function bq(c){var a,b;b=hf((df(),c.j));a=an(this,c);if(a){this.c.removeChild(hf(b))}return a}
function Bp(){}
_=Bp.prototype=new zm();_.z=bq;_.tI=25;function kq(a){a.a=mj(dk,0,7,4,0);return a}
function lq(a,b){oq(a,b,a.b)}
function nq(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function oq(d,e,a){var b,c;if(a<0||a>d.b){throw new rs()}if(d.b==d.a.length){c=mj(dk,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){oj(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){oj(d.a,b,d.a[b-1])}oj(d.a,a,e)}
function pq(c,b){var a;if(b<0||b>=c.b){throw new rs()}--c.b;for(a=b;a<c.b;++a){oj(c.a,a,c.a[a+1])}oj(c.a,c.b,null)}
function qq(b,c){var a;a=nq(b,c);if(a==-1){throw new cy()}pq(b,a)}
function dq(){}
_=dq.prototype=new at();_.tI=0;_.a=null;_.b=0;function gq(b,a){b.b=a;return b}
function iq(){return this.a<this.b.b-1}
function jq(){if(this.a>=this.b.b){throw new cy()}return this.b.a[++this.a]}
function eq(){}
_=eq.prototype=new at();_.t=iq;_.v=jq;_.tI=0;_.a=-1;_.b=null;function Eq(a){a.b=Dp(new Bp());a.c=nj(fk,0,1,[zd,Ad,Bd,Cd,Dd,Ed]);return a}
function Fq(f){var a,b,c,d,e;for(c=f.c,d=0,e=c.length;d<e;++d){b=c[d];a=er(new dr(),b);fr(a,f.a);Fw((lr(),mr),a);$wnd.gwtStreamHub.subscribe(b,$wnd.gwtStreamHubUpdate)}}
function cr(b){var a;b.a=(a=hn(new dn()),so(a,0,0,ae),so(a,0,1,be),so(a,0,2,ce),so(a,0,3,de),Ap(a.j,ee,true),bo(a.d,0,fe),wn(a.b,0,2,ge),wn(a.b,0,3,ge),a.e[wd]=6,a);Ep(b.b,b.a);Ap(b.b.j,he,true);vm(sp(ee),b.b);lr();$wnd.gwtStreamHub=new $wnd.StreamHub();new jr();$wnd.gwtStreamHubUpdate=nr;$wnd.gwtStreamHub.connect(ie);Fq(b)}
function Cq(){}
_=Cq.prototype=new at();_.tI=0;_.a=null;function er(b,a){b.e=a;b.a=je;b.d=0;return b}
function fr(b,a){b.b=a;b.c=a.a.rows.length;so(a,b.c,0,b.e);so(a,b.c,1,b.a);so(a,b.c,2,bd+b.d);so(a,b.c,3,t);wn(a.b,b.c,2,ge);wn(a.b,b.c,3,ge)}
function hr(b,a){if(a.a>0){An(b.b.b,b.c,3,u)}else if(a.a==0){An(b.b.b,b.c,3,v)}else{An(b.b.b,b.c,3,w)}}
function ir(f,g,h){var a,b,c,d,e;if(st(f.e,g)){d=uj(ki(h,x),16).a;c=uj(ki(h,be),16).a;e=uj(ki(h,y),16).a;a=uj(ki(h,de),16).a;b=fs(new es(),Ds(a));so(f.b,f.c,1,c);so(f.b,f.c,2,d);so(f.b,f.c,3,a+z+e+A);hr(f,b)}}
function dr(){}
_=dr.prototype=new at();_.tI=26;_.a=null;_.b=null;_.c=0;_.d=0;_.e=null;function lr(){lr=jy;mr=Dw(new Cw())}
function nr(d,e){lr();var a,b,c;a=hi(new gi(),e);for(c=vv(new tv(),mr);c.a<c.b.b;){b=uj(yv(c),19);ir(b,d,a)}}
function jr(){}
_=jr.prototype=new at();_.tI=0;var mr;function xr(){}
_=xr.prototype=new et();_.tI=28;function Er(c,a){var b;b=new Ar();return b}
function Ar(){}
_=Ar.prototype=new at();_.tI=0;function Br(){}
_=Br.prototype=new et();_.tI=32;function Ds(a){var b;b=Es(a);if(isNaN(b)){throw zs(new ys(),B+a+C)}return b}
function Es(b){var a=Fs;if(!a){a=Fs=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i}if(a.test(b)){return parseFloat(b)}else{return Number.NaN}}
function xs(){}
_=xs.prototype=new at();_.tI=33;var Fs=null;function fs(a,b){a.a=b;return a}
function hs(a){return a!=null&&tj(a.tI,21)&&uj(a,21).a==this.a}
function is(){return ~~Math.max(Math.min(this.a,2147483647),-2147483648)}
function es(){}
_=es.prototype=new xs();_.eQ=hs;_.hC=is;_.tI=34;_.a=0;function ls(){}
_=ls.prototype=new et();_.tI=35;function os(){}
_=os.prototype=new et();_.tI=36;function ss(b,a){return b}
function rs(){}
_=rs.prototype=new et();_.tI=37;function vs(){}
_=vs.prototype=new et();_.tI=38;function zs(b,a){return b}
function ys(){}
_=ys.prototype=new ls();_.tI=39;function st(b,a){if(!(a!=null&&tj(a.tI,1))){return false}return String(b)==a}
function wt(b,a){return b.substr(a,b.length-a)}
function yt(c){if(c.length==0||c[0]>Fc&&c[c.length-1]>Fc){return c}var a=c.replace(/^(\s*)/,bd);var b=a.replace(/\s*$/,bd);return b}
function At(a){return st(this,a)}
function Bt(){return ot(this)}
_=String.prototype;_.eQ=At;_.hC=Bt;_.tI=2;function jt(){jt=jy;kt={};nt={}}
function lt(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function ot(c){jt();var a=E+c;var b=nt[a];if(b!=null){return b}b=kt[a];if(b==null){b=lt(c)}pt();return nt[a]=b}
function pt(){if(mt==256){kt=nt;nt={};mt=0}++mt}
var kt,mt=0,nt;function Et(){}
_=Et.prototype=new et();_.tI=41;function cu(a,b){var c;while(a.t()){c=a.v();if(b==null?c==null:re(b,c)){return a}}return null}
function eu(a){throw new Et()}
function fu(b){var a;a=cu(this.u(),b);return !!a}
function bu(){}
_=bu.prototype=new at();_.k=eu;_.l=fu;_.tI=0;function vw(b){var a;a=nu(new hu(),b);return kw(new dw(),b,a)}
function ww(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&tj(c.tI,23))){return false}e=uj(c,23);if(uj(this,23).d!=e.d){return false}for(b=ju(new iu(),nu(new hu(),e).a);xv(b.a);){a=uj(yv(b.a),22);d=a.r();f=a.s();if(!(d==null?uj(this,23).c:d!=null&&tj(d.tI,1)?jv(uj(this,23),uj(d,1)):iv(uj(this,23),d,~~te(d)))){return false}if(!iy(f,d==null?uj(this,23).b:d!=null&&tj(d.tI,1)?uj(this,23).e[E+uj(d,1)]:fv(uj(this,23),d,~~te(d)))){return false}}return true}
function xw(){var a,b,c;c=0;for(b=ju(new iu(),nu(new hu(),uj(this,23)).a);xv(b.a);){a=uj(yv(b.a),22);c+=a.hC();c=~~c}return c}
function cw(){}
_=cw.prototype=new at();_.eQ=ww;_.hC=xw;_.tI=0;function av(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function bv(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=Eu(e,c.substring(1));a.k(b)}}}
function cv(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function ev(b,a){return a==null?b.c:a!=null&&tj(a.tI,1)?jv(b,uj(a,1)):iv(b,a,~~te(a))}
function hv(b,a){return a==null?b.b:a!=null&&tj(a.tI,1)?b.e[E+uj(a,1)]:fv(b,a,~~te(a))}
function fv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return c.s()}}}return null}
function iv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return true}}}return false}
function jv(b,a){return E+a in b.e}
function nv(b,a,c){return a==null?lv(b,c):a!=null&&tj(a.tI,1)?mv(b,uj(a,1),c):kv(b,a,c,~~te(a))}
function kv(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(i.p(g,d)){var h=c.s();c.A(j);return h}}}else{a=i.a[e]=[]}var c=Bx(new Ax(),g,j);a.push(c);++i.d;return null}
function lv(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function mv(d,a,e){var b,c=d.e;a=E+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function qv(b,a){return !a?pv(b):ov(b,a,~~(a.$H||(a.$H=++ze)))}
function ov(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.s()}}}return null}
function pv(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function rv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function gu(){}
_=gu.prototype=new cw();_.p=rv;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Aw(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&tj(b.tI,24))){return false}c=uj(b,24);if(c.B()!=this.B()){return false}for(a=c.u();a.t();){d=a.v();if(!this.l(d)){return false}}return true}
function Bw(){var a,b,c;a=0;for(b=this.u();b.t();){c=b.v();if(c!=null){a+=te(c);a=~~a}}return a}
function yw(){}
_=yw.prototype=new bu();_.eQ=Aw;_.hC=Bw;_.tI=42;function nu(b,a){b.a=a;return b}
function pu(d,c){var a,b,e;if(c!=null&&tj(c.tI,22)){a=uj(c,22);b=a.r();if(ev(d.a,b)){e=hv(d.a,b);return mx(a.s(),e)}}return false}
function qu(a){return pu(this,a)}
function ru(){return ju(new iu(),this.a)}
function su(){return this.a.d}
function hu(){}
_=hu.prototype=new yw();_.l=qu;_.u=ru;_.B=su;_.tI=43;_.a=null;function ju(c,b){var a;c.b=b;a=Dw(new Cw());if(c.b.c){Fw(a,uu(new tu(),c.b))}bv(c.b,a);av(c.b,a);c.a=vv(new tv(),a);return c}
function lu(){return xv(this.a)}
function mu(){return uj(yv(this.a),22)}
function iu(){}
_=iu.prototype=new at();_.t=lu;_.v=mu;_.tI=0;_.a=null;_.b=null;function sw(b){var a;if(b!=null&&tj(b.tI,22)){a=uj(b,22);if(iy(this.r(),a.r())&&iy(this.s(),a.s())){return true}}return false}
function tw(){var a,b;a=0;b=0;if(this.r()!=null){a=te(this.r())}if(this.s()!=null){b=te(this.s())}return a^b}
function qw(){}
_=qw.prototype=new at();_.eQ=sw;_.hC=tw;_.tI=44;function uu(b,a){b.a=a;return b}
function wu(){return null}
function xu(){return this.a.b}
function yu(a){return lv(this.a,a)}
function tu(){}
_=tu.prototype=new qw();_.r=wu;_.s=xu;_.A=yu;_.tI=45;_.a=null;function Au(c,a,b){c.b=b;c.a=a;return c}
function Cu(){return this.a}
function Du(){return this.b.e[E+this.a]}
function Eu(b,a){return Au(new zu(),a,b)}
function Fu(a){return mv(this.b,this.a,a)}
function zu(){}
_=zu.prototype=new qw();_.r=Cu;_.s=Du;_.A=Fu;_.tI=46;_.a=null;_.b=null;function Cv(a){Ew(this,this.B(),a);return true}
function Dv(a,b){if(a<0||a>=b){aw(a,b)}}
function Ev(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&tj(e.tI,3))){return false}f=uj(e,3);if(this.B()!=f.b){return false}c=vv(new tv(),uj(this,3));d=vv(new tv(),f);while(c.a<c.b.b){a=yv(c);b=yv(d);if(!(a==null?b==null:re(a,b))){return false}}return true}
function Fv(){var a,b,c;b=1;a=vv(new tv(),uj(this,3));while(a.a<a.b.b){c=yv(a);b=31*b+(c==null?0:te(c));b=~~b}return b}
function aw(a,b){throw ss(new rs(),F+a+ab+b)}
function bw(){return vv(new tv(),uj(this,3))}
function sv(){}
_=sv.prototype=new bu();_.k=Cv;_.eQ=Ev;_.hC=Fv;_.u=bw;_.tI=0;function vv(b,a){b.b=a;return b}
function xv(a){return a.a<a.b.b}
function yv(a){if(a.a>=a.b.b){throw new cy()}return bx(a.b,a.a++)}
function zv(){return this.a<this.b.b}
function Av(){return yv(this)}
function tv(){}
_=tv.prototype=new at();_.t=zv;_.v=Av;_.tI=0;_.a=0;_.b=null;function kw(b,a,c){b.a=a;b.b=c;return b}
function nw(a){return ev(this.a,a)}
function ow(){var a;return a=ju(new iu(),this.b.a),fw(new ew(),a)}
function pw(){return this.b.a.d}
function dw(){}
_=dw.prototype=new yw();_.l=nw;_.u=ow;_.B=pw;_.tI=47;_.a=null;_.b=null;function fw(a,b){a.a=b;return a}
function iw(){return xv(this.a.a)}
function jw(){var a;return a=uj(yv(this.a.a),22),a.r()}
function ew(){}
_=ew.prototype=new at();_.t=iw;_.v=jw;_.tI=0;_.a=null;function Dw(a){a.a=mj(ek,0,0,0,0);a.b=0;return a}
function Fw(b,a){oj(b.a,b.b++,a);return true}
function Ew(c,a,b){if(a<0||a>c.b){aw(a,c.b)}c.a.splice(a,0,b);++c.b}
function bx(b,a){Dv(a,b.b);return b.a[a]}
function cx(c,b,a){for(;a<c.b;++a){if(iy(b,c.a[a])){return a}}return -1}
function dx(d,a,b){var c;c=(Dv(a,d.b),d.a[a]);oj(d.a,a,b);return c}
function ex(a){return oj(this.a,this.b++,a),true}
function fx(a){return cx(this,a,0)!=-1}
function gx(){return this.b}
function Cw(){}
_=Cw.prototype=new sv();_.k=ex;_.l=fx;_.B=gx;_.tI=48;_.a=null;_.b=0;function kx(a){cv(a);return a}
function mx(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function jx(){}
_=jx.prototype=new gu();_.tI=49;function ox(a){a.a=kx(new jx());return a}
function px(c,a){var b;b=nv(c.a,a,c);return b==null}
function tx(b){var a;return a=nv(this.a,b,this),a==null}
function ux(a){return ev(this.a,a)}
function vx(){var a;return a=ju(new iu(),vw(this.a).b.a),fw(new ew(),a)}
function wx(){return this.a.d}
function nx(){}
_=nx.prototype=new yw();_.k=tx;_.l=ux;_.u=vx;_.B=wx;_.tI=50;_.a=null;function Bx(b,a,c){b.a=a;b.b=c;return b}
function Dx(){return this.a}
function Ex(){return this.b}
function ay(b){var a;a=this.b;this.b=b;return a}
function Ax(){}
_=Ax.prototype=new qw();_.r=Dx;_.s=Ex;_.A=ay;_.tI=51;_.a=null;_.b=null;function cy(){}
_=cy.prototype=new et();_.tI=52;function iy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function vr(){!!$stats&&$stats({moduleName:$moduleName,subSystem:bb,evtGroup:cb,millis:(new Date()).getTime(),type:db,className:eb});cr(Eq(new Cq()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{vr()}catch(a){b(d)}else{vr()}}
function jy(){}
var fk=Er(fb,gb),dk=Er(hb,jb),ek=Er(fb,kb);$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (gwtstocktabledemo) gwtstocktabledemo.onScriptLoad(gwtOnLoad);})();