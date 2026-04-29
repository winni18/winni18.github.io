(function () {
  var toc = document.getElementById("papers-toc");
  if (!toc) return;

  var pills = [].slice.call(toc.querySelectorAll("a.topic-pill"));
  if (!pills.length) return;

  var ids = pills
    .map(function (a) {
      var h = a.getAttribute("href");
      return h && h.charAt(0) === "#" ? h.slice(1) : null;
    })
    .filter(Boolean);

  var sections = ids
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActive(id) {
    pills.forEach(function (a) {
      var match = a.getAttribute("href") === "#" + id;
      if (match) a.classList.add("is-active");
      else a.classList.remove("is-active");
    });
  }

  function updateFromHash() {
    var h = window.location.hash.replace(/^#/, "");
    if (h && ids.indexOf(h) !== -1) setActive(h);
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = new Map();
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          visible.set(e.target.id, e.intersectionRatio);
        });
        var bestId = null;
        var bestRatio = 0;
        visible.forEach(function (ratio, id) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId && bestRatio > 0.05) setActive(bestId);
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(function (el) {
      visible.set(el.id, 0);
      observer.observe(el);
    });
  }

  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();
})();
