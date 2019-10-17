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
loop: true,
    dots: false,
    margin: 10,
    navText : ["<i class=\"fas fa-chevron-left\"></i>","<i class=\"fas fa-chevron-right\"></i>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },

       480: {
            items: 2,
            nav: true,
        },

        1200: {
            items: 2,
            nav: true,
        },
    }
});
});