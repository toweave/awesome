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
    "revision": "8b2809c22f036efef393110e4d2949be"
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
    "url": "assets/js/10.2e85976c.js",
    "revision": "0a587ada9b275bea6fc0ccb9ae0c3a94"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.a3ec4a20.js",
    "revision": "070cd876bdc5422f445bba0dcd69d2a3"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.055cbed7.js",
    "revision": "8169b5c9ffe37dc4d027261ac629fcac"
  },
  {
    "url": "assets/js/15.68f6c54f.js",
    "revision": "8bbeb47b693f318abb194e6e06bb2b91"
  },
  {
    "url": "assets/js/16.2f4c2107.js",
    "revision": "b383e65ba01573449afdc0b56780afc4"
  },
  {
    "url": "assets/js/17.131d4c60.js",
    "revision": "cbe4fe09a834d1bcb34a9cd5dc18767c"
  },
  {
    "url": "assets/js/18.4d5ffec5.js",
    "revision": "ba165676b6f8e894dc34bf49e7355217"
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
    "url": "assets/js/8.5d373bc9.js",
    "revision": "fe2a48293d3d72d478f09c823001b121"
  },
  {
    "url": "assets/js/9.34ddc1d7.js",
    "revision": "7281aa2c04d00100f98c7ee8217b4286"
  },
  {
    "url": "assets/js/app.c518ef50.js",
    "revision": "b82e30c1a38370550dfa3aec5421cd7c"
  },
  {
    "url": "book/index.html",
    "revision": "76b9266b30e66772ff29f200a6732c79"
  },
  {
    "url": "c/index.html",
    "revision": "9670b7cba85c324797789cc36d13d76e"
  },
  {
    "url": "config.html",
    "revision": "d958cf79d80e9d4b1e2d64c8fc81b43f"
  },
  {
    "url": "go/index.html",
    "revision": "1c08a19e91746bfa9b6bf8386b696514"
  },
  {
    "url": "guide/index.html",
    "revision": "406ef7342d3c42d14202ae4fd09c83cc"
  },
  {
    "url": "index.html",
    "revision": "ca02d2505b54fb4e43c7a8b9af52a5af"
  },
  {
    "url": "java/index.html",
    "revision": "2b7aab536bf13c36637f5037d388e72f"
  },
  {
    "url": "javascript/index.html",
    "revision": "7b40d983e0d711c7d2e136207065ff20"
  },
  {
    "url": "php/index.html",
    "revision": "a25ed18e1f2d04f105b40b1b9eb6153a"
  },
  {
    "url": "python/index.html",
    "revision": "5af2033c799a08662095bbb095160275"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "349e3d26ea7fbe1a21fbfd9644f2cdc1"
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
