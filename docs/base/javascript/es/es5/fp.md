---
sidebarDepth: 2
---

## 函数的定义

定义函数方式有以下几种：

+ **函数声明**：函数声明提升(执行代码前会先读取函数声明)，可以把调用函数的语句放在函数声明的前面
```js
foo() // declare

function foo() {
  console.log('declare')
}
```

+ **函数表达式**：也叫匿名函数(或 `lambda` 函数)，类似变量的赋值的形式，只不过右边使用关键字 `function`，`function` 的后面可以带函数名也可以不带函数名；函数表达式没有变量提升
```js
var foo = function () {
  console.log('declare')
}

foo() // declare
console.log(foo.name) // foo

var bar = function baz() {
  console.log('declare')
}

bar() // declare
console.log(bar.name) // baz
```

+ **构造函数**：通过 `Function` 构造函数生成
```js
const foo = new Function('a', 'b', 'console.log(a+b)')

foo(2, 3) // 5
```

::: tip 说明：
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
let foo
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




## 概念

### 名词说明

+ **执行环境**：定义了变量和函数有权访问其他的数据，决定它们各自的行为；函数有自己的执行环境
+ **变量对象**：每个执行环境都有一个关联的变量对象，其保存了执行环境中定义的所有变量和函数；我们无法访问该变量对象，但解析器会在后台使用
+ **执行流和环境栈**：当执行流进入到一个函数时，函数的环境会被推入一个执行栈；当函数完成后，栈会弹出该函数的环境，把控制权交给之前的执行环境
+ **作用域**：
  + 按作用域动静态分：动态作用域、静态作用域（词法作用域）
  + 按作用域范围分：全局作用域、局部作用域（函数作用域）、块级作用域（`let` 赋予）
+ **作用域链**：执行环境会创建变量对象的一个作用域链，其保证对执行环境有权访问的所有变量和函数的有序访问；内部环境能够通过作用域链访问所有的外部环境，反之则不能

::: tip 说明：
+ **执行环境**也叫**执行上下文**，它的声明周期为：创建->执行->回收，在创建阶段，主要用处：
  + 创建变量对象：初始化函数 `arguments` 参数，提升函数声明和变量声明
  + 创建作用域链
  + 确立 `this` 指向
+ **执行环境确立 `this` 的指向**：详见下文**函数中 this 的绑定**
:::


### 函数中 this 的绑定

+ **默认绑定**：作为方法调用时绑定为所属对象，作为函数调用时绑定至全局对象
```js
const obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name)
  },
}

obj.getName() // Alice
const getName = obj.getName
getName() // undefined
// 严格模式下报错 TypeError: Cannot read property 'name' of undefined
```

+ **显式绑定**：使用 `call()`/`apply()`/`bind()` 修改 `this` 的绑定
```js
const obj = {
  name: 'Alice',
}

function getName() {
  console.log(this.name)
}

getName() // undefined
getName.call(obj) // Alice
```

+ **new 绑定**：绑定为该函数的实例
```js
function foo() {
  this.a = 'foo'
  console.log(this)
}

new foo() // foo { a: 'foo' }
foo() // global {}
```



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

foo() // world
console.log(str) // hello
```

+ **没有块级作用域**：循环和流程控制并不能生成块级作用域，`var` 定义的变量位于全局作用域中
```js
for (var i = 0; i < 10; i++) {
  var a = i * 2
}
console.log(i) // 10
console.log(a) // 20
```

::: tip 说明：
+ ES6 的 `let` 具有块级作用域
```js
for (let i = 0; i < 10; i++) {
  let a = i * 2
}

console.log(i) // ReferenceError
console.log(a) // ReferenceError
```
:::


### 延长作用域链

两种方法延长作用域链：

+ `try/catch` 块中的 `catch`
```js
function foo() {
  try {
    console.log(res)
  } catch (e) {
    console.log(e.name) // ReferenceError
    const str = 'hello world'
  }
  console.log(str) // hello world
}

foo()
```

+ `with` 语句
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

foo() // hello world
```

::: tip 说明:
+ 由于 `with` 具有性能问题，因此不建议使用
:::


## 闭包

&emsp;&emsp;闭包指的是有权访问另一个函数作用域的变量的函数。创建闭包常见方式，就是在一个函数内部创建另一个函数，这样处于作用域链前端的函数就能访问外层作用域的变量：

```js
function foo() {
  const str = 'hello'

  return function () {
    console.log(str)
  }
}

var sayHi = foo()
sayHi() // hello
```

