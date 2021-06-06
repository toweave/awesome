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
    "revision": "482568a2f80eea51e98997e4f34ceb13"
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
    "url": "assets/js/10.1dd5bd78.js",
    "revision": "9d11916e38a4ebed5ccf8cb7012b6c2a"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.81d1a91f.js",
    "revision": "a4284fc573a8c703e7f41dee08f10b80"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.fa74fcef.js",
    "revision": "5adcda436947b04bfd58e99ef3a13510"
  },
  {
    "url": "assets/js/15.ad3f17b1.js",
    "revision": "62ad7b9e46a0d0909ee277b2c3a8230b"
  },
  {
    "url": "assets/js/16.e672e861.js",
    "revision": "1c1f34eccb8dea67b2149a7b32c87de3"
  },
  {
    "url": "assets/js/17.73e8bdf9.js",
    "revision": "4833a78a0892a37e2b8ebdb8fd10eeb7"
  },
  {
    "url": "assets/js/18.1869d618.js",
    "revision": "639e459a8b5dabe3f6bcaac0d6c48d15"
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
    "url": "assets/js/8.d47b7c04.js",
    "revision": "5ab4061635d940401a99605e781b7def"
  },
  {
    "url": "assets/js/9.105e825b.js",
    "revision": "4537b5f2f6b1ec08f23095bea9a5c79a"
  },
  {
    "url": "assets/js/app.0dd0843a.js",
    "revision": "ef434d707bf4f1a835742515a51ceb66"
  },
  {
    "url": "book/index.html",
    "revision": "f19a69960b5f0a340c6e18d6a8efbf07"
  },
  {
    "url": "c/index.html",
    "revision": "be47f58d8b288f5239af846debc1bf27"
  },
  {
    "url": "config.html",
    "revision": "ada8a085b50138b1442d4a7bea937492"
  },
  {
    "url": "go/index.html",
    "revision": "c2f4fa844d126fe9e84df2d31de2250e"
  },
  {
    "url": "guide/index.html",
    "revision": "2a9f78b9b61a815218a2901be519bc25"
  },
  {
    "url": "index.html",
    "revision": "b7c07922a1b8218c464800442d7e5edb"
  },
  {
    "url": "java/index.html",
    "revision": "123e8642e737522f16a80ca2dd3ea0d8"
  },
  {
    "url": "javascript/index.html",
    "revision": "96fb66938590c687c1493d3a4a70225d"
  },
  {
    "url": "php/index.html",
    "revision": "d927b5f0ba1bb34ee94aac00a32fc8d2"
  },
  {
    "url": "python/index.html",
    "revision": "099bfcf7c99262e8be6985533163ca5b"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "f6faf34ad861e38d404fc7c9f1251cfe"
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
