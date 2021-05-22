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
    "revision": "912d0384805643ffc11a4b0f7baa2b58"
  },
  {
    "url": "assets/css/0.styles.8c4fcc71.css",
    "revision": "8ce7043311cd8300e4e04340e3c1f99b"
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
    "url": "assets/js/10.9edc9905.js",
    "revision": "e02785d6ad99cd4e88ac19516eb4e91d"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.6abcb704.js",
    "revision": "da1c4e7deb4a9ad10c1fffcb37a04852"
  },
  {
    "url": "assets/js/13.0d35dde7.js",
    "revision": "6eca1344340c51ef46f70a4081d8b909"
  },
  {
    "url": "assets/js/14.3fe77d6d.js",
    "revision": "daa098c0fd69173bbbb76b4312247487"
  },
  {
    "url": "assets/js/15.791a7941.js",
    "revision": "55774cb0c33bff70efd3d1b23c6691ea"
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
    "url": "assets/js/4.40e545f9.js",
    "revision": "0cc4572f75f186ab595ff2da0e96994b"
  },
  {
    "url": "assets/js/5.28276470.js",
    "revision": "276aaecc9d94d327e576ee2dc88971ae"
  },
  {
    "url": "assets/js/6.b70f634e.js",
    "revision": "ed70d8a0e6ee3058046f54de453ef996"
  },
  {
    "url": "assets/js/7.50997920.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.6582d801.js",
    "revision": "59ee425429327be0f71493b4c71a0a2b"
  },
  {
    "url": "assets/js/9.07f5d439.js",
    "revision": "3675d3c41c214515be147fbbcf9bd2e8"
  },
  {
    "url": "assets/js/app.aa723b5b.js",
    "revision": "66afbc0d3bdb6acf3c4e359ebb20d3f3"
  },
  {
    "url": "book/index.html",
    "revision": "a6ce949cf31ace537c9455dd53523840"
  },
  {
    "url": "c/index.html",
    "revision": "7290e47526da9ae586e970aff87bafd2"
  },
  {
    "url": "config.html",
    "revision": "0916fc27a819fc500378f7c70a5478df"
  },
  {
    "url": "go/index.html",
    "revision": "fb743cebfecac94a7e8d9bb0e69da4e3"
  },
  {
    "url": "guide/index.html",
    "revision": "3a878d95ab34f82940df3473a6d01a9e"
  },
  {
    "url": "index.html",
    "revision": "31992726890758af311d50b1e9cce47c"
  },
  {
    "url": "python/index.html",
    "revision": "a90c008749e550403256acc3e9a95b4b"
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
