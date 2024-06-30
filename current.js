/*! For license information please see index.626b5709.js.LICENSE.txt */
!function(){var e={2292:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},6537:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},1219:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},2787:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},1253:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isMsWindow=void 0;var n=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];t.isMsWindow=function(e){if(function(e){return"MSInputMethodContext"in e&&"msCrypto"in e}(e)&&void 0!==e.msCrypto.subtle){var t=e.msCrypto,r=t.getRandomValues,o=t.subtle;return n.map((function(e){return o[e]})).concat(r).every((function(e){return"function"==typeof e}))}return!1}},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3384);r.__exportStar(n(2292),t),r.__exportStar(n(6537),t),r.__exportStar(n(1219),t),r.__exportStar(n(2787),t),r.__exportStar(n(1253),t)},3384:function(e,t,n){"use strict";n.r(t),n.d(t,{__assign:function(){return i},__asyncDelegator:function(){return w},__asyncGenerator:function(){return b},__asyncValues:function(){return _},__await:function(){return y},__awaiter:function(){return l},__classPrivateFieldGet:function(){return A},__classPrivateFieldSet:function(){return k},__createBinding:function(){return f},__decorate:function(){return s},__exportStar:function(){return p},__extends:function(){return o},__generator:function(){return d},__importDefault:function(){return C},__importStar:function(){return S},__makeTemplateObject:function(){return x},__metadata:function(){return u},__param:function(){return c},__read:function(){return m},__rest:function(){return a},__spread:function(){return v},__spreadArrays:function(){return g},__values:function(){return h}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function f(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(e){l(i[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function C(e){return e&&e.__esModule?e:{default:e}}function A(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function k(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},7903:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EMPTY_DATA_SHA_256=t.SHA_256_HMAC_ALGO=t.SHA_256_HASH=void 0,t.SHA_256_HASH={name:"SHA-256"},t.SHA_256_HMAC_ALGO={name:"HMAC",hash:t.SHA_256_HASH},t.EMPTY_DATA_SHA_256=new Uint8Array([227,176,196,66,152,252,28,20,154,251,244,200,153,111,185,36,39,174,65,228,100,155,147,76,164,149,153,27,120,82,184,85])},7523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0;var r=n(7579),o=n(5362),i=n(6528),a=n(5665),s=n(208),c=n(9222),u=function(){function e(e){(0,a.supportsWebCrypto)((0,c.locateWindow)())?this.hash=new o.Sha256(e):(0,s.isMsWindow)((0,c.locateWindow)())?this.hash=new r.Sha256(e):this.hash=new i.Sha256(e)}return e.prototype.update=function(e,t){this.hash.update(e,t)},e.prototype.digest=function(){return this.hash.digest()},e}();t.Sha256=u},7579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0;var r=n(8960),o=n(7903),i=n(5653),a=n(9222),s=function(){function e(e){e?(this.operation=function(e){return new Promise((function(t,n){var r=(0,a.locateWindow)().msCrypto.subtle.importKey("raw",c(e),o.SHA_256_HMAC_ALGO,!1,["sign"]);r.oncomplete=function(){r.result&&t(r.result),n(new Error("ImportKey completed without importing key."))},r.onerror=function(){n(new Error("ImportKey failed to import key."))}}))}(e).then((function(e){return(0,a.locateWindow)().msCrypto.subtle.sign(o.SHA_256_HMAC_ALGO,e)})),this.operation.catch((function(){}))):this.operation=Promise.resolve((0,a.locateWindow)().msCrypto.subtle.digest("SHA-256"))}return e.prototype.update=function(e){var t=this;(0,r.isEmptyData)(e)||(this.operation=this.operation.then((function(n){return n.onerror=function(){t.operation=Promise.reject(new Error("Error encountered updating hash"))},n.process(c(e)),n})),this.operation.catch((function(){})))},e.prototype.digest=function(){return this.operation.then((function(e){return new Promise((function(t,n){e.onerror=function(){n(new Error("Error encountered finalizing hash"))},e.oncomplete=function(){e.result&&t(new Uint8Array(e.result)),n(new Error("Error encountered finalizing hash"))},e.finish()}))}))},e}();function c(e){return"string"==typeof e?(0,i.fromUtf8)(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}t.Sha256=s},6066:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebCryptoSha256=t.Ie11Sha256=void 0,(0,n(4166).__exportStar)(n(7523),t);var r=n(7579);Object.defineProperty(t,"Ie11Sha256",{enumerable:!0,get:function(){return r.Sha256}});var o=n(5362);Object.defineProperty(t,"WebCryptoSha256",{enumerable:!0,get:function(){return o.Sha256}})},8960:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmptyData=void 0,t.isEmptyData=function(e){return"string"==typeof e?0===e.length:0===e.byteLength}},5362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0;var r=n(4747),o=n(7903),i=n(9222),a=function(){function e(e){this.toHash=new Uint8Array(0),void 0!==e&&(this.key=new Promise((function(t,n){(0,i.locateWindow)().crypto.subtle.importKey("raw",(0,r.convertToBuffer)(e),o.SHA_256_HMAC_ALGO,!1,["sign"]).then(t,n)})),this.key.catch((function(){})))}return e.prototype.update=function(e){if(!(0,r.isEmptyData)(e)){var t=(0,r.convertToBuffer)(e),n=new Uint8Array(this.toHash.byteLength+t.byteLength);n.set(this.toHash,0),n.set(t,this.toHash.byteLength),this.toHash=n}},e.prototype.digest=function(){var e=this;return this.key?this.key.then((function(t){return(0,i.locateWindow)().crypto.subtle.sign(o.SHA_256_HMAC_ALGO,t,e.toHash).then((function(e){return new Uint8Array(e)}))})):(0,r.isEmptyData)(this.toHash)?Promise.resolve(o.EMPTY_DATA_SHA_256):Promise.resolve().then((function(){return(0,i.locateWindow)().crypto.subtle.digest(o.SHA_256_HASH,e.toHash)})).then((function(e){return Promise.resolve(new Uint8Array(e))}))},e}();t.Sha256=a},8611:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RawSha256=void 0;var r=n(5824),o=function(){function e(){this.state=Int32Array.from(r.INIT),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}return e.prototype.update=function(e){if(this.finished)throw new Error("Attempted to update an already finished hash.");var t=0,n=e.byteLength;if(this.bytesHashed+=n,8*this.bytesHashed>r.MAX_HASHABLE_LENGTH)throw new Error("Cannot hash more than 2^53 - 1 bits");for(;n>0;)this.buffer[this.bufferLength++]=e[t++],n--,this.bufferLength===r.BLOCK_SIZE&&(this.hashBuffer(),this.bufferLength=0)},e.prototype.digest=function(){if(!this.finished){var e=8*this.bytesHashed,t=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),n=this.bufferLength;if(t.setUint8(this.bufferLength++,128),n%r.BLOCK_SIZE>=r.BLOCK_SIZE-8){for(var o=this.bufferLength;o<r.BLOCK_SIZE;o++)t.setUint8(o,0);this.hashBuffer(),this.bufferLength=0}for(o=this.bufferLength;o<r.BLOCK_SIZE-8;o++)t.setUint8(o,0);t.setUint32(r.BLOCK_SIZE-8,Math.floor(e/4294967296),!0),t.setUint32(r.BLOCK_SIZE-4,e),this.hashBuffer(),this.finished=!0}var i=new Uint8Array(r.DIGEST_LENGTH);for(o=0;o<8;o++)i[4*o]=this.state[o]>>>24&255,i[4*o+1]=this.state[o]>>>16&255,i[4*o+2]=this.state[o]>>>8&255,i[4*o+3]=this.state[o]>>>0&255;return i},e.prototype.hashBuffer=function(){for(var e=this.buffer,t=this.state,n=t[0],o=t[1],i=t[2],a=t[3],s=t[4],c=t[5],u=t[6],l=t[7],d=0;d<r.BLOCK_SIZE;d++){if(d<16)this.temp[d]=(255&e[4*d])<<24|(255&e[4*d+1])<<16|(255&e[4*d+2])<<8|255&e[4*d+3];else{var f=this.temp[d-2],p=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,h=((f=this.temp[d-15])>>>7|f<<25)^(f>>>18|f<<14)^f>>>3;this.temp[d]=(p+this.temp[d-7]|0)+(h+this.temp[d-16]|0)}var m=(((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(s&c^~s&u)|0)+(l+(r.KEY[d]+this.temp[d]|0)|0)|0,v=((n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10))+(n&o^n&i^o&i)|0;l=u,u=c,c=s,s=a+m|0,a=i,i=o,o=n,n=m+v|0}t[0]+=n,t[1]+=o,t[2]+=i,t[3]+=a,t[4]+=s,t[5]+=c,t[6]+=u,t[7]+=l},e}();t.RawSha256=o},5824:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_HASHABLE_LENGTH=t.INIT=t.KEY=t.DIGEST_LENGTH=t.BLOCK_SIZE=void 0,t.BLOCK_SIZE=64,t.DIGEST_LENGTH=32,t.KEY=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),t.INIT=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.MAX_HASHABLE_LENGTH=Math.pow(2,53)-1},6528:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(4166).__exportStar(n(7810),t)},7810:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0;var r=n(4166),o=n(5824),i=n(8611),a=n(4747),s=function(){function e(e){if(this.hash=new i.RawSha256,e){this.outer=new i.RawSha256;var t=function(e){var t=(0,a.convertToBuffer)(e);if(t.byteLength>o.BLOCK_SIZE){var n=new i.RawSha256;n.update(t),t=n.digest()}var r=new Uint8Array(o.BLOCK_SIZE);return r.set(t),r}(e),n=new Uint8Array(o.BLOCK_SIZE);n.set(t);for(var r=0;r<o.BLOCK_SIZE;r++)t[r]^=54,n[r]^=92;for(this.hash.update(t),this.outer.update(n),r=0;r<t.byteLength;r++)t[r]=0}}return e.prototype.update=function(e){if(!(0,a.isEmptyData)(e)&&!this.error)try{this.hash.update((0,a.convertToBuffer)(e))}catch(e){this.error=e}},e.prototype.digestSync=function(){if(this.error)throw this.error;return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},e.prototype.digest=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,this.digestSync()]}))}))},e}();t.Sha256=s},4166:function(e,t,n){"use strict";n.r(t),n.d(t,{__assign:function(){return i},__asyncDelegator:function(){return w},__asyncGenerator:function(){return b},__asyncValues:function(){return _},__await:function(){return y},__awaiter:function(){return l},__classPrivateFieldGet:function(){return A},__classPrivateFieldSet:function(){return k},__createBinding:function(){return f},__decorate:function(){return s},__exportStar:function(){return p},__extends:function(){return o},__generator:function(){return d},__importDefault:function(){return C},__importStar:function(){return S},__makeTemplateObject:function(){return x},__metadata:function(){return u},__param:function(){return c},__read:function(){return m},__rest:function(){return a},__spread:function(){return v},__spreadArrays:function(){return g},__values:function(){return h}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function f(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(e){l(i[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function C(e){return e&&e.__esModule?e:{default:e}}function A(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function k(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},5665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(5790).__exportStar(n(6483),t)},6483:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportsZeroByteGCM=t.supportsSubtleCrypto=t.supportsSecureRandom=t.supportsWebCrypto=void 0;var r=n(5790),o=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];function i(e){return"object"==typeof e&&"object"==typeof e.crypto&&"function"==typeof e.crypto.getRandomValues}function a(e){return e&&o.every((function(t){return"function"==typeof e[t]}))}t.supportsWebCrypto=function(e){return!(!i(e)||"object"!=typeof e.crypto.subtle)&&a(e.crypto.subtle)},t.supportsSecureRandom=i,t.supportsSubtleCrypto=a,t.supportsZeroByteGCM=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(n){switch(n.label){case 0:if(!a(e))return[2,!1];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,e.generateKey({name:"AES-GCM",length:128},!1,["encrypt"])];case 2:return t=n.sent(),[4,e.encrypt({name:"AES-GCM",iv:new Uint8Array(Array(12)),additionalData:new Uint8Array(Array(16)),tagLength:128},t,new Uint8Array(0))];case 3:return[2,16===n.sent().byteLength];case 4:return n.sent(),[2,!1];case 5:return[2]}}))}))}},5790:function(e,t,n){"use strict";n.r(t),n.d(t,{__assign:function(){return i},__asyncDelegator:function(){return w},__asyncGenerator:function(){return b},__asyncValues:function(){return _},__await:function(){return y},__awaiter:function(){return l},__classPrivateFieldGet:function(){return A},__classPrivateFieldSet:function(){return k},__createBinding:function(){return f},__decorate:function(){return s},__exportStar:function(){return p},__extends:function(){return o},__generator:function(){return d},__importDefault:function(){return C},__importStar:function(){return S},__makeTemplateObject:function(){return x},__metadata:function(){return u},__param:function(){return c},__read:function(){return m},__rest:function(){return a},__spread:function(){return v},__spreadArrays:function(){return g},__values:function(){return h}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function f(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(e){l(i[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function C(e){return e&&e.__esModule?e:{default:e}}function A(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function k(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},5955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertToBuffer=void 0;var r=n(5653),o="undefined"!=typeof Buffer&&Buffer.from?function(e){return Buffer.from(e,"utf8")}:r.fromUtf8;t.convertToBuffer=function(e){return e instanceof Uint8Array?e:"string"==typeof e?o(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}},4747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uint32ArrayFrom=t.numToUint8=t.isEmptyData=t.convertToBuffer=void 0;var r=n(5955);Object.defineProperty(t,"convertToBuffer",{enumerable:!0,get:function(){return r.convertToBuffer}});var o=n(3958);Object.defineProperty(t,"isEmptyData",{enumerable:!0,get:function(){return o.isEmptyData}});var i=n(5346);Object.defineProperty(t,"numToUint8",{enumerable:!0,get:function(){return i.numToUint8}});var a=n(2570);Object.defineProperty(t,"uint32ArrayFrom",{enumerable:!0,get:function(){return a.uint32ArrayFrom}})},3958:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmptyData=void 0,t.isEmptyData=function(e){return"string"==typeof e?0===e.length:0===e.byteLength}},5346:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numToUint8=void 0,t.numToUint8=function(e){return new Uint8Array([(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e])}},2570:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uint32ArrayFrom=void 0,t.uint32ArrayFrom=function(e){if(!Uint32Array.from){for(var t=new Uint32Array(e.length),n=0;n<e.length;)t[n]=e[n],n+=1;return t}return Uint32Array.from(e)}},9222:function(e,t,n){"use strict";n.r(t),n.d(t,{locateWindow:function(){return o}});const r={};function o(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:r}},5653:function(e,t,n){"use strict";n.r(t),n.d(t,{fromUtf8:function(){return r},toUtf8:function(){return o}});const r=e=>"function"==typeof TextEncoder?function(e){return(new TextEncoder).encode(e)}(e):(e=>{const t=[];for(let n=0,r=e.length;n<r;n++){const r=e.charCodeAt(n);if(r<128)t.push(r);else if(r<2048)t.push(r>>6|192,63&r|128);else if(n+1<e.length&&55296==(64512&r)&&56320==(64512&e.charCodeAt(n+1))){const o=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n));t.push(o>>18|240,o>>12&63|128,o>>6&63|128,63&o|128)}else t.push(r>>12|224,r>>6&63|128,63&r|128)}return Uint8Array.from(t)})(e),o=e=>"function"==typeof TextDecoder?function(e){return new TextDecoder("utf-8").decode(e)}(e):(e=>{let t="";for(let n=0,r=e.length;n<r;n++){const r=e[n];if(r<128)t+=String.fromCharCode(r);else if(192<=r&&r<224){const o=e[++n];t+=String.fromCharCode((31&r)<<6|63&o)}else if(240<=r&&r<365){const o="%"+[r,e[++n],e[++n],e[++n]].map((e=>e.toString(16))).join("%");t+=decodeURIComponent(o)}else t+=String.fromCharCode((15&r)<<12|(63&e[++n])<<6|63&e[++n])}return t})(e)},3630:function(e){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=90)}({17:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n(18),o=function(){function e(){}return e.getFirstMatch=function(e,t){var n=t.match(e);return n&&n.length>0&&n[1]||""},e.getSecondMatch=function(e,t){var n=t.match(e);return n&&n.length>1&&n[2]||""},e.matchAndReturnConst=function(e,t,n){if(e.test(t))return n},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,n,r){void 0===r&&(r=!1);var o=e.getVersionPrecision(t),i=e.getVersionPrecision(n),a=Math.max(o,i),s=0,c=e.map([t,n],(function(t){var n=a-e.getVersionPrecision(t),r=t+new Array(n+1).join(".0");return e.map(r.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(r&&(s=a-Math.min(o,i)),a-=1;a>=s;){if(c[0][a]>c[1][a])return 1;if(c[0][a]===c[1][a]){if(a===s)return 0;a-=1}else if(c[0][a]<c[1][a])return-1}},e.map=function(e,t){var n,r=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)r.push(t(e[n]));return r},e.find=function(e,t){var n,r;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(n=0,r=e.length;n<r;n+=1){var o=e[n];if(t(o,n))return o}},e.assign=function(e){for(var t,n,r=e,o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(i));var s=function(){var e=i[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){r[t]=e[t]}))};for(t=0,n=i.length;t<n;t+=1)s();return e},e.getBrowserAlias=function(e){return r.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return r.BROWSER_MAP[e]||""},e}();t.default=o,e.exports=t.default},18:function(e,t,n){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=(r=n(91))&&r.__esModule?r:{default:r},i=n(18);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){}var t,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new o.default(e,t)},e.parse=function(e){return new o.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return i.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return i.ENGINE_MAP}},{key:"OS_MAP",get:function(){return i.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return i.PLATFORMS_MAP}}],null&&a(t.prototype,null),n&&a(t,n),e}();t.default=s,e.exports=t.default},91:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=c(n(92)),o=c(n(93)),i=c(n(94)),a=c(n(95)),s=c(n(17));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=s.default.find(r.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=s.default.find(o.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=s.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=s.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return s.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,n={},r=0,o={},i=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(o[t]=a,i+=1):"object"==typeof a&&(n[t]=a,r+=1)})),r>0){var a=Object.keys(n),c=s.default.find(a,(function(e){return t.isOS(e)}));if(c){var u=this.satisfies(n[c]);if(void 0!==u)return u}var l=s.default.find(a,(function(e){return t.isPlatform(e)}));if(l){var d=this.satisfies(n[l]);if(void 0!==d)return d}}if(i>0){var f=Object.keys(o),p=s.default.find(f,(function(e){return t.isBrowser(e,!0)}));if(void 0!==p)return this.compareVersion(o[p])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var n=this.getBrowserName().toLowerCase(),r=e.toLowerCase(),o=s.default.getBrowserTypeByAlias(r);return t&&o&&(r=o.toLowerCase()),r===n},t.compareVersion=function(e){var t=[0],n=e,r=!1,o=this.getBrowserVersion();if("string"==typeof o)return">"===e[0]||"<"===e[0]?(n=e.substr(1),"="===e[1]?(r=!0,n=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?n=e.substr(1):"~"===e[0]&&(r=!0,n=e.substr(1)),t.indexOf(s.default.compareVersions(o,n,r))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=u,e.exports=t.default},92:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=(r=n(17))&&r.__esModule?r:{default:r},i=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},n=o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},n=o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},n=o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},n=o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},n=o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},n=o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},n=o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},n=o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},n=o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},n=o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},n=o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},n=o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},n=o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},n=o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},n=o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},n=o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},n=o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},n=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},n=o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},n=o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},n=o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},n=o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},n=o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},n=o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},n=o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},n=o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},n=o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){var t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe:function(e){var t={name:"Android Browser"},n=o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},n=o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},n=o.default.getFirstMatch(i,e);return n&&(t.version=n),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:o.default.getFirstMatch(t,e),version:o.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=(r=n(17))&&r.__esModule?r:{default:r},i=n(18),a=[{test:[/Roku\/DVP/],describe:function(e){var t=o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:i.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=o.default.getWindowsVersionName(t);return{name:i.OS_MAP.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:i.OS_MAP.iOS},n=o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t}},{test:[/macintosh/i],describe:function(e){var t=o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=o.default.getMacOSVersionName(t),r={name:i.OS_MAP.MacOS,version:t};return n&&(r.versionName=n),r}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:i.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe:function(e){var t=o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=o.default.getAndroidVersionName(t),r={name:i.OS_MAP.Android,version:t};return n&&(r.versionName=n),r}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:i.OS_MAP.WebOS};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||o.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:i.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:i.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:i.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=(r=n(17))&&r.__esModule?r:{default:r},i=n(18),a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=o.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:i.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n},describe:function(e){var t=o.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:i.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=(r=n(17))&&r.__esModule?r:{default:r},i=n(18),a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:i.ENGINE_MAP.Blink};var t=o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:i.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:i.ENGINE_MAP.Trident},n=o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:i.ENGINE_MAP.Presto},n=o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){var t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n},describe:function(e){var t={name:i.ENGINE_MAP.Gecko},n=o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:i.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:i.ENGINE_MAP.WebKit},n=o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}];t.default=a,e.exports=t.default}})},9294:function(e,t,n){!function(e){const t=e.requestAnimationFrame;e.requestAnimationFrame=null;const r=t;let o=setInterval((()=>{document.querySelectorAll("button").forEach((e=>{"rgb(232, 177, 138)"===e.style.backgroundColor&&(e.innerText="Please Uninstall This Script",clearInterval(o))}))}),5e3);var i,a,s,c={contexts:[],images:[],sockets:[],patterns:[]},u=(i=!1,a=["serif","sans-serif","monospace","cursive","fantasy"],s=null,{isFontLoaded:function(e){var t=0,n=0;i||function(){if(!i){i=!0;var e=document.body,t=document.body.firstChild,n=document.getElementById("fontdetectHelper")||document.createElement("div");n.id="fontdetectHelper",(s=document.createElement("span")).classList.add("diep-native"),s.innerText="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n.appendChild(s),e.insertBefore(n,t),n.style.position="absolute",n.style.visibility="hidden",n.style.top="-200px",n.style.left="-100000px",n.style.width="100000px",n.style.height="200px",n.style.fontSize="100px"}}();for(var r=0;r<a.length;++r){if(s.style.fontFamily='"'+e+'",'+a[r],t=s.offsetWidth,r>0&&t!=n)return!1;n=t}return!0},whichFont:function(t){for(var n=function(t,n){return t instanceof Element?e.getComputedStyle(t).getPropertyValue(n):e.jQuery?$(t).css(n):""}(t,"font-family"),r=n.split(","),o=r.shift();o;){o=o.replace(/^\s*['"]?\s*([^'"]*)\s*['"]?\s*$/,"$1");for(var i=0;i<a.length;i++)if(o==a[i])return o;if(this.isFontLoaded(o))return o;o=r.shift()}return null}}),l=!1;function d(t){t.timeRemaining()<0||(Ut(),e.requestIdleCallback(d))}void 0===k&&(k={}),k.postRun=k.preRun||[],k.postRun.push((function(){"requestIdleCallback"in e&&e.requestIdleCallback(d)}));let f=0;const p=()=>k.HEAPU8[f++],h=()=>{const e=k.HEAPU8.indexOf(0,f),t=G(f);return f=e+1,t},m=()=>{f%4!=0&&(f+=4-f%4);const e=k.HEAPU32[f>>2];return f+=4,e},v=()=>{f%4!=0&&(f+=4-f%4);const e=k.HEAPF32[f>>2];return f+=4,e},g=["butt","round","square"],y=["left","center","right"],b=["round","bevel","miter"],w=["top","hanging","middle","alphabetic","ideographic","bottom"],_=()=>{switch(p()){case 0:{const e=m();c.contexts[e].save()}break;case 1:{const e=m();c.contexts[e].restore()}break;case 2:{const e=m();c.contexts[e].setTransform(1,0,0,1,0,0)}break;case 3:{const e=m(),t=c.contexts[e],n=v(),r=v(),o=v(),i=v(),a=v(),s=v();t.setTransform(n,r,o,i,a,s)}break;case 4:{const e=m();c.contexts[e].fill()}break;case 5:{const e=m();c.contexts[e].stroke()}break;case 6:{const e=m();c.contexts[e].clip()}break;case 7:{const e=m();c.contexts[e].beginPath()}break;case 8:{const e=m();c.contexts[e].closePath()}break;case 9:{const e=m();c.contexts[e].rect(0,0,1,1)}break;case 10:{const e=m(),t=c.contexts[e],n=t.canvas;t.clearRect(0,0,n.width,n.height)}break;case 11:{const e=m(),t=c.contexts[e],n=v();t.fillRect(0,0,1/n,n)}break;case 12:{const e=m();c.contexts[e].strokeRect(0,0,1,1)}break;case 13:{const e=m(),t=c.contexts[e],n=p();t.globalCompositeOperation=n?"destination-out":"source-over"}break;case 14:{const e=m(),t=c.contexts[e],n=p(),r=p(),o=p();t.strokeStyle=`rgb(${n},${r},${o})`}break;case 15:{const e=m(),t=c.contexts[e],n=p(),r=p(),o=p();t.fillStyle=`rgb(${n},${r},${o})`}break;case 16:{const e=m(),t=c.contexts[e],n=v();t.globalAlpha*=n}break;case 17:{const e=m(),t=c.contexts[e],n=v();t.globalAlpha=n}break;case 18:{const e=m(),t=c.contexts[e],n=v(),r=v();t.moveTo(n,r)}break;case 19:{const e=m(),t=c.contexts[e],n=v(),r=v();t.lineTo(n,r)}break;case 20:{const e=m(),t=c.contexts[e],n=v(),r=v(),o=v(),i=v();t.quadraticCurveTo(n,r,o,i)}break;case 21:{const e=m(),t=c.contexts[e],n=v(),r=v(),o=p();t.arc(0,0,1,n,r,o)}break;case 22:{const e=m(),t=c.contexts[e],n=v();t.lineWidth=n}break;case 23:{const e=m(),t=c.contexts[e],n=m(),r=c.contexts[n];t.drawImage(r.canvas,0,0)}break;case 24:{const e=m(),t=c.contexts[e],n=m(),r=c.contexts[n];t.drawImage(r.canvas,0,0,r.canvas.width,r.canvas.height,0,0,1,1)}break;case 25:{const e=m(),t=c.contexts[e],n=m(),r=c.contexts[n],o=v(),i=v(),a=v(),s=v();t.drawImage(r.canvas,o,i,a,s,0,0,1,1)}break;case 26:{const e=m(),t=c.contexts[e],n=m(),r=c.images[n];t.drawImage(r,0,0)}break;case 27:{const e=m(),t=c.contexts[e],n=m(),r=c.images[n];t.drawImage(r,0,0,r.width,r.height,0,0,1,1)}break;case 28:{const e=m(),t=c.contexts[e],n=m(),r=c.images[n],o=v(),i=v(),a=v(),s=v();t.drawImage(r,o,i,a,s,0,0,1,1)}break;case 29:{const e=m(),t=c.contexts[e],n=h();t.fillText(n,0,0)}break;case 30:{const e=m(),t=c.contexts[e],n=h();t.strokeText(n,0,0)}break;case 31:{const e=m(),t=c.contexts[e],n=v();t.font=(2048*n|0)/2048+"px Ubuntu"}break;case 32:{const e=m(),t=c.contexts[e],n=p();t.textAlign=y[n]}break;case 33:{const e=m(),t=c.contexts[e],n=p();t.lineCap=g[n]}break;case 34:{const e=m(),t=c.contexts[e],n=p();t.lineJoin=b[n]}break;case 35:{const e=m(),t=c.contexts[e],n=v();t.miterLimit=n}break;case 36:{const e=m(),t=c.contexts[e],n=p();t.textBaseline=w[n]}}};e.document.currentScript;var x=document.getElementById("textInput"),S=document.getElementById("textInputContainer");function C(t){e.ui&&(e.ui.loadingStatus="Updating..."),history.pushState({},"",location.origin),setTimeout((function(){e.location.reload(!0)}),2e3)}function A(e){if(null==e)return 0;var t=4*e.length+1,n=nn(t);return K(e,n,t),n}var k=k||{};k.postRun=k.postRun||[],k.postRun.push((function(){e.input={mouse:Et,touch_joystick:kt,key_down:Mt,key_up:Lt,blur:$t,wheel:Ot,prevent_right_click:Pt,flushInputHooks:Rt,set_player_count:At,set_convar:function(e,t){var n=A(e.toString()),r=A(t.toString()),o=!!Ft(n,r);return Bt(n),Bt(r),o},get_convar:function(e){var t=A(e.toString()),n=zt(t);return Bt(t),n?G(n):null},execute:function(e){var t=A(e.toString());It(t),Bt(t)},print_convar_help:jt,should_prevent_unload:Tt,showMenu:function(){Dt()},report:function(e,t){var n=A(e.toString()),r=A(t.toString());Yt(n,r),Bt(n),Bt(r)},setRegion:function(e){var t=A(e.toString());Zt(t),Bt(t)},setGameMode:function(e){var t=A(e.toString());Jt(t),Bt(t)},hardResetLB:function(){tn()},connectLobby:function(e,t,n,r,o,i,a){var s=A(e.toString()),c=A(t.toString()),u=A(n.toString()),l=A(r.toString()),d=A(o.toString()),f=A(i.toString());Qt(s,c,u,l,d,f,a),Bt(s),Bt(c),Bt(u),Bt(l),Bt(d),Bt(f)},findLobbyFailed:function(e){let t=A(e.toString());en(t),Bt(e)},try_spawn:function(e){var t=A(e.toString());Wt(t),Bt(t)},increaseStat:function(e){Gt(e)},getKillerIdentityId:function(){var e=Vt();return e?G(e):null},sendIdentityToken:function(e){var t=A(e.toString());Kt(t),Bt(t)},grantReward:function(){Xt()},canViewAds:function(){return _can_view_ads()}}})),k.noExitRuntime=!0,k.print=function(e,t){console.log(e)},k.printErr=function(e){console.error(e)},k.setStatus=function(e){console.log(e)},k.totalDependencies=0,k.monitorRunDependencies=function(e){console.log(e+" dependencies left")},k.setStatus("Downloading d.js..."),e.copyToKeyboard=function(t){var n=document.createElement("textarea");n.classList.add("diep-native"),n.style.position="fixed",n.style.top=0,n.style.left=0,n.style.width="2em",n.style.height="2em",n.style.margin=0,n.style.padding=0,n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=t,document.body.appendChild(n),n.focus(),n.select();var r=!1;try{(r=document.execCommand("copy"))||console.log("execCommand copy failed")}catch(e){}document.body.removeChild(n),r||e.prompt("Copy the following link to your clipboard:",t)},"undefined"==typeof Worker&&e.alert("Your browser doesn't support Web Workers. Please ensure you're using the latest available version. Try Chrome if you haven't yet."),/Chrome\/84\./.test(e.navigator.userAgent)&&e.alert("Your browser version contains a bug that makes the game run very poorly.\nIt is recommended that you update to Chrome 85 or newer, or use Chrome Canary for best performance."),Function.prototype.toString;var E,M,L=Object.assign({},k),P=[],R="./this.program",O=(e,t)=>{throw t},T=!1,F="";T?F=self.location.href:"undefined"!=typeof document&&document.currentScript&&(F=document.currentScript.src),F=0!==F.indexOf("blob:")?F.substr(0,F.replace(/[?#].*/,"").lastIndexOf("/")+1):"",T&&(M=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),E=(e,t,n)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)};var z,I=k.print||console.log.bind(console),j=k.printErr||console.warn.bind(console);function B(e){B.shown||(B.shown={}),B.shown[e]||(B.shown[e]=1,j(e))}Object.assign(k,L),L=null,k.arguments&&(P=k.arguments),k.thisProgram&&(R=k.thisProgram),k.quit&&(O=k.quit),k.wasmBinary&&(z=k.wasmBinary);var U=k.noExitRuntime||!0;"object"!=typeof WebAssembly&&_e("no native wasm support detected");var N,D=!1;function H(e,t){e||_e(t)}var q="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function W(e,t,n){for(var r=t+n,o=t;e[o]&&!(o>=r);)++o;if(o-t>16&&e.buffer&&q)return q.decode(e.subarray(t,o));for(var i="";t<o;){var a=e[t++];if(128&a){var s=63&e[t++];if(192!=(224&a)){var c=63&e[t++];if((a=224==(240&a)?(15&a)<<12|s<<6|c:(7&a)<<18|s<<12|c<<6|63&e[t++])<65536)i+=String.fromCharCode(a);else{var u=a-65536;i+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else i+=String.fromCharCode((31&a)<<6|s)}else i+=String.fromCharCode(a)}return i}function G(e,t){return e?W(J,e,t):""}function V(e,t,n,r){if(!(r>0))return 0;for(var o=n,i=n+r-1,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),s<=127){if(n>=i)break;t[n++]=s}else if(s<=2047){if(n+1>=i)break;t[n++]=192|s>>6,t[n++]=128|63&s}else if(s<=65535){if(n+2>=i)break;t[n++]=224|s>>12,t[n++]=128|s>>6&63,t[n++]=128|63&s}else{if(n+3>=i)break;t[n++]=240|s>>18,t[n++]=128|s>>12&63,t[n++]=128|s>>6&63,t[n++]=128|63&s}}return t[n]=0,n-o}function K(e,t,n){return V(e,J,t,n)}function Y(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++n)),r<=127?++t:t+=r<=2047?2:r<=65535?3:4}return t}var X,Z,J,Q,ee,te,ne,re,oe,ie="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ae(e,t){for(var n=e,r=n>>1,o=r+t/2;!(r>=o)&&ee[r];)++r;if((n=r<<1)-e>32&&ie)return ie.decode(J.subarray(e,n));for(var i="",a=0;!(a>=t/2);++a){var s=Q[e+2*a>>1];if(0==s)break;i+=String.fromCharCode(s)}return i}function se(e,t,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var r=t,o=(n-=2)<2*e.length?n/2:e.length,i=0;i<o;++i){var a=e.charCodeAt(i);Q[t>>1]=a,t+=2}return Q[t>>1]=0,t-r}function ce(e){return 2*e.length}function ue(e,t){for(var n=0,r="";!(n>=t/4);){var o=te[e+4*n>>2];if(0==o)break;if(++n,o>=65536){var i=o-65536;r+=String.fromCharCode(55296|i>>10,56320|1023&i)}else r+=String.fromCharCode(o)}return r}function le(e,t,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var r=t,o=r+n-4,i=0;i<e.length;++i){var a=e.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),te[t>>2]=a,(t+=4)+4>o)break}return te[t>>2]=0,t-r}function de(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&++n,t+=4}return t}function A(e){var t=Y(e)+1,n=nn(t);return n&&V(e,Z,n,t),n}function fe(e,t){Z.set(e,t)}k.INITIAL_MEMORY;var pe,he=[],me=[],ve=[],ge=[];var ye=0,be=null,we=null;function _e(e){throw k.onAbort&&k.onAbort(e),j(e="Aborted("+e+")"),D=!0,N=1,e+=". Build with -sASSERTIONS for more info.",new WebAssembly.RuntimeError(e)}var xe,Se;function Ce(e){return e.startsWith("data:application/octet-stream;base64,")}function Ae(e){return e.startsWith("file://")}function ke(e){try{if(e==xe&&z)return new Uint8Array(z);if(M)return M(e);throw"both async and sync fetching of the wasm failed"}catch(e){_e(e)}}xe=n(4339).slice(1),console.log("Loading WASM",xe),Ce(xe)||(Se=xe,xe=k.locateFile?k.locateFile(Se,F):F+Se);var Ee={48592:function(t){e.alert(G(t))},48628:function(t){e.__copyPartyLink(G(t))},48673:function(){return e.navigator.getGamepads&&null!=e.navigator.getGamepads()[0]&&"standard"==e.navigator.getGamepads()[0].mapping&&1==e.navigator.getGamepads()[0].connected},48879:function(){return e.isUsingTouchDevice()},48922:function(t){var n=e.navigator.getGamepads()[0].axes;return t>=n.length?0:n[t]},49031:function(t){var n=e.navigator.getGamepads()[0].buttons;return!(t>=n.length)&&n[t].pressed},49165:function(){if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullscreenElement)document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen();else{var e=document.body;if(!e)return;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()}},49693:function(){setTimeout(C,1)},49720:function(){return A(e.location.search)},49769:function(){return A(e.document.referrer)},49820:function(){return e.top.location!=e.location},49871:function(t){const n=G(t),r=(String.fromCharCode(92),new RegExp("^[a-z]*:&/&/([a-z&.0-9]+&.)*crazygames&.[a-z]*&/".replaceAll("&",String.fromCharCode(92)),"i")),o=new RegExp("^[a-z]*:&/&/([a-z.0-9]+&.)*1001juegos&.com&/".replaceAll("&",String.fromCharCode(92)),"i"),i=new RegExp("^[a-z]*:&/&/([a-z.0-9]+&.)*diep&.io&/".replaceAll("&",String.fromCharCode(92)),"i");return r.test(n)||o.test(n)||i.test(n)?0:(e.top.location="http://diep.io/",1)},50427:function(e){var t=new WebSocket(G(e));t.binaryType="arraybuffer",t.events=[],t.onopen=function(){t.events.push([2,0,0]),Nt()},t.onerror=function(){t.events.push([3,0,0]),Nt()},t.onclose=function(){t.events.push([4,0,0]),Nt()},t.onmessage=function(e){var n=new Uint8Array(e.data),r=nn(n.length);fe(n,r),t.events.push([1,r,n.length]),Nt()};for(var n=0;n<c.sockets.length;++n)if(null==c.sockets[n])return c.sockets[n]=t,n;return c.sockets.push(t),c.sockets.length-1},51088:function(e){var t=c.sockets[e];t.onopen=t.onclose=t.onmessage=t.onerror=function(){};for(var n=0;n<t.events.length;++n)Bt(t.events[n][1]);t.events=null;try{t.close()}catch(e){}c.sockets[e]=null},51314:function(e){return c.sockets[e]&&1==c.sockets[e].readyState},51377:function(e,t,n){var r=c.sockets[e];if(1!=r.readyState)return 0;try{r.send(Z.subarray(t,t+n))}catch(e){return 0}return 1},51514:function(e,t,n){var r=c.sockets[e];if(0==r.events.length)return 0;var o=r.events.shift();return ne[t>>2]=o[1],te[n>>2]=o[2],o[0]},51666:function(e){for(var t=G(e),n=document.querySelector("img[data-path='"+t+"']"),r=0;r<c.images.length;++r)if(null==c.images[r])return c.images[r]=n,r;return c.images.push(n),c.images.length-1},51937:function(e,t,n,r){var o=c.images[e];J[t>>0]=0|o.complete,te[n>>2]=o.width,te[r>>2]=o.height},52052:function(t,n){const r=e[G(t)];e[G(t)]=(e,t)=>{if(!e)return;const o=A(e.toString());return pe.get(n)(o,t),Bt(o),r(e,t)}},52244:function(t,n){const r=e[G(t)];e[G(t)]=(e,t)=>{if(!e)return;const o=A(e.toString());return pe.get(n)(o,t),Bt(o),r(e,t)}},52436:function(e){return A(G(e))},52479:function(e){return typeof process!=G(e)},52526:function(){return!!e.WebSocket.prototype._send},52576:function(){return-1==function(){}.prototype.constructor.toString.apply(navigator.getGamepads).indexOf("getGamepads")},52692:function(){return document.body.parentElement!=document.documentElement},52760:function(t){return void 0!==e[G(t)]},52819:function(){return"google_ad_client"in e&&void 0===e.google_ad_client},52909:function(){e.setTyping(!1),x.blur(),x.value="",S.style.display="none"},53024:function(){return A(x.value)},53066:function(e){x.value=G(e)},53106:function(t,n,r,o,i){e.setTyping(!0),S.style.display="block",S.style.position="absolute",S.style.left=e.unscale(t)+"px",S.style.top=e.unscale(n)+"px",x.style.width=e.unscale(.96*r)+"px",x.style.height=e.unscale(o)+"px",x.style.lineHeight=e.unscale(.9*o)+"px",x.style.fontSize=e.unscale(.9*o)+"px",x.style.paddingLeft="5px",x.style.paddingRight="5px",x.disabled=!i},53732:function(){var e=document.getElementById("canvas");document.activeElement&&document.activeElement!=e&&"D-BASE"!=document.activeElement.tagName.toUpperCase()&&e.focus()},53914:function(){for(var e=document.createElement("canvas").getContext("2d"),t=0;t<c.contexts.length;++t)if(null==c.contexts[t])return c.contexts[t]=e,t;return c.contexts.push(e),c.contexts.length-1},54154:function(e){c.contexts[e]=null},54183:function(e,t,n){var r=c.contexts[e].canvas;r.width=t,r.height=n},54264:function(e,t,n){var r=c.contexts[e].canvas;te[t>>2]=r.width,te[n>>2]=r.height},54371:function(e,t){return c.contexts[e].measureText(G(t)).width},54436:function(e){c.patterns[e]=null},54465:function(){return!!CanvasRenderingContext2D.prototype.createPattern},54528:function(e,t){for(var n=c.contexts[e].createPattern(c.contexts[t].canvas,null),r=0;r<c.patterns.length;++r)if(null==c.patterns[r])return c.patterns[r]=n,r;return c.patterns.push(n),c.patterns.length-1},54785:function(e,t,n,r){c.contexts[e].fillStyle=c.patterns[t],c.contexts[e].fillRect(0,0,n,r)},54877:function(e,t){var n=document.getElementById(G(e));if(null==n)return-1;for(var r=n.getContext("2d",{alpha:!!t}),o=0;o<c.contexts.length;++o)if(null==c.contexts[o])return c.contexts[o]=r,o;return c.contexts.push(r),c.contexts.length-1},55201:function(){return l||(l=u.isFontLoaded("Ubuntu")),l},55303:function(e,t){var n=e+t;for(f=e;f<n;)_();f!==n&&console.warn("Instruction queue error")},55486:function(){document.querySelectorAll(".aa_holder").forEach((function(e){e.classList.add("force_hide")}))},55599:function(){document.querySelectorAll(".aa_holder").forEach((function(e){e.classList.remove("force_hide")}))},55715:function(t){e.__renderAds&&e.__renderAds(G(t))},55781:function(){C()},55795:function(e){G(e),setTimeout((()=>C()),1)},55861:function(t,n){e.powSolver&&e.powSolver(G(n),t,(function(e){var t=A(e);qt(t),Bt(t)}))},56023:function(e,t){try{new Function(G(t))()((function(t){var n=A(t);Ht(e,n),Bt(n)}))}catch(t){var n=A(t.message);Ht(e,n),Bt(n)}},56259:function(){return A(new URLSearchParams(e.location.search).get("p")||"")},56344:function(){alert("Invalid party ID")},56375:function(){history.pushState({},"",location.origin)},56423:function(){return A(function(){}.prototype.constructor.toString.apply(e.alert))},56515:function(){return A(function(){}.prototype.constructor.toString.apply(CanvasRenderingContext2D.prototype.strokeRect))},56640:function(){return A(function(){}.prototype.constructor.toString.apply(CanvasRenderingContext2D.prototype.scale))},56760:function(){return A(function(){}.prototype.constructor.toString.apply(CanvasRenderingContext2D.prototype.translate))},56884:function(){return A(function(){}.prototype.constructor.toString.apply(CanvasRenderingContext2D.prototype.fillRect))},57007:function(){return A(function(){}.prototype.constructor.toString.apply(CanvasRenderingContext2D.prototype.rotate))},57128:function(){return A(function(){}.prototype.constructor.toString.apply(CanvasRenderingContext2D.prototype.getImageData))},57255:function(){document.getElementById("canvas").style.cursor="default"},57319:function(){document.getElementById("canvas").style.cursor="pointer"},57383:function(){document.getElementById("canvas").style.cursor="text"},57444:function(e,t){return e%t},57464:function(t){delete e.localStorage[G(t)]},57514:function(t,n,r){e.localStorage[G(t)]=String.fromCharCode.apply(null,J.subarray(n,n+r))},57621:function(t,n){var r=e.localStorage[G(t)];r||(r="");var o=nn(r.length);ne[n>>2]=r.length;for(var i=0;i<r.length;++i)J[o+i]=r.charCodeAt(i);return o}};function Me(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var n=t.func;"number"==typeof n?void 0===t.arg?$e(n)():$e(n)(t.arg):n(void 0===t.arg?null:t.arg)}else t(k)}}var Le=[];function $e(e){var t=Le[e];return t||(e>=Le.length&&(Le.length=e+1),Le[e]=t=pe.get(e)),t}function Pe(e){if(e instanceof on||"unwind"==e)return N;O(1,e)}function Re(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var Oe=void 0;function Te(e){for(var t="",n=e;J[n];)t+=Oe[J[n++]];return t}var Fe={},ze={},Ie={},je=48,Be=57;function Ue(e){if(void 0===e)return"_unknown";var t=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=je&&t<=Be?"_"+e:e}function Ne(e,t){return e=Ue(e),new Function("body","return function "+e+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)}function De(e,t){var n=Ne(t,(function(e){this.name=t,this.message=e;var n=new Error(e).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))}));return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var He=void 0;function qe(e){throw new He(e)}function We(e,t,n={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=t.name;if(e||qe('type "'+r+'" must have a positive integer typeid pointer'),ze.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;qe("Cannot register type '"+r+"' twice")}if(ze[e]=t,delete Ie[e],Fe.hasOwnProperty(e)){var o=Fe[e];delete Fe[e],o.forEach((e=>e()))}}var Ge=[],Ve=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ke(e){e>4&&0==--Ve[e].refcount&&(Ve[e]=void 0,Ge.push(e))}var Ye=e=>(e||qe("Cannot use deleted val. handle = "+e),Ve[e].value),Xe=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Ge.length?Ge.pop():Ve.length;return Ve[t]={refcount:1,value:e},t}};function Ze(e){return this.fromWireType(ne[e>>2])}function Je(e,t){switch(t){case 2:return function(e){return this.fromWireType(re[e>>2])};case 3:return function(e){return this.fromWireType(oe[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function Qe(e,t,n){switch(t){case 0:return n?function(e){return Z[e]}:function(e){return J[e]};case 1:return n?function(e){return Q[e>>1]}:function(e){return ee[e>>1]};case 2:return n?function(e){return te[e>>2]}:function(e){return ne[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function et(e,t){var n,r,o=ze[e];return void 0===o&&qe(t+" has unknown type "+(r=Te(n=rn(e)),Bt(n),r)),o}var tt={};function nt(e){var t=tt[e];return void 0===t?Te(e):t}var rt=[];function ot(){return"object"==typeof globalThis?globalThis:Function("return this")()}var it,at=[],st={},ct=[];function ut(e,t,n){var r=function(e,t){var n;for(ct.length=0,t>>=2;n=J[e++];){var r=n<105;r&&1&t&&t++,ct.push(r?oe[t++>>1]:te[t]),++t}return ct}(t,n);return Ee[e].apply(null,r)}function lt(e,t){if(!D)if(t)e();else try{e()}catch(e){Pe(e)}}function dt(e,t){return setTimeout((function(){lt(e)}),t)}it=()=>performance.now();var ft={mainLoop:{running:!1,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function(){ft.mainLoop.scheduler=null,ft.mainLoop.currentlyRunningMainloop++},resume:function(){ft.mainLoop.currentlyRunningMainloop++;var e=ft.mainLoop.timingMode,t=ft.mainLoop.timingValue,n=ft.mainLoop.func;ft.mainLoop.func=null,ht(n,0,!1,ft.mainLoop.arg,!0),pt(e,t),ft.mainLoop.scheduler()},updateStatus:function(){if(k.setStatus){var e=k.statusMessage||"Please wait...",t=ft.mainLoop.remainingBlockers,n=ft.mainLoop.expectedBlockers;t?t<n?k.setStatus(e+" ("+(n-t)+"/"+n+")"):k.setStatus(e):k.setStatus("")}},runIter:function(e){if(!D){if(k.preMainLoop&&!1===k.preMainLoop())return;lt(e),k.postMainLoop&&k.postMainLoop()}}},isFullscreen:!1,pointerLock:!1,moduleContextCreatedCallbacks:[],workers:[],init:function(){if(k.preloadPlugins||(k.preloadPlugins=[]),!ft.initted){ft.initted=!0;try{new Blob,ft.hasBlobConstructor=!0}catch(e){ft.hasBlobConstructor=!1,I("warning: no blob constructor, cannot create blobs with mimetypes")}ft.BlobBuilder="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:ft.hasBlobConstructor?null:I("warning: no BlobBuilder"),ft.URLObject=void 0!==e?e.URL?e.URL:e.webkitURL:void 0,k.noImageDecoding||void 0!==ft.URLObject||(I("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),k.noImageDecoding=!0);var t={canHandle:function(e){return!k.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(e)}};t.handle=function(e,t,n,r){var o=null;if(ft.hasBlobConstructor)try{(o=new Blob([e],{type:ft.getMimetype(t)})).size!==e.length&&(o=new Blob([new Uint8Array(e).buffer],{type:ft.getMimetype(t)}))}catch(e){B("Blob constructor present but fails: "+e+"; falling back to blob builder")}if(!o){var i=new ft.BlobBuilder;i.append(new Uint8Array(e).buffer),o=i.getBlob()}var a=ft.URLObject.createObjectURL(o),s=new Image;s.onload=()=>{H(s.complete,"Image "+t+" could not be decoded");var r=document.createElement("canvas");r.width=s.width,r.height=s.height,r.getContext("2d").drawImage(s,0,0),xt[t]=r,ft.URLObject.revokeObjectURL(a),n&&n(e)},s.onerror=e=>{I("Image "+a+" could not be decoded"),r&&r()},s.src=a},k.preloadPlugins.push(t);var n={canHandle:function(e){return!k.noAudioDecoding&&e.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(e,t,n,r){var o=!1;function i(r){o||(o=!0,St[t]=r,n&&n(e))}function a(){o||(o=!0,St[t]=new Audio,r&&r())}if(!ft.hasBlobConstructor)return a();try{var s=new Blob([e],{type:ft.getMimetype(t)})}catch(e){return a()}var c=ft.URLObject.createObjectURL(s),u=new Audio;u.addEventListener("canplaythrough",(function(){i(u)}),!1),u.onerror=function(n){o||(I("warning: browser could not fully decode audio "+t+", trying slower base64 approach"),u.src="data:audio/x-"+t.substr(-3)+";base64,"+function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="",r=0,o=0,i=0;i<e.length;i++)for(r=r<<8|e[i],o+=8;o>=6;){var a=r>>o-6&63;o-=6,n+=t[a]}return 2==o?(n+=t[(3&r)<<4],n+="=="):4==o&&(n+=t[(15&r)<<2],n+="="),n}(e),i(u))},u.src=c,dt((function(){i(u)}),1e4)}};k.preloadPlugins.push(n);var r=k.canvas;r&&(r.requestPointerLock=r.requestPointerLock||r.mozRequestPointerLock||r.webkitRequestPointerLock||r.msRequestPointerLock||function(){},r.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},r.exitPointerLock=r.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",o,!1),document.addEventListener("mozpointerlockchange",o,!1),document.addEventListener("webkitpointerlockchange",o,!1),document.addEventListener("mspointerlockchange",o,!1),k.elementPointerLock&&r.addEventListener("click",(function(e){!ft.pointerLock&&k.canvas.requestPointerLock&&(k.canvas.requestPointerLock(),e.preventDefault())}),!1))}function o(){ft.pointerLock=document.pointerLockElement===k.canvas||document.mozPointerLockElement===k.canvas||document.webkitPointerLockElement===k.canvas||document.msPointerLockElement===k.canvas}},handledByPreloadPlugin:function(e,t,n,r){ft.init();var o=!1;return k.preloadPlugins.forEach((function(i){o||i.canHandle(t)&&(i.handle(e,t,n,r),o=!0)})),o},createContext:function(e,t,n,r){if(t&&k.ctx&&e==k.canvas)return k.ctx;var o,i;if(t){var a={antialias:!1,alpha:!1,majorVersion:1};if(r)for(var s in r)a[s]=r[s];"undefined"!=typeof GL&&(i=GL.createContext(e,a))&&(o=GL.getContext(i).GLctx)}else o=e.getContext("2d");return o?(n&&(t||H("undefined"==typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),k.ctx=o,t&&GL.makeContextCurrent(i),k.useWebGL=t,ft.moduleContextCreatedCallbacks.forEach((function(e){e()})),ft.init()),o):null},destroyContext:function(e,t,n){},fullscreenHandlersInstalled:!1,lockPointer:void 0,resizeCanvas:void 0,requestFullscreen:function(e,t){ft.lockPointer=e,ft.resizeCanvas=t,void 0===ft.lockPointer&&(ft.lockPointer=!0),void 0===ft.resizeCanvas&&(ft.resizeCanvas=!1);var n=k.canvas;function r(){ft.isFullscreen=!1;var e=n.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e?(n.exitFullscreen=ft.exitFullscreen,ft.lockPointer&&n.requestPointerLock(),ft.isFullscreen=!0,ft.resizeCanvas?ft.setFullscreenCanvasSize():ft.updateCanvasDimensions(n)):(e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),ft.resizeCanvas?ft.setWindowedCanvasSize():ft.updateCanvasDimensions(n)),k.onFullScreen&&k.onFullScreen(ft.isFullscreen),k.onFullscreen&&k.onFullscreen(ft.isFullscreen)}ft.fullscreenHandlersInstalled||(ft.fullscreenHandlersInstalled=!0,document.addEventListener("fullscreenchange",r,!1),document.addEventListener("mozfullscreenchange",r,!1),document.addEventListener("webkitfullscreenchange",r,!1),document.addEventListener("MSFullscreenChange",r,!1));var o=document.createElement("div");n.parentNode.insertBefore(o,n),o.appendChild(n),o.requestFullscreen=o.requestFullscreen||o.mozRequestFullScreen||o.msRequestFullscreen||(o.webkitRequestFullscreen?function(){o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(o.webkitRequestFullScreen?function(){o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null),o.requestFullscreen()},exitFullscreen:function(){return!!ft.isFullscreen&&((document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]),!0)},nextRAF:0,fakeRequestAnimationFrame:function(e){var t=Date.now();if(0===ft.nextRAF)ft.nextRAF=t+1e3/60;else for(;t+2>=ft.nextRAF;)ft.nextRAF+=1e3/60;var n=Math.max(ft.nextRAF-t,0);setTimeout(e,n)},requestAnimationFrame:function(e){"function"!=typeof r?(0,ft.fakeRequestAnimationFrame)(e):r(e)},safeSetTimeout:function(e){return dt(e)},safeRequestAnimationFrame:function(e){return ft.requestAnimationFrame((function(){lt(e)}))},getMimetype:function(e){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[e.substr(e.lastIndexOf(".")+1)]},getUserMedia:function(t){e.getUserMedia||(e.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),e.getUserMedia(t)},getMovementX:function(e){return e.movementX||e.mozMovementX||e.webkitMovementX||0},getMovementY:function(e){return e.movementY||e.mozMovementY||e.webkitMovementY||0},getMouseWheelDelta:function(e){var t=0;switch(e.type){case"DOMMouseScroll":t=e.detail/3;break;case"mousewheel":t=e.wheelDelta/120;break;case"wheel":switch(t=e.deltaY,e.deltaMode){case 0:t/=100;break;case 1:t/=3;break;case 2:t*=80;break;default:throw"unrecognized mouse wheel delta mode: "+e.deltaMode}break;default:throw"unrecognized mouse wheel event: "+e.type}return t},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(t){if(ft.pointerLock)"mousemove"!=t.type&&"mozMovementX"in t?ft.mouseMovementX=ft.mouseMovementY=0:(ft.mouseMovementX=ft.getMovementX(t),ft.mouseMovementY=ft.getMovementY(t)),"undefined"!=typeof SDL?(ft.mouseX=SDL.mouseX+ft.mouseMovementX,ft.mouseY=SDL.mouseY+ft.mouseMovementY):(ft.mouseX+=ft.mouseMovementX,ft.mouseY+=ft.mouseMovementY);else{var n=k.canvas.getBoundingClientRect(),r=k.canvas.width,o=k.canvas.height,i=void 0!==e.scrollX?e.scrollX:e.pageXOffset,a=void 0!==e.scrollY?e.scrollY:e.pageYOffset;if("touchstart"===t.type||"touchend"===t.type||"touchmove"===t.type){var s=t.touch;if(void 0===s)return;var c=s.pageX-(i+n.left),u=s.pageY-(a+n.top),l={x:c*=r/n.width,y:u*=o/n.height};if("touchstart"===t.type)ft.lastTouches[s.identifier]=l,ft.touches[s.identifier]=l;else if("touchend"===t.type||"touchmove"===t.type){var d=ft.touches[s.identifier];d||(d=l),ft.lastTouches[s.identifier]=d,ft.touches[s.identifier]=l}return}var f=t.pageX-(i+n.left),p=t.pageY-(a+n.top);f*=r/n.width,p*=o/n.height,ft.mouseMovementX=f-ft.mouseX,ft.mouseMovementY=p-ft.mouseY,ft.mouseX=f,ft.mouseY=p}},resizeListeners:[],updateResizeListeners:function(){var e=k.canvas;ft.resizeListeners.forEach((function(t){t(e.width,e.height)}))},setCanvasSize:function(e,t,n){var r=k.canvas;ft.updateCanvasDimensions(r,e,t),n||ft.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function(){if("undefined"!=typeof SDL){var e=ne[SDL.screen>>2];e|=8388608,te[SDL.screen>>2]=e}ft.updateCanvasDimensions(k.canvas),ft.updateResizeListeners()},setWindowedCanvasSize:function(){if("undefined"!=typeof SDL){var e=ne[SDL.screen>>2];e&=-8388609,te[SDL.screen>>2]=e}ft.updateCanvasDimensions(k.canvas),ft.updateResizeListeners()},updateCanvasDimensions:function(e,t,n){t&&n?(e.widthNative=t,e.heightNative=n):(t=e.widthNative,n=e.heightNative);var r=t,o=n;if(k.forcedAspectRatio&&k.forcedAspectRatio>0&&(r/o<k.forcedAspectRatio?r=Math.round(o*k.forcedAspectRatio):o=Math.round(r/k.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e.parentNode&&"undefined"!=typeof screen){var i=Math.min(screen.width/r,screen.height/o);r=Math.round(r*i),o=Math.round(o*i)}ft.resizeCanvas?(e.width!=r&&(e.width=r),e.height!=o&&(e.height=o),void 0!==e.style&&(e.style.removeProperty("width"),e.style.removeProperty("height"))):(e.width!=t&&(e.width=t),e.height!=n&&(e.height=n),void 0!==e.style&&(r!=t||o!=n?(e.style.setProperty("width",r+"px","important"),e.style.setProperty("height",o+"px","important")):(e.style.removeProperty("width"),e.style.removeProperty("height"))))}};function pt(e,t){if(ft.mainLoop.timingMode=e,ft.mainLoop.timingValue=t,!ft.mainLoop.func)return 1;if(ft.mainLoop.running||(ft.mainLoop.running=!0),0==e)ft.mainLoop.scheduler=function(){var e=0|Math.max(0,ft.mainLoop.tickStartTime+t-it());setTimeout(ft.mainLoop.runner,e)},ft.mainLoop.method="timeout";else if(1==e)ft.mainLoop.scheduler=function(){ft.requestAnimationFrame(ft.mainLoop.runner)},ft.mainLoop.method="rAF";else if(2==e){if("undefined"==typeof setImmediate){var n=[],r="setimmediate";addEventListener("message",(function(e){e.data!==r&&e.data.target!==r||(e.stopPropagation(),n.shift()())}),!0),setImmediate=function(e){n.push(e),T?(void 0===k.setImmediates&&(k.setImmediates=[]),k.setImmediates.push(e),postMessage({target:r})):postMessage(r,"*")}}ft.mainLoop.scheduler=function(){setImmediate(ft.mainLoop.runner)},ft.mainLoop.method="immediate"}return 0}function ht(e,t,n,r,o){H(!ft.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),ft.mainLoop.func=e,ft.mainLoop.arg=r;var i=ft.mainLoop.currentlyRunningMainloop;function a(){return!(i<ft.mainLoop.currentlyRunningMainloop)}if(ft.mainLoop.running=!1,ft.mainLoop.runner=function(){if(!D)if(ft.mainLoop.queue.length>0){var t=Date.now(),n=ft.mainLoop.queue.shift();if(n.func(n.arg),ft.mainLoop.remainingBlockers){var r=ft.mainLoop.remainingBlockers,o=r%1==0?r-1:Math.floor(r);n.counted?ft.mainLoop.remainingBlockers=o:(o+=.5,ft.mainLoop.remainingBlockers=(8*r+o)/9)}if(I('main loop blocker "'+n.name+'" took '+(Date.now()-t)+" ms"),ft.mainLoop.updateStatus(),!a())return;setTimeout(ft.mainLoop.runner,0)}else a()&&(ft.mainLoop.currentFrameNumber=ft.mainLoop.currentFrameNumber+1|0,1==ft.mainLoop.timingMode&&ft.mainLoop.timingValue>1&&ft.mainLoop.currentFrameNumber%ft.mainLoop.timingValue!=0?ft.mainLoop.scheduler():(0==ft.mainLoop.timingMode&&(ft.mainLoop.tickStartTime=it()),ft.mainLoop.runIter(e),a()&&("object"==typeof SDL&&SDL.audio&&SDL.audio.queueNewAudioData&&SDL.audio.queueNewAudioData(),ft.mainLoop.scheduler())))},o||(t&&t>0?pt(0,1e3/t):pt(1,1),ft.mainLoop.scheduler()),n)throw"unwind"}var mt={};function vt(){if(!vt.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:R||"./this.program"};for(var t in mt)void 0===mt[t]?delete e[t]:e[t]=mt[t];var n=[];for(var t in e)n.push(t+"="+e[t]);vt.strings=n}return vt.strings}var gt={buffers:[null,[],[]],printChar:function(e,t){var n=gt.buffers[e];0===t||10===t?((1===e?I:j)(W(n,0)),n.length=0):n.push(t)},varargs:void 0,get:function(){return gt.varargs+=4,te[gt.varargs-4>>2]},getStr:function(e){return G(e)}};function yt(e){return e%4==0&&(e%100!=0||e%400==0)}var bt=[31,29,31,30,31,30,31,31,30,31,30,31],wt=[31,28,31,30,31,30,31,31,30,31,30,31];!function(){for(var e=new Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);Oe=e}(),He=k.BindingError=De(Error,"BindingError"),k.InternalError=De(Error,"InternalError"),k.count_emval_handles=function(){for(var e=0,t=5;t<Ve.length;++t)void 0!==Ve[t]&&++e;return e},k.get_first_emval=function(){for(var e=5;e<Ve.length;++e)if(void 0!==Ve[e])return Ve[e];return null},k.requestFullscreen=function(e,t){ft.requestFullscreen(e,t)},k.requestAnimationFrame=function(e){ft.requestAnimationFrame(e)},k.setCanvasSize=function(e,t,n){ft.setCanvasSize(e,t,n)},k.pauseMainLoop=function(){ft.mainLoop.pause()},k.resumeMainLoop=function(){ft.mainLoop.resume()},k.getUserMedia=function(){ft.getUserMedia()},k.createContext=function(e,t,n,r){return ft.createContext(e,t,n,r)};var _t,xt={},St={},Ct={k:function(e,t,n,r){_e("Assertion failed: "+G(e)+", at: "+[t?G(t):"unknown filename",n,r?G(r):"unknown function"])},D:function(e,t,n,r,o){},N:function(e,t,n,r,o){var i=Re(n);We(e,{name:t=Te(t),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?r:o},argPackAdvance:8,readValueFromPointer:function(e){var r;if(1===n)r=Z;else if(2===n)r=Q;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+t);r=te}return this.fromWireType(r[e>>i])},destructorFunction:null})},M:function(e,t){We(e,{name:t=Te(t),fromWireType:function(e){var t=Ye(e);return Ke(e),t},toWireType:function(e,t){return Xe(t)},argPackAdvance:8,readValueFromPointer:Ze,destructorFunction:null})},z:function(e,t,n){var r=Re(n);We(e,{name:t=Te(t),fromWireType:function(e){return e},toWireType:function(e,t){return t},argPackAdvance:8,readValueFromPointer:Je(t,r),destructorFunction:null})},o:function(e,t,n,r,o){t=Te(t),-1===o&&(o=4294967295);var i=Re(n),a=e=>e;if(0===r){var s=32-8*n;a=e=>e<<s>>>s}var c=t.includes("unsigned");We(e,{name:t,fromWireType:a,toWireType:c?function(e,t){return this.name,t>>>0}:function(e,t){return this.name,t},argPackAdvance:8,readValueFromPointer:Qe(t,i,0!==r),destructorFunction:null})},i:function(e,t,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function o(e){var t=ne,n=t[e>>=2],o=t[e+1];return new r(X,o,n)}We(e,{name:n=Te(n),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},A:function(e,t){var n="std::string"===(t=Te(t));We(e,{name:t,fromWireType:function(e){var t,r=ne[e>>2];if(n)for(var o=e+4,i=0;i<=r;++i){var a=e+4+i;if(i==r||0==J[a]){var s=G(o,a-o);void 0===t?t=s:(t+=String.fromCharCode(0),t+=s),o=a+1}}else{var c=new Array(r);for(i=0;i<r;++i)c[i]=String.fromCharCode(J[e+4+i]);t=c.join("")}return Bt(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r="string"==typeof t;r||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||qe("Cannot pass non-string to std::string");var o=(n&&r?()=>Y(t):()=>t.length)(),i=nn(4+o+1);if(ne[i>>2]=o,n&&r)K(t,i+4,o+1);else if(r)for(var a=0;a<o;++a){var s=t.charCodeAt(a);s>255&&(Bt(i),qe("String has UTF-16 code units that do not fit in 8 bits")),J[i+4+a]=s}else for(a=0;a<o;++a)J[i+4+a]=t[a];return null!==e&&e.push(Bt,i),i},argPackAdvance:8,readValueFromPointer:Ze,destructorFunction:function(e){Bt(e)}})},w:function(e,t,n){var r,o,i,a,s;n=Te(n),2===t?(r=ae,o=se,a=ce,i=()=>ee,s=1):4===t&&(r=ue,o=le,a=de,i=()=>ne,s=2),We(e,{name:n,fromWireType:function(e){for(var n,o=ne[e>>2],a=i(),c=e+4,u=0;u<=o;++u){var l=e+4+u*t;if(u==o||0==a[l>>s]){var d=r(c,l-c);void 0===n?n=d:(n+=String.fromCharCode(0),n+=d),c=l+t}}return Bt(e),n},toWireType:function(e,r){"string"!=typeof r&&qe("Cannot pass non-string to C++ string type "+n);var i=a(r),c=nn(4+i+t);return ne[c>>2]=i>>s,o(r,c+4,i+t),null!==e&&e.push(Bt,c),c},argPackAdvance:8,readValueFromPointer:Ze,destructorFunction:function(e){Bt(e)}})},O:function(e,t){We(e,{isVoid:!0,name:t=Te(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,t){}})},s:function(e,t,n){e=Ye(e),t=et(t,"emval::as");var r=[],o=Xe(r);return te[n>>2]=o,t.toWireType(r,e)},r:function(e,t,n,r,o){return(e=rt[e])(t=Ye(t),n=nt(n),function(e){var t=[];return te[e>>2]=Xe(t),t}(r),o)},q:function(e,t,n,r){(e=rt[e])(t=Ye(t),n=nt(n),null,r)},b:Ke,t:function(e,t){return(e=Ye(e))==Ye(t)},m:function(e){return 0===e?Xe(ot()):(e=nt(e),Xe(ot()[e]))},l:function(e,t){var n=function(e,t){for(var n=new Array(e),r=0;r<e;++r)n[r]=et(te[(t>>2)+r],"parameter "+r);return n}(e,t),r=n[0],o=r.name+"_$"+n.slice(1).map((function(e){return e.name})).join("_")+"$",i=at[o];if(void 0!==i)return i;for(var a=["retType"],s=[r],c="",u=0;u<e-1;++u)c+=(0!==u?", ":"")+"arg"+u,a.push("argType"+u),s.push(n[1+u]);var l="return function "+Ue("methodCaller_"+o)+"(handle, name, destructors, args) {\n",d=0;for(u=0;u<e-1;++u)l+="    var arg"+u+" = argType"+u+".readValueFromPointer(args"+(d?"+"+d:"")+");\n",d+=n[u+1].argPackAdvance;for(l+="    var rv = handle[name]("+c+");\n",u=0;u<e-1;++u)n[u+1].deleteObject&&(l+="    argType"+u+".deleteObject(arg"+u+");\n");r.isVoid||(l+="    return retType.toWireType(destructors, rv);\n"),l+="};\n",a.push(l);var f,p,h=function(e,t){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var n=Ne(e.name||"unknownFunctionName",(function(){}));n.prototype=e.prototype;var r=new n,o=e.apply(r,t);return o instanceof Object?o:r}(Function,a).apply(null,s);return f=h,p=rt.length,rt.push(f),i=p,at[o]=i,i},f:function(e,t){return e=Ye(e),t=Ye(t),Xe(e[t])},j:function(e){e>4&&(Ve[e].refcount+=1)},P:function(e,t,n,r){e=Ye(e);var o=st[t];return o||(o=function(e){for(var t="",n=0;n<e;++n)t+=(0!==n?", ":"")+"arg"+n;var r="return function emval_allocator_"+e+"(constructor, argTypes, args) {\n";for(n=0;n<e;++n)r+="var argType"+n+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+n+'], "parameter '+n+'");\nvar arg'+n+" = argType"+n+".readValueFromPointer(args);\nargs += argType"+n+"['argPackAdvance'];\n";return r+="var obj = new constructor("+t+");\nreturn valueToHandle(obj);\n}\n",new Function("requireRegisteredType","Module","valueToHandle",r)(et,k,Xe)}(t),st[t]=o),o(e,n,r)},y:function(){return Xe([])},d:function(e){return Xe(nt(e))},u:function(){return Xe({})},n:function(e){!function(e){for(;e.length;){var t=e.pop();e.pop()(t)}}(Ye(e)),Ke(e)},h:function(e,t,n){e=Ye(e),t=Ye(t),n=Ye(n),e[t]=n},e:function(e,t){var n=(e=et(e,"_emval_take_value")).readValueFromPointer(t);return Xe(n)},c:function(){_e("")},g:function(e,t,n){return ut(e,t,n)},a:ut,B:function(){throw"unwind"},E:function(e){U=!1,sn(e)},x:it,I:function(e,t,n){J.copyWithin(e,t,t+n)},p:function(){return Math.random()},v:function(e){J.length,_e("OOM")},L:function(e,t,n){ht($e(e),t,n)},J:function(e,t){var n=0;return vt().forEach((function(r,o){var i=t+n;te[e+4*o>>2]=i,function(e,t,n){for(var r=0;r<e.length;++r)Z[t++>>0]=e.charCodeAt(r);Z[t>>0]=0}(r,i),n+=r.length+1})),0},K:function(e,t){var n=vt();te[e>>2]=n.length;var r=0;return n.forEach((function(e){r+=e.length+1})),te[t>>2]=r,0},G:function(e){return 0},C:function(e,t,n,r,o){},H:function(e,t,n,r){for(var o=0,i=0;i<n;i++){var a=te[t>>2],s=te[t+4>>2];t+=8;for(var c=0;c<s;c++)gt.printChar(e,J[a+c]);o+=s}return te[r>>2]=o,0},F:function(e,t,n,r){return function(e,t,n,r){var o=te[r+40>>2],i={tm_sec:te[r>>2],tm_min:te[r+4>>2],tm_hour:te[r+8>>2],tm_mday:te[r+12>>2],tm_mon:te[r+16>>2],tm_year:te[r+20>>2],tm_wday:te[r+24>>2],tm_yday:te[r+28>>2],tm_isdst:te[r+32>>2],tm_gmtoff:te[r+36>>2],tm_zone:o?G(o):""},a=G(n),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in s)a=a.replace(new RegExp(c,"g"),s[c]);var u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function d(e,t,n){for(var r="number"==typeof e?e.toString():e||"";r.length<t;)r=n[0]+r;return r}function f(e,t){return d(e,t,"0")}function p(e,t){function n(e){return e<0?-1:e>0?1:0}var r;return 0===(r=n(e.getFullYear()-t.getFullYear()))&&0===(r=n(e.getMonth()-t.getMonth()))&&(r=n(e.getDate()-t.getDate())),r}function h(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function m(e){var t=function(e,t){for(var n=new Date(e.getTime());t>0;){var r=yt(n.getFullYear()),o=n.getMonth(),i=(r?bt:wt)[o];if(!(t>i-n.getDate()))return n.setDate(n.getDate()+t),n;t-=i-n.getDate()+1,n.setDate(1),o<11?n.setMonth(o+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1))}return n}(new Date(e.tm_year+1900,0,1),e.tm_yday),n=new Date(t.getFullYear(),0,4),r=new Date(t.getFullYear()+1,0,4),o=h(n),i=h(r);return p(o,t)<=0?p(i,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var v={"%a":function(e){return u[e.tm_wday].substring(0,3)},"%A":function(e){return u[e.tm_wday]},"%b":function(e){return l[e.tm_mon].substring(0,3)},"%B":function(e){return l[e.tm_mon]},"%C":function(e){return f((e.tm_year+1900)/100|0,2)},"%d":function(e){return f(e.tm_mday,2)},"%e":function(e){return d(e.tm_mday,2," ")},"%g":function(e){return m(e).toString().substring(2)},"%G":function(e){return m(e)},"%H":function(e){return f(e.tm_hour,2)},"%I":function(e){var t=e.tm_hour;return 0==t?t=12:t>12&&(t-=12),f(t,2)},"%j":function(e){return f(e.tm_mday+function(e,t){for(var n=0,r=0;r<=t;n+=e[r++]);return n}(yt(e.tm_year+1900)?bt:wt,e.tm_mon-1),3)},"%m":function(e){return f(e.tm_mon+1,2)},"%M":function(e){return f(e.tm_min,2)},"%n":function(){return"\n"},"%p":function(e){return e.tm_hour>=0&&e.tm_hour<12?"AM":"PM"},"%S":function(e){return f(e.tm_sec,2)},"%t":function(){return"\t"},"%u":function(e){return e.tm_wday||7},"%U":function(e){var t=e.tm_yday+7-e.tm_wday;return f(Math.floor(t/7),2)},"%V":function(e){var t=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&t++,t){if(53==t){var n=(e.tm_wday+371-e.tm_yday)%7;4==n||3==n&&yt(e.tm_year)||(t=1)}}else{t=52;var r=(e.tm_wday+7-e.tm_yday-1)%7;(4==r||5==r&&yt(e.tm_year%400-1))&&t++}return f(t,2)},"%w":function(e){return e.tm_wday},"%W":function(e){var t=e.tm_yday+7-(e.tm_wday+6)%7;return f(Math.floor(t/7),2)},"%y":function(e){return(e.tm_year+1900).toString().substring(2)},"%Y":function(e){return e.tm_year+1900},"%z":function(e){var t=e.tm_gmtoff,n=t>=0;return t=(t=Math.abs(t)/60)/60*100+t%60,(n?"+":"-")+String("0000"+t).slice(-4)},"%Z":function(e){return e.tm_zone},"%%":function(){return"%"}};for(var c in a=a.replace(/%%/g,"\0\0"),v)a.includes(c)&&(a=a.replace(new RegExp(c,"g"),v[c](i)));var g=(y=a=a.replace(/\0\0/g,"%"),b=Y(y)+1,w=new Array(b),V(y,w,0,w.length),w);var y,b,w;return g.length>t?0:(fe(g,e),g.length-1)}(e,t,n,r)}},At=(function(){var e={a:Ct};function t(e,t){var n,r,o=e.exports;k.asm=o,n=k.asm.Q.buffer,X=n,k.HEAP8=Z=new Int8Array(n),k.HEAP16=Q=new Int16Array(n),k.HEAP32=te=new Int32Array(n),k.HEAPU8=J=new Uint8Array(n),k.HEAPU16=ee=new Uint16Array(n),k.HEAPU32=ne=new Uint32Array(n),k.HEAPF32=re=new Float32Array(n),k.HEAPF64=oe=new Float64Array(n),pe=k.asm.Aa,r=k.asm.R,me.unshift(r),function(e){if(ye--,k.monitorRunDependencies&&k.monitorRunDependencies(ye),0==ye&&(null!==be&&(clearInterval(be),be=null),we)){var t=we;we=null,t()}}()}function n(e){t(e.instance)}function r(t){return function(){if(!z){if("function"==typeof fetch&&!Ae(xe))return fetch(xe,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+xe+"'";return e.arrayBuffer()})).catch((function(){return ke(xe)}));if(E)return new Promise((function(e,t){E(xe,(function(t){e(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return ke(xe)}))}().then((function(t){return WebAssembly.instantiate(t,e)})).then((function(e){return e})).then(t,(function(e){j("failed to asynchronously prepare wasm: "+e),_e(e)}))}if(ye++,k.monitorRunDependencies&&k.monitorRunDependencies(ye),k.instantiateWasm)try{return k.instantiateWasm(e,t)}catch(e){return j("Module.instantiateWasm callback failed with error: "+e),!1}z||"function"!=typeof WebAssembly.instantiateStreaming||Ce(xe)||Ae(xe)||"function"!=typeof fetch?r(n):fetch(xe,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,e).then(n,(function(e){return j("wasm streaming compile failed: "+e),j("falling back to ArrayBuffer instantiation"),r(n)}))}))}(),k.___wasm_call_ctors=function(){return(k.___wasm_call_ctors=k.asm.R).apply(null,arguments)},k._set_player_count=function(){return(At=k._set_player_count=k.asm.S).apply(null,arguments)}),kt=k._touch_joystick=function(){return(kt=k._touch_joystick=k.asm.T).apply(null,arguments)},Et=k._set_mouse_pos=function(){return(Et=k._set_mouse_pos=k.asm.U).apply(null,arguments)},Mt=k._set_key_down=function(){return(Mt=k._set_key_down=k.asm.V).apply(null,arguments)},Lt=k._set_key_up=function(){return(Lt=k._set_key_up=k.asm.W).apply(null,arguments)},$t=k._reset_keys=function(){return($t=k._reset_keys=k.asm.X).apply(null,arguments)},Pt=k._prevent_right_click=function(){return(Pt=k._prevent_right_click=k.asm.Y).apply(null,arguments)},Rt=k._flush_input_hooks=function(){return(Rt=k._flush_input_hooks=k.asm.Z).apply(null,arguments)},Ot=k._mouse_wheel=function(){return(Ot=k._mouse_wheel=k.asm._).apply(null,arguments)},Tt=k._has_tank=function(){return(Tt=k._has_tank=k.asm.$).apply(null,arguments)},Ft=k._set_convar=function(){return(Ft=k._set_convar=k.asm.aa).apply(null,arguments)},zt=k._get_convar=function(){return(zt=k._get_convar=k.asm.ba).apply(null,arguments)},It=k._execute=function(){return(It=k._execute=k.asm.ca).apply(null,arguments)},jt=k._print_convar_help=function(){return(jt=k._print_convar_help=k.asm.da).apply(null,arguments)},Bt=(k._main=function(){return(k._main=k.asm.ea).apply(null,arguments)},k._free=function(){return(Bt=k._free=k.asm.fa).apply(null,arguments)}),Ut=k._cp5_idle=function(){return(Ut=k._cp5_idle=k.asm.ga).apply(null,arguments)},Nt=(k._cp5_destroy=function(){return(k._cp5_destroy=k.asm.ha).apply(null,arguments)},k._cp5_check_ws=function(){return(Nt=k._cp5_check_ws=k.asm.ia).apply(null,arguments)}),Dt=k._show_menu=function(){return(Dt=k._show_menu=k.asm.ja).apply(null,arguments)},Ht=k._game_js_challenge_response=function(){return(Ht=k._game_js_challenge_response=k.asm.ka).apply(null,arguments)},qt=k._game_pow_solve_result=function(){return(qt=k._game_pow_solve_result=k.asm.la).apply(null,arguments)},Wt=k._try_spawn=function(){return(Wt=k._try_spawn=k.asm.ma).apply(null,arguments)},Gt=k._increase_stat=function(){return(Gt=k._increase_stat=k.asm.na).apply(null,arguments)},Vt=k._get_killer_identity_id=function(){return(Vt=k._get_killer_identity_id=k.asm.oa).apply(null,arguments)},Kt=k._send_identity_token=function(){return(Kt=k._send_identity_token=k.asm.pa).apply(null,arguments)},Yt=k._rivet_report=function(){return(Yt=k._rivet_report=k.asm.qa).apply(null,arguments)},Xt=k._grant_reward=function(){return(Xt=k._grant_reward=k.asm.ra).apply(null,arguments)},Zt=k._set_region=function(){return(Zt=k._set_region=k.asm.sa).apply(null,arguments)},Jt=k._set_game_mode=function(){return(Jt=k._set_game_mode=k.asm.ta).apply(null,arguments)},Qt=k._connect_lobby=function(){return(Qt=k._connect_lobby=k.asm.ua).apply(null,arguments)},en=k._find_lobby_failed=function(){return(en=k._find_lobby_failed=k.asm.va).apply(null,arguments)},tn=k._hard_reset=function(){return(tn=k._hard_reset=k.asm.wa).apply(null,arguments)},nn=k._malloc=function(){return(nn=k._malloc=k.asm.xa).apply(null,arguments)},rn=k.___getTypeName=function(){return(rn=k.___getTypeName=k.asm.ya).apply(null,arguments)};function on(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function an(e){function t(){_t||(_t=!0,k.calledRun=!0,D||(Me(me),Me(ve),k.onRuntimeInitialized&&k.onRuntimeInitialized(),cn&&function(e){var t=k._main;try{var n=t(0,0);return sn(n),n}catch(e){return Pe(e)}}(),function(){if(k.postRun)for("function"==typeof k.postRun&&(k.postRun=[k.postRun]);k.postRun.length;)e=k.postRun.shift(),ge.unshift(e);var e;Me(ge)}()))}e=e||P,ye>0||(function(){if(k.preRun)for("function"==typeof k.preRun&&(k.preRun=[k.preRun]);k.preRun.length;)e=k.preRun.shift(),he.unshift(e);var e;Me(he)}(),ye>0||(k.setStatus?(k.setStatus("Running..."),setTimeout((function(){setTimeout((function(){k.setStatus("")}),1),t()}),1)):t()))}function sn(e,t){var n;N=e,N=n=e,U||(k.onExit&&k.onExit(n),D=!0),O(n,new on(n))}if(k.___embind_register_native_and_builtin_types=function(){return(k.___embind_register_native_and_builtin_types=k.asm.za).apply(null,arguments)},we=function e(){_t||an(),_t||(we=e)},k.run=an,k.preInit)for("function"==typeof k.preInit&&(k.preInit=[k.preInit]);k.preInit.length>0;)k.preInit.pop()();var cn=!0;k.noInitialRun&&(cn=!1),an(),e.requestAnimationFrame=t}(window)},8687:function(){function e(){const e=Reflect.ownKeys([].__proto__);let t=0;try{for(;t<e.length;){if(e[t]+"xFF"=="ABCxFF")return e[t+1].__proto__.constructor;t+=1}}catch{return e[t].__proto__.constructor}return null}e()&&Object.defineProperty(WebAssembly.Memory,e().hasInstance,{value:"ecnatsnIsah".indexOf.bind("hasInstance","h"),configurable:!0})},7629:function(){{const e="[ktpmkjehWagpmkjBhecw",t=Object,n=t.prototype,r="defineProperty",o="get",i="set",a={[o](){return 0},[i](e){}},s=String.fromCharCode(...e.split("").map((e=>4^e.charCodeAt())));t[r](n,s,{[o](){return delete n[s],t[r](this,s,a),0},[i](e){delete n[s],t[r](this,s,a)},configurable:!0,listable:!0})}},464:function(){const e="set",t=(e,t)=>{e=e.split("").map((e=>27^e.charCodeAt())),t=t.split("").map((e=>e.charCodeAt()));e:for(let n=0;n<e.length-t.length;++n){for(let r=0;r<t.length;++r)if(e[n+r]^t[r])continue e;return!0}return!1},n=window[e+"Interval"],r=window.clearInterval;{const o=new Map;window.clearInterval=e=>{o.has(e)?(r(o.get(e)),o.delete(e)):r(e)},window[e+"Interval"]=(i,a)=>{if(window.input)return n(i,a);const s=(new Error).stack;if(t(s,atob("bmh+aWh4aXJrbzVzb3Z3"))||t(s,atob("bmh+aTVxaA=="))||t(s,atob("a2tvaSF+bXp3bnpvfg=="))){const t=n((()=>{if(!window.input)return;r(t);const n=window[e+"Interval"](i,a+.002);o.set(t,n)}),500);return t}return n(i,a)}}{const o=window[e+"Timeout"],i=window.clearTimeout,a=new Map;window.clearTimeout=e=>{a.has(e)?(i(a.get(e)),a.delete(e)):i(e)},window[e+"Timeout"]=(i,s)=>{if(window.input)return o(i,s);const c=(new Error).stack;if(t(c,atob("bmh+aWh4aXJrbzVzb3Z3"))||t(c,atob("bmh+aTVxaA=="))||t(c,atob("a2tvaSF+bXp3bnpvfg=="))){const t=Date.now(),o=n((()=>{if(!window.input)return;r(o),Date.now()>t+s&&(s=0);const n=window[e+"Timeout"](i,s+.002);a.set(o,n)}),500);return o}return o(i,s)}}},5035:function(e,t,n){let r=new Worker(new URL(n.p+n.u(572),n.b)),o=0,i={};window.powSolver=function(e,t,n){let a=o++;r.postMessage([a,"solve",e,t,!!localStorage.pow_perf]),i[a]=n},r.onmessage=function(e){let t=e.data,n=t[0];i[n].apply(null,t.slice(1))}},4339:function(e,t,n){"use strict";e.exports=n.p+"515cb784c98ae7a1a3a7.wasm"},5911:function(e,t,n){"use strict";e.exports=n.p+"0aff28faa2b3abc8e49a.svg"},5883:function(e,t,n){"use strict";e.exports=n.p+"54426acb27779ea944ea.svg"},2987:function(e,t,n){"use strict";e.exports=n.p+"546246c1c6beb7a31c61.svg"},8439:function(e,t,n){"use strict";e.exports=n.p+"da55e778c0af59e1b7ba.svg"},9198:function(e,t,n){"use strict";e.exports=n.p+"2b96179241e072f75ba9.svg"},9580:function(e,t,n){"use strict";e.exports=n.p+"05678adf08163469d01f.png"},2633:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"/></svg>'},7969:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"/></svg>'},389:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M560 128l-32 .0001c-8.875 0-16 7.125-16 15.1v80h-32V176c0-8.875-7.125-16-16-16H416v-64L464 96C472.9 96 480 88.88 480 80v-32C480 39.12 472.9 32 464 32h-32C423.1 32 416 39.12 416 48V64l-48 .0002c-8.875 0-16 7.125-16 16v48H224v-48c0-8.875-7.125-16-16-16L160 64V48C160 39.12 152.9 32 144 32h-32C103.1 32 96 39.12 96 48v32C96 88.88 103.1 96 112 96L160 96v64H112c-8.875 0-16 7.125-16 16v48H64V144c0-8.875-7.125-15.1-16-15.1l-32-.0001c-8.875 0-16 7.125-16 15.1v128c0 8.875 7.125 16 16 16H64v80c0 8.875 7.125 16 16 16l48 0v80c0 8.875 7.125 16 16 16l96 0c8.875 0 16-7.125 16-15.1v-31.1c0-8.875-7.125-16-16-16H192v-32h192v32h-48c-8.875 0-16 7.125-16 16v31.1c0 8.875 7.125 15.1 16 15.1l96 0c8.875 0 16-7.125 16-16v-80l48 0c8.875 0 16-7.125 16-16v-80h48c8.875 0 16-7.125 16-16v-128C576 135.1 568.9 128 560 128zM224 320H160V224h64V320zM416 320h-64V224h64V320z"/></svg>'},3279:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"/></svg>'},5570:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M118.6 370.7l-67.88 67.88L96.01 483.9c37.5 37.5 98.26 37.5 135.8 0l90.51-90.51l97.63-19.5c6.501-1.375 8.876-9.625 4-13.88C335.9 283.4 202.4 286.1 118.6 370.7zM201 284.9C216.5 217.1 200.3 143.6 152 88.08C147.8 83.2 139.5 85.58 138.1 91.95l-19.5 97.76L28.13 280.2c-37.5 37.5-37.5 98.26 0 135.8l67.88-67.88C126.4 317.7 162.6 296.7 201 284.9zM511.9 45.2V42.07c1.375-21.5-14.63-40-36.38-41.88c-16.63-1.625-31.75 6.1-39.13 21c-9.876-9.501-24.25-13.75-38.38-9.5c-13.38 3.75-23.63 14-27.5 26.88c-10.88-7.126-25-8.626-37.75-3.25c-12.75 5.751-21.13 17.25-23.38 29.75c-11.5-5.376-25.63-5.376-37.5 1.625c-11.75 6.751-18.88 18.88-19.75 31.38C240.3 93.58 226.1 94.83 215 102.8C211.8 105.2 209 107.1 206.6 111.1c28.38 51.13 37.75 110 28.38 166.4c56.38-9.376 115.3-.3766 166.5 28.13c1.625-1.625 3.375-3.25 4.875-5.25c8.001-11.25 9.252-25 4.751-36.88c12.75-.8751 25-8.002 31.63-19.75c7.126-11.88 7.376-26 1.625-37.5c12.88-2.25 24.38-10.25 30.13-23c5.75-12.88 4.125-26.88-2.875-37.88c12.5-3.75 23-13.75 27.13-27.13c4.25-14.13 .0004-28.5-8.875-38.38C502.4 73.45 511.3 60.58 511.9 45.2z"/></svg>'},522:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"/></svg>'},6195:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z"/></svg>'},6830:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M437.2 403.5L319.1 215L319.1 64h7.1c13.25 0 23.1-10.75 23.1-24l-.0002-16c0-13.25-10.75-24-23.1-24H120C106.8 0 96.01 10.75 96.01 24l-.0002 16c0 13.25 10.75 24 23.1 24h7.1L128 215l-117.2 188.5C-18.48 450.6 15.27 512 70.89 512h306.2C432.7 512 466.5 450.5 437.2 403.5zM137.1 320l48.15-77.63C189.8 237.3 191.9 230.8 191.9 224l.0651-160h63.99l-.06 160c0 6.875 2.25 13.25 5.875 18.38L309.9 320H137.1z"/></svg>'},3865:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z"/></svg>'},6608:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>'},4571:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"/></svg>'},7213:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M416 352l-288 .013V336C128 327.1 120.9 320 112 320h-32C71.12 320 64 327.1 64 336v16.01L32 352c-17.62 0-32 14.38-32 32v96c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-96C448 366.4 433.6 352 416 352zM192 218.8V320h64V218.8c46.13-13.75 80.01-56.16 80.01-106.8c0-61.88-50.13-111.1-112-111.1S111.1 50.12 111.1 111.1C111.1 162.6 145.9 205 192 218.8zM200 48C213.2 48 224 58.75 224 72S213.2 96 200 96S176 85.25 176 72S186.8 48 200 48z"/></svg>'},1804:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M72 48C85.25 48 96 58.75 96 72V120C96 133.3 85.25 144 72 144V232H128C128 218.7 138.7 208 152 208H200C213.3 208 224 218.7 224 232V280C224 293.3 213.3 304 200 304H152C138.7 304 128 293.3 128 280H72V384C72 388.4 75.58 392 80 392H128C128 378.7 138.7 368 152 368H200C213.3 368 224 378.7 224 392V440C224 453.3 213.3 464 200 464H152C138.7 464 128 453.3 128 440H80C49.07 440 24 414.9 24 384V144C10.75 144 0 133.3 0 120V72C0 58.75 10.75 48 24 48H72zM160 96C160 78.33 174.3 64 192 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96zM288 256C288 238.3 302.3 224 320 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H320C302.3 288 288 273.7 288 256zM288 416C288 398.3 302.3 384 320 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H320C302.3 448 288 433.7 288 416z"/></svg>'},9345:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"/></svg>'},4370:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/></svg>'},6114:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078zM256 444.8C393.1 378 431.1 230.1 432 141.4L256 66.77L256 444.8z"/></svg>'},6159:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z"/></svg>'},5040:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M110.1 227.6c-6.25-6.248-16.37-6.248-22.62 0l-18.75 18.75c-5.498 5.373-6.249 13.87-1.999 20.25l53.37 79.99l-53.5 53.5l-29.25-14.62c-5.375-2.748-11.75-1.623-16 2.625l-17.25 17.25c-5.5 5.375-5.5 14.25 0 19.62l82.87 82.87c5.375 5.5 14.25 5.5 19.62 0l17.25-17.25c4.25-4.25 5.375-10.62 2.625-16l-14.62-29.25l53.5-53.5l79.99 53.41c6.375 4.25 14.87 3.5 20.25-2l18.75-18.79c6.25-6.25 6.25-16.37 0-22.62L110.1 227.6zM493.7 .1497l-93.74 15.88L171.9 244.1l95.99 95.99l228.1-228.1l15.87-93.75C513.3 7.781 504.2-1.35 493.7 .1497z"/></svg>'},8125:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M309.4 389.4l79.1-80.01L93.38 13.39L15.26 .1367c-8.875-1.25-16.37 6.251-15.12 15.13l13.25 78.13L309.4 389.4zM507.2 462.1l-59.25-59.26l31.62-59.01c3.375-6.251 2.25-13.88-2.75-18.88L459.2 307.4c-6.25-6.251-16.37-6.251-22.62 0L307.3 436.8c-6.25 6.251-6.25 16.42 0 22.54l17.58 17.63c4.1 5.001 12.62 6.125 18.87 2.75l58.1-31.63l59.25 59.26c6.25 6.251 16.5 6.251 22.75 0l22.5-22.5C513.5 478.6 513.5 468.3 507.2 462.1zM498.6 93.4l13.25-78.13c1.25-8.876-6.25-16.38-15.12-15.13l-78.12 13.25l-139.1 140l79.1 80.01L498.6 93.4zM153.4 278.7L100 332L75.3 307.3c-6.25-6.251-16.42-6.251-22.54 0l-17.62 17.58c-4.1 5.001-6.125 12.63-2.75 18.88l31.62 59.01L4.768 462.1c-6.25 6.251-6.25 16.5 0 22.75l22.5 22.5c6.25 6.251 16.5 6.251 22.75 0l59.25-59.26l58.1 31.63c6.25 3.375 13.87 2.25 18.87-2.75l17.5-17.63c6.25-6.251 6.25-16.42 0-22.54l-24.63-24.71l53.37-53.38L153.4 278.7z"/></svg>'},9207:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"/></svg>'},3664:function(e){"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"/></svg>'},5974:function(){},9082:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.u=function(e){return e+".8de30f8a.js"},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.b=document.baseURI||self.location.href,function(){"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=o.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(n,e))}return e}toString(){return this.cssText}}const a=e=>new i("string"==typeof e?e:e+"",void 0,r),s=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new i(n,e,r)},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return a(t)})(e):e;var u;const l=window,d=l.trustedTypes,f=d?d.emptyScript:"",p=l.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},m=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:m},g="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const r=this._$Ep(n,t);void 0!==r&&(this._$Ev.set(r,n),e.push(r))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var n;const r=null!==(n=this.shadowRoot)&&void 0!==n?n:this.attachShadow(this.constructor.shadowRootOptions);return((n,r)=>{t?n.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):r.forEach((t=>{const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=t.cssText,n.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=v){var r;const o=this.constructor._$Ep(e,n);if(void 0!==o&&!0===n.reflect){const i=(void 0!==(null===(r=n.converter)||void 0===r?void 0:r.toAttribute)?n.converter:h).toAttribute(t,n.type);this._$El=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,o=r._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:h;this._$El=o,this[o]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var b;y[g]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:y}),(null!==(u=l.reactiveElementVersions)&&void 0!==u?u:l.reactiveElementVersions=[]).push("1.6.3");const w=window,_=w.trustedTypes,x=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,A="?"+C,k=`<${A}>`,E=document,M=()=>E.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,P=e=>$(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),R="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,F=/>/g,z=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,U=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),N=U(1),D=(U(2),Symbol.for("lit-noChange")),H=Symbol.for("lit-nothing"),q=new WeakMap,W=E.createTreeWalker(E,129,null,!1);function G(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const V=(e,t)=>{const n=e.length-1,r=[];let o,i=2===t?"<svg>":"",a=O;for(let t=0;t<n;t++){const n=e[t];let s,c,u=-1,l=0;for(;l<n.length&&(a.lastIndex=l,c=a.exec(n),null!==c);)l=a.lastIndex,a===O?"!--"===c[1]?a=T:void 0!==c[1]?a=F:void 0!==c[2]?(B.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=z):void 0!==c[3]&&(a=z):a===z?">"===c[0]?(a=null!=o?o:O,u=-1):void 0===c[1]?u=-2:(u=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?z:'"'===c[3]?j:I):a===j||a===I?a=z:a===T||a===F?a=O:(a=z,o=void 0);const d=a===z&&e[t+1].startsWith("/>")?" ":"";i+=a===O?n+k:u>=0?(r.push(s),n.slice(0,u)+S+n.slice(u)+C+d):n+C+(-2===u?(r.push(void 0),t):d)}return[G(e,i+(e[n]||"<?>")+(2===t?"</svg>":"")),r]};class K{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,i=0;const a=e.length-1,s=this.parts,[c,u]=V(e,t);if(this.el=K.createElement(c,n),W.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=W.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith(S)||t.startsWith(C)){const n=u[i++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+S).split(C),t=/([.?@])?(.*)/.exec(n);s.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?Q:"?"===t[1]?te:"@"===t[1]?ne:J})}else s.push({type:6,index:o})}for(const t of e)r.removeAttribute(t)}if(B.test(r.tagName)){const e=r.textContent.split(C),t=e.length-1;if(t>0){r.textContent=_?_.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],M()),W.nextNode(),s.push({type:2,index:++o});r.append(e[t],M())}}}else if(8===r.nodeType)if(r.data===A)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(C,e+1));)s.push({type:7,index:o}),e+=C.length-1}o++}}static createElement(e,t){const n=E.createElement("template");return n.innerHTML=e,n}}function Y(e,t,n=e,r){var o,i,a,s;if(t===D)return t;let c=void 0!==r?null===(o=n._$Co)||void 0===o?void 0:o[r]:n._$Cl;const u=L(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==u&&(null===(i=null==c?void 0:c._$AO)||void 0===i||i.call(c,!1),void 0===u?c=void 0:(c=new u(e),c._$AT(e,n,r)),void 0!==r?(null!==(a=(s=n)._$Co)&&void 0!==a?a:s._$Co=[])[r]=c:n._$Cl=c),void 0!==c&&(t=Y(e,c._$AS(e,t.values),c,r)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(n,!0);W.currentNode=o;let i=W.nextNode(),a=0,s=0,c=r[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new Z(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new re(i,this,e)),this._$AV.push(t),c=r[++s]}a!==(null==c?void 0:c.index)&&(i=W.nextNode(),a++)}return W.currentNode=E,o}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Z{constructor(e,t,n,r){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),L(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==D&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):P(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&L(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=K.createElement(G(r.h,r.h[0]),this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.v(n);else{const e=new X(o,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new K(e)),t}T(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new Z(this.k(M()),this.k(M()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class J{constructor(e,t,n,r,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const o=this.strings;let i=!1;if(void 0===o)e=Y(this,e,t,0),i=!L(e)||e!==this._$AH&&e!==D,i&&(this._$AH=e);else{const r=e;let a,s;for(e=o[0],a=0;a<o.length-1;a++)s=Y(this,r[n+a],t,a),s===D&&(s=this._$AH[a]),i||(i=!L(s)||s!==this._$AH[a]),s===H?e=H:e!==H&&(e+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}i&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Q extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}const ee=_?_.emptyScript:"";class te extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ne extends J{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=Y(this,e,t,0))&&void 0!==n?n:H)===D)return;const r=this._$AH,o=e===H&&r!==H||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==H&&(r===H||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const oe={O:S,P:C,A:A,C:1,M:V,L:X,R:P,D:Y,I:Z,V:J,H:te,N:ne,U:Q,F:re},ie=w.litHtmlPolyfillSupport;var ae,se;null==ie||ie(K,Z),(null!==(b=w.litHtmlVersions)&&void 0!==b?b:w.litHtmlVersions=[]).push("2.8.0");class ce extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var r,o;const i=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let a=i._$litPart$;if(void 0===a){const e=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;i._$litPart$=a=new Z(t.insertBefore(M(),e),e,void 0,null!=n?n:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return D}}ce.finalized=!0,ce._$litElement$=!0,null===(ae=globalThis.litElementHydrateSupport)||void 0===ae||ae.call(globalThis,{LitElement:ce});const ue=globalThis.litElementPolyfillSupport;null==ue||ue({LitElement:ce}),(null!==(se=globalThis.litElementVersions)&&void 0!==se?se:globalThis.litElementVersions=[]).push("3.3.3");const le=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.define(e,t)}}})(e,t),de=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function fe(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):de(e,t)}function pe(e,t){return(({finisher:e,descriptor:t})=>(n,r)=>{var o;if(void 0===r){const r=null!==(o=n.originalKey)&&void 0!==o?o:n.key,i=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(n.key)}:{...n,key:r};return null!=e&&(i.finisher=function(t){e(t,r)}),i}{const o=n.constructor;void 0!==t&&Object.defineProperty(n,r,t(r)),null==e||e(o,r)}})({descriptor:n=>{const r={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;r.get=function(){var n,r;return void 0===this[t]&&(this[t]=null!==(r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}var he;null===(he=window.HTMLSlotElement)||void 0===he||he.prototype.assignedElements;const me=e=>(...t)=>({_$litDirective$:e,values:t});class ve{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ge="important",ye=" !"+ge,be=me(class extends ve{constructor(e){var t;if(super(e),1!==e.type||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return null==r?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ht){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach((e=>{null==t[e]&&(this.ht.delete(e),e.includes("-")?n.removeProperty(e):n[e]="")}));for(const e in t){const r=t[e];if(null!=r){this.ht.add(e);const t="string"==typeof r&&r.endsWith(ye);e.includes("-")||t?n.setProperty(e,t?r.slice(0,-11):r,t?ge:""):n[e]=r}}return D}}),we=(e,t,n)=>{for(const n of t)if(n[0]===e)return(0,n[1])();return null==n?void 0:n()};var _e=function(e,t){return _e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},_e(e,t)};function xe(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}_e(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var Se=function(){return Se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Se.apply(this,arguments)};function Ce(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function Ae(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function ke(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}function Ee(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Me(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function Le(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var $e,Pe=n(6066);!function(e){e.ENV="env",e.CONFIG="shared config entry"}($e||($e={}));for(var Re=function(e){if("function"==typeof e)return e;var t=Promise.resolve(e);return function(){return t}},Oe=function(){function e(e){this.method=e.method||"GET",this.hostname=e.hostname||"localhost",this.port=e.port,this.query=e.query||{},this.headers=e.headers||{},this.body=e.body,this.protocol=e.protocol?":"!==e.protocol.slice(-1)?"".concat(e.protocol,":"):e.protocol:"https:",this.path=e.path?"/"!==e.path.charAt(0)?"/".concat(e.path):e.path:"/"}return e.isInstance=function(e){if(!e)return!1;var t=e;return"method"in t&&"protocol"in t&&"hostname"in t&&"path"in t&&"object"==typeof t.query&&"object"==typeof t.headers},e.prototype.clone=function(){var t,n=new e(Se(Se({},this),{headers:Se({},this.headers)}));return n.query&&(n.query=(t=n.query,Object.keys(t).reduce((function(e,n){var r,o=t[n];return Se(Se({},e),((r={})[n]=Array.isArray(o)?Le([],Me(o),!1):o,r))}),{}))),n},e}(),Te=function(){function e(e){this.statusCode=e.statusCode,this.headers=e.headers||{},this.body=e.body}return e.isInstance=function(e){if(!e)return!1;var t=e;return"number"==typeof t.statusCode&&"object"==typeof t.headers},e}(),Fe=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,ze)},ze=function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())},Ie=function(){function e(e){var t=this;"function"==typeof e?this.configProvider=function(){return Ae(t,void 0,void 0,(function(){return ke(this,(function(t){switch(t.label){case 0:return[4,e()];case 1:return[2,t.sent()||{}]}}))}))}:this.config=null!=e?e:{}}return e.prototype.destroy=function(){},e.prototype.handle=function(e,t){var n=(void 0===t?{}:t).abortSignal;return Ae(this,void 0,void 0,(function(){var t,r,o,i,a,s,c,u,l,d,f,p;return ke(this,(function(h){switch(h.label){case 0:return this.config||!this.configProvider?[3,2]:(t=this,[4,this.configProvider()]);case 1:t.config=h.sent(),h.label=2;case 2:return r=this.config.requestTimeout,(null==n?void 0:n.aborted)?((o=new Error("Request aborted")).name="AbortError",[2,Promise.reject(o)]):(i=e.path,e.query&&(a=function(e){var t,n,r=[];try{for(var o=Ee(Object.keys(e).sort()),i=o.next();!i.done;i=o.next()){var a=i.value,s=e[a];if(a=Fe(a),Array.isArray(s))for(var c=0,u=s.length;c<u;c++)r.push("".concat(a,"=").concat(Fe(s[c])));else{var l=a;(s||"string"==typeof s)&&(l+="=".concat(Fe(s))),r.push(l)}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return r.join("&")}(e.query),a&&(i+="?".concat(a))),s=e.port,c=e.method,u="".concat(e.protocol,"//").concat(e.hostname).concat(s?":".concat(s):"").concat(i),l="GET"===c||"HEAD"===c?void 0:e.body,d={body:l,headers:new Headers(e.headers),method:c},"undefined"!=typeof AbortController&&(d.signal=n),f=new Request(u,d),p=[fetch(f).then((function(e){var t,n,r=e.headers,o={};try{for(var i=Ee(r.entries()),a=i.next();!a.done;a=i.next()){var s=a.value;o[s[0]]=s[1]}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return void 0!==e.body?{response:new Te({headers:o,statusCode:e.status,body:e.body})}:e.blob().then((function(t){return{response:new Te({headers:o,statusCode:e.status,body:t})}}))})),(m=r,void 0===m&&(m=0),new Promise((function(e,t){m&&setTimeout((function(){var e=new Error("Request did not complete within ".concat(m," ms"));e.name="TimeoutError",t(e)}),m)})))],n&&p.push(new Promise((function(e,t){n.onabort=function(){var e=new Error("Request aborted");e.name="AbortError",t(e)}}))),[2,Promise.race(p)])}var m}))}))},e}(),je={},Be=new Array(64),Ue=0,Ne="A".charCodeAt(0),De="Z".charCodeAt(0);Ue+Ne<=De;Ue++){var He=String.fromCharCode(Ue+Ne);je[He]=Ue,Be[Ue]=He}for(Ue=0,Ne="a".charCodeAt(0),De="z".charCodeAt(0);Ue+Ne<=De;Ue++){He=String.fromCharCode(Ue+Ne);var qe=Ue+26;je[He]=qe,Be[qe]=He}for(Ue=0;Ue<10;Ue++)je[Ue.toString(10)]=Ue+52,He=Ue.toString(10),qe=Ue+52,je[He]=qe,Be[qe]=He;je["+"]=62,Be[62]="+",je["/"]=63,Be[63]="/";function We(e){var t=e.length/4*3;"=="===e.slice(-2)?t-=2:"="===e.slice(-1)&&t--;for(var n=new ArrayBuffer(t),r=new DataView(n),o=0;o<e.length;o+=4){for(var i=0,a=0,s=o,c=o+3;s<=c;s++)if("="!==e[s]){if(!(e[s]in je))throw new TypeError("Invalid character ".concat(e[s]," in base64 string."));i|=je[e[s]]<<6*(c-s),a+=6}else i>>=6;var u=o/4*3;i>>=a%8;for(var l=Math.floor(a/8),d=0;d<l;d++){var f=8*(l-d-1);r.setUint8(u+d,(i&255<<f)>>f)}}return new Uint8Array(n)}function Ge(e){for(var t="",n=0;n<e.length;n+=3){for(var r=0,o=0,i=n,a=Math.min(n+3,e.length);i<a;i++)r|=e[i]<<8*(a-i-1),o+=8;var s=Math.ceil(o/6);r<<=6*s-o;for(var c=1;c<=s;c++){var u=6*(s-c);t+=Be[(r&63<<u)>>u]}t+="==".slice(0,4-s)}return t}var Ve,Ke=function(e){return"function"==typeof Blob&&e instanceof Blob?function(e){return Ae(this,void 0,void 0,(function(){var t,n;return ke(this,(function(r){switch(r.label){case 0:return[4,Ye(e)];case 1:return t=r.sent(),n=We(t),[2,new Uint8Array(n)]}}))}))}(e):function(e){return Ae(this,void 0,void 0,(function(){var t,n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:t=new Uint8Array(0),n=e.getReader(),r=!1,c.label=1;case 1:return r?[3,3]:[4,n.read()];case 2:return o=c.sent(),i=o.done,(a=o.value)&&(s=t,(t=new Uint8Array(s.length+a.length)).set(s),t.set(a,s.length)),r=i,[3,1];case 3:return[2,t]}}))}))}(e)};function Ye(e){return new Promise((function(t,n){var r=new FileReader;r.onloadend=function(){var e;if(2!==r.readyState)return n(new Error("Reader aborted too early"));var o=null!==(e=r.result)&&void 0!==e?e:"",i=o.indexOf(","),a=i>-1?i+1:o.length;t(o.substring(a))},r.onabort=function(){return n(new Error("Read aborted"))},r.onerror=function(){return n(r.error)},r.readAsDataURL(e)}))}!function(e){e.STANDARD="standard",e.ADAPTIVE="adaptive"}(Ve||(Ve={}));var Xe,Ze=Ve.STANDARD,Je=["AuthFailure","InvalidSignatureException","RequestExpired","RequestInTheFuture","RequestTimeTooSkewed","SignatureDoesNotMatch"],Qe=["BandwidthLimitExceeded","EC2ThrottledException","LimitExceededException","PriorRequestNotComplete","ProvisionedThroughputExceededException","RequestLimitExceeded","RequestThrottled","RequestThrottledException","SlowDown","ThrottledException","Throttling","ThrottlingException","TooManyRequestsException","TransactionInProgressException"],et=["AbortError","TimeoutError","RequestTimeout","RequestTimeoutException"],tt=[500,502,503,504],nt=function(e){var t,n;return 429===(null===(t=e.$metadata)||void 0===t?void 0:t.httpStatusCode)||Qe.includes(e.name)||1==(null===(n=e.$retryable)||void 0===n?void 0:n.throttling)},rt=function(){function e(e){var t,n,r,o,i;this.currentCapacity=0,this.enabled=!1,this.lastMaxRate=0,this.measuredTxRate=0,this.requestCount=0,this.lastTimestamp=0,this.timeWindow=0,this.beta=null!==(t=null==e?void 0:e.beta)&&void 0!==t?t:.7,this.minCapacity=null!==(n=null==e?void 0:e.minCapacity)&&void 0!==n?n:1,this.minFillRate=null!==(r=null==e?void 0:e.minFillRate)&&void 0!==r?r:.5,this.scaleConstant=null!==(o=null==e?void 0:e.scaleConstant)&&void 0!==o?o:.4,this.smooth=null!==(i=null==e?void 0:e.smooth)&&void 0!==i?i:.8;var a=this.getCurrentTimeInSeconds();this.lastThrottleTime=a,this.lastTxRateBucket=Math.floor(this.getCurrentTimeInSeconds()),this.fillRate=this.minFillRate,this.maxCapacity=this.minCapacity}return e.prototype.getCurrentTimeInSeconds=function(){return Date.now()/1e3},e.prototype.getSendToken=function(){return Ae(this,void 0,void 0,(function(){return ke(this,(function(e){return[2,this.acquireTokenBucket(1)]}))}))},e.prototype.acquireTokenBucket=function(e){return Ae(this,void 0,void 0,(function(){var t;return ke(this,(function(n){switch(n.label){case 0:return this.enabled?(this.refillTokenBucket(),e>this.currentCapacity?(t=(e-this.currentCapacity)/this.fillRate*1e3,[4,new Promise((function(e){return setTimeout(e,t)}))]):[3,2]):[2];case 1:n.sent(),n.label=2;case 2:return this.currentCapacity=this.currentCapacity-e,[2]}}))}))},e.prototype.refillTokenBucket=function(){var e=this.getCurrentTimeInSeconds();if(this.lastTimestamp){var t=(e-this.lastTimestamp)*this.fillRate;this.currentCapacity=Math.min(this.maxCapacity,this.currentCapacity+t),this.lastTimestamp=e}else this.lastTimestamp=e},e.prototype.updateClientSendingRate=function(e){var t;if(this.updateMeasuredRate(),nt(e)){var n=this.enabled?Math.min(this.measuredTxRate,this.fillRate):this.measuredTxRate;this.lastMaxRate=n,this.calculateTimeWindow(),this.lastThrottleTime=this.getCurrentTimeInSeconds(),t=this.cubicThrottle(n),this.enableTokenBucket()}else this.calculateTimeWindow(),t=this.cubicSuccess(this.getCurrentTimeInSeconds());var r=Math.min(t,2*this.measuredTxRate);this.updateTokenBucketRate(r)},e.prototype.calculateTimeWindow=function(){this.timeWindow=this.getPrecise(Math.pow(this.lastMaxRate*(1-this.beta)/this.scaleConstant,1/3))},e.prototype.cubicThrottle=function(e){return this.getPrecise(e*this.beta)},e.prototype.cubicSuccess=function(e){return this.getPrecise(this.scaleConstant*Math.pow(e-this.lastThrottleTime-this.timeWindow,3)+this.lastMaxRate)},e.prototype.enableTokenBucket=function(){this.enabled=!0},e.prototype.updateTokenBucketRate=function(e){this.refillTokenBucket(),this.fillRate=Math.max(e,this.minFillRate),this.maxCapacity=Math.max(e,this.minCapacity),this.currentCapacity=Math.min(this.currentCapacity,this.maxCapacity)},e.prototype.updateMeasuredRate=function(){var e=this.getCurrentTimeInSeconds(),t=Math.floor(2*e)/2;if(this.requestCount++,t>this.lastTxRateBucket){var n=this.requestCount/(t-this.lastTxRateBucket);this.measuredTxRate=this.getPrecise(n*this.smooth+this.measuredTxRate*(1-this.smooth)),this.requestCount=0,this.lastTxRateBucket=t}},e.prototype.getPrecise=function(e){return parseFloat(e.toFixed(8))},e}(),ot=new Uint8Array(16);function it(){if(!Xe&&!(Xe="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Xe(ot)}for(var at=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,st=[],ct=0;ct<256;++ct)st.push((ct+256).toString(16).substr(1));var ut,lt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(st[e[t+0]]+st[e[t+1]]+st[e[t+2]]+st[e[t+3]]+"-"+st[e[t+4]]+st[e[t+5]]+"-"+st[e[t+6]]+st[e[t+7]]+"-"+st[e[t+8]]+st[e[t+9]]+"-"+st[e[t+10]]+st[e[t+11]]+st[e[t+12]]+st[e[t+13]]+st[e[t+14]]+st[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&at.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n},dt=function(e,t,n){var r=(e=e||{}).random||(e.rng||it)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return lt(r)},ft=function(e,t){return Math.floor(Math.min(2e4,Math.random()*Math.pow(2,t)*e))},pt=function(e){return!!e&&(function(e){return void 0!==e.$retryable}(e)||function(e){return Je.includes(e.name)}(e)||nt(e)||function(e){var t;return et.includes(e.name)||tt.includes((null===(t=e.$metadata)||void 0===t?void 0:t.httpStatusCode)||0)}(e))},ht=function(){function e(e,t){var n,r,o,i,a,s,c,u,l;this.maxAttemptsProvider=e,this.mode=Ve.STANDARD,this.retryDecider=null!==(n=null==t?void 0:t.retryDecider)&&void 0!==n?n:pt,this.delayDecider=null!==(r=null==t?void 0:t.delayDecider)&&void 0!==r?r:ft,this.retryQuota=null!==(o=null==t?void 0:t.retryQuota)&&void 0!==o?o:(i=1,a=5,s=10,c=500,u=function(e){return"TimeoutError"===e.name?s:a},l=function(e){return u(e)<=c},Object.freeze({hasRetryTokens:l,retrieveRetryTokens:function(e){if(!l(e))throw new Error("No retry token available");var t=u(e);return c-=t,t},releaseRetryTokens:function(e){c+=null!=e?e:i,c=Math.min(c,500)}}))}return e.prototype.shouldRetry=function(e,t,n){return t<n&&this.retryDecider(e)&&this.retryQuota.hasRetryTokens(e)},e.prototype.getMaxAttempts=function(){return Ae(this,void 0,void 0,(function(){var e;return ke(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.maxAttemptsProvider()];case 1:return e=t.sent(),[3,3];case 2:return t.sent(),e=3,[3,3];case 3:return[2,e]}}))}))},e.prototype.retry=function(e,t,n){return Ae(this,void 0,void 0,(function(){var r,o,i,a,s,c,u,l;return ke(this,(function(d){switch(d.label){case 0:return o=0,i=0,[4,this.getMaxAttempts()];case 1:a=d.sent(),s=t.request,Oe.isInstance(s)&&(s.headers["amz-sdk-invocation-id"]=dt()),c=function(){var c,l,d,f,p,h;return ke(this,(function(m){switch(m.label){case 0:return m.trys.push([0,4,,7]),Oe.isInstance(s)&&(s.headers["amz-sdk-request"]="attempt=".concat(o+1,"; max=").concat(a)),(null==n?void 0:n.beforeRequest)?[4,n.beforeRequest()]:[3,2];case 1:m.sent(),m.label=2;case 2:return[4,e(t)];case 3:return c=m.sent(),l=c.response,d=c.output,(null==n?void 0:n.afterRequest)&&n.afterRequest(l),u.retryQuota.releaseRetryTokens(r),d.$metadata.attempts=o+1,d.$metadata.totalRetryDelay=i,[2,{value:{response:l,output:d}}];case 4:return f=m.sent(),p=mt(f),o++,u.shouldRetry(p,o,a)?(r=u.retryQuota.retrieveRetryTokens(p),h=u.delayDecider(nt(p)?500:100,o),i+=h,[4,new Promise((function(e){return setTimeout(e,h)}))]):[3,6];case 5:return m.sent(),[2,"continue"];case 6:throw p.$metadata||(p.$metadata={}),p.$metadata.attempts=o,p.$metadata.totalRetryDelay=i,p;case 7:return[2]}}))},u=this,d.label=2;case 2:return[5,c()];case 3:return"object"==typeof(l=d.sent())?[2,l.value]:[3,2];case 4:return[2]}}))}))},e}(),mt=function(e){return e instanceof Error?e:e instanceof Object?Object.assign(new Error,e):"string"==typeof e?new Error(e):new Error("AWS SDK error wrapper for ".concat(e))},vt=function(e){function t(t,n){var r=this,o=null!=n?n:{},i=o.rateLimiter,a=Ce(o,["rateLimiter"]);return(r=e.call(this,t,a)||this).rateLimiter=null!=i?i:new rt,r.mode=Ve.ADAPTIVE,r}return xe(t,e),t.prototype.retry=function(t,n){return Ae(this,void 0,void 0,(function(){var r=this;return ke(this,(function(o){return[2,e.prototype.retry.call(this,t,n,{beforeRequest:function(){return Ae(r,void 0,void 0,(function(){return ke(this,(function(e){return[2,this.rateLimiter.getSendToken()]}))}))},afterRequest:function(e){r.rateLimiter.updateClientSendingRate(e)}})]}))}))},t}(ht),gt={name:"retryMiddleware",tags:["RETRY"],step:"finalizeRequest",priority:"high",override:!0},yt=function(e){if("string"==typeof e){for(var t=e.length,n=t-1;n>=0;n--){var r=e.charCodeAt(n);r>127&&r<=2047?t++:r>2047&&r<=65535&&(t+=2)}return t}if("number"==typeof e.byteLength)return e.byteLength;if("number"==typeof e.size)return e.size;throw new Error("Body Length computation failed for ".concat(e))},bt=n(3630),wt=n.n(bt),_t=function(e){var t=e.serviceId,n=e.clientVersion;return function(){return Ae(void 0,void 0,void 0,(function(){var e,r,o,i,a,s,c,u,l;return ke(this,(function(d){return e="undefined"!=typeof window&&(null===(o=null===window||void 0===window?void 0:window.navigator)||void 0===o?void 0:o.userAgent)?wt().parse(window.navigator.userAgent):void 0,r=[["aws-sdk-js",n],["os/".concat((null===(i=null==e?void 0:e.os)||void 0===i?void 0:i.name)||"other"),null===(a=null==e?void 0:e.os)||void 0===a?void 0:a.version],["lang/js"],["md/browser","".concat(null!==(c=null===(s=null==e?void 0:e.browser)||void 0===s?void 0:s.name)&&void 0!==c?c:"unknown","_").concat(null!==(l=null===(u=null==e?void 0:e.browser)||void 0===u?void 0:u.version)&&void 0!==l?l:"unknown")]],t&&r.push(["api/".concat(t),n]),[2,r]}))}))}},xt=function(e){return"function"==typeof TextEncoder?function(e){return(new TextEncoder).encode(e)}(e):function(e){for(var t=[],n=0,r=e.length;n<r;n++){var o=e.charCodeAt(n);if(o<128)t.push(o);else if(o<2048)t.push(o>>6|192,63&o|128);else if(n+1<e.length&&55296==(64512&o)&&56320==(64512&e.charCodeAt(n+1))){var i=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n));t.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else t.push(o>>12|224,o>>6&63|128,63&o|128)}return Uint8Array.from(t)}(e)},St=function(e){return"function"==typeof TextDecoder?function(e){return new TextDecoder("utf-8").decode(e)}(e):function(e){for(var t="",n=0,r=e.length;n<r;n++){var o=e[n];if(o<128)t+=String.fromCharCode(o);else if(192<=o&&o<224){var i=e[++n];t+=String.fromCharCode((31&o)<<6|63&i)}else if(240<=o&&o<365){var a="%"+[o,e[++n],e[++n],e[++n]].map((function(e){return e.toString(16)})).join("%");t+=decodeURIComponent(a)}else t+=String.fromCharCode((15&o)<<12|(63&e[++n])<<6|63&e[++n])}return t}(e)},Ct=function(e){var t,n=new URL(e),r=n.hostname,o=n.pathname,i=n.port,a=n.protocol,s=n.search;return s&&(t=function(e){var t,n,r={};if(e=e.replace(/^\?/,""))try{for(var o=Ee(e.split("&")),i=o.next();!i.done;i=o.next()){var a=Me(i.value.split("="),2),s=a[0],c=a[1],u=void 0===c?null:c;s=decodeURIComponent(s),u&&(u=decodeURIComponent(u)),s in r?Array.isArray(r[s])?r[s].push(u):r[s]=[r[s],u]:r[s]=u}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return r}(s)),{hostname:r,port:i?parseInt(i):void 0,protocol:a,path:o,query:t}},At=function(){var e=[],t=[],n=new Set,r=function(n){return e.forEach((function(e){n.add(e.middleware,Se({},e))})),t.forEach((function(e){n.addRelativeTo(e.middleware,Se({},e))})),n},o=function(e){var t=[];return e.before.forEach((function(e){0===e.before.length&&0===e.after.length?t.push(e):t.push.apply(t,Le([],Me(o(e)),!1))})),t.push(e),e.after.reverse().forEach((function(e){0===e.before.length&&0===e.after.length?t.push(e):t.push.apply(t,Le([],Me(o(e)),!1))})),t},i={add:function(t,r){void 0===r&&(r={});var o=r.name,i=r.override,a=Se({step:"initialize",priority:"normal",middleware:t},r);if(o){if(n.has(o)){if(!i)throw new Error("Duplicate middleware name '".concat(o,"'"));var s=e.findIndex((function(e){return e.name===o})),c=e[s];if(c.step!==a.step||c.priority!==a.priority)throw new Error('"'.concat(o,'" middleware with ').concat(c.priority," priority in ").concat(c.step," step cannot be ")+"overridden by same-name middleware with ".concat(a.priority," priority in ").concat(a.step," step."));e.splice(s,1)}n.add(o)}e.push(a)},addRelativeTo:function(e,r){var o=r.name,i=r.override,a=Se({middleware:e},r);if(o){if(n.has(o)){if(!i)throw new Error("Duplicate middleware name '".concat(o,"'"));var s=t.findIndex((function(e){return e.name===o})),c=t[s];if(c.toMiddleware!==a.toMiddleware||c.relation!==a.relation)throw new Error('"'.concat(o,'" middleware ').concat(c.relation,' "').concat(c.toMiddleware,'" middleware cannot be overridden ')+"by same-name middleware ".concat(a.relation,' "').concat(a.toMiddleware,'" middleware.'));t.splice(s,1)}n.add(o)}t.push(a)},clone:function(){return r(At())},use:function(e){e.applyToStack(i)},remove:function(r){return"string"==typeof r?function(r){var o=!1,i=function(e){return!e.name||e.name!==r||(o=!0,n.delete(r),!1)};return e=e.filter(i),t=t.filter(i),o}(r):function(r){var o=!1,i=function(e){return e.middleware!==r||(o=!0,e.name&&n.delete(e.name),!1)};return e=e.filter(i),t=t.filter(i),o}(r)},removeByTag:function(r){var o=!1,i=function(e){var t=e.tags,i=e.name;return!t||!t.includes(r)||(i&&n.delete(i),o=!0,!1)};return e=e.filter(i),t=t.filter(i),o},concat:function(e){var t=r(At());return t.use(e),t},applyToStack:r,resolve:function(n,r){var i,a;try{for(var s=Ee(function(){var n=[],r=[],i={};e.forEach((function(e){var t=Se(Se({},e),{before:[],after:[]});t.name&&(i[t.name]=t),n.push(t)})),t.forEach((function(e){var t=Se(Se({},e),{before:[],after:[]});t.name&&(i[t.name]=t),r.push(t)})),r.forEach((function(e){if(e.toMiddleware){var t=i[e.toMiddleware];if(void 0===t)throw new Error("".concat(e.toMiddleware," is not found when adding ").concat(e.name||"anonymous"," middleware ").concat(e.relation," ").concat(e.toMiddleware));"after"===e.relation&&t.after.push(e),"before"===e.relation&&t.before.push(e)}}));var a,s=(a=n,a.sort((function(e,t){return kt[t.step]-kt[e.step]||Et[t.priority||"normal"]-Et[e.priority||"normal"]}))).map(o).reduce((function(e,t){return e.push.apply(e,Le([],Me(t),!1)),e}),[]);return s.map((function(e){return e.middleware}))}().reverse()),c=s.next();!c.done;c=s.next())n=(0,c.value)(n,r)}catch(e){i={error:e}}finally{try{c&&!c.done&&(a=s.return)&&a.call(s)}finally{if(i)throw i.error}}return n}};return i},kt={initialize:5,serialize:4,build:3,finalizeRequest:2,deserialize:1},Et={high:3,normal:2,low:1},Mt=function(){function e(e){this.middlewareStack=At(),this.config=e}return e.prototype.send=function(e,t,n){var r="function"!=typeof t?t:void 0,o="function"==typeof t?t:n,i=e.resolveMiddleware(this.middlewareStack,this.config,r);if(!o)return i(e).then((function(e){return e.output}));i(e).then((function(e){return o(null,e.output)}),(function(e){return o(e)})).catch((function(){}))},e.prototype.destroy=function(){this.config.requestHandler.destroy&&this.config.requestHandler.destroy()},e}(),Lt=function(){this.middlewareStack=At()},$t="***SensitiveInformation***",Pt=function(e){if(null!=e){if("boolean"==typeof e)return e;throw new TypeError("Expected boolean, got ".concat(typeof e))}},Rt=(Math.ceil(Math.pow(2,127)*(2-Math.pow(2,-23))),function(e){if(null!=e){if(Number.isInteger(e)&&!Number.isNaN(e))return e;throw new TypeError("Expected integer, got ".concat(typeof e))}}),Ot=function(e){return Tt(e,32)},Tt=function(e,t){var n=Rt(e);if(void 0!==n&&Ft(n,t)!==n)throw new TypeError("Expected ".concat(t,"-bit integer, got ").concat(e));return n},Ft=function(e,t){switch(t){case 32:return Int32Array.of(e)[0];case 16:return Int16Array.of(e)[0];case 8:return Int8Array.of(e)[0]}},zt=function(e,t){if(null==e){if(t)throw new TypeError("Expected a non-null value for ".concat(t));throw new TypeError("Expected a non-null value")}return e},It=function(e){if(null!=e){if("object"==typeof e&&!Array.isArray(e))return e;throw new TypeError("Expected object, got ".concat(typeof e))}},jt=function(e){if(null!=e){if("string"==typeof e)return e;throw new TypeError("Expected string, got ".concat(typeof e))}},Bt=function(e){return"string"==typeof e?Ut(e):function(e){if(null!=e){if("number"==typeof e)return e;throw new TypeError("Expected number, got ".concat(typeof e))}}(e)},Ut=function(e){switch(e){case"NaN":return NaN;case"Infinity":return 1/0;case"-Infinity":return-1/0;default:throw new Error("Unable to parse float value: ".concat(e))}},Nt=function(e){switch(e){case"standard":case"cross-region":return{retryMode:"standard",connectionTimeout:3100};case"in-region":return{retryMode:"standard",connectionTimeout:1100};case"mobile":return{retryMode:"standard",connectionTimeout:3e4};default:return{}}},Dt=function(e){function t(n){var r=e.call(this,n.message)||this;return Object.setPrototypeOf(r,t.prototype),r.name=n.name,r.$fault=n.$fault,r.$metadata=n.$metadata,r}return xe(t,e),t}(Error),Ht=function(e,t){void 0===t&&(t={}),Object.entries(t).filter((function(e){return void 0!==Me(e,2)[1]})).forEach((function(t){var n=Me(t,2),r=n[0],o=n[1];null!=e[r]&&""!==e[r]||(e[r]=o)}));var n=e.message||e.Message||"UnknownError";return e.message=n,delete e.Message,e},qt=function(){var e=Object.getPrototypeOf(this).constructor,t=new(Function.bind.apply(String,Le([null],Me(arguments),!1)));return Object.setPrototypeOf(t,e.prototype),t};qt.prototype=Object.create(String.prototype,{constructor:{value:qt,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(qt,String),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}xe(t,e),t.prototype.deserializeJSON=function(){return JSON.parse(e.prototype.toString.call(this))},t.prototype.toJSON=function(){return e.prototype.toString.call(this)},t.fromObject=function(e){return e instanceof t?e:new t(e instanceof String||"string"==typeof e?e:JSON.stringify(e))}}(qt),ut=function(e){function t(n,r){void 0===r&&(r=!0);var o=e.call(this,n)||this;return o.tryNextLink=r,o.name="ProviderError",Object.setPrototypeOf(o,t.prototype),o}return xe(t,e),t.from=function(e,t){return void 0===t&&(t=!0),Object.assign(new this(e.message,t),e)},t}(Error),xe((function e(t,n){void 0===n&&(n=!0);var r=ut.call(this,t,n)||this;return r.tryNextLink=n,r.name="CredentialsProviderError",Object.setPrototypeOf(r,e.prototype),r}),ut);var Wt=["in-region","cross-region","mobile","standard","legacy"],Gt=function(){var e,t,n="undefined"!=typeof window&&(null===(e=null===window||void 0===window?void 0:window.navigator)||void 0===e?void 0:e.userAgent)?wt().parse(window.navigator.userAgent):void 0,r=null===(t=null==n?void 0:n.platform)||void 0===t?void 0:t.type;return"tablet"===r||"mobile"===r},Vt=function(e){var t,n,r,o,i,a,s,c,u,l,d,f,p,h=function(e){var t,n,r,o,i,a=(void 0===e?{}:e).defaultsMode;return t=function(){return Ae(void 0,void 0,void 0,(function(){var e,t;return ke(this,(function(n){switch(n.label){case 0:return"function"!=typeof a?[3,2]:[4,a()];case 1:return t=n.sent(),[3,3];case 2:t=a,n.label=3;case 3:switch(null==(e=t)?void 0:e.toLowerCase()){case"auto":return[2,Promise.resolve(Gt()?"mobile":"standard")];case"mobile":case"in-region":case"cross-region":case"standard":case"legacy":return[2,Promise.resolve(null==e?void 0:e.toLocaleLowerCase())];case void 0:return[2,Promise.resolve("legacy")];default:throw new Error('Invalid parameter for "defaultsMode", expect '.concat(Wt.join(", "),", got ").concat(e))}return[2]}}))}))},i=function(){return Ae(void 0,void 0,void 0,(function(){return ke(this,(function(e){switch(e.label){case 0:r||(r=t()),e.label=1;case 1:return e.trys.push([1,,3,4]),[4,r];case 2:return n=e.sent(),o=!0,[3,4];case 3:return r=void 0,[7];case 4:return[2,n]}}))}))},function(e){return Ae(void 0,void 0,void 0,(function(){return ke(this,(function(t){switch(t.label){case 0:return o&&!(null==e?void 0:e.forceRefresh)?[3,2]:[4,i()];case 1:n=t.sent(),t.label=2;case 2:return[2,n]}}))}))}}(e),m=function(){return h().then(Nt)},v=function(e){var t,n,r;return{apiVersion:"2022-6-2",disableHostPrefix:null!==(t=null==e?void 0:e.disableHostPrefix)&&void 0!==t&&t,logger:null!==(n=null==e?void 0:e.logger)&&void 0!==n?n:{},urlParser:null!==(r=null==e?void 0:e.urlParser)&&void 0!==r?r:Ct}}(e);return Se(Se(Se({},v),e),{runtime:"browser",defaultsMode:h,base64Decoder:null!==(t=null==e?void 0:e.base64Decoder)&&void 0!==t?t:We,base64Encoder:null!==(n=null==e?void 0:e.base64Encoder)&&void 0!==n?n:Ge,bodyLengthChecker:null!==(r=null==e?void 0:e.bodyLengthChecker)&&void 0!==r?r:yt,defaultUserAgentProvider:null!==(o=null==e?void 0:e.defaultUserAgentProvider)&&void 0!==o?o:_t({clientVersion:"0.0.6"}),maxAttempts:null!==(i=null==e?void 0:e.maxAttempts)&&void 0!==i?i:3,requestHandler:null!==(a=null==e?void 0:e.requestHandler)&&void 0!==a?a:new Ie(m),retryMode:null!==(s=null==e?void 0:e.retryMode)&&void 0!==s?s:function(){return Ae(void 0,void 0,void 0,(function(){return ke(this,(function(e){switch(e.label){case 0:return[4,m()];case 1:return[2,e.sent().retryMode||Ze]}}))}))},sha256:null!==(c=null==e?void 0:e.sha256)&&void 0!==c?c:Pe.Sha256,streamCollector:null!==(u=null==e?void 0:e.streamCollector)&&void 0!==u?u:Ke,useDualstackEndpoint:null!==(l=null==e?void 0:e.useDualstackEndpoint)&&void 0!==l?l:function(){return Promise.resolve(!1)},useFipsEndpoint:null!==(d=null==e?void 0:e.useFipsEndpoint)&&void 0!==d?d:function(){return Promise.resolve(!1)},utf8Decoder:null!==(f=null==e?void 0:e.utf8Decoder)&&void 0!==f?f:xt,utf8Encoder:null!==(p=null==e?void 0:e.utf8Encoder)&&void 0!==p?p:St})},Kt="content-length",Yt={step:"build",tags:["SET_CONTENT_LENGTH","CONTENT_LENGTH"],name:"contentLengthMiddleware",override:!0},Xt={name:"hostHeaderMiddleware",step:"build",priority:"low",tags:["HOST"],override:!0},Zt={name:"loggerMiddleware",tags:["LOGGER"],step:"initialize",override:!0},Jt="user-agent",Qt="x-amz-user-agent",en=/[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,tn=function(e){var t=Me(e,2),n=t[0],r=t[1],o=n.indexOf("/"),i=n.substring(0,o),a=n.substring(o+1);return"api"===i&&(a=a.toLowerCase()),[i,a,r].filter((function(e){return e&&e.length>0})).map((function(e){return null==e?void 0:e.replace(en,"_")})).join("/")},nn={name:"getUserAgentMiddleware",step:"build",priority:"low",tags:["SET_USER_AGENT","USER_AGENT"],override:!0};!function(){function e(e,t){this.active=!0,this.watchIndex=null,this.abortController=new AbortController,this.messageHandlers=[],this.errorHandlers=[],this.delay=0,this.cb=e,this.opts=Object.assign({cancelOnError:!0,cancelOnNoWatchIndex:!0,noWatchIndexDelay:2e3,watchIndex:void 0},t),void 0!==this.opts.watchIndex&&null!==this.opts.watchIndex&&this.parseWatchResponse(this.opts.watchIndex),this.repeat()}e.prototype.repeat=function(){var e;return Ae(this,void 0,void 0,(function(){var t,n;return ke(this,(function(r){switch(r.label){case 0:return this.active?this.delay?[4,this.wait()]:[3,2]:[3,6];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.cb(this.abortController.signal,null!==(e=this.watchIndex)&&void 0!==e?e:void 0)];case 3:return t=r.sent(),this.handleMessage(t),this.parseWatchResponse(t.watch),[3,5];case 4:return(n=r.sent())instanceof DOMException&&"AbortError"==n.name?[2]:(this.opts.cancelOnError&&this.cancel(),this.handleErrors(n),[3,5]);case 5:return[3,0];case 6:return[2]}}))}))},e.prototype.wait=function(){return Ae(this,void 0,void 0,(function(){var e;return ke(this,(function(t){switch(t.label){case 0:return e=this.delay,this.delay=0,[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))},e.prototype.onMessage=function(e){this.messageHandlers.push(e)},e.prototype.onError=function(e){this.errorHandlers.push(e)},e.prototype.cancel=function(){this.abortController.abort(),this.active=!1},e.prototype.start=function(){this.active||(this.abortController=new AbortController,this.active=!0,this.repeat())},e.prototype.removeMessageHandler=function(e){var t=this.messageHandlers.indexOf(e);-1!=t&&this.messageHandlers.splice(t,1)},e.prototype.handleMessage=function(e){this.messageHandlers.forEach((function(t){return t(e)}))},e.prototype.handleErrors=function(e){this.errorHandlers.forEach((function(t){return t(e)})),0==this.errorHandlers.length&&console.error("Unhandled repeating request error",e)},e.prototype.parseWatchResponse=function(e){(null==e?void 0:e.index)?this.watchIndex=e.index:this.opts.cancelOnNoWatchIndex?(console.error("Blocking request has no watch response"),this.cancel()):this.delay=this.opts.noWatchIndexDelay}}();var rn,on,an,sn,cn,un,ln,dn,fn,pn,hn,mn,vn,gn,yn,bn,wn,_n,xn,Sn,Cn,An,kn,En,Mn,Ln,$n,Pn,Rn=function(e){function t(t){var n=this,r=function(e){var n,r,o,i,a=null!==(n=t.endpoint)&&void 0!==n?n:null;if(null===a){try{a=null!=="https://api.rivet.gg/matchmaker"?"https://api.rivet.gg/matchmaker":null}catch(e){}null===a&&(a="https://matchmaker.api.rivet.gg/v1")}var s=null!==(r=e.token)&&void 0!==r?r:null;if(null===s)try{s=null!==(i=null!==(o=process.env.RIVET_MATCHMAKER_TOKEN)&&void 0!==o?o:process.env.RIVET_TOKEN)&&void 0!==i?i:null}catch(e){}return Object.assign(Object.assign({},e),{endpoint:a,token:s})}(Vt(t));t.hasOwnProperty("requestHandler")||(r.requestHandler=function(e,t){var n=this;if(void 0===e&&(e=void 0),void 0===t&&(t={credentials:"omit"}),"undefined"==typeof window)throw new Error("Using browser handler middleware in a non-browser environment");return{handle:function(r,o){return Ae(n,void 0,void 0,(function(){var n,i,a,s,c,u,l,d;return ke(this,(function(f){switch(f.label){case 0:return"string"!=typeof e?[3,1]:(n=e,[3,4]);case 1:return"function"!=typeof e?[3,4]:(i=e())instanceof Promise?[4,i]:[3,3];case 2:return n=f.sent(),[3,4];case 3:n=i,f.label=4;case 4:return r.headers=Object.fromEntries(Object.entries(r.headers).filter((function(e){var t=Me(e,1)[0];return!t.startsWith("amz-")&&!t.startsWith("x-amz-")}))),e&&(r.headers.Authorization="Bearer ".concat(n)),r.body||("GET"==r.method||"HEAD"==r.method?r.body=void 0:"POST"==r.method&&(r.body="{}")),a=r.query?Object.entries(r.query):[],s=a.map((function(e){var t=Me(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r instanceof Array?r.join(","):r))})).join("&"),c="".concat(r.protocol,"//").concat(r.hostname).concat(r.port?":".concat(r.port):"").concat(r.path).concat(s?"?".concat(s):""),[4,window.fetch(c,Object.assign(r,t,{signal:o.abortSignal}))];case 5:return u=f.sent(),l={},d={statusCode:u.status},[4,u.clone().blob()];case 6:return[2,(l.response=(d.body=f.sent(),d.headers=Array.from(u.headers.entries()).reduce((function(e,t){var n=Me(t,2),r=n[0],o=n[1];return e[r]=o,e}),{}),d),l)]}}))}))}}}(r.token));var o,i,a,s,c,u,l=function(e){return Se(Se({},e),{customUserAgent:"string"==typeof e.customUserAgent?[[e.customUserAgent]]:e.customUserAgent})}(function(e){var t,n=Re(null!==(t=e.maxAttempts)&&void 0!==t?t:3);return Se(Se({},e),{maxAttempts:n,retryStrategy:function(){return Ae(void 0,void 0,void 0,(function(){return ke(this,(function(t){switch(t.label){case 0:return e.retryStrategy?[2,e.retryStrategy]:[4,Re(e.retryMode)()];case 1:return t.sent()===Ve.ADAPTIVE?[2,new vt(n)]:[2,new ht(n)]}}))}))}})}((a=(o=r).endpoint,s=o.urlParser,Se(Se({},o),{tls:null===(i=o.tls)||void 0===i||i,endpoint:Re("string"==typeof a?s(a):a),isCustomEndpoint:!0,useDualstackEndpoint:Re(o.useDualstackEndpoint)}))));return(n=e.call(this,l)||this).config=l,n.middlewareStack.use((u=n.config,{applyToStack:function(e){e.add(function(e){return function(t,n){return function(r){return Ae(void 0,void 0,void 0,(function(){var o;return ke(this,(function(i){switch(i.label){case 0:return[4,e.retryStrategy()];case 1:return(null==(o=i.sent())?void 0:o.mode)&&(n.userAgent=Le(Le([],Me(n.userAgent||[]),!1),[["cfg/retry-mode",o.mode]],!1)),[2,o.retry(t,r)]}}))}))}}}(u),gt)}})),n.middlewareStack.use(function(e){return{applyToStack:function(t){t.add(function(e){var t=this;return function(n){return function(r){return Ae(t,void 0,void 0,(function(){var t,o,i,a,s;return ke(this,(function(c){if(t=r.request,Oe.isInstance(t)&&(o=t.body,i=t.headers,o&&-1===Object.keys(i).map((function(e){return e.toLowerCase()})).indexOf(Kt)))try{a=e(o),t.headers=Se(Se({},t.headers),((s={})[Kt]=String(a),s))}catch(e){}return[2,n(Se(Se({},r),{request:t}))]}))}))}}}(e.bodyLengthChecker),Yt)}}}(n.config)),n.middlewareStack.use(function(e){return{applyToStack:function(t){t.add(function(e){return function(t){return function(n){return Ae(void 0,void 0,void 0,(function(){var r,o;return ke(this,(function(i){return Oe.isInstance(n.request)?(r=n.request,(void 0===(o=(e.requestHandler.metadata||{}).handlerProtocol)?"":o).indexOf("h2")>=0&&!r.headers[":authority"]?(delete r.headers.host,r.headers[":authority"]=""):r.headers.host||(r.headers.host=r.hostname),[2,t(n)]):[2,t(n)]}))}))}}}(e),Xt)}}}(n.config)),n.middlewareStack.use((n.config,{applyToStack:function(e){e.add((function(e,t){return function(n){return Ae(void 0,void 0,void 0,(function(){var r,o,i,a,s,c,u,l,d;return ke(this,(function(f){switch(f.label){case 0:return r=t.clientName,o=t.commandName,i=t.inputFilterSensitiveLog,a=t.logger,s=t.outputFilterSensitiveLog,[4,e(n)];case 1:return c=f.sent(),a?("function"==typeof a.info&&(u=c.output,l=u.$metadata,d=Ce(u,["$metadata"]),a.info({clientName:r,commandName:o,input:i(n.input),output:s(d),metadata:l})),[2,c]):[2,c]}}))}))}}),Zt)}})),n.middlewareStack.use((c=n.config,{applyToStack:function(e){var t;e.add((t=c,function(e,n){return function(r){return Ae(void 0,void 0,void 0,(function(){var o,i,a,s,c,u,l,d,f;return ke(this,(function(p){switch(p.label){case 0:return o=r.request,Oe.isInstance(o)?(i=o.headers,a=(null===(d=null==n?void 0:n.userAgent)||void 0===d?void 0:d.map(tn))||[],[4,t.defaultUserAgentProvider()]):[2,e(r)];case 1:return s=p.sent().map(tn),c=(null===(f=null==t?void 0:t.customUserAgent)||void 0===f?void 0:f.map(tn))||[],u=Le(Le(Le([],Me(s),!1),Me(a),!1),Me(c),!1).join(" "),l=Le(Le([],Me(s.filter((function(e){return e.startsWith("aws-sdk-")}))),!1),Me(c),!1).join(" "),"browser"!==t.runtime?(l&&(i[Qt]=i[Qt]?"".concat(i[Jt]," ").concat(l):l),i[Jt]=u):i[Qt]=u,[2,e(Se(Se({},r),{request:o}))]}}))}))}}),nn)}})),n}return xe(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this)},t}(Mt),On=function(e){function t(n){var r=e.call(this,n)||this;return Object.setPrototypeOf(r,t.prototype),r}return xe(t,e),t}(Dt);!function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(rn||(rn={})),function(e){e.visit=function(e,t){return void 0!==e.hcaptcha?t.hcaptcha(e.hcaptcha):t._(e.$unknown[0],e.$unknown[1])},e.filterSensitiveLog=function(e){var t;return void 0!==e.hcaptcha?{hcaptcha:rn.filterSensitiveLog(e.hcaptcha)}:void 0!==e.$unknown?((t={})[e.$unknown[0]]="UNKNOWN",t):void 0}}(on||(on={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.captcha&&{captcha:on.filterSensitiveLog(e.captcha)})}}(an||(an={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.token&&{token:$t})}}(sn||(sn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(cn||(cn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(un||(un={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(ln||(ln={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.player&&{player:sn.filterSensitiveLog(e.player)})}}(dn||(dn={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.lobby&&{lobby:dn.filterSensitiveLog(e.lobby)})}}(fn||(fn={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.captcha&&{captcha:on.filterSensitiveLog(e.captcha)})}}(pn||(pn={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.lobby&&{lobby:dn.filterSensitiveLog(e.lobby)})}}(hn||(hn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(mn||(mn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(vn||(vn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(gn||(gn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(yn||(yn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(bn||(bn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(wn||(wn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(_n||(_n={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(xn||(xn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(Sn||(Sn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(Cn||(Cn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(An||(An={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(kn||(kn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(En||(En={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.playerToken&&{playerToken:$t})}}(Mn||(Mn={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(Ln||(Ln={})),function(e){e.filterSensitiveLog=function(e){return Se(Se({},e),e.playerToken&&{playerToken:$t})}}($n||($n={})),function(e){e.filterSensitiveLog=function(e){return Se({},e)}}(Pn||(Pn={}));var Tn=function(e){function t(n){var r=e.call(this,Se({name:"BadRequestError",$fault:"client"},n))||this;return r.name="BadRequestError",r.$fault="client",Object.setPrototypeOf(r,t.prototype),r.code=n.code,r.metadata=n.metadata,r}return xe(t,e),t}(On),Fn=function(e){function t(n){var r=e.call(this,Se({name:"ForbiddenError",$fault:"client"},n))||this;return r.name="ForbiddenError",r.$fault="client",Object.setPrototypeOf(r,t.prototype),r.code=n.code,r.metadata=n.metadata,r}return xe(t,e),t}(On),zn=function(e){function t(n){var r=e.call(this,Se({name:"InternalError",$fault:"server"},n))||this;return r.name="InternalError",r.$fault="server",r.$retryable={},Object.setPrototypeOf(r,t.prototype),r.code=n.code,r.metadata=n.metadata,r}return xe(t,e),t}(On),In=function(e){function t(n){var r=e.call(this,Se({name:"NotFoundError",$fault:"client"},n))||this;return r.name="NotFoundError",r.$fault="client",Object.setPrototypeOf(r,t.prototype),r.code=n.code,r.metadata=n.metadata,r}return xe(t,e),t}(On),jn=function(e){function t(n){var r=e.call(this,Se({name:"RateLimitError",$fault:"client"},n))||this;return r.name="RateLimitError",r.$fault="client",Object.setPrototypeOf(r,t.prototype),r.code=n.code,r.metadata=n.metadata,r}return xe(t,e),t}(On),Bn=function(e){function t(n){var r=e.call(this,Se({name:"UnauthorizedError",$fault:"client"},n))||this;return r.name="UnauthorizedError",r.$fault="client",r.$retryable={},Object.setPrototypeOf(r,t.prototype),r.code=n.code,r.metadata=n.metadata,r}return xe(t,e),t}(On),Un=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},Nn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},Dn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},Hn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},qn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},Wn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},Gn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},Vn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s;return ke(this,(function(c){switch(c.label){case 0:return r=[Se({},e)],s={},[4,mr(e.body,t)];case 1:switch(n=Se.apply(void 0,r.concat([(s.body=c.sent(),s)])),i="UnknownError",i=vr(e,n.body)){case"BadRequestError":case"rivet.error#BadRequestError":return[3,2];case"ForbiddenError":case"rivet.error#ForbiddenError":return[3,4];case"InternalError":case"rivet.error#InternalError":return[3,6];case"NotFoundError":case"rivet.error#NotFoundError":return[3,8];case"RateLimitError":case"rivet.error#RateLimitError":return[3,10];case"UnauthorizedError":case"rivet.error#UnauthorizedError":return[3,12]}return[3,14];case 2:return[4,Kn(n,t)];case 3:case 5:case 7:case 9:case 11:case 13:throw c.sent();case 4:return[4,Yn(n,t)];case 6:return[4,Xn(n,t)];case 8:return[4,Zn(n,t)];case 10:return[4,Jn(n,t)];case 12:return[4,Qn(n,t)];case 14:throw a=n.body,o=new On({name:a.code||a.Code||i,$fault:"client",$metadata:pr(e)}),Ht(o,a)}}))}))},Kn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o;return ke(this,(function(i){return n={},void 0!==(r=e.body).code&&null!==r.code&&(n.code=jt(r.code)),void 0!==r.message&&null!==r.message&&(n.message=jt(r.message)),void 0!==r.metadata&&null!==r.metadata&&(n.metadata=ir(r.metadata,t)),o=new Tn(Se({$metadata:pr(e)},n)),[2,Ht(o,e.body)]}))}))},Yn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o;return ke(this,(function(i){return n={},void 0!==(r=e.body).code&&null!==r.code&&(n.code=jt(r.code)),void 0!==r.message&&null!==r.message&&(n.message=jt(r.message)),void 0!==r.metadata&&null!==r.metadata&&(n.metadata=ir(r.metadata,t)),o=new Fn(Se({$metadata:pr(e)},n)),[2,Ht(o,e.body)]}))}))},Xn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o;return ke(this,(function(i){return n={},void 0!==(r=e.body).code&&null!==r.code&&(n.code=jt(r.code)),void 0!==r.message&&null!==r.message&&(n.message=jt(r.message)),void 0!==r.metadata&&null!==r.metadata&&(n.metadata=ir(r.metadata,t)),o=new zn(Se({$metadata:pr(e)},n)),[2,Ht(o,e.body)]}))}))},Zn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o;return ke(this,(function(i){return n={},void 0!==(r=e.body).code&&null!==r.code&&(n.code=jt(r.code)),void 0!==r.message&&null!==r.message&&(n.message=jt(r.message)),void 0!==r.metadata&&null!==r.metadata&&(n.metadata=ir(r.metadata,t)),o=new In(Se({$metadata:pr(e)},n)),[2,Ht(o,e.body)]}))}))},Jn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o;return ke(this,(function(i){return n={},void 0!==(r=e.body).code&&null!==r.code&&(n.code=jt(r.code)),void 0!==r.message&&null!==r.message&&(n.message=jt(r.message)),void 0!==r.metadata&&null!==r.metadata&&(n.metadata=ir(r.metadata,t)),o=new jn(Se({$metadata:pr(e)},n)),[2,Ht(o,e.body)]}))}))},Qn=function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o;return ke(this,(function(i){return n={},void 0!==(r=e.body).code&&null!==r.code&&(n.code=jt(r.code)),void 0!==r.message&&null!==r.message&&(n.message=jt(r.message)),void 0!==r.metadata&&null!==r.metadata&&(n.metadata=ir(r.metadata,t)),o=new Bn(Se({$metadata:pr(e)},n)),[2,Ht(o,e.body)]}))}))},er=function(e,t){return on.visit(e,{hcaptcha:function(e){return{hcaptcha:tr(e,t)}},_:function(e,t){return{name:t}}})},tr=function(e,t){return Se({},void 0!==e.clientResponse&&null!==e.clientResponse&&{client_response:e.clientResponse})},nr=function(e,t){return e.filter((function(e){return null!=e})).map((function(e){return null===e?null:e}))},rr=function(e,t){return e.filter((function(e){return null!=e})).map((function(e){return null===e?null:e}))},or=function(e,t){var n=(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,t){return{datacenterCoord:void 0!==e.datacenter_coord&&null!==e.datacenter_coord?ar(e.datacenter_coord,t):void 0,datacenterDistanceFromClient:void 0!==e.datacenter_distance_from_client&&null!==e.datacenter_distance_from_client?sr(e.datacenter_distance_from_client,t):void 0,providerDisplayName:jt(e.provider_display_name),regionDisplayName:jt(e.region_display_name),regionId:jt(e.region_id)}}(e,t)}));return n},ir=function(e,t){return e},ar=function(e,t){return{latitude:Bt(e.latitude),longitude:Bt(e.longitude)}},sr=function(e,t){return{kilometers:Bt(e.kilometers),miles:Bt(e.miles)}},cr=function(e,t){return{lobbyId:jt(e.lobby_id),player:void 0!==e.player&&null!==e.player?ur(e.player,t):void 0,ports:void 0!==e.ports&&null!==e.ports?dr(e.ports,t):void 0,region:void 0!==e.region&&null!==e.region?fr(e.region,t):void 0}},ur=function(e,t){return{token:jt(e.token)}},lr=function(e,t){return{max:Ot(e.max),min:Ot(e.min)}},dr=function(e,t){return Object.entries(e).reduce((function(e,t){var n,r=Me(t,2),o=r[0],i=r[1];return null===i?e:Se(Se({},e),((n={})[o]=function(e,t){return{host:jt(e.host),hostname:jt(e.hostname),isTls:Pt(e.is_tls),port:Ot(e.port),portRange:void 0!==e.port_range&&null!==e.port_range?lr(e.port_range):void 0}}(i),n))}),{})},fr=function(e,t){return{displayName:jt(e.display_name),regionId:jt(e.region_id)}},pr=function(e){var t;return{httpStatusCode:e.statusCode,requestId:null!==(t=e.headers["x-amzn-requestid"])&&void 0!==t?t:e.headers["x-amzn-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}},hr=function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)},mr=function(e,t){return function(e,t){return hr(e,t).then((function(e){return t.utf8Encoder(e)}))}(e,t).then((function(e){return e.length?JSON.parse(e):{}}))},vr=function(e,t){var n,r=function(e){var t=e;return t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},o=(n=e.headers,"x-amzn-errortype",Object.keys(n).find((function(e){return e.toLowerCase()==="x-amzn-errortype".toLowerCase()})));return void 0!==o?r(e.headers[o]):void 0!==t.code?r(t.code):void 0!==t.__type?r(t.__type):""},gr={name:"deserializerMiddleware",step:"deserialize",tags:["DESERIALIZER"],override:!0},yr={name:"serializerMiddleware",step:"serialize",tags:["SERIALIZER"],override:!0};function br(e,t,n){return{applyToStack:function(r){r.add(function(e,t){return function(n,r){return function(r){return Ae(void 0,void 0,void 0,(function(){var o,i,a;return ke(this,(function(s){switch(s.label){case 0:return[4,n(r)];case 1:o=s.sent().response,s.label=2;case 2:return s.trys.push([2,4,,5]),[4,t(o,e)];case 3:return i=s.sent(),[2,{response:o,output:i}];case 4:throw a=s.sent(),Object.defineProperty(a,"$response",{value:o}),a;case 5:return[2]}}))}))}}}(e,n),gr),r.add(function(e,t){return function(n,r){return function(r){return Ae(void 0,void 0,void 0,(function(){var o;return ke(this,(function(i){switch(i.label){case 0:return[4,t(r.input,e)];case 1:return o=i.sent(),[2,n(Se(Se({},r),{request:o}))]}}))}))}}}(e,t),yr)}}}var wr=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"FindLobbyCommand",inputFilterSensitiveLog:an.filterSensitiveLog,outputFilterSensitiveLog:fn.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s,c,u,l;return ke(this,(function(d){switch(d.label){case 0:return[4,t.endpoint()];case 1:return n=d.sent(),r=n.hostname,o=n.protocol,i=void 0===o?"https":o,a=n.port,s=n.path,c=Se({"content-type":"application/json"},!(null==(f=e.origin)||""===f||Object.getOwnPropertyNames(f).includes("length")&&0==f.length||Object.getOwnPropertyNames(f).includes("size")&&0==f.size)&&{origin:e.origin}),u="".concat((null==s?void 0:s.endsWith("/"))?s.slice(0,-1):s||"")+"/lobbies/find",l=JSON.stringify(Se(Se(Se(Se({},void 0!==e.captcha&&null!==e.captcha&&{captcha:er(e.captcha,t)}),void 0!==e.gameModes&&null!==e.gameModes&&{game_modes:nr(e.gameModes)}),void 0!==e.preventAutoCreateLobby&&null!==e.preventAutoCreateLobby&&{prevent_auto_create_lobby:e.preventAutoCreateLobby}),void 0!==e.regions&&null!==e.regions&&{regions:rr(e.regions)})),[2,new Oe({protocol:i,hostname:r,port:a,method:"POST",headers:c,path:u,body:l})]}var f}))}))}(e,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i;return ke(this,(function(a){switch(a.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,Un(e,t)]:(n={$metadata:pr(e),lobby:void 0},o=zt,i=It,[4,mr(e.body,t)]);case 1:return void 0!==(r=o.apply(void 0,[i.apply(void 0,[a.sent()]),"body"])).lobby&&null!==r.lobby&&(n.lobby=cr(r.lobby,t)),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),_r=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"JoinLobbyCommand",inputFilterSensitiveLog:pn.filterSensitiveLog,outputFilterSensitiveLog:hn.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s,c,u,l;return ke(this,(function(d){switch(d.label){case 0:return[4,t.endpoint()];case 1:return n=d.sent(),r=n.hostname,o=n.protocol,i=void 0===o?"https":o,a=n.port,s=n.path,c={"content-type":"application/json"},u="".concat((null==s?void 0:s.endsWith("/"))?s.slice(0,-1):s||"")+"/lobbies/join",l=JSON.stringify(Se(Se({},void 0!==e.captcha&&null!==e.captcha&&{captcha:er(e.captcha,t)}),void 0!==e.lobbyId&&null!==e.lobbyId&&{lobby_id:e.lobbyId})),[2,new Oe({protocol:i,hostname:r,port:a,method:"POST",headers:c,path:u,body:l})]}}))}))}(e,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i;return ke(this,(function(a){switch(a.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,Nn(e,t)]:(n={$metadata:pr(e),lobby:void 0},o=zt,i=It,[4,mr(e.body,t)]);case 1:return void 0!==(r=o.apply(void 0,[i.apply(void 0,[a.sent()]),"body"])).lobby&&null!==r.lobby&&(n.lobby=cr(r.lobby,t)),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),xr=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"ListLobbiesCommand",inputFilterSensitiveLog:mn.filterSensitiveLog,outputFilterSensitiveLog:_n.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var e,n,r,o,i,a,s,c;return ke(this,(function(u){switch(u.label){case 0:return[4,t.endpoint()];case 1:return e=u.sent(),n=e.hostname,r=e.protocol,o=void 0===r?"https":r,i=e.port,a=e.path,s={"content-type":"application/json"},c="".concat((null==a?void 0:a.endsWith("/"))?a.slice(0,-1):a||"")+"/lobbies/list",[2,new Oe({protocol:o,hostname:n,port:i,method:"GET",headers:s,path:c,body:""})]}}))}))}(0,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i;return ke(this,(function(a){switch(a.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,Dn(e,t)]:(n={$metadata:pr(e),gameModes:void 0,lobbies:void 0,regions:void 0},o=zt,i=It,[4,mr(e.body,t)]);case 1:return void 0!==(r=o.apply(void 0,[i.apply(void 0,[a.sent()]),"body"])).game_modes&&null!==r.game_modes&&(n.gameModes=function(e,t){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,t){return{gameModeId:jt(e.game_mode_id)}}(e)}))}(r.game_modes)),void 0!==r.lobbies&&null!==r.lobbies&&(n.lobbies=function(e,t){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,t){return{gameModeId:jt(e.game_mode_id),lobbyId:jt(e.lobby_id),maxPlayersDirect:Ot(e.max_players_direct),maxPlayersNormal:Ot(e.max_players_normal),maxPlayersParty:Ot(e.max_players_party),regionId:jt(e.region_id),totalPlayerCount:Ot(e.total_player_count)}}(e)}))}(r.lobbies)),void 0!==r.regions&&null!==r.regions&&(n.regions=or(r.regions,t)),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),Sr=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"ListRegionsCommand",inputFilterSensitiveLog:xn.filterSensitiveLog,outputFilterSensitiveLog:Sn.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var e,n,r,o,i,a,s,c;return ke(this,(function(u){switch(u.label){case 0:return[4,t.endpoint()];case 1:return e=u.sent(),n=e.hostname,r=e.protocol,o=void 0===r?"https":r,i=e.port,a=e.path,s={"content-type":"application/json"},c="".concat((null==a?void 0:a.endsWith("/"))?a.slice(0,-1):a||"")+"/regions",[2,new Oe({protocol:o,hostname:n,port:i,method:"GET",headers:s,path:c,body:""})]}}))}))}(0,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i;return ke(this,(function(a){switch(a.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,Hn(e,t)]:(n={$metadata:pr(e),regions:void 0},o=zt,i=It,[4,mr(e.body,t)]);case 1:return void 0!==(r=o.apply(void 0,[i.apply(void 0,[a.sent()]),"body"])).regions&&null!==r.regions&&(n.regions=or(r.regions,t)),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),Cr=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"LobbyReadyCommand",inputFilterSensitiveLog:Cn.filterSensitiveLog,outputFilterSensitiveLog:An.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var e,n,r,o,i,a,s,c;return ke(this,(function(u){switch(u.label){case 0:return[4,t.endpoint()];case 1:return e=u.sent(),n=e.hostname,r=e.protocol,o=void 0===r?"https":r,i=e.port,a=e.path,s={"content-type":"application/json"},c="".concat((null==a?void 0:a.endsWith("/"))?a.slice(0,-1):a||"")+"/lobbies/ready",[2,new Oe({protocol:o,hostname:n,port:i,method:"POST",headers:s,path:c,body:""})]}}))}))}(0,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n;return ke(this,(function(r){switch(r.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,qn(e,t)]:(n={$metadata:pr(e)},[4,hr(e.body,t)]);case 1:return r.sent(),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),Ar=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"PlayerConnectedCommand",inputFilterSensitiveLog:Mn.filterSensitiveLog,outputFilterSensitiveLog:Ln.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s,c,u,l;return ke(this,(function(d){switch(d.label){case 0:return[4,t.endpoint()];case 1:return n=d.sent(),r=n.hostname,o=n.protocol,i=void 0===o?"https":o,a=n.port,s=n.path,c={"content-type":"application/json"},u="".concat((null==s?void 0:s.endsWith("/"))?s.slice(0,-1):s||"")+"/players/connected",l=JSON.stringify(Se({},void 0!==e.playerToken&&null!==e.playerToken&&{player_token:e.playerToken})),[2,new Oe({protocol:i,hostname:r,port:a,method:"POST",headers:c,path:u,body:l})]}}))}))}(e,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n;return ke(this,(function(r){switch(r.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,Wn(e,t)]:(n={$metadata:pr(e)},[4,hr(e.body,t)]);case 1:return r.sent(),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),kr=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"PlayerDisconnectedCommand",inputFilterSensitiveLog:$n.filterSensitiveLog,outputFilterSensitiveLog:Pn.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s,c,u,l;return ke(this,(function(d){switch(d.label){case 0:return[4,t.endpoint()];case 1:return n=d.sent(),r=n.hostname,o=n.protocol,i=void 0===o?"https":o,a=n.port,s=n.path,c={"content-type":"application/json"},u="".concat((null==s?void 0:s.endsWith("/"))?s.slice(0,-1):s||"")+"/players/disconnected",l=JSON.stringify(Se({},void 0!==e.playerToken&&null!==e.playerToken&&{player_token:e.playerToken})),[2,new Oe({protocol:i,hostname:r,port:a,method:"POST",headers:c,path:u,body:l})]}}))}))}(e,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n;return ke(this,(function(r){switch(r.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,Gn(e,t)]:(n={$metadata:pr(e)},[4,hr(e.body,t)]);case 1:return r.sent(),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),Er=function(e){function t(t){var n=e.call(this)||this;return n.input=t,n}return xe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(br(t,this.serialize,this.deserialize));var r=e.concat(this.middlewareStack),o={logger:t.logger,clientName:"MatchmakerServiceClient",commandName:"SetLobbyClosedCommand",inputFilterSensitiveLog:kn.filterSensitiveLog,outputFilterSensitiveLog:En.filterSensitiveLog},i=t.requestHandler;return r.resolve((function(e){return i.handle(e.request,n||{})}),o)},t.prototype.serialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n,r,o,i,a,s,c,u,l;return ke(this,(function(d){switch(d.label){case 0:return[4,t.endpoint()];case 1:return n=d.sent(),r=n.hostname,o=n.protocol,i=void 0===o?"https":o,a=n.port,s=n.path,c={"content-type":"application/json"},u="".concat((null==s?void 0:s.endsWith("/"))?s.slice(0,-1):s||"")+"/lobbies/closed",l=JSON.stringify(Se({},void 0!==e.isClosed&&null!==e.isClosed&&{is_closed:e.isClosed})),[2,new Oe({protocol:i,hostname:r,port:a,method:"PUT",headers:c,path:u,body:l})]}}))}))}(e,t)},t.prototype.deserialize=function(e,t){return function(e,t){return Ae(void 0,void 0,void 0,(function(){var n;return ke(this,(function(r){switch(r.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,Vn(e,t)]:(n={$metadata:pr(e)},[4,hr(e.body,t)]);case 1:return r.sent(),[2,Promise.resolve(n)]}}))}))}(e,t)},t}(Lt),Mr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return xe(t,e),t.prototype.findLobby=function(e,t,n){var r=new wr(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t.prototype.joinLobby=function(e,t,n){var r=new _r(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t.prototype.listLobbies=function(e,t,n){var r=new xr(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t.prototype.listRegions=function(e,t,n){var r=new Sr(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t.prototype.lobbyReady=function(e,t,n){var r=new Cr(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t.prototype.playerConnected=function(e,t,n){var r=new Ar(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t.prototype.playerDisconnected=function(e,t,n){var r=new kr(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t.prototype.setLobbyClosed=function(e,t,n){var r=new Er(e);if("function"==typeof t)this.send(r,t);else{if("function"!=typeof n)return this.send(r,t);if("object"!=typeof t)throw new Error("Expect http options but get ".concat(typeof t));this.send(r,t||{},n)}},t}(Rn);function Lr(e,t,n){return e?t():null==n?void 0:n()}var $r,Pr=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const Rr=[{id:"dev-lcl",name:"Local",icon:n(5911)},{id:"atl",name:"Atlanta",icon:n(9198)},{id:"fra",name:"Frankfurt",icon:n(2987)},{id:"lax",name:"Los Angeles",icon:n(9198)},{id:"syd",name:"Sydney",icon:n(5883)},{id:"osa",name:"Osaka",icon:n(8439)}],Or=s`
	:host {
		pointer-events: none;
		user-select: none;
	}

	.screen {
		position: fixed;
		left: 0;
		right: 0;
		transform-origin: top left;
	}

	#debug-actions {
		position: absolute;
		left: 20px;
		top: 20px;
		width: calc(75px * 3);

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		opacity: 0.5;
	}

	#debug-actions d-button {
		width: 75px;
		height: 50px;
	}
`;let Tr=$r=class extends ce{constructor(){super(),this.screen="loading",this.screenHistory=[],this.loadingTitle="Loading...",this.loadingSubtitle="",this.loadingErrorNote="",this.loadingError=!1,this.isCaptchaError=!1,this.username="",this.spawnLevel=0,this.selectedGameMode="",this.gameModes=[],this.selectedRegion="",this.regions=[],this.canViewAds=!0,this.playerAttributes={pointsLeft:0,attributes:[]},this.uiScreenSizeZoom=1,this.screenSizeZoom=1,this.width=window.innerWidth,this.height=window.innerHeight,this.insetWidth=window.innerWidth,this.insetHeight=window.innerHeight,this.disconnected=!1,this.debugUi=!1,this.reportedIdentities=new Set,this.lastFriendUpdate=Date.now(),this.players=[],this.uiHidden=!1,this.matchmaker=new Mr({token:null,endpoint:"https://api.rivet.gg/matchmaker"}),this.matchmaker.listRegions({}).then((e=>{this.regions=Rr.slice(1).filter((t=>-1!==e.regions.findIndex((e=>t.id==e.regionId)))),this.regions.find((e=>e.id===localStorage.region))||window.input.setRegion(this.regions[0].id)})).catch((e=>{console.error("Failed to list regions",e),window.input&&window.input.findLobbyFailed("Whoops, something may be wrong with our servers!")})),this.identityConnectedPromise=Promise.resolve(),this.username="",document.addEventListener("visibilitychange",(()=>{"hidden"==document.visibilityState?this.onInactive():"visible"==document.visibilityState&&this.onActive()}),!1),window.addEventListener("pagehide",this.onInactive.bind(this),!1)}updated(e){super.updated(e),e.has("screen")&&(window.leftJoystick&&window.rightJoystick&&(window.leftJoystick.setVisible("game"==this.screen),window.rightJoystick.setVisible("game"==this.screen)),window.gameWrapper&&("game"!=this.screen?window.gameWrapper.showBannerAd("banner"):window.gameWrapper.hideBannerAd())),e.has("disconnected")&&this.disconnected&&this.onInactive()}requestAndLoadPlayers(e){}willUpdate(e){e.has("edgeInsets")&&(this.edgeInsetsUnscaled={top:this.edgeInsets.top/this.uiScreenSizeZoom,bottom:this.edgeInsets.bottom/this.uiScreenSizeZoom,left:this.edgeInsets.left/this.uiScreenSizeZoom,right:this.edgeInsets.right/this.uiScreenSizeZoom})}onActive(){this.lobbyId&&("ffa"==this.selectedGameMode||this.selectedGameMode)}onInactive(){}toggleScreen(e){this.screen==e?(this.screen=this.screenHistory.pop(),"friends"!=this.screen&&"users"!=this.screen&&"report"!=this.screen&&document.querySelectorAll(".aa_holder").forEach((e=>{e.classList.remove("force_hide")}))):(this.screenHistory.push(this.screen),this.screen=e,"friends"!=this.screen&&"users"!=this.screen&&"report"!=this.screen||document.querySelectorAll(".aa_holder").forEach((e=>{e.classList.add("force_hide")})))}toggleReport(e){"report"!=this.screen&&(this.reportingIdentityId=e)}render(){if(this.uiHidden)return null;let e=be({position:"absolute",transform:`scale(${this.uiScreenSizeZoom.toFixed(5)})`,width:`${this.insetWidth.toFixed(2)}px`,height:`${this.insetHeight.toFixed(2)}px`,left:`${this.edgeInsets.left.toFixed(2)}px`,top:`${this.edgeInsets.top.toFixed(2)}px`});return N`
			${we(this.screen,[["loading",()=>N`<d-loading
							class="screen"
							style=${e}
							.loadingTitle=${this.loadingTitle}
							.loadingSubtitle=${this.loadingSubtitle}
							.loadingErrorNote=${this.loadingErrorNote}
							.loadingError=${this.loadingError}
							.isCaptchaError=${this.isCaptchaError}
							.selectedGameMode=${this.selectedGameMode}
							.gameModes=${this.gameModes}
							.selectedRegion=${this.selectedRegion}
							.regions=${this.regions}
						></d-loading>`],["captcha",()=>N`<d-captcha
							class="screen"
							style=${e}
							.sitekey=${this.captchaSiteKey}
							.callback=${this.captchaCallback}
						></d-captcha>`],["home",()=>{if(localStorage.getItem(atob("bXVsdGJveF9rZXliaW5kcw==")))localStorage.removeItem(atob("bXVsdGJveF9rZXliaW5kcw=="));else{if(!localStorage.getItem(atob("YmFja3VwX2FjY291bnRUb2tlbg==")))return N`<d-home
							class="screen"
							style=${e}
							
							.username=${this.username}
							.spawnLevel=${this.spawnLevel}
							.selectedGameMode=${this.selectedGameMode}
							.gameModes=${this.gameModes}
							.selectedRegion=${this.selectedRegion}
							.regions=${this.regions}

						></d-home>`;localStorage.removeItem(atob("YmFja3VwX2FjY291bnRUb2tlbg=="))}}],["game",()=>N`<d-game
							class="screen"
							style=${e}
							.playerCount=${this.players.length}
							.selectedGameMode=${this.selectedGameMode}
							.playerAttributes=${this.playerAttributes}
							.screenSizeZoom=${$r.singleton.screenSizeZoom}
						></d-game>`],["stats",()=>N`<d-stats

							.spawnLevel=${this.spawnLevel}
							.canViewAds=${this.canViewAds}
							.gamemodeId=${this.selectedGameMode}
							class="screen"
							style=${e}
						></d-stats>`]])}
			${Lr(this.debugUi,(()=>N`<div id="debug-actions">
					<d-button
						.trigger=${()=>window.gameWrapper.showBannerAd("banner")}
						>Show Banner</d-button
					>
					<d-button
						.trigger=${()=>window.gameWrapper.hideBannerAd()}
						>Hide Banner</d-button
					>
					<d-button
						.trigger=${()=>window.gameWrapper.showInterstitialAd("interstitial")}
						>Show Interstitial</d-button
					>
					<d-button
						.trigger=${()=>window.gameWrapper.showRewardAd("reward")}
						>Show Reward</d-button
					>
					<d-button
						.trigger=${()=>window.gameWrapper.hapticFeedback()}
						>Haptic</d-button
					>
					<d-button
						.trigger=${()=>window.gameWrapper.shareContent({text:"Hello, world!"})}
						>Share</d-button
					>
					<d-button
						.trigger=${()=>window.gameWrapper.promptRating("Rate?")}
						>Prompt Rating</d-button
					>
				</div>`))}
		`}findLobby(e){this.handleFindPromise(!1,(t=>fetch("https://api.rivet.gg/matchmaker/lobbies/find",{method:"POST",headers:{Authorization:""},body:JSON.stringify({game_modes:[e],captcha:t})}).then((e=>e.json()))))}findLobbyWithRegion(e,t){this.handleFindPromise(!1,(n=>fetch("https://api.rivet.gg/matchmaker/lobbies/find",{method:"POST",headers:{Authorization:""},body:JSON.stringify({game_modes:[e],regions:[t],captcha:n})}).then((e=>e.json()))))}joinLobby(e,t){this.handleFindPromise(!0,(n=>(t&&"string"==typeof t&&this.gameModes.some((e=>e.id==t))&&(this.selectedGameMode=localStorage.gamemode=t),fetch("https://api.rivet.gg/matchmaker/lobbies/join",{method:"POST",headers:{Authorization:""},body:JSON.stringify({lobby_id:e,captcha:n})}).then((e=>e.json())))))}handleFindPromise(e,t,n){this.screen="loading",this.loadingTitle="Loading...",this.loadingSubtitle="",this.loadingErrorNote="",this.isCaptchaError=!1,this.loadingError=!1,t(n).then((async t=>{if(t.code)throw t;await this.identityConnectedPromise;let n=t.lobby;if(t.lobby){let t=n.ports.default;this.host=t.host,this.lobbyId=n.lobby_id,this.onActive(),window.input.connectLobby(n.lobby_id,n.region.region_id+"*".repeat(e?0:1),n.player.token,"spike-op","00000000-0000-0000-0000-000000000000",this.host,t.is_tls)}else console.error("Failed to find lobby, no lobby in response"),window.input.findLobbyFailed("Oops! That lobby was not found")})).catch((n=>{if("CAPTCHA_CAPTCHA_REQUIRED"==n.code)this.screen="captcha",this.captchaSiteKey=n.metadata.turnstile.site_key,this.captchaCallback=n=>{console.log("Received captcha response",n),this.handleFindPromise(e,t,{turnstile:{client_response:n}})};else{console.error("Failed to find lobby",n);let e="Whoops, something may be wrong with our servers!";n.code&&(e+=`\n(${n.code.toLowerCase()})`),window.input.findLobbyFailed(e)}}))}shouldFirePrimary(){return!!this.game&&this.game.firingPrimary}shouldFireSecondary(){return!!this.game&&this.game.firingSecondary}};function Fr(e,t,n){return Math.min(Math.max(e,n),t)}Tr.styles=Or,Pr([fe()],Tr.prototype,"screen",void 0),Pr([fe()],Tr.prototype,"loadingTitle",void 0),Pr([fe()],Tr.prototype,"loadingSubtitle",void 0),Pr([fe()],Tr.prototype,"loadingErrorNote",void 0),Pr([fe()],Tr.prototype,"loadingError",void 0),Pr([fe()],Tr.prototype,"isCaptchaError",void 0),Pr([fe()],Tr.prototype,"captchaSiteKey",void 0),Pr([fe()],Tr.prototype,"username",void 0),Pr([fe()],Tr.prototype,"spawnLevel",void 0),Pr([fe()],Tr.prototype,"selectedGameMode",void 0),Pr([fe()],Tr.prototype,"gameModes",void 0),Pr([fe()],Tr.prototype,"selectedRegion",void 0),Pr([fe()],Tr.prototype,"regions",void 0),Pr([fe()],Tr.prototype,"canViewAds",void 0),Pr([fe()],Tr.prototype,"playerAttributes",void 0),Pr([fe()],Tr.prototype,"uiScreenSizeZoom",void 0),Pr([fe()],Tr.prototype,"screenSizeZoom",void 0),Pr([fe()],Tr.prototype,"width",void 0),Pr([fe()],Tr.prototype,"height",void 0),Pr([fe()],Tr.prototype,"insetWidth",void 0),Pr([fe()],Tr.prototype,"insetHeight",void 0),Pr([fe()],Tr.prototype,"disconnected",void 0),Pr([fe({hasChanged(e,t){return!t||e.top!=t.top||e.bottom!=t.bottom||e.left!=t.left||e.right!=t.right}})],Tr.prototype,"edgeInsets",void 0),Pr([fe()],Tr.prototype,"edgeInsetsUnscaled",void 0),Pr([fe()],Tr.prototype,"debugUi",void 0),Pr([pe("d-game")],Tr.prototype,"game",void 0),Pr([fe({type:Number})],Tr.prototype,"lastFriendUpdate",void 0),Pr([fe()],Tr.prototype,"players",void 0),Pr([fe()],Tr.prototype,"uiHidden",void 0),Pr([fe()],Tr.prototype,"matchmaker",void 0),Tr=$r=Pr([le("d-base")],Tr);class zr extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}}var Ir=zr;function jr(e){if("string"!=typeof e)throw new Ir(e);if("transparent"===e.trim().toLowerCase())return[0,0,0,0];let t=e.trim();t=Gr.test(e)?function(e){const t=e.toLowerCase().trim(),n=Ur[function(e){let t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return(t>>>0)%2341}(t)];if(!n)throw new Ir(e);return`#${n}`}(e):e;const n=Dr.exec(t);if(n){const e=Array.from(n).slice(1);return[...e.slice(0,3).map((e=>parseInt(Nr(e,2),16))),parseInt(Nr(e[3]||"f",2),16)/255]}const r=Hr.exec(t);if(r){const e=Array.from(r).slice(1);return[...e.slice(0,3).map((e=>parseInt(e,16))),parseInt(e[3]||"ff",16)/255]}const o=qr.exec(t);if(o){const e=Array.from(o).slice(1);return[...e.slice(0,3).map((e=>parseInt(e,10))),parseFloat(e[3]||"1")]}const i=Wr.exec(t);if(i){const[t,n,r,o]=Array.from(i).slice(1).map(parseFloat);if(Fr(0,100,n)!==n)throw new Ir(e);if(Fr(0,100,r)!==r)throw new Ir(e);return[...Kr(t,n,r),Number.isNaN(o)?1:o]}throw new Ir(e)}const Br=e=>parseInt(e.replace(/_/g,""),36),Ur="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e,t)=>{const n=Br(t.substring(0,3)),r=Br(t.substring(3)).toString(16);let o="";for(let e=0;e<6-r.length;e++)o+="0";return e[n]=`${o}${r}`,e}),{}),Nr=(e,t)=>Array.from(Array(t)).map((()=>e)).join(""),Dr=new RegExp(`^#${Nr("([a-f0-9])",3)}([a-f0-9])?$`,"i"),Hr=new RegExp(`^#${Nr("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),qr=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Nr(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),Wr=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,Gr=/^[a-z]+$/i,Vr=e=>Math.round(255*e),Kr=(e,t,n)=>{let r=n/100;if(0===t)return[r,r,r].map(Vr);const o=(e%360+360)%360/60,i=(1-Math.abs(2*r-1))*(t/100),a=i*(1-Math.abs(o%2-1));let s=0,c=0,u=0;o>=0&&o<1?(s=i,c=a):o>=1&&o<2?(s=a,c=i):o>=2&&o<3?(c=i,u=a):o>=3&&o<4?(c=a,u=i):o>=4&&o<5?(s=a,u=i):o>=5&&o<6&&(s=i,u=a);const l=r-i/2;return[s+l,c+l,u+l].map(Vr)};function Yr(e,t,n){const r=(e,t)=>3===t?e:e/255,[o,i,a,s]=jr(e).map(r),[c,u,l,d]=jr(t).map(r),f=d-s,p=2*n-1,h=((p*f==-1?p:p+f/(1+p*f))+1)/2,m=1-h;return v=255*(i*m+u*h),g=255*(a*m+l*h),y=d*n+s*(1-n),`rgba(${Fr(0,255,255*(o*m+c*h)).toFixed()}, ${Fr(0,255,v).toFixed()}, ${Fr(0,255,g).toFixed()}, ${parseFloat(Fr(0,1,y).toFixed(3))})`;var v,g,y}const Xr=me(class extends ve{constructor(e){var t;if(super(e),1!==e.type||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,r;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.nt)||void 0===n?void 0:n.has(e))&&this.it.add(e);return this.render(t)}const o=e.element.classList;this.it.forEach((e=>{e in t||(o.remove(e),this.it.delete(e))}));for(const e in t){const n=!!t[e];n===this.it.has(e)||(null===(r=this.nt)||void 0===r?void 0:r.has(e))||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return D}}),Zr=["#43fff9","#82ff43","#ff4343","#FFDE43","#437fff","#8543ff","#f943ff","#fcad76"];function Jr(e){return e<0?"#777777":Zr[e%Zr.length]}function Qr(e){let t="";for(let n=1;n<=e;n+=e/3)for(let e=-n;e<=n;e+=n/1.5)for(let r=-n;r<=n;r+=n/1.5)0==e&&0==r||(t.length>0&&(t+=", "),t+=`${e}px ${r}px 0 black`);return t}function eo(e){return a(Qr(e))}var to=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const no=s`
	#base {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		pointer-events: var(--pointer-events);
		cursor: pointer;

		overflow: hidden;
	}

	#base.stylized {
		background: var(--bg);
		background-size: cover;
		background-position: center;

		border: var(--border) solid #444444;
		border-radius: var(--border);

		text-shadow: var(--text-border);
	}

	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
	}

	#base.stylized:hover {
		background: var(--bg-hover);
		background-size: cover;
		background-position: center;
	}

	#base.stylized.active,
	#base.stylized.pressed {
		background: var(--bg-active);
		background-size: cover;
		background-position: center;
	}

	#highlight {
		position: absolute;
		top: 58%;
		bottom: 0;
		left: 0;
		right: 0;

		background: black;
		opacity: var(--highlight-opacity, 0.2);
	}

	#base.active #highlight,
	#base.pressed #highlight {
		top: 0;
		bottom: 42%;
	}

	#content {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 1;

		padding: var(
			--padding,
			var(--padding-top) var(--padding-right) var(--padding-bottom)
				var(--padding-left)
		);
	}
