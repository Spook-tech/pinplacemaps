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
        click() {
            if (window.innerWidth < 761) {
              console.log('index', this.clickedIndex);
              swiper.slideTo(this.clickedIndex);    
            }
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1.25,
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
  const swiperInstance = document.querySelector("#explore").swiper; // Получаем экземпляр Swiper
  
  slides.forEach((slide) => {
    const video = slide.querySelector("video");
    const playButton = slide.querySelector(".play");
    const pauseButton = slide.querySelector(".pause");

      slide.addEventListener("mouseenter", () => {
        if (slide.classList.contains("swiper-slide-active")) return;

        video.play();

        playButton.style.display = "none";
        pauseButton.style.display = "block";

        console.log(pauseButton)
      });

      slide.addEventListener("mouseleave", () => {
        if (slide.classList.contains("swiper-slide-active")) return;

        video.pause();
        video.currentTime = 0;

                  playButton.style.display = "block";
          pauseButton.style.display = "none";

      });
    
    if (video) {
      if (slide.classList.contains("swiper-slide-active")) {
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";

        if (window.innerWidth < 761) {
          const button = slide.querySelector(".sound");
          if (button) {
            const soundOnIcon = button.querySelector(".sound-on");
            const soundOffIcon = button.querySelector(".sound-off");

            // Определение направления свайпа
            const currentIndex = swiperInstance.activeIndex;
            const previousIndex = swiperInstance.previousIndex;

            let relevantSlide;
            if (currentIndex > previousIndex || (currentIndex === 0 && previousIndex === swiperInstance.slides.length - 1)) {
              // Свайп вперед
              relevantSlide = swiperInstance.slides[previousIndex];
            } else {
              // Свайп назад
              relevantSlide = swiperInstance.slides[(currentIndex + 1) % swiperInstance.slides.length];
            }

            const relevantVideo = relevantSlide.querySelector("video");

            // Логика переключения звука
            if (relevantVideo) {
              if (relevantVideo.muted) {
                video.muted = true;
                soundOnIcon.style.display = "none";
                soundOffIcon.style.display = "block";
              } else{
                video.muted = false;
                soundOnIcon.style.display = "block";
                soundOffIcon.style.display = "none";
              }
            }
          }
        }
      } else {
        video.pause();
        video.currentTime = 0;
        playButton.style.display = "block";
        pauseButton.style.display = "none";
      }

      video.addEventListener("ended", () => {
        playButton.style.display = "block";
        pauseButton.style.display = "none";
      }, { once: true });
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

document.querySelectorAll(".swiper-slide .sound").forEach((button) => {
  const slide = button.closest(".swiper-slide");
  if (!slide) return; // Проверка на наличие .swiper-slide родителя

  const video = slide.querySelector("video");
  const soundOnIcon = button.querySelector(".sound-on");
  const soundOffIcon = button.querySelector(".sound-off");

  if (window.innerWidth < 761) {
    video.muted = true;
    soundOnIcon.style.display = "none";
    soundOffIcon.style.display = "block";
  }
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

    let loaded = 0;

    const ratingButtons = document.querySelectorAll("[data-reviews-rating]");
    const sortDropdown = document.getElementById("sort-reviews");
    const paginationContainer = document.querySelector(".pagination__list");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");

    const REVIEWS_PER_PAGE = 5;
    let currentPage = 1; // Текущая страница

    let selectedRating = "all";
    let selectedSort = "newest";

    const showPage = (filteredReviews) => {
      const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
      const endIndex = startIndex + REVIEWS_PER_PAGE;
    
      // Показываем только отзывы на текущей странице
      const reviewsToShow = filteredReviews.slice(startIndex, endIndex);
      reviewsList.innerHTML = ""; // Очистка списка отзывов
      reviewsToShow.forEach((review) => reviewsList.appendChild(review));
    
      // Обновление активной страницы и видимости кнопок
      updatePagination(filteredReviews);

      if (loaded !== 0) {
        const element = document.querySelector('.reviews');
        const y = element.getBoundingClientRect().top + window.scrollY;      
        
        window.scroll({
          top: y - 150,
          behavior: 'instant' // Или 'smooth' для плавного скролла
        });
      }
      loaded++;
    };


    // Функция для обновления кнопок пагинации
const updatePagination = (filteredReviews) => {
  const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE);

  if (filteredReviews.length <= REVIEWS_PER_PAGE) {
    paginationContainer.innerHTML = "";
    return;
  }

  paginationContainer.innerHTML = "";

  // Кнопка "Назад"
  const prevPageButton = document.createElement("li");
  prevPageButton.innerHTML = `
    <button class="prev page-numbers" ${currentPage === 1 ? "disabled" : ""}>
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

  // Максимум 10 страниц
  const MAX_VISIBLE_PAGES = 10;
  let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
  let endPage = startPage + MAX_VISIBLE_PAGES - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("li");

    if (i === currentPage) {
      pageButton.innerHTML = `<span class="page-numbers current" aria-current="page">${i}</span>`;
    } else {
      pageButton.innerHTML = `<a class="page-numbers" href="#">${i}</a>`;
      pageButton.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        showPage(filteredReviews);
      });
    }

    paginationContainer.appendChild(pageButton);
  }

  // Кнопка "Вперёд"
  const nextPageButton = document.createElement("li");
  nextPageButton.innerHTML = `
    <button class="next page-numbers" ${currentPage === totalPages ? "disabled" : ""}>
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
    const updateReviews = () => {
      const filteredReviews = reviews.filter((review) => {
        if (selectedRating.includes("all")) return true;

        const ratingElement = review.querySelector(".rating__star");
        const rating = ratingElement ? ratingElement.children.length : 0;
        return selectedRating.includes(String(rating));
      });

      // Сортировка
      if (selectedSort === "newest") {
        filteredReviews.sort((a, b) => {
          const dateA = new Date(a.querySelector(".date").textContent);
          const dateB = new Date(b.querySelector(".date").textContent);
          return dateB - dateA;
        });
      } else if (selectedSort === "featured") {
        filteredReviews.sort((a, b) => {
          const ratingA = a.dataset.rating;
          const ratingB = b.dataset.rating;
          return ratingB - ratingA;
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
        const ratingValue = button.dataset.reviewsRating;

        // Переключаем класс 'green' для выбранной кнопки
        button.classList.toggle("green");

        // Собираем все активные рейтинги
        const activeRatings = Array.from(ratingButtons)
          .filter((btn) => btn.classList.contains("green"))
          .map((btn) => btn.dataset.reviewsRating);

        // Обновляем выбранные рейтинги или сбрасываем на "all", если ничего не выбрано
        selectedRating = activeRatings.length ? activeRatings : ["all"];

        // Обновляем отображение отзывов
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
});


const filterSearchBtn = document.getElementById('filter_search_btn');
const filterMenus = document.querySelectorAll(".filters__button");

// Закрытие всех активных меню
const closeAllMenus = () => {
  filterMenus.forEach((menu) => menu.classList.remove("active"));
};

// Обработчик кликов на body
document.body.addEventListener('click', function(event) {
  const clickedMenu = event.target.closest(".filters__button");
  
  // Обработка кликов по кнопке #filter_search_btn
  if (event.target.closest('#filter_search_btn')) {
    if (event.target.classList.contains('button') && event.target.closest('.filters__button-variants')) {
      const selectElement = document.getElementById('SortBy');
      const filterValue = event.target.getAttribute('data-filter');
      const title = event.target.closest('#filter_search_btn').querySelector(".filters__button-value span");

      const newText = event.target.dataset.selectedText;

      if (newText) {
        title.textContent = newText;
      }


      // Устанавливаем соответствующее значение в селект
      selectElement.value = filterValue;

      // Вызываем событие input для селекта
      selectElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  // Обработка кликов по меню фильтров
  if (clickedMenu) {
    event.stopPropagation(); // Останавливаем всплытие события
    const isActive = clickedMenu.classList.contains("active");
    closeAllMenus();
    if (!isActive) {
      clickedMenu.classList.add("active");
    }
  } else {
    // Закрываем все активные меню при клике вне них
    closeAllMenus();
  }
});

// Устанавливаем обработчики для кнопок внутри меню
filterMenus.forEach((menu) => {
  const title = menu.querySelector(".filters__button-value");
  const optionButtons = menu.querySelectorAll(".filters__button-variants button");

  // Обработчик кликов по вариантам сортировки
  optionButtons.forEach((subbutton) => {
    subbutton.addEventListener("click", (event) => {
      event.stopPropagation(); // Останавливаем всплытие события
      const newText = subbutton.dataset.selectedText;

      if (newText) {
        title.textContent = newText;
      }

      menu.classList.remove("active"); // Закрываем меню после выбора
    });
  });
});

// скрипт
document.querySelectorAll('.reviews__images img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = img.src;
    modal.style.display = 'flex';
  });
});

document.querySelector('.modal__close').addEventListener('click', () => {
  document.getElementById('image-modal').style.display = 'none';
});

document.getElementById('image-modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
});

const trigger = document.querySelector('[data-show-guide]');
const popup = document.getElementById('mapGuide');
const closeBtn = popup.querySelector('.popup-close');


window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
  if (e.target.closest('[data-show-guide]')) {
      popup.classList.remove('hidden');
  }
  if (e.target.closest('.popup-close')) {
    popup.classList.add('hidden');
  }
});

            if (document.getElementById('color-palette')) {
              const buttonPalette = document.getElementById('color-palette');
              const colorPalette = document.querySelector('.color-options');
              const colorOptions = document.querySelectorAll('.color-option');
              const selectedColorName = document.getElementById('selected-color-name');
              const selectedColorCircle = document.getElementById('selected-color-circle');

              const currentColorElement = document.querySelector('#current-color-hidden');

              if (currentColorElement.dataset.color) {
                selectedColorCircle.style.backgroundColor = currentColorElement.dataset.color;
              }

              buttonPalette.addEventListener('click', function () {
                this.classList.toggle('active'); // Работает корректно, так как используется обычная функция
                colorPalette.classList.toggle('show');
              });

              colorOptions.forEach(option => {
                option.addEventListener('click', () => {
                  // Удаляем класс active со всех опций
                  colorOptions.forEach(opt => opt.classList.remove('active'));

                  // Добавляем active к выбранной
                  option.classList.add('active');

                  // Обновляем текст и круг выбранного цвета
                  const color = option.querySelector('.swatch').style.cssText;
                  console.log(color);
                  const match = color.match(/rgb\(\d+\s\d+\s\d+\)/)[0];


                  const colorName = option.getAttribute('data-color');
                  selectedColorName.textContent = colorName;
                  if (match){
                    currentColorElement.dataset.color = match;
                    selectedColorCircle.style.backgroundColor = match;
                  }
                });
              });
            }
