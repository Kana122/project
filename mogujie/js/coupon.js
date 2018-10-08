$('.coupon_content_ul li').click(function(){
	var index = $(this).index();
//	console.log(index)
	$('.coupon_content_ul li').eq(index).addClass('coupon_content_li');
	$('.coupon_content_ul li').eq(index).addClass('coupon_content_li').siblings().removeClass('coupon_content_li')
	$('.coupon_content>div').eq(index).addClass('coupon_content_current');
	$('.coupon_content>div').eq(index).addClass('coupon_content_current').siblings().removeClass('coupon_content_current')
})
$('.mu_title2').click(function(){
	$(this).toggleClass('coupon')
	if ($(this).hasClass('coupon')) {
		$(this).css('background','url(../img/direction.png) 72px 0px no-repeat');
		$('.mu_title2_ul').css('display','none')
	} else{
		$(this).css('background','url(../img/direction.png) 72px -64px no-repeat');
		$('.mu_title2_ul').css('display','block')
	}
})
$('.mu_title1').click(function(){
	$(this).toggleClass('order')
	if ($(this).hasClass('order')) {
		$(this).css('background','url(../img/direction.png) 72px -64px no-repeat')
		$('.mu_title1_ul').css('display','block')
	} else{
		$(this).css('background','url(../img/direction.png) 72px 0px no-repeat')
		$('.mu_title1_ul').css('display','none')
	}
})
$('.mu_title2_ul li').hover(function(){
	var index = $(this),index;
	$(this).css('color','pink')
	$('.mu_title2_ul li').eq(1).css('color','#ff337e')
	
},function(){
	$(this).css('color','#666666')
	$('.mu_title2_ul li').eq(1).css('color','#ff337e')
})
$('.mu_title1_ul li').hover(function(){
	$(this).css('color','pink')
},function(){
	$(this).css('color','#666666')
})
