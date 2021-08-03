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
    "revision": "9902277796bca8e4f0daca55b557e43c"
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
    "url": "assets/js/10.62733725.js",
    "revision": "ea8231c0d3486d33d5232ecc95b5aef8"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.34f27f5f.js",
    "revision": "b13ff1cf5c80ed4f8cdcdc3edfef503b"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.fc3ca7fd.js",
    "revision": "52f4c6a1815985d9eb3c118bf1ff0938"
  },
  {
    "url": "assets/js/15.3c04024c.js",
    "revision": "eabaa0ab02f96a7fd73b10ff180b88c7"
  },
  {
    "url": "assets/js/16.aa3e7ab8.js",
    "revision": "79f7342253e3588db0b327a1fe0cdde9"
  },
  {
    "url": "assets/js/17.03049080.js",
    "revision": "ac5e994616abbfdeed4a5193c9be1f31"
  },
  {
    "url": "assets/js/18.9af97892.js",
    "revision": "c1c5530de474f5aa6075abe5dccff4fc"
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
    "url": "assets/js/8.7ce6beb7.js",
    "revision": "f43d3af80789ac8a2d09b36bcc316740"
  },
  {
    "url": "assets/js/9.f260c5a5.js",
    "revision": "000293d24396349ea0907fa25b8abd84"
  },
  {
    "url": "assets/js/app.5949971e.js",
    "revision": "425de2fab5ab5b4a2caff576527be585"
  },
  {
    "url": "book/index.html",
    "revision": "454bdf0bb16ef93bbfe238a5b59d1324"
  },
  {
    "url": "c/index.html",
    "revision": "0553d33bbd854e3973fc8c9b7cfb4c9d"
  },
  {
    "url": "config.html",
    "revision": "ab59d36d420e284f68600bd6dff1fa41"
  },
  {
    "url": "go/index.html",
    "revision": "b17c1912982ddca8a7e6a864a2df6c3a"
  },
  {
    "url": "guide/index.html",
    "revision": "2cfdf05e2dcf57810e2206ca13e38aac"
  },
  {
    "url": "index.html",
    "revision": "24402b276e33191e5ce4d4118895f329"
  },
  {
    "url": "java/index.html",
    "revision": "6d9cfff57f166bfad9a707e520762ad3"
  },
  {
    "url": "javascript/index.html",
    "revision": "9288048732dbba7a80d9f6bbc2197713"
  },
  {
    "url": "php/index.html",
    "revision": "f6bf4e834d5f8249d7a380015d8409da"
  },
  {
    "url": "python/index.html",
    "revision": "596ecb280b9ae72db3a2ce7a9b11049c"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "b0d5a02763e703bc8f107986c05d4493"
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
