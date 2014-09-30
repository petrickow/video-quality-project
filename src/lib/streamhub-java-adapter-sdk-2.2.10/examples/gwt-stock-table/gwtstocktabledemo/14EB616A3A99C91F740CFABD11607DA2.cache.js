(function(){var $gwt_version = "1.6.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var Dc='',Ac=' ',x=' (',A='"',ee='http://localhost:7979/streamhub/',r="'; please report this bug to the GWT team",y=')',bd=', Row size: ',E=', Size: ',fe='-',qd='0',ge='0.0 (0.00%)',B=':',vd='BA',wd='BAC',xd='C',fd='Cannot create a column with a negative index: ',gd='Cannot create a row with a negative index: ',Fd='Change',Cd='Company',wc='DOMMouseScroll',z='For input string: "',C='Index: ',yd='KO',Ed='Last Price',v='LastPrice',zd='MCD',hb='Object;',w='PercentChange',ad='Row index: ',eb='String;',Bd='Symbol',q="Unexpected typeof result '",Ad='WMT',gb='Widget;',fb='[Lcom.google.gwt.user.client.ui.',db='[Ljava.lang.',ac='\\"',bc='\\\\',s='\\b',kb='\\f',ib='\\n',lb='\\r',D='\\t',qb='\\u0000',Bb='\\u0001',gc='\\u0002',rc='\\u0003',Cc='\\u0004',hd='\\u0005',sd='\\u0006',Dd='\\u0007',jb='\\u000B',mb='\\u000E',nb='\\u000F',ob='\\u0010',pb='\\u0011',rb='\\u0012',sb='\\u0013',tb='\\u0014',ub='\\u0015',vb='\\u0016',wb='\\u0017',xb='\\u0018',yb='\\u0019',zb='\\u001A',Ab='\\u001B',Cb='\\u001C',Db='\\u001D',Eb='\\u001E',Fb='\\u001F',yc='__uiObjectID',td='align',t='black',cc='blur',nd='bottom',rd='cellPadding',pd='cellSpacing',ld='center',dc='change',zc='className',ec='click',kd='col',jd='colgroup',cb='com.streamhub.client.GWTStockTableDemo',xc='contextmenu',fc='dblclick',uc='error',hc='focus',he='green',ic='keydown',jc='keypress',kc='keyup',Bc='left',lc='load',mc='losecapture',de='mainPanel',od='middle',ab='moduleStartup',nc='mousedown',oc='mousemove',pc='mouseout',qc='mouseover',sc='mouseup',vc='mousewheel',bb='onModuleLoadStart',Fc='position',u='red',md='right',tc='scroll',F='startup',ae='stockTable',be='stockTableHeader',ce='stockTableNumeric',dd='table',ed='tbody',id='td',Ec='top',cd='tr',ud='verticalAlign';var _;function Es(a){return this===(a==null?null:a)}
function Fs(){return this.$H||(this.$H=++xe)}
function Cs(){}
_=Cs.prototype={};_.eQ=Es;_.hC=Fs;_.tM=fy;_.tI=1;function pe(b,a){return b.tM==fy||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function re(a){return a.tM==fy||a.tI==2?a.hC():a.$H||(a.$H=++xe)}
function ve(a){return a.$H||(a.$H=++xe)}
var xe=0;function af(){af=fy;Be();new ze()}
function df(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function ef(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ff(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild(a.ownerDocument.createTextNode(b))}}
function ye(){}
_=ye.prototype=new Cs();_.tI=0;function De(){De=fy;af()}
function Ce(){}
_=Ce.prototype=new ye();_.tI=0;function Be(){Be=fy;De()}
function ze(){}
_=ze.prototype=new Ce();_.tI=0;function mg(){}
_=mg.prototype=new Cs();_.tI=0;_.a=false;_.b=null;function dg(a){mp()}
function eg(b){var a;if(cg){a=new ag();hh(b,a)}}
function fg(){return cg}
function ag(){}
_=ag.prototype=new mg();_.m=dg;_.q=fg;_.tI=0;var cg=null;function jg(){}
_=jg.prototype=new Cs();_.tI=0;function og(a){a.a=++rg;return a}
function qg(){return this.a}
function ng(){}
_=ng.prototype=new Cs();_.hC=qg;_.tI=0;_.a=0;var rg=0;function dh(b,c,a){if(b.b>0){fh(b,wg(new vg(),b,c,a))}else{Cg(b.d,c,a)}return new jg()}
function fh(b,a){if(!b.a){b.a=zw(new yw())}Bw(b.a,a)}
function hh(c,a){var b;if(a.a){a.a=false;a.b=null}b=a.b;a.b=c.e;try{++c.b;Eg(c.d,a,c.c)}finally{--c.b;if(c.b==0){ih(c)}}if(b==null){a.a=true;a.b=null}else{a.b=b}}
function ih(c){var a,b;if(c.a){try{for(b=rv(new pv(),c.a);b.a<b.b.b;){a=sj(uv(b),2);Cg(a.a.d,a.c,a.b)}}finally{c.a=null}}}
function ug(){}
_=ug.prototype=new Cs();_.tI=0;_.a=null;_.b=0;_.c=false;_.d=null;_.e=null;function wg(b,a,d,c){b.a=a;b.c=d;b.b=c;return b}
function vg(){}
_=vg.prototype=new Cs();_.tI=7;_.a=null;_.b=null;_.c=null;function Bg(a){a.a=gx(new fx());return a}
function Cg(c,d,a){var b;b=sj(dv(c.a,d),3);if(!b){b=zw(new yw());jv(c.a,d,b)}mj(b.a,b.b++,a)}
function Eg(i,e,h){var d,f,g,j,a,b,c;j=e.q();d=(a=sj(dv(i.a,j),3),!a?0:a.b);if(h){for(g=d-1;g>=0;--g){f=(b=sj(dv(i.a,j),3),sj((zv(g,b.b),b.a[g]),12));e.m(f)}}else{for(g=0;g<d;++g){f=(c=sj(dv(i.a,j),3),sj((zv(g,c.b),c.a[g]),12));e.m(f)}}}
function zg(){}
_=zg.prototype=new Cs();_.tI=0;function Ci(){}
_=Ci.prototype=new Cs();_.tI=0;function mh(b,a){b.a=a;return b}
function oh(a){if(!(a!=null&&rj(a.tI,13))){return false}return this.a==sj(a,13).a}
function ph(){return ve(this.a)}
function lh(){}
_=lh.prototype=new Ci();_.eQ=oh;_.hC=ph;_.tI=8;_.a=null;function th(){th=fy;uh=(th(),new rh());vh=new rh()}
function wh(a){th();if(a){return vh}else{return uh}}
function rh(){}
_=rh.prototype=new Ci();_.tI=0;var uh,vh;function yt(){}
_=yt.prototype=new Cs();_.tI=3;function fs(){}
_=fs.prototype=new yt();_.tI=4;function at(){}
_=at.prototype=new fs();_.tI=5;function yh(b,a){return b}
function xh(){}
_=xh.prototype=new at();_.tI=9;function Ch(){Ch=fy;Eh=(Ch(),new Ah())}
function Ah(){}
_=Ah.prototype=new Ci();_.tI=0;var Eh;function ai(a,b){a.a=b;return a}
function ci(a){if(!(a!=null&&rj(a.tI,14))){return false}return this.a==sj(a,14).a}
function di(){return ~~Math.max(Math.min(bs(new as(),this.a).a,2147483647),-2147483648)}
function Fh(){}
_=Fh.prototype=new Ci();_.eQ=ci;_.hC=di;_.tI=10;_.a=0;function fi(b,a){b.a=a;return b}
function ii(d,c){var b,a;if(c==null){throw new rs()}return b=d.a[c],a=(ni(),vi)[typeof b],a?a(b):ui(typeof b)}
function ji(a){if(!(a!=null&&rj(a.tI,15))){return false}return this.a==sj(a,15).a}
function ki(){return ve(this.a)}
function ei(){}
_=ei.prototype=new Ci();_.eQ=ji;_.hC=ki;_.tI=11;_.a=null;function ni(){ni=fy;vi={'boolean':oi,number:pi,string:ri,object:qi,'function':qi,undefined:si}}
function oi(a){return wh(a)}
function pi(a){return ai(new Fh(),a)}
function qi(b){if(!b){return Ch(),Eh}var c=b.valueOf?b.valueOf():b;if(c!==b){var a=vi[typeof c];return a?a(c):ui(typeof c)}else if(b instanceof Array||b instanceof $wnd.Array){return mh(new lh(),b)}else{return fi(new ei(),b)}}
function ri(a){return xi(new wi(),a)}
function si(){return null}
function ui(a){ni();throw yh(new xh(),q+a+r)}
var vi;function yi(){var a;yi=fy;a=[qb,Bb,gc,rc,Cc,hd,sd,Dd,s,D,ib,jb,kb,lb,mb,nb,ob,pb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Cb,Db,Eb,Fb];a[34]=ac;a[92]=bc}
function xi(a,b){yi();if(b==null){throw new rs()}a.a=b;return a}
function zi(a){if(!(a!=null&&rj(a.tI,16))){return false}return ot(this.a,sj(a,16).a)}
function Ai(){return kt(this.a)}
function wi(){}
_=wi.prototype=new Ci();_.eQ=zi;_.hC=Ai;_.tI=12;_.a=null;function jj(d,c){var a=new Array(c);if(d>0){var e=[null,0,false,[0,0]][d];for(var b=0;b<c;++b){a[b]=e}}return a}
function kj(a,f,c,b,e){var d;d=jj(e,b);aj();fj(d,bj,cj);d.tI=f;d.qI=c;return d}
function lj(b,d,c,a){aj();fj(a,bj,cj);a.tI=d;a.qI=c;return a}
function mj(a,b,c){if(c!=null){if(a.qI>0&&!qj(c.tI,a.qI)){throw new tr()}if(a.qI<0&&(c.tM==fy||c.tI==2)){throw new tr()}}return a[b]=c}
function Ei(){}
_=Ei.prototype=new Cs();_.tI=0;_.length=0;_.qI=0;function aj(){aj=fy;bj=[];cj=[];dj(new Ei(),bj,cj)}
function dj(e,a,b){var c=0,f;for(var d in e){if(f=e[d]){a[c]=d;b[c]=f;++c}}}
function fj(a,c,d){aj();for(var e=0,b=c.length;e<b;++e){a[c[e]]=d[e]}}
var bj,cj;function rj(b,a){return b&&!!Ej[b][a]}
function qj(b,a){return b&&Ej[b][a]}
function sj(b,a){if(b!=null&&!qj(b.tI,a)){throw new xr()}return b}
var Ej=[{},{},{1:1,8:1,9:1,10:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{2:1},{13:1},{8:1,17:1},{14:1},{15:1},{16:1},{4:1},{6:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1},{4:1,5:1,6:1,7:1,18:1},{12:1},{4:1,5:1,6:1,7:1,18:1},{4:1,5:1,6:1,7:1},{19:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,10:1,20:1},{8:1,17:1},{8:1},{8:1,10:1,21:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{8:1,17:1},{9:1},{8:1,17:1},{24:1},{24:1},{22:1},{22:1},{22:1},{24:1},{3:1,8:1},{8:1,23:1},{8:1,24:1},{22:1},{8:1,17:1},{11:1}];function uk(b,a,c){var d;if(a==yk){if(Fl((af(),b).type)==8192){yk=null}}d=tk;tk=b;try{c.w(b)}finally{tk=d}}
function Ak(a,b){bm();a.__eventBits=b;a.onclick=b&1?Dl:null;a.ondblclick=b&2?Dl:null;a.onmousedown=b&4?Dl:null;a.onmouseup=b&8?Dl:null;a.onmouseover=b&16?Dl:null;a.onmouseout=b&32?Dl:null;a.onmousemove=b&64?Dl:null;a.onkeydown=b&128?Dl:null;a.onkeypress=b&256?Dl:null;a.onkeyup=b&512?Dl:null;a.onchange=b&1024?Dl:null;a.onfocus=b&2048?Dl:null;a.onblur=b&4096?Dl:null;a.onlosecapture=b&8192?Dl:null;a.onscroll=b&16384?Dl:null;a.onload=b&32768?Dl:null;a.onerror=b&65536?Dl:null;a.onmousewheel=b&131072?Dl:null;a.oncontextmenu=b&262144?Dl:null}
var tk=null,yk=null;function hl(a){pl();return il(cg?cg:(cg=og(new ng())),a)}
function il(b,a){return dh(nl(),b,a)}
function kl(){if(jl){eg(nl())}}
function ll(){var a;if(jl){a=(Fk(),new Dk());ml(a);return null}return null}
function ml(a){if(ol){hh(ol,a)}}
function nl(){if(!ol){ol=el(new dl())}return ol}
function pl(){if(!jl){pm();jl=true}}
var jl=false,ol=null;function Fk(){Fk=fy;al=og(new ng())}
function bl(a){null.D()}
function cl(){return al}
function Dk(){}
_=Dk.prototype=new mg();_.m=bl;_.q=cl;_.tI=0;var al;function el(a){a.d=Bg(new zg());a.e=null;a.c=false;return a}
function dl(){}
_=dl.prototype=new ug();_.tI=13;function Fl(a){switch(a){case cc:return 4096;case dc:return 1024;case ec:return 1;case fc:return 2;case hc:return 2048;case ic:return 128;case jc:return 256;case kc:return 512;case lc:return 32768;case mc:return 8192;case nc:return 4;case oc:return 64;case pc:return 32;case qc:return 16;case sc:return 8;case tc:return 16384;case uc:return 65536;case vc:return 131072;case wc:return 131072;case xc:return 262144;}}
function bm(){if(!dm){yl();dm=true}}
function em(a){return !(a!=null&&(a.tM!=fy&&a.tI!=2))&&(a!=null&&rj(a.tI,5))}
var dm=false;function yl(){Cl=function(b){if(Bl(b)){var a=Al;if(a&&a.__listener){if(em(a.__listener)){uk(b,a,a.__listener);b.stopPropagation()}}}};Bl=function(a){return true};Dl=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(em(c)){uk(b,a,c)}}};$wnd.addEventListener(ec,Cl,true);$wnd.addEventListener(fc,Cl,true);$wnd.addEventListener(nc,Cl,true);$wnd.addEventListener(sc,Cl,true);$wnd.addEventListener(oc,Cl,true);$wnd.addEventListener(qc,Cl,true);$wnd.addEventListener(pc,Cl,true);$wnd.addEventListener(vc,Cl,true);$wnd.addEventListener(ic,Bl,true);$wnd.addEventListener(kc,Bl,true);$wnd.addEventListener(jc,Bl,true)}
function zl(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
var Al=null,Bl=null,Cl=null,Dl=null;function hm(a){a.a=zw(new yw());return a}
function jm(d,b){var c,a;c=(a=b[yc],a==null?-1:a);if(c<0){return null}return sj(Dw(d.a,c),6)}
function km(d,b){var c,a;c=(a=b[yc],a==null?-1:a);b[yc]=null;Fw(d.a,c,null)}
function fm(){}
_=fm.prototype=new Cs();_.tI=0;function pm(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=ll()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{kl()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function wp(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new at()}j=ut(j);if(j.length==0){throw new hs()}i=c[zc]==null?null:String(c[zc]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Ac}c[zc]=i+j}}else{if(e!=-1){b=ut(i.substr(0,e-0));d=ut(st(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Ac+d}c[zc]=h}}}
function sp(){}
_=sp.prototype=new Cs();_.tI=14;_.j=null;function oq(b){var a;if(b.g){throw new ks()}b.g=true;b.j.__listener=b;a=b.h;b.h=-1;if(a>0){sq(b,a)}b.n();b.x()}
function pq(a){if(!a.g){throw new ks()}try{a.y()}finally{a.o();a.j.__listener=null;a.g=false}}
function qq(a){if(!a.i){lp();if(av(qp.a,a)){pq(a);mv(qp.a,a)!=null}}else if(a.i){a.i.z(a)}else if(a.i){throw new ks()}}
function rq(c,b){var a;a=c.i;if(!b){if(!!a&&a.g){pq(c)}c.i=null}else{if(a){throw new ks()}c.i=b;if(b.g){oq(c)}}}
function sq(b,a){if(b.h==-1){Ak(b.j,a|(b.j.__eventBits||0))}else{b.h|=a}}
function tq(){}
function uq(){}
function vq(a){var b;switch(Fl((af(),a).type)){case 16:case 32:b=a.relatedTarget;if(!!b&&this.j.contains(b)){return}}}
function wq(){}
function xq(){}
function Ep(){}
_=Ep.prototype=new sp();_.n=tq;_.o=uq;_.w=vq;_.x=wq;_.y=xq;_.tI=15;_.g=false;_.h=0;_.i=null;function ap(){var a,b;for(b=this.u();b.t();){a=sj(b.v(),7);oq(a)}}
function bp(){var a,b;for(b=this.u();b.t();){a=sj(b.v(),7);pq(a)}}
function cp(){}
function dp(){}
function Eo(){}
_=Eo.prototype=new Ep();_.n=ap;_.o=bp;_.x=cp;_.y=dp;_.tI=16;function Am(c,a,b){qq(a);hq(c.e,a);b.appendChild(a.j);rq(a,c)}
function Cm(b,c){var a;if(c.i!=b){return false}rq(c,null);a=c.j;ef((af(),a)).removeChild(a);mq(b.e,c);return true}
function Dm(){return cq(new aq(),this.e)}
function Em(a){return Cm(this,a)}
function ym(){}
_=ym.prototype=new Eo();_.u=Dm;_.z=Em;_.tI=17;function rm(a,b){Am(a,b,a.j)}
function tm(a){a.style[Bc]=Dc;a.style[Ec]=Dc;a.style[Fc]=Dc}
function um(b){var a;a=Cm(this,b);if(a){tm(b.j)}return a}
function qm(){}
_=qm.prototype=new ym();_.z=um;_.tI=18;function vm(){}
_=vm.prototype=new ym();_.tI=19;_.c=null;_.d=null;function co(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw os(new ns(),ad+a+bd+b)}}
function io(b,a){var c;if(a!=b.a.rows.length){co(b,a)}c=(af(),$doc).createElement(cd);zl(b.a,c,a);return a}
function jo(d,c,a){var b,e;b=df((af(),c));e=null;if(b){e=sj(jm(d.f,b),7)}if(e){ko(d,e);return true}else{if(a){c.innerHTML=Dc}return false}}
function ko(b,c){var a;if(c.i!=b){return false}rq(c,null);a=c.j;ef((af(),a)).removeChild(a);km(b.f,a);return true}
function mo(b,a){b.c=a;An(b.c)}
function oo(f,c,a,e){var d,b;fn(f,c,a);d=(b=f.b.a.a.rows[c].cells[a],jo(f,b,e==null),b);if(e!=null){ff((af(),d),e)}}
function po(){return mn(new kn(),this)}
function jn(){}
_=jn.prototype=new Eo();_.u=po;_.tI=20;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;function dn(a){a.f=hm(new fm());a.e=(af(),$doc).createElement(dd);a.a=$doc.createElement(ed);a.e.appendChild(a.a);a.j=a.e;a.b=bn(new an(),a);a.d=Cn(new Bn(),a);mo(a,yn(new xn(),a));return a}
function fn(e,d,b){var a,c;gn(e,d);if(b<0){throw os(new ns(),fd+b)}a=(co(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){hn(e.a,d,c)}}
function gn(d,b){var a,c;if(b<0){throw os(new ns(),gd+b)}c=d.a.rows.length;for(a=c;a<=b;++a){io(d,a)}}
function hn(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(id);e.appendChild(a)}}
function Fm(){}
_=Fm.prototype=new jn();_.tI=21;function sn(e,b,a,c){var d;fn(e.a,b,a);d=e.a.a.rows[b].cells[a];wp(d,c,true)}
function wn(d,b,a,c){fn(d.a,b,a);d.a.a.rows[b].cells[a][zc]=c}
function rn(){}
_=rn.prototype=new Cs();_.tI=0;_.a=null;function bn(b,a){b.a=a;return b}
function an(){}
_=an.prototype=new rn();_.tI=0;function mn(b,a){b.b=a;b.c=b.b.f.a;on(b);return b}
function on(a){while(++a.a<a.c.b){if(Dw(a.c,a.a)!=null){return}}}
function pn(){return this.a<this.c.b}
function qn(){var a;if(this.a>=this.c.b){throw new Ex()}a=sj(Dw(this.c,this.a),7);on(this);return a}
function kn(){}
_=kn.prototype=new Cs();_.t=pn;_.v=qn;_.tI=0;_.a=-1;_.b=null;function yn(b,a){b.b=a;return b}
function An(a){if(!a.a){a.a=(af(),$doc).createElement(jd);zl(a.b.e,a.a,0);a.a.appendChild($doc.createElement(kd))}}
function xn(){}
_=xn.prototype=new Cs();_.tI=0;_.a=null;_.b=null;function Cn(b,a){b.a=a;return b}
function Dn(c,a,b){wp((gn(c.a,a),c.a.a.rows[a]),b,true)}
function Bn(){}
_=Bn.prototype=new Cs();_.tI=0;_.a=null;function uo(){uo=fy;so(new ro(),ld);wo=so(new ro(),Bc);so(new ro(),md);vo=wo}
var vo,wo;function so(b,a){b.a=a;return b}
function ro(){}
_=ro.prototype=new Cs();_.tI=0;_.a=null;function Ao(){Ao=fy;yo(new xo(),nd);yo(new xo(),od);Bo=yo(new xo(),Ec)}
var Bo;function yo(a,b){a.a=b;return a}
function xo(){}
_=xo.prototype=new Cs();_.tI=0;_.a=null;function lp(){lp=fy;pp=gx(new fx());qp=kx(new jx())}
function kp(b,a){lp();b.e=gq(new Fp());b.j=a;oq(b);return b}
function mp(){var b,a;lp();var c,d;for(d=(b=fu(new eu(),rw(qp.a).b.a),bw(new aw(),b));tv(d.a.a);){c=sj((a=sj(uv(d.a.a),22),a.r()),7);if(c.g){pq(c)}}Eu(qp.a);Eu(pp)}
function op(b){lp();var a,c;c=sj(dv(pp,b),18);a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(c){if(!a||c.j==a){return c}}if(pp.d==0){hl(new fp())}if(!a){c=ip(new hp())}else{c=kp(new ep(),a)}jv(pp,b,c);lx(qp,c);return c}
function ep(){}
_=ep.prototype=new qm();_.tI=22;var pp,qp;function fp(){}
_=fp.prototype=new Cs();_.tI=23;function jp(){jp=fy;lp()}
function ip(a){jp();kp(a,$doc.body);return a}
function hp(){}
_=hp.prototype=new ep();_.tI=24;function zp(a){a.e=gq(new Fp());a.d=(af(),$doc).createElement(dd);a.c=$doc.createElement(ed);a.d.appendChild(a.c);a.j=a.d;a.a=(uo(),vo);a.b=(Ao(),Bo);a.d[pd]=qd;a.d[rd]=qd;return a}
function Ap(c,e){var b,d,a;d=(af(),$doc).createElement(cd);b=(a=$doc.createElement(id),(a[td]=c.a.a,undefined),(a.style[ud]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);qq(e);hq(c.e,e);b.appendChild(e.j);rq(e,c)}
function Dp(c){var a,b;b=ef((af(),c.j));a=Cm(this,c);if(a){this.c.removeChild(ef(b))}return a}
function xp(){}
_=xp.prototype=new vm();_.z=Dp;_.tI=25;function gq(a){a.a=kj(bk,0,7,4,0);return a}
function hq(a,b){kq(a,b,a.b)}
function jq(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function kq(d,e,a){var b,c;if(a<0||a>d.b){throw new ns()}if(d.b==d.a.length){c=kj(bk,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){mj(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){mj(d.a,b,d.a[b-1])}mj(d.a,a,e)}
function lq(c,b){var a;if(b<0||b>=c.b){throw new ns()}--c.b;for(a=b;a<c.b;++a){mj(c.a,a,c.a[a+1])}mj(c.a,c.b,null)}
function mq(b,c){var a;a=jq(b,c);if(a==-1){throw new Ex()}lq(b,a)}
function Fp(){}
_=Fp.prototype=new Cs();_.tI=0;_.a=null;_.b=0;function cq(b,a){b.b=a;return b}
function eq(){return this.a<this.b.b-1}
function fq(){if(this.a>=this.b.b){throw new Ex()}return this.b.a[++this.a]}
function aq(){}
_=aq.prototype=new Cs();_.t=eq;_.v=fq;_.tI=0;_.a=-1;_.b=null;function Aq(a){a.b=zp(new xp());a.c=lj(dk,0,1,[vd,wd,xd,yd,zd,Ad]);return a}
function Bq(f){var a,b,c,d,e;for(c=f.c,d=0,e=c.length;d<e;++d){b=c[d];a=ar(new Fq(),b);br(a,f.a);Bw((hr(),ir),a);$wnd.gwtStreamHub.subscribe(b,$wnd.gwtStreamHubUpdate)}}
function Eq(b){var a;b.a=(a=dn(new Fm()),oo(a,0,0,Bd),oo(a,0,1,Cd),oo(a,0,2,Ed),oo(a,0,3,Fd),wp(a.j,ae,true),Dn(a.d,0,be),sn(a.b,0,2,ce),sn(a.b,0,3,ce),a.e[rd]=6,a);Ap(b.b,b.a);wp(b.b.j,de,true);rm(op(ae),b.b);hr();$wnd.gwtStreamHub=new $wnd.StreamHub();new fr();$wnd.gwtStreamHubUpdate=jr;$wnd.gwtStreamHub.connect(ee);Bq(b)}
function yq(){}
_=yq.prototype=new Cs();_.tI=0;_.a=null;function ar(b,a){b.e=a;b.a=fe;b.d=0;return b}
function br(b,a){b.b=a;b.c=a.a.rows.length;oo(a,b.c,0,b.e);oo(a,b.c,1,b.a);oo(a,b.c,2,Dc+b.d);oo(a,b.c,3,ge);sn(a.b,b.c,2,ce);sn(a.b,b.c,3,ce)}
function dr(b,a){if(a.a>0){wn(b.b.b,b.c,3,he)}else if(a.a==0){wn(b.b.b,b.c,3,t)}else{wn(b.b.b,b.c,3,u)}}
function er(f,g,h){var a,b,c,d,e;if(ot(f.e,g)){d=sj(ii(h,v),16).a;c=sj(ii(h,Cd),16).a;e=sj(ii(h,w),16).a;a=sj(ii(h,Fd),16).a;b=bs(new as(),zs(a));oo(f.b,f.c,1,c);oo(f.b,f.c,2,d);oo(f.b,f.c,3,a+x+e+y);dr(f,b)}}
function Fq(){}
_=Fq.prototype=new Cs();_.tI=26;_.a=null;_.b=null;_.c=0;_.d=0;_.e=null;function hr(){hr=fy;ir=zw(new yw())}
function jr(d,e){hr();var a,b,c;a=fi(new ei(),e);for(c=rv(new pv(),ir);c.a<c.b.b;){b=sj(uv(c),19);er(b,d,a)}}
function fr(){}
_=fr.prototype=new Cs();_.tI=0;var ir;function tr(){}
_=tr.prototype=new at();_.tI=28;function Ar(c,a){var b;b=new wr();return b}
function wr(){}
_=wr.prototype=new Cs();_.tI=0;function xr(){}
_=xr.prototype=new at();_.tI=32;function zs(a){var b;b=As(a);if(isNaN(b)){throw vs(new us(),z+a+A)}return b}
function As(b){var a=Bs;if(!a){a=Bs=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i}if(a.test(b)){return parseFloat(b)}else{return Number.NaN}}
function ts(){}
_=ts.prototype=new Cs();_.tI=33;var Bs=null;function bs(a,b){a.a=b;return a}
function ds(a){return a!=null&&rj(a.tI,21)&&sj(a,21).a==this.a}
function es(){return ~~Math.max(Math.min(this.a,2147483647),-2147483648)}
function as(){}
_=as.prototype=new ts();_.eQ=ds;_.hC=es;_.tI=34;_.a=0;function hs(){}
_=hs.prototype=new at();_.tI=35;function ks(){}
_=ks.prototype=new at();_.tI=36;function os(b,a){return b}
function ns(){}
_=ns.prototype=new at();_.tI=37;function rs(){}
_=rs.prototype=new at();_.tI=38;function vs(b,a){return b}
function us(){}
_=us.prototype=new hs();_.tI=39;function ot(b,a){if(!(a!=null&&rj(a.tI,1))){return false}return String(b)==a}
function st(b,a){return b.substr(a,b.length-a)}
function ut(c){if(c.length==0||c[0]>Ac&&c[c.length-1]>Ac){return c}var a=c.replace(/^(\s*)/,Dc);var b=a.replace(/\s*$/,Dc);return b}
function wt(a){return ot(this,a)}
function xt(){return kt(this)}
_=String.prototype;_.eQ=wt;_.hC=xt;_.tI=2;function ft(){ft=fy;gt={};jt={}}
function ht(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function kt(c){ft();var a=B+c;var b=jt[a];if(b!=null){return b}b=gt[a];if(b==null){b=ht(c)}lt();return jt[a]=b}
function lt(){if(it==256){gt=jt;jt={};it=0}++it}
var gt,it=0,jt;function At(){}
_=At.prototype=new at();_.tI=41;function Et(a,b){var c;while(a.t()){c=a.v();if(b==null?c==null:pe(b,c)){return a}}return null}
function au(a){throw new At()}
function bu(b){var a;a=Et(this.u(),b);return !!a}
function Dt(){}
_=Dt.prototype=new Cs();_.k=au;_.l=bu;_.tI=0;function rw(b){var a;a=ju(new du(),b);return gw(new Fv(),b,a)}
function sw(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&rj(c.tI,23))){return false}e=sj(c,23);if(sj(this,23).d!=e.d){return false}for(b=fu(new eu(),ju(new du(),e).a);tv(b.a);){a=sj(uv(b.a),22);d=a.r();f=a.s();if(!(d==null?sj(this,23).c:d!=null&&rj(d.tI,1)?fv(sj(this,23),sj(d,1)):ev(sj(this,23),d,~~re(d)))){return false}if(!ey(f,d==null?sj(this,23).b:d!=null&&rj(d.tI,1)?sj(this,23).e[B+sj(d,1)]:bv(sj(this,23),d,~~re(d)))){return false}}return true}
function tw(){var a,b,c;c=0;for(b=fu(new eu(),ju(new du(),sj(this,23)).a);tv(b.a);){a=sj(uv(b.a),22);c+=a.hC();c=~~c}return c}
function Ev(){}
_=Ev.prototype=new Cs();_.eQ=sw;_.hC=tw;_.tI=0;function Cu(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function Du(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=Au(e,c.substring(1));a.k(b)}}}
function Eu(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function av(b,a){return a==null?b.c:a!=null&&rj(a.tI,1)?fv(b,sj(a,1)):ev(b,a,~~re(a))}
function dv(b,a){return a==null?b.b:a!=null&&rj(a.tI,1)?b.e[B+sj(a,1)]:bv(b,a,~~re(a))}
function bv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return c.s()}}}return null}
function ev(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){return true}}}return false}
function fv(b,a){return B+a in b.e}
function jv(b,a,c){return a==null?hv(b,c):a!=null&&rj(a.tI,1)?iv(b,sj(a,1),c):gv(b,a,c,~~re(a))}
function gv(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(i.p(g,d)){var h=c.s();c.A(j);return h}}}else{a=i.a[e]=[]}var c=xx(new wx(),g,j);a.push(c);++i.d;return null}
function hv(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function iv(d,a,e){var b,c=d.e;a=B+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function mv(b,a){return !a?lv(b):kv(b,a,~~(a.$H||(a.$H=++xe)))}
function kv(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.p(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.s()}}}return null}
function lv(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function nv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function cu(){}
_=cu.prototype=new Ev();_.p=nv;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function ww(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&rj(b.tI,24))){return false}c=sj(b,24);if(c.B()!=this.B()){return false}for(a=c.u();a.t();){d=a.v();if(!this.l(d)){return false}}return true}
function xw(){var a,b,c;a=0;for(b=this.u();b.t();){c=b.v();if(c!=null){a+=re(c);a=~~a}}return a}
function uw(){}
_=uw.prototype=new Dt();_.eQ=ww;_.hC=xw;_.tI=42;function ju(b,a){b.a=a;return b}
function lu(d,c){var a,b,e;if(c!=null&&rj(c.tI,22)){a=sj(c,22);b=a.r();if(av(d.a,b)){e=dv(d.a,b);return ix(a.s(),e)}}return false}
function mu(a){return lu(this,a)}
function nu(){return fu(new eu(),this.a)}
function ou(){return this.a.d}
function du(){}
_=du.prototype=new uw();_.l=mu;_.u=nu;_.B=ou;_.tI=43;_.a=null;function fu(c,b){var a;c.b=b;a=zw(new yw());if(c.b.c){Bw(a,qu(new pu(),c.b))}Du(c.b,a);Cu(c.b,a);c.a=rv(new pv(),a);return c}
function hu(){return tv(this.a)}
function iu(){return sj(uv(this.a),22)}
function eu(){}
_=eu.prototype=new Cs();_.t=hu;_.v=iu;_.tI=0;_.a=null;_.b=null;function ow(b){var a;if(b!=null&&rj(b.tI,22)){a=sj(b,22);if(ey(this.r(),a.r())&&ey(this.s(),a.s())){return true}}return false}
function pw(){var a,b;a=0;b=0;if(this.r()!=null){a=re(this.r())}if(this.s()!=null){b=re(this.s())}return a^b}
function mw(){}
_=mw.prototype=new Cs();_.eQ=ow;_.hC=pw;_.tI=44;function qu(b,a){b.a=a;return b}
function su(){return null}
function tu(){return this.a.b}
function uu(a){return hv(this.a,a)}
function pu(){}
_=pu.prototype=new mw();_.r=su;_.s=tu;_.A=uu;_.tI=45;_.a=null;function wu(c,a,b){c.b=b;c.a=a;return c}
function yu(){return this.a}
function zu(){return this.b.e[B+this.a]}
function Au(b,a){return wu(new vu(),a,b)}
function Bu(a){return iv(this.b,this.a,a)}
function vu(){}
_=vu.prototype=new mw();_.r=yu;_.s=zu;_.A=Bu;_.tI=46;_.a=null;_.b=null;function yv(a){Aw(this,this.B(),a);return true}
function zv(a,b){if(a<0||a>=b){Cv(a,b)}}
function Av(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&rj(e.tI,3))){return false}f=sj(e,3);if(this.B()!=f.b){return false}c=rv(new pv(),sj(this,3));d=rv(new pv(),f);while(c.a<c.b.b){a=uv(c);b=uv(d);if(!(a==null?b==null:pe(a,b))){return false}}return true}
function Bv(){var a,b,c;b=1;a=rv(new pv(),sj(this,3));while(a.a<a.b.b){c=uv(a);b=31*b+(c==null?0:re(c));b=~~b}return b}
function Cv(a,b){throw os(new ns(),C+a+E+b)}
function Dv(){return rv(new pv(),sj(this,3))}
function ov(){}
_=ov.prototype=new Dt();_.k=yv;_.eQ=Av;_.hC=Bv;_.u=Dv;_.tI=0;function rv(b,a){b.b=a;return b}
function tv(a){return a.a<a.b.b}
function uv(a){if(a.a>=a.b.b){throw new Ex()}return Dw(a.b,a.a++)}
function vv(){return this.a<this.b.b}
function wv(){return uv(this)}
function pv(){}
_=pv.prototype=new Cs();_.t=vv;_.v=wv;_.tI=0;_.a=0;_.b=null;function gw(b,a,c){b.a=a;b.b=c;return b}
function jw(a){return av(this.a,a)}
function kw(){var a;return a=fu(new eu(),this.b.a),bw(new aw(),a)}
function lw(){return this.b.a.d}
function Fv(){}
_=Fv.prototype=new uw();_.l=jw;_.u=kw;_.B=lw;_.tI=47;_.a=null;_.b=null;function bw(a,b){a.a=b;return a}
function ew(){return tv(this.a.a)}
function fw(){var a;return a=sj(uv(this.a.a),22),a.r()}
function aw(){}
_=aw.prototype=new Cs();_.t=ew;_.v=fw;_.tI=0;_.a=null;function zw(a){a.a=kj(ck,0,0,0,0);a.b=0;return a}
function Bw(b,a){mj(b.a,b.b++,a);return true}
function Aw(c,a,b){if(a<0||a>c.b){Cv(a,c.b)}c.a.splice(a,0,b);++c.b}
function Dw(b,a){zv(a,b.b);return b.a[a]}
function Ew(c,b,a){for(;a<c.b;++a){if(ey(b,c.a[a])){return a}}return -1}
function Fw(d,a,b){var c;c=(zv(a,d.b),d.a[a]);mj(d.a,a,b);return c}
function ax(a){return mj(this.a,this.b++,a),true}
function bx(a){return Ew(this,a,0)!=-1}
function cx(){return this.b}
function yw(){}
_=yw.prototype=new ov();_.k=ax;_.l=bx;_.B=cx;_.tI=48;_.a=null;_.b=0;function gx(a){Eu(a);return a}
function ix(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function fx(){}
_=fx.prototype=new cu();_.tI=49;function kx(a){a.a=gx(new fx());return a}
function lx(c,a){var b;b=jv(c.a,a,c);return b==null}
function px(b){var a;return a=jv(this.a,b,this),a==null}
function qx(a){return av(this.a,a)}
function rx(){var a;return a=fu(new eu(),rw(this.a).b.a),bw(new aw(),a)}
function sx(){return this.a.d}
function jx(){}
_=jx.prototype=new uw();_.k=px;_.l=qx;_.u=rx;_.B=sx;_.tI=50;_.a=null;function xx(b,a,c){b.a=a;b.b=c;return b}
function zx(){return this.a}
function Ax(){return this.b}
function Cx(b){var a;a=this.b;this.b=b;return a}
function wx(){}
_=wx.prototype=new mw();_.r=zx;_.s=Ax;_.A=Cx;_.tI=51;_.a=null;_.b=null;function Ex(){}
_=Ex.prototype=new at();_.tI=52;function ey(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function rr(){!!$stats&&$stats({moduleName:$moduleName,subSystem:F,evtGroup:ab,millis:(new Date()).getTime(),type:bb,className:cb});Eq(Aq(new yq()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{rr()}catch(a){b(d)}else{rr()}}
function fy(){}
var dk=Ar(db,eb),bk=Ar(fb,gb),ck=Ar(db,hb);$stats && $stats({moduleName:'gwtstocktabledemo',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (gwtstocktabledemo) gwtstocktabledemo.onScriptLoad(gwtOnLoad);})();