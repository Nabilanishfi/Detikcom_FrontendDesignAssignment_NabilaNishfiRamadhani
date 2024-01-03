const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // centeredSlides: true,
    loop: true,

    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 300,
      disableOnInteraction: false,
    },


    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    slidesPerView:6,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

function handleNextSection(section) {
  const nextSection = document.querySelector(`.section-${section}`);
  nextSection.scrollIntoView();
}

