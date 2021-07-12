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
    "revision": "b635bd2430f286c1abfb11e2e56c8367"
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
    "url": "assets/js/10.32004a35.js",
    "revision": "d67d9a80df51be35c213dbfb346f5c21"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.b7aafc81.js",
    "revision": "badb13991599b7a00e0a5957dcf951af"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.3d5699aa.js",
    "revision": "7dbe0376561fb660fe9745584fa540a7"
  },
  {
    "url": "assets/js/15.6eb4ffa5.js",
    "revision": "367815f2d80d7f4ac1897d9949e3198b"
  },
  {
    "url": "assets/js/16.18c8b490.js",
    "revision": "e1b623cb483d53fb894ef0de6d9649f3"
  },
  {
    "url": "assets/js/17.26604afe.js",
    "revision": "add60f1bb1d70b69df60b32184c2690a"
  },
  {
    "url": "assets/js/18.3270f21e.js",
    "revision": "aa85d1d49abf373996ef4b1e28a7cb31"
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
    "url": "assets/js/8.36e2f4e8.js",
    "revision": "a4526f5e1124737804c75183e0a2aeb4"
  },
  {
    "url": "assets/js/9.5f86d6c3.js",
    "revision": "fdfe811f6f78a63014cedefe1300d649"
  },
  {
    "url": "assets/js/app.fdf5ea0f.js",
    "revision": "8b8ac50a393b127fca770131b68f6330"
  },
  {
    "url": "book/index.html",
    "revision": "f149a454ef080375a4f2bdcb8cde5c98"
  },
  {
    "url": "c/index.html",
    "revision": "f5b52d4abefa998f5a876513b9706127"
  },
  {
    "url": "config.html",
    "revision": "1548b5a4a95bddc085c2731278ffa181"
  },
  {
    "url": "go/index.html",
    "revision": "e4d79a8416e857a952ced6864cedf126"
  },
  {
    "url": "guide/index.html",
    "revision": "2dbd79aec91875efb8502afa143b3fab"
  },
  {
    "url": "index.html",
    "revision": "f45495d65512ee29a7515a33c8054882"
  },
  {
    "url": "java/index.html",
    "revision": "b11554612d9cb750ff3def5a04fcf656"
  },
  {
    "url": "javascript/index.html",
    "revision": "64fc0fecf40b811d5d1c925e8534685c"
  },
  {
    "url": "php/index.html",
    "revision": "684bec4f95f852584c6b989596cbd5f8"
  },
  {
    "url": "python/index.html",
    "revision": "5bfc7ccc2cea71a437421c9199aaa95c"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "2572404de5af3a23700aa5563c5e6ec8"
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