&emsp;&emsp;在调用 `foo()` 后，`foo()` 的执行环境的作用域会被销毁，但是它的活动对象仍会保存在内存中，因为变量 `sayHi` 保存了对它的引用；当该引用销毁时(将 `sayHi` 赋值为 `null`)，`foo()` 的活动对象才会被销毁。

**闭包的特点：**

+ 能够捕获调用函数的变量(通过引用外部函数的活动对象)
+ 会占用更多的内存(外部函数的活动对象不能释放)


**闭包的应用：**

&emsp;&emsp;以下方法的目的是返回一个数组，该数组的元素是一系列函数，它们的调用分别返回 `0~4`：

```js
function foo() {
  var res = [];

  for (var i = 0; i < 5; i++) {
    res[i] = function() {
      return i;
    };
  }

  return res;
}
```

&emsp;&emsp;但是这个函数不会得到理想的结果，因为调用后返回的数组，它的每一个函数元素的调用都会返回 5。因为 `javascript` 没有块级作用域，所以匿名函数赋值时捕获的都是同一个活动对象，导致它们所捕获的 `i` 的值都是 5。

&emsp;&emsp;一个解决方法是在匿名函数中使用闭包，添加一层活动对象：

```js
function foo() {
  var res = [];

  for (var i = 0; i < 5; i++) {
    res[i] = (function(num) {
      return function() {
        return num;
      }
    })(i);
  }

  return res;
}
```

&emsp;&emsp;另一个解决方法是在 `for` 循环中使用 `ES6` 的 `let` 变量声明，因为 `let` 具有块级作用域：

```js
function foo() {
  var res = [];

  for (let i = 0; i < 5; i++) {
    res[i] = function() {
      return i;
    };
  }

  return res;
}
```

**内存泄漏：**

&emsp;&emsp;`IE9` 之前的 `JScript` 对象和 `COM` 对象使用不同的垃圾收集例程，因此在 `DOM` 操作中容易发生内存泄漏：

```js
function assignHandle() {
  var element = document.getElementById('someId');
  element.onclick = function() {
    console.log(element.id);
  };
}
```

&emsp;&emsp;该函数创建了元素事件处理程序的闭包，而闭包又创建了一个循环引用(引用元素的 `id`)，导致 `element` 的引用计数一直是 1，它的内存不会被释放。解决方式是将元素的 `id` 赋值给另一个变量，并在 `assignHandle()` 结束前手动释放 `element` 的引用：

```js
function assignHandle() {
  var element = document.getElementById('someId');
  var id = element.id;
  element.onclick = function() {
    console.log(id); // id 来自另外声明的变量，防止循环引用
  };

  element = null; // 手动释放 element
}
```




### 模拟块级作用域

&emsp;&emsp;可以使用立即执行函数(`IIFE`)来模拟块级作用域(私有作用域)，在块级作用域内的变量，它们会在代码执行之后被回收，而且不会跟全局作用域发生命名冲突：

```js
var str = 'global';
(function() {
  // 块级作用域
  var str = 'hello';

  console.log(str); // hello
})();

console.log(str); // global
```

&emsp;&emsp;这是很多开源库使用的方式，这样子它们定义的变量就不会跟全局变量或者用户自定义的变量发生命名冲突。


### 私有变量和模块模式

&emsp;&emsp;函数具有私有作用域，因此可以使用函数和闭包来模拟私有变量：

```js
function foo() {
  var _name = 'Anonymous';
  var obj = {};

  obj.getName = function() {
    console.log(_name);
  };
  obj.setName = function(name) {
    _name = name;
  }

  return obj
}

var obj = foo();
obj.getName(); // Anonymous
obj.setName('Alice');
obj.getName(); // Alice
console.log(obj.name); // undefined
```

&emsp;&emsp;这也是实现模块模式的一种方法。




## 高阶函数

&emsp;&emsp;能够接收一个函数作为参数或者以一个函数为返回结果的函数，叫做高阶函数。

```js
// 返回一个函数
function foo() {
  var str = 'hello';
  return function () {
    return str;
  };
}

var sayHi = foo();
console.log(sayHi()); // hello

// 接收函数作为参数并返回一个函数
function calc(fn) {
  return function(arr) {
    return fn.apply(null, arr);
  }
}

var getMax = calc(Math.max);
console.log(getMax([1, 2, 3, 4, 5])); // 5
```

## 柯里化

&emsp;&emsp;

## 递归

&emsp;&emsp;

