function plusReady(){
	// 获取应用首页窗口对象
	var ws=plus.webview.currentWebview();
	var h = plus.webview.getWebviewById( plus.runtime.appid );
	mui.fire(h ,'header');
}
$('body').on('touchstart',".gouwuche",function(){
	if(window.plus){
		plusReady();
	}else{
		document.addEventListener('plusready', plusReady, false);
	}
})