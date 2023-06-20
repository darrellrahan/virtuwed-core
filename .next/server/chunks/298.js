exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 6340:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Playfair_Display_03547c', '__Playfair_Display_Fallback_03547c'","fontStyle":"normal"},
	"className": "__className_03547c"
};


/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5284);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 7071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5830)();
}


/***/ }),

/***/ 5284:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 6545:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var e=__webpack_require__(6786),t=__webpack_require__(8038),n=__webpack_require__(8704);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var i={exports:{}};i.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x=function(e){return e instanceof j},C=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},S=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new j(n)},k=y;k.l=C,k.i=x,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e)}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return k},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return S(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<S(e)},v.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!k.u(t)||t,u=k.p(e),h=function(e,t){var i=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case l:var b=this.$locale().weekStart||0,w=(p<b?p+7:p)-b;return h(r?v-w:v+(6-w),g);case s:case f:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=k.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],m=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var p=this.clone().set(f,1);p.$d[h](m),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[k.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var m=k.p(u),p=function(e){var t=S(h);return k.w(t.date(t.date()+Math.round(e*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return p(1);if(m===l)return p(7);var g=(f={},f[o]=t,f[a]=n,f[i]=e,f)[m]||1,v=this.$d.getTime()+r*g;return k.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return k.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:k.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:k.s(o,2,"0"),h:d(1),hh:d(2),a:f(o,a,!0),A:f(o,a,!1),m:String(a),mm:k.s(a,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||m[e]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var m,p=k.p(f),g=S(r),v=(g.utcOffset()-this.utcOffset())*t,y=this-g,b=k.m(this,g);return b=(m={},m[d]=b/12,m[c]=b,m[u]=b/3,m[l]=(y-v)/6048e5,m[s]=(y-v)/864e5,m[a]=y/n,m[o]=y/t,m[i]=y/e,m)[p]||y,h?b:k.a(b)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return k.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),N=j.prototype;return S.prototype=N,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){N[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,j,S),e.$i=!0),S},S.locale=C,S.isDayjs=x,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var o=r(i.exports);!function(){function e(e){var t=!0,n=!1,r=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!i[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function l(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function c(n){n.metaKey||n.altKey||n.ctrlKey||(o(e.activeElement)&&s(e.activeElement),t=!0)}function u(e){t=!1}function d(e){o(e.target)&&(t||a(e.target))&&s(e.target)}function f(e){o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),100),l(e.target))}function h(e){"hidden"===document.visibilityState&&(n&&(t=!0),m())}function m(){document.addEventListener("mousemove",g),document.addEventListener("mousedown",g),document.addEventListener("mouseup",g),document.addEventListener("pointermove",g),document.addEventListener("pointerdown",g),document.addEventListener("pointerup",g),document.addEventListener("touchmove",g),document.addEventListener("touchstart",g),document.addEventListener("touchend",g)}function p(){document.removeEventListener("mousemove",g),document.removeEventListener("mousedown",g),document.removeEventListener("mouseup",g),document.removeEventListener("pointermove",g),document.removeEventListener("pointerdown",g),document.removeEventListener("pointerup",g),document.removeEventListener("touchmove",g),document.removeEventListener("touchstart",g),document.removeEventListener("touchend",g)}function g(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,p())}document.addEventListener("keydown",c,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",h,!0),m(),e.addEventListener("focus",d,!0),e.addEventListener("blur",f,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}();var a,s={cardBgColor:"#ffffff",cardDetailsBackGround:"#ffffff",cardDetailsColor:"#000",cardMediaBgColor:"#f5f5f5",cardSubtitleColor:"#000",cardTitleColor:"#007FFF",detailsColor:"#000",iconBackgroundColor:"#007FFF",nestedCardBgColor:"#f5f5f5",nestedCardDetailsBackGround:"#f5f5f5",nestedCardDetailsColor:"#000",nestedCardSubtitleColor:"#000",nestedCardTitleColor:"#000",primary:"#007FFF",secondary:"#ffdf00",titleColor:"#007FFF",titleColorActive:"#007FFF"},l={cardBgColor:"#191919",cardDetailsBackGround:"#191919",cardDetailsColor:"#ffff0f",cardMediaBgColor:"#2f2f2f",cardSubtitleColor:"#ffffff",cardTitleColor:"#007FFF",detailsColor:"#ffffff",iconBackgroundColor:"#007FFF",nestedCardBgColor:"#333333",nestedCardDetailsBackGround:"#333333",nestedCardDetailsColor:"#ffffff",nestedCardSubtitleColor:"#ffffff",nestedCardTitleColor:"#ffffff",primary:"#007FFF",secondary:"#ffdf00",titleColor:"#007FFF",titleColorActive:"#007FFF"},c=function(e,t){return`rgba(${parseInt(e.slice(1,3),16)}, ${parseInt(e.slice(3,5),16)}, ${parseInt(e.slice(5,7),16)}, ${t})`},u=function(e){return"HORIZONTAL"===e||"VERTICAL"===e?"reveal":"VERTICAL_ALTERNATING"===e?"slide_from_sides":"reveal"},d=t.createContext({}),f=function(n){var r=n.cardHeight;void 0===r&&(r=200);var i=n.cardLess;void 0===i&&(i=!1);var o=n.flipLayout,a=n.items;void 0===a&&(a=[]);var c=n.theme,f=n.buttonTexts,h=n.classNames,m=n.mode;void 0===m&&(m="VERTICAL_ALTERNATING");var p=n.fontSizes,g=n.textOverlay,v=n.darkMode,y=n.slideShow,b=n.onThemeChange,w=n.mediaSettings,x=n.mediaHeight;void 0===x&&(x=200);var C=n.contentDetailsHeight;void 0===C&&(C=10);var S=t.useState(v),k=S[0],j=S[1],N=t.useMemo((function(){return Math.max(C||0+x||0,r)}),[]),A=t.useMemo((function(){var e=Math.round(.75*N);return C>N?Math.min(C,e):Math.max(C,e)}),[N]),T=t.useCallback((function(){j(!k),null==b||b()}),[k]),E=t.useMemo((function(){return Object.assign({},{borderLessCards:!1,cardHeight:N,cardLess:!1,disableAutoScrollOnClick:!1,disableClickOnCircle:!1,enableBreakPoint:!0,enableDarkToggle:!1,focusActiveItemOnLoad:!1,lineWidth:3,mediaHeight:200,nestedCardHeight:150,scrollable:{scrollbar:!1},showAllCardsHorizontal:!1,showProgressOnSlideshow:y,slideItemDuration:2e3,slideShowType:u(m),textOverlay:!1,timelinePointDimension:16,timelinePointShape:"circle",titleDateFormat:"MMM DD, YYYY",useReadMore:!0,verticalBreakPoint:1028},Object.assign({},n,{activeItemIndex:o?(null==a?void 0:a.length)-1:0,buttonTexts:Object.assign({},{dark:"Switch to Dark Mode",first:"Go to First",last:"Go to Last",light:"Switch to Light Mode",next:"Next",play:"Play Slideshow",previous:"Previous",stop:"Stop Slideshow"},f),cardHeight:i?r||80:r,classNames:Object.assign({},{card:"rc-card",cardMedia:"rc-card-media",cardSubTitle:"rc-card-subtitle",cardText:"rc-card-text",cardTitle:"rc-card-title",controls:"rc-controls",title:"rc-title"},h),contentDetailsHeight:A,darkMode:k,fontSizes:Object.assign({},{cardSubtitle:"0.85rem",cardText:"1rem",cardTitle:"1rem",title:"1rem"},p),mediaSettings:Object.assign({},{align:"VERTICAL"!==m||g?"center":"left",imageFit:"cover"},w),theme:Object.assign({},(e=k,e?l:s),c),toggleDarkMode:T}));var e}),[A,N,k,T]),M=n.children;return e.jsx(d.Provider,{value:Object.assign({},E,{darkMode:k,toggleDarkMode:T}),children:M})},h={exports:{}};a=h,function(){var e={}.hasOwnProperty;function t(){for(var n=arguments,r=[],i=0;i<arguments.length;i++){var o=n[i];if(o){var a=typeof o;if("string"===a||"number"===a)r.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&r.push(s)}}else if("object"===a){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}a.exports?(t.default=t,a.exports=t):window.classNames=t}();var m,p=r(h.exports),g=function(e,n,r){void 0===r&&(r=!0);var i=t.useState(!1),o=i[0],a=i[1];return t.useEffect((function(){if(r){var t=window.matchMedia(e);t.matches!==o&&a(t.matches);var n=function(){a(t.matches)};return t.addEventListener("change",n),function(){t.removeEventListener("change",n)}}}),[e,o,r]),t.useEffect((function(){o&&(null==n||n())}),[o]),o},v=function(e,n){var r=t.useState(0),i=r[0],o=r[1];return[i,t.useMemo((function(){return function(t,r){var i=t.clientWidth,a=t.scrollLeft,s=t.scrollTop,l=t.clientHeight,c=r.pointOffset,u=r.pointWidth,d=r.contentHeight,f=r.contentOffset;if(c)if("HORIZONTAL"===e&&n&&u){var h=a+i,m=c+u,p=c-a,g=h-c;c>=a&&m<=h||(c<a&&m>a||m>h&&c<h)?(p<=n&&p>=0||g<=n&&g>=0)&&o(c-n):o(c-n)}else if("VERTICAL"===e||"VERTICAL_ALTERNATING"===e){if(!f||!d)return;var v=s+l,y=f+d,b=f-d,w=!(f>=s&&y<=v)||(f<s&&y>s||y>v&&f<v);w&&b+d<v?o(b+Math.round(d/2)):w&&o(b)}}}),[e,n])]},y=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-left",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})},b=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-right",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})},w=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-maximize-2",children:e.jsx("path",{d:"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"})})},x=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"})})},C=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M5 12h14"})})},S=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},k=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})},j=function(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:12,cy:12,r:10}),e.jsx("path",{d:"M9 9h6v6H9z"})]})},N=function(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-sun",children:[e.jsx("circle",{cx:12,cy:12,r:5}),e.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]})},A=function(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevrons-left",children:[e.jsx("polyline",{points:"11 17 6 12 11 7"}),e.jsx("polyline",{points:"18 17 13 12 18 7"})]})},T=function(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevrons-right",children:[e.jsx("polyline",{points:"13 17 18 12 13 7"}),e.jsx("polyline",{points:"6 17 11 12 6 7"})]})},E=function(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})},M={exports:{}},O={};var L,$={}; true?M.exports=function(){if(m)return O;m=1;var e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen");function g(e){if("object"==typeof e&&null!==e){var m=e.$$typeof;switch(m){case t:switch(e=e.type){case r:case o:case i:case u:case d:return e;default:switch(e=e&&e.$$typeof){case l:case s:case c:case h:case f:case a:return e;default:return m}}case n:return m}}}return e=Symbol.for("react.module.reference"),O.ContextConsumer=s,O.ContextProvider=a,O.Element=t,O.ForwardRef=c,O.Fragment=r,O.Lazy=h,O.Memo=f,O.Portal=n,O.Profiler=o,O.StrictMode=i,O.Suspense=u,O.SuspenseList=d,O.isAsyncMode=function(){return!1},O.isConcurrentMode=function(){return!1},O.isContextConsumer=function(e){return g(e)===s},O.isContextProvider=function(e){return g(e)===a},O.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},O.isForwardRef=function(e){return g(e)===c},O.isFragment=function(e){return g(e)===r},O.isLazy=function(e){return g(e)===h},O.isMemo=function(e){return g(e)===f},O.isPortal=function(e){return g(e)===n},O.isProfiler=function(e){return g(e)===o},O.isStrictMode=function(e){return g(e)===i},O.isSuspense=function(e){return g(e)===u},O.isSuspenseList=function(e){return g(e)===d},O.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===r||t===o||t===i||t===u||t===d||t===p||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===f||t.$$typeof===a||t.$$typeof===s||t.$$typeof===c||t.$$typeof===e||void 0!==t.getModuleId)},O.typeOf=g,O}():0;var R=M.exports;function I(e){function t(e,r,l,c,f){for(var h,m,p,g,w,C=0,S=0,k=0,j=0,N=0,L=0,R=p=h=0,D=0,P=0,_=0,H=0,F=l.length,z=F-1,W="",B="",V="",G="";D<F;){if(m=l.charCodeAt(D),D===z&&0!==S+j+k+C&&(0!==S&&(m=47===S?10:47),j=k=C=0,F++,z++),0===S+j+k+C){if(D===z&&(0<P&&(W=W.replace(d,"")),0<W.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:W+=l.charAt(D)}m=59}switch(m){case 123:for(h=(W=W.trim()).charCodeAt(0),p=1,H=++D;D<F;){switch(m=l.charCodeAt(D)){case 123:p++;break;case 125:p--;break;case 47:switch(m=l.charCodeAt(D+1)){case 42:case 47:e:{for(R=D+1;R<z;++R)switch(l.charCodeAt(R)){case 47:if(42===m&&42===l.charCodeAt(R-1)&&D+2!==R){D=R+1;break e}break;case 10:if(47===m){D=R+1;break e}}D=R}}break;case 91:m++;case 40:m++;case 34:case 39:for(;D++<z&&l.charCodeAt(D)!==m;);}if(0===p)break;D++}if(p=l.substring(H,D),0===h&&(h=(W=W.replace(u,"").trim()).charCodeAt(0)),64===h){switch(0<P&&(W=W.replace(d,"")),m=W.charCodeAt(1)){case 100:case 109:case 115:case 45:P=r;break;default:P=O}if(H=(p=t(r,P,p,m,f+1)).length,0<$&&(w=s(3,p,P=n(O,W,_),r,T,A,H,m,f,c),W=P.join(""),void 0!==w&&0===(H=(p=w.trim()).length)&&(m=0,p="")),0<H)switch(m){case 115:W=W.replace(x,a);case 100:case 109:case 45:p=W+"{"+p+"}";break;case 107:p=(W=W.replace(v,"$1 $2"))+"{"+p+"}",p=1===M||2===M&&o("@"+p,3)?"@-webkit-"+p+"@"+p:"@"+p;break;default:p=W+p,112===c&&(B+=p,p="")}else p=""}else p=t(r,n(r,W,_),p,c,f+1);V+=p,p=_=P=R=h=0,W="",m=l.charCodeAt(++D);break;case 125:case 59:if(1<(H=(W=(0<P?W.replace(d,""):W).trim()).length))switch(0===R&&(45===(h=W.charCodeAt(0))||96<h&&123>h)&&(H=(W=W.replace(" ",":")).length),0<$&&void 0!==(w=s(1,W,r,e,T,A,B.length,c,f,c))&&0===(H=(W=w.trim()).length)&&(W="\0\0"),h=W.charCodeAt(0),m=W.charCodeAt(1),h){case 0:break;case 64:if(105===m||99===m){G+=W+l.charAt(D);break}default:58!==W.charCodeAt(H-1)&&(B+=i(W,h,m,W.charCodeAt(2)))}_=P=R=h=0,W="",m=l.charCodeAt(++D)}}switch(m){case 13:case 10:47===S?S=0:0===1+h&&107!==c&&0<W.length&&(P=1,W+="\0"),0<$*I&&s(0,W,r,e,T,A,B.length,c,f,c),A=1,T++;break;case 59:case 125:if(0===S+j+k+C){A++;break}default:switch(A++,g=l.charAt(D),m){case 9:case 32:if(0===j+C+S)switch(N){case 44:case 58:case 9:case 32:g="";break;default:32!==m&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===j+S+C&&(P=_=1,g="\f"+g);break;case 108:if(0===j+S+C+E&&0<R)switch(D-R){case 2:112===N&&58===l.charCodeAt(D-3)&&(E=N);case 8:111===L&&(E=L)}break;case 58:0===j+S+C&&(R=D);break;case 44:0===S+k+j+C&&(P=1,g+="\r");break;case 34:case 39:0===S&&(j=j===m?0:0===j?m:j);break;case 91:0===j+S+k&&C++;break;case 93:0===j+S+k&&C--;break;case 41:0===j+S+C&&k--;break;case 40:if(0===j+S+C){if(0===h)if(2*N+3*L==533);else h=1;k++}break;case 64:0===S+k+j+C+R+p&&(p=1);break;case 42:case 47:if(!(0<j+C+k))switch(S){case 0:switch(2*m+3*l.charCodeAt(D+1)){case 235:S=47;break;case 220:H=D,S=42}break;case 42:47===m&&42===N&&H+2!==D&&(33===l.charCodeAt(H+2)&&(B+=l.substring(H,D+1)),g="",S=0)}}0===S&&(W+=g)}L=N,N=m,D++}if(0<(H=B.length)){if(P=r,0<$&&(void 0!==(w=s(2,B,P,e,T,A,H,c,f,c))&&0===(B=w).length))return G+B+V;if(B=P.join(",")+"{"+B+"}",0!=M*E){switch(2!==M||o(B,2)||(E=0),E){case 111:B=B.replace(b,":-moz-$1")+B;break;case 112:B=B.replace(y,"::-webkit-input-$1")+B.replace(y,"::-moz-$1")+B.replace(y,":-ms-input-$1")+B}E=0}}return G+B+V}function n(e,t,n){var i=t.trim().split(p);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<o;++s)for(var c=0;c<a;++c)t[l++]=r(e[c]+" ",i[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var a=e+";",s=2*t+3*n+4*r;if(944===s){e=a.indexOf(":",9)+1;var l=a.substring(e,a.length-1).trim();return l=a.substring(0,e).trim()+l+";",1===M||2===M&&o(l,1)?"-webkit-"+l+l:l}if(0===M||2===M&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(N,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(l=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+l+a;case 1005:return h.test(a)?a.replace(f,":-webkit-")+a.replace(f,":-moz-")+a:a;case 1e3:switch(t=(l=a.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=a.replace(w,"tb");break;case 232:l=a.replace(w,"tb-rl");break;case 220:l=a.replace(w,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+l+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(l=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:a=a.replace(l,"-webkit-"+l)+";"+a;break;case 207:case 102:a=a.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(l,"-webkit-"+l)+";"+a.replace(l,"-ms-"+l+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return l=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+l+"-ms-flex-"+l+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(S,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(S,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===j.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):a.replace(l,"-webkit-"+l)+a.replace(l,"-moz-"+l.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===n+r&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+a}return a}function o(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),R(2!==t?r:r.replace(k,"$1"),n,t)}function a(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(C," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,i,o,a,s,l,u){for(var d,f=0,h=t;f<$;++f)switch(d=L[f].call(c,e,h,n,r,i,o,a,s,l,u)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function l(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!=typeof e?M=1:(M=2,R=e):M=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<$){var i=s(-1,n,r,r,T,A,0,0,0,0);void 0!==i&&"string"==typeof i&&(n=i)}var o=t(O,r,n,0,0);return 0<$&&(void 0!==(i=s(-2,o,r,r,T,A,o.length,0,0,0))&&(o=i)),"",E=0,A=T=1,o}var u=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,h=/zoo|gra/,m=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,S=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,N=/([^-])(image-set\()/,A=1,T=1,E=0,M=1,O=[],L=[],$=0,R=null,I=0;return c.use=function e(t){switch(t){case void 0:case null:$=L.length=0;break;default:if("function"==typeof t)L[$++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else I=0|!!t}return e},c.set=l,void 0!==e&&l(e),c}var D={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function P(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var _,H=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,F=P((function(e){return H.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),z={exports:{}},W={};var B,V={}; true?z.exports=function(){if(_)return W;_=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function b(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case r:case o:case i:case d:return e;default:switch(e=e&&e.$$typeof){case s:case u:case m:case h:case a:return e;default:return f}}case n:return f}}}function w(e){return b(e)===c}return W.AsyncMode=l,W.ConcurrentMode=c,W.ContextConsumer=s,W.ContextProvider=a,W.Element=t,W.ForwardRef=u,W.Fragment=r,W.Lazy=m,W.Memo=h,W.Portal=n,W.Profiler=o,W.StrictMode=i,W.Suspense=d,W.isAsyncMode=function(e){return w(e)||b(e)===l},W.isConcurrentMode=w,W.isContextConsumer=function(e){return b(e)===s},W.isContextProvider=function(e){return b(e)===a},W.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},W.isForwardRef=function(e){return b(e)===u},W.isFragment=function(e){return b(e)===r},W.isLazy=function(e){return b(e)===m},W.isMemo=function(e){return b(e)===h},W.isPortal=function(e){return b(e)===n},W.isProfiler=function(e){return b(e)===o},W.isStrictMode=function(e){return b(e)===i},W.isSuspense=function(e){return b(e)===d},W.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===u||e.$$typeof===g||e.$$typeof===v||e.$$typeof===y||e.$$typeof===p)},W.typeOf=b,W}():0;var G=z.exports,Y={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},q={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z={};function X(e){return G.isMemo(e)?q:Z[e.$$typeof]||Y}Z[G.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Z[G.Memo]=q;var J=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;var re=function e(t,n,r){if("string"!=typeof n){if(ne){var i=te(n);i&&i!==ne&&e(t,i,r)}var o=K(n);Q&&(o=o.concat(Q(n)));for(var a=X(t),s=X(n),l=0;l<o.length;++l){var c=o[l];if(!(U[c]||r&&r[c]||s&&s[c]||a&&a[c])){var u=ee(n,c);try{J(t,c,u)}catch(e){}}}}return t},ie=r(re);function oe(){return(oe=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var r=t[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var ae=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},se=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!R.typeOf(e)},le=Object.freeze([]),ce=Object.freeze({});function ue(e){return"function"==typeof e}function de(e){return false||e.displayName||e.name||"Component"}function fe(e){return e&&"string"==typeof e.styledComponentId}var he="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",me="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&(void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="production")),ge= false?0:{};function ve(){for(var e=arguments,t=arguments.length<=0?void 0:arguments[0],n=[],r=1,i=arguments.length;r<i;r+=1)n.push(r<0||e.length<=r?void 0:e[r]);return n.forEach((function(e){t=t.replace(/%[a-z]/,e)})),t}function ye(e){for(var t=arguments,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=t[i];throw true?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):"")):0}var be=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&ye(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),we=new Map,xe=new Map,Ce=1,Se=function(e){if(we.has(e))return we.get(e);for(;xe.has(Ce);)Ce++;var t=Ce++;return false&&0,we.set(e,t),xe.set(t,e),t},ke=function(e){return xe.get(e)},je=function(e,t){t>=Ce&&(Ce=t+1),we.set(e,t),xe.set(t,e)},Ne="style["+he+'][data-styled-version="5.3.10"]',Ae=new RegExp("^"+he+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Te=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Ee=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(Ae);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(je(c,l),Te(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},Me=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(he))return r}}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(he,"active"),r.setAttribute("data-styled-version","5.3.10");var a= true?__webpack_require__.nc:0;return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Oe=function(){function e(e){var t=this.element=Me(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}ye(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),Le=function(){function e(e){var t=this.element=Me(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),$e=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Re=me,Ie={isServer:!me,useCSSOMInjection:!pe},De=function(){function e(e,t,n){void 0===e&&(e=ce),void 0===t&&(t={}),this.options=oe({},Ie,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&me&&Re&&(Re=!1,function(e){for(var t=document.querySelectorAll(Ne),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(he)&&(Ee(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return Se(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(oe({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new $e(i):r?new Oe(i):new Le(i),new be(e)));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(Se(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Se(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(Se(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var o=ke(i);if(void 0!==o){var a=e.names.get(o),s=t.getGroup(i);if(a&&s&&a.size){var l=he+".g"+i+'[id="'+o+'"]',c="";void 0!==a&&a.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),Pe=/(a)(d)/gi,_e=function(e){return String.fromCharCode(e+(e>25?39:97))};function He(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_e(t%52)+n;return(_e(t%52)+n).replace(Pe,"$1-$2")}var Fe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ze=function(e){return Fe(5381,e)};var We=ze("5.3.10"),Be=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= true&&(void 0===n||n.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ue(n)&&!fe(n))return!1}return!0}(e),this.componentId=t,this.baseHash=Fe(We,t),this.baseStyle=n,De.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var o=rt(this.rules,e,t,n).join(""),a=He(Fe(this.baseHash,o)>>>0);if(!t.hasNameForId(r,a)){var s=n(o,"."+a,void 0,r);t.insertRules(r,a,s)}i.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=Fe(this.baseHash,n.hash),u="",d=0;d<l;d++){var f=this.rules[d];if("string"==typeof f)u+=f, false&&(0);else if(f){var h=rt(f,e,t,n),m=Array.isArray(h)?h.join(""):h;c=Fe(c,m+d),u+=m}}if(u){var p=He(c>>>0);if(!t.hasNameForId(r,p)){var g=n(u,"."+p,void 0,r);t.insertRules(r,p,g)}i.push(p)}}return i.join(" ")},e}(),Ve=/^\s*\/\/.*$/gm,Ge=[":","[",".","#"];var Ye=t.createContext();Ye.Consumer;var Ue=t.createContext(),qe=(Ue.Consumer,new De),Ze=function(e){var t,n,r,i,o=void 0===e?ce:e,a=o.options,s=void 0===a?ce:a,l=o.plugins,c=void 0===l?le:l,u=new I(s),d=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,o,a,s,l,c,u,d){switch(n){case 1:if(0===u&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),h=function(e,r,o){return 0===r&&-1!==Ge.indexOf(o[n.length])||o.match(i)?e:"."+t};function m(e,o,a,s){void 0===s&&(s="&");var l=e.replace(Ve,""),c=o&&a?a+" "+o+" { "+l+" }":l;return t=s,n=o,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(a||!o?"":o,c)}return u.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,h))},f,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=c.length?c.reduce((function(e,t){return t.name||ye(15),Fe(e,t.name)}),5381).toString():"",m}();var Xe=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ze);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return ye(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Ze),this.name+e.hash},e}(),Je=/([A-Z])/,Ke=/([A-Z])/g,Qe=/^ms-/,et=function(e){return"-"+e.toLowerCase()};function tt(e){return Je.test(e)?e.replace(Ke,et).replace(Qe,"-ms-"):e}var nt=function(e){return null==e||!1===e||""===e};function rt(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)""!==(i=rt(e[a],t,n,r))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(nt(e))return"";if(fe(e))return"."+e.styledComponentId;if(ue(e)){if("function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return false&&0,rt(l,t,n,r)}var c;return e instanceof Xe?n?(e.inject(n,r),e.getName(r)):e:se(e)?function e(t,n){var r,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!nt(t[a])&&(Array.isArray(t[a])&&t[a].isCss||ue(t[a])?o.push(tt(a)+":",t[a],";"):se(t[a])?o.push.apply(o,e(t[a],a)):o.push(tt(a)+": "+(r=a,(null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in D||r.startsWith("--")?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(o,["}"]):o}(e):e.toString()}var it=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ot(e){for(var t=arguments,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=t[i];return ue(e)||se(e)?it(rt(ae(le,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:it(rt(ae(e,r)))}var at=/invalid hook call/i,st=new Set,lt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ct=/(^-|-$)/g;function ut(e){return e.replace(lt,"-").replace(ct,"")}var dt=function(e){return He(ze(e)>>>0)};function ft(e){return"string"==typeof e&&( true||0)}var ht=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},mt=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function pt(e,t,n){var r=e[n];ht(t)&&ht(r)?gt(r,t):e[n]=t}function gt(e){for(var t=arguments,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=t[i];for(var o=0,a=r;o<a.length;o++){var s=a[o];if(ht(s))for(var l in s)mt(l)&&pt(e,s[l],l)}return e}var vt=t.createContext();vt.Consumer;var yt={};function bt(e,n,r){var i=fe(e),o=!ft(e),a=n.attrs,s=void 0===a?le:a,l=n.componentId,c=void 0===l?function(e,t){var n="string"!=typeof e?"sc":ut(e);yt[n]=(yt[n]||0)+1;var r=n+"-"+dt("5.3.10"+n+yt[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):l,u=n.displayName,d=void 0===u?function(e){return ft(e)?"styled."+e:"Styled("+de(e)+")"}(e):u,f=n.displayName&&n.componentId?ut(n.displayName)+"-"+n.componentId:n.componentId||c,h=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,m=n.shouldForwardProp;i&&e.shouldForwardProp&&(m=n.shouldForwardProp?function(t,r,i){return e.shouldForwardProp(t,r,i)&&n.shouldForwardProp(t,r,i)}:e.shouldForwardProp);var p,g=new Be(r,f,i?e.componentStyle:void 0),v=g.isStatic&&0===s.length,y=function(e,n){return function(e,n,r,i){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.shouldForwardProp,u=e.styledComponentId,d=e.target; false&&0;var f=function(e,t,n){void 0===e&&(e=ce);var r=oe({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,o,a=e;for(t in ue(a)&&(a=a(r)),a)r[t]=i[t]="className"===t?(n=i[t],o=a[t],n&&o?n+" "+o:n||o):a[t]})),[r,i]}(function(e,t,n){return void 0===n&&(n=ce),e.theme!==n.theme&&e.theme||t||n.theme}(n,t.useContext(vt),s)||ce,n,o),h=f[0],m=f[1],p=function(e,n,r,i){var o=t.useContext(Ye)||qe,a=t.useContext(Ue)||Ze,s=n?e.generateAndInjectStyles(ce,o,a):e.generateAndInjectStyles(r,o,a);return false&&0, false&&0,s}(a,i,h, false?0:void 0),g=r,v=m.$as||n.$as||m.as||n.as||d,y=ft(v),b=m!==n?oe({},n,{},m):n,w={};for(var x in b)"$"!==x[0]&&"as"!==x&&("forwardedAs"===x?w.as=b[x]:(c?c(x,F,v):!y||F(x))&&(w[x]=b[x]));return n.style&&m.style!==n.style&&(w.style=oe({},n.style,{},m.style)),w.className=Array.prototype.concat(l,u,p!==u?p:null,n.className,m.className).filter(Boolean).join(" "),w.ref=g,t.createElement(v,w)}(p,e,n,v)};return y.displayName=d,(p=t.forwardRef(y)).attrs=h,p.componentStyle=g,p.displayName=d,p.shouldForwardProp=m,p.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):le,p.styledComponentId=f,p.target=i?e.target:e,p.withComponent=function(e){var t=n.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["componentId"]),o=t&&t+"-"+(ft(e)?e:ut(de(e)));return bt(e,oe({},i,{attrs:h,componentId:o}),r)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?gt({},e.defaultProps,t):t}}), false&&(0),Object.defineProperty(p,"toString",{value:function(){return"."+p.styledComponentId}}),o&&ie(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var wt=function(e){return function e(t,n,r){if(void 0===r&&(r=ce),!R.isValidElementType(n))return ye(1,String(n));var i=function(){return t(n,r,ot.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,oe({},r,{},i))},i.attrs=function(i){return e(t,n,oe({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(bt,e)};function xt(e){var t=arguments; false&&0;for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=t[i];var o=ot.apply(void 0,[e].concat(r)).join(""),a=dt(o);return new Xe(a,o)}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){wt[e]=wt(e)})), false&&0, false&&(0);var Ct=wt,St=Ct.ul.withConfig({displayName:"TimelineNavWrapper"})(["background:rgba(229,229,229,0.85);border-radius:25px;display:flex;list-style:none;padding:0.25em 0.25em;"]),kt=Ct.li.withConfig({displayName:"TimelineNavItem"})(["padding:0.1em;display:flex;align-items:center;justify-content:center;",";"],(function(e){return e.disable?"pointer-events: none; filter: opacity(0.7)":""})),jt=Ct.button.withConfig({displayName:"TimelineNavButton"})(["align-items:center;background:",";border-radius:50%;border:0;color:#fff;cursor:pointer;display:flex;filter:drop-shadow(0 0 5px rgba(0,0,0,0.25));height:20px;justify-content:center;margin:0 0.2em;padding:0;transition:all 0.1s ease-in;width:20px;transform:",";&:active{filter:drop-shadow(0 0 2px rgba(0,0,0,0.25));transform:"," scale(0.9);}svg{width:80%;height:80%;}"],(function(e){return e.theme.primary}),(function(e){if("TRUE"===e.rotate)return"rotate(90deg)"}),(function(e){return"TRUE"===e.rotate?"rotate(90deg)":""})),Nt=Ct.div.withConfig({displayName:"TimelineControlContainer"})(["align-items:center;display:flex;justify-content:center;"]),At=function(n){var r=n.onNext,i=n.onPrevious,o=n.onFirst,a=n.onLast,s=n.disableLeft,l=n.disableRight,c=n.slideShowRunning,u=n.onReplay,f=n.slideShowEnabled,h=n.onToggleDarkMode,m=n.isDark,g=n.onPaused,v=t.useContext(d),w=v.mode,x=v.flipLayout,C=v.theme,k=v.buttonTexts,M=v.classNames,O=v.enableDarkToggle,L=t.useMemo((function(){return"HORIZONTAL"!==w}),[w]),$=t.useMemo((function(){return x&&"HORIZONTAL"===w}),[]),R=t.useMemo((function(){return s||c}),[s,c]),I=t.useMemo((function(){return l||c}),[l,c]),D=t.useCallback((function(){c?null==g||g():null==u||u()}),[c]),P=t.useMemo((function(){return x?null==k?void 0:k.next:null==k?void 0:k.previous}),[x]),_=t.useMemo((function(){return x?null==k?void 0:k.previous:null==k?void 0:k.next}),[x]),H=t.useMemo((function(){return c?null==k?void 0:k.stop:null==k?void 0:k.play}),[c]),F=t.useMemo((function(){return x?null==k?void 0:k.first:null==k?void 0:k.last}),[x]),z=t.useMemo((function(){return x?null==k?void 0:k.last:null==k?void 0:k.first}),[x]);return e.jsx(Nt,{slideShowActive:c,flip:$,children:e.jsxs(St,{className:p("timeline-controls",null==M?void 0:M.controls),children:[e.jsx(kt,{disable:R,children:e.jsx(jt,{mode:w,theme:C,onClick:$?a:o,title:z,"aria-label":z,"aria-disabled":s,"aria-controls":"timeline-main-wrapper",tabIndex:s?-1:0,rotate:L?"TRUE":"FALSE",children:e.jsx(A,{})})}),e.jsx(kt,{disable:R,children:e.jsx(jt,{mode:w,theme:C,onClick:$?r:i,title:P,"aria-label":P,"aria-disabled":s,"aria-controls":"timeline-main-wrapper",tabIndex:s?-1:0,rotate:L?"TRUE":"FALSE",children:e.jsx(y,{})})}),e.jsx(kt,{disable:I,children:e.jsx(jt,{mode:w,theme:C,onClick:$?i:r,title:_,"aria-label":_,"aria-disabled":l,"aria-controls":"timeline-main-wrapper",rotate:L?"TRUE":"FALSE",tabIndex:l?-1:0,children:e.jsx(b,{})})}),e.jsx(kt,{disable:I,children:e.jsx(jt,{mode:w,theme:C,onClick:$?o:a,title:F,"aria-label":F,"aria-disabled":l,"aria-controls":"timeline-main-wrapper",tabIndex:l?-1:0,rotate:L?"TRUE":"FALSE",children:e.jsx(T,{})})}),e.jsx(kt,{children:f&&e.jsx(jt,{theme:C,onClick:D,title:H,tabIndex:0,"aria-controls":"timeline-main-wrapper","aria-label":H,children:c?e.jsx(j,{}):e.jsx(E,{})})}),O?e.jsx(kt,{disable:c,children:e.jsx(jt,{theme:C,onClick:h,title:m?null==k?void 0:k.light:null==k?void 0:k.dark,tabIndex:0,"aria-controls":"timeline-main-wrapper","aria-label":m?null==k?void 0:k.light:null==k?void 0:k.dark,children:m?e.jsx(N,{}):e.jsx(S,{})})}):null]})})};At.displayName="Timeline Control";var Tt=ot(["scrollbar-color:"," default;scrollbar-width:thin;&::-webkit-scrollbar{width:0.3em;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,0.2);}&::-webkit-scrollbar-thumb{background-color:",";outline:1px solid ",";}"],(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary})),Et=ot(["&::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:2rem;background:linear-gradient( 0deg,var(--rc-gradient-color) 0%,rgba(255,255,255,0) 100% );}"]),Mt=Ct.div.withConfig({displayName:"MediaWrapper"})(["align-items:flex-start;align-self:center;background:",";border-radius:4px;flex-direction:row;height:",";padding:0.5em;pointer-events:",";position:relative;text-align:",";width:calc(100% - 1em);",";",""],(function(e){var t;return e.textOverlay?"none":null===(t=e.theme)||void 0===t?void 0:t.cardMediaBgColor}),(function(e){return e.textOverlay?"calc(100% - 1em)":"0"}),(function(e){return!e.active&&e.slideShowActive?"none":""}),(function(e){return e.align}),(function(e){return e.cardHeight?`min-height: ${e.cardHeight}px;`:""}),(function(e){return"HORIZONTAL"===e.mode||"left"===e.dir?"\n        justify-content: flex-start;\n      ":"\n        justify-content: flex-end;\n      "})),Ot=Ct.img.withConfig({displayName:"CardImage"})(["flex:4;justify-self:center;margin-left:auto;margin-right:auto;height:100%;width:100%;object-fit:",";object-position:center;visibility:",";border-radius:",";"],(function(e){return e.fit||"cover"}),(function(e){return e.visible?"visible":"hidden"}),(function(e){return e.enableBorderRadius?"6px":"0"})),Lt=Ct.video.withConfig({displayName:"CardVideo"})(["max-width:100%;max-height:100%;margin-left:auto;margin-right:auto;"]),$t=Ct.div.withConfig({displayName:"MediaDetailsWrapper"})(["bottom:0;left:0;right:0;margin-right:auto;width:",";display:flex;flex-direction:column;flex:1;overflow:hidden;"," position:",";"," "," --rc-gradient-color:",";",""],(function(e){switch(e.mode){case"HORIZONTAL":case"VERTICAL":case"VERTICAL_ALTERNATING":return"calc(90% - 0rem)"}}),(function(e){return e.textInMedia&&e.expandFull?ot(["height:100%;width:100%;border:0;"]):e.showText?e.textInMedia&&e.expandable?ot(["box-shadow:0 0 10px 0 rgba(0,0,0,0.2);border-radius:10px;height:50%;"]):void 0:ot(["height:15%;box-shadow:0 0 10px 0 rgba(0,0,0,0.2);border-radius:10px;"])}),(function(e){return e.absolutePosition?"absolute":"relative"}),(function(e){var t,n;return e.absolutePosition?`\n    left: 50%;\n    bottom: ${e.expandFull?"0%":" 5%"};\n    transform: translateX(-50%);\n    background: ${e.showText?null===(t=e.theme)||void 0===t?void 0:t.cardDetailsBackGround:null===(n=e.theme)||void 0===n?void 0:n.cardBgColor};\n    // backdrop-filter: blur(1px);\n    padding: 0.25rem;\n    ${e.showText?"overflow: auto;":"overflow: hidden;"}\n    transition: height 0.25s ease-out, width 0.25s ease-out, bottom 0.25s ease-out, background 0.25s ease-out;\n  `:""}),(function(e){return e.borderLessCard?"border-radius: 6px; box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);":""}),(function(e){return e.gradientColor}),(function(e){return e.gradientColor?Et:null})),Rt=Ct.span.withConfig({displayName:"ErrorMessage"})(["color:#a3a3a3;left:50%;position:absolute;text-align:center;top:50%;transform:translateY(-50%) translateX(-50%);"]),It=Ct.iframe.withConfig({displayName:"IFrameVideo"})(["position:relative;height:100%;width:100%;"]),Dt=Ct.div.withConfig({displayName:"DetailsTextWrapper"})(["align-self:center;display:flex;transition:height 0.5s ease;width:calc(100%);background:",";color:",";padding:0.5rem;border-bottom-left-radius:8px;border-bottom-right-radius:8px;position:relative;align-items:flex-start;justify-content:center;"," "," "," ",""],(function(e){return e.background}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.cardDetailsColor}),Tt,(function(e){return e.expandFull?"\n        overflow: auto;\n      ":"\n        overflow: hidden;\n      "}),(function(e){return e.show?"\n    height: 100%;":"\n    height: 0;\n  "}),(function(e){return!e.expandFull&&Et})),Pt=Ct.div.withConfig({displayName:"CardMediaHeader"})(["padding:0.5rem 0 0.5rem 0.5rem;display:flex;align-items:center;justify-content:center;"]),_t=Ct.div.withConfig({displayName:"ImageWrapper"})(["width:100%;height:100%;overflow:hidden;border-radius:6px;"]),Ht=xt(["0%{opacity:0;transform:scale(0.95);}100%{opacity:1;transform:scale(1);}"]),Ft=xt(["0%{opacity:0;transform:translateY(-50%);}100%{opacity:1;transform:translateY(0);}"]),zt=xt(["0%{opacity:0;transform:translateX(-50%);}100%{opacity:1;transform:translateX(0);}"]),Wt=xt(["0%{opacity:0;transform:translateX(50%);}100%{opacity:1;transform:translateX(0);}"]),Bt=Ct.section.withConfig({displayName:"TimelineItemContentWrapper"})(["align-items:flex-start;background:",";border-radius:4px;display:flex;position:absolute;",";flex-direction:column;justify-content:flex-start;line-height:1.5em;margin:",";max-width:","px;min-height:","px;position:relative;text-align:left;width:98%;z-index:0;"," height:",";&:focus{outline:1px solid ",";}"," ",""],(function(e){return e.theme.cardBgColor}),(function(e){return e.borderLessCards?"none":"filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3))"}),(function(e){return"HORIZONTAL"===e.mode?"0 auto":""}),(function(e){return e.maxWidth}),(function(e){return e.minHeight}),(function(e){return e.isNested?ot(["background:",";box-shadow:0 0 5px 2px rgba(0,0,0,0.1);"],e.theme.nestedCardBgColor):ot([""])}),(function(e){return e.textOverlay?"0":""}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){if(e.slideShowActive&&e.active)return"slide_in"===e.slideShowType?ot(["animation:"," 0.5s ease-in-out;"],Ft):"slide_from_sides"===e.slideShowType&&"left"===e.branchDir?ot(["animation:"," 0.5s ease-in-out;"],zt):"slide_from_sides"===e.slideShowType&&"right"===e.branchDir?ot(["animation:"," 0.5s ease-in-out;"],Wt):ot(["animation:"," 0.5s ease-in-out;"],Ht)}),(function(e){return e.slideShowActive&&e.active?ot(["opacity:1;animation-timing-function:ease-in-out;animation-duration:0.5s;"]):e.slideShowActive&&!e.active?ot(["opacity:0;"]):void 0})),Vt=Ct.header.withConfig({displayName:"TimelineCardHeader"})(["width:100%;padding:0.5rem 0.5rem 0 0.5rem;"]),Gt=Ct.h2.withConfig({displayName:"CardSubTitle"})(["color:",";font-size:",";font-weight:600;margin:0;text-align:left;width:97%;padding:",";"],(function(e){return e.theme.cardSubtitleColor}),(function(e){return e.fontSize}),(function(e){return e.padding?"0.5rem 0 0.5rem 0.5rem;":""})),Yt=Ct.h1.withConfig({displayName:"CardTitle"})(["color:",";font-size:",";font-weight:600;margin:0;text-align:left;width:95%;padding:"," &.active{color:",";}"],(function(e){return e.theme.cardTitleColor}),(function(e){return e.fontSize}),(function(e){return e.padding?"0.25rem 0 0.25rem 0.5rem;":""}),(function(e){return e.theme.primary})),Ut=Ct.a.withConfig({displayName:"CardTitleAnchor"})(["color:inherit;&:active{color:inherit;}"]),qt=Ct.p.withConfig({displayName:"TimelineContentDetails"})(["font-size:0.85rem;font-weight:400;margin:0;width:100%;color:",";"],(function(e){return e.theme.cardDetailsColor})),Zt=Ct.span.withConfig({displayName:"TimelineSubContent"})(["margin-bottom:0.5rem;display:block;font-size:",";color:",";"],(function(e){return e.fontSize}),(function(e){return e.theme.cardDetailsColor})),Xt=Ct.div.withConfig({displayName:"TimelineContentDetailsWrapper"})(["align-items:center;display:flex;flex-direction:column;margin:0 auto;margin-top:0.5em;margin-bottom:0.5em;position:relative;"," "," overflow-x:hidden;overflow-y:auto;scrollbar-color:"," default;scrollbar-width:thin;transition:max-height 0.25s ease-in-out;width:",";padding:0.25rem 0.25rem;"," &::-webkit-scrollbar{width:0.3em;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,0.2);}&::-webkit-scrollbar-thumb{background-color:",";outline:1px solid ",";}&.show-less{scrollbar-width:none;&::-webkit-scrollbar{width:0;}overflow:hidden;}--rc-gradient-color:",";",""],(function(e){var t=e.useReadMore,n=e.customContent,r=e.showMore,i=e.height;void 0===i&&(i=0);var o=e.textOverlay;return!t||n||r||o?"":`max-height: ${i}px;`}),(function(e){var t=e.cardHeight;void 0===t&&(t=0);var n=e.contentHeight;void 0===n&&(n=0);var r=e.height;void 0===r&&(r=0);var i=e.showMore,o=e.textOverlay;return i&&!o?`max-height: ${(t||0)+(n||0)-r}px;`:""}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){return e.borderLess?"calc(100% - 0.5rem)":"calc(95% - 0.5rem)"}),(function(e){var t=e.height;void 0===t&&(t=0);var n=e.cardHeight;void 0===n&&(n=0);var r=e.contentHeight;void 0===r&&(r=0);var i=e.showMore,o=e.useReadMore;return i&&o&&n?ot(["animation:"," 0.25s ease-in-out;"],xt(["0%{max-height:","px;}100%{max-height:","px;}"],t,n+r-t)):""}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){return e.gradientColor}),Et),Jt=Ct.span.withConfig({displayName:"ShowMore"})(["align-items:center;align-self:flex-end;border-radius:4px;cursor:pointer;display:",";font-size:0.75rem;justify-self:flex-end;margin-bottom:0.5em;margin-left:0.5em;margin-right:0.5em;margin-top:auto;padding:0.25em;color:",";&:hover{text-decoration:underline;}"],(function(e){return e.show?"flex":"none"}),(function(e){return e.theme.primary})),Kt=Ct.span.withConfig({displayName:"SlideShowProgressBar"})(["background:",";bottom:-0.75em;display:block;height:4px;left:50%;transform:translateX(-50%);position:absolute;border-radius:2px;"," "," svg{position:absolute;left:0;top:0;width:100%;}"],(function(e){return e.color}),(function(e){if(e.paused)return ot(["left:50%;transform:translateX(-50%);"])}),(function(e){return!e.paused&&e.startWidth&&e.startWidth>0?ot(["animation:"," ","ms ease-in;animation-play-state:running;"],xt(["0%{width:","px;}100%{width:","px;}"],e.startWidth,0),e.duration):ot(["animation-play-state:paused;width:","px;"],e.startWidth)})),Qt=Ct.span.withConfig({displayName:"ChevronIconWrapper"})(["align-items:center;display:flex;height:1.25em;justify-content:center;margin-left:0.2em;margin-top:0.2em;width:1.25em;",";svg{height:100%;width:100%;}"],(function(e){return e.collapsed?"\n      transform: rotate(90deg);\n  ":"transform: rotate(-90deg)"})),en=Ct.span.withConfig({displayName:"TriangleIconWrapper"})(["display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;position:absolute;top:calc(50%);background:",";transform:translateY(-50%) rotate(225deg);z-index:-1;& svg{width:100%;height:100%;fill:#fff;}",";"],(function(e){return e.theme.cardBgColor}),(function(e){return"left"===e.dir?`right: ${e.offset}px;`:`left: ${e.offset}px;`})),tn=ot(["align-items:center;background:none;border-radius:50%;border:none;cursor:pointer;display:flex;height:1.5rem;justify-content:center;padding:0;width:1.5rem;margin:0 0.25rem;background:",";color:#fff;svg{width:70%;height:70%;}"],(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary})),nn=Ct.button.withConfig({displayName:"ExpandButton"})(["",""],tn),rn=Ct.button.withConfig({displayName:"ShowHideTextButton"})(["",""],tn),on=Ct.ul.withConfig({displayName:"ButtonWrapper"})(["display:flex;flex-direction:row;justify-content:flex-end;list-style:none;margin:0;padding:0;margin-left:auto;"]),an=function(t){var n,r=t.title,i=t.url,o=t.theme,a=t.color,s=t.dir,l=t.active,c=t.fontSize;void 0===c&&(c="1rem");var u=t.classString;void 0===u&&(u="");var d=t.padding;return void 0===d&&(d=!1),r?e.jsx(Yt,{className:p(l?"active":"",(n={},n[u]=!0,n)),theme:o,style:{color:a},dir:s,fontSize:c,"data-class":u,padding:d,children:i?e.jsx(Ut,{href:i,target:"_blank",rel:"noreferrer",children:r}):r}):null};an.displayName="Timeline Title";var sn=t.memo((function(t){var n=t.content,r=t.color,i=t.dir,o=t.theme,a=t.fontSize,s=t.classString,l=t.padding;return n?e.jsx(Gt,{style:{color:r},dir:i,theme:o,fontSize:a,className:p("card-sub-title",s),padding:l,children:n}):null}),(function(e,t){var n,r;return(null===(n=e.theme)||void 0===n?void 0:n.cardSubtitleColor)===(null===(r=t.theme)||void 0===r?void 0:r.cardSubtitleColor)}));sn.displayName="Timeline Content";var ln=t.memo((function(n){var r=n.theme,i=n.expanded,o=n.onExpand,a=n.textOverlay,s=t.useMemo((function(){return i?"Minimize":"Maximize"}),[i]);return a?e.jsx(nn,{onPointerDown:o,onKeyDown:function(e){return"Enter"===e.key&&(null==o?void 0:o(e))},theme:r,"aria-expanded":i,tabIndex:0,"aria-label":s,title:s,children:i?e.jsx(x,{}):e.jsx(w,{})}):null}),(function(e,t){return e.expanded===t.expanded}));ln.displayName="Expand Button";var cn=t.memo((function(n){var r=n.textOverlay,i=n.onToggle,o=n.theme,a=n.show,s=t.useMemo((function(){return a?"Hide Text":"Show Text"}),[a]);return r?e.jsx(rn,{onPointerDown:i,theme:o,tabIndex:0,onKeyDown:function(e){return"Enter"===e.key&&(null==i?void 0:i(e))},"aria-label":s,title:s,children:a?e.jsx(C,{}):e.jsx(k,{})}):null}));cn.displayName="Show Hide Text Button";var un=t.memo((function(n){var r=n.theme,i=n.show,o=n.expand,a=n.textOverlay,s=n.text;n.height;var l=n.onRender,u=t.useCallback((function(e){e&&(null==l||l(e.clientHeight))}),[]),d=t.useMemo((function(){var e=(null==r?void 0:r.cardDetailsBackGround)||"";return e?c(e,.8):e}),[null==r?void 0:r.cardDetailsBackGround]);return a?e.jsx(Dt,{ref:u,expandFull:o,theme:r,show:i,background:d,children:s}):null}),(function(e,t){return e.height===t.height&&e.show===t.show&&e.expand===t.expand&&JSON.stringify(e.theme)===JSON.stringify(t.theme)}));un.displayName="Details Text";var dn=function(n){var r=n.active,i=n.id,o=n.onMediaStateChange,a=n.title,s=n.content,l=n.media,u=n.slideshowActive,f=n.url,h=n.detailsText,m=n.showProgressBar,g=n.remainInterval,v=n.startWidth,y=n.paused,b=n.triangleDir,w=n.resuming,x=n.progressRef,C=t.useRef(null),S=t.useState(!1),k=S[0],j=S[1],N=t.useRef(null),A=t.useState(0);A[0];var T=A[1],E=t.useState(!1),M=E[0],O=E[1],L=t.useState(!0),$=L[0],R=L[1],I=t.useState(!1),D=I[0],P=I[1],_=t.useContext(d),H=_.mode,F=_.fontSizes,z=_.classNames,W=_.mediaHeight,B=_.borderLessCards,V=_.textOverlay,G=_.theme,Y=_.cardHeight,U=_.mediaSettings;t.useEffect((function(){C&&(r?C.current&&C.current.play():C.current&&C.current.pause())}),[r]);var q=t.useCallback((function(){P(!0)}),[]),Z=t.useCallback((function(){j(!0),o({id:i,paused:!1,playing:!1})}),[o,i]),X=t.memo((function(t){var n=t.message;return e.jsx(Rt,{children:n})})),J=t.useMemo((function(){return/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/.test(l.source.url)}),[]),K=t.useMemo((function(){return e.jsx(It,{frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:`${l.source.url}${r?"?autoplay=1&enablejsapi=1":"?enablejsapi=1"}`,title:l.name})}),[r]),Q=t.useMemo((function(){return e.jsx(Lt,{controls:!0,autoPlay:r,ref:C,onLoadedData:q,"data-testid":"rc-video",onPlay:function(){return o({id:i,paused:!1,playing:!0})},onPause:function(){return o({id:i,paused:!0,playing:!1})},onEnded:function(){return o({id:i,paused:!1,playing:!1})},onError:Z,children:e.jsx("source",{src:l.source.url})})}),[r]),ee=t.useMemo((function(){return e.jsx(Ot,{src:l.source.url,mode:H,onLoad:q,onError:Z,visible:D,active:r,alt:l.name,loading:"lazy",enableBorderRadius:B,role:"img",fit:null==U?void 0:U.imageFit})}),[r,D,B]);X.displayName="Error Message";var te=t.useCallback((function(e){e&&T(e)}),[]),ne=t.useCallback((function(e){O((function(e){return!e})),R(!0)}),[]),re=t.useCallback((function(e){O(!1),R((function(e){return!e}))}),[]),ie=t.useMemo((function(){return("VERTICAL"===H||"VERTICAL_ALTERNATING"===H)&&V}),[]),oe=t.useMemo((function(){return $&&!!h}),[$,h]),ae=t.useMemo((function(){return a||s||h}),[a,s,h]),se=t.useMemo((function(){return V&&!!h}),[s,h]),le=t.useMemo((function(){return c((null==G?void 0:G.cardDetailsBackGround)||"",.8)}),[null==G?void 0:G.cardDetailsBackGround]),ce=t.useMemo((function(){return!M&&$&&V}),[M,$]),ue=t.useMemo((function(){return V?Y:W}),[]),de=t.useMemo((function(){return e.jsxs($t,{mode:H,absolutePosition:V,textInMedia:V,ref:N,theme:G,expandFull:M,showText:$,expandable:se,gradientColor:ce?le:null,children:[e.jsxs(Pt,{children:[e.jsx(an,{title:a,theme:G,active:r,url:f,fontSize:null==F?void 0:F.cardTitle,classString:null==z?void 0:z.cardTitle}),se?e.jsxs(on,{children:[e.jsx(cn,{onToggle:re,show:$,textOverlay:!0,theme:G}),e.jsx(ln,{theme:G,expanded:M,onExpand:ne,textOverlay:!0})]}):null]}),$&&e.jsx(sn,{content:s,fontSize:null==F?void 0:F.cardSubtitle,classString:null==z?void 0:z.cardSubTitle,padding:!0,theme:G}),oe?e.jsx(un,{theme:G,show:$,expand:M,text:h,onRender:te,textOverlay:V}):null]})}),[$,M,oe,le,a,JSON.stringify(G)]),fe=t.useMemo((function(){return m&&V}),[m,V]);return e.jsxs(e.Fragment,{children:[e.jsxs(Mt,{theme:G,active:r,mode:H,slideShowActive:u,className:p("card-media-wrapper",null==z?void 0:z.cardMedia),cardHeight:ue,align:null==U?void 0:U.align,textOverlay:V,children:["VIDEO"===l.type&&!J&&(k?e.jsx(X,{message:"Failed to load the video"}):Q),"VIDEO"===l.type&&J&&K,"IMAGE"===l.type&&(k?e.jsx(X,{message:"Failed to load the image."}):e.jsx(_t,{height:W,children:ee})),fe?e.jsx(Kt,{color:null==G?void 0:G.primary,duration:g,paused:y,ref:x,startWidth:v,role:"progressbar",resuming:w}):null,ie?e.jsx(en,{dir:b,theme:G,offset:-15,role:"img","data-testid":"arrow-icon"}):null]}),ae?de:null]})};dn.displayName="Card Media";var fn=function(n){var r=n.showProgressBar,i=n.onExpand,o=n.triangleDir,a=n.showMore,s=n.textContentIsLarge,l=n.showReadMore,c=n.remainInterval,u=n.paused,f=n.startWidth,h=n.canShow,m=n.progressRef,p=n.isNested,g=n.isResuming,v=t.useContext(d),y=v.mode,w=v.theme,x=t.useMemo((function(){return!p&&["VERTICAL","VERTICAL_ALTERNATING"].some((function(e){return e===y}))}),[y,p]),C=t.useMemo((function(){return l&&s}),[l,s]);return e.jsxs(e.Fragment,{children:[C?e.jsxs(Jt,{className:"show-more",onPointerDown:function(e){e.stopPropagation(),e.preventDefault(),i()},onKeyPress:function(e){"Enter"===e.key&&i()},role:"button",show:h,theme:w,tabIndex:0,children:[e.jsx("span",{children:a?"read less":"read more"}),e.jsx(Qt,{collapsed:!a,children:e.jsx(b,{})})]}):null,r&&e.jsx(Kt,{color:null==w?void 0:w.primary,duration:c,paused:u,ref:m,startWidth:f,role:"progressbar",resuming:g}),x&&e.jsx(en,{dir:o,theme:w,offset:-8})]})},hn=t.memo((function(n){var r=n.title,i=n.url,o=n.media,a=n.content,s=t.useContext(d),l=s.fontSizes,c=s.classNames,u=s.theme;return e.jsxs(Vt,{children:[!o&&e.jsx(an,{title:r,theme:u,url:i,fontSize:null==l?void 0:l.cardTitle,classString:null==c?void 0:c.cardTitle}),!o&&e.jsx(sn,{content:a,theme:u,fontSize:null==l?void 0:l.cardSubtitle,classString:null==c?void 0:c.cardSubTitle})]})}));hn.displayName="ContentHeader";var mn=t.memo((function(n){var r=n.active,i=n.content,o=n.detailedText,a=n.id,s=n.media,l=n.onShowMore,u=n.slideShowActive,f=n.onElapsed,h=n.theme,m=n.title,g=n.onClick,v=n.customContent,y=n.hasFocus,b=n.flip,w=n.branchDir,x=n.url,C=n.timelineContent,S=n.items,k=n.isNested,j=n.nestedCardHeight,N=t.useState(!1),A=N[0],T=N[1],E=t.useRef(null),M=t.useRef(null),O=t.useRef(null),L=t.useRef(0),$=t.useRef(0),R=t.useRef(0),I=t.useRef(),D=t.useState(!1),P=D[0],_=D[1],H=t.useRef(!0),F=t.useState(0),z=F[0],W=F[1],B=t.useState(0),V=B[0],G=B[1],Y=t.useState(!1),U=Y[0],q=Y[1],Z=t.useState(0),X=Z[0],J=Z[1],K=t.useState(0),Q=K[0],ee=K[1],te=t.useState(!1),ne=te[0],re=te[1],ie=t.useState(!1),oe=ie[0],ae=ie[1],se=t.useContext(d),le=se.mode,ce=se.cardHeight,ue=se.slideItemDuration;void 0===ue&&(ue=2e3);var de=se.useReadMore,fe=se.cardWidth,he=se.borderLessCards,me=se.disableAutoScrollOnClick,pe=se.fontSizes,ge=se.classNames,ve=se.contentDetailsHeight,ye=se.textOverlay,be=se.slideShowType,we=se.showProgressOnSlideshow,xe=t.useMemo((function(){return r&&u&&we}),[r,u]),Ce=t.useMemo((function(){return!!o}),[o]);t.useEffect((function(){var e=E.current;e&&(e.scrollTop=0)}),[A]),t.useEffect((function(){r&&re(!0)}),[r]);var Se=t.useCallback((function(e){if(null!==e){var t=E.current;if(t){var n=t.scrollHeight,r=t.offsetTop;L.current=e.clientWidth,G(L.current),J(n),ee(t.offsetHeight),q(n+r>e.clientHeight)}}}),[E.current]),ke=t.useCallback((function(e){ue&&(W(e),I.current=new Date,_(!1),R.current=window.setTimeout((function(){window.clearTimeout(R.current),_(!0),G(0),W(ue),a&&f&&f(a)}),e))}),[]);t.useEffect((function(){R.current&&!u&&window.clearTimeout(R.current)}),[u]);var je=t.useCallback((function(){if(r&&u){if(window.clearTimeout(R.current),_(!0),I.current){var e=+new Date-+I.current;$.current=e}O.current&&G(O.current.clientWidth)}}),[r,u]),Ne=t.useCallback((function(){if(r&&u){if(!ue)return;var e=ue-$.current;_(!1),e>0&&ke(e)}}),[r,u,ue]);t.useEffect((function(){ue&&(r&&u&&(G(L.current),ke(ue)),r&&y&&M.current&&M.current.focus(),u||re(!1))}),[r,u]),t.useEffect((function(){y&&r&&M.current&&M.current.focus()}),[y,r]),t.useEffect((function(){P||H.current||ae(!0)}),[P,V]),t.useEffect((function(){H.current=!1}),[]);var Ae=t.useMemo((function(){return de&&o&&!v}),[]),Te=t.useCallback((function(e){u&&(e.playing?je():e.paused&&P&&a&&f&&f(a))}),[P,u]),Ee=t.useMemo((function(){return p(r?"timeline-card-content active":"timeline-card-content ",null==ge?void 0:ge.card)}),[r]),Me=t.useMemo((function(){return p(A||v||!de?"card-description":"show-less card-description",null==ge?void 0:ge.cardText)}),[A,v]),Oe=t.useMemo((function(){return ye&&s?ce:k?j:ce}),[]),Le=t.useCallback((function(){(r&&P||!u)&&(T(!A),l())}),[r,P,u,A]),$e=t.useMemo((function(){return b?"right"===w?"left":"right":w}),[w,b]),Re=t.useMemo((function(){var t=Array.isArray(o);if(C)return e.jsx("div",{ref:E,children:C});var n=null;return(n=t?o.map((function(t,n){return e.jsx(Zt,{fontSize:null==pe?void 0:pe.cardText,className:null==ge?void 0:ge.cardText,theme:h,children:t},n)})):o)?e.jsx(qt,{className:A?"active":"",ref:E,theme:h,children:n}):null}),[C,A,JSON.stringify(h)]),Ie=t.useMemo((function(){var e=k?null==h?void 0:h.nestedCardDetailsBackGround:null==h?void 0:h.cardBgColor;return!A&&U?c(e||"#ffffff",.8):null}),[U,A,null==h?void 0:h.cardDetailsBackGround,k]),De=t.useMemo((function(){return!ye&&!(null==S?void 0:S.length)}),[null==S?void 0:S.length]),Pe=t.useMemo((function(){return e.jsx(e.Fragment,{children:e.jsx(Xt,{"aria-expanded":A,className:Me,customContent:!!v,ref:E,theme:h,useReadMore:de,borderLess:he,showMore:A,cardHeight:ye?null:X,contentHeight:Q,height:ve,textOverlay:ye,gradientColor:Ie,children:v||Re})})}),[A,X,ve,Q,ye,Ie,JSON.stringify(h)]),_e=t.useMemo((function(){if(!k)return{onPointerDown:function(e){e.stopPropagation(),!u&&g&&a&&!me&&g(a)},onPointerEnter:je,onPointerLeave:Ne}}),[je,Ne]);return e.jsxs(Bt,Object.assign({},{className:Ee,minHeight:Oe,maxWidth:fe,mode:le,noMedia:!s},_e,{ref:Se,tabIndex:k?-1:0,theme:h,borderLessCards:he,textOverlay:ye,active:ne,slideShowType:be,slideShowActive:u,branchDir:w,isNested:k,children:[m&&!ye?e.jsx(hn,{title:m,theme:h,url:x,media:s,content:i}):null,s&&e.jsx(dn,{active:r,cardHeight:ce,content:i,hideMedia:A,id:a,media:s,onMediaStateChange:Te,slideshowActive:u,theme:h,title:m,url:x,detailsText:Re,startWidth:V,paused:P,remainInterval:z,showProgressBar:xe,triangleDir:$e,resuming:oe,progressRef:O}),De?Pe:e.jsx(ir,{items:S,mode:"VERTICAL",enableOutline:!1,hideControls:!0,nestedCardHeight:j,isChild:!0}),(!ye||!s)&&e.jsx(fn,{theme:h,progressRef:O,startWidth:V,textContentIsLarge:U,remainInterval:z,paused:P,triangleDir:$e,showProgressBar:xe,showReadMore:Ae,onExpand:Le,canShow:Ce,showMore:A,isNested:k,isResuming:oe})]}))}));mn.displayName="TimelineCardContent";var pn=Ct.div.withConfig({displayName:"TitleWrapper"})(["border-radius:0.2rem;font-size:",";font-weight:600;overflow:hidden;padding:0.25rem;visibility:",";text-align:",";color:",";&.active{background:",";color:",";}"],(function(e){return e.fontSize?e.fontSize:"1rem"}),(function(e){return e.hide?"hidden":"visible"}),(function(e){return e.align?e.align:""}),(function(e){return e.theme?e.theme.titleColor:""}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.secondary}),(function(e){var t,n,r;return(null===(t=e.theme)||void 0===t?void 0:t.titleColorActive)?null===(n=e.theme)||void 0===n?void 0:n.titleColorActive:null===(r=e.theme)||void 0===r?void 0:r.primary})),gn=function(n){var r=n.title,i=n.active,o=n.theme,a=n.align,s=n.classString,l=t.useMemo((function(){return p("timeline-item-title",i?"active":"",s)}),[i]),c=t.useContext(d).fontSizes;return e.jsx(pn,{className:l,theme:o,hide:!r,align:a,fontSize:null==c?void 0:c.title,children:r})},vn=Ct.div.withConfig({displayName:"Wrapper"})(["align-items:center;border:1px solid transparent;display:flex;justify-content:center;position:relative;width:100%;height:100%;&.vertical{justify-content:flex-start;}"]),yn=xt(["from{opacity:0;}to{opacity:1;}"]),bn=Ct.div.withConfig({displayName:"ShapeWrapper"})(["align-items:center;display:flex;flex-direction:column;justify-content:center;width:5em;"]),wn=function(e){return"circle"===e.timelinePointShape?"border-radius: 50%;":"square"===e.timelinePointShape?"border-radius: 2px;":"diamond"===e.timelinePointShape?"border-radius: 0;":void 0},xn=Ct.div.withConfig({displayName:"Shape"})([""," cursor:pointer;height:","px;width:","px;transform:",";&.active{&.using-icon{}&:not(.using-icon){transform:",";}&::after{"," content:'';display:block;height:","px;width:","px;left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);z-index:-1;}}&:not(.using-icon){background:",";&.active{background:",";border:","px solid ",";}&.in-active{}}&.using-icon{background:",";display:flex;align-items:center;justify-content:center;img{max-width:90%;max-height:90%;}}"],wn,(function(e){return e.dimension}),(function(e){return e.dimension}),(function(e){return"diamond"===e.timelinePointShape?"rotate(45deg)":""}),(function(e){return"diamond"===e.timelinePointShape?"rotate(45deg)":""}),wn,(function(e){return e.dimension?Math.round(.75*e.dimension):20}),(function(e){return e.dimension?Math.round(.75*e.dimension):20}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.secondary}),(function(e){return e.dimension?Math.round(.2*e.dimension):"3"}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.primary}),(function(e){var t;return null===(t=e.theme)||void 0===t?void 0:t.iconBackgroundColor})),Cn=Ct.div.withConfig({displayName:"TimelineTitleContainer"})(["display:flex;align-items:center;justify-content:flex-start;&.vertical{margin-bottom:1em;}&.horizontal{position:absolute;top:0;}"]),Sn=Ct.div.withConfig({displayName:"TimelineContentContainer"})(["align-items:flex-start;animation:"," 0.25s ease-in;outline:2px solid ",";margin:1rem;&.horizontal{min-width:","px;}&.vertical{width:calc(100% - 5em);margin-left:auto;flex-direction:column;}"],yn,(function(e){var t;return e.highlight&&e.active?null===(t=e.theme)||void 0===t?void 0:t.primary:"transparent"}),(function(e){return e.cardWidth})),kn=function(r){var i=r.active,o=r.autoScroll,a=r.cardDetailedText,s=r.cardSubtitle,l=r.cardTitle,c=r.url,u=r.id,f=r.media,h=r.onClick,m=r.onElapsed,g=r.slideShowRunning,v=r.title,y=r.wrapperId,b=r.customContent,w=r.hasFocus,x=r.iconChild,C=r.timelineContent,S=r.cardWidth,k=r.isNested,j=r.nestedCardHeight,N=r.items,A=t.useRef(null),T=t.useRef(null),E=t.useRef(null),M=t.useContext(d),O=M.mode,L=M.cardPositionHorizontal,$=M.timelinePointDimension,R=M.disableClickOnCircle,I=M.cardLess,D=M.showAllCardsHorizontal,P=M.classNames,_=M.theme,H=M.timelinePointShape;t.useEffect((function(){if(i){var e=A.current,t=T.current;if(e&&t){var n=e.offsetLeft,r=t.offsetLeft;null==o||o({pointOffset:n+r,pointWidth:e.clientWidth})}}}),[i,o,O]);var F=t.useCallback((function(){}),[]),z=t.useMemo((function(){return null==O?void 0:O.toLowerCase()}),[O]),W=t.useMemo((function(){return p("timeline-horz-card-wrapper",z,"TOP"===L?"bottom":"top",D?"show-all":"")}),[O,L]),B=t.useMemo((function(){return p(z,L)}),[]),V=t.useMemo((function(){return p("timeline-circle",{"using-icon":!!x},z,i?"active":"in-active")}),[i]),G=t.useMemo((function(){return e.jsx(Sn,{className:W,ref:E,id:`timeline-card-${u}`,theme:_,active:i,highlight:D,tabIndex:0,cardWidth:S,children:e.jsx(mn,{content:s,active:i,title:l,url:c,detailedText:a,onShowMore:F,theme:_,slideShowActive:g,media:f,onElapsed:m,id:u,customContent:b,hasFocus:w,onClick:h,timelineContent:C,isNested:k,nestedCardHeight:j,items:N})})}),[i,g,JSON.stringify(_)]),Y=t.useMemo((function(){return i&&!I||D}),[i,I,D]);return e.jsxs(vn,{ref:T,className:z,"data-testid":"timeline-item",children:[Y&&function(){var e=document.getElementById(y);if(e)return n.createPortal(G,e)}(),e.jsx(bn,{children:e.jsx(xn,{className:V,onClick:function(){R||!h||g||h(u)},ref:A,"data-testid":"timeline-circle",theme:_,"aria-label":v,dimension:$,timelinePointShape:H,children:x||null})}),e.jsx(Cn,{className:B,"data-testid":"timeline-title",children:e.jsx(gn,{title:v,active:i,theme:_,classString:null==P?void 0:P.title})})]})},jn=Ct.ul.withConfig({displayName:"TimelineHorizontalWrapper"})(["display:flex;list-style:none;margin:0;width:100%;direction:",";&.vertical{flex-direction:column;}&.horizontal{flex-direction:row;}"],(function(e){return e.flipLayout?"rtl":"ltr"})),Nn=Ct.li.withConfig({displayName:"TimelineItemWrapper"})(["width:","px;visibility:hidden;display:flex;align-items:center;justify-content:center;height:150px;flex-direction:column;&.vertical{margin-bottom:2rem;width:100%;}&.visible{visibility:visible;}"],(function(e){return e.width})),An=function(n){var r=n.items,i=n.handleItemClick,o=n.autoScroll,a=n.wrapperId,s=n.slideShowRunning,l=n.onElapsed,c=n.contentDetailsChildren,u=n.hasFocus,f=n.iconChildren,h=n.nestedCardHeight,m=n.isNested,g=t.useContext(d),v=g.mode;void 0===v&&(v="HORIZONTAL");var y=g.itemWidth;void 0===y&&(y=200);var b=g.cardHeight,w=g.flipLayout,x=g.showAllCardsHorizontal,C=g.theme,S=g.cardWidth,k=t.useMemo((function(){return p(v.toLowerCase(),"timeline-horizontal-container",x?"show-all-cards-horizontal":"")}),[v,x]),j=t.Children.toArray(f);return e.jsx(jn,{className:k,flipLayout:w,"data-testid":"timeline-collection",children:r.map((function(t,n){return e.jsx(Nn,{width:y,className:p(t.visible?"visible":"","timeline-horz-item-container"),children:e.jsx(kn,Object.assign({},t,{onClick:i,autoScroll:o,wrapperId:a,theme:C,slideShowRunning:s,cardHeight:b,onElapsed:l,customContent:c?c[n]:null,hasFocus:u,iconChild:j[n],active:t.active,cardWidth:S,isNested:m,nestedCardHeight:h}))},t.id)}))})};function Tn(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"prefix__feather prefix__feather-x",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}function En(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"prefix__feather prefix__feather-menu",children:e.jsx("path",{d:"M3 12h18M3 6h18M3 18h18"})})}var Mn,On=xt(["from{width:30px;height:30px;}to:{width:200px;height:50%;}"]),Ln=xt(["from{width:200px;height:50%;}to:{width:30px;height:30px;}"]),$n=Ct.div.withConfig({displayName:"OutlineWrapper"})(["animation:",";animation-duration:0.2s;animation-timing-function:ease-in;background:rgba(255,255,255,0.98);border:1px solid ",";height:50%;position:absolute;top:1rem;width:100%;z-index:9000;",";",";"],(function(e){return e.open?On:Ln}),(function(e){return e.open?"#f5f5f5":"none"}),(function(e){return e.position===Mn.left?"left: 1rem;":"right: 3rem;"}),(function(e){return e.open?"\n    width: 200px;\n    height: 50%;\n    box-shadow: 0 5px 10px 2px rgba(0,0,0,0.2);\n    overflow-y: auto;":"width: 30px; height: 30px;"})),Rn=Ct.aside.withConfig({displayName:"OutlinePane"})(["align-items:center;border-radius:4px;display:flex;justify-content:center;"]),In=Ct.button.withConfig({displayName:"OutlineButton"})(["align-items:center;align-self:flex-end;background:#fff;border-radius:4px;border:0;box-shadow:",";cursor:pointer;display:flex;height:30px;justify-content:center;padding:0;width:30px;",";& svg{width:70%;height:70%;}& svg path{color:",";}"],(function(e){return e.open?"none":"0 0 10px 2px rgba(0,0,0,0.2)"}),(function(e){return e.position===Mn.left?"margin-right: auto;":"margin-left: auto;"}),(function(e){return e.theme.primary})),Dn=Ct.ul.withConfig({displayName:"List"})(["display:flex;flex-direction:column;height:100%;list-style:none;margin:0;overflow-y:auto;padding:0;width:80%;"]),Pn=Ct.li.withConfig({displayName:"ListItem"})(["align-items:center;display:flex;font-size:0.9rem;justify-content:flex-start;margin:0.75rem 0;cursor:pointer;position:relative;&:not(:last-child)::after{content:'';display:block;width:100%;position:absolute;height:1px;background:#ddd;left:0;right:0;margin:0 auto;bottom:-50%;}"]),_n=Ct.span.withConfig({displayName:"ListItemName"})(["font-size:0.75rem;color:",";padding-left:0.25rem;&:hover{color:",";}"],(function(e){return e.selected?e.theme.primary:""}),(function(e){return e.theme.primary})),Hn=Ct.span.withConfig({displayName:"ListItemBullet"})(["align-items:center;display:flex;justify-content:center;margin-right:1rem;position:relative;&::after{content:'';display:block;position:absolute;width:8px;height:8px;border-radius:50%;background:",";left:0;margin:0 auto;border:",";}"],(function(e){return e.selected?`${e.theme.secondary}`:`${e.theme.primary}`}),(function(e){return e.selected?`2px solid ${e.theme.secondary}`:`2px solid ${e.theme.primary}`}));!function(e){e[e.left=0]="left",e[e.right=1]="right"}(Mn||(Mn={}));var Fn=function(n){var r=n.items;void 0===r&&(r=[]);var i=n.onSelect,o=n.mode,a=t.useState(!1),s=a[0],l=a[1],c=t.useState([]),u=c[0],f=c[1],h=t.useCallback((function(){return l((function(e){return!e}))}),[]),m=t.useState(!1),p=m[0],g=m[1],v=t.useContext(d).theme,y=t.useMemo((function(){return"VERTICAL"===o?Mn.left:"VERTICAL_ALTERNATING"===o?Mn.right:Mn.left}),[o]);t.useEffect((function(){f(r.map((function(e){return Object.assign({},e,{selected:!1})})))}),[r.length]),t.useEffect((function(){s?setTimeout((function(){g(s)}),300):g(s)}),[s]);var b=t.useCallback((function(e,t){f((function(e){return e.map((function(e){return Object.assign({},e,{selected:e.id===t})}))})),i&&i(e)}),[]);return e.jsxs($n,{position:y,open:s,children:[e.jsx(In,{onPointerDown:h,theme:v,open:s,position:y,children:s?e.jsx(Tn,{}):e.jsx(En,{})}),e.jsx(Rn,{open:s,children:p&&e.jsx(Dn,{children:u.map((function(t,n){return e.jsxs(Pn,{onPointerDown:function(){return b(n,t.id)},children:[e.jsx(Hn,{theme:v,selected:t.selected}),e.jsx(_n,{theme:v,selected:t.selected,children:t.name})]},t.id)}))})})]})},zn=Ct.div.withConfig({displayName:"TimelinePointWrapper"})(["align-items:center;display:flex;justify-content:center;position:relative;width:",";&.left{order:2;}&.right{order:1;}&::before{background:",";width:",";height:2rem;position:absolute;content:'';display:block;left:50%;top:-1rem;transform:translateY(-50%) translateX(-50%);}&::after{background:",";content:'';display:block;height:100%;left:50%;position:absolute;width:",";z-index:0;transform:translateX(-50%);}"],(function(e){return e.cardLess?"5%":"10%"}),(function(e){return e.bg}),(function(e){return e.width?`${e.width}px`:"4px"}),(function(e){return e.bg}),(function(e){return e.width?`${e.width}px`:"4px"})),Wn=Ct.div.withConfig({displayName:"TimelinePointContainer"})(["position:relative;z-index:1;"]),Bn=t.memo((function(n){var r=n.className,i=n.id,o=n.onClick,a=n.active,s=n.onActive,l=n.alternateCards,c=n.slideShowRunning,u=n.iconChild,f=n.timelinePointDimension,h=n.lineWidth,m=n.disableClickOnCircle,g=n.cardLess,v=t.useRef(null),y=t.useContext(d),b=y.theme,w=y.focusActiveItemOnLoad,x=y.timelinePointShape,C=t.useRef(!0),S=t.useMemo((function(){return w?a:a&&!C.current}),[a]);t.useEffect((function(){if(S){var e=v.current;e&&s(e.offsetTop)}}),[S,a]);var k=t.useMemo((function(){return p({active:a,"using-icon":!!u})}),[a,u]),j=t.useMemo((function(){return!m&&{onClick:function(e){e.stopPropagation(),i&&o&&!c&&o(i)}}}),[]);return t.useEffect((function(){C.current&&(C.current=!1)}),[]),e.jsx(zn,{width:h,alternateCards:l,bg:b&&b.primary,className:r,"data-testid":"tree-leaf",role:"button",cardLess:g,children:e.jsx(Wn,Object.assign({},{className:`${r} timeline-vertical-circle`},j,{ref:v,role:"button","data-testid":"tree-leaf-click","aria-label":"select timeline",children:e.jsx(xn,{className:k,theme:b,dimension:f,timelinePointShape:x,children:u||null})}))})}),(function(e,t){return e.active===t.active}));Bn.displayName="TimelinePoint";var Vn=Ct.div.withConfig({displayName:"TimelineVerticalWrapper"})(["display:flex;flex-direction:column;width:100%;padding:1em;outline:0;"]),Gn=xt(["from{opacity:0;visibility:hidden;}to{opacity:1;visibility:visible;}"]),Yn=Ct.div.withConfig({displayName:"VerticalItemWrapper"})(["display:flex;position:relative;visibility:hidden;width:100%;align-items:stretch;justify-content:center;margin:1rem 0;&.left{margin-right:auto;}&.right{margin-left:auto;}&.visible{visibility:visible;}",""],(function(e){return e.isNested?ot(["position:relative;&:not(:last-child)::after{content:'';position:absolute;width:2px;height:2rem;background:",";left:50%;transform:translateX(-50%);bottom:-2rem;}"],(function(e){return e.theme.primary})):ot([""])})),Un=Ct.div.withConfig({displayName:"TimelineCardContentWrapper"})(["visibility:hidden;position:relative;display:flex;align-items:center;"," "," &.visible{visibility:visible;animation:"," 0.25s ease-in;}"],(function(e){return e.alternateCards?"width: 50%;":e.noTitle?"width: 95%;":"width: 75%;"}),(function(e){return e.flip?"\n        justify-content: flex-end;\n        &.left {\n          order: 3;\n        }\n        &.right {\n          order: 1;\n        }\n      ":"\n        &.left {\n          order: 1;\n          justify-content: flex-end;\n        }\n        &.right {\n          order: 3;\n          justify-content: flex-start;\n        }\n      "}),Gn),qn=Ct.div.withConfig({displayName:"TimelineTitleWrapper"})(["align-items:center;display:",";",";&.left{justify-content:",";order:",";}&.right{",";}"],(function(e){return e.hide&&"VERTICAL"===e.mode?"none":"flex"}),(function(e){return e.alternateCards?"width: 50%":"width: 15%"}),(function(e){return e.flip?"flex-end":"flex-start"}),(function(e){return e.flip&&"VERTICAL_ALTERNATING"===e.mode?"1":"3"}),(function(e){return e.flip?"\n      order: 3;\n      justify-content: flex-start;":"order: 1;\n    justify-content: flex-end;"})),Zn=function(n){var r,i=t.useRef(null),o=n.active,a=n.alternateCards,s=n.cardDetailedText,l=n.cardSubtitle,c=n.cardTitle,u=n.url,f=n.className,h=n.contentDetailsChildren,m=n.iconChild,g=n.hasFocus,v=n.id,y=n.media,b=n.onActive,w=n.onClick,x=n.onElapsed,C=n.slideShowRunning,S=n.title,k=n.visible,j=n.timelineContent,N=n.items,A=n.isNested,T=n.nestedCardHeight,E=function(e){if(i.current){var t=i.current,n=t.offsetTop,r=t.clientHeight;b(n+e,n,r)}},M=t.useContext(d),O=M.cardHeight,L=M.mode,$=M.flipLayout,R=M.timelinePointDimension,I=M.lineWidth,D=M.disableClickOnCircle,P=M.cardLess,_=M.theme,H=M.classNames,F=M.textOverlay,z=M.mediaHeight,W=t.useCallback((function(){setTimeout((function(){E(0)}),100)}),[]),B=t.useMemo((function(){return e.jsx(qn,{className:f,alternateCards:a,mode:L,hide:!S,flip:$,children:e.jsx(gn,{title:S,active:o,theme:_,align:$?"left":"right",classString:null==H?void 0:H.title})})}),[o]),V=t.useMemo((function(){var e;return p(((e={})[f]=!0,e),"vertical-item-row",k?"visible":"")}),[]),G=p("card-content-wrapper",k?"visible":"",((r={})[f]=!0,r)),Y=t.useMemo((function(){return e.jsx(Bn,{active:o,alternateCards:a,className:f,id:v,mode:L,onActive:E,onClick:w,slideShowRunning:C,iconChild:m,timelinePointDimension:R,lineWidth:I,disableClickOnCircle:D,cardLess:P})}),[C,o]);return e.jsxs(Yn,{alternateCards:a,cardHeight:A?T:O,className:V,"data-testid":"vertical-item-row",ref:i,cardLess:P,role:"listitem",isNested:A,theme:_,children:[A?null:B,e.jsx(Un,{className:G,alternateCards:a,noTitle:!S,flip:$,height:F?z:O,children:P?null:e.jsx(mn,{active:o,branchDir:f,content:l,customContent:h,detailedText:s,hasFocus:g,id:v,media:y,onClick:w,onElapsed:x,onShowMore:W,slideShowActive:C,theme:_,title:c,url:u,flip:$,timelineContent:j,items:N,isNested:A,nestedCardHeight:T})}),A?null:Y]},v)};Zn.displayName="VerticalItem";var Xn=function(n){var r=n.alternateCards;void 0===r&&(r=!0);var i=n.autoScroll,o=n.contentDetailsChildren,a=n.enableOutline,s=n.hasFocus,l=n.iconChildren,c=n.items,u=n.mode,d=n.onClick,f=n.onElapsed,h=n.onOutlineSelection,m=n.slideShowRunning,p=n.theme,g=n.cardLess,v=n.nestedCardHeight,y=t.useCallback((function(e,t,n){i({contentHeight:n,contentOffset:t,pointOffset:e})}),[]),b=t.useCallback((function(){}),[]),w=t.useMemo((function(){return c.map((function(e){return{id:Math.random().toString(16).slice(2),name:e.title}}))}),[c.length]);return e.jsxs(Vn,{"data-testid":"tree-main",role:"list",children:[a&&e.jsx(Fn,{theme:p,mode:u,items:w,onSelect:h}),c.map((function(e,n){var i="";i=r&&n%2==0?"left":"right";var a=o&&o[n]||null,c=Array.isArray(l)?l[n]:0===n?l:null;return t.createElement(Zn,Object.assign({},e,{alternateCards:r,className:i,contentDetailsChildren:a,iconChild:c,hasFocus:s,index:n,key:e.id,onActive:y,onClick:d,onElapsed:f,onShowMore:b,slideShowRunning:m,cardLess:g,nestedCardHeight:v}))}))]})};Xn.displayName="TimelineVertical";var Jn=Ct.div.withConfig({displayName:"Wrapper"})(["display:flex;flex-direction:column;height:100%;&:focus{outline:0;}overflow:hidden;position:relative;user-select:none;width:100%;",";",";&.horizontal{justify-content:flex-start;}&.js-focus-visible :focus:not(.focus-visible){outline:0;}&.js-focus-visible .focus-visible{outline:2px solid #528deb;}"],(function(e){return"TOP"!==e.cardPositionHorizontal||e.hideControls?"":"\n    & > div:nth-of-type(1) {\n      order: 2;\n    }\n    & > div:nth-of-type(2) {\n      order: 3;\n    }\n    & > div:nth-of-type(3) {\n      order: 1;\n    }\n  "}),(function(e){return"TOP"===e.cardPositionHorizontal&&e.hideControls?"\n    & > div:nth-of-type(1) {\n      order: 2;\n    }\n    & > div:nth-of-type(2) {\n      order: 1;\n    }\n  ":""})),Kn=Ct.div.withConfig({displayName:"TimelineMainWrapper"})(["align-items:flex-start;display:flex;justify-content:center;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;",";scroll-behavior:smooth;width:100%;"," &.horizontal{min-height:150px;}padding:",";"],(function(e){return"HORIZONTAL"===e.mode?"position: relative":""}),Tt,(function(e){return e.scrollable?"":"0 1rem 0"})),Qn=Ct.div.withConfig({displayName:"TimelineMain"})(["align-items:center;display:flex;left:0;top:50%;position:absolute;transition:all 0.2s ease;transform:translate(0,-50%);&.vertical{align-items:flex-start;height:100%;justify-content:flex-start;width:100%;}"]),er=Ct.div.withConfig({displayName:"Outline"})(["background:",";height:",";left:0;margin-left:auto;margin-right:auto;position:absolute;right:0;width:100%;"],(function(e){return e.color}),(function(e){return`${e.height}px`})),tr=Ct.div.withConfig({displayName:"TimelineControlContainer"})(["align-items:center;display:flex;justify-content:center;min-height:3rem;filter:",";&.hide{visibility:hidden;}&.show{visibility:visible;}"],(function(e){return e.active?"opacity(1);":"opacity(0.9);"})),nr=Ct.div.withConfig({displayName:"TimelineContentRender"})(["margin-left:auto;margin-right:auto;width:98%;display:flex;align-items:flex-start;justify-content:",";overflow-x:hidden;"],(function(e){return e.showAllCards?"flex-start":"center"})),rr=function(n){var r=n.activeTimelineItem,i=n.contentDetailsChildren,o=n.iconChildren,a=n.items;void 0===a&&(a=[]);var s=n.onFirst,l=n.onLast,c=n.onNext,u=n.onPrevious,f=n.onRestartSlideshow,h=n.onTimelineUpdated,m=n.onItemSelected,y=n.onOutlineSelection,b=n.slideShowEnabled,w=n.slideShowRunning,x=n.mode;void 0===x&&(x="HORIZONTAL");var C=n.enableOutline;void 0===C&&(C=!1);var S=n.hideControls;void 0===S&&(S=!1);var k=n.nestedCardHeight,j=n.isChild;void 0===j&&(j=!1);var N=n.onPaused,A=t.useContext(d),T=A.cardPositionHorizontal,E=A.disableNavOnKey,M=A.flipLayout,O=A.itemWidth;void 0===O&&(O=200);var L=A.lineWidth,$=A.onScrollEnd,R=A.scrollable;void 0===R&&(R=!0);var I=A.showAllCardsHorizontal,D=A.theme,P=A.darkMode,_=A.toggleDarkMode,H=A.verticalBreakPoint;void 0===H&&(H=768);var F=A.enableBreakPoint,z=v(x,O),W=z[0],B=z[1],V=t.useRef(null),G=t.useState(!1),Y=G[0],U=G[1],q=t.useRef(null),Z=t.useState(x),X=Z[0],J=Z[1],K=t.useRef(null),Q=t.useMemo((function(){if(!w){if("boolean"==typeof R)return R;if("object"==typeof R&&R.scrollbar)return R.scrollbar}}),[w,R]),ee=t.useRef(`react-chrono-timeline-${function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<7;n++)t+=e.charAt(Math.floor(62*Math.random()));return t}()}`);g(`(min-width: 100px) and (max-width: ${H}px)`,(function(){"VERTICAL_ALTERNATING"===x&&J("VERTICAL")}),F),g(`(min-width: ${H+1}px)`,(function(){J(x)}),F);var te=t.useCallback((function(){Y&&(null==c||c())}),[Y,c]),ne=t.useCallback((function(){return Y&&(null==u?void 0:u())}),[Y,u]),re=t.useCallback((function(){Y&&(null==s||s())}),[Y,s]),ie=t.useCallback((function(){return Y&&(null==l?void 0:l())}),[Y,l]),oe=t.useCallback((function(e){var t=e.key;"HORIZONTAL"===x&&"ArrowRight"===t?M?ne():te():"HORIZONTAL"===x&&"ArrowLeft"===t?M?te():ne():"VERTICAL"!==x&&"VERTICAL_ALTERNATING"!==x||"ArrowDown"!==t?"VERTICAL"!==x&&"VERTICAL_ALTERNATING"!==x||"ArrowUp"!==t?"Home"===t?re():"End"===t&&ie():ne():te()}),[te,ne,ie]),ae=function(e,t){if(e)for(var n=0;n<a.length;n++)if(a[n].id===e){t&&n<a.length-1?null==h||h(n+1):null==h||h(n);break}};t.useEffect((function(){var e,t,n=a[r||0];if(a.length&&n&&(null==m||m(n),"HORIZONTAL"===x)){var i=null===(e=q.current)||void 0===e?void 0:e.querySelector(`#timeline-card-${n.id}`),o=null==i?void 0:i.getBoundingClientRect(),s=null===(t=q.current)||void 0===t?void 0:t.getBoundingClientRect();if(o&&s){var l=o.width,c=o.left,u=s.width,d=s.left;setTimeout((function(){var e=q.current;e.style.scrollBehavior="smooth",e.scrollLeft+=c-d+l/2-u/2}),100)}}}),[r,a.length]);var se=function(e){var t=K.current;t&&B(t,e)};t.useEffect((function(){var e=K.current;e&&("HORIZONTAL"===x?e.scrollLeft=Math.max(W,0):e.scrollTop=W)}),[W]),t.useEffect((function(){setTimeout((function(){var e=K.current;if(e){var t=e.querySelectorAll(".vertical-item-row");Array.from(t).forEach((function(e){V.current&&V.current.observe(e)}))}}),0);var e=function(e,t){e.querySelectorAll("img,video").forEach((function(e){return e.style.visibility="hide"===t?"hidden":"visible"}))};return"HORIZONTAL"!==x&&(V.current=new IntersectionObserver((function(t){t.forEach((function(t){var n=t.target;t.isIntersecting?e(n,"show"):(e(n,"hide"),n.querySelectorAll("iframe").forEach((function(e){var t;null===(t=e.contentWindow)||void 0===t||t.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})))}))}),{root:K.current,threshold:0})),function(){V.current&&V.current.disconnect()}}),[]);var le=t.useCallback((function(e){E||w||(U(!0),oe(e))}),[E,w,oe]),ce=t.useMemo((function(){return p(x.toLocaleLowerCase(),{"focus-visible":!j,"js-focus-visible":!j})}),[x,j]);return e.jsxs(Jn,{onKeyDown:le,className:ce,cardPositionHorizontal:T,onMouseDown:function(){U(!0)},hideControls:S,onKeyUp:function(e){"Escape"===e.key&&(null==N||N())},children:[e.jsxs(Kn,{ref:K,scrollable:Q,className:`${x.toLowerCase()} timeline-main-wrapper`,id:"timeline-main-wrapper",theme:D,mode:x,onScroll:function(e){var t=e.target,n=0;"VERTICAL"===x||"VERTICAL_ALTERNATING"===x?(n=t.scrollTop+t.clientHeight,t.scrollHeight-n<1&&(null==$||$())):(n=t.scrollLeft+t.offsetWidth,t.scrollWidth===n&&(null==$||$()))},children:["VERTICAL_ALTERNATING"===X?e.jsx(Xn,{activeTimelineItem:r,autoScroll:se,contentDetailsChildren:i,hasFocus:Y,iconChildren:o,items:a,mode:X,onClick:ae,onElapsed:function(e){return ae(e,!0)},onOutlineSelection:y,slideShowRunning:w,theme:D,enableOutline:C,nestedCardHeight:k}):null,"HORIZONTAL"===X?e.jsxs(Qn,{className:x.toLowerCase(),children:[e.jsx(er,{color:D&&D.primary,height:L}),e.jsx(An,{autoScroll:se,contentDetailsChildren:i,handleItemClick:ae,hasFocus:Y,iconChildren:o,items:a,mode:X,onElapsed:function(e){return ae(e,!0)},slideShowRunning:w,wrapperId:ee.current,nestedCardHeight:k})]}):null,"VERTICAL"===X?e.jsx(Xn,{activeTimelineItem:r,alternateCards:!1,autoScroll:se,contentDetailsChildren:i,hasFocus:Y,iconChildren:o,items:a,mode:x,onClick:ae,onElapsed:function(e){return ae(e,!0)},onOutlineSelection:y,slideShowRunning:w,theme:D,enableOutline:C,nestedCardHeight:k}):null]}),!S&&e.jsx(tr,{mode:x,children:e.jsx(At,{disableLeft:M?r===a.length-1:0===r,disableRight:M?0===r:r===a.length-1,id:ee.current,onFirst:re,onLast:ie,onNext:te,onPrevious:ne,onReplay:f,slideShowEnabled:b,slideShowRunning:w,isDark:P,onToggleDarkMode:_,onPaused:N})}),e.jsx(nr,{id:ee.current,showAllCards:I,ref:q})]})};rr.displayName="Timeline";var ir=rr,or=t.Children.toArray;exports.k=function(n){var r=n.allowDynamicUpdate;void 0===r&&(r=!1);var i=n.children,a=n.items,s=n.onScrollEnd,l=n.slideShow;void 0===l&&(l=!1);var c=n.onItemSelected,u=n.activeItemIndex;void 0===u&&(u=0);var d=n.titleDateFormat;void 0===d&&(d="MMM DD, YYYY");var h=n.mode,m=n.enableOutline,p=n.hideControls,g=t.useState([]),v=g[0],y=g[1],b=t.useRef(),w=t.useState(!1),x=w[0],C=w[1],S=t.useState(u),k=S[0],j=S[1],N=function(e){if(e&&e.length)return e.map((function(e,t){var n,r=Math.random().toString(16).slice(2);return Object.assign({},e,{_dayjs:o(e.date),active:t===u,id:r,items:null===(n=e.items)||void 0===n?void 0:n.map((function(e){return Object.assign({},e,{_dayjs:o(e.date),id:Math.random().toString(16).slice(2),isNested:!0,visible:!0})})),title:e.date?o(e.date).format(d):e.title,visible:!0})}));var n=t.Children.toArray(i).filter((function(e){return"chrono-icons"!==e.props.className})).length;return Array.from({length:n}).map((function(e,t){return{active:t===u,id:Math.random().toString(16).slice(2),visible:!0}}))};t.useEffect((function(){var e=null==a?void 0:a.filter((function(e){return e})),t=[];if(null==e?void 0:e.length)v.length&&e.length>v.length?t=function(e){if(e){var t=v.length;return e.map((function(e,n){return Object.assign({},e,{active:n===t,visible:!0})}))}return[]}(e):e.length&&(t=N(e)),t.length&&(b.current=t,y(t));else{var n=N();y(n)}}),[JSON.stringify(r?a:null)]);var A=t.useCallback((function(e){y((function(t){return t.map((function(t,n){return Object.assign({},t,{active:n===e,visible:e>=0})}))})),j(e),a&&a.length-1===e&&C(!1)}),[]);t.useEffect((function(){A(u)}),[u]);var T=t.useCallback((function(){A(-1),setTimeout((function(){C(!0),A(0)}),0)}),[]),E=t.useCallback((function(e){e>=0&&(j(e),A(e))}),[v.length]),M=t.useCallback((function(){C(!1)}),[]),O=or(i).filter((function(e){return"chrono-icons"===e.props.className}));return O.length&&(O=O[0].props.children),e.jsx(f,Object.assign({},n,{children:e.jsx(ir,{activeTimelineItem:k,contentDetailsChildren:or(i).filter((function(e){return"chrono-icons"!==e.props.className})),iconChildren:O,items:v,onFirst:function(){j(0),A(0)},onLast:function(){if(v.length){var e=v.length-1;j(e),A(e)}},onNext:function(){if(v.length&&k<v.length-1){var e=k+1;A(e),j(e)}},onPrevious:function(){if(k>0){var e=k-1;A(e),j(e)}},onRestartSlideshow:T,onTimelineUpdated:A,slideShow:l,slideShowEnabled:l,slideShowRunning:x,onScrollEnd:s,onItemSelected:c,onOutlineSelection:E,mode:h,enableOutline:m,hideControls:p,onPaused:M})}))};


/***/ }),

/***/ 1512:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(8038);
var PropTypes = __webpack_require__(7071);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function zeroPad(value) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var strValue = String(value);
  if (length === 0) return strValue;
  var match = strValue.match(/(.*?)([0-9]+)(.*)/);
  var prefix = match ? match[1] : '';
  var suffix = match ? match[3] : '';
  var strNo = match ? match[2] : strValue;
  var paddedNo = strNo.length >= length ? strNo : (_toConsumableArray(Array(length)).map(function () {
    return '0';
  }).join('') + strNo).slice(length * -1);
  return "".concat(prefix).concat(paddedNo).concat(suffix);
}
var timeDeltaFormatOptionsDefaults = {
  daysInHours: false,
  zeroPadTime: 2
};
function calcTimeDelta(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$now = options.now,
      now = _options$now === void 0 ? Date.now : _options$now,
      _options$precision = options.precision,
      precision = _options$precision === void 0 ? 0 : _options$precision,
      controlled = options.controlled,
      _options$offsetTime = options.offsetTime,
      offsetTime = _options$offsetTime === void 0 ? 0 : _options$offsetTime,
      overtime = options.overtime;
  var startTimestamp;

  if (typeof date === 'string') {
    startTimestamp = new Date(date).getTime();
  } else if (date instanceof Date) {
    startTimestamp = date.getTime();
  } else {
    startTimestamp = date;
  }

  if (!controlled) {
    startTimestamp += offsetTime;
  }

  var timeLeft = controlled ? startTimestamp : startTimestamp - now();
  var clampedPrecision = Math.min(20, Math.max(0, precision));
  var total = Math.round(parseFloat(((overtime ? timeLeft : Math.max(0, timeLeft)) / 1000).toFixed(clampedPrecision)) * 1000);
  var seconds = Math.abs(total) / 1000;
  return {
    total: total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor(seconds / 3600 % 24),
    minutes: Math.floor(seconds / 60 % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number((seconds % 1 * 1000).toFixed()),
    completed: total <= 0
  };
}
function formatTimeDelta(timeDelta, options) {
  var days = timeDelta.days,
      hours = timeDelta.hours,
      minutes = timeDelta.minutes,
      seconds = timeDelta.seconds;

  var _Object$assign = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), options),
      daysInHours = _Object$assign.daysInHours,
      zeroPadTime = _Object$assign.zeroPadTime,
      _Object$assign$zeroPa = _Object$assign.zeroPadDays,
      zeroPadDays = _Object$assign$zeroPa === void 0 ? zeroPadTime : _Object$assign$zeroPa;

  var zeroPadTimeLength = Math.min(2, zeroPadTime);
  var formattedHours = daysInHours ? zeroPad(hours + days * 24, zeroPadTime) : zeroPad(hours, zeroPadTimeLength);
  return {
    days: daysInHours ? '' : zeroPad(days, zeroPadDays),
    hours: formattedHours,
    minutes: zeroPad(minutes, zeroPadTimeLength),
    seconds: zeroPad(seconds, zeroPadTimeLength)
  };
}

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  var _super = _createSuper(Countdown);

  function Countdown() {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _super.apply(this, arguments);
    _this.state = {
      count: _this.props.count || 3
    };

    _this.startCountdown = function () {
      _this.interval = window.setInterval(function () {
        var count = _this.state.count - 1;

        if (count === 0) {
          _this.stopCountdown();

          _this.props.onComplete && _this.props.onComplete();
        } else {
          _this.setState(function (prevState) {
            return {
              count: prevState.count - 1
            };
          });
        }
      }, 1000);
    };

    _this.stopCountdown = function () {
      clearInterval(_this.interval);
    };

    _this.addTime = function (seconds) {
      _this.stopCountdown();

      _this.setState(function (prevState) {
        return {
          count: prevState.count + seconds
        };
      }, _this.startCountdown);
    };

    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCountdown();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children ? React.cloneElement(this.props.children, {
        count: this.state.count
      }) : null;
    }
  }]);

  return Countdown;
}(React.Component);
Countdown.propTypes = {
  count: PropTypes.number,
  children: PropTypes.element,
  onComplete: PropTypes.func
};

