/*js代码*/
/*var pageOne = window.document.getElementById("defaultTab");
var classify = window.document.getElementById("classify.html");
var discover = window.document.getElementById("discover.html");
var cart = window.document.getElementById("cart.html");
var mine = window.document.getElementById("mine.html");
pageOne.addEventListener("click",function(){
	mui.openWindow({ 
		url:'../../html/pageOne/pageOne.html', //需要打开页面的url地址 
		id:'target',  //需要打开页面的url页面id
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
			title:'东翌学院...',//等待对话框上显示的提示内容 
			options:{ 
				width:'300px',//等待框背景区域宽度，默认根据内容自动计算合适宽度 
				height:'300px',//等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
			} 
		}
	});	
});
classify.addEventListener("click",function(){
	mui.openWindow({ 
		url:'../../html/classify/classify.html', //需要打开页面的url地址 
		id:'target',  //需要打开页面的url页面id
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
			title:'东翌学院...',//等待对话框上显示的提示内容 
			options:{ 
				width:'300px',//等待框背景区域宽度，默认根据内容自动计算合适宽度 
				height:'300px',//等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
			} 
		}
	});	
});
discover.addEventListener("click",function(){
	mui.openWindow({ 
		url:'../../html/discover/discover.html', //需要打开页面的url地址 
		id:'target',  //需要打开页面的url页面id
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
			title:'东翌学院...',//等待对话框上显示的提示内容 
			options:{ 
				width:'300px',//等待框背景区域宽度，默认根据内容自动计算合适宽度 
				height:'300px',//等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
			} 
		}
	});	
});
cart.addEventListener("click",function(){
	mui.openWindow({ 
		url:'../../html/cart/cart.html', //需要打开页面的url地址 
		id:'target',  //需要打开页面的url页面id
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
			title:'东翌学院...',//等待对话框上显示的提示内容 
			options:{ 
				width:'300px',//等待框背景区域宽度，默认根据内容自动计算合适宽度 
				height:'300px',//等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
			} 
		}
	});	
});
mine.addEventListener("click",function(){
	mui.openWindow({ 
		url:'../../html/mine/mine.html', //需要打开页面的url地址 
		id:'target',  //需要打开页面的url页面id
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
			title:'东翌学院...',//等待对话框上显示的提示内容 
			options:{ 
				width:'300px',//等待框背景区域宽度，默认根据内容自动计算合适宽度 
				height:'300px',//等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
			} 
		}
	});	
});*/





/*mui+原生
 * 
 *mui初始化*/

mui.init();
var subpages = ['../../html/pageOne/pageOne.html', '../../html/classify/classify.html','../../html/discover/discover.html','../../html/cart/cart.html','../../html/mine/mine.html'];
var subpage_style = {
	top:'0px',
	bottom: '50px'
};


var aniShow = {};

 //创建子页面，首个选项卡页面显示，其它均隐藏；
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	for (var i = 0; i < subpages.length; i++) {
		var temp = {};
		var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
		var sub = plus.webview.create("../../html/pageOne/pageOne.html","",{
				"top":"0",
				"bottom":"50px"
			}
		);
		if (i > 0) {
			sub.hide();
		}else{
			temp[subpages[i]] = "true";
			mui.extend(aniShow,temp);
		}
		self.append(sub);
	}
});
 //当前激活选项
var activeTab = subpages[0];

 //选项卡点击事件
mui('.mui-bar-tab').on('tap', 'a', function(e) {
	var targetTab = this.getAttribute('href');
	if (targetTab == activeTab) {
		
		
		return;
	}
	if(targetTab == subpages[4]){
		function plusReady(){
			// 全屏显示
			plus.navigator.setStatusBarBackground('#000000');
			plus.navigator.setStatusBarStyle('light');
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener('plusready', plusReady, false);
		}
	}else{
		function plusReady(){
			// 全屏显示
			plus.navigator.setStatusBarBackground('#f7f7f7');
			plus.navigator.setStatusBarStyle('dark');
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener('plusready', plusReady, false);
		}
	}
	if(targetTab == subpages[0]){
		console.info("点击了首页");
		//plus.runtime.openURL('../../html/pageOne/pageOne.html');
		plus.webview.open('http://127.0.0.1:8020/appYSH/html/pageOne/pageOne.html');
	}
	//显示目标选项卡
	//若为iOS平台或非首次显示，则直接显示
	if(mui.os.ios||aniShow[targetTab]){
		plus.webview.show(targetTab);
	}else{
		//否则，使用fade-in动画，且保存变量
		var temp = {};
		temp[targetTab] = "true";
		mui.extend(aniShow,temp);
		plus.webview.show(targetTab,"fade-in",300);
	}
	//隐藏当前;
	plus.webview.hide(activeTab);
	//更改当前活跃的选项卡
	activeTab = targetTab;
});
 //自定义事件，模拟点击“首页选项卡”
document.addEventListener('gohome', function() {
	var defaultTab = document.getElementById("defaultTab");
	//模拟首页点击
	mui.trigger(defaultTab, 'tap');
	//切换选项卡高亮
	var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
	if (defaultTab !== current) {
		current.classList.remove('mui-active');
		defaultTab.classList.add('mui-active');
	}
});