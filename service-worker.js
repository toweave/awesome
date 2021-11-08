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
    "revision": "72518c4a822832dcad659528ca9c2c62"
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
    "url": "assets/js/10.c8d3a7e5.js",
    "revision": "be2fdfe341a9e0666fcf4c33be372488"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.be7c909e.js",
    "revision": "d05e7f34aed689cf71aeffb3ae3d2ec4"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.75adfb13.js",
    "revision": "050302d702700b05f950f2ba2767f0d0"
  },
  {
    "url": "assets/js/15.84ff7ac1.js",
    "revision": "2c9128535ffe28ccc88228c75f0b0193"
  },
  {
    "url": "assets/js/16.f6012683.js",
    "revision": "4b85a783e7b1dfc653cd8c316b8652a6"
  },
  {
    "url": "assets/js/17.e1622d6c.js",
    "revision": "bf8747bc090f8e652c9fbdaecce6c3b8"
  },
  {
    "url": "assets/js/18.ae7440d1.js",
    "revision": "a767bc8faa124f5894e3f5eb793ca55a"
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
    "url": "assets/js/8.ae4ce4f0.js",
    "revision": "110db2b9fc27384fa7ce0f65bfc287e9"
  },
  {
    "url": "assets/js/9.7446f641.js",
    "revision": "fa6785ca88c659868abd5d265c298644"
  },
  {
    "url": "assets/js/app.d04ae001.js",
    "revision": "bfbcdb4dfc64a6ab9ab489b7ba807ee8"
  },
  {
    "url": "book/index.html",
    "revision": "55a71b14e8ab05c51b550c696457d380"
  },
  {
    "url": "c/index.html",
    "revision": "e0efdc63fe37a455366f72f751b09e5f"
  },
  {
    "url": "config.html",
    "revision": "e1a2b0a922eec96571aa4f2f1fbaa2d4"
  },
  {
    "url": "go/index.html",
    "revision": "307a20614ab89971432c858a261345e9"
  },
  {
    "url": "guide/index.html",
    "revision": "2c5fe6b06c4c71fed18bc4481bd1019a"
  },
  {
    "url": "index.html",
    "revision": "30cd109f86fc211454b596f02fe349ba"
  },
  {
    "url": "java/index.html",
    "revision": "6feea591703c9f2fe64a852a4765404e"
  },
  {
    "url": "javascript/index.html",
    "revision": "742400d34d8829f6fd1bfa43a65dc2b3"
  },
  {
    "url": "php/index.html",
    "revision": "67fb3732c2c17164484b9c5793900388"
  },
  {
    "url": "python/index.html",
    "revision": "02780b9f3879634cbe44a6223be9eadc"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "cabe725f1ef1a02d57c57107053d3973"
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
