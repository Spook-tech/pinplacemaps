// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let navigation = document.querySelector(".navigation");
  let links = document.querySelectorAll(".navigation__link");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      burgerButton.classList.remove("burger--active");
      navigation.classList.remove("navigation--active");
      console.log("link", link);
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $("#MainContent"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }
});

//

//search
function toggleSearch() {
  const searchOpen = document.querySelector(".search__open");
  const searchForm = document.querySelector(".aws-container");
  searchOpen.classList.toggle("search--close");
  searchForm.classList.toggle("search--active");
}

// Закрытие мини-корзины при клике вне области
document.addEventListener("click", function (event) {
  const searchForm = document.querySelector(".aws-container");
  const searchOpen = document.querySelector(".icon.search__open");
  if (
    !searchForm.contains(event.target) &&
    !searchOpen.contains(event.target)
  ) {
    searchForm.classList.remove("search--active");
    searchOpen.classList.remove("search--close");
  }
});
//search

//
document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы меню с подменю
  const menuItems = document.querySelectorAll(".menu-item-has-children");

  // Обрабатываем наведение на каждый элемент меню
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Находим подменю внутри текущего элемента
      const submenu = this.querySelector(".sub-menu");

      // Если подменю существует, показываем его
      if (submenu) {
        fadeIn(submenu);
      }
    });

    item.addEventListener("mouseleave", function () {
      // Находим подменю внутри текущего элемента
      const submenu = this.querySelector(".sub-menu");

      // Если подменю существует, скрываем его
      if (submenu) {
        fadeOut(submenu);
      }
    });
  });

  // Закрытие подменю при клике вне области навигации
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu-item-has-children")) {
      // Закрываем все подменю
      document.querySelectorAll(".sub-menu.show").forEach((submenu) => {
        fadeOut(submenu);
      });
    }
  });

  // Функция для анимации fadeIn
  function fadeIn(element) {
    element.style.display = "flex"; // Или любой другой стиль отображения
    setTimeout(() => {
      element.classList.add("show");
    }, 10);
  }

  // Функция для анимации fadeOut
  function fadeOut(element) {
    element.classList.remove("show");
    setTimeout(() => {
      element.style.display = "none";
    }, 300); // Тайм-аут соответствует длительности анимации
  }
});

//

