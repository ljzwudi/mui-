mui.init();
mui.init({
	swipeBack: true //启用右滑关闭功能
});
$(function(){
	
	$("body").on('keyup','#registerInputPhone,#registerInputSmsCode,#registerInputPsd',function(){
		if($("#registerInputPhone").val()!= '' && $("#registerInputSmsCode").val()!= ''&& $("#registerInputPsd").val()!= ''){
			$("#registerBtn").css('background','#55026e')
			
		}else{
			$("#registerBtn").css('background','#B5B5B5')
		}
	})
	
	$("#registerBtn").on("tap",function(){
		console.log($(this).css('background-color'))
		if($(this).css('background-color') == 'rgb(85, 2, 110)'){
			
		}
	});
})