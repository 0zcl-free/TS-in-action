namespace Shape {
  const pi = Math.PI
  export function circle(r: number) {
    return pi * r ** 2
  }
}

// 变量 pi 是实现的细节，不需要导出，因此在命名空间之外是不能访问的
// Shape.pi