if (document.querySelector('.friends__swiper')) {
   new Swiper('.friends__swiper', {

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      observer: true,
      observeParents: true,
      //Включение/отключение
      //перетаскивания слайдов на ПК
      //  simulateTouch: true,
      //чувствительность свайпа 0-отключение на всех устройствах
      touchRatio: 1,
      //Угол срабатывания свайпа / перетаскивания
      tiuchAngle: 45,
      //курсор перетаскивания - рука
      grabCursur: true,

      //Переключение при клике на слайд
      slideToClickedSlide: true,

      //количество слайдов для показа
      slidesPerView: 3,

      //отключение функционала
      //если слайдов меньше чем нужно
      watchOverflow: true,

      //отступ между слайдами
      spaceBetween: 90,

      //количество пролистываемых слайдов
      slidesPerGroup: 1,

      //бесконечная прокрутка
      loop: true,

      //количество дублирующих слайдов
      //loopedSlides: 3,
      loopAdditionalSlides: 3,

      //сентрирование слайда
      //centeredSlides: true,

      //стартовый слайд 
      InitialSlide: 1,

      //автоплай
      /*
            autoplay: {
               //пауза между прокруткой
               delay: 1000,
               //закончить на последнем слайде
               stopOnLastSlide: true,
               //отключить после ручного переключения
               disableOnInteraction: false,
            },
      */
      //скорость переключения слайдов
      speed: 800,

      //параллакс-эффект
      //  parallax: true,
      //  preloadImages: false,

      on: {
         lazyImageReady: function () {
            ibg();
         },
      },
      //брейкпоинт

      breakpoints: {
         319: {
            slidesPerView: 1,
            spaceBetween: 15,
           centeredSlides: false,
         },

         597.98: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: false,
         },

         767.98: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          centeredSlides: false,
         },

         991.98: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
         },

         1200.98: {
            slidesPerView: 3,
            spaceBetween: 90,
            centeredSlides: false,
         },
      },

   });
}