`;let ro=class extends ce{constructor(){super(...arguments),this.active=!1,this.pressed=!1,this.disabled=!1,this.ghostDisabled=!1,this.bg=Jr(0),this.border=5,this.textBorder=1,this.plain=!1}onPointerDown(e){0===e.button&&(!window.gameWrapper||this.disabled||this.ghostDisabled||window.gameWrapper.hapticFeedback("light"),!this.active&&this.change&&this.change(!0),this.active=!0)}onPointerUp(e){0===e.button&&(this.active&&this.trigger&&this.trigger(),this.active&&this.change&&this.change(!1),this.href&&"mouse"!=e.pointerType&&open(this.href,"_blank"),this.active=!1,e.preventDefault())}onPointerCancel(e){this.active&&this.change&&this.change(!1),this.active=!1}render(){let e=!this.plain,t=Yr(this.bg,"white",.4),n=this.bgSrc&&`url("${this.bgSrc}")`,r=Xr({stylized:e,active:this.active,pressed:this.pressed}),o=be({"--pointer-events":this.disabled||this.ghostDisabled?"none":"all","--border":`${this.border}px`,"--bg":null!=n?n:t,"--bg-hover":null!=n?n:Yr(t,"white",.2),"--bg-active":null!=n?n:Yr(t,"black",.2),"--text-border":Qr(this.textBorder)}),i=N`
			${Lr(e,(()=>N`
					<div id="highlight"></div>
				`))}
			<div id="content">
				<slot></slot>
			</div>
		`;return this.href?N`<a
				id="base"
				class=${r}
				style=${o}
				href=${this.href}
				target="_blank"
				@pointerdown=${this.onPointerDown.bind(this)}
				@pointerup=${this.onPointerUp.bind(this)}
				@pointercancel=${this.onPointerCancel.bind(this)}
				@pointerleave=${this.onPointerCancel.bind(this)}
				>${i}</a
			>`:N`<div
				id="base"
				class=${r}
				style=${o}
				@pointerdown=${this.onPointerDown.bind(this)}
				@pointerup=${this.onPointerUp.bind(this)}
				@pointercancel=${this.onPointerCancel.bind(this)}
				@pointerleave=${this.onPointerCancel.bind(this)}
			>
				${i}
			</div>`}};ro.styles=no,to([fe()],ro.prototype,"trigger",void 0),to([fe()],ro.prototype,"change",void 0),to([fe()],ro.prototype,"href",void 0),to([fe()],ro.prototype,"active",void 0),to([fe()],ro.prototype,"pressed",void 0),to([fe({type:Boolean,attribute:"disabled"})],ro.prototype,"disabled",void 0),to([fe({type:Boolean,attribute:"ghost-disabled"})],ro.prototype,"ghostDisabled",void 0),to([fe()],ro.prototype,"bg",void 0),to([fe({attribute:"bg-src"})],ro.prototype,"bgSrc",void 0),to([fe()],ro.prototype,"border",void 0),to([fe({attribute:"text-border"})],ro.prototype,"textBorder",void 0),to([fe({type:Boolean,attribute:"plain"})],ro.prototype,"plain",void 0),ro=to([le("d-button")],ro);class oo extends ve{constructor(e){if(super(e),this.et=H,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===H||null==e)return this.ft=void 0,this.et=e;if(e===D)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}oo.directiveName="unsafeHTML",oo.resultType=1;const io=me(oo);var ao=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const so=/(.*)<path d="(.*)"\/>(.*)/gm,co=s`
	#icon {
		width: var(--size);
		height: var(--size);
	}

	#icon svg {
		overflow: visible;
		width: var(--size);
		height: var(--size);
	}

	#icon svg #bg {
		stroke: black;
		stroke-width: var(--stroke-width);
	}

	#icon svg #fg {
		fill: white;
	}
