const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    rewind: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
  });
  swiper.autoplay.start();