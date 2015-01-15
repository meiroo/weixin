var browser={
	versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            wp : u.indexOf('Windows Phone') > -1,
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
     }(),
     language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

$(function() {
	var mySwiper = new Swiper('.swiper-container',{
        //pagination: '.pagination',
        paginationClickable: true,
        mode: 'vertical',
        calculateHeight: true,
        speed:750, 
        cssWidthAndHeight:true,
      });

	//alert(document.body.clientWidth);
	//alert(window.screen.width);
	//alert(document.body.clientHeight);
	//alert(window.screen.height);
	//alert( document.body.clientWidth);
	//alert( document.body.clientHeight);
	var width = document.body.clientWidth;
	var height = window.screen.height;

	$('#page1 .pure-img').addClass("hatch");
	//$('.page').width(height/16*9);
	//$('.page').width(800);
	//transform: scale(0.47808764940239);
	//alert($('.page').css('width'));
	var scale = 1.0;
	var xoff = 0;
	var yoff = 0;

	alert('width: '+document.body.clientWidth + ":" + window.screen.width);
	alert('height: '+document.body.clientHeight + ":" + window.screen.height);

	if(width>640 && height < 1012){
		scale = height / 1012.0;
		//alert(width);
		yoff = (1 - scale) / 2 * 1012;
		xoff = 1.0;
		var transformContent = 'scale('+scale+') '+ 'translate( -'+ xoff/scale +'px,-'+ yoff/scale + 'px)';
		$(".page").css({
		 transform: transformContent,
		 MozTransform: transformContent,
		 WebkitTransform: transformContent,
		 msTransform: transformContent
		});
	}
	
});
