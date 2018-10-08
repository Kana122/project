$('.guess_pic,.guess_pic1,.guess_pic2,.guess_pic3,.guess_pic4').hover(function(){
	$(this).children('.search_common').stop().fadeIn()
	$(this).css('border','1px solid #f47c96')
},function(){
	$(this).children('.search_common').stop().fadeOut()
	$(this).css('border','1px solid #f2f2f2')
})