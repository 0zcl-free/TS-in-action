// 类型保护
enum Type { Strong, Week }

class Java {
  constructor(java: any) {
    this.java = java;
  }
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}

class JavaScript {
  constructor(js: any) {
    this.js = js;
  }
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  js: any
}

// 出错原因：变量lang被认为是一个联合类型，意味着它必须同时具有 helloJava 和 helloJavaScript 两个方法
function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java('java') : new JavaScript('js')
  console.log('lang', lang)
  // 1、出错了！
  // if (lang.helloJava) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()  // Error：类型“Java”上不存在属性“helloJavaScript”
  // }

  // 2、类型断言：由于不知道会传入什么样的参数，因此必须在每一处都加上类型断言。
  // 显然，这并不是一个理想的解决方案，代码变得冗长且代码的可读性很差。
  // if ((lang as Java).helloJava()) {
  //   // (lang as Java).helloJava();
  // } else {
  //   // (lang as JavaScript).helloJavaScript();
  // }

  // 3、instanceof
  if (lang instanceof Java) {
      lang.helloJava()
      // lang.helloJavaScript()
  } else {
      lang.helloJavaScript()
  }

  // 4、in
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

   // 5、typeof
  // if (typeof x === 'string') {
  //     console.log(x.length)
  // } else {
  //     console.log(x.toFixed(2))
  // }

  return lang
}

getLanguage(Type.Strong, 1)

/*
什么是类型保护:
TypeScript 能够在特定的区块中保护变量属于某种确定的类型，可以在此区块中放心的引用此类型的属性，或者调用此类型的方法



*/
