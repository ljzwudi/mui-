
var pageOneHeader = $("header").outerHeight(true);
console.info(pageOneHeader);
mui.init({
    subpages:[{
        url:'discoverSub/discoverSub.html',
        id:'discoverSub.html',
        styles:{
            top:pageOneHeader +"px",
            bottom: '0px',
        }
    }]
});

function plusReady(){
	// 获取应用首页窗口对象
	var ws=plus.webview.currentWebview();
	var h = plus.webview.getWebviewById( plus.runtime.appid );
	mui.fire(h ,'discover');
}
$('body').on('touchstart',".icon-gouwuche",function(){
	if(window.plus){
		plusReady();
	}else{
		document.addEventListener('plusready', plusReady, false);
	}
})

