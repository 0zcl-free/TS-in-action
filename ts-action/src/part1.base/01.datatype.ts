// 原始类型
const num: number = 12

const bool: boolean = true
const str: string = 'zcl'

// 数组
const arr1: number[] = [1,2,3]
const arr2: Array<number | string> = [1,2,3,'4']

// 元组
const tuple: [number, string] = [2, '3']
// tuple.push(4)
// console.log(tuple)
// tuple.[2] = '4'

// 函数
const add: (x: number, y: number) => number = (x: number, y: number) => x + y
const add2 = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// console.log('add', add)
// console.log('compute', compute)

// 对象
const obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 22
const h: Record<string, unknown> = { a: 1 }
console.log(h)

const uncertain: unknown = 'Hello'!;
const notSure: any = uncertain;
const nnn: string = uncertain
console.log(notSure, nnn)

const ukk: unknown = 'abc'
(ukk as string).toString()

let anyValue:any
anyValue()
anyValue.b
anyValue.a()
let value:unknown
value()
value.b
value.a()

// symbol
const s1: symbol = Symbol()
const s2: symbol = Symbol()
// console.log(s1 === s2)

// undefine, null
const un: undefined = undefined
const nu: null = null
let zcl:number = 12
zcl = un

// void
const noReturn = () => {}

// any 
let x
x = 1
x = []
x = () => {}

// never: 1、从来不返回值的函数  2、总会抛出错误的函数
const error: () => never = () => {
  throw new Error('error')
}

const endless: () => never = () => {
  while(true) {}
}


