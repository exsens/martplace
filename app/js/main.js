$(function(){
  
    $('.drop-down__box').click(function (event) {
      
      $('.menu-drop-down').removeClass('menu-drop-down--active');
      $(this).children('.menu-drop-down').addClass('menu-drop-down--active');
      

      });

    $(' select').styler();

    $('.rating').rateYo({
        rating: 4.5,
        starWidth: '12px',
        normalFill: '#ffffff',
        ratedFill: '#ffc000',
        readOnly: true,
        spacing: '3px',
      });

  $('.weeky__slider').slick();
  
  $('.newest__filter-icon').click(function (event) { 
    $('.newest__filter-menu').toggleClass('newest__filter-menu--active');

  });

  $('.followers-slider__items').slick({
    Infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  });






  var mixer = mixitup('.newest__items');

});