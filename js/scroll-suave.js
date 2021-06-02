
// btn-menu Efecto

var btnMenu = $('#Btn-menu');

$(window).on('scroll', function () {

    var OffsetTop = $('#Sobre-mi').offset().top;

    if ($(window).scrollTop() >= OffsetTop) {

        btnMenu.css('margin-right', 0);

    }else if ($(window).scrollTop() <= OffsetTop/2) {

        btnMenu.css('margin-right', '-60px');

    }

});

// Scroll Suave

$('a.volver-arriba').on('click', function (event) {
    event.preventDefault();

    if ($(window).scrollTop() != 0) {
        $('html, body').stop().animate({scrollTop: 0}, 800);
    }

});


// Scroll Suave

$(document).ready(function (argument) {
	$('a.scroll-suave').on('click', function (event) {
    	event.preventDefault();
    	var seccionOffsetTop = $($(this).attr('href')).offset().top - 20;
    	$('html, body').stop().animate({scrollTop: seccionOffsetTop}, 900);
	});

});