var $carousel = $('#content-carousel');
$carousel.carousel({
  interval: false
});

var $menuEls = $('#menu li');
$menuEls.on('click', function(e,d) {
  $menuEls.removeClass('active');
  var $el = $(e.target).parent();
  $el.addClass('active');
  var slide = $el.data().slideTo;
  $carousel.carousel(slide);
});
