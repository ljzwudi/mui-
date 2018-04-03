mui.init();//初始化mui

//控制首页header高度自适应
var pageOneHeader = $("header").outerHeight(true);
$("#pageOneTopScrollMain").css({
	"top":$("header").outerHeight(true)/2,
	"position":"fixed"
});

document.addEventListener("refreshList",function (e) {
	
});

//应用一个内容子页面
mui.init({
	gestureConfig:{
		doubletap:true
	},
    subpages:[{
	    url:"../../com/html/pageOneIndex.html",//子页面HTML地址，支持本地地址和网络地址
	    id:"pageOneIndex.html",//子页面标志
	    styles:{
	        top:pageOneHeader/2  + $("#pageOneTopScrollMain").outerHeight(true)+"px",
	        bottom:"auto",
	        height:"100%"
	        
	    },
	    extras:{
	     	
	    }//额外扩展参数
    }]
});

document.addEventListener("refreshList2",function (e) {
	
	var ws=plus.webview.currentWebview();
	alert(JSON.stringify(ws))
	ws.reload(true)
})



/*状态栏*/
mui.plusReady(function(){
	if(mui.os.ios){
		//UIStatusBarStyleDefault //字体深色 
		//UIStatusBarStyleBlackOpaque //字体浅色
		plus.navigator.setStatusBarStyle('UIStatusBarStyleBlackOpaque');
		plus.navigator.setStatusBarBackground("#007aff"); //背景颜色
	}
			
})

function plusReady(){
	// 获取应用首页窗口对象
	var ws=plus.webview.currentWebview();
	var h = plus.webview.getWebviewById( plus.runtime.appid );
	mui.fire(h ,'header');
}
$('body').on('touchstart',".icon-gouwuche",function(){
	if(window.plus){
		plusReady();
	}else{
		document.addEventListener('plusready', plusReady, false);
	}
})