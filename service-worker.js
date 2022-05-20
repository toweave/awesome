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
    "revision": "cd0bf81351bde0a90e1165ab57bcccdf"
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
    "url": "assets/js/12.0d98a2a1.js",
    "revision": "ea8f4e995784cb3d72b6b6b3ccc6875e"
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
    "url": "assets/js/app.46dcecb9.js",
    "revision": "b2837e3f817d78646f147e7fa62024d1"
  },
  {
    "url": "book/index.html",
    "revision": "c027df590f2b332eed4e7f240ffc7ed5"
  },
  {
    "url": "c/index.html",
    "revision": "43791d4f0737a4950830d2619a992a11"
  },
  {
    "url": "config.html",
    "revision": "06adda74711a8a2f8471f05acc6d3e7c"
  },
  {
    "url": "go/index.html",
    "revision": "87a44f5dd51f13902fb0dcc2155e03b8"
  },
  {
    "url": "guide/index.html",
    "revision": "bb31a389308dddb3b2d10bddad9fac76"
  },
  {
    "url": "index.html",
    "revision": "bff446f37b9ada2745b0c138ecb999da"
  },
  {
    "url": "java/index.html",
    "revision": "0b7c5e4cd1ce60e2c113c4c671fd77bc"
  },
  {
    "url": "javascript/index.html",
    "revision": "1783afb29be900566b0ede9330bde84a"
  },
  {
    "url": "php/index.html",
    "revision": "0ce9ec2557614d4d69a42b38abf21145"
  },
  {
    "url": "python/index.html",
    "revision": "822e7881ac5dfeed9cfaf58a65f7077d"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "8563cb1b6e971faea98f304b8d4b5bbf"
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
