mui.init();
mui.init({
	swipeBack: true //启用右滑关闭功能
});
$(function(){
	
	$("body").on('keyup','#loginInputPhone,#loginInputSms',function(){
		if($("#loginInputPhone").val()!= '' && $("#loginInputSms").val()!= ''){
			$("#loginBtn").css('background','#55026e')
			
		}else{
			$("#loginBtn").css('background','#B5B5B5')
		}
	})
	
	$("#loginBtn").on("tap",function(){
		console.log($(this).css('background-color'))
		if($(this).css('background-color') == 'rgb(85, 2, 110)'){
			
		}
	});
})