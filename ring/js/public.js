function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	$("golds").onmouseenter=$("bigBox").onmouseenter=function(event){
	$("ulrow").style.display="block";
	$("lastId").style.display="block";
	$("golds").style.backgroundColor="white";
	}	
	$("golds").onmouseleave=function(event){
	$("lastId").style.display="none";
	$("ulrow").style.display="none";	
	$("ulrow").style.height="209px";
	$("golds").style.backgroundColor="#f0b60a";	
	}
	$("lastId").onclick=function(event){
	$("ulrow").style.height="314px";	
	$("lastId").style.display="none";
	}
	
	
	
	
	$("header_bottom_right").onmouseover=function(event){
	$("shopC").style.display="block";	
	$("header_bottom_right").style.border="1px solid #e5e5e5";	
	$("header_bottom_right").style.borderBottom="none";	
	}
	$("header_bottom_right").onmouseout=function(event){
	$("shopC").style.display="none";
	$("header_bottom_right").style.border="none";	
	$("header_bottom_right_two").style.border="none";	
	}
	$("header_bottom_right_two").onmouseover=function(event){
	$("userP").style.display="block";
	}
	$("header_bottom_right_two").onmouseout=function(event){
	$("userP").style.display="none";
	}



//全部商品延迟框
$("yanchi").onmouseenter=function(){
		setTimeout(yanshi,30);
		function yanshi(){
		$("q").style.display="block";
		$("q").style.color="black";
		}		
	}
	$("yanchi").onmouseleave=function(){
		$("q").style.display="none";
	}


//gold延迟框
$("lojy").onmouseenter=function(){
		setTimeout(jj,30);
		function jj(){
		$("h").style.display="block";
		$("h").style.color="black";
		}		
	}
	$("lojy").onmouseleave=function(){
		$("h").style.display="none";
	}



//选择戒指属性栏
$("xuanxiang").onclick=function(){
	$("ul_ring").style.height="410px";
	$("ul_ring").style.transition="all 1s";
	$("xuanxiang").style.display="none";
	$("shouqi").style.display="block";
	$("lastSpan").style.display="none";
}
$("shouqi").onclick=function(){
	$("ul_ring").style.height="200px";
	$("shouqi").style.display="none";
	$("xuanxiang").style.display="block";
	$("lastSpan").style.display="block";
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
	var nav=$("header_bottom_native");
	if(topH>113){
		nav.style.position="fixed";
		nav.style.top="0";
	}else{
		nav.style.position="static";
	}
}


function jzxqy(){
	location.href="../shoppingCar/shoppingCar.html";
}