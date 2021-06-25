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
    "revision": "fe8403af21b71ff9351246ede543d58d"
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
    "url": "assets/js/10.c4dd9cdb.js",
    "revision": "e33392a2e66aa8526f5bf97b31a45080"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.427aab52.js",
    "revision": "9085c6ac14739e877f6bf420214db55c"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.32a8922b.js",
    "revision": "4869d5f952705c5e3cf5769a6b3820c0"
  },
  {
    "url": "assets/js/15.e507ffa2.js",
    "revision": "285f2731ad445112dde877dfa758f533"
  },
  {
    "url": "assets/js/16.709e2ae8.js",
    "revision": "aac67797ca0261583912ff2385bf4c3c"
  },
  {
    "url": "assets/js/17.240d89bc.js",
    "revision": "344c63bd34853644a301affdc37aad3d"
  },
  {
    "url": "assets/js/18.cea9ce09.js",
    "revision": "2dcd3652c3c7b24d79e2496b209b3b5c"
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
    "url": "assets/js/8.bb40fa27.js",
    "revision": "5da3466abc3af335ed62735077215fdc"
  },
  {
    "url": "assets/js/9.e86f7b90.js",
    "revision": "43c23512e4071764129ced6eb4d32323"
  },
  {
    "url": "assets/js/app.89a77701.js",
    "revision": "76590acb373038b5de781816eaf75ee4"
  },
  {
    "url": "book/index.html",
    "revision": "7f8aeda2b2b1509d2a6aff9f874173f5"
  },
  {
    "url": "c/index.html",
    "revision": "f919327d2edb214f034a415d9b3b023a"
  },
  {
    "url": "config.html",
    "revision": "ec8ae5f4aa73fe6dcedc61effa761b24"
  },
  {
    "url": "go/index.html",
    "revision": "0927d762dfe5fab91fef356099b5d7b6"
  },
  {
    "url": "guide/index.html",
    "revision": "2866b12d8c6c422314db3ada8ddb0273"
  },
  {
    "url": "index.html",
    "revision": "4191ddac493d71f6425b099699c4ea88"
  },
  {
    "url": "java/index.html",
    "revision": "09af6ed74d720ceeec1b56feceab8a01"
  },
  {
    "url": "javascript/index.html",
    "revision": "4da51df00f1c02aab27a513e813c252d"
  },
  {
    "url": "php/index.html",
    "revision": "473428f5d61423c5215209f0cdae1c25"
  },
  {
    "url": "python/index.html",
    "revision": "045397cbbb9bfb28a017d2c896565ba9"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "19af025c23ca2c1928065daa3c9455f6"
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
