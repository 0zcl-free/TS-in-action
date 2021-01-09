手动创建

1、环境搭建
• 添加 vue-shim.d.ts 声明文件
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
• 添加 ts-loader

参考：
https://www.cnblogs.com/vickylinj/p/12787402.html
https://github.com/microsoft/TypeScript-Vue-Starter