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
    "revision": "8be7c985ed9b2f965cd1e89f3da8d94a"
  },
  {
    "url": "assets/css/0.styles.8c4fcc71.css",
    "revision": "8ce7043311cd8300e4e04340e3c1f99b"
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
    "url": "assets/js/10.9522c075.js",
    "revision": "564f589ac761ab654da982c853468f61"
  },
  {
    "url": "assets/js/11.e1c07b86.js",
    "revision": "0a7da574a2938dc59324e4b7dba49ef9"
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
    "url": "assets/js/5.28276470.js",
    "revision": "276aaecc9d94d327e576ee2dc88971ae"
  },
  {
    "url": "assets/js/6.b70f634e.js",
    "revision": "ed70d8a0e6ee3058046f54de453ef996"
  },
  {
    "url": "assets/js/7.50997920.js",
    "revision": "cbd00b9f1106d3cf7dd29c10dba3f669"
  },
  {
    "url": "assets/js/8.9720a70b.js",
    "revision": "13ce9aba22d555bd4e296b515b359164"
  },
  {
    "url": "assets/js/9.dc4a6f4e.js",
    "revision": "1830fe4e1e47bfb802e7df001f466ae1"
  },
  {
    "url": "assets/js/app.20aa57e4.js",
    "revision": "11a9b7210ab43b600f1914cc331de9bb"
  },
  {
    "url": "config.html",
    "revision": "c52e7f8a933366aa82b7fef030cd2aa2"
  },
  {
    "url": "go/index.html",
    "revision": "9fd5b4c208bca804ff26d4a17422894a"
  },
  {
    "url": "guide/index.html",
    "revision": "2dbbd4e8977e7f23f65d5bc2c208041a"
  },
  {
    "url": "index.html",
    "revision": "a5e2ecdc77decf6303cb9ac6578b8ba4"
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
