// 定义泛型函数类型
function log<T>(value: T): T {
  console.log(value)
  return value
}

// 调用方式：第二种更好
// log<string[]>(['a', 'b', 'c'])
// log('zcl')

// type Log = <T>(value: T) => T
// let myLog: Log = log
// console.log('myLog', myLog)

// 泛型接口
interface Log<T> {
  (arg: T): T;
}

let myLog: Log<number> = log;
// myLog(123)


// 泛型类：泛型 不能用于类的 静态成员
class Log2<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log1 = new Log2<number>()
log1.run(123)


interface Length {
  length: number
}

// 泛型约束
function logAdvance<T extends Length> (value: T): T {
  console.log(value, value.length)
  return value
}

logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })
