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
    "revision": "03527301ea036c5fee0ac8149344074a"
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
    "url": "assets/js/10.15f33b88.js",
    "revision": "4fe2b2062912eed449bc93c2fd7db1d1"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.813ba4c9.js",
    "revision": "82b7bd73490a2f6c5d9eeedd7a2629cb"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.9c014297.js",
    "revision": "475b44a0c95b1c2336b175524c55889f"
  },
  {
    "url": "assets/js/15.61cd8f7e.js",
    "revision": "8fc1a7cfe2c8bbbed883998ec7f72314"
  },
  {
    "url": "assets/js/16.ad33e1cb.js",
    "revision": "086a75565e985798e39a639287a628fe"
  },
  {
    "url": "assets/js/17.086613db.js",
    "revision": "65bab33fb4bf4dbea8b4c942eee8600e"
  },
  {
    "url": "assets/js/18.ea2f5e5c.js",
    "revision": "3e0bdbd5ff66b1f086026f7b764c6511"
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
    "url": "assets/js/8.6ae6cf74.js",
    "revision": "1bba9503287595599a5054a0addf37d3"
  },
  {
    "url": "assets/js/9.d48e5ad6.js",
    "revision": "6ac9e5e1592447607b90408bcc0a0fbd"
  },
  {
    "url": "assets/js/app.09aa6ad3.js",
    "revision": "b35871be6830a5595e9b2fa61a076456"
  },
  {
    "url": "book/index.html",
    "revision": "3417c3fd6977384aa65862aaf33b565d"
  },
  {
    "url": "c/index.html",
    "revision": "bf011a4ced7b6c1b517ba8868934f659"
  },
  {
    "url": "config.html",
    "revision": "9dfe6b48e0e5b6d97fe4b642511c7368"
  },
  {
    "url": "go/index.html",
    "revision": "86c7707148313e9dcc3195342982ab46"
  },
  {
    "url": "guide/index.html",
    "revision": "450be5884e0bfdd187125a640e77ff7c"
  },
  {
    "url": "index.html",
    "revision": "b075e3b12ff166efdc52bc6a42191a52"
  },
  {
    "url": "java/index.html",
    "revision": "4d61d7ef3319abcba6ba92ddb084a8d1"
  },
  {
    "url": "javascript/index.html",
    "revision": "77acdfaec56630a45b614286883f5e37"
  },
  {
    "url": "php/index.html",
    "revision": "0a8769ea625967d46bfc8e61962674e2"
  },
  {
    "url": "python/index.html",
    "revision": "b874bacae1cd5329abcea71fcbd674ab"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "8c106bd29c511866934dedcc167d3078"
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
