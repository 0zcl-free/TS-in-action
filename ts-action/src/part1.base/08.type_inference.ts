// 类型推断
let a = 1
let b = [1, '1', null]

let c = (x = 1) => x + 1

// ??? 无法实现效果：https://www.typescriptlang.org/docs/handbook/type-inference.html
window.onmousedown  = (event: any) => {
  console.log(event.button)
}

// 类型断言: 覆蓋ts的类型推断
interface Foo {
  bar: Number
}

// 建议用第二种
// let foo = {} as Foo
// foo.bar = 1

let foo: Foo = {
  bar: 1
}
console.log(foo)