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
    "revision": "1cadc346ef7b18a4b9a3f7a9945a33a2"
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
    "url": "assets/js/10.283e7e95.js",
    "revision": "8aa2b328bbcc8f66f8c5e4683bcc6f3c"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.7636c821.js",
    "revision": "889b4c5e15dc355715af7a957ce7135d"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.1c5ebc2c.js",
    "revision": "78d41d52dd0dadf240b51908bdabc954"
  },
  {
    "url": "assets/js/15.7f205881.js",
    "revision": "53940a8feed0ec239486c5d42035c56b"
  },
  {
    "url": "assets/js/16.a66d6bb3.js",
    "revision": "73ac651edc12e71414b4bdfb1426da65"
  },
  {
    "url": "assets/js/17.71d39ae9.js",
    "revision": "4320ac9e825af94a6d9893eccc5b7f4b"
  },
  {
    "url": "assets/js/18.d737ee3e.js",
    "revision": "a5b3ea359be7794076ff271d516cb17d"
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
    "url": "assets/js/8.449d281c.js",
    "revision": "90f7aa8aee9aae357b4119a165c0f7cc"
  },
  {
    "url": "assets/js/9.15a68ae6.js",
    "revision": "92174faef354549bf05ca12106dc7f93"
  },
  {
    "url": "assets/js/app.34ab37b3.js",
    "revision": "bf3ce0efef725d3d0acf2abcb60d500a"
  },
  {
    "url": "book/index.html",
    "revision": "3c4570af63fb4782a81ca74972eba755"
  },
  {
    "url": "c/index.html",
    "revision": "5ed8b58b18abfc7b3cfaaedec91ca97a"
  },
  {
    "url": "config.html",
    "revision": "38099ddfd4021c4cbbaef79a398c06c5"
  },
  {
    "url": "go/index.html",
    "revision": "dad066a6c7d60d7fbaa08bd713ef10bf"
  },
  {
    "url": "guide/index.html",
    "revision": "cce9c6011395f20627bf14311562a7e8"
  },
  {
    "url": "index.html",
    "revision": "6063eb52364b25abe2decfc1ad38e593"
  },
  {
    "url": "java/index.html",
    "revision": "6832aba40da157a3eaaa362462a88af3"
  },
  {
    "url": "javascript/index.html",
    "revision": "55fb69bbbeb8a4fc23c7942770b62caf"
  },
  {
    "url": "php/index.html",
    "revision": "1766a3f5e45c5e7734a3cfe50837b190"
  },
  {
    "url": "python/index.html",
    "revision": "fa12b0cbd6ae8e4921c0746d541e20be"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "17024d3787903224efa9a98886491867"
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
