module.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=1)}([function(n,t){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}n.exports=function(n){var t={};function e(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==r(n)&&n&&n.__esModule)return n;var u=Object.create(null);if(e.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(u,o,function(t){return n[t]}.bind(null,o));return u},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";function u(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.r(t);var o=function(n){return function(t,r){return void 0===r?function(r){return n(t,r)}:n(t,r)}},i=function(n){return function(t,r,e){return void 0===r&&void 0===e?o((function(r,e){return n(t,r,e)})):void 0===e?function(e){return n(t,r,e)}:n(t,r,e)}},c=function(n){return n},f=function(n){return function(){return n}},a=o((function(n,t){return t?t[n]:void 0})),l=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";return function(r){return n.split(t).map((function(n){return a(n)})).reduce((function(n,t){return n&&t(n)}),r)}},d=function(n){return n?Object.keys(n):[]},p=function(n){var t={};return function(){for(var r=arguments.length,e=new Array(r),u=0;u<r;u++)e[u]=arguments[u];var o=e.join(",");return o in t||(t[o]=n.apply(void 0,e)),t[o]}},s=function(n,t){var r={};return function(){for(var e=arguments.length,u=new Array(e),o=0;o<e;o++)u[o]=arguments[o];var i=n(u);return i in r||(r[i]=t.apply(void 0,u)),r[i]}},y=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return t.reduce((function(n,t){return function(){return t(n.apply(void 0,arguments))}}))},m=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return t.reduce((function(n,t){return function(){return n(t.apply(void 0,arguments))}}))},v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:console.log;return t(n),n},h=i((function(n,t,r){return n(r,t)})),b=function(n){return n.reduce((function(n,t){return[t].concat(u(n))}),[])},g=function(n){return function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return n.apply(void 0,u(b(r)))}},j=function(n){return function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),u=1;u<r;u++)e[u-1]=arguments[u];return n.call.apply(n,[t].concat(e))}},O=function(n){return function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),u=1;u<r;u++)e[u-1]=arguments[u];return n.bind.apply(n,[t].concat(e))}},A=i((function(n,t,r){return n.apply(t,r)})),w=function(n){return function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.slice(0,n)}},S=function(n){return function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return a(n,r)}},x=S(0),P=S(1),E=S(2),k=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(n){return n.apply(void 0,t)}},M=function(n){return function(t){return t.apply(void 0,u(n))}};function T(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(n){return(_="function"==typeof Symbol&&"symbol"==r(Symbol.iterator)?function(n){return r(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":r(n)})(n)}var I=o((function(n,t){return n instanceof t.constructor&&t instanceof n.constructor})),N=o((function(n,t){return _(t)===n})),q=o((function(n,t){return t instanceof n})),z=N("function"),D=N("object"),B=q(Array),F=function(n){return null==n},R=function(n){return null!=n},V=function(n){return n!=n},C=o((function(n,t){return d(n).map(m(a,x)).every((function(r){return r(n)===r(t)}))})),J=o((function(n,t){return Sn(d(n),d(t)).map(m(a,x)).every((function(r){return r(n)===r(t)}))})),L=function n(t,r){var e=_(t);return e===_(r)&&("object"==e?t instanceof Array&&r instanceof Array?En(t,r).every((function(t){var r=function(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var r=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return r}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t,2),e=r[0],u=r[1];return n(e,u)})):I(t,r)&&Sn(d(t),d(r)).every((function(e){return n(t[e],r[e])})):t===r)},U=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return Pn(t,On(t)).map((function(n){return L.apply(void 0,T(n))})).every(Boolean)},W=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return Pn(t,On(t)).map((function(n){return J.apply(void 0,T(n))})).every(Boolean)};function H(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var r=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return r}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function K(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Z=function(){return!0},G=function(){return!1},Q=function(n){return z(n)?n():n},X=function(n){return z(n)?function(){return!n.apply(void 0,arguments)}:!n},Y=o((function(n,t){return Q(n)&&Q(t)})),$=o((function(n,t){return Q(n)||Q(t)})),nn=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(n){return t.reduce((function(t,r){return t&&r(n)}),!0)}},tn=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(n){return t.reduce((function(t,r){return t||r(n)}),!1)}},rn=function(){return X(tn.apply(void 0,arguments))},en=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return[].concat(K(n),[[Z,c]]).reduce((function(n,t){if(n.fullfilled)return n;var e=H(t,2),u=e[0],o=e[1];return u.apply(void 0,r)?{fullfilled:!0,value:o.apply(void 0,r)}:n}),{fullfilled:!1,value:void 0}).value}},un=o((function(n,t){return tn(F,V)(t)?n:t})),on=i((function(n,t,r){return n(r)?r:t(r)})),cn=i((function(n,t,r){return n(r)?r:cn(n)(t)(t(r))}));function fn(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||an(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function an(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function ln(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function dn(n){if(Array.isArray(n))return n}var pn=a("length"),sn=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return t},yn=o((function(n,t){return t.map(n)})),mn=o((function(n,t){return t.filter(n)})),vn=function(n,t){return function(r){return t?r.reduce(n,t):r.reduce(n)}},hn=function(n){return 0===pn(n)},bn=o((function(n,t){return n.includes(t)})),gn=o((function(n,t){return yn(m(n,x),t)})),jn=function(n){return function(n,t){return dn(n)||function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var r=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return r}}(n,t)||ln()}(n,1)[0]},On=function(n){var t;return(dn(t=n)||an(t)||ln()).slice(1)},An=function(n){return n.reduce((function(n,t){return[t].concat(fn(n))}),[])},wn=o((function(n,t){return[].concat(fn(n),fn(t)).reduce((function(n,t){return n.includes(t)?n:[].concat(fn(n),[t])}),[])})),Sn=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return t.reduce(wn)},xn=o((function(n,t){return mn(X(bn(t)))(n)})),Pn=function n(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.some(hn)?[]:[r.map(jn)].concat(fn(n.apply(void 0,fn(r.map(On)))))},En=function n(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.every(hn)?[]:[fn(r.map(jn))].concat(fn(n.apply(void 0,fn(r.map(On)))))},kn=vn((function(n,t){return B(t)?[].concat(fn(n),fn(t)):[].concat(fn(n),[t])}),[]),Mn=function(n,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=n,u=[];e<t;)u.push(e),e+=r;return u},Tn=function(n,t){for(var r=[],e=0;e<n;e++)r.push(t);return r},_n=o((function(n,t){return t+n})),In=o((function(n,t){return t-n})),Nn=o((function(n,t){return t*n})),qn=o((function(n,t){return t/n})),zn=o((function(n,t){return t%n})),Dn=o((function(n,t){return Math.pow(t,n)})),Bn=o((function(n,t){return t>=n})),Fn=o((function(n,t){return t>n})),Rn=o((function(n,t){return t<=n})),Vn=o((function(n,t){return t<n})),Cn=o((function(n,t){return n===t})),Jn=X(Cn),Ln=i((function(n,t,r){return Cn(n(t),n(r))})),Un=function(n,t){return n<t?n:t},Wn=function(n,t){return n>t?n:t},Hn=y(zn(2),Cn(0)),Kn=y(zn(2),Cn(1)),Zn=qn(2),Gn=Math.floor,Qn=Math.ceil,Xn=function(n){return n<0?-n:n},Yn=Nn(-1),$n=function(n){return 180*n/Math.PI},nt=function(n){return n*Math.PI/180},tt=_n(1),rt=In(1),et=function(n){return m(m(qn,pn)(n),vn(_n))(n)},ut=function(n){return Math.random()*n},ot=m(Math.floor,ut);function it(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function ct(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?it(r,!0).forEach((function(t){ft(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):it(r).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function ft(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var at=o((function(n,t){return d(t).reduce((function(r,e){return ct({},r,ft({},n(e),t[e]))}),{})})),lt=o((function(n,t){return d(t).reduce((function(r,e){return ct({},r,ft({},e,n(t[e])))}),{})})),dt=o((function(n,t){return n.reduce((function(n,r){return ct({},n,ft({},r,t[r]))}),{})})),pt=o((function(n,t){return dt(xn(d(n),d(t)))(n)})),st=o((function(n,t){return dt(xn(d(t),n),t)})),yt=function(n){return vn((function(t,r){return F(n[r])?t:ct({},t,ft({},r,n[r]))}),{})(d(n))},mt=function(n){return y(d,yn((function(t){return[t,a(t,n)]})))(n)},vt=function(n){return vn((function(n,t){var r=function(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var r=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return r}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t,2);return ct({},n,ft({},r[0],r[1]))}),{})(n)},ht=function(n){return ct({},n)},bt=function n(t){var r={};return at((function(e){var u=m(B,a(e))(t),o=m(D,a(e))(t);r[e]=u?function(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t[e]):o?n(t[e]):t[e]}),t),r};e.d(t,"length",(function(){return pn})),e.d(t,"createArray",(function(){return sn})),e.d(t,"map",(function(){return yn})),e.d(t,"filter",(function(){return mn})),e.d(t,"reduce",(function(){return vn})),e.d(t,"isEmpty",(function(){return hn})),e.d(t,"belongs",(function(){return bn})),e.d(t,"mapOverUnary",(function(){return gn})),e.d(t,"head",(function(){return jn})),e.d(t,"tail",(function(){return On})),e.d(t,"reverse",(function(){return An})),e.d(t,"binaryUnion",(function(){return wn})),e.d(t,"union",(function(){return Sn})),e.d(t,"difference",(function(){return xn})),e.d(t,"zip",(function(){return Pn})),e.d(t,"inclusiveZip",(function(){return En})),e.d(t,"flatten",(function(){return kn})),e.d(t,"range",(function(){return Mn})),e.d(t,"repeat",(function(){return Tn})),e.d(t,"curry2",(function(){return o})),e.d(t,"curry3",(function(){return i})),e.d(t,"identity",(function(){return c})),e.d(t,"justOf",(function(){return f})),e.d(t,"prop",(function(){return a})),e.d(t,"path",(function(){return l})),e.d(t,"keysOf",(function(){return d})),e.d(t,"memo",(function(){return p})),e.d(t,"memoBy",(function(){return s})),e.d(t,"pipe",(function(){return y})),e.d(t,"compose",(function(){return m})),e.d(t,"log",(function(){return v})),e.d(t,"cardinal",(function(){return h})),e.d(t,"flip",(function(){return g})),e.d(t,"call",(function(){return j})),e.d(t,"bind",(function(){return O})),e.d(t,"apply",(function(){return A})),e.d(t,"take",(function(){return w})),e.d(t,"takeOrdinal",(function(){return S})),e.d(t,"takeFirst",(function(){return x})),e.d(t,"takeSecond",(function(){return P})),e.d(t,"teakeThird",(function(){return E})),e.d(t,"callWith",(function(){return k})),e.d(t,"applyWith",(function(){return M})),e.d(t,"True",(function(){return Z})),e.d(t,"False",(function(){return G})),e.d(t,"extract",(function(){return Q})),e.d(t,"not",(function(){return X})),e.d(t,"and",(function(){return Y})),e.d(t,"or",(function(){return $})),e.d(t,"allPass",(function(){return nn})),e.d(t,"anyPass",(function(){return tn})),e.d(t,"nonePass",(function(){return rn})),e.d(t,"conditional",(function(){return en})),e.d(t,"defaultTo",(function(){return un})),e.d(t,"unless",(function(){return on})),e.d(t,"until",(function(){return cn})),e.d(t,"add",(function(){return _n})),e.d(t,"sub",(function(){return In})),e.d(t,"mult",(function(){return Nn})),e.d(t,"div",(function(){return qn})),e.d(t,"mod",(function(){return zn})),e.d(t,"pow",(function(){return Dn})),e.d(t,"gte",(function(){return Bn})),e.d(t,"gt",(function(){return Fn})),e.d(t,"lte",(function(){return Rn})),e.d(t,"lt",(function(){return Vn})),e.d(t,"eq",(function(){return Cn})),e.d(t,"neq",(function(){return Jn})),e.d(t,"eqBy",(function(){return Ln})),e.d(t,"min",(function(){return Un})),e.d(t,"max",(function(){return Wn})),e.d(t,"isEven",(function(){return Hn})),e.d(t,"isOdd",(function(){return Kn})),e.d(t,"half",(function(){return Zn})),e.d(t,"floor",(function(){return Gn})),e.d(t,"ceil",(function(){return Qn})),e.d(t,"abs",(function(){return Xn})),e.d(t,"inverse",(function(){return Yn})),e.d(t,"toDegrees",(function(){return $n})),e.d(t,"toRadians",(function(){return nt})),e.d(t,"inc",(function(){return tt})),e.d(t,"dec",(function(){return rt})),e.d(t,"mean",(function(){return et})),e.d(t,"random",(function(){return ut})),e.d(t,"integerRandom",(function(){return ot})),e.d(t,"mapKeys",(function(){return at})),e.d(t,"mapValues",(function(){return lt})),e.d(t,"pick",(function(){return dt})),e.d(t,"diff",(function(){return pt})),e.d(t,"omit",(function(){return st})),e.d(t,"strip",(function(){return yt})),e.d(t,"entries",(function(){return mt})),e.d(t,"fromEntries",(function(){return vt})),e.d(t,"clone",(function(){return ht})),e.d(t,"deepClone",(function(){return bt})),e.d(t,"shareConstructor",(function(){return I})),e.d(t,"typeEquals",(function(){return N})),e.d(t,"isInstanceOf",(function(){return q})),e.d(t,"isFunction",(function(){return z})),e.d(t,"isObject",(function(){return D})),e.d(t,"isArray",(function(){return B})),e.d(t,"isNil",(function(){return F})),e.d(t,"isDefined",(function(){return R})),e.d(t,"isNaN",(function(){return V})),e.d(t,"asymEquals",(function(){return C})),e.d(t,"shallowEquals",(function(){return J})),e.d(t,"equals",(function(){return L})),e.d(t,"multiEquals",(function(){return U})),e.d(t,"multiShallowEquals",(function(){return W}))}])},function(n,t,r){"use strict";r.r(t);var e=function n(t){return{get:function(){return t},map:function(r){return n(r(t))},open:function(n){return n(t)},morph:function(n){return n(t)},transmorph:function(n,r){return n(r(t))}}};e.of=e;var u=r(0),o=function n(t){var r=t;return{scale:function(t){return Object(u.compose)(n,Object(u.map)(Object(u.mult)(t)))(r)},add:function(n){return this.map((function(t,r){return n.get(r)+t}))},sub:function(n){return this.map((function(t,r){return n.get(r)-t}))},mult:function(n){return this.map((function(t,r){return n.get(r)*t}))},mod:function(){return Math.sqrt(Object(u.reduce)(u.add)(r))},_normalize:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.scale(this.mod()).scale(n)},normalize:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._normalize()._normalize(n)},distance:function(n){return this.sub(n).mod()},toArray:function(){return this.get()},reduce:function(n,t){return Object(u.reduce)(n,t)(r)},get:function(n){return Object(u.isNil)(n)?r:r[n]||1},map:function(t){return Object(u.compose)(n,Object(u.map)(t))(r)},open:function(n){return Object(u.compose)(Object(u.call)("get"),Object(u.map)(n))(this)},morph:function(n){return n(r)},transmorph:function(n,t){return Object(u.compose)(n,t)(r)}}};o.of=o;var i=function n(t){var r=new String(t);return r.toArray=function(){return r.split("")},r.innerMap=function(t){return n(this.map(t).join(""))},r.reduce=function(n,t){return this.toArray().reduce(n,t)},r.forEach=function(n){this.toArray().forEach(n)},r.get=function(n){return Object(u.isNil)(n)?r.valueOf():r.charAt(n)},r.map=function(n){return this.toArray().map(n)},r.open=function(n){return this.map(n).get()},r.morph=function(n){return n(r)},r.transmorph=function(n,t){return n(t(r))},r};i.of=i;var c=void 0;function f(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function a(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(n){return{data:n,next:null,link:function(n){this.next=n},unlink:function(){this.next=null}}},d=function n(){for(var t,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var i=Object(u.flatten)(e),d=i.map(l);d.length&&d.reduce((function(n,t){return n.link(t),t}));var p=d[0]||null,s=d[d.length-1]||p,y=d.length,m=function(n){for(var t=0,r=n;r;)r=r.next,t++;y=t};return f(t={head:function(){return this.get(0)},tail:function(){return this.filter((function(n,t){return 0!==t}))},length:function(){return y},map:function(t){for(var r=n(),e=y>0?p:void 0,u=0;e;)r.append(t(e.data,u,this)),e=e.next,u++;return r},filter:function(t){for(var r=n(),e=y>0?p:void 0,u=0;e;)t(e.data,u,this)&&r.append(e.data),e=e.next,u++;return r},reduce:function(n,t){if(y<=1)return p&&p.data||t;for(var r=t||p.data,e=p.next;e;)r=n(r,e.data,1,this),e=e.next;return r},append:function(n){var t=l(n);0===y?s=p=t:(s.link(t),s=s.next),m(p)},preppend:function(n){var t=l(n);0===y?s=p=t:(t.link(p),p=t),m(p)},get:function(n){return Object(u.prop)("data")(this.getNode(n))},getNode:function(n){if(n>=0&&n<y){for(var t=p;0<n&&t.next;)t=t.next;return t}},delete:function(n){if(n>=0&&n<y){if(0===n)p=p.next;else{var t=c.get(n-1);t.next=t.next.next}m(p)}},toArray:function(){return a(this)}},Symbol.iterator,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=p,0===y){n.next=4;break}return n.next=4,t.data;case 4:if(!t||null===t.next){n.next=10;break}return t=t.next,n.next=8,t.data;case 8:n.next=4;break;case 10:case"end":return n.stop()}}),n)}))),f(t,"morph",(function(n){return n(a(this))})),f(t,"transmorph",(function(n,t){return n(a(this.map(t)))})),t};d.of=d;var p=function n(t){return{isNothing:function(){return Object(u.isNil)(t)},isJust:function(){return!Object(u.isNil)(t)},get:function(){return this.isNothing()?this:t},map:function(r){return this.isNothing()?this:n.of(r(t))},open:function(n){return this.map(n).get()},morph:function(n){return n(t)},transmorph:function(n,t){return this.map(t).morph(n)}}};p.of=p;var s=function(n){var t=n||u.identity;return{get:function(){return t()},map:function(n){return t=Object(u.compose)(n,t),this},morph:function(n){return n(this.get())}}};function y(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}s.of=s;var m=function n(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];var o=r;return{get x(){return this.get(0)},get y(){return this.get(1)},scale:function(t){return n.apply(void 0,y(Object(u.map)(Object(u.mult)(t),o)))},add:function(n){return this.map((function(t,r){return n.get(r)+t}))},sub:function(n){return this.map((function(t,r){return t-n.get(r)}))},mult:function(n){return this.map((function(t,r){return n.get(r)*t}))},mod:function(){return Math.sqrt(Object(u.reduce)(u.add)(o))},_normalize:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.scale(this.mod()).scale(n)},normalize:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._normalize()._normalize(n)},distance:function(n){return this.sub(n).mod()},toArray:function(){return o},elevate:function(t){return n.apply(void 0,o.concat([t]))},reduce:function(n,t){return Object(u.reduce)(n,t)(o)},toString:function(){return"".concat(o)},get:function(n){return Object(u.isNil)(n)?o:o[n]||0},map:function(t){return n.apply(void 0,y(Object(u.map)(t,o)))},open:function(n){return Object(u.compose)(Object(u.call)("get"),Object(u.map)(n))(this)},morph:function(n){return n(o)},transmorph:function(n,t){return Object(u.compose)(n,t)(o)}}};m.of=m,r.d(t,"Functor",(function(){return e})),r.d(t,"HomogeneousVector",(function(){return o})),r.d(t,"JString",(function(){return i})),r.d(t,"LinkedList",(function(){return d})),r.d(t,"Maybe",(function(){return p})),r.d(t,"Pipeline",(function(){return s})),r.d(t,"Vector",(function(){return m}))}]);