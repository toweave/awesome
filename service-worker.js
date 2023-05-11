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
    "revision": "51045762371991a38dcd4c0673137918"
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
    "url": "assets/js/app.c3b172d6.js",
    "revision": "c9d58dcda8fc46e309d98f56d57b7bc9"
  },
  {
    "url": "book/index.html",
    "revision": "c89fe902194b1ba9adf8e5f66da79bd5"
  },
  {
    "url": "c/index.html",
    "revision": "aa26dc29ad5259b6ea906914bd6cf7d2"
  },
  {
    "url": "config.html",
    "revision": "72bf1f5142991a20c4b0082a30a43895"
  },
  {
    "url": "go/index.html",
    "revision": "ab8fd3d171e58911833a1053cb289e77"
  },
  {
    "url": "guide/index.html",
    "revision": "491ad60dbd643d6254affa14b9ffa2c4"
  },
  {
    "url": "index.html",
    "revision": "8949fb1cdba4858f2921ba6b6abff5e3"
  },
  {
    "url": "java/index.html",
    "revision": "b0923158538fd3d61569e00e56af6cbe"
  },
  {
    "url": "javascript/index.html",
    "revision": "83de346634db99449cfe5ba7de0b2b6c"
  },
  {
    "url": "php/index.html",
    "revision": "031c80241607ffcf4071c97920f2521c"
  },
  {
    "url": "python/index.html",
    "revision": "7f67fff28d07d92159138b3e24844f29"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "589bea226c0692a069106f04fc3e28de"
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
