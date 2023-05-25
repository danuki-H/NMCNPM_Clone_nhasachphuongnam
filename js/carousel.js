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


function slideShow(slide){
  let btnCarouselPrev = document.querySelector(slide.btnControl.prev);
  let btnCarouselNext = document.querySelector(slide.btnControl.next);
  let translateX = 0;
  let translateXVelocity = slide.velocity;
  let carouselSlider = document.querySelector(slide.wraper);
  let countSlide = carouselSlider.querySelectorAll(slide.slide).length;
  let countSlideDisplay = slide.displaySlide;
  btnCarouselNext.addEventListener('click', () => {
    translateX -= translateXVelocity;
    if(translateX < -1*(translateXVelocity*countSlide -translateXVelocity*countSlideDisplay)){
      translateX = 0;
    }
    carouselSlider.style.transform = `translateX(${translateX}px)`;
  });
  btnCarouselPrev.addEventListener('click', () => {
    translateX += translateXVelocity;
    if(translateX > 0){
      translateX = -1*(translateXVelocity*countSlide -translateXVelocity*countSlideDisplay);
    }
    carouselSlider.style.transform = `translateX(${translateX}px)`;
  });
}
///
let slide1 = {
  btnControl: {
    next:".btn-carousel-next",
    prev:".btn-carousel-prev"
  },
  wraper: ".carousel-category-1",
  slide: ".product-item",
  velocity: 238,
  displaySlide: 5
}
slideShow(slide1);