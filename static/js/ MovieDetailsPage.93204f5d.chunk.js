(this["webpackJsonpreact-hw-4-films"]=this["webpackJsonpreact-hw-4-films"]||[]).push([[0],{49:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},50:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"f",(function(){return f})),r.d(e,"e",(function(){return d})),r.d(e,"b",(function(){return p})),r.d(e,"c",(function(){return v})),r.d(e,"d",(function(){return m}));var n=r(51),o=r.n(n);function i(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))}}var c="https://api.themoviedb.org/3/",s="618d26280c3d16ba0e8ea1b5e615dd52",u="https://image.tmdb.org/t/p/w500";function l(){return h.apply(this,arguments)}function h(){return(h=a(o.a.mark((function t(){var e,r,n,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(e,r);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not fond"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return l("".concat(c,"trending/movie/day?api_key=").concat(s))}function d(t){return l("".concat(c,"search/movie?api_key=").concat(s,"&query=").concat(t))}function p(t){return l("".concat(c,"movie/").concat(t,"?api_key=").concat(s))}function v(t){return l("".concat(c,"movie/").concat(t,"/credits?api_key=").concat(s))}function m(t){return l("".concat(c,"movie/").concat(t,"/reviews?api_key=").concat(s))}},51:function(t,e,r){t.exports=r(52)},52:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function j(){}var _={};_[i]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(C([])));g&&g!==r&&n.call(g,i)&&(_=g);var w=j.prototype=m.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=w.constructor=j,j.constructor=y,y.displayName=s(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,c,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},56:function(t,e,r){t.exports={Reviews:"Reviews_Reviews__2K2ZZ",Reviews__author:"Reviews_Reviews__author__1l6jB"}},57:function(t,e,r){t.exports={Cast__item:"Cast_Cast__item__Mn8w7",Cast__pic:"Cast_Cast__pic__KrE1M",Cast__name:"Cast_Cast__name__3Mye5",Cast__character:"Cast_Cast__character__pwp3c"}},58:function(t,e,r){t.exports={MovieDetailsPage:"MovieDetailsPage_MovieDetailsPage__wgv2M",button:"MovieDetailsPage_button__3VQDz",card:"MovieDetailsPage_card__2Lmke",card__pic:"MovieDetailsPage_card__pic__2f0Y7",card__info:"MovieDetailsPage_card__info__3XQGH",list:"MovieDetailsPage_list__13uCP"}},61:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return y}));var n=r(49),o=r(0),i=r(50),a=r(3),c=r(9),s=r(56),u=r.n(s),l=r(1);function h(t){var e=t.movieId,r=Object(o.useState)([]),a=Object(n.a)(r,2),c=a[0],s=a[1];return Object(o.useEffect)((function(){Object(i.d)(e).then((function(t){return s(t.results)}))}),[e]),Object(l.jsx)("div",{className:u.a.Reviews,children:c.length>0?Object(l.jsx)("ul",{className:u.a.Reviews__list,children:c.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("p",{className:u.a.Reviews__author,children:[Object(l.jsx)("span",{children:"Author: "}),t.author]}),Object(l.jsx)("p",{children:t.content})]},t.id)}))}):Object(l.jsx)("p",{children:"We don't have any reviews for this movie"})})}var f=r(57),d=r.n(f);function p(t){var e=t.movieId,r=Object(o.useState)(null),a=Object(n.a)(r,2),c=a[0],s=a[1];return Object(o.useEffect)((function(){Object(i.c)(e).then((function(t){return s(t.cast)}))}),[e]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{className:d.a.Cast,children:c&&c.map((function(t){return Object(l.jsxs)("li",{className:d.a.Cast__item,children:[Object(l.jsx)("img",{src:t.profile_path?"".concat(i.a).concat(t.profile_path):"https://www.meme-arsenal.com/memes/56560310e90c633f9239e83ea1523504.jpg",alt:t.name,className:d.a.Cast__pic}),Object(l.jsx)("p",{className:d.a.Cast__name,children:t.name}),Object(l.jsxs)("p",{className:d.a.Cast__character,children:["Character:",t.character]})]},t.id)}))})})}var v=r(58),m=r.n(v);function y(){var t,e,r,s,u=Object(a.i)(),f=u.url,d=u.path,v=Object(a.g)(),y=Object(a.f)(),j=Object(a.h)().movieId,_=Object(o.useState)(null),b=Object(n.a)(_,2),g=b[0],w=b[1];Object(o.useEffect)((function(){Object(i.b)(j).then((function(t){w(t)}))}),[j]);return Object(l.jsxs)("div",{className:m.a.MovieDetailsPage,children:[Object(l.jsx)("button",{type:"button",onClick:function(){var t,e;y.push(null!==(t=null===v||void 0===v||null===(e=v.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies")},className:m.a.button,children:"\u2190 go back"}),Object(l.jsx)("div",{className:m.a.card,children:g&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{className:m.a.card__pic,src:g.poster_path?"".concat(i.a).concat(g.poster_path):"https://www.meme-arsenal.com/memes/56560310e90c633f9239e83ea1523504.jpg",alt:g.original_title}),Object(l.jsxs)("div",{className:m.a.card__info,children:[Object(l.jsx)("h2",{children:g.original_title}),Object(l.jsxs)("p",{children:["User score: ",g.vote_average]}),Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsx)("p",{children:g.overview}),Object(l.jsx)("h4",{children:"Genres"}),g.genres&&g.genres.map((function(t){return Object(l.jsxs)("span",{children:[t.name," "]},t.id)}))]})]})}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"Additional information"}),Object(l.jsxs)("ul",{className:m.a.list,children:[Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:{pathname:"".concat(f,"/cast"),state:{from:null!==(t=null===v||void 0===v||null===(e=v.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies"}},children:"Cast"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:{pathname:"".concat(f,"/reviews"),state:{from:null!==(r=null===v||void 0===v||null===(s=v.state)||void 0===s?void 0:s.from)&&void 0!==r?r:"/movies"}},children:"Reviews"})})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"".concat(d,"/cast"),children:Object(l.jsx)(p,{movieId:j})}),Object(l.jsx)(a.a,{path:"".concat(d,"/reviews"),children:Object(l.jsx)(h,{movieId:j})})]})]})}}}]);
//# sourceMappingURL= MovieDetailsPage.93204f5d.chunk.js.map