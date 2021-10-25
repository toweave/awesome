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
    "revision": "b6b59c726f9c9d6e55670018f8fb4246"
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
    "url": "assets/js/10.4651f94e.js",
    "revision": "3fc7398ec58e86b61901816da2dbe9fe"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.1497e075.js",
    "revision": "b612c74a13b55ed7b386ea2f7001e2df"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.852bfe75.js",
    "revision": "b46b3c8887506f4e8eb0ddfc5f7033a5"
  },
  {
    "url": "assets/js/15.90629ea3.js",
    "revision": "c69f038788537eda6e0509a58e89d4e5"
  },
  {
    "url": "assets/js/16.f1e83a21.js",
    "revision": "887b762282b2de0e4f89c16b5b6230a6"
  },
  {
    "url": "assets/js/17.81c84f25.js",
    "revision": "b108ad63a0bcbbf4a3e407ed7dedbd14"
  },
  {
    "url": "assets/js/18.872ad068.js",
    "revision": "8c72fc35cd544030b5fa8495433807b6"
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
    "url": "assets/js/8.5b5de591.js",
    "revision": "a2dd0b7744ccde90ef4d9377110d7428"
  },
  {
    "url": "assets/js/9.0264acf4.js",
    "revision": "a9ccda127c7fa96985b79cf31ddc16c8"
  },
  {
    "url": "assets/js/app.a90aa0a7.js",
    "revision": "63938ca7ce895b3f567f329e806f30d8"
  },
  {
    "url": "book/index.html",
    "revision": "bb1dd9bc77be81b3afc3f3728a3ae5bd"
  },
  {
    "url": "c/index.html",
    "revision": "356307771ddb0000773ec176f8c9602a"
  },
  {
    "url": "config.html",
    "revision": "e824bc37023b6fc1a777bd4c823b6921"
  },
  {
    "url": "go/index.html",
    "revision": "5d98359bd017c84d76657bde99bda8a6"
  },
  {
    "url": "guide/index.html",
    "revision": "0c8eebffb23a0f61b4f744678f4f5b8b"
  },
  {
    "url": "index.html",
    "revision": "73a39f8abcf1e3a267546e21d0105958"
  },
  {
    "url": "java/index.html",
    "revision": "74e3805679256defaffdddad7dbb772f"
  },
  {
    "url": "javascript/index.html",
    "revision": "d07d10a728a281b8fde28ac37db8c355"
  },
  {
    "url": "php/index.html",
    "revision": "13d3036b6c8564f5906861528e03e04a"
  },
  {
    "url": "python/index.html",
    "revision": "b7859f80c8626467755965e6b120f7f2"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "855347b99277f2bafa490a0b9ae846ae"
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
