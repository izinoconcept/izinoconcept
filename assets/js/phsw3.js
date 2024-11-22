(()=>{var t,e,n={6348:(t,e,n)=>{"use strict";n.d(e,{M:()=>a});const r=["brands","mobile","platform","platformVersion","architecture","bitness","wow64","model","fullVersionList"];async function a(){if(!("userAgentData"in navigator))return{};try{return await navigator.userAgentData.getHighEntropyValues(r)}catch(t){return{}}}},8476:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});class r{name="";constructor(t){this.name=t}static default(){return new r("")}static named(t){return new r(t)}debug(t,...e){this._log("debug",t,...e)}warn(t,...e){this._log("warn",t,...e)}error(t,...e){this._log("error",t,...e)}_log(t,e,...n){"object"==typeof e&&(e=JSON.stringify(e));const r=this.name?`[${this.name}] ${e}`:e;switch(t){case"debug":console.debug(r,...n);break;case"warn":console.warn(r,...n);break;case"error":console.error(r,...n);break;default:throw new Error(`unknown level=${t}`)}}}},417:(t,e,n)=>{"use strict";n.d(e,{H:()=>a});var r=n(8476);class a{enabled=!1;context={traceId:"",subacc:0,jsVersion:""};logsDomain="";constructor(t,e,n,r,a){this.context={...a,traceId:t,subacc:n,jsVersion:r},this.logsDomain=e}enable(){this.enabled=!0}trackCustomEvent(t,e,n){const a={location:location.href,timestamp:Date.now()},i={...this.context,...a,...n,msg:t||"",duration:e||0};r.A.named("track").debug("%s (duration %s ms), %O",i.msg,i.duration,i),this.enabled&&function(t,e){navigator&&"function"==typeof navigator.sendBeacon?navigator.sendBeacon(t,JSON.stringify({...e,useBeacon:!0})):fetch(t,{method:"POST",body:JSON.stringify(e)})}(`https://${this.logsDomain}/track`,i)}}},2047:(t,e,n)=>{"use strict";n.d(e,{Hy:()=>u,PK:()=>i,QV:()=>o,Un:()=>d,oB:()=>a,w7:()=>c});var r=n(6348);async function a(t){for(let e=0;e<t.length;e++)await s(t[e],"ph-i-"+e)}function i(t){const e=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=("undefined"==typeof window?self:window).atob(e),r=new Uint8Array(n.length);for(let t=0;t<n.length;++t)r[t]=n.charCodeAt(t);return r}async function o(t){const e=Date.now();return 0===t?Date.now()-e:new Promise((n=>{setTimeout((()=>n(Date.now()-e)),1e3*t)}))}async function s(t,e){try{const r=[];return r.push(function(t,e){return self.registration.showNotification(t.title,{body:t.text||void 0,icon:t.icon||void 0,image:t.image||void 0,actions:t.actions||void 0,badge:t.badge||void 0,tag:e,renotify:!0,vibrate:[200,100,200,100,200,100,200],requireInteraction:!0,data:{link:t.link}})}(t,e)),t.impr&&r.push((n=t.impr,fetch(n,{method:"HEAD"})).then((t=>{}))),Promise.allSettled(r)}catch(t){console.error("Error in buildNotification:",t)}var n}function c(){return self&&self.options&&self.options.domainId&&parseInt(self.options.domainId,10)||0}function u(t,e){return void 0===self.options||void 0===self.options[t]?e:self.options[t]}async function d(t){return t=t||{},{method:"POST",body:JSON.stringify({...t,ch:await(0,r.M)()}),headers:{}}}},9438:(t,e,n)=>{"use strict";n.r(e),n.d(e,{getActivePushSubscriptionStoredInDb:()=>_});const r=(t,e)=>e.some((e=>t instanceof e));let a,i;const o=new WeakMap,s=new WeakMap,c=new WeakMap;let u={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function d(t){u=t(u)}function l(t){return(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(b(this),e),p(this.request)}:function(...e){return p(t.apply(b(this),e))}}function f(t){return"function"==typeof t?l(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)}));o.set(t,e)}(t),r(t,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,u):t)}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{e(p(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)}));return c.set(e,t),e}(t);if(s.has(t))return s.get(t);const e=f(t);return e!==t&&(s.set(t,e),c.set(e,t)),e}const b=t=>c.get(t);const m=["get","getKey","getAll","getAllKeys","count"],g=["put","add","delete","clear"],h=new Map;function w(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(h.get(e))return h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,a=g.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!m.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),a&&i.done]))[0]};return h.set(e,i),i}d((t=>({...t,get:(e,n,r)=>w(e,n)||t.get(e,n,r),has:(e,n)=>!!w(e,n)||t.has(e,n)})));const y=["continue","continuePrimaryKey","advance"],v={},I=new WeakMap,D=new WeakMap,k={get(t,e){if(!y.includes(e))return t[e];let n=v[e];return n||(n=v[e]=function(...t){I.set(this,D.get(this)[e](...t))}),n}};async function*E(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;const n=new Proxy(e,k);for(D.set(n,e),c.set(n,b(e));e;)yield n,e=await(I.get(n)||e.continue()),I.delete(n)}function P(t,e){return e===Symbol.asyncIterator&&r(t,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===e&&r(t,[IDBIndex,IDBObjectStore])}function S(t,e){return fetch(t+"/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>200!==t.status?Promise.reject(new Error(`Unexpected status code: ${t.status}`)):t.json()))}d((t=>({...t,get:(e,n,r)=>P(e,n)?E:t.get(e,n,r),has:(e,n)=>P(e,n)||t.has(e,n)})));var B=n(6348),C=n(8476),O=n(2047);function x(t,e,n,r,a,i,o,s,c,u,d,l,f,p,b,m,g,h){const w={uid:t,subacc:e,sub1:n,sub2:r,sub3:a,sub4:i,adult:o,traffic:s,traceId:c,limit:u,land:g,id:d,subdate:l,vki:f,sw:p,swDomainId:b,landDomain:m,initial:h};for(let t in w)w[t]||delete w[t];return new URLSearchParams(w)}var j=n(417);const A=C.A.named("swv2"),L="pv2webpushDB",T="subscriptions",N=(0,O.Hy)("showOnSubscribe",!0),V=(0,O.Hy)("clearAllBeforeShow",!0),M=(0,O.Hy)("resubscribe",!0);async function K(t,e){const n=e.toJSON();return S("https://"+t.scriptDomain,{endpoint:e.endpoint,auth:n.keys.auth,p256dh:n.keys.p256dh,keyId:t.publicKeyId,subacc:t.subacc,p1:t.subParams?t.subParams[0]:"",p2:t.subParams?t.subParams[1]:"",p3:t.subParams?t.subParams[2]:"",p4:t.subParams?t.subParams[3]:"",traceId:t.traceId,land:t.landingId,i:t.redirectIndex,ch:await(0,B.M)(),fingerprint:t.fingerprint||""})}async function U(){try{const t=await $();return await t.getAll(T)}catch(t){return A.error("checking subscriptions failed:",t),[]}}async function $(){return await function(t,e,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(t,e),s=p(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(p(o.result),t.oldVersion,t.newVersion,p(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),s.then((t=>{i&&t.addEventListener("close",(()=>i())),a&&t.addEventListener("versionchange",(t=>a(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),s}(L,1,{upgrade(t,e,n){t.createObjectStore(T,{keyPath:"id"})}})}function J(t,e){if(!e)return null;try{return t.find((t=>{return n=t.subscription,r=e.toJSON(),n.endpoint===r.endpoint&&n.keys.auth===r.keys.auth;var n,r}))}catch(t){return null}}async function _(t){const[e,n]=await H(t);return J(e,n)}async function H(t){return Promise.all([U(),t.pushManager.getSubscription()])}function W(t,e,n){t.source.postMessage({type:e,data:n})}async function q(t){return self.registration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:(0,O.PK)(t.publicKey)})}async function R(t,e){return n=await async function(t,e){return`https://show.partners-show.com/api/v1/vapid/show/?${x(t.webUserId,t.subacc,t.subParams[0],t.subParams[1],t.subParams[2],t.subParams[3],t.adultAds,t.trafficCategory,t.traceId,5,t.id,t.registrationDateTimestamp,t.publicKeyId,"2.0.17",(0,O.w7)()||t.domainId||0,t.landingId>0?location.host:"",t.landingId,e).toString()}`}(t,e),r=await(0,O.Un)(),fetch(n,r).then((t=>200!==t.status?Promise.reject(new Error(`Unexpected status code: ${t.status}`)):t.json()));var n,r}self.addEventListener("install",(function(t){self.skipWaiting()})),self.addEventListener("message",(t=>{t.waitUntil(async function(t){const{action:e,context:n,initialTimestamp:r,firstPermission:a,remoteLogs:i,confirmDelivery:o}=t.data||{};if(!e||!n)return void A.warn("action or context is missing, raw data: %O",t.data);o&&W(t,"messageReceived",t.data);const s=new j.H(n.traceId,n.scriptDomain,n.subacc,"2.0.17",{landingId:n.landingId});i&&s.enable();if(s.trackCustomEvent("got post message",Date.now()-r,{action:e,firstPermission:a}),"subscribe"!==e)return void A.warn("unknown action %s",e);try{await self.clients.claim(),await async function(t,e,n,r){const[a,i]=await H(self.registration),o=J(a,i);if(o)return r.trackCustomEvent("already have subscription",Date.now()-n,{id:o.id,subscription:o.subscription}),void W(t,"subscriptionExists",{id:o.id});const s=await async function(t,e,n){try{return await q(t)}catch(r){if(!M||!n)throw r;return await n.unsubscribe(),e.trackCustomEvent("resubscribe",0,{subscription:n}),q(t)}}(e,r,i);r.trackCustomEvent("send subscription to server",Date.now()-n);let c=performance.now();const u=await async function(t,e,n){for(let r=0;r<n;r++)try{return await K(t,e)}catch(t){A.warn("failed to send subscription to server",t),await(0,O.QV)(1)}throw new Error("all request attempts failed")}(e,s,5);r.trackCustomEvent("get server response",performance.now()-c,{id:u.id}),c=performance.now();const d=await async function(t,e,n){const r={id:n,subscription:e.toJSON(),webUserId:t.webUserId,traceId:t.traceId,subacc:t.subacc,scriptDomain:t.scriptDomain,publicKeyId:t.publicKeyId,publicKey:t.publicKey,subParams:t.subParams,trafficCategory:t.trafficCategory,adultAds:t.adultAds,registrationDateTimestamp:Math.floor(Date.now()/1e3),processJsVersion:t.processJsVersion,serviceWorkerVersion:"2.0.17",landingId:t.landingId||null,domainId:t.domainId||null},a=await $();return await a.add(T,r),r}(e,s,u.id);if(r.trackCustomEvent("subscription saved locally",performance.now()-c,{...d}),W(t,"subscribed",{id:u.id}),N)try{await(0,O.oB)(await R(d,!0))}catch(t){A.error(t)}}(t,n,r,s)}catch(t){s.trackCustomEvent("message processing failed",0,{error:t.toString()})}}(t))})),self.addEventListener("push",(t=>{t.waitUntil(async function(t){try{A.debug("Push message received: %s",t.data&&t.data.text?t.data.text():null);const e=await U();if(0===e.length)return;const n=e[e.length-1];V&&await async function(){try{(await self.registration.getNotifications()).forEach((t=>t.close()))}catch(t){A.error(t)}}(),await(0,O.oB)(await R(n,!1))}catch(t){A.error("onPush error",t)}}(t))})),self.addEventListener("notificationclick",(t=>{t.notification.close(),t.notification.data.link&&t.waitUntil(clients.openWindow(t.notification.data.link))}))}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,a),i.exports}a.m=n,a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,n)=>(a.f[n](t,e),e)),[])),a.u=t=>t+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="lands-static:",a.l=(n,r,i,o)=>{if(t[n])t[n].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==e+i){s=l;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+i),s.src=n),t[n]=[r];var f=(e,r)=>{s.onerror=s.onload=null,clearTimeout(p);var a=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((t=>t(r))),e)return e(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{var t={83:0,288:0};a.f.j=(e,n)=>{var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,a)=>r=t[e]=[n,a]));n.push(r[2]=i);var o=a.p+a.u(e),s=new Error;a.l(o,(n=>{if(a.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}}),"chunk-"+e,e)}};var e=(e,n)=>{var r,i,[o,s,c]=n,u=0;if(o.some((e=>0!==t[e]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)c(a)}for(e&&e(n);u<o.length;u++)i=o[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0},n=self.webpackChunklands_static=self.webpackChunklands_static||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),a(9438)})();
