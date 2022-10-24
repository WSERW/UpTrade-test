// const slides = document.querySelectorAll('.partners__carusel_item')
// slides.forEach(slide=>{
//     slide.dataset['swiper-autoplay'] = "2000"
// })
const swiper = new Swiper('.partners__carusel', {
    slidesPerView: 'auto',
    simulateTouch: false,
    speed: 3000,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});


