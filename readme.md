##http://meiroo.github.io/#explorer

###WeChat：搭建微信朋友圈开发的web框架。调研微信API  

尝试了hammer.js/tweenmax/pure/swiper/justinaguilar等多种框架。

用于制作适应手机屏幕的多种动画 以及手势翻页。 总体方案200k以内。

下一步：申请开发者后，测试微信接口。


###屏幕适配

```
//手机兼容
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 640;
<meta name="viewport" content="width=640, initial-scale=1.0, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi, user-scalable=no">

//windows屏幕适配使用transform
var transformContent = 'scale('+scale+') '+ 'translate( -'+ xoff/scale +'px,-'+ yoff/scale + 'px)';
		 $(".page").css({
		  transform: transformContent,
		  MozTransform: transformContent,
		  WebkitTransform: transformContent,
		  msTransform: transformContent
		 });

```

###CSS responsive Framework ： Cardinal

Cardinal : 可以很方便的使用如下表格布局，处理不同宽度下的布局适配
```
<img class="moveimg one-third" src="img/intro_p2.png">
<div class="grid-item medium-one_whole large-two-fifths">
```

###触屏滑动动画效果 ：swiper

此控件支持分页，垂直或者水平滑动，以及多种滑动展示效果。

```
var mySwiper = new Swiper('.swiper-container',{
        //pagination: '.pagination',
        paginationClickable: true,
        mode: 'vertical',
        calculateHeight: true,
        speed:750, 
        cssWidthAndHeight:true,
      });
      
```

###页面元素动画效果 animations.css by Justin Aguilar

包含了左滑，右滑，淡入，淡出... 等十几种封装动画效果。addClass即可。

```
$('#page1 .pure-img').addClass("pulse");
	$('#page1 .moveimg').addClass("hatch");	
	$('#page1 video').addClass('pullUp');
```

### 滑动gesture识别库： hammer

可以结合jquery，给任意元素增加gesture事件。支持双指拉伸防缩。

```
$('body').hammer().bind("swipeleft", function(ev) {
		   ev.preventDefault();
		   pages[currentindex].swipeleft();
		});
		$('body').hammer().bind("swiperight", function(ev) {
		   ev.preventDefault();
		   pages[currentindex].swiperight();
		});
```

###灵活自定义的动画： tweenmax
CSS3动画。可以指定 元素/from/to/动画时间/延迟时间/插值算法 缺点是稍大。
```
var ani = {};
		ani.From = {rotation:0};
		ani.To = {rotation:360,repeat:-1,repeatDelay:0.5,ease:Back.easeOut};
		ani.Time = 0.5;
TweenMax.fromTo(elestr, ani.Time, ani.From, ani.To);
```
