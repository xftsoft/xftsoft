(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var aa={},l=this||self;function p(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)};function q(a){q[" "](a);return a}q[" "]=function(){};var ba={A:{value:!0,configurable:!0}};var v=Object,ca=v.freeze,x=[];Array.isArray(x)&&!Object.isFrozen(x)&&Object.defineProperties(x,ba);ca.call(v,x);function y(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var da=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function z(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{q(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function A(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function ea(a){l.google_image_requests||(l.google_image_requests=[]);var b=l.document.createElement("img");b.src=a;l.google_image_requests.push(b)};var B=document,ka=window;var C=!!window.google_async_iframe_id,E=C&&window.parent||window;var la=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function ma(a,b){this.g=a;this.h=b}function F(a,b){this.url=a;this.o=!!b;this.depth=null};function G(){this.i="&";this.h={};this.u=0;this.g=[]}function H(a,b){var c={};c[a]=b;return[c]}function I(a,b,c,d,f){var e=[];A(a,function(g,m){(g=J(g,b,c,d,f))&&e.push(m+"="+g)});return e.join(b)} 
function J(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var e=[],g=0;g<a.length;g++)e.push(J(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(I(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))} 
function na(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=oa(a)-c.length;if(0>d)return"";a.g.sort(function(n,r){return n-r});c=null;for(var f="",e=0;e<a.g.length;e++)for(var g=a.g[e],m=a.h[g],h=0;h<m.length;h++){if(!d){c=null==c?g:c;break}var k=I(m[h],a.i,",$");if(k){k=f+k;if(d>=k.length){d-=k.length;b+=k;f=a.i;break}c=null==c?g:c}}a="";null!=c&&(a=f+"trn="+c);return b+a}function oa(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function pa(a,b,c,d,f){if((d?a.g:Math.random())<(f||.01))try{if(c instanceof G)var e=c;else e=new G,A(c,function(m,h){var k=e,n=k.u++;m=H(h,m);k.g.push(n);k.h[n]=m});var g=na(e,a.h,"/pagead/gen_204?id="+b+"&");g&&ea(g)}catch(m){}};var K=null;function qa(){var a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function ra(){var a=void 0===a?l:a;return(a=a.performance)&&a.now?a.now():null};function sa(a,b){var c=ra()||qa();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var L=l.performance,ta=!!(L&&L.mark&&L.measure&&L.clearMarks),P=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=ta){var b;if(null===K){K="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(K=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=K;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function Q(){var a=R;this.h=[];this.i=a||l;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=P()||(null!=b?b:1>Math.random())}function ua(a){a&&L&&P()&&(L.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),L.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}Q.prototype.start=function(a,b){if(!this.g)return null;a=new sa(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";L&&P()&&L.mark(b);return a}; 
Q.prototype.end=function(a){if(this.g&&"number"===typeof a.value){a.duration=(ra()||qa())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";L&&P()&&L.mark(b);!this.g||2048<this.h.length||this.h.push(a)}};function va(){var a=S;this.i=T;this.m="jserror";this.v=!0;this.g=null;this.s=this.l;this.j=void 0===a?null:a;this.h=!1} 
va.prototype.l=function(a,b,c,d,f){f=f||this.m;try{var e=new G;e.g.push(1);e.h[1]=H("context",a);b.error&&b.meta&&b.id||(b=new y(b,{message:U(b)}));if(b.msg){var g=b.msg.substring(0,512);e.g.push(2);e.h[2]=H("msg",g)}var m=b.meta||{};if(this.g)try{this.g(m)}catch(D){}if(d)try{d(m)}catch(D){}b=[m];e.g.push(3);e.h[3]=b;d=l;b=[];g=null;do{var h=d;if(z(h)){var k=h.location.href;g=h.document&&h.document.referrer||null}else k=g,g=null;b.push(new F(k||""));try{d=h.parent}catch(D){d=null}}while(d&&h!=d); 
k=0;for(var n=b.length-1;k<=n;++k)b[k].depth=n-k;h=l;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(n=1;n<b.length;++n){var r=b[n];r.url||(r.url=h.location.ancestorOrigins[n-1]||"",r.o=!0)}var t=new F(l.location.href,!1);h=null;var M=b.length-1;for(r=M;0<=r;--r){var u=b[r];!h&&la.test(u.url)&&(h=u);if(u.url&&!u.o){t=u;break}}u=null;var Ba=b.length&&b[M].url;0!=t.depth&&Ba&&(u=b[M]);var w=new ma(t,u);if(w.h){var Ca=w.h.url||"";e.g.push(4);e.h[4]=H("top", 
Ca)}var N={url:w.g.url||""};if(w.g.url){var O=w.g.url.match(da),fa=O[1],ha=O[3],ia=O[4];t="";fa&&(t+=fa+":");ha&&(t+="//",t+=ha,ia&&(t+=":"+ia));var ja=t}else ja="";N=[N,{url:ja}];e.g.push(5);e.h[5]=N;pa(this.i,f,e,this.h,c)}catch(D){try{pa(this.i,f,{context:"ecmserr",rctx:a,msg:U(D),url:w&&w.g.url},this.h,c)}catch(Ha){}}return!0}; 
function U(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var T,V;if(C&&!z(E)){var W="."+B.domain;try{for(;2<W.split(".").length&&!z(E);)B.domain=W=W.substr(W.indexOf(".")+1),E=window.parent}catch(a){}z(E)||(E=window)}var R=E,S=new Q;function wa(){if(!R.google_measure_js_timing){var a=S;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(P()&&p(a.h,ua),a.h.length=0)}}T=new function(){var a=void 0===a?ka:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()};"number"!==typeof R.google_srt&&(R.google_srt=Math.random());var xa=T,X=R.google_srt; 
0<=X&&1>=X&&(xa.g=X);V=new va;V.g=function(){};V.h=!0;if("complete"==R.document.readyState)wa();else if(S.g){var ya=function(){wa()},za=R;za.addEventListener&&za.addEventListener("load",ya,!1)}function Aa(a,b,c){V.l(a,b,1,c)};function Da(a){a.error&&a.meta&&a.id&&a.context&&(V.m=a.id,Aa(a.context,a.error,function(b){A(a.meta,function(c,d){b[d]=c})}))};function Ea(){l.google_js_errors=l.google_js_errors||[];p(l.google_js_errors,Da);l.google_js_errors={push:Da}}var Y;try{V.j&&V.j.g?(Y=V.j.start((284).toString(),3),Ea(),V.j.end(Y)):Ea()}catch(a){var Fa=V.v;try{ua(Y),Fa=V.s(284,new y(a,{message:U(a)}),void 0,void 0)}catch(b){V.l(217,b)}if(Fa){var Z,Ga;null==(Z=window.console)||null==(Ga=Z.error)||Ga.call(Z,a)}else throw a;};}).call(this);
