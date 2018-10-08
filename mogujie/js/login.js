$('.login_box_ul li').click(function(){
	var index = $(this).index()
	$('.login_box_ul li').eq(index).addClass('li_style');
	$('.login_box_ul li').eq(index).addClass('li_style').siblings().removeClass('li_style')
	$('.login_way>div').eq(index).addClass('current');
	$('.login_way>div').eq(index).addClass('current').siblings().removeClass('current')
})