(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    'use strict';
    var fontsize = window.fontsize || {};

    fontsize = (function() {
        function fontsize(element, settings) {
            var self = this,
                dataSettings, defaults;

            defaults = {
                minFontSize: 5,
                maxFontSize: 20,
                selectors: 'body p',
                tick: 1
            };

            dataSettings = $(element).data('fontsize') || {};

            self.options = $.extend({}, defaults, settings, dataSettings);

            self.$axess = $(element);

            self.init();
        }
        return fontsize;

    }());

    fontsize.prototype.init = function() {
        var self = this;

        $(self.$axess).bind('click', function() {
            return self.trigger($(this))
        });
    };

    fontsize.prototype.trigger = function(e) {
        var self = this;
        switch (e.data('font-action')) {
            case 'fontUp':
                return self.fontIncrease();
                break;
            case 'fontDown':
                return self.fontDecrease();
                break;
        }
    };

    fontsize.prototype.getElementsBody = function(e, callback) {
        $.each(e, callback);
    };

    fontsize.prototype.fontIncrease = function() {
        var self = this;

        self.getElementsBody($(self.options.selectors), function(e) {

            var args = $(this).data('Axess') || {};

            var data = $(this).parent().data('font-filter') || {};

            var defaults = {
                minFontSize: self.options.minFontSize,
                maxFontSize: self.options.maxFontSize,
                currentSize: parseInt($(this).css('font-size'))
            };

            var options = $.extend(defaults, data);

            var initial = $(this).data('filterSize') || options;

            var objectData = $.extend(args, options, initial);

            $(this).data({ filterSize: objectData });

            self.changeFontSize($(this), +(self.options.tick));

            console.log($(this).data('filterSize'));

        });

    };

    fontsize.prototype.fontDecrease = function() {
        var self = this;

        self.getElementsBody($(self.options.selectors), function(e) {

            var args = $(this).data('Axess') || {};

            var data = $(this).parent().data('font-filter') || {};

            var defaults = {
                minFontSize: self.options.minFontSize,
                maxFontSize: self.options.maxFontSize,
                currentSize: parseInt($(this).css('font-size'))
            };

            var options = $.extend(defaults, data);

            var initial = $(this).data('filterSize') || options;

            var objectData = $.extend(args, options, initial);

            $(this).data({ filterSize: objectData });

            self.changeFontSize($(this), -(self.options.tick));

        });

    };

    fontsize.prototype.changeFontSize = function($el, calc) {
        var self = this;
        var cur = $el.data('filterSize').currentSize;
        var newSize = cur + calc;
        if (newSize >= $el.data('filterSize').minFontSize && newSize <= $el.data('filterSize').maxFontSize) {
            $el.css('font-size', newSize);
            $.extend($el.data('filterSize'), { currentSize: newSize });
        }
    }

    $.fn.fontsize = function() {
        var self = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = self.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                self[i].fontsize = new fontsize(self[i], opt);
            else
                ret = self[i].fontsize[opt].apply(self[i].fontsize, args);
            if (typeof ret != 'undefined') return ret;
        }
        return self;
    };

}));