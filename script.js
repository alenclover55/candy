const swiper = new Swiper(".main-slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const popularSlots = new Swiper(".popular-slots-wrapper", {
  slidesPerView: 7,
  spaceBetween: 16,
  navigation: {
    nextEl: ".popular-slots-next",
    prevEl: ".popular-slots-prev",
  },
  breakpoints: {
    1580: {
      slidesPerView: 7,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
    1280: { slidesPerView: 5.5, spaceBetween: 16 },
    620: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 16,
    },
  },
});
const allSlots = new Swiper(".all-slots-wrapper", {
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".all-slots-next",
    prevEl: ".all-slots-prev",
  },
  breakpoints: {
    1580: {
      slidesPerView: 7,
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    1440: {
      grid: {
        rows: 2,
      },
      slidesPerView: 6,
      spaceBetween: 16,
    },
    1280: { slidesPerView: 5.5, spaceBetween: 16 },
    620: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 16,
    },
  },
});

const coefSlider = new Swiper(".coef-slider", {
  slidesPerView: 2,
  spaceBetween: 8,
  navigation: {
    nextEl: ".coef-next",
    prevEl: ".coef-prev",
  },
});

function showPopup(selector) {
  $(".modal-layout").fadeIn();
  $(".modal-layout").css("display", "flex");
  $(selector).fadeIn();
  $(selector).css("display", "flex");
}
$(".modal-close-btn").click(() => {
  $(".modal-layout").fadeOut();
  $(".popup").fadeOut();
});

$(".wallet-btn").click(() => {
  showPopup(".wallet-modal");
});

$(document).ready(function () {
  $("#deposits-btn").click(function () {
    $(".withdraw-history").hide();
    $(".deposite-history").fadeIn();
    $(this).addClass("active");
    $("#withdrawals-btn").removeClass("active");
  });

  $("#withdrawals-btn").click(function () {
    $(".deposite-history").hide();
    $(".withdraw-history").fadeIn();
    $(this).addClass("active");
    $("#deposits-btn").removeClass("active");
  });
});

$(document).ready(function () {
  $(".provider-select-header").click(function () {
    $(".provider-select-body").slideToggle();
  });

  $(".provider-option").click(function () {
    const selectedValue = $(this).data("value");
    $(".select-value").text($(this).text());
    $(".provider-select-body").slideUp();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".providers-select-wrapper").length) {
      $(".provider-select-body").slideUp();
    }
  });
});

$(document).ready(function () {
  $(".faq-item-body").hide();

  $(".faq-item-header").click(function () {
    const body = $(this).next(".faq-item-body");

    body.slideToggle(300);

    $(this).find("svg").toggleClass("active");
  });
});
$(document).ready(function () {
  $(".menu-btn").click(function (e) {
    e.preventDefault();
    console.log("Menu button clicked");
    $(".mobile-menu-opened").toggleClass("open");
  });

  $(".menu-close-btn").click(function () {
    $(".mobile-menu-opened").removeClass("open");
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest(
        ".mobile-menu-opened, .menu-btn, .menu-close-btn"
      ).length
    ) {
      $(".mobile-menu-opened").removeClass("open");
    }
  });
});
$(document).ready(function () {
  $(".withdraw-block").hide();
  $(".wallet-history-wrapper").hide();

  $(".deposite-btn").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".withdraw-block").hide();
    $(".wallet-history-wrapper").hide();
    $(".deposite-block").fadeIn();
    $(".deposite-btn").addClass("active");
    $(".withdraw-btn").removeClass("active");
    $(".wallet-history-btn").removeClass("active");
    $(".wallet-modal").removeClass("history");
  });

  $(".withdraw-btn").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".deposite-block").hide();
    $(".wallet-history-wrapper").hide();
    $(".withdraw-block").fadeIn();
    $(".withdraw-btn").addClass("active");
    $(".deposite-btn").removeClass("active");
    $(".wallet-history-btn").removeClass("active");
    $(".wallet-modal").removeClass("history");
  });

  $(".wallet-history-btn").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".deposite-block").hide();
    $(".withdraw-block").hide();
    $(".wallet-history-wrapper").fadeIn();
    $(".wallet-history-btn").addClass("active");
    $(".deposite-btn").removeClass("active");
    $(".withdraw-btn").removeClass("active");
    $(".wallet-modal").addClass("history");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});
