$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var panel = $('.panel'),
			panelClass = 'panel_scroll';

	var up = $('.up'),
			upClass = 'up_show';

	$(window).on('load scroll resize', function(event) {
		if($(window).scrollTop() > 0){
			panel.addClass(panelClass);
			up.addClass(upClass);
		} else{
			panel.removeClass(panelClass);
			up.removeClass(upClass);
		}
	});

	up.click(function(event) {
		$('body,html').animate({scrollTop:0},800);
	});

	$('.catalog').tabs();

	$('.faq__item').click(function(event) {
		if (!$(this).hasClass('faq__item_open')) {
			var body = $(this).find('.faq__body'),
					friend = $(this).siblings('.faq__item'),
					friendBody = friend.find('.faq__body');

			$(this).toggleClass('faq__item_open');
			body.slideToggle();

			friend.removeClass('faq__item_open');
			friendBody.slideUp(300);
		}
	});

	$('.portfolio__btn').click(function(event) {
		$(this).hide();
		$('.portfolio__item').css('display', 'block');
	});

	var reviews = $('.reviews__list');
	reviews.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}},{ 
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}]
	})

	

	new WOW().init();

	$('.form .btn').click(function(event) {
		event.preventDefault();
		var form = $(this).parents('form');
				inputsRequired = form.find('.input_required'),
				inputsRequiredLength = inputsRequired.length,
				counter = 0;

		inputsRequired.each(function(index, el) {
			if ($(this).find('input').val() == '') {
				$(this).addClass('input_error');
			} else {
				$(this).removeClass('input_error');
				counter++;
			}
		});

		if (counter == inputsRequiredLength) {
			$.ajax({
		    type: "POST",
		    url: "order.php",
		    data: form.serialize()
				}).done(function() {
			    $.fancybox.close();
					$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
			});

		}
	});


	var hum = $('.hum'),
			humClass = 'hum_toggle',
			nav = panel,
			navClass = 'panel_show';

	hum.click(function(event) {
		hum.toggleClass(humClass);
		nav.toggleClass(navClass);
	});

	var phone = $('.header__call');
	phone.click(function(event) {
		if ($(window).width() < 767) {
			var attr = $(this).attr('data-phone');
			document.location.href = "tel:" + attr;
		} else{
			$.fancybox.open({src  : '#popup-order',type : 'inline'});
		}
	});

	$(".panel a[href^='#']").click(function(){
	  var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 50 +"px"}, 1500);
    nav.removeClass(navClass);
    return false;
	});
});
