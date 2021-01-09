class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    this.pri()
    console.log('run...')
  }
  private pri() {}
  protected pro() {}
  static food: string = 'sunning'
}

console.log(Animal.prototype)

let animal = new Animal('dog')
console.log(animal)
// animal.pri()
// animal.pro()
console.log(Animal.food)

// 类的继承
class Dog extends Animal {
  color: string;
  constructor(name: string, color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
  call() {
    console.log('dog dog...')
  }
}

let dog = new Dog('小黄', 'yellow')
console.log('dog', dog)
console.log(Dog.food)

// 修饰符：默认public  private: 只能在类本身访问  protected: 只能在类内部及子类中访问

