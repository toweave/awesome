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
    "revision": "751f71deb6cd51bd07e6763a11f50302"
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
    "url": "assets/js/10.3bc3ca97.js",
    "revision": "e8b7c8cf1818d573045024ddf602a214"
  },
  {
    "url": "assets/js/11.8e949e8b.js",
    "revision": "824e425df24faed60b0fb2589b2a0793"
  },
  {
    "url": "assets/js/12.7f0ec206.js",
    "revision": "559a430b7084c3456ba39f936f661131"
  },
  {
    "url": "assets/js/13.513b44d2.js",
    "revision": "ecd3d646d299439218c27c74937164e7"
  },
  {
    "url": "assets/js/14.d6100cd4.js",
    "revision": "67b262a8b2a35de9e79a362a01c68899"
  },
  {
    "url": "assets/js/15.4e8f6baa.js",
    "revision": "ae58372f4fdaa44af12cb0cfd1a1f3f8"
  },
  {
    "url": "assets/js/16.83f41ede.js",
    "revision": "723de60c585a3fc6913d665bdd196e40"
  },
  {
    "url": "assets/js/17.a5ebc05a.js",
    "revision": "70e0e4afa814419dd74ca7c01f669db8"
  },
  {
    "url": "assets/js/18.df0339a9.js",
    "revision": "20d6d457b54a70cc3349c25607d606b0"
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
    "url": "assets/js/8.bb6a4a5c.js",
    "revision": "bd35bf9327abcafec52e1e0541694655"
  },
  {
    "url": "assets/js/9.aeb27af6.js",
    "revision": "a6ee3e8b687657885c5506f1b4939b96"
  },
  {
    "url": "assets/js/app.14499c92.js",
    "revision": "c22ebac50acb565b72c4ecfd3bf9f54e"
  },
  {
    "url": "book/index.html",
    "revision": "ec2dd7ccb06d841696ae6a4f7020a39f"
  },
  {
    "url": "c/index.html",
    "revision": "a93397873ba446ce260e4ad210675edd"
  },
  {
    "url": "config.html",
    "revision": "b11aacfaf41f296d0cb640ea778eb317"
  },
  {
    "url": "go/index.html",
    "revision": "797496648536e55b0a58bac7ba5ffabb"
  },
  {
    "url": "guide/index.html",
    "revision": "9451e6940d522839fe2caad5fbb58dfe"
  },
  {
    "url": "index.html",
    "revision": "a70c596ebddbc70c37cd9056e63f900b"
  },
  {
    "url": "java/index.html",
    "revision": "b143fceaafc37fc7e973236adc6e61ba"
  },
  {
    "url": "javascript/index.html",
    "revision": "2009d6c25337597f5edd64dacd977ad5"
  },
  {
    "url": "php/index.html",
    "revision": "ff04bf101155f251a6f8742e4df748a9"
  },
  {
    "url": "python/index.html",
    "revision": "4e54f939ffe69500da9fe79634174b44"
  },
  {
    "url": "visual-basic/index.html",
    "revision": "116ac53549b5e5c4f8da872f3697854b"
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
