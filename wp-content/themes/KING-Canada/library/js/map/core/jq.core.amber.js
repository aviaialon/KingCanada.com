/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});


/* JQUERY EOF */




/*! jQuery Migrate v1.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){o[n]||(o[n]=!0,e.migrateWarnings.push(n),t.console&&console.warn&&!e.migrateMute&&console.warn("JQMIGRATE: "+n))
}function a(t,a,o,i){if(Object.defineProperty){try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(i),o
},set:function(e){r(i),o=e
}}),n
}catch(u){}}e._definePropertyBroken=!0,t[a]=o
}var o={};
e.migrateWarnings=[],e.migrateReset=function(){o={},e.migrateWarnings.length=0
},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");
var i={},u=e.attr,s=e.attrHooks.value&&e.attrHooks.value.get||function(){return null
},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n
},d=/^(?:input|button)$/i,l=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;
a(e,"attrFn",i,"jQuery.attrFn is deprecated"),e.attr=function(t,a,o,i){var s=a.toLowerCase(),c=t&&t.nodeType;
return i&&(r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!l.test(c)&&e.isFunction(e.fn[a]))?e(t)[a](o):("type"===a&&o!==n&&d.test(t.nodeName)&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[s]&&p.test(s)&&(e.attrHooks[s]={get:function(t,r){var a,o=e.prop(t,r);
return o===!0||"boolean"!=typeof o&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n
},set:function(t,n,r){var a;
return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r
}},f.test(s)&&r("jQuery.fn.attr("+s+") may use property instead of attribute")),u.call(e,t,a,o))
},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();
return"button"===n?s.apply(this,arguments):("input"!==n&&"option"!==n&&r("property-based jQuery.fn.attr('value') is deprecated"),t in e?e.value:null)
},set:function(e,t){var a=(e.nodeName||"").toLowerCase();
return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("property-based jQuery.fn.attr('value', val) is deprecated"),e.value=t,n)
}};
var g,h,m=e.fn.init,v=/^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
e.fn.init=function(t,n,a){var o;
return t&&"string"==typeof t&&!e.isPlainObject(n)&&(o=v.exec(t))&&o[1]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),n&&n.context&&(n=n.context),e.parseHTML)?m.call(this,e.parseHTML(e.trim(t),n,!0),n,a):m.apply(this,arguments)
},e.fn.init.prototype=e.fn,e.uaMatch=function(e){e=e.toLowerCase();
var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];
return{browser:t[1]||"",version:t[2]||"0"}
},g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h,a(e,"browser",h,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)
}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)
},t.fn.init.prototype=t.fn;
var n=t(document);
return r("jQuery.sub() is deprecated"),t
};
var y=e.fn.data;
e.fn.data=function(t){var a,o,i=this[0];
return !i||"events"!==t||1!==arguments.length||(a=e.data(i,t),o=e._data(i,t),a!==n&&a!==o||o===n)?y.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),o)
};
var b=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack,j=e.buildFragment;
e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)
},e.clean||(e.clean=function(t,a,o,i){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");
var u,s,c,d,l=[];
if(e.merge(l,e.buildFragment(t,a).childNodes),o){for(c=function(e){return !e.type||b.test(e.type)?i?i.push(e.parentNode?e.parentNode.removeChild(e):e):o.appendChild(e):n
},u=0;
null!=(s=l[u]);
u++){e.nodeName(s,"script")&&c(s)||(o.appendChild(s),s.getElementsByTagName!==n&&(d=e.grep(e.merge([],s.getElementsByTagName("script")),c),l.splice.apply(l,[u+1,0].concat(d)),u+=d.length))
}}return l
}),e.buildFragment=function(t,n,o,i){var u,s="jQuery.buildFragment() is deprecated";
n=n||document,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n;
try{u=j.call(e,t,n,o,i)
}catch(c){u=j.call(e,t,n.nodeType?[n]:n[0],o,i),r(s)
}return u.fragment||(a(u,"fragment",u,s),a(u,"cacheable",!1,s)),u
};
var Q=e.event.add,x=e.event.remove,k=e.event.trigger,C=e.fn.toggle,N=e.fn.live,T=e.fn.die,H="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",M=RegExp("\\b(?:"+H+")\\b"),F=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(F.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(F,"mouseenter$1 mouseleave$1"))
};
e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,o){e!==document&&M.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,o)
},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)
},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);
return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)
},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n)){return C.apply(this,arguments)
}r("jQuery.fn.toggle(handler, handler...) is deprecated");
var a=arguments,o=t.guid||e.guid++,i=0,u=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%i;
return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1
};
for(u.guid=o;
a.length>i;
){a[i++].guid=o
}return this.click(u)
},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),N?N.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)
},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),T?T.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)
},e.event.trigger=function(e,t,n,a){return !n&!M.test(e)&&r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)
},e.each(H.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;
return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)
}),e._data(this,n,e.guid++)),!1
},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1
}}
})
}(jQuery,window);
/*! jQuery UI - v1.10.0 - 2013-02-04
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.tooltip.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();
return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)
}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"
}).length
}var n=0,r=/^ui-id-\d+$/;
e.ui=e.ui||{};
if(e.ui.version){return
}e.extend(e.ui,{version:"1.10.0",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;
setTimeout(function(){e(r).focus(),n&&n.call(r)
},t)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var t;
return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))
}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))
}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t
},zIndex:function(n){if(n!==t){return this.css("zIndex",n)
}if(this.length){var r=e(this[0]),i,s;
while(r.length&&r[0]!==document){i=r.css("position");
if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);
if(!isNaN(s)&&s!==0){return s
}}r=r.parent()
}}return 0
},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)
})
},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")
})
}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return !!e.data(n,t)
}
}):function(t,n,r){return !!e.data(t,r[3])
},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))
},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);
return(r||n>=0)&&i(t,!r)
}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)
}),n
}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};
e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")
})
},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")
})
}
}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)
}
}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart" in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;
for(i in r){s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])
}},call:function(e,t,n){var r,i=e.plugins[t];
if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11){return
}for(r=0;
r<i.length;
r++){e.options[i[r][0]]&&i[r][1].apply(e.element,n)
}}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden"){return !1
}var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;
return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)
}})
})(jQuery);
(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;
e.cleanData=function(t){for(var n=0,r;
(r=t[n])!=null;
n++){try{e(r).triggerHandler("remove")
}catch(s){}}i(t)
},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];
t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return !!e.data(t,i)
},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget){return new o(e,t)
}arguments.length&&this._createWidget(e,t)
},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;
return
}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)
},i=function(e){return n.prototype[t].apply(this,e)
};
return function(){var t=this._super,n=this._superApply,s;
return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s
}
}()
}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;
e.widget(r.namespace+"."+r.widgetName,o,n._proto)
}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)
},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;
for(;
s<o;
s++){for(u in i[s]){a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a)
}}return n
},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;
e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;
return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);
if(!i){return e.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+o+"'")
}if(!e.isFunction(i[o])||o.charAt(0)==="_"){return e.error("no such method '"+o+"' for "+n+" widget instance")
}r=i[o].apply(i,a);
if(r!==i&&r!==t){return f=r&&r.jquery?f.pushStack(r.get()):r,!1
}}):this.each(function(){var t=e.data(this,s);
t?t.option(o||{})._init():e.data(this,s,new i(o,this))
}),f
}
},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()
}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:e.noop,widget:function(){return this.element
},option:function(n,r){var i=n,s,o,u;
if(arguments.length===0){return e.widget.extend({},this.options)
}if(typeof n=="string"){i={},s=n.split("."),n=s.shift();
if(s.length){o=i[n]=e.widget.extend({},this.options[n]);
for(u=0;
u<s.length-1;
u++){o[s[u]]=o[s[u]]||{},o=o[s[u]]
}n=s.pop();
if(r===t){return o[n]===t?null:o[n]
}o[n]=r
}else{if(r===t){return this.options[n]===t?null:this.options[n]
}i[n]=r
}}return this._setOptions(i),this
},_setOptions:function(e){var t;
for(t in e){this._setOption(t,e[t])
}return this
},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this
},enable:function(){return this._setOption("disabled",!1)
},disable:function(){return this._setOption("disabled",!0)
},_on:function(t,n,r){var i,s=this;
typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled"))){return
}return(typeof o=="string"?s[o]:o).apply(s,arguments)
}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);
var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];
l?i.delegate(l,f,u):n.bind(f,u)
})
},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)
},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)
}var r=this;
return setTimeout(n,t||0)
},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")
},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")
},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(t,n,r){var i,s,o=this.options[t];
r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;
if(s){for(i in s){i in n||(n[i]=s[i])
}}return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())
}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});
var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;
i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()
})
}
})
})(jQuery);
(function(e,t){var n=!1;
e(document).mouseup(function(){n=!1
}),e.widget("ui.mouse",{version:"1.10.0",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;
this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)
}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent")){return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1
}}),this.started=!1
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(t){if(n){return
}this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;
var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;
if(!i||s||!this._mouseCapture(t)){return !0
}this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0
},this.options.delay));
if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;
if(!this._mouseStarted){return t.preventDefault(),!0
}}return !0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)
},this._mouseUpDelegate=function(e){return r._mouseUp(e)
},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0
},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)
},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1
},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}})
})(jQuery);
(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]
}function p(t,n){return parseInt(e.css(t,n),10)||0
}function d(t){var n=t[0];
return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}
}e.ui=e.ui||{};
var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;
e.position={scrollbarWidth:function(){if(n!==t){return n
}var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];
return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i
},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;
return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}
},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);
return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}
}},e.fn.position=function(t){if(!t||!t.of){return c.apply(this,arguments)
}t=e.extend({},t);
var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};
return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;
e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]
}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());
t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})
}),t.using&&(u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};
l<f&&i(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)
}),a.offset(e.extend(C,{using:u}))
})
},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;
t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)
},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;
t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)
}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;
if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;
if(p<0||p<i(a)){e.left+=l+c+h
}}else{if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;
if(d>0||i(d)<f){e.left+=l+c+h
}}}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;
a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))
}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)
},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)
}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");
t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});
for(s in r){t.style[s]=r[s]
}t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)
}()
})(jQuery);
(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()
},_mouseCapture:function(t){var n=this.options;
return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(e(this).offset()).appendTo("body")
}),!0):!1)
},_mouseStart:function(t){var n=this.options;
return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)
},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");
if(!n){var r=this._uiHash();
if(this._trigger("drag",t,r)===!1){return this._mouseUp({}),!1
}this.position=r.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1
},_mouseStop:function(t){var n,r=this,i=!1,s=!1;
e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];
while(n&&(n=n.parentNode)){n===document&&(i=!0)
}return !i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()
}):this._trigger("stop",t)!==!1&&this._clear(),!1)
},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this
},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;
return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)
}),n
},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;
return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r
},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left" in t&&(this.offset.click.left=t.left+this.margins.left),"right" in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top" in t&&(this.offset.click.top=t.top+this.margins.top),"bottom" in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var t=this.offsetParent.offset();
this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());
if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie){t={top:0,left:0}
}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var t,n,r,i=this.options;
i.containment==="parent"&&(i.containment=this.helper[0].parentNode);
if(i.containment==="document"||i.containment==="window"){this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];
if(!r){return
}t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n
}else{i.containment.constructor===Array&&(this.containment=i.containment)
}},_convertPositionTo:function(t,n){n||(n=this.position);
var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);
return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}
},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;
return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1
},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});
r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");
n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))
})
},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});
e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))
})
},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;
e.each(r.sortables,function(){var s=!1,o=this;
this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s
})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]
},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)
})
}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;
t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)
},stop:function(){var t=e(this).data("ui-draggable").options;
t._cursor&&e("body").css("cursor",t._cursor)
}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;
r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)
},stop:function(t,n){var r=e(this).data("ui-draggable").options;
r._opacity&&e(n.helper).css("opacity",r._opacity)
}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");
t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())
},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;
if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x"){n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed)
}if(!r.axis||r.axis!=="y"){n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)
}}else{if(!r.axis||r.axis!=="x"){t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed))
}if(!r.axis||r.axis!=="y"){t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))
}}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)
}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;
t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();
this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})
})
},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;
for(c=p.snapElements.length-1;
c>=0;
c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;
if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;
continue
}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h
}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=e(this).data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)
});
if(!r.length){return
}t=parseInt(r[0].style.zIndex,10)||0,e(r).each(function(e){this.style.zIndex=t+e
}),this[0].style.zIndex=t+r.length
}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;
r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)
},stop:function(t,n){var r=e(this).data("ui-draggable").options;
r._zIndex&&e(n.helper).css("zIndex",r._zIndex)
}})
})(jQuery);
(function(e,t){function n(e,t,n){return e>t&&e<t+n
}e.widget("ui.droppable",{version:"1.10.0",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,n=t.accept;
this.isover=!1,this.isout=!0,this.accept=e.isFunction(n)?n:function(e){return e.is(n)
},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")
},_destroy:function(){var t=0,n=e.ui.ddmanager.droppables[this.options.scope];
for(;
t<n.length;
t++){n[t]===this&&n.splice(t,1)
}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(t,n){t==="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)
}),e.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(t){var n=e.ui.ddmanager.current;
this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))
},_deactivate:function(t){var n=e.ui.ddmanager.current;
this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))
},_over:function(t){var n=e.ui.ddmanager.current;
if(!n||(n.currentItem||n.element)[0]===this.element[0]){return
}this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))
},_out:function(t){var n=e.ui.ddmanager.current;
if(!n||(n.currentItem||n.element)[0]===this.element[0]){return
}this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))
},_drop:function(t,n){var r=n||e.ui.ddmanager.current,i=!1;
return !r||(r.currentItem||r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");
if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)){return i=!0,!1
}}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1)
},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}
}}),e.ui.intersect=function(e,t,r){if(!t.offset){return !1
}var i,s,o=(e.positionAbs||e.position.absolute).left,u=o+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,f=a+e.helperProportions.height,l=t.offset.left,c=l+t.proportions.width,h=t.offset.top,p=h+t.proportions.height;
switch(r){case"fit":return l<=o&&u<=c&&h<=a&&f<=p;
case"intersect":return l<o+e.helperProportions.width/2&&u-e.helperProportions.width/2<c&&h<a+e.helperProportions.height/2&&f-e.helperProportions.height/2<p;
case"pointer":return i=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,s=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,n(s,h,t.proportions.height)&&n(i,l,t.proportions.width);
case"touch":return(a>=h&&a<=p||f>=h&&f<=p||a<h&&f>p)&&(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c);
default:return !1
}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r,i,s=e.ui.ddmanager.droppables[t.options.scope]||[],o=n?n.type:null,u=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();
e:for(r=0;
r<s.length;
r++){if(s[r].options.disabled||t&&!s[r].accept.call(s[r].element[0],t.currentItem||t.element)){continue
}for(i=0;
i<u.length;
i++){if(u[i]===s[r].element[0]){s[r].proportions.height=0;
continue e
}}s[r].visible=s[r].element.css("display")!=="none";
if(!s[r].visible){continue
}o==="mousedown"&&s[r]._activate.call(s[r],n),s[r].offset=s[r].element.offset(),s[r].proportions={width:s[r].element[0].offsetWidth,height:s[r].element[0].offsetHeight}
}},drop:function(t,n){var r=!1;
return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options){return
}!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,n))
}),r
},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)
})
},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var r,i,s,o=e.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;
if(!u){return
}this.options.greedy&&(i=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===i
}),s.length&&(r=e.data(s[0],"ui-droppable"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call(r,n)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":"_out"].call(this,n),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,n))
})
},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)
}}
})(jQuery);
(function(e,t){function n(e){return parseInt(e,10)||0
}function r(e){return !isNaN(parseInt(e,10))
}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;
this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");
if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};
for(n=0;
n<t.length;
n++){r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)
}}this._renderAxis=function(t){var n,r,i,s;
t=t||this.element;
for(n in this.handles){this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize());
if(!e(this.handles[n]).length){continue
}}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")
}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled){return
}e(this).removeClass("ui-resizable-autohide"),o._handles.show()
}).mouseleave(function(){if(u.disabled){return
}o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())
})),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this
},_mouseCapture:function(t){var n,r,i=!1;
for(n in this.handles){r=e(this.handles[n])[0];
if(r===t.target||e.contains(r,t.target)){i=!0
}}return !this.options.disabled&&i
},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;
return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=n(this.helper.css("left")),i=n(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",s==="auto"?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",t),!0
},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];
if(!p){return !1
}n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey);
if(this._aspectRatio||t.shiftKey){n=this._updateRatio(n,t)
}return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1
},_mouseStop:function(t){this.resizing=!1;
var n,r,i,s,o,u,a,f=this.options,l=this;
return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1
},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;
o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};
if(this._aspectRatio||e){t=o.minHeight*this.aspectRatio,i=o.minWidth/this.aspectRatio,n=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),i>o.minHeight&&(o.minHeight=i),n<o.maxWidth&&(o.maxWidth=n),s<o.maxHeight&&(o.maxHeight=s)
}this._vBoundaries=o
},_updateCache:function(e){this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)
},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;
return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),i==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),i==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e
},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);
return o&&(e.width=t.minWidth),u&&(e.height=t.minHeight),i&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),o&&l&&(e.left=a-t.minWidth),i&&l&&(e.left=a-t.maxWidth),u&&c&&(e.top=f-t.minHeight),s&&c&&(e.top=f-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var e,t,n,r,i,s=this.helper||this.element;
for(e=0;
e<this._proportionallyResizeElements.length;
e++){i=this._proportionallyResizeElements[e];
if(!this.borderDif){this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];
for(t=0;
t<n.length;
t++){this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)
}}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})
}},_renderProxy:function(){var t=this.element,n=this.options;
this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(e,t){return{width:this.originalSize.width+t}
},w:function(e,t){var n=this.originalSize,r=this.originalPosition;
return{left:r.left+t,width:n.width-t}
},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;
return{top:i.top+n,height:r.height-n}
},s:function(e,t,n){return{height:this.originalSize.height+n}
},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))
},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))
},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))
},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))
}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;
n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};
i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)
}})
}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;
if(!p){return
}f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))
}),f.containerOffset=t.offset(),f.containerPosition=t.position(),f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a})
},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;
h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=o.parentData.left),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))
},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;
t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})
}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);
t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})
})
};
typeof n.alsoResize=="object"&&!n.alsoResize.parentNode?n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)
}):r(n.alsoResize)
},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];
e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);
n&&n>=0&&(s[t]=n||null)
}),t.css(s)
})
};
typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)
}):a(i.alsoResize)
},stop:function(){e(this).removeData("resizable-alsoresize")
}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;
t.ghost=t.originalElement.clone(),t.ghost.css({opacity:0.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)
},resize:function(){var t=e(this).data("ui-resizable");
t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})
},stop:function(){var t=e(this).data("ui-resizable");
t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))
}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid=="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;
n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(t.size.width=h,t.size.height=p,t.position.top=s.top-c,t.position.left=s.left-l)
}})
})(jQuery);
(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.0",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,n=this;
this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(n.options.filter,n.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),n=t.offset();
e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})
})
},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()
},_mouseStart:function(t){var n=this,r=this.options;
this.opos=[t.pageX,t.pageY];
if(this.options.disabled){return
}this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");
r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))
}),e(t.target).parents().addBack().each(function(){var r,i=e.data(this,"selectable-item");
if(i){return r=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected"),i.$element.removeClass(r?"ui-unselecting":"ui-selected").addClass(r?"ui-selecting":"ui-unselecting"),i.unselecting=!r,i.selecting=r,i.selected=r,r?n._trigger("selecting",t,{selecting:i.element}):n._trigger("unselecting",t,{unselecting:i.element}),!1
}})
},_mouseDrag:function(t){this.dragged=!0;
if(this.options.disabled){return
}var n,r=this,i=this.options,s=this.opos[0],o=this.opos[1],u=t.pageX,a=t.pageY;
return s>u&&(n=u,u=s,s=n),o>a&&(n=a,a=o,o=n),this.helper.css({left:s,top:o,width:u-s,height:a-o}),this.selectees.each(function(){var n=e.data(this,"selectable-item"),f=!1;
if(!n||n.element===r.element[0]){return
}i.tolerance==="touch"?f=!(n.left>u||n.right<s||n.top>a||n.bottom<o):i.tolerance==="fit"&&(f=n.left>s&&n.right<u&&n.top>o&&n.bottom<a),f?(n.selected&&(n.$element.removeClass("ui-selected"),n.selected=!1),n.unselecting&&(n.$element.removeClass("ui-unselecting"),n.unselecting=!1),n.selecting||(n.$element.addClass("ui-selecting"),n.selecting=!0,r._trigger("selecting",t,{selecting:n.element}))):(n.selecting&&((t.metaKey||t.ctrlKey)&&n.startselected?(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.$element.addClass("ui-selected"),n.selected=!0):(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.startselected&&(n.$element.addClass("ui-unselecting"),n.unselecting=!0),r._trigger("unselecting",t,{unselecting:n.element}))),n.selected&&!t.metaKey&&!t.ctrlKey&&!n.startselected&&(n.$element.removeClass("ui-selected"),n.selected=!1,n.$element.addClass("ui-unselecting"),n.unselecting=!0,r._trigger("unselecting",t,{unselecting:n.element})))
}),!1
},_mouseStop:function(t){var n=this;
return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");
r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})
}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");
r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})
}),this._trigger("stop",t),this.helper.remove(),!1
}})
})(jQuery);
(function(e,t){function n(e,t,n){return e>t&&e<t+n
}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;
this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();
for(var e=this.items.length-1;
e>=0;
e--){this.items[e].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)
},_mouseCapture:function(t,n){var r=null,i=!1,s=this;
if(this.reverting){return !1
}if(this.options.disabled||this.options.type==="static"){return !1
}this._refreshItems(t),e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s){return r=e(this),!1
}}),e.data(t.target,s.widgetName+"-item")===s&&(r=e(t.target));
if(!r){return !1
}if(this.options.handle&&!n){e(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(i=!0)
});
if(!i){return !1
}}return this.currentItem=r,this._removeCurrentsFromItems(),!0
},_mouseStart:function(t,n,r){var i,s=this.options;
this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),s.containment&&this._setContainment(),s.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",s.cursor)),s.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",s.opacity)),s.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",s.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();
if(!r){for(i=this.containers.length-1;
i>=0;
i--){this.containers[i]._trigger("activate",t,this._uiHash(this))
}}return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0
},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=!1;
this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?u=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?u=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),u!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(n=this.items.length-1;
n>=0;
n--){r=this.items[n],i=r.item[0],s=this._intersectsWithPointer(r);
if(!s){continue
}if(r.instance!==this.currentContainer){continue
}if(i!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):!0)){this.direction=s===1?"down":"up";
if(this.options.tolerance!=="pointer"&&!this._intersectsWithSides(r)){break
}this._rearrange(t,r),this._trigger("change",t,this._uiHash());
break
}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(t,n){if(!t){return
}e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);
if(this.options.revert){var r=this,i=this.placeholder.offset();
this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)
})
}else{this._clear(t,n)
}return !1
},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var t=this.containers.length-1;
t>=0;
t--){this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];
return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);
n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))
}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")
},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];
return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")
}),r
},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;
return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a
},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||n(this.positionAbs.top+this.offset.click.top,e.top,e.height),r=this.options.axis==="y"||n(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();
return i?this.floating?o&&o==="right"||s==="down"?2:1:s&&(s==="down"?2:1):!1
},_intersectsWithSides:function(e){var t=n(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),r=n(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();
return this.floating&&s?s==="right"&&r||s==="left"&&!r:i&&(i==="down"&&t||i==="up"&&!t)
},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;
return e!==0&&(e>0?"down":"up")
},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;
return e!==0&&(e>0?"right":"left")
},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this
},_connectWith:function(){var e=this.options;
return e.connectWith.constructor===String?[e.connectWith]:e.connectWith
},_getItemsAsjQuery:function(t){var n,r,i,s,o=[],u=[],a=this._connectWith();
if(a&&t){for(n=a.length-1;
n>=0;
n--){i=e(a[n]);
for(r=i.length-1;
r>=0;
r--){s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&u.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])
}}}u.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(n=u.length-1;
n>=0;
n--){u[n][0].each(function(){o.push(this)
})
}return e(o)
},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=e.grep(this.items,function(e){for(var n=0;
n<t.length;
n++){if(t[n]===e.item[0]){return !1
}}return !0
})
},_refreshItems:function(t){this.items=[],this.containers=[this];
var n,r,i,s,o,u,a,f,l=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith();
if(h&&this.ready){for(n=h.length-1;
n>=0;
n--){i=e(h[n]);
for(r=i.length-1;
r>=0;
r--){s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s]),this.containers.push(s))
}}}for(n=c.length-1;
n>=0;
n--){o=c[n][1],u=c[n][0];
for(r=0,f=u.length;
r<f;
r++){a=e(u[r]),a.data(this.widgetName+"-item",o),l.push({item:a,instance:o,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var n,r,i,s;
for(n=this.items.length-1;
n>=0;
n--){r=this.items[n];
if(r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0]){continue
}i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item,t||(r.width=i.outerWidth(),r.height=i.outerHeight()),s=i.offset(),r.left=s.left,r.top=s.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(n=this.containers.length-1;
n>=0;
n--){s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()
}}return this
},_createPlaceholder:function(t){t=t||this;
var n,r=t.options;
if(!r.placeholder||r.placeholder.constructor===String){n=r.placeholder,r.placeholder={element:function(){var r=e(document.createElement(t.currentItem[0].nodeName)).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
return n||(r.style.visibility="hidden"),r
},update:function(e,i){if(n&&!r.forcePlaceholderSize){return
}i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))
}}
}t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),r.placeholder.update(t,t.placeholder)
},_contactContainers:function(t){var n,r,i,s,o,u,a,f,l,c=null,h=null;
for(n=this.containers.length-1;
n>=0;
n--){if(e.contains(this.currentItem[0],this.containers[n].element[0])){continue
}if(this._intersectsWith(this.containers[n].containerCache)){if(c&&e.contains(this.containers[n].element[0],c.element[0])){continue
}c=this.containers[n],h=n
}else{this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",t,this._uiHash(this)),this.containers[n].containerCache.over=0)
}}if(!c){return
}if(this.containers.length===1){this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1
}else{i=10000,s=null,o=this.containers[h].floating?"left":"top",u=this.containers[h].floating?"width":"height",a=this.positionAbs[o]+this.offset.click[o];
for(r=this.items.length-1;
r>=0;
r--){if(!e.contains(this.containers[h].element[0],this.items[r].item[0])){continue
}if(this.items[r].item[0]===this.currentItem[0]){continue
}f=this.items[r].item.offset()[o],l=!1,Math.abs(f-a)>Math.abs(f+this.items[r][u]-a)&&(l=!0,f+=this.items[r][u]),Math.abs(f-a)<i&&(i=Math.abs(f-a),s=this.items[r],this.direction=l?"up":"down")
}if(!s&&!this.options.dropOnEmpty){return
}this.currentContainer=this.containers[h],s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[h].element,!0),this._trigger("change",t,this._uiHash()),this.containers[h]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1
}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem;
return r.parents("body").length||e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!r[0].style.width||n.forceHelperSize)&&r.width(this.currentItem.width()),(!r[0].style.height||n.forceHelperSize)&&r.height(this.currentItem.height()),r
},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left" in t&&(this.offset.click.left=t.left+this.margins.left),"right" in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top" in t&&(this.offset.click.top=t.top+this.margins.top),"bottom" in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var t=this.offsetParent.offset();
this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());
if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie){t={top:0,left:0}
}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var t,n,r,i=this.options;
i.containment==="parent"&&(i.containment=this.helper[0].parentNode);
if(i.containment==="document"||i.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}/^(document|window|parent)$/.test(i.containment)||(t=e(i.containment)[0],n=e(i.containment).offset(),r=e(t).css("overflow")!=="hidden",this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(t,n){n||(n=this.position);
var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);
return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}
},_generatePosition:function(t){var n,r,i=this.options,s=t.pageX,o=t.pageY,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName);
return this.cssPosition==="relative"&&(this.scrollParent[0]===document||this.scrollParent[0]===this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1],o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n,r=this.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0],s=this.containment?r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}
},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var i=this.counter;
this._delay(function(){i===this.counter&&this.refreshPositions(!r)
})
},_clear:function(t,n){this.reverting=!1;
var r,i=[];
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(r in this._storedCSS){if(this._storedCSS[r]==="auto"||this._storedCSS[r]==="static"){this._storedCSS[r]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}this.fromOutside&&!n&&i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))
}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!n&&i.push(function(e){this._trigger("update",e,this._uiHash())
}),this!==this.currentContainer&&(n||(i.push(function(e){this._trigger("remove",e,this._uiHash())
}),i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))
}
}.call(this,this.currentContainer)),i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))
}
}.call(this,this.currentContainer))));
for(r=this.containers.length-1;
r>=0;
r--){n||i.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))
}
}.call(this,this.containers[r])),this.containers[r].containerCache.over&&(i.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))
}
}.call(this,this.containers[r])),this.containers[r].containerCache.over=0)
}this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1;
if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());
for(r=0;
r<i.length;
r++){i[r].call(this,t)
}this._trigger("stop",t,this._uiHash())
}return this.fromOutside=!1,!1
}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null;
if(!n){for(r=0;
r<i.length;
r++){i[r].call(this,t)
}this._trigger("stop",t,this._uiHash())
}return this.fromOutside=!1,!0
},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(t){var n=t||this;
return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}
}})
})(jQuery);
(function(e,t){var n=0;
e.widget("ui.autocomplete",{version:"1.10.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r;
this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;
return
}t=!1,r=!1,n=!1;
var s=e.ui.keyCode;
switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);
break;
case s.PAGE_DOWN:t=!0,this._move("nextPage",i);
break;
case s.UP:t=!0,this._keyEvent("previous",i);
break;
case s.DOWN:t=!0,this._keyEvent("next",i);
break;
case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));
break;
case s.TAB:this.menu.active&&this.menu.select(i);
break;
case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());
break;
default:n=!0,this._searchTimeout(i)
}},keypress:function(r){if(t){t=!1,r.preventDefault();
return
}if(n){return
}var i=e.ui.keyCode;
switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);
break;
case i.PAGE_DOWN:this._move("nextPage",r);
break;
case i.UP:this._keyEvent("previous",r);
break;
case i.DOWN:this._keyEvent("next",r)
}},input:function(e){if(r){r=!1,e.preventDefault();
return
}this._searchTimeout(e)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching),this.close(e),this._change(e)
}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this._appendTo()).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur
});
var n=this.menu.element[0];
e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;
this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()
})
})
},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;
if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)
});
return
}}var r=n.item.data("ui-autocomplete-item");
!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)
},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n
})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n
}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()
},_appendTo:function(){var t=this.options.appendTo;
return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t
},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")
},_initSource:function(){var t,n,r=this;
e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))
}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)
},error:function(){i([])
}})
}):this.source=this.options.source
},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))
},this.options.delay)
},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();
if(e.length<this.options.minLength){return this.close(t)
}if(this._trigger("search",t)===!1){return
}return this._search(e)
},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())
},_response:function(){var e=this,t=++n;
return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")
}
},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()
},close:function(e){this.cancelSearch=!0,this._close(e)
},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))
},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})
},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)
})
},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var e=this.menu.element;
e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(t,n){var r=this;
e.each(n,function(e,n){r._renderItemData(t,n)
})
},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)
},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);
return
}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();
return
}this.menu[e](t)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,t),t.preventDefault()
}}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");
return e.grep(t,function(e){return r.test(e.label||e.value||e)
})
}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(e){var t;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)
}})
})(jQuery);
(function(e,t){e.widget("ui.menu",{version:"1.10.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()
},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()
},"click .ui-state-disabled > a":function(e){e.preventDefault()
},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");
!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),n.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);
n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);
t||this.focus(e,n)
},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);
t.data("ui-menu-submenu-carat")&&t.remove()
}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}var n,r,i,s,o,u=!0;
switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);
break;
case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);
break;
case e.ui.keyCode.HOME:this._move("first","first",t);
break;
case e.ui.keyCode.END:this._move("last","last",t);
break;
case e.ui.keyCode.UP:this.previous(t);
break;
case e.ui.keyCode.DOWN:this.next(t);
break;
case e.ui.keyCode.LEFT:this.collapse(t);
break;
case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);
break;
case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);
break;
case e.ui.keyCode.ESCAPE:this.collapse(t);
break;
default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())
}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())
})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter):delete this.previousFilter
}u&&t.preventDefault()
},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))
},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);
r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);
r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))
}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);
/[^\-â€”â€“\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")
}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)
},focus:function(e,t){var n,r;
this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()
},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})
},_scrollIntoView:function(t){var n,r,i,s,o,u;
this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))
},blur:function(e,t){t||clearTimeout(this.timer);
if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})
},_startOpening:function(e){clearTimeout(this.timer);
if(e.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close(),this._open(e)
},this.delay)
},_open:function(t){var n=e.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)
},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));
r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r
},this.delay)
},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
t&&t.length&&(this._close(),this.focus(e,t))
},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)
}))
},next:function(e){this._move("next","first",e)
},previous:function(e){this._move("prev","last",e)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(e,t,n){var r;
this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));
if(!r||!r.length||!this.active){r=this.activeMenu.children(".ui-menu-item")[t]()
}this.focus(n,r)
},nextPage:function(t){var n,r,i;
if(!this.active){this.next(t);
return
}if(this.isLastItem()){return
}this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0
}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())
},previousPage:function(t){var n,r,i;
if(!this.active){this.next(t);
return
}if(this.isFirstItem()){return
}this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0
}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");
var n={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)
}})
})(jQuery);
(function(e,t){var n=5;
e.widget("ui.slider",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];
this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this.range=e([]),r.range&&(r.range===!0&&(r.values?r.values.length&&r.values.length!==2?r.values=[r.values[0],r.values[0]]:e.isArray(r.values)&&(r.values=r.values.slice(0)):r.values=[this._valueMin(),this._valueMin()]),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(r.range==="min"||r.range==="max"?" ui-slider-range-"+r.range:""))),n=r.values&&r.values.length||1;
for(t=i.length;
t<n;
t++){o.push(s)
}this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()
}).mouseenter(function(){r.disabled||e(this).addClass("ui-state-hover")
}).mouseleave(function(){e(this).removeClass("ui-state-hover")
}).focus(function(){r.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))
}).blur(function(){e(this).removeClass("ui-state-focus")
}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)
}),this._setOption("disabled",r.disabled),this._on(this.handles,this._handleEvents),this._refreshValue(),this._animateOff=!1
},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()
},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;
return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));
if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min)){i=n,s=e(this),o=t
}}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);
return this._slide(e,this._handleIndex,n),!1
},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"
},_normValueFromMouse:function(e){var t,n,r,i,s;
return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)
},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};
return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)
},_slide:function(e,t,n){var r,i,s;
this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))
},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};
this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)
},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};
this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)
}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);
return
}return this._value()
},values:function(t,n){var r,i,s;
if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);
return
}if(!arguments.length){return this._values()
}if(!e.isArray(arguments[0])){return this.options.values&&this.options.values.length?this._values(t):this.value()
}r=this.options.values,i=arguments[0];
for(s=0;
s<r.length;
s+=1){r[s]=this._trimAlignValue(i[s]),this._change(null,s)
}this._refreshValue()
},_setOption:function(t,n){var r,i=0;
e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);
switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0)):this.handles.prop("disabled",!1);
break;
case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":this._animateOff=!0,this._refreshValue();
for(r=0;
r<i;
r+=1){this._change(null,r)
}this._animateOff=!1;
break;
case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1
}},_value:function(){var e=this.options.value;
return e=this._trimAlignValue(e),e
},_values:function(e){var t,n,r;
if(arguments.length){return t=this.options.values[e],t=this._trimAlignValue(t),t
}n=this.options.values.slice();
for(r=0;
r<n.length;
r+=1){n[r]=this._trimAlignValue(n[r])
}return n
},_trimAlignValue:function(e){if(e<=this._valueMin()){return this._valueMin()
}if(e>=this._valueMax()){return this._valueMax()
}var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;
return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};
this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n
}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))
},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");
switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();
if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);
if(r===!1){return
}}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();
switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();
break;
case e.ui.keyCode.END:s=this._valueMax();
break;
case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);
break;
case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);
break;
case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax()){return
}s=this._trimAlignValue(i+o);
break;
case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin()){return
}s=this._trimAlignValue(i-o)
}this._slide(t,u,s)
},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))
}}})
})(jQuery);
(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);
r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))
}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);
i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")
}var t=0;
e.widget("ui.tooltip",{version:"1.10.0",options:{content:function(){var t=e(this).attr("title")||"";
return e("<a>").text(t).html()
},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()
},_setOption:function(t,n){var r=this;
if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;
return
}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)
})
},_disable:function(){var t=this;
e.each(this.tooltips,function(n,r){var i=e.Event("blur");
i.target=i.currentTarget=r[0],t.close(i,!0)
}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);
t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")
})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);
t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))
})
},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);
if(!r.length||r.data("ui-tooltip-id")){return
}r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;
t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))
}),this._updateContent(r,t)
},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;
if(typeof r=="string"){return this._open(t,e,r)
}n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open")){return
}i._delay(function(){t&&(t.type=s),this._open(t,e,n)
})
}),n&&this._open(t,e,n)
},_open:function(t,r,i){function f(e){a.of=e;
if(s.is(":hidden")){return
}s.position(a)
}var s,o,u,a=e.extend({},this.options.position);
if(!i){return
}s=this._find(r);
if(s.length){s.find(".ui-tooltip-content").html(i);
return
}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=this.delayedShow=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))
},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);
n.currentTarget=r[0],this.close(n,!0)
}},remove:function(){this._removeTooltip(s)
}};
if(!t||t.type==="mouseover"){o.mouseleave="close"
}if(!t||t.type==="focusin"){o.focusout="close"
}this._on(!0,r,o)
},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);
if(this.closing){return
}clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))
}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]
}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1
},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]=n,i
},_find:function(t){var n=t.data("ui-tooltip-id");
return n?e("#"+n):e()
},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]
},_destroy:function(){var t=this;
e.each(this.tooltips,function(n,r){var i=e.Event("blur");
i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))
})
}})
})(jQuery);
(function($,undefined){var rails;
$.rails=rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-popup]",selectChangeSelector:"select[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",CSRFProtection:function(xhr){var token=$('meta[name="csrf-token"]').attr("content");
if(token){xhr.setRequestHeader("X-CSRF-Token",token)
}},fire:function(obj,name,data){var event=$.Event(name);
obj.trigger(event,data);
return event.result!==false
},confirm:function(message){return confirm(message)
},ajax:function(options){return $.ajax(options)
},handlePopup:function(element){window.open(element.attr("href"))
},handleRemote:function(element){var method,url,data,crossDomain=element.data("cross-domain")||null,dataType=element.data("type")||($.ajaxSettings&&$.ajaxSettings.dataType);
if(rails.fire(element,"ajax:before")){if(element.is("form")){method=element.attr("method");
url=element.attr("action");
data=element.serializeArray();
var button=element.data("ujs:submit-button");
if(button){data.push(button);
element.data("ujs:submit-button",null)
}}else{if(element.is("select")){method=element.data("method");
url=element.data("url");
data=element.serialize();
if(element.data("params")){data=data+"&"+element.data("params")
}}else{method=element.data("method");
url=element.attr("href");
data=element.data("params")||null
}}options={type:method||"GET",data:data,dataType:dataType,crossDomain:crossDomain,beforeSend:function(xhr,settings){if(settings.dataType===undefined){xhr.setRequestHeader("accept","*/*;q=0.5, "+settings.accepts.script)
}return rails.fire(element,"ajax:beforeSend",[xhr,settings])
},success:function(data,status,xhr){element.trigger("ajax:success",[data,status,xhr])
},complete:function(xhr,status){element.trigger("ajax:complete",[xhr,status])
},error:function(xhr,status,error){element.trigger("ajax:error",[xhr,status,error])
}};
if(url){$.extend(options,{url:url})
}rails.ajax(options)
}},handleMethod:function(link){var href=link.attr("href"),method=link.data("method"),csrf_token=$("meta[name=csrf-token]").attr("content"),csrf_param=$("meta[name=csrf-param]").attr("content"),form=$('<form method="post" action="'+href+'"></form>'),metadata_input='<input name="_method" value="'+method+'" type="hidden" />';
if(csrf_param!==undefined&&csrf_token!==undefined){metadata_input+='<input name="'+csrf_param+'" value="'+csrf_token+'" type="hidden" />'
}form.hide().append(metadata_input).appendTo("body");
form.submit()
},disableFormElements:function(form){form.find(rails.disableSelector).each(function(){var element=$(this),method=element.is("button")?"html":"val";
element.data("ujs:enable-with",element[method]());
element[method](element.data("disable-with"));
element.attr("disabled","disabled")
})
},enableFormElements:function(form){form.find(rails.enableSelector).each(function(){var element=$(this),method=element.is("button")?"html":"val";
if(element.data("ujs:enable-with")){element[method](element.data("ujs:enable-with"))
}element.removeAttr("disabled")
})
},allowAction:function(element){var message=element.data("confirm"),answer=false,callback;
if(!message){return true
}if(rails.fire(element,"confirm")){answer=rails.confirm(message);
callback=rails.fire(element,"confirm:complete",[answer])
}return answer&&callback
},blankInputs:function(form,specifiedSelector,nonBlank){var inputs=$(),input,selector=specifiedSelector||"input,textarea";
form.find(selector).each(function(){input=$(this);
if(nonBlank?input.val():!input.val()){inputs=inputs.add(input)
}});
return inputs.length?inputs:false
},nonBlankInputs:function(form,specifiedSelector){return rails.blankInputs(form,specifiedSelector,true)
},stopEverything:function(e){$(e.target).trigger("ujs:everythingStopped");
e.stopImmediatePropagation();
return false
},callFormSubmitBindings:function(form){var events=form.data("events"),continuePropagation=true;
if(events!==undefined&&events.submit!==undefined){$.each(events.submit,function(i,obj){if(typeof obj.handler==="function"){return continuePropagation=obj.handler(obj.data)
}})
}return continuePropagation
}};
if("ajaxPrefilter" in $){$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain){rails.CSRFProtection(xhr)
}})
}else{$(document).ajaxSend(function(e,xhr,options){if(!options.crossDomain){rails.CSRFProtection(xhr)
}})
}$(rails.linkClickSelector).live("click.rails",function(e){var link=$(this);
if(!rails.allowAction(link)){return rails.stopEverything(e)
}if(link.data("remote")!==undefined){rails.handleRemote(link);
return false
}else{if(link.data("method")){rails.handleMethod(link);
return false
}else{if(link.data("popup")){rails.handlePopup(link);
e.preventDefault()
}}}});
$(rails.selectChangeSelector).live("change.rails",function(e){var link=$(this);
if(!rails.allowAction(link)){return rails.stopEverything(e)
}rails.handleRemote(link);
return false
});
$(rails.formSubmitSelector).live("submit.rails",function(e){var form=$(this),remote=form.data("remote")!==undefined,blankRequiredInputs=rails.blankInputs(form,rails.requiredInputSelector),nonBlankFileInputs=rails.nonBlankInputs(form,rails.fileInputSelector);
if(!rails.allowAction(form)){return rails.stopEverything(e)
}if(blankRequiredInputs&&rails.fire(form,"ajax:aborted:required",[blankRequiredInputs])){return rails.stopEverything(e)
}if(remote){if(nonBlankFileInputs){return rails.fire(form,"ajax:aborted:file",[nonBlankFileInputs])
}if(!$.support.submitBubbles&&rails.callFormSubmitBindings(form)===false){return rails.stopEverything(e)
}rails.handleRemote(form);
return false
}else{setTimeout(function(){rails.disableFormElements(form)
},13)
}});
$(rails.formInputClickSelector).live("click.rails",function(event){var button=$(this);
if(!rails.allowAction(button)){return rails.stopEverything(event)
}var name=button.attr("name"),data=name?{name:name,value:button.val()}:null;
button.closest("form").data("ujs:submit-button",data)
});
$(rails.formSubmitSelector).live("ajax:beforeSend.rails",function(event){if(this==event.target){rails.disableFormElements($(this))
}});
$(rails.formSubmitSelector).live("ajax:complete.rails",function(event){if(this==event.target){rails.enableFormElements($(this))
}})
})(jQuery);
/*!
  * =============================================================
  * Ender: open module JavaScript framework (https://ender.no.de)
  * Build: ender build underscore
  * =============================================================
  */
