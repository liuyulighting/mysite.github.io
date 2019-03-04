// AOS
AOS.init({
  duration: 1000,
})

jQuery(document).ready(function($){
  'use strict';

  //滚动模糊
  $(window).scroll(function() {
    var blurVal;
    blurVal = $(window).scrollTop() / 10;
    if (blurVal <= 30){
      return $(".photo").css("filter", "blur("+ blurVal + "px)");
    }else{
      return $(".photo").css("filter", "blur(40px)");
    }

  });

  $(function(){
// 监听滚动事件
    $(window).scroll(function(){
// 获得div的高度
      var h = $(".testimony").offset().top;
      if( $(this).scrollTop() > h){
// 滚动到指定位置
        $(".back-ground>div").css("position",'absolute');
      } else {
        $(".back-ground>div").css("position",'fixed');
      }
    });
  })

  //图片滑动特效

  $.extend( $.easing, {
    easeInOutQuad: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t + b;
      return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
      return c*((t=t/d-1)*t*t + 1) + b;
    }
  });

  var gridShowing = false;

  var intiateSliders = function() {

    //Default redils
    $('.redils-default .redils').off('redils.initiated').on('redils.initiated', function(){
      console.log('Initiated triggered');
    }).redils();

    //Centered redils
    $('.redils-centered .redils').redils({
      center: true,
      auto: false,
      overflow: 0,
      pagination: 'line'
    });

    $('.redils-centered-overflow .redils').redils({
      center: true,
      auto: false,
      pagination: 'counter',
      overflow: 2
    });

    $('.redils-stacked .redils').redils({
      slide: false,
      stacked: true,
      overflow: 2,
      auto: false
    });

    //Responsive redils
    $('.redils-responsive .redils').off('redils.beforeAnimating').on('redils.beforeAnimating', function(){
      console.log('Before animating triggered');
    }).off('redils.afterAnimating').on('redils.afterAnimating', function(){
      console.log('After animating triggered');
    }).redils({
      autoResize: true,
      allowKeyboard: true
    });

    $('.redils-responsive-height .redils').off('redils.updated').on('redils.updated', function(e, settings) {
      console.log('This is an event for update of the slider, settings are available as well.', settings);
    });

    //Responsive with no height
    $('.redils-responsive-height .redils').redils({
      autoResize: true,
      setHeight: false,
      auto: false,
      drag: true,
      speed: 800,
      easing: 'easeOutCubic'
    });

    //External controls for responsive redils
    $('#arrow-left').off('click').on('click', function(){
      $('.redils-responsive .redils').redils('moveTo', {moveTo: -1});
    });

    $('#arrow-right').off('click').on('click', function(){
      $('.redils-responsive .redils').redils('moveTo', {moveTo: 1});
    });

    $('#return-to-start').off('click').on('click', function(){
      var pos = $(this).data('pos');
      $('.redils-responsive .redils').redils('skipTo', {skipToSlide: pos, skipToSlideSpeed: 500});
    });

    //Fading redils
    $('.redils-fader .redils').redils({
      autoResize: true,
      slide: false,
      auto: false,
      speed: 800,
      updateHash: true
    });

    //Multislide redils
    $('.redils-multislide .redils').redils({
      multiSlide: true,
      multiSlidePadding: 10,
      auto: false
    }).off('redils.rendered').on('redils.rendered', function(){
      console.log('This is an event for when multiSlide has finished rendering.');
    });

    //Contact Sheet redils
    $('.redils-contact-sheet .redils').redils({
      multiSlide: true,
      breakPoints: [{breakAfter: 1100, numSlides: 9}, {breakAfter: 600, numSlides: 4}, {breakAfter: 0, numSlides: 1}],
      auto: false
    });
  }

  intiateSliders();

  $('#destroy-all').on('click', function(e) {
    e.preventDefault();
    $('.redils').redils('destroy', { maintainWidth: true });
  });

  $('#recreate-all').on('click', function(e) {
    e.preventDefault();
    intiateSliders();
  });

  //Hide/display grid
  $(window).on('keypress', function(e){
    if(e.shiftKey && e.ctrlKey && (e.charCode === 1 || e.charCode === 65)) {
      $('#grid-container').toggleClass('hidden');
      gridShowing = true;
    }
    if(gridShowing && e.charCode === 0) {
      $('#grid-container').addClass('hidden');
      gridShowing = false;
    }
  });

  // Animsition
  $(".animsition").animsition();
  
  // Scrollax
  $.Scrollax();

  // Smooth scroll
  var $root = $('html, body');

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 500);

    return false;
  });

  // Owl
  $('.wide-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

  // Show menu 
  if ($(window).width() > 768 ) {
    $('body').removeClass('menu-open');
    $('.js-templateux-menu').css('display', 'block');
  }
  // Window Resize
  $(window).resize(function(){
    var $this = $(this);
    $('.js-templateux-menu li').removeClass('staggard');
    $('.js-toggle-menu').removeClass('is-active');
    if ($this.width() > 768 ) {
      $('body').removeClass('menu-open');
      $('.js-templateux-menu').css('display', 'block');
      
    } else {
      if ($this.width() < 768 ) {
        $('.js-templateux-menu').css('display', 'none');
      }
    }
  });

  // Hamburger Button 
  $('.js-toggle-menu').on('click', function(e){
  	e.preventDefault();
  	
    var $this = $(this);

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('is-active');
      $('body').removeClass('menu-open');  
      $('.js-templateux-menu li').removeClass('staggard');
    } else {
      $this.addClass('is-active');
      $('body').addClass('menu-open');  

      $('.js-templateux-menu li').each(function(k){
        var $this = $(this);
        setTimeout(function(){
          $this.addClass('staggard');
        }, 100 * k );
      });

    }

  	if ( $('.templateux-menu').is(':visible') ) {
  		$('.js-templateux-menu').fadeOut(300);
  	} else {
  		$('.js-templateux-menu').fadeIn(300);
  	}
  })

});



