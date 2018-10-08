$('.list3,.list3_mycart').hover(function() {
	$('.list3_mycart').stop().show();
}, function() {
	$('.list3_mycart').hide();
})
/*数量*/
$('.cart_reduce').click(function(){
	var num=$('input[type=text]').val();
	if(num==1) $(this).css('disabled')
	else {
		num--;
		$('input[type=text]').val(num);

	}
		price(num)
})
$('.cart_add').click(function(){
	var num=$('input[type=text]').val();
	num++;
	$('input[type=text]').val(num);
	price(num)
})

/*小计*/
//console.log($('.shop_content4').html())
function price(num){
	return $('.shop_content5').html(($('.shop_content4').html()*num).toFixed(2));
}
/*全选*/
$('input[name=check]').click(function(){
	for (var i=0;i<$('input[type=checkbox]').length;i++) {
		if ($(this).prop('checked')) {
			$('input[type=checkbox]').prop('checked',true);
			$('.shop_content').css('background','#fff6f6')
			$('.priceall').html($('.shop_content5').html())
			$('.goodnums').html('1')
			$('.cartall_right').children('span').addClass('paypic_new')
		}
		else{
			$('input[type=checkbox]').prop('checked',false);
			$('.shop_content').css('background','white')
					$('.goodnums').html('0')
				$('.priceall').html('0.00')
			$('.cartall_right').children('span').removeClass('paypic_new')
		}
	}
})
$('.selected').click(function(){
	for(var i=0;i<$('input[type=checkbox]').length;i++){
		var n=$('input[type=checkbox]').eq(i).prop('checked');
		$('input[type=checkbox]').eq(i).prop('checked', !n)		
		if (!n) {
			$('.shop_content').css('background','#fff6f6')
			$('.goodnums').html('1')
				$('.priceall').html($('.shop_content5').html())
		} else{
			$('.shop_content').css('background','white')
			$('.priceall').html('0.00')
			$('.goodnums').html('0')
		}
	}
})

/*删除*/
$('.shop_content6').click(function(){
	$('.shop_content,.shopid').remove()
})
$('.delete').click(function(){
	
		if ($('input[name=check]').prop('checked')) {
			confirm('确定删除选中商品')
			$('.shop_content,.shopid').remove()	
		}
		else{
			alert('没有选中任何商品')
		}
})