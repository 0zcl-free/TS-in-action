// 类型推断
const a = 1
const b = [1, '1', null]

const c = (x = 1) => x + 1

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

const foo: Foo = {
  bar: 1
}
console.log(foo)