## 函数的定义

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




## 函数是一等公民

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




## 对比命令式编程





## Applicative 编程

+ 可适用性(Applicative)编程指的是