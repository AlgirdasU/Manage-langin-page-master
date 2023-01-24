"use strickt";

const slides = document.querySelectorAll(".slide");
const header = document.querySelector(".header");
const btnMenu = document.querySelector(".btn-menu");
const email = document.querySelector(".footer__email");
const errorMsg = document.querySelector(".footer__invalid-email-message");
const shadow = document.querySelector('.shadow');

//TOGGLE MENU
btnMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  shadow.classList.toggle('mobile-shadow');

});

// POSITIONING SLIDES
const slidePosition = () => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${i * 100}%)`;
  });
};
slidePosition();

// SLIDES MOVEMENT
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    600: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 1.8,
    },
    950: {
      slidesPerView: 3,
    },
  },
  mousewheel: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },
});

// CHECK AN EMAIL
email.addEventListener("input", () => {
  email.value &&
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ? (errorMsg.textContent = "")
    : (errorMsg.textContent = "Please insert a valid email");
});