//swiper
document.addEventListener("DOMContentLoaded", function () {
  // Функция для инициализации слайдера
  function initSwiper(swiperElement) {
    new Swiper(swiperElement, {
      observer: true,
      observeParents: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, // Сделает скроллбар перетаскиваемым
      },
      spaceBetween: 24,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        561: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Инициализация слайдера "customer"
  if (document.querySelector("#product")) {
    new Swiper("#product", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".product-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.4, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование текущего слайда
        },
        561: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: false, // Центрирование отключаем
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  // Инициализация слайдера "reported"
  if (document.querySelector("#reported")) {
    new Swiper("#reported", {
      observer: true,
      observeParents: true,
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование текущего слайда
        },
      },
    });
  }

  // Инициализация слайдера "reported"
  if (document.querySelector("#personalization")) {
    new Swiper("#personalization", {
      observer: true,
      observeParents: true,
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".personalization-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".personalization-button-next",
        prevEl: ".personalization-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
        },
        561: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
        },
      },
    });
  }

  if (document.querySelector("#gallery__one")) {
    new Swiper("#gallery_one", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true, // Слайдер движется в обратную сторону
      },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
        },
        560: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
        },
        768: {
          slidesPerView: 4, // Один полный слайд и куски по бокам
        },
        1024: {
          slidesPerView: 5, // Один полный слайд и куски по бокам
        },
        1281: {
          slidesPerView: 7, // Один полный слайд и куски по бокам
        },
      },
    });
  }

  // Нижний слайдер — движение влево
  if (document.querySelector("#gallery__two")) {
    new Swiper("#gallery_two", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
        },
        560: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
        },
        768: {
          slidesPerView: 4, // Один полный слайд и куски по бокам
        },
        1024: {
          slidesPerView: 5, // Один полный слайд и куски по бокам
        },
        1281: {
          slidesPerView: 7, // Один полный слайд и куски по бокам
        },
      },
    });
  }

  // Инициализация слайдера "reported"
  if (document.querySelector("#explore")) {
    const swiper = new Swiper("#explore", {
      observer: true,
      observeParents: true,
      loop: true,
      pagination: {
        el: ".explore-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".explore-button-next",
        prevEl: ".explore-button-prev",
      },
      on: {
        slideChangeTransitionEnd: function () {
          handleVideoPlayback();
          updateSlideOpacity();
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
          centeredSlides: false,
        },
        561: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
          centeredSlides: true,
        },
        1281: {
          slidesPerView: 5,
          spaceBetween: 20,
          centeredSlides: true,
        },
        1601: {
          slidesPerView: 7,
          spaceBetween: 30,
          centeredSlides: true,
        },
      },
    });

    // Функция управления воспроизведением видео
    function handleVideoPlayback() {
      const slides = document.querySelectorAll("#explore .swiper-slide");
      slides.forEach((slide) => {
        const video = slide.querySelector("video");
        const playButton = slide.querySelector(".play");
        const pauseButton = slide.querySelector(".pause");

        if (video) {
          // Активное видео начинает воспроизведение
          if (slide.classList.contains("swiper-slide-active")) {
            video.play();
            playButton.style.display = "none";
            pauseButton.style.display = "block";
          } else {
            // Неактивные видео ставим на паузу
            video.pause();
            video.currentTime = 0;
            playButton.style.display = "block";
            pauseButton.style.display = "none";
          }

          // Событие, когда видео заканчивается
          video.addEventListener("ended", () => {
            playButton.style.display = "block";
            pauseButton.style.display = "none";
          });
        }
      });
    }

    // Функция для обновления прозрачности слайдов
    function updateSlideOpacity() {
      const slides = document.querySelectorAll("#explore .swiper-slide");
      slides.forEach((slide) => {
        if (
          slide.classList.contains("swiper-slide-active") ||
          slide.classList.contains("swiper-slide-prev") ||
          slide.classList.contains("swiper-slide-next")
        ) {
          slide.style.opacity = "1"; // Полностью видимые
        } else {
          slide.style.opacity = "0.5"; // Затемненные
        }
      });
    }

    // Обработчик для кнопок воспроизведения
    document.querySelectorAll(".swiper-slide .play").forEach((button) => {
      button.addEventListener("click", (event) => {
        const slide = event.target.closest(".swiper-slide");
        const video = slide.querySelector("video");
        const playButton = slide.querySelector(".play");
        const pauseButton = slide.querySelector(".pause");

        if (video) {
          video.play();
          playButton.style.display = "none";
          pauseButton.style.display = "block";
        }
      });
    });

    // Обработчик для кнопок паузы
    document.querySelectorAll(".swiper-slide .pause").forEach((button) => {
      button.addEventListener("click", (event) => {
        const slide = event.target.closest(".swiper-slide");
        const video = slide.querySelector("video");
        const playButton = slide.querySelector(".play");
        const pauseButton = slide.querySelector(".pause");

        if (video) {
          video.pause();
          playButton.style.display = "block";
          pauseButton.style.display = "none";
        }
      });
    });

    // Обработчик для кнопок звука
    document.querySelectorAll(".swiper-slide .sound").forEach((button) => {
      button.addEventListener("click", (event) => {
        const slide = event.target.closest(".swiper-slide");
        const video = slide.querySelector("video");
        const soundOnIcon = button.querySelector(".sound-on");
        const soundOffIcon = button.querySelector(".sound-off");

        if (video) {
          // Переключаем звук для видео
          video.muted = !video.muted;

          // Обновляем видимость иконок
          if (video.muted) {
            soundOnIcon.style.display = "none";
            soundOffIcon.style.display = "block";
          } else {
            soundOnIcon.style.display = "block";
            soundOffIcon.style.display = "none";
          }
        }
      });
    });

    // Событие: при загрузке страницы все видео запускаются без звука
    window.addEventListener("load", () => {
      const videos = document.querySelectorAll("#explore video");
      videos.forEach((video) => {
        video.muted = true; // Отключаем звук

        // Добавляем обработчик события "ended" для переключения кнопок
        video.addEventListener("ended", () => {
          const slide = video.closest(".swiper-slide");
          const playButton = slide.querySelector(".play");
          const pauseButton = slide.querySelector(".pause");

          playButton.style.display = "block";
          pauseButton.style.display = "none";
        });
      });
      handleVideoPlayback();
      updateSlideOpacity();
    });
  }

  var swiper = new Swiper(".swiper-thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      561: {
        slidesPerView: 5, // Показываем 8 слайдов
        spaceBetween: 14, // Расстояние между слайдами
      },
    },
  });
  var swiper2 = new Swiper(".swipper-gallery", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
// swiper

// mark
function updateStars() {
  if (!document.querySelector(".count")) {
    return;
  }

  const count = parseFloat(document.querySelector(".count").innerText); // Получаем значение count
  const stars = document.querySelectorAll(".mark .filled"); // Находим внутренние блоки для заполнения

  stars.forEach((star, index) => {
    if (index < Math.floor(count)) {
      // Полностью закрашенные звёзды
      star.style.width = "100%";
    } else if (index === Math.floor(count)) {
      // Частично закрашенная звезда
      const percentage = (count - Math.floor(count)) * 100;
      star.style.width = `${percentage}%`;
    } else {
      // Пустые звёзды
      star.style.width = "0%";
    }
  });
}

// Вызываем функцию для обновления звёзд
updateStars();
// mark

//faq
// Находим все элементы с классом .faq-question
const faqItems = document.querySelectorAll(".faq__item");

// Добавляем обработчик события на каждый элемент
faqItems.forEach((item) => {
  const question = item.querySelector(".faq__question");
  question.addEventListener("click", () => {
    // Закрываем все ответы перед открытием нового
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Переключаем состояние (открыть/закрыть)
    item.classList.toggle("active");
  });
});
//faq

//size selector
// Скрипт для добавления активного класса
const options = document.querySelectorAll(".size-option");
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
  });
});
//size selector

