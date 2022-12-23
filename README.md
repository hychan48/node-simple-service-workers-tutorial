# Service Workers Tutorial
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker

# 1. Register()
The service worker code is fetched and then registered using
serviceWorkerContainer.register().
If successful, the service worker is executed in a ServiceWorkerGlobalScope;
this is basically a special kind of worker context, running off the main script execution thread,
with no DOM access. The service worker is now ready to process events.

# 2. Install
Installation takes place. An install event is always the first one sent to a service worker
(this can be used to start the process of populating an IndexedDB, and caching site assets).
During this step, the application is preparing to make everything available for use offline.

# 3. Install handler
When the install handler completes, the service worker is considered installed.
At this point a previous version of the service worker may be active and controlling open pages.
Because we dont want two different versions of the same service worker running at the same time,
the new version is not yet active.

# 4. Activate
Once all pages controlled by the old version of the service worker have closed,
its safe to retire the old version, and the newly installed service worker receives an activate event.
The primary use of activate is to clean up resources used in previous versions of the service worker.
The new service worker can call skipWaiting() to ask to be activated immediately without waiting for open pages to be closed.
The new service worker will then receive activate immediately, and will take over any open pages.

# 5. registered - after activation
After activation, the service worker will now control pages,
but only those that were opened after the register() is successful.
In other words, documents will have to be reloaded to actually be controlled,
because a document starts life with or without a service worker and maintains that for its lifetime.
To override this default behavior and adopt open pages, a service worker can call clients.claim().

# 6. loop
Whenever a new version of a service worker is fetched, this cycle happens again
and the remains of the previous version are cleaned during the new versions activation.

# Summary events
* install
* activate
* message

# Functional Events
* fetched
* sync
* push
