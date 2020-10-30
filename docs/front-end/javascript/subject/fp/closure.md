## 简介

+ 闭包指的是有权访问另一个函数作用域的变量的函数
+ 创建闭包常见方式是在一个函数内部创建另一个函数，这样处于作用域链前端的函数就能访问外层作用域的变量：
```js
function foo() {
  var str = 'hello'

  return function () {
    console.log(str)
  }
}

var sayHi = foo()
sayHi()   // hello
```

在调用 `foo()` 后，`foo()` 的执行环境的作用域会被销毁，但是它的活动对象仍会保存在内存中，因为变量 `sayHi` 保存了对它的引用；当该引用销毁时(将 `sayHi` 赋值为 `null`)，`foo()` 的活动对象才会被销毁

::: tip 备注：
+ 闭包能够捕获调用函数的变量(通过引用外部函数的活动对象)
+ 闭包会占用更多的内存(外部函数的活动对象不能释放)
:::



## 优缺点


**优点：**
+ 逻辑连续，当闭包作为另一个函数调用的参数时，避免你脱离当前逻辑而单独编写额外逻辑
+ 方便调用上下文的局部变量
+ 加强封装性，可以达到对变量的保护作用

**缺点：**
+ 使用闭包时，函数执行后不被销毁造成内存浪费，对闭包的使用不当会造成内存泄漏



## 应用

+ 动态创建一系列的工具函数：
```js
// 动态创建判断变量类型的工具函数
const isType = function(type) {
  return function(target) {
    return `[object ${type}]` === Object.prototype.toString.call(target)
  }
}
const isArray = isType('Array')
console.log(isArray([])) // true
const isNull = isType('Null')
console.log(isNull(null)) // true
```
+ 模拟块级(私有)作用域
```js
// 结局 var 没有块级作用域的问题
for (var i = 1; i <= 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i)
    }, 1000 * i)
  })(i)
}

// 一些框架中避免污染全局变量而创建的块级作用域
(function(jQuery) { 
  // ...
})(jQuery)
```
+ 经典面试题：
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
// 打印结果为：每隔1秒打印一次 3

// 可以使用闭包实现(立即执行函数 IIFE)：
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  })(i)
}
// 打印结果为：每隔 1s 打印依次 i 的值，依次为 0 1 2
```
+ 解决 IE9 内存泄漏
```js
// `IE9` 之前的 `JScript` 对象和 `COM` 对象使用不同的垃圾收集例程，因此在 `DOM` 操作中容易发生内存泄漏：
// 该函数创建了元素事件处理程序的闭包，而闭包又创建了一个循环引用(引用元素的 `id`)，导致 `element` 的引用计数一直是 1，它的内存不会被释放
function assignHandle() {
  var element = document.getElementById('idName')
  element.onclick = function() {
    console.log(element.id)
  }
}

// 解决方式是将元素的 `id` 赋值给另一个变量，并在 `assignHandle()` 结束前手动释放 `element` 的引用：
function assignHandle() {
  var element = document.getElementById('idName')
  var id = element.id
  element.onclick = function() {
    console.log(id)   // id 来自另外声明的变量，防止循环引用
  }

  element = null      // 手动释放 element
}
```