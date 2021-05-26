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
    "revision": "eb8ce0cd7e5cb501df0cd2321ef72c3c"
  },
  {
    "url": "assets/css/0.styles.86bff103.css",
    "revision": "4b61b9dca630b4b0810f3c0f04fb242d"
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
    "url": "assets/js/10.95c2328b.js",
    "revision": "59697d2b29a24e5535c02076989fa7e6"
  },
  {
    "url": "assets/js/11.fa74cdfb.js",
    "revision": "810429b8fb2a55bee286403c6b80fb3e"
  },
  {
    "url": "assets/js/12.2db67b7e.js",
    "revision": "bf3c4d217219ca57bbbc6252fb18439c"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.22ccd7f5.js",
    "revision": "9594b7c4f476d30383cfe0148b089491"
  },
  {
    "url": "assets/js/15.d92bf475.js",
    "revision": "c05fb4d80305cbcaba1a691070b1067f"
  },
  {
    "url": "assets/js/16.9df21d17.js",
    "revision": "58ad743ebf71640c88581393e8e31fac"
  },
  {
    "url": "assets/js/17.34222068.js",
    "revision": "7a3fe588469ae6894c202dc33f69de5f"
  },
  {
    "url": "assets/js/2.9b999cf7.js",
    "revision": "5d79ab0a5b0a4f98fbad4d39ad4208f8"
  },
  {
    "url": "assets/js/3.093fdef3.js",
    "revision": "7ba06733e9cf227a2db89127d29dc873"
  },
  {
    "url": "assets/js/4.960e9e6b.js",
    "revision": "da979763c872ac465269451bddf81b17"
  },
  {
    "url": "assets/js/5.28276470.js",
    "revision": "276aaecc9d94d327e576ee2dc88971ae"
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
    "url": "assets/js/8.929fbf0a.js",
    "revision": "7fc13ee62f931b31512e5a6acec4e4cc"
  },
  {
    "url": "assets/js/9.f54bbaa0.js",
    "revision": "9f778ba5ebba26d76a255605d28bacec"
  },
  {
    "url": "assets/js/app.0b4cfedb.js",
    "revision": "b6c483bd21ef4b55ec546bdcee5b1d08"
  },
  {
    "url": "book/index.html",
    "revision": "9ef0eb2bdf57245efc554c6baa8c6607"
  },
  {
    "url": "c/index.html",
    "revision": "291edc082e4c421f7e66e7aafb6ea05a"
  },
  {
    "url": "config.html",
    "revision": "c67f64d1954644ae54726394a1f3d43b"
  },
  {
    "url": "go/index.html",
    "revision": "8c236cb2ec10f71ae682c421b7877e0e"
  },
  {
    "url": "guide/index.html",
    "revision": "38accea22a40a85e842b2c284f7661a3"
  },
  {
    "url": "index.html",
    "revision": "49528f23d174a9a3f132e991dcd231a8"
  },
  {
    "url": "java/index.html",
    "revision": "87600a060c3992a4e5f24ea1c312e7fd"
  },
  {
    "url": "javascript/index.html",
    "revision": "38a401039ff2b8bfa6dc450df78f0101"
  },
  {
    "url": "python/index.html",
    "revision": "9cf7868ef0975aea0883b725ba3c9f6b"
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
