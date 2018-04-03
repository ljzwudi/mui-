
mui.init();

var subpages = ['./html/pageOne/pageOne.html', './html/classify/classify.html','./html/discover/discover.html','./html/gouwuche/gouwuche.html','./html/mine/mine.html'];
var subpage_style = {
	top:'0px',
	bottom: '51px'
};


var aniShow = {};

 //创建子页面，首个选项卡页面显示，其它均隐藏；
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	for (var i = 0; i < subpages.length; i++) {
		var temp = {};
		var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
		if (i > 0) {
			temp[subpages[i]] = "true";
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
var liS = document.getElementsByClassName('mui-tab-item');
for(var j = 0 ; j < liS.length ; j++){
	liS[j].index = j;
}

mui('.mui-bar-tab').on('tap', 'a', function(e) {
	var indexBase = document.getElementsByClassName("indexBase");
	var indexBaseOn = document.getElementsByClassName("indexBaseOn");
	for(var i=0;i<indexBase.length;i++){
		var temp = {};
		temp[subpages[this.index]] = "true";
		mui.extend(aniShow,temp);
		indexBase[i].style.display = "block"
		indexBaseOn[i].style.display = "none"
		indexBase[this.index].style.display='none';
		indexBaseOn[this.index].style.display='block';
		
		if(this.index == 4){
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
				plus.navigator.setStatusBarBackground('#ffffff');
				plus.navigator.setStatusBarStyle('dark');
			}
			if(window.plus){
				plusReady();
			}else{
				document.addEventListener('plusready', plusReady, false);
			}
		}
		
	}
	//alert(this.index);
	var targetTab = this.getAttribute('href');
	if (targetTab == activeTab) {
		return;
	}
	//显示目标选项卡
	//若为iOS平台或非首次显示，则直接显示
	if(mui.os.ios||aniShow[targetTab]){
		plus.webview.show(targetTab);
//		targetTab.reload(true)
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


/*function plusReady(){
	// 获取应用首页窗口对象
	var ws = plus.webview.getWebviewById('pageOneIndex.html')
	console.log(ws.getURL())
	mui.fire(ws,'index')
}*/

//监听购物车页面的refresh事件，当触发后，该页面监听后执行方法
document.addEventListener("refreshList",function (e) {
	
	plus.webview.show(subpages[0]);
	activeTab = subpages[0];
	$(".indexBase").eq(0).hide();
	$(".indexBaseOn").eq(0).show();
	$(".mui-tab-item").eq(0).addClass('mui-active');
	$(".indexBase").eq(3).show();
	$(".indexBaseOn").eq(3).hide();
	$(".mui-tab-item").eq(3).removeClass('mui-active');
	/*if(window.plus){
		plusReady();
	}else{
		document.addEventListener('plusready', plusReady, false);
	}*/
});

//监听购物车页面的shopping事件，当触发后，该页面监听后执行方法
document.addEventListener("shopping",function (e) {
	plus.webview.show(subpages[3]);
	activeTab = subpages[3];
	$(".indexBase").eq(3).hide();
	$(".indexBaseOn").eq(3).show();
	$(".mui-tab-item").eq(3).addClass('mui-active');
	$(".indexBase").eq(1).show();
	$(".indexBaseOn").eq(1).hide();
	$(".mui-tab-item").eq(1).removeClass('mui-active');
});

//监听购物车页面的header事件，当触发后，该页面监听后执行方法
document.addEventListener("header",function (e) {
	plus.webview.show(subpages[3]);
	activeTab = subpages[3];
	$(".indexBase").eq(3).hide();
	$(".indexBaseOn").eq(3).show();
	$(".mui-tab-item").eq(3).addClass('mui-active');
	$(".indexBase").eq(0).show();
	$(".indexBaseOn").eq(0).hide();
	$(".mui-tab-item").eq(0).removeClass('mui-active');
});

//监听购物车页面的header事件，当触发后，该页面监听后执行方法
document.addEventListener("discover",function (e) {
	plus.webview.show(subpages[3]);
	activeTab = subpages[3];
	$(".indexBase").eq(3).hide();
	$(".indexBaseOn").eq(3).show();
	$(".mui-tab-item").eq(3).addClass('mui-active');
	$(".indexBase").eq(2).show();
	$(".indexBaseOn").eq(2).hide();
	$(".mui-tab-item").eq(2).removeClass('mui-active');
});





