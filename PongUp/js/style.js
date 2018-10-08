$('.e-mail-box').click(function(){
	$(this).css('display','none')
	$('.message-box').css('display','block')
})
$('.close-right').click(function(){
	$('.e-mail-box').css('display','block')
	$('.message-box').css('display','none')
})
