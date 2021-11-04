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
    "revision": "f138f83bd640b9d99a28b5c00414f091"
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
    "url": "assets/js/10.56d4205e.js",
    "revision": "b25c103d3e8472dbffb75a44681498a5"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.10af20a3.js",
    "revision": "eb8825925d60396358c59158bc89b413"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.14555a0c.js",
    "revision": "463c8ba7b0b87fcae95681bd6a2746bd"
  },
  {
    "url": "assets/js/15.78671806.js",
    "revision": "34ef6268fc168a21f5166410d98c3020"
  },
  {
    "url": "assets/js/16.f80a7c90.js",
    "revision": "f14db94e3205e15b37d8c2ac106c88cb"
  },
  {
    "url": "assets/js/17.1c85b285.js",
    "revision": "92fea2222e3e20e874f2f05a6edcce09"
  },
  {
    "url": "assets/js/18.03bbd672.js",
    "revision": "3f44b6625ecc138a0851bf268577dc56"
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
    "url": "assets/js/8.067c8b8a.js",
    "revision": "8b07c696235f1fbd2f8853dc6453dc2d"
  },
  {
    "url": "assets/js/9.c1cd48fc.js",
    "revision": "efb106005ca4c7bb637cd8b52342615d"
  },
  {
    "url": "assets/js/app.53894c3c.js",
    "revision": "614d1d1367c1be3d44db4a4557cf74a4"
  },
  {
    "url": "book/index.html",
    "revision": "5afc343deb3ddc5c264cec4a93733815"
  },
  {
    "url": "c/index.html",
    "revision": "f6cfeb31dd491d037c051e7ee0f771fd"
  },
  {
    "url": "config.html",
    "revision": "b62eb025ea75db7736cbc3da87b4487e"
  },
  {
    "url": "go/index.html",
    "revision": "96846ac2f97c20096351f859f243bd15"
  },
  {
    "url": "guide/index.html",
    "revision": "630abc931a9d444b44ef91b206f255c5"
  },
  {
    "url": "index.html",
    "revision": "e3b3d16083286eb68a7be7f58162f990"
  },
  {
    "url": "java/index.html",
    "revision": "421982a40c63bb812217a4a5b16664ab"
  },
  {
    "url": "javascript/index.html",
    "revision": "5d4643ee64076082842ddbf5b8456a8b"
  },
  {
    "url": "php/index.html",
    "revision": "f097282016f6f48f6bb719b436e72b91"
  },
  {
    "url": "python/index.html",
    "revision": "34f126e114ddc1f60539081c4a71ffcd"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "933310dfd3886c490187ed1106897ea3"
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
