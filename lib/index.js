"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock = (function () {
    function Clock(id, time, visibleDays) {
        if (time === void 0) { time = '2018/01/01 00:00:00'; }
        this.visibleDays = false;
        this.targetDate = new Date(time).getTime();
        this.countdown = document.getElementById(id);
        this.visibleDays = !!visibleDays;
    }
    Clock.prototype.getCountdown = function () {
        var current_date = new Date().getTime();
        var seconds_left = (this.targetDate - current_date) / 1000;
        this.days = this.pad(parseInt(String(seconds_left / 86400)));
        seconds_left = seconds_left % 86400;
        this.hours = this.pad(parseInt(String(seconds_left / 3600)));
        seconds_left = seconds_left % 3600;
        this.minutes = this.pad(parseInt(String(seconds_left / 60)));
        this.seconds = this.pad(parseInt(String(seconds_left % 60)));
        if (this.days === '00' && this.hours === '00' && this.minutes === '00' && this.seconds === '00') {
            this.stop();
        }
        this.countdown.innerHTML = this.daysStr + this.hoursStr + this.minutesStr + this.secondsStr;
    };
    Object.defineProperty(Clock.prototype, "daysStr", {
        get: function () {
            if (!this.visibleDays)
                return '';
            return "<span>" + this.days + "</span>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clock.prototype, "hoursStr", {
        get: function () {
            return "<span>" + this.hours + "</span>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clock.prototype, "minutesStr", {
        get: function () {
            return "<span>" + this.minutes + "</span>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clock.prototype, "secondsStr", {
        get: function () {
            return "<span>" + this.seconds + "</span>";
        },
        enumerable: true,
        configurable: true
    });
    Clock.prototype.pad = function (n) {
        if (n <= 0)
            return '00';
        return (n < 10
            ? '0'
            : '') + n;
    };
    Clock.prototype.start = function () {
        this.stop();
        this.getCountdown();
        var contxt = this;
        this.timer = setInterval(function () {
            contxt.getCountdown();
        }, 1000);
        return this;
    };
    Clock.prototype.stop = function () {
        clearInterval(this.timer);
    };
    return Clock;
}());
exports.clock = function (id, time, visibleDays) {
    return new Clock(id, time, visibleDays);
};
exports.default = Clock;
//# sourceMappingURL=index.js.map