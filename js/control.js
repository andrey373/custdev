

$(function(){

	// script for block menu
	$('.covert_menu').click(function(){
		$('.menu_right_covert').toggleClass('open');
		$('.covert_menu').toggleClass('active');
	});


	// script for modal window 
	var show = function (state) {
		document.getElementById('black_fill').style.display = state;
		document.getElementById('modal_box').style.display = state;
	};

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


	/* script for video player */

	let videoBlock = $('#video-player');
	let videoPlay = $('#play_btn_triagle');

	$(videoPlay).on('click', function(){
		
	});

});

