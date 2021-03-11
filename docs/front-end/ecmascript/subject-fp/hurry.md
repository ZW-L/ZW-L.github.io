## 简介

+ 柯里化是将多参数函数改写成接受连续的单参数的过程，它是闭包的一个应用
```js
// 多参数函数
function add(a, b) {
  return a + b
}

console.log(add(5, 10))       // 15

// 柯里化
function curryAdd(a) {
  return function (b) {
    return a + b
  }
}

const add10 = curryAdd(10)
console.log(add10(5))         // 15
console.log(curryAdd(5, 10))  // 15
```

+ 由此可见，柯里化的函数调用后不会马上返回结果(而是返回一个函数)，在接受足够的参数后才会返回结果
+ 偏函数：如上述的 `add10`，是由柯里化函数产生的具有特定功能的函数，是一个柯里化函数执行过程的一个中间态
+ 柯里化的方向：根据参数的传入顺序，可分为向左柯里化和向右柯里化
```js
// 向左柯里化
function leftCurryDiv(b) {
  return function (a) {
    return a / b
  }
}

// 向右柯里化
function rightCurryDiv(a) {
  return function (b) {
    return a / b
  }
}

console.log(leftCurryDiv(10)(50))   // 5
console.log(rightCurryDiv(50)(10))  // 5
```



## 应用

+ 柯里化工具函数
+ 支持占位符的柯里化函数