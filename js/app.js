const swiper = new Swiper('.swiper-container', {
  slidesPerView: 5, // 5 öğe varsayılan olarak görünür
  spaceBetween: 20, // Slaytlar arasındaki boşluk
  breakpoints: {
    768: {
      slidesPerView: 5, // 768 piksel ve üstü için 5 öğe
    },
    320: {
      slidesPerView: 2, // Mobil için 2 öğe göster
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