/*!
  * Ender: open module JavaScript framework (client-lib)
  * copyright Dustin Diaz & Jacob Thornton 2011-2012 (@ded @fat)
  * http://ender.jit.su
  * License MIT
  */
(function(context){context.global=context;
var modules={},old=context["$"],oldEnder=context.ender,oldRequire=context.require,oldProvide=context.provide;
function require(identifier){var module=modules["$"+identifier]||window[identifier];
if(!module){throw new Error("Ender Error: Requested module '"+identifier+"' has not been defined.")
}return module
}function provide(name,what){return(modules["$"+name]=what)
}context.provide=provide;
context.require=require;
function aug(o,o2){for(var k in o2){k!="noConflict"&&k!="_VERSION"&&(o[k]=o2[k])
}return o
}function Ender(s,r){var elements,i;
this.selector=s;
if(typeof s=="undefined"){elements=[];
this.selector=""
}else{if(typeof s=="string"||s.nodeName||(s.length&&"item" in s)||s==window){elements=ender._select(s,r)
}else{elements=isFinite(s.length)?s:[s]
}}this.length=elements.length;
for(i=this.length;
i--;
){this[i]=elements[i]
}}Ender.prototype.forEach=function(fn,opt_scope){var i,l;
for(i=0,l=this.length;
i<l;
++i){i in this&&fn.call(opt_scope||this[i],this[i],i,this)
}return this
};
Ender.prototype.$=ender;
function ender(s,r){return new Ender(s,r)
}ender._VERSION="0.4.3-dev";
ender.fn=Ender.prototype;
ender.ender=function(o,chain){aug(chain?Ender.prototype:ender,o)
};
ender._select=function(s,r){if(typeof s=="string"){return(r||document).querySelectorAll(s)
}if(s.nodeName){return[s]
}return s
};
ender.noConflict=function(callback){context["$"]=old;
if(callback){context.provide=oldProvide;
context.require=oldRequire;
context.ender=oldEnder;
if(typeof callback=="function"){callback(require,provide,this)
}}return this
};
if(typeof module!=="undefined"&&module.exports){module.exports=ender
}context.ender=context["$"]=ender
}(this));
(function(){var module={exports:{}},exports=module.exports;
(function(){var root=this;
var previousUnderscore=root._;
var breaker={};
var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;
var push=ArrayProto.push,slice=ArrayProto.slice,concat=ArrayProto.concat,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;
var nativeForEach=ArrayProto.forEach,nativeMap=ArrayProto.map,nativeReduce=ArrayProto.reduce,nativeReduceRight=ArrayProto.reduceRight,nativeFilter=ArrayProto.filter,nativeEvery=ArrayProto.every,nativeSome=ArrayProto.some,nativeIndexOf=ArrayProto.indexOf,nativeLastIndexOf=ArrayProto.lastIndexOf,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind;
var _=function(obj){if(obj instanceof _){return obj
}if(!(this instanceof _)){return new _(obj)
}this._wrapped=obj
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=_
}exports._=_
}else{root._=_
}_.VERSION="1.4.4";
var each=_.each=_.forEach=function(obj,iterator,context){if(obj==null){return
}if(nativeForEach&&obj.forEach===nativeForEach){obj.forEach(iterator,context)
}else{if(obj.length===+obj.length){for(var i=0,l=obj.length;
i<l;
i++){if(iterator.call(context,obj[i],i,obj)===breaker){return
}}}else{for(var key in obj){if(_.has(obj,key)){if(iterator.call(context,obj[key],key,obj)===breaker){return
}}}}}};
_.map=_.collect=function(obj,iterator,context){var results=[];
if(obj==null){return results
}if(nativeMap&&obj.map===nativeMap){return obj.map(iterator,context)
}each(obj,function(value,index,list){results[results.length]=iterator.call(context,value,index,list)
});
return results
};
var reduceError="Reduce of empty array with no initial value";
_.reduce=_.foldl=_.inject=function(obj,iterator,memo,context){var initial=arguments.length>2;
if(obj==null){obj=[]
}if(nativeReduce&&obj.reduce===nativeReduce){if(context){iterator=_.bind(iterator,context)
}return initial?obj.reduce(iterator,memo):obj.reduce(iterator)
}each(obj,function(value,index,list){if(!initial){memo=value;
initial=true
}else{memo=iterator.call(context,memo,value,index,list)
}});
if(!initial){throw new TypeError(reduceError)
}return memo
};
_.reduceRight=_.foldr=function(obj,iterator,memo,context){var initial=arguments.length>2;
if(obj==null){obj=[]
}if(nativeReduceRight&&obj.reduceRight===nativeReduceRight){if(context){iterator=_.bind(iterator,context)
}return initial?obj.reduceRight(iterator,memo):obj.reduceRight(iterator)
}var length=obj.length;
if(length!==+length){var keys=_.keys(obj);
length=keys.length
}each(obj,function(value,index,list){index=keys?keys[--length]:--length;
if(!initial){memo=obj[index];
initial=true
}else{memo=iterator.call(context,memo,obj[index],index,list)
}});
if(!initial){throw new TypeError(reduceError)
}return memo
};
_.find=_.detect=function(obj,iterator,context){var result;
any(obj,function(value,index,list){if(iterator.call(context,value,index,list)){result=value;
return true
}});
return result
};
_.filter=_.select=function(obj,iterator,context){var results=[];
if(obj==null){return results
}if(nativeFilter&&obj.filter===nativeFilter){return obj.filter(iterator,context)
}each(obj,function(value,index,list){if(iterator.call(context,value,index,list)){results[results.length]=value
}});
return results
};
_.reject=function(obj,iterator,context){return _.filter(obj,function(value,index,list){return !iterator.call(context,value,index,list)
},context)
};
_.every=_.all=function(obj,iterator,context){iterator||(iterator=_.identity);
var result=true;
if(obj==null){return result
}if(nativeEvery&&obj.every===nativeEvery){return obj.every(iterator,context)
}each(obj,function(value,index,list){if(!(result=result&&iterator.call(context,value,index,list))){return breaker
}});
return !!result
};
var any=_.some=_.any=function(obj,iterator,context){iterator||(iterator=_.identity);
var result=false;
if(obj==null){return result
}if(nativeSome&&obj.some===nativeSome){return obj.some(iterator,context)
}each(obj,function(value,index,list){if(result||(result=iterator.call(context,value,index,list))){return breaker
}});
return !!result
};
_.contains=_.include=function(obj,target){if(obj==null){return false
}if(nativeIndexOf&&obj.indexOf===nativeIndexOf){return obj.indexOf(target)!=-1
}return any(obj,function(value){return value===target
})
};
_.invoke=function(obj,method){var args=slice.call(arguments,2);
var isFunc=_.isFunction(method);
return _.map(obj,function(value){return(isFunc?method:value[method]).apply(value,args)
})
};
_.pluck=function(obj,key){return _.map(obj,function(value){return value[key]
})
};
_.where=function(obj,attrs,first){if(_.isEmpty(attrs)){return first?null:[]
}return _[first?"find":"filter"](obj,function(value){for(var key in attrs){if(attrs[key]!==value[key]){return false
}}return true
})
};
_.findWhere=function(obj,attrs){return _.where(obj,attrs,true)
};
_.max=function(obj,iterator,context){if(!iterator&&_.isArray(obj)&&obj[0]===+obj[0]&&obj.length<65535){return Math.max.apply(Math,obj)
}if(!iterator&&_.isEmpty(obj)){return -Infinity
}var result={computed:-Infinity,value:-Infinity};
each(obj,function(value,index,list){var computed=iterator?iterator.call(context,value,index,list):value;
computed>=result.computed&&(result={value:value,computed:computed})
});
return result.value
};
_.min=function(obj,iterator,context){if(!iterator&&_.isArray(obj)&&obj[0]===+obj[0]&&obj.length<65535){return Math.min.apply(Math,obj)
}if(!iterator&&_.isEmpty(obj)){return Infinity
}var result={computed:Infinity,value:Infinity};
each(obj,function(value,index,list){var computed=iterator?iterator.call(context,value,index,list):value;
computed<result.computed&&(result={value:value,computed:computed})
});
return result.value
};
_.shuffle=function(obj){var rand;
var index=0;
var shuffled=[];
each(obj,function(value){rand=_.random(index++);
shuffled[index-1]=shuffled[rand];
shuffled[rand]=value
});
return shuffled
};
var lookupIterator=function(value){return _.isFunction(value)?value:function(obj){return obj[value]
}
};
_.sortBy=function(obj,value,context){var iterator=lookupIterator(value);
return _.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iterator.call(context,value,index,list)}
}).sort(function(left,right){var a=left.criteria;
var b=right.criteria;
if(a!==b){if(a>b||a===void 0){return 1
}if(a<b||b===void 0){return -1
}}return left.index<right.index?-1:1
}),"value")
};
var group=function(obj,value,context,behavior){var result={};
var iterator=lookupIterator(value||_.identity);
each(obj,function(value,index){var key=iterator.call(context,value,index,obj);
behavior(result,key,value)
});
return result
};
_.groupBy=function(obj,value,context){return group(obj,value,context,function(result,key,value){(_.has(result,key)?result[key]:(result[key]=[])).push(value)
})
};
_.countBy=function(obj,value,context){return group(obj,value,context,function(result,key){if(!_.has(result,key)){result[key]=0
}result[key]++
})
};
_.sortedIndex=function(array,obj,iterator,context){iterator=iterator==null?_.identity:lookupIterator(iterator);
var value=iterator.call(context,obj);
var low=0,high=array.length;
while(low<high){var mid=(low+high)>>>1;
iterator.call(context,array[mid])<value?low=mid+1:high=mid
}return low
};
_.toArray=function(obj){if(!obj){return[]
}if(_.isArray(obj)){return slice.call(obj)
}if(obj.length===+obj.length){return _.map(obj,_.identity)
}return _.values(obj)
};
_.size=function(obj){if(obj==null){return 0
}return(obj.length===+obj.length)?obj.length:_.keys(obj).length
};
_.first=_.head=_.take=function(array,n,guard){if(array==null){return void 0
}return(n!=null)&&!guard?slice.call(array,0,n):array[0]
};
_.initial=function(array,n,guard){return slice.call(array,0,array.length-((n==null)||guard?1:n))
};
_.last=function(array,n,guard){if(array==null){return void 0
}if((n!=null)&&!guard){return slice.call(array,Math.max(array.length-n,0))
}else{return array[array.length-1]
}};
_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,(n==null)||guard?1:n)
};
_.compact=function(array){return _.filter(array,_.identity)
};
var flatten=function(input,shallow,output){each(input,function(value){if(_.isArray(value)){shallow?push.apply(output,value):flatten(value,shallow,output)
}else{output.push(value)
}});
return output
};
_.flatten=function(array,shallow){return flatten(array,shallow,[])
};
_.without=function(array){return _.difference(array,slice.call(arguments,1))
};
_.uniq=_.unique=function(array,isSorted,iterator,context){if(_.isFunction(isSorted)){context=iterator;
iterator=isSorted;
isSorted=false
}var initial=iterator?_.map(array,iterator,context):array;
var results=[];
var seen=[];
each(initial,function(value,index){if(isSorted?(!index||seen[seen.length-1]!==value):!_.contains(seen,value)){seen.push(value);
results.push(array[index])
}});
return results
};
_.union=function(){return _.uniq(concat.apply(ArrayProto,arguments))
};
_.intersection=function(array){var rest=slice.call(arguments,1);
return _.filter(_.uniq(array),function(item){return _.every(rest,function(other){return _.indexOf(other,item)>=0
})
})
};
_.difference=function(array){var rest=concat.apply(ArrayProto,slice.call(arguments,1));
return _.filter(array,function(value){return !_.contains(rest,value)
})
};
_.zip=function(){var args=slice.call(arguments);
var length=_.max(_.pluck(args,"length"));
var results=new Array(length);
for(var i=0;
i<length;
i++){results[i]=_.pluck(args,""+i)
}return results
};
_.object=function(list,values){if(list==null){return{}
}var result={};
for(var i=0,l=list.length;
i<l;
i++){if(values){result[list[i]]=values[i]
}else{result[list[i][0]]=list[i][1]
}}return result
};
_.indexOf=function(array,item,isSorted){if(array==null){return -1
}var i=0,l=array.length;
if(isSorted){if(typeof isSorted=="number"){i=(isSorted<0?Math.max(0,l+isSorted):isSorted)
}else{i=_.sortedIndex(array,item);
return array[i]===item?i:-1
}}if(nativeIndexOf&&array.indexOf===nativeIndexOf){return array.indexOf(item,isSorted)
}for(;
i<l;
i++){if(array[i]===item){return i
}}return -1
};
_.lastIndexOf=function(array,item,from){if(array==null){return -1
}var hasIndex=from!=null;
if(nativeLastIndexOf&&array.lastIndexOf===nativeLastIndexOf){return hasIndex?array.lastIndexOf(item,from):array.lastIndexOf(item)
}var i=(hasIndex?from:array.length);
while(i--){if(array[i]===item){return i
}}return -1
};
_.range=function(start,stop,step){if(arguments.length<=1){stop=start||0;
start=0
}step=arguments[2]||1;
var len=Math.max(Math.ceil((stop-start)/step),0);
var idx=0;
var range=new Array(len);
while(idx<len){range[idx++]=start;
start+=step
}return range
};
_.bind=function(func,context){if(func.bind===nativeBind&&nativeBind){return nativeBind.apply(func,slice.call(arguments,1))
}var args=slice.call(arguments,2);
return function(){return func.apply(context,args.concat(slice.call(arguments)))
}
};
_.partial=function(func){var args=slice.call(arguments,1);
return function(){return func.apply(this,args.concat(slice.call(arguments)))
}
};
_.bindAll=function(obj){var funcs=slice.call(arguments,1);
if(funcs.length===0){funcs=_.functions(obj)
}each(funcs,function(f){obj[f]=_.bind(obj[f],obj)
});
return obj
};
_.memoize=function(func,hasher){var memo={};
hasher||(hasher=_.identity);
return function(){var key=hasher.apply(this,arguments);
return _.has(memo,key)?memo[key]:(memo[key]=func.apply(this,arguments))
}
};
_.delay=function(func,wait){var args=slice.call(arguments,2);
return setTimeout(function(){return func.apply(null,args)
},wait)
};
_.defer=function(func){return _.delay.apply(_,[func,1].concat(slice.call(arguments,1)))
};
_.throttle=function(func,wait){var context,args,timeout,result;
var previous=0;
var later=function(){previous=new Date;
timeout=null;
result=func.apply(context,args)
};
return function(){var now=new Date;
var remaining=wait-(now-previous);
context=this;
args=arguments;
if(remaining<=0){clearTimeout(timeout);
timeout=null;
previous=now;
result=func.apply(context,args)
}else{if(!timeout){timeout=setTimeout(later,remaining)
}}return result
}
};
_.debounce=function(func,wait,immediate){var timeout,result;
return function(){var context=this,args=arguments;
var later=function(){timeout=null;
if(!immediate){result=func.apply(context,args)
}};
var callNow=immediate&&!timeout;
clearTimeout(timeout);
timeout=setTimeout(later,wait);
if(callNow){result=func.apply(context,args)
}return result
}
};
_.once=function(func){var ran=false,memo;
return function(){if(ran){return memo
}ran=true;
memo=func.apply(this,arguments);
func=null;
return memo
}
};
_.wrap=function(func,wrapper){return function(){var args=[func];
push.apply(args,arguments);
return wrapper.apply(this,args)
}
};
_.compose=function(){var funcs=arguments;
return function(){var args=arguments;
for(var i=funcs.length-1;
i>=0;
i--){args=[funcs[i].apply(this,args)]
}return args[0]
}
};
_.after=function(times,func){if(times<=0){return func()
}return function(){if(--times<1){return func.apply(this,arguments)
}}
};
_.keys=nativeKeys||function(obj){if(obj!==Object(obj)){throw new TypeError("Invalid object")
}var keys=[];
for(var key in obj){if(_.has(obj,key)){keys[keys.length]=key
}}return keys
};
_.values=function(obj){var values=[];
for(var key in obj){if(_.has(obj,key)){values.push(obj[key])
}}return values
};
_.pairs=function(obj){var pairs=[];
for(var key in obj){if(_.has(obj,key)){pairs.push([key,obj[key]])
}}return pairs
};
_.invert=function(obj){var result={};
for(var key in obj){if(_.has(obj,key)){result[obj[key]]=key
}}return result
};
_.functions=_.methods=function(obj){var names=[];
for(var key in obj){if(_.isFunction(obj[key])){names.push(key)
}}return names.sort()
};
_.extend=function(obj){each(slice.call(arguments,1),function(source){if(source){for(var prop in source){obj[prop]=source[prop]
}}});
return obj
};
_.pick=function(obj){var copy={};
var keys=concat.apply(ArrayProto,slice.call(arguments,1));
each(keys,function(key){if(key in obj){copy[key]=obj[key]
}});
return copy
};
_.omit=function(obj){var copy={};
var keys=concat.apply(ArrayProto,slice.call(arguments,1));
for(var key in obj){if(!_.contains(keys,key)){copy[key]=obj[key]
}}return copy
};
_.defaults=function(obj){each(slice.call(arguments,1),function(source){if(source){for(var prop in source){if(obj[prop]==null){obj[prop]=source[prop]
}}}});
return obj
};
_.clone=function(obj){if(!_.isObject(obj)){return obj
}return _.isArray(obj)?obj.slice():_.extend({},obj)
};
_.tap=function(obj,interceptor){interceptor(obj);
return obj
};
var eq=function(a,b,aStack,bStack){if(a===b){return a!==0||1/a==1/b
}if(a==null||b==null){return a===b
}if(a instanceof _){a=a._wrapped
}if(b instanceof _){b=b._wrapped
}var className=toString.call(a);
if(className!=toString.call(b)){return false
}switch(className){case"[object String]":return a==String(b);
case"[object Number]":return a!=+a?b!=+b:(a==0?1/a==1/b:a==+b);
case"[object Date]":case"[object Boolean]":return +a==+b;
case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase
}if(typeof a!="object"||typeof b!="object"){return false
}var length=aStack.length;
while(length--){if(aStack[length]==a){return bStack[length]==b
}}aStack.push(a);
bStack.push(b);
var size=0,result=true;
if(className=="[object Array]"){size=a.length;
result=size==b.length;
if(result){while(size--){if(!(result=eq(a[size],b[size],aStack,bStack))){break
}}}}else{var aCtor=a.constructor,bCtor=b.constructor;
if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&(aCtor instanceof aCtor)&&_.isFunction(bCtor)&&(bCtor instanceof bCtor))){return false
}for(var key in a){if(_.has(a,key)){size++;
if(!(result=_.has(b,key)&&eq(a[key],b[key],aStack,bStack))){break
}}}if(result){for(key in b){if(_.has(b,key)&&!(size--)){break
}}result=!size
}}aStack.pop();
bStack.pop();
return result
};
_.isEqual=function(a,b){return eq(a,b,[],[])
};
_.isEmpty=function(obj){if(obj==null){return true
}if(_.isArray(obj)||_.isString(obj)){return obj.length===0
}for(var key in obj){if(_.has(obj,key)){return false
}}return true
};
_.isElement=function(obj){return !!(obj&&obj.nodeType===1)
};
_.isArray=nativeIsArray||function(obj){return toString.call(obj)=="[object Array]"
};
_.isObject=function(obj){return obj===Object(obj)
};
each(["Arguments","Function","String","Number","Date","RegExp"],function(name){_["is"+name]=function(obj){return toString.call(obj)=="[object "+name+"]"
}
});
if(!_.isArguments(arguments)){_.isArguments=function(obj){return !!(obj&&_.has(obj,"callee"))
}
}if(typeof(/./)!=="function"){_.isFunction=function(obj){return typeof obj==="function"
}
}_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj))
};
_.isNaN=function(obj){return _.isNumber(obj)&&obj!=+obj
};
_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)=="[object Boolean]"
};
_.isNull=function(obj){return obj===null
};
_.isUndefined=function(obj){return obj===void 0
};
_.has=function(obj,key){return hasOwnProperty.call(obj,key)
};
_.noConflict=function(){root._=previousUnderscore;
return this
};
_.identity=function(value){return value
};
_.times=function(n,iterator,context){var accum=Array(n);
for(var i=0;
i<n;
i++){accum[i]=iterator.call(context,i)
}return accum
};
_.random=function(min,max){if(max==null){max=min;
min=0
}return min+Math.floor(Math.random()*(max-min+1))
};
var entityMap={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};
entityMap.unescape=_.invert(entityMap.escape);
var entityRegexes={escape:new RegExp("["+_.keys(entityMap.escape).join("")+"]","g"),unescape:new RegExp("("+_.keys(entityMap.unescape).join("|")+")","g")};
_.each(["escape","unescape"],function(method){_[method]=function(string){if(string==null){return""
}return(""+string).replace(entityRegexes[method],function(match){return entityMap[method][match]
})
}
});
_.result=function(object,property){if(object==null){return null
}var value=object[property];
return _.isFunction(value)?value.call(object):value
};
_.mixin=function(obj){each(_.functions(obj),function(name){var func=_[name]=obj[name];
_.prototype[name]=function(){var args=[this._wrapped];
push.apply(args,arguments);
return result.call(this,func.apply(_,args))
}
})
};
var idCounter=0;
_.uniqueId=function(prefix){var id=++idCounter+"";
return prefix?prefix+id:id
};
_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var noMatch=/(.)^/;
var escapes={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var escaper=/\\|'|\r|\n|\t|\u2028|\u2029/g;
_.template=function(text,data,settings){var render;
settings=_.defaults({},settings,_.templateSettings);
var matcher=new RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join("|")+"|$","g");
var index=0;
var source="__p+='";
text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escaper,function(match){return"\\"+escapes[match]
});
if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'"
}if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'"
}if(evaluate){source+="';\n"+evaluate+"\n__p+='"
}index=offset+match.length;
return match
});
source+="';\n";
if(!settings.variable){source="with(obj||{}){\n"+source+"}\n"
}source="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+source+"return __p;\n";
try{render=new Function(settings.variable||"obj","_",source)
}catch(e){e.source=source;
throw e
}if(data){return render(data,_)
}var template=function(data){return render.call(this,data,_)
};
template.source="function("+(settings.variable||"obj")+"){\n"+source+"}";
return template
};
_.chain=function(obj){return _(obj).chain()
};
var result=function(obj){return this._chain?_(obj).chain():obj
};
_.mixin(_);
each(["pop","push","reverse","shift","sort","splice","unshift"],function(name){var method=ArrayProto[name];
_.prototype[name]=function(){var obj=this._wrapped;
method.apply(obj,arguments);
if((name=="shift"||name=="splice")&&obj.length===0){delete obj[0]
}return result.call(this,obj)
}
});
each(["concat","join","slice"],function(name){var method=ArrayProto[name];
_.prototype[name]=function(){return result.call(this,method.apply(this._wrapped,arguments))
}
});
_.extend(_.prototype,{chain:function(){this._chain=true;
return this
},value:function(){return this._wrapped
}})
}).call(this);
provide("underscore",module.exports);
$.ender(module.exports)
}());
!function(document,require,provide,$){var flash={data:null,display:function(){var $container,$notice,data=JSON.parse(unescape(JSCookie.cookie("flash")))||{},notification=data.notice,error=data.error,success=data.success,opts={};
this.data=data;
JSCookie.cookie("flash",null,{path:"/"});
if(error){this.error(error)
}if(notification){this.notice(notification)
}if(success){this.success(success)
}},success:function(message,opts){this.clearErrors();
this.fireAlert(message,_.defaults(opts||{},{alert_type:"success"}))
},error:function(message,opts){this.fireAlert(message,_.defaults(opts||{},{alert_type:"error",no_fade_out:true}))
},notice:function(message,opts){this.fireAlert(message,_.defaults(opts||{},{alert_type:"notice"}))
},clearErrors:function(){$(".flash-container").find(".alert-error").remove()
},clear:function(){$(".flash-container").html("")
},fireAlert:function(message,opts){opts=opts||{};
var $container=$(".modal:visible .flash-container"),$alert,klass="",o21_mapping={success:"success",error:"danger",notice:"warning"};
if(opts.alert_type!==undefined){klass+=" alert-"+opts.alert_type+" alert-"+o21_mapping[opts.alert_type]
}if($container.length===0){$container=$(".flash-container");
klass+=" alert-block"
}else{klass+=" alert-header"
}opts.fadeOutDelay=opts.fadeOutDelay||7000;
$alert=$(['<div class="alert '+klass+'">','<a href="#" class="close alert-close">Ã—</a>',message,"</div>"].join("").replace(/\+/g," "));
$.each($container.children(),function(i,alert){$a=$(alert);
if($a.html()===$alert.html()){$a.remove()
}});
$container.append($alert);
if(opts.no_fade_out!==true){setTimeout(function(){$alert.remove()
},opts.fadeOutDelay)
}}};
if(!window.Flash){window.Flash=flash
}$("body").on("click",".alert .close",function(e){var $tar=$(e.target);
var $alert=$tar.parents(".alert");
$alert.remove()
});
provide("o2-flash",flash)
}(document,require,provide,jQuery);
ender.noConflict();
(function($){if(!("__jquery_xdomain__" in $)&&$.browser.msie&&"XDomainRequest" in window&&!(window.XMLHttpRequest&&"withCredentials" in new XMLHttpRequest())&&document.location.href.indexOf("file:///")==-1){$.__jquery_xdomain__=$.support.cors=true;
var urlMatcher=/^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,oldxhr=$.ajaxSettings.xhr,sessionCookie="XDR_SESSION_COOKIE_NAME" in window?window.XDR_SESSION_COOKIE_NAME:"jsessionid",cookies="XDR_COOKIE_HEADERS" in window?window.XDR_COOKIE_HEADERS:[],headers="XDR_HEADERS" in window?window.XDR_HEADERS:["Content-Type"],ReadyState={UNSENT:0,OPENED:1,LOADING:3,DONE:4},debug=window.XDR_DEBUG&&"console" in window,XDomainRequestAdapter,domain,reqId=0;
function forEachCookie(names,fn){if(typeof names=="string"){names=[names]
}var i,cookie;
for(i=0;
i<names.length;
i++){cookie=new RegExp("(?:^|; )"+names[i]+"=([^;]*)","i").exec(document.cookie);
cookie=cookie&&cookie[1];
if(cookie){fn.call(null,names[i],cookie)
}}}function parseResponse(str){if(str.length>=5){var sub=str.substring(str.length<=20?0:str.length-20),i=sub.length-1,end,hl,st;
if(sub.charAt(i)==="~"){for(end=i--;
i>=0&&sub.charAt(i)!=="~";
i--){}hl=parseInt(sub.substring(i+1,end));
if(!isNaN(hl)&&hl>=0&&i>=2&&sub.charAt(i)==="~"){for(end=i--;
i>=0&&sub.charAt(i)!=="~";
i--){}st=parseInt(sub.substring(i+1,end));
if(!isNaN(st)&&i>=0&&sub.charAt(i)==="~"){end=str.length-hl-sub.length+i;
return[st,str.substring(0,end),str.substr(end,hl)]
}}}}return[200,str,""]
}function parseUrl(url){if(typeof(url)==="object"){return url
}var matches=urlMatcher.exec(url);
return matches?{href:matches[0]||"",hrefNoHash:matches[1]||"",hrefNoSearch:matches[2]||"",domain:matches[3]||"",protocol:matches[4]||"",authority:matches[5]||"",username:matches[7]||"",password:matches[8]||"",host:matches[9]||"",hostname:matches[10]||"",port:matches[11]||"",pathname:matches[12]||"",directory:matches[13]||"",filename:matches[14]||"",search:matches[15]||"",hash:matches[16]||""}:{}
}function parseCookies(header){if(header.length==0){return[]
}var cooks=[],i=0,start=0,end,dom;
do{end=header.indexOf(",",start);
cooks[i]=(cooks[i]||"")+header.substring(start,end==-1?header.length:end);
start=end+1;
if(cooks[i].indexOf("Expires=")==-1||cooks[i].indexOf(",")!=-1){i++
}else{cooks[i]+=","
}}while(end>0);
for(i=0;
i<cooks.length;
i++){dom=cooks[i].indexOf("Domain=");
if(dom!=-1){cooks[i]=cooks[i].substring(0,dom)+cooks[i].substring(cooks[i].indexOf(";",dom)+1)
}}return cooks
}domain=parseUrl(document.location.href).domain;
XDomainRequestAdapter=function(){var self=this,_xdr=new XDomainRequest(),_mime,_reqHeaders=[],_method,_url,_id=reqId++,_setState=function(state){self.readyState=state;
if(typeof self.onreadystatechange==="function"){self.onreadystatechange.call(self)
}},_done=function(state,code){if(!self.responseText){self.responseText=""
}if(debug){console.log("[XDR-"+_id+"] request end with state "+state+" and code "+code+" and data length "+self.responseText.length)
}self.status=code;
if(!self.responseType){_mime=_mime||_xdr.contentType;
if(_mime.match(/\/json/)){self.responseType="json";
self.response=self.responseText
}else{if(_mime.match(/\/xml/)){self.responseType="document";
var $error,dom=new ActiveXObject("Microsoft.XMLDOM");
dom.async=false;
dom.loadXML(self.responseText);
self.responseXML=self.response=dom;
if($(dom).children("error").length!=0){$error=$(dom).find("error");
self.status=parseInt($error.attr("response_code"))
}}else{self.responseType="text";
self.response=self.responseText
}}}_setState(state);
_xdr=null;
_reqHeaders=null;
_url=null
};
_xdr.onprogress=function(){_setState(ReadyState.LOADING)
};
_xdr.ontimeout=function(){_done(ReadyState.DONE,408)
};
_xdr.onerror=function(){_done(ReadyState.DONE,500)
};
_xdr.onload=function(){var cooks,i,resp=parseResponse(_xdr.responseText||"");
if(debug){console.log("[XDR-"+reqId+"] parsing cookies for header "+resp[2])
}cooks=parseCookies(resp[2]);
self.responseText=resp[1]||"";
if(debug){console.log("[XDR-"+_id+"] raw data:\n"+_xdr.responseText+"\n parsed response: status="+resp[0]+", header="+resp[2]+", data=\n"+resp[1])
}for(i=0;
i<cooks.length;
i++){if(debug){console.log("[XDR-"+_id+"] installing cookie "+cooks[i])
}document.cookie=cooks[i]+";Domain="+document.domain
}_done(ReadyState.DONE,resp[0]);
resp=null
};
this.readyState=ReadyState.UNSENT;
this.status=0;
this.statusText="";
this.responseType="";
this.timeout=0;
this.withCredentials=false;
this.overrideMimeType=function(mime){_mime=mime
};
this.abort=function(){_xdr.abort()
};
this.setRequestHeader=function(k,v){if($.inArray(k,headers)>=0){_reqHeaders.push({k:k,v:v})
}};
this.open=function(m,u){_url=u;
_method=m;
_setState(ReadyState.OPENED)
};
this.send=function(data){_xdr.timeout=this.timeout;
if(sessionCookie||cookies||_reqHeaders.length){var h,addParam=function(name,value){var q=_url.indexOf("?");
_url+=(q==-1?"?":"&")+name+"="+encodeURIComponent(value);
if(debug){console.log("[XDR-"+_id+"] added parameter "+name+"="+value+" => "+_url)
}};
for(h=0;
h<_reqHeaders.length;
h++){addParam(_reqHeaders[h].k,_reqHeaders[h].v)
}forEachCookie(sessionCookie,function(name,value){var q=_url.indexOf("?");
if(q==-1){_url+=";"+name+"="+value
}else{_url=_url.substring(0,q)+";"+name+"="+value+_url.substring(q)
}if(debug){console.log("[XDR-"+_id+"] added cookie "+_url)
}});
forEachCookie(cookies,addParam);
addParam("_xdr",""+_id)
}if(debug){console.log("[XDR-"+_id+"] opening "+_url)
}_xdr.open(_method,_url);
if(debug){console.log("[XDR-"+_id+"] send, timeout="+_xdr.timeout)
}_xdr.send(data)
};
this.getAllResponseHeaders=function(){return""
};
this.getResponseHeader=function(){return null
}
};
$.ajaxSettings.xhr=function(){var target=parseUrl(this.url).domain;
if(target===""||target===domain){return oldxhr.call($.ajaxSettings)
}else{try{return new XDomainRequestAdapter()
}catch(e){}}}
}})(jQuery);
_=require("underscore");
(function($){SimpleStateMachine=function(states,options){var ref=this;
ref.init(states,options)
};
SimpleStateMachine.prototype.currentState=0;
$.extend(SimpleStateMachine.prototype,{States:{Init:0},options:{},init:function(states,options){var ref=this;
$.extend(ref.States,states);
$.extend(ref.options,options);
ref.transitions={};
ref.currentState=ref.States.Init;
$.each(ref.States,function(key1,value1){$.each(ref.States,function(key2,value2){ref.transitions[value1+"_"+value2]=[]
});
ref.transitions["_"+value1.toString()]=[];
ref.transitions[value1.toString()+"_"]=[]
})
},addTransitionHandler:function(transition,handler){var ref=this;
var handlerKey="";
if(typeof transition==="object"){var from=transition.from==null?"":transition.from;
var to=transition.to==null?"":transition.to;
handlerKey=from+"_"+to
}else{if(typeof transition==="number"){handlerKey="_"+transition.toString()
}}ref.transitions[handlerKey].push(handler)
},transitionTo:function(state){var ref=this;
if(ref.currentState===state){return
}var transitionHandler=function(i,method){method.call(ref.options.context||null)
};
var transitionKeys=[ref.currentState.toString()+"_",ref.currentState.toString()+"_"+state.toString(),"_"+state.toString()];
for(var i=0,tkl=transitionKeys.length;
i<tkl;
i++){$.each(ref.transitions[transitionKeys[i]],transitionHandler)
}ref.currentState=state
}})
})(jQuery);
(function($){CharCounter=function(el,options){this.init(el,options)
};
$.extend(CharCounter.prototype,{name:"charCounter",options:{delimiter:false,threshold:60,maxtokens:0,inputchanged:false,noinput:false,thresholdabove:false,thresholdbelow:false,limitreached:false},States:{Init:0,AboveThreshold:1,BelowThreshold:2,ZeroBelow:3},currentState:null,init:function(el,options){var ref=this;
this.element=$(el);
$.data(el,ref.name,ref);
this.sm=new SimpleStateMachine(ref.States);
this.sm.addTransitionHandler({to:ref.States.BelowThreshold},function(){if(ref.options.thresholdbelow){ref.options.thresholdbelow.call(ref.element)
}});
this.sm.addTransitionHandler({to:ref.States.Init},function(){if(ref.options.noinput){ref.options.noinput.call(ref.element)
}});
this.sm.addTransitionHandler({to:ref.States.AboveThreshold},function(){if(ref.options.thresholdabove){ref.options.thresholdabove.call(ref.element)
}});
this.sm.addTransitionHandler({to:ref.States.ZeroBelow},function(){if(ref.options.limitreached){ref.options.limitreached.call(ref.element)
}});
this.options=$.extend({},this.options,options);
ref.currentState=ref.States.Init;
return ref.element.each(function(i,e){$(this).keyup(function(){ref.inputChanged.call(ref)
}).keyup()
})
},inputChanged:function(){var ref=this;
if(ref.options.delimiter){var matches=ref.element.val().match(ref.options.delimiter);
var tokensEntered=matches?matches.length:0
}else{var tokensEntered=ref.element.val().length
}var tokensLeft=ref.options.maxtokens==0?tokensEntered:ref.options.maxtokens-tokensEntered;
var actualThreshold=ref.options.maxtokens==0?ref.options.threshold:-(ref.options.threshold);
if(ref.options.inputchanged){ref.options.inputchanged.call(ref.element,tokensLeft,tokensEntered,ref.options.maxtokens)
}if(tokensEntered==0){ref.sm.transitionTo(ref.States.Init)
}else{if(tokensLeft<0){ref.sm.transitionTo(ref.States.ZeroBelow)
}else{if(tokensLeft>actualThreshold){ref.sm.transitionTo(ref.States.AboveThreshold)
}else{ref.sm.transitionTo(ref.States.BelowThreshold)
}}}}});
$.fn.charCounter=function(options){var args=$.makeArray(arguments),after=args.slice(1);
return this.each(function(){var instance=$.data(this,"charCounter");
if(instance){if(typeof options==="string"){instance[options].apply(instance,after)
}else{if(instance.update){instance.update.apply(instance,args)
}}}else{new CharCounter(this,options)
}})
}
})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(window,document,$){var isInputSupported="placeholder" in document.createElement("input"),isTextareaSupported="placeholder" in document.createElement("textarea"),prototype=$.fn,valHooks=$.valHooks,hooks,placeholder;
if(isInputSupported&&isTextareaSupported){placeholder=prototype.placeholder=function(){return this
};
placeholder.input=placeholder.textarea=true
}else{placeholder=prototype.placeholder=function(){var $this=this;
$this.filter((isInputSupported?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":clearPlaceholder,"blur.placeholder":setPlaceholder}).data("placeholder-enabled",true).trigger("blur.placeholder");
return $this
};
placeholder.input=isInputSupported;
placeholder.textarea=isTextareaSupported;
hooks={get:function(element){var $element=$(element);
return $element.data("placeholder-enabled")&&$element.hasClass("placeholder")?"":element.value
},set:function(element,value){var $element=$(element);
if(!$element.data("placeholder-enabled")){return element.value=value
}if(value==""){element.value=value;
if(element!=document.activeElement){setPlaceholder.call(element)
}}else{if($element.hasClass("placeholder")){clearPlaceholder.call(element,true,value)||(element.value=value)
}else{element.value=value
}}return $element
}};
isInputSupported||(valHooks.input=hooks);
isTextareaSupported||(valHooks.textarea=hooks);
$(function(){$(document).delegate("form","submit.placeholder",function(){var $inputs=$(".placeholder",this).each(clearPlaceholder);
setTimeout(function(){$inputs.each(setPlaceholder)
},10)
})
});
$(window).bind("beforeunload.placeholder",function(){$(".placeholder, .pac-placeholder").each(function(){this.value=""
})
})
}function args(elem){var newAttrs={},rinlinejQuery=/^jQuery\d+$/;
$.each(elem.attributes,function(i,attr){if(attr.specified&&!rinlinejQuery.test(attr.name)){newAttrs[attr.name]=attr.value
}});
return newAttrs
}function clearPlaceholder(event,value){var input=this,$input=$(input);
if(input.value==$input.attr("placeholder")&&$input.hasClass("placeholder")){if($input.data("placeholder-password")){$input=$input.hide().next().show().attr("id",$input.removeAttr("id").data("placeholder-id"));
if(event===true){return $input[0].value=value
}$input.focus()
}else{input.value="";
$input.removeClass("placeholder");
input==document.activeElement&&input.select()
}}}function setPlaceholder(){var $replacement,input=this,$input=$(input),$origInput=$input,id=this.id;
if(input.value==""){if(input.type=="password"){if(!$input.data("placeholder-textinput")){try{$replacement=$input.clone().attr({type:"text"})
}catch(e){$replacement=$("<input>").attr($.extend(args(this),{type:"text"}))
}$replacement.removeAttr("name").data({"placeholder-password":true,"placeholder-id":id}).bind("focus.placeholder",clearPlaceholder);
$input.data({"placeholder-textinput":$replacement,"placeholder-id":id}).before($replacement)
}$input=$input.removeAttr("id").hide().prev().attr("id",id).show()
}$input.addClass("placeholder");
$input[0].value=$input.attr("placeholder")
}else{$input.removeClass("placeholder")
}}}(this,document,jQuery));
(function($){FlagWidget=function(el,options){if(el){this.init(el,options)
}};
$.extend(FlagWidget.prototype,{name:"flagWidget",success:function(){},init:function(el,options){this.element=$(el);
$.data(el,this.name,this);
var _ref=this;
this.element.show();
this.element.children(".click-target").click(function(){_ref.togglePanel();
return false
});
var outsideClickHandler=function(eventObject){eventObject.data.hidePanel()
};
this.element.hover(function(){$(document).unbind("click",outsideClickHandler)
},function(){$(document).bind("click",_ref,outsideClickHandler)
});
this.element.find("ul li a").click(function(){_ref.itemClick(this);
return false
});
if(options&&options.success){this.success=options.success
}this.element.parent().submit(function(){var $form=$(this);
if($form.find('input[name="user_flag[name]"]').val()==="Other"){var otherVal=$form.find('input[name="user_flag[other_note]"]').val();
if(otherVal===undefined||$.trim(otherVal)===""){return false
}}_ref.hidePanel();
_ref.element.addClass("spinner");
$.post($form.attr("action"),$form.serialize(),function(data){_ref.element.children(".click-target").unbind("click");
_ref.element.removeClass("spinner");
_ref.element.addClass("success").delay(2000).fadeOut(1000);
_ref.success()
});
return false
})
},showPanel:function(){if(!this.element.hasClass("expanded")){this.element.addClass("expanded")
}},hidePanel:function(){this.element.removeClass("expanded");
this.element.find("li.other.clicked").removeClass("clicked")
},togglePanel:function(){if(this.element.hasClass("expanded")){this.hidePanel()
}else{this.showPanel()
}},itemClick:function(el){var $link=$(el);
var $form=this.element.parent();
var $parent=$link.parent();
$form.find('input[name="user_flag[name]"]').val($link.data("reason-id"));
if($parent.hasClass("other")){var $reason=$parent.find("input").not('input[type="submit"]');
$reason.val("");
$parent.addClass("clicked")
}else{$parent.find("input").val("");
$form.submit()
}}});
$.fn.flagWidget=function(options){var args=$.makeArray(arguments),after=args.slice(1);
return this.each(function(){var instance=$.data(this,"flagWidget");
if(instance){if(typeof options==="string"){instance[options].apply(instance,after)
}else{if(instance.update){instance.update.apply(instance,args)
}}}else{new FlagWidget(this,options)
}})
}
})(jQuery);
(function($,window,undefined){var $window=$(window);
$.fn.lazyload=function(options){var callback=window._&&_.throttle?_.throttle(checkImages,250):checkImages;
var elements=this;
var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null};
function checkImages(){var counter=0;
if(elements.length<1){$(settings.container).unbind(settings.event,callback)
}else{elements.each(function(){var $this=$(this);
if(settings.skip_invisible&&!$this.is(":visible")){return
}if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else{if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear")
}else{if(++counter>settings.failure_limit){return false
}}}})
}}if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;
delete options.failurelimit
}if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;
delete options.effectspeed
}$.extend(settings,options)
}if(0===settings.event.indexOf("scroll")){$(settings.container).bind(settings.event,callback)
}this.each(function(){var self=this;
var $self=$(self);
self.loaded=false;
$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;
settings.appear.call(self,elements_left,settings)
}$("<img />").bind("load",function(){$self.hide().attr("src",$self.data(settings.data_attribute))[settings.effect](settings.effect_speed);
self.loaded=true;
var temp=$.grep(elements,function(element){return !element.loaded
});
elements=$(temp);
if(settings.load){var elements_left=elements.length;
settings.load.call(self,elements_left,settings)
}}).attr("src",$self.data(settings.data_attribute))
}});
if(0!==settings.event.indexOf("scroll")){$self.bind(settings.event,function(event){if(!self.loaded){$self.trigger("appear")
}})
}});
$window.bind("resize",function(event){checkImages()
});
checkImages();
return this
};
$.belowthefold=function(element,settings){var $container,fold;
if(settings.container===undefined||settings.container===window){fold=$window.height()+$window.scrollTop()
}else{$container=$(settings.container);
fold=$container.offset().top+$container.height()
}return fold<=$(element).offset().top-settings.threshold
};
$.rightoffold=function(element,settings){var $container,fold;
if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft()
}else{$container=$(settings.container);
fold=$container.offset().left+$container.width()
}return fold<=$(element).offset().left-settings.threshold
};
$.abovethetop=function(element,settings){var fold;
var $element=$(element);
if(settings.container===undefined||settings.container===window){fold=$window.scrollTop()
}else{fold=$(settings.container).offset().top
}return fold>=$element.offset().top+settings.threshold+$element.height()
};
$.leftofbegin=function(element,settings){var fold;
var $element=$(element);
if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft()
}else{fold=$(settings.container).offset().left
}return fold>=$element.offset().left+settings.threshold+$element.width()
};
$.inviewport=function(element,settings){return !$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings)
};
$.extend($.expr[":"],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0,container:window})
},"above-the-top":function(a){return !$.belowthefold(a,{threshold:0,container:window})
},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0,container:window})
},"left-of-screen":function(a){return !$.rightoffold(a,{threshold:0,container:window})
},"in-viewport":function(a){return !$.inviewport(a,{threshold:0,container:window})
},"above-the-fold":function(a){return !$.belowthefold(a,{threshold:0,container:window})
},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0,container:window})
},"left-of-fold":function(a){return !$.rightoffold(a,{threshold:0,container:window})
}})
})(jQuery,window);
(function($){$.fn.disableSubmit=function(){var buttonSelector='input[type="submit"], button[type="submit"]';
return this.each(function(){var $t=$(this),$target;
if($t.is(buttonSelector)){$target=$t
}else{$target=$t.find(buttonSelector)
}$target.attr("disabled","disabled");
return this
})
}
})(jQuery);
new function(settings){var $separator=settings.separator||"&";
var $spaces=settings.spaces===false?false:true;
var $suffix=settings.suffix===false?"":"[]";
var $prefix=settings.prefix===false?false:true;
var $hash=$prefix?settings.hash===true?"#":"?":"";
var $numbers=false;
jQuery.query=new function(){var is=function(o,t){return o!=undefined&&o!==null&&(!!t?o.constructor==t:true)
};
var parse=function(path){var m,rx=/\[([^[]*)\]/g,match=/^([^[]+)(\[.*\])?$/.exec(path),base=match[1],tokens=[];
while(m=rx.exec(match[2])){tokens.push(m[1])
}return[base,tokens]
};
var set=function(target,tokens,value){var o,token=tokens.shift();
if(typeof target!="object"){target=null
}if(token===""){if(!target){target=[]
}if(is(target,Array)){target.push(tokens.length==0?value:set(null,tokens.slice(0),value))
}else{if(is(target,Object)){var i=0;
while(target[i++]!=null){}target[--i]=tokens.length==0?value:set(target[i],tokens.slice(0),value)
}else{target=[];
target.push(tokens.length==0?value:set(null,tokens.slice(0),value))
}}}else{if(token&&token.match(/^\s*[0-9]+\s*$/)){var index=parseInt(token,10);
if(!target){target=[]
}target[index]=tokens.length==0?value:set(target[index],tokens.slice(0),value)
}else{if(token){var index=token.replace(/^\s*|\s*$/g,"");
if(!target){target={}
}if(is(target,Array)){var temp={};
for(var i=0;
i<target.length;
++i){temp[i]=target[i]
}target=temp
}target[index]=tokens.length==0?value:set(target[index],tokens.slice(0),value)
}else{return value
}}}return target
};
var queryObject=function(a){var self=this;
self.keys={};
if(a.queryObject){jQuery.each(a.get(),function(key,val){self.SET(key,val)
})
}else{jQuery.each(arguments,function(){var q=""+this;
q=q.replace(/^[?#]/,"");
q=q.replace(/[;&]$/,"");
if($spaces){q=q.replace(/[+]/g," ")
}jQuery.each(q.split(/[&;]/),function(){var key=decodeURIComponent(this.split("=")[0]||"");
var val=decodeURIComponent(this.split("=")[1]||"");
if(!key){return
}if($numbers){if(/^[+-]?[0-9]+\.[0-9]*$/.test(val)){val=parseFloat(val)
}else{if(/^[+-]?[0-9]+$/.test(val)){val=parseInt(val,10)
}}}if(val!==false&&val!==true&&typeof val!="number"){val=val
}self.SET(key,val)
})
})
}return self
};
queryObject.prototype={queryObject:true,has:function(key,type){var value=this.get(key);
return is(value,type)
},GET:function(key){if(!is(key)){return this.keys
}var parsed=parse(key),base=parsed[0],tokens=parsed[1];
var target=this.keys[base];
while(target!=null&&tokens.length!=0){target=target[tokens.shift()]
}return typeof target=="number"?target:target||""
},get:function(key){var target=this.GET(key);
if(is(target,Object)){return jQuery.extend(true,{},target)
}else{if(is(target,Array)){return target.slice(0)
}}return target
},SET:function(key,val){var value=!is(val)?null:val;
var parsed=parse(key),base=parsed[0],tokens=parsed[1];
var target=this.keys[base];
this.keys[base]=set(target,tokens.slice(0),value);
return this
},set:function(key,val){return this.copy().SET(key,val)
},REMOVE:function(key){return this.SET(key,null).COMPACT()
},remove:function(key){return this.copy().REMOVE(key)
},EMPTY:function(){var self=this;
jQuery.each(self.keys,function(key,value){delete self.keys[key]
});
return self
},load:function(url){var hash=url.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1");
var search=url.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");
return new queryObject(url.length==search.length?"":search,url.length==hash.length?"":hash)
},empty:function(){return this.copy().EMPTY()
},copy:function(){return new queryObject(this)
},COMPACT:function(){function build(orig){var obj=typeof orig=="object"?is(orig,Array)?[]:{}:orig;
if(typeof orig=="object"){function add(o,key,value){if(is(o,Array)){o.push(value)
}else{o[key]=value
}}jQuery.each(orig,function(key,value){if(!is(value)){return true
}add(obj,key,build(value))
})
}return obj
}this.keys=build(this.keys);
return this
},compact:function(){return this.copy().COMPACT()
},toString:function(){var i=0,queryString=[],chunks=[],self=this;
var encode=function(str){str=str+"";
if($spaces){str=str.replace(/ /g,"+")
}return encodeURIComponent(str)
};
var addFields=function(arr,key,value){if(!is(value)||value===false){return
}var o=[encode(key)];
if(value!==true){o.push("=");
o.push(encode(value))
}arr.push(o.join(""))
};
var build=function(obj,base){var newKey=function(key){return !base||base==""?[key].join(""):[base,"[",key,"]"].join("")
};
jQuery.each(obj,function(key,value){if(typeof value=="object"){build(value,newKey(key))
}else{addFields(chunks,newKey(key),value)
}})
};
build(this.keys);
if(chunks.length>0){queryString.push($hash)
}queryString.push(chunks.join($separator));
return queryString.join("")
}};
return new queryObject(location.search,location.hash)
}
}(jQuery.query||{});
/*!
 * Amplify Store - Persistent Client-Side Storage 1.1.0
 *
 * Copyright 2011 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function(a,b){function e(a,e){c.addType(a,function(f,g,h){var i,j,k,l,m=g,n=(new Date).getTime();
if(!f){m={},l=[],k=0;
try{f=e.length;
while(f=e.key(k++)){d.test(f)&&(j=JSON.parse(e.getItem(f)),j.expires&&j.expires<=n?l.push(f):m[f.replace(d,"")]=j.data)
}while(f=l.pop()){e.removeItem(f)
}}catch(o){}return m
}f="__amplify__"+f;
if(g===b){i=e.getItem(f),j=i?JSON.parse(i):{expires:-1};
if(j.expires&&j.expires<=n){e.removeItem(f)
}else{return j.data
}}else{if(g===null){e.removeItem(f)
}else{j=JSON.stringify({data:g,expires:h.expires?n+h.expires:null});
try{e.setItem(f,j)
}catch(o){c[a]();
try{e.setItem(f,j)
}catch(o){throw c.error()
}}}}return m
})
}var c=a.store=function(a,b,d,e){var e=c.type;
d&&d.type&&d.type in c.types&&(e=d.type);
return c.types[e](a,b,d||{})
};
c.types={},c.type=null,c.addType=function(a,b){c.type||(c.type=a),c.types[a]=b,c[a]=function(b,d,e){e=e||{},e.type=a;
return c(b,d,e)
}
},c.error=function(){return"amplify.store quota exceeded"
};
var d=/^__amplify__/;
for(var f in {localStorage:1,sessionStorage:1}){try{window[f].getItem&&e(f,window[f])
}catch(g){}}if(window.globalStorage){try{e("globalStorage",window.globalStorage[window.location.hostname]),c.type==="sessionStorage"&&(c.type="globalStorage")
}catch(g){}}(function(){if(!c.types.localStorage){var a=document.createElement("div"),d="amplify";
a.style.display="none",document.getElementsByTagName("head")[0].appendChild(a);
try{a.addBehavior("#default#userdata"),a.load(d)
}catch(e){a.parentNode.removeChild(a);
return
}c.addType("userData",function(e,f,g){a.load(d);
var h,i,j,k,l,m=f,n=(new Date).getTime();
if(!e){m={},l=[],k=0;
while(h=a.XMLDocument.documentElement.attributes[k++]){i=JSON.parse(h.value),i.expires&&i.expires<=n?l.push(h.name):m[h.name]=i.data
}while(e=l.pop()){a.removeAttribute(e)
}a.save(d);
return m
}e=e.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-");
if(f===b){h=a.getAttribute(e),i=h?JSON.parse(h):{expires:-1};
if(i.expires&&i.expires<=n){a.removeAttribute(e)
}else{return i.data
}}else{f===null?a.removeAttribute(e):(j=a.getAttribute(e),i=JSON.stringify({data:f,expires:g.expires?n+g.expires:null}),a.setAttribute(e,i))
}try{a.save(d)
}catch(o){j===null?a.removeAttribute(e):a.setAttribute(e,j),c.userData();
try{a.setAttribute(e,i),a.save(d)
}catch(o){j===null?a.removeAttribute(e):a.setAttribute(e,j);
throw c.error()
}}return m
})
}})(),function(){function e(a){return a===b?b:JSON.parse(JSON.stringify(a))
}var a={},d={};
c.addType("memory",function(c,f,g){if(!c){return e(a)
}if(f===b){return e(a[c])
}d[c]&&(clearTimeout(d[c]),delete d[c]);
if(f===null){delete a[c];
return null
}a[c]=f,g.expires&&(d[c]=setTimeout(function(){delete a[c],delete d[c]
},g.expires));
return f
})
}()
})(this.amplify=this.amplify||{});
this.Handlebars={};
(function(Handlebars){Handlebars.VERSION="1.0.0-rc.3";
Handlebars.COMPILER_REVISION=2;
Handlebars.REVISION_CHANGES={1:"<= 1.0.rc.2",2:">= 1.0.0-rc.3"};
Handlebars.helpers={};
Handlebars.partials={};
Handlebars.registerHelper=function(name,fn,inverse){if(inverse){fn.not=inverse
}this.helpers[name]=fn
};
Handlebars.registerPartial=function(name,str){this.partials[name]=str
};
Handlebars.registerHelper("helperMissing",function(arg){if(arguments.length===2){return undefined
}else{throw new Error("Could not find property '"+arg+"'")
}});
var toString=Object.prototype.toString,functionType="[object Function]";
Handlebars.registerHelper("blockHelperMissing",function(context,options){var inverse=options.inverse||function(){},fn=options.fn;
var ret="";
var type=toString.call(context);
if(type===functionType){context=context.call(this)
}if(context===true){return fn(this)
}else{if(context===false||context==null){return inverse(this)
}else{if(type==="[object Array]"){if(context.length>0){return Handlebars.helpers.each(context,options)
}else{return inverse(this)
}}else{return fn(context)
}}}});
Handlebars.K=function(){};
Handlebars.createFrame=Object.create||function(object){Handlebars.K.prototype=object;
var obj=new Handlebars.K();
Handlebars.K.prototype=null;
return obj
};
Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(level,obj){if(Handlebars.logger.level<=level){var method=Handlebars.logger.methodMap[level];
if(typeof console!=="undefined"&&console[method]){console[method].call(console,obj)
}}}};
Handlebars.log=function(level,obj){Handlebars.logger.log(level,obj)
};
Handlebars.registerHelper("each",function(context,options){var fn=options.fn,inverse=options.inverse;
var i=0,ret="",data;
if(options.data){data=Handlebars.createFrame(options.data)
}if(context&&typeof context==="object"){if(context instanceof Array){for(var j=context.length;
i<j;
i++){if(data){data.index=i
}ret=ret+fn(context[i],{data:data})
}}else{for(var key in context){if(context.hasOwnProperty(key)){if(data){data.key=key
}ret=ret+fn(context[key],{data:data});
i++
}}}}if(i===0){ret=inverse(this)
}return ret
});
Handlebars.registerHelper("if",function(context,options){var type=toString.call(context);
if(type===functionType){context=context.call(this)
}if(!context||Handlebars.Utils.isEmpty(context)){return options.inverse(this)
}else{return options.fn(this)
}});
Handlebars.registerHelper("unless",function(context,options){var fn=options.fn,inverse=options.inverse;
options.fn=inverse;
options.inverse=fn;
return Handlebars.helpers["if"].call(this,context,options)
});
Handlebars.registerHelper("with",function(context,options){return options.fn(context)
});
Handlebars.registerHelper("log",function(context,options){var level=options.data&&options.data.level!=null?parseInt(options.data.level,10):1;
Handlebars.log(level,context)
})
}(this.Handlebars));
var handlebars=(function(){var parser={trace:function trace(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,simpleInverse:6,statements:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,partialName:25,params:26,hash:27,DATA:28,param:29,STRING:30,INTEGER:31,BOOLEAN:32,hashSegments:33,hashSegment:34,ID:35,EQUALS:36,PARTIAL_NAME:37,pathSegments:38,SEP:39,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"DATA",30:"STRING",31:"INTEGER",32:"BOOLEAN",35:"ID",36:"EQUALS",37:"PARTIAL_NAME",39:"SEP"},productions_:[0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[26,2],[26,1],[29,1],[29,1],[29,1],[29,1],[29,1],[27,1],[33,2],[33,1],[34,3],[34,3],[34,3],[34,3],[34,3],[25,1],[21,1],[38,3],[38,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;
switch(yystate){case 1:return $$[$0-1];
break;
case 2:this.$=new yy.ProgramNode([],$$[$0]);
break;
case 3:this.$=new yy.ProgramNode($$[$0-2],$$[$0]);
break;
case 4:this.$=new yy.ProgramNode($$[$0-1],[]);
break;
case 5:this.$=new yy.ProgramNode($$[$0]);
break;
case 6:this.$=new yy.ProgramNode([],[]);
break;
case 7:this.$=new yy.ProgramNode([]);
break;
case 8:this.$=[$$[$0]];
break;
case 9:$$[$0-1].push($$[$0]);
this.$=$$[$0-1];
break;
case 10:this.$=new yy.BlockNode($$[$0-2],$$[$0-1].inverse,$$[$0-1],$$[$0]);
break;
case 11:this.$=new yy.BlockNode($$[$0-2],$$[$0-1],$$[$0-1].inverse,$$[$0]);
break;
case 12:this.$=$$[$0];
break;
case 13:this.$=$$[$0];
break;
case 14:this.$=new yy.ContentNode($$[$0]);
break;
case 15:this.$=new yy.CommentNode($$[$0]);
break;
case 16:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1]);
break;
case 17:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1]);
break;
case 18:this.$=$$[$0-1];
break;
case 19:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1]);
break;
case 20:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1],true);
break;
case 21:this.$=new yy.PartialNode($$[$0-1]);
break;
case 22:this.$=new yy.PartialNode($$[$0-2],$$[$0-1]);
break;
case 23:break;
case 24:this.$=[[$$[$0-2]].concat($$[$0-1]),$$[$0]];
break;
case 25:this.$=[[$$[$0-1]].concat($$[$0]),null];
break;
case 26:this.$=[[$$[$0-1]],$$[$0]];
break;
case 27:this.$=[[$$[$0]],null];
break;
case 28:this.$=[[new yy.DataNode($$[$0])],null];
break;
case 29:$$[$0-1].push($$[$0]);
this.$=$$[$0-1];
break;
case 30:this.$=[$$[$0]];
break;
case 31:this.$=$$[$0];
break;
case 32:this.$=new yy.StringNode($$[$0]);
break;
case 33:this.$=new yy.IntegerNode($$[$0]);
break;
case 34:this.$=new yy.BooleanNode($$[$0]);
break;
case 35:this.$=new yy.DataNode($$[$0]);
break;
case 36:this.$=new yy.HashNode($$[$0]);
break;
case 37:$$[$0-1].push($$[$0]);
this.$=$$[$0-1];
break;
case 38:this.$=[$$[$0]];
break;
case 39:this.$=[$$[$0-2],$$[$0]];
break;
case 40:this.$=[$$[$0-2],new yy.StringNode($$[$0])];
break;
case 41:this.$=[$$[$0-2],new yy.IntegerNode($$[$0])];
break;
case 42:this.$=[$$[$0-2],new yy.BooleanNode($$[$0])];
break;
case 43:this.$=[$$[$0-2],new yy.DataNode($$[$0])];
break;
case 44:this.$=new yy.PartialNameNode($$[$0]);
break;
case 45:this.$=new yy.IdNode($$[$0]);
break;
case 46:$$[$0-2].push($$[$0]);
this.$=$$[$0-2];
break;
case 47:this.$=[$$[$0]];
break
}},table:[{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],24:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],24:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],24:[1,16]},{17:23,18:[1,22],21:24,28:[1,25],35:[1,27],38:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{4:28,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{17:30,21:24,28:[1,25],35:[1,27],38:26},{17:31,21:24,28:[1,25],35:[1,27],38:26},{17:32,21:24,28:[1,25],35:[1,27],38:26},{25:33,37:[1,34]},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],24:[1,16]},{17:23,21:24,28:[1,25],35:[1,27],38:26},{5:[2,4],7:35,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],24:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],24:[2,23]},{18:[1,36]},{18:[2,27],21:41,26:37,27:38,28:[1,45],29:39,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,28]},{18:[2,45],28:[2,45],30:[2,45],31:[2,45],32:[2,45],35:[2,45],39:[1,48]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],39:[2,47]},{10:49,20:[1,50]},{10:51,20:[1,50]},{18:[1,52]},{18:[1,53]},{18:[1,54]},{18:[1,55],21:56,35:[1,27],38:26},{18:[2,44],35:[2,44]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],24:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{18:[2,25],21:41,27:57,28:[1,45],29:58,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,26]},{18:[2,30],28:[2,30],30:[2,30],31:[2,30],32:[2,30],35:[2,30]},{18:[2,36],34:59,35:[1,60]},{18:[2,31],28:[2,31],30:[2,31],31:[2,31],32:[2,31],35:[2,31]},{18:[2,32],28:[2,32],30:[2,32],31:[2,32],32:[2,32],35:[2,32]},{18:[2,33],28:[2,33],30:[2,33],31:[2,33],32:[2,33],35:[2,33]},{18:[2,34],28:[2,34],30:[2,34],31:[2,34],32:[2,34],35:[2,34]},{18:[2,35],28:[2,35],30:[2,35],31:[2,35],32:[2,35],35:[2,35]},{18:[2,38],35:[2,38]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],36:[1,61],39:[2,47]},{35:[1,62]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{21:63,35:[1,27],38:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],24:[2,21]},{18:[1,64]},{18:[2,24]},{18:[2,29],28:[2,29],30:[2,29],31:[2,29],32:[2,29],35:[2,29]},{18:[2,37],35:[2,37]},{36:[1,61]},{21:65,28:[1,69],30:[1,66],31:[1,67],32:[1,68],35:[1,27],38:26},{18:[2,46],28:[2,46],30:[2,46],31:[2,46],32:[2,46],35:[2,46],39:[2,46]},{18:[1,70]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],24:[2,22]},{18:[2,39],35:[2,39]},{18:[2,40],35:[2,40]},{18:[2,41],35:[2,41]},{18:[2,42],35:[2,42]},{18:[2,43],35:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]}],defaultActions:{17:[2,1],25:[2,28],38:[2,26],57:[2,24]},parseError:function parseError(str,hash){throw new Error(str)
},parse:function parse(input){var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;
this.lexer.setInput(input);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var yyloc=this.lexer.yylloc;
lstack.push(yyloc);
var ranges=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function popStack(n){stack.length=stack.length-2*n;
vstack.length=vstack.length-n;
lstack.length=lstack.length-n
}function lex(){var token;
token=self.lexer.lex()||1;
if(typeof token!=="number"){token=self.symbols_[token]||token
}return token
}var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;
while(true){state=stack[stack.length-1];
if(this.defaultActions[state]){action=this.defaultActions[state]
}else{if(symbol===null||typeof symbol=="undefined"){symbol=lex()
}action=table[state]&&table[state][symbol]
}if(typeof action==="undefined"||!action.length||!action[0]){var errStr="";
if(!recovering){expected=[];
for(p in table[state]){if(this.terminals_[p]&&p>2){expected.push("'"+this.terminals_[p]+"'")
}}if(this.lexer.showPosition){errStr="Parse error on line "+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'"
}else{errStr="Parse error on line "+(yylineno+1)+": Unexpected "+(symbol==1?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'")
}this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected})
}}if(action[0] instanceof Array&&action.length>1){throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol)
}switch(action[0]){case 1:stack.push(symbol);
vstack.push(this.lexer.yytext);
lstack.push(this.lexer.yylloc);
stack.push(action[1]);
symbol=null;
if(!preErrorSymbol){yyleng=this.lexer.yyleng;
yytext=this.lexer.yytext;
yylineno=this.lexer.yylineno;
yyloc=this.lexer.yylloc;
if(recovering>0){recovering--
}}else{symbol=preErrorSymbol;
preErrorSymbol=null
}break;
case 2:len=this.productions_[action[1]][1];
yyval.$=vstack[vstack.length-len];
yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};
if(ranges){yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]
}r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);
if(typeof r!=="undefined"){return r
}if(len){stack=stack.slice(0,-1*len*2);
vstack=vstack.slice(0,-1*len);
lstack=lstack.slice(0,-1*len)
}stack.push(this.productions_[action[1]][0]);
vstack.push(yyval.$);
lstack.push(yyval._$);
newState=table[stack[stack.length-2]][stack[stack.length-1]];
stack.push(newState);
break;
case 3:return true
}}return true
}};
var lexer=(function(){var lexer=({EOF:1,parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash)
}else{throw new Error(str)
}},setInput:function(input){this._input=input;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var ch=this._input[0];
this.yytext+=ch;
this.yyleng++;
this.offset++;
this.match+=ch;
this.matched+=ch;
var lines=ch.match(/(?:\r\n?|\n).*/g);
if(lines){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return ch
},unput:function(ch){var len=ch.length;
var lines=ch.split(/(?:\r\n?|\n)/g);
this._input=ch+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-len-1);
this.offset-=len;
var oldLines=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(lines.length-1){this.yylineno-=lines.length-1
}var r=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};
if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]
}return this
},more:function(){this._more=true;
return this
},less:function(n){this.unput(this.match.slice(n))
},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);
return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var next=this.match;
if(next.length<20){next+=this._input.substr(0,20-next.length)
}return(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var pre=this.pastInput();
var c=new Array(pre.length+1).join("-");
return pre+this.upcomingInput()+"\n"+c+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var token,match,tempMatch,index,col,lines;
if(!this._more){this.yytext="";
this.match=""
}var rules=this._currentRules();
for(var i=0;
i<rules.length;
i++){tempMatch=this._input.match(this.rules[rules[i]]);
if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;
index=i;
if(!this.options.flex){break
}}}if(match){lines=match[0].match(/(?:\r\n?|\n).*/g);
if(lines){this.yylineno+=lines.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};
this.yytext+=match[0];
this.match+=match[0];
this.matches=match;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(match[0].length);
this.matched+=match[0];
token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(token){return token
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function lex(){var r=this.next();
if(typeof r!=="undefined"){return r
}else{return this.lex()
}},begin:function begin(condition){this.conditionStack.push(condition)
},popState:function popState(){return this.conditionStack.pop()
},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function begin(condition){this.begin(condition)
}});
lexer.options={};
lexer.performAction=function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){var YYSTATE=YY_START;
switch($avoiding_name_collisions){case 0:if(yy_.yytext.slice(-1)!=="\\"){this.begin("mu")
}if(yy_.yytext.slice(-1)==="\\"){yy_.yytext=yy_.yytext.substr(0,yy_.yyleng-1),this.begin("emu")
}if(yy_.yytext){return 14
}break;
case 1:return 14;
break;
case 2:if(yy_.yytext.slice(-1)!=="\\"){this.popState()
}if(yy_.yytext.slice(-1)==="\\"){yy_.yytext=yy_.yytext.substr(0,yy_.yyleng-1)
}return 14;
break;
case 3:yy_.yytext=yy_.yytext.substr(0,yy_.yyleng-4);
this.popState();
return 15;
break;
case 4:this.begin("par");
return 24;
break;
case 5:return 16;
break;
case 6:return 20;
break;
case 7:return 19;
break;
case 8:return 19;
break;
case 9:return 23;
break;
case 10:return 23;
break;
case 11:this.popState();
this.begin("com");
break;
case 12:yy_.yytext=yy_.yytext.substr(3,yy_.yyleng-5);
this.popState();
return 15;
break;
case 13:return 22;
break;
case 14:return 36;
break;
case 15:return 35;
break;
case 16:return 35;
break;
case 17:return 39;
break;
case 18:break;
case 19:this.popState();
return 18;
break;
case 20:this.popState();
return 18;
break;
case 21:yy_.yytext=yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"');
return 30;
break;
case 22:yy_.yytext=yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\'/g,"'");
return 30;
break;
case 23:yy_.yytext=yy_.yytext.substr(1);
return 28;
break;
case 24:return 32;
break;
case 25:return 32;
break;
case 26:return 31;
break;
case 27:return 35;
break;
case 28:yy_.yytext=yy_.yytext.substr(1,yy_.yyleng-2);
return 35;
break;
case 29:return"INVALID";
break;
case 30:break;
case 31:this.popState();
return 37;
break;
case 32:return 5;
break
}};
lexer.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:\s+)/,/^(?:[a-zA-Z0-9_$-/]+)/,/^(?:$)/];
lexer.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},par:{rules:[30,31],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};
return lexer
})();
parser.lexer=lexer;
function Parser(){this.yy={}
}Parser.prototype=parser;
parser.Parser=Parser;
return new Parser
})();
Handlebars.Parser=handlebars;
Handlebars.parse=function(input){if(input.constructor===Handlebars.AST.ProgramNode){return input
}Handlebars.Parser.yy=Handlebars.AST;
return Handlebars.Parser.parse(input)
};
Handlebars.print=function(ast){return new Handlebars.PrintVisitor().accept(ast)
};
(function(){Handlebars.AST={};
Handlebars.AST.ProgramNode=function(statements,inverse){this.type="program";
this.statements=statements;
if(inverse){this.inverse=new Handlebars.AST.ProgramNode(inverse)
}};
Handlebars.AST.MustacheNode=function(rawParams,hash,unescaped){this.type="mustache";
this.escaped=!unescaped;
this.hash=hash;
var id=this.id=rawParams[0];
var params=this.params=rawParams.slice(1);
var eligibleHelper=this.eligibleHelper=id.isSimple;
this.isHelper=eligibleHelper&&(params.length||hash)
};
Handlebars.AST.PartialNode=function(partialName,context){this.type="partial";
this.partialName=partialName;
this.context=context
};
var verifyMatch=function(open,close){if(open.original!==close.original){throw new Handlebars.Exception(open.original+" doesn't match "+close.original)
}};
Handlebars.AST.BlockNode=function(mustache,program,inverse,close){verifyMatch(mustache.id,close);
this.type="block";
this.mustache=mustache;
this.program=program;
this.inverse=inverse;
if(this.inverse&&!this.program){this.isInverse=true
}};
Handlebars.AST.ContentNode=function(string){this.type="content";
this.string=string
};
Handlebars.AST.HashNode=function(pairs){this.type="hash";
this.pairs=pairs
};
Handlebars.AST.IdNode=function(parts){this.type="ID";
this.original=parts.join(".");
var dig=[],depth=0;
for(var i=0,l=parts.length;
i<l;
i++){var part=parts[i];
if(part===".."||part==="."||part==="this"){if(dig.length>0){throw new Handlebars.Exception("Invalid path: "+this.original)
}else{if(part===".."){depth++
}else{this.isScoped=true
}}}else{dig.push(part)
}}this.parts=dig;
this.string=dig.join(".");
this.depth=depth;
this.isSimple=parts.length===1&&!this.isScoped&&depth===0;
this.stringModeValue=this.string
};
Handlebars.AST.PartialNameNode=function(name){this.type="PARTIAL_NAME";
this.name=name
};
Handlebars.AST.DataNode=function(id){this.type="DATA";
this.id=id
};
Handlebars.AST.StringNode=function(string){this.type="STRING";
this.string=string;
this.stringModeValue=string
};
Handlebars.AST.IntegerNode=function(integer){this.type="INTEGER";
this.integer=integer;
this.stringModeValue=Number(integer)
};
Handlebars.AST.BooleanNode=function(bool){this.type="BOOLEAN";
this.bool=bool;
this.stringModeValue=bool==="true"
};
Handlebars.AST.CommentNode=function(comment){this.type="comment";
this.comment=comment
}
})();
var errorProps=["description","fileName","lineNumber","message","name","number","stack"];
Handlebars.Exception=function(message){var tmp=Error.prototype.constructor.apply(this,arguments);
for(var idx=0;
idx<errorProps.length;
idx++){this[errorProps[idx]]=tmp[errorProps[idx]]
}};
Handlebars.Exception.prototype=new Error();
Handlebars.SafeString=function(string){this.string=string
};
Handlebars.SafeString.prototype.toString=function(){return this.string.toString()
};
(function(){var escape={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var badChars=/[&<>"'`]/g;
var possible=/[&<>"'`]/;
var escapeChar=function(chr){return escape[chr]||"&amp;"
};
Handlebars.Utils={escapeExpression:function(string){if(string instanceof Handlebars.SafeString){return string.toString()
}else{if(string==null||string===false){return""
}}if(!possible.test(string)){return string
}return string.replace(badChars,escapeChar)
},isEmpty:function(value){if(!value&&value!==0){return true
}else{if(Object.prototype.toString.call(value)==="[object Array]"&&value.length===0){return true
}else{return false
}}}}
})();
Handlebars.Compiler=function(){};
Handlebars.JavaScriptCompiler=function(){};
(function(Compiler,JavaScriptCompiler){Compiler.prototype={compiler:Compiler,disassemble:function(){var opcodes=this.opcodes,opcode,out=[],params,param;
for(var i=0,l=opcodes.length;
i<l;
i++){opcode=opcodes[i];
if(opcode.opcode==="DECLARE"){out.push("DECLARE "+opcode.name+"="+opcode.value)
}else{params=[];
for(var j=0;
j<opcode.args.length;
j++){param=opcode.args[j];
if(typeof param==="string"){param='"'+param.replace("\n","\\n")+'"'
}params.push(param)
}out.push(opcode.opcode+" "+params.join(" "))
}}return out.join("\n")
},equals:function(other){var len=this.opcodes.length;
if(other.opcodes.length!==len){return false
}for(var i=0;
i<len;
i++){var opcode=this.opcodes[i],otherOpcode=other.opcodes[i];
if(opcode.opcode!==otherOpcode.opcode||opcode.args.length!==otherOpcode.args.length){return false
}for(var j=0;
j<opcode.args.length;
j++){if(opcode.args[j]!==otherOpcode.args[j]){return false
}}}return true
},guid:0,compile:function(program,options){this.children=[];
this.depths={list:[]};
this.options=options;
var knownHelpers=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};
if(knownHelpers){for(var name in knownHelpers){this.options.knownHelpers[name]=knownHelpers[name]
}}return this.program(program)
},accept:function(node){return this[node.type](node)
},program:function(program){var statements=program.statements,statement;
this.opcodes=[];
for(var i=0,l=statements.length;
i<l;
i++){statement=statements[i];
this[statement.type](statement)
}this.isSimple=l===1;
this.depths.list=this.depths.list.sort(function(a,b){return a-b
});
return this
},compileProgram:function(program){var result=new this.compiler().compile(program,this.options);
var guid=this.guid++,depth;
this.usePartial=this.usePartial||result.usePartial;
this.children[guid]=result;
for(var i=0,l=result.depths.list.length;
i<l;
i++){depth=result.depths.list[i];
if(depth<2){continue
}else{this.addDepth(depth-1)
}}return guid
},block:function(block){var mustache=block.mustache,program=block.program,inverse=block.inverse;
if(program){program=this.compileProgram(program)
}if(inverse){inverse=this.compileProgram(inverse)
}var type=this.classifyMustache(mustache);
if(type==="helper"){this.helperMustache(mustache,program,inverse)
}else{if(type==="simple"){this.simpleMustache(mustache);
this.opcode("pushProgram",program);
this.opcode("pushProgram",inverse);
this.opcode("emptyHash");
this.opcode("blockValue")
}else{this.ambiguousMustache(mustache,program,inverse);
this.opcode("pushProgram",program);
this.opcode("pushProgram",inverse);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(hash){var pairs=hash.pairs,pair,val;
this.opcode("pushHash");
for(var i=0,l=pairs.length;
i<l;
i++){pair=pairs[i];
val=pair[1];
if(this.options.stringParams){this.opcode("pushStringParam",val.stringModeValue,val.type)
}else{this.accept(val)
}this.opcode("assignToHash",pair[0])
}this.opcode("popHash")
},partial:function(partial){var partialName=partial.partialName;
this.usePartial=true;
if(partial.context){this.ID(partial.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",partialName.name);
this.opcode("append")
},content:function(content){this.opcode("appendContent",content.string)
},mustache:function(mustache){var options=this.options;
var type=this.classifyMustache(mustache);
if(type==="simple"){this.simpleMustache(mustache)
}else{if(type==="helper"){this.helperMustache(mustache)
}else{this.ambiguousMustache(mustache)
}}if(mustache.escaped&&!options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousMustache:function(mustache,program,inverse){var id=mustache.id,name=id.parts[0],isBlock=program!=null||inverse!=null;
this.opcode("getContext",id.depth);
this.opcode("pushProgram",program);
this.opcode("pushProgram",inverse);
this.opcode("invokeAmbiguous",name,isBlock)
},simpleMustache:function(mustache){var id=mustache.id;
if(id.type==="DATA"){this.DATA(id)
}else{if(id.parts.length){this.ID(id)
}else{this.addDepth(id.depth);
this.opcode("getContext",id.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperMustache:function(mustache,program,inverse){var params=this.setupFullMustacheParams(mustache,program,inverse),name=mustache.id.parts[0];
if(this.options.knownHelpers[name]){this.opcode("invokeKnownHelper",params.length,name)
}else{if(this.knownHelpersOnly){throw new Error("You specified knownHelpersOnly, but used the unknown helper "+name)
}else{this.opcode("invokeHelper",params.length,name)
}}},ID:function(id){this.addDepth(id.depth);
this.opcode("getContext",id.depth);
var name=id.parts[0];
if(!name){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",id.parts[0])
}for(var i=1,l=id.parts.length;
i<l;
i++){this.opcode("lookup",id.parts[i])
}},DATA:function(data){this.options.data=true;
this.opcode("lookupData",data.id)
},STRING:function(string){this.opcode("pushString",string.string)
},INTEGER:function(integer){this.opcode("pushLiteral",integer.integer)
},BOOLEAN:function(bool){this.opcode("pushLiteral",bool.bool)
},comment:function(){},opcode:function(name){this.opcodes.push({opcode:name,args:[].slice.call(arguments,1)})
},declare:function(name,value){this.opcodes.push({opcode:"DECLARE",name:name,value:value})
},addDepth:function(depth){if(isNaN(depth)){throw new Error("EWOT")
}if(depth===0){return
}if(!this.depths[depth]){this.depths[depth]=true;
this.depths.list.push(depth)
}},classifyMustache:function(mustache){var isHelper=mustache.isHelper;
var isEligible=mustache.eligibleHelper;
var options=this.options;
if(isEligible&&!isHelper){var name=mustache.id.parts[0];
if(options.knownHelpers[name]){isHelper=true
}else{if(options.knownHelpersOnly){isEligible=false
}}}if(isHelper){return"helper"
}else{if(isEligible){return"ambiguous"
}else{return"simple"
}}},pushParams:function(params){var i=params.length,param;
while(i--){param=params[i];
if(this.options.stringParams){if(param.depth){this.addDepth(param.depth)
}this.opcode("getContext",param.depth||0);
this.opcode("pushStringParam",param.stringModeValue,param.type)
}else{this[param.type](param)
}}},setupMustacheParams:function(mustache){var params=mustache.params;
this.pushParams(params);
if(mustache.hash){this.hash(mustache.hash)
}else{this.opcode("emptyHash")
}return params
},setupFullMustacheParams:function(mustache,program,inverse){var params=mustache.params;
this.pushParams(params);
this.opcode("pushProgram",program);
this.opcode("pushProgram",inverse);
if(mustache.hash){this.hash(mustache.hash)
}else{this.opcode("emptyHash")
}return params
}};
var Literal=function(value){this.value=value
};
JavaScriptCompiler.prototype={nameLookup:function(parent,name){if(/^[0-9]+$/.test(name)){return parent+"["+name+"]"
}else{if(JavaScriptCompiler.isValidJavaScriptVariableName(name)){return parent+"."+name
}else{return parent+"['"+name+"']"
}}},appendToBuffer:function(string){if(this.environment.isSimple){return"return "+string+";"
}else{return{appendToBuffer:true,content:string,toString:function(){return"buffer += "+string+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(environment,options,context,asObject){this.environment=environment;
this.options=options||{};
Handlebars.log(Handlebars.logger.DEBUG,this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!context;
this.context=context||{programs:[],environments:[],aliases:{}};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.registers={list:[]};
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(environment,options);
var opcodes=environment.opcodes,opcode;
this.i=0;
for(l=opcodes.length;
this.i<l;
this.i++){opcode=opcodes[this.i];
if(opcode.opcode==="DECLARE"){this[opcode.name]=opcode.value
}else{this[opcode.opcode].apply(this,opcode.args)
}}return this.createFunctionContext(asObject)
},nextOpcode:function(){var opcodes=this.environment.opcodes;
return opcodes[this.i+1]
},eat:function(){this.i=this.i+1
},preamble:function(){var out=[];
if(!this.isChild){var namespace=this.namespace;
var copies="helpers = helpers || "+namespace+".helpers;";
if(this.environment.usePartial){copies=copies+" partials = partials || "+namespace+".partials;"
}if(this.options.data){copies=copies+" data = data || {};"
}out.push(copies)
}else{out.push("")
}if(!this.environment.isSimple){out.push(", buffer = "+this.initializeBuffer())
}else{out.push("")
}this.lastContext=0;
this.source=out
},createFunctionContext:function(asObject){var locals=this.stackVars.concat(this.registers.list);
if(locals.length>0){this.source[1]=this.source[1]+", "+locals.join(", ")
}if(!this.isChild){for(var alias in this.context.aliases){this.source[1]=this.source[1]+", "+alias+"="+this.context.aliases[alias]
}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"
}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"
}if(!this.environment.isSimple){this.source.push("return buffer;")
}var params=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];
for(var i=0,l=this.environment.depths.list.length;
i<l;
i++){params.push("depth"+this.environment.depths.list[i])
}var source=this.mergeSource();
if(!this.isChild){var revision=Handlebars.COMPILER_REVISION,versions=Handlebars.REVISION_CHANGES[revision];
source="this.compilerInfo = ["+revision+",'"+versions+"'];\n"+source
}if(asObject){params.push(source);
return Function.apply(this,params)
}else{var functionSource="function "+(this.name||"")+"("+params.join(",")+") {\n  "+source+"}";
Handlebars.log(Handlebars.logger.DEBUG,functionSource+"\n\n");
return functionSource
}},mergeSource:function(){var source="",buffer;
for(var i=0,len=this.source.length;
i<len;
i++){var line=this.source[i];
if(line.appendToBuffer){if(buffer){buffer=buffer+"\n    + "+line.content
}else{buffer=line.content
}}else{if(buffer){source+="buffer += "+buffer+";\n  ";
buffer=undefined
}source+=line+"\n  "
}}return source
},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var params=["depth0"];
this.setupParams(0,params);
this.replaceStack(function(current){params.splice(1,0,current);
return"blockHelperMissing.call("+params.join(", ")+")"
})
},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var params=["depth0"];
this.setupParams(0,params);
var current=this.topStack();
params.splice(1,0,current);
params[params.length-1]="options";
this.source.push("if (!"+this.lastHelper+") { "+current+" = blockHelperMissing.call("+params.join(", ")+"); }")
},appendContent:function(content){this.source.push(this.appendToBuffer(this.quotedString(content)))
},append:function(){this.flushInline();
var local=this.popStack();
this.source.push("if("+local+" || "+local+" === 0) { "+this.appendToBuffer(local)+" }");
if(this.environment.isSimple){this.source.push("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";
this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(depth){if(this.lastContext!==depth){this.lastContext=depth
}},lookupOnContext:function(name){this.push(this.nameLookup("depth"+this.lastContext,name,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(current){return"typeof "+current+" === functionType ? "+current+".apply(depth0) : "+current
})
},lookup:function(name){this.replaceStack(function(current){return current+" == null || "+current+" === false ? "+current+" : "+this.nameLookup(current,name,"context")
})
},lookupData:function(id){this.push(this.nameLookup("data",id,"data"))
},pushStringParam:function(string,type){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(type);
if(typeof string==="string"){this.pushString(string)
}else{this.pushStackLiteral(string)
}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.options.stringParams){this.register("hashTypes","{}")
}},pushHash:function(){this.hash={values:[],types:[]}
},popHash:function(){var hash=this.hash;
this.hash=undefined;
if(this.options.stringParams){this.register("hashTypes","{"+hash.types.join(",")+"}")
}this.push("{\n    "+hash.values.join(",\n    ")+"\n  }")
},pushString:function(string){this.pushStackLiteral(this.quotedString(string))
},push:function(expr){this.inlineStack.push(expr);
return expr
},pushLiteral:function(value){this.pushStackLiteral(value)
},pushProgram:function(guid){if(guid!=null){this.pushStackLiteral(this.programExpression(guid))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(paramSize,name){this.context.aliases.helperMissing="helpers.helperMissing";
var helper=this.lastHelper=this.setupHelper(paramSize,name,true);
this.push(helper.name);
this.replaceStack(function(name){return name+" ? "+name+".call("+helper.callParams+") : helperMissing.call("+helper.helperMissingParams+")"
})
},invokeKnownHelper:function(paramSize,name){var helper=this.setupHelper(paramSize,name);
this.push(helper.name+".call("+helper.callParams+")")
},invokeAmbiguous:function(name,helperCall){this.context.aliases.functionType='"function"';
this.pushStackLiteral("{}");
var helper=this.setupHelper(0,name,helperCall);
var helperName=this.lastHelper=this.nameLookup("helpers",name,"helper");
var nonHelper=this.nameLookup("depth"+this.lastContext,name,"context");
var nextStack=this.nextStack();
this.source.push("if ("+nextStack+" = "+helperName+") { "+nextStack+" = "+nextStack+".call("+helper.callParams+"); }");
this.source.push("else { "+nextStack+" = "+nonHelper+"; "+nextStack+" = typeof "+nextStack+" === functionType ? "+nextStack+".apply(depth0) : "+nextStack+"; }")
},invokePartial:function(name){var params=[this.nameLookup("partials",name,"partial"),"'"+name+"'",this.popStack(),"helpers","partials"];
if(this.options.data){params.push("data")
}this.context.aliases.self="this";
this.push("self.invokePartial("+params.join(", ")+")")
},assignToHash:function(key){var value=this.popStack(),type;
if(this.options.stringParams){type=this.popStack();
this.popStack()
}var hash=this.hash;
if(type){hash.types.push("'"+key+"': "+type)
}hash.values.push("'"+key+"': ("+value+")")
},compiler:JavaScriptCompiler,compileChildren:function(environment,options){var children=environment.children,child,compiler;
for(var i=0,l=children.length;
i<l;
i++){child=children[i];
compiler=new this.compiler();
var index=this.matchExistingProgram(child);
if(index==null){this.context.programs.push("");
index=this.context.programs.length;
child.index=index;
child.name="program"+index;
this.context.programs[index]=compiler.compile(child,options,this.context);
this.context.environments[index]=child
}else{child.index=index;
child.name="program"+index
}}},matchExistingProgram:function(child){for(var i=0,len=this.context.environments.length;
i<len;
i++){var environment=this.context.environments[i];
if(environment&&environment.equals(child)){return i
}}},programExpression:function(guid){this.context.aliases.self="this";
if(guid==null){return"self.noop"
}var child=this.environment.children[guid],depths=child.depths.list,depth;
var programParams=[child.index,child.name,"data"];
for(var i=0,l=depths.length;
i<l;
i++){depth=depths[i];
if(depth===1){programParams.push("depth0")
}else{programParams.push("depth"+(depth-1))
}}if(depths.length===0){return"self.program("+programParams.join(", ")+")"
}else{programParams.shift();
return"self.programWithDepth("+programParams.join(", ")+")"
}},register:function(name,val){this.useRegister(name);
this.source.push(name+" = "+val+";")
},useRegister:function(name){if(!this.registers[name]){this.registers[name]=true;
this.registers.list.push(name)
}},pushStackLiteral:function(item){return this.push(new Literal(item))
},pushStack:function(item){this.flushInline();
var stack=this.incrStack();
if(item){this.source.push(stack+" = "+item+";")
}this.compileStack.push(stack);
return stack
},replaceStack:function(callback){var prefix="",inline=this.isInline(),stack;
if(inline){var top=this.popStack(true);
if(top instanceof Literal){stack=top.value
}else{var name=this.stackSlot?this.topStackName():this.incrStack();
prefix="("+this.push(name)+" = "+top+"),";
stack=this.topStack()
}}else{stack=this.topStack()
}var item=callback.call(this,stack);
if(inline){if(this.inlineStack.length||this.compileStack.length){this.popStack()
}this.push("("+prefix+item+")")
}else{if(!/^stack/.test(stack)){stack=this.nextStack()
}this.source.push(stack+" = ("+prefix+item+");")
}return stack
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var inlineStack=this.inlineStack;
if(inlineStack.length){this.inlineStack=[];
for(var i=0,len=inlineStack.length;
i<len;
i++){var entry=inlineStack[i];
if(entry instanceof Literal){this.compileStack.push(entry)
}else{this.pushStack(entry)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(wrapped){var inline=this.isInline(),item=(inline?this.inlineStack:this.compileStack).pop();
if(!wrapped&&(item instanceof Literal)){return item.value
}else{if(!inline){this.stackSlot--
}return item
}},topStack:function(wrapped){var stack=(this.isInline()?this.inlineStack:this.compileStack),item=stack[stack.length-1];
if(!wrapped&&(item instanceof Literal)){return item.value
}else{return item
}},quotedString:function(str){return'"'+str.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'
},setupHelper:function(paramSize,name,missingParams){var params=[];
this.setupParams(paramSize,params,missingParams);
var foundHelper=this.nameLookup("helpers",name,"helper");
return{params:params,name:foundHelper,callParams:["depth0"].concat(params).join(", "),helperMissingParams:missingParams&&["depth0",this.quotedString(name)].concat(params).join(", ")}
},setupParams:function(paramSize,params,useRegister){var options=[],contexts=[],types=[],param,inverse,program;
options.push("hash:"+this.popStack());
inverse=this.popStack();
program=this.popStack();
if(program||inverse){if(!program){this.context.aliases.self="this";
program="self.noop"
}if(!inverse){this.context.aliases.self="this";
inverse="self.noop"
}options.push("inverse:"+inverse);
options.push("fn:"+program)
}for(var i=0;
i<paramSize;
i++){param=this.popStack();
params.push(param);
if(this.options.stringParams){types.push(this.popStack());
contexts.push(this.popStack())
}}if(this.options.stringParams){options.push("contexts:["+contexts.join(",")+"]");
options.push("types:["+types.join(",")+"]");
options.push("hashTypes:hashTypes")
}if(this.options.data){options.push("data:data")
}options="{"+options.join(",")+"}";
if(useRegister){this.register("options",options);
params.push("options")
}else{params.push(options)
}return params.join(", ")
}};
var reservedWords=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var compilerWords=JavaScriptCompiler.RESERVED_WORDS={};
for(var i=0,l=reservedWords.length;
i<l;
i++){compilerWords[reservedWords[i]]=true
}JavaScriptCompiler.isValidJavaScriptVariableName=function(name){if(!JavaScriptCompiler.RESERVED_WORDS[name]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)){return true
}return false
}
})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);
Handlebars.precompile=function(input,options){if(!input||(typeof input!=="string"&&input.constructor!==Handlebars.AST.ProgramNode)){throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+input)
}options=options||{};
if(!("data" in options)){options.data=true
}var ast=Handlebars.parse(input);
var environment=new Handlebars.Compiler().compile(ast,options);
return new Handlebars.JavaScriptCompiler().compile(environment,options)
};
Handlebars.compile=function(input,options){if(!input||(typeof input!=="string"&&input.constructor!==Handlebars.AST.ProgramNode)){throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+input)
}options=options||{};
if(!("data" in options)){options.data=true
}var compiled;
function compile(){var ast=Handlebars.parse(input);
var environment=new Handlebars.Compiler().compile(ast,options);
var templateSpec=new Handlebars.JavaScriptCompiler().compile(environment,options,undefined,true);
return Handlebars.template(templateSpec)
}return function(context,options){if(!compiled){compiled=compile()
}return compiled.call(this,context,options)
}
};
Handlebars.VM={template:function(templateSpec){var container={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(i,fn,data){var programWrapper=this.programs[i];
if(data){return Handlebars.VM.program(fn,data)
}else{if(programWrapper){return programWrapper
}else{programWrapper=this.programs[i]=Handlebars.VM.program(fn);
return programWrapper
}}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop,compilerInfo:null};
return function(context,options){options=options||{};
var result=templateSpec.call(container,Handlebars,context,options.helpers,options.partials,options.data);
var compilerInfo=container.compilerInfo||[],compilerRevision=compilerInfo[0]||1,currentRevision=Handlebars.COMPILER_REVISION;
if(compilerRevision!==currentRevision){if(compilerRevision<currentRevision){var runtimeVersions=Handlebars.REVISION_CHANGES[currentRevision],compilerVersions=Handlebars.REVISION_CHANGES[compilerRevision];
throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+")."
}else{throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+compilerInfo[1]+")."
}}return result
}
},programWithDepth:function(fn,data,$depth){var args=Array.prototype.slice.call(arguments,2);
return function(context,options){options=options||{};
return fn.apply(this,[context,options.data||data].concat(args))
}
},program:function(fn,data){return function(context,options){options=options||{};
return fn(context,options.data||data)
}
},noop:function(){return""
},invokePartial:function(partial,name,context,helpers,partials,data){var options={helpers:helpers,partials:partials,data:data};
if(partial===undefined){throw new Handlebars.Exception("The partial "+name+" could not be found")
}else{if(partial instanceof Function){return partial(context,options)
}else{if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+name+" could not be compiled when running in runtime-only mode")
}else{partials[name]=Handlebars.compile(partial,{data:data!==undefined});
return partials[name](context,options)
}}}}};
Handlebars.template=Handlebars.VM.template;
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");
if(b){return b
}b=new c.validator(a,this[0]);
c.data(this[0],"validator",b);
if(b.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){b.cancelSubmit=true
});
b.settings.submitHandler&&this.find("input, button").filter(":submit").click(function(){b.submitButton=this
});
this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton){var f=c("<input type='hidden'/>").attr("name",b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm)
}b.settings.submitHandler.call(b,b.currentForm);
b.submitButton&&f.remove();
return false
}return true
}b.settings.debug&&d.preventDefault();
if(b.cancelSubmit){b.cancelSubmit=false;
return e()
}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;
return false
}return e()
}else{b.focusInvalid();
return false
}})
}return b
}else{a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")
}},valid:function(){if(c(this[0]).is("form")){return this.validate().form()
}else{var a=true,b=c(this[0].form).validate();
this.each(function(){a&=b.element(this)
});
return a
}},removeAttrs:function(a){var b={},d=this;
c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);
d.removeAttr(f)
});
return b
},rules:function(a,b){var d=this[0];
if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);
switch(a){case"add":c.extend(g,c.validator.normalizeRule(b));
f[d.name]=g;
if(b.messages){e.messages[d.name]=c.extend(e.messages[d.name],b.messages)
}break;
case"remove":if(!b){delete f[d.name];
return g
}var h={};
c.each(b.split(/\s/),function(j,i){h[i]=g[i];
delete g[i]
});
return h
}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);
if(d.required){e=d.required;
delete d.required;
d=c.extend({required:e},d)
}return d
}});
c.extend(c.expr[":"],{blank:function(a){return !c.trim(""+a.value)
},filled:function(a){return !!c.trim(""+a.value)
},unchecked:function(a){return !a.checked
}});
c.validator=function(a,b){this.settings=c.extend(true,{},c.validator.defaults,a);
this.currentForm=b;
this.init()
};
c.validator.format=function(a,b){if(arguments.length==1){return function(){var d=c.makeArray(arguments);
d.unshift(a);
return c.validator.format.apply(this,d)
}
}if(arguments.length>2&&b.constructor!=Array){b=c.makeArray(arguments).slice(1)
}if(b.constructor!=Array){b=[b]
}c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)
});
return a
};
c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(a){this.lastActive=a;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);
this.addWrapper(this.errorsFor(a)).hide()
}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))){this.element(a)
}},onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement){this.element(a)
}},onclick:function(a){if(a.name in this.submitted){this.element(a)
}else{a.parentNode.name in this.submitted&&this.element(a.parentNode)
}},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)
},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)
}},setDefaults:function(a){c.extend(c.validator.defaults,a)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator");
e="on"+e.type.replace(/^validate/,"");
f.settings[e]&&f.settings[e].call(f,this[0])
}this.labelContainer=c(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);
this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var b=this.groups={};
c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e
})
});
var d=this.settings.rules;
c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)
});
c(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",a).validateDelegate(":radio, :checkbox, select, option","click",a);
this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
},form:function(){this.checkForm();
c.extend(this.submitted,this.errorMap);
this.invalid=c.extend({},this.errorMap);
this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);
this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var a=0,b=this.currentElements=this.elements();
b[a];
a++){this.check(b[a])
}return this.valid()
},element:function(a){this.lastElement=a=this.clean(a);
this.prepareElement(a);
this.currentElements=c(a);
var b=this.check(a);
if(b){delete this.invalid[a.name]
}else{this.invalid[a.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return b
},showErrors:function(a){if(a){c.extend(this.errorMap,a);
this.errorList=[];
for(var b in a){this.errorList.push({message:a[b],element:this.findByName(b)[0]})
}this.successList=c.grep(this.successList,function(d){return !(d.name in a)
})
}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();
this.submitted={};
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass)
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(a){var b=0,d;
for(d in a){b++
}return b
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()==0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(a){}}},findLastActive:function(){var a=this.lastActive;
return a&&c.grep(this.errorList,function(b){return b.element.name==a.name
}).length==1&&a
},elements:function(){var a=this,b={};
return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&a.settings.debug&&window.console&&console.error("%o has no name assigned",this);
if(this.name in b||!a.objectLength(c(this).rules())){return false
}return b[this.name]=true
})
},clean:function(a){return c(a)[0]
},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=c([]);
this.toHide=c([]);
this.currentElements=c([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(a){this.reset();
this.toHide=this.errorsFor(a)
},check:function(a){a=this.clean(a);
if(this.checkable(a)){a=this.findByName(a.name).not(this.settings.ignore)[0]
}var b=c(a).rules(),d=false,e;
for(e in b){var f={method:e,parameters:b[e]};
try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);
if(g=="dependency-mismatch"){d=true
}else{d=false;
if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));
return
}if(!g){this.formatAndAdd(a,f);
return false
}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+a.id+", check the '"+f.method+"' method",h);
throw h
}}if(!d){this.objectLength(b)&&this.successList.push(a);
return true
}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();
return d&&d.messages&&d.messages[b]
}},customMessage:function(a,b){var d=this.settings.messages[a];
return d&&(d.constructor==String?d:d[b])
},findDefined:function(){for(var a=0;
a<arguments.length;
a++){if(arguments[a]!==undefined){return arguments[a]
}}},defaultMessage:function(a,b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")
},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;
if(typeof d=="function"){d=d.call(this,b.parameters,a)
}else{if(e.test(d)){d=jQuery.format(d.replace(e,"{$1}"),b.parameters)
}}this.errorList.push({message:d,element:a});
this.errorMap[a.name]=d;
this.submitted[a.name]=d
},addWrapper:function(a){if(this.settings.wrapper){a=a.add(a.parent(this.settings.wrapper))
}return a
},defaultShowErrors:function(){for(var a=0;
this.errorList[a];
a++){var b=this.errorList[a];
this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);
this.showLabel(b.element,b.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(a=0;
this.successList[a];
a++){this.showLabel(this.successList[a])
}}if(this.settings.unhighlight){a=0;
for(b=this.validElements();
b[a];
a++){this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return c(this.errorList).map(function(){return this.element
})
},showLabel:function(a,b){var d=this.errorsFor(a);
if(d.length){d.removeClass().addClass(this.settings.errorClass);
d.attr("generated")&&d.html(b)
}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");
if(this.settings.wrapper){d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))
}if(!b&&this.settings.success){d.text("");
typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)
}this.toShow=this.toShow.add(d)
},errorsFor:function(a){var b=this.idOrName(a);
return this.errors().filter(function(){return c(this).attr("for")==b
})
},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)
},checkable:function(a){return/radio|checkbox/i.test(a.type)
},findByName:function(a){var b=this.currentForm;
return c(document.getElementsByName(a)).map(function(d,e){return e.form==b&&e.name==a&&e||null
})
},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case"select":return c("option:selected",b).length;
case"input":if(this.checkable(b)){return this.findByName(b.name).filter(":checked").length
}}return a.length
},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true
},dependTypes:{"boolean":function(a){return a
},string:function(a,b){return !!c(a,b.form).length
},"function":function(a,b){return a(b)
}},optional:function(a){return !c.validator.methods.required.call(this,c.trim(a.value),a)&&"dependency-mismatch"
},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;
this.pending[a.name]=true
}},stopRequest:function(a,b){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[a.name];
if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();
this.formSubmitted=false
}else{if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,a)
},classRules:function(a){var b={};
(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])
});
return b
},attributeRules:function(a){var b={};
a=c(a);
for(var d in c.validator.methods){var e=a.attr(d);
if(e){b[d]=e
}}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;
return b
},metadataRules:function(a){if(!c.metadata){return{}
}var b=c.data(a.form,"validator").settings.meta;
return b?c(a).metadata()[b]:c(a).metadata()
},staticRules:function(a){var b={},d=c.data(a.form,"validator");
if(d.settings.rules){b=c.validator.normalizeRule(d.settings.rules[a.name])||{}
}return b
},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false){delete a[d]
}else{if(e.param||e.depends){var f=true;
switch(typeof e.depends){case"string":f=!!c(e.depends,b.form).length;
break;
case"function":f=e.depends.call(b,b)
}if(f){a[d]=e.param!==undefined?e.param:true
}else{delete a[d]
}}}});
c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e
});
c.each(["minlength","maxlength","min","max"],function(){if(a[this]){a[this]=Number(a[this])
}});
c.each(["rangelength","range"],function(){if(a[this]){a[this]=[Number(a[this][0]),Number(a[this][1])]
}});
if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];
delete a.min;
delete a.max
}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];
delete a.minlength;
delete a.maxlength
}}a.messages&&delete a.messages;
return a
},normalizeRule:function(a){if(typeof a=="string"){var b={};
c.each(a.split(/\s/),function(){b[this]=true
});
a=b
}return a
},addMethod:function(a,b,d){c.validator.methods[a]=b;
c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];
b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))
},methods:{required:function(a,b,d){if(!this.depend(d,b)){return"dependency-mismatch"
}switch(b.nodeName.toLowerCase()){case"select":return(a=c(b).val())&&a.length>0;
case"input":if(this.checkable(b)){return this.getLength(a,b)>0
}default:return c.trim(a).length>0
}},remote:function(a,b,d){if(this.optional(b)){return"dependency-mismatch"
}var e=this.previousValue(b);
this.settings.messages[b.name]||(this.settings.messages[b.name]={});
e.originalMessage=this.settings.messages[b.name].remote;
this.settings.messages[b.name].remote=e.message;
d=typeof d=="string"&&{url:d}||d;
if(this.pending[b.name]){return"pending"
}if(e.old===a){return e.valid
}e.old=a;
var f=this;
this.startRequest(b);
var g={};
g[b.name]=a;
c.ajax(c.extend(true,{url:d,mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;
var j=h===true;
if(j){var i=f.formSubmitted;
f.prepareElement(b);
f.formSubmitted=i;
f.successList.push(b);
f.showErrors()
}else{i={};
h=h||f.defaultMessage(b,"remote");
i[b.name]=e.message=c.isFunction(h)?h(a):h;
f.showErrors(i)
}e.valid=j;
f.stopRequest(b,j)
}},d));
return"pending"
},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d
},maxlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d
},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);
return this.optional(b)||a>=d[0]&&a<=d[1]
},min:function(a,b,d){return this.optional(b)||a>=d
},max:function(a,b,d){return this.optional(b)||a<=d
},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]
},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
},url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))
},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)
},creditcard:function(a,b){if(this.optional(b)){return"dependency-mismatch"
}if(/[^0-9-]+/.test(a)){return false
}var d=0,e=0,f=false;
a=a.replace(/\D/g,"");
for(var g=a.length-1;
g>=0;
g--){e=a.charAt(g);
e=parseInt(e,10);
if(f){if((e*=2)>9){e-=9
}}d+=e;
f=!f
}return d%10==0
},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(b)||a.match(RegExp(".("+d+")$","i"))
},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()
});
return a==d.val()
}}});
c.format=c.validator.format
})(jQuery);
(function(c){var a={};
if(c.ajaxPrefilter){c.ajaxPrefilter(function(d,e,f){e=d.port;
if(d.mode=="abort"){a[e]&&a[e].abort();
a[e]=f
}})
}else{var b=c.ajax;
c.ajax=function(d){var e=("port" in d?d:c.ajaxSettings).port;
if(("mode" in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();
return a[e]=b.apply(this,arguments)
}return b.apply(this,arguments)
}
}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);
e.type=b;
return c.event.handle.call(this,e)
}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)
},teardown:function(){this.removeEventListener(a,d,true)
},handler:function(e){arguments[0]=c.event.fix(e);
arguments[0].type=b;
return c.event.handle.apply(this,arguments)
}}
});
c.extend(c.fn,{validateDelegate:function(a,b,d){return this.bind(b,function(e){var f=c(e.target);
if(f.is(a)){return d.apply(f,arguments)
}})
}})
})(jQuery);
!function(window,$){var fakeQuery=window.fakeQuery=window.fakeQuery||{};
fakeQuery.ui=fakeQuery.ui||{};
fakeQuery.ui.templates={};
$.datepicker={regional:{},setDefaults:function(){},}
}(window,jQuery);
(function($){$.datepicker.regional.ca={closeText:"Tancar",prevText:"&#x3c;Ant",nextText:"Seg&#x3e;",currentText:"Avui",monthNames:["Gener","Febrer","Mar&ccedil;","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],monthNamesShort:["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],dayNames:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],dayNamesShort:["Dug","Dln","Dmt","Dmc","Djs","Dvn","Dsb"],dayNamesMin:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.ca)
})(jQuery);
(function($){$.datepicker.regional.cs={closeText:"ZavÅ™Ã­t",prevText:"&#x3c;DÅ™Ã­ve",nextText:"PozdÄ›ji&#x3e;",currentText:"NynÃ­",monthNames:["leden","Ãºnor","bÅ™ezen","duben","kvÄ›ten","Ä�erven","Ä�ervenec","srpen","zÃ¡Å™Ã­","Å™Ã­jen","listopad","prosinec"],monthNamesShort:["led","Ãºno","bÅ™e","dub","kvÄ›","Ä�er","Ä�vc","srp","zÃ¡Å™","Å™Ã­j","lis","pro"],dayNames:["nedÄ›le","pondÄ›lÃ­","ÃºterÃ½","stÅ™eda","Ä�tvrtek","pÃ¡tek","sobota"],dayNamesShort:["ne","po","Ãºt","st","Ä�t","pÃ¡","so"],dayNamesMin:["ne","po","Ãºt","st","Ä�t","pÃ¡","so"],weekHeader:"TÃ½d",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.cs)
})(jQuery);
(function(a){a.datepicker.regional.da={closeText:"Luk",prevText:"&#x3c;Forrige",nextText:"NÃ¦ste&#x3e;",currentText:"Idag",monthNames:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["SÃ¸ndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","LÃ¸rdag"],dayNamesShort:["SÃ¸n","Man","Tir","Ons","Tor","Fre","LÃ¸r"],dayNamesMin:["SÃ¸","Ma","Ti","On","To","Fr","LÃ¸"],weekHeader:"Uge",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.da)
})(jQuery);
(function(a){a.datepicker.regional["de-AT"]={closeText:"Termine freigeben",prevText:"&#x3c;zurÃ¼ck",nextText:"Vor&#x3e;",currentText:"heute",monthNames:["JÃ¤nner","Februar","MÃ¤rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["JÃ¤n","Feb","MÃ¤r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"Wo",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional["de-AT"])
})(jQuery);
(function(a){a.datepicker.regional.de=a.datepicker.regional["de-CH"]={closeText:"Termine freigeben",prevText:"&#x3c;zurÃ¼ck",nextText:"Vor&#x3e;",currentText:"heute",monthNames:["Januar","Februar","MÃ¤rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","MÃ¤r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"Wo",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.de),a.datepicker.setDefaults(a.datepicker.regional["de-CH"])
})(jQuery);
!function($){$.datepicker.regional.el={closeText:"ÎšÎ»ÎµÎ¯ÏƒÎ¹Î¼Î¿",prevText:"Î Ï�Î¿Î·Î³Î¿Ï�Î¼ÎµÎ½Î¿Ï‚",nextText:"Î•Ï€ÏŒÎ¼ÎµÎ½Î¿Ï‚",currentText:"Î¤Ï�Î­Ï‡Ï‰Î½ ÎœÎ®Î½Î±Ï‚",monthNames:["Î™Î±Î½Î¿Ï…Î¬Ï�Î¹Î¿Ï‚","Î¦ÎµÎ²Ï�Î¿Ï…Î¬Ï�Î¹Î¿Ï‚","ÎœÎ¬Ï�Ï„Î¹Î¿Ï‚","Î‘Ï€Ï�Î¯Î»Î¹Î¿Ï‚","ÎœÎ¬Î¹Î¿Ï‚","Î™Î¿Ï�Î½Î¹Î¿Ï‚","Î™Î¿Ï�Î»Î¹Î¿Ï‚","Î‘Ï�Î³Î¿Ï…ÏƒÏ„Î¿Ï‚","Î£ÎµÏ€Ï„Î­Î¼Î²Ï�Î¹Î¿Ï‚","ÎŸÎºÏ„ÏŽÎ²Ï�Î¹Î¿Ï‚","Î�Î¿Î­Î¼Î²Ï�Î¹Î¿Ï‚","Î”ÎµÎºÎ­Î¼Î²Ï�Î¹Î¿Ï‚"],monthNamesShort:["Î™Î±Î½","Î¦ÎµÎ²","ÎœÎ±Ï�","Î‘Ï€Ï�","ÎœÎ±Î¹","Î™Î¿Ï…Î½","Î™Î¿Ï…Î»","Î‘Ï…Î³","Î£ÎµÏ€","ÎŸÎºÏ„","Î�Î¿Îµ","Î”ÎµÎº"],dayNames:["ÎšÏ…Ï�Î¹Î±ÎºÎ®","Î”ÎµÏ…Ï„Î­Ï�Î±","Î¤Ï�Î¯Ï„Î·","Î¤ÎµÏ„Î¬Ï�Ï„Î·","Î Î­Î¼Ï€Ï„Î·","Î Î±Ï�Î±ÏƒÎºÎµÏ…Î®","Î£Î¬Î²Î²Î±Ï„Î¿"],dayNamesShort:["ÎšÏ…Ï�","Î”ÎµÏ…","Î¤Ï�Î¹","Î¤ÎµÏ„","Î ÎµÎ¼","Î Î±Ï�","Î£Î±Î²"],dayNamesMin:["ÎšÏ…","Î”Îµ","Î¤Ï�","Î¤Îµ","Î Îµ","Î Î±","Î£Î±"],weekHeader:"Î•Î²Î´",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.el)
}(jQuery);
(function($){$.datepicker.regional["en-GB"]=$.datepicker.regional["en-AU"]=$.datepicker.regional["en-NZ"]=$.datepicker.regional["en-CA"]=$.datepicker.regional["en-SG"]=$.datepicker.regional["en-IE"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional["en-GB"]);
$.datepicker.setDefaults($.datepicker.regional["en-AU"]);
$.datepicker.setDefaults($.datepicker.regional["en-NZ"]);
$.datepicker.setDefaults($.datepicker.regional["en-CA"]);
$.datepicker.setDefaults($.datepicker.regional["en-SG"])
})(jQuery);
!function($){$.datepicker.regional.en={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tues","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,dateFormat:"mm/dd/yy",isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.en)
}(jQuery);
(function(a){a.datepicker.regional.es=a.datepicker.regional["es-419"]={closeText:"Borrar Fechas",prevText:"&#x3c;Ant",nextText:"Sig&#x3e;",currentText:"Hoy",monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesShort:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","S&aacute;"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.es),a.datepicker.setDefaults(a.datepicker.regional["es-419"])
})(jQuery);
(function($){$.datepicker.regional.fi={closeText:"Sulje",prevText:"&laquo;Edellinen",nextText:"Seuraava&raquo;",currentText:"T&auml;n&auml;&auml;n",monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes&auml;kuu","Hein&auml;kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],monthNamesShort:["Tammi","Helmi","Maalis","Huhti","Touko","Kes&auml;","Hein&auml;","Elo","Syys","Loka","Marras","Joulu"],dayNamesShort:["Su","Ma","Ti","Ke","To","Pe","Su"],dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","La"],weekHeader:"Vk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.fi)
})(jQuery);
(function(a){a.datepicker.regional.fr=a.datepicker.regional["fr-CA"]=a.datepicker.regional["fr-CH"]=a.datepicker.regional["fr-BE"]={closeText:"Effacer les dates",prevText:"&#x3c;PrÃ©c",nextText:"Suiv&#x3e;",currentText:"Courant",monthNames:["Janvier","FÃ©vrier","Mars","Avril","Mai","Juin","Juillet","AoÃ»t","Septembre","Octobre","Novembre","DÃ©cembre"],monthNamesShort:["Jan","FÃ©v","Mar","Avr","Mai","Jun","Jul","AoÃ»","Sep","Oct","Nov","DÃ©c"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayNamesMin:["Di","Lu","Ma","Me","Je","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.fr),a.datepicker.setDefaults(a.datepicker.regional["fr-CA"]),a.datepicker.setDefaults(a.datepicker.regional["fr-CH"]),a.datepicker.setDefaults(a.datepicker.regional["fr-BE"])
})(jQuery);
(function($){$.datepicker.regional.hu={closeText:"bezÃ¡rÃ¡s",prevText:"&laquo;&nbsp;vissza",nextText:"elÅ‘re&nbsp;&raquo;",currentText:"ma",monthNames:["JanuÃ¡r","FebruÃ¡r","MÃ¡rcius","Ã�prilis","MÃ¡jus","JÃºnius","JÃºlius","Augusztus","Szeptember","OktÃ³ber","November","December"],monthNamesShort:["Jan","Feb","MÃ¡r","Ã�pr","MÃ¡j","JÃºn","JÃºl","Aug","Szep","Okt","Nov","Dec"],dayNames:["VasÃ¡rnap","HÃ©tfÃ¶","Kedd","Szerda","CsÃ¼tÃ¶rtÃ¶k","PÃ©ntek","Szombat"],dayNamesShort:["Vas","HÃ©t","Ked","Sze","CsÃ¼","PÃ©n","Szo"],dayNamesMin:["V","H","K","Sze","Cs","P","Szo"],weekHeader:"HÃ©",dateFormat:"yy.mm.dd",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.hu)
})(jQuery);
(function($){$.datepicker.regional.id={closeText:"Tutup",prevText:"&#x3c;mundur",nextText:"maju&#x3e;",currentText:"hari ini",monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agus","Sep","Okt","Nop","Des"],dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesShort:["Min","Sen","Sel","Rab","kam","Jum","Sab"],dayNamesMin:["Mg","Sn","Sl","Rb","Km","jm","Sb"],weekHeader:"Mg",dateFormat:"dd-mm-yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.id)
})(jQuery);
(function($){$.datepicker.regional.is={closeText:"Loka",prevText:"&#x3c; Fyrri",nextText:"N&aelig;sti &#x3e;",currentText:"&Iacute; dag",monthNames:["Jan&uacute;ar","Febr&uacute;ar","Mars","Apr&iacute;l","Ma&iacute","J&uacute;n&iacute;","J&uacute;l&iacute;","&Aacute;g&uacute;st","September","Okt&oacute;ber","N&oacute;vember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Ma&iacute;","J&uacute;n","J&uacute;l","&Aacute;g&uacute;","Sep","Okt","N&oacute;v","Des"],dayNames:["Sunnudagur","M&aacute;nudagur","&THORN;ri&eth;judagur","Mi&eth;vikudagur","Fimmtudagur","F&ouml;studagur","Laugardagur"],dayNamesShort:["Sun","M&aacute;n","&THORN;ri","Mi&eth;","Fim","F&ouml;s","Lau"],dayNamesMin:["Su","M&aacute;","&THORN;r","Mi","Fi","F&ouml;","La"],weekHeader:"Vika",dateFormat:"dd.mm.yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.is)
})(jQuery);
(function(a){a.datepicker.regional.it=a.datepicker.regional["it-CH"]={closeText:"Deseleziona le date",prevText:"&#x3c;Prec",nextText:"Succ&#x3e;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Luned&#236","Marted&#236","Mercoled&#236","Gioved&#236","Venerd&#236","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.it),a.datepicker.setDefaults(a.datepicker.regional["it-CH"])
})(jQuery);
(function(a){a.datepicker.regional.ja={closeText:"é–‰ã�˜ã‚‹",prevText:"&#x3c;å‰�",nextText:"æ¬¡&#x3e;",currentText:"ä»Šæ—¥",monthNames:["1æœˆ","2æœˆ","3æœˆ","4æœˆ","5æœˆ","6æœˆ","7æœˆ","8æœˆ","9æœˆ","10æœˆ","11æœˆ","12æœˆ"],monthNamesShort:["1æœˆ","2æœˆ","3æœˆ","4æœˆ","5æœˆ","6æœˆ","7æœˆ","8æœˆ","9æœˆ","10æœˆ","11æœˆ","12æœˆ"],dayNames:["æ—¥æ›œæ—¥","æœˆæ›œæ—¥","ç�«æ›œæ—¥","æ°´æ›œæ—¥","æœ¨æ›œæ—¥","é‡‘æ›œæ—¥","åœŸæ›œæ—¥"],dayNamesShort:["æ—¥","æœˆ","ç�«","æ°´","æœ¨","é‡‘","åœŸ"],dayNamesMin:["æ—¥","æœˆ","ç�«","æ°´","æœ¨","é‡‘","åœŸ"],weekHeader:"é€±",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"å¹´"},a.datepicker.setDefaults(a.datepicker.regional.ja)
})(jQuery);
(function(a){a.datepicker.regional.ko={closeText:"ë‚ ì§œ ì„ íƒ� ì§€ìš°ê¸°",prevText:"ì�´ì „ë‹¬",nextText:"ë‹¤ì�Œë‹¬",currentText:"ì˜¤ëŠ˜",monthNames:["1ì›”(JAN)","2ì›”(FEB)","3ì›”(MAR)","4ì›”(APR)","5ì›”(MAY)","6ì›”(JUN)","7ì›”(JUL)","8ì›”(AUG)","9ì›”(SEP)","10ì›”(OCT)","11ì›”(NOV)","12ì›”(DEC)"],monthNamesShort:["1ì›”(JAN)","2ì›”(FEB)","3ì›”(MAR)","4ì›”(APR)","5ì›”(MAY)","6ì›”(JUN)","7ì›”(JUL)","8ì›”(AUG)","9ì›”(SEP)","10ì›”(OCT)","11ì›”(NOV)","12ì›”(DEC)"],dayNames:["ì�¼","ì›”","í™”","ìˆ˜","ëª©","ê¸ˆ","í† "],dayNamesShort:["ì�¼","ì›”","í™”","ìˆ˜","ëª©","ê¸ˆ","í† "],dayNamesMin:["ì�¼","ì›”","í™”","ìˆ˜","ëª©","ê¸ˆ","í† "],weekHeader:"Wk",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"ë…„"},a.datepicker.setDefaults(a.datepicker.regional.ko)
})(jQuery);
(function($){$.datepicker.regional.ms={closeText:"Tutup",prevText:"&#x3c;Sebelum",nextText:"Selepas&#x3e;",currentText:"hari ini",monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],monthNamesShort:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesShort:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],dayNamesMin:["Ah","Is","Se","Ra","Kh","Ju","Sa"],weekHeader:"Mg",dateFormat:"dd-mm-yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.ms)
})(jQuery);
(function(a){a.datepicker.regional.nl=a.datepicker.regional["nl-BE"]={closeText:"Sluiten",prevText:"â†�",nextText:"â†’",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.nl),a.datepicker.setDefaults(a.datepicker.regional["nl-BE"])
})(jQuery);
(function($){$.datepicker.regional.no={closeText:"Lukk",prevText:"&laquo;Forrige",nextText:"Neste&raquo;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["sÃ¸n","man","tir","ons","tor","fre","lÃ¸r"],dayNames:["sÃ¸ndag","mandag","tirsdag","onsdag","torsdag","fredag","lÃ¸rdag"],dayNamesMin:["sÃ¸","ma","ti","on","to","fr","lÃ¸"],weekHeader:"Uke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.no)
})(jQuery);
(function(a){a.datepicker.regional.pl={closeText:"Zamknij",prevText:"&#x3c;Poprzedni",nextText:"NastÄ™pny&#x3e;",currentText:"DziÅ›",monthNames:["StyczeÅ„","Luty","Marzec","KwiecieÅ„","Maj","Czerwiec","Lipiec","SierpieÅ„","WrzesieÅ„","PaÅºdziernik","Listopad","GrudzieÅ„"],monthNamesShort:["Sty","Lu","Mar","Kw","Maj","Cze","Lip","Sie","Wrz","Pa","Lis","Gru"],dayNames:["Niedziela","Poniedzialek","Wtorek","Åšroda","Czwartek","PiÄ…tek","Sobota"],dayNamesShort:["Nie","Pn","Wt","Åšr","Czw","Pt","So"],dayNamesMin:["N","Pn","Wt","Åšr","Cz","Pt","So"],weekHeader:"Tydz",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.pl)
})(jQuery);
(function(a){a.datepicker.regional.pt=a.datepicker.regional["pt-PT"]={closeText:"Limpar Datas",prevText:"&#x3c;Anterior",nextText:"Pr&oacute;ximo&#x3e;",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.pt),a.datepicker.setDefaults(a.datepicker.regional["pt-PT"])
})(jQuery);
(function(a){a.datepicker.regional.ru={closeText:"ÐžÑ‡Ð¸Ñ�Ñ‚Ð¸Ñ‚ÑŒ Ð”Ð°Ñ‚Ñ‹",prevText:"&#x3c;ÐŸÑ€ÐµÐ´",nextText:"Ð¡Ð»ÐµÐ´&#x3e;",currentText:"Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ�",monthNames:["Ñ�Ð½Ð²Ð°Ñ€ÑŒ","Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ","Ð¼Ð°Ñ€Ñ‚","Ð°Ð¿Ñ€ÐµÐ»ÑŒ","Ð¼Ð°Ð¹","Ð¸ÑŽÐ½ÑŒ","Ð¸ÑŽÐ»ÑŒ","Ð°Ð²Ð³ÑƒÑ�Ñ‚","Ñ�ÐµÐ½Ñ‚Ñ�Ð±Ñ€ÑŒ","Ð¾ÐºÑ‚Ñ�Ð±Ñ€ÑŒ","Ð½Ð¾Ñ�Ð±Ñ€ÑŒ","Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ"],monthNamesShort:["Ð¯Ð½Ð²","Ð¤ÐµÐ²","ÐœÐ°Ñ€","Ð�Ð¿Ñ€","ÐœÐ°Ð¹","Ð˜ÑŽÐ½","Ð˜ÑŽÐ»","Ð�Ð²Ð³","Ð¡ÐµÐ½","ÐžÐºÑ‚","Ð�Ð¾Ñ�","Ð”ÐµÐº"],dayNames:["Ð²Ð¾Ñ�ÐºÑ€ÐµÑ�ÐµÐ½ÑŒÐµ","Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº","Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº","Ñ�Ñ€ÐµÐ´Ð°","Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³","Ð¿Ñ�Ñ‚Ð½Ð¸Ñ†Ð°","Ñ�ÑƒÐ±Ð±Ð¾Ñ‚Ð°"],dayNamesShort:["Ð²Ñ�Ðº","Ð¿Ð½Ð´","Ð²Ñ‚Ñ€","Ñ�Ñ€Ð´","Ñ‡Ñ‚Ð²","Ð¿Ñ‚Ð½","Ñ�Ð±Ñ‚"],dayNamesMin:["Ð’Ñ�","ÐŸÐ½","Ð’Ñ‚","Ð¡Ñ€","Ð§Ñ‚","ÐŸÑ‚","Ð¡Ð±"],weekHeader:"Ð�Ðµ",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.ru)
})(jQuery);
(function(a){a.datepicker.regional.sv={closeText:"StÃ¤ng",prevText:"&laquo;FÃ¶rra",nextText:"NÃ¤sta&raquo;",currentText:"Idag",monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNamesShort:["SÃ¶n","MÃ¥n","Tis","Ons","Tor","Fre","LÃ¶r"],dayNames:["SÃ¶ndag","MÃ¥ndag","Tisdag","Onsdag","Torsdag","Fredag","LÃ¶rdag"],dayNamesMin:["SÃ¶","MÃ¥","Ti","On","To","Fr","LÃ¶"],weekHeader:"Ve",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},a.datepicker.setDefaults(a.datepicker.regional.sv)
})(jQuery);
(function($){$.datepicker.regional.th={closeText:"à¸›à¸´à¸”",prevText:"&laquo;&nbsp;à¸¢à¹‰à¸­à¸™",nextText:"à¸–à¸±à¸”à¹„à¸›&nbsp;&raquo;",currentText:"à¸§à¸±à¸™à¸™à¸µà¹‰",monthNames:["à¸¡à¸�à¸£à¸²à¸„à¸¡","à¸�à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ","à¸¡à¸µà¸™à¸²à¸„à¸¡","à¹€à¸¡à¸©à¸²à¸¢à¸™","à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡","à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™","à¸�à¸£à¸�à¸�à¸²à¸„à¸¡","à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡","à¸�à¸±à¸™à¸¢à¸²à¸¢à¸™","à¸•à¸¸à¸¥à¸²à¸„à¸¡","à¸žà¸¤à¸¨à¸ˆà¸´à¸�à¸²à¸¢à¸™","à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡"],monthNamesShort:["à¸¡.à¸„.","à¸�.à¸ž.","à¸¡à¸µ.à¸„.","à¹€à¸¡.à¸¢.","à¸ž.à¸„.","à¸¡à¸´.à¸¢.","à¸�.à¸„.","à¸ª.à¸„.","à¸�.à¸¢.","à¸•.à¸„.","à¸ž.à¸¢.","à¸˜.à¸„."],dayNames:["à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ","à¸ˆà¸±à¸™à¸—à¸£à¹Œ","à¸­à¸±à¸‡à¸„à¸²à¸£","à¸žà¸¸à¸˜","à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ","à¸¨à¸¸à¸�à¸£à¹Œ","à¹€à¸ªà¸²à¸£à¹Œ"],dayNamesShort:["à¸­à¸².","à¸ˆ.","à¸­.","à¸ž.","à¸žà¸¤.","à¸¨.","à¸ª."],dayNamesMin:["à¸­à¸².","à¸ˆ.","à¸­.","à¸ž.","à¸žà¸¤.","à¸¨.","à¸ª."],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.th)
})(jQuery);
(function($){$.datepicker.regional.tr={closeText:"kapat",prevText:"&#x3c;geri",nextText:"ileri&#x3e",currentText:"bugÃ¼n",monthNames:["Ocak","Åžubat","Mart","Nisan","MayÄ±s","Haziran","Temmuz","AÄŸustos","EylÃ¼l","Ekim","KasÄ±m","AralÄ±k"],monthNamesShort:["Oca","Åžub","Mar","Nis","May","Haz","Tem","AÄŸu","Eyl","Eki","Kas","Ara"],dayNames:["Pazar","Pazartesi","SalÄ±","Ã‡arÅŸamba","PerÅŸembe","Cuma","Cumartesi"],dayNamesShort:["Pz","Pt","Sa","Ã‡a","Pe","Cu","Ct"],dayNamesMin:["Pz","Pt","Sa","Ã‡a","Pe","Cu","Ct"],weekHeader:"Hf",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
$.datepicker.setDefaults($.datepicker.regional.tr)
})(jQuery);
(function(a){a.datepicker.regional.zh=a.datepicker.regional["zh-TW"]=a.datepicker.regional["zh-HK"]={closeText:"æ¸…é™¤æ—¥æœŸ",prevText:"&#x3c;ä¸Šæœˆ",nextText:"ä¸‹æœˆ&#x3e;",currentText:"ä»Šå¤©",monthNames:["ä¸€æœˆ","äºŒæœˆ","ä¸‰æœˆ","å››æœˆ","äº”æœˆ","å…­æœˆ","ä¸ƒæœˆ","å…«æœˆ","ä¹�æœˆ","å��æœˆ","å��ä¸€æœˆ","å��äºŒæœˆ"],monthNamesShort:["ä¸€","äºŒ","ä¸‰","å››","äº”","å…­","ä¸ƒ","å…«","ä¹�","å��","å��ä¸€","å��äºŒ"],dayNames:["æ˜ŸæœŸæ—¥","æ˜ŸæœŸä¸€","æ˜ŸæœŸäºŒ","æ˜ŸæœŸä¸‰","æ˜ŸæœŸå››","æ˜ŸæœŸäº”","æ˜ŸæœŸå…­"],dayNamesShort:["å‘¨æ—¥","å‘¨ä¸€","å‘¨äºŒ","å‘¨ä¸‰","å‘¨å››","å‘¨äº”","å‘¨å…­"],dayNamesMin:["æ—¥","ä¸€","äºŒ","ä¸‰","å››","äº”","å…­"],weekHeader:"å‘¨",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"å¹´"},a.datepicker.setDefaults(a.datepicker.regional.zh),a.datepicker.setDefaults(a.datepicker.regional["zh-TW"]),a.datepicker.setDefaults(a.datepicker.regional["zh-HK"])
})(jQuery);
!function($,fakeQuery){var ns=fakeQuery.ui.locale={},regions=$.datepicker.regional;
var DEFAULT_LOCALE="en";
function docLocale(){return $("html").attr("lang")||DEFAULT_LOCALE
}ns.data=function(){return regions[docLocale()]||regions[DEFAULT_LOCALE]
}
}(jQuery,fakeQuery);
!function(window,Date,Infinity,isNaN,$,fakeQuery){var ns=fakeQuery.ui.date=(function(){var TokenType={keyword:"KEYWORD",character:"CHARACTER",};
var KeywordTarget={year:"YEAR",month:"MONTH",day:"DAY",overall:"OVERALL"};
function parseDigit(token){return parseInt(token,10)
}function ifInRange(number,start,end,cbk){if(typeof number==="number"&&!isNaN(number)&&number>=start&&number<=end){cbk(number)
}}function placeholder(){return new Date
}function input(behavior){return function(datePiece,locale,startDate){var d=new Date(startDate);
behavior(datePiece,locale,d);
return d
}
}function delegateInput(string){return function(datePiece,locale,startDate){return formats[string].input(datePiece,locale,startDate)
}
}var formats={d:{input:input(function(datePiece,locale,date){ifInRange(parseDigit(datePiece),1,31,function(number){date.setDate(number)
})
}),output:function(date,localeData){return""+date.getDate()
},target:KeywordTarget.day},dd:{input:delegateInput("d"),output:function(date,localeData){var dd=""+date.getDate();
return dd.length>1?dd:"0"+dd
},target:KeywordTarget.day},o:{input:input(function(datePiece,locale,date){ifInRange(parseDigit(datePiece),1,366,function(number){var d=new Date(date);
d.setMonth(0);
d.setDate(1);
while(daysInMonth(d)<number){number-=daysInMonth(d);
d.setMonth(d.getMonth()+1)
}date.setMonth(d.getMonth());
date.setDate(number)
})
}),output:function(date,localeData){return""+integerDayOfYear(date)
},target:KeywordTarget.overall},oo:{input:delegateInput("o"),output:function(date,localeData){var arr=(""+integerDayOfYear(date)).split("");
while(arr.length<3){arr.unshift("0")
}return arr.join("")
},target:KeywordTarget.overall},D:{input:placeholder,output:function(date,localeData){return localeData.dayNamesShort[date.getDay()]
},target:KeywordTarget.day},DD:{input:placeholder,output:function(date,localeData){return localeData.dayNames[date.getDay()]
},target:KeywordTarget.day},m:{input:input(function(datePiece,locale,date){ifInRange(parseDigit(datePiece),1,12,function(number){date.setMonth(number-1);
if(month(date)!==number){date.setDate(-1)
}})
}),output:function(date,localeData){return""+month(date)
},target:KeywordTarget.month},mm:{input:delegateInput("m"),output:function(date,localeData){var mm=""+month(date);
return mm.length>1?mm:"0"+mm
},target:KeywordTarget.month},M:{input:placeholder,output:function(date,localeData){return localeData.monthNamesShort[month(date)-1]
},target:KeywordTarget.month},MM:{input:placeholder,output:function(date,localeData){return localeData.monthNames[month(date)-1]
},target:KeywordTarget.month},y:{input:input(function(datePiece,locale,date){ifInRange(parseDigit(datePiece),0,99,function(number){if(number>=88){number+=1900
}else{number+=2000
}date.setFullYear(number)
})
}),output:function(date,localeData){var y=""+date.getFullYear(),arr=[y[y.length-1]];
if(y.length>1){arr.unshift(y[y.length-2])
}y=arr.join("");
return y.length>1?y:"0"+y
},target:KeywordTarget.year},yy:{input:input(function(datePiece,locale,date){ifInRange(parseDigit(datePiece),0,Infinity,function(number){date.setFullYear(number)
})
}),output:function(date,localeData){var arr=(""+date.getFullYear()).split("");
while(arr.length<4){arr.unshift("0")
}return arr.join("")
},target:KeywordTarget.year}};
function tokenize(format){var index,length,end,testToken,token="",tokens=[],start=0;
function flush(){if(token){tokens.push({type:TokenType.keyword,token:token,target:formats[token].target})
}if(format.length>index){tokens.push({type:TokenType.character,token:format.charAt(index)})
}token="";
start=end
}for(index=0,length=format.length;
index<length;
index++){end=index+1;
testToken=format.slice(start,end);
if(formats.hasOwnProperty(testToken)){token=testToken
}else{flush()
}}flush();
return tokens
}function parseDate(string,format,localeData){var index,token,nextToken,datePiece,nextStart,curr,operation,col,start=0,tokens=tokenize(format),date=new Date;
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
var dateObj={},orderOfOperations=[KeywordTarget.year,KeywordTarget.month,KeywordTarget.day,KeywordTarget.overall];
for(index=0;
operation=orderOfOperations[index];
index++){dateObj[operation]=[]
}function addParseable(token,datePiece){dateObj[token.target].push({token:token.token,datePiece:datePiece})
}for(index=0;
token=tokens[index];
index++){nextToken=tokens[index+1];
if(token.type===TokenType.keyword){if(nextToken){nextStart=string.indexOf(nextToken.token,start);
if(nextStart>0){datePiece=string.slice(start,nextStart)
}else{break
}start=nextStart
}else{datePiece=string.slice(start,string.length)
}addParseable(token,datePiece)
}else{start+=token.token.length
}}for(index=0;
operation=orderOfOperations[index];
index++){for(col=0;
curr=dateObj[operation][col];
col++){date=formats[curr.token].input(curr.datePiece,localeData,date)
}}return date
}function serializeDate(date,format,locale){var index,token,tokens=tokenize(format),datePieces=[];
for(index=0;
token=tokens[index];
index++){if(token.type===TokenType.keyword){datePieces.push(formats[token.token].output(date,locale))
}else{datePieces.push(token.token)
}}return datePieces.join("")
}function characters(format){var index,num,tokens,token,chars=[];
for(index=0,num=9;
index<=num;
index++){chars.push(index.toString())
}tokens=tokenize(format);
for(index=0;
token=tokens[index];
index++){if(token.type===TokenType.character){chars.push(token.token)
}}return chars
}return{parse:parseDate,serialize:serializeDate,characters:characters}
}());
function integerDayOfYear(date){var d=new Date(date),days=0;
d.setMonth(0);
d.setDate(1);
while(month(d)<month(date)){days+=daysInMonth(d);
d.setMonth(d.getMonth()+1)
}return days+date.getDate()
}function daysInMonth(date){var d=new Date(date),maxDays=month(date)===2?29:31;
d.setDate(maxDays);
return month(date)===month(d)?maxDays:maxDays-1
}function monthStart(date){var d=new Date(date);
d.setDate(1);
return d.getDay()
}function month(date){return date.getMonth()+1
}function relative(date,relative){relative=relative.toLowerCase();
var index,match,type,NUMBER_REGEX=/[+|-](\d+)\w/,RELATIVE_REGEX=/[+|-]\d+\w/gi,relativeDate=new Date(date),matches=relative.match(RELATIVE_REGEX),types={d:function(date,number){date.setDate(date.getDate()+number)
},m:function(date,number){date.setMonth(date.getMonth()+number)
},y:function(date,number){date.setFullYear(date.getFullYear()+number)
}};
function parseMatch(match){if(!match){return 0
}var numStr=NUMBER_REGEX.exec(match)[1],sign=match[0]==="+"?1:-1;
return parseInt(numStr,10)*sign
}if(!matches){return relativeDate
}for(index=0;
match=matches[index];
index++){if(!match){continue
}type=match[match.length-1];
if(types.hasOwnProperty(type)){types[type](relativeDate,parseMatch(match))
}}return relativeDate
}function dateLessThan(date1,date2){if(date1.getYear()<date2.getYear()){return true
}if(date1.getYear()>date2.getYear()){return false
}if(date1.getMonth()<date2.getMonth()){return true
}if(date1.getMonth()>date2.getMonth()){return false
}if(date1.getDate()<date2.getDate()){return true
}if(date1.getDate()>date2.getDate()){return false
}return true
}function dateGreaterThanOrEqualTo(date1,date2){return(date1==date2||!dateLessThan(date1,date2))
}function inRange(date,min,max){var allowed=true;
if(!min&&!max){return allowed
}if(min){allowed=dateLessThan(min,date)
}if(max){allowed=allowed&&dateGreaterThanOrEqualTo(max,date)
}return allowed
}ns.month=month;
ns.daysInMonth=daysInMonth;
ns.monthStart=monthStart;
ns.relative=relative;
ns.inRange=inRange
}(window,Date,Infinity,isNaN,jQuery,fakeQuery);
!function($,fakeQuery){function horror(){var content=[].slice.call(arguments,0,arguments.length);
return content.join("")
}function html(tag,attrs,classList,children){var index,curr,prop,ogLength,pieces=["<",tag];
if(attrs instanceof Array||attrs==null){children=classList;
classList=attrs;
attrs={}
}if(classList==null){classList=[]
}if(children==null){children=[]
}ogLength=pieces.length;
for(prop in attrs){if(attrs.hasOwnProperty(prop)){pieces.push(" ",prop,'="',attrs[prop],'"')
}}if(classList.length>0){pieces.push(' class="');
for(index=0;
curr=classList[index];
index++){pieces.push(curr," ")
}pieces.pop();
pieces.push('"')
}pieces.push(">",children.join(""),"</",tag,">");
return pieces.join("")
}function declareTag(tag){horror[tag]=function(attrs,classList,children){return html(tag,attrs,classList,children)
}
}function declareTags(tags){var index,tag;
for(index=0;
tag=tags[index];
index++){declareTag(tag)
}}declareTags(["div","a","span","table","thead","tr","tbody","th","td","button"]);
fakeQuery.ui.horror=horror
}(jQuery,fakeQuery);
!function(Date,fakeQuery){var h=fakeQuery.ui.horror,uiDate=fakeQuery.ui.date;
var DATEPICKER_CLASS="ui-datepicker",HEADER_CLASS="ui-datepicker-header",CLEARFIX_CLASS="ui-helper-clearfix",CORNER_CLASS="ui-corner-all",CONTENT_CLASS="ui-widget-content",DAY_LINK_CLASS="ui-state-default",UNSELECTABLE_CLASS="ui-datepicker-unselectable",DISABLED_CLASS="ui-state-disabled",NEXT_CLASS="ui-datepicker-next",PREV_CLASS="ui-datepicker-prev",TITLE_CLASS="ui-datepicker-title",CAL_CLASS="ui-datepicker-calendar",ICON_CLASS="ui-icon";
function renderDatepicker(data){var now=data.now,locale=data.locale,minDate=data.minDate,maxDate=data.maxDate,showButtonPanel=data.showButtonPanel,closeText=data.closeText;
return h(h.div([DATEPICKER_CLASS,"ui-widget",CONTENT_CLASS,CLEARFIX_CLASS,CORNER_CLASS],[h.div([HEADER_CLASS,"ui-widget-header",CLEARFIX_CLASS,CORNER_CLASS],[h.a([PREV_CLASS,CORNER_CLASS],[h.span([ICON_CLASS,"ui-icon-circle-triangle-w"])]),h.a([NEXT_CLASS,CORNER_CLASS],[h.span([ICON_CLASS,"ui-icon-circle-triangle-e"])]),h.div([TITLE_CLASS],(function(){var monthHeader=h(h.span(["ui-datepicker-month"],[uiDate.serialize(now,"MM",locale)]));
var yearHeader=h(h.span(["ui-datepicker-year"],[uiDate.serialize(now,"yy",locale)]));
if(locale.showMonthAfterYear){return[yearHeader," ",monthHeader]
}return[monthHeader," ",yearHeader]
}()))]),h.table([CAL_CLASS],[h.thead([],[h.tr([],(function(){var day,rows=[];
for(day=0;
day<7;
day++){rows.push(h.th([],[h.span([],[locale.dayNamesMin[(day+locale.firstDay)%7]])]))
}return rows
}()))]),h.tbody([],(function(){var totalDays,day,allowed,date=new Date(now),rows=[];
date.setDate(1);
totalDays=locale.firstDay;
if(uiDate.monthStart(now)<totalDays){totalDays-=7
}while(uiDate.month(date)===uiDate.month(now)){rows.push(h.tr([],(function(){var rows=[];
for(day=0;
day<7;
day++){if(totalDays-uiDate.monthStart(now)>=0&&uiDate.month(date)===uiDate.month(now)){allowed=uiDate.inRange(date,minDate,maxDate);
rows.push(h.td(allowed?[]:[UNSELECTABLE_CLASS,DISABLED_CLASS],(function(){if(allowed){return[h.a({href:"#"},[DAY_LINK_CLASS],[date.getDate()])]
}return[h.span([DAY_LINK_CLASS],[date.getDate()])]
}())));
date.setDate(date.getDate()+1)
}else{rows.push(h.td([UNSELECTABLE_CLASS,DISABLED_CLASS,"ui-datepicker-other-month"]))
}totalDays++
}return rows
}())))
}return rows
}()))]),(function(){if(!showButtonPanel){return""
}return h.div(["ui-datepicker-buttonpane",CONTENT_CLASS],[h.button(["ui-datepicker-current","ui-state-default","ui-priority-secondary",CORNER_CLASS],[locale.currentText]),h.button(["ui-datepicker-close","ui-state-default","ui-priority-primary",CORNER_CLASS],[closeText])])
}())]))
}fakeQuery.ui.templates.datepicker=renderDatepicker
}(Date,fakeQuery);
!function(window,document,Date,$,fakeQuery){var DATA_NAME="fqUI-datepicker";
var uiDate=fakeQuery.ui.date,uiLocale=fakeQuery.ui.locale,renderDatepicker=fakeQuery.ui.templates.datepicker;
var OPEN_ANIMATION_TIME=300,CLOSE_ANIMATION_TIME=150,DAY_LINK_SELECTOR="td > .ui-state-default",UI_HOVER_CLASS="ui-state-hover",HIGHLIGHT_CLASS="ui-state-highlight",ACTIVE_CLASS="ui-state-active",DATEPICKER_TARGET_CLASS="ui-datepicker-target";
var DatePicker=fakeQuery.ui.DatePicker=function(options){this.input=this.$target=null;
this.$el=$();
this.hidden=true;
this.locale=uiLocale.data();
this.now=new Date();
this._events={};
this.options(options||{})
};
DatePicker.prototype.attach=function($target){this.input=this.$target=$target;
this.$target.data(DATA_NAME,this);
this.$target.addClass(DATEPICKER_TARGET_CLASS);
initEvents(this)
};
DatePicker.prototype.options=function(o){if(!o){return this._options
}var placeholder=function(){},now=this.now;
var options=this._options=$.extend({beforeShow:placeholder,beforeShowDay:placeholder,onChangeMonthYear:placeholder,onClose:placeholder,onReset:placeholder,onSelect:placeholder,month:uiDate.month(now),year:now.getFullYear(),minDate:null,maxDate:null,showButtonPanel:false,closeText:this.locale.closeText},this._options,o);
this.month(options.monthArg);
this.year(options.year);
if(options.minDate){this.minDate(options.minDate)
}if(options.maxDate){this.maxDate(options.maxDate)
}this.render()
};
DatePicker.prototype.minDate=function(d){if(!d){return this._minDate
}this._minDate=optionalRelDate(this.now,d);
this.render()
};
DatePicker.prototype.maxDate=function(d){if(!d){return this._maxDate
}this._maxDate=optionalRelDate(this.now,d);
this.render()
};
DatePicker.prototype.month=function(m){var now=this.now,oldM=uiDate.month(now);
if(m==null){return uiDate.month(now)
}now.setMonth(m-1);
if(uiDate.month(now)!==m){now.setDate(-1)
}this.render()
};
DatePicker.prototype.year=function(year){var now=this.now,oldM=uiDate.month(now);
if(year==null){return now.getFullYear()
}now.setFullYear(year);
if(uiDate.month(now)!==oldM){now.setDate(-1)
}this.render()
};
DatePicker.prototype.render=function(){var selectedDate,$target=this.$target,locale=this.locale;
if(!$target){return
}if(this.$el){this.$el.remove()
}this.$el=$(renderDatepicker({now:this.now,locale:locale,minDate:this.minDate(),maxDate:this.maxDate(),showButtonPanel:this._options.showButtonPanel,closeText:this._options.closeText}));
$("body").append(this.$el);
attachEvents(this);
decorate(this);
if($target.val()){selectedDate=uiDate.parse($target.val(),locale.dateFormat,locale);
highlightDate(this,selectedDate)
}if(this.hidden){this.$el.hide()
}else{this.$el.show()
}setPosition(this)
};
DatePicker.prototype.remove=function(){this.$el.remove();
this.$target.removeData(DATA_NAME,this)
};
DatePicker.prototype.show=function(){if(!this.hidden){return
}var ref=this,$target=this.$target,locale=this.locale,opts=this._options.beforeShow.call($target,$target,this);
this.setDate(uiDate.parse($target.val(),locale.dateFormat,locale),true);
if(opts!=null){this.options(opts)
}this.$el.fadeIn(OPEN_ANIMATION_TIME);
setTimeout(function(){attachGlobalEvents(ref)
},0);
this.hidden=false
};
DatePicker.prototype.hide=function(){this.$el.fadeOut(CLOSE_ANIMATION_TIME);
detachGlobalEvents(this);
this._options.onClose.call(this.$target,this.$target.val(),this);
this.hidden=true;
this.$target.blur()
};
DatePicker.prototype.reset=function(silent){var DEFAULT_VALUE="";
this.$target.val(DEFAULT_VALUE);
this.now=new Date();
if(!silent){this._options.onReset.call(this.$target,DEFAULT_VALUE,this)
}this.hide()
};
DatePicker.prototype.setDate=function(date,silent){var output;
if(!date){return
}this.now=date;
if(this.$target.is("input[type!=button]")&&!silent){output=uiDate.serialize(this.now,this.locale.dateFormat,this.locale);
this.$target.val(output)
}this.render()
};
DatePicker.get=function($input){return $input.data(DATA_NAME)
};
function optionalRelDate(startDate,relDate){if(!relDate){return null
}if(relDate instanceof Date){return relDate
}return uiDate.relative(startDate,relDate)
}function decorate(datepicker){datepicker.$el.find("td:first-child, td:last-child, th:first-child, th:last-child").addClass("ui-datepicker-week-end")
}function setPosition(datepicker){var $target=datepicker.$target,$el=datepicker.$el;
$el.css({position:"absolute",top:$target.offset().top+$target.height()*2,left:$target.offset().left})
}function highlightDate(datepicker,date){if(datepicker.now.getYear()!==date.getYear()){return
}if(datepicker.now.getMonth()!==date.getMonth()){return
}if(!uiDate.inRange(date,datepicker.minDate(),datepicker.maxDate())){return
}var $day;
datepicker.$el.find(DAY_LINK_SELECTOR).each(function(){var $this=$(this);
$this.removeClass(HIGHLIGHT_CLASS).removeClass(ACTIVE_CLASS);
if(parseInt($this.text(),10)===date.getDate()){$day=$this
}});
if(!$day){return
}$day.addClass(HIGHLIGHT_CLASS).addClass(ACTIVE_CLASS)
}function initEvents(datepicker){var events,$target=datepicker.$target,locale=datepicker.locale;
$target.focus(function(){if(datepicker.hidden){datepicker.show()
}});
events=datepicker._events={blurHandled:false,blurHandler:function(){events.blurHandled=true
},closeHandler:function(){if(!events.blurHandled){datepicker.hide()
}events.blurHandled=false;
setTimeout(function(){if(!datepicker.hidden){$target.focus()
}},0)
},changeFired:-1,changeHandler:function(){if(events.changeFired>0){clearTimeout(events.changeFired);
events.changeFired=-1
}events.changeFired=setTimeout(function(){datepicker.setDate(uiDate.parse($target.val(),locale.dateFormat,locale),true);
highlightDate(datepicker,datepicker.now)
},250)
},keymask:function(e){var keys=uiDate.characters(locale.dateFormat).join(""),key=String.fromCharCode(e.charCode||e.which);
if(keys.indexOf(key)<0){e.preventDefault()
}}}
}function attachEvents(datepicker){var events,$el=datepicker.$el,$target=datepicker.$target;
$el.on("click",".ui-datepicker-prev",function(e){e.preventDefault();
var m=datepicker.month()-1;
if(m===0){datepicker.year(datepicker.year()-1);
m=12
}datepicker.month(m);
datepicker._options.onChangeMonthYear.call($target,datepicker.year(),datepicker.month(),datepicker)
});
$el.on("click",".ui-datepicker-next",function(e){e.preventDefault();
var m=datepicker.month()+1;
if(m===13){datepicker.year(datepicker.year()+1);
m=1
}datepicker.month(m);
datepicker._options.onChangeMonthYear.call($target,datepicker.year(),datepicker.month(),datepicker)
});
$el.on("click",".ui-datepicker-close",function(e){e.preventDefault();
datepicker.reset();
$target.change()
});
$el.on("click",DAY_LINK_SELECTOR,function(e){var $this=$(this),d=new Date(datepicker.now),day=parseInt($this.text());
e.preventDefault();
d.setDate(day);
if(!uiDate.inRange(d,datepicker.minDate(),datepicker.maxDate())){return
}datepicker.now.setDate(parseInt($this.text()));
datepicker.setDate(datepicker.now);
$target.change();
datepicker._options.onSelect.call($target,$target.val(),datepicker);
datepicker.hide()
});
$el.on("mouseenter",DAY_LINK_SELECTOR,function(){var $this=$(this),disabled=$this.parent().is(".ui-state-disabled");
if(!disabled){$this.addClass(UI_HOVER_CLASS)
}});
$el.on("mouseleave",DAY_LINK_SELECTOR,function(){$(this).removeClass(UI_HOVER_CLASS)
});
$el.on("mousedown",datepicker._events.blurHandler)
}function attachGlobalEvents(datepicker){var events=datepicker._events,$target=datepicker.$target;
$target.on("blur",events.closeHandler);
$target.on("keypress",events.changeHandler);
$target.on("keypress",events.keymask)
}function detachGlobalEvents(datepicker){var events=datepicker._events,$target=datepicker.$target;
$target.off("blur",events.closeHandler);
$target.off("keypress",events.changeHandler);
$target.off("keypress",events.keymask)
}}(window,document,Date,jQuery,fakeQuery);
!function($,fakeQuery){var uiDate=fakeQuery.ui.date,uiLocale=fakeQuery.ui.locale,DatePicker=fakeQuery.ui.DatePicker;
function magicHelper($el,magicOptions,option,value){var options,datepicker=DatePicker.get($el);
if(magicOptions=="option"){options={};
if(!value){return datepicker.options()[option]
}options[option]=value;
datepicker.options(options)
}else{datepicker[magicOptions](option)
}}$.fn.datepicker=function(options,option,value){var datepicker,$this=$(this);
if(!$this.length){return $this
}if(typeof options=="string"){return magicHelper($($this[0]),options,option,value)
}$this.each(function(){var $this=$(this),datepicker=DatePicker.get($this);
if(!datepicker){datepicker=new DatePicker(options);
datepicker.attach($this)
}});
return $this
};
$.datepicker._defaults=uiLocale.data();
$.datepicker.formatDate=function(format,date){return uiDate.serialize(date,format,$.datepicker._defaults)
};
$.datepicker.parseDate=function(format,text){return uiDate.parse(text,format,$.datepicker._defaults)
}
}(jQuery,fakeQuery);
(function($,document,window){var defaults={transition:"elastic",speed:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,returnFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined},colorbox="colorbox",prefix="cbox",boxElement=prefix+"Element",event_open=prefix+"_open",event_load=prefix+"_load",event_complete=prefix+"_complete",event_cleanup=prefix+"_cleanup",event_closed=prefix+"_closed",event_purge=prefix+"_purge",isIE=!$.support.opacity&&!$.support.style,isIE6=isIE&&!window.XMLHttpRequest,event_ie6=prefix+"_IE6",$overlay,$box,$wrap,$content,$topBorder,$leftBorder,$rightBorder,$bottomBorder,$related,$window,$loaded,$loadingBay,$loadingOverlay,$title,$current,$slideshow,$next,$prev,$close,$groupControls,settings,interfaceHeight,interfaceWidth,loadedHeight,loadedWidth,element,index,photo,open,active,closing,loadingTimer,publicMethod,div="div",init;
function $tag(tag,id,css){var element=document.createElement(tag);
if(id){element.id=prefix+id
}if(css){element.style.cssText=css
}return $(element)
}function getIndex(increment){var max=$related.length,newIndex=(index+increment)%max;
return(newIndex<0)?max+newIndex:newIndex
}function setSize(size,dimension){return Math.round((/%/.test(size)?((dimension==="x"?$window.width():$window.height())/100):1)*parseInt(size,10))
}function isImage(url){return settings.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(url)
}function makeSettings(){var i;
settings=$.extend({},$.data(element,colorbox));
for(i in settings){if($.isFunction(settings[i])&&i.slice(0,2)!=="on"){settings[i]=settings[i].call(element)
}}settings.rel=settings.rel||element.rel||"nofollow";
settings.href=settings.href||$(element).attr("href");
settings.title=settings.title||element.title;
if(typeof settings.href==="string"){settings.href=$.trim(settings.href)
}}function trigger(event,callback){$.event.trigger(event);
if(callback){callback.call(element)
}}function slideshow(){var timeOut,className=prefix+"Slideshow_",click="click."+prefix,start,stop,clear;
if(settings.slideshow&&$related[1]){start=function(){$slideshow.text(settings.slideshowStop).unbind(click).bind(event_complete,function(){if(settings.loop||$related[index+1]){timeOut=setTimeout(publicMethod.next,settings.slideshowSpeed)
}}).bind(event_load,function(){clearTimeout(timeOut)
}).one(click+" "+event_cleanup,stop);
$box.removeClass(className+"off").addClass(className+"on");
timeOut=setTimeout(publicMethod.next,settings.slideshowSpeed)
};
stop=function(){clearTimeout(timeOut);
$slideshow.text(settings.slideshowStart).unbind([event_complete,event_load,event_cleanup,click].join(" ")).one(click,function(){publicMethod.next();
start()
});
$box.removeClass(className+"on").addClass(className+"off")
};
if(settings.slideshowAuto){start()
}else{stop()
}}else{$box.removeClass(className+"off "+className+"on")
}}function launch(target){if(!closing){element=target;
makeSettings();
$related=$(element);
index=0;
if(settings.rel!=="nofollow"){$related=$("."+boxElement).filter(function(){var relRelated=$.data(this,colorbox).rel||this.rel;
return(relRelated===settings.rel)
});
index=$related.index(element);
if(index===-1){$related=$related.add(element);
index=$related.length-1
}}if(!open){open=active=true;
$box.show();
if(settings.returnFocus){$(element).blur().one(event_closed,function(){$(this).focus()
})
}$overlay.css({opacity:+settings.opacity,cursor:settings.overlayClose?"pointer":"auto"}).show();
settings.w=setSize(settings.initialWidth,"x");
settings.h=setSize(settings.initialHeight,"y");
publicMethod.position();
if(isIE6){$window.bind("resize."+event_ie6+" scroll."+event_ie6,function(){$overlay.css({width:$window.width(),height:$window.height(),top:$window.scrollTop(),left:$window.scrollLeft()})
}).trigger("resize."+event_ie6)
}trigger(event_open,settings.onOpen);
$groupControls.add($title).hide();
$close.html(settings.close).show()
}publicMethod.load(true)
}}function appendHTML(){if(!$box&&document.body){init=false;
$window=$(window);
$box=$tag(div).attr({id:colorbox,"class":isIE?prefix+(isIE6?"IE6":"IE"):""}).hide();
$overlay=$tag(div,"Overlay",isIE6?"position:absolute":"").hide();
$wrap=$tag(div,"Wrapper");
$content=$tag(div,"Content").append($loaded=$tag(div,"LoadedContent","width:0; height:0; overflow:hidden"),$loadingOverlay=$tag(div,"LoadingOverlay").add($tag(div,"LoadingGraphic")),$title=$tag(div,"Title"),$current=$tag(div,"Current"),$next=$tag(div,"Next"),$prev=$tag(div,"Previous"),$slideshow=$tag(div,"Slideshow").bind(event_open,slideshow),$close=$tag(div,"Close"));
$wrap.append($tag(div).append($tag(div,"TopLeft"),$topBorder=$tag(div,"TopCenter"),$tag(div,"TopRight")),$tag(div,false,"clear:left").append($leftBorder=$tag(div,"MiddleLeft"),$content,$rightBorder=$tag(div,"MiddleRight")),$tag(div,false,"clear:left").append($tag(div,"BottomLeft"),$bottomBorder=$tag(div,"BottomCenter"),$tag(div,"BottomRight"))).find("div div").css({"float":"left"});
$loadingBay=$tag(div,false,"position:absolute; width:9999px; visibility:hidden; display:none");
$groupControls=$next.add($prev).add($current).add($slideshow);
$(document.body).append($overlay,$box.append($wrap,$loadingBay))
}}function addBindings(){if($box){if(!init){init=true;
interfaceHeight=$topBorder.height()+$bottomBorder.height()+$content.outerHeight(true)-$content.height();
interfaceWidth=$leftBorder.width()+$rightBorder.width()+$content.outerWidth(true)-$content.width();
loadedHeight=$loaded.outerHeight(true);
loadedWidth=$loaded.outerWidth(true);
$box.css({"padding-bottom":interfaceHeight,"padding-right":interfaceWidth});
$next.click(function(){publicMethod.next()
});
$prev.click(function(){publicMethod.prev()
});
$close.click(function(){publicMethod.close()
});
$overlay.click(function(){if(settings.overlayClose){publicMethod.close()
}});
$(document).bind("keydown."+prefix,function(e){var key=e.keyCode;
if(open&&settings.escKey&&key===27){e.preventDefault();
publicMethod.close()
}if(open&&settings.arrowKey&&$related[1]){if(key===37){e.preventDefault();
$prev.click()
}else{if(key===39){e.preventDefault();
$next.click()
}}}});
$("."+boxElement,document).live("click",function(e){if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey)){e.preventDefault();
launch(this)
}})
}return true
}return false
}if($.colorbox){return
}$(appendHTML);
publicMethod=$.fn[colorbox]=$[colorbox]=function(options,callback){var $this=this;
options=options||{};
appendHTML();
if(addBindings()){if(!$this[0]){if($this.selector){return $this
}$this=$("<a/>");
options.open=true
}if(callback){options.onComplete=callback
}$this.each(function(){$.data(this,colorbox,$.extend({},$.data(this,colorbox)||defaults,options))
}).addClass(boxElement);
if(($.isFunction(options.open)&&options.open.call($this))||options.open){launch($this[0])
}}return $this
};
publicMethod.position=function(speed,loadedCallback){var top=0,left=0,offset=$box.offset(),scrollTop=$window.scrollTop(),scrollLeft=$window.scrollLeft();
$window.unbind("resize."+prefix);
$box.css({top:-90000,left:-90000});
if(settings.fixed&&!isIE6){offset.top-=scrollTop;
offset.left-=scrollLeft;
$box.css({position:"fixed"})
}else{top=scrollTop;
left=scrollLeft;
$box.css({position:"absolute"})
}if(settings.right!==false){left+=Math.max($window.width()-settings.w-loadedWidth-interfaceWidth-setSize(settings.right,"x"),0)
}else{if(settings.left!==false){left+=setSize(settings.left,"x")
}else{left+=Math.round(Math.max($window.width()-settings.w-loadedWidth-interfaceWidth,0)/2)
}}if(settings.bottom!==false){top+=Math.max($window.height()-settings.h-loadedHeight-interfaceHeight-setSize(settings.bottom,"y"),0)
}else{if(settings.top!==false){top+=setSize(settings.top,"y")
}else{top+=Math.round(Math.max($window.height()-settings.h-loadedHeight-interfaceHeight,0)/2)
}}$box.css({top:offset.top,left:offset.left});
speed=($box.width()===settings.w+loadedWidth&&$box.height()===settings.h+loadedHeight)?0:speed||0;
$wrap[0].style.width=$wrap[0].style.height="9999px";
function modalDimensions(that){$topBorder[0].style.width=$bottomBorder[0].style.width=$content[0].style.width=that.style.width;
$content[0].style.height=$leftBorder[0].style.height=$rightBorder[0].style.height=that.style.height
}$box.dequeue().animate({width:settings.w+loadedWidth,height:settings.h+loadedHeight,top:top,left:left},{duration:speed,complete:function(){modalDimensions(this);
active=false;
$wrap[0].style.width=(settings.w+loadedWidth+interfaceWidth)+"px";
$wrap[0].style.height=(settings.h+loadedHeight+interfaceHeight)+"px";
if(settings.reposition){setTimeout(function(){$window.bind("resize."+prefix,publicMethod.position)
},1)
}if(loadedCallback){loadedCallback()
}},step:function(){modalDimensions(this)
}})
};
publicMethod.resize=function(options){if(open){options=options||{};
if(options.width){settings.w=setSize(options.width,"x")-loadedWidth-interfaceWidth
}if(options.innerWidth){settings.w=setSize(options.innerWidth,"x")
}$loaded.css({width:settings.w});
if(options.height){settings.h=setSize(options.height,"y")-loadedHeight-interfaceHeight
}if(options.innerHeight){settings.h=setSize(options.innerHeight,"y")
}if(!options.innerHeight&&!options.height){$loaded.css({height:"auto"});
settings.h=$loaded.height()
}$loaded.css({height:settings.h});
publicMethod.position(settings.transition==="none"?0:settings.speed)
}};
publicMethod.prep=function(object){if(!open){return
}var callback,speed=settings.transition==="none"?0:settings.speed;
$loaded.remove();
$loaded=$tag(div,"LoadedContent").append(object);
function getWidth(){settings.w=settings.w||$loaded.width();
settings.w=settings.mw&&settings.mw<settings.w?settings.mw:settings.w;
return settings.w
}function getHeight(){settings.h=settings.h||$loaded.height();
settings.h=settings.mh&&settings.mh<settings.h?settings.mh:settings.h;
return settings.h
}$loaded.hide().appendTo($loadingBay.show()).css({width:getWidth(),overflow:settings.scrolling?"auto":"hidden"}).css({height:getHeight()}).prependTo($content);
$loadingBay.hide();
$(photo).css({"float":"none"});
if(isIE6){$("select").not($box.find("select")).filter(function(){return this.style.visibility!=="hidden"
}).css({visibility:"hidden"}).one(event_cleanup,function(){this.style.visibility="inherit"
})
}callback=function(){var preload,i,total=$related.length,iframe,frameBorder="frameBorder",allowTransparency="allowTransparency",complete,src,img;
if(!open){return
}function removeFilter(){if(isIE){$box[0].style.removeAttribute("filter")
}}complete=function(){clearTimeout(loadingTimer);
$loadingOverlay.hide();
trigger(event_complete,settings.onComplete)
};
if(isIE){if(photo){$loaded.fadeIn(100)
}}$title.html(settings.title).add($loaded).show();
if(total>1){if(typeof settings.current==="string"){$current.html(settings.current.replace("{current}",index+1).replace("{total}",total)).show()
}$next[(settings.loop||index<total-1)?"show":"hide"]().html(settings.next);
$prev[(settings.loop||index)?"show":"hide"]().html(settings.previous);
if(settings.slideshow){$slideshow.show()
}if(settings.preloading){preload=[getIndex(-1),getIndex(1)];
while(i=$related[preload.pop()]){src=$.data(i,colorbox).href||i.href;
if($.isFunction(src)){src=src.call(i)
}if(isImage(src)){img=new Image();
img.src=src
}}}}else{$groupControls.hide()
}if(settings.iframe){iframe=$tag("iframe")[0];
if(frameBorder in iframe){iframe[frameBorder]=0
}if(allowTransparency in iframe){iframe[allowTransparency]="true"
}iframe.name=prefix+(+new Date());
if(settings.fastIframe){complete()
}else{$(iframe).one("load",complete)
}iframe.src=settings.href;
if(!settings.scrolling){iframe.scrolling="no"
}$(iframe).addClass(prefix+"Iframe").appendTo($loaded).one(event_purge,function(){iframe.src="//about:blank"
})
}else{complete()
}if(settings.transition==="fade"){$box.fadeTo(speed,1,removeFilter)
}else{removeFilter()
}};
if(settings.transition==="fade"){$box.fadeTo(speed,0,function(){publicMethod.position(0,callback)
})
}else{publicMethod.position(speed,callback)
}};
publicMethod.load=function(launched){var href,setResize,prep=publicMethod.prep;
active=true;
photo=false;
element=$related[index];
if(!launched){makeSettings()
}trigger(event_purge);
trigger(event_load,settings.onLoad);
settings.h=settings.height?setSize(settings.height,"y")-loadedHeight-interfaceHeight:settings.innerHeight&&setSize(settings.innerHeight,"y");
settings.w=settings.width?setSize(settings.width,"x")-loadedWidth-interfaceWidth:settings.innerWidth&&setSize(settings.innerWidth,"x");
settings.mw=settings.w;
settings.mh=settings.h;
if(settings.maxWidth){settings.mw=setSize(settings.maxWidth,"x")-loadedWidth-interfaceWidth;
settings.mw=settings.w&&settings.w<settings.mw?settings.w:settings.mw
}if(settings.maxHeight){settings.mh=setSize(settings.maxHeight,"y")-loadedHeight-interfaceHeight;
settings.mh=settings.h&&settings.h<settings.mh?settings.h:settings.mh
}href=settings.href;
loadingTimer=setTimeout(function(){$loadingOverlay.show()
},100);
if(settings.inline){$tag(div).hide().insertBefore($(href)[0]).one(event_purge,function(){$(this).replaceWith($loaded.children())
});
prep($(href))
}else{if(settings.iframe){prep(" ")
}else{if(settings.html){prep(settings.html)
}else{if(isImage(href)){$(photo=new Image()).addClass(prefix+"Photo").error(function(){settings.title=false;
prep($tag(div,"Error").text("This image could not be loaded"))
}).load(function(){var percent;
photo.onload=null;
if(settings.scalePhotos){setResize=function(){photo.height-=photo.height*percent;
photo.width-=photo.width*percent
};
if(settings.mw&&photo.width>settings.mw){percent=(photo.width-settings.mw)/photo.width;
setResize()
}if(settings.mh&&photo.height>settings.mh){percent=(photo.height-settings.mh)/photo.height;
setResize()
}}if(settings.h){photo.style.marginTop=Math.max(settings.h-photo.height,0)/2+"px"
}if($related[1]&&(settings.loop||$related[index+1])){photo.style.cursor="pointer";
photo.onclick=function(){publicMethod.next()
}
}if(isIE){photo.style.msInterpolationMode="bicubic"
}setTimeout(function(){prep(photo)
},1)
});
setTimeout(function(){photo.src=href
},1)
}else{if(href){$loadingBay.load(href,settings.data,function(data,status,xhr){prep(status==="error"?$tag(div,"Error").text("Request unsuccessful: "+xhr.statusText):$(this).contents())
})
}}}}}};
publicMethod.next=function(){if(!active&&$related[1]&&(settings.loop||$related[index+1])){index=getIndex(1);
publicMethod.load()
}};
publicMethod.prev=function(){if(!active&&$related[1]&&(settings.loop||index)){index=getIndex(-1);
publicMethod.load()
}};
publicMethod.close=function(){if(open&&!closing){closing=true;
open=false;
trigger(event_cleanup,settings.onCleanup);
$window.unbind("."+prefix+" ."+event_ie6);
$overlay.fadeTo(200,0);
$box.stop().fadeTo(300,0,function(){$box.add($overlay).css({opacity:1,cursor:"auto"}).hide();
trigger(event_purge);
$loaded.remove();
setTimeout(function(){closing=false;
trigger(event_closed,settings.onClosed)
},1)
})
}};
publicMethod.remove=function(){$([]).add($box).add($overlay).remove();
$box=null;
$("."+boxElement).removeData(colorbox).removeClass(boxElement).die()
};
publicMethod.element=function(){return $(element)
};
publicMethod.settings=defaults
}(jQuery,document,this));
(function($){$.colorbox.settings.opacity=0.8;
$(document).bind("cbox_complete",function(){$('#cboxContent a[rel="close"]').click(function(){$.colorbox.close()
});
if($.colorbox.getContentEl().children().eq(0).hasClass("noClose")){$.colorbox.noClose()
}});
$.colorbox.loading=function(){var $loadEl=$('<div class="cboxLoading"></div>').appendTo("#cboxContent").fadeIn("fast"),$cboxLoadedContent=$.colorbox.getContentEl().fadeOut("fast");
$.colorbox();
$(document).one("cbox_load",function(){$loadEl.fadeOut("fast",function(){$loadEl.remove()
});
$cboxLoadedContent.fadeIn("fast")
})
};
$.colorbox.noClose=function(){$("#colorbox").addClass("noClose")
};
$.colorbox.getContentEl=function(){return $("#cboxLoadedContent")
}
})(jQuery);
var JSON;
if(!JSON){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){if(text==null){return null
}var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
(function(){var root=this;
var previousBackbone=root.Backbone;
var array=[];
var push=array.push;
var slice=array.slice;
var splice=array.splice;
var Backbone;
if(typeof exports!=="undefined"){Backbone=exports
}else{Backbone=root.Backbone={}
}Backbone.VERSION="0.9.10";
var _=root._;
if(!_&&(typeof require!=="undefined")){_=require("underscore")
}Backbone.$=root.jQuery||root.Zepto||root.ender;
Backbone.noConflict=function(){root.Backbone=previousBackbone;
return this
};
Backbone.emulateHTTP=false;
Backbone.emulateJSON=false;
var eventSplitter=/\s+/;
var eventsApi=function(obj,action,name,rest){if(!name){return true
}if(typeof name==="object"){for(var key in name){obj[action].apply(obj,[key,name[key]].concat(rest))
}}else{if(eventSplitter.test(name)){var names=name.split(eventSplitter);
for(var i=0,l=names.length;
i<l;
i++){obj[action].apply(obj,[names[i]].concat(rest))
}}else{return true
}}};
var triggerEvents=function(events,args){var ev,i=-1,l=events.length;
switch(args.length){case 0:while(++i<l){(ev=events[i]).callback.call(ev.ctx)
}return;
case 1:while(++i<l){(ev=events[i]).callback.call(ev.ctx,args[0])
}return;
case 2:while(++i<l){(ev=events[i]).callback.call(ev.ctx,args[0],args[1])
}return;
case 3:while(++i<l){(ev=events[i]).callback.call(ev.ctx,args[0],args[1],args[2])
}return;
default:while(++i<l){(ev=events[i]).callback.apply(ev.ctx,args)
}}};
var Events=Backbone.Events={on:function(name,callback,context){if(!(eventsApi(this,"on",name,[callback,context])&&callback)){return this
}this._events||(this._events={});
var list=this._events[name]||(this._events[name]=[]);
list.push({callback:callback,context:context,ctx:context||this});
return this
},once:function(name,callback,context){if(!(eventsApi(this,"once",name,[callback,context])&&callback)){return this
}var self=this;
var once=_.once(function(){self.off(name,once);
callback.apply(this,arguments)
});
once._callback=callback;
this.on(name,once,context);
return this
},off:function(name,callback,context){var list,ev,events,names,i,l,j,k;
if(!this._events||!eventsApi(this,"off",name,[callback,context])){return this
}if(!name&&!callback&&!context){this._events={};
return this
}names=name?[name]:_.keys(this._events);
for(i=0,l=names.length;
i<l;
i++){name=names[i];
if(list=this._events[name]){events=[];
if(callback||context){for(j=0,k=list.length;
j<k;
j++){ev=list[j];
if((callback&&callback!==ev.callback&&callback!==ev.callback._callback)||(context&&context!==ev.context)){events.push(ev)
}}}this._events[name]=events
}}return this
},trigger:function(name){if(!this._events){return this
}var args=slice.call(arguments,1);
if(!eventsApi(this,"trigger",name,args)){return this
}var events=this._events[name];
var allEvents=this._events.all;
if(events){triggerEvents(events,args)
}if(allEvents){triggerEvents(allEvents,arguments)
}return this
},listenTo:function(obj,name,callback){var listeners=this._listeners||(this._listeners={});
var id=obj._listenerId||(obj._listenerId=_.uniqueId("l"));
listeners[id]=obj;
obj.on(name,typeof name==="object"?this:callback,this);
return this
},stopListening:function(obj,name,callback){var listeners=this._listeners;
if(!listeners){return
}if(obj){obj.off(name,typeof name==="object"?this:callback,this);
if(!name&&!callback){delete listeners[obj._listenerId]
}}else{if(typeof name==="object"){callback=this
}for(var id in listeners){listeners[id].off(name,callback,this)
}this._listeners={}
}return this
}};
Events.bind=Events.on;
Events.unbind=Events.off;
_.extend(Backbone,Events);
var Model=Backbone.Model=function(attributes,options){var defaults;
var attrs=attributes||{};
this.cid=_.uniqueId("c");
this.attributes={};
if(options&&options.collection){this.collection=options.collection
}if(options&&options.parse){attrs=this.parse(attrs,options)||{}
}if(defaults=_.result(this,"defaults")){attrs=_.defaults({},attrs,defaults)
}this.set(attrs,options);
this.changed={};
this.initialize.apply(this,arguments)
};
_.extend(Model.prototype,Events,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(options){return _.clone(this.attributes)
},sync:function(){return Backbone.sync.apply(this,arguments)
},get:function(attr){return this.attributes[attr]
},escape:function(attr){return _.escape(this.get(attr))
},has:function(attr){return this.get(attr)!=null
},set:function(key,val,options){var attr,attrs,unset,changes,silent,changing,prev,current;
if(key==null){return this
}if(typeof key==="object"){attrs=key;
options=val
}else{(attrs={})[key]=val
}options||(options={});
if(!this._validate(attrs,options)){return false
}unset=options.unset;
silent=options.silent;
changes=[];
changing=this._changing;
this._changing=true;
if(!changing){this._previousAttributes=_.clone(this.attributes);
this.changed={}
}current=this.attributes,prev=this._previousAttributes;
if(this.idAttribute in attrs){this.id=attrs[this.idAttribute]
}for(attr in attrs){val=attrs[attr];
if(!_.isEqual(current[attr],val)){changes.push(attr)
}if(!_.isEqual(prev[attr],val)){this.changed[attr]=val
}else{delete this.changed[attr]
}unset?delete current[attr]:current[attr]=val
}if(!silent){if(changes.length){this._pending=true
}for(var i=0,l=changes.length;
i<l;
i++){this.trigger("change:"+changes[i],this,current[changes[i]],options)
}}if(changing){return this
}if(!silent){while(this._pending){this._pending=false;
this.trigger("change",this,options)
}}this._pending=false;
this._changing=false;
return this
},unset:function(attr,options){return this.set(attr,void 0,_.extend({},options,{unset:true}))
},clear:function(options){var attrs={};
for(var key in this.attributes){attrs[key]=void 0
}return this.set(attrs,_.extend({},options,{unset:true}))
},hasChanged:function(attr){if(attr==null){return !_.isEmpty(this.changed)
}return _.has(this.changed,attr)
},changedAttributes:function(diff){if(!diff){return this.hasChanged()?_.clone(this.changed):false
}var val,changed=false;
var old=this._changing?this._previousAttributes:this.attributes;
for(var attr in diff){if(_.isEqual(old[attr],(val=diff[attr]))){continue
}(changed||(changed={}))[attr]=val
}return changed
},previous:function(attr){if(attr==null||!this._previousAttributes){return null
}return this._previousAttributes[attr]
},previousAttributes:function(){return _.clone(this._previousAttributes)
},fetch:function(options){options=options?_.clone(options):{};
if(options.parse===void 0){options.parse=true
}var success=options.success;
options.success=function(model,resp,options){if(!model.set(model.parse(resp,options),options)){return false
}if(success){success(model,resp,options)
}};
return this.sync("read",this,options)
},save:function(key,val,options){var attrs,success,method,xhr,attributes=this.attributes;
if(key==null||typeof key==="object"){attrs=key;
options=val
}else{(attrs={})[key]=val
}if(attrs&&(!options||!options.wait)&&!this.set(attrs,options)){return false
}options=_.extend({validate:true},options);
if(!this._validate(attrs,options)){return false
}if(attrs&&options.wait){this.attributes=_.extend({},attributes,attrs)
}if(options.parse===void 0){options.parse=true
}success=options.success;
options.success=function(model,resp,options){model.attributes=attributes;
var serverAttrs=model.parse(resp,options);
if(options.wait){serverAttrs=_.extend(attrs||{},serverAttrs)
}if(_.isObject(serverAttrs)&&!model.set(serverAttrs,options)){return false
}if(success){success(model,resp,options)
}};
method=this.isNew()?"create":(options.patch?"patch":"update");
if(method==="patch"){options.attrs=attrs
}xhr=this.sync(method,this,options);
if(attrs&&options.wait){this.attributes=attributes
}return xhr
},destroy:function(options){options=options?_.clone(options):{};
var model=this;
var success=options.success;
var destroy=function(){model.trigger("destroy",model,model.collection,options)
};
options.success=function(model,resp,options){if(options.wait||model.isNew()){destroy()
}if(success){success(model,resp,options)
}};
if(this.isNew()){options.success(this,null,options);
return false
}var xhr=this.sync("delete",this,options);
if(!options.wait){destroy()
}return xhr
},url:function(){var base=_.result(this,"urlRoot")||_.result(this.collection,"url")||urlError();
if(this.isNew()){return base
}return base+(base.charAt(base.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(resp,options){return resp
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(options){return !this.validate||!this.validate(this.attributes,options)
},_validate:function(attrs,options){if(!options.validate||!this.validate){return true
}attrs=_.extend({},this.attributes,attrs);
var error=this.validationError=this.validate(attrs,options)||null;
if(!error){return true
}this.trigger("invalid",this,error,options||{});
return false
}});
var Collection=Backbone.Collection=function(models,options){options||(options={});
if(options.model){this.model=options.model
}if(options.comparator!==void 0){this.comparator=options.comparator
}this.models=[];
this._reset();
this.initialize.apply(this,arguments);
if(models){this.reset(models,_.extend({silent:true},options))
}};
_.extend(Collection.prototype,Events,{model:Model,initialize:function(){},toJSON:function(options){return this.map(function(model){return model.toJSON(options)
})
},sync:function(){return Backbone.sync.apply(this,arguments)
},add:function(models,options){models=_.isArray(models)?models.slice():[models];
options||(options={});
var i,l,model,attrs,existing,doSort,add,at,sort,sortAttr;
add=[];
at=options.at;
sort=this.comparator&&(at==null)&&options.sort!=false;
sortAttr=_.isString(this.comparator)?this.comparator:null;
for(i=0,l=models.length;
i<l;
i++){if(!(model=this._prepareModel(attrs=models[i],options))){this.trigger("invalid",this,attrs,options);
continue
}if(existing=this.get(model)){if(options.merge){existing.set(attrs===model?model.attributes:attrs,options);
if(sort&&!doSort&&existing.hasChanged(sortAttr)){doSort=true
}}continue
}add.push(model);
model.on("all",this._onModelEvent,this);
this._byId[model.cid]=model;
if(model.id!=null){this._byId[model.id]=model
}}if(add.length){if(sort){doSort=true
}this.length+=add.length;
if(at!=null){splice.apply(this.models,[at,0].concat(add))
}else{push.apply(this.models,add)
}}if(doSort){this.sort({silent:true})
}if(options.silent){return this
}for(i=0,l=add.length;
i<l;
i++){(model=add[i]).trigger("add",model,this,options)
}if(doSort){this.trigger("sort",this,options)
}return this
},remove:function(models,options){models=_.isArray(models)?models.slice():[models];
options||(options={});
var i,l,index,model;
for(i=0,l=models.length;
i<l;
i++){model=this.get(models[i]);
if(!model){continue
}delete this._byId[model.id];
delete this._byId[model.cid];
index=this.indexOf(model);
this.models.splice(index,1);
this.length--;
if(!options.silent){options.index=index;
model.trigger("remove",model,this,options)
}this._removeReference(model)
}return this
},push:function(model,options){model=this._prepareModel(model,options);
this.add(model,_.extend({at:this.length},options));
return model
},pop:function(options){var model=this.at(this.length-1);
this.remove(model,options);
return model
},unshift:function(model,options){model=this._prepareModel(model,options);
this.add(model,_.extend({at:0},options));
return model
},shift:function(options){var model=this.at(0);
this.remove(model,options);
return model
},slice:function(begin,end){return this.models.slice(begin,end)
},get:function(obj){if(obj==null){return void 0
}this._idAttr||(this._idAttr=this.model.prototype.idAttribute);
return this._byId[obj.id||obj.cid||obj[this._idAttr]||obj]
},at:function(index){return this.models[index]
},where:function(attrs){if(_.isEmpty(attrs)){return[]
}return this.filter(function(model){for(var key in attrs){if(attrs[key]!==model.get(key)){return false
}}return true
})
},sort:function(options){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}options||(options={});
if(_.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(_.bind(this.comparator,this))
}if(!options.silent){this.trigger("sort",this,options)
}return this
},pluck:function(attr){return _.invoke(this.models,"get",attr)
},update:function(models,options){options=_.extend({add:true,merge:true,remove:true},options);
if(options.parse){models=this.parse(models,options)
}var model,i,l,existing;
var add=[],remove=[],modelMap={};
if(!_.isArray(models)){models=models?[models]:[]
}if(options.add&&!options.remove){return this.add(models,options)
}for(i=0,l=models.length;
i<l;
i++){model=models[i];
existing=this.get(model);
if(options.remove&&existing){modelMap[existing.cid]=true
}if((options.add&&!existing)||(options.merge&&existing)){add.push(model)
}}if(options.remove){for(i=0,l=this.models.length;
i<l;
i++){model=this.models[i];
if(!modelMap[model.cid]){remove.push(model)
}}}if(remove.length){this.remove(remove,options)
}if(add.length){this.add(add,options)
}return this
},reset:function(models,options){options||(options={});
if(options.parse){models=this.parse(models,options)
}for(var i=0,l=this.models.length;
i<l;
i++){this._removeReference(this.models[i])
}options.previousModels=this.models.slice();
this._reset();
if(models){this.add(models,_.extend({silent:true},options))
}if(!options.silent){this.trigger("reset",this,options)
}return this
},fetch:function(options){options=options?_.clone(options):{};
if(options.parse===void 0){options.parse=true
}var success=options.success;
options.success=function(collection,resp,options){var method=options.update?"update":"reset";
collection[method](resp,options);
if(success){success(collection,resp,options)
}};
return this.sync("read",this,options)
},create:function(model,options){options=options?_.clone(options):{};
if(!(model=this._prepareModel(model,options))){return false
}if(!options.wait){this.add(model,options)
}var collection=this;
var success=options.success;
options.success=function(model,resp,options){if(options.wait){collection.add(model,options)
}if(success){success(model,resp,options)
}};
model.save(null,options);
return model
},parse:function(resp,options){return resp
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models.length=0;
this._byId={}
},_prepareModel:function(attrs,options){if(attrs instanceof Model){if(!attrs.collection){attrs.collection=this
}return attrs
}options||(options={});
options.collection=this;
var model=new this.model(attrs,options);
if(!model._validate(attrs,options)){return false
}return model
},_removeReference:function(model){if(this===model.collection){delete model.collection
}model.off("all",this._onModelEvent,this)
},_onModelEvent:function(event,model,collection,options){if((event==="add"||event==="remove")&&collection!==this){return
}if(event==="destroy"){this.remove(model,options)
}if(model&&event==="change:"+model.idAttribute){delete this._byId[model.previous(model.idAttribute)];
if(model.id!=null){this._byId[model.id]=model
}}this.trigger.apply(this,arguments)
},sortedIndex:function(model,value,context){value||(value=this.comparator);
var iterator=_.isFunction(value)?value:function(model){return model.get(value)
};
return _.sortedIndex(this.models,model,iterator,context)
}});
var methods=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
_.each(methods,function(method){Collection.prototype[method]=function(){var args=slice.call(arguments);
args.unshift(this.models);
return _[method].apply(_,args)
}
});
var attributeMethods=["groupBy","countBy","sortBy"];
_.each(attributeMethods,function(method){Collection.prototype[method]=function(value,context){var iterator=_.isFunction(value)?value:function(model){return model.get(value)
};
return _[method](this.models,iterator,context)
}
});
var Router=Backbone.Router=function(options){options||(options={});
if(options.routes){this.routes=options.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var optionalParam=/\((.*?)\)/g;
var namedParam=/(\(\?)?:\w+/g;
var splatParam=/\*\w+/g;
var escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g;
_.extend(Router.prototype,Events,{initialize:function(){},route:function(route,name,callback){if(!_.isRegExp(route)){route=this._routeToRegExp(route)
}if(!callback){callback=this[name]
}Backbone.history.route(route,_.bind(function(fragment){var args=this._extractParameters(route,fragment);
callback&&callback.apply(this,args);
this.trigger.apply(this,["route:"+name].concat(args));
this.trigger("route",name,args);
Backbone.history.trigger("route",this,name,args)
},this));
return this
},navigate:function(fragment,options){Backbone.history.navigate(fragment,options);
return this
},_bindRoutes:function(){if(!this.routes){return
}var route,routes=_.keys(this.routes);
while((route=routes.pop())!=null){this.route(route,this.routes[route])
}},_routeToRegExp:function(route){route=route.replace(escapeRegExp,"\\$&").replace(optionalParam,"(?:$1)?").replace(namedParam,function(match,optional){return optional?match:"([^/]+)"
}).replace(splatParam,"(.*?)");
return new RegExp("^"+route+"$")
},_extractParameters:function(route,fragment){return route.exec(fragment).slice(1)
}});
var History=Backbone.History=function(){this.handlers=[];
_.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var routeStripper=/^[#\/]|\s+$/g;
var rootStripper=/^\/+|\/+$/g;
var isExplorer=/msie [\w.]+/;
var trailingSlash=/\/$/;
History.started=false;
_.extend(History.prototype,Events,{interval:50,getHash:function(window){var match=(window||this).location.href.match(/#(.*)$/);
return match?match[1]:""
},getFragment:function(fragment,forcePushState){if(fragment==null){if(this._hasPushState||!this._wantsHashChange||forcePushState){fragment=this.location.pathname;
var root=this.root.replace(trailingSlash,"");
if(!fragment.indexOf(root)){fragment=fragment.substr(root.length)
}}else{fragment=this.getHash()
}}return fragment.replace(routeStripper,"")
},start:function(options){if(History.started){throw new Error("Backbone.history has already been started")
}History.started=true;
this.options=_.extend({},{root:"/"},this.options,options);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var fragment=this.getFragment();
var docMode=document.documentMode;
var oldIE=(isExplorer.exec(navigator.userAgent.toLowerCase())&&(!docMode||docMode<=7));
this.root=("/"+this.root+"/").replace(rootStripper,"/");
if(oldIE&&this._wantsHashChange){this.iframe=Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(fragment)
}if(this._hasPushState){Backbone.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!oldIE){Backbone.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=fragment;
var loc=this.location;
var atRoot=loc.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!atRoot){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&atRoot&&loc.hash){this.fragment=this.getHash().replace(routeStripper,"");
this.history.replaceState({},document.title,this.root+this.fragment+loc.search)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){Backbone.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
History.started=false
},route:function(route,callback){this.handlers.unshift({route:route,callback:callback})
},checkUrl:function(e){var current=this.getFragment();
if(current===this.fragment&&this.iframe){current=this.getFragment(this.getHash(this.iframe))
}if(current===this.fragment){return false
}if(this.iframe){this.navigate(current)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(fragmentOverride){var fragment=this.fragment=this.getFragment(fragmentOverride);
var matched=_.any(this.handlers,function(handler){if(handler.route.test(fragment)){handler.callback(fragment);
return true
}});
return matched
},navigate:function(fragment,options){if(!History.started){return false
}if(!options||options===true){options={trigger:options}
}fragment=this.getFragment(fragment||"");
if(this.fragment===fragment){return
}this.fragment=fragment;
var url=this.root+fragment;
if(this._hasPushState){this.history[options.replace?"replaceState":"pushState"]({},document.title,url)
}else{if(this._wantsHashChange){this._updateHash(this.location,fragment,options.replace);
if(this.iframe&&(fragment!==this.getFragment(this.getHash(this.iframe)))){if(!options.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,fragment,options.replace)
}}else{return this.location.assign(url)
}}if(options.trigger){this.loadUrl(fragment)
}},_updateHash:function(location,fragment,replace){if(replace){var href=location.href.replace(/(javascript:|#).*$/,"");
location.replace(href+"#"+fragment)
}else{location.hash="#"+fragment
}}});
Backbone.history=new History;
var View=Backbone.View=function(options){this.cid=_.uniqueId("view");
this._configure(options||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var delegateEventSplitter=/^(\S+)\s*(.*)$/;
var viewOptions=["model","collection","el","id","attributes","className","tagName","events"];
_.extend(View.prototype,Events,{tagName:"div",$:function(selector){return this.$el.find(selector)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(element,delegate){if(this.$el){this.undelegateEvents()
}this.$el=element instanceof Backbone.$?element:Backbone.$(element);
this.el=this.$el[0];
if(delegate!==false){this.delegateEvents()
}return this
},delegateEvents:function(events){if(!(events||(events=_.result(this,"events")))){return
}this.undelegateEvents();
for(var key in events){var method=events[key];
if(!_.isFunction(method)){method=this[events[key]]
}if(!method){throw new Error('Method "'+events[key]+'" does not exist')
}var match=key.match(delegateEventSplitter);
var eventName=match[1],selector=match[2];
method=_.bind(method,this);
eventName+=".delegateEvents"+this.cid;
if(selector===""){this.$el.on(eventName,method)
}else{this.$el.on(eventName,selector,method)
}}},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
},_configure:function(options){if(this.options){options=_.extend({},_.result(this,"options"),options)
}_.extend(this,_.pick(options,viewOptions));
this.options=options
},_ensureElement:function(){if(!this.el){var attrs=_.extend({},_.result(this,"attributes"));
if(this.id){attrs.id=_.result(this,"id")
}if(this.className){attrs["class"]=_.result(this,"className")
}var $el=Backbone.$("<"+_.result(this,"tagName")+">").attr(attrs);
this.setElement($el,false)
}else{this.setElement(_.result(this,"el"),false)
}}});
var methodMap={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
Backbone.sync=function(method,model,options){var type=methodMap[method];
_.defaults(options||(options={}),{emulateHTTP:Backbone.emulateHTTP,emulateJSON:Backbone.emulateJSON});
var params={type:type,dataType:"json"};
if(!options.url){params.url=_.result(model,"url")||urlError()
}if(options.data==null&&model&&(method==="create"||method==="update"||method==="patch")){params.contentType="application/json";
params.data=JSON.stringify(options.attrs||model.toJSON(options))
}if(options.emulateJSON){params.contentType="application/x-www-form-urlencoded";
params.data=params.data?{model:params.data}:{}
}if(options.emulateHTTP&&(type==="PUT"||type==="DELETE"||type==="PATCH")){params.type="POST";
if(options.emulateJSON){params.data._method=type
}var beforeSend=options.beforeSend;
options.beforeSend=function(xhr){xhr.setRequestHeader("X-HTTP-Method-Override",type);
if(beforeSend){return beforeSend.apply(this,arguments)
}}
}if(params.type!=="GET"&&!options.emulateJSON){params.processData=false
}var success=options.success;
options.success=function(resp){if(success){success(model,resp,options)
}model.trigger("sync",model,resp,options)
};
var error=options.error;
options.error=function(xhr){if(error){error(model,xhr,options)
}model.trigger("error",model,xhr,options)
};
var xhr=options.xhr=Backbone.ajax(_.extend(params,options));
model.trigger("request",model,xhr,options);
return xhr
};
Backbone.ajax=function(){return Backbone.$.ajax.apply(Backbone.$,arguments)
};
var extend=function(protoProps,staticProps){var parent=this;
var child;
if(protoProps&&_.has(protoProps,"constructor")){child=protoProps.constructor
}else{child=function(){return parent.apply(this,arguments)
}
}_.extend(child,parent,staticProps);
var Surrogate=function(){this.constructor=child
};
Surrogate.prototype=parent.prototype;
child.prototype=new Surrogate;
if(protoProps){_.extend(child.prototype,protoProps)
}child.__super__=parent.prototype;
return child
};
Model.extend=Collection.extend=Router.extend=View.extend=History.extend=extend;
var urlError=function(){throw new Error('A "url" property or function must be specified')
}
}).call(this);
(function(){var escapeHtmlForXss,_ref,_this=this,__slice=[].slice,__hasProp={}.hasOwnProperty;
if((_ref=window.AIR)==null){window.AIR={}
}escapeHtmlForXss=function(str){return(str||"").replace(/</g,"\\u003c").replace(/>/g,"\\u003e")
};
AIR.MustacheHelpers={csrf_token_input:function(){var token;
token=MlsChinese.Utils.readCookie("_csrf_token");
return new Handlebars.SafeString('<input name="authenticity_token" type="hidden" value="'+token+'">')
},breakLines:function(text){text=escapeHtmlForXss(text).replace(/\r?\n|\r/g,"<br />");
return new Handlebars.SafeString(text)
},t:function(key,block){var tFunc;
tFunc=window.t||(typeof I18n!=="undefined"&&I18n!==null?I18n.t:void 0);
if(tFunc){if(arguments.length===1){if(key.fn){return tFunc(key.fn())
}else{return tFunc(key())
}}else{return new Handlebars.SafeString(tFunc(key,block.hash))
}}},join:function(){var args,delimiter,items;
args=1<=arguments.length?__slice.call(arguments,0):[];
items=args[0];
if(args.length===3){delimiter=args[1]
}if(delimiter==null){delimiter=", "
}if(items!=null){return items.join(delimiter)
}},paginate:function(block){var data,key,makeUrl,p,pages,replacements,url_template,value;
data=block.hash;
url_template=data.url_template;
delete data.url_template;
replacements=(function(){var _results;
_results=[];
for(key in data){if(!__hasProp.call(data,key)){continue
}value=data[key];
_results.push([key,new RegExp("{{"+key+"}}","g"),value])
}return _results
})();
makeUrl=function(page,data){var rep,url,_i,_len;
url=url_template+"";
for(_i=0,_len=replacements.length;
_i<_len;
_i++){rep=replacements[_i];
value=rep[0]==="page"?page:rep[2];
url=url.replace(rep[1],value)
}return url
};
pages=(function(){var _i,_ref1,_results;
_results=[];
for(p=_i=1,_ref1=data.total_pages;
1<=_ref1?_i<=_ref1:_i>=_ref1;
p=1<=_ref1?++_i:--_i){_results.push({text:p,current:p===data.page,url:makeUrl(p,data)})
}return _results
})();
if(data.page!==1){pages.unshift({text:"&larr;",current:false,url:makeUrl(data.page-1,data)})
}if(data.page!==data.total_pages){pages.push({text:"&rarr;",current:false,url:makeUrl(data.page+1,data)})
}data.pages=pages;
return new Handlebars.SafeString(JST["helpers/pagination_view"](data))
},symbolForCurrency:function(currency){return new Handlebars.SafeString(I18n.symbolForCurrency(currency))
},image_path:function(relative_path){if((typeof ImagePaths!=="undefined"&&ImagePaths!==null)&&ImagePaths[relative_path]){return ImagePaths[relative_path]
}else{return"missing_image_path_for-"+relative_path
}},price_string:function(price,block){var currency,options;
options=block.hash;
currency=options.currency;
delete options.currency;
if((typeof I18n!=="undefined"&&I18n!==null?I18n.priceString:void 0)!=null){return I18n.priceString(price,currency,options)
}else{return price
}},t_s:function(prefix,key){return t(""+prefix+"."+key)
},isAvailabilityActive:function(availability,option){if(!availability){return""
}if(availability===option){return"active"
}else{return"inactive"
}},nightsDropdown:function(nights){var i,interval,is_this_one,str,_i,_ref1;
if(nights>300){nights=300
}str="";
interval=1;
if(nights>30){interval=2
}if(nights>60){interval=5
}for(i=_i=1,_ref1=nights*0.9;
_i<=_ref1;
i=_i+=1){is_this_one="";
if(i===nights/2||i===(nights+1)/2){is_this_one="selected='selected'"
}if((i%interval)===0){str=str+"<option value='"+i+"'"+is_this_one+">"+i+" nights</option>"
}}return str
},keyValue:function(obj,block){var buffer;
buffer="";
_.each(obj,function(value,key){return buffer+=block.fn({key:key,value:value})
});
return buffer
},equal:function(a,b,block){if(a===b){return block.fn(this)
}else{return block.inverse(this)
}},contains:function(array,value,block){if(_.contains(array,value)){return block.fn(this)
}else{return block.inverse(this)
}}};
AIR.MustacheHelpers.register=function(){var callback,name,_ref1,_results;
_ref1=AIR.MustacheHelpers;
_results=[];
for(name in _ref1){callback=_ref1[name];
_results.push(typeof Handlebars!=="undefined"&&Handlebars!==null?Handlebars.registerHelper(name,callback):void 0)
}return _results
};
AIR.MustacheHelpers.register()
}).call(this);
!function($){$.fn.serializeObject=function(options){options=$.extend({},options);
var self=this,json={},push_counters={},patterns={validate:/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,key:/[a-zA-Z0-9_]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_]+$/};
this.build=function(base,key,value){base[key]=value;
return base
};
this.push_counter=function(key,i){if(push_counters[key]===undefined){push_counters[key]=0
}if(i===undefined){return push_counters[key]++
}else{if(i!==undefined&&i>push_counters[key]){return push_counters[key]=++i
}}};
$.each($(this).serializeArray(),function(){if(!patterns.validate.test(this.name)){return
}var k,keys=this.name.match(patterns.key),merge=this.value,reverse_key=this.name;
while((k=keys.pop())!==undefined){reverse_key=reverse_key.replace(new RegExp("\\["+k+"\\]$"),"");
if(k.match(patterns.push)){merge=self.build([],self.push_counter(reverse_key),merge)
}else{if(k.match(patterns.fixed)){self.push_counter(reverse_key,k);
merge=self.build([],k,merge)
}else{if(k.match(patterns.named)){merge=self.build({},k,merge)
}}}}json=$.extend(true,json,merge)
});
return json
}
}(jQuery);
(function(a,b){function q(a){this._d=a
}function r(a,b){var c=a+"";
while(c.length<b){c="0"+c
}return c
}function s(b,c,d,e){var f=typeof c=="string",g=f?{}:c,h,i,j,k;
return f&&e&&(g[c]=e),h=(g.ms||g.milliseconds||0)+(g.s||g.seconds||0)*1000+(g.m||g.minutes||0)*60000+(g.h||g.hours||0)*3600000,i=(g.d||g.days||0)+(g.w||g.weeks||0)*7,j=(g.M||g.months||0)+(g.y||g.years||0)*12,h&&b.setTime(+b+h*d),i&&b.setDate(b.getDate()+i*d),j&&(k=b.getDate(),b.setDate(1),b.setMonth(b.getMonth()+j*d),b.setDate(Math.min((new a(b.getFullYear(),b.getMonth()+1,0)).getDate(),k))),b
}function t(a){return Object.prototype.toString.call(a)==="[object Array]"
}function u(b){return new a(b[0],b[1]||0,b[2]||1,b[3]||0,b[4]||0,b[5]||0,b[6]||0)
}function v(b,d){function u(d){var e,i;
switch(d){case"M":return f+1;
case"Mo":return f+1+s(f+1);
case"MM":return r(f+1,2);
case"MMM":return c.monthsShort[f];
case"MMMM":return c.months[f];
case"D":return g;
case"Do":return g+s(g);
case"DD":return r(g,2);
case"DDD":return e=new a(h,f,g),i=new a(h,0,1),~~((e-i)/86400000+1.5);
case"DDDo":return e=u("DDD"),e+s(e);
case"DDDD":return r(u("DDD"),3);
case"d":return l;
case"do":return l+s(l);
case"ddd":return c.weekdaysShort[l];
case"dddd":return c.weekdays[l];
case"w":return e=new a(h,f,g-l+5),i=new a(e.getFullYear(),0,4),~~((e-i)/86400000/7+1.5);
case"wo":return e=u("w"),e+s(e);
case"ww":return r(u("w"),2);
case"YY":return r(h%100,2);
case"YYYY":return h;
case"a":return m>11?t.pm:t.am;
case"A":return m>11?t.PM:t.AM;
case"H":return m;
case"HH":return r(m,2);
case"h":return m%12||12;
case"hh":return r(m%12||12,2);
case"m":return n;
case"mm":return r(n,2);
case"s":return o;
case"ss":return r(o,2);
case"zz":case"z":return(b.toString().match(k)||[""])[0].replace(j,"");
case"Z":return(p>0?"+":"-")+r(~~(Math.abs(p)/60),2)+":"+r(~~(Math.abs(p)%60),2);
case"ZZ":return(p>0?"+":"-")+r(~~(10*Math.abs(p)/6),4);
case"L":case"LL":case"LLL":case"LLLL":case"LT":return v(b,c.longDateFormat[d]);
default:return d.replace(/(^\[)|(\\)|\]$/g,"")
}}var e=new q(b),f=e.month(),g=e.date(),h=e.year(),l=e.day(),m=e.hours(),n=e.minutes(),o=e.seconds(),p=e.zone(),s=c.ordinal,t=c.meridiem;
return d.replace(i,u)
}function w(b,d){function p(a,b){var d;
switch(a){case"M":case"MM":e[1]=~~b-1;
break;
case"MMM":case"MMMM":for(d=0;
d<12;
d++){if(c.monthsParse[d].test(b)){e[1]=d;
break
}}break;
case"D":case"DD":case"DDD":case"DDDD":e[2]=~~b;
break;
case"YY":b=~~b,e[0]=b+(b>70?1900:2000);
break;
case"YYYY":e[0]=~~Math.abs(b);
break;
case"a":case"A":o=b.toLowerCase()==="pm";
break;
case"H":case"HH":case"h":case"hh":e[3]=~~b;
break;
case"m":case"mm":e[4]=~~b;
break;
case"s":case"ss":e[5]=~~b;
break;
case"Z":case"ZZ":h=!0,d=b.match(n),d[1]&&(f=~~d[1]),d[2]&&(g=~~d[2]),d[0]==="-"&&(f=-f,g=-g)
}}var e=[0,0,1,0,0,0,0],f=0,g=0,h=!1,i=b.match(m),j=d.match(l),k,o;
for(k=0;
k<j.length;
k++){p(j[k],i[k])
}return o&&e[3]<12&&(e[3]+=12),o===!1&&e[3]===12&&(e[3]=0),e[3]+=f,e[4]+=g,h?new a(a.UTC.apply({},e)):u(e)
}function x(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;
for(f=0;
f<c;
f++){~~a[f]!==~~b[f]&&e++
}return e+d
}function y(a,b){var c,d=a.match(m),e=[],f=99,g,h,i;
for(g=0;
g<b.length;
g++){h=w(a,b[g]),i=x(d,v(h,b[g]).match(m)),i<f&&(f=i,c=h)
}return c
}function z(a,b,d){var e=c.relativeTime[a];
return typeof e=="function"?e(b||1,!!d,a):e.replace(/%d/i,b||1)
}function A(a,b){var c=d(Math.abs(a)/1000),e=d(c/60),f=d(e/60),g=d(f/24),h=d(g/365),i=c<45&&["s",c]||e===1&&["m"]||e<45&&["mm",e]||f===1&&["h"]||f<22&&["hh",f]||g===1&&["d"]||g<=25&&["dd",g]||g<=45&&["M"]||g<345&&["MM",d(g/30)]||h===1&&["y"]||["yy",h];
return i[2]=b,z.apply({},i)
}function B(a,b){c.fn[a]=function(a){return a!=null?(this._d["set"+b](a),this):this._d["get"+b]()
}
}var c,d=Math.round,e={},f=typeof module!="undefined",g="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),h,i=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|ZZ?|LT|LL?L?L?)/g,j=/[^A-Z]/g,k=/\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,l=/(\\)?(MM?M?M?|dd?d?d|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?|T)/g,m=/(\\)?([0-9]+|([a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|([\+\-]\d\d:?\d\d))/gi,n=/([\+\-]|\d\d)/gi,o="1.3.0",p="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|");
c=function(c,d){if(c===null){return null
}var e;
return c&&c._d instanceof a?e=new a(+c._d):d?t(d)?e=y(c,d):e=w(c,d):e=c===b?new a:c instanceof a?c:t(c)?u(c):new a(c),new q(e)
},c.version=o,c.lang=function(a,b){var d,h,i,j=[];
if(b){for(d=0;
d<12;
d++){j[d]=new RegExp("^"+b.months[d]+"|^"+b.monthsShort[d].replace(".",""),"i")
}b.monthsParse=b.monthsParse||j,e[a]=b
}if(e[a]){for(d=0;
d<g.length;
d++){h=g[d],c[h]=e[a][h]||c[h]
}}else{f&&(i=require("./lang/"+a),c.lang(a,i))
}},c.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;
return ~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"
}}),c.fn=q.prototype={clone:function(){return c(this)
},valueOf:function(){return +this._d
},"native":function(){return this._d
},toString:function(){return this._d.toString()
},toDate:function(){return this._d
},format:function(a){return v(this._d,a)
},add:function(a,b){return this._d=s(this._d,a,1,b),this
},subtract:function(a,b){return this._d=s(this._d,a,-1,b),this
},diff:function(a,b,e){var f=c(a),g=this._d-f._d,h=this.year()-f.year(),i=this.month()-f.month(),j=this.day()-f.day(),k;
return b==="months"?k=h*12+i+j/30:b==="years"?k=h+i/12:k=b==="seconds"?g/1000:b==="minutes"?g/60000:b==="hours"?g/3600000:b==="days"?g/86400000:b==="weeks"?g/604800000:b==="days"?g/3600:g,e?k:d(k)
},from:function(a,b){var d=this.diff(a),e=c.relativeTime,f=A(d,b);
return b?f:(d<=0?e.past:e.future).replace(/%s/i,f)
},fromNow:function(a){return this.from(c(),a)
},calendar:function(){var a=c(),b=c([a.year(),a.month(),a.date()]),d=this.diff(b,"days",!0),e=c.calendar,f=e.sameElse,g=d<-6?f:d<-1?e.lastWeek:d<0?e.lastDay:d<1?e.sameDay:d<2?e.nextDay:d<7?e.nextWeek:f;
return this.format(typeof g=="function"?g.apply(this):g)
},isLeapYear:function(){var a=this.year();
return a%4===0&&a%100!==0||a%400===0
},isDST:function(){return this.zone()!==c([this.year()]).zone()
},day:function(a){var b=this._d.getDay();
return a==null?b:this.add({d:a-b})
}};
for(h=0;
h<p.length;
h++){B(p[h].toLowerCase(),p[h])
}B("year","FullYear"),c.fn.zone=function(){return this._d.getTimezoneOffset()
},f&&(module.exports=c),typeof window!="undefined"&&(window.moment=c)
})(Date);
(function(){var a={months:"Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),longDateFormat:{LT:"H:mm U\\hr",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Heute um] LT",sameElse:"L",nextDay:"[Morgen um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gestern um] LT",lastWeek:"[letzten] dddd [um] LT"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:"einer Minute",mm:"%d Minuten",h:"einer Stunde",hh:"%d Stunden",d:"einem Tag",dd:"%d Tagen",M:"einem Monat",MM:"%d Monaten",y:"einem Jahr",yy:"%d Jahren"},ordinal:function(a){return"."
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("de",a)
})(),function(){var a={months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;
return ~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("en-gb",a)
}(),function(){var a={months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),weekdays:"Domingo_Lunes_Martes_MiÃ©rcoles_Jueves_Viernes_SÃ¡bado".split("_"),weekdaysShort:"Dom._Lun._Mar._MiÃ©._Jue._Vie._SÃ¡b.".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:function(){return"[hoy a la"+(this.hours()!==1?"s":"")+"] LT"
},nextDay:function(){return"[maÃ±ana a la"+(this.hours()!==1?"s":"")+"] LT"
},nextWeek:function(){return"dddd [a la"+(this.hours()!==1?"s":"")+"] LT"
},lastDay:function(){return"[ayer a la"+(this.hours()!==1?"s":"")+"] LT"
},lastWeek:function(){return"[el] dddd [pasado a la"+(this.hours()!==1?"s":"")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un dÃ­a",dd:"%d dÃ­as",M:"un mes",MM:"%d meses",y:"un aÃ±o",yy:"%d aÃ±os"},ordinal:function(a){return"Âº"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("es",a)
}(),function(){var a={months:"Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Octubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"),weekdaysShort:"Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:function(){return"[hoxe "+(this.hours()!==1?"Ã¡s":"a")+"] LT"
},nextDay:function(){return"[maÃ±Ã¡ "+(this.hours()!==1?"Ã¡s":"a")+"] LT"
},nextWeek:function(){return"dddd ["+(this.hours()!==1?"Ã¡s":"a")+"] LT"
},lastDay:function(){return"[onte "+(this.hours()!==1?"Ã¡":"a")+"] LT"
},lastWeek:function(){return"[o] dddd [pasado "+(this.hours()!==1?"Ã¡s":"")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"fai %s",s:"uns segundo",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un dÃ­a",dd:"%d dÃ­as",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinal:function(a){return"Âº"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("gl",a)
}(),function(){var a={months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"YYYYko MMMMren D[a]",LLL:"YYYYko MMMMren D[a] LT",LLLL:"dddd, YYYYko MMMMren D[a] LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinal:function(a){return"."
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("eu",a)
}(),function(){var a={months:"janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),monthsShort:"janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Ajourd'hui Ã ] LT",nextDay:"[Demain Ã ] LT",nextWeek:"dddd [Ã ] LT",lastDay:"[Hier Ã ] LT",lastWeek:"dddd [denier Ã ] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"une annÃ©e",yy:"%d annÃ©es"},ordinal:function(a){return a===1?"er":"Ã¨me"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("fr",a)
}(),function(){var a={months:"Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settebre_Ottobre_Novembre_Dicembre".split("_"),monthsShort:"Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays:"Domenica_Lunedi_Martedi_Mercoledi_Giovedi_Venerdi_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:"[lo scorso] dddd [alle] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s fa",s:"secondi",m:"un minuto",mm:"%d minuti",h:"un ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(){return"Âº"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("it",a)
}(),function(){var a={months:"1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),monthsShort:"1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),weekdays:"ì�¼ìš”ì�¼_ì›”ìš”ì�¼_í™”ìš”ì�¼_ìˆ˜ìš”ì�¼_ëª©ìš”ì�¼_ê¸ˆìš”ì�¼_í† ìš”ì�¼".split("_"),weekdaysShort:"ì�¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),longDateFormat:{LT:"A hì‹œ mmë¶„",L:"YYYY.MM.DD",LL:"YYYYë…„ MMMM Dì�¼",LLL:"YYYYë…„ MMMM Dì�¼ LT",LLLL:"YYYYë…„ MMMM Dì�¼ dddd LT"},meridiem:{AM:"ì˜¤ì „",am:"ì˜¤ì „",PM:"ì˜¤í›„",pm:"ì˜¤í›„"},calendar:{sameDay:"ì˜¤ëŠ˜ LT",nextDay:"ë‚´ì�¼ LT",nextWeek:"dddd LT",lastDay:"ì–´ì œ LT",lastWeek:"ì§€ë‚œì£¼ dddd LT",sameElse:"L"},relativeTime:{future:"%s í›„",past:"%s ì „",s:"ëª‡ì´ˆ",ss:"%dì´ˆ",m:"ì�¼ë¶„",mm:"%dë¶„",h:"í•œì‹œê°„",hh:"%dì‹œê°„",d:"í•˜ë£¨",dd:"%dì�¼",M:"í•œë‹¬",MM:"%dë‹¬",y:"ì�¼ë…„",yy:"%dë…„"},ordinal:function(a){return"ì�¼"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("kr",a)
}(),function(){var a={months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),weekdaysShort:"sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[I dag klokken] LT",nextDay:"[I morgen klokken] LT",nextWeek:"dddd [klokken] LT",lastDay:"[I gÃ¥r klokken] LT",lastWeek:"[Forrige] dddd [klokken] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en mÃ¥ned",MM:"%d mÃ¥neder",y:"ett Ã¥r",yy:"%d Ã¥r"},ordinal:function(a){return"."
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("nb",a)
}(),function(){var a={months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._mei._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Vandaag om] LT",nextDay:"[Morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"Ã©Ã©n minuut",mm:"%d minuten",h:"Ã©Ã©n uur",hh:"%d uur",d:"Ã©Ã©n dag",dd:"%d dagen",M:"Ã©Ã©n maand",MM:"%d maanden",y:"Ã©Ã©n jaar",yy:"%d jaar"},ordinal:function(a){return a===1||a===8||a>=20?"ste":"de"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("nl",a)
}(),function(){var a=function(a){return a%10<5&&a%10>1&&~~(a/10)!==1
},b=function(b,c,d){var e=b+" ";
switch(d){case"m":return c?"minuta":"minutÄ™";
case"mm":return e+(a(b)?"minuty":"minut");
case"h":return c?"godzina":"godzinÄ™";
case"hh":return e+(a(b)?"godziny":"godzin");
case"MM":return e+(a(b)?"miesiÄ…ce":"miesiÄ™cy");
case"yy":return e+(a(b)?"lata":"lat")
}},c={months:"styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),weekdays:"niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),weekdaysShort:"nie_pon_wt_Å›r_czw_pt_sb".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[DziÅ› o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:"[W zeszÅ‚y/Å‚Ä…] dddd [o] LT",sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:b,mm:b,h:b,hh:b,d:"1 dzieÅ„",dd:"%d dni",M:"miesiÄ…c",MM:b,y:"rok",yy:b},ordinal:function(a){return"."
}};
typeof module!="undefined"&&(module.exports=c),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("pl",c)
}(),function(){var a={months:"Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D \\de MMMM \\de YYYY",LLL:"D \\de MMMM \\de YYYY LT",LLLL:"dddd, D \\de MMMM \\de YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Hoje Ã s] LT",nextDay:"[AmanhÃ£ Ã s] LT",nextWeek:"dddd [Ã s] LT",lastDay:"[Ontem Ã s] LT",lastWeek:function(){return this.day()===0||this.day()===6?"[Ãšltimo] dddd [Ã s] LT":"[Ãšltima] dddd [Ã s] LT"
},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrÃ¡s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mÃªs",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinal:function(a){return"Âº"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("pt",a)
}(),function(){var a={months:"Ñ�Ð½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑ�Ñ‚_Ñ�ÐµÐ½Ñ‚Ñ�Ð±Ñ€ÑŒ_Ð¾ÐºÑ‚Ñ�Ð±Ñ€ÑŒ_Ð½Ð¾Ñ�Ð±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),monthsShort:"Ñ�Ð½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_Ñ�ÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ�_Ð´ÐµÐº".split("_"),weekdays:"Ð²Ð¾Ñ�ÐºÑ€ÐµÑ�ÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_Ñ�Ñ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿Ñ�Ñ‚Ð½Ð¸Ñ†Ð°_Ñ�ÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),weekdaysShort:"Ð²Ñ�Ðº_Ð¿Ð½Ð´_Ð²Ñ‚Ñ€_Ñ�Ñ€Ð´_Ñ‡Ñ‚Ð²_Ð¿Ñ‚Ð½_Ñ�ÑƒÐ±".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ� Ð²] LT",nextDay:"[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",lastDay:"[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",nextWeek:function(){return this.day()===1?"[Ð’Ð¾] dddd [Ð²] LT":"[Ð’] dddd [Ð²] LT"
},lastWeek:function(){switch(this.day()){case 0:case 1:case 3:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
case 6:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
default:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
}},sameElse:"L"},relativeTime:{future:"Ñ‡ÐµÑ€ÐµÐ· %s",past:"%s Ð½Ð°Ð·Ð°Ð´",s:"Ð½ÐµÑ�ÐºÐ¾Ð»ÑŒÐºÐ¾ Ñ�ÐµÐºÑƒÐ½Ð´",m:"Ð¼Ð¸Ð½ÑƒÑ‚",mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚",h:"Ñ‡Ð°Ñ�Ð°",hh:"%d Ñ‡Ð°Ñ�Ð¾Ð²",d:"1 Ð´ÐµÐ½ÑŒ",dd:"%d Ð´Ð½ÐµÐ¹",M:"Ð¼ÐµÑ�Ñ�Ñ†",MM:"%d Ð¼ÐµÑ�Ñ�Ñ†ÐµÐ²",y:"Ð³Ð¾Ð´",yy:"%d Ð»ÐµÑ‚"},ordinal:function(a){return"."
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("ru",a)
}(),function(){var a={months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),weekdaysShort:"sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Idag klockan] LT",nextDay:"[Imorgon klockan] LT",lastDay:"[IgÃ¥r klockan] LT",nextWeek:"dddd [klockan] LT",lastWeek:"[FÃ¶rra] dddd [en klockan] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"fÃ¶r %s sen",s:"nÃ¥gra sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en mÃ¥nad",MM:"%d mÃ¥nader",y:"ett Ã¥r",yy:"%d Ã¥r"},ordinal:function(a){var b=a%10;
return ~~(a%100/10)===1?"e":b===1?"a":b===2?"a":b===3?"e":"e"
}};
typeof module!="undefined"&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("sv",a)
}();
(function(a){a.fn.zclip=function(c){if(typeof c=="object"&&!c.length){var b=a.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:true,setHandCursor:true,setCSSEffects:true},c);
return this.each(function(){var e=a(this);
if(e.is(":visible")&&(typeof b.copy=="string"||a.isFunction(b.copy))){ZeroClipboard.setMoviePath(b.path);
var d=new ZeroClipboard.Client();
if(a.isFunction(b.copy)){e.bind("zClip_copy",b.copy)
}if(a.isFunction(b.beforeCopy)){e.bind("zClip_beforeCopy",b.beforeCopy)
}if(a.isFunction(b.afterCopy)){e.bind("zClip_afterCopy",b.afterCopy)
}d.setHandCursor(b.setHandCursor);
d.setCSSEffects(b.setCSSEffects);
d.addEventListener("mouseOver",function(f){e.trigger("mouseenter")
});
d.addEventListener("mouseOut",function(f){e.trigger("mouseleave")
});
d.addEventListener("mouseDown",function(f){e.trigger("mousedown");
if(!a.isFunction(b.copy)){d.setText(b.copy)
}else{d.setText(e.triggerHandler("zClip_copy"))
}if(a.isFunction(b.beforeCopy)){e.trigger("zClip_beforeCopy")
}});
d.addEventListener("complete",function(f,g){if(a.isFunction(b.afterCopy)){e.trigger("zClip_afterCopy")
}else{if(g.length>500){g=g.substr(0,500)+"...\n\n("+(g.length-500)+" characters not shown)"
}e.removeClass("hover");
alert("Copied text to clipboard:\n\n "+g)
}if(b.clickAfter){e.trigger("click")
}});
d.glue(e[0],e.parent()[0]);
a(window).bind("load resize",function(){d.reposition()
})
}})
}else{if(typeof c=="string"){return this.each(function(){var f=a(this);
c=c.toLowerCase();
var e=f.data("zclipId");
var d=a("#"+e+".zclip");
if(c=="remove"){d.remove();
f.removeClass("active hover")
}else{if(c=="hide"){d.hide();
f.removeClass("active hover")
}else{if(c=="show"){d.show()
}}}})
}}}
})(jQuery);
var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){if(typeof(a)=="string"){a=document.getElementById(a)
}if(!a.addClass){a.hide=function(){this.style.display="none"
};
a.show=function(){this.style.display=""
};
a.addClass=function(b){this.removeClass(b);
this.className+=" "+b
};
a.removeClass=function(d){var e=this.className.split(/\s+/);
var b=-1;
for(var c=0;
c<e.length;
c++){if(e[c]==d){b=c;
c=e.length
}}if(b>-1){e.splice(b,1);
this.className=e.join(" ")
}return this
};
a.hasClass=function(b){return !!this.className.match(new RegExp("\\s*"+b+"\\s*"))
}
}return a
},setMoviePath:function(a){this.moviePath=a
},dispatch:function(d,b,c){var a=this.clients[d];
if(a){a.receiveEvent(b,c)
}},register:function(b,a){this.clients[b]=a
},getDOMObjectPosition:function(c,a){var b={left:0,top:0,width:c.width?c.width:c.offsetWidth,height:c.height?c.height:c.offsetHeight};
if(c&&(c!=a)){b.left+=c.offsetLeft;
b.top+=c.offsetTop
}return b
},Client:function(a){this.handlers={};
this.id=ZeroClipboard.nextId++;
this.movieId="ZeroClipboardMovie_"+this.id;
ZeroClipboard.register(this.id,this);
if(a){this.glue(a)
}}};
ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(d,b,e){this.domElement=ZeroClipboard.$(d);
var f=99;
if(this.domElement.style.zIndex){f=parseInt(this.domElement.style.zIndex,10)+1
}if(typeof(b)=="string"){b=ZeroClipboard.$(b)
}else{if(typeof(b)=="undefined"){b=document.getElementsByTagName("body")[0]
}}var c=ZeroClipboard.getDOMObjectPosition(this.domElement,b);
this.div=document.createElement("div");
this.div.className="zclip";
this.div.id="zclip-"+this.movieId;
$(this.domElement).data("zclipId","zclip-"+this.movieId);
var a=this.div.style;
a.position="absolute";
a.left=""+c.left+"px";
a.top=""+c.top+"px";
a.width=""+c.width+"px";
a.height=""+c.height+"px";
a.zIndex=f;
if(typeof(e)=="object"){for(addedStyle in e){a[addedStyle]=e[addedStyle]
}}b.appendChild(this.div);
this.div.innerHTML=this.getHTML(c.width,c.height)
},getHTML:function(d,a){var c="";
var b="id="+this.id+"&width="+d+"&height="+a;
if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";
c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+d+'" height="'+a+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+b+'"/><param name="wmode" value="transparent"/></object>'
}else{c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+d+'" height="'+a+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+b+'" wmode="transparent" />'
}return c
},hide:function(){if(this.div){this.div.style.left="-2000px"
}},show:function(){this.reposition()
},destroy:function(){if(this.domElement&&this.div){this.hide();
this.div.innerHTML="";
var a=document.getElementsByTagName("body")[0];
try{a.removeChild(this.div)
}catch(b){}this.domElement=null;
this.div=null
}},reposition:function(c){if(c){this.domElement=ZeroClipboard.$(c);
if(!this.domElement){this.hide()
}}if(this.domElement&&this.div){var b=ZeroClipboard.getDOMObjectPosition(this.domElement);
var a=this.div.style;
a.left=""+b.left+"px";
a.top=""+b.top+"px"
}},setText:function(a){this.clipText=a;
if(this.ready){this.movie.setText(a)
}},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");
if(!this.handlers[a]){this.handlers[a]=[]
}this.handlers[a].push(b)
},setHandCursor:function(a){this.handCursorEnabled=a;
if(this.ready){this.movie.setHandCursor(a)
}},setCSSEffects:function(a){this.cssEffects=!!a
},receiveEvent:function(d,f){d=d.toString().toLowerCase().replace(/^on/,"");
switch(d){case"load":this.movie=document.getElementById(this.movieId);
if(!this.movie){var c=this;
setTimeout(function(){c.receiveEvent("load",null)
},1);
return
}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var c=this;
setTimeout(function(){c.receiveEvent("load",null)
},100);
this.ready=true;
return
}this.ready=true;
try{this.movie.setText(this.clipText)
}catch(h){}try{this.movie.setHandCursor(this.handCursorEnabled)
}catch(h){}break;
case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");
if(this.recoverActive){this.domElement.addClass("active")
}}break;
case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;
if(this.domElement.hasClass("active")){this.domElement.removeClass("active");
this.recoverActive=true
}this.domElement.removeClass("hover")
}break;
case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")
}break;
case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");
this.recoverActive=false
}break
}if(this.handlers[d]){for(var b=0,a=this.handlers[d].length;
b<a;
b++){var g=this.handlers[d][b];
if(typeof(g)=="function"){g(this,f)
}else{if((typeof(g)=="object")&&(g.length==2)){g[0][g[1]](this,f)
}else{if(typeof(g)=="string"){window[g](this,f)
}}}}}}};
(function($,window){var MlsChineseMap=function(el,options){if(el){this.init(el,options)
}};
$.extend(MlsChineseMap.prototype,{name:"MlsChineseMap",init:function(el,options){this.element=$(el);
$.data(el,this.name,this);
var _ref=this;
if(options.position){this.position=options.position
}if(options.isFuzzy){this.isFuzzy=options.isFuzzy
}if(options.onMarkerClick){this.onMarkerClick=options.onMarkerClick
}if(options.accuracy){this.accuracy=options.accuracy
}if(this.isFuzzy){var startingZoom=11;
if(this.accuracy>=3&&this.accuracy<=9){startingZoom=this.accuracy+6
}else{if(this.accuracy==2){startingZoom=6
}else{if(this.accuracy==1){startingZoom=4
}else{startingZoom=1
}}}this.map=new google.maps.Map(el,{zoom:startingZoom,center:this.position,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,streetViewControl:false,scaleControl:true,scrollwheel:false});
this.marker=new google.maps.Circle({center:this.position,map:this.map,fillColor:"rgb(255, 0, 162)",fillOpacity:0.25,radius:MlsChineseConstants.MapCircleSizes[startingZoom],strokeOpacity:0,clickable:false});
var checkHideCircle=function(){var circleBounds=_ref.marker.getBounds();
var mapBounds=_ref.map.getBounds();
if(circleBounds.contains&&circleBounds.contains(mapBounds.getNorthEast())&&circleBounds.contains(mapBounds.getSouthWest())){if(!_ref.markerHidden){_ref.marker.setOptions({fillOpacity:0});
_ref.markerHidden=true
}}else{if(_ref.markerHidden){_ref.marker.setOptions({fillOpacity:0.25});
_ref.markerHidden=false
}}};
var checkCircleSize=function(){_ref.marker.setRadius(MlsChineseConstants.MapCircleSizes[_ref.map.getZoom()])
};
google.maps.event.addListener(_ref.map,"bounds_changed",checkHideCircle);
google.maps.event.addListener(_ref.map,"zoom_changed",checkCircleSize)
}else{this.map=new google.maps.Map(el,{zoom:15,center:this.position,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,streetViewControl:false,scrollwheel:false,scaleControl:true});
this.marker=new google.maps.Marker({clickable:!!this.onMarkerClick,position:this.position,map:this.map,zIndex:10,icon:new google.maps.MarkerImage(window.ImagePaths?window.ImagePaths["guidebook/pin_home.png"]:"",null,null,new google.maps.Point(14,32))})
}if(this.onMarkerClick){google.maps.event.addListener(this.marker,"click",function(){_ref.onMarkerClick(_ref)
})
}},setMarkerPosition:function(latlng){if(this.isFuzzy){this.marker.setCenter(latlng)
}else{this.marker.setPosition(latlng)
}this.map.panTo(latlng)
},position:null,isFuzzy:false,map:null,marker:null,onMarkerClick:null,accuracy:9,minZoom:1,markerHidden:false});
$.fn.MlsChineseMap=function(options){var args=$.makeArray(arguments),after=args.slice(1);
var instance;
var collection=this.each(function(){instance=$.data(this,"MlsChineseMap");
if(instance){if(typeof options==="string"){instance[options].apply(instance,after)
}else{if(instance.update){instance.update.apply(instance,args)
}}}else{new MlsChineseMap(this,options)
}});
return instance?instance:collection
}
})(jQuery,this);
if(!window.MlsChineseConstants){var MlsChineseConstants={}
}MlsChineseConstants.MapCircleSizes=[4096000,2048000,1024000,512000,256000,128000,64000,32000,16000,8000,4000,2000,1000,500,500,500,500,500,500,500];
/*!
jQuery Waypoints - v1.1.7
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
(function($,wp,wps,window,undefined){var $w=$(window),eventName="waypoint.reached",triggerWaypoint=function(way,dir){way.element.trigger(eventName,dir);
if(way.options.triggerOnce){way.element[wp]("destroy")
}},waypointIndex=function(el,context){if(!context){return -1
}var i=context.waypoints.length-1;
while(i>=0&&context.waypoints[i].element[0]!==el[0]){i-=1
}return i
},contexts=[],Context=function(context){$.extend(this,{element:$(context),oldScroll:0,waypoints:[],didScroll:false,didResize:false,doScroll:$.proxy(function(){var newScroll=this.element.scrollTop(),isDown=newScroll>this.oldScroll,that=this,pointsHit=$.grep(this.waypoints,function(el,i){return isDown?(el.offset>that.oldScroll&&el.offset<=newScroll):(el.offset<=that.oldScroll&&el.offset>newScroll)
}),len=pointsHit.length;
if(!this.oldScroll||!newScroll){$[wps]("refresh")
}this.oldScroll=newScroll;
if(!len){return
}if(!isDown){pointsHit.reverse()
}$.each(pointsHit,function(i,point){if(point.options.continuous||i===len-1){triggerWaypoint(point,[isDown?"down":"up"])
}})
},this)});
$(context).bind("scroll.waypoints",$.proxy(function(){if(!this.didScroll){this.didScroll=true;
window.setTimeout($.proxy(function(){this.doScroll();
this.didScroll=false
},this),$[wps].settings.scrollThrottle)
}},this)).bind("resize.waypoints",$.proxy(function(){if(!this.didResize){this.didResize=true;
window.setTimeout($.proxy(function(){$[wps]("refresh");
this.didResize=false
},this),$[wps].settings.resizeThrottle)
}},this));
$w.load($.proxy(function(){this.doScroll()
},this))
},getContextByElement=function(element){var found=null;
$.each(contexts,function(i,c){if(c.element[0]===element){found=c;
return false
}});
return found
},methods={init:function(f,options){this.each(function(){var cElement=$.fn[wp].defaults.context,context,$this=$(this);
if(options&&options.context){cElement=options.context
}if(!$.isWindow(cElement)){cElement=$this.closest(cElement)[0]
}context=getContextByElement(cElement);
if(!context){context=new Context(cElement);
contexts.push(context)
}var ndx=waypointIndex($this,context),base=ndx<0?$.fn[wp].defaults:context.waypoints[ndx].options,opts=$.extend({},base,options);
opts.offset=opts.offset==="bottom-in-view"?function(){var cHeight=$.isWindow(cElement)?$[wps]("viewportHeight"):$(cElement).height();
return cHeight-$(this).outerHeight()
}:opts.offset;
if(ndx<0){context.waypoints.push({element:$this,offset:null,options:opts})
}else{context.waypoints[ndx].options=opts
}if(f){$this.bind(eventName,f)
}if(options&&options.handler){$this.bind(eventName,options.handler)
}});
$[wps]("refresh");
return this
},remove:function(){return this.each(function(i,el){var $el=$(el);
$.each(contexts,function(i,c){var ndx=waypointIndex($el,c);
if(ndx>=0){c.waypoints.splice(ndx,1);
if(!c.waypoints.length){c.element.unbind("scroll.waypoints resize.waypoints");
contexts.splice(i,1)
}}})
})
},destroy:function(){return this.unbind(eventName)[wp]("remove")
}},jQMethods={refresh:function(){$.each(contexts,function(i,c){var isWin=$.isWindow(c.element[0]),contextOffset=isWin?0:c.element.offset().top,contextHeight=isWin?$[wps]("viewportHeight"):c.element.height(),contextScroll=isWin?0:c.element.scrollTop();
$.each(c.waypoints,function(j,o){if(!o){return
}var adjustment=o.options.offset,oldOffset=o.offset;
if(typeof o.options.offset==="function"){adjustment=o.options.offset.apply(o.element)
}else{if(typeof o.options.offset==="string"){var amount=parseFloat(o.options.offset);
adjustment=o.options.offset.indexOf("%")?Math.ceil(contextHeight*(amount/100)):amount
}}o.offset=o.element.offset().top-contextOffset+contextScroll-adjustment;
if(o.options.onlyOnScroll){return
}if(oldOffset!==null&&c.oldScroll>oldOffset&&c.oldScroll<=o.offset){triggerWaypoint(o,["up"])
}else{if(oldOffset!==null&&c.oldScroll<oldOffset&&c.oldScroll>=o.offset){triggerWaypoint(o,["down"])
}else{if(!oldOffset&&c.element.scrollTop()>o.offset){triggerWaypoint(o,["down"])
}}}});
c.waypoints.sort(function(a,b){return a.offset-b.offset
})
})
},viewportHeight:function(){return(window.innerHeight?window.innerHeight:$w.height())
},aggregate:function(){var points=$();
$.each(contexts,function(i,c){$.each(c.waypoints,function(i,e){points=points.add(e.element)
})
});
return points
}};
$.fn[wp]=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof method==="function"||!method){return methods.init.apply(this,arguments)
}else{if(typeof method==="object"){return methods.init.apply(this,[null,method])
}else{$.error("Method "+method+" does not exist on jQuery "+wp)
}}}};
$.fn[wp].defaults={continuous:true,offset:0,triggerOnce:false,context:window};
$[wps]=function(method){if(jQMethods[method]){return jQMethods[method].apply(this)
}else{return jQMethods.aggregate()
}};
$[wps].settings={resizeThrottle:200,scrollThrottle:100};
$w.load(function(){$[wps]("refresh")
})
})(jQuery,"waypoint","waypoints",window);
(function(p){"function"==typeof define?define(p):"function"==typeof YUI?YUI.add("es5",p):p()
})(function(){function p(a){a=+a;
a!==a?a=0:0!==a&&(a!==1/0&&a!==-(1/0))&&(a=(0<a||-1)*Math.floor(Math.abs(a)));
return a
}function s(a){var b=typeof a;
return null===a||"undefined"===b||"boolean"===b||"number"===b||"string"===b
}Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;
if("function"!=typeof b){throw new TypeError("Function.prototype.bind called on incompatible "+b)
}var d=q.call(arguments,1),c=function(){if(this instanceof c){var e=b.apply(this,d.concat(q.call(arguments)));
return Object(e)===e?e:this
}return b.apply(a,d.concat(q.call(arguments)))
};
b.prototype&&(c.prototype=Object.create(b.prototype));
return c
});
var k=Function.prototype.call,o=Object.prototype,q=Array.prototype.slice,h=k.bind(o.toString),t=k.bind(o.hasOwnProperty);
t(o,"__defineGetter__")&&(k.bind(o.__defineGetter__),k.bind(o.__defineSetter__),k.bind(o.__lookupGetter__),k.bind(o.__lookupSetter__));
if(2!=[1,2].splice(0).length){var x=Array.prototype.splice;
Array.prototype.splice=function(a,b){return arguments.length?x.apply(this,[a===void 0?0:a,b===void 0?this.length-a:b].concat(q.call(arguments,2))):[]
}
}if(1!=[].unshift(0)){var y=Array.prototype.unshift;
Array.prototype.unshift=function(){y.apply(this,arguments);
return this.length
}
}Array.isArray||(Array.isArray=function(a){return h(a)=="[object Array]"
});
var k=Object("a"),l="a"!=k[0]||!(0 in k);
Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var d=n(this),c=l&&h(this)=="[object String]"?this.split(""):d,e=-1,f=c.length>>>0;
if(h(a)!="[object Function]"){throw new TypeError
}for(;
++e<f;
){e in c&&a.call(b,c[e],e,d)
}});
Array.prototype.map||(Array.prototype.map=function(a,b){var d=n(this),c=l&&h(this)=="[object String]"?this.split(""):d,e=c.length>>>0,f=Array(e);
if(h(a)!="[object Function]"){throw new TypeError(a+" is not a function")
}for(var g=0;
g<e;
g++){g in c&&(f[g]=a.call(b,c[g],g,d))
}return f
});
Array.prototype.filter||(Array.prototype.filter=function(a,b){var d=n(this),c=l&&h(this)=="[object String]"?this.split(""):d,e=c.length>>>0,f=[],g;
if(h(a)!="[object Function]"){throw new TypeError(a+" is not a function")
}for(var i=0;
i<e;
i++){if(i in c){g=c[i];
a.call(b,g,i,d)&&f.push(g)
}}return f
});
Array.prototype.every||(Array.prototype.every=function(a,b){var d=n(this),c=l&&h(this)=="[object String]"?this.split(""):d,e=c.length>>>0;
if(h(a)!="[object Function]"){throw new TypeError(a+" is not a function")
}for(var f=0;
f<e;
f++){if(f in c&&!a.call(b,c[f],f,d)){return false
}}return true
});
Array.prototype.some||(Array.prototype.some=function(a,b){var d=n(this),c=l&&h(this)=="[object String]"?this.split(""):d,e=c.length>>>0;
if(h(a)!="[object Function]"){throw new TypeError(a+" is not a function")
}for(var f=0;
f<e;
f++){if(f in c&&a.call(b,c[f],f,d)){return true
}}return false
});
Array.prototype.reduce||(Array.prototype.reduce=function(a){var b=n(this),d=l&&h(this)=="[object String]"?this.split(""):b,c=d.length>>>0;
if(h(a)!="[object Function]"){throw new TypeError(a+" is not a function")
}if(!c&&arguments.length==1){throw new TypeError("reduce of empty array with no initial value")
}var e=0,f;
if(arguments.length>=2){f=arguments[1]
}else{do{if(e in d){f=d[e++];
break
}if(++e>=c){throw new TypeError("reduce of empty array with no initial value")
}}while(1)
}for(;
e<c;
e++){e in d&&(f=a.call(void 0,f,d[e],e,b))
}return f
});
Array.prototype.reduceRight||(Array.prototype.reduceRight=function(a){var b=n(this),d=l&&h(this)=="[object String]"?this.split(""):b,c=d.length>>>0;
if(h(a)!="[object Function]"){throw new TypeError(a+" is not a function")
}if(!c&&arguments.length==1){throw new TypeError("reduceRight of empty array with no initial value")
}var e,c=c-1;
if(arguments.length>=2){e=arguments[1]
}else{do{if(c in d){e=d[c--];
break
}if(--c<0){throw new TypeError("reduceRight of empty array with no initial value")
}}while(1)
}do{c in this&&(e=a.call(void 0,e,d[c],c,b))
}while(c--);
return e
});
if(!Array.prototype.indexOf||-1!=[0,1].indexOf(1,2)){Array.prototype.indexOf=function(a){var b=l&&h(this)=="[object String]"?this.split(""):n(this),d=b.length>>>0;
if(!d){return -1
}var c=0;
arguments.length>1&&(c=p(arguments[1]));
for(c=c>=0?c:Math.max(0,d+c);
c<d;
c++){if(c in b&&b[c]===a){return c
}}return -1
}
}if(!Array.prototype.lastIndexOf||-1!=[0,1].lastIndexOf(0,-3)){Array.prototype.lastIndexOf=function(a){var b=l&&h(this)=="[object String]"?this.split(""):n(this),d=b.length>>>0;
if(!d){return -1
}var c=d-1;
arguments.length>1&&(c=Math.min(c,p(arguments[1])));
for(c=c>=0?c:d-Math.abs(c);
c>=0;
c--){if(c in b&&a===b[c]){return c
}}return -1
}
}if(!Object.keys){var v=!0,w="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),z=w.length,r;
for(r in {toString:null}){v=!1
}Object.keys=function(a){if(typeof a!="object"&&typeof a!="function"||a===null){throw new TypeError("Object.keys called on a non-object")
}var b=[],d;
for(d in a){t(a,d)&&b.push(d)
}if(v){for(d=0;
d<z;
d++){var c=w[d];
t(a,c)&&b.push(c)
}}return b
}
}if(!Date.prototype.toISOString||-1===(new Date(-62198755200000)).toISOString().indexOf("-000001")){Date.prototype.toISOString=function(){var a,b,d,c;
if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}c=this.getUTCFullYear();
a=this.getUTCMonth();
c=c+Math.floor(a/12);
a=[(a%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];
c=(c<0?"-":c>9999?"+":"")+("00000"+Math.abs(c)).slice(0<=c&&c<=9999?-4:-6);
for(b=a.length;
b--;
){d=a[b];
d<10&&(a[b]="0"+d)
}return c+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"
}
}r=!1;
try{r=Date.prototype.toJSON&&null===(new Date(NaN)).toJSON()&&-1!==(new Date(-62198755200000)).toJSON().indexOf("-000001")&&Date.prototype.toJSON.call({toISOString:function(){return true
}})
}catch(G){}r||(Date.prototype.toJSON=function(){var a=Object(this),b;
a:if(s(a)){b=a
}else{b=a.valueOf;
if(typeof b==="function"){b=b.call(a);
if(s(b)){break a
}}b=a.toString;
if(typeof b==="function"){b=b.call(a);
if(s(b)){break a
}}throw new TypeError
}if(typeof b==="number"&&!isFinite(b)){return null
}b=a.toISOString;
if(typeof b!="function"){throw new TypeError("toISOString property is not callable")
}return b.call(a)
});
var g=Date,m=function(a,b,d,c,e,f,h){var i=arguments.length;
if(this instanceof g){i=i==1&&String(a)===a?new g(m.parse(a)):i>=7?new g(a,b,d,c,e,f,h):i>=6?new g(a,b,d,c,e,f):i>=5?new g(a,b,d,c,e):i>=4?new g(a,b,d,c):i>=3?new g(a,b,d):i>=2?new g(a,b):i>=1?new g(a):new g;
i.constructor=m;
return i
}return g.apply(this,arguments)
},u=function(a,b){var d=b>1?1:0;
return A[b]+Math.floor((a-1969+d)/4)-Math.floor((a-1901+d)/100)+Math.floor((a-1601+d)/400)+365*(a-1970)
},B=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),A=[0,31,59,90,120,151,181,212,243,273,304,334,365],j;
for(j in g){m[j]=g[j]
}m.now=g.now;
m.UTC=g.UTC;
m.prototype=g.prototype;
m.prototype.constructor=m;
m.parse=function(a){var b=B.exec(a);
if(b){var d=Number(b[1]),c=Number(b[2]||1)-1,e=Number(b[3]||1)-1,f=Number(b[4]||0),h=Number(b[5]||0),i=Number(b[6]||0),j=Number(b[7]||0),m=!b[4]||b[8]?0:Number(new g(1970,0)),k=b[9]==="-"?1:-1,l=Number(b[10]||0),b=Number(b[11]||0);
if(f<(h>0||i>0||j>0?24:25)&&h<60&&i<60&&j<1000&&c>-1&&c<12&&l<24&&b<60&&e>-1&&e<u(d,c+1)-u(d,c)){d=((u(d,c)+e)*24+f+l*k)*60;
d=((d+h+b*k)*60+i)*1000+j+m;
if(-8640000000000000<=d&&d<=8640000000000000){return d
}}return NaN
}return g.parse.apply(this,arguments)
};
Date=m;
Date.now||(Date.now=function(){return(new Date).getTime()
});
if("0".split(void 0,0).length){var C=String.prototype.split;
String.prototype.split=function(a,b){return a===void 0&&b===0?[]:C.apply(this,arguments)
}
}if("".substr&&"b"!=="0b".substr(-1)){var D=String.prototype.substr;
String.prototype.substr=function(a,b){return D.call(this,a<0?(a=this.length+a)<0?0:a:a,b)
}
}j="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
if(!String.prototype.trim||j.trim()){j="["+j+"]";
var E=RegExp("^"+j+j+"*"),F=RegExp(j+j+"*$");
String.prototype.trim=function(){if(this===void 0||this===null){throw new TypeError("can't convert "+this+" to object")
}return String(this).replace(E,"").replace(F,"")
}
}var n=function(a){if(a==null){throw new TypeError("can't convert "+a+" to object")
}return Object(a)
}
});
(function(f){"function"==typeof define?define(f):"function"==typeof YUI?YUI.add("es5-sham",f):f()
})(function(){function f(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel" in a
}catch(b){}}Object.getPrototypeOf||(Object.getPrototypeOf=function(a){return a.__proto__||(a.constructor?a.constructor.prototype:prototypeOfObject)
});
Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(a,b){if(typeof a!="object"&&typeof a!="function"||a===null){throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a)
}if(owns(a,b)){var d={enumerable:true,configurable:true};
if(supportsAccessors){var l=a.__proto__;
a.__proto__=prototypeOfObject;
var c=lookupGetter(a,b),e=lookupSetter(a,b);
a.__proto__=l;
if(c||e){if(c){d.get=c
}if(e){d.set=e
}return d
}}d.value=a[b];
return d
}});
Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(a){return Object.keys(a)
});
if(!Object.create){var h;
if(null===Object.prototype.__proto__||"undefined"==typeof document){h=function(){return{__proto__:null}
}
}else{var k=function(){},e=document.createElement("iframe"),g=document.body||document.documentElement;
e.style.display="none";
g.appendChild(e);
e.src="javascript:";
var c=e.contentWindow.Object.prototype;
g.removeChild(e);
e=null;
delete c.constructor;
delete c.hasOwnProperty;
delete c.propertyIsEnumerable;
delete c.isPrototypeOf;
delete c.toLocaleString;
delete c.toString;
delete c.valueOf;
c.__proto__=null;
k.prototype=c;
h=function(){return new k
}
}Object.create=function(a,b){function d(){}var c;
if(a===null){c=h()
}else{if(typeof a!=="object"&&typeof a!=="function"){throw new TypeError("Object prototype may only be an Object or null")
}d.prototype=a;
c=new d;
c.__proto__=a
}b!==void 0&&Object.defineProperties(c,b);
return c
}
}if(Object.defineProperty&&(e=f({}),g="undefined"==typeof document||f(document.createElement("div")),!e||!g)){var i=Object.defineProperty,j=Object.defineProperties
}if(!Object.defineProperty||i){Object.defineProperty=function(a,b,d){if(typeof a!="object"&&typeof a!="function"||a===null){throw new TypeError("Object.defineProperty called on non-object: "+a)
}if(typeof d!="object"&&typeof d!="function"||d===null){throw new TypeError("Property description must be an object: "+d)
}if(i){try{return i.call(Object,a,b,d)
}catch(c){}}if(owns(d,"value")){if(supportsAccessors&&(lookupGetter(a,b)||lookupSetter(a,b))){var e=a.__proto__;
a.__proto__=prototypeOfObject;
delete a[b];
a[b]=d.value;
a.__proto__=e
}else{a[b]=d.value
}}else{if(!supportsAccessors){throw new TypeError("getters & setters can not be defined on this javascript engine")
}owns(d,"get")&&defineGetter(a,b,d.get);
owns(d,"set")&&defineSetter(a,b,d.set)
}return a
}
}if(!Object.defineProperties||j){Object.defineProperties=function(a,b){if(j){try{return j.call(Object,a,b)
}catch(d){}}for(var c in b){owns(b,c)&&c!="__proto__"&&Object.defineProperty(a,c,b[c])
}return a
}
}Object.seal||(Object.seal=function(a){return a
});
Object.freeze||(Object.freeze=function(a){return a
});
try{Object.freeze(function(){})
}catch(n){var m=Object.freeze;
Object.freeze=function(a){return typeof a=="function"?a:m(a)
}
}Object.preventExtensions||(Object.preventExtensions=function(a){return a
});
Object.isSealed||(Object.isSealed=function(){return false
});
Object.isFrozen||(Object.isFrozen=function(){return false
});
Object.isExtensible||(Object.isExtensible=function(a){if(Object(a)!==a){throw new TypeError
}for(var b="";
owns(a,b);
){b=b+"?"
}a[b]=true;
var c=owns(a,b);
delete a[b];
return c
})
});