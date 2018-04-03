//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});

document.querySelector('.mui-slider').addEventListener('slide', function(event) {
  //注意slideNumber是从0开始的；
  //alert("你正在看第"+(event.detail.slideNumber)+"张图片");
  $("#pageOneSiteNow span").eq(event.detail.slideNumber).css({
  	"background-color":"#ffffff"
  }).siblings().css({
  	"background-color":"#cccccc",
  	"border-radius":"100%"
  });
});

window.document.addEventListener("index",function (e) {
	mui.plusReady(function() {
			var self = plus.webview.currentWebview()
			self.reload(true)
		
		
	});
});