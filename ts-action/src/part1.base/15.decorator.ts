// eslint-disable-next-line @typescript-eslint/ban-types
function addAge(constructor: Function) {
  console.log('con', constructor)
  constructor.prototype.age = 18;
}

@addAge
class Person{
  name: string;
  age!: number;
  constructor() {
    this.name = 'huihui';
  }
}

const person = new Person();

console.log(person, person.age, person);