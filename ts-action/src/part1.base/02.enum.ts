// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

interface SomeProps {
  a: string
  b: number
  c: (e: MouseEvent) => void
  d: (e: TouchEvent) => void
}

type GetKeyByValueType<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never
} [keyof T];

type FunctionPropNames =  GetKeyByValueType<SomeProps, (e: any) => void>



const func: Function = () => 1;





type xxx = never | never | 'c' | 'd'
const num: number = 12
const role: Role[] = [1,2]
console.log('role', role)
console.log(Role)
console.log(Role.Reporter)
console.log(Role[1])

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
console.log(Message)

// 异构枚举: 混合字符串和数字成员
enum Answer {
  N,
  Y = 'yes',
}
console.log(Answer)

// 枚举成员
// Role.Reporter = 0
enum Char {
  // const member
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member
  d = Math.random(),
  e = '123'.length,
  f = 4
}
console.log(Char)

// 常量枚举: 编译后无Month对象，获得性能提升
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1,
  // May = () => 5
}
const month = [Month.Jan, Month.Feb, Month.Mar, Month.Apr]
console.log('month', month)

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

const e: E = 3
const f: F = 3
// console.log(e === f)

const e1: E.a = 3
const e2: E.b = 3
const e3: E.a = 3
// console.log(e1 === e2)
console.log(e1 === e3)

const g1: G = G.a
const g2: G.a = G.a
console.log(g1 === g2)