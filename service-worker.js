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
    "revision": "c1e8e4e1bfa15f7a84a64d961eb8fde0"
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
    "url": "assets/js/10.bf921210.js",
    "revision": "b33ef3a55eee0d2aa9a27be94e97dd32"
  },
  {
    "url": "assets/js/11.8cd19598.js",
    "revision": "a3a7a744737394e6bd5de9a06349f6d2"
  },
  {
    "url": "assets/js/12.ffb7fc89.js",
    "revision": "d4fa0ae7cb7859f4dd298f74c6220fbd"
  },
  {
    "url": "assets/js/13.87305d90.js",
    "revision": "4b84bb83b3f4f421cf3e8a95bbb19676"
  },
  {
    "url": "assets/js/14.3a692be2.js",
    "revision": "fbe512c1d7243e09810c18c41cd11514"
  },
  {
    "url": "assets/js/15.0f23d69c.js",
    "revision": "3464be41b27317d3b231e191ac7cbede"
  },
  {
    "url": "assets/js/16.237e506e.js",
    "revision": "b004265cc7008eae6ac3a66d552b6730"
  },
  {
    "url": "assets/js/17.34222068.js",
    "revision": "7a3fe588469ae6894c202dc33f69de5f"
  },
  {
    "url": "assets/js/2.19673919.js",
    "revision": "5d79ab0a5b0a4f98fbad4d39ad4208f8"
  },
  {
    "url": "assets/js/3.093fdef3.js",
    "revision": "7ba06733e9cf227a2db89127d29dc873"
  },
  {
    "url": "assets/js/4.47fe19e5.js",
    "revision": "d39e12cec3960451c4e54cd2fb0e9064"
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
    "url": "assets/js/8.26d2dfbf.js",
    "revision": "32df8453e8914bce57c8664d8cbf50a4"
  },
  {
    "url": "assets/js/9.67c3a660.js",
    "revision": "efe49a0ea278dea0338c627326a9eb9d"
  },
  {
    "url": "assets/js/app.77292f18.js",
    "revision": "6b7a510243d63c2d125440e2f2b21244"
  },
  {
    "url": "book/index.html",
    "revision": "d8984d7c9645d62d29a51e51cc77e557"
  },
  {
    "url": "c/index.html",
    "revision": "7d1ba7252956ae0548c7e9c244f6d4cb"
  },
  {
    "url": "config.html",
    "revision": "e1e5bed2f6d61f3e951180a145181eda"
  },
  {
    "url": "go/index.html",
    "revision": "b0169dbe88c973bec998ec829f1cdf1e"
  },
  {
    "url": "guide/index.html",
    "revision": "41aa83796a5742727a0ffcb18b95aee2"
  },
  {
    "url": "index.html",
    "revision": "7989c9b4e60d80ce83289be23f0577b2"
  },
  {
    "url": "java/index.html",
    "revision": "bc1cce4e236dc1f7f709b7b8b1d16bc7"
  },
  {
    "url": "javascript/index.html",
    "revision": "433b4e1ea245f57341146019cab9ce28"
  },
  {
    "url": "python/index.html",
    "revision": "4fc02673293de3b57da26818bbbd7674"
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
