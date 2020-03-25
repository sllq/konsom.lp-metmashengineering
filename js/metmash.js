document.writeln('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');
document.writeln('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>');
// $('head').append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="crossorigin="anonymous"></script>');

$( document ).ready(function() {
  $('#tabs').slick({
      asNavFor: '#caption',
      slidesToShow: 1,
      adaptiveHeight: false,
      useTransform: false,
      dots: false,
      dotsClass: "slick-dots-konsom-tabs",
      arrows: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      fade: false,
      speed: 200,
      // responsive: [
      //   {breakpoint: 1200, arrows: false, adaptiveHeight:true}
      // ]
  });
  $("#caption").slick({
    asNavFor: '#tabs',
    infinite: false,
    speed: 200,
    fade: true,
    arrows:false,
  });
});