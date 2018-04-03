mui.init();
mui.init({
	swipeBack: true //启用右滑关闭功能
});
$(function(){
	
	$("body").on('keyup','#smsLoginInputPhone,#smsLoginInputCode',function(){
		if($("#smsLoginInputPhone").val()!= '' && $("#smsLoginInputCode").val()!= ''){
			$("#smsLoginBtn").css('background','#55026e')
			
		}else{
			$("#smsLoginBtn").css('background','#B5B5B5')
		}
	})
	
	$("#smsLoginBtn").on("tap",function(){
		console.log($(this).css('background-color'))
		if($(this).css('background-color') == 'rgb(85, 2, 110)'){
			
		}
	});
})


// 关闭自身窗口
function closeme(){
	var ws=plus.webview.currentWebview();
	plus.webview.close(ws);
}