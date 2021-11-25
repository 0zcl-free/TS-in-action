abstract class Animal2 {
  eat() {
    console.log('eat...')
  }
  abstract sleep(): void
}

// 抽象类 不能 实例化
// const animal2 = new Animal2()

class Dog2 extends Animal2 {
  public name: string
  constructor(name: string) {
    super()
    this.name = name
  }
  // 继承抽象类，也需要实现继承的抽象方法
  sleep() {
    console.log('dog2 sleep..')
  }
}

const dog2 = new Dog2('朝宇')

class Cat extends Animal2 {
  sleep() {
      console.log('Cat sleep')
  }
}
const cat = new Cat()

const animals: Animal2[] = [dog2, cat]

// 多态： 
// Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 sleep 方法。
// 我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 sleep
animals.forEach(item => item.sleep())

class Workflow {
  step1() {
    console.log('step1')
    return this
  }
  step2() {
    console.log('step2')
    return this
  }
}

// 类的链式调用
new Workflow().step1().step2()

class MyFlow extends Workflow {
  next() {
    console.log('next')
    return this
  }
}

new MyFlow().next().step1().next().step2()