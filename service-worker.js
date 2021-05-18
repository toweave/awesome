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
    "revision": "64ed1d89f5c7aa31c03cc4f54e40a635"
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
    "url": "assets/js/10.841f4d12.js",
    "revision": "7156176d0737abf38260080ca4a5b722"
  },
  {
    "url": "assets/js/11.e1c07b86.js",
    "revision": "0a7da574a2938dc59324e4b7dba49ef9"
  },
  {
    "url": "assets/js/12.27ab39d1.js",
    "revision": "f6325f3a3c4132bcf858794497dee0ad"
  },
  {
    "url": "assets/js/2.fb45966a.js",
    "revision": "3196ae5b2b8490397a6ae8c4a0d71eb3"
  },
  {
    "url": "assets/js/3.44b51966.js",
    "revision": "63e0cbab65a1ba62814cd6c89ae89e7d"
  },
  {
    "url": "assets/js/4.204beba3.js",
    "revision": "3535208f96e95bb32c3ff87adee4f39d"
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
    "url": "assets/js/8.0b6ed47e.js",
    "revision": "57eba6f624e8651f1f0b3f60c9e5ba5c"
  },
  {
    "url": "assets/js/9.7716cf60.js",
    "revision": "3dd56a60076d0d5ad669fd885d471134"
  },
  {
    "url": "assets/js/app.d8150f85.js",
    "revision": "6c368359c3c488564b0727c56610427d"
  },
  {
    "url": "config.html",
    "revision": "ac47eac3c9d9eeff76d5a2c15528ac21"
  },
  {
    "url": "go/index.html",
    "revision": "22334efbfe003668236e2eecb04ee357"
  },
  {
    "url": "guide/index.html",
    "revision": "d713e4ffa885a3f3fbf45ff23a59d441"
  },
  {
    "url": "index.html",
    "revision": "b9c65813fc58d6278225e350ac84c815"
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
