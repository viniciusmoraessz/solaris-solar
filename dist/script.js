const menuButton = document.querySelector(".menu");
const siteMenu = document.querySelector("#site-menu");

function setMenu(open) {
  if (!menuButton || !siteMenu) return;

  siteMenu.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

if (menuButton && siteMenu) {
  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  document.addEventListener("click", (event) => {
    if (
      !menuButton.contains(event.target) &&
      !siteMenu.contains(event.target)
    ) {
      setMenu(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) setMenu(false);
  });
}

const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
}
