$(document).ready(function() {
	
	$('.menu a').click(function() {
		$('.here').removeClass('here');
		$(this).addClass('here');
	});

	$('#mobileMenu').click(function() {
		$('.menu').toggle();
	});

	$(window).scroll(function() {
		
		var b = $('.go_top');

		var h = $(window).height();

		if($(document).scrollTop() > h)
		{
			if($(window).width() >= 768)
			{
				b.show();
			}
		}

		else
		{
			b.hide();
		}
	});

	$('.go_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 1000, 'swing');
	});
});