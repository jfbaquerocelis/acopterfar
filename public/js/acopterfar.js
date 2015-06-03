$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 400){
			$('.buttonUp').fadeIn('slow')
		}else{
			$('.buttonUp').fadeOut('slow')
		}
		// console.log($('.buttonUp').offset().top)
		if ($('.buttonUp').offset().top >= $('.Footer').offset().top){
			$('.buttonUp-icon').css({
					'color' : '#333'
			})
		}else{
			$('.buttonUp-icon').css({
				'color' : '#F44336'
			})
		}
	})
	$('.buttonUp-icon').click(function (e) {
		e.preventDefault()
		$('body').animate({
			scrollTop : 0
		}, 500)
	})
	// Inicialización de slider
	$('.slider').slider({full_width: true});
})