---
sidebarDepth: 2
---

## 条件控制

### if / if...else

+ 基础语法：
:::: tabs
::: tab if
```js
if (condition) {

}
```
:::

::: tab if...else
```js
if (condition) {
  // true statement
} else {
  // other statement
}
```
:::

::: tab 嵌套使用
```js
if (condition) {
  // true statement
} else if (condition2) {
  // other statement
} else {

}
```
:::

::: tab 对比条件选择符
```js
let a = 10, b
if (a > 0) {
  b = a
} else {
  b = -a
}

// 等同于
b = a > 0 ? a : -a
```
:::
::::


::: tip 说明：
+ `else` 是可选的，因此可以单独使用 `if`，但不能单独使用 `else`
+ 仅仅是给单个变量赋值，`if...else` 与条件选择符器相同的效果
+ 在 `if...else` 语句中，若语句体只包含一条语句，可以省略 `{}`，具体使用依团队规范
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
+ `switch` 的一个优点是，它比较时使用的是 `===` 操作符，不会发生类型转换
+ `switch` 可以很容易改写为一个 `if...else` 语句
:::


### 优化

:::: tabs
::: tab 尽早退出
+ 先判断最有可能出现的情况
```js
if (score >= 90) {
  // ...
} else if (score >= 80) {
  // ..
} else if (score >= 70) {
  // ...
} else if (score >= 60) {
  // ...
} else {
  // ...
}

// 假设班级中不及格或低分的人数较多，应该改写为
if (score < 60) {
  // ...
} else if (score < 70) {
  // ...
} else if (score < 80) {
  // ...
} else if (score < 90) {
  // ...
} else {
  // ...
}
```
:::

::: tab 合理使用嵌套
+ 需要对几个值域进行判断时，使用嵌套的 `if...else`
+ 合理使用嵌套，会有奇效（想想吧，类似折半查找的思想）
```js
if (val === 0) {
  // ...
} else if (val === 1) {
  // ...
} else if (val === 2) {
  // ...
} else if (val === 3) {
  // ...
} else if (val === 4) {
  // ...
} else if (val === 5) {
  // ...
}

// 改写为
if (val < 3) {
  if (val === 0) {
    // ...
  } else if (val === 1) {
    // ...
  } else {
    // ...
  }
} else {
  if (val === 3) {
    // ...
  } else if (val === 4) {
    // ...
  } else {
    // ...
  }
}
```
:::

::: tab 改写为 switch
+ 将判断多个离散值的 `if...else` 改写为 `switch`：
```js
if (color === 'red') {
  return result1
} else if (color === 'green') {
  return result2
} else if (color === 'blue') {
  return result3
} else {
  return result4
}

// 改写为
switch(color) {
  case 'red':
    return result1
  case 'green':
    return result2
  case 'blue':
    return result3
  default:
    return result4
}
```
:::

::: tab 改写为查找表
+ 当存在多个键值的逻辑映射时，使用查找表：
```js
switch(val) {
  case 0:
    return result1
  case 1:
    return result2
  case 2:
    return result3
  case 3:
    return result4
  // 更多的 case...
  default:
    return default
}

// 完全摒弃条件语句，改写为
const results = [result1, result2, result3, result4 /* 更多返回值 */]
return results[val]
```
:::
::::



## 循环

### do...while / while

+ `do...while` 属于直到型循环，一般很少使用，而 `while` 属于当型循环，一般使用较多
+ `do...while` 属于后测试循环语句，即在对表达式求值之前，循环体的语句始终会执行一次
```js
do {
  // statements
} while (condition);
```

+ `while` 属于前测试循环语句，表达式求值为 true 时才会执行
```js
while (condition) {
  // true statements
}
```


### for

+ 语法：
:::: tabs
::: tab 标准使用
```js
for (var i = 0; i < 5; i++) {
  console.log(i)
}
```
:::

::: tab 缺省语句
+ 三个语句都是可缺省的（中间的语句缺省时，将产生无限循环）
```js
for (;;) {
  console.log('hello')
}
```

+ 等同于 while 循环
```js
var i = 0
for (; i < 10; ) {
  console.log(i)
  i++
}
```
:::

