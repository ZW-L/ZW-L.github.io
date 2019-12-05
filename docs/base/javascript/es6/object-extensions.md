---
sidebarDepth: 2
---

## 简介

+ String 扩展
+ RegExp 扩展
+ Number 扩展
+ Function 扩展
+ Array 扩展
+ Object 扩展

## Function 扩展

### 参数默认值

+ 当没有传入指定参数时将会使用参数默认值

```js
function point(x = 0, y = 0) {
  return { x, y }
}

console.log(point()) // { x: 0, y: 0 }
```

### rest 参数

+ 可以使用 `...args` 的形式指定所有的剩余参数，但必须作为函数的最后一个参数

```js
function add(...values) {
  let sum = 0
  for (let val of values) {
    sum += val
  }

  return sum
}

console.log(add(2, 5, 3)) // 10
```

### name 属性

+ 函数的 `name` 属性，返回该函数的函数名

```js
function foo() {}
foo.name // 'foo'
```

+ `bind` 绑定的函数会有 `bound` 前缀

```js
var f = function () {}
console.log(f.bind({}).name) // 'bound f'
```

### 箭头函数

+ 使用函数表达式时可用箭头函数的方式快捷定义函数

```js
[1,2,3].map(function (x) {
  return x * x
})

[1,2,3].map(x => x * x)
```

+ 一些注意事项

```js
// 1.没有参数时需要使用一个空括号
const func = () => 'Hello World!'

// 2.多个参数时需要使用括号包围
const add = (a, b) => a + b

// 3.返回一个对象时需要使用括号包围
const func = (a, b) => ({ first: a, last: b })

// 4.函数体有多个语句时，使用花括号
const func = (a, b) => {
  const sum = a + b
  const mul = a * b
  return { sum, mul }
}
```

+ 嵌套操作

```js
const func = (a, b) => (add => a + b + add)

console.log(func(2, 3)(4)) // 9
```

+ 箭头函数的特点：
  + 没有自身的 `this`，但会捕获函数定义时的 `this`
  + 不能用作构造函数，即也不能使用 `new` 操作符(因为没有自身的 `this`)
  + 不能使用 `arguments` 对象(可以使用 `rest` 参数代替)
  + 不能使用 `yield` 命令，即不能用作 `Generator` 函数



## Object 扩展

### 属性的简写

+ 属性名简写
```js
function getPoint() {
  const x = 1
  const y = 10
  return {x, y}
}

console.log(getPoint()) // { x: 1, y: 10 }
```

+ 函数简写
```js
const o = {
  foo() {},
  bar: function() {}
}
```

### 属性名表达式

+ 将表达式放在方括号中

```js
const types = {
  GET_NAME: 'GET_NAME',
  GET_MESSAGE: 'GET_MESSAGE',
}

const o = {
  [types.GET_NAME]() {},
  [types.GET_MESSAGE]() {},
}
```

### 新增方法

+ `Object.getPrototypeOf(obj: Object): Object`:  返回对象的原型对象
+ `Object.setPrototypeOf(target: Object, prototype: Object): Boolean`: 设置对象的原型对象
+ `Object.is(a: any, b: any): Boolean`: 判断两个值是否是相同的值
+ `Object.keys(obj: Object): Array`: 返回由指定对象的自身可枚举属性组成的数组(顺序和 `for...in` 遍历的顺序一样)
+ `Object.getOwnPropertyDescriptor(obj: Object, prop: String): Object | undefined`: 返回指定对象的某个属性描述符

::: tip 说明：
+ `Object.is()` 类似 `===`，但是：
```js
console.log(Object.is(0, -0), 0 === -0) // false true
console.log(Object.is(NaN, NaN), NaN === NaN) // true false
```
::: 

## Array 扩展

### 扩展运算符

+ 相当于将数组扁平化一层

```js
console.log(...[1, 2, 3]) // 1 2 3
console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5
```

+ 任何实现了 Iterator 接口的解构(类数组, `Set`, `Map`, `Generator`)都能使用

```js
// NodeList
[...document.querySelectorAll('div')] // [<div>, <div>, <div>]

// Set
[...new Set([1, 2, 2, 3, 4, 5])] // [1, 2, 3, 4, 5]

// Generator
const go = function*(){
  yield 1
  yield 2
  yield 3
}

[...go()] // [1, 2, 3]
```

+ 可以放置表达式

```js
const x = 2
const arr = [...(x > 0 ? ['a'] : []), 'b']
console.log(arr) //  ['a', 'b']
```

### 数组的空位

+ 忽略空位
  + `forEach()`, `filter()`, `reduce()`, `every()`, `some()` 都会跳过空位
  + `map()` 会跳过空位，但会保留这个值
  + `join()`, `toString()` 会将空位视为 `undefined`，而 `undefined` 和 `null` 会被处理成空字符串
+ 不忽略空位
  + `for...of` 会遍历空位
  + `...` 会将空位转为 `undefined`
  + `Array.from()` 会将空位转为 `undefined`
  + `fill()` 不会忽略空位
  + `copyWithin()` 会拷贝空位
  + `entries()`, `keys()`, `values()`, `find()`, `findIndex()` 会将空位处理成 `undefined`


### 新增的方法

+ `Array.from(arr: Array, fn?: Function, thisArg?: Object): Array`: 从一个类数组或可迭代对象创建一个新的，浅拷贝的数组实例
+ `Array.of(el{1,}: any): Array`: 从任意数量的元素返回一个数组
+ `Array.prototype.copyWithin(target: Number, start?: Number, end?: Number): Array`: 浅复制数组的一部分到同一数组中的另一个位置(不会改变原数组的长度)
+ `Array.prototype.find(fn: Function, thisArg?: Object): any`: 返回数组中满足提供的测试函数的第一个元素的值(否则返回 `undefined`)
+ `Array.prototype.findIndex(fn: Function, thisArg?: Object): Number`: 返回数组中满足提供的测试函数的第一个元素的索引(否则返回 -1)
+ `Array.prototype.fill(val?: any, start=0: Number, end=length?: Number): Array`: 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
+ `Array.prototype.keys(): Iterator`: 返回一个包含数组中键名的 `Iterator` 对象



