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
    "revision": "57dddec2fc9115265586dc64f7c52ed6"
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
    "url": "assets/js/10.14d486d6.js",
    "revision": "9c857f439941bea40a2fb1e3d0a08e90"
  },
  {
    "url": "assets/js/11.fa74cdfb.js",
    "revision": "810429b8fb2a55bee286403c6b80fb3e"
  },
  {
    "url": "assets/js/12.974eb61c.js",
    "revision": "d431a515124fd120cc1b312c331e7cb0"
  },
  {
    "url": "assets/js/13.58a86687.js",
    "revision": "3c8dcd1cd6a8af2f713a94f980ff9807"
  },
  {
    "url": "assets/js/14.ac4e0d1e.js",
    "revision": "03eeaedd8cde217a72a803b402e8ea3a"
  },
  {
    "url": "assets/js/2.fb45966a.js",
    "revision": "3196ae5b2b8490397a6ae8c4a0d71eb3"
  },
  {
    "url": "assets/js/3.0fb0b22f.js",
    "revision": "6ce99efbf86633eabb5ae3f6d7db97fa"
  },
  {
    "url": "assets/js/4.541bb0ba.js",
    "revision": "fdfaf74de40886888ea296d2288806a2"
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
    "url": "assets/js/8.aaa0ba7c.js",
    "revision": "ef01e1991bdd6280bb65f5165170f177"
  },
  {
    "url": "assets/js/9.78a214d7.js",
    "revision": "d49b82929c39c5d25d782817d5f6f00b"
  },
  {
    "url": "assets/js/app.20c3ab6f.js",
    "revision": "7eeee1e69d1e931312b6a33bc670ae01"
  },
  {
    "url": "book/index.html",
    "revision": "c3b1c5a627c8ec45c2945752c62cd782"
  },
  {
    "url": "c/index.html",
    "revision": "64ba069cb13811b8435e5dd5bfe8610f"
  },
  {
    "url": "config.html",
    "revision": "eeba904958c5dbc97c0375c1ce60d9c8"
  },
  {
    "url": "go/index.html",
    "revision": "57ef3e4bc8950fca3479e5ebf8021ce2"
  },
  {
    "url": "guide/index.html",
    "revision": "204b7a1f79d679ee7c91c2d79f96bb2c"
  },
  {
    "url": "index.html",
    "revision": "44bb0d0ebc861c079daa4207bc6b502a"
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