`;let uo=class extends ce{constructor(){super(...arguments),this.icon=n(5570),this.size=16,this.border=1}render(){let e=this.icon.replace(so,'$1<path id="bg" d="$2"/><path id="fg" d="$2"/>$3'),t=2*this.border/this.size*512,n=be({"--size":`${this.size.toFixed(2)}px`,"--stroke-width":`${t.toFixed(2)}px`});return N`<div id="icon" style=${n}>${io(e)}</div>`}};uo.styles=co,ao([fe()],uo.prototype,"icon",void 0),ao([fe({type:Number})],uo.prototype,"size",void 0),ao([fe({type:Number})],uo.prototype,"border",void 0),uo=ao([le("d-icon")],uo);var lo=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const fo=s`
	:host {
		font-size: 32px;
	}

	#base {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		overflow: hidden;
		pointer-events: all;
	}

	#content {
		flex: 1 1 auto;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		min-width: 0;
	}

	#content #link {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	#content #avatar {
		width: var(--avatar-size, 48px);
		height: var(--avatar-size, 48px);
		margin-right: calc(var(--avatar-size, 48px) * 0.2);
		border-radius: 20%;
	}

	#content #description {
		display: flex;
		flex-direction: column;
	}

	#content #description #name {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0;
		overflow-wrap: anywhere;

		color: var(--color, #ececec);
		font-weight: 600;
		font-size: inherit;
		text-shadow: var(--text-border);
	}

	#content #nickname {
		margin: 0;
		overflow-wrap: anywhere;

		color: var(--color, #ececec);
		font-weight: 600;
		font-size: 0.7em;
		text-shadow: var(--text-border);
	}

	#base.no-wrap #content #description #name {
		/*TODO: Figure out how to overflow with flexbox instead*/
		display: block;
		overflow: hidden;
		min-width: 0;
		align-items: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	#content #description #name #number {
		flex: 0 0 auto;
		opacity: 0.8;
	}

	[name='actions']::slotted(*) {
		flex: 0 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 11px;
	}
