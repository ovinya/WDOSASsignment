const CACHE_NAME="Tour-Application-v1";
const CACHE_URLS=['landing.html',
                  "images/sea3.webp",
                  "normalize.css",];

self.addEventListener("install",function(event){
    console.log("Service Worker Installed");
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log("Cache Opened");
            return cache.addAll(CACHE_URLS);
        })
    );
});