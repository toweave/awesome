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
    "revision": "17041759d03c88c6ce466da25554727e"
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
    "url": "assets/js/10.9edc9905.js",
    "revision": "e02785d6ad99cd4e88ac19516eb4e91d"
  },
  {
    "url": "assets/js/11.b9cfc707.js",
    "revision": "cae53d77baeedee0e2990e9a1bd997ea"
  },
  {
    "url": "assets/js/12.498549d7.js",
    "revision": "9b6cdba34ee17237ab2207f719f1480c"
  },
  {
    "url": "assets/js/13.a2b2b67d.js",
    "revision": "4d96b34ad49125619080be6a4e2478d5"
  },
  {
    "url": "assets/js/14.3fe77d6d.js",
    "revision": "daa098c0fd69173bbbb76b4312247487"
  },
  {
    "url": "assets/js/15.791a7941.js",
    "revision": "55774cb0c33bff70efd3d1b23c6691ea"
  },
  {
    "url": "assets/js/2.fb45966a.js",
    "revision": "3196ae5b2b8490397a6ae8c4a0d71eb3"
  },
  {
    "url": "assets/js/3.0fb0b22f.js",
    "revision": "6ce99efbf86633eabb5ae3f6d7db97fa"
  },
  {
    "url": "assets/js/4.8f53f7a8.js",
    "revision": "6dee13890eee2f6b1ff95f52b500d929"
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
    "url": "assets/js/8.83722e5b.js",
    "revision": "70a3c2a19b4001187c3d9f3224045ddb"
  },
  {
    "url": "assets/js/9.2cfac1a0.js",
    "revision": "7ecb23c5ec7ce47fea8c5be65a515208"
  },
  {
    "url": "assets/js/app.c67628b7.js",
    "revision": "16af9c0d554d03fb59b4ba49281cb4bf"
  },
  {
    "url": "book/index.html",
    "revision": "20bf535ab57d993ebf7e7e8ebf40a6ab"
  },
  {
    "url": "c/index.html",
    "revision": "ebcdf8bb1fcd653f36375ea2f1672aa3"
  },
  {
    "url": "config.html",
    "revision": "8a7e9bd2383dbdee97737dec33b338a4"
  },
  {
    "url": "go/index.html",
    "revision": "f023b32b3367fafddf0fd09d31884347"
  },
  {
    "url": "guide/index.html",
    "revision": "61084259f63461b6a51531650ed85205"
  },
  {
    "url": "index.html",
    "revision": "d9ed471a2d3aff699172199cdad7b968"
  },
  {
    "url": "python/index.html",
    "revision": "537cf4565fb4797b98e7190dc9cf9da9"
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
