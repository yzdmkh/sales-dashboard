self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // تمرير الطلبات كالمعتاد
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
