// 声明.vue文件，TS才能识别
// 即使他不叫vue-shims这个名字，只要他是.d.ts结尾就会被ts自动识别呢

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}