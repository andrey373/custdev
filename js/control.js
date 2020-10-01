

$(function(){

	// script for block menu
	$('.covert_menu').click(function(){
		$('.menu_right_covert').toggleClass('open');
		$('.covert_menu').toggleClass('active');
	});


	// script for modal window 

	let blackFill = $('.black_fill');
	let modalCross = $('.modal_cross');
	let bodyPage = $('body');
	$('.modal_open').on('click', function(evt){
		evt.preventDefault();
		$(blackFill).addClass('modal--active');
		$(bodyPage).addClass('body--active');
		$('.modal_box').click(function(evt){
			evt.stopPropagation();
		})
	});

	$('.black_fill').on('click', function(){
		$('.black_fill').removeClass('modal--active');
		$('.modal_box').removeClass('modal--active');
		$(bodyPage).removeClass('body--active');
	});

	$(modalCross).on('click', function(){
		$('.black_fill').removeClass('modal--active');
		$('.modal_box').removeClass('modal--active');
		$(bodyPage).removeClass('body--active');
	});

	/* arrow scroll */

	$(window).scroll(function(){
		if($(this).scrollTop() > 350){
			$('.arrow').fadeIn();
		} else {
			$('.arrow').fadeOut();
		}
	});
	
	$(".arrow").click(function(){
		$('html, body').animate({scrollTop : 0},1000);
	});



/*    scroll more slowly       */
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html,body').animate(
			{
				scrollTop:$(target).offset().top
			},
			800
		);
	});

});

