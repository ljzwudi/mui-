/*状态栏*/
mui.plusReady(function(){
	if(mui.os.ios){
		//UIStatusBarStyleDefault //字体深色 
		//UIStatusBarStyleBlackOpaque //字体浅色
		plus.navigator.setStatusBarStyle('UIStatusBarStyleBlackOpaque');
		plus.navigator.setStatusBarBackground("#ffffff"); //背景颜色
		plus.navigator.setStatusBarStyle("dark"); //背景颜色
	}
			
});
/*下拉刷新*/
mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			auto:true,
			callback: pulldownRefresh
		},
		up: {
			auto:true,
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	console.log("下拉加载的内容");
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	},2500);
}
var count = 0;
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
	}, 2500);
}





