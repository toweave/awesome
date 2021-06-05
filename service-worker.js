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
    "revision": "cd718b404dbb095709eaaddc97a82cb6"
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
    "url": "assets/js/10.fbbf767d.js",
    "revision": "e2564e4048d91dccece5981b2f417441"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.e36cd03f.js",
    "revision": "70f6d753236b53f5faaa9a2616ad5695"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.1bcd40fb.js",
    "revision": "ab192dc07b1fc2589fecc72d48bcee75"
  },
  {
    "url": "assets/js/15.ad8da1d7.js",
    "revision": "a0b4a53b8ddcd8901d1fc43f4d4286c1"
  },
  {
    "url": "assets/js/16.56e9b906.js",
    "revision": "c72033d8dd8b0141273c12be696f00ea"
  },
  {
    "url": "assets/js/17.598022ee.js",
    "revision": "c620dd60ba574753c1da1d9588a84c7d"
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
    "url": "assets/js/8.c77fdc22.js",
    "revision": "0839d82458913db1a0ae196878db7b46"
  },
  {
    "url": "assets/js/9.100d0e76.js",
    "revision": "9d3e77150b57a24c9c8be34366abc5c4"
  },
  {
    "url": "assets/js/app.146f78a6.js",
    "revision": "0af4dde07761322e48fdba25caa0b147"
  },
  {
    "url": "book/index.html",
    "revision": "8d71289a68d34c4da864088aa95c531c"
  },
  {
    "url": "c/index.html",
    "revision": "3da27fe1d627532356f8ea949b8848c8"
  },
  {
    "url": "config.html",
    "revision": "a4d88bcde9bbd5f9664e48c67493f87d"
  },
  {
    "url": "go/index.html",
    "revision": "7ed7d52fbe8a2bdd72733da9f9430736"
  },
  {
    "url": "guide/index.html",
    "revision": "b54a8de89920d0a48b4371ad34520616"
  },
  {
    "url": "index.html",
    "revision": "4750e94f346d55d83250c982f834f908"
  },
  {
    "url": "java/index.html",
    "revision": "018dc93fe0bcf4bc607ad07ca3331f08"
  },
  {
    "url": "javascript/index.html",
    "revision": "4b13608a8fd4762d9ead39515756f9ac"
  },
  {
    "url": "php/index.html",
    "revision": "53179c0ddd75cbea41ccfb683af0769f"
  },
  {
    "url": "python/index.html",
    "revision": "bdb434300502a88b0b25940daa0f4632"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "095d062b4b8199a463c30a8feb832154"
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
