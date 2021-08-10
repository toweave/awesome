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
    "revision": "21ec8e9ca51de096027f60735e1d6012"
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
    "url": "assets/js/10.aefcab5b.js",
    "revision": "ef102c6eb76ab99934b869d3373a979a"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.4a3cbe1f.js",
    "revision": "7ea1eda4e329c1fab65e1eca2f635b22"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.3cadc372.js",
    "revision": "52e86679b0ccfc824ed5f84265c35a0d"
  },
  {
    "url": "assets/js/15.c7737e14.js",
    "revision": "dfdac6a16353a51611102a166ce60c96"
  },
  {
    "url": "assets/js/16.2962a34b.js",
    "revision": "25dcd275ca578adc28c46cc9bc8a2c43"
  },
  {
    "url": "assets/js/17.65b09553.js",
    "revision": "d8d6386ff09edbd47549b00ae2cc5e8f"
  },
  {
    "url": "assets/js/18.a63d2583.js",
    "revision": "30d45e85e180bf8fce27c102485d15cd"
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
    "url": "assets/js/8.ca83a002.js",
    "revision": "989784c4e412084dcf181e9dbdd33407"
  },
  {
    "url": "assets/js/9.bdbbde7e.js",
    "revision": "1bf09867f6536d5615196b15f19950c7"
  },
  {
    "url": "assets/js/app.20a9e304.js",
    "revision": "46aaba27365a898cae41028952e2bd5d"
  },
  {
    "url": "book/index.html",
    "revision": "91e8a6ec9b1f9245c23cc2f307702994"
  },
  {
    "url": "c/index.html",
    "revision": "2ae970b7a8118e2f6bbfac821c87857b"
  },
  {
    "url": "config.html",
    "revision": "e2c4cc85b5c4570f88316228dde202a6"
  },
  {
    "url": "go/index.html",
    "revision": "8f370902cb099de0d580461bf997be95"
  },
  {
    "url": "guide/index.html",
    "revision": "740bc4caad82a0b21a0ebc09d6a98943"
  },
  {
    "url": "index.html",
    "revision": "18ef748f96e548c21247ee5b4383fbab"
  },
  {
    "url": "java/index.html",
    "revision": "aef134138a7aa871a09969d48c8c9deb"
  },
  {
    "url": "javascript/index.html",
    "revision": "9d59911fa8bfda5a2425c9bc4bbe6deb"
  },
  {
    "url": "php/index.html",
    "revision": "b15ec00dc9dc6ea9736d9a7508726978"
  },
  {
    "url": "python/index.html",
    "revision": "824165c42bf8548481dbd380c17ed47c"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "246073e42f7d03500b1097bd211c3fa8"
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
