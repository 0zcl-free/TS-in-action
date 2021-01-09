interface List {
  readonly id: number,
  name: string,
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(item => {
    // console.log(item.id, item.name)
    if (item.age) {
      // console.log(item.age)
    }
    // item.id++
  })
}

let result = {
  data: [
    { id: 1, name: 'A', age: 25 },
    { id: 2, name: 'B' }
  ]
}

render(result)

// 类型断言
// render({
//   data: [
//     { id: 1, name: 'A', age: 26 },
//     { id: 2, name: 'B' }
//   ]
// } as Result)

// 可索引类型
interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['a', 'b']
// console.log(chars)

interface Names {
  [x: string]: any;
  // y: number;
  [z: number]: number;
}
let names: Names = [1, 3]
// console.log(names[1], names[0], names['0'], names['1'])

// let add3 = (x: number, y: number) => x + y
// interface Add {
//   (x: number, y: number): number
// }
type Add = (x: number, y: number) => number

let add3: Add = (a: number, b: number) => a + b
// console.log(add3(1, 4))

// 混合类型
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

let lib: Lib = (() => {}) as Lib
lib.version = '1.0.0'
lib.doSomething = () => {}
// console.log('lib', lib, lib.version, lib.doSomething)

