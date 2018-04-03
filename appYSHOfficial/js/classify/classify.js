//mui.init()	
//mui.openWindow({
//    url:"classifycontent.html",//子页面HTML地址，支持本地地址和网络地址
//    id:"classifycontent.html",//子页面标志
//    styles:{
//      top:"0",
//      height:"0"
//    },
//    extras:{
//    	
//    }//额外扩展参数
//
//})
//var subpages = ['classifycontent.html']
//var subpage_style = {
//	top:'px',
//	bottom: '0'
//};
//
//mui.plusReady(function() {
//	var self = plus.webview.currentWebview();
//	for (var i = 0; i < subpages.length; i++) {
//		var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
//	}
//	self.append(sub);
//});
//
//
//mui.init({
//  subpages:[{
//	    url:"classifycontent.html",//子页面HTML地址，支持本地地址和网络地址
//	    id:"classifycontent.html",//子页面标志
//	    styles:{
//	        top:"0",
//	        height:"0"
//	    },
//	    extras:{
//	     	
//	    }//额外扩展参数
//  }]
//});
var controls = document.getElementById("segmentedControls");
	var contents = document.getElementById("segmentedControlContents");
	var html = [];
	var i = 0,
		j = 0,
		m = ["美装护肤","饰品配饰","女士箱包","男士箱包","服饰配件","女士服饰","男士服饰","女士鞋履","男士鞋履","名牌腕表","新春内购"], //左侧选项卡数量+1
		n = [
			{
				"list":"饰品配饰",
				"content":[
					{
					"title":'时尚首饰',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/1.jpg",
							"name":"手镯手链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/2.jpg",
							"name":"胸针"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/3.jpg",
							"name":"施华洛世奇"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/4.jpg",
							"name":"宝石裸石"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/5.jpg",
							"name":"首饰套装"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/6.jpg",
							"name":"项链吊坠"
						},
					]
				},
				{
					"title":'小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/8.jpg",
							"name":"腰带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/9.jpg",
							"name":"太阳镜"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/10.jpg",
							"name":"太阳伞"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/11.jpg",
							"name":"丝巾"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/12.jpg",
							"name":"户外手套"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/13.jpg",
							"name":"袖口"
						},
					]
				},
				{
					"title":'小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/8.jpg",
							"name":"腰带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/9.jpg",
							"name":"太阳镜"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/10.jpg",
							"name":"太阳伞"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/11.jpg",
							"name":"丝巾"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/12.jpg",
							"name":"户外手套"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/13.jpg",
							"name":"袖口"
						},
					]
				}
			]},
			{
				"list":"女士箱包",
				"content":[
					{
					"title":'女士小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/7.jpg",
							"name":"轻奢特惠"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/14.jpg",
							"name":"背包链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/15.jpg",
							"name":"斜挎包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/16.jpg",
							"name":"包带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/17.jpg",
							"name":"钱包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/18.jpg",
							"name":"手拿包"
						},
					]
				},
				{
					"title":'旅行箱包',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/19.jpg",
							"name":"拉杆箱"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/20.jpg",
							"name":"旅行包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/21.jpg",
							"name":"拼色包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/22.jpg",
							"name":"大包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/23.jpg",
							"name":"双肩背"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/24.jpg",
							"name":"水桶包"
						},
					]
				}
			]},
			{
				"list":"男士箱包",
				"content":[
					{
					"title":'女士小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/7.jpg",
							"name":"轻奢特惠"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/14.jpg",
							"name":"背包链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/15.jpg",
							"name":"斜挎包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/16.jpg",
							"name":"包带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/17.jpg",
							"name":"钱包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/18.jpg",
							"name":"手拿包"
						},
					]
				},
				{
					"title":'旅行箱包',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/19.jpg",
							"name":"拉杆箱"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/20.jpg",
							"name":"旅行包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/21.jpg",
							"name":"拼色包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/22.jpg",
							"name":"大包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/23.jpg",
							"name":"双肩背"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/24.jpg",
							"name":"水桶包"
						},
					]
				}
			]},
			{
				"list":"服饰配件",
				"content":[
					{
					"title":'女士小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/7.jpg",
							"name":"轻奢特惠"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/14.jpg",
							"name":"背包链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/15.jpg",
							"name":"斜挎包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/16.jpg",
							"name":"包带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/17.jpg",
							"name":"钱包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/18.jpg",
							"name":"手拿包"
						},
					]
				},
				{
					"title":'旅行箱包',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/19.jpg",
							"name":"拉杆箱"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/20.jpg",
							"name":"旅行包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/21.jpg",
							"name":"拼色包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/22.jpg",
							"name":"大包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/23.jpg",
							"name":"双肩背"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/24.jpg",
							"name":"水桶包"
						},
					]
				}
			]},
			{
				"list":"女士服装",
				"content":[
					{
					"title":'女士小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/7.jpg",
							"name":"轻奢特惠"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/14.jpg",
							"name":"背包链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/15.jpg",
							"name":"斜挎包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/16.jpg",
							"name":"包带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/17.jpg",
							"name":"钱包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/18.jpg",
							"name":"手拿包"
						},
					]
				},
				{
					"title":'旅行箱包',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/19.jpg",
							"name":"拉杆箱"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/20.jpg",
							"name":"旅行包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/21.jpg",
							"name":"拼色包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/22.jpg",
							"name":"大包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/23.jpg",
							"name":"双肩背"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/24.jpg",
							"name":"水桶包"
						},
					]
				}
			]},
			{
				"list":"男士箱包",
				"content":[
					{
					"title":'女士小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/7.jpg",
							"name":"轻奢特惠"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/14.jpg",
							"name":"背包链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/15.jpg",
							"name":"斜挎包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/16.jpg",
							"name":"包带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/17.jpg",
							"name":"钱包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/18.jpg",
							"name":"手拿包"
						},
					]
				},
				{
					"title":'旅行箱包',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/19.jpg",
							"name":"拉杆箱"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/20.jpg",
							"name":"旅行包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/21.jpg",
							"name":"拼色包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/22.jpg",
							"name":"大包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/23.jpg",
							"name":"双肩背"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/24.jpg",
							"name":"水桶包"
						},
					]
				}
			]},
			{
				"list":"女士鞋履",
				"content":[
					{
					"title":'女士小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/7.jpg",
							"name":"轻奢特惠"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/14.jpg",
							"name":"背包链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/15.jpg",
							"name":"斜挎包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/16.jpg",
							"name":"包带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/17.jpg",
							"name":"钱包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/18.jpg",
							"name":"手拿包"
						},
					]
				},
				{
					"title":'旅行箱包',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/19.jpg",
							"name":"拉杆箱"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/20.jpg",
							"name":"旅行包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/21.jpg",
							"name":"拼色包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/22.jpg",
							"name":"大包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/23.jpg",
							"name":"双肩背"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/24.jpg",
							"name":"水桶包"
						},
					]
				}
			]},
			{
				"list":"男士鞋履",
				"content":[
					{
					"title":'女士小型配件',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/7.jpg",
							"name":"轻奢特惠"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/14.jpg",
							"name":"背包链"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/15.jpg",
							"name":"斜挎包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/16.jpg",
							"name":"包带"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/17.jpg",
							"name":"钱包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/18.jpg",
							"name":"手拿包"
						},
					]
				},
				{
					"title":'旅行箱包',
					"wareList":[
						{
							"image":"../../image/images/fenlei-icon/ware-img/19.jpg",
							"name":"拉杆箱"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/20.jpg",
							"name":"旅行包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/21.jpg",
							"name":"拼色包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/22.jpg",
							"name":"大包"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/23.jpg",
							"name":"双肩背"
						},
						{
							"image":"../../image/images/fenlei-icon/ware-img/24.jpg",
							"name":"水桶包"
						},
					]
				}
			]}
		]; //每个选项卡列表数量+1
	for (; i < n.length; i++) {
		html.push('<a class="mui-control-item" href="#content' + i + '">' + n[i].list + '</a>');
	}
	controls.innerHTML = html.join('');
	var htmlContent = '';
	
	for (i = 0; i < n.length; i++) {
		htmlContent+='<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">';
		for (j = 0; j < n[i].content.length; j++) {
			htmlContent+= '<li class="mui-table-view-cell"><div class="title-show">'+n[i].content[j].title+'<div class="lookAll"></div></div><ul class="ul-show">'
			for(var q=0;q<n[i].content[j].wareList.length;q++){
				htmlContent+='<li class="li-show"><div class="wareImg"><img src="'+n[i].content[j].wareList[q].image+'" /></div><div class="wareName">'+n[i].content[j].wareList[q].name+'</div></li>'
			}
			
			htmlContent+= '</ul></li>'
		}
		htmlContent+='</ul></div>';
	}
	contents.innerHTML = htmlContent;
	//默认选中第一个
	controls.querySelector('.mui-control-item').classList.add('mui-active');
	contents.querySelector('.mui-control-content').classList.add('mui-active');
	

	$("body").on("tap",".li-show",function(){
		mui.openWindow({
			url:'../shopdetail/shopdetail.html', //需要打开页面的url地址 
			id:'shopdetail.html',  //需要打开页面的url页面id
			styles:{ 
				top:'0px',//新页面顶部位置 
				bottom:'0px',//新页面底部位置 
			}, 
			extras:{ 
				name:'aries',
				age:'18',
			//					../../image../../image.//自定义扩展参数，可以用来处理页面间传值 
			},show:{ //控制打开页面的类型
				autoShow:true,
			//					//页面loaded事件发生后自动显示，默认为true 
				aniShow:'zoom-fade-out',//页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
				duration:'500'//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
			}, waiting:{ // 控制 弹出转圈框的信息
				autoShow:true,//自动显示等待框，默认为true 
				title:'',//等待对话框上显示的提示内容 
				options:{ 
					width:'50px',//等待框背景区域宽度，默认根据内容自动计算合适宽度 
					height:'50px',//等待框背景区域高度，默认根据内容自动计算合适高度 ../../image../../image../../image 
					} 
				}
		});
	})
	
//隐藏当前页面
function plusReady(){
	// 获取应用首页窗口对象
	var ws=plus.webview.currentWebview();
	var h = plus.webview.getWebviewById( plus.runtime.appid );
	mui.fire(h ,'shopping');
}
//点击购物车按钮进入购物车页面
$("body").on("touchstart","#shopCart",function(){
	if(window.plus){
		plusReady();
	}else{
		document.addEventListener('plusready', plusReady, false);
	}
})


	