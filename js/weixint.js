// JavaScript Document
$(function(){

	var time = null;
	var z = 0;
	var key = 0;
	var prev = 0; 
	out();
	$(document).mousewheel(function(event,delta){
		//判断是否处于动画状态
		if(!$('.wrapBox').is(':animated')){

		//如果大于5  停留在最后1 屏   如果小于0  停留在第1屏 
		key = key - delta;
		if(key > 3){
			key = 3;	
		}else if(key < 0){
			key = 0;
		}
		//console.log(key);
		$('.wrapBox').stop().animate({top:-key*100+'%'},1000);	
		$('.fixedNav li').eq(key).addClass('current').siblings().removeClass('current');
		
		out();
		prev = key;
			
		}
	});
	$('.fixedHeaderIn li a:eq(0)').click(function(){
		$('.wrapBox').stop().animate({top:0+'%'},1000);	
		$('.fixedNav li').eq(0).addClass('current').siblings().removeClass('current');	
	})
	$('.fixedHeaderIn li a:eq(1)').click(function(){
		$('.wrapBox').stop().animate({top:-100+'%'},1000);	
		$('.fixedNav li').eq(1).addClass('current').siblings().removeClass('current');	
	})
	$('.fixedHeaderIn li a:eq(2)').click(function(){
		$('.wrapBox').stop().animate({top:-200+'%'},1000);	
		$('.fixedNav li').eq(2).addClass('current').siblings().removeClass('current');	
	})
	$('.fixedHeaderIn li a:eq(3)').click(function(){
		$('.wrapBox').stop().animate({top:-300+'%'},1000);		
		$('.fixedNav li').eq(3).addClass('current').siblings().removeClass('current');
	})

	
	var arr = ['首页','作品','关于我','联系我'];
	$('.fixedNav li').bind({
		mouseenter : function(){ 
			$(this).append('<span>'+ arr[$(this).index()] +'</span>');
		},
		mouseleave : function(){
			//find  children 
			$(this).children('span').remove();
		},
		click : function(){ 
			key = $(this).index();
			$('.fixedNav li').eq(key).addClass('current').siblings().removeClass('current');
			$('.wrapBox').stop().animate({top:-key*100+'%'},1000);
			out();
		}
	});
	

	
	function out(){
		$('.box').eq(prev).addClass('comeout');
		$('.box').eq(key).removeClass('comeout');
	};
	$('.lbt').hover(function(){
		$('.lbt .button .l').css('background','url(images/arr.png) no-repeat 0 0')	
		$('.lbt .button .r').css('background','url(images/arr.png) no-repeat -42px 0')	
	},function(){
		$('.lbt .button .l').css('background','url(images/arr.png) no-repeat -84px 0')	
		$('.lbt .button .r').css('background','url(images/arr.png) no-repeat -125px 0')	
	});
	$('.lbt .button .l').click(function(){
		z--;
		if(z<0){z=4}
		
		$('.lbt_son	ul').stop().animate({'left':-z*960+'px'},500);
		$('.lbt ol li').eq(z).addClass('act').siblings().removeClass('act')
	});
	$('.lbt .button .r').click(function(){
		z++;
		if(z>4){z=0}
		
		$('.lbt_son	ul').stop().animate({'left':-z*960+'px'},500);
		$('.lbt ol li').eq(z).addClass('act').siblings().removeClass('act')
	});

	$('.lbt ol li').click(function(){
		var index = $(this).index()
		z = index;
		$(this).addClass('act').siblings().removeClass('act')
		$('.lbt_son	ul').stop().animate({'left':-index*960+'px'},500);
	});
	function tm(){
		z++;
		if(z>4){z=0}
		$('.lbt_son	ul').stop().animate({'left':-z*960+'px'},500);
		$('.lbt ol li').eq(z).addClass('act').siblings().removeClass('act')	
	}
	time = setInterval(tm,4000);
	$('.lbt').hover(function(){
		clearInterval(time)	
	},function(){
		clearInterval(time)	;	
		time = setInterval(tm,4000);
	})
	
	
	
	
});