$('.head_li1').hover(function(){
	$('.head-left').css('display','block')
},function(){
	$('.head-left').css('display','none')
})
$('.head_li2').hover(function(){
	$('.head-right').css('display','block')
},function(){
	$('.head-right').css('display','none')
})
$('.head-left li').hover(function(){
	$(this).css('background','#dddddd')
},function(){
	$(this).css('background','none')
})
$('.head-right li').hover(function(){
	$(this).css('background','#dddddd')
},function(){
	$(this).css('background','none')
})
$('.one').hover(function(){
	$(this).css('background','red')
},function(){
	$(this).css('background','transparent')
})
$(window).scroll(function(){
	var st = $(window).scrollTop();
	if (st>=150) {
		$('.nav-right-list li:nth-of-type(8)').fadeIn()
	} else{
		$('.nav-right-list li:nth-of-type(8)').fadeOut()
	}
})
$('.nav-right-list li:nth-of-type(8)').click(function(){
	$('html,body').animate({'scrollTop':'0px'},300)
})