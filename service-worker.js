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
    "revision": "8064d148124419f4c282a8b405ad4f56"
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
    "url": "assets/js/10.8793ba85.js",
    "revision": "4997cb86fd6fa9d463b1102c93ca5196"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.bdf9fe66.js",
    "revision": "ba61c469942fca9510d6509295aed95c"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.68d520aa.js",
    "revision": "40218233b84d6efb4f81f425a5e1df7e"
  },
  {
    "url": "assets/js/15.c5bcb4fb.js",
    "revision": "87a530d6957c7bd1e00ebfa0220e90d3"
  },
  {
    "url": "assets/js/16.65dd56c4.js",
    "revision": "a624d1bf2970a947dc0e68d2126ddb17"
  },
  {
    "url": "assets/js/17.f4a31529.js",
    "revision": "1130a4fcf91eae95a9a5faa85aa62a32"
  },
  {
    "url": "assets/js/18.82b0812e.js",
    "revision": "23157db8f4254ad861fb311fa522dc50"
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
    "url": "assets/js/8.f9b767b7.js",
    "revision": "03786ef91aca52f677eca4b1ddaefcf7"
  },
  {
    "url": "assets/js/9.d56f71b6.js",
    "revision": "e0c2ca3a7cb95cf0b11a7843e86a1cc3"
  },
  {
    "url": "assets/js/app.1f82ddcc.js",
    "revision": "779a1face6673db73c8a570973ce80dc"
  },
  {
    "url": "book/index.html",
    "revision": "349f73b1dd3054fad8266b172b29af9b"
  },
  {
    "url": "c/index.html",
    "revision": "cc66c6487b9b2eb80b6b91bfec19c3c7"
  },
  {
    "url": "config.html",
    "revision": "5f9a47b811471f7bf746844faaf37d6c"
  },
  {
    "url": "go/index.html",
    "revision": "4a6b315ee4143097d5c7dbb050dbb687"
  },
  {
    "url": "guide/index.html",
    "revision": "a8ead6efcb165538ea78831e6f2c2c2c"
  },
  {
    "url": "index.html",
    "revision": "43fcaec0d7ed761a0c8a17257519461e"
  },
  {
    "url": "java/index.html",
    "revision": "d8de3da91921a60d9c9c5a5339dee0f9"
  },
  {
    "url": "javascript/index.html",
    "revision": "f3f48bd6e09c0f94f7d6281b1603bc16"
  },
  {
    "url": "php/index.html",
    "revision": "b3bb944162cdd58856e68256a3003090"
  },
  {
    "url": "python/index.html",
    "revision": "26193b88f6d5e0391b08914fe9914d87"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "fdb61e7ccf3462f073aa0eac2bbfa1d6"
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
