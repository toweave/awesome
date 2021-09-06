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
    "revision": "898c9ae3775cc699e1c468984e510556"
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
    "url": "assets/js/10.daa481af.js",
    "revision": "4101227065606b30184d649df4270b51"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.47dfaf60.js",
    "revision": "875fdb8238d8791a0bf05bc26c7fb904"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.af1612d5.js",
    "revision": "11823f8ca6e5c43b9c5f2732646f0d12"
  },
  {
    "url": "assets/js/15.dfff638d.js",
    "revision": "60a8eac636cef56f199b3287687475ae"
  },
  {
    "url": "assets/js/16.3c1fe4f9.js",
    "revision": "892fba3d857717b2306e035f42609fdb"
  },
  {
    "url": "assets/js/17.dd4789b8.js",
    "revision": "a1081c6f292ea6ce5d940260104a6bd2"
  },
  {
    "url": "assets/js/18.e3c2cd31.js",
    "revision": "5dd10b5022f77eb5e1bbc3a168e59b89"
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
    "url": "assets/js/8.af91eb74.js",
    "revision": "10bb29208be727641b2f79c31a596b23"
  },
  {
    "url": "assets/js/9.267e021a.js",
    "revision": "547873284c28c62de878f743d7d3f3cf"
  },
  {
    "url": "assets/js/app.3820f5c8.js",
    "revision": "9ea19b4c2ac5b70e9db65abd41c966bd"
  },
  {
    "url": "book/index.html",
    "revision": "e8a5558123e45fa8f4e0fb3e53a386df"
  },
  {
    "url": "c/index.html",
    "revision": "a235c39b0df988ea9439eca3a5276cc5"
  },
  {
    "url": "config.html",
    "revision": "e99e5d4d5f7cec87e1730a2764cb79cf"
  },
  {
    "url": "go/index.html",
    "revision": "9a9b373f8198e6142fa5683677977efc"
  },
  {
    "url": "guide/index.html",
    "revision": "43e65871f0a80b2df88a21a100ea1af5"
  },
  {
    "url": "index.html",
    "revision": "381c4c094657b9cdc73854267cb80d6d"
  },
  {
    "url": "java/index.html",
    "revision": "b4da19f9e4700bbbdeb0eb21680f191d"
  },
  {
    "url": "javascript/index.html",
    "revision": "dfffbf8657b4c5d513a8b47452daabc2"
  },
  {
    "url": "php/index.html",
    "revision": "db35146304317e88d72eaf35ab64e6cf"
  },
  {
    "url": "python/index.html",
    "revision": "4298e283dddf038bb893515766a501ef"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "11ebc46eeb796626be565d2541dc13e5"
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
