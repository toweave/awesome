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
    "revision": "47e1febe5457b98989a00ee56dadc31b"
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
    "url": "assets/js/10.a06aa929.js",
    "revision": "edf64734a7da5f87de9671a99cf79e9e"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.16235958.js",
    "revision": "eca7319b7ea578fd15814f7cf57a0d9c"
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
    "url": "assets/js/17.d457c729.js",
    "revision": "025586161e042c78fa79c07c77ecc10a"
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
    "url": "assets/js/8.b235ef4d.js",
    "revision": "377e07c567ca22a366a95e4d6fb87e08"
  },
  {
    "url": "assets/js/9.d56157b6.js",
    "revision": "8661fe8de477aedc94aa991a005f5af6"
  },
  {
    "url": "assets/js/app.c7afbbf9.js",
    "revision": "afce969ab5ccb0260ae43f9c3c2f2909"
  },
  {
    "url": "book/index.html",
    "revision": "5becfa2d1b2d060816d8a892842447b2"
  },
  {
    "url": "c/index.html",
    "revision": "c644c7a358e8e6b6c294fd6671014e76"
  },
  {
    "url": "config.html",
    "revision": "664b45f2f77079dbd11867b30ff9061f"
  },
  {
    "url": "go/index.html",
    "revision": "f7144b2044f4c5751f162a75a839c33a"
  },
  {
    "url": "guide/index.html",
    "revision": "71619bb4c1b4276db0073c6396d6914b"
  },
  {
    "url": "index.html",
    "revision": "ce14025a4f94cee7e2a4eaca29d3e937"
  },
  {
    "url": "java/index.html",
    "revision": "02cf66bbb9c5e25e515643766b470788"
  },
  {
    "url": "javascript/index.html",
    "revision": "de2c71d05cc1eefcea2f4345074f4029"
  },
  {
    "url": "php/index.html",
    "revision": "212d1e4952bfb73faaee0f2d65b58565"
  },
  {
    "url": "python/index.html",
    "revision": "1149c8cfc5ba310759caae27df49a6e0"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "5acba85bca97aaef8e2e38c79b81565a"
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
