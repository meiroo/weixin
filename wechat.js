var dataForWeixin = {
    appId: "",
    MsgImg: "",
    TLImg: "http://campaign.honor.cn/ab/img/share.jpg",
    url: "http://campaign.honor.cn/ab/",
    title: '双面型格你行你秀——华为荣耀',
    desc: '看荣耀MV，秀出两面的你，没准就有荣耀6PLUS拿哟！',
    fakeid: "",
    callback: function(res) {

    }
};
share();

function share() {
    WeixinJS = typeof WeixinJS != 'undefined' || {};
    WeixinJS.hideOptionMenu = function() {
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            if(typeof WeixinJSBridge != 'undefined') WeixinJSBridge.call('hideOptionMenu');
        });
    };
    WeixinJS.hideToolbar = function() {
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            if(typeof WeixinJSBridge != 'undefined') WeixinJSBridge.call('hideToolbar');
        });
    };

    (function() {
        var onBridgeReady = function() {
            WeixinJSBridge.call('showOptionMenu');
            WeixinJSBridge.on('menu:share:appmessage', function(argv) {
                (dataForWeixin.callback)();
                WeixinJSBridge.invoke('sendAppMessage', {
                    "appid": dataForWeixin.appId,
                    "img_url": dataForWeixin.TLImg,
                    "img_width": '160',
                    "img_height": '160',
                    "link": dataForWeixin.url,
                    "desc": dataForWeixin.desc,
                    "title": dataForWeixin.title
                }, dataForWeixin.callback);
            });
            WeixinJSBridge.on('menu:share:timeline', function(argv) {
                (dataForWeixin.callback)();
                WeixinJSBridge.invoke('shareTimeline', {
                    "img_url": dataForWeixin.TLImg,
                    "img_width": '160',
                    "img_height": '160',
                    "link": dataForWeixin.url,
                    "desc": dataForWeixin.desc,
                    "title": dataForWeixin.desc
                }, dataForWeixin.callback);
            });
            WeixinJSBridge.on('menu:share:weibo', function(argv) {
                (dataForWeixin.callback)();
                WeixinJSBridge.invoke('shareWeibo', {
                    "content": dataForWeixin.title,
                    "url": dataForWeixin.url
                }, dataForWeixin.callback);
            });
            WeixinJSBridge.on('menu:share:facebook', function(argv) {
                (dataForWeixin.callback)();
                WeixinJSBridge.invoke('shareFB', {
                    "img_url": dataForWeixin.TLImg,
                    "img_width": '160',
                    "img_height": '160',
                    "link": dataForWeixin.url,
                    "desc": dataForWeixin.title,
                    "title": dataForWeixin.title
                }, dataForWeixin.callback);
            });
        };
        if(document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if(document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        } else {

        }
    })();
}
