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
    "revision": "9a661171fd41aa0f8c15bd40a8de4383"
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
    "url": "assets/js/10.f9865495.js",
    "revision": "d21cd1c07836c8b3215056c5e429ef05"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.f4839041.js",
    "revision": "1c307168e092ab7123c2b02f6f458fec"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.9a8baeb3.js",
    "revision": "b5636aa54f1bcc2f36a5e3ecd1172c8b"
  },
  {
    "url": "assets/js/15.f2ad4bb8.js",
    "revision": "599e6ef426fd8c1e60e74c36fc9a9c8d"
  },
  {
    "url": "assets/js/16.d2e2fabb.js",
    "revision": "5a7f1ab4adcd75da21fcbe26c7e629c7"
  },
  {
    "url": "assets/js/17.0bce5f4b.js",
    "revision": "e8e93a524aaa70722995b38345ed0b61"
  },
  {
    "url": "assets/js/18.23cef57c.js",
    "revision": "8db1d2d29b49d158f8ab6a4c1f068500"
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
    "url": "assets/js/8.fc0055a9.js",
    "revision": "602e1f1125eb0c0195833ddd741369e8"
  },
  {
    "url": "assets/js/9.cbea0949.js",
    "revision": "08e14afa209efea01385a94909898013"
  },
  {
    "url": "assets/js/app.d8ab9ded.js",
    "revision": "f8f4429e09316bf109f70e99475fc8e1"
  },
  {
    "url": "book/index.html",
    "revision": "aa842be8ab22e79a51e815b61d50f889"
  },
  {
    "url": "c/index.html",
    "revision": "d553febcf525ed29e34a5c00ab920040"
  },
  {
    "url": "config.html",
    "revision": "6149d7dd2f71276f87178b5fb6a433ac"
  },
  {
    "url": "go/index.html",
    "revision": "4e3abf2e60929fe30a32b77b385b3736"
  },
  {
    "url": "guide/index.html",
    "revision": "d15cf409bc0aabba561027eeaf009a80"
  },
  {
    "url": "index.html",
    "revision": "3281c50ed6a92583410cd83bb9aaf877"
  },
  {
    "url": "java/index.html",
    "revision": "ea399d8f7c57e681ac6ca340cb82557e"
  },
  {
    "url": "javascript/index.html",
    "revision": "a643dcd737fa60f6da54e8953e6df8c3"
  },
  {
    "url": "php/index.html",
    "revision": "6845b8127cb0281201d884e60276ea7a"
  },
  {
    "url": "python/index.html",
    "revision": "1445019d18f5f11df5c013d9e5b99b5b"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "7f4d4e8e7239495732712cab48f6d1e1"
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
