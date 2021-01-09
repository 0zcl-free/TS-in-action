vue+ts 组件封装

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
https://github.com/vuejs/vue-class-component
https://github.com/kaorun343/vue-property-decorator
https://www.npmjs.com/package/webpack-node-externals


vue-property-decorator 依赖于 vue-class-component(vue-property-decorator 是在 vue-class-component的基础上进行扩展，所以vue-class-component有的vue-property-decorator也有，使用时可以只导入vue-property-decorator，但安装包时两个包都需要下载)