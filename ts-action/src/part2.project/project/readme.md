// 使用babel编译TS

babel和tsc都是编译工具：
Babel和tsc都可以将ts(x), js(x)编译称为es3/5/6/及更高版本
tsc具有类型检查功能而Babel没有,但Babel具有非常丰富的插件,生态完善


在Babel7之前,不支持TS,早起使用Babel的项目使用TS不是很容易
需要使用ts-loader将ts文件转译成js文件,再交给babel进行处理

Babel7之后就支持了TS,不需要各种loader,在编译时也不需要TS
TS仅做Babel不能做的事情:类型检查

如何选择编译工具:
1,新工程,使用TS编译器(类型检测),配合ts-loader(编译)
2,项目已使用Babel,可使用@babel/preset-typescript做语言转换,配合tsc(类型检查)

项目配置：
https://github.com/microsoft/TypeScript-Babel-Starter