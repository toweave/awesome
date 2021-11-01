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
    "revision": "82b3ac8d10931fa6a58d2f24cb2b1e92"
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
    "url": "assets/js/10.56d4205e.js",
    "revision": "b25c103d3e8472dbffb75a44681498a5"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.175160ac.js",
    "revision": "57f4615d9f6bbd7735963dad0db20b27"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.14555a0c.js",
    "revision": "463c8ba7b0b87fcae95681bd6a2746bd"
  },
  {
    "url": "assets/js/15.f62e5d78.js",
    "revision": "73cfc6cb3d34db85b075433b56f200b3"
  },
  {
    "url": "assets/js/16.f80a7c90.js",
    "revision": "f14db94e3205e15b37d8c2ac106c88cb"
  },
  {
    "url": "assets/js/17.1c85b285.js",
    "revision": "92fea2222e3e20e874f2f05a6edcce09"
  },
  {
    "url": "assets/js/18.03bbd672.js",
    "revision": "3f44b6625ecc138a0851bf268577dc56"
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
    "url": "assets/js/app.af2b100b.js",
    "revision": "24acf13eb1ce4af35e7188ab2bc37b8b"
  },
  {
    "url": "book/index.html",
    "revision": "479d9c8863728fdc7f6889a98ad3289f"
  },
  {
    "url": "c/index.html",
    "revision": "6e1d3b9224af88d737479c511ffff58c"
  },
  {
    "url": "config.html",
    "revision": "4d18af00af4bb29ef1f5941918f2ee13"
  },
  {
    "url": "go/index.html",
    "revision": "1aad73155f9607582707bf1b9cad6c1f"
  },
  {
    "url": "guide/index.html",
    "revision": "97368f8b255c9147b080ae5cc07a3c8d"
  },
  {
    "url": "index.html",
    "revision": "fad76f7de1ae4da9aa2081c12a690092"
  },
  {
    "url": "java/index.html",
    "revision": "4444972374ba035716da8be4eede794d"
  },
  {
    "url": "javascript/index.html",
    "revision": "2683718a72e28dc2b89abc8037bef633"
  },
  {
    "url": "php/index.html",
    "revision": "0b1078f8981d46a327d9a5e73cc39794"
  },
  {
    "url": "python/index.html",
    "revision": "330780972cf0c4273c3c9e8db9cb1450"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "d300a2a55c8adb36da7b493066a0d474"
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
