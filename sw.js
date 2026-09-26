const CACHE_NAME="futbolin-v1-8";
const ASSETS=[
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./sounds/countdown.wav",
  "./sounds/finish.wav"
];

self.addEventListener("install", event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", event=>{
  if(event.request.method!=="GET") return;

  event.respondWith(
    caches.match(event.request).then(cached=>{
      if(cached) return cached;

      return fetch(event.request).then(response=>{
        if(response && response.ok){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
        }
        return response;
      }).catch(()=>{
        if(event.request.mode==="navigate"){
          return caches.match("./index.html");
        }
        return new Response("",{status:503,statusText:"Offline"});
      });
    })
  );
});
