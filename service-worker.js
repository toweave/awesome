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
    "revision": "29163a5bcebdd742fa0cec522dd4d2d1"
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
    "url": "assets/js/10.6f878ac4.js",
    "revision": "a63ccd4ea2b1a5b05fc76db517f7dcf8"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.a3ec4a20.js",
    "revision": "070cd876bdc5422f445bba0dcd69d2a3"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.bd0dfb20.js",
    "revision": "020887d1b8c94b86b4b143ac13a335bb"
  },
  {
    "url": "assets/js/15.04e4aec1.js",
    "revision": "5a4381b8c4cf1022fee764fefd9ab81f"
  },
  {
    "url": "assets/js/16.5a13eab8.js",
    "revision": "81290108fcfcc1125afd90f301eeefa9"
  },
  {
    "url": "assets/js/17.ef085bab.js",
    "revision": "14d73bd3d2258001fac64c9c7689d74d"
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
    "url": "assets/js/8.9eff6cb4.js",
    "revision": "c5fc097372262060f55c9b912519fb2c"
  },
  {
    "url": "assets/js/9.644863bc.js",
    "revision": "9e30a879475b0cc63d6390b70f8b5985"
  },
  {
    "url": "assets/js/app.37cc243d.js",
    "revision": "cab631e1633e10246cfc9c9a1cbe434c"
  },
  {
    "url": "book/index.html",
    "revision": "5c81f0dc3989bed7bccffde8daac1efc"
  },
  {
    "url": "c/index.html",
    "revision": "2776a083bbd853eacb035967f4577187"
  },
  {
    "url": "config.html",
    "revision": "761ef1c2cf1529227baa84ede6e5d5c1"
  },
  {
    "url": "go/index.html",
    "revision": "0ba97f5661211f34cb1f0f15de86388b"
  },
  {
    "url": "guide/index.html",
    "revision": "986b6d48aa754e179019eef78053aced"
  },
  {
    "url": "index.html",
    "revision": "1c0fc6b04a06df31a5f2fb7fdeff09ca"
  },
  {
    "url": "java/index.html",
    "revision": "086f10aa3d449c4165c6927da033ed34"
  },
  {
    "url": "javascript/index.html",
    "revision": "4450179260ad21104e57fd6f6105d42d"
  },
  {
    "url": "php/index.html",
    "revision": "a31e470ce9c4a069281e9a0c21901f61"
  },
  {
    "url": "python/index.html",
    "revision": "02e8d158c4f77d435c958b360ac23126"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "ea675c3b330f88099d4633e43e839dec"
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
