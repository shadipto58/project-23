(function($){
	'use strict';

// Code Start

$('#akash').show();
$('.abc p').prepend('<b>Good Day!</b> ');
$('.abc p').append(' <b>Thank You.</b>');

$('#akash').css({
	color : '#273c75',
	fontSize: 40
});

$('.abc').find('a').css({
	'text-decoration' : 'none',
	color : '#44bd32',
	fontWeight : 700
});


$('.abc > a').on('click', function () {
	$('.habiba').addClass('afroja');
});

$('.habiba').on('click', function(){
	$('.habiba').removeClass('afroja');
})

$('.abc p a').on('click', function(){
	$('.bhag').fadeIn();
});

$('.bhag span').on('click', function(){
	$('.bhag').fadeOut();
});



$('.menu-icon span').on('click', function(){
	$('.mobile-menu').animate({
		right: 0
	});
})

$('.hello').on('click', function(){
	$('.bye').animate({
		right: 0
	})
})

$('.menu-close span').on('click', function(){
	$('.mobile-menu').animate({
		right: -250
	});
})


}) (jQuery);
