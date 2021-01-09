/*
使用的包是否有可用的声明文件,可以进行查找：
http://microsoft.github.io/TypeSearch/
如果没有,就需要自己写一个了：
http://definitelytyped.org/提供了为社区贡献声明文件的方法
*/

import $ from 'jquery'
$('.app').css('color', 'red')

// 1> 全局库
globalLib({x: 1})
globalLib.doSomething()

// 2> 模块库
import moduleLib from './module-lib'
moduleLib({y: 2})
moduleLib.doSomething()

// 3> umd库
import umdLib from './umd-lib'
umdLib.doSomething()
console.log(umdLib.version)

// 4> 模块化插件
// 给类库添加一些自定义的方法，比如想给moment类库添加一些自定义的方法
import moment from 'moment'

declare module 'moment' {
  export function myFunc(): void
}

moment.myFunc = () => { console.log('myFunc') }
console.log(moment.myFunc())

// 5> 全局化插件
// 在上文  编写全局类库的声明文件  的基础上拓展一个函数
// 这样对全局命名空间造成了一定污染，一般不建议这样做

declare global {
  namespace globalLib {
    function doAnyThing(): void
  }
}

globalLib.doAnyThing = () => {}
