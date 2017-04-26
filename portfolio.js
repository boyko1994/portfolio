$(document).ready(function() {
    $('#touch-menu').click(function() {
       $('.nav').slideToggle(1000);
       });//end slide toggle
  $('.nav a').click(function() {
       if (  $(window).width() < 768 ) {
       $('.nav').slideToggle(1000);
       }
       });
  $(window).resize(function() {		
	  	if (  $(window).width() > 768 ) {			
			$('.nav').removeAttr('style');
		   }
});//end resize
});//end ready

$(function() {
   $(window).scroll(function() {
        //поява кнопки ВВЕРХ після прокрутки у 400пкс
        if($(this).scrollTop() > 400) {
        $('#toTop').fadeIn();
        } else {
        $('#toTop').fadeOut();
        }
        });
   //прогортання на самий верх сайту
  $('#toTop').click(function() {
  $('body,html').animate({scrollTop:0},800);
  });
  $(".nav a,.nav-pre-last a").on("click", function (event) {
      event.preventDefault();
      //запамятовуєм значення ідентифікатора
      var id  = $(this).attr('href'),
      //визначаєм висоту від початку сторінки до якоря на посиланні
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

