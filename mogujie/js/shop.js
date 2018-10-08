$('.Pic-ul li').hover(function(){
	var index = $(this).index()
	$(this).css('border-color','#f47c96')
	$(this).children('.search_like').stop().fadeIn()
},function(){
	$(this).css('border-color','#f2f2f2')
	$(this).children('.search_like').stop().fadeOut()
})