## 简介

+ 能够**接收一个函数作为参数**或者**以一个函数为返回结果**的函数，叫做高阶函数
```js
// 返回一个函数
function foo() {
  var str = 'hello'
  return function () {
    return str
  }
}

var sayHi = foo()
console.log(sayHi())    // hello

// 接收函数作为参数并返回一个函数
function calc(fn) {
  return function(arr) {
    return fn.apply(null, arr)
  }
}

var getMax = calc(Math.max)
console.log(getMax([1, 2, 3, 4, 5]))    // 5
```