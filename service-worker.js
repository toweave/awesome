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
    "revision": "c88ac1cc8dab47ca83dac8e4dbbf7aee"
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
    "url": "assets/js/10.c8aef8cb.js",
    "revision": "6ef838ade8e7be0e9b4cd57ef48d3fa5"
  },
  {
    "url": "assets/js/11.fa74cdfb.js",
    "revision": "810429b8fb2a55bee286403c6b80fb3e"
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
    "url": "assets/js/14.5a760f87.js",
    "revision": "7f2d39bebf342bbabd7c88d33916bc43"
  },
  {
    "url": "assets/js/15.c12a8c12.js",
    "revision": "9cfdacdcd067cd91a5d8014bca8c9902"
  },
  {
    "url": "assets/js/16.f82923c3.js",
    "revision": "5c04f36bdb8f428895e26be1df65e9dd"
  },
  {
    "url": "assets/js/17.f3a27556.js",
    "revision": "0f0d11df416b96678f6099e9d083b445"
  },
  {
    "url": "assets/js/18.6403d968.js",
    "revision": "46b0c82d7e5ea10acbf9a8d964967cde"
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
    "url": "assets/js/8.b938fdd9.js",
    "revision": "756168288215fd4e6aa87ee04a63dd66"
  },
  {
    "url": "assets/js/9.d354f39b.js",
    "revision": "19867d9ff4bdbbf5b961f625859b82e6"
  },
  {
    "url": "assets/js/app.20e201e7.js",
    "revision": "288a851318bfbeda185c470b964e1548"
  },
  {
    "url": "book/index.html",
    "revision": "981ded445629e79f5b4ffb4e7b514901"
  },
  {
    "url": "c/index.html",
    "revision": "a6d0aa952d54d7c31272e443983bd3eb"
  },
  {
    "url": "config.html",
    "revision": "f575b87c7710541a572d2a6c7b555827"
  },
  {
    "url": "go/index.html",
    "revision": "e20ba0ef60414e8001c05ffe43888cf1"
  },
  {
    "url": "guide/index.html",
    "revision": "ed61910c9f9763214037e4f823ed1082"
  },
  {
    "url": "index.html",
    "revision": "5884f7b7d5bf68d6ea5fdec7ca12f27d"
  },
  {
    "url": "java/index.html",
    "revision": "27c5b1abfcef84065cf4d6c97b5cf718"
  },
  {
    "url": "javascript/index.html",
    "revision": "46d49cd56e850ba606cf19dc3dbda5d1"
  },
  {
    "url": "php/index.html",
    "revision": "80421e9e9220a2bccfb75415855d5ddf"
  },
  {
    "url": "python/index.html",
    "revision": "6ca78f81bce00eeb517cc049b2daf0d5"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "232f436b596cc5b3cfaa43ef6969475a"
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
