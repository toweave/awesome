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
    "revision": "2e12fb4efb7706a8ae8439e843060461"
  },
  {
    "url": "assets/css/0.styles.86bff103.css",
    "revision": "4b61b9dca630b4b0810f3c0f04fb242d"
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
    "url": "assets/js/10.c8aee037.js",
    "revision": "370c13aa5d93a500f31044fb23c823c7"
  },
  {
    "url": "assets/js/11.0e6dc97d.js",
    "revision": "b6a16311c4dbe586f774d36da74960f7"
  },
  {
    "url": "assets/js/12.4222dc6b.js",
    "revision": "2d4bd7a5e34b56a7c1371fb1b095608e"
  },
  {
    "url": "assets/js/13.9610b925.js",
    "revision": "1e3dc584053f1865769883ea9b67bbe0"
  },
  {
    "url": "assets/js/14.8ceff121.js",
    "revision": "560c1ed551158ffb3f866814f6150663"
  },
  {
    "url": "assets/js/15.e49b021f.js",
    "revision": "d43da3c6c696190b11c8074a66ef5592"
  },
  {
    "url": "assets/js/16.78e19026.js",
    "revision": "a8a7375d6a8d1cc07ba711d7301fefe4"
  },
  {
    "url": "assets/js/17.34222068.js",
    "revision": "7a3fe588469ae6894c202dc33f69de5f"
  },
  {
    "url": "assets/js/2.9b999cf7.js",
    "revision": "5d79ab0a5b0a4f98fbad4d39ad4208f8"
  },
  {
    "url": "assets/js/3.093fdef3.js",
    "revision": "7ba06733e9cf227a2db89127d29dc873"
  },
  {
    "url": "assets/js/4.960e9e6b.js",
    "revision": "da979763c872ac465269451bddf81b17"
  },
  {
    "url": "assets/js/5.28276470.js",
    "revision": "276aaecc9d94d327e576ee2dc88971ae"
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
    "url": "assets/js/8.1f436b73.js",
    "revision": "d551fd582c6fa22402d2b42fbd10b4b4"
  },
  {
    "url": "assets/js/9.1e980d12.js",
    "revision": "36c395cac6c6c5038bf1b0dd2a8476b6"
  },
  {
    "url": "assets/js/app.039850e2.js",
    "revision": "4fb2bf83c2cd74ff6acc5c0144994ffd"
  },
  {
    "url": "book/index.html",
    "revision": "6210ec7f97085d94815cbd79e787f30d"
  },
  {
    "url": "c/index.html",
    "revision": "75ff98fcfe70335e8be3148b7fdabe9f"
  },
  {
    "url": "config.html",
    "revision": "e6645cab5da6ff3538c06eb3dde712cb"
  },
  {
    "url": "go/index.html",
    "revision": "110938d198af19f6750cb9c747d1285f"
  },
  {
    "url": "guide/index.html",
    "revision": "e53aed36407f529fbf163430dead2bcc"
  },
  {
    "url": "index.html",
    "revision": "0172c5a5a3e2a05939ccfe22b9ef7280"
  },
  {
    "url": "java/index.html",
    "revision": "602888ee5806bdcbbe466a8ba073682a"
  },
  {
    "url": "javascript/index.html",
    "revision": "a29118b8e530d2b9b582686def001812"
  },
  {
    "url": "python/index.html",
    "revision": "eeb7ef884e3f5966d6ac04837e3fb645"
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
