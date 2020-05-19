$(function(){

	$('.slider').slick({
	  autoplay: true,
	  arrows:true,	 
	  dots: false,
	  fade: true,
	  autoplaySpeed: 4000, 
	  slidesToShow: 1,
	  slidesToScroll: 1,	  	  
	});

	$('.info__menu-link').on('click', function() {

	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 470,   // по умолчанию «400»
	        easing: "linear" // по умолчанию «swing»
	    });
	     
	    return false;
	});
});