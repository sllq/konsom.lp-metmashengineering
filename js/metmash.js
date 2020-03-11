document.writeln('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');
document.writeln('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>');

// $('head').append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="crossorigin="anonymous"></script>');
// $('head').append('<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');
// $('head').append('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>');

$( document ).ready(function() {
    $('.relative-slider').slick({
        autoplay: true,
        dots: false,
        arrows: false,
    });
    $('#maincustomers').slick({
        useTransform: false,
        dots: false,
        arrows: false,
        slidesToShow: 3, 
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }]
    });
    $('#vendors').slick({
        useTransform: false,
        dots: false,
        arrows: false,
        slidesToShow: 4, 
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }]
    });
    $('#partners').slick({
        useTransform: false,
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }]
    });
});

$( document ).ready(function() {
  $('.relative-slider-2').slick({
      asNavFor: '#caption',
      slidesToShow: 1,
      adaptiveHeight:true,
      useTransform: true,
      dots: true,
      dotsClass: "slick-dots-konsom",
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      fade: true,
      speed: 200,
      // responsive: [
      //   {breakpoint: 1200, arrows: false, adaptiveHeight:true}
      // ]
  });
  $("#caption").slick({
    asNavFor: '.relative-slider-2',
    infinite: false,
    speed: 200,
    fade: true,
    arrows:false,
  })
});