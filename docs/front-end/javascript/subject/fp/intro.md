---
sidebarDepth: 2
---

## 简介

### 函数的定义

+ **函数声明**：函数声明提升(执行代码前会先读取函数声明)，可以把调用函数的语句放在函数声明的前面
```js
foo()   // 'declare'

function foo() {
  console.log('declare')
}
```

+ **函数表达式**：也叫匿名函数(或 `lambda` 函数)，类似变量的赋值的形式，只不过右边使用关键字 `function`，`function` 的后面可以带函数名也可以不带函数名；<font color="red">函数表达式没有变量提升</font>
```js
// 没有指定函数名，其 name 属性默认为变量名
var foo = function () {}
console.log(foo.name)   // 'foo'

// 指定一个函数名，其不同于左侧变量名
var bar = function baz() {}
console.log(bar.name)   // 'baz'

// 匿名函数没有变量提升
func()                  // 'TypeError: func is not a function'
var func = function () {
  console.log('declare')
}
```

+ **构造函数**：通过 `Function` 构造函数生成
```js
var foo = new Function('a', 'b', 'console.log(a+b)')

foo(2, 3)   // 5
```

::: tip 备注
+ 函数声明和函数表达式最显著的区别是：函数声明会提升，而函数表达式没有
+ 尽量不要使用构造函数的方式创建函数，因为它的可读性和性能很差
+ 一个函数声明的误区：
```js
// 函数声明会发生函数提升，导致在一些浏览器会产生不一致的行为
if (condition) {
  function foo() {
    console.log('foo true')
  }
} else {
  function foo() {
    console.log('foo false')
  }
}

// 避免产生不一致的行为，改写为函数表达式的形式
var foo
if (condition) {
  foo = function () {
    console.log('foo true')
  }
} else {
  foo = function () {
    console.log('foo false')
  }
}
```
:::



### 函数是一等公民

在函数式编程中，函数是一等公民，能够用在很多地方：
+ 作为变量
+ 作为数组的元素
+ 作为对象的属性
+ 作为另一个函数的参数
+ 作为另一个函数的返回值
```js
// 1.作为变量
var ten = function () {
  return 10
}

// 2.作为数组的元素
var arr = [10, function() { return 12 }]

// 3.作为对象的属性
var obj = {
  name: 'Alice',
  getName: function() {
    return this.name
  },
}

// 4.作为另一个函数的参数
function add(a, f) {
  return a + f()
}

add(10, ten)    // 20

// 5.作为另一个函数的返回值
function add(a) {
  return function(b) {
    return a + b
  }
}

add(5)(10)    // 15
```


### 对比命令式编程


### Applicative 编程

+ 可适用性(Applicative)编程指的是




### 重要概念

+ **执行环境**：定义了变量和函数有权访问其他的数据，决定它们各自的行为；函数有自己的执行环境
+ **变量对象**：每个执行环境都有一个关联的变量对象，其保存了执行环境中定义的所有变量和函数；我们无法访问该变量对象，但解析器会在后台使用
+ **执行流和执行环境栈**：当执行流进入到一个函数时，函数的环境会被推入一个执行栈；当函数完成后，栈会弹出该函数的环境，把控制权交给之前的执行环境
+ **作用域**
  + 按作用域范围分：
    + **全局作用域**：顶层对象（一般为 window）所在的作用域，在全局作用域下声明或没有用关键字声明的所有变量都是全局变量，全局变量能被任何函数访问
    + **局部(函数)用域**：每个函数都会产生一个函数作用域，函数作用域<font color="red">只能通过作用域链访问</font>
    + **块级作用域**：ES6 新增的 `let`/`const` 关键字具有块级作用域
  + 按变量可见性分：
    + **词法(静态)作用域**：函数的作用域是在函数定义的时候决定的；变量的查找开始于最接近的绑定上下文而向外扩展，直到找到第一个绑定
    + **动态作用域**：函数的作用域是在函数调用的时候决定的；变量的查找开始于函数内部，接着到调用函数的作用域查找