## String 扩展

### Unicode 表示法

+ 此前超出 `\u0000` ~ `\uFFFF` 之间的字符，必须用两个双字节的形式表示
+ 现在将码点放入大括号，就能正确解读该字符

```js
'\u{20BB7}'
// '𠮷'

'\u{41}\u{42}\u{43}'
// 'ABC'

let hello = 123
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true
```

::: tip 说明：
+ 现在有以下方法表示一个字符：
```js
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```
:::


### 遍历器接口

+ 字符串实现了遍历器接口，因此能被 `for...of` 遍历：

```js
for (let chr of 'foo') {
  console.log(chr)
}
// 'f'
// 'o'
// 'o'
```

+ 而且，还能识别大于 `0xFFFF` 的码点(`for` 循环不能识别):

```js
let text = String.fromCodePoint(0x20BB7)

for (let i = 0; i < text.length; i++) {
  console.log(text[i])
}
// " "
// " "

for (let i of text) {
  console.log(i)
}
// "𠮷"
```

### 模板字符串

+ 使用反引号包含字符串，并且能够折行

```js
`In JavaScript '\n' is a line-feed.`

`In JavaScript this is
 not legal.`
```

+ 使用 `${variable}` 的格式引用变量，表达式，执行函数等

```js
let x = 1
let y = 2
console.log(`${x} + ${y} = ${x + y}`) // '1 + 2 = 3'

function fn() {
  return 'Hello World'
}
console.log(`foo ${fn()} bar`) // 'foo Hello World bar'
```


### 新增方法

+ `String.fromCodePoint(num{1,}: Unicode): String`: 从 `Unicode` 码点返回对应字符(可以识别大于 `0xFFFF` 的字符)
+ `String.raw(): String`: 作为处理模板字符串的基本方法，会将所有变量替换且对斜杠进行转义，方便下一步作为字符串来使用
+ `String.prototype.codePointAt(pos: Number): Number`: 返回一个 `Unicode` 编码点值的非负整数
+ `String.prototype.normalize(form='NFC': String): String`: 按照指定的一种 `Unicode` 正规形式将当前字符串正规化
+ `String.prototype.repeat(count: Number): String`: 返回当前字符串重复指定次数的新字符串
+ `String.prototype.includes(str: String, position=0: Number): Boolean`: 判断指定字符串是否包含在另一个字符串中
+ `String.prototype.startsWith(str: String, position=0: Number): Boolean`: 判断当前字符串是否以给定的字符串开头
+ `String.prototype.endsWith(str: String, position=0: Number): Boolean`: 判断当前字符串是否以给定的字符串结尾
+ `String.prototype.trimStart(): String`: 从字符串的开头删除空格
+ `String.prototype.trimEnd(): String`: 从字符串的结尾删除空格




## RegExp 扩展

### 构造函数

+ 构造函数的第一个参数是正则时，允许使用第二个参数(但修饰符会被第二个参数覆盖)
```js
new RegExp(/abc/ig, 'i').flags
// "i"
```

### 新的修饰符

+ `u`: 用来正确处理大于 `\uFFFF` 的 `Unicode` 字符
```js
/^\uD83D/u.test('\uD83D\uDC2A') // false
/^\uD83D/.test('\uD83D\uDC2A') // true
```

+ `y`: 修饰符确保匹配必须从剩余的第一个位置开始
```js
var s = 'aaa_aa_a'
var r1 = /a+/g
var r2 = /a+/y

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null
```

### 正则相关的字符串方法

+ 以下正则方法相当于对应的字符串方法
  + `RegExp.prototype[Symbol.match]()`: 相当于 `String.prototype.match()`
  + `RegExp.prototype[Symbol.replace]()`: 相当于 `String.prototype.replace()`
  + `RegExp.prototype[Symbol.search]()`: 相当于 `String.prototype.search()`
  + `RegExp.prototype[Symbol.split]()`: 相当于 `String.prototype.split()`

### 新增属性和方法

+ `RegExp.prototype.unicode`: 表示是否设置了 `u` 修饰符
+ `RegExp.prototype.sticky`: 表示是否设置了 `y` 修饰符
+ `RegExp.prototype.flags`: 返回正则表达式的修饰符



## Number 扩展

### 二进制和八进制

+ 使用 `0b` 或 `0B` 表示二进制
```js
0b111110111 === 503 // true
```

+ 使用 `0o` 或 `0O` 表示八进制
```js
0o767 === 503 // true
```

### 新增属性和方法

+ `Number.EPSILON`: 极小值常量(2^-52)，实际上是能够表示的最小精度
+ `Number.MIN_SAFE_INTEGER`: 最小安全整数(2^-53)
+ `Number.MAX_SAFE_INTEGER`: 最大安全整数(2^53)
+ `Number.parseInt()`: 相当于全局的 `parseInt()`
+ `Number.parseFloat()`: 相当于全局的 `parseFloat()`
+ `Number.isFinite(num: Number): Boolean`: 检查一个数值是否为有限的，即不是 `Infinity`(非数值均返回 `false`)
+ `Number.isNaN(num: any): Boolean`: 检查一个值是否为 `NaN`
+ `Number.isInteger(num: Number): Boolean`: 判断一个数值是否为整数
+ `Number.isSafeInteger(num: Number): Boolean`: 检查一个数值是否为安全整数
