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
    "revision": "d2e5ec1bdc05bba23aafbbb651b76328"
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
    "url": "assets/js/10.6021d208.js",
    "revision": "2e368918480f512124695d872b59f728"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.9e2bf81b.js",
    "revision": "bafaad0a7e70da2c040eac18a85c1aa4"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.13afb566.js",
    "revision": "f5f74b372298894e437b38a571a28508"
  },
  {
    "url": "assets/js/15.6751f107.js",
    "revision": "cc522e178883910e4c4c7efacc95d8c8"
  },
  {
    "url": "assets/js/16.b1181fce.js",
    "revision": "a7cfe4a1a6ad2eca71a4aa4dbdceabc9"
  },
  {
    "url": "assets/js/17.9116fc28.js",
    "revision": "5696f0a86fe6efa6fd4c5891a12743d8"
  },
  {
    "url": "assets/js/18.83ae32b0.js",
    "revision": "1974f306488a8766777227527ce2b4f3"
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
    "url": "assets/js/8.56a4d5d5.js",
    "revision": "72cbf66468b8d3ea8f85876ec33744d1"
  },
  {
    "url": "assets/js/9.0b37c532.js",
    "revision": "bcb55a2b5462f40fc0dc30c7e559e531"
  },
  {
    "url": "assets/js/app.e9e1db04.js",
    "revision": "c6215ec8b6e75b80ce721b2c6db9d343"
  },
  {
    "url": "book/index.html",
    "revision": "031adaeb13e15cb0f5760ff99064704c"
  },
  {
    "url": "c/index.html",
    "revision": "9a9e8272dba417ac518201490dc38762"
  },
  {
    "url": "config.html",
    "revision": "c30c3482a1c0e02762fd937fb1151899"
  },
  {
    "url": "go/index.html",
    "revision": "88afe61099cf4ae4360dccadbd846cf0"
  },
  {
    "url": "guide/index.html",
    "revision": "ced4d56380882b8efa62f2d6201a4180"
  },
  {
    "url": "index.html",
    "revision": "28194fad26a3f43c902ff8a083f5ce76"
  },
  {
    "url": "java/index.html",
    "revision": "62d042f0a2722fe815f247a6057a63d7"
  },
  {
    "url": "javascript/index.html",
    "revision": "551342452b3232e2517511c6c7ce2894"
  },
  {
    "url": "php/index.html",
    "revision": "30f0cd1d95240e5412388a818dd25f19"
  },
  {
    "url": "python/index.html",
    "revision": "b1642d45e9d8ea94dc511eb1656c18b9"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "f9b19c1cce488025d72f84f5d52c8aa9"
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