`;let po=class extends ce{constructor(){super(...arguments),this.noWrap=!1}render(){let e=("0000"+this.identity.accountNumber).slice(-4),t=Xr({"no-wrap":this.noWrap});return N`<div id="base" class=${t}>
			<div id="content">
				<a
					id="link"
					href=${this.identity.external.profile}
					target="_blank"
				></a>
				<img id="avatar" src=${this.identity.avatarUrl} />
				<div id="description">
					<h1 id="name">
						<span>${this.identity.displayName}</span
						><span id="number">#${e}</span>
					</h1>
					${Lr(""!==this.nickname,(()=>Lr(this.nickname&&this.nickname.trim()!=this.identity.displayName.trim(),(()=>N`<h2 id="nickname">
										${this.nickname}
									</h2>`))),(()=>N`<h2 id="nickname">An unnamed tank</h2>`))}
				</div>
			</div>
			<slot name="actions"></slot>
		</div>`}};po.styles=fo,lo([fe({type:Object})],po.prototype,"identity",void 0),lo([fe({type:Boolean,attribute:"no-wrap"})],po.prototype,"noWrap",void 0),lo([fe({type:String,attribute:"nickname"})],po.prototype,"nickname",void 0),po=lo([le("d-identity-tile")],po);class ho{constructor(e,t,n,r){this.baseElement=e,this.buttonElement=t,this.dragStart=null,this.touchId=null,this.active=!1,this.value={x:0,y:0};let o=this;function i(e){o.active=!0,t.style.transition="0s",e.preventDefault(),e.changedTouches?o.dragStart={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:o.dragStart={x:e.clientX,y:e.clientY},e.changedTouches&&(o.touchId=e.changedTouches[0].identifier)}function a(e){if(!o.active)return;e.preventDefault();let i=null;if(e.changedTouches){for(let t=0;t<e.changedTouches.length;t++)o.touchId==e.changedTouches[t].identifier&&(i=t,e.clientX=e.changedTouches[t].clientX,e.clientY=e.changedTouches[t].clientY);if(null==i)return}const a=e.clientX-o.dragStart.x,s=e.clientY-o.dragStart.y,c=Math.atan2(s,a),u=Math.min(n,Math.hypot(a,s)),l=u*Math.cos(c),d=u*Math.sin(c);t.style.transform=`translate3d(${l}px, ${d}px, 0px)`;const f=u<r?0:n/(n-r)*(u-r),p=f*Math.cos(c),h=f*Math.sin(c),m=parseFloat((p/n).toFixed(4)),v=parseFloat((h/n).toFixed(4));o.value={x:m,y:v}}function s(e){o.active&&(e.preventDefault(),e.changedTouches&&o.touchId!=e.changedTouches[0].identifier||(t.style.transition=".2s",t.style.transform="translate3d(0px, 0px, 0px)",o.value={x:0,y:0},o.touchId=null,o.active=!1))}t.addEventListener("mousedown",i),t.addEventListener("touchstart",i),document.addEventListener("mousemove",a,{passive:!1}),document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("mouseup",s),document.addEventListener("touchend",s)}setVisible(e){this.baseElement.style.display=e?"block":"none"}}function mo(){return!/android/i.test(navigator.userAgent)}var vo=(window.localStorage.retinaResolution?"true"==window.localStorage.retinaResolution:mo())?window.devicePixelRatio:1,go=document.getElementById("canvas"),yo=!1;function bo(e){e.preventDefault&&e.preventDefault()}function wo(e){bo(e=e||window.event),window.input&&window.input.wheel(e.wheelDelta/-120||e.detail||0)}function _o(){window.input&&window.input.flushInputHooks&&window.input.flushInputHooks()}/firefox/i.test(navigator.userAgent)?document.addEventListener("DOMMouseScroll",wo,!1):document.body.onmousewheel=wo;var xo=null;go.addEventListener("touchstart",(function(e){if(!1!==e.isTrusted&&(_o(),bo(e),window.input))for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];null!=xo&&n.identifier!=xo||(xo=n.identifier,window.input.mouse(n.clientX*vo,n.clientY*vo),window.input.key_down(1))}})),go.ontouchmove=function(e){if(bo(e),window.input)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];n.identifier==xo&&window.input.mouse(n.clientX*vo,n.clientY*vo)}},go.ontouchend=go.ontouchcancel=function(e){if(_o(),bo(e),window.input)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];n.identifier==xo&&(xo=null,window.input.mouse(n.clientX*vo,n.clientY*vo),window.input.key_up(1))}},go.addEventListener("mousemove",(function(e){!1!==e.isTrusted&&(e=e||window.event,window.input&&window.input.mouse(e.clientX*vo,e.clientY*vo))})),go.addEventListener("mousedown",(function(e){!1!==e.isTrusted&&(_o(),e=e||window.event,window.input&&(bo(e),window.focus(),e.which||void 0===e.button||(e.which=1&e.button?1:2&e.button?3:4&e.button?2:0),e.which>=1&&e.which<=3&&window.input.key_down(e.which)))})),go.onmouseup=function(e){!1!==e.isTrusted&&(_o(),e=e||window.event,window.input&&(bo(e),e.which||void 0===e.button||(e.which=1&e.button?1:2&e.button?3:4&e.button?2:0),e.which>=1&&e.which<=3&&window.input.key_up(e.which)))},window.addEventListener("keydown",(function(e){!1!==e.isTrusted&&(_o(),e=e||window.event,window.input&&(e.keyCode>=112&&e.keyCode<=130&&113!=e.keyCode||(window.input.key_down(e.keyCode),9==e.keyCode&&bo(e),Co()||e.ctrlKey||e.metaKey||bo(e))))})),window.addEventListener("keyup",(function(e){!1!==e.isTrusted&&(_o(),e=e||window.event,window.input&&(e.keyCode>=112&&e.keyCode<=130&&113!=e.keyCode||(window.input.key_up(e.keyCode),9==e.keyCode&&bo(e),Co()||e.ctrlKey||e.metaKey||bo(e))))})),go.addEventListener("click",(function(e){!1!==e.isTrusted&&_o()})),window.addEventListener("click",(function(e){!1!==e.isTrusted&&_o()})),go.ondragstart=function(e){bo(e=e||window.event)},window.addEventListener("blur",(function(e){e=e||window.event,window.input&&window.input.blur()})),go.oncontextmenu=function(e){e=e||window.event,window.input&&window.input.prevent_right_click&&!window.input.prevent_right_click()||bo(e)};let So=!1;function Co(){return yo||"D-BASE"==document.activeElement.tagName.toUpperCase()}function Ao(){go.width=window.innerWidth*vo,go.height=window.innerHeight*vo}document.body.addEventListener("touchstart",(()=>{console.log("Received initial touch"),So=!0,Eo()}),{passive:!0,once:!0}),document.body.addEventListener("mousedown",(()=>{So=!1})),window.isUsingTouchDevice=function(){const e=window.navigator.userAgent.toLowerCase();return!!window.gameWrapper||So||e.match(/(android)/)||e.match(/(iemobile)/)||e.match(/iphone/i)||e.match(/ipad/i)||e.match(/ipod/i)||e.match(/blackberry/i)||e.match(/bada/i)},window.setTyping=function(e){yo=e},window.scale=function(e){return e*vo},window.unscale=function(e){return e/vo},window.onerror=function(e,t,n,r,o){if(window.onerror=null,o&&(o=o.toString()),"undefined"!=typeof Uint8Array&&"undefined"!=typeof WebSocket&&"undefined"!=typeof CanvasRenderingContext2D&&document.createElement("canvas").getContext("2d")&&!(null!=t&&-1==t.indexOf("//diep.io")||null!=t&&-1==t.indexOf(".js"))){var i=JSON.stringify({message:e,source:t,lineno:n,colno:r,error:o});null!=t&&setTimeout((function(){prompt("The game crashed, refreshing page to recover from error.\n\nPlease copy and send the following to admins:",JSON.stringify(i)),window.onbeforeunload=null,window.location.reload(!0)}),1e3),null==o&&0==n&&0==r||null!=o&&-1!=o.indexOf("renoTransGloRef")||console.log("Uncaught error: "+i)}},window.onbeforeunload=function(){if(window.input&&window.input.should_prevent_unload&&window.input.should_prevent_unload())return"Are you sure you wanna quit?"},window.addEventListener("gamepadconnected",(function(e){console.log("Gamepad connected: "+e.id)})),window.addEventListener("resize",Ao),Ao();let ko=!1;function Eo(){if(ko)return;ko=!0,document.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1});const e=e=>{const t=document.createElement("div"),n=document.createElement("div");if(t.appendChild(n),document.body.appendChild(t),t.classList.add("diep-native"),t.style.position="absolute",t.style.display="none",t.style.bottom="67px",t.style.width="140px",t.style.height="140px",t.style.backgroundColor="rgba(0, 0, 0, .2)",t.style.borderRadius="50%",t.style.pointerEvents="none",t.style[e]="67px","right"===e){const r=70,o=(e,n)=>{const o=document.createElement("div");o.style.position="absolute",o.style.backgroundColor="rgba(0, 0, 0, .15)",o.style.borderRadius="20px";const i=Math.round(.6*r),a=Math.round(.08*r),s=r-a/2+"px";e?(o.style.width=`${i}px`,o.style.height=`${a}px`,o.style.top=s):(o.style.width=`${a}px`,o.style.height=`${i}px`,o.style.left=s),o.style[n]=`${Math.round(.1*r)}px`,t.appendChild(o)};o(!0,"left"),o(!0,"right"),o(!1,"top"),o(!1,"bottom");const i=document.createElement("div"),a=Math.round(14);i.style.width=`${a}px`,i.style.height=`${a}px`,i.style.left=r-a/2+"px",i.style.top=r-a/2+"px",i.style.position="absolute",i.style.backgroundColor="rgba(0, 0, 0, .15)",i.style.borderRadius="100%",t.appendChild(i),n.setAttribute("id",`${e}-joystick`),n.style.width="74px",n.style.height="74px",n.style.position="absolute"}return n.setAttribute("id",`${e}-joystick`),n.style.pointerEvents="all",n.style.width="74px",n.style.height="74px",n.style.position="absolute",n.style.left="33px",n.style.bottom="33px",n.style.backgroundColor="blue",n.style.backgroundColor="rgba(0, 0, 0, .3)",n.style.borderRadius="50%",new ho(t,n,Math.round(1.8*37),0)};function t(){if(window.input){const[e,t,n,r]=[window.leftJoystick.value.x,window.leftJoystick.value.y,window.rightJoystick.value.x,window.rightJoystick.value.y].map((e=>100*e));window.input.touch_joystick(e,t,n,r)}window.requestAnimationFrame(t)}window.leftJoystick=e("left"),window.rightJoystick=e("right"),setTimeout((()=>{window.requestAnimationFrame(t)}),1e3)}window.isUsingTouchDevice()&&Eo(),n(5035);var Mo=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Lo=["Verifying connection..."];const $o=s`
	#base {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#title {
		font-size: 45px;
		text-shadow: ${eo(3)};
		margin-bottom: 50px;
	}
