// slick slider initial
$(document).ready(function(){
    $('.my-slick').slick({
      // setting-name: setting-value
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      infinite: true,
      fade: false,
      cssEase: 'linear',

      // initialSlide: 4,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
});