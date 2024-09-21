const mainSwiper = new Swiper('.main-swiper-container', {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const gallerySliders = document.querySelectorAll('.gallery-container');

gallerySliders.forEach(function (slider, index) {
  const paginationClass = 'custom-pagination-' + index;

  const paginationContainer = slider.querySelector('.swiper-pagination');
  paginationContainer.classList.add(paginationClass);

  const innerSlider = new Swiper(slider, {
    loop: true,
    autoplay: {
      delay: 5000, // Her 5 saniyede bir geçiş
      disableOnInteraction: false,
    },
    spaceBetween: 8,
    speed: 800,
    grabCursor: true,
    pagination: {
      el: '.' + paginationClass,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });

  let isMoving = false;

  // Mobilde hover kaldır, sadece otomatik oynat
  if (window.matchMedia("(max-width: 768px)").matches) {
    innerSlider.params.autoplay = { delay: 5000, disableOnInteraction: false };
  } else {
    // Masaüstü için mouse hareketi ile geçiş
    slider.addEventListener('mousemove', function (event) {
      if (isMoving) return;

      const sliderRect = slider.getBoundingClientRect();
      const mouseX = event.clientX - sliderRect.left;
      const sliderWidth = sliderRect.width;

      isMoving = true;
      if (mouseX < sliderWidth / 2) {
        innerSlider.slidePrev();
      } else {
        innerSlider.slideNext();
      }

      setTimeout(() => {
        isMoving = false;
      }, 300);
    });

    slider.addEventListener('mouseenter', function () {
      innerSlider.autoplay.start();
    });

    slider.addEventListener('mouseleave', function () {
      innerSlider.autoplay.stop();
    });
  }

  // Slidera tıklama olayı ekle
  slider.addEventListener('mousedown', function (event) {
    event.preventDefault();
  });
});




const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

// Tüm görseller için tıklama olayını ekle
document.querySelectorAll('.product-image').forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = "flex"; // Modalı aç
    modalImg.src = this.src; // Tıklanan görseli modalda göster
  });
});

// Modalı kapatma olayı
closeModal.addEventListener('click', function() {
  modal.style.display = "none"; // Modalı gizle
});

// Modal dışına tıklanırsa kapatma
modal.addEventListener('click', function(event) {
  // Eğer tıklanan öğe modalın kendisi ise modalı kapat
  if (event.target === modal) {
    modal.style.display = "none"; // Modalı gizle
  }
});

// Escape tuşuna basıldığında modalı kapatma
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.style.display = "none"; // Modalı gizle
  }
});







