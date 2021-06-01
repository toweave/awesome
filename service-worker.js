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
    "revision": "2ebcbb416527976783564ee6bc982aaa"
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
    "url": "assets/js/10.2490a6fe.js",
    "revision": "e7895a5434a6d5bdcc823875e3b609eb"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.94c34aa8.js",
    "revision": "814f8e131d8e416cba897fd91252f7bb"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.7e9a3c11.js",
    "revision": "1014b9ab9f9f6e9211324d5aba56b157"
  },
  {
    "url": "assets/js/15.ce3eff98.js",
    "revision": "35221fcead4b7de164d60b993bb914d7"
  },
  {
    "url": "assets/js/16.0245a8f2.js",
    "revision": "825df200d5dd8954019f0a10b4d4df3f"
  },
  {
    "url": "assets/js/17.590773e5.js",
    "revision": "4cdc595473dc0cad308de4d04a4899cd"
  },
  {
    "url": "assets/js/18.468ca7f8.js",
    "revision": "ac843e08a735e4f0d1aa101896b59ff9"
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
    "url": "assets/js/8.edb027c8.js",
    "revision": "0edf094065e060c7c8173836deb61987"
  },
  {
    "url": "assets/js/9.f16767ed.js",
    "revision": "aab44c539cea4742ea00f7940225313a"
  },
  {
    "url": "assets/js/app.6dfc4160.js",
    "revision": "3887638de3eef97c7e88652362b688aa"
  },
  {
    "url": "book/index.html",
    "revision": "142c84f2c91a0101f29274f7481eca45"
  },
  {
    "url": "c/index.html",
    "revision": "06875d1fa3c846a1609278f29d877976"
  },
  {
    "url": "config.html",
    "revision": "f71e5810247741133b898f7dc59ec748"
  },
  {
    "url": "go/index.html",
    "revision": "bcd300f844e628594bd0eaac42a7f656"
  },
  {
    "url": "guide/index.html",
    "revision": "1ee139db79ad36f3eb247f449fed0c42"
  },
  {
    "url": "index.html",
    "revision": "21f681e7b3eca9ed2b4c68347ccf2ac6"
  },
  {
    "url": "java/index.html",
    "revision": "eb4efc0fb80d7d9c2c387155db6f429e"
  },
  {
    "url": "javascript/index.html",
    "revision": "d514da36a6e19f085f41631d40a9ebed"
  },
  {
    "url": "php/index.html",
    "revision": "0af6bbe08edc9b4ae5225e63ed28f46f"
  },
  {
    "url": "python/index.html",
    "revision": "02846316e82751e48e4fd2c33a529424"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "3b41684e67ebbd74a6047a1753ba89c7"
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
