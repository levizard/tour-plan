$(document).ready(function () {
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
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom_visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay__visible");
    modalDialog.addClass("modal__dialog__visible");
  }

  function closeModal() {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay__visible");
    modalDialog.removeClass("modal__dialog__visible");
  }
});
