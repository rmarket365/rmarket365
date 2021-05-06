
// Installing service worker
const APP_NAME = 'R Market 365';
/**
// Add relative URL of all the static content you want to store in
// cache storage (this will help us use our app offline)
*/
let resourcesToCache = ["./",
"./index1.html", // you may need to set to your page name if this different than pwa-example.html
"./index2.html", // you may need to set to your page name if this different than pwa-example.html
"./index3.html", // you may need to set to your page name if this different than pwa-example.html
"./products/products.json", // your product json may be different
"./products/fashion.json", // your product json may be different
"./products/electronics.json", // your product json may be different
"./logo.png", // your logo may be different
'./assets/ico/favicon-32x32.png ',
'./assets/ico/android-chrome-192x192.png',
'./assets/ico/android-chrome-512x512.png',
'./pwa.manifest',
'./assets/lw-jquery-rmarket-whatsapp/css/lw-jquery-rmarket-whatsapp.css',
'./assets/lw-jquery-rmarket-whatsapp/js/lw-jquery-rmarket-whatsapp.js',
'./assets/lw-jquery-rmarket-whatsapp/img/ajax-loader.gif',
'./assets/lw-jquery-rmarket-whatsapp/img/broken.png',
'./assets/lw-jquery-rmarket-whatsapp/img/image-broken.png',
'./assets/packages/fontawesome-free-5.11.2-web/css/all.min.css',
'./assets/packages/fontawesome-free-5.11.2-web/webfonts/fa-solid-900.woff2',
'./assets/packages/fontawesome-free-5.11.2-web/webfonts/fa-solid-900.woff',
'./assets/packages/fontawesome-free-5.11.2-web/webfonts/fa-solid-900.ttf',
'./assets/packages/fontawesome-free-5.11.2-web/webfonts/fa-brands-400.woff2',
'./assets/packages/fontawesome-free-5.11.2-web/webfonts/fa-brands-400.woff',
'./assets/packages/bootstrap-4.6.0/css/bootstrap.min.css',
'./assets/packages/other-js-libs/underscore-min.js',
'./assets/packages/bootstrap-4.6.0/js/bootstrap.bundle.min.js',
'./assets/packages/other-js-libs/jquery-3.4.1.min.js',
'./assets/packages/other-js-libs/jquery.validate.min.js',
'./assets/packages/other-js-libs/jquery.json.min.js',
'./assets/packages/other-js-libs/jstorage.min.js',
'./assets/packages/other-js-libs/jquery.lazy.min.js',
'./assets/packages/other-js-libs/masonry.pkgd.min.js',
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(APP_NAME).then(cache => {
            return cache.addAll(resourcesToCache);
        })
    );
});

// Cache and return requests
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

// Update a service worker
const cacheWhitelist = [APP_NAME];
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


