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
    "revision": "1cfb5bd7e1d1fb2af884ef2cc6f823c4"
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
    "url": "assets/js/app.76b60a36.js",
    "revision": "344e017fa198b1239fde505c8b738dc7"
  },
  {
    "url": "book/index.html",
    "revision": "474e9445c40b72a3745ae34b81d97b8f"
  },
  {
    "url": "c/index.html",
    "revision": "baff63dcf80e914ad821c615387c0649"
  },
  {
    "url": "config.html",
    "revision": "a3b9bf38f511d4f1ef8cd4f77a65d894"
  },
  {
    "url": "go/index.html",
    "revision": "7b811b99eb6d7f3adcef0fbc2753a9d7"
  },
  {
    "url": "guide/index.html",
    "revision": "f3b16969067e37088ab4afa21862bd38"
  },
  {
    "url": "index.html",
    "revision": "f43c1d5b555a247a672d02970b439d54"
  },
  {
    "url": "java/index.html",
    "revision": "3d6ac3297ccb258ec5d33f2a9c93db7d"
  },
  {
    "url": "javascript/index.html",
    "revision": "7d2f5e5b41f3700073ea225700dd4cdc"
  },
  {
    "url": "php/index.html",
    "revision": "46257846674c7e371f367e621af6b16b"
  },
  {
    "url": "python/index.html",
    "revision": "91192c7ffbdc5d67d1d0e1138f17dda2"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "26c7cc0ccca5a46841a0a1005fd3fef8"
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
