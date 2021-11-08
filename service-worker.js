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
    "revision": "ef18ba75aea0facb22aca457e0aec6f5"
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
    "url": "assets/js/10.c8d3a7e5.js",
    "revision": "be2fdfe341a9e0666fcf4c33be372488"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.10af20a3.js",
    "revision": "eb8825925d60396358c59158bc89b413"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.75adfb13.js",
    "revision": "050302d702700b05f950f2ba2767f0d0"
  },
  {
    "url": "assets/js/15.84ff7ac1.js",
    "revision": "2c9128535ffe28ccc88228c75f0b0193"
  },
  {
    "url": "assets/js/16.f6012683.js",
    "revision": "4b85a783e7b1dfc653cd8c316b8652a6"
  },
  {
    "url": "assets/js/17.e1622d6c.js",
    "revision": "bf8747bc090f8e652c9fbdaecce6c3b8"
  },
  {
    "url": "assets/js/18.ae7440d1.js",
    "revision": "a767bc8faa124f5894e3f5eb793ca55a"
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
    "url": "assets/js/8.ae4ce4f0.js",
    "revision": "110db2b9fc27384fa7ce0f65bfc287e9"
  },
  {
    "url": "assets/js/9.7446f641.js",
    "revision": "fa6785ca88c659868abd5d265c298644"
  },
  {
    "url": "assets/js/app.c7d8223b.js",
    "revision": "1bac134da66f18e47b118b1c17b1203f"
  },
  {
    "url": "book/index.html",
    "revision": "c0164c99d73c8a7a9de5506eb3053660"
  },
  {
    "url": "c/index.html",
    "revision": "c78abf2911f9996373f9cdd846d4b247"
  },
  {
    "url": "config.html",
    "revision": "afed6f2fbaa9600a6a1e66026f5c5a1b"
  },
  {
    "url": "go/index.html",
    "revision": "9b60a26c8a525d585b738eefa245bbae"
  },
  {
    "url": "guide/index.html",
    "revision": "19d2a9265b11eb2559065e49d66ffcaa"
  },
  {
    "url": "index.html",
    "revision": "1f7e9a0796ac15fe371c3c0c88798c28"
  },
  {
    "url": "java/index.html",
    "revision": "aa487af9e25ca7a1780c836d5f1eb24f"
  },
  {
    "url": "javascript/index.html",
    "revision": "4324fbf9ccf55f093b25fbde91db44ac"
  },
  {
    "url": "php/index.html",
    "revision": "71504bb69bb350504d763abf3d84d103"
  },
  {
    "url": "python/index.html",
    "revision": "e0fc5f3eb2a89a33c8fb3969b97bac99"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "8b929072e91309dfbb3c104ca0b6f854"
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
