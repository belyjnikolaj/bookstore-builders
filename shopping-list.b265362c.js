function n(n,e,r,t){Object.defineProperty(n,e,{get:r,set:t,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=r.parcelRequired7c6;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){i[n]=e},r.parcelRequired7c6=o),o.register("kyEFX",(function(e,r){var t,i;n(e.exports,"register",(function(){return t}),(function(n){return t=n})),n(e.exports,"resolve",(function(){return i}),(function(n){return i=n}));var o={};t=function(n){for(var e=Object.keys(n),r=0;r<e.length;r++)o[e[r]]=n[e[r]]},i=function(n){var e=o[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o("kyEFX").register(JSON.parse('{"lzeCd":"shopping-list.b265362c.js","lp5u4":"sprite.0a9a0e54.svg","1WbtR":"amazon-icon.16930f9e.png","JrQ2f":"amazon-icon@2x.c543657e.png","9icNC":"apple-icon.da517aac.png","4nDo7":"apple-icon@2x.46a91633.png","bxsbf":"bookshop-icon.af780590.png","2X1kX":"bookshop-icon@2x.52fc7653.png","1YDi5":"shopping-list.28149d10.js"}')),o("75VGX");var s;s=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var a;a=new URL(o("kyEFX").resolve("1WbtR"),import.meta.url).toString();var c;c=new URL(o("kyEFX").resolve("JrQ2f"),import.meta.url).toString();var p;p=new URL(o("kyEFX").resolve("9icNC"),import.meta.url).toString();var l;l=new URL(o("kyEFX").resolve("4nDo7"),import.meta.url).toString();var u;u=new URL(o("kyEFX").resolve("bxsbf"),import.meta.url).toString();var d;d=new URL(o("kyEFX").resolve("2X1kX"),import.meta.url).toString(),o("ciJSj"),o("75VGX"),o("hWEHR");const g=JSON.parse(localStorage.getItem("shoppingList"))||[],_=document.querySelector(".shopping-list");_.innerHTML="",g.forEach((n=>{const{book_image:r,title:t,list_name:i,description:o,author:g,amazon_product_url:h,apple:f,bookshop:m}=n,b=`\n      <li class="js-card card-shopping">\n        <div class="card-shopping__container">\n          <img src="${r}" alt="${t}" class="card-shopping__image" />\n          <div class="card-shopping__thumb">\n            <h2 class="card-shopping__title cut-text">${t}</h2>\n            <h3 class="card-shopping__category cut-text">${i}</h3>\n            <p class="card-shopping__description cut-text">${o}</p>\n            <div class="card-shopping__author-links">\n              <p class="card-shopping__author">${g}</p>\n              <ul class="card-shopping__listLinks">\n                <li class="card-shopping__listItem">\n                  <a href="${h}" class="card-shopping__link">\n                    <picture>\n                      <source srcset="${e(a)} 1x, ${e(c)} 2x" type="image/png" />\n                      <img class="amazon-icon" src="${e(a)}" alt="Amazon" />\n                    </picture>\n                  </a>\n                </li>\n                <li class="card-shopping__listItem">\n                  <a href="${f.url}" class="card-shopping__link">\n                    <picture>\n                      <source srcset="${e(p)} 1x, ${e(l)} 2x" type="image/png" />\n                      <img class="apple-icon" src="${e(p)}" alt="Apple" />\n                    </picture>\n                  </a>\n                </li>\n                <li class="card-shopping__listItem">\n                  <a href="${m.url}" class="card-shopping__link">\n                    <picture>\n                      <source srcset="${e(u)} 1x, ${e(d)} 2x" type="image/png" />\n                      <img class="apple-icon" src="${e(u)}" alt="Bookshop" />\n                    </picture>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <button class="card-shopping__deleteBtn">\n            <svg width="28" height="28" class="card-shoppin__deleteBtn--icon">\n              <use href="${e(s)}#icon-delete"></use>\n            </svg>\n          </button>\n        </div>\n      </li>\n    `;_.insertAdjacentHTML("beforeend",b)}));
//# sourceMappingURL=shopping-list.b265362c.js.map