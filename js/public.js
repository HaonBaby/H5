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
	
	
//	我的周大福
	
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



// 视频js

	var btn=document.getElementById("video");
	var video_box=document.getElementById("video_box");
	var  video_btn=document.getElementById("video_btn");
	q$("video_zzc").onclick=function(){
		video_zzc.style.display="block";
	}
	btn.onclick=function(){
		video_box.style.display="block";
		video_area.style.display="block";
	}
	video_btn.onclick=function(){
		video_box.style.display="none";
		video_area.style.display="none";
	}
	
	
//导航栏 全部商品延迟js
	
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


//	q$("tiaozhuanyidongduan").onclick(){
//		location.href="zdf_ydd/phone_index.html";
//	}








q$("header_bottom_right").onclick=function(){
	location.href="gwc/gwc.html";
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


//滚动条效果	jq
function pageScroll(){
	$("body").animate({"scrollTop":"0"},400);
}
function ttzz(){
	location.href="shoppingCar/shoppingCar.html";
}





//转到黄金导航页面
function goldNav(){
	location.href="gold/gold.html";
}


//转到戒指页面
function ring(){
	location.href="ring/ring.html";
}


//固定导航栏
window.onscroll=function(){

var topH=document.body.scrollTop;
var nav=q$("header_bottom_native");
if(topH>113){ 
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.zIndex = "2000";
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
        nav.style.position ="static";
    }
    
    
}




//登录
function show(){
	q$("dlzzc").style.display="block";
	q$("regiser").style.transform="scale(1)"
	q$("regiser").style.transition="all .3s"
}
	
	q$("close").onclick=function(){
	q$("regiser").style.transform="scale(0)"
	q$("dlzzc").style.display="none";
}

	q$("pd").onclick=function(){
	q$("pd").style.borderBottomColor="#9e0028";
	q$("dt").style.borderBottomColor="white";
	q$("yincang").style.display="block";
	}
	q$("dt").onclick=function(){
	q$("pd").style.borderBottomColor="white";
	q$("dt").style.borderBottomColor="#9e0028";	
	q$("yincang").style.display="none";
	}

//勾选自动免7天登录提示
q$("gx").onmouseover=function(){
	q$("wangba").style.display="block";
}
q$("gx").onmouseout=function(){
	q$("wangba").style.display="none";
}




//注册
function run(){
	q$("zhuce").style.opacity="1";
	q$("zhuce").style.transform="scale(1)";
	q$("dlzzc").style.display="block";
}
	q$("closezhuce").onclick=function(){
	q$("zhuce").style.transform="scale(0)";
	q$("dlzzc").style.display="none";
	}

//注册手机号邮箱验证
q$("inpu1").onblur=function(){
	var v=q$("inpu1").value;
	var reg = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/g;
	if(reg.test(v)){
		q$("tsxx").innerHTML=" ";
		q$("ulszc_li").style.border="none";
		q$("ulszc_li").style.borderBottom="1px solid #d5d5d5";
	}else{
		q$("tsxx").innerHTML="!您输入的手机号或邮箱格式不正确";
		q$("ulszc_li").style.border="1px solid #9e0028";
	}
}
//注册密码格式验证
q$("inpu2").onblur=function(){
	var m=q$("inpu2").value;
	var reg=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*q$/g;
	if(reg.test(m)){
		q$("tsxx").innerHTML=" ";
		q$("ulszc_li1").style.border="none";
		q$("ulszc_li1").style.borderBottom="1px solid #d5d5d5";
	}else{
		q$("tsxx").innerHTML="!密码必须由8-16个英文字母和数字组成";
		q$("ulszc_li1").style.border="1px solid #9e0028";
	}
}







//随机获取图形验证码
	var num=0;
	q$("txyzm").onclick=function(){
		var num=parseInt(Math.random()*10);
		console.log(num);
		q$("txyzm").innerHTML="<img src='img/"+num+".gif'/>";		
	}




//跳转注册
function tzzhuce(){	
	q$("regiser").style.transform="scale(0)";
	q$("zhuce").style.transform="scale(1)";		
}

//跳转登录
function tzdl(){
	q$("regiser").style.transform="scale(1)";
	q$("zhuce").style.transform="scale(0)";
}


function yidong(){
	location.href="zdf_ydd/phone_index.html";
}


// 活动页面
function activity(){
	location.href="activity/public.html";
}

q$("btns").onmouseover=function(){
	q$("btns").style.background="#9e0028";
	$("#aaa").css({"color":"white"});
}
q$("btns").onmouseout=function(){
	q$("btns").style.background="white";
	$("#aaa").css({"color":"#666"});
}

//图片透明度1-0-1
$(function(){
	$("#mao>div>div").mouseenter(function(){
		$(this).fadeTo("fast","0.5",function(){
			$(this).fadeTo("fast","1");
		});
	});	
});



//右下角滑动效果
$(window).scroll( function() { 
	var s=document.body.scrollTop||document.documentElement.scrollTop;
	if(s>300){
//		$("#box_r").height(277);
		$("#box_r").css({"height":"280px","transition":"all .5s"});
	}else if(s<300){
		$("#box_r").css({"height":"230px"});
	}
	
	//右楼梯效果
	var st=document.body.scrollTop||document.documentElement.scrollTop;
	if(st>0){
		$("#floor").css({"height":"280px","overflow":"static","transition":"all 1s"});
	}else if(st<200){
		$("#floor").css({"height":"0px"});
	}
	



//跳转对应的板块
var arr=["content_photo","content","content_three","mao","history","kuli","baoyou"];		
var p= 0;				
	$("#floor").find("li").click(function(){	
		var q=$(this).index();
		console.log(q);
		 p=q$(arr[q]).offsetTop;
		$("body").stop().animate({"scrollTop":p+"px"},400);
		
});
for(let i=0;i<arr.length;i++){
	var sss=document.body.scrollTop;
		var zz=q$(arr[i]).offsetTop;
		if(sss>(zz-100)){			
		$("#floor>li")[i].style.transform="translate(-20px)";
		$("#floor>li")[i].style.color="blue";
			if(i>0){
				$("#floor>li")[i-1].style.transform="translate(0px)";
				$("#floor>li")[i-1].style.color="#9E0028";
			}
		}else{
			$("#floor>li")[i].style.transform="translate(0px)";
			$("#floor>li")[i].style.color="#9E0028";			
	}
}
	

});





	


//右下角回到顶部滑出效果
$(function(){
	$("#hddb").mouseenter(function(){
		q$("huidaodingbu").style.transform="translateX(-80px)";
	});
	$("#hddb").mouseleave(function(){
		q$("huidaodingbu").style.transform="translateX(50px)";
	});	
	
});




