//adv区图片自动切换
	var myset=setInterval(setfun,3000);
	var a=0;
	function  setfun(){ //将第一张图复制一份到最后，形成无缝切换       
		a++;
		if(a==4){
			$(".adv .advul2 li").eq(0).css({"background":"white"});
			$(".adv .advul2 li").eq(3).css({"background":"none"});
		}	
		if(a>4){

			$(".adv .advul1").css({"margin-left":0});
			a=0;
		}
		if(a==0) //当在大于4后变为0时，为了使轮播停留时间是1s而不是2s，因此将a的变为1，既a++
		{
			a++;
			$(".adv .advul1").animate({"margin-left":-1140*a});
		}
		else		//当a的值大于0时，正常轮播即可
		{
			$(".adv .advul1").animate({"margin-left":-1140*a});
		}	
		
	$(".adv .advul1").animate({"margin-left":-1140*a});
	$(".adv .advul2 li").eq(a).css({"background":"white"}).siblings().css({"background":"none"});
	}
//adv区图片点击切换
$(".adv .advul2 li").click(clickfun);
function clickfun(){
	var cur=$(this).index();
	a=cur;
	$(".adv .advul1").animate({"margin-left":-1140*cur});
	$(".adv .advul2 li").eq(a).css({"background":"white"}).siblings().css({"background":"none"})
}

//中间四张横排图片放大效果
$(".fourpicture li .imgs").mouseenter(enterfun);
$(".fourpicture li .imgs").mouseleave(leavefun);
function enterfun(){
	$(this).children("img").stop().animate({"width":"120%","margin-left":"-10%","margin-top":"-6%"},1000);
}
function leavefun(){
	$(this).children("img").stop().animate({"width":"100%","margin-left":"0","margin-top":"0"},1000)
}
//中间四张横排图片左移和右移
// $(".fourpicture .s1").hide();
//$(".fourpicture ul").mouseenter(function(){$(".fourpicture .s1").show()});
// $(".fourpicture ul").mouseleave(function(){$(".fourpicture .s1").hide()});
//s1 左边
//s2 右边

$(".s1,.s2").hide();
$(".fourpicture").hover(function(){
	$(".s1").show();
},function(){
	$(".s1,.s2").hide();
});

var m=0;
$(".fourpicture .s1").click(fun1)
function fun1(){
	m++;
	if(m>1){
		$(".fourpicture .s1").hide();
	}
	if(m<2){
		$(".fourpicture .s2").show();
	}

	$(".fourpicture ul").stop().animate({"margin-left":-1140*m});
}
$(".fourpicture .s2").click(fun2)
function fun2(){
   m--;
   if(m<1){
	   	$(".fourpicture .s2").hide();
   }
   if(m>0){
   		$(".fourpicture .s1").show();
   }
   $(".fourpicture ul").stop().animate({"margin-left":-1140*m});
}




//中间4张大图区域 黑色方框内获取焦点
  $(".ups .texts").focus(focusfun);
  function focusfun(){
  	$(this).val("");
  }
 $(".ups .texts").blur(blurfun); 
  function blurfun(){
  	$(this).val("Message");
  }
// 中间4张大图区域 点击按钮鼠标经过时颜色变化
$(".ups input:eq(5)").mouseenter(function(){
	$(".ups input")[5].style.background="#415161";
	$(".ups input")[5].style.color="white";
});
$(".ups input:eq(5)").mouseleave(function(){
	$(".ups input")[5].style.background="#dae246";
	$(".ups input")[5].style.color="black";
});
$(".ups input:eq(6)").mouseenter(function(){
	$(".ups input")[6].style.background="#415161";
	$(".ups input")[6].style.color="white";
});
$(".ups input:eq(6)").mouseleave(function(){
	$(".ups input")[6].style.background="#dae246";
	$(".ups input")[6].style.color="black";
});

//  中间4张大图区域 鼠标进过图片时文字出现  鼠标离开图片时文字隐藏
$(".downs li:eq(0)").mouseenter(function(){$(".downs .fades").stop().fadeIn();})
$(".downs li:eq(0)").mouseleave(function(){$(".downs .fades").stop().fadeOut();})

  // con3中鼠标经过按钮颜色变化

  $(".con3work input").mouseenter(function(){
  	var ind=$(this).index();
   $(".con3work input").eq(ind).css({"background":"white","color":"black"});})
  $(".con3work input").mouseleave(function(){
  	var ind=$(this).index();
   $(".con3work input").eq(ind).css({"background":"#303e4b","color":"#f78e1b"});})

//底部"join"鼠标经过变色

$(".botleft input:eq(1)").mouseenter(function(){
	$(".botleft input:eq(1)").css({"background":"#303e4b","color":"white"})
})
$(".botleft input:eq(1)").mouseleave(function(){
	$(".botleft input:eq(1)").css({"background":"white","color":"#f78e1b"})
})



 //返回顶部部分  "返回顶部"出现和隐藏
$(".return li:eq(1)").mouseenter(function(){
	$(".return li:eq(0)").show();
	$(".return li:eq(1)").css({"background":"red"});
})
$(".return li:eq(1)").mouseleave(function(){
	$(".return li:eq(0)").hide();
	$(".return li:eq(1)").css({"background":"black"});
})
//"top"键随着高度变化隐藏或出现
var $doc=$(document);
$(window).scroll(scrollfun);
function scrollfun(){
	var heights=$(window).height();
   if($doc.scrollTop()>heights){
   	$(".return li:eq(1)").slideDown();
   }else{$(".return li:eq(1)").slideUp();}}

//一键返回顶部
$(".return li:eq(1)").click(function(){
	$("html,body").scrollTop(0);
})