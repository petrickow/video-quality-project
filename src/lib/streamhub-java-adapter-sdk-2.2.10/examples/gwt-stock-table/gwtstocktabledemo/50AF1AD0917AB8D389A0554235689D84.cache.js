(function(){var $gwt_version = "1.6.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var Dc='',Ac=' ',x=' (',A='"',ee='http://localhost:7979/streamhub/',r="'; please report this bug to the GWT team",y=')',bd=', Row size: ',E=', Size: ',fe='-',qd='0',ge='0.0 (0.00%)',B=':',vd='BA',wd='BAC',xd='C',fd='Cannot create a column with a negative index: ',gd='Cannot create a row with a negative index: ',Fd='Change',Cd='Company',wc='DOMMouseScroll',z='For input string: "',C='Index: ',yd='KO',Ed='Last Price',v='LastPrice',zd='MCD',hb='Object;',w='PercentChange',ad='Row index: ',eb='String;',Bd='Symbol',q="Unexpected typeof result '",Ad='WMT',gb='Widget;',fb='[Lcom.google.gwt.user.client.ui.',db='[Ljava.lang.',ac='\\"',bc='\\\\',s='\\b',kb='\\f',ib='\\n',lb='\\r',D='\\t',qb='\\u0000',Bb='\\u0001',gc='\\u0002',rc='\\u0003',Cc='\\u0004',hd='\\u0005',sd='\\u0006',Dd='\\u0007',jb='\\u000B',mb='\\u000E',nb='\\u000F',ob='\\u0010',pb='\\u0011',rb='\\u0012',sb='\\u0013',tb='\\u0014',ub='\\u0015',vb='\\u0016',wb='\\u0017',xb='\\u0018',yb='\\u0019',zb='\\u001A',Ab='\\u001B',Cb='\\u001C',Db='\\u001D',Eb='\\u001E',Fb='\\u001F',yc='__uiObjectID',td='align',t='black',cc='blur',nd='bottom',rd='cellPadding',pd='cellSpacing',ld='center',dc='change',zc='className',ec='click',kd='col',jd='colgroup',cb='com.streamhub.client.GWTStockTableDemo',xc='contextmenu',fc='dblclick',uc='error',hc='focus',he='green',ic='keydown',jc='keypress',kc='keyup',Bc='left',lc='load',mc='losecapture',de='mainPanel',od='middle',ab='moduleStartup',nc='mousedown',oc='mousemove',pc='mouseout',qc='mouseover',sc='mouseup',vc='mousewheel',bb='onModuleLoadStart',Fc='position',u='red',md='right',tc='scroll',F='startup',ae='stockTable',be='stockTableHeader',ce='stockTableNumeric',dd='table',ed='tbody',id='td',Ec='top',cd='tr',ud='verticalAlign';var _;function Cs(a){return this===(a==null?null:a)}
function Ds(){return this.$H||(this.$H=++xe)}
function As(){}
_=As.prototype={};_.eQ=Cs;_.hC=Ds;_.tM=dy;_.tI=1;function pe(b,a){return b.tM==dy||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function re(a){return a.tM==dy||a.tI==2?a.hC():a.$H||(a.$H=++xe)}
function ve(a){return a.$H||(a.$H=++xe)}
var xe=0;function af(){af=dy;Be();new ze()}
function df(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function ef(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ff(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild(a.ownerDocument.createTextNode(b))}}
function ye(){}
_=ye.prototype=new As();_.tI=0;function Ee(){Ee=dy;af()}
function De(){}
_=De.prototype=new ye();_.tI=0;function Be(){Be=dy;Ee()}
function Ce(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function ze(){}
_=ze.prototype=new De();_.tI=0;function mg(){}
_=mg.prototype=new As();_.tI=0;_.a=false;_.b=null;function dg(a){kp()}
function eg(b){var a;if(cg){a=new ag();hh(b,a)}}
function fg(){return cg}
function ag(){}
_=ag.prototype=new mg();_.m=dg;_.q=fg;_.tI=0;var cg=null;function jg(){}
_=jg.prototype=new As();_.tI=0;function og(a){a.a=++rg;return a}
function qg(){return this.a}
function ng(){}
_=ng.prototype=new As();_.hC=qg;_.tI=0;_.a=0;var rg=0;function dh(b,c,a){if(b.b>0){fh(b,wg(new vg(),b,c,a))}else{Cg(b.d,c,a)}return new jg()}
function fh(b,a){if(!b.a){b.a=xw(new ww())}zw(b.a,a)}
function hh(c,a){var b;if(a.a){a.a=false;a.b=null}b=a.b;a.b=c.e;try{++c.b;Eg(c.d,a,c.c)}finally{--c.b;if(c.b==0){ih(c)}}if(b==null){a.a=true;a.b=null}else{a.b=b}}
function ih(c){var a,b;if(c.a){try{for(b=pv(new nv(),c.a);b.a<b.b.b;){a=sj(sv(b),2);Cg(a.a.d,a.c,a.b)}}finally{c.a=null}}}
function ug(){}
_=ug.prototype=new As();_.tI=0;_.a=null;_.b=0;_.c=false;_.d=null;_.e=null;function wg(b,a,d,c){b.a=a;b.c=d;b.b=c;return b}
function vg(){}
_=vg.prototype=new As();_.tI=7;_.a=null;_.b=null;_.c=null;function Bg(a){a.a=ex(new dx());return a}
function Cg(c,d,a){var b;b=sj(bv(c.a,d),3);if(!b){b=xw(new ww());hv(c.a,d,b)}mj(b.a,b.b++,a)}
function Eg(i,e,h){var d,f,g,j,a,b,c;j=e.q();d=(a=sj(bv(i.a,j),3),!a?0:a.b);if(h){for(g=d-1;g>=0;--g){f=(b=sj(bv(i.a,j),3),sj((xv(g,b.b),b.a[g]),12));e.m(f)}}else{for(g=0;g<d;++g){f=(c=sj(bv(i.a,j),3),sj((xv(g,c.b),c.a[g]),12));e.m(f)}}}
function zg(){}
_=zg.prototype=new As();_.tI=0;function Ci(){}
_=Ci.prototype=new As();_.tI=0;function mh(b,a){b.a=a;return b}
function oh(a){if(!(a!=null&&rj(a.tI,13))){return false}return this.a==sj(a,13).a}
function ph(){return ve(this.a)}
function lh(){}
_=lh.prototype=new Ci();_.eQ=oh;_.hC=ph;_.tI=8;_.a=null;function th(){th=dy;uh=(th(),new rh());vh=new rh()}
function wh(a){th();if(a){return vh}else{return uh}}
function rh(){}
_=rh.prototype=new Ci();_.tI=0;var uh,vh;function wt(){}
_=wt.prototype=new As();_.tI=3;function ds(){}
_=ds.prototype=new wt();_.tI=4;function Es(){}
_=Es.prototype=new ds();_.tI=5;function yh(b,a){return b}
function xh(){}
_=xh.prototype=new Es();_.tI=9;function Ch(){Ch=dy;Eh=(Ch(),new Ah())}
function Ah(){}
_=Ah.prototype=new Ci();_.tI=0;var Eh;function ai(a,b){a.a=b;return a}
function ci(a){if(!(a!=null&&rj(a.tI,14))){return false}return this.a==sj(a,14).a}
function di(){return ~~Math.max(Math.min(Fr(new Er(),this.a).a,2147483647),-2147483648)}
function Fh(){}
_=Fh.prototype=new Ci();_.eQ=ci;_.hC=di;_.tI=10;_.a=0;function fi(b,a){b.a=a;return b}
function ii(d,c){var b,a;if(c==null){throw new ps()}return b=d.a[c],a=(ni(),vi)[typeof b],a?a(b):ui(typeof b)}
function ji(a){if(!(a!=null&&rj(a.tI,15))){return false}return this.a==sj(a,15).a}
function ki(){return ve(this.a)}
function ei(){}
_=ei.prototype=new Ci();_.eQ=ji;_.hC=ki;_.tI=11;_.a=null;function ni(){ni=dy;vi={'boolean':oi,number:pi,string:ri,object:qi,'function':qi,undefined:si}}
function oi(a){return wh(a)}
function pi(a){return ai(new Fh(),a)}
function qi(b){if(!b){return Ch(),Eh}var c=b.valueOf?b.valueOf():b;if(c!==b){var a=vi[typeof c];return a?a(c):ui(typeof c)}else if(b instanceof Array||b instanceof $wnd.Array){return mh(new lh(),b)}else{return fi(new ei(),b)}}
function ri(a){return xi(new wi(),a)}
function si(){return null}
function ui(a){ni();throw yh(new xh(),q+a+r)}
var vi;function yi(){var a;yi=dy;a=[qb,Bb,gc,rc,Cc,hd,sd,Dd,s,D,ib,jb,kb,lb,mb,nb,ob,pb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Cb,Db,Eb,Fb];a[34]=ac;a[92]=bc}
function xi(a,b){yi();if(b==null){throw new ps()}a.a=b;return a}
function zi(a){if(!(a!=null&&rj(a.tI,16))){return false}return mt(this.a,sj(a,16).a)}
function Ai(){return it(this.a)}
function wi(){}
_=wi.prototype=new Ci();_.eQ=zi;_.hC=Ai;_.tI=12;_.a=null;function jj(d,c){var a=new Array(c);if(d>0){var e=[null,0,false,[0,0]][d];for(var b=0;b<c;++b){a[b]=e}}return a}
function kj(a,f,c,b,e){var d;d=jj(e,b);aj();fj(d,bj,cj);d.tI=f;d.qI=c;return d}
function lj(b,d,c,a){aj();fj(a,bj,cj);a.tI=d;a.qI=c;return a}
function mj(a,b,c){if(c!=null){if(a.qI>0&&!qj(c.tI,a.qI)){throw new rr()}if(a.qI<0&&(c.tM==dy||c.tI==2)){throw new rr()}}return a[b]=c}
function Ei(){}
_=Ei.prototype=new As();_.tI=0;_.length=0;_.qI=0;function aj(){aj=dy;bj=[];cj=[];dj(new Ei(),bj,cj)}
function dj(e,a,b){var c=0,f;for(var d in e){if(f=e[d]){a[c]=d;b[c]=f;++c}}}
function fj(a,c,d){aj();for(var e=0,b=c.length;e<b;++e){a[c[e]]=d[e]}}
var bj,cj;function rj(b,a){return b&&!!Ej[b][a]}
function qj(b,a){return b&&Ej[b][a]}
function sj(b,a){if(b!=null&&!qj(b.tI,a)){throw new vr()}return b}
var Ej=[{},{},{1:1,8:1,9:1,10:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{2:1},{13:1},{8:1,17:1},{14:1},{15:1},{16:1},{4:1},{6:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1,18:1},{12:1},{4:1,5:1,6:1,7:1,18:1},{4:1,5:1,6:1,7:1},{19:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,10:1,20:1},{8:1,17:1},{8:1},{8:1,10:1,21:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{9:1},{8:1,17:1},{24:1},{24:1},{22:1},{22:1},{22:1},{24:1},{3:1,8:1},{8:1,23:1},{8:1,24:1},{22:1},{8:1,17:1},{11:1}];function uk(b,a,c){var d;if(a==yk){if(Dl((af(),b).type)==8192){yk=null}}d=tk;tk=b;try{c.w(b)}finally{tk=d}}
function Ak(a,b){Fl();xl(a,b)}
var tk=null,yk=null;function hl(a){pl();return il(cg?cg:(cg=og(new ng())),a)}
function il(b,a){return dh(nl(),b,a)}
function kl(){if(jl){eg(nl())}}
function ll(){var a;if(jl){a=(Fk(),new Dk());ml(a);return null}return null}
function ml(a){if(ol){hh(ol,a)}}
function nl(){if(!ol){ol=el(new dl())}return ol}
function pl(){if(!jl){nm();jl=true}}
var jl=false,ol=null;function Fk(){Fk=dy;al=og(new ng())}
function bl(a){null.D()}
function cl(){return al}
function Dk(){}
_=Dk.prototype=new mg();_.m=bl;_.q=cl;_.tI=0;var al;function el(a){a.d=Bg(new zg());a.e=null;a.c=false;return a}
function dl(){}
_=dl.prototype=new ug();_.tI=13;function Dl(a){switch(a){case cc:return 4096;case dc:return 1024;case ec:return 1;case fc:return 2;case hc:return 2048;case ic:return 128;case jc:return 256;case kc:return 512;case lc:return 32768;case mc:return 8192;case nc:return 4;case oc:return 64;case pc:return 32;case qc:return 16;case sc:return 8;case tc:return 16384;case uc:return 65536;case vc:return 131072;case wc:return 131072;case xc:return 262144;}}
function Fl(){if(!bm){vl();bm=true}}
function cm(a){return !(a!=null&&(a.tM!=dy&&a.tI!=2))&&(a!=null&&rj(a.tI,5))}
var bm=false;function vl(){Al=function(b){if(zl(b)){var a=yl;if(a&&a.__listener){if(cm(a.__listener)){uk(b,a,a.__listener);b.stopPropagation()}}}};zl=function(a){return true};Bl=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(cm(c)){uk(b,a,c)}}};$wnd.addEventListener(ec,Al,true);$wnd.addEventListener(fc,Al,true);$wnd.addEventListener(nc,Al,true);$wnd.addEventListener(sc,Al,true);$wnd.addEventListener(oc,Al,true);$wnd.addEventListener(qc,Al,true);$wnd.addEventListener(pc,Al,true);$wnd.addEventListener(vc,Al,true);$wnd.addEventListener(ic,zl,true);$wnd.addEventListener(kc,zl,true);$wnd.addEventListener(jc,zl,true)}
function wl(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function xl(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Bl:null;if(b&2)c.ondblclick=a&2?Bl:null;if(b&4)c.onmousedown=a&4?Bl:null;if(b&8)c.onmouseup=a&8?Bl:null;if(b&16)c.onmouseover=a&16?Bl:null;if(b&32)c.onmouseout=a&32?Bl:null;if(b&64)c.onmousemove=a&64?Bl:null;if(b&128)c.onkeydown=a&128?Bl:null;if(b&256)c.onkeypress=a&256?Bl:null;if(b&512)c.onkeyup=a&512?Bl:null;if(b&1024)c.onchange=a&1024?Bl:null;if(b&2048)c.onfocus=a&2048?Bl:null;if(b&4096)c.onblur=a&4096?Bl:null;if(b&8192)c.onlosecapture=a&8192?Bl:null;if(b&16384)c.onscroll=a&16384?Bl:null;if(b&32768)c.onload=a&32768?Bl:null;if(b&65536)c.onerror=a&65536?Bl:null;if(b&131072)c.onmousewheel=a&131072?Bl:null;if(b&262144)c.oncontextmenu=a&262144?Bl:null}
var yl=null,zl=null,Al=null,Bl=null;function fm(a){a.a=xw(new ww());return a}
function hm(d,b){var c,a;c=(a=b[yc],a==null?-1:a);if(c<0){return null}return sj(Bw(d.a,c),6)}
function im(d,b){var c,a;c=(a=b[yc],a==null?-1:a);b[yc]=null;Dw(d.a,c,null)}
function dm(){}
_=dm.prototype=new As();_.tI=0;function nm(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=ll()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{kl()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function up(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new Es()}j=st(j);if(j.length==0){throw new fs()}i=c[zc]==null?null:String(c[zc]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Ac}c[zc]=i+j}}else{if(e!=-1){b=st(i.substr(0,e-0));d=st(qt(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Ac+d}c[zc]=h}}}
function qp(){}
_=qp.prototype=new As();_.tI=14;_.j=null;function mq(b){var a;if(b.g){throw new is()}b.g=true;b.j.__listener=b;a=b.h;b.h=-1;if(a>0){qq(b,a)}b.n();b.x()}
function nq(a){if(!a.g){throw new is()}try{a.y()}finally{a.o();a.j.__listener=null;a.g=false}}
function oq(a){if(!a.i){jp();if(Eu(op.a,a)){nq(a);kv(op.a,a)!=null}}else if(a.i){a.i.z(a)}else if(a.i){throw new is()}}
function pq(c,b){var a;a=c.i;if(!b){if(!!a&&a.g){nq(c)}c.i=null}else{if(a){throw new is()}c.i=b;if(b.g){mq(c)}}}
function qq(b,a){if(b.h==-1){Ak(b.j,a|(b.j.__eventBits||0))}else{b.h|=a}}
function rq(){}
function sq(){}
function tq(a){var b;switch(Dl((af(),a).type)){case 16:case 32:b=a.relatedTarget;if(!!b&&Ce(this.j,b)){return}}}
function uq(){}
function vq(){}
function Cp(){}
_=Cp.prototype=new qp();_.n=rq;_.o=sq;_.w=tq;_.x=uq;_.y=vq;_.tI=15;_.g=false;_.h=0;_.i=null;function Eo(){var a,b;for(b=this.u();b.t();){a=sj(b.v(),7);mq(a)}}
function Fo(){var a,b;for(b=this.u();b.t();){a=sj(b.v(),7);nq(a)}}
function ap(){}
function bp(){}
function Co(){}
_=Co.prototype=new Cp();_.n=Eo;_.o=Fo;_.x=ap;_.y=bp;_.tI=16;function ym(c,a,b){oq(a);fq(c.e,a);b.appendChild(a.j);pq(a,c)}
function Am(b,c){var a;if(c.i!=b){return false}pq(c,null);a=c.j;ef((af(),a)).removeChild(a);kq(b.e,c);return true}
function Bm(){return aq(new Ep(),this.e)}
function Cm(a){return Am(this,a)}
function wm(){}
_=wm.prototype=new Co();_.u=Bm;_.z=Cm;_.tI=17;function pm(a,b){ym(a,b,a.j)}
function rm(a){a.style[Bc]=Dc;a.style[Ec]=Dc;a.style[Fc]=Dc}
function sm(b){var a;a=Am(this,b);if(a){rm(b.j)}return a}
function om(){}
_=om.prototype=new wm();_.z=sm;_.tI=18;function tm(){}
_=tm.prototype=new wm();_.tI=19;_.c=null;_.d=null;function ao(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw ms(new ls(),ad+a+bd+b)}}
function go(b,a){var c;if(a!=b.a.rows.length){ao(b,a)}c=(af(),$doc).createElement(cd);wl(b.a,c,a);return a}
function ho(d,c,a){var b,e;b=df((af(),c));e=null;if(b){e=sj(hm(d.f,b),7)}if(e){io(d,e);return true}else{if(a){c.innerHTML=Dc}return false}}
function io(b,c){var a;if(c.i!=b){return false}pq(c,null);a=c.j;ef((af(),a)).removeChild(a);im(b.f,a);return true}
function ko(b,a){b.c=a;yn(b.c)}
function mo(f,c,a,e){var d,b;dn(f,c,a);d=(b=f.b.a.a.rows[c].cells[a],ho(f,b,e==null),b);if(e!=null){ff((af(),d),e)}}
function no(){return kn(new hn(),this)}
function gn(){}
_=gn.prototype=new Co();_.u=no;_.tI=20;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;function bn(a){a.f=fm(new dm());a.e=(af(),$doc).createElement(dd);a.a=$doc.createElement(ed);a.e.appendChild(a.a);a.j=a.e;a.b=Fm(new Em(),a);a.d=An(new zn(),a);ko(a,wn(new vn(),a));return a}
function dn(e,d,b){var a,c;en(e,d);if(b<0){throw ms(new ls(),fd+b)}a=(ao(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){fn(e.a,d,c)}}
function en(d,b){var a,c;if(b<0){throw ms(new ls(),gd+b)}c=d.a.rows.length;for(a=c;a<=b;++a){go(d,a)}}
function fn(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(id);e.appendChild(a)}}
function Dm(){}
_=Dm.prototype=new gn();_.tI=21;function qn(e,b,a,c){var d;dn(e.a,b,a);d=e.a.a.rows[b].cells[a];up(d,c,true)}
function un(d,b,a,c){dn(d.a,b,a);d.a.a.rows[b].cells[a][zc]=c}
function pn(){}
_=pn.prototype=new As();_.tI=0;_.a=null;function Fm(b,a){b.a=a;return b}
function Em(){}
_=Em.prototype=new pn();_.tI=0;function kn(b,a){b.b=a;b.c=b.b.f.a;mn(b);return b}
function mn(a){while(++a.a<a.c.b){if(Bw(a.c,a.a)!=null){return}}}
function nn(){return this.a<this.c.b}
function on(){var a;if(this.a>=this.c.b){throw new Cx()}a=sj(Bw(this.c,this.a),7);mn(this);return a}
function hn(){}
_=hn.prototype=new As();_.t=nn;_.v=on;_.tI=0;_.a=-1;_.b=null;function wn(b,a){b.b=a;return b}
function yn(a){if(!a.a){a.a=(af(),$doc).createElement(jd);wl(a.b.e,a.a,0);a.a.appendChild($doc.createElement(kd))}}
function vn(){}
_=vn.prototype=new As();_.tI=0;_.a=null;_.b=null;function An(b,a){b.a=a;return b}
function Bn(c,a,b){up((en(c.a,a),c.a.a.rows[a]),b,true)}
function zn(){}
_=zn.prototype=new As();_.tI=0;_.a=null;function so(){so=dy;qo(new po(),ld);uo=qo(new po(),Bc);qo(new po(),md);to=uo}
var to,uo;function qo(b,a){b.a=a;return b}
function po(){}
_=po.prototype=new As();_.tI=0;_.a=null;function yo(){yo=dy;wo(new vo(),nd);wo(new vo(),od);zo=wo(new vo(),Ec)}
var zo;function wo(a,b){a.a=b;return a}
function vo(){}
_=vo.prototype=new As();_.tI=0;_.a=null;function jp(){jp=dy;np=ex(new dx());op=ix(new hx())}
function ip(b,a){jp();b.e=eq(new Dp());b.j=a;mq(b);return b}
function kp(){var b,a;jp();var c,d;for(d=(b=du(new cu(),pw(op.a).b.a),Fv(new Ev(),b));rv(d.a.a);){c=sj((a=sj(sv(d.a.a),22),a.r()),7);if(c.g){nq(c)}}Cu(op.a);Cu(np)}
function mp(b){jp();var a,c;c=sj(bv(np,b),18);a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(c){if(!a||c.j==a){return c}}if(np.d==0){hl(new dp())}if(!a){c=gp(new fp())}else{c=ip(new cp(),a)}hv(np,b,c);jx(op,c);return c}
function cp(){}
_=cp.prototype=new om();_.tI=22;var np,op;function dp(){}
_=dp.prototype=new As();_.tI=23;function hp(){hp=dy;jp()}
function gp(a){hp();ip(a,$doc.body);return a}
function fp(){}
_=fp.prototype=new cp();_.tI=24;function xp(a){a.e=eq(new Dp());a.d=(af(),$doc).createElement(dd);a.c=$doc.createElement(ed);a.d.appendChild(a.c);a.j=a.d;a.a=(so(),to);a.b=(yo(),zo);a.d[pd]=qd;a.d[rd]=qd;return a}
function yp(c,e){var b,d,a;d=(af(),$doc).createElement(cd);b=(a=$doc.createElement(id),(a[td]=c.a.a,undefined),(a.style[ud]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);oq(e);fq(c.e,e);b.appendChild(e.j);pq(e,c)}
function Bp(c){var a,b;b=ef((af(),c.j));a=Am(this,c);if(a){this.c.removeChild(ef(b))}return a}
function vp(){}
_=vp.prototype=new tm();_.z=Bp;_.tI=25;function eq(a){a.a=kj(bk,0,7,4,0);return a}
function fq(a,b){iq(a,b,a.b)}
function hq(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function iq(d,e,a){var b,c;if(a<0||a>d.b){throw new ls()}if(d.b==d.a.length){c=kj(bk,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){mj(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){mj(d.a,b,d.a[b-1])}mj(d.a,a,e)}
function jq(c,b){var a;if(b<0||b>=c.b){throw new ls()}--c.b;for(a=b;a<c.b;++a){mj(c.a,a,c.a[a+1])}mj(c.a,c.b,null)}
function kq(b,c){var a;a=hq(b,c);if(a==-1){throw new Cx()}jq(b,a)}
function Dp(){}
_=Dp.prototype=new As();_.tI=0;_.a=null;_.b=0;function aq(b,a){b.b=a;return b}
function cq(){return this.a<this.b.b-1}
function dq(){if(this.a>=this.b.b){throw new Cx()}return this.b.a[++this.a]}
function Ep(){}
_=Ep.prototype=new As();_.t=cq;_.v=dq;_.tI=0;_.a=-1;_.b=null;function yq(a){a.b=xp(new vp());a.c=lj(dk,0,1,[vd,wd,xd,yd,zd,Ad]);return a}
function zq(f){var a,b,c,d,e;for(c=f.c,d=0,e=c.length;d<e;++d){b=c[d];a=Eq(new Dq(),b);Fq(a,f.a);zw((fr(),gr),a);$wnd.gwtStreamHub.subscribe(b,$wnd.gwtStreamHubUpdate)}}
function Cq(b){var a;b.a=(a=bn(new Dm()),mo(a,0,0,Bd),mo(a,0,1,Cd),mo(a,0,2,Ed),mo(a,0,3,Fd),up(a.j,ae,true),Bn(a.d,0,be),qn(a.b,0,2,ce),qn(a.b,0,3,ce),a.e[rd]=6,a);yp(b.b,b.a);up(b.b.j,de,true);pm(mp(ae),b.b);fr();$wnd.gwtStreamHub=new $wnd.StreamHub();new dr();$wnd.gwtStreamHubUpdate=hr;$wnd.gwtStreamHub.connect(ee);zq(b)}
function wq(){}
_=wq.prototype=new As();_.tI=0;_.a=null;function Eq(b,a){b.e=a;b.a=fe;b.d=0;return b}
function Fq(b,a){b.b=a;b.c=a.a.rows.length;mo(a,b.c,0,b.e);mo(a,b.c,1,b.a);mo(a,b.c,2,Dc+b.d);mo(a,b.c,3,ge);qn(a.b,b.c,2,ce);qn(a.b,b.c,3,ce)}
function br(b,a){if(a.a>0){un(b.b.b,b.c,3,he)}else if(a.a==0){un(b.b.b,b.c,3,t)}else{un(b.b.b,b.c,3,u)}}
function cr(f,g,h){var a,b,c,d,e;if(mt(f.e,g)){d=sj(ii(h,v),16).a;c=sj(ii(h,Cd),16).a;e=sj(ii(h,w),16).a;a=sj(ii(h,Fd),16).a;b=Fr(new Er(),xs(a));mo(f.b,f.c,1,c);mo(f.b,f.c,2,d);mo(f.b,f.c,3,a+x+e+y);br(f,b)}}
function Dq(){}
_=Dq.prototype=new As();_.tI=26;_.a=null;_.b=null;_.c=0;_.d=0;_.e=null;function fr(){fr=dy;gr=xw(new ww())}
function hr(d,e){fr();var a,b,c;a=fi(new ei(),e);for(c=pv(new nv(),gr);c.a<c.b.b;){b=sj(sv(c),19);cr(b,d,a)}}
function dr(){}
_=dr.prototype=new As();_.tI=0;var gr;function rr(){}
_=rr.prototype=new Es();_.tI=28;function yr(c,a){var b;b=new ur();return b}
function ur(){}
_=ur.prototype=new As();_.tI=0;function vr(){}
_=vr.prototype=new Es();_.tI=32;function xs(a){var b;b=ys(a);if(isNaN(b)){throw ts(new ss(),z+a+A)}return b}
function ys(b){var a=zs;if(!a){a=zs=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i}if(a.test(b)){return parseFloat(b)}else{return Number.NaN}}
function rs(){}
_=rs.prototype=new As();_.tI=33;var zs=null;function Fr(a,b){a.a=b;return a}
function bs(a){return a!=null&&rj(a.tI,21)&&sj(a,21).a==this.a}
function cs(){return ~~Math.max(Math.min(this.a,2147483647),-2147483648)}
function Er(){}
_=Er.prototype=new rs();_.eQ=bs;_.hC=cs;_.tI=34;_.a=0;function fs(){}
_=fs.prototype=new Es();_.tI=35;function is(){}
_=is.prototype=new Es();_.tI=36;function ms(b,a){return b}
function ls(){}
_=ls.prototype=new Es();_.tI=37;function ps(){}
_=ps.prototype=new Es();_.tI=38;function ts(b,a){return b}
function ss(){}
_=ss.prototype=new fs();_.tI=39;function mt(b,a){if(!(a!=null&&rj(a.tI,1))){return false}return String(b)==a}
function qt(b,a){return b.substr(a,b.length-a)}
function st(c){if(c.length==0||c[0]>Ac&&c[c.length-1]>Ac){return c}var a=c.replace(/^(\s*)/,Dc);var b=a.replace(/\s*$/,Dc);return b}
function ut(a){return mt(this,a)}
function vt(){return it(this)}
_=String.prototype;_.eQ=ut;_.hC=vt;_.tI=2;function dt(){dt=dy;et={};ht={}}
function ft(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function it(c){dt();var a=B+c;var b=ht[a];if(b!=null){return b}b=et[a];if(b==null){b=ft(c)}jt();return ht[a]=b}
function jt(){if(gt==256){et=ht;ht={};gt=0}++gt}
var et,gt=0,ht;function yt(){}
_=yt.prototype=new Es();_.tI=41;function Ct(a,b){var c;while(a.t()){c=a.v();if(b==null?c==null:pe(b,c)){return a}}return null}
function Et(a){throw new yt()}
function Ft(b){var a;a=Ct(this.u(),b);return !!a}
function Bt(){}
_=Bt.prototype=new As();_.k=Et;_.l=Ft;_.tI=0;function pw(b){var a;a=hu(new bu(),b);return ew(new Dv(),b,a)}
function qw(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&rj(c.tI,23))){return false}e=sj(c,23);if(sj(this,23).d!=e.d){return false}for(b=du(new cu(),hu(new bu(),e).a);rv(b.a);){a=sj(sv(b.a),22);d=a.r();f=a.s();if(!(d==null?sj(this,23).c:d!=null&&rj(d.tI,1)?dv(sj(this,23),sj(d,1)):cv(sj(this,23),d,~~re(d)))){return false}if(!cy(f,d==null?sj(this,23).b:d!=null&&rj(d.tI,1)?sj(this,23).e[B+sj(d,1)]:Fu(sj(this,23),d,~~re(d)))){return false}}return true}
function rw(){var a,b,c;c=0;for(b=du(new cu(),hu(new bu(),sj(this,23)).a);rv(b.a);){a=sj(sv(b.a),22);c+=a.hC();c=~~c}return c}
function Cv(){}
_=Cv.prototype=new As();_.eQ=qw;_.hC=rw;_.tI=0;function Au(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function Bu(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=yu(e,c.substring(1));a.k(b)}}}
function Cu(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function Eu(b,a){return a==null?b.c:a!=null&&rj(a.tI,1)?dv(b,sj(a,1)):cv(b,a,~~re(a))}
function bv(b,a){return a==null?b.b:a!=null&&rj(a.tI,1)?b.e[B+sj(a,1)]:Fu(b,a,~~re(a))}
function Fu(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return c.s()}}}return null}
function cv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return true}}}return false}
function dv(b,a){return B+a in b.e}
function hv(b,a,c){return a==null?fv(b,c):a!=null&&rj(a.tI,1)?gv(b,sj(a,1),c):ev(b,a,c,~~re(a))}
function ev(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(i.p(g,d)){var h=c.s();c.A(j);return h}}}else{a=i.a[e]=[]}var c=vx(new ux(),g,j);a.push(c);++i.d;return null}
function fv(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function gv(d,a,e){var b,c=d.e;a=B+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function kv(b,a){return !a?jv(b):iv(b,a,~~(a.$H||(a.$H=++xe)))}
function iv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.s()}}}return null}
function jv(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function lv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function au(){}
_=au.prototype=new Cv();_.p=lv;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function uw(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&rj(b.tI,24))){return false}c=sj(b,24);if(c.B()!=this.B()){return false}for(a=c.u();a.t();){d=a.v();if(!this.l(d)){return false}}return true}
function vw(){var a,b,c;a=0;for(b=this.u();b.t();){c=b.v();if(c!=null){a+=re(c);a=~~a}}return a}
function sw(){}
_=sw.prototype=new Bt();_.eQ=uw;_.hC=vw;_.tI=42;function hu(b,a){b.a=a;return b}
function ju(d,c){var a,b,e;if(c!=null&&rj(c.tI,22)){a=sj(c,22);b=a.r();if(Eu(d.a,b)){e=bv(d.a,b);return gx(a.s(),e)}}return false}
function ku(a){return ju(this,a)}
function lu(){return du(new cu(),this.a)}
function mu(){return this.a.d}
function bu(){}
_=bu.prototype=new sw();_.l=ku;_.u=lu;_.B=mu;_.tI=43;_.a=null;function du(c,b){var a;c.b=b;a=xw(new ww());if(c.b.c){zw(a,ou(new nu(),c.b))}Bu(c.b,a);Au(c.b,a);c.a=pv(new nv(),a);return c}
function fu(){return rv(this.a)}
function gu(){return sj(sv(this.a),22)}
function cu(){}
_=cu.prototype=new As();_.t=fu;_.v=gu;_.tI=0;_.a=null;_.b=null;function mw(b){var a;if(b!=null&&rj(b.tI,22)){a=sj(b,22);if(cy(this.r(),a.r())&&cy(this.s(),a.s())){return true}}return false}
function nw(){var a,b;a=0;b=0;if(this.r()!=null){a=re(this.r())}if(this.s()!=null){b=re(this.s())}return a^b}
function kw(){}
_=kw.prototype=new As();_.eQ=mw;_.hC=nw;_.tI=44;function ou(b,a){b.a=a;return b}
function qu(){return null}
function ru(){return this.a.b}
function su(a){return fv(this.a,a)}
function nu(){}
_=nu.prototype=new kw();_.r=qu;_.s=ru;_.A=su;_.tI=45;_.a=null;function uu(c,a,b){c.b=b;c.a=a;return c}
function wu(){return this.a}
function xu(){return this.b.e[B+this.a]}
function yu(b,a){return uu(new tu(),a,b)}
function zu(a){return gv(this.b,this.a,a)}
function tu(){}
_=tu.prototype=new kw();_.r=wu;_.s=xu;_.A=zu;_.tI=46;_.a=null;_.b=null;function wv(a){yw(this,this.B(),a);return true}
function xv(a,b){if(a<0||a>=b){Av(a,b)}}
function yv(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&rj(e.tI,3))){return false}f=sj(e,3);if(this.B()!=f.b){return false}c=pv(new nv(),sj(this,3));d=pv(new nv(),f);while(c.a<c.b.b){a=sv(c);b=sv(d);if(!(a==null?b==null:pe(a,b))){return false}}return true}
function zv(){var a,b,c;b=1;a=pv(new nv(),sj(this,3));while(a.a<a.b.b){c=sv(a);b=31*b+(c==null?0:re(c));b=~~b}return b}
function Av(a,b){throw ms(new ls(),C+a+E+b)}
function Bv(){return pv(new nv(),sj(this,3))}
function mv(){}
_=mv.prototype=new Bt();_.k=wv;_.eQ=yv;_.hC=zv;_.u=Bv;_.tI=0;function pv(b,a){b.b=a;return b}
function rv(a){return a.a<a.b.b}
function sv(a){if(a.a>=a.b.b){throw new Cx()}return Bw(a.b,a.a++)}
function tv(){return this.a<this.b.b}
function uv(){return sv(this)}
function nv(){}
_=nv.prototype=new As();_.t=tv;_.v=uv;_.tI=0;_.a=0;_.b=null;function ew(b,a,c){b.a=a;b.b=c;return b}
function hw(a){return Eu(this.a,a)}
function iw(){var a;return a=du(new cu(),this.b.a),Fv(new Ev(),a)}
function jw(){return this.b.a.d}
function Dv(){}
_=Dv.prototype=new sw();_.l=hw;_.u=iw;_.B=jw;_.tI=47;_.a=null;_.b=null;function Fv(a,b){a.a=b;return a}
function cw(){return rv(this.a.a)}
function dw(){var a;return a=sj(sv(this.a.a),22),a.r()}
function Ev(){}
_=Ev.prototype=new As();_.t=cw;_.v=dw;_.tI=0;_.a=null;function xw(a){a.a=kj(ck,0,0,0,0);a.b=0;return a}
function zw(b,a){mj(b.a,b.b++,a);return true}
function yw(c,a,b){if(a<0||a>c.b){Av(a,c.b)}c.a.splice(a,0,b);++c.b}
function Bw(b,a){xv(a,b.b);return b.a[a]}
function Cw(c,b,a){for(;a<c.b;++a){if(cy(b,c.a[a])){return a}}return -1}
function Dw(d,a,b){var c;c=(xv(a,d.b),d.a[a]);mj(d.a,a,b);return c}
function Ew(a){return mj(this.a,this.b++,a),true}
function Fw(a){return Cw(this,a,0)!=-1}
function ax(){return this.b}
function ww(){}
_=ww.prototype=new mv();_.k=Ew;_.l=Fw;_.B=ax;_.tI=48;_.a=null;_.b=0;function ex(a){Cu(a);return a}
function gx(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function dx(){}
_=dx.prototype=new au();_.tI=49;function ix(a){a.a=ex(new dx());return a}
function jx(c,a){var b;b=hv(c.a,a,c);return b==null}
function nx(b){var a;return a=hv(this.a,b,this),a==null}
function ox(a){return Eu(this.a,a)}
function px(){var a;return a=du(new cu(),pw(this.a).b.a),Fv(new Ev(),a)}
function qx(){return this.a.d}
function hx(){}
_=hx.prototype=new sw();_.k=nx;_.l=ox;_.u=px;_.B=qx;_.tI=50;_.a=null;function vx(b,a,c){b.a=a;b.b=c;return b}
function xx(){return this.a}
function yx(){return this.b}
function Ax(b){var a;a=this.b;this.b=b;return a}
function ux(){}
_=ux.prototype=new kw();_.r=xx;_.s=yx;_.A=Ax;_.tI=51;_.a=null;_.b=null;function Cx(){}
_=Cx.prototype=new Es();_.tI=52;function cy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function pr(){!!$stats&&$stats({moduleName:$moduleName,subSystem:F,evtGroup:ab,millis:(new Date()).getTime(),type:bb,className:cb});Cq(yq(new wq()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{pr()}catch(a){b(d)}else{pr()}}
function dy(){}
var dk=yr(db,eb),bk=yr(fb,gb),ck=yr(db,hb);$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (gwtstocktabledemo) gwtstocktabledemo.onScriptLoad(gwtOnLoad);})();