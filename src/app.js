// swiper
const swiper = new Swiper('.swiper', {

  centeredSlides: false,
  slidesPerView: 3,
  spaceBetween: 19,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1200: {
      slidesPerView: '3',
      centeredSlides: true,
    },

    580: {
      slidesPerView: 'auto',
      centeredSlides: true,
    }
  },
});