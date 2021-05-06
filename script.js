$(window).on('load scroll', function(){

  var obj = $('.animated');

  obj.each(function () {

    var isAnimate = $(this).data('animate');
    var offsetTop = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    if(scrollPos > offsetTop - windowHeight + (windowHeight / 2)){
      $(this).addClass(isAnimate);
    }else{
      $(this).removeClass(isAnimate);
    }
  });

});
