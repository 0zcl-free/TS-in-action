// 索引类型

let objj = {
  a: 1,
  b: 2,
  c: 3
}

function getValues(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}

console.log(getValues(objj, ['a', 'b']))
// [undefined, undefined]  问题：obj中不存的属性，返回 undefined，而没有提示报错
// console.log(getValues(objj, ['e', 'f']))

// 索引类型
// 1、索引类型查询操作符: `keyof T`的结果为T上已知的公共属性名的联合
interface Person {
  name: string;
  gender: string;
  age: number;
}

let p: keyof Person  // 'name' | 'gender' | 'age'

// 2、索引访问操作符 T[K]: 类型T的属性K所代表的类型
let n: Person['name']  // n 的类型是 string
let a3: Person['age']  // a 的类型是 number

// 3、泛型约束：T extends U   泛型变量可以继承某个类型获得某些属性


// 改造
// K 继承 T 所有属性的联合类型
function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}

console.log(getValues2(objj, ['a', 'b']));   // [ 1, 2 ]
// 编辑器会提示出错
// console.log(getValues2(objj, ['e', 'f'])); 