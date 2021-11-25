// 类型兼容性
/*
ts 允许类型兼容的变量相互赋值.
X兼容Y : X（目标类型） = Y（源类型）
*/


const s: string = 'zcl'
// s = null // "strictNullChecks": true。 于在 ts 中， null 是所有类型的子类型

// 接口兼容： 成员少的兼容成员多的
interface X {
  a: any,
  b: any
}

interface Y {
  a: any,
  b: any,
  c: any
}

let x1: X = { a: 1, b: 2 }
const y: Y = { a: 1, b: 2, c: 3 }

x1 = y
// y = x1


// 函数兼容性

// 1>参数个数：参数多的兼容参数少的
interface Handler {
  (x: number, y: number): void
}

function Foo(handler: Handler) {
  return handler
}

const h1 = (a: number) => {}
const h2 = (a: number, b: number, c: number) => {}
Foo(h1)
// Foo(h2)

// 2> 参数类型：须匹配
const h3 = (a: string) => {}
// Foo(h3)


// 赋值时，依然采用的是目标函数的参数个数必须大于源函数参数个数，且参数类型相同的原则
interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {}
const p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p3d   // 想要不报错，需要关闭 tsconfig.json 中的一个配置  strictFunctionTypes

// 3> 返回值类型
let ff = () => ({ name: 'zcl' })
const gg = () => ({ name: 'abc', age: 25 })

ff = gg
// gg = ff



// 函数重载
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}


// 枚举兼容性
// 枚举类型和数字类型相互兼容
// 不同枚举类型之间不兼容
enum Fruit {
  Apple,
  Banana
}
enum Color {
  Red,
  Yellow
}
const fruit: Fruit.Banana = 2
const no: number = Fruit.Apple
// const color: Color.Red = Fruit.Apple
// console.log(fruit, no, color)


class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = ''
}

class B {
  // static s = 1
  constructor(p: number) {}
  id: number = 2
  // private name: string = ''
}

class CC extends A {}

let aa = new A(1, 2)
let bb = new B(1)
// 两个类都含有相同的实例成员 number 类型的id，尽管构造函数不同，依然相互兼容
// 在上例的基础上各自添加了相同的 私有成员name，就无法兼容了
bb = aa
console.log(bb)
// aa = bb

// 就算包含私有成员属性，但是父类和子类的实例可以相互兼容
let cc = new CC(1, 2)
aa = cc
cc = aa


// 泛型兼容性
interface Empty<T> {}
let obj1: Empty<number> = {}
const obj2: Empty<string> = {}
obj1 = obj2

let logg = <T>(x: T): T => {
  return x
}
const logg2 = <U>(x: U): U => {
  return x
}
logg = logg2


