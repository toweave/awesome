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
    "revision": "8debaa3c85afeb5ed62550569b57bd81"
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
    "url": "assets/js/10.3fa687c7.js",
    "revision": "8cabc50332898bd192c48a6d63b02cf9"
  },
  {
    "url": "assets/js/11.060ead7b.js",
    "revision": "24c00d99fdd73fe74cd20a66cb2df2dc"
  },
  {
    "url": "assets/js/12.0869b9aa.js",
    "revision": "5fd2675867f4c45c6e2ad426d2d29544"
  },
  {
    "url": "assets/js/13.a2b2b67d.js",
    "revision": "4d96b34ad49125619080be6a4e2478d5"
  },
  {
    "url": "assets/js/14.bb67da74.js",
    "revision": "9a6b75cf6355f7b824e2c0fec0c0d6ee"
  },
  {
    "url": "assets/js/15.ba44e975.js",
    "revision": "84940ed9d9edbedf23b19f08be7dadc7"
  },
  {
    "url": "assets/js/16.d98ac8c8.js",
    "revision": "9c7a4b8f3934d24e9e929bf97e21c0d0"
  },
  {
    "url": "assets/js/17.f5caba67.js",
    "revision": "e103316cb44542580364f48b86684fec"
  },
  {
    "url": "assets/js/18.1b360fb8.js",
    "revision": "3c66eaec1060fda2b9c0da7ed77dc776"
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
    "url": "assets/js/8.067c8b8a.js",
    "revision": "8b07c696235f1fbd2f8853dc6453dc2d"
  },
  {
    "url": "assets/js/9.c1cd48fc.js",
    "revision": "efb106005ca4c7bb637cd8b52342615d"
  },
  {
    "url": "assets/js/app.066ed03f.js",
    "revision": "28fbe7b020a6caf09e9cd5dd84c6ea04"
  },
  {
    "url": "book/index.html",
    "revision": "a5aac3d1645bad39601d8793ed70355f"
  },
  {
    "url": "c/index.html",
    "revision": "6e1c23f1426ac57ae2e0c2782b51dde4"
  },
  {
    "url": "config.html",
    "revision": "6b3b55824cdad510ebdbaaec84ac774e"
  },
  {
    "url": "go/index.html",
    "revision": "3a0526cac808d3c915cbb39a7b4fa052"
  },
  {
    "url": "guide/index.html",
    "revision": "546ec6d07e8bc6342f6c2a0ed7c3c7a5"
  },
  {
    "url": "index.html",
    "revision": "9bc87af3fb5244dccd430468ccda0fa2"
  },
  {
    "url": "java/index.html",
    "revision": "998c95f6af234eddb91517a29685ae99"
  },
  {
    "url": "javascript/index.html",
    "revision": "a9b9ea5900db60f58d6514e2a920b3a0"
  },
  {
    "url": "php/index.html",
    "revision": "4e22df92392d87734323f299a3021c7e"
  },
  {
    "url": "python/index.html",
    "revision": "15bf8d838df67be6f2089ce6c62b5c03"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "df15724ad3b39a02ce3117fcf46672d7"
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
