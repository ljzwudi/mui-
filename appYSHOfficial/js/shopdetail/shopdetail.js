mui.init();
mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh,
			contentdown : '',
			contentover : '',
			contentrefresh : '',
			style : ''
		},
		up : {
			callback: pullupRefresh,
			contentup : '',
			contentover : '',
			contentrefresh : '',
			style : ''
		}
	}
});
function pulldownRefresh() {
	mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
}
function pullupRefresh() {
	mui('#pullrefresh').pullRefresh().endPullupToRefresh(); //refresh completed
}

$(".messageIcon").on("tap",function(){
//	alert(1)
})
var share =''
var sharel =''
document.addEventListener( "plusready", function(){
	// 扩展API加载完毕，现在可以正常调用扩展API
	plus.share.getServices( function(s){
		share = s;
		for(i in s){
			if('weixin'==s[i].id){
				sharel = s[i]
			}
		}
	}, function(e){
		alert( "获取分享服务列表失败："+e.message );
	} );
}, false );

// 关闭自身窗口
function closeme(){
	var ws=plus.webview.currentWebview();
	plus.webview.close(ws);
}

function shareAction(s,ele) {
	if ( !s ) {
		return;
	}
	if ( s.authenticated ) {
		shareSystem( s,ele );
	} else {
		s.authorize( shareSystem, function(e){
			alert( "未进行认证" );
		});
	}
}
function shareSystem(share,ele){
	var sceneList = ''
	if(ele=="friend"){
		sceneList = "WXSceneSession"
	}
	if(ele=="quan"){
		sceneList = "WXSceneTimeline"
	}
	share.send({content:'分享内容',href:'http://www.dcloud.io/',extra:{scene:sceneList}}, function(){
		console.log('分享成功');
	}, function(e){
		console.log('分享失败：'+JSON.stringify(e));
	});
}
$("#friend").on('tap',function(){
	shareAction(sharel,"friend")
})
$("#quan").on('tap',function(){
	shareAction(sharel,"quan")
})

$(".messageIcon").on('tap',function(){
	closeme()
})

function plusReady(){
	// 获取应用首页窗口对象
	var ws=plus.webview.currentWebview();
	plus.webview.hide(ws);
	var h = plus.webview.getWebviewById( plus.runtime.appid );
	mui.fire(h ,'shopping');
}
$("body").on('tap',"#shopping,.detailBottomRightInsert",function(){
	closeme()
	plusReady()
})