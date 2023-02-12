self.addEventListener('fetch', function (event)     {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('install', function(event){
    console.log(caches);
    event.waitUntil(
        caches.open('cacheName')
            .then(function (cache) {
             cache.add(
                '/index.html',
            );
        })
    );
});
