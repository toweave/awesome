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
    "revision": "58c804460625652b2d0ee3e0225ab5fe"
  },
  {
    "url": "assets/css/0.styles.9ef59b4e.css",
    "revision": "ff76a97e437a5ac51ad8618b66d2a4e2"
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
    "url": "assets/js/10.b27c7302.js",
    "revision": "bbce959c67c276c055eb0f945164a191"
  },
  {
    "url": "assets/js/11.d23913cc.js",
    "revision": "9068a5ecc5b2a4ceb21b816c54b74a0f"
  },
  {
    "url": "assets/js/12.27ab39d1.js",
    "revision": "f6325f3a3c4132bcf858794497dee0ad"
  },
  {
    "url": "assets/js/2.fb45966a.js",
    "revision": "3196ae5b2b8490397a6ae8c4a0d71eb3"
  },
  {
    "url": "assets/js/3.44b51966.js",
    "revision": "63e0cbab65a1ba62814cd6c89ae89e7d"
  },
  {
    "url": "assets/js/4.ddadabee.js",
    "revision": "1c7a9ac41ac83ff732c90a59c4a34df2"
  },
  {
    "url": "assets/js/5.53d0fe52.js",
    "revision": "f541ee23d628156dcec4f4ad9020a0c1"
  },
  {
    "url": "assets/js/6.f29f0cc0.js",
    "revision": "60b2550907e7777e380000c0bcc6a4a7"
  },
  {
    "url": "assets/js/7.50997920.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.52a84453.js",
    "revision": "69f9c58adefaee068da95bef33290636"
  },
  {
    "url": "assets/js/9.dc4a6f4e.js",
    "revision": "1830fe4e1e47bfb802e7df001f466ae1"
  },
  {
    "url": "assets/js/app.c14c0aa9.js",
    "revision": "ffb65dfb5cb3831c695c17e94e4a5e23"
  },
  {
    "url": "config.html",
    "revision": "8c0cb6ea517b23a122d6f1db22b6647c"
  },
  {
    "url": "go/index.html",
    "revision": "5ac20ad9b9517f2fc1a204d5436422a0"
  },
  {
    "url": "guide/index.html",
    "revision": "2957e3add94d040730bc861351f9e075"
  },
  {
    "url": "index.html",
    "revision": "2ca1cf3703c2acd989c6535a7120e7e6"
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
