// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Nav elevation + back-to-top visibility on scroll =====
const backToTop = document.getElementById("backToTop");
window.addEventListener(
  "scroll",
  () => {
    const scrolled = window.scrollY > 12;
    nav.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("visible", window.scrollY > 500);
  },
  { passive: true }
);
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("main > section[id]");
const navLinks = document.querySelectorAll("#navLinks a");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const active = document.querySelector(`#navLinks a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => navObserver.observe(s));

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll(
  ".about-grid, .timeline, .project-card, .skill-group, .edu-block, .contact-grid"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// ===== Reduced motion check =====
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== Hero "focus" checklist animation =====
const focusItems = document.querySelectorAll("#focusList li");
let focusHasRun = false;

function runFocusList() {
  if (focusHasRun) return;
  focusHasRun = true;

  if (prefersReducedMotion) {
    focusItems.forEach((item) => item.classList.add("checked"));
    return;
  }

  focusItems.forEach((item, i) => {
    setTimeout(() => item.classList.add("checked"), i * 260);
  });
}

const focusCard = document.querySelector(".focus-card");
if (focusCard) {
  const focusObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runFocusList();
          focusObserver.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  focusObserver.observe(focusCard);
}

// ===== Animated stat counters (hero) =====
const statEls = document.querySelectorAll("[data-count]");

function animateCount(el) {
  const target = parseInt(el.getAttribute("data-count"), 10) || 0;
  const suffix = el.getAttribute("data-suffix") || "";

  if (prefersReducedMotion) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);
statEls.forEach((el) => statObserver.observe(el));
