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
    "revision": "5abd6e3b3de5f933290efca4dd2c3751"
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
    "url": "assets/js/10.1ac83bab.js",
    "revision": "cde63568837cee05ecd475bccab1846a"
  },
  {
    "url": "assets/js/11.060ead7b.js",
    "revision": "24c00d99fdd73fe74cd20a66cb2df2dc"
  },
  {
    "url": "assets/js/12.bd9bdb69.js",
    "revision": "094182781b5f35db6faaafc75f088dd0"
  },
  {
    "url": "assets/js/13.a2b2b67d.js",
    "revision": "4d96b34ad49125619080be6a4e2478d5"
  },
  {
    "url": "assets/js/14.16a7272b.js",
    "revision": "f5fe71e4758ba66d39bd8ebb0333d166"
  },
  {
    "url": "assets/js/15.80c67ae1.js",
    "revision": "0f5cdc636e05cf35cd3ff44766567a35"
  },
  {
    "url": "assets/js/16.fd1fc847.js",
    "revision": "a4583f9439da353119995142c061da2e"
  },
  {
    "url": "assets/js/17.8ca38d19.js",
    "revision": "40e91249fb7d1a84701b8a6a808b8810"
  },
  {
    "url": "assets/js/18.96977c56.js",
    "revision": "e20fc31afa8036d6126cdb4904a0facc"
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
    "url": "assets/js/8.b81b057d.js",
    "revision": "aa9cc1f597dce8b9066d3db278fbdab8"
  },
  {
    "url": "assets/js/9.3d21df80.js",
    "revision": "c465a84174f7b7c5d9cfe15408c4ad96"
  },
  {
    "url": "assets/js/app.07be7fc2.js",
    "revision": "ecdfad3d71d9d059b99457bc286cd6d1"
  },
  {
    "url": "book/index.html",
    "revision": "06287f73a1af77feb5295350e6289ce2"
  },
  {
    "url": "c/index.html",
    "revision": "212c9ca251aeb992b3c221facbf006c1"
  },
  {
    "url": "config.html",
    "revision": "739a45457efe932b2dadb32e740b1cf8"
  },
  {
    "url": "go/index.html",
    "revision": "0514f933814cbce2f2bc39c726b1fd43"
  },
  {
    "url": "guide/index.html",
    "revision": "82fd358c67910e8b79a578684652a7dd"
  },
  {
    "url": "index.html",
    "revision": "1eb60462157deddd53b931b4f66cdf0f"
  },
  {
    "url": "java/index.html",
    "revision": "7a8de89eb4b2780dda74caebd8d96425"
  },
  {
    "url": "javascript/index.html",
    "revision": "3a46e05a94279a0458007a21e8190df9"
  },
  {
    "url": "php/index.html",
    "revision": "c1f990f157285b429b519d7dae6c2cc5"
  },
  {
    "url": "python/index.html",
    "revision": "8853816f81b9381a64fa3ebb355e4162"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "90009689f6c4928cc83d9346f02abcd4"
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
