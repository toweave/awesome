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
    "revision": "31a9f610fb3f1b1dc981039fa3baafc2"
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
    "url": "assets/js/10.dabcd973.js",
    "revision": "91673a71a5e9541ef18098acea6e4ffe"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.c024d5e4.js",
    "revision": "ae4a2b2b1fe04a3062ddd3f78d810098"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.6254f8be.js",
    "revision": "e95615f90da97dc6adadf7ce1482b77a"
  },
  {
    "url": "assets/js/15.dd3b18f3.js",
    "revision": "0a17f2d11bfc06cf828c4c6767971f4b"
  },
  {
    "url": "assets/js/16.56e9b906.js",
    "revision": "c72033d8dd8b0141273c12be696f00ea"
  },
  {
    "url": "assets/js/17.d3ac685f.js",
    "revision": "a269b505ee97d3ae783a65d6ce05f881"
  },
  {
    "url": "assets/js/18.6f4b4fc9.js",
    "revision": "4747941a1f4872be8f5ba467f8eaebb0"
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
    "url": "assets/js/8.eb1f91f8.js",
    "revision": "37e379dd084acccc5d83c38bdf51591e"
  },
  {
    "url": "assets/js/9.191d5123.js",
    "revision": "415d46785e0d8dd1a87aaf6cf3005927"
  },
  {
    "url": "assets/js/app.77b032ba.js",
    "revision": "8d8ad74b6122b6ae3c2e0eeb1f149b8b"
  },
  {
    "url": "book/index.html",
    "revision": "3dc96f9e2b63df6987b20afe4dd61b48"
  },
  {
    "url": "c/index.html",
    "revision": "386340ddb2c24996ae9b50c9d8d028a6"
  },
  {
    "url": "config.html",
    "revision": "fbb981622ae5b9c5f51726a0152e6ac7"
  },
  {
    "url": "go/index.html",
    "revision": "813453cee4a33b673ffba723b8ab1dad"
  },
  {
    "url": "guide/index.html",
    "revision": "aa071694cab2e4912b5a8f15fac6a03e"
  },
  {
    "url": "index.html",
    "revision": "9734c0e68b8407699df7d17343c6df68"
  },
  {
    "url": "java/index.html",
    "revision": "ab5cb0f25351593a9fbdd746298b6615"
  },
  {
    "url": "javascript/index.html",
    "revision": "03fd69e973fc1ea3f24788fd0855be21"
  },
  {
    "url": "php/index.html",
    "revision": "57eace174acc5f0232ab7f734595cff3"
  },
  {
    "url": "python/index.html",
    "revision": "19c765261157c6b0d906dfe10d6e5c28"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "aea5aba4d1f2be3d4a17cc931b6cb53b"
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
