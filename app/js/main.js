$(function(){

      $('.drop-down__box').on('click', function() {
        if (!$(this).children('.menu-drop-down, .icons-box__menu').hasClass('menu-drop-down--active')) {
          $('.menu-drop-down, .icons-box__menu').removeClass('menu-drop-down--active');
          $(this).children('.menu-drop-down, .icons-box__menu').addClass('menu-drop-down--active');
        } 
        else {
          $(this).children('.menu-drop-down, .icons-box__menu').removeClass('menu-drop-down--active');
        }
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