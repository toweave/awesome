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
    "revision": "9ff2b787ef9bef1eaab7149730e8f5ba"
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
    "url": "assets/js/10.d42c19f9.js",
    "revision": "f6f63848799cbfe0603e4c39f9770a26"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.7518789f.js",
    "revision": "69346911267b2a2379c4e205a222e8c5"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.5f022ee1.js",
    "revision": "6f5d575adcdeca5e31c77f6683ecb803"
  },
  {
    "url": "assets/js/15.0af712be.js",
    "revision": "7a51bbf12fcafa88508c871fae1137ef"
  },
  {
    "url": "assets/js/16.555f9985.js",
    "revision": "d6df261084ff5159129e250e6d68db08"
  },
  {
    "url": "assets/js/17.ed41a9e6.js",
    "revision": "ffe84873edeafa0eaebcf25ce7ed64d3"
  },
  {
    "url": "assets/js/18.2233af46.js",
    "revision": "639b9422148458ee5079a8aead585324"
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
    "url": "assets/js/8.96e1a781.js",
    "revision": "1ecc626425b49a78525630624c9d5fbd"
  },
  {
    "url": "assets/js/9.48cc072e.js",
    "revision": "685095e4c1d6313e3184660f8d1fd60e"
  },
  {
    "url": "assets/js/app.3783f7b2.js",
    "revision": "87ab330c313bc979f708389b62a46d20"
  },
  {
    "url": "book/index.html",
    "revision": "a831b883720305d6685ad28d40cb17cd"
  },
  {
    "url": "c/index.html",
    "revision": "c8b03f90f6ddb5a211372cee7168a943"
  },
  {
    "url": "config.html",
    "revision": "275c0c9760d6ef9e9904e890acff1522"
  },
  {
    "url": "go/index.html",
    "revision": "578993024b27fd9222db58db0527267b"
  },
  {
    "url": "guide/index.html",
    "revision": "eb89c57426a600ada376373c04997f9d"
  },
  {
    "url": "index.html",
    "revision": "8e6c693fedd0659e803c19bb7ccb7448"
  },
  {
    "url": "java/index.html",
    "revision": "616dda671b65f6acfc8d0d33fb414270"
  },
  {
    "url": "javascript/index.html",
    "revision": "1f54bab7afaebf137d1c6b017c507b00"
  },
  {
    "url": "php/index.html",
    "revision": "4bab93953d26adb939f474a128dc16a9"
  },
  {
    "url": "python/index.html",
    "revision": "c37337d11cb21ca32ff9d7075e5d5d60"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "0a30f68a72c60e9e4ab06629c6fe7cea"
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
