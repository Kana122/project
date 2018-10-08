$(window).scroll(function(){
	var st = $(window).scrollTop();
	if (st>=50) {
		$('.nav_list').addClass('nav_list_fixed')
	} else{
		$('.nav_list').removeClass('nav_list_fixed')
	}
})