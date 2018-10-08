var nowtime = new Date();
var month = nowtime.getMonth()
var end_month = month + 1;
var day = nowtime.getDate();
var end_day = day + 1;
console.log(end_day)
var endtime = new Date(2018, end_month - 1, end_day);
console.log(endtime)
endseconds = endtime.getTime();
var d = h = m = s = 0;
var id = setInterval(seckill, 1000);

function seckill() {
	var nowtime = new Date();
	var remaining = parseInt((endseconds - nowtime.getTime()) / 1000);
	if(remaining > 0) {
		d = parseInt(remaining / 86400);
		h = parseInt((remaining / 3600) % 24);
		m = parseInt((remaining / 60) % 60);
		s = parseInt(remaining % 60);
		d = d < 10 ? '0' + d : d;
		h = h < 10 ? '0' + h : h;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;
	} else {
		clearInterval(id);
		d = h = m = s = '00';
	}
	//				document.getElementById('d').innerHTML=d;
	document.getElementById('h').innerHTML = h;
	document.getElementById('m').innerHTML = m;
	document.getElementById('s').innerHTML = s;
}

/***********************/
$('.goodlist li,.jacket_list').hover(function(){
	$('.jacket_list').css('display','block')
},function(){
	$('.jacket_list').css('display','none')
})