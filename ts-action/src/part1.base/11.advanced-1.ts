// 交叉类型与联合类型

interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}

// 交叉类型声明
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}

// 联合类型声明
let a1: number | string = 1
let b1: 'a' | 'b' | 'c'
let c1: 1 | 2 | 3

class Dogg implements DogInterface {
  run() {}
  eat() {}
}

class Catt implements CatInterface {
  jump() {}
  eat() {}
}

enum Master { Boy, Girl }
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dogg() : new Catt()
  // pet.run()
  pet.eat()  // 类型不确定时，只能取公有成员
  return pet
}

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  switch(s.kind) {
    case 'rectangle':
      return s.width * s.height;
    case 'square':
      return s.size * s.size;
    // default:
    //   return ((e: never) => { throw new Error(e) })(s)
  }
}
console.log(area({ kind: 'circle', radius: 2 }));   // undefined

