// const scriptURL = process ? process.env.scriptURL : "/sw.js";
// const scope = process ? process.env.scope : '/';
const scriptURL = "/sw.js";
const scope = '/';
/**
 * Should only work for https... and hopefully localhost
 * @return {Promise<void>}
 */
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(scriptURL, {
        // scope: "/",
        scope,
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …

registerServiceWorker();
