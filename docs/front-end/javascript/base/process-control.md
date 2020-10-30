---
sidebarDepth: 2
---

## 条件控制

### if/if...else

+ 语法：
```js
// 1.使用 if
if (condition) {

}

// 2.使用 if...else
if (condition) {
  // true statement
} else {
  // other statement
}

// 3.嵌套使用
if (condition) {
  // true statement
} else if (condition2) {
  // other statement
} else {

}
```

::: tip 说明：
+ 可以总是单独使用 `if` 作条件判断，但是不能单独使用 `else`，`else` 是可选的，但是用 `else` 指代其他情况实用性更强一些
+ 仅仅是给单个变量赋值，`if...else` 与条件选择符器相同的效果
+ 在 `if...else` 语句中，若语句体只包含一条语句，可以省略 `{}`，建议不要省略，这样让代码更加清晰，不会产生歧义
+ `if...else` 可以相互嵌套
+ 若需要判断的情况较多且较为规则，使用 `switch` 代替 `if...else` 会更加清晰
:::


### switch

+ 语法：
```js
switch (key) {
  case value1:
    // statement;
    break
  case value2:
    // statement;
    break
  // ...
  default:
    // statement;
    break
}
```

::: tip 说明：
+ `switch` 会匹配一个或多个的 `case` 子句，直至触发一个 `break` 语句，它才会退出
+ `case` 子句不一定是常量，也可以是变量或表达式
+ `default` 语句不是必须的，当所有 `case` 子句都不能匹配的情况下才会匹配 `default` 语句
+ `switch` 在比较值时使用的是全等操作符(`===`)，不会发生类型的转换
+ `switch` 可以很容易改写为一个 `if...else` 语句
:::



## 循环

### do...while

+ 语法：
```js
do {
  // statements
} while (condition);
```

::: tip 说明：
+ 该语句结构结尾一定要有一个分号
+ `do...while` 属于后测试循环语句，即在对表达式求值之前，循环体的语句始终会执行一次
:::


### while

+ 语法：
```js
while (condition) {
  // true statements
}
```

::: tip 说明：
+ `while` 属于前测试循环语句，表达式求值为 true 时才会执行
:::


### for

+ 语法：
```js
// 1.无限循环
for (;;) {
  console.log('hello')
}

// 2.等同于 while 循环
var i = 0
for (; i < 10; ) {
  console.log(i)
  i++
}

// 3.var 初始化的变量是全局的
for (var i = 0; i < 10; i++) {
  // statements
}
console.log(i) // 10

// 4.定时器问题
for (var i = 0; i < 10; i += 1) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
/* 预期会依次打印 0~9，但是实际上打印了十个 10，原因：
1. setTimeout() 是宏任务，而 i 自增属于同步操作，所有同步操作会在宏任务之前执行完毕
2. 因为 var 声明的 i 是全局的，导致宏任务执行时，i 已经变为 10
*/

/* 解决方法1：修改为立即执行函数(IIFE)，即闭包：
+ 函数有独立的作用域，使用 IIFE 为每个定时器创建了一块独立的作用域
+ 相当于该作用域捕获了每次循环的 i 值，而不是都使用全局作用域的 i
*/
for (var i = 0; i < 10; i += 1) {
  (function(i) {
    setTimeout(() => {
      console.log(i)
    }, 100)
  })(i)
}

// 解决方法2：使用 let，它具有块级作用域
for (let i = 0; i < 10; i += 1) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
```

::: tip 备注：
+ `for` 和 `while` 能够实现相同的效果，但是 `while` 比较简洁，`for` 比较灵活
+ `for` 不会产生块级作用域，而且 `for` 会不经意地发生定时器、闭包等问题
:::


### for...in

+ 语法：
```js
function Animal() {
  this.name = 'Animal'
}
function Dog() {
  this.legs = 4
}
Dog.prototype = new Animal()

var dog = new Dog()
for (var key in dog) {
  if (dog.hasOwnProperty(key)) { // 没有这个判断时，还会打印 'Animal'
    console.log(dog[key])        // '4'
  }
}
```

::: tip 说明：
+ `for...in` 是一个快捷的 for 循环，但是和 for 不同，常用于枚举对象的属性
+ `for...in` 遍历对象时是没有顺序的，因为对象的属性本来是无序的
+ `for...in` 遍历对象时会遍历原型上的属性，可使用 `hasOwnProperty()` 过滤对象自身的方法
:::


### label

+ label 可以用于定义一个语句，将来由 `break` 或 `continue` 引用
+ 语法：
```js
label: statement
```


### break 和 continue

+ `continue` 语句会跳出本轮循环，继续下一轮循环
```js
// continue
var i = 0
while (i < 3) {
  i++;
  if (i === 2) {
    continue
  }
  console.log(i)  // 会分别打印 1 和 3，不会打印 2
}
```
+ `break` 语句会跳出整个循环体
```js
// break
var j = 0
while (j < 3) {
  j++
  if (j === 2) {
    break
  }
  console.log(j)  // 只会打印 1
}
```



## 其他

### with

+ `with` 语句用于将代码块的作用域绑定到一个对象中，它会延长作用域链
```js
const name = 'Anna'
const obj = {
  name: 'Alice',
}

console.log(name)     // 'Anna'

with (obj) {
  console.log(name)   // 'Alice'，若 obj.name 不存在时才会打印 'Anna'
}
```

::: tip 备注：
+ 严格模式下使用 `with` 语句会报错
+ 大量的 `with` 语句会导致性能下降，因此尽量不要使用 `with` 语句
:::


### try...catch...finally

+ 语法：
```js
try {
  // statements
} catch (error) {
  // statements
} finally {
  // statements
}
```