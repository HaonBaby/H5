function $q(id){
	return document.getElementById(id);
}
window.onload=function(){
	$q("golds").onmouseenter=$q("bigBox").onmouseenter=function(event){
	$q("ulrow").style.display="block";
	$q("lastId").style.display="block";
	$q("golds").style.backgroundColor="white";
	}	
	$q("golds").onmouseleave=function(event){
	$q("lastId").style.display="none";
	$q("ulrow").style.display="none";	
	$q("ulrow").style.height="209px";
	$q("golds").style.backgroundColor="#f0b60a";	
	}
	$q("lastId").onclick=function(event){
	$q("ulrow").style.height="314px";	
	$q("lastId").style.display="none";
	}
	
	
	
	
	$q("header_bottom_right").onmouseover=function(event){
	$q("shopC").style.display="block";	
	$q("header_bottom_right").style.border="1px solid #e5e5e5";	
	$q("header_bottom_right").style.borderBottom="none";	
	}
	$q("header_bottom_right").onmouseout=function(event){
	$q("shopC").style.display="none";
	$q("header_bottom_right").style.border="none";	
	$q("header_bottom_right_two").style.border="none";	
	}
	$q("header_bottom_right_two").onmouseover=function(event){
	$q("userP").style.display="block";
	}
	$q("header_bottom_right_two").onmouseout=function(event){
	$q("userP").style.display="none";
	}



//全部商品延迟框
$q("yanchi").onmouseenter=function(){
		setTimeout(yanshi,30);
		function yanshi(){
		$q("q").style.display="block";
		$q("q").style.color="black";
		}		
	}
	$q("yanchi").onmouseleave=function(){
		$q("q").style.display="none";
	}


//gold延迟框
$q("lojy").onmouseenter=function(){
		setTimeout(jj,30);
		function jj(){
		$q("h").style.display="block";
		$q("h").style.color="black";
		}		
	}
	$q("lojy").onmouseleave=function(){
		$q("h").style.display="none";
	}


}

//滚动条效果	
var timer=null;
function pageScroll(){
	var top =document.body.scrollTop;	
	timer=setInterval(function(){
		top-=50;
		if(top<=0){
			top=0;
			clearInterval(timer);
		}
		document.body.scrollTop=top;
	},20)	
}


//导航栏固定
window.onscroll=function(){
	var topH=document.body.scrollTop;
	var nav=$q("header_bottom_native");
	if(topH>113){
		nav.style.position="fixed";
		nav.style.top="0";
	}else{
		nav.style.position="static";
	}
}

//遮躁层

function topIn(){
	$("#meng").css({"left":"0px","top":"320px","z-index":"100"});
	$("#meng").animate({"left":"0px","top":"20px"},500);
}
	function topOut(){
	$("#meng").animate({"top":"320px"},500);
}

function rightIn(){
	$("#meng1").css({"left":"600px","top":"0px","z-index":"100"});
	$("#meng1").animate({"left":"20px","top":"0px"},500);
}
	function rightOut(){
	$("#meng1").animate({"left":"600px","top":"0px"},500);
}
	
//上下左右
function tIn(){
	$("#zz").css({"left":"0px","top":"-320px","z-index":"100"});
	$("#zz").animate({"left":"0px","top":"0px"},200)
}
function tOut(){
	$("#zz").animate({"left":"0px","top":"-320px"},200)
}

function rIn(){
	$("#zz").css({"left":"600px","top":"0px","z-index":"100"});
	$("#zz").animate({"left":"0px","top":"0px"},200)
}
function rOut(){
	$("#zz").animate({"left":"600px","top":"0px"},200)
}

function lIn(){
	$("#zz").css({"left":"-600px","top":"0px","z-index":"100"});
	$("#zz").animate({"left":"0px","top":"0px"},200)
}
function lOut(){
	$("#zz").animate({"left":"-600px","top":"0px"},200)
}

function bIn(){
	$("#zz").css({"left":"0px","top":"320px","z-index":"100"});
	$("#zz").animate({"left":"0px","top":"0px"},200)
}
function bOut(){
	$("#zz").animate({"left":"0px","top":"320px"},200)
}

//判断方向
function getDirection(mousePoint){
	//一、求鼠标与每个边的距离
	//1、左边的距离
	var leftDist = Math.abs($("#four_q4").offset().left-mousePoint.x);
	//2、右边的距离
	var rightDist = Math.abs($("#four_q4").offset().left+600-mousePoint.x);
	//3、上边的距离
	var topDist = Math.abs($("#four_q4").offset().top-mousePoint.y);
	//4、下边的距离
	var bottomDist = Math.abs($("#four_q4").offset().top+320-mousePoint.y);
	
	//二、求最小距离
	var arr = [leftDist,topDist,rightDist,bottomDist];
	var min = 0;
	for(var i=1;i<arr.length;i++){
		if(arr[i]<arr[min]){
			min = i;
		}
	}
	return min;
}



$(function(){
	$("#four_q").mouseenter(function(){
		topIn();
		rightIn();
	});
	$("#four_q").mouseleave(function(){
		topOut();
		rightOut();
	});
	
	
	//入
	$("#four_q4").mouseenter(function(event){
		var evt = event || window.event;
		var min = getDirection({x:evt.clientX,y:evt.clientY});
		$("#zz").stop();
	    [lIn,tIn,rIn,bIn][min]();
	});
	
	//出
	$("#four_q4").mouseleave(function(event){
		var evt = event || window.event;
		var min = getDirection({x:evt.clientX,y:evt.clientY});
		$("#zz").stop();
	    [lOut,tOut,rOut,bOut][min]();
	});
	
	
	
	
	
	
});


