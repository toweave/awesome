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
    "revision": "6b1259aac09bc71cd8a0db7530c51b98"
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
    "url": "assets/js/10.33536024.js",
    "revision": "3121468d37e05c6e0a84f5ab67d4135a"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.6e1ea205.js",
    "revision": "0e7b43f0b4f1868073df4a81dcfb1cd9"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.7b40aba8.js",
    "revision": "753c5c55debb7139ecfa69eae3d5b2db"
  },
  {
    "url": "assets/js/15.9b05642e.js",
    "revision": "7de52625828bf8f1a4b0367d81dc6167"
  },
  {
    "url": "assets/js/16.a33b23f0.js",
    "revision": "ea2cb28de6d76e5cc8de2cb16ffd46d0"
  },
  {
    "url": "assets/js/17.9ddb0b0f.js",
    "revision": "d371c054e70a4c3fb2e12494fdd28053"
  },
  {
    "url": "assets/js/18.88d55225.js",
    "revision": "3b85ffe8e091a313df9bce30bb6c96b5"
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
    "url": "assets/js/8.cca9cc1a.js",
    "revision": "12a20e48cd46e36dcec2189410a7f72e"
  },
  {
    "url": "assets/js/9.a776ebe6.js",
    "revision": "5b1c4e1a09e31a041835ada50cf3c62d"
  },
  {
    "url": "assets/js/app.2a7f374c.js",
    "revision": "e52d557de3a5d2ff13de8a04726b2ed5"
  },
  {
    "url": "book/index.html",
    "revision": "ded65cc48580f47479b950fb3f6bdfaa"
  },
  {
    "url": "c/index.html",
    "revision": "0a01033964c888ea774c4d414c3396f0"
  },
  {
    "url": "config.html",
    "revision": "9285643349453d9c16637626cd261abc"
  },
  {
    "url": "go/index.html",
    "revision": "c8aac63a13d961915b47b241b116d329"
  },
  {
    "url": "guide/index.html",
    "revision": "324f34dee4a88d37dc83fa8565eaae61"
  },
  {
    "url": "index.html",
    "revision": "1cebf03155115058aeed615b7d0d58f5"
  },
  {
    "url": "java/index.html",
    "revision": "bcb89d983461445179329045396e1c5d"
  },
  {
    "url": "javascript/index.html",
    "revision": "25e4ea8e6264727c81004fb5a0c438f6"
  },
  {
    "url": "php/index.html",
    "revision": "8b840640bcb82ff230509d52050961e6"
  },
  {
    "url": "python/index.html",
    "revision": "c0e2b088eb61d318b57427b03cd9e8de"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "e5a86ba584fc8779e41169713241f99e"
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
