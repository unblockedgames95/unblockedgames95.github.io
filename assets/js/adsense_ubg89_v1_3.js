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

  function loadGoogleAdsense() {
    // Google Adsense
    var f = document.getElementsByTagName("script")[0];
    j = document.createElement("script");
    j.async = true;
    j.crossorigin = "anonymous";
    j.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5152482106464455";
    f.parentNode.insertBefore(j, f);
  }

  if (botBrowser()) {
    console.log("Bot Browser");
  } else {
    console.log("Human Browser");
    if (window.location.href.indexOf("/1000unblockedgames.github.io") > -1) {
      if (inFrame()) {
        console.log("Adsense Skip! Frame!");
      } else if (window.location.href.indexOf(".html") == -1) {
        console.log("Adsense Skip! Home Page!");
      } else {
        console.log("Adsense Served!");
        loadGoogleAdsense();
      }
    } else {
      console.log("Adsense Skip!");
    }
  }
});