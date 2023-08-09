'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "914f73911ddacb775ba0443d69355cb0",
"assets/AssetManifest.json": "b65ca6eab2ef63ea5e658ccad38e0c3f",
"assets/assets/background_handsome/gifV.gif": "290df0ef7cd6e990abc61fc494cf740c",
"assets/assets/background_handsome/handsum%2520(1).PNG": "ffde1553d0fb2c6e04ea41007c38b95b",
"assets/assets/background_handsome/handsum%2520(10).PNG": "e578e5a22e6cf0174bb80aab2c261a08",
"assets/assets/background_handsome/handsum%2520(11).PNG": "bd27eaf90f0e1c9e38ea2c08db401d5d",
"assets/assets/background_handsome/handsum%2520(12).PNG": "c2375e0167f0033c6bee9ec74cbcadf2",
"assets/assets/background_handsome/handsum%2520(13).PNG": "0d06556092a2bb2ab1ed375e428154f9",
"assets/assets/background_handsome/handsum%2520(14).PNG": "d31a4afc7059c72039d0a8f55dad86e9",
"assets/assets/background_handsome/handsum%2520(15).PNG": "85ee12f66df7d061a8d30ee8b7f9c930",
"assets/assets/background_handsome/handsum%2520(16).PNG": "b4e257414a68d4d61f98f09d94343601",
"assets/assets/background_handsome/handsum%2520(17).PNG": "876390962f7e2094c6301da8d9706a91",
"assets/assets/background_handsome/handsum%2520(18).PNG": "b4dc259e4ad6e4a03050bcfc52c29e27",
"assets/assets/background_handsome/handsum%2520(19).PNG": "aab04ca870cc100035fa8ae5ad71b24c",
"assets/assets/background_handsome/handsum%2520(2).PNG": "9860d4ec531c57b70d935cfefc52ffb8",
"assets/assets/background_handsome/handsum%2520(3).PNG": "18ec40642f44c53a123db74efd2c4c64",
"assets/assets/background_handsome/handsum%2520(4).PNG": "871a2d7fbad6367e943b6950e5ceaa5c",
"assets/assets/background_handsome/handsum%2520(5).PNG": "c120bfc77c6e9c7097c6f2f3f94d1b3a",
"assets/assets/background_handsome/handsum%2520(6).PNG": "d94a6603042f2cc30afe2adf11de62b5",
"assets/assets/background_handsome/handsum%2520(7).PNG": "67b3300d1a0b48c719db957074fc4f9c",
"assets/assets/background_handsome/handsum%2520(8).PNG": "b38bffe0f870cf4155ed66c555dc9e84",
"assets/assets/background_handsome/handsum%2520(9).PNG": "9479b3116d9c9d56d45bb03f1effc2aa",
"assets/assets/icons/flutter.png": "93aae4b39ab73750ec5ddd3e3c85b5bb",
"assets/assets/icons/github.png": "5585e925ba07e5d52b9f5efc90038a20",
"assets/assets/icons/in.png": "2b3b434d4a2408f81cdb14e462ebd065",
"assets/assets/icons/line.png": "bfd722987fc4b2688523a14211dc4a8d",
"assets/assets/icons/software.jpg": "b53a8bf0aacf059c57fba05172177e2d",
"assets/assets/icons/software.png": "f1d08bdd66faa36ce0c6b6f7f71c80b5",
"assets/assets/icons/software2.png": "eb3c4bf5163816fd6afb0f2881f03a63",
"assets/assets/icons/tensorflow.png": "004000e3f0d5f0604ba5e922a7e7ea54",
"assets/assets/icons/title.png": "529326412cb3d3c824d0bdda567fb536",
"assets/assets/images/noise_background.png": "ab2daadf850b9f94a21d1e3c50504b44",
"assets/assets/works/chuayjub.png": "d7936d16b198bc1d70d7a8ccec3cb64f",
"assets/assets/works/crab.png": "2f1b95a903a158829a02af9c61d57b90",
"assets/assets/works/esy.png": "77c1676a4fef8d277ae9a0c21c64445d",
"assets/assets/works/line.png": "e13a38a40879708b7dfc1e92eba58225",
"assets/assets/works/namnur.png": "099681144628a70ab91e0576236ef08e",
"assets/assets/works/performance.png": "b81b52f523e09cad46f9d12c65f5b302",
"assets/assets/works/ppe.png": "0fde76cd89ab2907c4e01ffa735f23fb",
"assets/assets/works/vc.png": "4615aeab9a15013329466d774095bd73",
"assets/assets/works/work_phone.png": "7fa5257ab606a860bf553716a71ef9b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3af16433540c5ecca8d3f1e8aca6eec0",
"assets/NOTICES": "3b65f0591055a8bcb26d6a0915e6bf5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "d74f581d803578119057280a05768a30",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "3921a4e975c0bea336140eba11f3b1da",
"icons/Icon-512.png": "4a1b48379a30b9a90b32513307a0103b",
"icons/Icon-maskable-192.png": "3921a4e975c0bea336140eba11f3b1da",
"icons/Icon-maskable-512.png": "4a1b48379a30b9a90b32513307a0103b",
"index.html": "08d44751d17456dd0a8d2010dc79c005",
"/": "08d44751d17456dd0a8d2010dc79c005",
"main.dart.js": "d352661a56540443e7c977d02a684711",
"manifest.json": "e20f489f5f1081599977ebb0a11cd233",
"version.json": "0988456e724fc60009a7bfc57680a684"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
