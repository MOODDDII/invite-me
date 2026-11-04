document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    focus: "center",
    fixedWidth: "clamp(220px, 26vw, 320px)",
    gap: 0,
    pagination: false,
    arrows: true,
    breakpoints: {
      900: { fixedWidth: "clamp(200px, 48vw, 300px)" },
      480: { fixedWidth: "62vw" },
    },
  }).mount();
});