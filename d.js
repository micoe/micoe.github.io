!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DisableDevtool=e():n.DisableDevtool=e()}(this,(function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";function o(){return r("qqbrowser")}function r(n){return-1!==navigator.userAgent.toLocaleLowerCase().indexOf(n)}function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}t.r(e);var u={md5:"",ondevtoolopen:function(){if(u.url)window.location.href=u.url;else{try{window.opener=null,window.open("","_self"),window.close(),window.history.back()}catch(n){console.log(n)}setTimeout((function(){window.location.href="404.html".concat(encodeURIComponent(location.host))}),500)}},url:"",tkName:"ddtk",interval:200,disableMenu:!0,stopIntervalTime:5e3};var c=null,a=null,f=[];function l(){var n,e,t,o,r,i,l=!1,d=function(){l=!0},s=function(){l=!1};n=d,e=s,t=window.alert,o=window.confirm,r=window.prompt,i=function(t){return function(){n&&n(),t.apply(void 0,arguments),e&&e()}},window.alert=i(t),window.confirm=i(o),window.prompt=i(r),function(n,e){var t,o,r;void 0!==document.hidden?(t="hidden",r="visibilitychange",o="visibilityState"):void 0!==document.mozHidden?(t="mozHidden",r="mozvisibilitychange",o="mozVisibilityState"):void 0!==document.msHidden?(t="msHidden",r="msvisibilitychange",o="msVisibilityState"):void 0!==document.webkitHidden&&(t="webkitHidden",r="webkitvisibilitychange",o="webkitVisibilityState");var i=function(){document[o]===t?e():n()};document.removeEventListener(r,i,!1),document.addEventListener(r,i,!1)}(s,d),c=window.setInterval((function(){l||f.forEach((function(n){n()}))}),u.interval),a=setTimeout((function(){/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())&&window.clearInterval(c)}),u.stopIntervalTime)}function d(n,e,t,o,r,i){return w((u=w(w(e,n),w(o,i)))<<(c=r)|u>>>32-c,t);var u,c}function s(n,e,t,o,r,i,u){return d(e&t|~e&o,n,e,r,i,u)}function v(n,e,t,o,r,i,u){return d(e&o|t&~o,n,e,r,i,u)}function m(n,e,t,o,r,i,u){return d(e^t^o,n,e,r,i,u)}function p(n,e,t,o,r,i,u){return d(t^(e|~o),n,e,r,i,u)}function w(n,e){var t=(65535&n)+(65535&e);return(n>>16)+(e>>16)+(t>>16)<<16|65535&t}var y=function(n){return function(n){for(var e="0123456789abcdef",t="",o=0;o<4*n.length;o++)t+=e.charAt(n[o>>2]>>o%4*8+4&15)+e.charAt(n[o>>2]>>o%4*8&15);return t}(function(n,e){n[e>>5]|=128<<e%32,n[14+(e+64>>>9<<4)]=e;for(var t=1732584193,o=-271733879,r=-1732584194,i=271733878,u=0;u<n.length;u+=16){var c=t,a=o,f=r,l=i;t=s(t,o,r,i,n[u+0],7,-680876936),i=s(i,t,o,r,n[u+1],12,-389564586),r=s(r,i,t,o,n[u+2],17,606105819),o=s(o,r,i,t,n[u+3],22,-1044525330),t=s(t,o,r,i,n[u+4],7,-176418897),i=s(i,t,o,r,n[u+5],12,1200080426),r=s(r,i,t,o,n[u+6],17,-1473231341),o=s(o,r,i,t,n[u+7],22,-45705983),t=s(t,o,r,i,n[u+8],7,1770035416),i=s(i,t,o,r,n[u+9],12,-1958414417),r=s(r,i,t,o,n[u+10],17,-42063),o=s(o,r,i,t,n[u+11],22,-1990404162),t=s(t,o,r,i,n[u+12],7,1804603682),i=s(i,t,o,r,n[u+13],12,-40341101),r=s(r,i,t,o,n[u+14],17,-1502002290),o=s(o,r,i,t,n[u+15],22,1236535329),t=v(t,o,r,i,n[u+1],5,-165796510),i=v(i,t,o,r,n[u+6],9,-1069501632),r=v(r,i,t,o,n[u+11],14,643717713),o=v(o,r,i,t,n[u+0],20,-373897302),t=v(t,o,r,i,n[u+5],5,-701558691),i=v(i,t,o,r,n[u+10],9,38016083),r=v(r,i,t,o,n[u+15],14,-660478335),o=v(o,r,i,t,n[u+4],20,-405537848),t=v(t,o,r,i,n[u+9],5,568446438),i=v(i,t,o,r,n[u+14],9,-1019803690),r=v(r,i,t,o,n[u+3],14,-187363961),o=v(o,r,i,t,n[u+8],20,1163531501),t=v(t,o,r,i,n[u+13],5,-1444681467),i=v(i,t,o,r,n[u+2],9,-51403784),r=v(r,i,t,o,n[u+7],14,1735328473),o=v(o,r,i,t,n[u+12],20,-1926607734),t=m(t,o,r,i,n[u+5],4,-378558),i=m(i,t,o,r,n[u+8],11,-2022574463),r=m(r,i,t,o,n[u+11],16,1839030562),o=m(o,r,i,t,n[u+14],23,-35309556),t=m(t,o,r,i,n[u+1],4,-1530992060),i=m(i,t,o,r,n[u+4],11,1272893353),r=m(r,i,t,o,n[u+7],16,-155497632),o=m(o,r,i,t,n[u+10],23,-1094730640),t=m(t,o,r,i,n[u+13],4,681279174),i=m(i,t,o,r,n[u+0],11,-358537222),r=m(r,i,t,o,n[u+3],16,-722521979),o=m(o,r,i,t,n[u+6],23,76029189),t=m(t,o,r,i,n[u+9],4,-640364487),i=m(i,t,o,r,n[u+12],11,-421815835),r=m(r,i,t,o,n[u+15],16,530742520),o=m(o,r,i,t,n[u+2],23,-995338651),t=p(t,o,r,i,n[u+0],6,-198630844),i=p(i,t,o,r,n[u+7],10,1126891415),r=p(r,i,t,o,n[u+14],15,-1416354905),o=p(o,r,i,t,n[u+5],21,-57434055),t=p(t,o,r,i,n[u+12],6,1700485571),i=p(i,t,o,r,n[u+3],10,-1894986606),r=p(r,i,t,o,n[u+10],15,-1051523),o=p(o,r,i,t,n[u+1],21,-2054922799),t=p(t,o,r,i,n[u+8],6,1873313359),i=p(i,t,o,r,n[u+15],10,-30611744),r=p(r,i,t,o,n[u+6],15,-1560198380),o=p(o,r,i,t,n[u+13],21,1309151649),t=p(t,o,r,i,n[u+4],6,-145523070),i=p(i,t,o,r,n[u+11],10,-1120210379),r=p(r,i,t,o,n[u+2],15,718787259),o=p(o,r,i,t,n[u+9],21,-343485551),t=w(t,c),o=w(o,a),r=w(r,f),i=w(i,l)}return Array(t,o,r,i)}(function(n){for(var e=Array(),t=0;t<8*n.length;t+=8)e[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return e}(n),8*n.length))};function b(n){!function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in u)void 0!==n[e]&&i(u[e])===i(n[e])&&(u[e]=n[e])}(n),function(){if(u.md5){var n=function(n){var e=window.location.search;if(""!==e){var t=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),o=e.substr(1).match(t);if(null!=o)return unescape(o[2])}return""}(u.tkName);if(y(n)===u.md5)return!0}return!1}()||(l(),window.addEventListener("keydown",(function(n){if(123===((n=n||window.event).keyCode||n.which)||n.shiftKey&&n.ctrlKey&&73===n.keyCode)return n.returnValue=!1,n.preventDefault(),!1}),!1),u.disableMenu&&window.addEventListener("contextmenu",(function(n){return(n=n||window.event).returnValue=!1,n.preventDefault(),!1}),!1),function(){var n=o(),e=r("firefox"),t="";if(n){var i=0;t=/./,console.log(t),t.toString=function(){var n=g(),e=n.time,t=n.next;return i&&e-i<100?t():i=e,""}}else e?(t=/./,console.log(t),t.toString=function(){return g().next(),""}):(t=new Image).__defineGetter__("id",(function(){g().next()}));u=function(){console.log(t),console.clear()},f.push(u);var u}())}b.md5=y,b.version="0.1.3";var h=!1;function g(){var n=(new Date).getTime();return console.log("You ar not allow to use DEVTOOL!",n),h?{time:n,next:function(){}}:(o()||(h=!0),{time:n,next:function(){h=!0,window.clearTimeout(a),u.ondevtoolopen()}})}!function(){if("undefined"!=typeof document){var n=document.querySelector("[disable-devtool-auto]");if(n){var e={};["md5","url","tk-name","interval","disable-menu"].forEach((function(t){var o=n.getAttribute(t);null!==o&&("interval"===t?o=parseInt(o):"disable-menu"===t&&(o="false"!==o),e[function(n){if(-1===n.indexOf("-"))return n;var e=!1;return n.split("").map((function(n){return"-"===n?(e=!0,""):e?(e=!1,n.toUpperCase()):n})).join("")}(t)]=o)})),b(e)}}}();e.default=b}]).default}));