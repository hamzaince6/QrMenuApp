const mainSwiper = new Swiper('.main-swiper-container', {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var gallerySliders = document.querySelectorAll('.gallery-container');

gallerySliders.forEach(function (slider, index) {
  var paginationClass = 'custom-pagination-' + index;

  // Pagination container'ı bul
  var paginationContainer = slider.querySelector('.swiper-pagination');
  paginationContainer.classList.add(paginationClass);

  // Swiper oluştur
  var innerSlider = new Swiper(slider, {
    loop: true,
    autoplay: false,
    spaceBetween: 8,
    speed: 600,
    grabCursor: true,
    pagination: {
      el: '.' + paginationClass,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
      effect: 'slide',
    },
  });

  // Mouse hareketini dinle
  slider.addEventListener('mousemove', function (event) {
    var sliderRect = slider.getBoundingClientRect();
    var mouseX = event.clientX - sliderRect.left;
    var sliderWidth = sliderRect.width;

    // Solda mı sağda mı kontrol et
    if (mouseX < sliderWidth / 2) {
      if (innerSlider.autoplay.running) {
        innerSlider.autoplay.stop();
      }
      innerSlider.slidePrev();
    } else {
      if (innerSlider.autoplay.running) {
        innerSlider.autoplay.stop();
      }
      innerSlider.slideNext();
    }
  });

  // Mouse girdiğinde autoplay başlat
  slider.addEventListener('mouseenter', function () {
    innerSlider.params.autoplay = { delay: 500 };
    innerSlider.autoplay.start();
  });

  // Mouse çıktığında autoplay durdur
  slider.addEventListener('mouseleave', function () {
    innerSlider.autoplay.stop();
  });
});




