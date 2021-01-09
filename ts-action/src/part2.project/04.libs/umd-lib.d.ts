declare namespace umdLib {
  const version: string
  function doSomething(): void
}

export as namespace umdLib // UMD 库声明全局变量

export = umdLib