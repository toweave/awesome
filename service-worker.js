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
    "revision": "8ad7694be786d0beacb659d5359b7d20"
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
    "url": "assets/js/10.ca3dc75f.js",
    "revision": "5511beac56cd25470251778c273e073e"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.26a54429.js",
    "revision": "564884bed78deed125f3d0c7379f5ded"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.9a048dc4.js",
    "revision": "6f557088eb0df3b68c1e85f9ed465aec"
  },
  {
    "url": "assets/js/15.3b14f530.js",
    "revision": "500413e2baef911a123dd0ae74d19b56"
  },
  {
    "url": "assets/js/16.81797323.js",
    "revision": "5c26c4f99f8b416850d80fee36050586"
  },
  {
    "url": "assets/js/17.5ecc9927.js",
    "revision": "2f7a91439b7cf245b2e28efa19a668b6"
  },
  {
    "url": "assets/js/18.12bea115.js",
    "revision": "a0590f54f1ff92ed2500bf36b1954ee3"
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
    "url": "assets/js/8.118e5988.js",
    "revision": "fe1b9487c24f434c8bfb79474e821a76"
  },
  {
    "url": "assets/js/9.7be72cd3.js",
    "revision": "5604102e2bc82386ca12effcd5a2a2b1"
  },
  {
    "url": "assets/js/app.9cec26ce.js",
    "revision": "52b75fc5213f1390c1ef396dcb5bb8ff"
  },
  {
    "url": "book/index.html",
    "revision": "757809bdc25cba1ac439b52097ad32fa"
  },
  {
    "url": "c/index.html",
    "revision": "c5bbdc117e5ca3c15b21a7648aae6509"
  },
  {
    "url": "config.html",
    "revision": "cd17eaa11b3c8cc9e6874cd2da0c4e8f"
  },
  {
    "url": "go/index.html",
    "revision": "5994787ce48d58fdc8190af63f1e79b9"
  },
  {
    "url": "guide/index.html",
    "revision": "3ee9fe5a890274d00707dbc068faa4b5"
  },
  {
    "url": "index.html",
    "revision": "39799710e873391d8ceb936d921d9d3e"
  },
  {
    "url": "java/index.html",
    "revision": "7839cf2de74c58225e18b37da9035259"
  },
  {
    "url": "javascript/index.html",
    "revision": "63983a1b43888b34b3b781c2a871049a"
  },
  {
    "url": "php/index.html",
    "revision": "a7e818593684536b270bf7dfba51302b"
  },
  {
    "url": "python/index.html",
    "revision": "7e581ead10f5aa1bc85d857b66c5f2d9"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "d64fe0d896d768441f71c3d46ca1781c"
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
