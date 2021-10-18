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
    "revision": "03d6a65ca090a10a92c325e3d395645e"
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
    "url": "assets/js/10.a6e58d26.js",
    "revision": "836bfce59ebff6c688b0110ec7e92832"
  },
  {
    "url": "assets/js/11.fa74cdfb.js",
    "revision": "810429b8fb2a55bee286403c6b80fb3e"
  },
  {
    "url": "assets/js/12.8971e02f.js",
    "revision": "16bdbeaa0d936bcfb90cf555e3e50542"
  },
  {
    "url": "assets/js/13.58a86687.js",
    "revision": "3c8dcd1cd6a8af2f713a94f980ff9807"
  },
  {
    "url": "assets/js/14.733ae9d8.js",
    "revision": "15d48895b7aa3aabd98ee5292f959ea0"
  },
  {
    "url": "assets/js/15.13c8c7fa.js",
    "revision": "0d17eae6273a3a83af810d18add3bf72"
  },
  {
    "url": "assets/js/16.d0d42c41.js",
    "revision": "2104f3108b31c108693483ec398012c4"
  },
  {
    "url": "assets/js/17.2f666322.js",
    "revision": "ed44f09aac5949e6a1b4b9b6a7fb86c5"
  },
  {
    "url": "assets/js/18.bef69dd8.js",
    "revision": "e50f27772c778cfc59afe7e8a738a707"
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
    "url": "assets/js/8.e7084571.js",
    "revision": "d748af50e2c03f5ad62d949b4bade03e"
  },
  {
    "url": "assets/js/9.6a8432e4.js",
    "revision": "595a752d684a3955f31611cb4543230b"
  },
  {
    "url": "assets/js/app.73ec4115.js",
    "revision": "0c86175235e60bec44883c9b6cadfb06"
  },
  {
    "url": "book/index.html",
    "revision": "d590826e8e280f7ecddeb689e95c5ec5"
  },
  {
    "url": "c/index.html",
    "revision": "dda444fae813073070a0fdd5cde81b2f"
  },
  {
    "url": "config.html",
    "revision": "8616231cfaf39d919dbddca82cf21b3b"
  },
  {
    "url": "go/index.html",
    "revision": "72edf6e043aeb3762e68356607c01ef6"
  },
  {
    "url": "guide/index.html",
    "revision": "324ee67f8da85810246fd27f158d217c"
  },
  {
    "url": "index.html",
    "revision": "d39d0d9cc08ac515528ac6b6c9e0f38a"
  },
  {
    "url": "java/index.html",
    "revision": "1dbe47d79f38289a24b88a0862cd13e5"
  },
  {
    "url": "javascript/index.html",
    "revision": "2c56c806b7bbdabbf0577891f69c7f8c"
  },
  {
    "url": "php/index.html",
    "revision": "99789dc2a2be61edc9be0c1bef99c2da"
  },
  {
    "url": "python/index.html",
    "revision": "7761ad3e7a8b92c478e44936deea6fc8"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "7a2c3691e780d75149339fc2c7a18743"
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
