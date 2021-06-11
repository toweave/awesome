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
    "revision": "4d1f7b30ba3f23b1a294aa654836f5de"
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
    "url": "assets/js/10.474369dc.js",
    "revision": "4a52a3269f95a54f3b22ba8989834f12"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.d5572cef.js",
    "revision": "ac364c6dc0280c5c773ae612131e7ac9"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.09eed910.js",
    "revision": "8ff9d7f61f47205bde889ce560451e5f"
  },
  {
    "url": "assets/js/15.d77731d9.js",
    "revision": "63c95294cf01167846b66e9fbd242a4c"
  },
  {
    "url": "assets/js/16.68e50773.js",
    "revision": "5808b9c4cdc126b00191a66c2e0acb32"
  },
  {
    "url": "assets/js/17.0d80e85f.js",
    "revision": "e571993e8748a089bb82ef4073a9c880"
  },
  {
    "url": "assets/js/18.e71d0520.js",
    "revision": "2a7920a4d29e53c566ef236ffb242a8c"
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
    "url": "assets/js/8.17a59a07.js",
    "revision": "884f7dc5737a2dea0e5fafd2df65dccd"
  },
  {
    "url": "assets/js/9.e881d4f7.js",
    "revision": "4f71f4763c0532b0ea5c8fd44b38b9b2"
  },
  {
    "url": "assets/js/app.5c2ecca1.js",
    "revision": "09cc33592c6a8b50600413c5bc469dc2"
  },
  {
    "url": "book/index.html",
    "revision": "3b7a7ed8e4ee258b5749f5005b6a381f"
  },
  {
    "url": "c/index.html",
    "revision": "8a559d250177889bb2c6c7b7a28f860c"
  },
  {
    "url": "config.html",
    "revision": "d4db58f531c3171f9569442e3ceef6f4"
  },
  {
    "url": "go/index.html",
    "revision": "3f1e1957b142d92454d1ec986ff59764"
  },
  {
    "url": "guide/index.html",
    "revision": "d30aa79cfea6c7caabc66ee5fa34ac8a"
  },
  {
    "url": "index.html",
    "revision": "862472f093a2e188e47fdffbc46a9bd1"
  },
  {
    "url": "java/index.html",
    "revision": "0d6f18e697149c0a560f80e07e214ad1"
  },
  {
    "url": "javascript/index.html",
    "revision": "409eec47f540394212bab00f2638728c"
  },
  {
    "url": "php/index.html",
    "revision": "db96c91268de745d5770cc51c76fb4cf"
  },
  {
    "url": "python/index.html",
    "revision": "08c94ff46d2de8018a63b25dec4f428e"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "32d8fdaeb4087b68ba9a50105fc23ca1"
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
