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
    "revision": "aa36e61b361895314d3e3f73cabb72d5"
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
    "url": "assets/js/10.fbddaf19.js",
    "revision": "6b0404e2f0e57ce79000c3f16d148285"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.a8ab7f3c.js",
    "revision": "d499619dfd7cdef65c65a8a750a2c8e0"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.101d90a0.js",
    "revision": "3187bb9a17bfa34a3e855de6a023a815"
  },
  {
    "url": "assets/js/15.e90d17c2.js",
    "revision": "117d8cc60206dffc0cc6e3d1b11e2914"
  },
  {
    "url": "assets/js/16.d79b20ba.js",
    "revision": "0f249e23e42e55eddf272efe272fe92f"
  },
  {
    "url": "assets/js/17.672eb3f0.js",
    "revision": "51237d853b9abea69e5a032863b46475"
  },
  {
    "url": "assets/js/18.3d78ba7b.js",
    "revision": "b94810e1379be6da2bb09716f70979bc"
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
    "url": "assets/js/8.e2079c8b.js",
    "revision": "6c4ddf5f483ba8575207c7a292b03c7d"
  },
  {
    "url": "assets/js/9.c521a632.js",
    "revision": "6656d1288ad622aab5e6115a83956b92"
  },
  {
    "url": "assets/js/app.5d4fd507.js",
    "revision": "381f71400bce44f66fbd33a49833b6d5"
  },
  {
    "url": "book/index.html",
    "revision": "54a5775670eedebdc14cf0ce7f3f12de"
  },
  {
    "url": "c/index.html",
    "revision": "1c3da097ebd0e6ab09233a37186afc79"
  },
  {
    "url": "config.html",
    "revision": "580a8f6a8bb6f40c19fdcea62dd9dbaf"
  },
  {
    "url": "go/index.html",
    "revision": "e1c5fe70e9657e593213f4f1b544cf0a"
  },
  {
    "url": "guide/index.html",
    "revision": "fe092823c35d3d3f8329cfd80fe37542"
  },
  {
    "url": "index.html",
    "revision": "40a922ef2f620a4cc26ff4d6d5562b84"
  },
  {
    "url": "java/index.html",
    "revision": "21c148f3ca9a08fcf64405e1534bc148"
  },
  {
    "url": "javascript/index.html",
    "revision": "9f66b41ed84cf7007ff66f661f3821c9"
  },
  {
    "url": "php/index.html",
    "revision": "92dd23d59b891895c7d81538a1fffb5c"
  },
  {
    "url": "python/index.html",
    "revision": "40afba0c76201fb8af978f1aaf212ced"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "cc74a1c254e99d385e1dc78c13c4e70b"
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
