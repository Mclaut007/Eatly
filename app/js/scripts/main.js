// Шаблон, если будут нужны будут нужны разные стили для ПК и мобильных устройств (с тачпадом)

// "use strict";

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// if (isMobile.any()) {
//   document.body.classList.add("_touch");

// } else {
//   document.body.classList.add("_pc");
// }

// ============== анимация меню-бургер ============= //

const menuButtonOpen = document.querySelector(".header__menu-button-open");
const headerMenu = document.querySelector(".header__menu");
const headerLogo = document.querySelector(".header__logo");
const body = document.body;

headerLogo.addEventListener("click", menuClose);
headerMenu.addEventListener("click", menuClose);
menuButtonOpen.addEventListener("click", menuOpen);

function menuOpen(event) {
  this.classList.toggle("_menu-open");
  headerMenu.classList.toggle("_menu-open");
  body.classList.toggle("_lock");
}

function menuClose(event) {
  if (
    event.target.tagName === "A" ||
    event.target.tagName === "BUTTON" ||
    this === headerLogo
  ) {
    menuButtonOpen.classList.remove("_menu-open");
    headerMenu.classList.remove("_menu-open");
    body.classList.remove("_lock");
  }
}

// const mediaQuery0 = window.matchMedia('(min-width: 768px)')
// function handleTabletChange(e) {
//   if (e.matches) {
//     console.log('Media Query Matched!')
//   }
// }
// mediaQuery.addEventListener('change', handleTabletChange)
// handleTabletChange(mediaQuery)

// ========= Restaurants ======== //
// Определяем, сколько карточек our top-restaurants выводить на определенных разрешениях (НЕ СДЕЛАНО). Плюс показать/скрыть все карточки при клике по кнопке View All(Hide) //

const restaurantsItemsAll = document.querySelectorAll(".restaurants__items");
const restaurantsViewAll = document.querySelectorAll(".restaurants__view-all");

function hideSomeRestaurantsCards() {
  if (restaurantsItemsAll.length > 0) {
    for (let i = 0; i < restaurantsItemsAll.length; i++) {
      const restaurantItemAll =
        restaurantsItemsAll[i].querySelectorAll(".restaurant__item");
      for (let i = 3; i < restaurantItemAll.length; i++) {
        restaurantItemAll[i].classList.add("_hidden");
      }
    }
  }
}

hideSomeRestaurantsCards();

for (let i = 0; i < restaurantsViewAll.length; i++) {
  restaurantsViewAll[i].addEventListener("click", showHideRestaurants);
}

function showHideRestaurants(event) {
  event.preventDefault();
  const restaurantItemAll =
    event.target.previousElementSibling.querySelectorAll(".restaurant__item");
  for (let i = 3; i < restaurantItemAll.length; i++) {
    restaurantItemAll[i].classList.toggle("_hidden");
    if (restaurantItemAll[i].classList.contains("_hidden")) {
      event.target.innerText = "View All";
    } else {
      event.target.innerText = "Hide";
    }
  }
}

// ============== Dishes ============== //
// Определяем, сколько карточек dishes выводить на определенных разрешениях (на ПК - 5 карточек, на мобильном - 4) (НЕ СДЕЛАНО). Плюс показать/скрыть все карточки при клике по кнопке View All(Hide) //

const dishesItemsAll = document.querySelectorAll(".dishes__items");
const dishesViewAll = document.querySelectorAll(".dishes__view-all");
// let amountDishesCards;

// const mediaQuery0 = window.matchMedia("(max-width: 57.49875rem)");
// function changeDishesAmount(e) {
//   if (e.matches) {
//     amountDishesCards = 4;
//   } else {
//     amountDishesCards = 5;
//   }
//   hideSomeDishesCards();
// }
// mediaQuery0.addEventListener("change", changeDishesAmount);
// changeDishesAmount(mediaQuery0);

function hideSomeDishesCards() {
  if (dishesItemsAll.length > 0) {
    for (let i = 0; i < dishesItemsAll.length; i++) {
      const dishesItemAll = dishesItemsAll[i].querySelectorAll(".dishes__item");
      for (let i = 5; i < dishesItemAll.length; i++) {
        dishesItemAll[i].classList.add("_hidden");
      }
    }
  }
}

hideSomeDishesCards();

for (let i = 0; i < dishesViewAll.length; i++) {
  dishesViewAll[i].addEventListener("click", showHideDishes);
}

function showHideDishes(event) {
  event.preventDefault();
  const dishesItemAll =
    event.target.previousElementSibling.querySelectorAll(".dishes__item");
  for (let i = 5; i < dishesItemAll.length; i++) {
    dishesItemAll[i].classList.toggle("_hidden");
    if (dishesItemAll[i].classList.contains("_hidden")) {
      event.target.innerText = "View All";
    } else {
      event.target.innerText = "Hide";
    }
  }
}

// ============== Swiper Testimonials ============= //

const swiper = new Swiper(".testimonials__swiper", {
  loop: true,
  slidesPerView: "auto",
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  spaceBetween: 25,
  breakpoints: {
    768: {
      spaceBetween: 33,
    },
    920: {
      spaceBetween: 46,
    },
  },
});

// ====== Сокращаем placeholder в input subscribe ====== //

const subscribeInput = document.querySelector(".subscribe__input");

const mediaQuery = window.matchMedia("(max-width: 25rem)");
function changePlaceholderLength(e) {
  if (e.matches) {
    subscribeInput.placeholder = "Email Address";
  } else {
    subscribeInput.placeholder = "Enter Your Email Address";
  }
}
mediaQuery.addEventListener("change", changePlaceholderLength);
changePlaceholderLength(mediaQuery);

// ===== Перемещаем элементы в футере в другое место  ===== //

const footerLogo = document.querySelector(".footer__logo");
const footerSocialMedia = document.querySelector(".footer__social-media");
// const footerMenu = document.querySelector(".footer__menu");
const footerBottom = document.querySelector(".footer__bottom");

const mediaQuery2 = window.matchMedia("(max-width: 35.99875rem)");
function footerMoveElements(e) {
  if (e.matches) {
    footerLogo.insertAdjacentElement("afterend", footerSocialMedia);
  } else {
    footerBottom.insertAdjacentElement("beforeend", footerSocialMedia);
  }
}
mediaQuery2.addEventListener("change", footerMoveElements);
footerMoveElements(mediaQuery2);
