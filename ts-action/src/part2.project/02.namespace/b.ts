/// <reference path="./a.ts" />

// 命名空间本质上就是一个闭包,用来隔离作用域
// 使用 export 关键字修饰需要在命名空间之外访问的成员如：接口和类
namespace Shape {
  export function square(x: number) {
    return x * x
  }
}

// 直接使用命名空间名称进行访问即可
console.log(Shape.circle(2))
console.log(Shape.square(2))

// 别名：一种简化命名空间操作的方法是使用import q = x.y.z给常用的对象起一个短的名字
import cricle = Shape.circle
console.log(cricle(1))