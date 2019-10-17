$(document).ready(function() {

//typed 
  var typed = new Typed(".hero-typed-text", {
      strings: [
      "низкие цены.",
       "самые оптимальные сроки разработки.",
       "чистый код и адаптивная верстка.",
       "2 месяца бесплатной техподдержки."
       ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true
  });

//slide2id - плавная прокрутка по ссылкам внутри страницы
  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
      highlightSelector:"nav a"
  });

//Owl carousel  slider
$('.portfolio').owlCarousel ({
    loop: false,
    margin: 10,
    dots: false,
  loop: true,
    margin: 10,
    dots: false,
    responsive: {
        0: {
            items: 1,
            dotsEach: 5000,
            //nav: true,
        },

        992: {
            items: 1,
            nav: false,
            //autoplay: 1000,
            //autoplaySpeed: 5000,
            //dotsEach: 5000,
            //autoplayTimeout: 12000
        },

        1200: {
            items: 2,
            nav: true,
            //autoplay: 1000,
            //autoplaySpeed: 4000,
            //dotsEach: 5000,
            //autoplayTimeout: 8000
        },
    }
});
});