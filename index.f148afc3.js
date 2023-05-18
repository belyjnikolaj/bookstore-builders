!function(){function e(e){return e&&e.__esModule?e.default:e}function n(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},t.parcelRequired7c6=a),a.register("llmwH",(function(t,o){n(t.exports,"openModalCard",(function(){return b}));var r=a("7a6b6"),c=a("4JnSG"),s=a("3rsja"),i=a("cBJ6q"),u=a("1mIIF"),l=a("4K6mp"),d=a("5AqDv"),p=a("l4aTq"),f=new(0,r.BookAPI),g={openModalCardBtn:document.querySelector('button[name="data-modal-card-open"]'),modalCard:document.querySelector(".modal-card"),closeModalCardBtn:document.querySelector(".modal-card_close")};g.openModalCardBtn.addEventListener("click",b),g.closeModalCardBtn.addEventListener("click",m);var h=!1;function b(e){if(!h){v();f.fetchBook(e).then((function(e){return _(e,g)})).catch((function(e){return console.log(e)}));h=!0,g.openModalCardBtn.style.display="none",console.log(h,"INSIDE")}}function m(){var e;h=!1,v(),(e=document.querySelector(".modal-card"))&&(e.innerHTML="")}function v(){document.getElementById("data-modal-card").classList.toggle("is-hidden")}var _=function(n,t){var o=n.data,r=o.buy_links.find((function(e){return"Amazon"===e.name})),a=o.buy_links.find((function(e){return"Bookshop"===e.name})),f=o.buy_links.find((function(e){return"Apple Books"===e.name}));console.log({book:o});var g='\n    <div class="modal-card-div">\n      <img class="modal-card_img" src="'.concat(o.book_image,'" alt="').concat(o.title,'" />\n      <div class="modal-card-info">\n        <h3 class="modal-card_title">').concat(o.title,'</h3>\n        <p class="modal-card_author">').concat(o.author,'</p>\n        <p class="modal-card_desq">').concat(o.description,'</p>\n        <ul class="shopping-list-links"> \n          <li shopping-list-links_item>\n            <a class="shopping-list-links_icon href="').concat(r.url,'">\n              <picture>\n                <source\n                  srcset="').concat(e(s)," 1x, ").concat(e(i),' 2x"\n                  type="image/png"\n                />\n                <img class="amazon-icon" src="').concat(e(s),'" alt="Amazon" />\n              </picture>\n            </a>\n          </li>\n          <li>\n            <a href="').concat(a.url,'">\n              <picture>\n                <source\n                  srcset="').concat(e(u)," 1x, ").concat(e(l),' 2x"\n                  type="image/png"\n                />\n                <img class="apple-icon" src="').concat(e(u),'" alt="Apple" />\n              </picture>\n            </a>\n          </li>\n          <li>\n            <a href="').concat(f.url,'">\n              <picture>\n                <source\n                  srcset="').concat(e(d)," 1x, ").concat(e(p),' 2x"\n                  type="image/png"\n                />\n                <img class="apple-icon" src="').concat(e(d),'" alt="Bookshop" />\n              </picture>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button class="modal-card_close" type="button">\n    <svg class="icon-cross" height="12" width="12">\n      <use href="').concat(e(c),'#icon-close"></use>\n    </svg>\n  </button>\n    <div class="button-shopping">\n      <button class="button-add-shopping-list btn-modal-card" type="button">Add to Shopping List</button> \n    </div>\n  ');t.modalCard.insertAdjacentHTML("beforeend",g)};document.addEventListener("keydown",(function(e){"Escape"===e.key&&h&&m()}))})),a.register("7a6b6",(function(t,o){n(t.exports,"BookAPI",(function(){return h}));var r=a("bpxeT"),c=a("8MBJY"),s=a("4KMWL"),i=a("8MQK7"),u=a("a2hTj"),l=a("2TvXO"),d=a("dIxxU"),p=new WeakMap,f=new WeakMap,g=new WeakMap,h=function(){"use strict";function n(){e(c)(this,n),e(i)(this,p,{writable:!0,value:"https://books-backend.p.goit.global/books"}),e(i)(this,f,{writable:!0,value:"/category-list"}),e(i)(this,g,{writable:!0,value:"/top-books"})}return e(u)(n,[{key:"fetchCategoriesList",value:function(){var n=this;return e(r)(e(l).mark((function t(){return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.default.get("".concat(e(s)(n,p)).concat(e(s)(n,f)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},{key:"fetchTopBooks",value:function(){var n=this;return e(r)(e(l).mark((function t(){return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.default.get("".concat(e(s)(n,p)).concat(e(s)(n,g)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},{key:"fetchBook",value:function(n){var t=this;return e(r)(e(l).mark((function o(){return e(l).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log({bookId:n}),o.next=3,d.default.get("".concat(e(s)(t,p),"/").concat(n));case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}}),o)})))()}}]),n}()})),a.register("4KMWL",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n){var r=t.default(e,n,"get");return o.default(e,r)};var t=r(a("1UHsN")),o=r(a("ffZzF"));function r(e){return e&&e.__esModule?e:{default:e}}})),a.register("1UHsN",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n,t){if(!n.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return n.get(e)}})),a.register("ffZzF",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n){return n.get?n.get.call(e):n.value}})),a.register("8MQK7",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n,t){o.default(e,n),n.set(e,t)};var t,o=(t=a("5k7tO"))&&t.__esModule?t:{default:t}})),a.register("5k7tO",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("4JnSG",(function(e,n){e.exports=a("aNJCr").getBundleURL("ho71q")+a("iE7OH").resolve("ee16w")})),a.register("3rsja",(function(e,n){e.exports=a("aNJCr").getBundleURL("ho71q")+a("iE7OH").resolve("h38su")})),a.register("cBJ6q",(function(e,n){e.exports=a("aNJCr").getBundleURL("ho71q")+a("iE7OH").resolve("lAahX")})),a.register("1mIIF",(function(e,n){e.exports=a("aNJCr").getBundleURL("ho71q")+a("iE7OH").resolve("4xzec")})),a.register("4K6mp",(function(e,n){e.exports=a("aNJCr").getBundleURL("ho71q")+a("iE7OH").resolve("28Az2")})),a.register("5AqDv",(function(e,n){e.exports=a("aNJCr").getBundleURL("ho71q")+a("iE7OH").resolve("7OmxB")})),a.register("l4aTq",(function(e,n){e.exports=a("aNJCr").getBundleURL("ho71q")+a("iE7OH").resolve("6aTGg")})),a("iE7OH").register(JSON.parse('{"ho71q":"index.f148afc3.js","ee16w":"sprite.0a9a0e54.svg","h38su":"amazon-icon.16930f9e.png","lAahX":"amazon-icon@2x.c543657e.png","4xzec":"apple-icon.da517aac.png","28Az2":"apple-icon@2x.46a91633.png","7OmxB":"bookshop-icon.af780590.png","6aTGg":"bookshop-icon@2x.52fc7653.png","czhWd":"shopping-list.705e9bb6.js"}')),a("llmwH")}();
//# sourceMappingURL=index.f148afc3.js.map