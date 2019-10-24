$(document).ready(function() {
  //fixed header
/*var options = {
  offset: 1400
}
var header = new Headhesive('.nav', options); */


//popup
  $('.popup-link').magnificPopup({});

//slide2id - плавная прокрутка по ссылкам внутри страницы
  $("#arrowT a,#arrow-nav a,#top a,nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
      highlightSelector:"nav a"
  });
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



// $('.nav').removeClass("topMenuFixed");
// $(window).scroll(function(){
//   if($(this).scrollTop() > 50 ){
//     $('.nav').addClass('topMenuFixed');
//   }else{
//     $('.nav').removeClass('topMenuFixed');
//   };
// });  


// Мобильная навигация
var navToggleButton = $('.navigation__toggle');
var navToggleIcon = $('.navigation__toggle .fas');
var navBlock = $('.navigation');
var navLink = $('.navigation .list a');
var navBlockOpen = 'list--close';
var iconNavOpen = 'fa-bars';
var iconNavClose = 'fa-times'; 
var blockHidden = $('.overflow-hidden');



navToggleButton.on('click', function(e){
  e.preventDefault();
  navBlock.toggleClass(navBlockOpen);
 

//replacing-icon
 if(navToggleIcon.hasClass(iconNavOpen) ){
    navToggleIcon.removeClass(iconNavOpen);
    navToggleIcon.addClass(iconNavClose).fadeIn(1000);

    if ( $(window).width() < 768 ) {
      blockHidden.css('overflow','hidden');
    }

  }else{
    navToggleIcon.addClass(iconNavOpen);
    navToggleIcon.removeClass(iconNavClose);
    if ( $(window).width() < 768 ) {
      blockHidden.css('overflow','visible');
    }
  }
})

 navLink.on('click', function(){
  navBlock.removeClass(navBlockOpen);

//replacing-icon
  if(navToggleIcon.hasClass(iconNavOpen) ){
    navToggleIcon.removeClass(iconNavOpen);
    navToggleIcon.addClass(iconNavClose);
    if ( $(window).width() < 768 ) {
       blockHidden.css('overflow','hidden');
    }
 
  }else{
    navToggleIcon.addClass(iconNavOpen);
    navToggleIcon.removeClass(iconNavClose);
    if ( $(window).width() < 768 ) {
      blockHidden.css('overflow','visible');
    }
  }
}); 

});

//Animate arrow-top
$(function (){
  $("#arrow-top").hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1200) {
      $("#arrow-top").fadeIn(1000);
    }else{
      $("#arrow-top").fadeOut();
    }
  });

  $("#arrow-top a").click(function(){
    $("body, html").animate({
      scrollTop:0
    }, 100);
    return false;
  }); 
});


});