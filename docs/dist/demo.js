!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){var e=new l;try{e.setItem("__test","1");var t=e.getItem("__test");return e.removeItem("__test"),"1"===t}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.hasCookies=o;var u=n(5),i=function(e){return e&&e.__esModule?e:{default:e}}(u),s="lS_",l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.cookieOptions=Object.assign({path:"/"},t),s=t.prefix||s}return a(e,[{key:"getItem",value:function(e){var t=i.default.parse(document.cookie);return t&&t.hasOwnProperty(s+e)?t[s+e]:null}},{key:"setItem",value:function(e,t){return document.cookie=i.default.serialize(s+e,t,this.cookieOptions),t}},{key:"removeItem",value:function(e){var t=Object.assign({},this.cookieOptions,{maxAge:-1});return document.cookie=i.default.serialize(s+e,"",t),null}},{key:"clear",value:function(){var e=i.default.parse(document.cookie);for(var t in e)0===t.indexOf(s)&&this.removeItem(t.substr(s.length));return null}}]),e}();t.default=l},function(e,t){e.exports={AUD:{format:"A${amount}",subunit:2},BGN:{format:"{amount} leva",subunit:2},BRL:{format:"R${amount}",subunit:2},CAD:{format:"C${amount}",subunit:2},CHF:{format:"CHF {amount}",subunit:2},CNY:{format:"元{amount}",subunit:2},CZK:{format:"{amount} Kč",subunit:0},DKK:{format:"{amount} kr.",subunit:2},EUR:{format:"€{amount}",subunit:2},GBP:{format:"£{amount}",subunit:2},HKD:{format:"HK${amount}",subunit:2},HRK:{format:"{amount} kn",subunit:2},HUF:{format:"{amount} Ft",subunit:0},IDR:{format:"Rp {amount}",subunit:0},ILS:{format:"₪{amount}",subunit:2},INR:{format:"₹{amount}",subunit:2},ISK:{format:"{amount}kr",subunit:0},JPY:{format:"¥ {amount}",subunit:0},KRW:{format:"₩{amount}",subunit:0},MXN:{format:"${amount}",subunit:2},MYR:{format:"RM{amount}",subunit:2},NOK:{format:"{amount} kr",subunit:0},NZD:{format:"${amount}",subunit:2},PHP:{format:"₱{amount}",subunit:2},PLN:{format:"{amount}zł",subunit:2},RON:{format:"{amount} lei",subunit:2},RUB:{format:"{amount}₽",subunit:2},SEK:{format:"{amount} kr",subunit:0},SGD:{format:"S${amount}",subunit:2},THB:{format:"฿{amount}",subunit:2},TRY:{format:"₺{amount}",subunit:2},USD:{format:"${amount}",subunit:2},ZAR:{format:"R {amount}",subunit:2}}},function(e,t){e.exports=React},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(13),a=r(o),u=n(4),i=r(u);a.default.render(React.createElement(i.default,null),document.querySelector("#react-root"))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=r(l),f=n(10),d=r(f),p=n(1),m=r(p),h=function(e){function t(){var e,n,r,i;a(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={amount:100,baseCurrency:"USD",hideCents:!1,rounding:"round",roundingFn:Math.round},r.updateState=function(e){r.setState(o({},e.target.id,e.target.value))},r.changeHideCents=function(e){r.setState({hideCents:e.target.checked})},r.changeRounding=function(e){var t=e.target.value,n=Math.round;switch(t){case"ceil":n=Math.ceil;break;case"floor":n=Math.floor}r.setState({rounding:t,roundingFn:n})},i=n,u(r,i)}return i(t,e),s(t,[{key:"render",value:function(){var e=this;return c.default.createElement("section",null,c.default.createElement("h1",null,"react-world-price"),c.default.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=jasonbarry&repo=react-world-price&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}),c.default.createElement("aside",null,"An automatic currency conversion component for React that Just Works",c.default.createElement("sup",null,"™"),"."),c.default.createElement("div",{class:"inputs background center"},c.default.createElement("div",null,c.default.createElement("label",{for:"amount"},"Amount"),c.default.createElement("input",{id:"amount",type:"text",value:this.state.amount,onChange:this.updateState})),c.default.createElement("div",null,c.default.createElement("label",{for:"baseCurrency"},"Base Currency"),c.default.createElement("select",{id:"baseCurrency",type:"text",value:this.state.baseCurrency,onChange:this.updateState},Object.keys(m.default).map(function(e){return c.default.createElement("option",{value:e},e)}))),c.default.createElement("div",null,c.default.createElement("input",{id:"hideCents",type:"checkbox",checked:this.state.hideCents,onChange:this.changeHideCents}),c.default.createElement("label",{for:"hideCents"},"Hide Cents")),c.default.createElement("div",null,c.default.createElement("label",{for:"rounding"},"Rounding"),c.default.createElement("select",{id:"rounding",type:"text",value:this.state.rounding,onChange:this.changeRounding},c.default.createElement("option",{value:"ceil"},"Math.ceil"),c.default.createElement("option",{value:"round"},"Math.round"),c.default.createElement("option",{value:"floor"},"Math.floor")))),c.default.createElement("div",{class:"prices"},Object.keys(m.default).map(function(t){return c.default.createElement("p",{class:"center "+(t===e.state.baseCurrency?"highlight":"")},c.default.createElement(d.default,{key:t,amount:e.state.amount||0,baseCurrency:e.state.baseCurrency,displayCurrency:t,hideCents:e.state.hideCents,rounding:e.state.roundingFn}))})),c.default.createElement("pre",{class:"background center"},c.default.createElement("span",{class:"red"},"$")," ",c.default.createElement("span",{class:"green"},"yarn add react-world-price")),c.default.createElement("footer",{class:"center"},c.default.createElement("a",{href:"https://github.com/jasonbarry/react-world-price"},c.default.createElement("img",{src:"dist/gh.png",width:"32",height:"32",alt:"View react-world-price on GitHub"}))))}}]),t}(c.default.Component);t.default=h},function(e,t,n){"use strict";function r(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},r=t||{},o=e.split(s),i=r.decode||u,l=0;l<o.length;l++){var c=o[l],f=c.indexOf("=");if(!(f<0)){var d=c.substr(0,f).trim(),p=c.substr(++f,c.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==n[d]&&(n[d]=a(p,i))}}return n}function o(e,t,n){var r=n||{},o=r.encode||i;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!l.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!l.test(a))throw new TypeError("argument val is invalid");var u=e+"="+a;if(null!=r.maxAge){var s=r.maxAge-0;if(isNaN(s))throw new Error("maxAge should be a Number");u+="; Max-Age="+Math.floor(s)}if(r.domain){if(!l.test(r.domain))throw new TypeError("option domain is invalid");u+="; Domain="+r.domain}if(r.path){if(!l.test(r.path))throw new TypeError("option path is invalid");u+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(u+="; HttpOnly"),r.secure&&(u+="; Secure"),r.sameSite){switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return u}function a(e,t){try{return t(e)}catch(t){return e}}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
t.parse=r,t.serialize=o;var u=decodeURIComponent,i=encodeURIComponent,s=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e),this._data={}}return o(e,[{key:"getItem",value:function(e){return this._data.hasOwnProperty(e)?this._data[e]:void 0}},{key:"setItem",value:function(e,t){return this._data[e]=String(t)}},{key:"removeItem",value:function(e){return delete this._data[e]}},{key:"clear",value:function(){return this._data={}}}]),e}();t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MemoryStorage=t.CookieStorage=t.isSupported=t.storage=void 0;var o=n(8),a=r(o),u=n(0),i=r(u),s=n(6),l=r(s),c=null;(0,a.default)("localStorage")?t.storage=c=window.localStorage:(0,a.default)("sessionStorage")?t.storage=c=window.sessionStorage:(0,a.default)("cookieStorage")?t.storage=c=new i.default:t.storage=c=new l.default,t.default=c,t.storage=c,t.isSupported=a.default,t.CookieStorage=i.default,t.MemoryStorage=l.default},function(e,t,n){"use strict";function r(e){try{var t=window[e];return t.setItem(u,"1"),t.removeItem(u),!0}catch(e){return!1}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage",t=String(e).replace(/storage$/i,"").toLowerCase();if("local"===t)return r("localStorage");if("session"===t)return r("sessionStorage");if("cookie"===t)return(0,a.hasCookies)();if("memory"===t)return!0;throw new Error("Storage method `"+e+"` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(0),u="__test"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){function o(){var e,t=[],n=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,a,u){t.push(a=a.toLowerCase()),n.push([a,u]),e=r[a],r[a]=e?e+","+u:u}),{ok:1==(a.status/200|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:o,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}var a=new XMLHttpRequest;a.open(t.method||"get",e);for(var u in t.headers)a.setRequestHeader(u,t.headers[u]);a.withCredentials="include"==t.credentials,a.onload=function(){n(o())},a.onerror=r,a.send(t.body)})};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),c=n(9),f=r(c),d=n(7),p=r(d),m=n(1),h=r(m),b=n(11),y=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={rates:{}},u=n,a(r,u)}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.fetchRates(this.props.baseCurrency)}},{key:"componentWillReceiveProps",value:function(e){e.baseCurrency!==this.props.baseCurrency&&this.fetchRates(e.baseCurrency)}},{key:"fetchRates",value:function(e){var t=this,n=(new Date).getTime(),r="react-world-price-date-"+e,o="react-world-price-rates-"+e,a=p.default.getItem(r);if(a&&n-Number(a)<864e5){var u=p.default.getItem(o);this.setState({rates:JSON.parse(u)})}else window.__REACT_WORLD_PRICE_FETCHING__?setTimeout(function(){t.fetchRates(e)},50):(window.__REACT_WORLD_PRICE_FETCHING__=!0,(0,f.default)("http://api.fixer.io/latest?base="+e).then(function(e){return e.json()}).then(function(e){p.default.setItem(r,n),p.default.setItem(o,JSON.stringify(e.rates)),window.__REACT_WORLD_PRICE_FETCHING__=!1,t.setState({rates:e.rates})}).catch(function(){window.__REACT_WORLD_PRICE_FETCHING__=!1}))}},{key:"render",value:function(){var e=this.props,t=e.baseCurrency,n=e.displayCurrency,r=e.rounding,o=e.unwrap,a=parseFloat(this.props.amount),u="NaN"===a.toString(),i=!(t in h.default),s=!(n in h.default);if(u||i||s)return console.error("react-world-price",this.props),o?this.props.amount:l.createElement("span",null,this.props.amount);var c=(0,b.formatAmountForCurrency)(a,h.default[t],r)+" "+t,f=(0,b.formatAmountForCurrency)(this.amount,h.default[n],r);return o?f:l.createElement("span",{title:c},f)}},{key:"amount",get:function(){var e=parseFloat(this.props.amount)*(this.state.rates[this.props.displayCurrency]||1);return this.props.hideCents?this.props.rounding(e):e}}]),t}(l.Component);y.defaultProps={baseCurrency:"USD",displayCurrency:(0,b.getCurrencyFromBrowserLocale)(),hideCents:!1,rounding:Math.round,unwrap:!1},t.default=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatAmountForCurrency=t.getCurrencyFromBrowserLocale=void 0;var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.getCurrencyFromBrowserLocale=function(){if("undefined"==typeof window)return"USD";var e=window.navigator.language.toLowerCase();return o.default[e]||"USD"},t.formatAmountForCurrency=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.round,r=Math.pow(10,t.subunit),o=n(e*r)/r,a=o.toLocaleString().replace(/(\.[\d]{1})$/,"$10");return t.format.replace("{amount}",a)}},function(e,t){e.exports={af:"ZAR","af-af":"ZAR",bg:"BGN","bg-bg":"BGN",da:"DKK","da-dk":"DKK",de:"EUR","de-at":"EUR","de-ch":"CHF","de-de":"EUR","de-li":"EUR","de-lu":"EUR",el:"EUR","en-au":"AUD","en-ca":"CAD","en-gb":"GBP","en-ie":"EUR","en-nz":"NZD","en-us":"USD","en-za":"ZAR",es:"EUR","es-mx":"MXN","es-xl":"EUR",fr:"EUR","fr-be":"EUR","fr-ca":"CAD","fr-ch":"CHF","fr-fr":"EUR","fr-lu":"EUR",gd:"EUR","gd-ie":"EUR",he:"ILS","he-il":"ILS",hu:"HUF","hu-hu":"HUF",id:"INR",is:"ISK","is-is":"ISK",it:"EUR","it-it":"EUR","it-ch":"CHF",ja:"JPY","ja-jp":"JPY",ko:"KRW","ko-kr":"KRW",nl:"EUR","nl-be":"EUR","nl-nl":"EUR",no:"NOK","no-no":"NOK",pl:"PLN","pl-pl":"PLN",pt:"EUR","pt-pt":"EUR","pt-br":"BRL",ro:"RON","ro-ro":"RON","ro-mo":"RON",ru:"RUB","ru-ru":"RUB","ru-mo":"RUB",th:"THB","th-th":"THB",tr:"TRY","tr-tr":"TRY"}},function(e,t){e.exports=ReactDOM},function(e,t,n){e.exports=n(3)}]);