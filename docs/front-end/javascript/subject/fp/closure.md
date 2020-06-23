---
sidebarDepth: 2
---

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





## 特点

+ 能够捕获调用函数的变量(通过引用外部函数的活动对象)
+ 会占用更多的内存(外部函数的活动对象不能释放)





## 应用

### 模拟块级作用域

+ 可以使用立即执行函数(`IIFE`)来模拟块级作用域(私有作用域)，在块级作用域内的变量，它们会在代码执行之后被回收，而且不会跟全局作用域发生命名冲突：
```js
var str = 'global'
(function() {
  // 块级作用域
  var str = 'hello'

  console.log(str)    // 'hello'
})()

console.log(str)      // 'global'
```

::: tip 备注
+ 这是很多开源库使用的方式，这样子它们定义的变量就不会跟全局变量或者用户自定义的变量发生命名冲突
:::





### 一道面试题

+ 以下方法的目的是返回一个数组，该数组的元素是一系列函数，它们的调用分别返回 `0~4`：
```js
function foo() {
  var res = []

  for (var i = 0; i < 5; i++) {
    res[i] = function() {
      return i
    }
  }

  return res
}
```

这个函数不会得到理想的结果，它返回的数组中每个函数的调用都会返回 5；这是因为 javascript 没有块级作用域，所以匿名函数赋值时捕获的都是同一个活动对象，导致它们捕获 `i` 的值都是 5

+ 一个解决方法是在匿名函数中使用 IIFE，添加一层活动对象：
```js
function foo() {
  var res = []

  for (var i = 0; i < 5; i++) {
    res[i] = (function(num) {
      return function() {
        return num
      }
    })(i)
  }

  return res
}
```

+ 另一个解决方法是在 `for` 循环中使用 ES6 的 `let` 变量声明，因为 `let` 具有块级作用域：
```js
function foo() {
  var res = []

  for (let i = 0; i < 5; i++) {
    res[i] = function() {
      return i
    }
  }

  return res
}
```



### 另一个面试题

+ 以下代码期望的结果是
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

::: tip 结果也不会如愿，它会每隔1秒打印一次 3：
+ 不是 3 秒后一次性打印：`setTimeout` 的第二个参数为延迟的时间，它作为函数参数，是可以正确捕获不同的 `i` 的值的
+ 不是每隔1秒打印一次 i 的值：`setTimeout` 的第一个参数是一个匿名函数，它与 `setTimeout` 的作用域相同，而此时为全局作用域
:::

+ 同样，可以使用 IIFE 实现
```js
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  })(i)
}
```

+ 也可以使用 `let` 实现
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```




### IE9 内存泄漏

+ `IE9` 之前的 `JScript` 对象和 `COM` 对象使用不同的垃圾收集例程，因此在 `DOM` 操作中容易发生内存泄漏：
```js
function assignHandle() {
  var element = document.getElementById('idName')
  element.onclick = function() {
    console.log(element.id)
  }
}
```

该函数创建了元素事件处理程序的闭包，而闭包又创建了一个循环引用(引用元素的 `id`)，导致 `element` 的引用计数一直是 1，它的内存不会被释放

+ 解决方式是将元素的 `id` 赋值给另一个变量，并在 `assignHandle()` 结束前手动释放 `element` 的引用：
```js
function assignHandle() {
  var element = document.getElementById('idName')
  var id = element.id
  element.onclick = function() {
    console.log(id)   // id 来自另外声明的变量，防止循环引用
  }

  element = null      // 手动释放 element
}
```





### 私有变量和模块模式

+ 函数具有私有作用域，因此可以使用函数和闭包来模拟私有变量(这也是实现模块模式的一种方法)：
```js
function foo() {
  var _name = 'Anonymous'
  var obj = {}

  obj.getName = function() {
    return _name
  }
  obj.setName = function(name) {
    _name = name
  }

  return obj
}

var obj = foo()
console.log(obj.getName())    // 'Anonymous'

obj.setName('Alice')
console.log(obj.getName())    // 'Alice'
console.log(obj.name)         // undefined
```