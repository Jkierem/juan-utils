module.exports=function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=1)}([function(n,r){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}n.exports=function(n){var r={};function e(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return n[t].call(u.exports,u,u.exports,e),u.l=!0,u.exports}return e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==t(n)&&n&&n.__esModule)return n;var u=Object.create(null);if(e.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(u,o,function(r){return n[r]}.bind(null,o));return u},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=0)}([function(n,r,e){"use strict";function u(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.r(r);var o=function(n){return function(r,t){return void 0===t?function(t){return n(r,t)}:n(r,t)}},i=function(n){return function(r,t,e){return void 0===t&&void 0===e?o((function(t,e){return n(r,t,e)})):void 0===e?function(e){return n(r,t,e)}:n(r,t,e)}},c=function(n){return n},f=function(n){return function(){return n}},a=o((function(n,r){return r?r[n]:void 0})),l=i((function(n,r,t){return v(n,a(r))(t)})),d=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";return function(t){return n.split(r).map((function(n){return a(n)})).reduce((function(n,r){return n&&r(n)}),t)}},y=function(n){return n?Object.keys(n):[]},p=function(n){var r={};return function(){for(var t=arguments.length,e=new Array(t),u=0;u<t;u++)e[u]=arguments[u];var o=e.join(",");return o in r||(r[o]=n.apply(void 0,e)),r[o]}},s=function(n,r){var t={};return function(){for(var e=arguments.length,u=new Array(e),o=0;o<e;o++)u[o]=arguments[o];var i=n(u);return i in t||(t[i]=r.apply(void 0,u)),t[i]}},b=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return function(){return r(n.apply(void 0,arguments))}}))},v=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return function(){return n(r.apply(void 0,arguments))}}))},O=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:console.log;return r(n),n},m=i((function(n,r,t){return n(t,r)})),g=function(n){return n.reduce((function(n,r){return[r].concat(u(n))}),[])},j=function(n){return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return n.apply(void 0,u(g(t)))}},h=function(n){return function(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return n.call.apply(n,[r].concat(e))}},w=function(n){return function(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return n.bind.apply(n,[r].concat(e))}},A=i((function(n,r,t){return n.apply(r,t)})),S=function(n){return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.slice(0,n)}},P=function(n){return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return a(n,t)}},E=P(0),x=P(1),M=P(2),T=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return n.apply(void 0,r)}},D=function(n){return function(r){return r.apply(void 0,u(n))}};function I(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(n){return(_="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}var k=o((function(n,r){return n instanceof r.constructor&&r instanceof n.constructor})),C=o((function(n,r){return _(r)===n})),q=o((function(n,r){return r instanceof n})),B=C("function"),F=C("object"),N=q(Array),U=function(n){return null==n},G=function(n){return null!=n},R=function(n){return n!=n},W=o((function(n,r){return y(n).map(v(a,E)).every((function(t){return t(n)===t(r)}))})),z=o((function(n,r){return En(y(n),y(r)).map(v(a,E)).every((function(t){return t(n)===t(r)}))})),K=function n(r,t){var e=_(r);return e===_(t)&&("object"==e?r instanceof Array&&t instanceof Array?Tn(r,t).every((function(r){var t=function(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r,2),e=t[0],u=t[1];return n(e,u)})):k(r,t)&&En(y(r),y(t)).every((function(e){return n(r[e],t[e])})):r===t)},V=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return Mn(r,An(r)).map((function(n){return K.apply(void 0,I(n))})).every(Boolean)},Z=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return Mn(r,An(r)).map((function(n){return z.apply(void 0,I(n))})).every(Boolean)};function H(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function J(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var L=function(){return!0},Q=function(){return!1},X=function(n){return B(n)?n():n},Y=function(n){return B(n)?function(){return!n.apply(void 0,arguments)}:!n},$=o((function(n,r){return X(n)&&X(r)})),nn=o((function(n,r){return X(n)||X(r)})),rn=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return r.reduce((function(r,t){return r&&t(n)}),!0)}},tn=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return r.reduce((function(r,t){return r||t(n)}),!1)}},en=function(){return Y(tn.apply(void 0,arguments))},un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return[].concat(J(n),[[L,c]]).reduce((function(n,r){if(n.fullfilled)return n;var e=H(r,2),u=e[0],o=e[1];return u.apply(void 0,t)?{fullfilled:!0,value:o.apply(void 0,t)}:n}),{fullfilled:!1,value:void 0}).value}},on=o((function(n,r){return tn(U,R)(r)?n:r})),cn=i((function(n,r,t){return n(t)?t:r(t)})),fn=i((function(n,r,t){return n(t)?t:fn(n)(r)(r(t))}));function an(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||ln(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ln(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function dn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function yn(n){if(Array.isArray(n))return n}var pn=a("length"),sn=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r},bn=o((function(n,r){return r.map(n)})),vn=o((function(n,r){return r.filter(n)})),On=function(n,r){return function(t){return r?t.reduce(n,r):t.reduce(n)}},mn=function(n){return 0===pn(n)},gn=o((function(n,r){return n.includes(r)})),jn=o((function(n,r){return bn(v(n,E),r)})),hn=o((function(n,r){return vn(v(n,E),r)})),wn=function(n){return function(n,r){return yn(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||dn()}(n,1)[0]},An=function(n){var r;return(yn(r=n)||ln(r)||dn()).slice(1)},Sn=function(n){return n.reduce((function(n,r){return[r].concat(an(n))}),[])},Pn=o((function(n,r){return[].concat(an(n),an(r)).reduce((function(n,r){return n.includes(r)?n:[].concat(an(n),[r])}),[])})),En=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce(Pn)},xn=o((function(n,r){return vn(Y(gn(r)))(n)})),Mn=function n(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.some(mn)?[]:[t.map(wn)].concat(an(n.apply(void 0,an(t.map(An)))))},Tn=function n(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.every(mn)?[]:[an(t.map(wn))].concat(an(n.apply(void 0,an(t.map(An)))))},Dn=On((function(n,r){return N(r)?[].concat(an(n),an(r)):[].concat(an(n),[r])}),[]),In=function(n,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=n,u=[];e<r;)u.push(e),e+=t;return u},_n=function(n,r){for(var t=[],e=0;e<n;e++)t.push(r);return t};function kn(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function Cn(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?kn(t,!0).forEach((function(r){qn(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kn(t).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function qn(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}var Bn=o((function(n,r){return y(r).reduce((function(t,e){return Cn({},t,qn({},n(e),r[e]))}),{})})),Fn=o((function(n,r){return y(r).reduce((function(t,e){return Cn({},t,qn({},e,n(r[e])))}),{})})),Nn=o((function(n,r){return n.reduce((function(n,t){return Cn({},n,qn({},t,r[t]))}),{})})),Un=o((function(n,r){return Nn(xn(y(n),y(r)))(n)})),Gn=o((function(n,r){return Nn(xn(y(r),n),r)})),Rn=function(n){return On((function(r,t){return U(n[t])?r:Cn({},r,qn({},t,n[t]))}),{})(y(n))},Wn=function(n){return b(y,bn((function(r){return[r,a(r,n)]})))(n)},zn=function(n){return On((function(n,r){var t=function(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r,2);return Cn({},n,qn({},t[0],t[1]))}),{})(n)},Kn=function(n){return Cn({},n)},Vn=function n(r){if(!F(r))return r;var t={};return Bn((function(e){var u=v(N,a(e))(r),o=v(F,a(e))(r);t[e]=u?function(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r[e]):o?n(r[e]):r[e]}),r),t};function Zn(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function Hn(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}var Jn=function(n,r){return{view:function(r){return Vn(a(n,r))},set:function(n,t){return function(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Zn(t,!0).forEach((function(r){Hn(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Zn(t).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}({},Vn(t),Hn({},r,n))}}},Ln=function(n,r){return a("view",n)(r)},Qn=function(n,r,t){return a("set",n)(r,t)},Xn=function(n,r,t){return v((function(r){return Qn(n,r,t)}),r,Ln)(n,t)},Yn=o((function(n,r){return r+n})),$n=o((function(n,r){return r-n})),nr=o((function(n,r){return r*n})),rr=o((function(n,r){return r/n})),tr=o((function(n,r){return r%n})),er=o((function(n,r){return Math.pow(r,n)})),ur=o((function(n,r){return r>=n})),or=o((function(n,r){return r>n})),ir=o((function(n,r){return r<=n})),cr=o((function(n,r){return r<n})),fr=o((function(n,r){return n===r})),ar=Y(fr),lr=i((function(n,r,t){return fr(n(r),n(t))})),dr=function(n,r){return n<r?n:r},yr=function(n,r){return n>r?n:r},pr=b(tr(2),fr(0)),sr=b(tr(2),fr(1)),br=rr(2),vr=Math.floor,Or=Math.ceil,mr=function(n){return n<0?-n:n},gr=nr(-1),jr=function(n){return 180*n/Math.PI},hr=function(n){return n*Math.PI/180},wr=Yn(1),Ar=$n(1),Sr=function(n){return v(v(rr,pn)(n),On(Yn))(n)},Pr=function(n){return Math.random()*n},Er=v(Math.floor,Pr);e.d(r,"length",(function(){return pn})),e.d(r,"createArray",(function(){return sn})),e.d(r,"map",(function(){return bn})),e.d(r,"filter",(function(){return vn})),e.d(r,"reduce",(function(){return On})),e.d(r,"isEmpty",(function(){return mn})),e.d(r,"belongs",(function(){return gn})),e.d(r,"mapOverUnary",(function(){return jn})),e.d(r,"filterOverUnary",(function(){return hn})),e.d(r,"head",(function(){return wn})),e.d(r,"tail",(function(){return An})),e.d(r,"reverse",(function(){return Sn})),e.d(r,"binaryUnion",(function(){return Pn})),e.d(r,"union",(function(){return En})),e.d(r,"difference",(function(){return xn})),e.d(r,"zip",(function(){return Mn})),e.d(r,"inclusiveZip",(function(){return Tn})),e.d(r,"flatten",(function(){return Dn})),e.d(r,"range",(function(){return In})),e.d(r,"repeat",(function(){return _n})),e.d(r,"curry2",(function(){return o})),e.d(r,"curry3",(function(){return i})),e.d(r,"identity",(function(){return c})),e.d(r,"justOf",(function(){return f})),e.d(r,"prop",(function(){return a})),e.d(r,"propMap",(function(){return l})),e.d(r,"path",(function(){return d})),e.d(r,"keysOf",(function(){return y})),e.d(r,"memo",(function(){return p})),e.d(r,"memoBy",(function(){return s})),e.d(r,"pipe",(function(){return b})),e.d(r,"compose",(function(){return v})),e.d(r,"log",(function(){return O})),e.d(r,"cardinal",(function(){return m})),e.d(r,"flip",(function(){return j})),e.d(r,"call",(function(){return h})),e.d(r,"bind",(function(){return w})),e.d(r,"apply",(function(){return A})),e.d(r,"take",(function(){return S})),e.d(r,"takeOrdinal",(function(){return P})),e.d(r,"takeFirst",(function(){return E})),e.d(r,"takeSecond",(function(){return x})),e.d(r,"takeThird",(function(){return M})),e.d(r,"callWith",(function(){return T})),e.d(r,"applyWith",(function(){return D})),e.d(r,"lens",(function(){return Jn})),e.d(r,"view",(function(){return Ln})),e.d(r,"set",(function(){return Qn})),e.d(r,"over",(function(){return Xn})),e.d(r,"True",(function(){return L})),e.d(r,"False",(function(){return Q})),e.d(r,"extract",(function(){return X})),e.d(r,"not",(function(){return Y})),e.d(r,"and",(function(){return $})),e.d(r,"or",(function(){return nn})),e.d(r,"allPass",(function(){return rn})),e.d(r,"anyPass",(function(){return tn})),e.d(r,"nonePass",(function(){return en})),e.d(r,"conditional",(function(){return un})),e.d(r,"defaultTo",(function(){return on})),e.d(r,"unless",(function(){return cn})),e.d(r,"until",(function(){return fn})),e.d(r,"add",(function(){return Yn})),e.d(r,"sub",(function(){return $n})),e.d(r,"mult",(function(){return nr})),e.d(r,"div",(function(){return rr})),e.d(r,"mod",(function(){return tr})),e.d(r,"pow",(function(){return er})),e.d(r,"gte",(function(){return ur})),e.d(r,"gt",(function(){return or})),e.d(r,"lte",(function(){return ir})),e.d(r,"lt",(function(){return cr})),e.d(r,"eq",(function(){return fr})),e.d(r,"neq",(function(){return ar})),e.d(r,"eqBy",(function(){return lr})),e.d(r,"min",(function(){return dr})),e.d(r,"max",(function(){return yr})),e.d(r,"isEven",(function(){return pr})),e.d(r,"isOdd",(function(){return sr})),e.d(r,"half",(function(){return br})),e.d(r,"floor",(function(){return vr})),e.d(r,"ceil",(function(){return Or})),e.d(r,"abs",(function(){return mr})),e.d(r,"inverse",(function(){return gr})),e.d(r,"toDegrees",(function(){return jr})),e.d(r,"toRadians",(function(){return hr})),e.d(r,"inc",(function(){return wr})),e.d(r,"dec",(function(){return Ar})),e.d(r,"mean",(function(){return Sr})),e.d(r,"random",(function(){return Pr})),e.d(r,"integerRandom",(function(){return Er})),e.d(r,"mapKeys",(function(){return Bn})),e.d(r,"mapValues",(function(){return Fn})),e.d(r,"pick",(function(){return Nn})),e.d(r,"diff",(function(){return Un})),e.d(r,"omit",(function(){return Gn})),e.d(r,"strip",(function(){return Rn})),e.d(r,"entries",(function(){return Wn})),e.d(r,"fromEntries",(function(){return zn})),e.d(r,"clone",(function(){return Kn})),e.d(r,"deepClone",(function(){return Vn})),e.d(r,"shareConstructor",(function(){return k})),e.d(r,"typeEquals",(function(){return C})),e.d(r,"isInstanceOf",(function(){return q})),e.d(r,"isFunction",(function(){return B})),e.d(r,"isObject",(function(){return F})),e.d(r,"isArray",(function(){return N})),e.d(r,"isNil",(function(){return U})),e.d(r,"isDefined",(function(){return G})),e.d(r,"isNaN",(function(){return R})),e.d(r,"asymEquals",(function(){return W})),e.d(r,"shallowEquals",(function(){return z})),e.d(r,"equals",(function(){return K})),e.d(r,"multiEquals",(function(){return V})),e.d(r,"multiShallowEquals",(function(){return Z}))}])},function(n,r,t){"use strict";t.r(r);var e=t(0);function u(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function o(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(t,!0).forEach((function(r){i(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function i(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(e.isObject)(n)?Object(e.deepClone)(n):n;return{getState:function(){return Object(e.deepClone)(r)},setState:function(n){var t=Object(e.isObject)(r),u=Object(e.isObject)(n);r=!t&&u?{}:r,r=u?o({},r,{},Object(e.deepClone)(n)):n}}},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(e.isObject)(n)?Object(e.deepClone)(n):n,t=function(){return Object(e.deepClone)(r)},u=function(n){var t=Object(e.isObject)(r),u=Object(e.isObject)(n);r=!t&&u?{}:r,r=u?o({},r,{},Object(e.deepClone)(n)):n};return[t,u]},a=function(n){var r=n.init,t=void 0===r?{}:r,u=n.onSet,i=void 0===u?identity:u,c=n.mapSet,f=void 0===c?identity:c,a=n.onGet,l=void 0===a?identity:a,d=n.mapGet,y=void 0===d?identity:d,p=Object(e.isObject)(t)?Object(e.deepClone)(t):t;return{getState:function(){return l(p),y(Object(e.deepClone)(p))},setState:function(n){var r=Object(e.isObject)(p),t=Object(e.isObject)(n);i(p,n),p=!r&&t?{}:p,p=t?o({},p,{},Object(e.deepClone)(n)):n,p=f(p)}}};t.d(r,"createState",(function(){return c})),t.d(r,"useState",(function(){return f})),t.d(r,"useObservable",(function(){return a}))}]);