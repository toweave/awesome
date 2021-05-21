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
    "revision": "3dfef1c4527e984f0b2b4554b1e8a964"
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
    "url": "assets/js/10.41a853ce.js",
    "revision": "3222a64af677850deaa93c0e81ff9982"
  },
  {
    "url": "assets/js/11.fa74cdfb.js",
    "revision": "810429b8fb2a55bee286403c6b80fb3e"
  },
  {
    "url": "assets/js/12.816a2f5e.js",
    "revision": "061a1c16ffefdf2a011d026101265b20"
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
    "url": "assets/js/8.620df4c8.js",
    "revision": "732de218ddf6303a43a7bee37da3e1b1"
  },
  {
    "url": "assets/js/9.1fabf87d.js",
    "revision": "70424dad1d44f4fac3ee2ffb36cb8e81"
  },
  {
    "url": "assets/js/app.2d7fbdb8.js",
    "revision": "18e13236a45506098a6607ee97ea20eb"
  },
  {
    "url": "book/index.html",
    "revision": "aaf836453723b6250f527fc793484b24"
  },
  {
    "url": "c/index.html",
    "revision": "66328e904d192eecf6d731b5eceb4455"
  },
  {
    "url": "config.html",
    "revision": "28c3af9e813b4751cc5a7414f7a826ba"
  },
  {
    "url": "go/index.html",
    "revision": "58dfcdf973ff1f589d8b027923468998"
  },
  {
    "url": "guide/index.html",
    "revision": "8ee9bd71e71a106080dc52e0b636043d"
  },
  {
    "url": "index.html",
    "revision": "1d801d0bc047234a37650d022965e25c"
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
