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
    "revision": "367be4dd300b0a55158a47bcd2ee7231"
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
    "url": "assets/js/10.d83d06a4.js",
    "revision": "4779f5a4dfd7be4363df999b5504b330"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.f7718fa0.js",
    "revision": "c18369e7ef4526f1703a110fcf373097"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.208a41ef.js",
    "revision": "c9a39d36a9064b553577b83793133e1d"
  },
  {
    "url": "assets/js/15.37a945c0.js",
    "revision": "c6cd4b895b9dc24e79ec305490a35a94"
  },
  {
    "url": "assets/js/16.75e8a252.js",
    "revision": "508acc98beecd0807563aa8f8247e602"
  },
  {
    "url": "assets/js/17.04b3353a.js",
    "revision": "624f075c4f4cef3b5ce28ed2acd7fa28"
  },
  {
    "url": "assets/js/18.98fe691b.js",
    "revision": "c71ee9e66ec60141f2dc2b2992b6c8df"
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
    "url": "assets/js/8.1749c7a1.js",
    "revision": "aa2110b80ae52dc5cf28024c92d2f493"
  },
  {
    "url": "assets/js/9.f3c5fb12.js",
    "revision": "d33afa3e46e4e4d2df375153ddfe80f5"
  },
  {
    "url": "assets/js/app.8f69558d.js",
    "revision": "50d6ab09dc3ff1a9d4f1ee50975d2dcf"
  },
  {
    "url": "book/index.html",
    "revision": "6281b61872fcdeb92b3dce7aa1cc7299"
  },
  {
    "url": "c/index.html",
    "revision": "bb70a3346f2191a6fa9d5a0c5fffbd04"
  },
  {
    "url": "config.html",
    "revision": "79295fb74260ffdc4139b3d91508efc8"
  },
  {
    "url": "go/index.html",
    "revision": "d4cabc6c09352f16d4bf7dff27fcc0dc"
  },
  {
    "url": "guide/index.html",
    "revision": "63fe67888b6b329093d1c56de9fd7bd2"
  },
  {
    "url": "index.html",
    "revision": "f85671fc4d95748b3180b9b437ad10c2"
  },
  {
    "url": "java/index.html",
    "revision": "21073bbd27c66afa5999aec1b2ef47bc"
  },
  {
    "url": "javascript/index.html",
    "revision": "6eb91226abb636f7a964890ef1863ab2"
  },
  {
    "url": "php/index.html",
    "revision": "8cb321db35e6104f0ad892b2e549dbf9"
  },
  {
    "url": "python/index.html",
    "revision": "339aa741c255672270a701d6cae742ca"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "97761f5a914dd27166847e98637a20a6"
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
