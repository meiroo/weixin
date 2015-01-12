(function($) {
    Huawei = function() {
        this.init();
    };
    $.extend(Huawei.prototype, {
        init: function(data) {
            this.slideIndex = 1;
            this.$timer = new Array();

            this.$wrap = $('.wrap');
            this.$banner = $('.banner');
            this.$nav = $('.nav');
            this.$p1_t1 = $('.p1_t1');
            this.$p1_t2 = $('.p1_t2');
            this.$p2_t1 = $('.p2_t1');
            this.$p2_t2 = $('.p2_t2');
            this.$p3_t1 = $('.p3_t1');
            this.$p3_t2 = $('.p3_t2');
            this.$p4_t1 = $('.p4_t1');
            this.$p4_t2 = $('.p4_t2');
            this.$btn_enter = $('.btn_enter');
            this.$btn_skip = $('.btn_skip');
            this.start();
        },

        start: function() {
            var self = this;
            //self.$wrap.fullpage({
            //    css3: true,
            //    //scrollingSpeed: 1000,
            //    //easing: 'swing',
            //    afterRender: function() {
            //        self.appearSlide1();
            //    }
            //});
            self.appearSlide1();

            var onLeave = function() {
                switch(self.slideIndex) {
                    case 1: self.disappearSlide1(); break;
                    case 2: self.disappearSlide2(); break;
                    case 3: self.disappearSlide3(); break;
                    case 4: self.disappearSlide4(); break;
                }
            };

            var afterLoad = function() {
                switch(self.slideIndex) {
                    case 1: self.appearSlide1(); break;
                    case 2: self.appearSlide2(); break;
                    case 3: self.appearSlide3(); break;
                    case 4: self.appearSlide4(); break;
                }
                self.$nav.children().eq(self.slideIndex - 1).addClass('on').siblings().removeClass();
            };

            self.$wrap.hammer().bind('swipeleft swiperight', function(e) {
                if(self.$banner.is(':animated')) return false;
                var nextIndex = 0;
                var animateStr = '';
                if(e.type == 'swipeleft') {
                    if(self.slideIndex >= 4) return false;
                    animateStr = '-=430';
                    nextIndex = self.slideIndex + 1;
                    $('.colorPane' + nextIndex).animate({ left: 0 }, 400);
                }
                else{
                    if(self.slideIndex <= 1) return false;
                    animateStr = '+=430';
                    nextIndex = self.slideIndex - 1;
                    $('.colorPane' + self.slideIndex).animate({ left: '100%' }, 400);
                }

                onLeave();
                //$('body').removeClass().addClass('introBg' + self.slideIndex + nextIndex);
                self.$banner.animate({ left: animateStr }, 400, afterLoad);
                self.slideIndex = nextIndex;
            });

            self.$btn_enter.click(function() {
                location.href = 'main.html';
            });
            self.$btn_skip.click(function() {
                location.href = 'main.html';
            });
        },

        clearTimer: function() {
            $.each(this.$timer, function(i, n) {
                clearTimeout(n);
            });
            this.$timer = new Array();
        },


        //---------------------------------slide 1----------------------------------//
        appearSlide1: function() {
            var self = this;
            self.$p1_t1.show().addClass('animated zoomInLeft');
            self.$timer.push(setTimeout(function() {
                self.$p1_t2.show().addClass('animated pulse');
            }, 1000));
        },
        disappearSlide1: function() {
            var self = this;
            self.clearTimer();
            self.$p1_t1.hide().removeClass('animated zoomInLeft');
            self.$p1_t2.hide().removeClass('animated pulse');
        },


        //---------------------------------slide 2----------------------------------//
        appearSlide2: function() {
            var self = this;
            self.$p2_t1.show().addClass('animated zoomInRight');
            self.$timer.push(setTimeout(function() {
                self.$p2_t2.show().addClass('animated pulse');
            }, 1000));
        },
        disappearSlide2: function() {
            var self = this;
            self.clearTimer();
            self.$p2_t1.hide().removeClass('animated zoomInRight');
            self.$p2_t2.hide().removeClass('animated pulse');
        },


        //---------------------------------slide 3----------------------------------//
        appearSlide3: function() {
            var self = this;
            self.$p3_t1.show().addClass('animated zoomInLeft');
            self.$timer.push(setTimeout(function() {
                self.$p3_t2.show().addClass('animated pulse');
            }, 1000));
        },
        disappearSlide3: function() {
            var self = this;
            self.clearTimer();
            self.$p3_t1.hide().removeClass('animated zoomInLeft');
            self.$p3_t2.hide().removeClass('animated pulse');
        },


        //---------------------------------slide 4----------------------------------//
        appearSlide4: function() {
            var self = this;
            self.$p4_t1.show().addClass('animated zoomInRight');
            self.$timer.push(setTimeout(function() {
                self.$p4_t2.show().addClass('animated pulse');
            }, 1000));
            self.$timer.push(setTimeout(function() {
                self.$btn_enter.show().addClass('animated bounceIn');
            }, 1500));
        },
        disappearSlide4: function() {
            var self = this;
            self.clearTimer();
            self.$p4_t1.hide().removeClass('animated zoomInRight');
            self.$p4_t2.hide().removeClass('animated pulse');
            self.$btn_enter.hide().removeClass('animated bounceIn');
        }
    });
})(jQuery);

$(function() {
    var huawei = new Huawei();
});
