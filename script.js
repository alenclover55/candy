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
  showPopup(".withdraw-modal");
});
// $(".withdraw-btn").click(() => {
//   $(".popup").hide();
//   showPopup(".withdraw-modal");
// });
// $(".deposite-btn").click(() => {
//   $(".popup").hide();
//   showPopup(".deposite-modal");
// });

$(".wallet-history-btn").click(() => {
  $(".popup").hide();
  showPopup(".wallet-history-modal");
});

$(document).ready(function () {
  // Обработчик клика для кнопки "Пополнения"
  $("#deposits-btn").click(function () {
    $(".withdraw-history").hide(); // Скрыть таблицу выводов
    $(".deposite-history").fadeIn(); // Показать таблицу пополнений
    $(this).addClass("active"); // Добавить класс активной кнопке
    $("#withdrawals-btn").removeClass("active"); // Удалить класс у другой кнопки
  });

  // Обработчик клика для кнопки "Выводы"
  $("#withdrawals-btn").click(function () {
    $(".deposite-history").hide(); // Скрыть таблицу пополнений
    $(".withdraw-history").fadeIn(); // Показать таблицу выводов
    $(this).addClass("active"); // Добавить класс активной кнопке
    $("#deposits-btn").removeClass("active"); // Удалить класс у другой кнопки
  });
});

$(document).ready(function () {
  // Показываем/скрываем выпадающий список при клике на заголовок
  $(".provider-select-header").click(function () {
    $(".provider-select-body").slideToggle(); // Плавно показываем/скрываем тело
  });

  // Обработчик клика для опций
  $(".provider-option").click(function () {
    const selectedValue = $(this).data("value"); // Получаем значение выбранного провайдера
    $(".select-value").text($(this).text()); // Обновляем текст заголовка
    $(".provider-select-body").slideUp(); // Скрываем выпадающий список // Можно использовать для дальнейшей логики
  });

  // Закрытие списка при клике вне его
  $(document).click(function (event) {
    if (!$(event.target).closest(".providers-select-wrapper").length) {
      $(".provider-select-body").slideUp(); // Скройте список, если кликнули вне
    }
  });
});

$(document).ready(function () {
  // Скрываем тело FAQ по умолчанию
  $(".faq-item-body").hide();

  // Обработчик клика для заголовка FAQ
  $(".faq-item-header").click(function () {
    // Находим тело соответствующего элемента FAQ
    const body = $(this).next(".faq-item-body");

    // Переключаем видимость тела FAQ
    body.slideToggle(300); // Плавное открытие/закрытие

    // Можно добавить класс для изменения иконки, если нужно
    $(this).find("svg").toggleClass("active"); // Пример изменения класса
  });
});
$(document).ready(function () {
  // Открытие меню по клику на кнопку меню
  $(".menu-btn").click(function (e) {
    e.preventDefault(); // Предотвращаем переход по ссылке
    console.log("Menu button clicked");
    $(".mobile-menu-opened").toggleClass("open"); // Переключаем класс 'open'
  });

  // Закрытие меню по клику на кнопку закрытия
  $(".menu-close-btn").click(function () {
    $(".mobile-menu-opened").removeClass("open"); // Убираем класс 'open'
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest(
        ".mobile-menu-opened, .menu-btn, .menu-close-btn"
      ).length
    ) {
      $(".mobile-menu-opened").removeClass("open"); // Скрываем меню
    }
  });
});
$(document).ready(function () {
  // Скрываем все блоки, кроме deposite-block
  $(".withdraw-block").hide(); // Скрываем блок вывода

  // Обработчик клика для кнопки "Пополнение"
  $(".deposite-btn").click(function () {
    $(".withdraw-block").hide(); // Скрываем блок вывода
    $(".deposite-block").fadeIn(); // Показываем блок пополнения
    $(".deposite-btn").addClass("active"); // Добавляем активный класс к кнопке пополнения
    $(".withdraw-btn").removeClass("active"); // Убираем активный класс от кнопки вывода
  });

  // Обработчик клика для кнопки "Вывод"
  $(".withdraw-btn").click(function () {
    $(".deposite-block").hide(); // Скрываем блок пополнения
    $(".withdraw-block").fadeIn(); // Показываем блок вывода
    $(".withdraw-btn").addClass("active"); // Добавляем активный класс к кнопке вывода
    $(".deposite-btn").removeClass("active"); // Убираем активный класс от кнопки пополнения
  });
});