::: tab 条件判断
+ 隐式的条件判断：判断语句使用 `,` 分隔时，相当于 `||`
```js
for (var i = 0, j = 0; i < 3, j < 5; i++, j++) {
  console.log(i, j)
}
console.log(i, j) // 5 5
```

+ 尽量使用显式声明
```js
for (var i = 0, j = 0; i < 3 && j < 5; i++, j++) {
  console.log(i, j)
}
console.log(i, j) // 3 3
```
:::

::: tab 没有块级作用域
+ 其 `var` 声明的变量是全局变量
```js
for (var i = 0; i < 10; i++) {
  // statements
}
console.log(i) // 10
```

+ 这会产生一个定时器问题：
```js
// 预期会依次打印 0~9，但是实际上打印了十个 10
for (var i = 0; i < 10; i += 1) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
/* 解释：
1. setTimeout() 是宏任务，而 i 自增属于同步操作，所有同步操作会在宏任务之前执行完毕
2. 因为 var 声明的 i 是全局的，导致宏任务执行时，i 已经变为 10
*/
```

+ 解决定时器问题：
```js
// 方法1：使用立即执行函数（IIFE），即使用闭包的特性
/* 解释：
+ 函数有独立的作用域，使用闭包为每个定时器创建一块独立的作用域
+ 相当于该作用域捕获了每次循环的 i 值，而不是都使用全局作用域的 i
*/
for (var i = 0; i < 10; i += 1) {
  (function(i) {
    setTimeout(() => {
      console.log(i)
    }, 100)
  })(i)
}

// 方法2：使用 ES6 新增的 let
// 解释：let 声明的变量具有块级作用域，而且不会成为全局变量
for (let i = 0; i < 10; i += 1) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
console.log(i)  // undefined
```
:::
::::

::: tip 备注：
+ `for` 和 `while` 能够实现相同的效果，但是 `while` 比较简洁，`for` 比较灵活
+ `for` 不会产生块级作用域，而且 `for` 会不经意地发生定时器问题
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
    console.log(dog[key])        // 4
  }
}
```

::: tip 说明：
+ `for...in` 是一个快捷的 for 循环，但是和 for 不同，常用于枚举对象的属性
+ `for...in` 遍历对象时是没有顺序的，因为对象的属性本来是无序的
+ `for...in` 遍历对象时会遍历原型上的属性，可使用 `hasOwnProperty()` 过滤对象自身的方法
:::


### for...of

+ `for...of` 是 ES6 新增的语法，它是基于迭代器（`Iterator`）的



### label

+ 语法：
```js
label: statement
```

::: tip 备注：
+ `label` 可以用于定义一个语句，将来由 `break` 或 `continue` 引用
+ 比较少使用
:::


### break / continue

+ `continue` 语句会跳出本轮循环，继续下一轮循环
```js
var i = 0
while (i < 3) {
  i++;
  if (i === 2) continue
  console.log(i)  // 会分别打印 1 和 3，不会打印 2
}
```

+ `break` 语句会跳出整个循环体
```js
var j = 0
while (j < 3) {
  j++
  if (j === 2) break
  console.log(j)  // 只会打印 1
}
```


### 优化

:::: tabs
::: tab 缓存值
+ 缓存遍历有利于减少每次迭代的工作量
```js
for (let i = 0; i < arr.length; i++) {
  // ...
}

// 改写为
for (let i = 0, len = arr.length; i < len; i++) {
  // ...
}
```
:::

::: tab 反序迭代
+ 反序迭代使循环判断步骤从 `i < len === true` 变成了 `i === true`，也减少了工作量
```js
for (let i = 0, len = arr.length; i < len; i++) {
  // ...
}

// 改写为
for (let i = arr.length; i--;) {
  // ...
}
```
:::

::: tab 不使用函数迭代
+ 需要严格要求迭代运行速度时，尽量使用循环迭代而不是函数迭代：
```js
arr.forEach(v => v * 2)

// 改写为
for (let i = arr.length; i--;) {
  arr[v] *= 2
}
```
:::

::: tab 减少迭代次数
+ 从算法上优化，考虑使用更高效率的算法（Duff's Device）
```js

```
:::

::: tab 谨慎使用 for...in
+ `for...in` 比三种循环语句慢，因为它每次迭代都要在实例或原型上查找
+ 不要使用 `for...in` 遍历数组，它不能保证遍历的顺序
:::
::::



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