`;let Po=class extends ce{constructor(){super(...arguments),this.titleText=Lo[Math.floor(Math.random()*Lo.length)]}updated(e){if(e.has("sitekey")){window.turnstile||(Tr.singleton.screen="loading",Tr.singleton.loadingTitle="Cannot Present Captcha",Tr.singleton.loadingSubtitle="Your ad blocker may be preventing us from checking that you're not a bot",Tr.singleton.loadingError=!0),console.log("Rendering captcha",this.sitekey);const e=document.body.querySelector("#captcha-holder");e.style.removeProperty("display");const t=window.turnstile.render(e,{sitekey:this.sitekey,retry:"never",callback:(...n)=>{window.turnstile.remove(t),e.style.setProperty("display","none"),this.callback(...n)},"error-callback":n=>{window.turnstile.remove(t),e.style.setProperty("display","none"),Tr.singleton.screen="loading",Tr.singleton.loadingTitle="Captcha failed",Tr.singleton.loadingSubtitle="Please retry",Tr.singleton.loadingErrorNote="CF "+n,Tr.singleton.loadingError=!0,Tr.singleton.isCaptchaError=!0}})}}render(){return N`
			<div id="base">
				<div id="title">${this.titleText}</div>
			</div>
		`}};function*Ro(e,t){if(void 0!==e){let n=0;for(const r of e)yield t(r,n++)}}Po.styles=$o,Mo([fe()],Po.prototype,"sitekey",void 0),Mo([fe()],Po.prototype,"callback",void 0),Po=Mo([le("d-captcha")],Po);var Oo=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const To=s`
	#base {
		--border-width: 8px;

		position: relative;
		width: var(--size);
		height: var(--size);

		pointer-events: all;
		border-radius: calc(var(--size) / 2);
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.3);
	}

	#highlight {
		position: absolute;
		left: var(--border-width);
		right: var(--border-width);
		top: var(--border-width);
		bottom: var(--border-width);

		overflow: hidden;
		border-radius: calc(var(--size) / 2);
		background: var(--bg);
	}

	#base:not(.max-level):hover #highlight {
		background: var(--bg-hover);
	}

	#base.active #highlight {
		background: var(--bg-active);
	}

	#highlight #shade {
		position: absolute;
		top: 45%;
		width: 100%;
		height: 200%;
		transform: scaleY(0.3);
		transform-origin: top center;

		border-radius: calc(var(--size) / 2);
		background: black;
		opacity: 0.2;
	}

	#base.active #highlight {
		transform: scaleY(-1);
	}

	#base.active #highlight #shade {
		top: 40%;
	}

	.ring {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: visible;
	}

	.max-level .ring {
		animation: ring-rotate 7s linear infinite;
	}

	@keyframes ring-rotate {
		0% {
			transform: translate(-50%, -50%) rotate(0);
		}

		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	#title {
		position: absolute;
		left: var(--border-width);
		right: var(--border-width);
		top: 50%;
		transform: translateY(-50%);

		font-size: 9px;
		text-align: center;
		text-shadow: ${eo(1)};
	}

	#ripple {
		display: none;
		box-sizing: border-box;
		position: absolute;
		left: calc(var(--border-width) * -1);
		right: calc(var(--border-width) * -1);
		top: calc(var(--border-width) * -1);
		bottom: calc(var(--border-width) * -1);

		border-radius: calc((var(--size) + var(--border-width) * 2) / 2);
		border: var(--border-width) solid var(--bg);

		pointer-events: none;
		opacity: 0;
		z-index: 100;
	}

	.touch-animate #ripple {
		display: block;
		animation: ripple-out 0.5s cubic-bezier(0.33, 1, 0.68, 1) 1;
	}

	@keyframes ripple-out {
		0% {
			opacity: 1;
		}

		100% {
			transform: scale(2);
			border-width: 0;
			opacity: 0;
		}
	}
