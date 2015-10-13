$(document).ready(function(){
	$(".register-btn").hover(function(){
		$(this).css("color","white");
	});
	$("#register-protocol").click(function(){
		if(document.getElementById("register-protocol").checked){
			$(".register-btn").attr("disabled",false);
			$(".register-btn").css("backgroundColor","#24dfc2");
		}
		else{
			$(".register-btn").attr("disabled",true);
			$(".register-btn").css("backgroundColor","#DDD");
		}
	});
	$("#register-form").validate({
		rules:{
			nickname:{
				required:true,
				maxlength:10
			},
			password:{
				required:true,
				maxlength:20,
				minlength:8
			},
			"confirm-password":{
				eaualTo:".register-div input[name='confirm-password']"
			},
			phone:{
				required:true,
				maxlength:11,
				minlength:11,
				digits:true
			},
			email:{
				email:true
			}

		},
		messages:{
			nickname:{
				required:"用户名不能为空",
				maxlength:"用户名长度不能超过十位"
			},
			password:{
				required:"密码不能为空",
				minlength:"密码长度不能低于8位",
				maxlength:"密码长度不能超过20位"
			},
			"confirm-password": {
				equalTo:"两次输入的密码不一致"
			},
			phone: {
				digits:"请输入11位中国大陆手机号",
				maxlength:"请输入11位中国大陆手机号",
				minlength:"请输入11位中国大陆手机号",
				required:"手机号不能为空"
			},
			"security-code": {
				required:""
			},
			mail:{
				email:"请输入规范的邮箱号"
			}
		},
		errorPlacement:function(error, element) {
	        //error是错误提示元素span对象  element是触发错误的input对象
	        //发现即使通过验证 本方法仍被触发
	        //当通过验证时 error是一个内容为空的span元素
	        element.parent().next(".after-item").text("");
	        error.appendTo(element.parent().next(".after-item"));
    	},
    	errorClass:"error-info"

	})


});