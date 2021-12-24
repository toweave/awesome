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
    "revision": "bd43b1e781defb9564c16c4347792f31"
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
    "url": "assets/js/10.5b8939e7.js",
    "revision": "a39b7f284648ed82724ffda0e5f5e2c9"
  },
  {
    "url": "assets/js/11.67a05ed8.js",
    "revision": "b0891b4bb0f28f544eee3608283e6524"
  },
  {
    "url": "assets/js/12.caf0551a.js",
    "revision": "c71cde50d97b176fbddfeba3a0b6b77a"
  },
  {
    "url": "assets/js/13.58a86687.js",
    "revision": "3c8dcd1cd6a8af2f713a94f980ff9807"
  },
  {
    "url": "assets/js/14.09a43403.js",
    "revision": "c8513c627ae75da26ceb2d7556e6a205"
  },
  {
    "url": "assets/js/15.1f54722d.js",
    "revision": "aa699aa020c4e9e6281dc460316373b2"
  },
  {
    "url": "assets/js/16.eb73d8c0.js",
    "revision": "336457afda9dc02e8d1b0829128b22d6"
  },
  {
    "url": "assets/js/17.df192bb6.js",
    "revision": "391be20311ed55e073b1123e79b8d9a9"
  },
  {
    "url": "assets/js/18.b7245c50.js",
    "revision": "53b176be287fdaa26828848a6a44e63d"
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
    "url": "assets/js/8.776fb7fa.js",
    "revision": "95d6e93d8695d6753558b8a50aba6483"
  },
  {
    "url": "assets/js/9.d641cd02.js",
    "revision": "c10207aa795ee03b07eac3033219d302"
  },
  {
    "url": "assets/js/app.ad1d3246.js",
    "revision": "8c88d59ee0a729813f951c12fa575007"
  },
  {
    "url": "book/index.html",
    "revision": "049bb37ffc47f4138b0a5a7a80dda763"
  },
  {
    "url": "c/index.html",
    "revision": "fc1156e97d117cf2e67eb9fc2fb4f3c3"
  },
  {
    "url": "config.html",
    "revision": "9f96225d55f22096e73a8c37cd9082c5"
  },
  {
    "url": "go/index.html",
    "revision": "00eeccb002f50d072a529c1620d3f443"
  },
  {
    "url": "guide/index.html",
    "revision": "37584d3d3fac6e8b320b3b2a5b13b575"
  },
  {
    "url": "index.html",
    "revision": "91b9b3940e00a4b21b80c6f7726238b7"
  },
  {
    "url": "java/index.html",
    "revision": "8036d3b0a2685ece424ddd1c4547efb9"
  },
  {
    "url": "javascript/index.html",
    "revision": "03f07657ff04e153cda535ae37c29b4c"
  },
  {
    "url": "php/index.html",
    "revision": "3c01165b8bd148831af0d4b6173ceb4c"
  },
  {
    "url": "python/index.html",
    "revision": "152997b6eebd7d9ceee47dc95db09a33"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "c44ffe40fd84ac80fbe9416e68f6372c"
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
