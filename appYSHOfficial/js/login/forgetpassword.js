mui.init();
mui.init({
	swipeBack: true //启用右滑关闭功能
});
$(function(){
	
	$("body").on('keyup','#forgetLoginInputPhone,#forgetInputSmsCode,#forgetInputpsd,#forgetInputpsdOnce',function(){
		if($("#smsLoginInputPhone").val()!= '' && $("#forgetInputSmsCode").val()!= ''&& $("#forgetInputpsd").val()!= ''&& $("#forgetInputpsdOnce").val()!= ''){
			$("#forgetBtn").css('background','#55026e')
			
		}else{
			$("#forgetBtn").css('background','#B5B5B5')
		}
	})
	
	$("#forgetBtn").on("tap",function(){
		console.log($(this).css('background-color'))
		if($(this).css('background-color') == 'rgb(85, 2, 110)'){
			
		}
	});
})