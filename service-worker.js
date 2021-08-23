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
    "revision": "6a984e503509fbde773e60065e5d6080"
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
    "url": "assets/js/10.3f77074f.js",
    "revision": "df00d0ab4ac94c58e4d1cbff410708f8"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.0ce138f1.js",
    "revision": "ebf61b61a2c273b9cf179cecf3d33428"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.8f6a7328.js",
    "revision": "f99c0680964c02332f8e733a6ef25109"
  },
  {
    "url": "assets/js/15.92ef16e8.js",
    "revision": "e43406fa786a7ac446bb17fe6c53d169"
  },
  {
    "url": "assets/js/16.1fdbcfc2.js",
    "revision": "c34b1845145dcacbec557291547d8e51"
  },
  {
    "url": "assets/js/17.a8bf75e9.js",
    "revision": "149feb0c86fc74a0ff46ff7629bc8c4f"
  },
  {
    "url": "assets/js/18.d844f8bc.js",
    "revision": "fd1e72ac0bdde4136c4f9c67c8902859"
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
    "url": "assets/js/8.108c9761.js",
    "revision": "5ae43d2fc75df6e88d226b107b5e104d"
  },
  {
    "url": "assets/js/9.3e9d73f8.js",
    "revision": "93964a4305be3d2f9b841ea431c581e3"
  },
  {
    "url": "assets/js/app.728e9bdf.js",
    "revision": "acfd61c24c864ac1e1a1e33804281f54"
  },
  {
    "url": "book/index.html",
    "revision": "b57219ba15c2340123322f6e76ef9dc2"
  },
  {
    "url": "c/index.html",
    "revision": "7a2491ed1d9fb6a2e3727b3b12e5b1a0"
  },
  {
    "url": "config.html",
    "revision": "7341b8d375279d9b2004aa13d5478e7a"
  },
  {
    "url": "go/index.html",
    "revision": "e896dcb02e2e969bd0c81ec668c35334"
  },
  {
    "url": "guide/index.html",
    "revision": "3a31c39200665c33df1fa2e6fef26fed"
  },
  {
    "url": "index.html",
    "revision": "7d753a4fc593b41138e4f4c43834043d"
  },
  {
    "url": "java/index.html",
    "revision": "d2c62b3836241fba971a4b56ff418580"
  },
  {
    "url": "javascript/index.html",
    "revision": "db273cff3e2e9adbc9ec816af96d5867"
  },
  {
    "url": "php/index.html",
    "revision": "37800502c2516a5870285f01f0c703dd"
  },
  {
    "url": "python/index.html",
    "revision": "bab015646c798cf5c3b51acbea74f1fd"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "8ee4fe7f816be58a5a220bf0f2c01c17"
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
