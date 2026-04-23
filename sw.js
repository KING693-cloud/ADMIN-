const CACHE_NAME = 'admin-cache-v1';

// Install the Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate and take control
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Network-first strategy to prevent freezing
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});

