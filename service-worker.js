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
    "revision": "d22939ddc72306a07684955c39503455"
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
    "url": "assets/js/10.84b12237.js",
    "revision": "e7bea4d4471dec5c9715f4a72e8775f0"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.eaacccfa.js",
    "revision": "361ded93f1106a364ffc06b0e3e0e1d9"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.5aaaf2be.js",
    "revision": "709bdbfa805eaa40e4e5c04bea55eca7"
  },
  {
    "url": "assets/js/15.75bba81b.js",
    "revision": "9d2029df684c5a10904a7c6d37521dea"
  },
  {
    "url": "assets/js/16.d3a40bbf.js",
    "revision": "820cc4f550a42d0829995580aca38076"
  },
  {
    "url": "assets/js/17.2fee6641.js",
    "revision": "eca9c240cb4ee63932749b24085db78f"
  },
  {
    "url": "assets/js/18.bafe30ec.js",
    "revision": "4d3530593bee29f91bc9b2702bd3807a"
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
    "url": "assets/js/8.051b81de.js",
    "revision": "1823ea875fedecd4cd2223aa1656101c"
  },
  {
    "url": "assets/js/9.a7b15e5c.js",
    "revision": "814cbeced3287ea79c43dfdec144eee6"
  },
  {
    "url": "assets/js/app.4c97c847.js",
    "revision": "cadc6238767d2219b9d1067720ae1fd7"
  },
  {
    "url": "book/index.html",
    "revision": "bdb744e808e13e61543c4adb059e72ab"
  },
  {
    "url": "c/index.html",
    "revision": "f88a439c0ce4aff4a3aa092650f291eb"
  },
  {
    "url": "config.html",
    "revision": "ea2d4e74cf0ea7af9fe546e17d3ef3c0"
  },
  {
    "url": "go/index.html",
    "revision": "9bbd239b20a876e45d1a1a0916844a01"
  },
  {
    "url": "guide/index.html",
    "revision": "e60f91793fd69fc848e12eac47b0ac91"
  },
  {
    "url": "index.html",
    "revision": "78f359fab85238a5f17d13b84fdc3008"
  },
  {
    "url": "java/index.html",
    "revision": "d29e08d6a3b2c233a9b4e3fee0f04fca"
  },
  {
    "url": "javascript/index.html",
    "revision": "d465bde69c0cebd79c711246f4130164"
  },
  {
    "url": "php/index.html",
    "revision": "9660532fe3d1182ae2a73d0ac24b4859"
  },
  {
    "url": "python/index.html",
    "revision": "b9a51c7bef5a762da69177f36fc7b61d"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "f8bbff1589b12997315ec0d84d2e1331"
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
