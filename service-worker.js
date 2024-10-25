const cacheName = 'qr-game-cache-v1';
const assetsToCache = [
  '/BoardGameApp/index.html',
  '/BoardGameApp/manifest.json',
  '/BoardGameApp/icon-192.png',
  '/BoardGameApp/icon-512.png',
  'https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js'
];

// Install service worker and cache the specified assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
