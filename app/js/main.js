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
      
     

      $('.category-filter-icons__list').on('click', function () { 
        $('.category-filter-icons__grid').removeClass('active');
        $('.category-filter-icons__list').addClass('active');
        if ($(this).hasClass('active')) {
          $('.category-content__item').addClass('category-content__item--list');
          $('.category-content__item--list').each(function () { 
            $(this).find('.category-content__item-category').appendTo($(this).find('.category-content__item-box1'));
            $(this).find('.category-content__item-user').appendTo($(this).find('.category-content__item-box2'));
            $(this).find('.category-content__item-sells').appendTo($(this).find('.category-content__item-box3'));
            $(this).find('.category-content__item-box3').appendTo($(this).find('.category-content__item-info'));
          });
        } 
      });

      $('.category-filter-icons__grid').on('click', function () { 
        $('.category-filter-icons__list').removeClass('active');
        $('.category-filter-icons__grid').addClass('active');
        if ($(this).hasClass('active')) {
          $('.category-content__item').each(function () {
            $(this).find('.category-content__item-user').appendTo($(this).find('.category-content__item-box1'));
            $(this).find('.category-content__item-category').appendTo($(this).find('.category-content__item-box3'));
            $(this).find('.category-content__item-sells').appendTo($(this).find('.category-content__item-box2'));
            $(this).find('.category-content__item-box3').appendTo($(this));
            $('.category-content__item').removeClass('category-content__item--list');
           });
         }
         
      });
      
      $('.control').on('change',function(){
        if($(this).prop('checked')){
            $('.check.'+$(this).attr('data-type')).prop('checked',true);
        }
    })
      $('.single-content__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.single-content__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.single-content__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });
    $('select').styler();

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

  $('.range-price').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 350,
    from: 30,
    to: 300,
    prefix: '$',
    hide_min_max: true,
    force_edges: true,
    step: 1,
  });




  var mixer = mixitup('.newest__items');

});