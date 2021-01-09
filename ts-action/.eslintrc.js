module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    // "ecmaVersion": 12,
    // "sourceType": "module",
    // "project": "./tsconfig.json"	// 类型信息
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/no-inferrable-types": "off", // 禁止对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    "@typescript-eslint/no-var-requires": "off" // var foo = require("foo")禁止使用诸如之类的形式
  }
};

/*
"lint": "eslint src --ext .js,.ts" // 自动检查js,ts
"@typescript-eslint/eslint-plugin": "^1.10.2",// 识别TS语法
"@typescript-eslint/parser": "^1.10.2",	// TS解析器
*/

/*
TS能检查类型，为什么还需要ESlint?
TypeScript编译器主要做两件事,即类型检查和语言转换
	1,类型检查
	2,语言转换
	也会对语法错误做一些检查
而ESLint除了检查语法,还能够保持代码风格统一
*/

/**
 * ESLint不能直接检查TS语法?
 * ESLint不能直接检查TS语法,因为TypeScript和ESLint两种语法树AST是不兼容的
 * (之前的TSLint是基于TS抽象语法树工作的,不会有兼容性问题,但不能被重用)
 * 
 * 引入typescript-eslint插件解决兼容性问题.为ESLint提供解析TS代码的编译器。将TS语法树转换为ESLint语法树
 */