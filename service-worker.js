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
    "revision": "71e32e52685d354352d9ee8d13ac1901"
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
    "url": "assets/js/10.ce18bce3.js",
    "revision": "3f6046cb2589bbd20ea6a89d9d850abd"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.3bb4e164.js",
    "revision": "39c0efab7ad358a2917f78ab460593d0"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.e89f8dcb.js",
    "revision": "4714ee185fe44169042aea0eda722688"
  },
  {
    "url": "assets/js/15.1b0c801f.js",
    "revision": "16867a9292fb582e2283eeadda1252d6"
  },
  {
    "url": "assets/js/16.bad97843.js",
    "revision": "868061035adff1ff34556d17ddf3359b"
  },
  {
    "url": "assets/js/17.680b033c.js",
    "revision": "51d6ad667b90b2dfd9cbff34236c2899"
  },
  {
    "url": "assets/js/18.317e0ccf.js",
    "revision": "41bfe881b9bef9c104f1311fad6a4052"
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
    "url": "assets/js/8.4b3cafd0.js",
    "revision": "7c3bb091fc95902e65562d0560736ec9"
  },
  {
    "url": "assets/js/9.831f7f25.js",
    "revision": "2919c81c9b76edef31613284afbf46bd"
  },
  {
    "url": "assets/js/app.a4079b07.js",
    "revision": "23f4ec43c46777b39702a72262afbf80"
  },
  {
    "url": "book/index.html",
    "revision": "ab3508d24425e224a33b896ae83d25d9"
  },
  {
    "url": "c/index.html",
    "revision": "238501b8208c028cbf1f74892ac4bd9e"
  },
  {
    "url": "config.html",
    "revision": "2d26289176f96fef6af113a6193aa40b"
  },
  {
    "url": "go/index.html",
    "revision": "afabbf16bd46b69384b43d79d9c2d9cb"
  },
  {
    "url": "guide/index.html",
    "revision": "1ce149c48cfc5047a20cd9bc6b5542f1"
  },
  {
    "url": "index.html",
    "revision": "467b481e03c8876ab64eb8bd40a6b293"
  },
  {
    "url": "java/index.html",
    "revision": "ee859f45f5f90d2fb547075d07bd4a5d"
  },
  {
    "url": "javascript/index.html",
    "revision": "cb9caae0be4c79629331f51c857c1fb6"
  },
  {
    "url": "php/index.html",
    "revision": "557383d4f5cea162c105b0fbc04adcc5"
  },
  {
    "url": "python/index.html",
    "revision": "778f7b816d7151cb34a37372e24c3da6"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "20445eed71aa62f4d29aa0488204ec24"
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
