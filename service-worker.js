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
    "revision": "a141a71060bfd898fc773d4713d2c8b8"
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
    "url": "assets/js/10.9837b5b8.js",
    "revision": "1db9d79201d76bf383d128daa81ba2b1"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.522fc038.js",
    "revision": "19242ef3d0fa68e24db178631e308c5f"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.50873dd2.js",
    "revision": "7739e037bcb9d233367e0a16ebd39ac7"
  },
  {
    "url": "assets/js/15.0813de0e.js",
    "revision": "0f6724febc770a9c7343eda24fe82d04"
  },
  {
    "url": "assets/js/16.7cb1f0a6.js",
    "revision": "99cfb38656f89bcea723e3b571765261"
  },
  {
    "url": "assets/js/17.8ac5c358.js",
    "revision": "bb1f024efa93a43b4923847953b43981"
  },
  {
    "url": "assets/js/18.d266f9d8.js",
    "revision": "188e5d0da39c846624f7fd497d93ec15"
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
    "url": "assets/js/8.36df1c11.js",
    "revision": "be61cf74bdda7f2653f6994c3cc57916"
  },
  {
    "url": "assets/js/9.ed46cb26.js",
    "revision": "1dbeb9f76c6c0cfa73db336e674aa501"
  },
  {
    "url": "assets/js/app.05bc835d.js",
    "revision": "2b2904c67fc3f7cd70ea6ed9a8c319ba"
  },
  {
    "url": "book/index.html",
    "revision": "d5af61edfd1a30f35942b019c4a40103"
  },
  {
    "url": "c/index.html",
    "revision": "218a106a5cbaa98918aaa22370c6025b"
  },
  {
    "url": "config.html",
    "revision": "2b07cc10fbada7db405813aed51af907"
  },
  {
    "url": "go/index.html",
    "revision": "f6600223095ef336d55322f15f0143fe"
  },
  {
    "url": "guide/index.html",
    "revision": "e2a0d2e100c226118ae83b65d69e2537"
  },
  {
    "url": "index.html",
    "revision": "30c4c1a8f05681c4000c62a002ca260b"
  },
  {
    "url": "java/index.html",
    "revision": "9590b486ec20f41745cc9dd10f0a18ac"
  },
  {
    "url": "javascript/index.html",
    "revision": "d68fcb975b1e04cac95b6865f4f07abc"
  },
  {
    "url": "php/index.html",
    "revision": "909fc512a0f00292f61bdfcf70416555"
  },
  {
    "url": "python/index.html",
    "revision": "7de7012a140d7bc04120b255393b1eb8"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "66161e4ac0793596d643a8c51f7435b2"
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
