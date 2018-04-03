mui.init();
mui.init({
	pullRefresh: {
		container: '#shoppingList',
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
	mui('#shoppingList').pullRefresh().endPulldownToRefresh(); //refresh completed
}
function pullupRefresh() {
	mui('#shoppingList').pullRefresh().endPullupToRefresh(); //refresh completed
}


var delColor = false
var selectedNum = 0
var html = '';			
var obj = [
	{
		'shopType':'海外直购',
		'shopList':[
			{
				"shopImg":"../../image/images/gouwuche/gouwuche-shopImg_03.jpg",
				"shopTitle":"APM Monaco FESTIVALL系列 银镶晶钻繁星戒指 A18075OX",
				"shopColor":"",
				"shopPrice":"7,908"
			},
			{
				"shopImg":"../../image/images/gouwuche/gouwuche-shop1img.jpg",
				"shopTitle":"Gucci Sylvie动物造型铆钉手提包 意大利制造",
				"shopColor":"颜色：1060 NERO",
				"shopPrice":"36,420"
			}
		]
	},
	{
		'shopType':'自营海外仓',
		'shopList':[
			{
				"shopImg":"../../image/images/gouwuche/gouwuche-shopimg.jpg",
				"shopTitle":"VERSACE  黑色与金色 不锈钢蓝 宝石牛皮 DV-25圆形腕表",
				"shopColor":"颜色：PNUL",
				"shopPrice":"500.00"
			},
			{
				"shopImg":"../../image/images/gouwuche/gouwuche-shop1img.jpg",
				"shopTitle":"Gucci Sylvie动物造型铆钉手提包 意大利制造",
				"shopColor":"颜色：1060 NERO",
				"shopPrice":"36,420"
			}
		]
	}
	
]
for(var i=0;i<obj.length;i++){
	html+='<div  class="shoppingCart"><div class="layer"></div><div class="itemName"><i class="iconfont icon-yuan itemsSel"></i><em class="mui-icon mui-icon-home home"></em><span>'+obj[i].shopType+'</span></div><ul class="ulList">'
	for(var j=0;j<obj[i].shopList.length;j++){
		html+='<li class="liList mui-table-view-cell">'	
		html+='<div class="yuan"><i class="iconfont icon-yuan itemSel"></i></div>'
		html+='<div class="shopName"><img src="'+obj[i].shopList[j].shopImg+'" /></div>'	
		html+='<div class="shopContent">'
		html+='<p class="shopTitle">'+obj[i].shopList[j].shopTitle+'</p>'
		html+='<p class="colorCenter">'+obj[i].shopList[j].shopColor+'</p>'
		html+='<div class="bottomNum">'
		html+='<div class="priceLeft"><span>￥'+obj[i].shopList[j].shopPrice+'</span></div>'
		html+='<div class="numRight"><span class="reduce">－</span><input type="text" value="1" class="num" /><span class="add">＋</span></div>'
		html+='</div>'
		html+='</div>'
		html+='</li>'
	}
	html+='</ul></div>'
}
$('.mui-scroll').html(html)
$("body").on("touchstart",".add",function(){
	var addNum = $(this).prev().val()
	addNum++ //商品数量增加
	$(this).prev().val(addNum)
	price()
	totalPrice()
})
$("body").on("touchstart",".reduce",function(){
	var jNum = $(this).next().val()
	jNum-- //商品数量减少
	if(jNum < 1){
		jNum = 1
		return false
	}
	$(this).next().val(jNum)
	price()
	totalPrice()
})
$("body").on("change",".num",function(){
	price()
	totalPrice()
})
//总计
function price(){
	var totalPrice = 0 //商品总额
	var $sonCheckBox = $('.itemSel');
	$sonCheckBox.each(function(){
		if($(this).is('.icon-duigou1')){
			var $mul = $(this).parent().parent()
			var s = $mul.find(".priceLeft span").text()
			s=s.replace(/,/g,'');
			s=s.replace(/￥/g,'');
			console.log(s)
			totalPrice += Number(s)*Number($mul.find(".num").val())
		}
	})
	if(totalPrice>0){
		$('#checkOut').addClass('bottomBtnColor')
	}else{
		$('#checkOut').removeClass('bottomBtnColor')
	}
	$(".shopTotal").html(totalPrice+'.00')
}

//删除功能
function del(){
	 //商品总额
	var $sonCheckBox = $('.itemSel');
	var $parCheckBox =$(".shoppingCart")
	var emtyHtml = ''
	$sonCheckBox.each(function(){
		if($(this).is('.icon-duigou1')){
			var $mul = $(this).parent().parent()
			$mul.remove()
		}
	})
	$parCheckBox.each(function(){
		
		if($(this).find('.liList').length==0){
			$(this).remove()
		}
		
	})
	if($('.liList').length==0){
		$('.selectAll').hide()
		emtyHtml+='<div class="emptyBox" style="display: block;">'
		emtyHtml+='<div class="emptyImg">'
		emtyHtml+='<img src="../../image/images/gouwuche-nostate_03.jpg" />'
		emtyHtml+='</div>'
		emtyHtml+='<div class="emptyWord">富豪的购物车从不会空的...</div>'
		emtyHtml+='<div class="emptyBtn">去购物</div>'
		$('#shoppingList').html(emtyHtml)
		$('#shoppingList').addClass('emptyMan')
		$(".bottomBar").css("display","none")
		$(".btnEdit").css("display","none")
	}
	sel()
	price()
	totalPrice()
}

function sel(){
	delColor = false
	var $sonCheckBox = $('.itemSel');
	selectedNum = $("li").find('.icon-duigou1').length
	$('.selected').text(selectedNum) 
	$sonCheckBox.each(function(){
		if($(this).is('.icon-duigou1')){
			delColor = true
		}
	})
	return delColor
}


$("body").on("touchstart","#delBtn",function(){
	del()
})
//编辑、删除按钮切换
$("body").on("touchstart",".btnEdit",function(){
	if($(this).text()=="编辑"){
		$('.bottomRightDel').show()
		$('.bottomRight').hide()
		$(".btnEdit").text("完成")
	}else{
		$('.bottomRightDel').hide()
		$('.bottomRight').show()
		$(this).text("编辑")
	}
})
//单选选功能

$("body").on("touchstart",".itemSel",function(){
	if(!$(this).hasClass('icon-duigou1')){
		$(this).addClass('icon-duigou1')
	}else{
		$(this).removeClass('icon-duigou1')
		$(this).addClass('icon-yuan')
	}
	var shopL = $(this).parent().parent().parent().find('li')
	if(shopL.length ==$(this).parent().parent().parent().find('li').find('.icon-duigou1').length ){
		shopL.parent().prev().find('.itemsSel').addClass('icon-duigou1')
	}else{
		shopL.parent().prev().find('.itemsSel').removeClass('icon-duigou1')
	}
	var shopAll = $('.liList').length
	if(shopAll == $('li').find('.icon-duigou1').length ){
		$('#selAll').addClass('icon-duigou1')
	}else{
		$('#selAll').removeClass('icon-duigou1')
	}
	sel()
	if(delColor == true){
		$('#delBtn').addClass('delColor')
	}else{
		$('#delBtn').removeClass('delColor')
	}
	
	price()
	totalPrice()
})
//单个项目全选功能
$("body").on("touchstart",".itemsSel",function(){
	if(!$(this).hasClass('icon-duigou1')){
		for(var i=0;i<$(this).parent().parent().find('.itemSel').length;i++){
			$(this).parent().parent().find('.itemSel').eq(i).removeClass('icon-yuan')
			$(this).parent().parent().find('.itemSel').eq(i).addClass('icon-duigou1')
			$(this).addClass('icon-duigou1')
		}
	}else{
		for(var i=0;i<$(this).parent().parent().find('.itemSel').length;i++){
			$(this).parent().parent().find('.itemSel').eq(i).addClass('icon-yuan')
			$(this).parent().parent().find('.itemSel').eq(i).removeClass('icon-duigou1')
			$(this).removeClass('icon-duigou1')
			$(this).addClass('icon-yuan')
		}
	}
	var shopAll = $('.liList').length
	if(shopAll == $('li').find('.icon-duigou1').length ){
		$('#selAll').addClass('icon-duigou1')
	}else{
		$('#selAll').removeClass('icon-duigou1')
	}
	sel()
	if(delColor == true){
		$('#delBtn').addClass('delColor')
	}else{
		$('#delBtn').removeClass('delColor')
	}
	
	price()
	totalPrice()
})
//全选按钮功能
$("body").on("touchstart","#selAll",function(){
	if(!$(this).hasClass('icon-duigou1')){
		for(var i=0;i<$('.itemSel').length;i++){
			$('.itemSel').removeClass('icon-yuan')
			$('.itemSel').eq(i).addClass('icon-duigou1')
			$('.itemsSel').removeClass('icon-yuan')
			$('.itemsSel').eq(i).addClass('icon-duigou1')
			$(this).addClass('icon-duigou1')
		}
	}else{
		for(var i=0;i<$('.itemSel').length;i++){
			$('.itemSel').eq(i).addClass('icon-yuan')
			$('.itemSel').eq(i).removeClass('icon-duigou1')
			$('.itemsSel').eq(i).addClass('icon-yuan')
			$('.itemsSel').eq(i).removeClass('icon-duigou1')
			$(this).removeClass('icon-duigou1')
			$(this).addClass('icon-yuan')
		}
	}
	sel()
	if(delColor == true){
		$('#delBtn').addClass('delColor')
	}else{
		$('#delBtn').removeClass('delColor')
	}
	price();
	totalPrice()
})
//合计
function totalPrice(){
	var totalPrice = 0
	totalPrice = parseInt($(".shopTotal").text())-parseInt($(".taxation").text())
	$("#totalNum").html(totalPrice+'.00')
}

function plusReady(){
	// 获取应用首页窗口对象
	var ws=plus.webview.currentWebview();
	plus.webview.hide(ws);
	var h = plus.webview.getWebviewById( plus.runtime.appid );
	mui.fire(h ,'refreshList'); //触发pageOne页面的显示，购物车页面的隐藏
	var ws2 = plus.webview.getWebviewById('pageOneIndex.html')
	console.log(ws.getURL())
	mui.fire(ws2,'index')//触发首页的pageOneIndex页面的事件
}
$('body').on('touchstart',".emptyBtn",function(){
	if(window.plus){
		plusReady();
	}else{
		document.addEventListener('plusready', plusReady, false);
	}
	/*var ws=plus.webview.currentWebview();
	plus.webview.hide(ws);
	var list = plus.webview.getWebviewById( plus.runtime.appid );
	alert(JSON.stringify(plus.runtime.appid))
	plus.webview.show(list);*/
	 
})

