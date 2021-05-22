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
    "revision": "0c9151d56378e8c0ec9d9a56c35704fd"
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
    "url": "assets/js/10.5ff9d431.js",
    "revision": "33c0937d101dc7e9a9708becc08e634e"
  },
  {
    "url": "assets/js/11.0e6dc97d.js",
    "revision": "b6a16311c4dbe586f774d36da74960f7"
  },
  {
    "url": "assets/js/12.5df75986.js",
    "revision": "7c442900314a266e1f4a03a49750a515"
  },
  {
    "url": "assets/js/13.4c7123e7.js",
    "revision": "db0cf0861915c35b1386464df04a0638"
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
    "url": "assets/js/8.0665d2dd.js",
    "revision": "ca387692515264f13ea4276af08633ed"
  },
  {
    "url": "assets/js/9.e76777e1.js",
    "revision": "6acc907a9ea4a9519fb45002affa7830"
  },
  {
    "url": "assets/js/app.744e823d.js",
    "revision": "77bcd36d81317cec1462bbdd4b0fbf12"
  },
  {
    "url": "book/index.html",
    "revision": "f3c2a5aadcd702c951539a4495f1716d"
  },
  {
    "url": "c/index.html",
    "revision": "86b461649e9d5664299c7ab7f3340ee6"
  },
  {
    "url": "config.html",
    "revision": "f6aebaf6c0acf18d21b2d9eabe44e30f"
  },
  {
    "url": "go/index.html",
    "revision": "0e9d7334dab69b97107e05aa66ac4184"
  },
  {
    "url": "guide/index.html",
    "revision": "22ccd2b1450a606961cecf74c64eedd4"
  },
  {
    "url": "index.html",
    "revision": "17e52f397becd684120057f2c571439c"
  },
  {
    "url": "python/index.html",
    "revision": "db57f5586a5dcf2b736d554c00047bdf"
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
