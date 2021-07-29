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
    "revision": "7c2d80c736f1e28f2ef1a25695c9df46"
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
    "url": "assets/js/10.29fb4282.js",
    "revision": "a87769ff40f7fea03a50b80005e36e81"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.79a77953.js",
    "revision": "df5651fb26ea1dda5b22ddeed4cb16cc"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.ecb8ade1.js",
    "revision": "e479d4b4209a106be7c9beccf7ab9683"
  },
  {
    "url": "assets/js/15.5c39b633.js",
    "revision": "87b9629244b58d3c181fa085b0a70124"
  },
  {
    "url": "assets/js/16.4babe59b.js",
    "revision": "a398a8f533ee5a5c5bcd533a958d48e9"
  },
  {
    "url": "assets/js/17.6f08ccbd.js",
    "revision": "7dd08e6e35ec44411125fb986860bea6"
  },
  {
    "url": "assets/js/18.6d246968.js",
    "revision": "b4b58c8cfa5a64ceb01f2ff20895e3af"
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
    "url": "assets/js/8.c8f352df.js",
    "revision": "458efe5e374102717558d3471509a7dd"
  },
  {
    "url": "assets/js/9.490d7f82.js",
    "revision": "c933cb60d6ac9ff52c2eb7cf476b6814"
  },
  {
    "url": "assets/js/app.d912cb64.js",
    "revision": "d2597c5e19ca82462b1163ff5d7805d2"
  },
  {
    "url": "book/index.html",
    "revision": "946ec648abdd15e464f51542563f0abe"
  },
  {
    "url": "c/index.html",
    "revision": "1b9fa2e1c2315ab20faba7deff1cc224"
  },
  {
    "url": "config.html",
    "revision": "7ccba09e8f2195b09280bd7fda26e9a8"
  },
  {
    "url": "go/index.html",
    "revision": "b2eecaa4f55564cc380eb184c649bc9d"
  },
  {
    "url": "guide/index.html",
    "revision": "5421e0eac8c29bc9e52249992949af33"
  },
  {
    "url": "index.html",
    "revision": "61412695d864882190a4037d7a7b703e"
  },
  {
    "url": "java/index.html",
    "revision": "085769222e4468426955f9a70738c546"
  },
  {
    "url": "javascript/index.html",
    "revision": "ed4078856b217e9d06093a39a840e5d7"
  },
  {
    "url": "php/index.html",
    "revision": "a7abb18072522765d67798e47b314c92"
  },
  {
    "url": "python/index.html",
    "revision": "37cc8cc7d041e3ca89d10b655f2dd026"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "779a1668bb76a0e1d8cee67eb06476fd"
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
