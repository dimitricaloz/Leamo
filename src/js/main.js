import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var button = document.querySelector(".burger-menu");
var menu = document.querySelector(".menu");
var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);
