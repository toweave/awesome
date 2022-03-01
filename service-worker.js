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
    "revision": "15103c8c421ab93d725273202b71acaa"
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
    "url": "assets/js/10.36f03f08.js",
    "revision": "c68eea00e259fa1ded32f5ca5b866400"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.5942b2e2.js",
    "revision": "4582fdd8ea97cc0ac9d9fc7f6d98c65a"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.171b4fd6.js",
    "revision": "70f458a36eb602701394e8d6d5ec62e0"
  },
  {
    "url": "assets/js/15.64dc15b3.js",
    "revision": "c0eb17aeea7f5201791faa44c6813c80"
  },
  {
    "url": "assets/js/16.ac9dddfc.js",
    "revision": "ec1ac6af21321aea623cf2797f53e3c8"
  },
  {
    "url": "assets/js/17.3239fd3f.js",
    "revision": "e658827abb1135adc6e2b8346bef8064"
  },
  {
    "url": "assets/js/18.12e9f109.js",
    "revision": "e4a5824ff07e3268986d08d7d2588b21"
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
    "url": "assets/js/8.ca37ec6a.js",
    "revision": "4e99d7d198cb5079382f9ec68fc7603c"
  },
  {
    "url": "assets/js/9.49bb60b7.js",
    "revision": "10390f9dd87f7c20ae9859940d59845d"
  },
  {
    "url": "assets/js/app.0cd1745b.js",
    "revision": "c7bedbea2b1c5a9f919b2a1fd2ed6776"
  },
  {
    "url": "book/index.html",
    "revision": "97255ec16de28d8d25d662b421a02ad5"
  },
  {
    "url": "c/index.html",
    "revision": "3b5b1d4d59fac57c00b3a23e54297056"
  },
  {
    "url": "config.html",
    "revision": "67c5da5e26b9db1be512ce0af122bb6d"
  },
  {
    "url": "go/index.html",
    "revision": "e10021c28a7b794f81999e3dabb42faa"
  },
  {
    "url": "guide/index.html",
    "revision": "c26b7f5c17df8ca897c3663931697b1a"
  },
  {
    "url": "index.html",
    "revision": "dbbaa4655a7c003153772f0c905ef240"
  },
  {
    "url": "java/index.html",
    "revision": "e67fa92881bc85773a4fe112211c6267"
  },
  {
    "url": "javascript/index.html",
    "revision": "b031846469f7916dec8b0804fbdbc4de"
  },
  {
    "url": "php/index.html",
    "revision": "49b8f92fded1ea8dd1928bd210b63aeb"
  },
  {
    "url": "python/index.html",
    "revision": "9929647d004403ab8edb56458bd4eb36"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "dc81cf4af654acbcf6106cedf63af90b"
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
