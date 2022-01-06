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
    "revision": "c81eab47d1f4138308c1a3f88caa4bd9"
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
    "url": "assets/js/10.4a185681.js",
    "revision": "370f6a196445e9c06f7a96ddf184fdf5"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.52157af2.js",
    "revision": "3eed2de1e86072892dcf1a59458f45ff"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.695fa2b5.js",
    "revision": "66cdc503cfa8c17717c1a3bff19b2e90"
  },
  {
    "url": "assets/js/15.e2c3831c.js",
    "revision": "1008a600a3c9df5e46d6b6677543cc41"
  },
  {
    "url": "assets/js/16.0fd1628f.js",
    "revision": "8d9a715f572582a9f9ab86a54df28bbb"
  },
  {
    "url": "assets/js/17.7d57d166.js",
    "revision": "eecd699a445cff35546fa1201ca1a54c"
  },
  {
    "url": "assets/js/18.7a3fb1aa.js",
    "revision": "82c50aa8ec488140b009c55ef2a759d5"
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
    "url": "assets/js/8.cb9d306d.js",
    "revision": "07d5e1dc7fa236109711025f4c58ce04"
  },
  {
    "url": "assets/js/9.2f977704.js",
    "revision": "334c0c0090cd64d83a37459d6ddffd6f"
  },
  {
    "url": "assets/js/app.434c5b60.js",
    "revision": "8e21bb8ecc122bbf8208c0aa1d9720d6"
  },
  {
    "url": "book/index.html",
    "revision": "1ad627c9e2b1362a96a9de92de0ccb5a"
  },
  {
    "url": "c/index.html",
    "revision": "b0edd97ec764a234267ac5d8ea63fd3a"
  },
  {
    "url": "config.html",
    "revision": "3d05ef5522561038140c857fb108dc0f"
  },
  {
    "url": "go/index.html",
    "revision": "caaadab1b1b4f25baac16c68e78a1343"
  },
  {
    "url": "guide/index.html",
    "revision": "6972465a35a2e39b2f52e23b0f5e9beb"
  },
  {
    "url": "index.html",
    "revision": "2c426bcbd5d807d30b60254212306bf8"
  },
  {
    "url": "java/index.html",
    "revision": "d8cec1db280b43dfd09dc2f0e30c39ea"
  },
  {
    "url": "javascript/index.html",
    "revision": "3ef05230c28b90eb85217a9dae6c436a"
  },
  {
    "url": "php/index.html",
    "revision": "ca64f9dc80c048a4aa87f16a76d732d2"
  },
  {
    "url": "python/index.html",
    "revision": "e42446b42ca9bf366c20e81eac5e4fa3"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "ec882cedda2c96d0d9314f4256bead41"
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
