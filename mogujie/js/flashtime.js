//鼠标滚动事件
$(window).scroll(function(){
	var st = $(window).scrollTop();
	if (st>=586) {
		$('.nav_list').addClass('nav_list_fixed')
		$('.saletime_box').addClass('saletime_box_fixed')
	} else{
		$('.nav_list').removeClass('nav_list_fixed')
		$('.saletime_box').removeClass('saletime_box_fixed')
	}
})
//浏览器窗口拉伸
$(window).resize(function(){
//	var st = $(window).scrollTop();
	if ($(window).width()<1020) {
		$('.nav_list').removeClass('nav_list_fixed')
	} else{
		('.nav_list').addClass('nav_list_fixed')
	}
})

//轮播图
var num=0;
var timer;
function go(n){
		$('.flash_current_banner').css('left',-960*n+'px');
		$('.flash_dot').children().eq(n).addClass('flash_dot_li').siblings().removeClass('flash_dot_li')
		$('.flash_dot').children().eq(n).addClass('flash_dot_li')
}
function start(){
	timer = setInterval(function(){
		num++;
		if (num>1) {
			num = 0;
		}
		go(num)
	},3000)
}
start();
$('.flash_banner_current').hover(function(){
	clearInterval(timer)
	$('.flash_banner_current>div').stop().fadeIn();
	$('.flash_dot li').css('animation','none')
},function(){
	start()
	$('.flash_banner_current>div').stop().fadeOut();
	$('.flash_dot li').css('animation','side 3s linear infinite')
})
$('.left').click(function(){
	num--;
	if (num<0) {
		num=1
	}
	go(num)
})
$('.right').click(function(){
	num++;
	if (num>1) {
		num=0;
	}
	go(num)
})
$('.flash_dot li').click(function(){
	var num = $(this).index()
	go(num);
})
$('.flash_dot li').hover(function(){
	var num = $(this).index()
	go(num);
})
$('.saletime_box').hover(function(){
	$('.saletime_box>span').stop().fadeIn();
},function(){
	$('.saletime_box>span').stop().fadeOut();
})
//$('.time_left').click(function(){
//	var index = $('.nav-time-box>a').index();
//	$('.nav-time-box>a').
//})
