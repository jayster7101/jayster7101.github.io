'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "389a6e6e6f34312743ca5f36467c84b5",
"index.html": "2f0100355eedf93dd6eac3b3a61357ae",
"/": "2f0100355eedf93dd6eac3b3a61357ae",
"main.dart.js": "2125e6a414848e9a832217c4bf3d6a67",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
".git/config": "7578e49e845237228ce5dd20e139a722",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3e/d43b37c2cc3463ffb2313d44733b1268b7512d": "55329feda67645f97b3d61b3531981bc",
".git/objects/56/7a631a7c1f48cd932617e73ccfa2c8fbfe3be6": "0b41ffe7d4aa78b22d17b726f0a1910b",
".git/objects/51/af5046c71e08225959af0317ed700f5d7715e2": "db3be7ffd21897e7eeb9fbf4d4c75a71",
".git/objects/05/7f291016088231eb7a1ca1e4d0b80a7508fe13": "c60818c40a063d709febe5113c2f0f57",
".git/objects/bb/5bdf44badfd75e6450edb4e1a5efb6eb2be6ae": "43a2c5a295892de45f311ec9f0943100",
".git/objects/a2/202ccdebc079f84c47ac10fa460533f32dad49": "e074466391790e56143ece740afab098",
".git/objects/a5/c877a53132f84b1d13a8385c6aef0922418fbf": "5c9ba9ee125034720560bbb70ecf43a6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/6407e10ab4414d0b53ea8f0856bda8d62635e6": "0904acd064b0af70dad8e7865a962644",
".git/objects/d8/363d41175742c80877e607ab6f6239f797c9d9": "f8d483c3ba4376efe877b73d5b88fabc",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e45ba97c0ff8a2304c14a23874170105867c0a": "4a45053c3102a273219b7e7682995b85",
".git/objects/f2/7282b67790108a12305d81d045a3ca42ddac7a": "34e1cd5914c48a5da4d4f0a9c944c1ca",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/16779b9bdc23a5784aa9208e80049cce4c31f4": "46a5a1dec7345cfd62374fe0e13ced15",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/bbca854bb5d36bf4bfcf089ae91c55ae5116ec": "b69b88816868824e02c48c0fdabd8e86",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/b084a0dd661830b477102b228cd782184ea71d": "2627a025237cbb6d3432f45c4b198bda",
".git/objects/36/0f69c6d7ac70aaf19402f881e6440e5a916819": "4b4e337e73858e03654b33588ed8e4c2",
".git/objects/09/311430921969e4d8037e504a1c0c69a704bec6": "c4d2ed7752f2ae40b2a4266c4cdedec3",
".git/objects/31/f4c962e75907c1e02e7c4229802fcbe07a829d": "9fc530cc8cd98591e3cd9e7eed47c23d",
".git/objects/96/3d00f007958132ae0d1c38ce55ba67fff0920a": "d07dda441b10e7d691d4529faa786914",
".git/objects/52/528e966d4929c3d66517459c308fec30f1031d": "2a99e8a26b6e2bc9d1feca0b2d989ddf",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/64/ea1c2faeba8deaa23fb6a6a96d87611aea55ab": "4ffeb45253c356f61c983f579c686d49",
".git/objects/ba/fc3fa7f0c42a769528802e01d683c5b3f95dc2": "b45f048f2078efca5b2f333d5d1b7560",
".git/objects/a0/620775da838c67230f59485d14eb094896a52e": "7938a1fd2128273fa0e01fb09215f0c1",
".git/objects/a0/6a12b0bcf910f29df39c381eecfae1b1dc5e18": "a32b0329614723b1ca9a9ae33ef2472c",
".git/objects/aa/b4fe98b9638df3a0acb6a7e413024863c2cd8b": "0fc6e5a30ab5ac17d055e97ffbfd7239",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/af/eb48e50dfbfff97bce8fdaf537acb57e6f71fe": "72be83eceb2d592c20f52f633f8b6d61",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2859deb62b482ebad51b57a550634039b349a4": "b922666f3e64f03f92e3ffc0795d209f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e8/eb4dc5c4937510e0da5eb03eb19d71450b46c2": "afb9fe26a08fd37a653331c7188e8782",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/79/187c4cba43f6df976a2444c68470f3edb9b4e0": "dcb3454f9c1fab998f485d435f96c782",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1e/1f632db672017fb547a2f1954aa741808e783e": "380740991a1b47d57f1d0fbbd9b0d7f3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/36c07c98e549fd155d937158bc423957970cac": "76180f814fdc42c4c9da1c8367e2c910",
".git/objects/15/3305fe3a91937b60537592f79aaeb181080d30": "94ab160f81bdfe5941be6f30ea78a930",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/d7c866e0d37159260d30c7bd2d0aef8a8fba50": "a3faac584b24473034e9be8295c44652",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5fcb59b6b629f25658dc8a5b271554e3",
".git/logs/refs/heads/old": "373acb33587414a90a5bdacb5d660693",
".git/logs/refs/heads/master": "3d7e5f5cf2c86be0bc32e9b11b2d34a7",
".git/logs/refs/remotes/orgin/quick": "eb070e9194be2718df4afc19aa318c5c",
".git/logs/refs/remotes/orgin/master": "611917184e981dae6cc1a780994ffcab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/old": "5ea5b19cd2a7a7eea686f3a6cda6929d",
".git/refs/heads/master": "11935387450649b39f4c2ad922353c28",
".git/refs/remotes/orgin/quick": "5ea5b19cd2a7a7eea686f3a6cda6929d",
".git/refs/remotes/orgin/master": "11935387450649b39f4c2ad922353c28",
".git/index": "edd646dd47b147631d6ef440e21f9191",
".git/COMMIT_EDITMSG": "c6c16f3c891ec9b69d88695d2366421d",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "8bcb5f0207b63aec5ea44db06dc5b022",
"assets/NOTICES": "0ec1b59c4c434a2db3a25cec504bff2e",
"assets/FontManifest.json": "7e305e9e0d9c0d4883ec2530f3fe44a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/lib/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/lib/fonts/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Eth:Sol.jpeg": "23754ca0142821156081b7d6923cae80",
"assets/assets/images/Zero.png": "f863c27c24013a17fabef944b7fffc4f",
"assets/assets/images/SCU_homescreen.jpeg": "8b5ad560a4c22675da4ce30e749666e7",
"assets/assets/images/Screen%2520Shot%25202022-08-06%2520at%25208.13.32%2520PM.jpeg": "8f22a3de43e2d7d9badb1443a262cf62",
"assets/assets/images/Sol.jpeg": "37f8b92e30c38153b9f352a822a61bd5",
"assets/assets/images/James_webb.jpeg": "a2be99dc3fb436106c4fe1aacff368e2",
"assets/assets/images/this.png": "aabcf842d4cdf3140dbcb49bb8413b78",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
