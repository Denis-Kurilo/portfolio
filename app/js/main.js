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
});