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
    "revision": "93489ec7d03778f5a2cc95f21cfc818b"
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
    "url": "assets/js/10.9055c9c3.js",
    "revision": "276d6e78948cf32652e8f9794dc13927"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.b6066102.js",
    "revision": "9a77e9ef4425b659a666a4b5c129b5f1"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.17b95b82.js",
    "revision": "4e624b0b6f84fb0df87e7094a1c735a6"
  },
  {
    "url": "assets/js/15.4c212498.js",
    "revision": "15c9651522db36e6b26793ed767a62cd"
  },
  {
    "url": "assets/js/16.f0a44998.js",
    "revision": "cbc12ea5aeb802fb23a698b3caa721f0"
  },
  {
    "url": "assets/js/17.caa0d739.js",
    "revision": "6de0b7c6dee195a7e918f84772b53da9"
  },
  {
    "url": "assets/js/18.02909c3e.js",
    "revision": "401279c9641d8676a7276f333a0a8614"
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
    "url": "assets/js/8.64c9eed8.js",
    "revision": "59424b00d52b35b5537a9032e397d359"
  },
  {
    "url": "assets/js/9.75627799.js",
    "revision": "256940d7ce70d4f3d7f6186afe4f6c6e"
  },
  {
    "url": "assets/js/app.07f3cc50.js",
    "revision": "d841797ecd2bfae67fe61385d11e1f3d"
  },
  {
    "url": "book/index.html",
    "revision": "dbb2609ea76c94ce68494d1ed54c62f4"
  },
  {
    "url": "c/index.html",
    "revision": "95323312367b52e0dd9d1438ec93259b"
  },
  {
    "url": "config.html",
    "revision": "377e2c2134a1ab53c5fcf8b16aa47a6c"
  },
  {
    "url": "go/index.html",
    "revision": "409a6cafe94bbd3b11287153ea2dc985"
  },
  {
    "url": "guide/index.html",
    "revision": "8d800306f338f1d75032436384cc9d6d"
  },
  {
    "url": "index.html",
    "revision": "c42017ecf7e1c6895d8b5841ce4e8227"
  },
  {
    "url": "java/index.html",
    "revision": "d9f894960d26250ea16eccda185dc7e8"
  },
  {
    "url": "javascript/index.html",
    "revision": "58753cb01e4c2d75a42afac67672f210"
  },
  {
    "url": "php/index.html",
    "revision": "81c49e4947c2bc943d71f5611dd0d322"
  },
  {
    "url": "python/index.html",
    "revision": "b6c78f58f7cdb770b0033608dc40cfe3"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "9a635b72f8347ee5bba84f7438e5f778"
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
