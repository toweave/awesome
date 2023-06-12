/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "873f7ef41369bce8b7fef260287f4728"
  },
  {
    "url": "assets/css/0.styles.3db76015.css",
    "revision": "26c7d0f03130860104e27e68a2136f27"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a06aa929.js",
    "revision": "edf64734a7da5f87de9671a99cf79e9e"
  },
  {
    "url": "assets/js/11.0e6dc97d.js",
    "revision": "b6a16311c4dbe586f774d36da74960f7"
  },
  {
    "url": "assets/js/12.6b6c0387.js",
    "revision": "bb96062947e5ab9f47422fbf625c9e7c"
  },
  {
    "url": "assets/js/13.58a86687.js",
    "revision": "3c8dcd1cd6a8af2f713a94f980ff9807"
  },
  {
    "url": "assets/js/14.9a048dc4.js",
    "revision": "6f557088eb0df3b68c1e85f9ed465aec"
  },
  {
    "url": "assets/js/15.3b14f530.js",
    "revision": "500413e2baef911a123dd0ae74d19b56"
  },
  {
    "url": "assets/js/16.81797323.js",
    "revision": "5c26c4f99f8b416850d80fee36050586"
  },
  {
    "url": "assets/js/17.d457c729.js",
    "revision": "025586161e042c78fa79c07c77ecc10a"
  },
  {
    "url": "assets/js/18.12bea115.js",
    "revision": "a0590f54f1ff92ed2500bf36b1954ee3"
  },
  {
    "url": "assets/js/19.1736b0bd.js",
    "revision": "5f28e68beaaa6ca539bde0ddd03da45b"
  },
  {
    "url": "assets/js/2.2b69ac79.js",
    "revision": "5d79ab0a5b0a4f98fbad4d39ad4208f8"
  },
  {
    "url": "assets/js/3.093fdef3.js",
    "revision": "7ba06733e9cf227a2db89127d29dc873"
  },
  {
    "url": "assets/js/4.0fd8dbc4.js",
    "revision": "b854c4ad878ebbe487cc94b43ff74697"
  },
  {
    "url": "assets/js/5.f2d192ff.js",
    "revision": "5162bc44f7e56d4c0710a369a2cefb02"
  },
  {
    "url": "assets/js/6.687291cc.js",
    "revision": "92f7743442cb8998cd96285f057493b6"
  },
  {
    "url": "assets/js/7.50997920.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.6426398e.js",
    "revision": "c9c0ede7f19f6ca81f438293cb7981d1"
  },
  {
    "url": "assets/js/9.d56157b6.js",
    "revision": "8661fe8de477aedc94aa991a005f5af6"
  },
  {
    "url": "assets/js/app.550e3a7d.js",
    "revision": "3f1435de03d803e098c084df9d013058"
  },
  {
    "url": "book/index.html",
    "revision": "5180bbd700ebea32280d0c9e2a75ff91"
  },
  {
    "url": "c/index.html",
    "revision": "cb940ed8bf0943feacbb6f4d54645a01"
  },
  {
    "url": "config.html",
    "revision": "fd2ebe740814dad4f35201bf05e1eac4"
  },
  {
    "url": "go/index.html",
    "revision": "2a5ab2cd84d7414794bcdf4c4f42d71a"
  },
  {
    "url": "guide/index.html",
    "revision": "aa05dd8082f06a93438f7738187df88f"
  },
  {
    "url": "index.html",
    "revision": "383e658efe4ad5ad464f49bb9597b06c"
  },
  {
    "url": "java/index.html",
    "revision": "4ccb5f67d7785cba004d8361821aafed"
  },
  {
    "url": "javascript/index.html",
    "revision": "2c5503f40868f478ba0a8b864ef51f11"
  },
  {
    "url": "php/index.html",
    "revision": "4a0d23121fd75afbae2de524c3f4c622"
  },
  {
    "url": "python/index.html",
    "revision": "df785dd6d5b561c8eece4d282a074587"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "1115b1300ee87f14aff5001d04fac6c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
