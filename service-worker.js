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
    "revision": "33bcb8ea9b8fd924aece9081014befc5"
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
    "url": "assets/js/10.1ea74f4f.js",
    "revision": "ce8c0ace71d4f16bbb75c8232db421b3"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.b60d45bb.js",
    "revision": "172e12383c1f69bbd866ed769ae076eb"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.540c53a8.js",
    "revision": "bded783798c71a39fb4b84adff6f68a9"
  },
  {
    "url": "assets/js/15.cb2035f2.js",
    "revision": "37852f1bb7406c746b45a2e694a8f11e"
  },
  {
    "url": "assets/js/16.bb2fc7e7.js",
    "revision": "e110eecc1789710c4548e9669782f913"
  },
  {
    "url": "assets/js/17.0a7fc826.js",
    "revision": "f8c25f40579ab093f2a88e3577d95238"
  },
  {
    "url": "assets/js/18.65ee7e24.js",
    "revision": "a8006ad298604bf5a1d93b3655f5dabf"
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
    "url": "assets/js/8.e57ab137.js",
    "revision": "fd7519b4c1b2fb07eb13bf21f064810c"
  },
  {
    "url": "assets/js/9.42252f73.js",
    "revision": "701c17446ac39a7cd273ea6975f800bc"
  },
  {
    "url": "assets/js/app.e882e226.js",
    "revision": "dab27f726e62bd64d4d93fb7774dcd04"
  },
  {
    "url": "book/index.html",
    "revision": "89ab19addaa3a1dcdae998c76340663c"
  },
  {
    "url": "c/index.html",
    "revision": "923366e9804ab3ec79246a3c4dd382ae"
  },
  {
    "url": "config.html",
    "revision": "7b975e5eaeff76706667d4156919a375"
  },
  {
    "url": "go/index.html",
    "revision": "29b3c38774fa95dc63921392769ebe2c"
  },
  {
    "url": "guide/index.html",
    "revision": "785f6ddb76d6ccb6ee7c67071b47379e"
  },
  {
    "url": "index.html",
    "revision": "e47c9cf422375538573e6e24433f3437"
  },
  {
    "url": "java/index.html",
    "revision": "6b72c1ff174c2bc79a8daddadbda9a32"
  },
  {
    "url": "javascript/index.html",
    "revision": "7212e26af23c94089dd53234e8769548"
  },
  {
    "url": "php/index.html",
    "revision": "373ce761e6cc97f83c202d57fe06412b"
  },
  {
    "url": "python/index.html",
    "revision": "44d56f38fe9bdf2962ccb48227d8dde2"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "17f6e91fc7db982b093019b1ddbfd59a"
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
