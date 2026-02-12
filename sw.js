self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("cashpro").then(cache => {
      return cache.addAll(["/"])
    })
  )
})
