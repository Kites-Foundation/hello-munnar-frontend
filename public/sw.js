importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js",
);

const HTML_CACHE = "html";
const JS_CACHE = "javascript";
const STYLE_CACHE = "stylesheets";
const IMAGE_CACHE = "images";
const FONT_CACHE = "fonts";
const CACHE = "pwa-offline";

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === "document",
    new workbox.strategies.NetworkFirst({
        cacheName: HTML_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === "script",
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: JS_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === "style",
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: STYLE_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ event, url }) => event.request.destination === "image" &&
        (url.origin.indexOf('localhost') !== -1 ||
            url.origin.indexOf('hellomunnar.in') !== -1),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: IMAGE_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ event }) => event.request.destination === "font",
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: FONT_CACHE,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 15,
            }),
        ],
    }),
);
workbox.routing.registerRoute(
    ({ url }) => url.origin === "https://fonts.googleapis.com" ||
        url.origin === "https://fonts.gstatic.com",
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({ maxEntries: 20 }),
        ],
    }),
);