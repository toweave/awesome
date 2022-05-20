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
    "revision": "9fadaa4182b5ca6e68500cead29e6c3c"
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
    "url": "assets/js/10.ab00549f.js",
    "revision": "0886ee599db6926f71b4c2a990e2badf"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.05d618c5.js",
    "revision": "526dc26dbd6a70a5a4067d9f6866bf01"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.945f9c5d.js",
    "revision": "5a8201c5c22bba1fa71e2d1464ba83c2"
  },
  {
    "url": "assets/js/15.cc429a34.js",
    "revision": "ff884ea7ac918677e9a0f62402d6f65e"
  },
  {
    "url": "assets/js/16.05acd06c.js",
    "revision": "03c5a184fffd98cd458feca4c6377d05"
  },
  {
    "url": "assets/js/17.9139c409.js",
    "revision": "1b3c919938405375116a9fbb6009d3ab"
  },
  {
    "url": "assets/js/18.a3497837.js",
    "revision": "861890752bce5289cc16e800b6b6afc8"
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
    "url": "assets/js/8.894749a1.js",
    "revision": "55d050f235ed479f0ee5e9689bc0df2a"
  },
  {
    "url": "assets/js/9.36ce93bc.js",
    "revision": "0f5ab98e3b21c4320ba4903640a6e28b"
  },
  {
    "url": "assets/js/app.36369905.js",
    "revision": "f9f1af39e4fe735222cc73d2f33dcb06"
  },
  {
    "url": "book/index.html",
    "revision": "ac63af020ce1d3d6df198da4a4e35c8c"
  },
  {
    "url": "c/index.html",
    "revision": "66d46a1f565b09e67594e07370c1b97e"
  },
  {
    "url": "config.html",
    "revision": "1fa4fdaa0ccc5798fd493796e90ec93d"
  },
  {
    "url": "go/index.html",
    "revision": "31bf649a78006f73b42867dbee1b7076"
  },
  {
    "url": "guide/index.html",
    "revision": "e3f69fb2c30c607bf77ce56d94f2425c"
  },
  {
    "url": "index.html",
    "revision": "9749d5339b7a988f793f3ee6957110f2"
  },
  {
    "url": "java/index.html",
    "revision": "343cc9f07cd4bf1db794cc192569d2e1"
  },
  {
    "url": "javascript/index.html",
    "revision": "f383b5937eb79929b8e7a68c4ca13faa"
  },
  {
    "url": "php/index.html",
    "revision": "d57dd7cb2c50150ae65cb95b4528cf94"
  },
  {
    "url": "python/index.html",
    "revision": "c4b42431c49d876be4538e2ed2a06334"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "6f8153126126a01d6579ede11f5056cd"
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
