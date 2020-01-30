// ========portfolio modal slide===========

$(document).ready(function(){
	flag=0;
	$("#galery_img_1").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture1.jpg');
		flag=1;
	});
	
	$("#galery_img_2").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture2.jpg');
		flag=2;
	});
	
	$("#galery_img_3").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture3.jpg');
		flag=3;
	});
	
	$("#galery_img_4").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture4.jpg');
		flag=4;
	});
	
	$("#galery_img_5").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture5.jpg');
		flag=5;
	});
	
	$("#galery_img_6").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture6.jpg');
		flag=6;
	});
	
	$("#galery_img_7").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture7.jpg');
		flag=7;
	});
	
	$("#galery_img_8").click(function(){
		$("#big_img").fadeIn();
		$("#big_img > #pseudo_img").attr('src','img/secondary_img/picture8.jpg');
		flag=8;
	});
	
	$("#galery_close").click(function(){
		$("#big_img").fadeOut();
	});
	
	$("#next_right").click(function(){
		if(flag==1){
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture2.jpg');
			flag=2;
		}
		else if(flag==2)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture3.jpg');
			flag=3;
		}
		else if(flag==3)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture4.jpg');
			flag=4;
		}
		else if(flag==4)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture5.jpg');
			flag=5;
		}
		else if(flag==5)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture6.jpg');
			flag=6;
		}
		else if(flag==6)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture7.jpg');
			flag=7;
		}
		else if(flag==7)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture8.jpg');
			flag=8;
		}
		else if(flag==8)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture1.jpg');
			flag=1;
		}
	});
	
	$("#pre_left").click(function(){
		if(flag==1){
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture8.jpg');
			flag=8;
		}
		else if(flag==2)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture1.jpg');
			flag=1;
		}
		else if(flag==3)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture2.jpg');
			flag=2;
		}
		else if(flag==4)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture3.jpg');
			flag=3;
		}
		else if(flag==5)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture4.jpg');
			flag=4;
		}
		else if(flag==6)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture5.jpg');
			flag=5;
		}
		else if(flag==7)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture6.jpg');
			flag=6;
		}
		else if(flag==8)
		{
			$("#big_img #pseudo_img").attr('src', 'img/secondary_img/picture7.jpg');
			flag=7;
		}
	});
});