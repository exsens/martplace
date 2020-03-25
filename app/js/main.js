$(function(){

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
});