/* Terminal UI behaviour (see assets/css/terminal.css)
   - Pointer spotlight on [data-term-panel]
   - Scroll reveal for [data-reveal], staggered among siblings */
(function () {
  "use strict";
  window.__termReady = true;

  // Spotlight
  document.querySelectorAll("[data-term-panel]").forEach(function (p) {
    p.addEventListener("pointermove", function (e) {
      var r = p.getBoundingClientRect();
      p.style.setProperty("--mx", (e.clientX - r.left) + "px");
      p.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  var items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || reduce) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  // Stagger siblings that share a parent (capped so long lists don't lag)
  var groups = new Map();
  items.forEach(function (el) {
    var n = groups.get(el.parentElement) || 0;
    el.style.setProperty("--d", Math.min(n, 6) * 80 + "ms");
    groups.set(el.parentElement, n + 1);
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

  items.forEach(function (el) { io.observe(el); });
})();
