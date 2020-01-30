

$(function(){
	$('.covert_menu').click(function(){
		$('.menu_right_covert').toggleClass('open');
		$('.covert_menu').toggleClass('active');
	});


});	

var show = function (state) {
	document.getElementById('black_fill').style.display = state;
	document.getElementById('modal_box').style.display = state;
};

/* arrow scroll */

$(document).ready(function(){
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


/* video  player */

$('#video_fill').click(function(){
	$('#video_fill').hide();
});



var video;
var duration;
var startDuration;
var volume;



window.onload = function(){
	video = document.getElementById('video-player');
	duration = document.getElementById('prog');
	volume = document.getElementById('volume');
	duration.value = 0;
	duration.min = 0;
	duration.max = video.duration;
};
/*=================================*/
function fullScreen(){
	video.webkitEnterFullscreen();
};

/*===============================*/
function PlayPauseVideo(){
	if(video.paused){
		video.play();
		startDuration = setInterval(initDuration,1000/66);
	}
	else {
		video.pause();
		clearInterval(startDuration);
	}
};

/*===================================*/

function initDuration(){
	duration.value = video.currentTime;
};

/*========================================*/
function clearAnimateRange(){
	clearInterval(startDuration);
	if(video.paused){
	   
	}
	   else{
		PlayPauseVideo();
	}
};

/*=====================================*/
function movedRange(){
	video.currentTime = duration.value;
	PlayPauseVideo();
};

/*======================================*/
function changeVolume(){
	video.volume = volume.value/100;
};

/*      player two        */

$('.video_fill_copy').click(function(){
	$('.video_fill_copy').hide();
});

var playV;


playV = document.getElementById('playerVideo');


function playerSmall(){
if(playV.paused){
	playV.play();
}	
}

	$('.video_fill_copy').click(function(){
$('#playerVideo').prop('controls', true);	
//$('#playerVideo').prop('autoplay', true);	
});





