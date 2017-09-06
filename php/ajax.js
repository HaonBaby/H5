$(".bo").click(function(){
	
		$.ajax({
			url:"php/regSave.php",
			async:true,
			data:"userName="+$('#inpu1').val()+"&userPass="+$("#inpu2").val(),
			type:"post",
			success:function(data){
				//console.log(data)
				if(data=="1"){					
					location.href="shouye.html";
					}else{
						alert("您输入的有误，请检查注册")
					}
				}		
			})
		}
	
$("#content_cb").blur(function(){
	$.ajax({
		url:"php/yonghuming.php",
		async:true,
		data:"userName="+this.value,
		type:"get",
		success:function(data){
			if(data=="0" && reg.test($("#content_cb")[0].value)==true){
				$("#content_cd").css("display","block")
				$("#content_cc").css("display","none")
				$("#q1").css("display","none")
			}
			if(data=="1" && reg.test($("#content_cb")[0].value)==true){
				alert("*该手机已注册");
			}
				
		}		
	})
}) 