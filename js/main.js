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

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      closeModal();
    }
  });

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

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name should be longer than 2 symbols",
        },
        phone: {
          required: "Please add your phone number",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });

  $('.phone').mask('+7 (000) 000-00-00');
  
  AOS.init();
});
