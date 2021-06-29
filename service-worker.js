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
    "revision": "be77aa17aa5efd157fe5036cad52866c"
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
    "url": "assets/js/10.1e1ecf78.js",
    "revision": "d583a8a32b179c1567d3672e6389ce18"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.1014d4f3.js",
    "revision": "65ad21cc816e0e1cd061ddf8543fc2ff"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.91be09c5.js",
    "revision": "09837baebab9a6c5c89abcd377216764"
  },
  {
    "url": "assets/js/15.0a16d5ea.js",
    "revision": "eb322c989023b4bea04673ac07a0298c"
  },
  {
    "url": "assets/js/16.244112c0.js",
    "revision": "7ea25157f028a27c9d251f46f1000fd8"
  },
  {
    "url": "assets/js/17.1376a1cc.js",
    "revision": "168766a8a3c30d3ceea77d087254d7d9"
  },
  {
    "url": "assets/js/18.3d858653.js",
    "revision": "3d554e25e2b1d39126a43a81a9e1aea8"
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
    "url": "assets/js/8.8ec1e25e.js",
    "revision": "84d47121319c380c49a2247001643565"
  },
  {
    "url": "assets/js/9.acacc651.js",
    "revision": "913193617e397f950fad97dfee6e3568"
  },
  {
    "url": "assets/js/app.aba4f8d7.js",
    "revision": "d3c54360ed555d0eaf567de240ba0bae"
  },
  {
    "url": "book/index.html",
    "revision": "314fc492ac56e60f16c444e48a555229"
  },
  {
    "url": "c/index.html",
    "revision": "15022f88c9dfa7073db8eae094cf3012"
  },
  {
    "url": "config.html",
    "revision": "0ec44321658cf2c491ed6c7189189754"
  },
  {
    "url": "go/index.html",
    "revision": "a948e5164edce41a94368830592f5b87"
  },
  {
    "url": "guide/index.html",
    "revision": "0c798b0c26c11197fb43caf1103a17a5"
  },
  {
    "url": "index.html",
    "revision": "8970e426d5922ea803f4f89c01b873ed"
  },
  {
    "url": "java/index.html",
    "revision": "2d22b4dbb5e027554781ac5c6a8662aa"
  },
  {
    "url": "javascript/index.html",
    "revision": "670b57f0fa46fe254607cc55dd385c88"
  },
  {
    "url": "php/index.html",
    "revision": "2b5ee66225f740ec32a714dfe2a3f3b9"
  },
  {
    "url": "python/index.html",
    "revision": "91703b4908628bddb8f4d1fb99aa1e6b"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "572672c0557b3460eb5ffcb4b588f153"
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