//color selector
// Логика выбора цвета

//color selector

// personalization
if (document.getElementById("personalizationButton")) {
  const personalizationOpen = document.getElementById("personalizationButton");
  const personalizationClose = document.getElementById("personalizationClose");
  const personalizationSelector = document.querySelector(
    ".personalization-selector"
  );
  const personalization = document.querySelectorAll(".personalization-option");
  const nameInput = document.querySelector("#name");
  let isPersonalized = false;

  function updatePersonalization() {
    if (isPersonalized) {
      document
        .querySelector('input[type="radio"][value="Personalized"]')
        .click();
    } else {
      document.querySelector('input[type="radio"][value="Default"]').click();
    }
  }

  personalizationOpen.addEventListener("click", function () {
    personalizationSelector.classList.add("active");
  });
  personalizationClose.addEventListener("click", function () {
    personalizationSelector.classList.remove("active");
    isPersonalized = false;

    nameInput.value = "";
    personalization.forEach((opt) => opt.classList.remove("active"));

    updatePersonalization();
  });

  nameInput.addEventListener("input", (e) => {
    const value = nameInput.value;
    console.log(value);

    if (value.length > 0) {
      isPersonalized = true;
    } else {
      isPersonalized = false;
    }

    updatePersonalization();
  });

  personalization.forEach((style) => {
    style.addEventListener("click", () => {
      personalization.forEach((opt) => opt.classList.remove("active"));
      style.classList.add("active");

      isPersonalized = true;
      updatePersonalization();
    });
  });
}
// personalization

//gallery
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".gallery__container")) {
    const galleries = document.querySelectorAll(".gallery__container");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = modal.querySelector(".close");
    const body = document.body;

    galleries.forEach((galleryContainer) => {
      const galleryList = galleryContainer.querySelector(".gallery__list");
      const clonedList = galleryContainer.querySelector(
        ".gallery__list--clone"
      ); // Находим второй список вручную

      // Функция для обновления ширины элементов списка
      const updateGalleryLayout = () => {
        const containerWidth = galleryContainer.offsetWidth; // Ширина контейнера
        let itemWidth = 100;

        if (window.innerWidth >= 1024) {
          itemWidth = containerWidth / 7; // 7 слайдов на экранах более 1024px
        } else if (window.innerWidth >= 768) {
          itemWidth = containerWidth / 5; // 5 слайдов на экранах от 768px до 1024px
        } else if (window.innerWidth >= 480) {
          itemWidth = containerWidth / 3; // 3 слайда на экранах от 480px до 768px
        } else {
          itemWidth = containerWidth / 2; // 2 слайда на экранах до 480px
        }

        // Обновляем ширину и позицию обоих списков
        galleryList.style.width = `${
          itemWidth * galleryList.children.length
        }px`;
        clonedList.style.width = `${itemWidth * clonedList.children.length}px`;

        [...galleryList.children, ...clonedList.children].forEach((li) => {
          li.style.width = `${itemWidth}px`;
        });

        // Перемещаем второй список, чтобы он был рядом с первым
        clonedList.style.transform = `translateX(${containerWidth}px)`;
      };

      // Запуск обновления при загрузке и изменении размера экрана
      updateGalleryLayout();
      window.addEventListener("resize", updateGalleryLayout);

      // Открытие модального окна при клике на изображение
      galleryContainer.querySelectorAll("img").forEach((img) => {
        img.addEventListener("click", () => {
          modal.style.display = "flex"; // Показать модальное окно
          modalImg.src = img.src; // Установить источник изображения
          body.classList.add("lock"); // Останавливаем анимацию
          galleryContainer
            .querySelectorAll(".gallery__list")
            .forEach((list) => {
              list.style.animationPlayState = "paused"; // Остановить анимацию
            });
        });
      });
    });

    // Закрытие модального окна
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      body.classList.remove("lock"); // Возобновляем анимацию
      galleries.forEach((galleryContainer) => {
        galleryContainer.querySelectorAll(".gallery__list").forEach((list) => {
          list.style.animationPlayState = "running"; // Возобновить анимацию
        });
      });
    });

    // Закрытие модального окна при клике вне изображения
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        body.classList.remove("lock"); // Возобновляем анимацию
        galleries.forEach((galleryContainer) => {
          galleryContainer
            .querySelectorAll(".gallery__list")
            .forEach((list) => {
              list.style.animationPlayState = "running"; // Возобновить анимацию
            });
        });
      }
    });
  }
});
//gallery

