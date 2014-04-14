$(document).ready(function(){
	var slide_div = $("#slid_im");
	var slide_li = $("#slid_im li");
	var slid_btn = $("#slid_btn");
	var slid_btn_a = $("#slid_btn a");

	var timer=null;
	var iNum=0;
	

	slid_btn_a.mouseover(function(){
		var index = $(this).index();
		iNum=index;
		slid_btn_a.removeClass("bt_cur");
		$(this).addClass("bt_cur")
		slide_li.css({opacity:0,zIndex:3},100);
		slide_li.eq(index).animate({opacity:1},800).css({zIndex:6});
	});

	function autoPlay()
	{
		iNum++;
		if(iNum==slide_li.length)
			{
				iNum=0;
			}
		slide_li.css({opacity:0,zIndex:3},100);
		slid_btn_a.removeClass("bt_cur");
		slide_li.eq(iNum).animate({opacity:1},800).css({zIndex:6});
		slid_btn_a.eq(iNum).addClass("bt_cur");
	}
	timer=setInterval(autoPlay,3000);
	$(".slide").mouseover(function(){
		clearInterval(timer);
	});
	$(".slide").mouseout(function(){
		timer=setInterval(autoPlay,3000);
	});
});