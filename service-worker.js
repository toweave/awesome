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
    "revision": "1a27c526b69266874ca533701b723dfa"
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
    "url": "assets/js/10.faaa373f.js",
    "revision": "b9bc36cf61dd8e440e66b187f3c50903"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.0cf34315.js",
    "revision": "3e70896e9c9129358799245806261095"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.8a0fc832.js",
    "revision": "0a5ae8e079e1d6a2af9387ff70a841d1"
  },
  {
    "url": "assets/js/15.57aba784.js",
    "revision": "9ea508d4f2e35523793289535a123cc1"
  },
  {
    "url": "assets/js/16.241893ec.js",
    "revision": "4f2f00420da4649f7910234eafa538b6"
  },
  {
    "url": "assets/js/17.1515ea7c.js",
    "revision": "dcc0f7131fa258207b07b664d90384bb"
  },
  {
    "url": "assets/js/18.e4de485d.js",
    "revision": "4c3d3188c74a0b8a5978cf31c2f77682"
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
    "url": "assets/js/8.59f76b7c.js",
    "revision": "6b400c161f54d772c4c4698d18ac9802"
  },
  {
    "url": "assets/js/9.24d55d81.js",
    "revision": "252b28a731ada9cee238d2ccf1b5cae7"
  },
  {
    "url": "assets/js/app.bf6656dc.js",
    "revision": "ab56729c807586fe4d836ed2bc67e86d"
  },
  {
    "url": "book/index.html",
    "revision": "8ae4e07a2f87a7579530c4f22f439235"
  },
  {
    "url": "c/index.html",
    "revision": "0304151ba13234dd7b60bc0e107e4348"
  },
  {
    "url": "config.html",
    "revision": "2c8758a1c56cac89f813c7e2785c69e5"
  },
  {
    "url": "go/index.html",
    "revision": "02e0c5c6b34aeebfe5631735726e305c"
  },
  {
    "url": "guide/index.html",
    "revision": "7a70b564d52beda96744035deba3119c"
  },
  {
    "url": "index.html",
    "revision": "5dd3d3875963e505678d1c5c4c946e23"
  },
  {
    "url": "java/index.html",
    "revision": "b1921417f67315a4dbf55a5bc7360e8c"
  },
  {
    "url": "javascript/index.html",
    "revision": "edf4b8d56f8de7ebe5b96e9a6bd80b20"
  },
  {
    "url": "php/index.html",
    "revision": "52007f1d95c8336e78370eadf075c219"
  },
  {
    "url": "python/index.html",
    "revision": "68551b2b06674affe71d2f9098baa7ab"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "c56b57c767d3873096ff7800324c122e"
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