`;let Fo=class extends ce{constructor(){super(...arguments),this.size=70,this.active=!1,this.touchAnimate=!1,this.touchAnimateTimerId=null}get isMaxLevel(){return this.playerAttribute.slotsFilled>=this.playerAttribute.totalSlots}get ringSize(){return this.size-8}onPointerDown(e){window.gameWrapper&&window.gameWrapper.hapticFeedback("light"),this.isMaxLevel||(this.active=!0)}onPointerUp(e){this.active=!1,!this.isMaxLevel&&this.playerAttribute.slotsFilled<this.playerAttribute.totalSlots&&(window.input.increaseStat(this.playerAttribute.index),this.touchAnimate=!1,setTimeout((()=>this.touchAnimate=!0),0),clearTimeout(this.touchAnimateTimerId),this.touchAnimateTimerId=setTimeout((()=>this.touchAnimate=!1),1e3)),e.preventDefault()}onPointerCancel(e){this.active=!1}render(){let e=Jr(this.playerAttribute.index),t=this.isMaxLevel?Jr(-1):Yr(e,"white",.4),n=Yr(e,"black",.65),r=Yr(e,"white",.4),o=Xr({active:this.active,"touch-animate":this.touchAnimate,"max-level":this.isMaxLevel}),i=be({"--size":`${this.size.toFixed(2)}px`,"--bg":t,"--bg-hover":Yr(t,"white",.2),"--bg-active":Yr(t,"black",.2)});return N`
			<div
				id="base"
				class=${o}
				style=${i}
				@pointerdown=${this.onPointerDown.bind(this)}
				@pointerup=${this.onPointerUp.bind(this)}
				@pointercancel=${this.onPointerCancel.bind(this)}
				@pointerleave=${this.onPointerCancel.bind(this)}
			>
				<div id="highlight"><div id="shade"></div></div>
				<div id="ripple"></div>
				${Ro(function*(e,t,n=1){const r=void 0===t?0:e;null!=t||(t=e);for(let e=r;n>0?e<t:t<e;e+=n)yield e}(this.playerAttribute.totalSlots),(e=>this.renderSegment(e,e<this.playerAttribute.slotsFilled,r,n)))}
				<div id="title">${this.playerAttribute.name}</div>
			</div>
		`}renderSegment(e,t,n,r){let o=Math.PI*this.ringSize,i=8/360*o,a=1/this.playerAttribute.totalSlots*o-2*i,s=o-a,c=`${a.toFixed(2)},${s.toFixed(2)}`,u=-(1/this.playerAttribute.totalSlots*e*o+i);return N`
			<svg
				class="ring"
				width="${this.ringSize}px"
				height="${this.ringSize}px"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="${this.ringSize}px"
					height="${this.ringSize}px"
					fill="none"
					rx="${this.ringSize}"
					ry="${this.ringSize}"
					stroke="${t?n:r}"
					stroke-width="5"
					stroke-dasharray="${c}"
					stroke-dashoffset="${u.toFixed(2)}"
					stroke-linecap="round"
				/>
			</svg>
		`}};Fo.styles=To,Oo([fe()],Fo.prototype,"size",void 0),Oo([fe()],Fo.prototype,"playerAttribute",void 0),Oo([fe()],Fo.prototype,"active",void 0),Oo([fe()],Fo.prototype,"touchAnimate",void 0),Oo([fe()],Fo.prototype,"touchAnimateTimerId",void 0),Fo=Oo([le("d-player-attr")],Fo);var zo=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const Io=s`
	#player-attrs {
		position: absolute;
		bottom: 115px;
		width: 100%;

		transition: bottom 0.3s cubic-bezier(0.33, 1, 0.68, 1);
	}

	#player-attrs.hidden {
		bottom: calc(-85px - var(--sab));
	}

	#points-left {
		transform: rotate(-22deg);
		color: white;
		font-size: 22px;
		width: 0;
		margin-left: 5px;
		text-shadow: ${eo(2)};
	}

	#attr-row {
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		flex-wrap: wrap;
	}

	#attr-row > d-player-attr:not(:first-child) {
		margin-right: 7px;
	}

	#control-buttons {
		position: absolute;
		left: 10px;
		top: 10px;

		display: flex;
		flex-direction: row;

		opacity: 0.8;
	}

	#control-buttons > d-button {
		width: 40px;
		height: 40px;
	}

	#control-buttons > d-button > d-icon {
		width: 15px;
		height: 15px;
	}

	#control-buttons > d-button:not(:last-child) {
		margin-right: 2px;
	}

	#user-list-toggle {
		position: absolute;
		display: block;
		font-size: 16px;

		--padding-top: 3px;
		--padding-bottom: 3px;
		--padding-left: 10px;
		--padding-right: 10px;
	}

	@media (max-height: 648px) {
		#user-list-toggle {
			bottom: 20%;
		}
	}
