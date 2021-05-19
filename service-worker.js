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
    "revision": "5ed52f7cf63705e02ff51207a19f82e1"
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
    "url": "assets/js/10.0df666af.js",
    "revision": "0403a3603a6bcf809a625e4ffaf486e0"
  },
  {
    "url": "assets/js/11.fa74cdfb.js",
    "revision": "810429b8fb2a55bee286403c6b80fb3e"
  },
  {
    "url": "assets/js/12.118adfc7.js",
    "revision": "589c5aed0f8192a51502e6e91b2dd03b"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.ac4e0d1e.js",
    "revision": "03eeaedd8cde217a72a803b402e8ea3a"
  },
  {
    "url": "assets/js/2.fb45966a.js",
    "revision": "3196ae5b2b8490397a6ae8c4a0d71eb3"
  },
  {
    "url": "assets/js/3.0fb0b22f.js",
    "revision": "6ce99efbf86633eabb5ae3f6d7db97fa"
  },
  {
    "url": "assets/js/4.541bb0ba.js",
    "revision": "fdfaf74de40886888ea296d2288806a2"
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
    "url": "assets/js/8.ed8b3cb9.js",
    "revision": "058dea7472c8fb4a1e0aafc89a0335fa"
  },
  {
    "url": "assets/js/9.51b6b4e8.js",
    "revision": "44abf3f10f5865f53cdfa24a85f49200"
  },
  {
    "url": "assets/js/app.6d36d003.js",
    "revision": "dcc8c113c31d99b239521bdd34a0944c"
  },
  {
    "url": "book/index.html",
    "revision": "089c2394d75af535b6c2085aa27af67d"
  },
  {
    "url": "c/index.html",
    "revision": "ada75199c81362a4df0b81123884cffd"
  },
  {
    "url": "config.html",
    "revision": "0b76b3eec77adc40d2300e163d158cb9"
  },
  {
    "url": "go/index.html",
    "revision": "b8dd1d5959096694c1237aa1ac5a4e1b"
  },
  {
    "url": "guide/index.html",
    "revision": "dd31522a1cbf24fa32785a445be5a97e"
  },
  {
    "url": "index.html",
    "revision": "bb6d9547a0252cc57b5b05af8afb9f68"
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
