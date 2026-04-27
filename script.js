const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (header) {
      header.classList.remove("is-open");
    }

    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const setActiveLink = () => {
  let currentId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("is-active", isActive);
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealItems.forEach((item, index) => {
  item.classList.add(`reveal-delay-${Math.min(index % 4, 3)}`);
  revealObserver.observe(item);
});