//filters
let updateReviews;
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".reviews")) {
    const reviewsList = document.querySelector(".reviews__list");
    const reviews = Array.from(reviewsList.children); // Сохраняем отзывы в массив

    const ratingButtons = document.querySelectorAll("[data-reviews-rating]");
    const sortDropdown = document.getElementById("sort-reviews");
    const paginationContainer = document.querySelector(".pagination__list");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");

    const REVIEWS_PER_PAGE = reviewsList.dataset.reviewsPerPage; // Максимальное количество отзывов на одной странице
    let currentPage = 1; // Текущая страница

    let selectedRating = "all";
    let selectedSort = "newest";

    // Функция для отображения отзывов на текущей странице
    const showPage = (filteredReviews) => {
      const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
      const endIndex = startIndex + REVIEWS_PER_PAGE;

      // Показываем только отзывы на текущей странице
      const reviewsToShow = filteredReviews.slice(startIndex, endIndex);
      reviewsList.innerHTML = "";
      reviewsToShow.forEach((review) => reviewsList.appendChild(review));

      // Обновление активной страницы и видимости кнопок
      updatePagination(filteredReviews);
    };

    // Функция для обновления кнопок пагинации
    const updatePagination = (filteredReviews) => {
      const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE);

      // Если отзывов меньше или равно REVIEWS_PER_PAGE, скрыть пагинацию
      if (filteredReviews.length <= REVIEWS_PER_PAGE) {
        paginationContainer.innerHTML = "";
        return; // Выход из функции
      }

      // Очистить текущие кнопки пагинации
      paginationContainer.innerHTML = "";

      // Добавление кнопки "Назад"
      const prevPageButton = document.createElement("li");
      prevPageButton.innerHTML = `
        <button class="prev page-numbers" ${
          currentPage === 1 ? "disabled" : ""
        }>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.95251 10.0942L8.04747 5.99926L3.95251 1.9043" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>`;
      prevPageButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          showPage(filteredReviews);
        }
      });
      paginationContainer.appendChild(prevPageButton);

      // Добавление кнопок для страниц
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("li");
        pageButton.innerHTML = `<a class="page-numbers" href="#">${i}</a>`;
        if (i === currentPage) {
          pageButton.innerHTML = `<span class="page-numbers current" aria-current="page">${i}</span>`;
        }
        pageButton.querySelector("a")?.addEventListener("click", (e) => {
          e.preventDefault();
          currentPage = i;
          showPage(filteredReviews);
        });
        paginationContainer.appendChild(pageButton);
      }

      // Добавление кнопки "Вперед"
      const nextPageButton = document.createElement("li");
      nextPageButton.innerHTML = `
        <button class="next page-numbers" ${
          currentPage === totalPages ? "disabled" : ""
        }>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.95251 10.0942L8.04747 5.99926L3.95251 1.9043" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>`;
      nextPageButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          showPage(filteredReviews);
        }
      });
      paginationContainer.appendChild(nextPageButton);
    };

    // Функция для обновления отзывов (с учетом фильтров, сортировки и пагинации)
    updateReviews = () => {
      // Фильтрация
      console.log(123);
      const filteredReviews = reviews.filter((review) => {
        if (selectedRating === "all") return true;
        const ratingElement = review.querySelector(".rating__star");
        const rating = ratingElement ? ratingElement.children.length : 0;
        return rating === parseInt(selectedRating, 10);
      });

      // Сортировка
      if (selectedSort === "newest") {
        filteredReviews.sort((a, b) => {
          const dateA = new Date(a.querySelector(".date").textContent);
          const dateB = new Date(b.querySelector(".date").textContent);
          return dateB - dateA; // Новейшие идут первыми
        });
      } else if (selectedSort === "featured") {
        filteredReviews.sort((a, b) => {
          const ratingA = a.dataset.rating;
          const ratingB = b.dataset.rating;
          return ratingB - ratingA; // Новейшие идут первыми
        });
      }

      // Сброс страницы на первую после фильтрации/сортировки
      currentPage = 1;

      // Обновление отображения
      showPage(filteredReviews);
    };

    // События на изменение фильтров и сортировки
    ratingButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const newValue = button.dataset.reviewsRating;

        if (button.classList.contains("green")) {
          button.classList.remove("green");
          selectedRating = "all";
          updateReviews();
          return;
        }

        ratingButtons.forEach((button) => {
          button.classList.remove("green");
        });

        selectedRating = newValue;
        button.classList.add("green");

        updateReviews();
      });
    });

    // Первоначальное обновлени
    updateReviews();

    const filterMenus = document.querySelectorAll(".filters__button");

    filterMenus.forEach((menu) => {
      const title = menu.querySelector(".filters__button-value");
      const optionButtons = menu.querySelectorAll(
        ".filters__button-variants button"
      );


      optionButtons.forEach((subbutton) => {
      console.log(subbutton)
        subbutton.addEventListener("click", () => {
          const sortType = subbutton.dataset.filter;

          if (sortType) {
            selectedSort = sortType;
            updateReviews();
          }
        });
      });
    });
  }

  const filterMenus = document.querySelectorAll(".filters__button");

  // Закрытие всех активных меню
  const closeAllMenus = () => {
    filterMenus.forEach((menu) => menu.classList.remove("active"));
  };

  // Обработчик кликов на странице
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = event.target.closest(".filters__button");
    if (!isClickInsideMenu) {
      closeAllMenus();
    }
  });

  filterMenus.forEach((menu) => {
    const title = menu.querySelector(".filters__button-value");
    const optionButtons = menu.querySelectorAll(
      ".filters__button-variants button"
    );

    // Обработчик клика по основному меню
    menu.addEventListener("click", (event) => {
      event.stopPropagation(); // Не даем событию подняться вверх
      const isActive = menu.classList.contains("active");
      closeAllMenus();
      if (!isActive) {
        menu.classList.add("active");
      }
    });

    // Обработчик кликов по вариантам сортировки
    optionButtons.forEach((subbutton) => {
      subbutton.addEventListener("click", () => {
        const newText = subbutton.dataset.selectedText;

        if (newText) {
          title.textContent = newText;
        }

        menu.classList.remove("active"); // Закрываем меню после выбора
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, есть ли в URL якорь #FAQ при загрузке страницы
  if (window.location.hash === "#FAQ") {
    scrollToFAQ();
  }

  // Находим все ссылки с классом .link
  const faqLinks = Array.from(document.querySelectorAll("a.link")).filter(
    (link) => link.getAttribute("href") === "/#FAQ"
  );

  faqLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Проверяем, что мы на главной странице
      if (window.location.pathname === "/") {
        // Отключаем переход по ссылке
        event.preventDefault();

        // Скроллим к блоку FAQ
        scrollToFAQ();
      }
    });
  });

  function scrollToFAQ() {
    // Находим элемент FAQ
    const faqElement = document.getElementById("FAQ");
    const headerElement = document.querySelector("header.header");

    if (faqElement) {
      // Вычисляем высоту хедера
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;

      // Вычисляем конечную позицию скролла
      const scrollPosition =
        faqElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        30;

      // Скроллим к элементу с учетом высоты хедера
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }

function initSortSelect() {
document.querySelectorAll('.facets-container .filters__button-variants .button').forEach(button => {
  button.addEventListener('click', function () {
    // Получаем значение, которое нужно установить в select
    const filterValue = button.dataset.filter;

    // Находим селект
    const selectElement = document.querySelector('#SortBy');

    if (selectElement) {
      // Устанавливаем значение в select
      selectElement.value = filterValue;

      // Создаем и инициируем событие change, чтобы сработали слушатели
      const event = new Event('input', { bubbles: true });
      selectElement.dispatchEvent(event);
    }
  });
});
}


  initSortSelect();
});
