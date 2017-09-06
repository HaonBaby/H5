function q$(id){
	return document.getElementById(id);
}
window.onload=function(){
	q$("golds").onmouseenter=q$("bigBox").onmouseenter=function(event){
	q$("ulrow").style.display="block";
	q$("lastId").style.display="block";
	q$("golds").style.backgroundColor="white";
	}	
	q$("golds").onmouseleave=function(event){
	q$("lastId").style.display="none";
	q$("ulrow").style.display="none";	
	q$("ulrow").style.height="209px";
	q$("golds").style.backgroundColor="#f0b60a";	
	}
	q$("lastId").onclick=function(event){
	q$("ulrow").style.height="314px";	
	q$("lastId").style.display="none";
	}
	
	
	
	
	q$("header_bottom_right").onmouseover=function(event){
	q$("shopC").style.display="block";	
	q$("header_bottom_right").style.border="1px solid #e5e5e5";	
	q$("header_bottom_right").style.borderBottom="none";	
	}
	q$("header_bottom_right").onmouseout=function(event){
	q$("shopC").style.display="none";
	q$("header_bottom_right").style.border="none";	
	q$("header_bottom_right_two").style.border="none";	
	}
	q$("header_bottom_right_two").onmouseover=function(event){
	q$("userP").style.display="block";
	}
	q$("header_bottom_right_two").onmouseout=function(event){
	q$("userP").style.display="none";
	}



//全部商品延迟框
q$("yanchi").onmouseenter=function(){
		setTimeout(yanshi,30);
		function yanshi(){
		q$("q").style.display="block";
		q$("q").style.color="black";
		}		
	}
	q$("yanchi").onmouseleave=function(){
		q$("q").style.display="none";
	}


//gold延迟框
q$("lojy").onmouseenter=function(){
		setTimeout(jj,30);
		function jj(){
		q$("h").style.display="block";
		q$("h").style.color="black";
		}		
	}
	q$("lojy").onmouseleave=function(){
		q$("h").style.display="none";
	}


}

//滚动条效果	
//var timer=null;
//function pageScroll(){
//	var top =document.body.scrollTop;	
//	timer=setInterval(function(){
//		top-=50;
//		if(top<=0){
//			top=0;
//			clearInterval(timer);
//		}
//		document.body.scrollTop=top;
//	},20)	
//}

function pageScroll(){
	$("body").animate({"scrollTop":"0"},400);
}




//导航栏固定
window.onscroll=function(){
	var topH=document.body.scrollTop;
	var nav=q$("header_bottom_native");
	if(topH>113){
		nav.style.position="fixed";
		nav.style.top="0";
	}else{
		nav.style.position="static";
	}
}
