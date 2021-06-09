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
    "revision": "b53d8fc002ba8c8f2ab333bf8dd0fe13"
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
    "url": "assets/js/10.cb9c101b.js",
    "revision": "de14c6a31db132b895d3c59f9029956e"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.a7744b68.js",
    "revision": "1ee3b0494387fc315660bbd780a43c9c"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.2ddba28b.js",
    "revision": "00cdb80d81982ca73cace3c55b46dd45"
  },
  {
    "url": "assets/js/15.202842a5.js",
    "revision": "06883e4e42829acaee9ae915268ae14f"
  },
  {
    "url": "assets/js/16.dae2b3e0.js",
    "revision": "f2c3ead83a0718adfae1974497ba4dff"
  },
  {
    "url": "assets/js/17.4a553685.js",
    "revision": "110d2cc1563e68ed8d165e1c19112656"
  },
  {
    "url": "assets/js/18.8ff88211.js",
    "revision": "e3ad7526a77c0a950cc783336e017f49"
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
    "url": "assets/js/8.83631255.js",
    "revision": "fa91536e959d687934d2097d63275518"
  },
  {
    "url": "assets/js/9.b774e9a8.js",
    "revision": "80f0b6c05f609e340af4811e08826df6"
  },
  {
    "url": "assets/js/app.0bfd0a86.js",
    "revision": "9b1aed876a3a0e471bc0dd198a7314af"
  },
  {
    "url": "book/index.html",
    "revision": "825c0fbea89a97ea1d94ac9dc7c13111"
  },
  {
    "url": "c/index.html",
    "revision": "fb8236b913f036f0caccbd99e9f103bc"
  },
  {
    "url": "config.html",
    "revision": "ee1570267b4b726e126ef65bab07811b"
  },
  {
    "url": "go/index.html",
    "revision": "01248ce82e6b972e71b901398a42d5b8"
  },
  {
    "url": "guide/index.html",
    "revision": "ecda2f9a138a2aee7b02fdfcc45879aa"
  },
  {
    "url": "index.html",
    "revision": "08a716b6ef2cf1b22facd5da4bc41471"
  },
  {
    "url": "java/index.html",
    "revision": "f9de6177b21e9f9858cff463e7dcb84a"
  },
  {
    "url": "javascript/index.html",
    "revision": "8d8143f7530192e19b29e69d55ee4d47"
  },
  {
    "url": "php/index.html",
    "revision": "e768786265fb3098e73bbc013b024f21"
  },
  {
    "url": "python/index.html",
    "revision": "8ca94302934d9c45b38cd1f9bd73a41d"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "0c9510dff676e99fff71450759ccd140"
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
