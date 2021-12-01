const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    prevEl: ".hotel-slider__prev",
    nextEl: ".hotel-slider__next",
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    prevEl: ".reviews-slider__button-prev",
    nextEl: ".reviews-slider__button-next",
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document.querySelector(".navbar-bottom")
  .classList.toggle('navbar-bottom_visible');
});
