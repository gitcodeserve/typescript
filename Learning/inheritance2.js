var ClockNew = (function () {
    function ClockNew(h, m) {
    }
    ClockNew.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return ClockNew;
}());
