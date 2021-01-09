var Shape;
(function (Shape) {
    var pi = Math.PI;
    function circle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
// 变量 pi 是实现的细节，不需要导出，因此在命名空间之外是不能访问的
// Shape.pi
