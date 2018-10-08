$('.shop_list_1').hover(function() {
	$('.shop_list').stop().show()

}, function() {
	$('.shop_list').stop().hide()
})
$('.shop_list li').hover(function() {
	$(this).css('background', '#666666')
}, function() {
	$(this).css('background', 'transparent')
})
$('.shop').hover(function() {
	$(this).css('background', '#f6f6f6')
	$('.shop-name-liest').stop().show()
}, function() {
	$(this).css('background', 'transparent')
	$('.shop-name-liest').stop().hide()
})
$('.user_pic_ul li').click(function() {
	var index = $(this).index()
	console.log(index)
	$('.big_pic>div').eq(index).addClass('big_current')
	$('.big_pic>div').eq(index).addClass('big_current').siblings().removeClass('big_current')
})
/*********************************************************/
$('.col_tab li').click(function() {
	var index = $(this).index();
	if(index == 0) $('.target').show();
	else $('.target').hide();
	$(this).addClass('col_tab selected').siblings('li').removeClass('col_tab selected');
	$('.col_content_div>div').eq(index).addClass('current').siblings('div').removeClass('current');
})
$('.target_ul li').hover(function() {
	$(this).addClass('target_current');
}, function() {
	$(this).removeClass('target_current');
})

/*锚点*/
function go(n) {
	return $('.target_ul li').eq(n).addClass('target_current').siblings('li').removeClass('target_current');
}
$(window).scroll(function() {
	var st = $(window).scrollTop();
	if(st >= $('.panel-title').eq(5).offset().top - 100) {
		go(5);
	} else if(st >= $('.panel-title').eq(4).offset().top - 100) {
		go(4)
	} else if(st >= $('.panel-title').eq(3).offset().top - 100) {
		go(3)
	} else if(st >= $('.panel-title').eq(2).offset().top - 100) {
		go(2)
	} else if(st >= $('.panel-title').eq(1).offset().top - 100) {
		go(1)
	} else {
		go(0)
	}

})
$('.target_ul li').click(function() {
	var index = $(this).index();
	$('html,body').animate({
		'scrollTop': $('.panel-title').eq(index).offset().top
	})
})
/*颜色点击*/

$('.shop_color li').click(function() {

	var index = $(this).index();
	var src = $(this).children('img').attr('src');
	$(this).children('b').toggleClass('bs');
	if($(this).children('b').hasClass('bs')) {
		$(this).addClass('click').siblings().removeClass('click')
		$(this).siblings().children('b').removeClass('bs');
		$(this).css('border-color', '#666').siblings('li').css('border-color', 'transparent');
	} else {
		$(this).removeClass('click')
		$(this).css('border-color', 'transparent');
	}
	switch(index) {
		case 1:
			$(this).attr('c', 1);
			$('.imgpic').css('background', 'url(../img/111.jpg)');
			$('#stock').html('31402');
			break;
		case 2:
			$(this).attr('c', 2);
			$('.imgpic').css('background', 'url(../img/222.jpg)');
			$('#stock').html('30010');
			break;
		case 3:
			$(this).attr('c', 3);
			$('.imgpic').css('background', 'url(../img/333.jpg)');
			$('#stock').html('30136');
			break;

	}

})

/*颜色hover*/
$('.shop_color li').hover(function() {
	$(this).css('border-color', '#666');
}, function() {
	if($(this).hasClass('click'))
		$(this).css('border-color', '#666');
	else $(this).css('border-color', 'transparent');
})
/*尺码点击*/

$('.sizebox').click(function() {
	index = $(this).index();
	$(this).children('b').toggleClass('bs');
	if($(this).children('b').hasClass('bs')) {
		$(this).siblings().children('b').removeClass('bs');
		$(this).addClass('sizebox_new').siblings().removeClass('sizebox_new')
		$(this).addClass('click').siblings().removeClass('click')

	} else {
		$(this).removeClass('click')
		$(this).removeClass('sizebox_new')
	}

	switch(index) {
		case 1:
			$(this).attr('cs', 1);
			$('#stock').html('15195');
			break;
		case 2:
			$(this).attr('cs', 2);
			$('#stock').html('15441');
			break;
		case 3:
			$(this).attr('cs', 3);
			$('#stock').html('15300');
			break;
		case 4:
			$(this).attr('cs', 4);
			$('#stock').html('15118');
			break;
		case 5:
			$(this).attr('cs', 5);
			$('#stock').html('15370');
			break;
		case 6:
			$(this).attr('cs', 6);
			$('#stock').html('15124');
			break;
	}

})

/*尺码hover*/
$('.sizebox').hover(function() {
	$(this).addClass('sizebox_new');
}, function() {
	if($(this).hasClass('click')) {
		$(this).addClass('sizebox_new');

	} else {
		$(this).removeClass('sizebox_new');
	}
})
/*固定*/
//console.log($('.col_right').offset().top);
$(window).scroll(function() {
	var st = $(window).scrollTop();
	if(st >= 1065) {
		$('.col_shopid>p').addClass('scroll03').css('width', '217px');
		$('.tabsss').addClass('scroll02');
		console.log($('.col_tab').offset().top)
		$('.col_right').addClass('scroll01');
		//	console.log($('.col_right').offset().top)
	} else {
		$('.tabsss').removeClass('scroll02');
		$('.col_right').removeClass('scroll01');
		$('.col_shopid>p').removeClass('scroll03').css('width', '200px');
	}

})

/*小图鼠标划过*/
$('.pic_smallbox li').mouseover(function() {
	var index = $(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	$(this).children('i').addClass('hoveri');
	$(this).siblings().children('i').removeClass('hoveri')
	switch(index) {
		case 0:
			$('.imgpic').css('background', 'url(../img/shop1.1.jpg)');
			break;
		case 1:
			$('.imgpic').css('background', 'url(../img/shop1.2.jpg)');
			break;
		case 2:
			$('.imgpic').css('background', 'url(../img/shop1.3.jpg)');
			break;
		case 3:
			$('.imgpic').css('background', 'url(../img/shop1.4.jpg)');
			break;
		case 4:
			$('.imgpic').css('background', 'url(../img/shop1.5.jpg)');
			break;
	}
})
/*数量*/

$('.cart_reduce').click(function() {
	var num = $('.shop_number input').val();
	if(num == 1) $(this).css('disabled')
	else {
		num--
		$('.shop_number input').val(num);

	}
})
$('.cart_add').click(function() {
	var num = $('.shop_number input').val();
	num++;
	$('.shop_number input').val(num);
})

/***/