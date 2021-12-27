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
    "revision": "23f9777671122f97eb244b075777a099"
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
    "url": "assets/js/10.995e2a7a.js",
    "revision": "45591c83f355351bd4e219d3571cbdd1"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.0d3a7a8e.js",
    "revision": "b54e4f92198a7b77cf4fa85eed67ce50"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.ad9e906a.js",
    "revision": "37e18bc31f6807e66a47f49cd55c7b72"
  },
  {
    "url": "assets/js/15.92024d24.js",
    "revision": "325044afca32c09004ae3446374c98c1"
  },
  {
    "url": "assets/js/16.06e6988a.js",
    "revision": "896ee718dc41e1dfe298b2601f0e7087"
  },
  {
    "url": "assets/js/17.b56462ae.js",
    "revision": "957b71987b633c3e2326abee1161ef33"
  },
  {
    "url": "assets/js/18.aa6bdc2f.js",
    "revision": "5b54a71a17eeb81235c42c793ecf42f1"
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
    "url": "assets/js/8.a556e4f9.js",
    "revision": "f92294a8807e9ab2af864f339fd52815"
  },
  {
    "url": "assets/js/9.ed8ec357.js",
    "revision": "d9e490e95fc7d5f092d2f39a5aec04b9"
  },
  {
    "url": "assets/js/app.a8cffe77.js",
    "revision": "db1fb0f0dec4440c672feb06c354d057"
  },
  {
    "url": "book/index.html",
    "revision": "ec17e8e98d05d489e100f047827feaa1"
  },
  {
    "url": "c/index.html",
    "revision": "c82890dfc32a89456805a90f43b5f57f"
  },
  {
    "url": "config.html",
    "revision": "ec66d732360928971d5027ace987e541"
  },
  {
    "url": "go/index.html",
    "revision": "9d40013b0e38a2d6b1de4adc27a7a5a2"
  },
  {
    "url": "guide/index.html",
    "revision": "0b9c286cccac492089d7849628771c34"
  },
  {
    "url": "index.html",
    "revision": "79ee4e3850ff6638fb9574126bdf4de8"
  },
  {
    "url": "java/index.html",
    "revision": "3e4d1360a64c3318b6e5345c8d7b211f"
  },
  {
    "url": "javascript/index.html",
    "revision": "ddcf56a379970800d48e1fe6fce01c8c"
  },
  {
    "url": "php/index.html",
    "revision": "1e3c1a10e6607ecf0b362ae373689b4f"
  },
  {
    "url": "python/index.html",
    "revision": "4a0504da3c1ff302af7d13990d8afc6b"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "5c826ff6c83c5b95a5cce67184994295"
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
