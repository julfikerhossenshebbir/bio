const CACHE_NAME = 'cool-cache-v2';
const PRECACHE_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './contact.html',
    './about.html',
    './offline.html'
];

// Listener for the install event - precaches our assets list on service worker install.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(PRECACHE_ASSETS);
    })());
});

// Activate event - clean up old caches if present
self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames.map(name => {
                if (name !== CACHE_NAME) {
                    return caches.delete(name);
                }
            })
        );
    })());
    return self.clients.claim();
});

// Fetch event - serve resources from cache, fallback to offline.html if offline
self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        try {
            // Try fetching from the network
            const response = await fetch(event.request);
            return response;
        } catch (error) {
            // If network fails, try the cache
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(event.request);

            if (cachedResponse) {
                return cachedResponse;
            }

            // Fallback to offline.html for navigation requests
            if (event.request.mode === 'navigate') {
                return cache.match('./offline.html');
            }
        }
    })());
});
