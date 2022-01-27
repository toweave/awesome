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
    "revision": "85a690188e4ba212a68c06712a3eaa66"
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
    "url": "assets/js/10.7a281970.js",
    "revision": "91731cace94b7c70eb56a7f59bc1525c"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.fb2c74c4.js",
    "revision": "98ed1ddc395a7f3864b245fba6d0d63e"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.135afa8a.js",
    "revision": "89e29c89d50cce8039ae208289db12e9"
  },
  {
    "url": "assets/js/15.8ac81a52.js",
    "revision": "60eedeea6d42732fba2c39b5c88c4c7e"
  },
  {
    "url": "assets/js/16.fbc79317.js",
    "revision": "0ed30a129e0c55c571a731e8706b2415"
  },
  {
    "url": "assets/js/17.c417271c.js",
    "revision": "7c46a9a3614623da92deb3ef36bce4cd"
  },
  {
    "url": "assets/js/18.d5cdaee3.js",
    "revision": "b9f1712dc8801c037045d87dec198f83"
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
    "url": "assets/js/8.8750ed19.js",
    "revision": "085bb17922626406dec73c2e6d4d2392"
  },
  {
    "url": "assets/js/9.95416af6.js",
    "revision": "81a7b4d68b5f4903aae5c41c0bdad68c"
  },
  {
    "url": "assets/js/app.eb1762ec.js",
    "revision": "a726a0e662a55196bc011676c08ec9fd"
  },
  {
    "url": "book/index.html",
    "revision": "41686a01e2ae24b798d7faa162d8ba07"
  },
  {
    "url": "c/index.html",
    "revision": "57b1509387ebef72257b7577265a5b0d"
  },
  {
    "url": "config.html",
    "revision": "ddb76e8533a3ef20b3984dbcfd0d896f"
  },
  {
    "url": "go/index.html",
    "revision": "0043473251b14461093f3732bec74c43"
  },
  {
    "url": "guide/index.html",
    "revision": "bf6cdea0845bbf4805dfc3512b8b2120"
  },
  {
    "url": "index.html",
    "revision": "56fc1669437efcb6e099302f11e09685"
  },
  {
    "url": "java/index.html",
    "revision": "bf53f606f9b7fa1e86bc21ed07d0b1a2"
  },
  {
    "url": "javascript/index.html",
    "revision": "99f71de7bdc74592326813f27e5f514e"
  },
  {
    "url": "php/index.html",
    "revision": "0f259195ffd88c05d99e3eeb7e9781b4"
  },
  {
    "url": "python/index.html",
    "revision": "7e16788df928722bce9afba914681a58"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "aad88e56b4e524cc3d4e2d005daa43ea"
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
