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
    "revision": "25001f54679af2471e0c2341de6691fa"
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
    "url": "assets/js/12.90f002a3.js",
    "revision": "0394aa5d3bc1f2e9a7d8292507896dda"
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
    "url": "assets/js/app.19becc7e.js",
    "revision": "dfa1c40f06cd8b79993c98728e68b627"
  },
  {
    "url": "book/index.html",
    "revision": "ffe8297e8bf8c43920436639754ebd14"
  },
  {
    "url": "c/index.html",
    "revision": "6aed8db34dc66ef89e5327df9d2359ca"
  },
  {
    "url": "config.html",
    "revision": "3992abfcb1e601789cfa81e74b51dbc0"
  },
  {
    "url": "go/index.html",
    "revision": "b57bab2b37c506426c7f2c6652c693cf"
  },
  {
    "url": "guide/index.html",
    "revision": "2c3854e9ab3eff4433ed833b2f4e134e"
  },
  {
    "url": "index.html",
    "revision": "b0f8689ef0349589c102e4648dd48e13"
  },
  {
    "url": "java/index.html",
    "revision": "447604fd0f44c2d0ddfdd81b90189390"
  },
  {
    "url": "javascript/index.html",
    "revision": "97d28e893e6a3166dc1ade04cbca5a30"
  },
  {
    "url": "php/index.html",
    "revision": "e6d5d24bc0cfc04e08c4e05cbac89e59"
  },
  {
    "url": "python/index.html",
    "revision": "facb67a6709fef0a016f02cadbb8bcf1"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "840e96f4ca58dcb3bca334298c7fec40"
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
