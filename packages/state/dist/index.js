module.exports=function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=1)}([function(n,r){n.exports=function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=0)}([function(n,r,t){"use strict";function e(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.r(r);var u=function(n){return function(r,t){return void 0===t?function(t){return n(r,t)}:n(r,t)}},o=function(n){return function(r,t,e){return void 0===t&&void 0===e?u((function(t,e){return n(r,t,e)})):void 0===e?function(e){return n(r,t,e)}:n(r,t,e)}},i=function(n){return n},c=function(n){return function(){return n}},f=u((function(n,r){return r?r[n]:void 0})),a=o((function(n,r,t){return v(n,f(r))(t)})),l=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";return function(t){return n.split(r).map((function(n){return f(n)})).reduce((function(n,r){return n&&r(n)}),t)}},d=function(n){return n?Object.keys(n):[]},y=function(n){var r={};return function(){for(var t=arguments.length,e=new Array(t),u=0;u<t;u++)e[u]=arguments[u];var o=e.join(",");return o in r||(r[o]=n.apply(void 0,e)),r[o]}},p=function(n,r){var t={};return function(){for(var e=arguments.length,u=new Array(e),o=0;o<e;o++)u[o]=arguments[o];var i=n(u);return i in t||(t[i]=r.apply(void 0,u)),t[i]}},s=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return function(){return r(n.apply(void 0,arguments))}}))},v=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return function(){return n(r.apply(void 0,arguments))}}))},b=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:console.log;return r(n),n},m=o((function(n,r,t){return n(t,r)})),g=function(n){return n.reduce((function(n,r){return[r].concat(e(n))}),[])},O=function(n){return function(){for(var r=arguments.length,t=new Array(r),u=0;u<r;u++)t[u]=arguments[u];return n.apply(void 0,e(g(t)))}},h=function(n){return function(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return n.call.apply(n,[r].concat(e))}},j=function(n){return function(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return n.bind.apply(n,[r].concat(e))}},w=o((function(n,r,t){return n.apply(r,t)})),A=function(n){return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.slice(0,n)}},S=function(n){return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return f(n,t)}},P=S(0),E=S(1),x=S(2),M=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return n.apply(void 0,r)}},T=function(n){return function(r){return r.apply(void 0,e(n))}};function I(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(n){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var k=u((function(n,r){return n instanceof r.constructor&&r instanceof n.constructor})),D=u((function(n,r){return _(r)===n})),q=u((function(n,r){return r instanceof n})),C=D("function"),B=D("object"),F=q(Array),N=function(n){return null==n},G=function(n){return null!=n},R=function(n){return n!=n},U=u((function(n,r){return d(n).map(v(f,P)).every((function(t){return t(n)===t(r)}))})),W=u((function(n,r){return Sn(d(n),d(r)).map(v(f,P)).every((function(t){return t(n)===t(r)}))})),z=function n(r,t){var e=_(r);return e===_(t)&&("object"==e?r instanceof Array&&t instanceof Array?xn(r,t).every((function(r){var t=function(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r,2),e=t[0],u=t[1];return n(e,u)})):k(r,t)&&Sn(d(r),d(t)).every((function(e){return n(r[e],t[e])})):r===t)},K=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return En(r,jn(r)).map((function(n){return z.apply(void 0,I(n))})).every(Boolean)},V=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return En(r,jn(r)).map((function(n){return W.apply(void 0,I(n))})).every(Boolean)};function Z(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var J=function(){return!0},L=function(){return!1},Q=function(n){return C(n)?n():n},X=function(n){return C(n)?function(){return!n.apply(void 0,arguments)}:!n},Y=u((function(n,r){return Q(n)&&Q(r)})),$=u((function(n,r){return Q(n)||Q(r)})),nn=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return r.reduce((function(r,t){return r&&t(n)}),!0)}},rn=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return r.reduce((function(r,t){return r||t(n)}),!1)}},tn=function(){return X(rn.apply(void 0,arguments))},en=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return[].concat(H(n),[[J,i]]).reduce((function(n,r){if(n.fullfilled)return n;var e=Z(r,2),u=e[0],o=e[1];return u.apply(void 0,t)?{fullfilled:!0,value:o.apply(void 0,t)}:n}),{fullfilled:!1,value:void 0}).value}},un=u((function(n,r){return rn(N,R)(r)?n:r})),on=o((function(n,r,t){return n(t)?t:r(t)})),cn=o((function(n,r,t){return n(t)?t:cn(n)(r)(r(t))}));function fn(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||an(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function an(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function ln(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function dn(n){if(Array.isArray(n))return n}var yn=f("length"),pn=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r},sn=u((function(n,r){return r.map(n)})),vn=u((function(n,r){return r.filter(n)})),bn=function(n,r){return function(t){return r?t.reduce(n,r):t.reduce(n)}},mn=function(n){return 0===yn(n)},gn=u((function(n,r){return n.includes(r)})),On=u((function(n,r){return sn(v(n,P),r)})),hn=function(n){return function(n,r){return dn(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||ln()}(n,1)[0]},jn=function(n){var r;return(dn(r=n)||an(r)||ln()).slice(1)},wn=function(n){return n.reduce((function(n,r){return[r].concat(fn(n))}),[])},An=u((function(n,r){return[].concat(fn(n),fn(r)).reduce((function(n,r){return n.includes(r)?n:[].concat(fn(n),[r])}),[])})),Sn=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce(An)},Pn=u((function(n,r){return vn(X(gn(r)))(n)})),En=function n(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.some(mn)?[]:[t.map(hn)].concat(fn(n.apply(void 0,fn(t.map(jn)))))},xn=function n(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.every(mn)?[]:[fn(t.map(hn))].concat(fn(n.apply(void 0,fn(t.map(jn)))))},Mn=bn((function(n,r){return F(r)?[].concat(fn(n),fn(r)):[].concat(fn(n),[r])}),[]),Tn=function(n,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=n,u=[];e<r;)u.push(e),e+=t;return u},In=function(n,r){for(var t=[],e=0;e<n;e++)t.push(r);return t},_n=u((function(n,r){return r+n})),kn=u((function(n,r){return r-n})),Dn=u((function(n,r){return r*n})),qn=u((function(n,r){return r/n})),Cn=u((function(n,r){return r%n})),Bn=u((function(n,r){return Math.pow(r,n)})),Fn=u((function(n,r){return r>=n})),Nn=u((function(n,r){return r>n})),Gn=u((function(n,r){return r<=n})),Rn=u((function(n,r){return r<n})),Un=u((function(n,r){return n===r})),Wn=X(Un),zn=o((function(n,r,t){return Un(n(r),n(t))})),Kn=function(n,r){return n<r?n:r},Vn=function(n,r){return n>r?n:r},Zn=s(Cn(2),Un(0)),Hn=s(Cn(2),Un(1)),Jn=qn(2),Ln=Math.floor,Qn=Math.ceil,Xn=function(n){return n<0?-n:n},Yn=Dn(-1),$n=function(n){return 180*n/Math.PI},nr=function(n){return n*Math.PI/180},rr=_n(1),tr=kn(1),er=function(n){return v(v(qn,yn)(n),bn(_n))(n)},ur=function(n){return Math.random()*n},or=v(Math.floor,ur);function ir(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function cr(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ir(t,!0).forEach((function(r){fr(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ir(t).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function fr(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}var ar=u((function(n,r){return d(r).reduce((function(t,e){return cr({},t,fr({},n(e),r[e]))}),{})})),lr=u((function(n,r){return d(r).reduce((function(t,e){return cr({},t,fr({},e,n(r[e])))}),{})})),dr=u((function(n,r){return n.reduce((function(n,t){return cr({},n,fr({},t,r[t]))}),{})})),yr=u((function(n,r){return dr(Pn(d(n),d(r)))(n)})),pr=u((function(n,r){return dr(Pn(d(r),n),r)})),sr=function(n){return bn((function(r,t){return N(n[t])?r:cr({},r,fr({},t,n[t]))}),{})(d(n))},vr=function(n){return s(d,sn((function(r){return[r,f(r,n)]})))(n)},br=function(n){return bn((function(n,r){var t=function(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r,2);return cr({},n,fr({},t[0],t[1]))}),{})(n)},mr=function(n){return cr({},n)},gr=function n(r){var t={};return ar((function(e){var u=v(F,f(e))(r),o=v(B,f(e))(r);t[e]=u?function(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r[e]):o?n(r[e]):r[e]}),r),t};t.d(r,"length",(function(){return yn})),t.d(r,"createArray",(function(){return pn})),t.d(r,"map",(function(){return sn})),t.d(r,"filter",(function(){return vn})),t.d(r,"reduce",(function(){return bn})),t.d(r,"isEmpty",(function(){return mn})),t.d(r,"belongs",(function(){return gn})),t.d(r,"mapOverUnary",(function(){return On})),t.d(r,"head",(function(){return hn})),t.d(r,"tail",(function(){return jn})),t.d(r,"reverse",(function(){return wn})),t.d(r,"binaryUnion",(function(){return An})),t.d(r,"union",(function(){return Sn})),t.d(r,"difference",(function(){return Pn})),t.d(r,"zip",(function(){return En})),t.d(r,"inclusiveZip",(function(){return xn})),t.d(r,"flatten",(function(){return Mn})),t.d(r,"range",(function(){return Tn})),t.d(r,"repeat",(function(){return In})),t.d(r,"curry2",(function(){return u})),t.d(r,"curry3",(function(){return o})),t.d(r,"identity",(function(){return i})),t.d(r,"justOf",(function(){return c})),t.d(r,"prop",(function(){return f})),t.d(r,"propMap",(function(){return a})),t.d(r,"path",(function(){return l})),t.d(r,"keysOf",(function(){return d})),t.d(r,"memo",(function(){return y})),t.d(r,"memoBy",(function(){return p})),t.d(r,"pipe",(function(){return s})),t.d(r,"compose",(function(){return v})),t.d(r,"log",(function(){return b})),t.d(r,"cardinal",(function(){return m})),t.d(r,"flip",(function(){return O})),t.d(r,"call",(function(){return h})),t.d(r,"bind",(function(){return j})),t.d(r,"apply",(function(){return w})),t.d(r,"take",(function(){return A})),t.d(r,"takeOrdinal",(function(){return S})),t.d(r,"takeFirst",(function(){return P})),t.d(r,"takeSecond",(function(){return E})),t.d(r,"teakeThird",(function(){return x})),t.d(r,"callWith",(function(){return M})),t.d(r,"applyWith",(function(){return T})),t.d(r,"True",(function(){return J})),t.d(r,"False",(function(){return L})),t.d(r,"extract",(function(){return Q})),t.d(r,"not",(function(){return X})),t.d(r,"and",(function(){return Y})),t.d(r,"or",(function(){return $})),t.d(r,"allPass",(function(){return nn})),t.d(r,"anyPass",(function(){return rn})),t.d(r,"nonePass",(function(){return tn})),t.d(r,"conditional",(function(){return en})),t.d(r,"defaultTo",(function(){return un})),t.d(r,"unless",(function(){return on})),t.d(r,"until",(function(){return cn})),t.d(r,"add",(function(){return _n})),t.d(r,"sub",(function(){return kn})),t.d(r,"mult",(function(){return Dn})),t.d(r,"div",(function(){return qn})),t.d(r,"mod",(function(){return Cn})),t.d(r,"pow",(function(){return Bn})),t.d(r,"gte",(function(){return Fn})),t.d(r,"gt",(function(){return Nn})),t.d(r,"lte",(function(){return Gn})),t.d(r,"lt",(function(){return Rn})),t.d(r,"eq",(function(){return Un})),t.d(r,"neq",(function(){return Wn})),t.d(r,"eqBy",(function(){return zn})),t.d(r,"min",(function(){return Kn})),t.d(r,"max",(function(){return Vn})),t.d(r,"isEven",(function(){return Zn})),t.d(r,"isOdd",(function(){return Hn})),t.d(r,"half",(function(){return Jn})),t.d(r,"floor",(function(){return Ln})),t.d(r,"ceil",(function(){return Qn})),t.d(r,"abs",(function(){return Xn})),t.d(r,"inverse",(function(){return Yn})),t.d(r,"toDegrees",(function(){return $n})),t.d(r,"toRadians",(function(){return nr})),t.d(r,"inc",(function(){return rr})),t.d(r,"dec",(function(){return tr})),t.d(r,"mean",(function(){return er})),t.d(r,"random",(function(){return ur})),t.d(r,"integerRandom",(function(){return or})),t.d(r,"mapKeys",(function(){return ar})),t.d(r,"mapValues",(function(){return lr})),t.d(r,"pick",(function(){return dr})),t.d(r,"diff",(function(){return yr})),t.d(r,"omit",(function(){return pr})),t.d(r,"strip",(function(){return sr})),t.d(r,"entries",(function(){return vr})),t.d(r,"fromEntries",(function(){return br})),t.d(r,"clone",(function(){return mr})),t.d(r,"deepClone",(function(){return gr})),t.d(r,"shareConstructor",(function(){return k})),t.d(r,"typeEquals",(function(){return D})),t.d(r,"isInstanceOf",(function(){return q})),t.d(r,"isFunction",(function(){return C})),t.d(r,"isObject",(function(){return B})),t.d(r,"isArray",(function(){return F})),t.d(r,"isNil",(function(){return N})),t.d(r,"isDefined",(function(){return G})),t.d(r,"isNaN",(function(){return R})),t.d(r,"asymEquals",(function(){return U})),t.d(r,"shallowEquals",(function(){return W})),t.d(r,"equals",(function(){return z})),t.d(r,"multiEquals",(function(){return K})),t.d(r,"multiShallowEquals",(function(){return V}))}])},function(n,r,t){"use strict";t.r(r);var e=t(0);function u(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function o(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(t,!0).forEach((function(r){i(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function i(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=void 0;return r=Object(e.isObject)(n)?Object(e.deepClone)(n):n,{getState:function(){return Object(e.deepClone)(r)},setState:function(n){var t=Object(e.isObject)(r),u=Object(e.isObject)(n);r=!t&&u?{}:r,r=u?o({},r,{},Object(e.deepClone)(n)):n}}},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=c(n),t=r.getState,e=r.setState;return[t,e]},a=function(n){var r=n.init,t=void 0===r?{}:r,u=n.onSet,i=void 0===u?identity:u,c=n.mapSet,f=void 0===c?identity:c,a=n.onGet,l=void 0===a?identity:a,d=n.mapGet,y=void 0===d?identity:d,p=void 0;return p=Object(e.isObject)(t)?Object(e.deepClone)(t):t,{getState:function(){return l(p),y(Object(e.deepClone)(p))},setState:function(n){var r=Object(e.isObject)(p),t=Object(e.isObject)(n);i(p,n),p=!r&&t?{}:p,p=t?o({},p,{},Object(e.deepClone)(n)):n,p=f(p)}}};t.d(r,"createState",(function(){return c})),t.d(r,"useState",(function(){return f})),t.d(r,"useObservable",(function(){return a}))}]);