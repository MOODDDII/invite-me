
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    focus: "center",
    fixedWidth: "clamp(220px, 26vw, 320px)",
    gap: 0,
    speed: 280,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    pauseOnHover: true,
    pauseOnFocus: false,

    pagination: false,
    arrows: true,

    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,

    drag: false,
    keyboard: false,

    breakpoints: {
      900: {
        fixedWidth: "clamp(200px, 48vw, 300px)",
      },
      480: {
        fixedWidth: "62vw",
      },
    },
  }).mount();
});
