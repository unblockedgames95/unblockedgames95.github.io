window.addEventListener("load", (event) => {
  function inFrame() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  function botBrowser() {
    try {
      return navigator.webdriver;
    } catch (e) {
      return true;
    }
  }

  function loadGoogleAnalytics(id) {
    // Google tag (gtag.js)
    var firstScript = document.getElementsByTagName("script")[0];
    newScript = document.createElement("script");
    newScript.async = "";
    newScript.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    firstScript.parentNode.insertBefore(newScript, firstScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", id);
  }

  if (botBrowser()) {
    loadGoogleAnalytics("G-Z3V7121CYN");
    console.log("Bot Browser");
  } else {
    console.log("Human Browser");
    loadGoogleAnalytics("G-Z3V7121CYN");
  }
});
