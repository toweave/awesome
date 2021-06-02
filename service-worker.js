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
    "revision": "32687fc1b99c19e78dba4bc5e75be674"
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
    "url": "assets/js/10.7df3ac11.js",
    "revision": "c9d3e6df33469753e426e61db01b2e02"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.f8c05f25.js",
    "revision": "f89e5353854784440fea5f97b382ff95"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.a51cc096.js",
    "revision": "aeeef16094dcbb3e16d6a0316997fc3d"
  },
  {
    "url": "assets/js/15.8b1d1a04.js",
    "revision": "14477f9b9f2051245f7551c5383d3432"
  },
  {
    "url": "assets/js/16.b52ec6a6.js",
    "revision": "77a1cce9e746c62db2bcc126d5154d5a"
  },
  {
    "url": "assets/js/17.b76ee2fe.js",
    "revision": "bb589d37fd1b0771b3021ae4a017c15a"
  },
  {
    "url": "assets/js/18.09a518b0.js",
    "revision": "367a27668fb0b19ae6a772505077debf"
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
    "url": "assets/js/8.b313da16.js",
    "revision": "4276605be1f81dfe5322241ae2cf65ff"
  },
  {
    "url": "assets/js/9.e1e75549.js",
    "revision": "6de1697e0849718604c497d8dfa30847"
  },
  {
    "url": "assets/js/app.9599f3e7.js",
    "revision": "f4fb6bf7ba0f4abfa9019cda03abe9db"
  },
  {
    "url": "book/index.html",
    "revision": "a69cad9ef76abd16244aebedb7ddfa2d"
  },
  {
    "url": "c/index.html",
    "revision": "60a26f978832be6d54d125b73d665c9b"
  },
  {
    "url": "config.html",
    "revision": "a998524cc35348b6b12109490cffe7be"
  },
  {
    "url": "go/index.html",
    "revision": "cd6ea4eef7d0fc3ff78fe2c7f38b6559"
  },
  {
    "url": "guide/index.html",
    "revision": "9eacee64b12c8cd99073697485797c93"
  },
  {
    "url": "index.html",
    "revision": "26be905c6824dbdd31593fce2b1d5429"
  },
  {
    "url": "java/index.html",
    "revision": "ff815f0265aedaf4b7693b99cf2cc76d"
  },
  {
    "url": "javascript/index.html",
    "revision": "5e620090c23980b93ba3b3b46c8f4ce2"
  },
  {
    "url": "php/index.html",
    "revision": "f1927f8e7df0c6e2ba95eb7d71c71292"
  },
  {
    "url": "python/index.html",
    "revision": "246895092898fba5de917c14310218e0"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "684b0a424499c8eff7d91674611b37a5"
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
