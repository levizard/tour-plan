const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    prevEl: ".slider__prev",
    nextEl: ".slider__next",
  },
});