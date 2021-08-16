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
    "revision": "121c4469b4564a5841ac1c320be48088"
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
    "url": "assets/js/10.046f9c44.js",
    "revision": "7e82cd5c69a80ded92392a491f44053b"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.96d7dbf6.js",
    "revision": "6ec161a83852faf051cc433566dd5b1f"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.34495c39.js",
    "revision": "f07669909fe81e8e04dd076de28022dd"
  },
  {
    "url": "assets/js/15.7546e3b5.js",
    "revision": "ca02a94e61a80dd0f343ec1a3b1e6f07"
  },
  {
    "url": "assets/js/16.0ccb6e3d.js",
    "revision": "8c707e18c2ee8a196152b9416cee053d"
  },
  {
    "url": "assets/js/17.3c3c6bc4.js",
    "revision": "0236e5845c7fc0c131887714ec7c0541"
  },
  {
    "url": "assets/js/18.8305fd86.js",
    "revision": "9d86e2a4a1a7434fb36747d973a4fb58"
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
    "url": "assets/js/8.27c44f1f.js",
    "revision": "e03771f3407d005bf47ae9794e37dec4"
  },
  {
    "url": "assets/js/9.0050b444.js",
    "revision": "674a6a79f12a5cc18b7047e536dc5bf1"
  },
  {
    "url": "assets/js/app.17678740.js",
    "revision": "3dd169b2409e7bd62a0508855c13da68"
  },
  {
    "url": "book/index.html",
    "revision": "89b513f9e32205251fecb5b3936d6f7f"
  },
  {
    "url": "c/index.html",
    "revision": "81c99fcda0473a3c8dfe1aa519e61039"
  },
  {
    "url": "config.html",
    "revision": "907dbed2424f882d6e4c81b866729d3e"
  },
  {
    "url": "go/index.html",
    "revision": "8de3bfeabee4839d7c3de39cf059baf4"
  },
  {
    "url": "guide/index.html",
    "revision": "d54b21ee1cc2295eea9b5e13103e0d02"
  },
  {
    "url": "index.html",
    "revision": "6287dd89e77947f0b9e433fce92eb708"
  },
  {
    "url": "java/index.html",
    "revision": "75797c3a4a78ea1f1d2704bdb6c78571"
  },
  {
    "url": "javascript/index.html",
    "revision": "c3aeef53ab43402a1358377f415ffa91"
  },
  {
    "url": "php/index.html",
    "revision": "d15a7c9dcd14dd593945794e077dfb24"
  },
  {
    "url": "python/index.html",
    "revision": "780eee11999567f3608d9167160606eb"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "fc54a7ecc301b6d13a7ab99bae0d55a7"
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
