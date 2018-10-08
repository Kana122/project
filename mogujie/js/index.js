
//首页头部轮播图
var num=0;
var timer;
function go(n){
		$('.bannerpic').css('left',-768*n+'px');
//		$('.todaypics-ul').stop().animate({'left':-940*n+'px'},500);
		$('.index-dot').children().eq(n).addClass('index-dot-li').siblings().removeClass('index-dot-li')
		$('.index-dot').children().eq(n).addClass('index-dot-li')
}
function start(){
	timer = setInterval(function(){
		num++;
		if (num>2) {
			num = 0;
		}
		go(num);
		if (num==0) {
			$('.banner').css('background','#c9b4f7')
		}
		else if(num==1){
			$('.banner').css('background','#d16ba8')	
		}
		else{
			$('.banner').css('background','#e0c8dd')	
		}
	},3000)
}
start();
$('.bannerpic').hover(function(){
	clearInterval(timer)
},function(){
	start()
})
$('.index-dot li').click(function(){
	var num = $(this).index()
	go(num);
})
$('.index-dot li').hover(function(){
	var num = $(this).index()
	go(num);
})

var n=0;
var timer1;
function st(){
	timer1 = setInterval(function(){
		n++;
		if (n>4) {
			n = 0;
			$('.todaypics-ul').css('left',-940*n+'px');
			n = 1;
		}
		
		$('.todaypics-ul').stop().animate({'left':-940*n+'px'},1000);
	},2000)
}
st();
$('.todaypics').hover(function(){
	clearInterval(timer1)
},function(){
	st()
})
$('.left').click(function(){
	n--;
	if (n<0) {
		n=4;
		$('.todaypics-ul').css('left',-940*n+'px');
		n=3;
	}
	$('.todaypics-ul').stop().animate({'left':-940*n+'px'},500);
})
$('.right').click(function(){
	n++;
	if (n>4) {
		n=0;
		$('.todaypics-ul').css('left',-940*n+'px');
		n=1;
	}
	$('.todaypics-ul').stop().animate({'left':-940*n+'px'},500);
})

var no=0;
var timer2;
function st1(){
	timer2 = setInterval(function(){
		no++;
		if (no>4) {
			no = 0;
			$('.womenpic2-ul').css('left',-970*no+'px');
			no = 1;
		}
		
		$('.womenpic2-ul').stop().animate({'left':-970*no+'px'},1000);
	},2000)
}
st1();
$('.womenpic2').hover(function(){
	clearInterval(timer2)
},function(){
	st1()
})
$('.left1').click(function(){
	no--;
	if (no<0) {
		no=4;
		$('.womenpic2-ul').css('left',-970*no+'px');
		no=3;
	}
	$('.womenpic2-ul').stop().animate({'left':-970*no+'px'},500);
})
$('.right1').click(function(){
	no++;
	if (no>4) {
		no=0;
		$('.womenpic2-ul').css('left',-970*no+'px');
		no=1;
	}
	$('.womenpic2-ul').stop().animate({'left':-970*no+'px'},500);
})

var a=0;
var timer3;
function st2(){
	timer3 = setInterval(function(){
		a++;
		if (a>4) {
			a = 0;
			$('.womenshoe_pic2-ul').css('left',-650*a+'px');
			a = 1;
		}
		if (a==4) {
			$('.womenshoe_pic2-ol li').eq(a).addClass('womenshoe_pic2_ol_current');
			$('.womenshoe_pic2-ol li').eq(a).siblings().removeClass('womenshoe_pic2_ol_current')
		}
		
		$('.womenshoe_pic2-ul').stop().animate({'left':-650*a+'px'},1000);
		$('.womenshoe_pic2-ol li').eq(a).addClass('womenshoe_pic2_ol_current');
		$('.womenshoe_pic2-ol li').eq(a).siblings().removeClass('womenshoe_pic2_ol_current')
	},2000)
}
st2();
$('.womenshoe-banner').hover(function(){
	clearInterval(timer3)
},function(){
	st2()
})
$('.womenshoe_pic2-ol li').click(function(){
	a = $(this).index();
	$('.womenshoe_pic2-ul').stop().animate({'left':-650*a+'px'},1000);
	$('.womenshoe_pic2-ol li').eq(a).addClass('womenshoe_pic2_ol_current');
	$('.womenshoe_pic2-ol li').eq(a).siblings().removeClass('womenshoe_pic2_ol_current')
})
$('.womenshoe_pic2-ol li').hover(function(){
	a = $(this).index();
	$('.womenshoe_pic2-ul').stop().animate({'left':-650*a+'px'},1000);
	$('.womenshoe_pic2-ol li').eq(a).addClass('womenshoe_pic2_ol_current');
	$('.womenshoe_pic2-ol li').eq(a).siblings().removeClass('womenshoe_pic2_ol_current')
})
