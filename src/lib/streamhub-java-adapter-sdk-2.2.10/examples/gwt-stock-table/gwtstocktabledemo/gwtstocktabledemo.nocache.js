function gwtstocktabledemo(){var l='',ic='\n--><\/script>',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',Cb='"<script src=\\"',n='"><\/script>',p='#',hc=');',r='/',sb='05C3637FF5F2BB9B0D8FFAFC55338E89.cache.js',pb='14EB616A3A99C91F740CFABD11607DA2.cache.js',qb='40980CCFD7784AD824C61F0265517EDC.cache.js',ob='50AF1AD0917AB8D389A0554235689D84.cache.js',lc='<script id="',Eb='<script><!--\n',A='=',q='?',C='Bad handler "',kb='Cross-site hosted mode not yet implemented. See issue ',Ab='DOMContentLoaded',rb='E7CCA1AC82220EFBFF5AFCA1718516F4.cache.js',o='SCRIPT',Db='\\"><\/scr" + "ipt>"',kc='__gwt_marker_gwtstocktabledemo',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',z='content',gc='document.write(',jc='end',bc='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',ec='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',hb='gecko',ib='gecko1_8',yb='gwt.hybrid',tb='gwt/standard/standard.css',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',m='gwtstocktabledemo',zb='head',xb='href',lb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',gb='ie6',t='img',ub='link',Bb='loadExternalRefs',v='meta',ac='moduleName:"gwtstocktabledemo", subSystem:"startup",',dc='moduleStartup',fb='msie',w='name',bb='opera',vb='rel',eb='safari',mb='selectingPermutation',x='startup',wb='stylesheet',cc='type: "end"});',fc='type: "moduleRequested"});',jb='unknown',ab='user.agent',db='webkit',Fb='window.__gwtStatsEvent && window.__gwtStatsEvent({';var nc=window,k=document,mc=nc.__gwtStatsEvent?function(a){return nc.__gwtStatsEvent(a)}:null,wc,sc,rc=l,zc={},cd=[],Fc=[],qc=[],Cc,Ec;mc&&mc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!nc.__gwt_stylesLoaded){nc.__gwt_stylesLoaded={}}if(!nc.__gwt_scriptsLoaded){nc.__gwt_scriptsLoaded={}}function xc(){try{return nc.external&&(nc.external.gwtOnLoad&&nc.location.search.indexOf(yb)==-1)}catch(a){return false}}
function yc(){if(wc&&sc){wc(Cc,m,rc);mc&&mc({moduleName:m,subSystem:x,evtGroup:dc,millis:(new Date()).getTime(),type:jc})}}
function vc(){var j,h=kc,i;k.write(lc+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){rc=f(j.src)}if(rc==l){var e=k.getElementsByTagName(s);if(e.length>0){rc=e[e.length-1].href}else{rc=f(k.location.href)}}else if(rc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=rc+u;rc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function Dc(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}zc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{Ec=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{Cc=eval(b)}catch(a){alert(C+b+F)}}}}}}
function bd(d,e){var a=qc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function uc(d){var e=Fc[d](),b=cd[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(Ec){Ec(d,a,e)}throw null}
Fc[ab]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(bb)!=-1){return bb}else if(d.indexOf(db)!=-1){return eb}else if(d.indexOf(fb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return gb}}}else if(d.indexOf(hb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return ib}return hb}return jb};cd[ab]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};gwtstocktabledemo.onScriptLoad=function(a){gwtstocktabledemo=null;wc=a;yc()};if(xc()){alert(kb+lb);return}vc();Dc();mc&&mc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:mb});var ad;try{bd([eb],ob);bd([bb],pb);bd([gb],qb);bd([ib],rb);bd([hb],sb);ad=qc[uc(ab)]}catch(a){return}var Bc;function Ac(){if(!sc){sc=true;if(!__gwt_stylesLoaded[tb]){var a=k.createElement(ub);__gwt_stylesLoaded[tb]=a;a.setAttribute(vb,wb);a.setAttribute(xb,rc+tb);k.getElementsByTagName(zb)[0].appendChild(a)}yc();if(k.removeEventListener){k.removeEventListener(Ab,Ac,false)}if(Bc){clearInterval(Bc)}}}
if(k.addEventListener){k.addEventListener(Ab,function(){Ac()},false)}var Bc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){Ac()}},50);mc&&mc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:jc});mc&&mc({moduleName:m,subSystem:x,evtGroup:Bb,millis:(new Date()).getTime(),type:nb});var tc=Cb+rc+ad+Db;k.write(Eb+Fb+ac+bc+cc+Fb+ac+ec+fc+gc+tc+hc+ic)}
gwtstocktabledemo();