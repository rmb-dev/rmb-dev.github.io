/* CJCA Exam Kit — Blog page behaviour
   - "Mark as reviewed" progress, saved per browser (localStorage)
   - Topic filter
   - Expand / collapse all
   - Deep links: #topic-id opens its module and topic */
(function () {
  "use strict";

  var STORE_KEY = "cjca-exam-kit:done";
  var modules = Array.prototype.slice.call(document.querySelectorAll("[data-module]"));
  var topics = Array.prototype.slice.call(document.querySelectorAll("[data-topic]"));

  /* ---------- Storage (fails safely in private mode) ---------- */

  function loadDone() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveDone(done) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(done));
    } catch (e) {
      /* progress just won't persist */
    }
  }

  var done = loadDone();

  /* ---------- Progress ---------- */

  function updateProgress() {
    var totalDone = 0;

    modules.forEach(function (mod) {
      var modTopics = mod.querySelectorAll("[data-topic]");
      var count = 0;
      modTopics.forEach(function (t) {
        if (t.classList.contains("is-done")) count++;
      });
      totalDone += count;

      var label = mod.querySelector("[data-progress]");
      if (label && modTopics.length) {
        label.textContent = count + " / " + modTopics.length + " reviewed";
        label.classList.toggle("is-complete", count === modTopics.length);
      }
    });

    setText("[data-total-topics]", topics.length);
    setText("[data-total-done]", totalDone);
  }

  function setText(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setDone(topic, isDone) {
    topic.classList.toggle("is-done", isDone);
    var btnLabel = topic.querySelector("[data-mark-done] span");
    if (btnLabel) btnLabel.textContent = isDone ? "Reviewed" : "Mark as reviewed";
  }

  topics.forEach(function (topic) {
    setDone(topic, !!done[topic.id]);

    var btn = topic.querySelector("[data-mark-done]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var isDone = !topic.classList.contains("is-done");
      setDone(topic, isDone);
      if (isDone) done[topic.id] = true;
      else delete done[topic.id];
      saveDone(done);
      updateProgress();
    });
  });

  updateProgress();

  /* ---------- Expand / collapse all ---------- */

  function setAll(open) {
    modules.forEach(function (m) {
      if (!m.hidden) m.open = open;
    });
    if (!open) topics.forEach(function (t) { t.open = false; });
  }

  var expandBtn = document.querySelector("[data-expand-all]");
  var collapseBtn = document.querySelector("[data-collapse-all]");
  if (expandBtn) expandBtn.addEventListener("click", function () { setAll(true); });
  if (collapseBtn) collapseBtn.addEventListener("click", function () { setAll(false); });

  /* ---------- Filter ---------- */

  var filter = document.getElementById("xk-filter");
  var emptyMsg = document.querySelector(".xk-empty");

  // Cache searchable text once
  topics.forEach(function (t) {
    var title = t.querySelector(".xk-topic__title");
    var body = t.querySelector(".markdown-body");
    t._xkText = ((title ? title.textContent : "") + " " + (body ? body.textContent : "")).toLowerCase();
  });

  function applyFilter() {
    var q = filter.value.trim().toLowerCase();
    var anyVisible = false;

    modules.forEach(function (mod) {
      var modMatch = false;

      mod.querySelectorAll("[data-section]").forEach(function (sec) {
        var secMatch = false;
        sec.querySelectorAll("[data-topic]").forEach(function (t) {
          var match = !q || t._xkText.indexOf(q) !== -1;
          t.hidden = !match;
          if (match) secMatch = true;
        });
        sec.hidden = !secMatch;
        if (secMatch) modMatch = true;
      });

      if (!q) {
        mod.hidden = false;
      } else {
        mod.hidden = !modMatch;
        if (modMatch) mod.open = true;
      }
      if (!mod.hidden) anyVisible = true;
    });

    if (emptyMsg) emptyMsg.hidden = anyVisible;
  }

  if (filter) {
    var timer;
    filter.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(applyFilter, 120);
    });
  }

  /* ---------- Deep links ---------- */

  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;

    // Open every <details> ancestor (module, topic) plus the target itself
    var el = target;
    while (el) {
      if (el.tagName === "DETAILS") el.open = true;
      el = el.parentElement;
    }

    topics.forEach(function (t) { t.classList.remove("is-target"); });
    if (target.hasAttribute("data-topic")) target.classList.add("is-target");
    target.scrollIntoView({ block: "start" });
  }

  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  document.querySelectorAll("[data-copy-link]").forEach(function (a) {
    a.addEventListener("click", function () {
      var url = location.href.split("#")[0] + a.getAttribute("href");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          var old = a.textContent;
          a.textContent = "Link copied";
          setTimeout(function () { a.textContent = old; }, 1500);
        }, function () {});
      }
    });
  });
})();
