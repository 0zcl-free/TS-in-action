/// <reference path="./a.ts" />
// 命名空间本质上就是一个闭包,用来隔离作用域
// 使用 export 关键字修饰需要在命名空间之外访问的成员如：接口和类
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
// 直接使用命名空间名称进行访问即可
console.log(Shape.circle(2));
console.log(Shape.square(2));
var cricle = Shape.circle;
console.log(cricle(1));
