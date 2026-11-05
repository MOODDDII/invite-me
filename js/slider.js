document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    type: "loop",
    focus: "center",
    fixedWidth: "clamp(220px, 26vw, 320px)",
    gap: 0,
    speed: 280,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",

    pagination: false,
    arrows: true,

    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,

    drag: false,
    perMove: 1,
    keyboard: false,
    waitForTransition: true,

    breakpoints: {
      900: { fixedWidth: "clamp(200px, 48vw, 300px)" },
      480: { fixedWidth: "62vw" },
    },
  });

  splide.mount();

  const THRESHOLD = 40;
  let startX = null;
  let startY = null;

  splide.root.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".splide__arrow")) return;
    startX = e.clientX;
    startY = e.clientY;
  });

  window.addEventListener("pointerup", (e) => {
    if (startX === null) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = startY = null;

    if (Math.abs(dx) > THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      splide.go(dx < 0 ? ">" : "<");
    }
  });

  window.addEventListener("pointercancel", () => {
    startX = startY = null;
  });
});