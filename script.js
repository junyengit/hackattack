/* ============================================================
   Wilshire House — interactions
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  "use strict";

  /* ---- current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- nav: shadow on scroll ---- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu toggle ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("is-open");
    });
    // close menu after tapping a link
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
      });
    });
  }

  /* ---- reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- apply form (Formspree AJAX) ----
     Set the form's `action` in index.html to your Formspree endpoint.
     We submit via fetch so the visitor stays on the page and sees the
     inline thank-you. If the endpoint isn't configured yet (still
     "YOUR_FORM_ID" or "#"), we just confirm locally so the demo works. */
  var form = document.getElementById("applyForm");
  var note = document.getElementById("applyNote");

  function lockForm() {
    if (note) note.hidden = false;
    form.querySelectorAll("input, textarea, select, button").forEach(function (f) {
      f.setAttribute("disabled", "disabled");
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var action = form.getAttribute("action");
      var configured = action && action !== "#" && action.indexOf("YOUR_FORM_ID") === -1;

      if (!configured) {
        lockForm(); // no backend yet — confirm locally
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.setAttribute("disabled", "disabled"); submitBtn.textContent = "Sending…"; }

      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            lockForm();
          } else {
            if (submitBtn) { submitBtn.removeAttribute("disabled"); submitBtn.textContent = "Send application"; }
            alert("Something went wrong sending your application. Please email us instead.");
          }
        })
        .catch(function () {
          if (submitBtn) { submitBtn.removeAttribute("disabled"); submitBtn.textContent = "Send application"; }
          alert("Network error. Please email us instead.");
        });
    });
  }
})();
