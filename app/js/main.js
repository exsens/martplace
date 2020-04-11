$(function(){
      $('.menu__link, .user-box, .icons-box' ).on('click', function() {
        if (!$(this).siblings('.menu-drop-down, .icons-box__menu').hasClass('menu-drop-down--active')) {
          $('.menu-drop-down, .icons-box__menu').removeClass('menu-drop-down--active');
          $('.menu__link').removeClass('active');
          $(this).siblings('.menu-drop-down, .icons-box__menu').addClass('menu-drop-down--active');
          $(this).addClass('active');
        } 
        else {
          $(this).siblings('.menu-drop-down, .icons-box__menu').removeClass('menu-drop-down--active');
          $(this).removeClass('active');
        }
      });

      $('.menu-drop-down__title').on('click', function() {
        if (!$(this).siblings('.pages-menu').hasClass('active')) {
          $('.pages-menu').removeClass('active');
          $('.menu-drop-down__title').removeClass('active');
          $(this).siblings('.pages-menu').addClass('active');
          $(this).addClass('active');
        } 
        else {
          $(this).siblings('.pages-menu').removeClass('active');
          $(this).removeClass('active');
        }
      });

      $('.brg-menu').on('click', function(){
          $('.menu').toggleClass('active');
      });
      $('.user-menu').on('click', function(){
          $('.icons-box__inner, .header__user-box,  .header__btn, .header__logo').toggleClass('active');
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

  $('.weeky__slider').slick({
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: false,
        }
      },
    ]
  });
  
  $('.newest__filter-icon').click(function (event) { 
    $('.newest__filter-menu').toggleClass('newest__filter-menu--active');

  });

  $('.followers-slider__items').slick({
    Infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 905,
        settings: {
          slidesToShow: 2,
        }
        
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
        
      },
    ]
    
  });






  var mixer = mixitup('.newest__items');

});