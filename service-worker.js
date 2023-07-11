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
    "revision": "2e21c196d789fc85f3607bc8e2cdf94b"
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
    "url": "assets/js/10.ca3dc75f.js",
    "revision": "5511beac56cd25470251778c273e073e"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.26a54429.js",
    "revision": "564884bed78deed125f3d0c7379f5ded"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.9a048dc4.js",
    "revision": "6f557088eb0df3b68c1e85f9ed465aec"
  },
  {
    "url": "assets/js/15.3b14f530.js",
    "revision": "500413e2baef911a123dd0ae74d19b56"
  },
  {
    "url": "assets/js/16.81797323.js",
    "revision": "5c26c4f99f8b416850d80fee36050586"
  },
  {
    "url": "assets/js/17.5ecc9927.js",
    "revision": "2f7a91439b7cf245b2e28efa19a668b6"
  },
  {
    "url": "assets/js/18.12bea115.js",
    "revision": "a0590f54f1ff92ed2500bf36b1954ee3"
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
    "url": "assets/js/8.8242d32f.js",
    "revision": "4f4796f7318c94a94e8274d97e780b62"
  },
  {
    "url": "assets/js/9.7be72cd3.js",
    "revision": "5604102e2bc82386ca12effcd5a2a2b1"
  },
  {
    "url": "assets/js/app.48ce2f46.js",
    "revision": "ed2ed7e9f7f117ad523baeee1f7012f6"
  },
  {
    "url": "book/index.html",
    "revision": "839b923ec6fd2e0ccf4d36b9dc3fa701"
  },
  {
    "url": "c/index.html",
    "revision": "1ff44c864d48922e696542de2163d4d4"
  },
  {
    "url": "config.html",
    "revision": "e40acbc811d2280bb883f13b7c84977a"
  },
  {
    "url": "go/index.html",
    "revision": "7ad1a3623a6756b83b9cdfbdc4d922f8"
  },
  {
    "url": "guide/index.html",
    "revision": "e7de430f3eecfe83d1b303338048f121"
  },
  {
    "url": "index.html",
    "revision": "cf11fbea698196fe250487c05e323071"
  },
  {
    "url": "java/index.html",
    "revision": "fb09f285a2d4aa59478b2a0550b901fd"
  },
  {
    "url": "javascript/index.html",
    "revision": "c3edb3fa8b8788d77c4e8697a0a7bb44"
  },
  {
    "url": "php/index.html",
    "revision": "d634187a96e030a2dbb771e802255de8"
  },
  {
    "url": "python/index.html",
    "revision": "55a82765e896bf58a0fb9ceb8bbf16ea"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "6d9925c2a5d28f0d5476f89f415fe09f"
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