+ **作用域链**：当代码在一个环境中执行时，会创建变量对象的一个作用域链，它保证对执行环境有权访问的所有变量和函数的有序访问；内部环境可以通过作用域链访问所有的外部环境，反之则不能

::: tip 说明：
+ **执行环境**也叫**执行上下文**，它的声明周期为：创建->执行->回收，在创建阶段，主要用处：
  + 创建变量对象：初始化函数 `arguments` 参数，提升函数声明和变量声明
  + 创建作用域链
  + 确立 `this` 指向
+ 理论上 Javascript 只有词法作用域，没有真正意义上的动态作用域，只是使用了 `call()`/`bind()`/`apply()` 来绑定函数执行时的 `this`，使其变得可控
:::


### 作用域分类

+ **全局作用域**：能被所有作用域访问，另外没有使用关键字声明的变量都会上升为全局变量
```js
const str = 'hello'
function foo() {
  name = 'Alice'
  console.log(str)
}

foo() // hello
console.log(name) // Alice
```

+ **局部作用域**：变量的查找从最接近的绑定上下文向外扩展，直到找到第一个绑定
```js
const str = 'hello'
function foo() {
  const str = 'world'
  console.log(str)
}

foo()             // world
console.log(str)  // hello
```

+ **块级作用域**：循环和流程控制不能生成块级作用域，`var` 定义的变量位于全局作用域中；但 ES6 改变了这一点
```js
// 循环和流程控制不能生成块级作用域
for (var i = 0; i < 10; i++) {
  var a = i * 2
}
console.log(i)    // 10
console.log(a)    // 20

// ES6 的 let/const 具有块级作用域
for (let i = 0; i < 10; i++) {
  let a = i * 2
}

console.log(i)    // ReferenceError
console.log(a)    // ReferenceError
```


### 延长作用域链

+ `try/catch` 块中的 `catch` 字句
```js
function foo() {
  try {
    console.log(res)
  } catch (e) {
    console.log(e.name)   // ReferenceError
    const str = 'hello world'
  }
  console.log(str)        // hello world
}

foo()
```

+ `with` 语句：但是由于 `with` 的性能问题，已不再建议使用
```js
const obj = {
  str: 'hello',
}

function foo() {
  const temp = 'world'
  with (obj) {
    const res = str + ' ' + temp
  }
  console.log(res)
}

foo()   // hello world
```


## this

### this & 执行上下文栈

**显式绑定：** `call()/bind()/apply()`

**隐式绑定：**
+ 全局上下文：默认 `this` 指向 `window`，严格模式下指向 `undefined`
+ 直接调用函数，相当于在全局上下文调用
+ `obj.func()` 调用：`this` 指向 `obj` 对象
+ `DOM` 事件绑定：`this` 指向绑定事件的元素
+ `new P()` 调用：`this` 指向实例对象
+ 箭头函数：`this` 指向最近的非箭头函数的 `this`，层层向上直至到达全局上下文

**this 绑定优先级：** `new` > `call()/bind()/apply()` > `obj.func()` > `func()`


### this 的取值

**this 的取值：**
+ `setInterval()/setTimeout()` 中指向 `window`
+ `new` 中指向新创建的实例
+ `call()/bind()/apply()` 中指向绑定的对象
+ 函数调用时指向调用该函数的对象
+ 箭头函数中指向当前的环境上下文


### this 的绑定规则

+ **默认绑定**：作为方法调用时绑定为所属对象，作为函数调用时绑定至全局对象
```js
const obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name)
  },
}

obj.getName()   // Alice

const getName = obj.getName
getName()       // undefined (非严格模式下)
// 严格模式下不能将 this 绑定至 window，因此会报错：
// TypeError: Cannot read property 'name' of undefined
```

+ **显式绑定**：使用 `call()`/`apply()`/`bind()` 修改 `this` 的绑定
```js
const obj = {
  name: 'Alice',
}

function getName() {
  console.log(this.name)
}

getName()           // undefined
getName.call(obj)   // Alice
```

+ **new 绑定**：绑定为该函数的实例
```js
function foo() {
  this.a = 'foo'
  console.log(this)
}

new foo()   // foo { a: 'foo' }
foo()       // global {}
```