function ww(id){
	return document.getElementById(id);
}
window.onload=function(){
	ww("golds").onmouseenter=ww("bigBox").onmouseenter=function(event){
	ww("ulrow").style.display="block";
	ww("lastId").style.display="block";
	ww("golds").style.backgroundColor="white";
	}	
	ww("golds").onmouseleave=function(event){
	ww("lastId").style.display="none";
	ww("ulrow").style.display="none";	
	ww("ulrow").style.height="209px";
	ww("golds").style.backgroundColor="#f0b60a";	
	}
	ww("lastId").onclick=function(event){
	ww("ulrow").style.height="314px";	
	ww("lastId").style.display="none";
	}
	
	
	
	
	ww("header_bottom_right").onmouseover=function(event){
	ww("shopC").style.display="block";	
	ww("header_bottom_right").style.border="1px solid #e5e5e5";	
	ww("header_bottom_right").style.borderBottom="none";	
	}
	ww("header_bottom_right").onmouseout=function(event){
	ww("shopC").style.display="none";
	ww("header_bottom_right").style.border="none";	
	ww("header_bottom_right_two").style.border="none";	
	}
	ww("header_bottom_right_two").onmouseover=function(event){
	ww("userP").style.display="block";
	}
	ww("header_bottom_right_two").onmouseout=function(event){
	ww("userP").style.display="none";
	}



//全部商品延迟框
ww("yanchi").onmouseenter=function(){
		setTimeout(yanshi,30);
		function yanshi(){
		ww("q").style.display="block";
		ww("q").style.color="black";
		}		
	}
	ww("yanchi").onmouseleave=function(){
		ww("q").style.display="none";
	}


//gold延迟框
ww("lojy").onmouseenter=function(){
		setTimeout(jj,30);
		function jj(){
		ww("h").style.display="block";
		ww("h").style.color="black";
		}		
	}
	ww("lojy").onmouseleave=function(){
		ww("h").style.display="none";
	}

//购物车
ww("jiajian").firstElementChild.onclick=function(){
	var num=ww("jiajian").firstElementChild.nextElementSibling.innerHTML;
	num--;
	if(num<=0){
		num=1;
	}
	ww("jiajian").firstElementChild.nextElementSibling.innerHTML=num;
	var money=num*20160.00;
	var money=money.toFixed(2);
	ww("zongjia").innerHTML=money;
}
ww("jiajian").lastElementChild.onclick=function(){
	var num=ww("jiajian").firstElementChild.nextElementSibling.innerHTML;
	num++;
	ww("jiajian").firstElementChild.nextElementSibling.innerHTML=num;
	var money=num*20160.00;
	var money=money.toFixed(2);
	ww("zongjia").innerHTML=money;
}


//放大镜
ww("bbigBox").onmousemove=function(event){
		var s=document.body.scrollTop||document.documentElement.scrollTop;
		var evt=event||window.onload;
		var x=evt.clientX-this.offsetLeft-50;
		var y=evt.clientY-this.offsetTop-50+s;
		if(x<0){
			x=0;
		}else if(x>200-100){
			x=200-100;	
		}

		if(y<0){
			y=0;
		}else if(y>200-100){
			y=200-100;
		}
		ww("fangdajing").style.left=x+"px";
		ww("fangdajing").style.top=y+"px";

		ww("imgId").style.left=-4*x+"px";
		ww("imgId").style.top=-4*y+"px";

		ww("showImg").style.display="block";
	}
		ww("bbigBox").onmouseout=function(event){
			ww("showImg").style.display="none";
		}




}

//滚动条效果	js
//var timer=null;
//function pageScroll(){
//	var top =document.body.scrollTop;	
//	timer=setInterval(function(){
//		top-=60;
//		if(top<=0){
//			top=0;
//			clearInterval(timer);
//		}
//		document.body.scrollTop=top;
//	},10)	
//}
//滚动条效果	jq
function pageScroll(){
$("body").animate({"scrollTop":"0"},400);	
}


//导航栏固定
window.onscroll=function(){
	var topH=document.body.scrollTop;
	var nav=ww("header_bottom_native")
	if(topH>113){
		nav.style.position="fixed";
		nav.style.top="0";
	}else{
		nav.style.position="static";
	}
	
	
	if(topH>1115){
		ww("miaoshu").style.position="fixed";
		ww("miaoshu").style.top="45px";
		ww("miaoshu").style.zIndex="2000";
	}else{
		ww("miaoshu").style.position="static";
	}
}

//$(window).scroll(function(){
//	var ms=ww("miaoshu").offsetTop;
//	console.log(ms);
//
//	
//});
	


	

