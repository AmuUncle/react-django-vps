"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","5df3076053e8ab32078b1eaa66f4caed"],["./static/css/main.a5c0e99c.css","6e9199dee447a87eb0be1da978553c95"],["./static/js/0.cb82a62e.chunk.js","1b1daeca0eaef26aedb2518b75b53271"],["./static/js/charts.bd08efa3.js","e31d1048e26db363e4562dbf2e6103b8"],["./static/js/main.39dcc470.js","8d5876def7a7fe64f99c7b72a99e3c63"],["./static/js/vendor.06a2d5e7.js","4ac21b128e4d401ddbe2c4b2990548e6"],["./static/media/amuuncle.8452a73c.jpg","8452a73c1fdeb6a74525dba6e9cfdd67"],["./static/media/avtar.bf36cb66.png","bf36cb66f481445ff995cef2c6d0454f"],["./static/media/beauty.defb9858.jpg","defb98583257610e959baa67ab0fa53b"],["./static/media/default-skin.b257fa9c.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["./static/media/light_rain.9baeee74.png","9baeee7453e07fba71d30f650557408c"],["./static/media/wea_bg.7a891f19.gif","7a891f193061251e6a6d3bd915fd3f15"],["./static/media/y6oxFxU60dYw9khW6q8jGw.3c9ecb33.woff2","3c9ecb331155d54c5a1a5f0b35be36a9"],["./static/media/yuanyuan.650be47c.jpg","650be47c523fe596caa04138f1350cd6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});