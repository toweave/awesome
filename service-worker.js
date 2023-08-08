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
    "revision": "6c6dd996a51ddb931a0120ea8f396394"
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
    "url": "assets/js/10.f454ce41.js",
    "revision": "be244ac9b5455224d0937eb668e567a5"
  },
  {
    "url": "assets/js/11.b9cfc707.js",
    "revision": "cae53d77baeedee0e2990e9a1bd997ea"
  },
  {
    "url": "assets/js/12.1b94f779.js",
    "revision": "02060edbd45101294719131e3de01265"
  },
  {
    "url": "assets/js/13.a2b2b67d.js",
    "revision": "4d96b34ad49125619080be6a4e2478d5"
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
    "url": "assets/js/8.7de1751a.js",
    "revision": "308f2bd7aa10b6ecb29e28f6552810a0"
  },
  {
    "url": "assets/js/9.535df864.js",
    "revision": "8fd27984c8251ef6a9c02e5d53da86e8"
  },
  {
    "url": "assets/js/app.4a82d780.js",
    "revision": "89413efe3d4aa08b4b0c9d6b9a9881b3"
  },
  {
    "url": "book/index.html",
    "revision": "fc54d8fd0f6244cea6a569721058b40f"
  },
  {
    "url": "c/index.html",
    "revision": "bc3547ed66297e06b4dbe10164ad687c"
  },
  {
    "url": "config.html",
    "revision": "e9c737d0212d5e82e785dd842ca5257e"
  },
  {
    "url": "go/index.html",
    "revision": "e841b155d8ba803c1808ca424bfff18b"
  },
  {
    "url": "guide/index.html",
    "revision": "8af54672df26039a5c7f3e18f76efc8b"
  },
  {
    "url": "index.html",
    "revision": "2831eeb20d571d684c046612bbfb9c65"
  },
  {
    "url": "java/index.html",
    "revision": "30b7061679108063990ecc4cc6160496"
  },
  {
    "url": "javascript/index.html",
    "revision": "2359b7acd5df5f1355abc9839bf30c09"
  },
  {
    "url": "php/index.html",
    "revision": "0dd91a1d9644dd3165ba2f2c0be9e504"
  },
  {
    "url": "python/index.html",
    "revision": "f9da44e1fab642af421079028ba6dacf"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "b52cf04dda73b0048499a4277f4a3d82"
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
