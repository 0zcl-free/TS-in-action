// 原始类型
let bool: boolean = true
let num: number = 12
let str: string = 'zcl'

// 数组
let arr1: number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3,'4']

// 元组
let tuple: [number, string] = [2, '3']
// tuple.push(4)
// console.log(tuple)
// tuple.[2] = '4'

// 函数
let add: (x: number, y: number) => number = (x: number, y: number) => x + y
let add2 = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// console.log('add', add)
// console.log('compute', compute)

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 22
// console.log(obj)

// symbol
let s1: symbol = Symbol()
let s2: symbol = Symbol()
// console.log(s1 === s2)

// undefine, null
let un: undefined = undefined
let nu: null = null

// void
let noReturn = () => {}

// any 
let x
x = 1
x = []
x = () => {}

// never: 1、从来不返回值的函数  2、总会抛出错误的函数
let error = () => {
  throw new Error('error')
}

let endless = () => {
  while(true) {}
}


