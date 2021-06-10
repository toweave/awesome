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
    "revision": "e70ed61b8d3c18011d9ff79a0c77272f"
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
    "url": "assets/js/10.22f37ce9.js",
    "revision": "650a635c8ee1e373f2e13cded12faf8b"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.f75d7707.js",
    "revision": "aea59a55f8564c70390cfac243755dfa"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.f601cc69.js",
    "revision": "90148aed66ac3be08e4783b117e1ee92"
  },
  {
    "url": "assets/js/15.be19fdfc.js",
    "revision": "c168c258290d981671dcb22079ec5f3c"
  },
  {
    "url": "assets/js/16.ac67d963.js",
    "revision": "ad342af4c66b1058498310cff5355f6c"
  },
  {
    "url": "assets/js/17.97f7e589.js",
    "revision": "dc8254c95ed542ef6cb3c942c3b83653"
  },
  {
    "url": "assets/js/18.bd7a0fa5.js",
    "revision": "0117d0a2bfc147f375b1c70f513c10b9"
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
    "url": "assets/js/8.f29158fe.js",
    "revision": "48d7de83d439c3724fca92a6ec34141a"
  },
  {
    "url": "assets/js/9.d3f0f5a6.js",
    "revision": "3c0c4ac9656757c358270cedec765e51"
  },
  {
    "url": "assets/js/app.f6d78155.js",
    "revision": "4711c0876ab5a99d6cbb9b29a2c4ed28"
  },
  {
    "url": "book/index.html",
    "revision": "4536e3481bdd63ed1c502b8e796afc4c"
  },
  {
    "url": "c/index.html",
    "revision": "6707d1e6de5c57f3a1ddf20b572c4b4a"
  },
  {
    "url": "config.html",
    "revision": "7c7dfa762a1e74fe30081f0307d10aad"
  },
  {
    "url": "go/index.html",
    "revision": "6f1d93164811bdec4fe6554f6950af53"
  },
  {
    "url": "guide/index.html",
    "revision": "cdf700b0353aa76533424e0c2827da4f"
  },
  {
    "url": "index.html",
    "revision": "b22a36ad1ae2cf57fb6c300ebbf1d084"
  },
  {
    "url": "java/index.html",
    "revision": "71c85cc1ecf14b7a2352da807a3d222b"
  },
  {
    "url": "javascript/index.html",
    "revision": "13f9f548c881aca35e5b6d4a245932fb"
  },
  {
    "url": "php/index.html",
    "revision": "ff5cab1d98a3de477619d01a35bdbdb1"
  },
  {
    "url": "python/index.html",
    "revision": "90848539c3f05aa8840e23edc15c8dea"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "0f2d7af6d1b01cc48fc88b22d010793c"
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
