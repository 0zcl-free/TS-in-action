// 声明合并: 编译器会将程序中多个具有相同名称的声明合并为一个声明
// 优势：可以将程序中散落在各处的重名声明合并在一起

// 1> 接口声明合并：两个接口就会合并称成一个接口
interface A4 {
  x: number,
  // y: string
  foo(bar: number): number
}
interface A4 {
  y: number
  // 2> 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载
  foo(bar: string): string
  foo(bar: number[]): number[]
}
let a4: A4 = {
  x: 1,
  y: 2,
  // 实现时,需要指定更为宽泛的类型
  foo(bar: any) {
    return bar
  }
}

// 3> 合并命名空间和函数  --- 相当于给函数添加了属性
function Lib() {}
namespace Lib {
  export let str = 'hello world'
}
console.log(Lib, Lib.str)

// 4> 合并命名空间和类  --- 相当于给类添加了静态属性
class C2 {}
namespace C2 {
  export let str = 'zcl'
}
console.log(C2, C2.str)
// 注意：命名空间与函数或者类合并时，必须要放在函数或者类的后面，否则会报错

// 5> 合并命名空间与枚举，相对于给枚举添加了属性。同时需要注意，命名空间与枚举的位置不受限制
// 注意命名空间与枚举的位置
namespace Color2 {
  export function mix() {}
}

enum Color2 {
  Red,
  Green,
  Blue
}
console.log(Color2)