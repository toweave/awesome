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
    "revision": "ea0be31e5c84f212095feb6021d79879"
  },
  {
    "url": "assets/css/0.styles.12580234.css",
    "revision": "29b1f5ce8b8c78d49da4bad12533944a"
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
    "url": "assets/js/10.70b26150.js",
    "revision": "5b237478a633f7c6a5df30608269ecb9"
  },
  {
    "url": "assets/js/11.fa74cdfb.js",
    "revision": "810429b8fb2a55bee286403c6b80fb3e"
  },
  {
    "url": "assets/js/12.5fb8d988.js",
    "revision": "a85d06a93d95521f242ca43574eccf3f"
  },
  {
    "url": "assets/js/13.58a86687.js",
    "revision": "3c8dcd1cd6a8af2f713a94f980ff9807"
  },
  {
    "url": "assets/js/14.e6add15b.js",
    "revision": "7fb29cdd17f30c20143f69fbda069973"
  },
  {
    "url": "assets/js/15.3cc61e42.js",
    "revision": "6d8465cfb9e3e9c604ebbe5f424f979c"
  },
  {
    "url": "assets/js/16.ab69c64f.js",
    "revision": "5f68cb46e3f7be089f75eb4f19fbce7a"
  },
  {
    "url": "assets/js/2.17bac6aa.js",
    "revision": "496c0fbd8d74b1604840194991f10afb"
  },
  {
    "url": "assets/js/3.12ee2238.js",
    "revision": "f208cbed882a09873d7f9fee540d2125"
  },
  {
    "url": "assets/js/4.fe91802d.js",
    "revision": "58739a7be52bbe91885309fa47c1f8ea"
  },
  {
    "url": "assets/js/5.6c88ad64.js",
    "revision": "88074e0b5abaf978acd0e7e43405b187"
  },
  {
    "url": "assets/js/6.71a721f6.js",
    "revision": "bd6988e75ae817f66f0f948f06a01899"
  },
  {
    "url": "assets/js/7.50997920.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.f4135a3a.js",
    "revision": "81b8b211abc163d242207edb23ab564a"
  },
  {
    "url": "assets/js/9.7b1d559d.js",
    "revision": "3bde19b81911adaa51d1e2cffe5b5728"
  },
  {
    "url": "assets/js/app.d7273a66.js",
    "revision": "021bacd24da546d6f7bc356cf9d1564b"
  },
  {
    "url": "book/index.html",
    "revision": "a96fe1450b17b4508eb2ac74e11cd1b4"
  },
  {
    "url": "c/index.html",
    "revision": "4085e0f98ccbaeaf8f4f78fabc6b23fe"
  },
  {
    "url": "config.html",
    "revision": "afe7f134b6481edbf9a926ce3c3c28e1"
  },
  {
    "url": "go/index.html",
    "revision": "50f6bf1f0bee89086d9100a0cd65b551"
  },
  {
    "url": "guide/index.html",
    "revision": "424de380e468e97d8baa539dc0c8fcd6"
  },
  {
    "url": "index.html",
    "revision": "4442910cede1c919c0f3590ef2ce6ebd"
  },
  {
    "url": "javascript/index.html",
    "revision": "b6aee74a4efb93286a18410badee76bd"
  },
  {
    "url": "python/index.html",
    "revision": "4b224ab42c2e43ab1592da739aa36f5c"
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
