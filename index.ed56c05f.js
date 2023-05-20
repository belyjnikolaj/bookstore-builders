!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("euqRf",(function(t,n){e(t.exports,"checkAuthState",(function(){return N})),a("fkNhc");var r=a("MjY8E");a("gQOBw");var i=a("G0OFq"),o=a("h6c0i"),s=a("7rQOT"),u=(0,r.initializeApp)({apiKey:"AIzaSyCWbs0N9AYzirIviZZUsVMIJ2enE8aYPbw",authDomain:"bookstorecommunity.firebaseapp.com",projectId:"bookstorecommunity",storageBucket:"bookstorecommunity.appspot.com",messagingSenderId:"67705966282",appId:"1:67705966282:web:466a7777f399c2354fae33",measurementId:"G-X61KC3SJ2C"}),c=(0,i.o)(u),l=document.getElementById("shoppingListButton"),f=document.getElementById("userInAuth"),d=document.getElementById("logOutAuth"),p=document.getElementById("signUpAuth"),h=document.getElementById("homeButton"),v=document.getElementById("shoppingListButtonMobile"),m=document.getElementById("userInAuthMobile"),g=document.getElementById("logOutAuthMobile"),y=document.getElementById("signUpAuthMobile"),b=document.getElementById("homeButtonMobile"),k=document.getElementById("modal-auth"),x=document.getElementById("close"),w=document.getElementById("signin-tab"),I=document.getElementById("signup-tab"),_=document.getElementById("signin-content"),E=document.getElementById("signup-content"),T=document.getElementById("signin-button"),S=document.getElementById("signup-button");function N(){s.Loading.standard("Loading...",{backgroundColor:"rgba(10,10,10,10)"});var e=c.currentUser;window.matchMedia("(min-width: 767px)").matches?e?(f.style.display="flex",l.style.display="flex",h.style.display="block",p.style.display="none",f.textContent=e.displayName):(f.style.display="none",d.style.display="none",l.style.display="none",h.style.display="none",p.style.display="flex"):(l.style.display="none",h.style.display="none",p.style.display="none",d.style.display="none",e?(m.style.display="flex",g.style.display="flex",v.style.display="flex",b.style.display="flex",y.style.display="none",m.textContent=e.displayName):(m.style.display="none",g.style.display="none",v.style.display="none",b.style.display="none",y.style.display="flex")),s.Loading.remove()}function C(){k.style.display="none",_.classList.remove("show"),w.classList.remove("is-active"),I.classList.add("is-active"),N()}function A(){(0,i.B)(c).then((function(){console.log("User logged out"),o.Notify.success("Logged out successfully!")})).catch((function(e){console.error("Error logging out:",e),o.Notify.failure("Error logging out")})),N()}document.addEventListener("DOMContentLoaded",(function(){(0,i.x)(c,(function(e){window.matchMedia("(min-width: 767px)").matches?e?(f.style.display="flex",l.style.display="flex",h.style.display="block",p.style.display="none",f.textContent=e.displayName):(f.style.display="none",d.style.display="none",l.style.display="none",h.style.display="none",p.style.display="flex"):(l.style.display="none",h.style.display="none",p.style.display="none",d.style.display="none",e?(m.style.display="flex",g.style.display="flex",v.style.display="flex",b.style.display="flex",y.style.display="none",m.textContent=e.displayName):(m.style.display="none",g.style.display="none",v.style.display="none",b.style.display="none",y.style.display="flex"))}))})),document.addEventListener("DOMContentLoaded",N()),document.addEventListener("keydown",(function(e){"Escape"===e.key&&"none"!==k.style.display&&C()})),x.addEventListener("click",(function(){C(),N()})),y.addEventListener("click",(function(){k.style.display="block",E.classList.add("show"),I.classList.add("is-active")})),p.addEventListener("click",(function(){k.style.display="block",E.classList.add("show"),I.classList.add("is-active")})),g.addEventListener("click",(function(){A()})),d.addEventListener("click",(function(){A()})),w.addEventListener("click",(function(){_.classList.add("show"),E.classList.remove("show"),I.classList.remove("is-active"),w.classList.add("is-active")})),I.addEventListener("click",(function(){_.classList.remove("show"),E.classList.add("show"),w.classList.remove("is-active"),I.classList.add("is-active")})),T.addEventListener("click",(function(){var e,t;e=document.getElementById("email").value,t=document.getElementById("password").value,T.disabled=!0,T.textContent="Loading...",(0,i.a9)(c,e,t).then((function(e){var t=e.user;console.log("Successful user login:",t),o.Notify.success("Successful login!"),C(),N()})).catch((function(e){var t=e.code,n=e.message;console.error("User not found",t,n),o.Notify.failure("User not found")})).finally((function(){T.disabled=!1,T.textContent="SIGN IN"}))})),S.addEventListener("click",(function(){var e,t,n;e=document.getElementById("signup-email").value,t=document.getElementById("signup-password").value,n=document.getElementById("name").value,S.disabled=!0,S.textContent="Loading...",e&&t&&n?(0,i.ad)(c,e).then((function(r){r.length>0?(console.log("Email is already registered:",e),o.Notify.failure("Email is already registered"),S.disabled=!1,S.textContent="Sign Up"):(0,i.a8)(c,e,t).then((function(e){var t=e.user;return console.log("Successful user registration:",t),o.Notify.success("Successful registration!"),C(),(0,i.ai)(c.currentUser,{displayName:n})})).then((function(){console.log("User profile updated:",c.currentUser.displayName),N()})).catch((function(e){var t=e.code,n=e.message;console.error("Error registering user:",t,n),o.Notify.failure("Error registering user")})).finally((function(){S.disabled=!1,S.textContent="Sign Up"}))})).catch((function(e){console.error("Error checking email existence:",e),o.Notify.failure("Error checking email existence"),S.disabled=!1,S.textContent="Sign Up"})):(console.log("Please fill in all fields."),o.Notify.failure("Please fill in all fields."),S.disabled=!1,S.textContent="Sign Up")})),f.addEventListener("click",(function(){"flex"!==d.style.display?d.style.display="flex":d.style.display="none"}))})),a.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","9.22.0","app")})),a.register("MjY8E",(function(n,r){e(n.exports,"_registerComponent",(function(){return T})),e(n.exports,"_getProvider",(function(){return S})),e(n.exports,"SDK_VERSION",(function(){return O})),e(n.exports,"initializeApp",(function(){return R})),e(n.exports,"getApp",(function(){return L})),e(n.exports,"registerVersion",(function(){return D}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),f=a("6ExWU"),d=a("kZfxc"),p=a("2xDiJ"),h=a("ajgRO"),v=(p=a("2xDiJ"),function(){"use strict";function e(n){t(o)(this,e),this.container=n}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var m,g,y="@firebase/app",b="0.9.10",k=new(0,d.Logger)("@firebase/app"),x="[DEFAULT]",w=(m={},t(u)(m,y,"fire-core"),t(u)(m,"@firebase/app-compat","fire-core-compat"),t(u)(m,"@firebase/analytics","fire-analytics"),t(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),t(u)(m,"@firebase/app-check","fire-app-check"),t(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),t(u)(m,"@firebase/auth","fire-auth"),t(u)(m,"@firebase/auth-compat","fire-auth-compat"),t(u)(m,"@firebase/database","fire-rtdb"),t(u)(m,"@firebase/database-compat","fire-rtdb-compat"),t(u)(m,"@firebase/functions","fire-fn"),t(u)(m,"@firebase/functions-compat","fire-fn-compat"),t(u)(m,"@firebase/installations","fire-iid"),t(u)(m,"@firebase/installations-compat","fire-iid-compat"),t(u)(m,"@firebase/messaging","fire-fcm"),t(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),t(u)(m,"@firebase/performance","fire-perf"),t(u)(m,"@firebase/performance-compat","fire-perf-compat"),t(u)(m,"@firebase/remote-config","fire-rc"),t(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),t(u)(m,"@firebase/storage","fire-gcs"),t(u)(m,"@firebase/storage-compat","fire-gcs-compat"),t(u)(m,"@firebase/firestore","fire-fst"),t(u)(m,"@firebase/firestore-compat","fire-fst-compat"),t(u)(m,"fire-js","fire-js"),t(u)(m,"firebase","fire-js-all"),m),I=new Map,_=new Map;function E(e,t){try{e.container.addComponent(t)}catch(n){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(_.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;_.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=I.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){E(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var N=(g={},t(u)(g,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),t(u)(g,"bad-app-name","Illegal App name: '{$appName}"),t(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),t(u)(g,"no-options","Need to provide options, when not being deployed to hosting via source."),t(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(u)(g,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(u)(g,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(u)(g,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(u)(g,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),g),C=new(0,p.ErrorFactory)("app","Firebase",N),A=function(){"use strict";function e(n,r,i){var a=this;t(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return a}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}]),e}(),O="9.22.0";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:x,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw C.create("bad-app-name",{appName:String(a)});if(n||(n=(0,p.getDefaultAppConfig)()),!n)throw C.create("no-options");var o=I.get(a);if(o){if((0,p.deepEqual)(n,o.options)&&(0,p.deepEqual)(i,o.config))return o;throw C.create("duplicate-app",{appName:a})}var s=new(0,f.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var d,h=_.values()[Symbol.iterator]();!(u=(d=h.next()).done);u=!0){var v=d.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var m=new A(n,i,s);return I.set(a,m),m}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=I.get(e);if(!t&&e===x&&(0,p.getDefaultAppConfig)())return R();if(!t)throw C.create("no-app",{appName:e});return t}function D(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}T(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var P="firebase-heartbeat-store",M=null;function U(){return M||(M=(0,h.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(P)}}).catch((function(e){throw C.create("idb-open",{originalErrorMessage:e.message})}))),M}function B(e){return j.apply(this,arguments)}function j(){return(j=t(i)(t(l).mark((function e(n){var r,i,a;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return r=e.sent,e.next=6,r.transaction(P).objectStore(P).get(W(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof p.FirebaseError?k.warn(e.t0.message):(a=C.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(a.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function z(e,t){return F.apply(this,arguments)}function F(){return(F=t(i)(t(l).mark((function e(n,r){var i,a,o,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return i=e.sent,a=i.transaction(P,"readwrite"),o=a.objectStore(P),e.next=8,o.put(r,W(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof p.FirebaseError?k.warn(e.t0.message):(s=C.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(s.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function W(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new G(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=H(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a,o,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=H(),i=q(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function H(){return(new Date).toISOString().substring(0,10)}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),J(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),J(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var K,G=function(){"use strict";function e(n){t(o)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,p.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,B(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",z(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",z(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(c)(a.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function J(e){return(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K="",T(new(0,f.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,f.Component)("heartbeat",(function(e){return new V(e)}),"PRIVATE")),D(y,b,K),D(y,b,"esm2017"),D("fire-js","")})),a.register("6ExWU",(function(n,r){e(n.exports,"Component",(function(){return d})),e(n.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),f=a("2xDiJ"),d=function(){"use strict";function e(n,r,i){t(o)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),p="[DEFAULT]",h=function(){"use strict";function e(n,r){t(o)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,f.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:p})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(u)(a.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:f});l.resolve(d)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var d=t(u)(l.value,2),p=d[0],h=d[1],v=this.normalizeInstanceIdentifier(p);i===v&&h.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===p?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.component?this.component.multipleInstances?e:p:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(n){t(o)(this,e),this.name=n,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("2xDiJ",(function(r,i){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return g})),e(r.exports,"base64Decode",(function(){return y})),e(r.exports,"getDefaultEmulatorHost",(function(){return x})),e(r.exports,"getDefaultAppConfig",(function(){return w})),e(r.exports,"getExperimentalSetting",(function(){return I})),e(r.exports,"Deferred",(function(){return _})),e(r.exports,"getUA",(function(){return E})),e(r.exports,"isMobileCordova",(function(){return T})),e(r.exports,"isBrowserExtension",(function(){return S})),e(r.exports,"isReactNative",(function(){return N})),e(r.exports,"isIE",(function(){return C})),e(r.exports,"isIndexedDBAvailable",(function(){return A})),e(r.exports,"validateIndexedDBOpenable",(function(){return O})),e(r.exports,"FirebaseError",(function(){return R})),e(r.exports,"ErrorFactory",(function(){return L})),e(r.exports,"isEmpty",(function(){return M})),e(r.exports,"deepEqual",(function(){return U})),e(r.exports,"querystring",(function(){return j})),e(r.exports,"querystringDecode",(function(){return z})),e(r.exports,"extractQuerystring",(function(){return F})),e(r.exports,"createSubscribe",(function(){return W})),e(r.exports,"getModularInstance",(function(){return q}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),f=(a("8nrFW"),a("4c7YB")),d=a("2MbLg"),p=a("6qd2L"),h=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new m;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},m=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return r}(t(f)(Error)),g=function(e){return function(e){var t=h(e);return v.encodeByteArray(t,!0)}(e).replace(/\./g,"")},y=function(e){try{return v.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},k=function(){try{return b()||function(){if(void 0!==p&&void 0!==p.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&y(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},x=function(e){var t,n;return null===(n=null===(t=k())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=function(){var e;return null===(e=k())||void 0===e?void 0:e.config},I=function(e){var t;return null===(t=k())||void 0===t?void 0:t["_".concat(e)]},_=function(){"use strict";function e(){var n=this;t(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function S(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function N(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function C(){var e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){try{return"object"==typeof indexedDB}catch(e){return!1}}function O(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var R=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(e,i,a){var u;return t(s)(this,r),(u=n.call(this,i)).code=e,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(t(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(o)(u),L.prototype.create),u}return r}(t(f)(Error)),L=function(){"use strict";function e(n,r,i){t(s)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?D(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new R(a,u,i);return c}}]),e}();function D(e,t){return e.replace(P,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(B(l)&&B(f)){if(!U(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function B(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function z(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(l)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function F(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){var n=new V(e,t);return n.subscribe.bind(n)}var V=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(n,r){e(n.exports,"LogLevel",(function(){return i})),e(n.exports,"Logger",(function(){return g})),e(n.exports,"setLogLevel",(function(){return y})),e(n.exports,"setUserLogHandler",(function(){return b}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var d,p={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},h=i.INFO,v=(d={},t(c)(d,i.DEBUG,"log"),t(c)(d,i.VERBOSE,"log"),t(c)(d,i.INFO,"info"),t(c)(d,i.WARN,"warn"),t(c)(d,i.ERROR,"error"),d),m=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=v[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},g=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this._logLevel=h,this._logHandler=m,this._userLogHandler=null,f.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?p[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(n)))}}]),e}();function y(e){f.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=f[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=p[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(n,r){e(n.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var f=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],p=new Map;function h(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(p.get(n))return p.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=d.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||f.includes(r))){var c,l=(c=t(i)(t(u).mark((function e(n){var i,c,l,f,d,p,h=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=h.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=h[l];return d=this.transaction(n,o?"readwrite":"readonly"),p=d.store,a&&(p=p.index(c.shift())),e.next=7,Promise.all([(f=p)[r].apply(f,t(s)(c)),o&&d.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return p.set(n,l),l}}}(0,c.r)((function(e){return t(o)({},e,{get:function(t,n,r){return h(t,n)||e.get(t,n,r)},has:function(t,n){return!!h(t,n)||e.has(t,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(n,r){e(n.exports,"w",(function(){return g})),e(n.exports,"r",(function(){return h}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap;var p={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){p=e(p)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(y(this),n),g(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(e.apply(y(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[y(this),n].concat(t(s)(i)));return l.set(u,n.sort?n.sort():[n]),g(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,p):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),d.set(n,t),n;var t,n;if(f.has(e))return f.get(e);var r=m(e);return r!==e&&(f.set(e,r),d.set(r,e)),r}var y=function(e){return d.get(e)}})),a.register("gQOBw",(function(t,n){e(t.exports,"getAuth",(function(){return a("G0OFq").o})),e(t.exports,"onAuthStateChanged",(function(){return a("G0OFq").x})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("G0OFq").a9})),e(t.exports,"fetchSignInMethodsForEmail",(function(){return a("G0OFq").ad})),e(t.exports,"createUserWithEmailAndPassword",(function(){return a("G0OFq").a8})),e(t.exports,"updateProfile",(function(){return a("G0OFq").ai})),e(t.exports,"signOut",(function(){return a("G0OFq").B})),a("eMcUM")})),a.register("eMcUM",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return a("G0OFq").a8})),e(t.exports,"fetchSignInMethodsForEmail",(function(){return a("G0OFq").ad})),e(t.exports,"getAuth",(function(){return a("G0OFq").o})),e(t.exports,"onAuthStateChanged",(function(){return a("G0OFq").x})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("G0OFq").a9})),e(t.exports,"signOut",(function(){return a("G0OFq").B})),e(t.exports,"updateProfile",(function(){return a("G0OFq").ai})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("G0OFq")})),a.register("G0OFq",(function(n,r){e(n.exports,"a8",(function(){return Yt})),e(n.exports,"a9",(function(){return Qt})),e(n.exports,"ad",(function(){return en})),e(n.exports,"ai",(function(){return an})),e(n.exports,"x",(function(){return cn})),e(n.exports,"B",(function(){return ln})),e(n.exports,"o",(function(){return ni}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),f=a("fVNic"),d=a("eYQtU"),p=a("1t1Wn"),h=a("8nrFW"),v=a("2MbLg"),m=a("2TvXO"),g=a("2xDiJ"),y=a("MjY8E"),b=a("4tSb9"),k=a("kZfxc"),x=a("6ExWU");function w(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var I=w,_=new(0,g.ErrorFactory)("auth","Firebase",w()),E=new(0,k.Logger)("@firebase/auth");function T(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;E.logLevel<=k.LogLevel.WARN&&(a=E).warn.apply(a,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(t(h)(r)))}function S(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;E.logLevel<=k.LogLevel.ERROR&&(a=E).error.apply(a,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(t(h)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw O.apply(void 0,[e].concat(t(h)(r)))}function C(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return O.apply(void 0,[e].concat(t(h)(r)))}function A(e,n,r){var i=Object.assign(Object.assign({},I()),t(c)({},n,r));return new(0,g.ErrorFactory)("auth","Firebase",i).create(n,{appName:e.name})}function O(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t(h)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(h)(u)))}return(a=_).create.apply(a,[e].concat(t(h)(r)))}function R(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw O.apply(void 0,[n].concat(t(h)(i)))}function L(e){var t="INTERNAL ASSERTION FAILED: "+e;throw S(t),new Error(t)}function D(e,t){e||L(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function M(){return"http:"===U()||"https:"===U()}function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var B=function(){"use strict";function e(n,r){t(s)(this,e),this.shortDelay=n,this.longDelay=r,D(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return t(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(M()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){D(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,F=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),W=(z={},t(c)(z,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(z,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(z,"INVALID_IDENTIFIER","invalid-email"),t(c)(z,"MISSING_CONTINUE_URI","internal-error"),t(c)(z,"INVALID_PASSWORD","wrong-password"),t(c)(z,"MISSING_PASSWORD","missing-password"),t(c)(z,"EMAIL_EXISTS","email-already-in-use"),t(c)(z,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(z,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(z,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(z,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(z,"MISSING_REQ_TYPE","internal-error"),t(c)(z,"EMAIL_NOT_FOUND","user-not-found"),t(c)(z,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(z,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(z,"INVALID_OOB_CODE","invalid-action-code"),t(c)(z,"MISSING_OOB_CODE","internal-error"),t(c)(z,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(z,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(z,"TOKEN_EXPIRED","user-token-expired"),t(c)(z,"USER_NOT_FOUND","user-token-expired"),t(c)(z,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(z,"INVALID_CODE","invalid-verification-code"),t(c)(z,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(z,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(z,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(z,"SESSION_EXPIRED","code-expired"),t(c)(z,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(z,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(z,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(z,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(z,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(z,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(z,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(z,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(z,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(z,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(z,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),t(c)(z,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),t(c)(z,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),t(c)(z,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),t(c)(z,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),t(c)(z,"MISSING_CLIENT_TYPE","missing-client-type"),t(c)(z,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),t(c)(z,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),t(c)(z,"INVALID_REQ_TYPE","invalid-req-type"),z),V=new B(3e4,6e4);function H(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function q(e,t,n,r){return K.apply(this,arguments)}function K(){return K=t(o)(t(m).mark((function e(n,r,i,a){var s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",G(n,s,t(o)(t(m).mark((function e(){var o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,g.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",F.fetch()(Q(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function G(e,t,n){return J.apply(this,arguments)}function J(){return(J=t(o)(t(m).mark((function e(n,r,i){var a,o,s,u,c,l,f,d,h;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},W),r),e.prev=2,o=new $(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw Z(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(p)(c.split(" : "),2),f=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw Z(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw Z(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw Z(n,"user-disabled",u);case 29:if(h=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw A(n,h,d);case 34:N(n,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:N(n,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Y(e,t,n,r){return X.apply(this,arguments)}function X(){return X=t(o)(t(m).mark((function e(n,r,i,a){var o,s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,q(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&N(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function Q(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?j(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var $=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(C(n.auth,"network-request-failed"))}),V.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Z(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=C(e,t,r);return i.customData._tokenResponse=n,i}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return ae=t(o)(t(m).mark((function e(n){var r,i,a,o,s,u,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,R((o=se(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ie(oe(o.auth_time)),issuedAtTime:ie(oe(o.iat)),expirationTime:ie(oe(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function oe(e){return 1e3*Number(e)}function se(e){var n=t(p)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return S("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,g.base64Decode)(i);return o?JSON.parse(o):(S("Failed to decode base64 JWT payload"),null)}catch(e){return S("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ue(e,t){return ce.apply(this,arguments)}function ce(){return ce=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){var i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&le(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),ce.apply(this,arguments)}function le(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe=function(){"use strict";function e(n){t(s)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),de=function(){"use strict";function e(n,r){t(s)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=ie(this.lastLoginAt),this.creationTime=ie(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){return he.apply(this,arguments)}function he(){return(he=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n){var r,i,a,o,s,u,c,l,f,d,p;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,ue(n,ne(i,{idToken:a}));case 7:R(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?ge(s.providerUserInfo):[],c=me(n.providerData,u),l=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new de(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return(ve=t(o)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,g.getModularInstance)(n),e.next=3,pe(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(h)(r).concat(t(h)(n))}function ge(e){return e.map((function(e){var t=e.providerId,n=(0,b.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ye(e,t){return be.apply(this,arguments)}function be(){return(be=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n,{},t(o)(t(m).mark((function e(){var i,a,o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Q(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",F.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){R(e.idToken,"internal-error"),R(void 0!==e.idToken,"internal-error"),R(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,R(n=se(t),"internal-error"),R(void 0!==n.exp,"internal-error"),R(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(R(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(o)(t(m).mark((function i(){var a,o,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ye(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return L("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(R("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(R("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(R("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t){R("string"==typeof e||void 0===e,"internal-error",{appName:t})}var we=function(){"use strict";function e(n){t(s)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=(0,b.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(h)(o.providerData):[],this.metadata=new de(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(R(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ae.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ve.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var n=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(m).mark((function i(){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,pe(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,ue(e,ee(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,k=n.emailVerified,x=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;R(b&&I,t,"internal-error");var _=ke.fromJSON(this.name,I);R("string"==typeof b,t,"internal-error"),xe(f,t.name),xe(d,t.name),R("boolean"==typeof k,t,"internal-error"),R("boolean"==typeof x,t,"internal-error"),xe(p,t.name),xe(h,t.name),xe(v,t.name),xe(m,t.name),xe(g,t.name),xe(y,t.name);var E=new e({uid:b,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:x,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:_,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(o)(t(m).mark((function a(){var o,s;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new ke).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,pe(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),Ie=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){D(e instanceof Function,"Expected a class definition");var t=Ie.get(e);return t?(D(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ie.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();Ee.type="NONE";var Te=Ee;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ne=function(){"use strict";function e(n,r,i){t(s)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Se(this.userKey,o.apiKey,u),this.fullPersistenceKey=Se("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?we._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(o)(t(m).mark((function a(){var s,u,c,l,f,d,p,h,v,g,y,b,k;return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(_e(Te),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(o)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||_e(Te),c=Se(i,n.config.apiKey,n.name),l=null,f=!0,d=!1,p=void 0,a.prev=9,h=r[Symbol.iterator]();case 11:if(f=(v=h.next()).done){a.next=29;break}return g=v.value,a.prev=13,a.next=16,g._get(c);case 16:if(!(y=a.sent)){a.next=22;break}return b=we._fromJSON(n,y),g!==u&&(l=b),u=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,p=a.t1;case 35:a.prev=35,a.prev=36,f||null==h.return||h.return();case 38:if(a.prev=38,!d){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(u,n,i));case 46:if(u=k[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(o)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Le(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ae(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pe(t))return"Blackberry";if(Me(t))return"Webos";if(Oe(t))return"Safari";if((t.includes("chrome/")||Re(t))&&!t.includes("edge/"))return"Chrome";if(De(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Be(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function je(){return(0,g.isIE)()&&10===document.documentMode}function ze(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||De(e)||Me(e)||Pe(e)||/windows phone/i.test(e)||Le(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ce((0,g.getUA)());break;case"Worker":t="".concat(Ce((0,g.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(r)}function We(e,t){return Ve.apply(this,arguments)}function Ve(){return(Ve=t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"GET","/v2/recaptchaConfig",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return void 0!==e&&void 0!==e.enterprise}var qe=function e(n){"use strict";if(t(s)(this,e),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=C("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Ge(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var Je="https://www.google.com/recaptcha/enterprise.js?render=",Ye="NO_RECAPTCHA",Xe=function(){"use strict";function e(n){t(s)(this,e),this.type="recaptcha-enterprise",this.auth=tt(n)}return t(u)(e,[{key:"verify",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(m).mark((function i(){var a,s,u;return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=function(e){return s.apply(this,arguments)},s=function(){return s=t(o)(t(m).mark((function e(r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){e.next=3;break}return e.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){e.next=5;break}return e.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return e.abrupt("return",new Promise(function(){var e=t(o)(t(m).mark((function e(n,i){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:We(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new qe(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)},u=function(t,n,r){var i=window.grecaptcha;He(i)?i.enterprise.ready((function(){i.enterprise.execute(t,{action:e}).then((function(e){n(e)})).catch((function(){n(Ye)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){a(r.auth).then((function(r){if(!n&&He(window.grecaptcha))u(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Ke(Je+r).then((function(){u(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),e}();function Qe(e,t,n){return $e.apply(this,arguments)}function $e(){return $e=t(o)(t(m).mark((function e(n,r,i){var a,o,s,u,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]&&c[3],o=new Xe(n),e.prev=3,e.next=6,o.verify(i);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,o.verify(i,!0);case 13:s=e.sent;case 14:return u=Object.assign({},r),a?Object.assign(u,{captchaResp:s}):Object.assign(u,{captchaResponse:s}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",u);case 19:case"end":return e.stop()}}),e,null,[[3,9]])}))),$e.apply(this,arguments)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a,o,s,u,c,l,f,d,p,h,v,g;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,a=!0,o=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){t.next=15;break}return l=c.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),o=!0,s=t.t0;case 21:t.prev=21,t.prev=22,a||null==u.return||u.return();case 24:if(t.prev=24,!o){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),f=!0,d=!1,p=void 0,t.prev=35,h=i[Symbol.iterator]();!(f=(v=h.next()).done);f=!0){g=v.value;try{g()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),d=!0,p=t.t2;case 43:t.prev=43,t.prev=44,f||null==h.return||h.return();case 46:if(t.prev=46,!d){t.next=49;break}throw p;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),et=function(){"use strict";function e(n,r,i,a){t(s)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nt(this),this.idTokenSubscription=new nt(this),this.beforeStateQueue=new Ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=_e(n));var r=this;return this._initializationPromise=this.queue(t(o)(t(m).mark((function i(){var a,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Ne.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a,o,s,u,c,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return R(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pe(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&R(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&R(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(_e(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"initializeRecaptchaConfig",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r,i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,We(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"});case 2:r=t.sent,i=new qe(r),null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.emailPasswordEnabled&&new Xe(e).verify();case 6:case"end":return t.stop()}}),n)})))()}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(o)(t(m).mark((function i(){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return R(i=e&&_e(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Ne.create(n,[_e(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a;return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fe(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r,i,a,o;return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,e._getAppCheckToken();case 9:return(o=n.sent)&&(i["X-Firebase-AppCheck"]=o),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r,i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,null===(r=e.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=t.sent)?void 0:i.error)&&T("Error while retrieving App Check token: ".concat(i.error)),t.abrupt("return",null==i?void 0:i.token);case 6:case"end":return t.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return(0,g.getModularInstance)(e)}var nt=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return r.observer=e}))}return t(u)(e,[{key:"next",get:function(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){var n=(0,y._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return r;N(r,"already-initialized")}return n.initialize({options:t})}function it(e,n,r){var i=tt(e);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=at(n),s=function(e){var n=at(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:ot(i.substr(o.length+1))}}var s=t(p)(i.split(":"),2);return{host:s[0],port:ot(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function at(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ot(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var st=function(){"use strict";function e(n,r){t(s)(this,e),this.providerId=n,this.signInMethod=r}return t(u)(e,[{key:"toJSON",value:function(){return L("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return L("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return L("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return L("not implemented")}}]),e}();function ut(e,t){return ct.apply(this,arguments)}function ct(){return(ct=t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lt(e,t){return ft.apply(this,arguments)}function ft(){return(ft=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithPassword",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dt(e,t){return pt.apply(this,arguments)}function pt(){return(pt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithEmailLink",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ht(e,t){return vt.apply(this,arguments)}function vt(){return(vt=t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithEmailLink",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return t(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a,s;return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(a={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,Qe(e,a,"signInWithPassword");case 8:return s=r.sent,r.abrupt("return",lt(e,s));case 12:return r.abrupt("return",lt(e,a).catch(function(){var n=t(o)(t(m).mark((function n(r){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("auth/missing-recaptcha-token"!==r.code){t.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),t.next=4,Qe(e,a,"signInWithPassword");case 4:return i=t.sent,t.abrupt("return",lt(e,i));case 8:return t.abrupt("return",Promise.reject(r));case 9:case"end":return t.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",dt(e,{email:n._email,oobCode:n._password}));case 14:N(e,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",ut(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",ht(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:N(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(st);function gt(e,t){return yt.apply(this,arguments)}function yt(){return(yt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithIdp",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return gt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,gt(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,gt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):N("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,b.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(st);function kt(e,t){return xt.apply(this,arguments)}function xt(){return(xt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:sendVerificationCode",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wt(){return(wt=t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithPhoneNumber",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function It(){return(It=t(o)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(n,"POST","/v1/accounts:signInWithPhoneNumber",H(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Z(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _t=t(c)({},"USER_NOT_FOUND","user-not-found");function Et(){return(Et=t(o)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithPhoneNumber",H(n,i),_t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return wt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return It.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Et.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(st);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St=function(){"use strict";function e(n){var r,i,a,o,u,c;t(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(n)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);R(f&&d&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,n=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,r=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(r?(0,g.querystringDecode)((0,g.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nt=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return mt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=St.parseLink(t);return R(n,"argument-error"),mt._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();Nt.PROVIDER_ID="password",Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ct=function(){"use strict";function e(n){t(s)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),At=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(h)(this.scopes)}}]),r}(Ct),Ot=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"facebook.com")}return t(u)(r,null,[{key:"credential",value:function(e){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(At);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ot.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(u)(r,null,[{key:"credential",value:function(e,t){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(At);Rt.GOOGLE_SIGN_IN_METHOD="google.com",Rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"github.com")}return t(u)(r,null,[{key:"credential",value:function(e){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(At);Lt.GITHUB_SIGN_IN_METHOD="github.com",Lt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"twitter.com")}return t(u)(r,null,[{key:"credential",value:function(e,t){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(At);function Pt(e,t){return Mt.apply(this,arguments)}function Mt(){return(Mt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signUp",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.TWITTER_SIGN_IN_METHOD="twitter.com",Dt.PROVIDER_ID="twitter.com";var Ut=function(){"use strict";function e(n){t(s)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(o)(t(m).mark((function o(){var s,u,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,we._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,u=Bt(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(o)(t(m).mark((function a(){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Bt(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function Bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,a,o,u){var c,l;return t(s)(this,r),(c=n.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(t(i)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return t(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(g.FirebaseError);function zt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw jt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){return Wt.apply(this,arguments)}function Wt(){return Wt=t(o)(t(m).mark((function e(n,r){var i,a,o=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=ue,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Ut._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),Wt.apply(this,arguments)}function Vt(e,t){return Ht.apply(this,arguments)}function Ht(){return Ht=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){var i,a,o,s,u,c,l=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,ue(n,zt(a,o,r,n),i);case 6:return R((s=e.sent).idToken,a,"internal-error"),R(u=se(s.idToken),a,"internal-error"),c=u.sub,R(n.uid===c,a,"user-mismatch"),e.abrupt("return",Ut._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&N(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Ht.apply(this,arguments)}function qt(e,t){return Kt.apply(this,arguments)}function Kt(){return Kt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){var i,a,o,s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,zt(n,a,r);case 4:return o=e.sent,e.next=7,Ut._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Kt.apply(this,arguments)}function Gt(e,t){return Jt.apply(this,arguments)}function Jt(){return(Jt=t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",qt(tt(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Yt(e,t,n){return Xt.apply(this,arguments)}function Xt(){return Xt=t(o)(t(m).mark((function e(n,r,i){var a,s,u,c,l,f,d;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=tt(n),u={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(a=s._getRecaptchaConfig())||void 0===a?void 0:a.emailPasswordEnabled)){e.next=11;break}return e.next=7,Qe(s,u,"signUpPassword");case 7:l=e.sent,c=Pt(s,l),e.next=12;break;case 11:c=Pt(s,u).catch(function(){var e=t(o)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=8;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,Qe(s,u,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",Pt(s,r));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 12:return e.next=14,c.catch((function(e){return Promise.reject(e)}));case 14:return f=e.sent,e.next=17,Ut._fromIdTokenResponse(s,"signIn",f);case 17:return d=e.sent,e.next=20,s._updateCurrentUser(d.user);case 20:return e.abrupt("return",d);case 21:case"end":return e.stop()}}),e)}))),Xt.apply(this,arguments)}function Qt(e,t,n){return Gt((0,g.getModularInstance)(e),Nt.credential(t,n))}function $t(e,t){return Zt.apply(this,arguments)}function Zt(){return(Zt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:createAuthUri",H(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function en(e,t){return tn.apply(this,arguments)}function tn(){return(tn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){var i,a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=M()?P():"http://localhost",a={identifier:r,continueUri:i},e.next=4,$t((0,g.getModularInstance)(n),a);case 4:return o=e.sent.signinMethods,e.abrupt("return",o||[]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function nn(e,t){return rn.apply(this,arguments)}function rn(){return(rn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function an(e,t){return on.apply(this,arguments)}function on(){return(on=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n,r){var i,a,o,s,u,c,l;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.displayName,a=r.photoURL,void 0!==i||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return o=(0,g.getModularInstance)(n),e.next=6,o.getIdToken();case 6:return s=e.sent,u={idToken:s,displayName:i,photoUrl:a,returnSecureToken:!0},e.next=10,ue(o,nn(o.auth,u));case 10:return c=e.sent,o.displayName=c.displayName||null,o.photoURL=c.photoUrl||null,(l=o.providerData.find((function(e){return"password"===e.providerId})))&&(l.displayName=o.displayName,l.photoURL=o.photoURL),e.next=17,o._updateTokensIfNecessary(c);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function sn(e,t,n,r){return(0,g.getModularInstance)(e).onIdTokenChanged(t,n,r)}function un(e,t,n){return(0,g.getModularInstance)(e).beforeAuthStateChanged(t,n)}function cn(e,t,n,r){return(0,g.getModularInstance)(e).onAuthStateChanged(t,n,r)}function ln(e){return(0,g.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:start",H(e,t))}function dn(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:finalize",H(e,t))}new WeakMap;var pn="__sak",hn=function(){"use strict";function e(n,r){t(s)(this,e),this.storageRetriever=n,this.type=r}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(pn,"1"),this.storage.removeItem(pn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vn=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e,i;return t(s)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Oe(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=ze(),e._shouldAllowMigration=!0,e}return t(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);je()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(o)(t(m).mark((function o(){return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(f)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(o)(t(m).mark((function a(){var o;return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(f)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(o)(t(m).mark((function a(){return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(f)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(hn);vn.type="LOCAL";var mn=vn,gn=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(hn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.type="SESSION";var yn=gn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e){return Promise.all(e.map((n=t(o)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn=function(){"use strict";function e(n){t(s)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a,s,u,c,l,f,d;return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var e=t(o)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,bn(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn.receivers=[];var wn=function(){"use strict";function e(n){t(s)(this,e),this.target=n,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(o)(t(m).mark((function a(){var o,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=xn("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function _n(e){In().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return void 0!==In().WorkerGlobalScope&&"function"==typeof In().importScripts}function Tn(){return Sn.apply(this,arguments)}function Sn(){return(Sn=t(o)(t(m).mark((function e(){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nn="firebaseLocalStorageDb",Cn="firebaseLocalStorage",An="fbase_key",On=function(){"use strict";function e(n){t(s)(this,e),this.request=n}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Rn(e,t){return e.transaction([Cn],t?"readwrite":"readonly").objectStore(Cn)}function Ln(){var e=indexedDB.deleteDatabase(Nn);return new On(e).toPromise()}function Dn(){var e=indexedDB.open(Nn,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Cn,{keyPath:An})}catch(e){r(e)}})),e.addEventListener("success",t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Cn)){t.next=12;break}return i.close(),t.next=5,Ln();case 5:return t.t0=n,t.next=8,Dn();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Pn(e,t,n){return Mn.apply(this,arguments)}function Mn(){return(Mn=t(o)(t(m).mark((function e(n,r,i){var a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Rn(n,!0).put((a={},t(c)(a,An,r),t(c)(a,"value",i),a)),e.abrupt("return",new On(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Un(e,t){return Bn.apply(this,arguments)}function Bn(){return(Bn=t(o)(t(m).mark((function e(n,r){var i,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Rn(n,!1).get(r),e.next=3,new On(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jn(e,t){var n=Rn(e,!0).delete(t);return new On(n).toPromise()}var zn=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Dn();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",En()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=kn._getInstance(En()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(o)(t(m).mark((function n(r,i){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(o)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r,i,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Tn();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new wn(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(o)(t(m).mark((function e(){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Dn();case 5:return n=e.sent,e.next=8,Pn(n,pn,"1");case 8:return e.next=10,jn(n,pn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Pn(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Un(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return jn(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r,i,a,o,s,u,c,l,f,d,p,h,v,g,y,b,k;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Rn(e,!1).getAll();return new On(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,d=f.fbase_key,p=f.value,a.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(p)&&(e.notifyListeners(d,p),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(h=!0,v=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(h=(b=y.next()).done);h=!0)k=b.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,g=t.t1;case 35:t.prev=35,t.prev=36,h||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();zn.type="LOCAL";var Fn=zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:start",H(e,t))}function Vn(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:finalize",H(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ge("rcb"),new B(3e4,6e4);var Hn="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e,t,n){return Kn.apply(this,arguments)}function Kn(){return(Kn=t(o)(t(m).mark((function e(n,r,i){var a,o,s,u,c,l,f,d;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,R("string"==typeof o,n,"argument-error"),R(i.type===Hn,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return R("enroll"===u.type,n,"internal-error"),e.next=15,fn(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return R("signin"===u.type,n,"internal-error"),R(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Wn(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,kt(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gn=function(){"use strict";function e(n){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=tt(n)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return qn(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return Tt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Tt._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(e,t){return t?_e(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.PROVIDER_ID="phone",Gn.PHONE_SIGN_IN_METHOD="phone";var Yn=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return gt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return gt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return gt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(st);function Xn(e){return qt(e.auth,new Yn(e),e.bypassAuthState)}function Qn(e){var t=e.auth,n=e.user;return R(n,t,"internal-error"),Vt(n,new Yn(e),e.bypassAuthState)}function $n(e){return Zn.apply(this,arguments)}function Zn(){return(Zn=t(o)(t(m).mark((function e(n){var r,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,R(i=n.user,r,"internal-error"),e.abrupt("return",Ft(i,new Yn(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var er=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(u)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(o)(t(m).mark((function e(r,i){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a,o,s,u,c,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xn;case"linkViaPopup":case"linkViaRedirect":return $n;case"reauthViaPopup":case"reauthViaRedirect":return Qn;default:N(this.auth,"internal-error")}}},{key:"resolve",value:function(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),tr=new B(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,a,o,u,c){var l;return t(s)(this,r),(l=n.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(i)(l),l}return t(u)(r,[{key:"executeNotNull",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return R(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(o)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(1===e.filter.length,"Popup operations only handle one event"),r=xn(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(C(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(C(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(C(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,tr.get())};t()}}]),r}(er);nr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rr=new Map,ir=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(u)(r,[{key:"execute",value:function(){var e=this,n=this;return t(o)(t(m).mark((function i(){var a,o;return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=rr.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ar(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(f)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:rr.set(n.auth._key(),a);case 21:return n.bypassAuthState||rr.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t(l)(t(f)(r.prototype),"onAuthEvent",n)};return t(o)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(er);function ar(e,t){return or.apply(this,arguments)}function or(){return(or=t(o)(t(m).mark((function e(n,r){var i,a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=cr(r),a=ur(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function sr(e,t){rr.set(e._key(),t)}function ur(e){return _e(e._redirectPersistence)}function cr(e){return Se("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e,t){return fr.apply(this,arguments)}function fr(){return fr=t(o)(t(m).mark((function e(n,r){var i,a,o,s,u,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=tt(n),o=Jn(a,r),s=new ir(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),fr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!hr(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(C(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(pr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(pr(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function pr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function hr(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function vr(e){return mr.apply(this,arguments)}function mr(){return mr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(m).mark((function e(n){var r,i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",q(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),mr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yr=/^https?/;function br(){return(br=t(o)(t(m).mark((function e(n){var r,i,a,o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,vr(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!kr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:N(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function kr(e){var t=P(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!yr.test(r))return!1;if(gr.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr=new B(3e4,6e4);function wr(){var e=In().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(h)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Ir=null;function _r(e){return Ir=Ir||function(e){return new Promise((function(t,n){var r,i,a;function o(){wr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){wr(),n(C(e,"network-request-failed"))},timeout:xr.get()})}if(null===(i=null===(r=In().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=In().gapi)||void 0===a?void 0:a.load)){var s=Ge("iframefcb");return In()[s]=function(){gapi.load?o():n(C(e,"network-request-failed"))},Ke("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Ir=null,e}))}(e),Ir}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er=new B(5e3,15e3),Tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nr(e){var t=e.config;R(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?j(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=Sr.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,g.querystring)(r).slice(1))}function Cr(e){return Ar.apply(this,arguments)}function Ar(){return Ar=t(o)(t(m).mark((function e(n){var r,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_r(n);case 2:return r=e.sent,R(i=In().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Nr(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tr,dontclear:!0},(function(e){return new Promise((r=t(o)(t(m).mark((function r(i,a){var o,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){In().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=C(n,"network-request-failed"),s=In().setTimeout((function(){a(o)}),Er.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Ar.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rr="_blank",Lr="http://localhost",Dr=function(){"use strict";function e(n){t(s)(this,e),this.window=n,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Pr(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Or),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,g.getUA)().toLowerCase();r&&(u=Re(l)?Rr:r),Ae(l)&&(n=n||Lr,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,n){var r=t(p)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Be(l)&&"_self"!==u)return Mr(n||"",u),new Dr(null);var d=window.open(n||"",u,f);R(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Dr(d)}function Mr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur=encodeURIComponent("fac");function Br(e,t,n,r,i,a){return jr.apply(this,arguments)}function jr(){return(jr=t(o)(t(m).mark((function e(n,r,i,a,o,s){var u,c,l,f,d,h,v,b,k,x,w,I,_,E,T,S,N,C,A;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key"),u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:y.SDK_VERSION,eventId:o},!(r instanceof Ct)){e.next=24;break}for(r.setDefaultLanguage(n.languageCode),u.providerId=r.providerId||"",(0,g.isEmpty)(r.getCustomParameters())||(u.customParameters=JSON.stringify(r.getCustomParameters())),c=!0,l=!1,f=void 0,e.prev=8,d=Object.entries(s||{})[Symbol.iterator]();!(c=(h=d.next()).done);c=!0)v=t(p)(h.value,2),b=v[0],k=v[1],u[b]=k;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),l=!0,f=e.t0;case 16:e.prev=16,e.prev=17,c||null==d.return||d.return();case 19:if(e.prev=19,!l){e.next=22;break}throw f;case 22:return e.finish(19);case 23:return e.finish(16);case 24:for(r instanceof At&&(x=r.getScopes().filter((function(e){return""!==e}))).length>0&&(u.scopes=x.join(",")),n.tenantId&&(u.tid=n.tenantId),w=u,I=!0,_=!1,E=void 0,e.prev=28,T=Object.keys(w)[Symbol.iterator]();!(I=(S=T.next()).done);I=!0)N=S.value,void 0===w[N]&&delete w[N];e.next=36;break;case 32:e.prev=32,e.t1=e.catch(28),_=!0,E=e.t1;case 36:e.prev=36,e.prev=37,I||null==T.return||T.return();case 39:if(e.prev=39,!_){e.next=42;break}throw E;case 42:return e.finish(39);case 43:return e.finish(36);case 44:return e.next=46,n._getAppCheckToken();case 46:return C=e.sent,A=C?"#".concat(Ur,"=").concat(encodeURIComponent(C)):"",e.abrupt("return","".concat(zr(n),"?").concat((0,g.querystring)(w).slice(1)).concat(A));case 49:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function zr(e){var t=e.config;return t.emulator?j(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr="webStorageSupport",Wr=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yn,this._completeRedirectFn=lr,this._overrideRedirectResult=sr}return t(u)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(o)(t(m).mark((function o(){var s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),t.next=4,Br(e,n,r,P(),i);case 4:return u=t.sent,t.abrupt("return",Pr(e,u,xn()));case 6:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(o)(t(m).mark((function o(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return t.next=4,Br(e,n,r,P(),i);case 4:return _n(t.sent),t.abrupt("return",new Promise((function(){})));case 7:case"end":return t.stop()}}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(D(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Cr(e);case 2:return i=t.sent,a=new dr(e),i.register("authEvent",(function(t){return R(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Fr,{type:Fr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),N(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return br.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return ze()||Oe()||Ue()}}]),e}(),Vr=Wr,Hr=function(){"use strict";function e(n){t(s)(this,e),this.factorId=n}return t(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return L("unexpected MultiFactorSessionType")}}}]),e}(),qr=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:finalize",H(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:finalize",H(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Hr);(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return qr._fromCredential(e)}}]),e}()).FACTOR_ID="phone",(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertionForEnrollment",value:function(e,t){return Kr._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Kr._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(e){return t(o)(t(m).mark((function n(){var r,i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R(void 0!==(r=e).auth,"internal-error"),t.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},q(n,"POST","/v2/accounts/mfaEnrollment:start",H(n,a));case 4:return i=t.sent,t.abrupt("return",Gr._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return t.stop()}var n,a}),n)})))()}}]),e}()).FACTOR_ID="totp";var Kr=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i,a){var o;return t(s)(this,r),(o=n.call(this,"totp")).otp=e,o.enrollmentId=i,o.secret=a,o}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,n,r){var i=this;return t(o)(t(m).mark((function a(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R(void 0!==i.secret,e,"argument-error"),t.abrupt("return",dn(e,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return t.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(e,n){var r=this;return t(o)(t(m).mark((function i(){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R(void 0!==r.enrollmentId&&void 0!==r.otp,e,"argument-error"),a={verificationCode:r.otp},t.abrupt("return",Vn(e,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return t.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Hr),Gr=function(){"use strict";function e(n,r,i,a,o,u,c){t(s)(this,e),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return t(u)(e,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Jr(e)||Jr(t))&&(r=!0),r&&(Jr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Jr(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}}]),e}();function Jr(e){return void 0===e||0===(null==e?void 0:e.length)}var Yr="@firebase/auth",Xr="0.23.2",Qr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(o)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $r,Zr=(0,g.getExperimentalSetting)("authIdTokenMaxAge")||300,ei=null,ti=function(e){return n=t(o)(t(m).mark((function n(r){var i,a,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Zr)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,ei!==o){t.next=12;break}return t.abrupt("return");case 12:return ei=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function ni(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=rt(e,{popupRedirectResolver:Vr,persistence:[Fn,mn,yn]}),r=(0,g.getExperimentalSetting)("authTokenSyncURL");if(r){var i=ti(r);un(n,i,(function(){return i(n.currentUser)})),sn(n,(function(e){return i(e)}))}var a=(0,g.getDefaultEmulatorHost)("auth");return a&&it(n,"http://".concat(a)),n}$r="Browser",(0,y._registerComponent)(new(0,x.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;R(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:$r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fe($r)},l=new et(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_e);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,x.Component)("auth-internal",(function(e){var t=tt(e.getProvider("auth").getImmediate());return new Qr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(Yr,Xr,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}($r)),(0,y.registerVersion)(Yr,Xr,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a.register("h6c0i",(function(e,t){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,d=function(s,l,d,h){if(!u("body"))return!1;t||p.Notify.init({});var v=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof h&&!Array.isArray(h)){var m={};"object"==typeof d?m=d:"object"==typeof h&&(m=h),t=c(!0,t,m)}var g,y,b=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(g=l,(y=e.document.createElement("div")).innerHTML=g,l=y.textContent||y.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var k=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(k.id=o.wrapID,k.style.width=t.width,k.style.zIndex=t.zindex,k.style.opacity=t.opacity,"center-center"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.margin="auto",k.classList.add("nx-flex-center-center"),k.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.justifyContent="center",k.style.alignItems="center",k.style.pointerEvents="none"):"center-top"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.top=t.distance,k.style.bottom="auto",k.style.margin="auto"):"center-bottom"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.margin="auto"):"right-bottom"===t.position?(k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.left="auto"):"left-top"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right="auto",k.style.bottom="auto"):"left-bottom"===t.position?(k.style.left=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.right="auto"):(k.style.right=t.distance,k.style.top=t.distance,k.style.left="auto",k.style.bottom="auto"),t.backOverlay){var x=e.document.getElementById(o.overlayID)||e.document.createElement("div");x.id=o.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=t.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||t.backOverlayColor,x.className=t.cssAnimation?"nx-with-animation":"",x.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(x)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(k);var w=e.document.createElement("div");w.id=t.ID+"-"+f,w.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=t.fontSize,w.style.color=b.textColor,w.style.background=b.background,w.style.borderRadius=t.borderRadius,w.style.pointerEvents="all",t.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(w.style.animationDuration=t.cssAnimationDuration+"ms");var I="";if(t.closeButton&&"function"!=typeof d&&(I='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)w.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?I:"");else{var _="";s===n?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=_+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?I:"")}else w.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?I:"");if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(o.wrapID);E.insertBefore(w,E.firstChild)}else e.document.getElementById(o.wrapID).appendChild(w);var T=e.document.getElementById(w.id);if(T){var S,N,C=function(){T.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&k.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},A=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),k.childElementCount<=0&&null!==k.parentNode){k.parentNode.removeChild(k);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(N)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(w.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof d&&d(),C();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var O=function(){S=setTimeout((function(){C()}),t.timeout),N=setTimeout((function(){A()}),t.timeout+t.cssAnimationDuration)};O(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(N)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),O()})))}}if(t.showOnlyTheLastOne&&f>0)for(var R=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),L=0;L<R.length;L++){var D=R[L];null!==D.parentNode&&D.parentNode.removeChild(D)}t=c(!0,t,v)},p={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){d(n,e,t,r)},failure:function(e,t,n){d(r,e,t,n)},warning:function(e,t,n){d(i,e,t,n)},info:function(e,t,n){d(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),a.register("7rQOT",(function(e,t){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",r="Hourglass",i="Circle",a="Arrows",o="Dots",s="Pulse",u="Custom",c="Notiflix",l={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(f('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},p=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=p(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},h=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},v=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},m=function(c,v,m,y,b){if(!d("body"))return!1;t||g.Loading.init({});var k=p(!0,t,{});if("object"==typeof v&&!Array.isArray(v)||"object"==typeof m&&!Array.isArray(m)){var x={};"object"==typeof v?x=v:"object"==typeof m&&(x=m),t=p(!0,t,x)}var w,I,_="";if("string"==typeof v&&v.length>0&&(_=v),y){var E="";(_=_.length>t.messageMaxLength?h(_).toString().substring(0,t.messageMaxLength)+"...":h(_).toString()).length>0&&(E='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+_+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var T="";if(c===n)w=t.svgSize,I=t.svgColor,w||(w="60px"),I||(I="#32c682"),T='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+I+'" width="'+w+'" height="'+w+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===r)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===i)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===a)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===u&&null!==t.customSvgCode&&null===t.customSvgUrl)T=t.customSvgCode||"";else if(c===u&&null!==t.customSvgUrl&&null===t.customSvgCode)T='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===u&&(null===t.customSvgUrl||null===t.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;T=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var S=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),N=e.innerWidth,C=S>=N?N-40+"px":S+"px",A='<div style="width:'+C+"; height:"+C+';" class="'+t.className+"-icon"+(_.length>0?" nx-with-message":"")+'">'+T+"</div>",O=e.document.createElement("div");O.id=l.ID,O.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),O.style.zIndex=t.zindex,O.style.background=t.backgroundColor,O.style.animationDuration=t.cssAnimationDuration+"ms",O.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',O.style.display="flex",O.style.flexWrap="wrap",O.style.flexDirection="column",O.style.alignItems="center",O.style.justifyContent="center",t.rtl&&(O.setAttribute("dir","rtl"),O.classList.add("nx-rtl-on")),O.innerHTML=A+E,e.document.getElementById(O.id)||(e.document.body.appendChild(O),t.clickToClose&&e.document.getElementById(O.id).addEventListener("click",(function(){O.classList.add("nx-remove");var e=setTimeout((function(){null!==O.parentNode&&(O.parentNode.removeChild(O),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(l.ID))var R=e.document.getElementById(l.ID),L=setTimeout((function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(L)}),b);t=p(!0,t,k)},g={Loading:{init:function(n){t=p(!0,l,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(v,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return f("You have to initialize the Loading module before call Merge function."),!1;t=p(!0,t,e)},standard:function(e,t){m(n,e,t,!0,0)},hourglass:function(e,t){m(r,e,t,!0,0)},circle:function(e,t){m(i,e,t,!0,0)},arrows:function(e,t){m(a,e,t,!0,0)},dots:function(e,t){m(o,e,t,!0,0)},pulse:function(e,t){m(s,e,t,!0,0)},custom:function(e,t){m(u,e,t,!0,0)},notiflix:function(e,t){m(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),m(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var r=e.document.getElementById(l.ID);if(r)if(n.length>0){n=n.length>t.messageMaxLength?h(n).substring(0,t.messageMaxLength)+"...":h(n);var i=r.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var a=e.document.createElement("p");a.id=t.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=t.messageColor,a.style.fontSize=t.messageFontSize,a.innerHTML=n,r.appendChild(a)}}else f("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?p(!0,e.Notiflix,{Loading:g.Loading}):{Loading:g.Loading}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),a("euqRf")}();
//# sourceMappingURL=index.ed56c05f.js.map
