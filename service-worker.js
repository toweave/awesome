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
    "revision": "5551a1ee4b7ce4aa2fcf2f43c48c830f"
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
    "url": "assets/js/10.48bae384.js",
    "revision": "8c551d51916f3016e7fb0b5542e4ed3d"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.124263c4.js",
    "revision": "76fd4fb3f9cfc87b3b14004636b85092"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.06ef4c2f.js",
    "revision": "80a3eb3df60c0cce72d589f62a654a58"
  },
  {
    "url": "assets/js/15.1230491a.js",
    "revision": "ffc3eae00680d57e5ca4620934f09a89"
  },
  {
    "url": "assets/js/16.7cb1f0a6.js",
    "revision": "99cfb38656f89bcea723e3b571765261"
  },
  {
    "url": "assets/js/17.81dc5aba.js",
    "revision": "5eca55ef55e3cc0c809e7b0ed9017ded"
  },
  {
    "url": "assets/js/18.d266f9d8.js",
    "revision": "188e5d0da39c846624f7fd497d93ec15"
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
    "url": "assets/js/8.8183ca3f.js",
    "revision": "c51c49f33c3491e65e8ec4866247f640"
  },
  {
    "url": "assets/js/9.ef535b98.js",
    "revision": "d42a01ac24c019d10729b48621c8abcf"
  },
  {
    "url": "assets/js/app.37290fb3.js",
    "revision": "187738000e847a390d6e68e29b348134"
  },
  {
    "url": "book/index.html",
    "revision": "7054bf2a43ead4e8d5eb29538ca8e241"
  },
  {
    "url": "c/index.html",
    "revision": "e04fd7edfce4b8578f37f21b5ad5bba6"
  },
  {
    "url": "config.html",
    "revision": "03aca4f54b058c71e830a378ff432a12"
  },
  {
    "url": "go/index.html",
    "revision": "c9e2bbf7490d18bfb0d50eabdf81f0b0"
  },
  {
    "url": "guide/index.html",
    "revision": "cedb8d0154a9a57cdfdce2fed42a9276"
  },
  {
    "url": "index.html",
    "revision": "5d03f4e9f45af07e651c445a62c3e3e0"
  },
  {
    "url": "java/index.html",
    "revision": "b8ae2f55a1915e7a28b3e4568b6d0ac0"
  },
  {
    "url": "javascript/index.html",
    "revision": "343ae3552ec3855113e5460552d83875"
  },
  {
    "url": "php/index.html",
    "revision": "cb1593a38c828193a5157dc14366ca85"
  },
  {
    "url": "python/index.html",
    "revision": "f58b1c29fa69aa5dfaf435b4de81c1e6"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "1a2eb28b74a867eca123b4338a95af1a"
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
