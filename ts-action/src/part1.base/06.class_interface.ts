// 不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口

interface ClockInterface {
  currentTime: Date
  setTime(d: Date): void
}

// 类实现接口。接口只能约束 类 的公有成员
class Clock implements ClockInterface {
  currentTime: Date = new Date()
  setTime(d: Date) {
    this.currentTime = d
  }
  name: string = 'zcl'
}

const clock: ClockInterface = new Clock()
console.log(clock)

interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}
// 类实现多个接口
class Car implements Alarm, Light {
  alert() {
      console.log('Car alert');
  }
  lightOn() {
      console.log('Car light on');
  }
  lightOff() {
      console.log('Car light off');
  }
}

// 接口继承接口：LightableAlarm 继承了 Alarm，除了拥有 alert 方法之外，还拥有两个新方法 lightOn 和 lightOff
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
  // alert(): void;
}


class Auto {
  state = 1
  // private state2 = 1
}
// 接口继承类：接口AutoInterface有 state，eat属性
// https://ts.xcatliu.com/advanced/class-and-interfaces.html
interface AutoInterface extends Auto {
  eat(): void
}
class C implements AutoInterface {
  // state2 = 1
  state = 1
  eat(): void {}
}

//  auto的子类可以实现 AutoInterface：auto的子类bus继承了auto的属性
class Bus extends Auto implements Auto {}
