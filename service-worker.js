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
    "revision": "0db507b9a6b78e13b745fe4bd7268b2f"
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
    "url": "assets/js/10.aaeb0453.js",
    "revision": "52cd9747e2c3898ff317b6c162810743"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.a204bcd1.js",
    "revision": "6359e7cc04a51ca240c7df45cc0f4874"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.a9a65364.js",
    "revision": "764e3f15f0e83dee821583b7e0ee04e8"
  },
  {
    "url": "assets/js/15.c1f99585.js",
    "revision": "30b6450d50d3308a62646a0fce349a32"
  },
  {
    "url": "assets/js/16.5a13eab8.js",
    "revision": "81290108fcfcc1125afd90f301eeefa9"
  },
  {
    "url": "assets/js/17.deb5cd4b.js",
    "revision": "5f3fb6889af545828134b421188ca109"
  },
  {
    "url": "assets/js/18.ee33af61.js",
    "revision": "256250c90821b74d08bf3ff4e66bddaa"
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
    "url": "assets/js/8.ae91f528.js",
    "revision": "79e9fb4b218a6360b440e0cb1d423735"
  },
  {
    "url": "assets/js/9.6b12ca40.js",
    "revision": "a273930be2334f5f16772a0807cd6e68"
  },
  {
    "url": "assets/js/app.accdaa58.js",
    "revision": "806d31bfb2e16e51505db920d596a6e6"
  },
  {
    "url": "book/index.html",
    "revision": "2bd2e2238aa6dc5a28ce2fc1cb0c935b"
  },
  {
    "url": "c/index.html",
    "revision": "d3cc1f1443b1af77c82036ca1294c4c6"
  },
  {
    "url": "config.html",
    "revision": "49c31fe092e3917cbb25bfed9ddc2dc8"
  },
  {
    "url": "go/index.html",
    "revision": "ed78962c9b226c62a89a3d0d807e2c45"
  },
  {
    "url": "guide/index.html",
    "revision": "52f51b37c8bbd63bd005dba77122b581"
  },
  {
    "url": "index.html",
    "revision": "780866f7e7285b93ac11a94503ec8c7a"
  },
  {
    "url": "java/index.html",
    "revision": "a853fe1211a4a26fa563ce7b424f6d2d"
  },
  {
    "url": "javascript/index.html",
    "revision": "385097684e7c8ab0729e1b5d5322fb9c"
  },
  {
    "url": "php/index.html",
    "revision": "737d8b30b59031ce514fdcae826cd78d"
  },
  {
    "url": "python/index.html",
    "revision": "da34927ff8d4ca040fa27b2b66ab6a89"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "def1d43146d6d25a133d857c7cba42ad"
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
