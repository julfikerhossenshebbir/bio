const CACHE_NAME = "offline-cache-v1";
const CACHE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./contact.html",
  "./about.html",
  "https://files.jhsite.com/jhs.jpg",
  "https://files.jhsite.com/images/facebook.png",
  "https://files.jhsite.com/images/messenger.png",
  "https://files.jhsite.com/images/whatsapp.png",
  "https://files.jhsite.com/images/telegram.png",
  "https://files.jhsite.com/images/instagram.png",
  "https://files.jhsite.com/images/threads.png",
  "https://files.jhsite.com/images/pinterest.png"
  ];

// Install Service Worker and Cache All Assets
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching all assets");
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Activate Service Worker and Remove Old Caches
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event (Serve from Cache if Available)
self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // Return a fallback page or asset if offline
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        })
      );
    })
  );
});