`;let jo=class extends ce{constructor(){super(...arguments),this.playerCount=0,this.screenSizeZoom=0,this.firingPrimary=!0,this.firingSecondary=!0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown)}toggleFiring(e){0==e&&(this.firingPrimary=!this.firingPrimary),1==e&&(this.firingSecondary=!this.firingSecondary),this.firingPrimary||this.firingSecondary||(0==e&&(this.firingSecondary=!0),1==e&&(this.firingPrimary=!0))}toggleKey(e,t){t?window.input.key_down(e):window.input.key_up(e)}render(){let e=window.isUsingTouchDevice(),t=Tr.singleton.screenSizeZoom/Tr.singleton.uiScreenSizeZoom;return be({bottom:(e?20:200)*t+"px",right:(e?200:20)*t+"px"}),N`${Lr(e,(()=>N`
					<div id="control-buttons">
						<d-button
							bg=${Jr(-1)}
							border="1"
							.pressed=${this.firingPrimary}
							.trigger=${this.toggleFiring.bind(this,0)}
							><d-icon
								icon=${n(2633)}
							></d-icon
						></d-button>
						<d-button
							bg=${Jr(-1)}
							border="1"
							.pressed=${this.firingSecondary}
							.trigger=${this.toggleFiring.bind(this,1)}
							><d-icon
								icon=${n(7969)}
							></d-icon
						></d-button>

						<d-button
							bg=${Jr(-1)}
							border="1"
							.change=${this.toggleKey.bind(this,89)}
							><d-icon
								icon=${n(1804)}
							></d-icon
						></d-button>

						${Lr("dom"==this.selectedGameMode,(()=>N`
								<d-button
									bg=${Jr(-1)}
									border="1"
									.change=${this.toggleKey.bind(this,72)}
									><d-icon
										icon=${n(7213)}
									></d-icon
								></d-button>
							`))}
						${Lr("sandbox"==this.selectedGameMode,(()=>N`
								<d-button
									bg=${Jr(-1)}
									border="1"
									.change=${this.toggleKey.bind(this,75)}
									><d-icon
										icon=${n(3279)}
									></d-icon
								></d-button>
								<d-button
									bg=${Jr(-1)}
									border="1"
									.change=${this.toggleKey.bind(this,79)}
									><d-icon
										icon=${n(6159)}
									></d-icon
								></d-button>
								<d-button
									bg=${Jr(-1)}
									border="1"
									.change=${this.toggleKey.bind(this,186)}
									><d-icon
										icon=${n(4571)}
									></d-icon
								></d-button>
								<d-button
									bg=${Jr(-1)}
									border="1"
									.change=${this.toggleKey.bind(this,220)}
									><d-icon
										icon=${n(4370)}
									></d-icon
								></d-button>
							`))}
					</div>

					<div
						id="player-attrs"
						class=${Xr({hidden:0==this.playerAttributes.pointsLeft})}
					>
						<div id="attr-row">
							<div id="points-left">
								x${this.playerAttributes.pointsLeft}
							</div>
							${Ro(this.playerAttributes.attributes,(e=>N`
									<d-player-attr
										.playerAttribute=${e}
									></d-player-attr>
								`))}
						</div>
					</div>
				`))}`}};jo.styles=Io,zo([fe()],jo.prototype,"selectedGameMode",void 0),zo([fe()],jo.prototype,"playerAttributes",void 0),zo([fe({type:Number})],jo.prototype,"playerCount",void 0),zo([fe({type:Number})],jo.prototype,"screenSizeZoom",void 0),zo([fe()],jo.prototype,"firingPrimary",void 0),zo([fe()],jo.prototype,"firingSecondary",void 0),jo=zo([le("d-game")],jo);const{I:Bo}=oe,Uo=()=>document.createComment(""),No=(e,t,n)=>{var r;const o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(Uo(),i),r=o.insertBefore(Uo(),i);n=new Bo(t,r,e,e.options)}else{const t=n._$AB.nextSibling,a=n._$AM,s=a!==e;if(s){let t;null===(r=n._$AQ)||void 0===r||r.call(n,e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||s){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,i),e=t}}}return n},Do=(e,t,n=e)=>(e._$AI(t,n),e),Ho={},qo=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let n=e._$AA;const r=e._$AB.nextSibling;for(;n!==r;){const e=n.nextSibling;n.remove(),n=e}},Wo=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},Go=me(class extends ve{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}ct(e,t,n){let r;void 0===n?n=t:void 0!==t&&(r=t);const o=[],i=[];let a=0;for(const t of e)o[a]=r?r(t,a):a,i[a]=n(t,a),a++;return{values:i,keys:o}}render(e,t,n){return this.ct(e,t,n).values}update(e,[t,n,r]){var o;const i=e._$AH,{values:a,keys:s}=this.ct(t,n,r);if(!Array.isArray(i))return this.ut=s,a;const c=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],u=[];let l,d,f=0,p=i.length-1,h=0,m=a.length-1;for(;f<=p&&h<=m;)if(null===i[f])f++;else if(null===i[p])p--;else if(c[f]===s[h])u[h]=Do(i[f],a[h]),f++,h++;else if(c[p]===s[m])u[m]=Do(i[p],a[m]),p--,m--;else if(c[f]===s[m])u[m]=Do(i[f],a[m]),No(e,u[m+1],i[f]),f++,m--;else if(c[p]===s[h])u[h]=Do(i[p],a[h]),No(e,i[f],i[p]),p--,h++;else if(void 0===l&&(l=Wo(s,h,m),d=Wo(c,f,p)),l.has(c[f]))if(l.has(c[p])){const t=d.get(s[h]),n=void 0!==t?i[t]:null;if(null===n){const t=No(e,i[f]);Do(t,a[h]),u[h]=t}else u[h]=Do(n,a[h]),No(e,i[f],n),i[t]=null;h++}else qo(i[p]),p--;else qo(i[f]),f++;for(;h<=m;){const t=No(e,u[m+1]);Do(t,a[h]),u[h++]=t}for(;f<=p;){const e=i[f++];null!==e&&qo(e)}return this.ut=s,((e,t=Ho)=>{e._$AH=t})(e,u),D}});var Vo,Ko=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};!function(e){e[e.GameMode=0]="GameMode",e[e.Region=1]="Region"}(Vo||(Vo={}));const Yo={ffa:n(5040),survival:n(6114),teams:n(8125),"4teams":n(8125),moba:n(8125),dom:n(522),tag:n(9207),ships:n(389),maze:n(9345),sandbox:n(6830),event:n(3865)},Xo=864e5,Zo=[{id:"ships",name:"Mothership"},{id:"tag",name:"Tag"},{id:"ships",name:"Mothership"},{id:"dom",name:"Domination"}],Jo=s`
	.icon.flag {
		border-radius: calc(var(--icon-size) / 4);
		background-size: cover;
		background-position: center;
		border: 2px solid black;
	}

	/* Menu */
	#menu {
		--option-spacing: 20px;

		position: absolute;
		left: 50%;
		width: 100%;
		transform: translateX(-50%);

		justify-content: center;
	}

	#menu-grid {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
	}

	#menu-grid > .option {
		margin-bottom: var(--option-spacing);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#menu-grid > .option:not(:nth-child(4n)):not(:last-child) {
		margin-right: var(--option-spacing);
	}

	#menu-grid > .option .title {
		margin-bottom: 5px;

		font-size: 18px;
		text-shadow: ${eo(2)};
	}

	#menu-grid > .option d-button {
		width: 230px;
		height: 60px;
	}

	#menu-grid .option-body {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-size: 26px;
	}

	#menu-grid .option-body .icon {
		--icon-size: 26px;
		margin-left: 11px;
		width: var(--icon-size);
		height: var(--icon-size);
		border-width: 3px;
	}

	#menu-grid .option-body .label {
		flex: 1 0;
		text-align: center;
		text-shadow: ${eo(2)};
	}

	/* Submenu */
	#submenu {
		--option-width: 160px;
		--option-height: 50px;
		--option-spacing: 5px;

		position: absolute;
		left: 50%;
		width: calc((var(--option-width) + var(--option-spacing)) * 3);
		transform: translateX(-50%);
	}

	#submenu-title {
		height: 32px;
		font-size: 20px;
		text-shadow: ${eo(2)};
		text-align: center;
	}

	#submenu-grid {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	#submenu-grid > .option {
		width: var(--option-width);
		height: var(--option-height);
		margin-bottom: var(--option-spacing);
	}

	#submenu-grid .option-body {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-shadow: ${eo(1.4)};

		font-size: 16px;
	}

	#submenu-grid .option-body .icon {
		--icon-size: 18px;
		margin-left: 8px;
		width: var(--icon-size);
		height: var(--icon-size);
	}

	#submenu-grid .option-body .label {
		flex: 1 0;
		text-align: center;
	}

	#submenu-grid > .option:not(:nth-child(3n)):not(:last-child) {
		margin-right: var(--option-spacing);
	}

	/* Activate Animation */
	/* TODO: Handle touch events */
	.activatable {
		transition: transform 0.2s, opacity 0.2s;
	}

	.activatable:not(.active) {
		opacity: 0;
	}

	.activatable:not(.active) d-button {
		pointer-events: none;
	}

	#menu:not(.active) {
		transform: translateX(-50%) scale(1.3);
	}

	#submenu:not(.active) {
		transform: translateX(-50%) scale(0.7);
	}
`;let Qo=class extends ce{constructor(){super(...arguments),this.selectedGameMode="",this.gameModes=[],this.selectedRegion="",this.regions=[],this.menuGroups=[{id:Vo.GameMode,title:"Game Mode"},{id:Vo.Region,title:"Region"}],this.selectedSubmenu=0,this.showSubmenu=!1}get selectedMenuGroup(){return this.menuGroups[this.selectedSubmenu]}getGroupLabel(e){switch(e){case Vo.GameMode:if("event"===this.selectedGameMode){const e=Zo[Math.floor(Date.now()/Xo)%Zo.length];if(e)return e.name}let e=this.gameModes.find((e=>e.id==this.selectedGameMode));return e?e.name:"";case Vo.Region:let t=this.regions.find((e=>e.id==this.selectedRegion));return t?t.name:""}}getGroupColor(e,t=(e===Vo.GameMode?this.selectedGameMode:this.selectedRegion)){switch(e){case Vo.GameMode:return"#"+this.gameModes.find((e=>e.id==t)).colorRaw.toString(16).padStart(6,"0");case Vo.Region:return Jr(this.regions.findIndex((e=>e.id==t)))}}renderGroupIcon(e){switch(e){case Vo.GameMode:return N`<d-icon
					class="icon"
					.icon=${Yo[this.selectedGameMode]}
					size="26"
					border="2"
				></d-icon>`;case Vo.Region:return"auto"===this.selectedRegion?N`<div></div>`:N`<div
					class="icon flag"
					style=${be({"background-image":`url(${this.regions.find((e=>e.id===this.selectedRegion||"auto"===this.selectedRegion)).icon})`})}
				></div>`}}onSelectSubmenu(e){this.selectedSubmenu=e,this.showSubmenu=!0}onSelectSubmenuOption(e){switch(this.showSubmenu=!1,this.selectedMenuGroup.id){case Vo.GameMode:window.input.setGameMode(this.gameModes[e].id);break;case Vo.Region:window.input.setRegion(this.regions[e].id)}}render(){return N`
			<div id="base">
				<div
					id="menu"
					class=${Xr({activatable:!0,active:!this.showSubmenu})}
				>
					<div id="menu-grid">
						${Go(this.menuGroups,(e=>e.id),((e,t)=>N`
									<div class="option">
										<div class="title">${e.title}</div>
										<d-button
											.bg=${this.getGroupColor(e.id)}
											.ghostDisabled=${this.showSubmenu}
											.trigger=${this.onSelectSubmenu.bind(this,t)}
										>
											<div class="option-body">
												${this.renderGroupIcon(e.id)}
												<div class="label">
													${this.getGroupLabel(e.id)}
												</div>
											</div>
										</d-button>
									</div>
								`))}
					</div>
				</div>

				<div
					id="submenu"
					class=${Xr({activatable:!0,active:this.showSubmenu})}
				>
					<div id="submenu-title">
						${this.selectedMenuGroup.title}
					</div>
					${we(this.selectedMenuGroup.id,[[Vo.GameMode,this.renderGameModeMenu.bind(this)],[Vo.Region,this.renderRegionMenu.bind(this)]])}
				</div>
			</div>
		`}renderGameModeMenu(){return this.renderSubmenuGrid(this.gameModes.map((e=>"event"===e.id?{id:"event",label:Zo[Math.floor(Date.now()/Xo)%Zo.length].name,cssColor:"#"+e.colorRaw.toString(16).padStart(6,"0"),icon:Yo[e.id],flag:!1,pressed:e.id==this.selectedGameMode}:{id:e.id,label:e.name,cssColor:"#"+e.colorRaw.toString(16).padStart(6,"0"),icon:Yo[e.id],flag:!1,pressed:e.id==this.selectedGameMode})))}renderRegionMenu(){return this.renderSubmenuGrid(this.regions.map((e=>({id:e.id,label:e.name,icon:e.icon,flag:!0,pressed:e.id==this.selectedRegion}))))}renderSubmenuGrid(e){return N`
			<div id="submenu-grid">
				${Go(e,(e=>e.id),((e,t)=>{var n;return N`<d-button
							class="option"
							border="4"
							.bg=${null!==(n=e.cssColor)&&void 0!==n?n:Jr(t)}
							.ghostDisabled=${!this.showSubmenu}
							.pressed=${e.pressed}
							.trigger=${this.onSelectSubmenuOption.bind(this,t)}
						>
							<div class="option-body">
								${Lr(e.flag,(()=>N`<div
											class="icon flag"
											style=${be({"background-image":`url(${e.icon})`})}
										></div>`),(()=>N`<d-icon
											class="icon"
											.icon=${e.icon}
											size="18"
										></d-icon>`))}
								<div class="label">${e.label}</div>
							</div>
						</d-button>`}))}
			</div>
		`}};Qo.styles=Jo,Ko([fe()],Qo.prototype,"selectedGameMode",void 0),Ko([fe()],Qo.prototype,"gameModes",void 0),Ko([fe()],Qo.prototype,"selectedRegion",void 0),Ko([fe()],Qo.prototype,"regions",void 0),Ko([fe()],Qo.prototype,"menuGroups",void 0),Ko([fe()],Qo.prototype,"selectedSubmenu",void 0),Ko([fe()],Qo.prototype,"showSubmenu",void 0),Qo=Ko([le("d-menu")],Qo);var ei=n.p+"f902960a94878ee0da67.png",ti=n.p+"f34e9a284a36ff72c6d6.svg",ni=n.p+"cd8dc4a47f9989581bbd.svg",ri=n.p+"d31f74329e8db22ebb06.svg",oi=n.p+"bd71b4c4c295651f1aa9.svg",ii=n.p+"758891189f3856f2a984.svg",ai=n.p+"f1335e1a14bd0fbb3691.svg",si=n.p+"f7c5684bf439414561fb.png";let ci=document.querySelector(":root");function ui(){let e=li("sat")+(window.gameWrapper?window.gameWrapper.insetTop:0),t=li("sab")+(window.gameWrapper?window.gameWrapper.insetBottom:0),n=li("sal")+(window.gameWrapper?window.gameWrapper.insetLeft:0),r=li("sar")+(window.gameWrapper?window.gameWrapper.insetRight:0),o=1920,i=1080;window.innerHeight<480&&(o=1400,i=800);let a=Math.max(window.innerWidth/o,window.innerHeight/i);a*=parseFloat(localStorage.uiScale||1),a=Math.floor(25*a)/25,Tr.singleton&&(Tr.singleton.uiScreenSizeZoom=a,Tr.singleton.screenSizeZoom=Math.max(window.innerWidth/1920,window.innerHeight/1080),Tr.singleton.width=window.innerWidth/a,Tr.singleton.height=window.innerHeight/a,Tr.singleton.insetWidth=(window.innerWidth-n-r)/a,Tr.singleton.insetHeight=(window.innerHeight-e-t)/a,Tr.singleton.edgeInsets={top:e,bottom:t,left:n,right:r}),ci.style.setProperty("--inset-top",e+"px"),ci.style.setProperty("--inset-bottom",t+"px"),ci.style.setProperty("--inset-left",n+"px"),ci.style.setProperty("--inset-right",r+"px"),ci.style.setProperty("--ssz",a.toFixed(2))}function li(e){let t=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--"+e));return isFinite(t)?t:0}let di=!1,fi=null;const pi=document.querySelector(".aa.left > .single");pi.hidden=!0,pi.style.display="none";let hi=document.querySelector(".ad-1"),mi=document.querySelector(".ad-2"),vi=document.querySelector(".ad-3");const gi=[hi,mi,vi],yi=e=>{e&&(e.hidden=!1,e.style.display="block",e.style.background="rgba(170, 252, 250, 0.3)",e.parentElement&&(e.parentElement.hidden=!1,e.parentElement.style.display="block",e.parentElement.classList.add("active")))},bi=e=>{e&&("crazygames"!==fi?aiptag.cmd.display.push((function(){aipDisplayTag.destroy(e.id)})):window.CrazyGames.SDK.banner.clearBanner(e.id),e.hidden=!0,e.style.display="none",e.parentElement.hidden=!0,e.parentElement.style.display="none",e.parentElement.classList.remove("active"))},wi=()=>{document.querySelectorAll(".aa_main.active").forEach((e=>{e.classList.remove("active")}));for(const e of gi)e&&bi(e)};let _i="home";function xi(){const e=[hi,mi,vi];[hi,mi,vi]=gi,Si();const t=[hi,mi,vi];for(let n=0;n<gi.length;++n)e[n]&&!t[n]?bi(e[n]):(yi(t[n]),ki(t[n],!1))}window.addEventListener("resize",(()=>xi())),wi();const Si=()=>{"adinplay"===fi?(hi=window.innerWidth>850&&window.innerHeight>500?hi:null,mi=window.innerHeight>800&&hi?mi:null,vi=window.innerHeight>500&&window.innerWidth>800?vi:null):(hi=window.innerWidth>850&&window.innerHeight>480?hi:null,mi=window.innerHeight>800&&hi?mi:null,vi=window.innerHeight>480&&window.innerWidth>800?vi:null),"crazygames"===fi&&hi&&vi&&(mi=null),hi&&yi(hi),mi&&yi(mi),vi&&yi(vi)},Ci={onreward:null,oncancel:null,onerror:null,onstart:null,ondestroy:null},Ai={small:{width:300,height:250},wide:{width:320,height:100},tall:{width:300,height:600}},ki=(e,t=!1)=>{if(di&&e){if(!e.id)return console.error("Expected ad id, param should be element",e);switch(yi(e),fi){case"adinplay":{const t=e.id.split("_")[1].split("x").map((e=>e-0));e.style.width=t[0]+"px",e.style.height=t[1]+"px",aiptag.cmd.display.push((function(){aipDisplayTag.display(e.id)}))}break;case"crazygames":{if(t&&Date.now()-e.lastRefresh<6e4)return;const n=e.parentNode.classList.contains("bottom"),r=n?"wide":"small";e.lastRefresh=Date.now(),e.style.display="block",window.CrazyGames.SDK.banner.requestBanner({id:e.id,...Ai[r]}),n&&(e.style.marginTop=(240-Ai.wide.height)/2+"px")}}}},Ei=(e=!0)=>{hi&&ki(hi,e),mi&&ki(mi,e),vi&&ki(vi,e)};let Mi=-1;const Li=e=>{try{if(!di)return;_i!==e&&"crazygames"===fi&&("ingame"===e?window.CrazyGames.SDK.game.gameplayStart():window.CrazyGames.SDK.game.gameplayStop()),"ingame"===e?(-1!==Mi&&(clearInterval(Mi),Mi=-1),wi()):"ingame"===_i&&(document.querySelectorAll(".aa_main").forEach((e=>{e.classList.add("active")})),Ei(!1),Mi=setInterval(Ei,60500)),_i=e}catch{console.warn("Troubles loading ads"),clearInterval(Mi)}};window.__copyPartyLink=e=>{"crazygames"===fi?window.CrazyGames.SDK.game.inviteLink({p:e},((e,t)=>{e?alert("Error in copying link"):window.copyToKeyboard(t)})):window.copyToKeyboard(location.origin+"?p="+e)},window.__renderAds=e=>{window.__renderAds._last=e};const $i=()=>fi||"none",Pi=()=>{window.input.hardResetLB()};var Ri=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const Oi=[{imgSrc:ri,color:"#FF0000",url:"https://www.youtube.com/channel/UCzgAvfjeakujhsn98iPlVdw?sub_confirmation=1"},{imgSrc:oi,color:"#FA005A",url:"https://diepio.gamepedia.com/Diep.io_Wiki"},{imgSrc:ii,color:"#5865F2",url:"https://discord.gg/vJVqhTf"},{imgSrc:ai,color:"#FF4500",url:"https://www.reddit.com/r/diepio/"}];var Ti;n(3664),function(e){e[e.Default=0]="Default",e[e.Settings=1]="Settings",e[e.Support=2]="Support"}(Ti||(Ti={}));const Fi=s`
	d-menu {
		position: absolute;
		width: 100%;
		top: 20px;

		animation: menu-intro 1s cubic-bezier(0.25, 1, 0.5, 1) 0;
		animation-iteration-count: 1;

		transition: top 0.2s;
	}

	d-menu.hide {
		top: -90px;
	}

	@keyframes menu-intro {
		0% {
			top: -90px;
		}
		100% {
			top: 20px;
		}
	}

	#username {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		animation: username-intro 1s cubic-bezier(0.25, 1, 0.5, 1) 0;
		animation-iteration-count: 1;

		transition: top 0.2s;
	}

	#logo {
		position: relative;
		height: 145px;
		margin-bottom: 25px;

		opacity: 1;
		overflow: visible;
		background: red;

		transition: height 0.2s, margin-bottom 0.2s, opacity 0.2s;
	}

	#logo #logo-inner {
		position: absolute;
		height: 145px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	#username.keyboard-shift {
		top: 25%;
	}

	#username.keyboard-shift #logo {
		height: 0;
		margin-bottom: 0;
		opacity: 0;
	}

	@keyframes button-intro {
		0% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(0.5);
		}
		100% {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
	}

	#username-intro {
		text-align: center;
		font-size: 26px;
		margin-bottom: 5px;
		text-shadow: ${eo(2)};
	}

	#username-spawn-level {
		text-align: center;
		font-size: 18px;
		margin-top: 5px;
		text-shadow: ${eo(1)};
	}

	#username-row {
		height: 56px;

		display: flex;
		flex-direction: row;
	}

	#username-row #username-input {
		width: 300px;
		margin: 0 10px 0 0;
		margin-right: 10px;
		font-family: Ubuntu;

		padding: 0;
		border: 5px solid black;
		outline: none;

		font-size: 46px;
		line-height: 45px;
		pointer-events: all;

		animation-duration: 0.15s;
		animation-iteration-count: 1;
		animation-timing-function: linear;
	}

	#username-row #username-input:focus {
		animation-name: username-input-focus;
	}

	@keyframes username-input-focus {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	#username-row d-button {
		width: 100px;
		font-size: 26px;
	}

	#page-blocker {
		position: absolute;
		left: calc(var(--inset-left) / var(--ssz) * -1);
		right: calc(var(--inset-right) / var(--ssz) * -1);
		top: calc(var(--inset-top) / var(--ssz) * -1);
		bottom: calc(var(--inset-bottom) / var(--ssz) * -1);
		pointer-events: all;

		background: rgba(0, 0, 0, 0.25);
		z-index: 10;
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 350px;
		transform: translate(-50%, -50%);
		padding: 12px;

		border-radius: 10px;
		background: #333333;
		border: 2px solid #282828;

		z-index: 20;

		animation: modal-intro 0.2s cubic-bezier(0.25, 1, 0.5, 1) 0;
		animation-iteration-count: 1;
	}

	.modal > h1 {
		text-align: center;
		margin-top: 0;
		margin-bottom: 15px;
		text-shadow: ${eo(2)};
	}

	.modal > #requires-reload {
		margin-bottom: 15px;
	}

	@keyframes modal-intro {
		0% {
			transform: translate(-50%, -50%) scale(0.5);
			opacity: 0;
		}
		100% {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}

	#settings {
		display: flex;
		flex-direction: column;

		pointer-events: all;
	}

	#settings-items {
		margin-bottom: 10px;
	}

	#settings .settings-item {
		height: 52px;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	#settings .settings-item .title {
		flex: 1;
		font-weight: bold;
		margin-left: 5px;
		font-size: 20px;
	}

	#settings .settings-item .value {
		margin-right: 10px;
		text-align: right;
	}

	#settings .settings-item .bool {
		width: 80px;
		height: 38px;
		margin-left: 4px;
	}

	#settings .settings-item .plus,
	#settings .settings-item .minus {
		width: 38px;
		height: 38px;
		margin-left: 4px;
	}

	#settings > d-button {
		--padding-top: 6px;
		--padding-bottom: 6px;
		--padding-left: 0;
		--padding-right: 6px;

		font-size: 18px;
	}

	#settings > d-button:not(:last-child) {
		margin-bottom: 10px;
	}

	#support {
		display: flex;
		flex-direction: column;

		pointer-events: all;
	}

	#support > d-button {
		--padding-top: 6px;
		--padding-bottom: 6px;
		--padding-left: 0;
		--padding-right: 6px;

		font-size: 18px;
	}

	#support > d-button:not(:last-child) {
		margin-bottom: 10px;
	}

	#links-bottom-left,
	#links-bottom-right,
	#links-bottom-center {
		position: absolute;
		bottom: 20px;
		z-index: 100;

		display: flex;
		flex-direction: column;
	}

	#links-bottom-left {
		left: 20px;
	}

	#links-bottom-right {
		right: 20px;
		align-items: flex-end;
	}

	#links-bottom-center {
		width: 100%;
		left: 50%;
		align-items: center;
		transform: translateX(-50%);
	}

	#identity {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		left: 18px;
		top: 18px;
		z-index: 100;
	}

	#identity d-identity-tile {
		margin-bottom: 10px;
		font-size: 28px;
		--avatar-size: 40px;
	}

	#identity #register {
		font-size: 18px;
		--padding-top: 6px;
		--padding-bottom: 6px;
		--padding-left: 16px;
		--padding-right: 16px;
	}

	#identity #friends {
		display: block;
		margin-bottom: 9px;
		--padding-top: 9px;
		--padding-bottom: 8px;
		--padding-left: 20px;
		--padding-right: 20px;
	}

	#identity #friends .button-body {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-size: 18px;
	}

	#identity #friends .button-body .icon {
		--icon-size: 18px;
		margin-right: 11px;
		width: var(--icon-size);
		height: var(--icon-size);
		border-width: 2px;
	}

	#identity #friends .button-body .label {
		flex: 1 0;
		text-align: center;
		text-shadow: ${eo(1)};
	}

	#announcement {
		--highlight-opacity: 0.05;

		margin-bottom: 10px;
		margin-left: -100px;
		width: 303px;
		height: 65px;
	}

	#announcement #content {
		background: url('${a(si)}');
		background-size: contain;
	}

	#updated {
		font-size: 24px;
		margin-bottom: 12px;
		text-shadow: ${eo(2)};
	}

	.link-list {
		--padding-top: 6px;
		--padding-bottom: 6px;
		--padding-left: 16px;
		--padding-right: 16px;

		display: flex;
		flex-direction: row;

		font-size: 18px;
	}

	.link-list > *:not(:last-child) {
		margin-right: 8px;
	}

	.link-list > .store-icon {
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;

		pointer-events: all;
	}

	#social-links > .social-icon {
		--padding: 0;

		width: 50px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	#social-links > .social-icon img {
		height: 20px;
		width: auto;
	}

	#social-links > .icon-button {
		width: 55px;
	}

	@media (max-height: 960px) {
		#links-bottom-left.shift-for-ads {
			left: 320px;
		}
	}