var Countdown$1 = function (_React$Component) {
  _inherits(Countdown$1, _React$Component);

  var _super = _createSuper(Countdown$1);

  function Countdown$1(props) {
    var _this;

    _classCallCheck(this, Countdown$1);

    _this = _super.call(this, props);
    _this.mounted = false;
    _this.initialTimestamp = _this.calcOffsetStartTimestamp();
    _this.offsetStartTimestamp = _this.props.autoStart ? 0 : _this.initialTimestamp;
    _this.offsetTime = 0;
    _this.legacyMode = false;
    _this.legacyCountdownRef = React.createRef();

    _this.tick = function () {
      var timeDelta = _this.calcTimeDelta();

      var callback = timeDelta.completed && !_this.props.overtime ? undefined : _this.props.onTick;

      _this.setTimeDeltaState(timeDelta, undefined, callback);
    };

    _this.start = function () {
      if (_this.isStarted()) return;
      var prevOffsetStartTimestamp = _this.offsetStartTimestamp;
      _this.offsetStartTimestamp = 0;
      _this.offsetTime += prevOffsetStartTimestamp ? _this.calcOffsetStartTimestamp() - prevOffsetStartTimestamp : 0;

      var timeDelta = _this.calcTimeDelta();

      _this.setTimeDeltaState(timeDelta, "STARTED", _this.props.onStart);

      if (!_this.props.controlled && (!timeDelta.completed || _this.props.overtime)) {
        _this.clearTimer();

        _this.interval = window.setInterval(_this.tick, _this.props.intervalDelay);
      }
    };

    _this.pause = function () {
      if (_this.isPaused()) return;

      _this.clearTimer();

      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();

      _this.setTimeDeltaState(_this.state.timeDelta, "PAUSED", _this.props.onPause);
    };

    _this.stop = function () {
      if (_this.isStopped()) return;

      _this.clearTimer();

      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();
      _this.offsetTime = _this.offsetStartTimestamp - _this.initialTimestamp;

      _this.setTimeDeltaState(_this.calcTimeDelta(), "STOPPED", _this.props.onStop);
    };

    _this.isStarted = function () {
      return _this.isStatus("STARTED");
    };

    _this.isPaused = function () {
      return _this.isStatus("PAUSED");
    };

    _this.isStopped = function () {
      return _this.isStatus("STOPPED");
    };

    _this.isCompleted = function () {
      return _this.isStatus("COMPLETED");
    };

    if (props.date) {
      var timeDelta = _this.calcTimeDelta();

      _this.state = {
        timeDelta: timeDelta,
        status: timeDelta.completed ? "COMPLETED" : "STOPPED"
      };
    } else {
      _this.legacyMode = true;
    }

    return _this;
  }

  _createClass(Countdown$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = true;
      if (this.props.onMount) this.props.onMount(this.calcTimeDelta());
      if (this.props.autoStart) this.start();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.legacyMode) {
        return;
      }

      if (this.props.date !== prevProps.date) {
        this.initialTimestamp = this.calcOffsetStartTimestamp();
        this.offsetStartTimestamp = this.initialTimestamp;
        this.offsetTime = 0;
        this.setTimeDeltaState(this.calcTimeDelta());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = false;
      this.clearTimer();
    }
  }, {
    key: "calcTimeDelta",
    value: function calcTimeDelta$1() {
      var _this$props = this.props,
          date = _this$props.date,
          now = _this$props.now,
          precision = _this$props.precision,
          controlled = _this$props.controlled,
          overtime = _this$props.overtime;
      return calcTimeDelta(date, {
        now: now,
        precision: precision,
        controlled: controlled,
        offsetTime: this.offsetTime,
        overtime: overtime
      });
    }
  }, {
    key: "calcOffsetStartTimestamp",
    value: function calcOffsetStartTimestamp() {
      return Date.now();
    }
  }, {
    key: "addTime",
    value: function addTime(seconds) {
      this.legacyCountdownRef.current.addTime(seconds);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "isStatus",
    value: function isStatus(status) {
      return this.state.status === status;
    }
  }, {
    key: "setTimeDeltaState",
    value: function setTimeDeltaState(timeDelta, status, callback) {
      var _this2 = this;

      if (!this.mounted) return;
      var completing = timeDelta.completed && !this.state.timeDelta.completed;
      var completedOnStart = timeDelta.completed && status === "STARTED";

      if (completing && !this.props.overtime) {
        this.clearTimer();
      }

      var onDone = function onDone() {
        if (callback) callback(_this2.state.timeDelta);

        if (_this2.props.onComplete && (completing || completedOnStart)) {
          _this2.props.onComplete(timeDelta, completedOnStart);
        }
      };

      return this.setState(function (prevState) {
        var newStatus = status || prevState.status;

        if (timeDelta.completed && !_this2.props.overtime) {
          newStatus = "COMPLETED";
        } else if (!status && newStatus === "COMPLETED") {
          newStatus = "STOPPED";
        }

        return {
          timeDelta: timeDelta,
          status: newStatus
        };
      }, onDone);
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return this.api = this.api || {
        start: this.start,
        pause: this.pause,
        stop: this.stop,
        isStarted: this.isStarted,
        isPaused: this.isPaused,
        isStopped: this.isStopped,
        isCompleted: this.isCompleted
      };
    }
  }, {
    key: "getRenderProps",
    value: function getRenderProps() {
      var _this$props2 = this.props,
          daysInHours = _this$props2.daysInHours,
          zeroPadTime = _this$props2.zeroPadTime,
          zeroPadDays = _this$props2.zeroPadDays;
      var timeDelta = this.state.timeDelta;
      return Object.assign(Object.assign({}, timeDelta), {
        api: this.getApi(),
        props: this.props,
        formatted: formatTimeDelta(timeDelta, {
          daysInHours: daysInHours,
          zeroPadTime: zeroPadTime,
          zeroPadDays: zeroPadDays
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.legacyMode) {
        var _this$props3 = this.props,
            count = _this$props3.count,
            _children = _this$props3.children,
            onComplete = _this$props3.onComplete;
        return React.createElement(Countdown, {
          ref: this.legacyCountdownRef,
          count: count,
          onComplete: onComplete
        }, _children);
      }

      var _this$props4 = this.props,
          className = _this$props4.className,
          overtime = _this$props4.overtime,
          children = _this$props4.children,
          renderer = _this$props4.renderer;
      var renderProps = this.getRenderProps();

      if (renderer) {
        return renderer(renderProps);
      }

      if (children && this.state.timeDelta.completed && !overtime) {
        return React.cloneElement(children, {
          countdown: renderProps
        });
      }

      var _renderProps$formatte = renderProps.formatted,
          days = _renderProps$formatte.days,
          hours = _renderProps$formatte.hours,
          minutes = _renderProps$formatte.minutes,
          seconds = _renderProps$formatte.seconds;
      return React.createElement("span", {
        className: className
      }, renderProps.total < 0 ? '-' : '', days, days ? ':' : '', hours, ":", minutes, ":", seconds);
    }
  }]);

  return Countdown$1;
}(React.Component);
Countdown$1.defaultProps = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), {
  controlled: false,
  intervalDelay: 1000,
  precision: 0,
  autoStart: true
});
Countdown$1.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number]),
  daysInHours: PropTypes.bool,
  zeroPadTime: PropTypes.number,
  zeroPadDays: PropTypes.number,
  controlled: PropTypes.bool,
  intervalDelay: PropTypes.number,
  precision: PropTypes.number,
  autoStart: PropTypes.bool,
  overtime: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element,
  renderer: PropTypes.func,
  now: PropTypes.func,
  onMount: PropTypes.func,
  onStart: PropTypes.func,
  onPause: PropTypes.func,
  onStop: PropTypes.func,
  onTick: PropTypes.func,
  onComplete: PropTypes.func
};

__webpack_unused_export__ = calcTimeDelta;
exports.ZP = Countdown$1;
__webpack_unused_export__ = formatTimeDelta;
__webpack_unused_export__ = zeroPad;


/***/ })

};
;