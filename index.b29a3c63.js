function n(n){return n&&n.__esModule?n.default:n}function e(n,e,o,t){Object.defineProperty(n,e,{get:o,set:t,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=o.parcelRequired7c6;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in s){var e=s[n];delete s[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){s[n]=e},o.parcelRequired7c6=i),i.register("hWEHR",(function(o,t){e(o.exports,"openModalCard",(function(){return b}));var s=i("ju4sA"),r=i("e5EMj"),a=i("1tavD"),l=i("hrIna"),c=i("7fhu0"),d=i("9aWXl"),p=i("6UVd3"),u=i("dNclx");const g=new(0,s.BookAPI),f={openModalCardBtn:document.querySelector('button[name="data-modal-card-open"]'),modalCard:document.querySelector(".modal-card"),closeModalCardBtn:document.querySelector(".modal-card_close")};f.openModalCardBtn.addEventListener("click",b),f.closeModalCardBtn.addEventListener("click",h);let m=!1;function b(n){if(!m){_();g.fetchBook(n).then((n=>k(n,f))).catch((n=>console.log(n)));m=!0,f.openModalCardBtn.style.display="none",console.log(m,"INSIDE")}}function h(){m=!1,_(),function(){const n=document.querySelector(".modal-card");n&&(n.innerHTML="")}()}function _(){document.getElementById("data-modal-card").classList.toggle("is-hidden")}const k=(e,o)=>{const t=e.data,s=t.buy_links.find((n=>"Amazon"===n.name)),i=t.buy_links.find((n=>"Bookshop"===n.name)),g=t.buy_links.find((n=>"Apple Books"===n.name));console.log({book:t});const f=`\n    <div class="modal-card-div">\n      <img class="modal-card_img" src="${t.book_image}" alt="${t.title}" />\n      <div class="modal-card-info">\n        <h3 class="modal-card_title">${t.title}</h3>\n        <p class="modal-card_author">${t.author}</p>\n        <p class="modal-card_desq">${t.description}</p>\n        <ul class="shopping-list-links"> \n          <li shopping-list-links_item>\n            <a class="shopping-list-links_icon" href="${s.url}">\n              <picture>\n                <source\n                  srcset="${n(a)} 1x, ${n(l)} 2x"\n                  type="image/png"\n                />\n                <img class="amazon-icon" src="${n(a)}" alt="Amazon" />\n              </picture>\n            </a>\n          </li>\n          <li>\n            <a class="shopping-list-links_icon" href="${i.url}">\n              <picture>\n                <source\n                  srcset="${n(c)} 1x, ${n(d)} 2x"\n                  type="image/png"\n                />\n                <img class="apple-icon" src="${n(c)}" alt="Apple" />\n              </picture>\n            </a>\n          </li>\n          <li>\n            <a class="shopping-list-links_icon" href="${g.url}">\n              <picture>\n                <source\n                  srcset="${n(p)} 1x, ${n(u)} 2x"\n                  type="image/png"\n                />\n                <img class="apple-icon" src="${n(p)}" alt="Bookshop" />\n              </picture>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button class="modal-card_close" type="button">\n    <svg class="icon-cross" height="12" width="12">\n      <use href="${n(r)}#icon-close"></use>\n    </svg>\n  </button>\n    <div class="button-shopping">\n      <button class="button-add-shopping-list btn-modal-card" type="button">Add to Shopping List</button> \n    </div>\n  `;o.modalCard.insertAdjacentHTML("beforeend",f)};document.addEventListener("keydown",(function(n){"Escape"===n.key&&m&&h()}))})),i.register("ju4sA",(function(n,o){e(n.exports,"BookAPI",(function(){return s}));var t=i("2shzp");class s{#n="https://books-backend.p.goit.global/books";#e="/category-list";#o="/top-books";async fetchCategoriesList(){return await t.default.get(`${this.#n}${this.#e}`)}async fetchTopBooks(){return await t.default.get(`${this.#n}${this.#o}`)}async fetchBook(n){return console.log({bookId:n}),await t.default.get(`${this.#n}/${n}`)}}})),i.register("e5EMj",(function(n,e){n.exports=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString()})),i.register("1tavD",(function(n,e){n.exports=new URL(i("kyEFX").resolve("1WbtR"),import.meta.url).toString()})),i.register("hrIna",(function(n,e){n.exports=new URL(i("kyEFX").resolve("JrQ2f"),import.meta.url).toString()})),i.register("7fhu0",(function(n,e){n.exports=new URL(i("kyEFX").resolve("9icNC"),import.meta.url).toString()})),i.register("9aWXl",(function(n,e){n.exports=new URL(i("kyEFX").resolve("4nDo7"),import.meta.url).toString()})),i.register("6UVd3",(function(n,e){n.exports=new URL(i("kyEFX").resolve("bxsbf"),import.meta.url).toString()})),i.register("dNclx",(function(n,e){n.exports=new URL(i("kyEFX").resolve("2X1kX"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"fzmqb":"index.b29a3c63.js","lp5u4":"sprite.0a9a0e54.svg","1WbtR":"amazon-icon.16930f9e.png","JrQ2f":"amazon-icon@2x.c543657e.png","9icNC":"apple-icon.da517aac.png","4nDo7":"apple-icon@2x.46a91633.png","bxsbf":"bookshop-icon.af780590.png","2X1kX":"bookshop-icon@2x.52fc7653.png","1sATg":"shopping-list.0f80197a.js"}')),i("hWEHR");
//# sourceMappingURL=index.b29a3c63.js.map