`;let zi=class extends ce{constructor(){super(...arguments),this.username="",this.spawnLevel=0,this.selectedGameMode="",this.gameModes=[],this.selectedRegion="",this.regions=[],this.usernameFocused=!1,this.page=Ti.Default,this.settingsShowReload=!1,this.showingInterstitialAd=!1}firstUpdated(){window.gameWrapper||window.isUsingTouchDevice()||this.usernameInput.focus()}connectedCallback(){super.connectedCallback(),window.gameWrapper&&window.gameWrapper.showBannerAd("banner")}disconnectedCallback(){super.disconnectedCallback()}onSpawn(){if(window.gameWrapper){let e=Date.now(),t=localStorage.lastInterstitialAdShowTs&&parseInt(localStorage.lastInterstitialAdShowTs);!t||e-t>15e4?(localStorage.lastInterstitialAdShowTs=e,console.log("Showing interstitial ad"),this.showingInterstitialAd=!0,window.gameWrapper.showInterstitialAd("interstitial",(()=>{this.showingInterstitialAd=!1,this.spawnComplete()}))):this.spawnComplete()}else"crazygames"===$i()&&window.CrazyGames?(this.showingInterstitialAd=!0,window.CrazyGames.SDK.ad.requestAd("midgame",{adFinished:()=>{this.showingInterstitialAd=!1,this.spawnComplete()},adError:e=>{console.warn(e),this.showingInterstitialAd=!1,this.spawnComplete()},adStarted:()=>{}})):this.spawnComplete()}spawnComplete(){console.log("Spawn complete"),this.showingInterstitialAd=!1,window.input.try_spawn(this.usernameInput.value||""),(new Image).src="https://sb.scorecardresearch.com/p?c1=2&c2=22419751&cv=3.6.0&cj=1",fetch(`${window.location.protocol}//${Tr.singleton.host}/pv`,{}).catch((()=>{}))}onKeyDown(e){"Enter"==e.key&&(this.onSpawn(),e.preventDefault())}resetSettings(){for(let e of Ii)"bool"in e.kind?(localStorage[e.key]=e.kind.bool.default,e.kind.bool.onChange(e.kind.bool.default)):"number"in e.kind&&(localStorage[e.key]=e.kind.number.default,e.kind.number.onChange(e.kind.number.default));this.settingsShowReload=!1,this.requestUpdate()}render(){let e=window.gameWrapper&&this.usernameFocused;return N`
			<d-menu
				style="z-index: 999"
				class=${Xr({hide:e})}
				.selectedGameMode=${this.selectedGameMode}
				.gameModes=${this.gameModes}
				.selectedRegion=${this.selectedRegion}
				.regions=${this.regions}
			></d-menu>

			<div id="links-bottom-left">
				${Lr(!window.gameWrapper&&"crazygames"!==$i(),(()=>{const e=1/11;return N`
							<div class="link-list" style="margin-bottom: 0.5vh">
								<d-button
									href="https://www.shockwave.com/"
									style="width: ${`calc(327vw * ${e})`};
										height: ${`calc(29vw * ${e})`};
										max-width: ${425.1}px;
										max-height: ${37.7}px;

										background-size: auto auto;
										background-image: url(${ni})"
									plain
								></d-button>
							</div>
						`}))}
			</div>

			<div
				id="links-bottom-center"
				class=${Xr({"shift-for-ads":!window.gameWrapper})}
			>
				${Lr(!window.gameWrapper,(()=>N`
						<div
							id="store-links"
							class="link-list"
							style="margin-bottom: 9vh"
						>
							<d-button
								class="store-icon"
								href="https://play.google.com/store/apps/details?id=com.miniclip.diep.io"
								style="width: 161px; height: 62px; margin: -10px -10px; margin-right: 2px; background-image: url(${ei})"
								plain
							></d-button>
							<d-button
								class="store-icon"
								href="https://itunes.apple.com/app/diep.io/id1114751883?mt=8&at=1l3vajp"
								style="width: 145px; height: 42px; background-image: url(${ti})"
								plain
							></d-button>
						</div>
					`))}
			</div>

			<div
				id=${window.gameWrapper?"links-bottom-center":"links-bottom-right"}
			>
				<d-button
					id="announcement"
					href="${"crazygames"===$i()?"https://www.crazygames.com/game/apes-io":"https://apes.io/promo/ynpmjv"}"
					bg-src="${si}"
				></d-button>
				<div id="updated">Updated Apr 16, 2024</div>
				<div id="social-links" class="link-list">
					<d-button
						class="icon-button"
						bg=${Jr(-1)}
						.trigger=${()=>this.page=Ti.Support}
						>?</d-button
					>
					<d-button
						class="icon-button"
						bg=${Jr(-1)}
						.trigger=${()=>this.page=Ti.Settings}
						><d-icon
							.icon=${n(6608)}
						></d-icon
					></d-button>
					<d-button href="changelog.html" bg=${Jr(0)}
						>Changelog</d-button
					>
					<d-button
						href="${"crazygames"===$i()?"https://www.crazygames.com/c/io":"https://iogames.space"}"
						bg=${Jr(1)}
						>io games</d-button
					>
					<d-button
						bg=${Jr(2)}
						href="https://shop.shockwave.com/collections/diep-io"
						>Merch</d-button
					>
					${Go(Oi,(e=>N`
							<d-button
								.href=${e.url}
								class="social-icon"
								.bg=${e.color}
								><img src="${e.imgSrc}"
							/></d-button>
						`))}
				</div>
			</div>

			${Lr(this.page!=Ti.Default,(()=>N`<div id="page-blocker"></div>`))}
			${we(this.page,[[Ti.Default,this.renderUsername.bind(this,e)],[Ti.Support,this.renderSupport.bind(this)],[Ti.Settings,this.renderSettings.bind(this)]])}
		`}renderUsername(e){return N`
			<div
				id="username"
				class=${Xr({"keyboard-shift":e})}
			>
				<div id="logo">
					<img
						id="logo-inner"
						src=${n(9580)}
					/>
				</div>
				<div id="username-intro">This is the tale of...</div>
				<div id="username-row">
					<input
						id="username-input"
						type="text"
						maxlength=${15}
						.value=${this.username}
						@pointerdown=${()=>this.usernameInput.focus()}
						@keydown=${this.onKeyDown.bind(this)}
						@focus=${()=>this.usernameFocused=!0}
						@blur=${()=>this.usernameFocused=!1}
					/>
					<d-button
						.bg=${this.showingInterstitialAd?Jr(-1):Jr(0)}
						text-border="2"
						.trigger=${this.onSpawn.bind(this)}
						>${this.showingInterstitialAd?"Please wait...":"Play"}
					</d-button>
				</div>
				${Lr(this.spawnLevel>1,(()=>N`<div id="username-spawn-level">
							You will spawn at level ${this.spawnLevel}
						</div>`))}${Lr(this.spawnLevel<1,(()=>N`<div id="username-spawn-level">
							Notice: Accounts will be back soon!
						</div>`))}
			</div>
		`}renderSupport(){return N`
			<div id="support" class="modal">
				<h1>Support</h1>
				<d-button href="tos.html" bg=${Jr(-1)}
					>Terms of Service</d-button
				>
				<d-button href="pp.html" bg=${Jr(-1)}
					>Privacy Policy</d-button
				>
				<d-button
					href="https://shockwavehelp.zendesk.com/hc/en-us/requests/new"
					bg=${Jr(-1)}
					>Support Request</d-button
				>
				<d-button
					bg=${Jr(2)}
					.trigger=${()=>this.page=Ti.Default}
					>Close</d-button
				>
			</div>
		`}renderSettings(){return N`
			<div id="settings" class="modal">
				<h1>Settings</h1>
				<div id="settings-items">
					${Go(Ii,(e=>e.key),(e=>this.renderSettingEntry(e)))}
				</div>
				<div id="requires-reload">* = requires reload</div>
				<d-button
					bg=${Jr(-1)}
					.trigger=${this.resetSettings.bind(this)}
					>Reset</d-button
				>
				${this.settingsShowReload?N`<d-button
							bg=${Jr(2)}
							.trigger=${()=>Pi()}
							>Reload</d-button
					  >`:null}
				<d-button
					bg=${Jr(2)}
					.trigger=${()=>{this.settingsShowReload=!1,this.page=Ti.Default}}
					>Close</d-button
				>
			</div>
		`}renderSettingEntry(e){return N`
			<div class="settings-item">
				<div class="title">
					${e.title}${e.requiresReload?"*":""}
				</div>
				${Lr("bool"in e.kind,(()=>this.renderSettingEntryBool(e)))}
				${Lr("number"in e.kind,(()=>this.renderSettingEntryNumber(e)))}
			</div>
		`}renderSettingEntryBool(e){let t=e.kind.bool,n="true"==(localStorage[e.key]||t.default.toString());return N`
			<d-button
				class="bool"
				border="4"
				.bg=${Jr(n?0:-1)}
				.trigger=${()=>{e.requiresReload&&(this.settingsShowReload=!0);let r=!n;localStorage[e.key]=r.toString(),t.onChange(r),this.requestUpdate()}}
				>${n?"ON":"OFF"}</d-button
			>
		`}renderSettingEntryNumber(e){let t=e.kind.number,n=parseFloat(localStorage[e.key]||t.default),r=Math.round(n/t.interval)*t.interval;return N`
			<div class="value">${r.toFixed(t.toFixed)}</div>
			<d-button
				class="minus"
				border="4"
				.trigger=${()=>{e.requiresReload&&(this.settingsShowReload=!0);let n=Math.max(r-t.interval,t.min);localStorage[e.key]=n,t.onChange(n),this.requestUpdate()}}
				>-</d-button
			>
			<d-button
				class="plus"
				border="4"
				.trigger=${()=>{e.requiresReload&&(this.settingsShowReload=!0);let n=Math.min(r+t.interval,t.max);localStorage[e.key]=n,t.onChange(n),this.requestUpdate()}}
				>+</d-button
			>
		`}};zi.styles=Fi,Ri([fe()],zi.prototype,"username",void 0),Ri([fe()],zi.prototype,"spawnLevel",void 0),Ri([fe()],zi.prototype,"selectedGameMode",void 0),Ri([fe()],zi.prototype,"gameModes",void 0),Ri([fe()],zi.prototype,"selectedRegion",void 0),Ri([fe()],zi.prototype,"regions",void 0),Ri([fe()],zi.prototype,"usernameFocused",void 0),Ri([fe()],zi.prototype,"page",void 0),Ri([pe("#username-input")],zi.prototype,"usernameInput",void 0),Ri([fe()],zi.prototype,"settingsShowReload",void 0),Ri([fe({type:Boolean})],zi.prototype,"showingInterstitialAd",void 0),zi=Ri([le("d-home")],zi);const Ii=[{title:"Retina Resolution",requiresReload:!0,key:"retinaResolution",kind:{bool:{default:mo(),onChange(){}}}},{title:"UI Scale",key:"uiScale",kind:{number:{default:1,interval:.1,min:.2,max:5,toFixed:1,onChange(){ui()}}}}];var ji=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const Bi=s`
	d-menu {
		position: absolute;
		width: 100%;
		top: 20px;

		animation: menu-intro 1s cubic-bezier(0.25, 1, 0.5, 1) 0;
		animation-iteration-count: 1;

		transition: top 0.2s;
	}

	d-menu.hide {
		top: -90px;
	}

	#base {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#title {
		font-size: 45px;
		text-shadow: ${eo(3)};
	}

	#title > span {
		position: relative;
		display: inline-block;
		animation: bounce 2s infinite;
	}

	#subtitle {
		margin-top: 20px;
		font-size: 25px;
		white-space: pre-line;
		text-shadow: ${eo(1)};
		max-width: 500px;
		text-align: center;
	}

	#loading-error {
		font-size: 20px;
		white-space: pre-line;
		text-shadow: ${eo(1)};
		text-align: center;
	}

	#actions {
		display: flex;
		flex-direction: row;
		margin-top: 16px;
	}

	#actions d-button {
		--padding: 8px 16px;

		font-size: 20px;
	}

	#actions d-button:not(:last-child) {
		margin-right: 10px;
	}

	@keyframes bounce {
		0%,
		40%,
		100% {
			transform: none;
		}
		20% {
			transform: translateY(-15px);
		}
	}
`;let Ui=class extends ce{constructor(){super(...arguments),this.selectedGameMode="",this.gameModes=[],this.selectedRegion="",this.regions=[],this.loadingTitle="",this.loadingSubtitle="",this.loadingErrorNote="",this.loadingError=!1,this.isCaptchaError=!1}tryAgain(){Pi()}render(){let e=[];for(let t=0;t<20;t++){let n=(.1*t).toFixed(2),r=this.loadingTitle.charAt(t),o=t>=this.loadingTitle.length,i=0==r.replace(/\s*/g,"").length,a=be({"animation-delay":`${n}s`,width:o?"0":null,opacity:o?"0":"1"});e.push(N`<span style=${a}
					>${Lr(i,(()=>N`&nbsp;`),(()=>N`${r}`))}</span
				>`)}return N`
			${Lr(this.gameModes.length&&this.regions.length,(()=>N`<d-menu
					style="z-index: 999"
					class=${Xr({hide:!1})}
					.selectedGameMode=${this.selectedGameMode}
					.gameModes=${this.gameModes}
					.selectedRegion=${this.selectedRegion}
					.regions=${this.regions}
				></d-menu>`))}
			<div id="base">
				<div id="title">${Ro(e,(e=>e))}</div>
				${Lr(this.loadingSubtitle.length>0,(()=>N`<div id="subtitle">${this.loadingSubtitle}</div>`))}
				${Lr(this.loadingError,(()=>N`
						<div id="actions">
							<d-button
								.bg=${Jr(-1)}
								.trigger=${this.tryAgain.bind(this)}
								>${this.isCaptchaError?"Retry":"Reconnect"}</d-button
							>
							<!-- <d-button .bg=${Jr(-1)} .trigger=${this.tryAgain.bind(this)}>Support</d-button> -->
						</div>
					`))}
				${Lr(this.loadingErrorNote.length>0,(()=>{return N`<div id="loading-error">
						Sounds wrong? If so, send this to our admins:
						${this.isCaptchaError?this.loadingErrorNote:(e=this.loadingErrorNote,e.length?e=(e=btoa(e)).split("").reverse().join(""):"")}
					</div>`;var e}))}
			</div>
		`}};Ui.styles=Bi,ji([fe()],Ui.prototype,"selectedGameMode",void 0),ji([fe()],Ui.prototype,"gameModes",void 0),ji([fe()],Ui.prototype,"selectedRegion",void 0),ji([fe()],Ui.prototype,"regions",void 0),ji([fe()],Ui.prototype,"loadingTitle",void 0),ji([fe()],Ui.prototype,"loadingSubtitle",void 0),ji([fe()],Ui.prototype,"loadingErrorNote",void 0),ji([fe()],Ui.prototype,"loadingError",void 0),ji([fe()],Ui.prototype,"isCaptchaError",void 0),Ui=ji([le("d-loading")],Ui);var Ni=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const Di=s`
	#actions {
		position: absolute;
		left: 50%;
		top: calc(50% + 100px);
		transform: translateX(-50%);

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		animation: button-intro 1.5s cubic-bezier(0.25, 1, 0.5, 1) 0;
		animation-iteration-count: 1;
	}

	#actions d-button {
		width: 150px;
		height: 45px;
	}
	#actions d-button.reward.disabled {
		width: 240px;
		height: 45px;
	}

	#actions d-button:not(:last-child) {
		margin-right: 10px;
	}

	#actions d-button.reward {
		width: 235px;
	}

	@keyframes button-intro {
		0%,
		33% {
			opacity: 0;
			transform: translateX(-50%) scale(0.5);
		}
		100% {
			opacity: 1;
			transform: translateX(-50%);
		}
	}
`;let Hi=class extends ce{constructor(){super(...arguments),this.spawnLevel=0,this.canViewAds=!0,this.gamemodeId="",this.completedReward=!1}firstUpdated(e){super.firstUpdated(e)}onContinue(){window.input.showMenu(),this.completedReward=!1}viewAd(){(({onreward:e,onerror:t,oncancel:n,onstart:r})=>{switch(fi){case"adinplay":{const r=document.body.querySelector(".aa.video");r.classList.add("active");const o=()=>{r.classList.remove("active")},i=e=>()=>(e&&e(),o());Ci.onreward=i(e),Ci.oncancel=i(n),Ci.onerror=i(t),Ci.ondestroy=o,aiptag.cmd.player.push((()=>{aiptag.adplayer.startVideoAd(),aiptag.adplayer.showCloseButton()}))}break;case"crazygames":window.CrazyGames.SDK.ad.requestAd("rewarded",{adFinished:()=>{Li("stats"),e()},adError:()=>{Li("stats"),t()},adStarted:()=>{}})}})({onreward:()=>{this.completedReward=!0,window.input.grantReward(),window.input.showMenu()},onerror:()=>{this.completedReward=!0,window.input.grantReward(),window.input.showMenu()},oncancel:()=>{this.completedReward=!1,window.input.showMenu()}})}render(){const e=Math.floor(1.2*this.spawnLevel)-this.spawnLevel,t=!this.canViewAds,r=this.gamemodeId;return N`
			<div id="actions">
				<d-button
					id="continue"
					.bg=${Jr(0)}
					.trigger=${this.onContinue.bind(this)}
				>
					Continue
				</d-button>
				${Lr(e>0&&"sandbox"!==r,(()=>N`<d-button
						class="reward${this.completedReward||t?" disabled":""}"
						.disabled=${this.completedReward||t}
						.bg=${Jr(t?-1:0)}
						.trigger=${t?null:this.viewAd.bind(this)}
					>
						${Lr(!t&&!this.completedReward,(()=>N`<d-icon style="margin-right: 10px; margin-left: 10px"
							icon=${n(6195)}
						></d-icon>`))}
						${t?"Disable adblocker for bonus":this.completedReward?"Reward received":`Continue with +${e} levels`}
					</d-button>`))}
			</div>
		`}};Hi.styles=Di,Ni([fe(),fe()],Hi.prototype,"spawnLevel",void 0),Ni([fe()],Hi.prototype,"canViewAds",void 0),Ni([fe()],Hi.prototype,"gamemodeId",void 0),Ni([fe()],Hi.prototype,"completedReward",void 0),Hi=Ni([le("d-stats")],Hi);var qi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const Wi=s`
	#base {
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;

		background-color: #55555555;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		pointer-events: all;
	}

	#title {
		font-size: 40px;
		text-align: center;
		margin: 0 0 15px 0;

		text-shadow: ${eo(3)};
	}

	p {
		margin-top: 0;
	}

	textarea {
		width: 450px;
		height: 200px;
		resize: none;
		margin: 10px 0 20px 0;
		padding: 4px 10px;
		outline: none;
		font-size: 16px;
		border: 3px solid #555555;
		border-radius: 6px;
		font-family: Ubuntu;
	}

	#actions {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	#actions d-button {
		--padding-top: 4px;
		--padding-bottom: 4px;
		--padding-left: 16px;
		--padding-right: 16px;

		font-size: 18px;
	}

	#actions d-button:not(:last-child) {
		margin-right: 10px;
	}
`;let Gi,Vi=class extends ce{constructor(){super(...arguments),this.complete=!1,this.requesting=!1}close(){Tr.singleton.toggleReport()}async submit(){this.reportingIdentity?this.requesting||(this.requesting=!0,console.log("Reporting "+this.reportingIdentity.identityId),window.input.report(this.reportingIdentity.identityId,this.reasonInput.value),Tr.singleton.reportedIdentities.add(this.reportingIdentity.identityId),this.complete=!0):console.warn("no report subject")}onInputKeydown(e){e.stopPropagation()}render(){return N`
			<div id="base">
				${Lr(this.complete,this.renderThankYou.bind(this),this.renderReport.bind(this))}
			</div>
		`}renderReport(){return N`<h2 id="title">
				Report
				${this.reportingIdentity?this.reportingIdentity.displayName:"user"}?
			</h2>
			<textarea
				id="reason-input"
				maxlength="300"
				placeholder="Report reason (optional, 300 characters)"
				@keydown=${this.onInputKeydown.bind(this)}
			></textarea>
			<div id="actions">
				<d-button
					bg=${Jr(-1)}
					border="3"
					.trigger=${this.close.bind(this)}
					>Cancel</d-button
				><d-button
					bg=${Jr(2)}
					border="3"
					.trigger=${this.submit.bind(this)}
					>Report</d-button
				>
			</div>`}renderThankYou(){return N`<h2 id="title">Thank you</h2>
			<p>Your report will be handled appropriately.</p>
			<div id="actions">
				<d-button
					bg=${Jr(-1)}
					border="3"
					.trigger=${this.close.bind(this)}
					>Close</d-button
				>
			</div>`}};Vi.styles=Wi,qi([fe()],Vi.prototype,"complete",void 0),qi([fe()],Vi.prototype,"reportingIdentity",void 0),qi([pe("#reason-input")],Vi.prototype,"reasonInput",void 0),Vi=qi([le("d-report")],Vi),n(7629),n(8687),n(464),Error.stackTraceLimit=11,Object.freeze(Error),window.addEventListener("resize",ui),window.addEventListener("resize",(()=>window.focus())),ui(),window.addEventListener("DOMContentLoaded",(()=>{Gi=new Tr,Gi.classList.add("diep-native"),Gi.style.zIndex="998",Tr.singleton=window.ui=Gi,ui(),document.body.appendChild(Gi),(async()=>{wi(),await(async()=>{const e=await window.CrazyGames.SDK.getEnvironment().catch((e=>"disabled"));"local"===e?(console.log("Launching LOCAL AdinPlay ads"),fi="adinplay"):"disabled"!==e?(console.log("Launching crazyGamesSDK @ ["+e+"]"),fi="crazygames"):(console.log("Launching AdinPlay ads"),fi="adinplay"),"adinplay"===fi&&await new Promise((e=>{aiptag.cmd.player.push((()=>{aiptag.adplayer=new aipPlayer({AD_WIDTH:960,AD_HEIGHT:540,AD_DISPLAY:"modal-center",LOADING_TEXT:"Loading...",PREROLL_ELEM:()=>document.querySelector("#videoad"),AIP_COMPLETE:e=>{switch(e){case"video-ad-completed":Ci.onreward&&Ci.onreward();break;case"video-ad-skipped":Ci.oncancel&&Ci.oncancel();break;case"video-ad-close":case"video-ad-empty":case"video-ad-error":case"video-ad-timeout":case"video-ad-removed":case"video-ad-skip-in-iframe":case"video-ad-action-limit-reached":case"video-ad-blocked":Ci.onerror&&Ci.onerror()}},AIP_REMOVE:function(){console.log(1),Ci.ondestroy&&Ci.ondestroy()}}),e()}))})),hi.style.display="block",mi.style.display="block",vi.style.display="block",Si()})(),document.querySelectorAll(".aa_main").forEach((e=>{e.classList.add("active")})),di=!0,window.__renderAds._last&&Li(window.__renderAds._last),window.__renderAds=Li,xi()})().then((()=>{console.log("_Ads loaded_")}))})),n(9294);const Ki=setInterval((()=>{if(!window.input)return;clearInterval(Ki);const e=async()=>{try{const{player_count:e}=await fetch("https://api.rivet.gg/matchmaker/players/statistics",{headers:{Authorization:"Bearer pub_prod.eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.CJOKqpTjPxCT4qP5gDIaEgoQTUkBgqVnQIa70SIdXRhuLSIWGhQKEgoQkSD1U74USI63DDpDajKN-A.lvpCJc_Jy0qbn5qCoKgwWGPubhdRjFqzztPKleVXmwhbOIUWmFeKhOg5irMvfm1qUGrwB0wctOHxhj56BQT8Bw"}}).then((e=>e.json()));if(e<0)return;localStorage.setItem("player-count-cache",e.toString()),window.input.set_player_count(parseInt(localStorage.getItem("player-count-cache"))||-1)}catch{}};localStorage.getItem("player-count-cache")?window.input.set_player_count(parseInt(localStorage.getItem("player-count-cache"))||-1):e(),setInterval((()=>{e()}),12e4)}),500)}()}();