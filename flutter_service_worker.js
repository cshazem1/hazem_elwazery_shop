'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b91be102ca4f93703ebb5710f53d75d0",
"assets/AssetManifest.bin.json": "ee2846405dc4a6bc07d35855af37b563",
"assets/AssetManifest.json": "07fe650c1794e0de2819546fe5ca43cd",
"assets/assets/images/best_seller_1.png": "c2919a7ebd1c0635fb352d2db011b809",
"assets/assets/images/best_seller_2.png": "2376246dc6138e5fc14c6655429a3d49",
"assets/assets/images/best_seller_3.png": "026695c758614c93006653d511ce159e",
"assets/assets/images/best_seller_4.png": "de49efe52175510ab0e12818441d4474",
"assets/assets/images/best_seller_5.png": "371ffc8d89afe28005142fee7ccc7320",
"assets/assets/images/black_friday.png": "9f21f7b14a58b4fe0d44b8703ab01248",
"assets/assets/images/black_friday2.jpeg": "fbb7ca87aac672afe75649f43fd4aadd",
"assets/assets/images/new_arrival_1.png": "44c0d31c54f7ba68f87a559e5ce291c9",
"assets/assets/images/new_arrival_2.png": "e7de7d3055f8fb8ea8ff354056e860dc",
"assets/assets/images/new_arrival_3.png": "5ff9fd76aa61a4ce3a2d7b227f278140",
"assets/assets/images/new_arrival_4.png": "d5adc12aa5656b8e354990a5b470baab",
"assets/assets/images/new_arrival_5.png": "1a77937410f6dda12ce24e299ef0ce39",
"assets/assets/images/recommended_1.png": "c1f98aed69bf5dc0389f99a4861b5fa2",
"assets/assets/images/recommended_2.png": "98b86190d6c0b4ab4d45e4355c8e8f24",
"assets/assets/images/recommended_3.png": "1493638b16261c4fe2a5830d5c1589b9",
"assets/assets/images/recommended_4.png": "1de994c5b9894b872cea50ed04d0d9cd",
"assets/assets/images/recommended_5.png": "eca4f0a128af9a0fd9f2e1d86affc98b",
"assets/assets/json/dummyData.json": "b288480eccec925206e5eca6fdf2d9a0",
"assets/assets/svg/icons/Artifacts.svg": "a8641e9bce76ef00eee523a344596e22",
"assets/assets/svg/icons/book.svg": "1feb6299c09ffbf8fad7863936fdf0dd",
"assets/assets/svg/icons/dice.svg": "366aa9249623b7199c6780fbe1570197",
"assets/assets/svg/icons/glasses.svg": "6c1be09454af8add79225a1fad688812",
"assets/assets/svg/icons/heart.svg": "16312328462f22c231c6221b74fb94fc",
"assets/assets/svg/icons/list_icon.svg": "44b1e5b3c7db74e05a26b4e9f2534f2f",
"assets/assets/svg/icons/search-normal.svg": "fd641872e0747ac119ddf2e0352120bc",
"assets/assets/svg/icons/shirt.svg": "cff0169db76ecddb4abc36290c2feacd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "98b5c8ea704afdd47c8cf1a7878f6169",
"assets/NOTICES": "0c7ca5c3afb84a3af0dd16bd2a8eb9b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7e2962e12e3a2b35094bbb1ca1a76078",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c4e82027cda69421a6d35eaf8affb473",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3979836581feb9e908bace86470af0b9",
"/": "3979836581feb9e908bace86470af0b9",
"main.dart.js": "9164b72f0af9f7306fd954b271d33ddc",
"manifest.json": "4391be7a0cb435222ed16f62cbb2bcec",
"version.json": "b05c9633fd8bb660f28a0f9419189bca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
