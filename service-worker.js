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
    "revision": "2feac70fa0b29d057d90d18e1b3f74e5"
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
    "url": "assets/js/10.6c4e1c15.js",
    "revision": "849db483d23476294ddb20f2a1390de1"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.747bf104.js",
    "revision": "e61220d80c255d29caffe29bcd61d8fe"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.b2af5dc4.js",
    "revision": "7b53aed5f609dd799ea2ef00723e60eb"
  },
  {
    "url": "assets/js/15.8c02da2b.js",
    "revision": "c405db4f87b2e32fe302e71e17c8f33a"
  },
  {
    "url": "assets/js/16.6d48f54f.js",
    "revision": "36e56509c588aea2fd04cb87adc403a4"
  },
  {
    "url": "assets/js/17.7cd45766.js",
    "revision": "9f181286224599dd83e830c4748aed75"
  },
  {
    "url": "assets/js/18.c9d8c288.js",
    "revision": "f7587a882c92dd0726b324235dc4af4a"
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
    "url": "assets/js/8.f56cf895.js",
    "revision": "1cb0e0024d9a813a2f0bd86117044270"
  },
  {
    "url": "assets/js/9.dd50fe6b.js",
    "revision": "7d56993aeac1ab6dae4648e8ba8cd934"
  },
  {
    "url": "assets/js/app.766e34b1.js",
    "revision": "9cb565d70d83a71124b681b348db8c77"
  },
  {
    "url": "book/index.html",
    "revision": "f563508f2a91b164254dd7a2cfdd8e54"
  },
  {
    "url": "c/index.html",
    "revision": "000306bc25cd5924564af4dca90df4f3"
  },
  {
    "url": "config.html",
    "revision": "ab1488994354863e6b2d4688b8135554"
  },
  {
    "url": "go/index.html",
    "revision": "d7b48d4d37f43ebad15288df8fe9f3dd"
  },
  {
    "url": "guide/index.html",
    "revision": "62c49fc1bc681821e9bf84fdd9da7b2e"
  },
  {
    "url": "index.html",
    "revision": "85a956e6cdde2a2af59bc23cbf688910"
  },
  {
    "url": "java/index.html",
    "revision": "65683605100d2e70016e5d580aa99c90"
  },
  {
    "url": "javascript/index.html",
    "revision": "ca213de255110b906b9ddb9330dff1de"
  },
  {
    "url": "php/index.html",
    "revision": "b3a78c2d066c17984fed7f5983939a1a"
  },
  {
    "url": "python/index.html",
    "revision": "2ae576241bc001be6bc0652aed01ae87"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "533988e59adc0dbf72cafbf69faf6b28"
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
