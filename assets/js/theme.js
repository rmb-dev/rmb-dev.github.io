// The site uses a single dark theme (Hack The Box palette, see assets/css/htb.css).
// The attribute is also set in the HTML; this covers any page that omits it.
document.documentElement.setAttribute("data-theme", "dark");

// Enable scroll-reveal styles early (before first paint) so content doesn't flash.
// terminal.js does the revealing; if it never runs, show everything after 2.5s.
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("term-js");
  setTimeout(function () {
    if (window.__termReady) return;
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-in");
    });
  }, 2500);
}
