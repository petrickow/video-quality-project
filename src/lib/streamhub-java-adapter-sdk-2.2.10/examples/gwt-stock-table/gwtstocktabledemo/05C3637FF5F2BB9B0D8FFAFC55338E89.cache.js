(function(){var $gwt_version = "1.6.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var bd='',Fc=' ',z=' (',C='"',ie='http://localhost:7979/streamhub/',r="'; please report this bug to the GWT team",A=')',fd=', Row size: ',ab=', Size: ',je='-',vd='0',t='0.0 (0.00%)',E=':',zd='BA',Ad='BAC',Bd='C',kd='Cannot create a column with a negative index: ',ld='Cannot create a row with a negative index: ',de='Change',be='Company',yc='DOMMouseScroll',B='For input string: "',F='Index: ',Cd='KO',ce='Last Price',x='LastPrice',Dd='MCD',Bc='MouseEvents',kb='Object;',y='PercentChange',ed='Row index: ',gb='String;',ae='Symbol',q="Unexpected typeof result '",Ed='WMT',jb='Widget;',hb='[Lcom.google.gwt.user.client.ui.',fb='[Ljava.lang.',cc='\\"',dc='\\\\',s='\\b',mb='\\f',ib='\\n',nb='\\r',D='\\t',sb='\\u0000',Db='\\u0001',ic='\\u0002',tc='\\u0003',Ec='\\u0004',jd='\\u0005',ud='\\u0006',Fd='\\u0007',lb='\\u000B',ob='\\u000E',pb='\\u000F',qb='\\u0010',rb='\\u0011',tb='\\u0012',ub='\\u0013',vb='\\u0014',wb='\\u0015',xb='\\u0016',yb='\\u0017',zb='\\u0018',Ab='\\u0019',Bb='\\u001A',Cb='\\u001B',Eb='\\u001C',Fb='\\u001D',ac='\\u001E',bc='\\u001F',Cc='__uiObjectID',xd='align',v='black',ec='blur',rd='bottom',wd='cellPadding',td='cellSpacing',pd='center',fc='change',Dc='className',gc='click',od='col',nd='colgroup',eb='com.streamhub.client.GWTStockTableDemo',zc='contextmenu',hc='dblclick',wc='error',jc='focus',u='green',Ac='html',kc='keydown',lc='keypress',mc='keyup',ad='left',nc='load',oc='losecapture',he='mainPanel',sd='middle',cb='moduleStartup',pc='mousedown',qc='mousemove',rc='mouseout',sc='mouseover',uc='mouseup',xc='mousewheel',db='onModuleLoadStart',dd='position',w='red',qd='right',vc='scroll',bb='startup',ee='stockTable',fe='stockTableHeader',ge='stockTableNumeric',hd='table',id='tbody',md='td',cd='top',gd='tr',yd='verticalAlign';var _;function ft(a){return this===(a==null?null:a)}
function gt(){return this.$H||(this.$H=++ze)}
function dt(){}
_=dt.prototype={};_.eQ=ft;_.hC=gt;_.tM=my;_.tI=1;function re(b,a){return b.tM==my||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function te(a){return a.tM==my||a.tI==2?a.hC():a.$H||(a.$H=++ze)}
function xe(a){return a.$H||(a.$H=++ze)}
var ze=0;function gf(){gf=my;Ee();new Ce()}
function kf(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function lf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Ae(){}
_=Ae.prototype=new dt();_.tI=0;function ef(){ef=my;gf()}
function df(){}
_=df.prototype=new Ae();_.tI=0;function bf(){bf=my;ef()}
function cf(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Be(){}
_=Be.prototype=new df();_.tI=0;function Ee(){Ee=my;bf()}
function Fe(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild(a.ownerDocument.createTextNode(b))}}
function Ce(){}
_=Ce.prototype=new Be();_.tI=0;function rg(){}
_=rg.prototype=new dt();_.tI=0;_.a=false;_.b=null;function ig(a){tp()}
function jg(b){var a;if(hg){a=new fg();mh(b,a)}}
function kg(){return hg}
function fg(){}
_=fg.prototype=new rg();_.m=ig;_.q=kg;_.tI=0;var hg=null;function og(){}
_=og.prototype=new dt();_.tI=0;function tg(a){a.a=++wg;return a}
function vg(){return this.a}
function sg(){}
_=sg.prototype=new dt();_.hC=vg;_.tI=0;_.a=0;var wg=0;function ih(b,c,a){if(b.b>0){kh(b,Bg(new Ag(),b,c,a))}else{bh(b.d,c,a)}return new og()}
function kh(b,a){if(!b.a){b.a=ax(new Fw())}cx(b.a,a)}
function mh(c,a){var b;if(a.a){a.a=false;a.b=null}b=a.b;a.b=c.e;try{++c.b;dh(c.d,a,c.c)}finally{--c.b;if(c.b==0){nh(c)}}if(b==null){a.a=true;a.b=null}else{a.b=b}}
function nh(c){var a,b;if(c.a){try{for(b=yv(new wv(),c.a);b.a<b.b.b;){a=xj(Bv(b),2);bh(a.a.d,a.c,a.b)}}finally{c.a=null}}}
function zg(){}
_=zg.prototype=new dt();_.tI=0;_.a=null;_.b=0;_.c=false;_.d=null;_.e=null;function Bg(b,a,d,c){b.a=a;b.c=d;b.b=c;return b}
function Ag(){}
_=Ag.prototype=new dt();_.tI=7;_.a=null;_.b=null;_.c=null;function ah(a){a.a=nx(new mx());return a}
function bh(c,d,a){var b;b=xj(kv(c.a,d),3);if(!b){b=ax(new Fw());qv(c.a,d,b)}rj(b.a,b.b++,a)}
function dh(i,e,h){var d,f,g,j,a,b,c;j=e.q();d=(a=xj(kv(i.a,j),3),!a?0:a.b);if(h){for(g=d-1;g>=0;--g){f=(b=xj(kv(i.a,j),3),xj((aw(g,b.b),b.a[g]),12));e.m(f)}}else{for(g=0;g<d;++g){f=(c=xj(kv(i.a,j),3),xj((aw(g,c.b),c.a[g]),12));e.m(f)}}}
function Eg(){}
_=Eg.prototype=new dt();_.tI=0;function bj(){}
_=bj.prototype=new dt();_.tI=0;function rh(b,a){b.a=a;return b}
function th(a){if(!(a!=null&&wj(a.tI,13))){return false}return this.a==xj(a,13).a}
function uh(){return xe(this.a)}
function qh(){}
_=qh.prototype=new bj();_.eQ=th;_.hC=uh;_.tI=8;_.a=null;function yh(){yh=my;zh=(yh(),new wh());Ah=new wh()}
function Bh(a){yh();if(a){return Ah}else{return zh}}
function wh(){}
_=wh.prototype=new bj();_.tI=0;var zh,Ah;function Ft(){}
_=Ft.prototype=new dt();_.tI=3;function ms(){}
_=ms.prototype=new Ft();_.tI=4;function ht(){}
_=ht.prototype=new ms();_.tI=5;function Dh(b,a){return b}
function Ch(){}
_=Ch.prototype=new ht();_.tI=9;function bi(){bi=my;di=(bi(),new Fh())}
function Fh(){}
_=Fh.prototype=new bj();_.tI=0;var di;function fi(a,b){a.a=b;return a}
function hi(a){if(!(a!=null&&wj(a.tI,14))){return false}return this.a==xj(a,14).a}
function ii(){return ~~Math.max(Math.min(is(new hs(),this.a).a,2147483647),-2147483648)}
function ei(){}
_=ei.prototype=new bj();_.eQ=hi;_.hC=ii;_.tI=10;_.a=0;function ki(b,a){b.a=a;return b}
function ni(d,c){var b,a;if(c==null){throw new ys()}return b=d.a[c],a=(si(),Ai)[typeof b],a?a(b):zi(typeof b)}
function oi(a){if(!(a!=null&&wj(a.tI,15))){return false}return this.a==xj(a,15).a}
function pi(){return xe(this.a)}
function ji(){}
_=ji.prototype=new bj();_.eQ=oi;_.hC=pi;_.tI=11;_.a=null;function si(){si=my;Ai={'boolean':ti,number:ui,string:wi,object:vi,'function':vi,undefined:xi}}
function ti(a){return Bh(a)}
function ui(a){return fi(new ei(),a)}
function vi(b){if(!b){return bi(),di}var c=b.valueOf?b.valueOf():b;if(c!==b){var a=Ai[typeof c];return a?a(c):zi(typeof c)}else if(b instanceof Array||b instanceof $wnd.Array){return rh(new qh(),b)}else{return ki(new ji(),b)}}
function wi(a){return Ci(new Bi(),a)}
function xi(){return null}
function zi(a){si();throw Dh(new Ch(),q+a+r)}
var Ai;function Di(){var a;Di=my;a=[sb,Db,ic,tc,Ec,jd,ud,Fd,s,D,ib,lb,mb,nb,ob,pb,qb,rb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Eb,Fb,ac,bc];a[34]=cc;a[92]=dc}
function Ci(a,b){Di();if(b==null){throw new ys()}a.a=b;return a}
function Ei(a){if(!(a!=null&&wj(a.tI,16))){return false}return vt(this.a,xj(a,16).a)}
function Fi(){return rt(this.a)}
function Bi(){}
_=Bi.prototype=new bj();_.eQ=Ei;_.hC=Fi;_.tI=12;_.a=null;function oj(d,c){var a=new Array(c);if(d>0){var e=[null,0,false,[0,0]][d];for(var b=0;b<c;++b){a[b]=e}}return a}
function pj(a,f,c,b,e){var d;d=oj(e,b);fj();kj(d,gj,hj);d.tI=f;d.qI=c;return d}
function qj(b,d,c,a){fj();kj(a,gj,hj);a.tI=d;a.qI=c;return a}
function rj(a,b,c){if(c!=null){if(a.qI>0&&!vj(c.tI,a.qI)){throw new Ar()}if(a.qI<0&&(c.tM==my||c.tI==2)){throw new Ar()}}return a[b]=c}
function dj(){}
_=dj.prototype=new dt();_.tI=0;_.length=0;_.qI=0;function fj(){fj=my;gj=[];hj=[];ij(new dj(),gj,hj)}
function ij(e,a,b){var c=0,f;for(var d in e){if(f=e[d]){a[c]=d;b[c]=f;++c}}}
function kj(a,c,d){fj();for(var e=0,b=c.length;e<b;++e){a[c[e]]=d[e]}}
var gj,hj;function wj(b,a){return b&&!!dk[b][a]}
function vj(b,a){return b&&dk[b][a]}
function xj(b,a){if(b!=null&&!vj(b.tI,a)){throw new Er()}return b}
var dk=[{},{},{1:1,8:1,9:1,10:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{2:1},{13:1},{8:1,17:1},{14:1},{15:1},{16:1},{4:1},{6:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1,18:1},{12:1},{4:1,5:1,6:1,7:1,18:1},{4:1,5:1,6:1,7:1},{19:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,10:1,20:1},{8:1,17:1},{8:1},{8:1,10:1,21:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{9:1},{8:1,17:1},{24:1},{24:1},{22:1},{22:1},{22:1},{24:1},{3:1,8:1},{8:1,23:1},{8:1,24:1},{22:1},{8:1,17:1},{11:1}];function zk(b,a,c){var d;if(a==Dk){if(gm((gf(),b).type)==8192){Dk=null}}d=yk;yk=b;try{c.w(b)}finally{yk=d}}
var yk=null,Dk=null;function ll(a){tl();return ml(hg?hg:(hg=tg(new sg())),a)}
function ml(b,a){return ih(rl(),b,a)}
function ol(){if(nl){jg(rl())}}
function pl(){var a;if(nl){a=(dl(),new bl());ql(a);return null}return null}
function ql(a){if(sl){mh(sl,a)}}
function rl(){if(!sl){sl=il(new hl())}return sl}
function tl(){if(!nl){wm();nl=true}}
var nl=false,sl=null;function dl(){dl=my;el=tg(new sg())}
function fl(a){null.D()}
function gl(){return el}
function bl(){}
_=bl.prototype=new rg();_.m=fl;_.q=gl;_.tI=0;var el;function il(a){a.d=ah(new Eg());a.e=null;a.c=false;return a}
function hl(){}
_=hl.prototype=new zg();_.tI=13;function gm(a){switch(a){case ec:return 4096;case fc:return 1024;case gc:return 1;case hc:return 2;case jc:return 2048;case kc:return 128;case lc:return 256;case mc:return 512;case nc:return 32768;case oc:return 8192;case pc:return 4;case qc:return 64;case rc:return 32;case sc:return 16;case uc:return 8;case vc:return 16384;case wc:return 65536;case xc:return 131072;case yc:return 131072;case zc:return 262144;}}
function im(){if(!km){El();zl();km=true}}
function lm(a){return !(a!=null&&(a.tM!=my&&a.tI!=2))&&(a!=null&&wj(a.tI,5))}
var km=false;function El(){dm=function(b){if(cm(b)){var a=bm;if(a&&a.__listener){if(lm(a.__listener)){zk(b,a,a.__listener);b.stopPropagation()}}}};cm=function(a){return true};em=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(lm(c)){zk(b,a,c)}}};$wnd.addEventListener(gc,dm,true);$wnd.addEventListener(hc,dm,true);$wnd.addEventListener(pc,dm,true);$wnd.addEventListener(uc,dm,true);$wnd.addEventListener(qc,dm,true);$wnd.addEventListener(sc,dm,true);$wnd.addEventListener(rc,dm,true);$wnd.addEventListener(xc,dm,true);$wnd.addEventListener(kc,cm,true);$wnd.addEventListener(mc,cm,true);$wnd.addEventListener(lc,cm,true)}
function Fl(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function am(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?em:null;if(b&2)c.ondblclick=a&2?em:null;if(b&4)c.onmousedown=a&4?em:null;if(b&8)c.onmouseup=a&8?em:null;if(b&16)c.onmouseover=a&16?em:null;if(b&32)c.onmouseout=a&32?em:null;if(b&64)c.onmousemove=a&64?em:null;if(b&128)c.onkeydown=a&128?em:null;if(b&256)c.onkeypress=a&256?em:null;if(b&512)c.onkeyup=a&512?em:null;if(b&1024)c.onchange=a&1024?em:null;if(b&2048)c.onfocus=a&2048?em:null;if(b&4096)c.onblur=a&4096?em:null;if(b&8192)c.onlosecapture=a&8192?em:null;if(b&16384)c.onscroll=a&16384?em:null;if(b&32768)c.onload=a&32768?em:null;if(b&65536)c.onerror=a&65536?em:null;if(b&131072)c.onmousewheel=a&131072?em:null;if(b&262144)c.oncontextmenu=a&262144?em:null}
var bm=null,cm=null,dm=null,em=null;function zl(){$wnd.addEventListener(rc,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(Ac==b.target.tagName.toLowerCase()){var c=$doc.createEvent(Bc);c.initMouseEvent(uc,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(yc,dm,true)}
function Bl(b,a){im();am(b,a);Al(b,a)}
function Al(b,a){if(a&131072){b.addEventListener(yc,em,false)}}
function om(a){a.a=ax(new Fw());return a}
function qm(d,b){var c,a;c=(a=b[Cc],a==null?-1:a);if(c<0){return null}return xj(ex(d.a,c),6)}
function rm(d,b){var c,a;c=(a=b[Cc],a==null?-1:a);b[Cc]=null;gx(d.a,c,null)}
function mm(){}
_=mm.prototype=new dt();_.tI=0;function wm(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=pl()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{ol()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Dp(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new ht()}j=Bt(j);if(j.length==0){throw new os()}i=c[Dc]==null?null:String(c[Dc]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Fc}c[Dc]=i+j}}else{if(e!=-1){b=Bt(i.substr(0,e-0));d=Bt(zt(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Fc+d}c[Dc]=h}}}
function zp(){}
_=zp.prototype=new dt();_.tI=14;_.j=null;function vq(b){var a;if(b.g){throw new rs()}b.g=true;b.j.__listener=b;a=b.h;b.h=-1;if(a>0){zq(b,a)}b.n();b.x()}
function wq(a){if(!a.g){throw new rs()}try{a.y()}finally{a.o();a.j.__listener=null;a.g=false}}
function xq(a){if(!a.i){sp();if(hv(xp.a,a)){wq(a);tv(xp.a,a)!=null}}else if(a.i){a.i.z(a)}else if(a.i){throw new rs()}}
function yq(c,b){var a;a=c.i;if(!b){if(!!a&&a.g){wq(c)}c.i=null}else{if(a){throw new rs()}c.i=b;if(b.g){vq(c)}}}
function zq(b,a){if(b.h==-1){Bl(b.j,a|(b.j.__eventBits||0))}else{b.h|=a}}
function Aq(){}
function Bq(){}
function Cq(a){var b;switch(gm((gf(),a).type)){case 16:case 32:b=a.relatedTarget;if(!!b&&cf(this.j,b)){return}}}
function Dq(){}
function Eq(){}
function fq(){}
_=fq.prototype=new zp();_.n=Aq;_.o=Bq;_.w=Cq;_.x=Dq;_.y=Eq;_.tI=15;_.g=false;_.h=0;_.i=null;function hp(){var a,b;for(b=this.u();b.t();){a=xj(b.v(),7);vq(a)}}
function ip(){var a,b;for(b=this.u();b.t();){a=xj(b.v(),7);wq(a)}}
function jp(){}
function kp(){}
function fp(){}
_=fp.prototype=new fq();_.n=hp;_.o=ip;_.x=jp;_.y=kp;_.tI=16;function bn(c,a,b){xq(a);oq(c.e,a);b.appendChild(a.j);yq(a,c)}
function dn(b,c){var a;if(c.i!=b){return false}yq(c,null);a=c.j;lf((gf(),a)).removeChild(a);tq(b.e,c);return true}
function en(){return jq(new hq(),this.e)}
function fn(a){return dn(this,a)}
function Fm(){}
_=Fm.prototype=new fp();_.u=en;_.z=fn;_.tI=17;function ym(a,b){bn(a,b,a.j)}
function Am(a){a.style[ad]=bd;a.style[cd]=bd;a.style[dd]=bd}
function Bm(b){var a;a=dn(this,b);if(a){Am(b.j)}return a}
function xm(){}
_=xm.prototype=new Fm();_.z=Bm;_.tI=18;function Cm(){}
_=Cm.prototype=new Fm();_.tI=19;_.c=null;_.d=null;function ko(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw vs(new us(),ed+a+fd+b)}}
function po(b,a){var c;if(a!=b.a.rows.length){ko(b,a)}c=(gf(),$doc).createElement(gd);Fl(b.a,c,a);return a}
function qo(d,c,a){var b,e;b=kf((gf(),c));e=null;if(b){e=xj(qm(d.f,b),7)}if(e){ro(d,e);return true}else{if(a){c.innerHTML=bd}return false}}
function ro(b,c){var a;if(c.i!=b){return false}yq(c,null);a=c.j;lf((gf(),a)).removeChild(a);rm(b.f,a);return true}
function to(b,a){b.c=a;bo(b.c)}
function vo(f,c,a,e){var d,b;nn(f,c,a);d=(b=f.b.a.a.rows[c].cells[a],qo(f,b,e==null),b);if(e!=null){Fe((gf(),d),e)}}
function wo(){return tn(new rn(),this)}
function qn(){}
_=qn.prototype=new fp();_.u=wo;_.tI=20;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;function ln(a){a.f=om(new mm());a.e=(gf(),$doc).createElement(hd);a.a=$doc.createElement(id);a.e.appendChild(a.a);a.j=a.e;a.b=jn(new hn(),a);a.d=eo(new co(),a);to(a,Fn(new En(),a));return a}
function nn(e,d,b){var a,c;on(e,d);if(b<0){throw vs(new us(),kd+b)}a=(ko(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){pn(e.a,d,c)}}
function on(d,b){var a,c;if(b<0){throw vs(new us(),ld+b)}c=d.a.rows.length;for(a=c;a<=b;++a){po(d,a)}}
function pn(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(md);e.appendChild(a)}}
function gn(){}
_=gn.prototype=new qn();_.tI=21;function zn(e,b,a,c){var d;nn(e.a,b,a);d=e.a.a.rows[b].cells[a];Dp(d,c,true)}
function Dn(d,b,a,c){nn(d.a,b,a);d.a.a.rows[b].cells[a][Dc]=c}
function yn(){}
_=yn.prototype=new dt();_.tI=0;_.a=null;function jn(b,a){b.a=a;return b}
function hn(){}
_=hn.prototype=new yn();_.tI=0;function tn(b,a){b.b=a;b.c=b.b.f.a;vn(b);return b}
function vn(a){while(++a.a<a.c.b){if(ex(a.c,a.a)!=null){return}}}
function wn(){return this.a<this.c.b}
function xn(){var a;if(this.a>=this.c.b){throw new fy()}a=xj(ex(this.c,this.a),7);vn(this);return a}
function rn(){}
_=rn.prototype=new dt();_.t=wn;_.v=xn;_.tI=0;_.a=-1;_.b=null;function Fn(b,a){b.b=a;return b}
function bo(a){if(!a.a){a.a=(gf(),$doc).createElement(nd);Fl(a.b.e,a.a,0);a.a.appendChild($doc.createElement(od))}}
function En(){}
_=En.prototype=new dt();_.tI=0;_.a=null;_.b=null;function eo(b,a){b.a=a;return b}
function fo(c,a,b){Dp((on(c.a,a),c.a.a.rows[a]),b,true)}
function co(){}
_=co.prototype=new dt();_.tI=0;_.a=null;function Bo(){Bo=my;zo(new yo(),pd);Do=zo(new yo(),ad);zo(new yo(),qd);Co=Do}
var Co,Do;function zo(b,a){b.a=a;return b}
function yo(){}
_=yo.prototype=new dt();_.tI=0;_.a=null;function bp(){bp=my;Fo(new Eo(),rd);Fo(new Eo(),sd);cp=Fo(new Eo(),cd)}
var cp;function Fo(a,b){a.a=b;return a}
function Eo(){}
_=Eo.prototype=new dt();_.tI=0;_.a=null;function sp(){sp=my;wp=nx(new mx());xp=rx(new qx())}
function rp(b,a){sp();b.e=nq(new gq());b.j=a;vq(b);return b}
function tp(){var b,a;sp();var c,d;for(d=(b=mu(new lu(),yw(xp.a).b.a),iw(new hw(),b));Av(d.a.a);){c=xj((a=xj(Bv(d.a.a),22),a.r()),7);if(c.g){wq(c)}}fv(xp.a);fv(wp)}
function vp(b){sp();var a,c;c=xj(kv(wp,b),18);a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(c){if(!a||c.j==a){return c}}if(wp.d==0){ll(new mp())}if(!a){c=pp(new op())}else{c=rp(new lp(),a)}qv(wp,b,c);sx(xp,c);return c}
function lp(){}
_=lp.prototype=new xm();_.tI=22;var wp,xp;function mp(){}
_=mp.prototype=new dt();_.tI=23;function qp(){qp=my;sp()}
function pp(a){qp();rp(a,$doc.body);return a}
function op(){}
_=op.prototype=new lp();_.tI=24;function aq(a){a.e=nq(new gq());a.d=(gf(),$doc).createElement(hd);a.c=$doc.createElement(id);a.d.appendChild(a.c);a.j=a.d;a.a=(Bo(),Co);a.b=(bp(),cp);a.d[td]=vd;a.d[wd]=vd;return a}
function bq(c,e){var b,d,a;d=(gf(),$doc).createElement(gd);b=(a=$doc.createElement(md),(a[xd]=c.a.a,undefined),(a.style[yd]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);xq(e);oq(c.e,e);b.appendChild(e.j);yq(e,c)}
function eq(c){var a,b;b=lf((gf(),c.j));a=dn(this,c);if(a){this.c.removeChild(lf(b))}return a}
function Ep(){}
_=Ep.prototype=new Cm();_.z=eq;_.tI=25;function nq(a){a.a=pj(gk,0,7,4,0);return a}
function oq(a,b){rq(a,b,a.b)}
function qq(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function rq(d,e,a){var b,c;if(a<0||a>d.b){throw new us()}if(d.b==d.a.length){c=pj(gk,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){rj(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){rj(d.a,b,d.a[b-1])}rj(d.a,a,e)}
function sq(c,b){var a;if(b<0||b>=c.b){throw new us()}--c.b;for(a=b;a<c.b;++a){rj(c.a,a,c.a[a+1])}rj(c.a,c.b,null)}
function tq(b,c){var a;a=qq(b,c);if(a==-1){throw new fy()}sq(b,a)}
function gq(){}
_=gq.prototype=new dt();_.tI=0;_.a=null;_.b=0;function jq(b,a){b.b=a;return b}
function lq(){return this.a<this.b.b-1}
function mq(){if(this.a>=this.b.b){throw new fy()}return this.b.a[++this.a]}
function hq(){}
_=hq.prototype=new dt();_.t=lq;_.v=mq;_.tI=0;_.a=-1;_.b=null;function br(a){a.b=aq(new Ep());a.c=qj(ik,0,1,[zd,Ad,Bd,Cd,Dd,Ed]);return a}
function cr(f){var a,b,c,d,e;for(c=f.c,d=0,e=c.length;d<e;++d){b=c[d];a=hr(new gr(),b);ir(a,f.a);cx((or(),pr),a);$wnd.gwtStreamHub.subscribe(b,$wnd.gwtStreamHubUpdate)}}
function fr(b){var a;b.a=(a=ln(new gn()),vo(a,0,0,ae),vo(a,0,1,be),vo(a,0,2,ce),vo(a,0,3,de),Dp(a.j,ee,true),fo(a.d,0,fe),zn(a.b,0,2,ge),zn(a.b,0,3,ge),a.e[wd]=6,a);bq(b.b,b.a);Dp(b.b.j,he,true);ym(vp(ee),b.b);or();$wnd.gwtStreamHub=new $wnd.StreamHub();new mr();$wnd.gwtStreamHubUpdate=qr;$wnd.gwtStreamHub.connect(ie);cr(b)}
function Fq(){}
_=Fq.prototype=new dt();_.tI=0;_.a=null;function hr(b,a){b.e=a;b.a=je;b.d=0;return b}
function ir(b,a){b.b=a;b.c=a.a.rows.length;vo(a,b.c,0,b.e);vo(a,b.c,1,b.a);vo(a,b.c,2,bd+b.d);vo(a,b.c,3,t);zn(a.b,b.c,2,ge);zn(a.b,b.c,3,ge)}
function kr(b,a){if(a.a>0){Dn(b.b.b,b.c,3,u)}else if(a.a==0){Dn(b.b.b,b.c,3,v)}else{Dn(b.b.b,b.c,3,w)}}
function lr(f,g,h){var a,b,c,d,e;if(vt(f.e,g)){d=xj(ni(h,x),16).a;c=xj(ni(h,be),16).a;e=xj(ni(h,y),16).a;a=xj(ni(h,de),16).a;b=is(new hs(),at(a));vo(f.b,f.c,1,c);vo(f.b,f.c,2,d);vo(f.b,f.c,3,a+z+e+A);kr(f,b)}}
function gr(){}
_=gr.prototype=new dt();_.tI=26;_.a=null;_.b=null;_.c=0;_.d=0;_.e=null;function or(){or=my;pr=ax(new Fw())}
function qr(d,e){or();var a,b,c;a=ki(new ji(),e);for(c=yv(new wv(),pr);c.a<c.b.b;){b=xj(Bv(c),19);lr(b,d,a)}}
function mr(){}
_=mr.prototype=new dt();_.tI=0;var pr;function Ar(){}
_=Ar.prototype=new ht();_.tI=28;function bs(c,a){var b;b=new Dr();return b}
function Dr(){}
_=Dr.prototype=new dt();_.tI=0;function Er(){}
_=Er.prototype=new ht();_.tI=32;function at(a){var b;b=bt(a);if(isNaN(b)){throw Cs(new Bs(),B+a+C)}return b}
function bt(b){var a=ct;if(!a){a=ct=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i}if(a.test(b)){return parseFloat(b)}else{return Number.NaN}}
function As(){}
_=As.prototype=new dt();_.tI=33;var ct=null;function is(a,b){a.a=b;return a}
function ks(a){return a!=null&&wj(a.tI,21)&&xj(a,21).a==this.a}
function ls(){return ~~Math.max(Math.min(this.a,2147483647),-2147483648)}
function hs(){}
_=hs.prototype=new As();_.eQ=ks;_.hC=ls;_.tI=34;_.a=0;function os(){}
_=os.prototype=new ht();_.tI=35;function rs(){}
_=rs.prototype=new ht();_.tI=36;function vs(b,a){return b}
function us(){}
_=us.prototype=new ht();_.tI=37;function ys(){}
_=ys.prototype=new ht();_.tI=38;function Cs(b,a){return b}
function Bs(){}
_=Bs.prototype=new os();_.tI=39;function vt(b,a){if(!(a!=null&&wj(a.tI,1))){return false}return String(b)==a}
function zt(b,a){return b.substr(a,b.length-a)}
function Bt(c){if(c.length==0||c[0]>Fc&&c[c.length-1]>Fc){return c}var a=c.replace(/^(\s*)/,bd);var b=a.replace(/\s*$/,bd);return b}
function Dt(a){return vt(this,a)}
function Et(){return rt(this)}
_=String.prototype;_.eQ=Dt;_.hC=Et;_.tI=2;function mt(){mt=my;nt={};qt={}}
function ot(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function rt(c){mt();var a=E+c;var b=qt[a];if(b!=null){return b}b=nt[a];if(b==null){b=ot(c)}st();return qt[a]=b}
function st(){if(pt==256){nt=qt;qt={};pt=0}++pt}
var nt,pt=0,qt;function bu(){}
_=bu.prototype=new ht();_.tI=41;function fu(a,b){var c;while(a.t()){c=a.v();if(b==null?c==null:re(b,c)){return a}}return null}
function hu(a){throw new bu()}
function iu(b){var a;a=fu(this.u(),b);return !!a}
function eu(){}
_=eu.prototype=new dt();_.k=hu;_.l=iu;_.tI=0;function yw(b){var a;a=qu(new ku(),b);return nw(new gw(),b,a)}
function zw(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&wj(c.tI,23))){return false}e=xj(c,23);if(xj(this,23).d!=e.d){return false}for(b=mu(new lu(),qu(new ku(),e).a);Av(b.a);){a=xj(Bv(b.a),22);d=a.r();f=a.s();if(!(d==null?xj(this,23).c:d!=null&&wj(d.tI,1)?mv(xj(this,23),xj(d,1)):lv(xj(this,23),d,~~te(d)))){return false}if(!ly(f,d==null?xj(this,23).b:d!=null&&wj(d.tI,1)?xj(this,23).e[E+xj(d,1)]:iv(xj(this,23),d,~~te(d)))){return false}}return true}
function Aw(){var a,b,c;c=0;for(b=mu(new lu(),qu(new ku(),xj(this,23)).a);Av(b.a);){a=xj(Bv(b.a),22);c+=a.hC();c=~~c}return c}
function fw(){}
_=fw.prototype=new dt();_.eQ=zw;_.hC=Aw;_.tI=0;function dv(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function ev(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=bv(e,c.substring(1));a.k(b)}}}
function fv(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function hv(b,a){return a==null?b.c:a!=null&&wj(a.tI,1)?mv(b,xj(a,1)):lv(b,a,~~te(a))}
function kv(b,a){return a==null?b.b:a!=null&&wj(a.tI,1)?b.e[E+xj(a,1)]:iv(b,a,~~te(a))}
function iv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return c.s()}}}return null}
function lv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return true}}}return false}
function mv(b,a){return E+a in b.e}
function qv(b,a,c){return a==null?ov(b,c):a!=null&&wj(a.tI,1)?pv(b,xj(a,1),c):nv(b,a,c,~~te(a))}
function nv(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(i.p(g,d)){var h=c.s();c.A(j);return h}}}else{a=i.a[e]=[]}var c=Ex(new Dx(),g,j);a.push(c);++i.d;return null}
function ov(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function pv(d,a,e){var b,c=d.e;a=E+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function tv(b,a){return !a?sv(b):rv(b,a,~~(a.$H||(a.$H=++ze)))}
function rv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.s()}}}return null}
function sv(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function uv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function ju(){}
_=ju.prototype=new fw();_.p=uv;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Dw(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&wj(b.tI,24))){return false}c=xj(b,24);if(c.B()!=this.B()){return false}for(a=c.u();a.t();){d=a.v();if(!this.l(d)){return false}}return true}
function Ew(){var a,b,c;a=0;for(b=this.u();b.t();){c=b.v();if(c!=null){a+=te(c);a=~~a}}return a}
function Bw(){}
_=Bw.prototype=new eu();_.eQ=Dw;_.hC=Ew;_.tI=42;function qu(b,a){b.a=a;return b}
function su(d,c){var a,b,e;if(c!=null&&wj(c.tI,22)){a=xj(c,22);b=a.r();if(hv(d.a,b)){e=kv(d.a,b);return px(a.s(),e)}}return false}
function tu(a){return su(this,a)}
function uu(){return mu(new lu(),this.a)}
function vu(){return this.a.d}
function ku(){}
_=ku.prototype=new Bw();_.l=tu;_.u=uu;_.B=vu;_.tI=43;_.a=null;function mu(c,b){var a;c.b=b;a=ax(new Fw());if(c.b.c){cx(a,xu(new wu(),c.b))}ev(c.b,a);dv(c.b,a);c.a=yv(new wv(),a);return c}
function ou(){return Av(this.a)}
function pu(){return xj(Bv(this.a),22)}
function lu(){}
_=lu.prototype=new dt();_.t=ou;_.v=pu;_.tI=0;_.a=null;_.b=null;function vw(b){var a;if(b!=null&&wj(b.tI,22)){a=xj(b,22);if(ly(this.r(),a.r())&&ly(this.s(),a.s())){return true}}return false}
function ww(){var a,b;a=0;b=0;if(this.r()!=null){a=te(this.r())}if(this.s()!=null){b=te(this.s())}return a^b}
function tw(){}
_=tw.prototype=new dt();_.eQ=vw;_.hC=ww;_.tI=44;function xu(b,a){b.a=a;return b}
function zu(){return null}
function Au(){return this.a.b}
function Bu(a){return ov(this.a,a)}
function wu(){}
_=wu.prototype=new tw();_.r=zu;_.s=Au;_.A=Bu;_.tI=45;_.a=null;function Du(c,a,b){c.b=b;c.a=a;return c}
function Fu(){return this.a}
function av(){return this.b.e[E+this.a]}
function bv(b,a){return Du(new Cu(),a,b)}
function cv(a){return pv(this.b,this.a,a)}
function Cu(){}
_=Cu.prototype=new tw();_.r=Fu;_.s=av;_.A=cv;_.tI=46;_.a=null;_.b=null;function Fv(a){bx(this,this.B(),a);return true}
function aw(a,b){if(a<0||a>=b){dw(a,b)}}
function bw(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&wj(e.tI,3))){return false}f=xj(e,3);if(this.B()!=f.b){return false}c=yv(new wv(),xj(this,3));d=yv(new wv(),f);while(c.a<c.b.b){a=Bv(c);b=Bv(d);if(!(a==null?b==null:re(a,b))){return false}}return true}
function cw(){var a,b,c;b=1;a=yv(new wv(),xj(this,3));while(a.a<a.b.b){c=Bv(a);b=31*b+(c==null?0:te(c));b=~~b}return b}
function dw(a,b){throw vs(new us(),F+a+ab+b)}
function ew(){return yv(new wv(),xj(this,3))}
function vv(){}
_=vv.prototype=new eu();_.k=Fv;_.eQ=bw;_.hC=cw;_.u=ew;_.tI=0;function yv(b,a){b.b=a;return b}
function Av(a){return a.a<a.b.b}
function Bv(a){if(a.a>=a.b.b){throw new fy()}return ex(a.b,a.a++)}
function Cv(){return this.a<this.b.b}
function Dv(){return Bv(this)}
function wv(){}
_=wv.prototype=new dt();_.t=Cv;_.v=Dv;_.tI=0;_.a=0;_.b=null;function nw(b,a,c){b.a=a;b.b=c;return b}
function qw(a){return hv(this.a,a)}
function rw(){var a;return a=mu(new lu(),this.b.a),iw(new hw(),a)}
function sw(){return this.b.a.d}
function gw(){}
_=gw.prototype=new Bw();_.l=qw;_.u=rw;_.B=sw;_.tI=47;_.a=null;_.b=null;function iw(a,b){a.a=b;return a}
function lw(){return Av(this.a.a)}
function mw(){var a;return a=xj(Bv(this.a.a),22),a.r()}
function hw(){}
_=hw.prototype=new dt();_.t=lw;_.v=mw;_.tI=0;_.a=null;function ax(a){a.a=pj(hk,0,0,0,0);a.b=0;return a}
function cx(b,a){rj(b.a,b.b++,a);return true}
function bx(c,a,b){if(a<0||a>c.b){dw(a,c.b)}c.a.splice(a,0,b);++c.b}
function ex(b,a){aw(a,b.b);return b.a[a]}
function fx(c,b,a){for(;a<c.b;++a){if(ly(b,c.a[a])){return a}}return -1}
function gx(d,a,b){var c;c=(aw(a,d.b),d.a[a]);rj(d.a,a,b);return c}
function hx(a){return rj(this.a,this.b++,a),true}
function ix(a){return fx(this,a,0)!=-1}
function jx(){return this.b}
function Fw(){}
_=Fw.prototype=new vv();_.k=hx;_.l=ix;_.B=jx;_.tI=48;_.a=null;_.b=0;function nx(a){fv(a);return a}
function px(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function mx(){}
_=mx.prototype=new ju();_.tI=49;function rx(a){a.a=nx(new mx());return a}
function sx(c,a){var b;b=qv(c.a,a,c);return b==null}
function wx(b){var a;return a=qv(this.a,b,this),a==null}
function xx(a){return hv(this.a,a)}
function yx(){var a;return a=mu(new lu(),yw(this.a).b.a),iw(new hw(),a)}
function zx(){return this.a.d}
function qx(){}
_=qx.prototype=new Bw();_.k=wx;_.l=xx;_.u=yx;_.B=zx;_.tI=50;_.a=null;function Ex(b,a,c){b.a=a;b.b=c;return b}
function ay(){return this.a}
function by(){return this.b}
function dy(b){var a;a=this.b;this.b=b;return a}
function Dx(){}
_=Dx.prototype=new tw();_.r=ay;_.s=by;_.A=dy;_.tI=51;_.a=null;_.b=null;function fy(){}
_=fy.prototype=new ht();_.tI=52;function ly(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function yr(){!!$stats&&$stats({moduleName:$moduleName,subSystem:bb,evtGroup:cb,millis:(new Date()).getTime(),type:db,className:eb});fr(br(new Fq()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{yr()}catch(a){b(d)}else{yr()}}
function my(){}
var ik=bs(fb,gb),gk=bs(hb,jb),hk=bs(fb,kb);$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (gwtstocktabledemo) gwtstocktabledemo.onScriptLoad(gwtOnLoad);})();