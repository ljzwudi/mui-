
/*var ws=null,embed=null;
// H5 plus事件处理
function plusReady(){
	ws=plus.webview.currentWebview();
	embed=plus.webview.create('../../com/html/barTab.html', 'test',{bottom:'0',height:'50px'});
	embed.show();
}
if(window.plus){
	plusReady();
}else{
	console.info("加载");
	document.addEventListener('plusready', plusReady, false);
}*/

//打开新窗口
mui('#mineLogout').on('tap',"div", function(e) {
	mui.openWindow({
		url:'../login/login.html', //需要打开页面的url地址 
		id:'login.html',  //需要打开页面的url页面id
		styles:{ 
			top:'0px',//新页面顶部位置 
			bottom:'0px',//新页面底部位置 
	//					width:newpage-width,//新页面宽度，默认为100% 
	//					height:newpage-height,//新页面高度，默认为100% ...... 
		}, 
		extras:{ 
			name:'aries',
			age:'18',
	//					.....//自定义扩展参数，可以用来处理页面间传值 
		},show:{ //控制打开页面的类型
			autoShow:true,
	//					//页面loaded事件发生后自动显示，默认为true 
			aniShow:'zoom-fade-out',//页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
			duration:'1000'//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
		}, waiting:{ // 控制 弹出转圈框的信息
			autoShow:true,//自动显示等待框，默认为true 
			title:'',//等待对话框上显示的提示内容 
			options:{ 
				width:'50px',//等待框背景区域宽度，默认根据内容自动计算合适宽度 
				height:'50px',//等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
				} 
			}
	});
});
