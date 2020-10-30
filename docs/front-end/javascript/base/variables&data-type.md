---
sidebarDepth: 2
---

## 简介

### 数据类型

+ 基本数据类型：
  + `Undefined`：只有 `undefined`
  + `Null`：只有 `null`
  + `Boolean`：`true` 或 `false`
  + `Number`：整数、浮点数、特殊值(`Infinity`, `-Infinity`, `NaN`)
  + `String`：字符序列
  + `Symbol`：唯一的不可变的数据类型(ES6 新增)
  + `BigInt`：大整数(ES10 新增)
+ 引用数据类型：
  + `Object`：一组数据和功能的集合


### 原始类型 & 引用类型

**数据类型底层的数据结构：**
+ **栈**：保存基本数据类型的值或对象的引用地址指针(由系统分配存储空间、存储的值大小固定、空间小、直接操作变量效率高)
+ **堆**：保存该对象指针指向的数据(通过代码分配空间、存储的值可动态调整、空间大、使用引用地址读取效率低)

**区分原始类型和引用类型：**
+ **不可变性**：原始类型是不可变的，因为栈存储的值大小固定(有些字符串变异方法可变是因为开辟了新的内存空间)；引用类型是可变的，因为堆存储的值可动态调整
+ **变量比较**：原始类型直接比较值，引用类型会比较引用地址


### 判断数据类型的方式

+ `typeof`
```js
// 可以准确判断几个原始类型：undefined, boolean, number, string, symbol
console.log(typeof undefined)       // 'undefined'
console.log(typeof true)            // 'boolean'
console.log(typeof 12)              // 'number'
console.log(typeof '12')            // 'string'
console.log(typeof Symbol('12'))    // 'symbol'

// 可以准确判断唯一的引用类型：function
console.log(typeof console.log)     // 'function'

// 不能判断 null 的类型
console.log(typeof null)            // 'object'

// 不能准确判断其他的引用类型(只会返回 object)：Array, RegExp, Date, ...
console.log(typeof {})              // 'object'
console.log(typeof [])              // 'object'
console.log(typeof /\d+/)           // 'object'
console.log(typeof new Date())      // 'object'
```
+ `instanceof`
  + 优点：可以协助判断引用类型具体是什么类型的对象
  + 缺点：不会得到唯一的结果，因为只要右操作数位于原型链上，都会返回 `true`；而且有些继承方式可以修改该行为
+ `toString`
  + 优点：可以调用 `Object` 原型上未被覆盖的 `toString()` 方法，配合 `call()` 来准确判断变量的类型(`Object.prototype.toString.call(null)`)
  + 缺点：大部分引用类型均重写了 `toString()` 方法，但是这个问题可以解决
+ `constructor`
  + 返回实例的构造函数


### 六个假值

+ `false`
+ `undefined`
+ `null`
+ `NaN`
+ `0`
+ `''`


### 内置对象

[内置对象](../appendix/bio/object.md)是 ECMAScript 提供的工具对象：
+ `Object`
+ `Function`
+ `Array`
+ `String`
+ `Number`
+ `Math`
+ `Boolean`
+ `RegExp`
+ `Date`
+ `Error`






## 变量声明

### var

+ 使用关键字 `var` 声明一个变量：
```js
// 仅声明
var name

// 声明并赋值
var name = 'Zed'

// 声明和赋值分开
var name
name = 'Zed'

// 省略关键字 var
name = 'Zed'

// 同时声明多个变量
var name = 'Zed'
    age = 22
    sex = 'male'
```

::: tip 备注：
+ 永远不要省略关键字 `var`，这样能避免全局变量污染(省略关键字 `var` 时变量会上升为全局变量)
+ 尽量为已知类型的变量赋初始值，不推荐将变量声明和赋值分开
+ 推荐使用多行同时声明多个变量(不是必要)，这样有利于提高可读性
+ `ES6+` 基本抛弃了 `var` 关键字，而是使用 `let`/`const`
:::


### let/const

+ `let` 用于声明变量
+ `const` 用于声明常量，一旦声明便不可变(引用类型除外)，且声明常量时一定要赋值，否则报错
```js
let a = 12
const PI = 3.14
```
::: tip let/const 和 var 的区别：
+ 块级作用域：var 不存在块级作用域
+ 不存在变量提升：var 会发生变量提升
+ 不可重复声明：var 可重复声明变量
+ 暂时性死区(TDZ)：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
+ `let`/`const` 声明的全局变量不会挂在顶层对象下面：使用 var 声明的全局变量可以用 `global.a`/`window.a` 的形式获取，但使用 `let`/`const` 声明的则不行
:::


### 变量提升 & 函数提升

+ 变量提升：在同一作用域下，变量可以在声明之前使用，值为 `undefined`
+ 函数提升：使用函数声明方式定义的方法，调用语句可以在声明语句之前(解析器在代码开始执行前将函数提升到顶部)
```js
console.log(a) // undefined 
func() // world

var a = 'hello'
function func() { console.log('world') }
```

::: tip 备注：
+ 变量/常量的声明尽量使用 `let`/`const`，避免出现变量提升
:::


### 函数定义的方式

```js
// 1.函数声明
function func() {}

// 2.函数表达式
const func = function() {}

// 3.构造函数
const func = new Function('str', 'return str')
```

::: tip 备注：
+ 函数声明会提升，函数表达式不会
+ 构造函数模式会解析两次代码，影响性能，一般不会使用
:::




## Undefined

+ `Undefined` 类型只有一个取值：`undefined`，当变量声明但未初始化时，它的值就为 `undefined`
+ 当 `typeof` 返回 `undefined` 的时候说明变量还未声明或已经声明但是没有初始化
+ 不要省略变量的声明，这样当 `typeof` 返回 `undefined` 的时候说明变量是已经声明但未初始化
```js
// 1.声明但未初始化时，初始值默认为 undefined
var name = 'Zed'
var age
console.log(name)  // 'Zed'
console.log(age)   // 'undefined'

// 2.使用 typeof 操作未声明的变量时，也会返回 'undefined'
console.log(typeof hello)  // 'undefined'

// 3.访问未声明的变量时时，会报错
console.log(hello) // ReferenceError!
```

::: tip 区分 undefined 和 not defined： 
+ `undefined`：变量声明但未初始化，在初始化前使用该变量时它的值都是 `undefined`
+ `not defined`：指变量还未声明，除了 `typeof`，其他使用未声明的变量的行为都会报错(`ReferenceError`)
```js
let a
console.log(a)        // undefined
console.log(typeof b) // 'undefined'
console.log(b)        // ReferenceError!
```
:::




## Null

+ `Null` 类型只有一个取值：`null`
+ 可以把 `null` 理解为空指针对象(解析为什么 `typeof null` 返回 `object`)
+ 对将来需要赋值为对象的变量赋值为 `null`，有利于区分 `undefined` 和 `null`
```js
let obj = null
obj = { name: 'Zed' }

// 在对象不再使用时，赋值为 null 释放内存
obj = null
```

::: tip 区分 null 和 undefined
+ 语义上：
```js
// null 表示一个空对象，将不再使用的对象赋值为 null 时表明对象将会被垃圾收集器回收以释放内存
// undefined 表示声明但未赋值的变量，作为变量的默认值
```
+ 相等性比较：
```js
// 1. 两者都属于假值，用 == 操作符返回 true
console.log(undefined == null)    // true

// 2. 但是两者是不同的数据类型，用 === 操作符返回 false
console.log(undefined === null)   // false
```
+ 自动类型转换：
```js
// 转换为数值时 null 为 0，undefined 为 NaN
// 转换为布尔值时都为 false
let a = undefined
let b = null
let c = 1

console.log(a + c)    // NaN + 1 = NaN
console.log(b + c)    // 0 + 1 = 1

if (a || b) {
  console.log('有一个为 true')
} else {
  console.log('两者都为 false') // 输出: 两者都为 false
}
```
:::





## Boolean

+ `Boolean` 类型有两个取值：`true` 和 `false`
+ 可以用 `Boolean()` 函数将任意数据类型转化为 `Boolean` 类型
```js
// 1.手动进行类型转换
var name = 'Zed'
console.log(Boolean(name))  // true

// 2.自动进行的类型转换
var age = 20
if (age) {
  console.log(age)          // 20
}
```
+ 使用 `Boolean()` 函数的转换规则：简单来说，除[六个假值](#六个假值)外，都返回 true

数据类型|true|false
-|-|-
`Undefined`|-|undefined
`Boolean`|true|false
`Number`|任何非零数字(包括 Infinite)|0 和 NaN
`String`|任何非空字符串|空字符串('')
`Object`|任何对象|null




## Number

+ `Number` 类型使用 `IEEE754` 格式来表示整数和浮点数(或者叫双精度数)
+ 十进制：默认为十进制数字，且在算数计算时，任何进制的数字都会被转换为十进制数字
+ 八进制：以 `0` 开头，紧跟着若干个八进制字符序列(0~7)，不符合规则的将被当作十进制处理
+ 十六进制：以 `0x` 开头，紧跟着若干个十六进制字符序列(0~9、A~F)，


### 浮点数

```js
// 1.以 0 为整数部分的浮点数可以省略小数点
var a = .2
console.log(a)      // 0.2

// 2.浮点数的存储空间是整数的两倍，ES 会在有需要的时候将浮点数转换为整数
var b = 2.1
var c = 2.0
console.log(b, c)   // 2.1 2

// 3.能够使用科学计数法表示数字
var f1 = 1.2e+7
var f2 = 1.2e-6
console.log(f1, f2) // 12000000 0.0000012

// 4.默认将小数点后带有超过 6 个 0 的浮点数转换为科学计数法
var f = 0.00000012
console.log(f)      // 1.2e-7

// 5.浮点数的最高精度是 17 位，但是计算时往往得不到预期的结果，这是 IEEE754 数值计算的通病
console.log(0.1 + 0.2)          // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3)   // false

// 6.支持用 _ 表示千位分隔符
let big = 1_000_000_000
console.log(big)        // 1000000000
```


### NaN

+ 代表非数值(Not a Number)，是一个特殊的数值，用于表示一个本来要返回数值的操作但未返回数值
```js
// 1.ES 的特点
console.log(10 / 0)     // Infinite
console.log(-10 / 0)    // -Infinite
console.log(0 / 0)      // NaN
console.log(NaN / 10)   // NaN

// 2. NaN 不等于任何值，包括自身
console.log(NaN == NaN)       // false
console.log(NaN == null)      // false
console.log(NaN == undefined) // false

// 3.isNaN() 的不确定性，事实上，任何能自动转换为数值的数据类型都返回 false
console.log(isNaN(NaN))     // true
console.log(isNaN('hello')) // true
console.log(isNaN(12))      // false
console.log(isNaN('12'))    // false
console.log(isNaN(true))    // false

// 4.isNaN() 传入对象时
console.log(isNaN({}))      // true

var obj = {
  valueOf: function() {
    return 100
  }
}
console.log(isNaN(obj))     // false
```

::: tip isNaN() 内部会发生自动类型转换：
+ `isNaN()` 传入任何能自动转换为数值的数据类型时，都会返回 `false`
+ `isNaN()` 传入对象时，会先调用对象的 `valueOf()` 方法，若不能转换为数值，会再调用对象的 `toString()` 方法，若还是不能转换为数值，则返回 `false`
:::


### 数值转换

+ 有 3 个函数能将非数值转换为数值元素
+ `Number()`: 适用于任何数据类型，转换规则

数据类型|规则
-|-
`Boolean`|true => 1, false => 0
`Number`|返回原数
`Null`|0
`Undefined`|NaN
`String`|1.只包含数字(可以是浮点数，可以包括一个前导的正/负号) => 十进制数值，但忽略前导 '0'<br>2.有效的十六进制格式 => 相同大小的十进制数值<br>3.空串('') => 0<br>4.其他 => NaN
`Object`|先调用对象的 valueOf() 方法，若结果是 NaN，再调用 toString() 方法返回结果


+ `parseInt()`: 仅适用字符串，转换规则：

场景|例子
-|-
忽略字符串前的所有空格|'  12' => 12
首字符不是数字字符或正/负号|'a12' => NaN
以正/负号开头，后面不是数字|'-+12' => NaN
空串(与 Number() 的结果不同)|'' => NaN
至少有一个字符符合时，会一直读取到不符合条件的前一个字符|'123abc' => 123
ES5 与 ES3 处理八进制有所不同，**建议都传递第二个参数**指定基数转换|parseInt('032', 8) => 26

+ `parseFloat()`: 仅适用字符串，转换规则：

场景|例子
-|-
能识别第一个小数点|'12.34.0' => 12.34
始终忽略前导 0|'  012.34' => 12.34
十六进制字符串始终返回 0|'0x12.3' => 0
能转换科学计数法|'3.1e-5' => 0.000031
返回 `NaN`|'a12.34' => NaN<br>'-+12.34' => NaN<br>'' => NaN

::: tip parseFloat() 不同于 parseInt() 的点：
+ 始终忽略前导 0
+ 能识别第一个小数点
+ 仅能转换十进制浮点数，不能传递第二个参数指定基数
:::


### 数值范围

+ 最大值：保存在常量 `Number.MAX_VALUE`
+ 最小值：保存在常量 `Number.MIN_VALUE`
+ 最大安全整数：保存在常量 `Number.MAX_SAFE_INTEGER`，约 2^53-1
+ 最小安全整数：保存在常量 `Number.MIN_SAFE_INTEGER`，约 -(2^53-1)
```js
console.log(Number.MAX_VALUE)         // 1.7976931348623157e+308
console.log(Number.MIN_VALUE)         // 5e-324
console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)  // -9007199254740991
```

::: tip 备注：
+ 大于 ES 能表示的最大值被转换为 `Infinity`，小于 ES 能表示的最小值被转换为 `-Infinity`
+ 当一次结果返回 `Infinity` 后再参与运算，其结果将会是 `NaN`
+ 在进行大数值计算前，建议使用 `isFinite()` 判断数值是否超出范围
:::


### 处理大数字的方法


### 小数点精度丢失的原因

+ `javascript` 中 `Number` 类型是双精度 64 位二进制格式 `IEEE 754` 值(位于 `-(2^53-1)` 和 `2^53-1` 之间的数字)


### 避免精度丢失的方法






## String

+ `String` 类型用于表示零个或多个 16 位 Unicode 字符组成的字符序列，即字符串
+ 可以用单引号(`''`)或双引号(`""`)包裹
```js
let hello = "hello"
let world = 'world'
```


### 字符字面量

+ 也叫转义序列，用于表示非打印字符或有其他用途的字符

|字面量|含义|
|-|-|
|`\n`|换行|
|`\t`|制表|
|`\b`|空格|
|`\r`|回车|
|`\f`|进纸|
|`\\`|反斜杠|
|`\'`|单引号|
|`\"`|双引号|
|`\xnn`|以十六进制码 `nn` 表示的一个字符|
|`\unnnn`|以十六进制码 `nnnn` 表示的一个 `Unicode` 字符|



### 字符串属性

+ `length`：返回字符串的长度，但若字符串包含双字节字符，可能不会返回正确的字符数
+ **只读**：字符串是只读的，即只能对其进行读操作，不能操作单个字符(除非重新赋值整个字符串)：
```js
var str = 'hello world'
console.log(str[0])   // 'h'

str[0] = 'l'
console.log(str)      // 'hello world'

str = 'hello javascript'
console.log(str)      // 'hello javascript'
```


### 转换为字符串

+ `toString()`: 通过从原型继承，基本上每个值都有一个该方法，转换数值时还能指定转换的基数
+ `String()`: 与 `toString()` 类似，但能转换 `null` 和 `undefined`
```js
var a = 12
var b = false
var obj = {}
var str = 'hello'
var n = null
var m = undefined

// toString()
console.log(a.toString())     // '12'
console.log(a.toString(8))    // '14'
console.log(b.toString())     // 'false'
console.log(obj.toString())   // '[object Object]'
console.log(str.toString())   // 'hello'
console.log(n.toString())     // 报错
console.log(m.toString())     // 报错

// String()
console.log(String(a))        // '12'
console.log(String(b))        // 'false'
console.log(String(obj))      // '[object Object]'
console.log(String(str))      // 'hello'
console.log(String(n))        // 'null'
console.log(String(m))        // 'undefined'
```

::: tip 备注：
+ 造成这种差异的原因是：ES 的基本数据类型中，除了 `null` 和 `undefined` 外，都有自身的[包装类对象](#包装类对象)，该包装类对象提供了 `toString()` 方法
:::




## Object

+ `Object`(对象)是一组数据和功能的集合，能够通过 `new` 操作符创建一个对象实例
+ `Object` 是所有实例的基础(原型链的顶端)
+ 所有实例都具有的属性/方法：

属性/方法|描述
-|-
`constructor`|保存用于创建当前对象的构造函数
`hasOwnProperty(propertyName)`|检查当前对象是否存在指定的属性
`isPrototypeOf(object)`|检查传入的对象是否是当前对象的原型
`propertyEnumerable(propertyName)`|检查指定的属性是否可枚举(能用 `for...in` 遍历)
`toLocaleString()`|返回对象的字符串表示，该字符串与执行环境的地区对应
`toString()`|返回对象的字符串表示
`valueOf()`|返回对象的字符串、数值或布尔值表示，通常与 `toString()` 的返回值相同

+ 创建对象实例：
```js
// 1.创建一个对象实例
const o1 = new Object()

// 2.无参数传入时可省略 ()
const o2 = new Object
```

::: tip 备注：
+ 即使无参数传入也不要省略 `()`
:::




## 包装类对象

+ 基本包装类型：`Number`, `String`, `Boolean`


### 装箱

+ 简单来说就是把基本类型转换为对应的包装类型
+ 通过直接声明(不通过构造函数)创建的 `number`, `string`, `boolean` 类型的变量都属于基本数据类型(不是对象)
+ 它们理论上不存在可调用的方法，但却可以使用包装类原型上的方法，是因为 ECMAScript 在后台进行了装箱操作：
```js
var str = 'hello world'
var newStr = str.substring(0, 5)
console.log(newStr)   // 'hello'

// 实际的装箱操作
var temp = new String(str)
var newStr = str.substring(0, 5)
temp = null
console.log(newStr)   // 'hello'
```


### 拆箱

+ 简单来说就是把引用类型(一般为对象)转换为基本类型
+ 拆箱过程会遵循 ECMAScript 规范规定的 `ToPrimitive` 原则：
  + 重写 `toPrimitive()` 时，只会调用 `toPrimitive()`
  + 引用类型转换为 `Number` 类型，先调用 `valueOf()`，再调用 `toString()`
  + 引用类型转换为 `String` 类型，先调用 `toString()`，再调用 `valueOf()`
  + 若 `valueOf()` 和 `toString()` 都不存在，或者没有返回基本类型，则抛出 `TypeError` 异常
```js
// 调用 valueOf() 和 toString() 的顺序
const obj = {
  valueOf: () => { console.log('valueOf'); return 123 },
  toString: () => { console.log('toString'); return 'hello' },
}
console.log(obj - 1)          // valueOf 122
console.log(`${obj} world`)   // toString hello world

// 自定义 toPrimitive 方法
const obj2 = {
  [Symbol.toPrimitive]: () => { console.log('toPrimitive'); return 123 },
}
console.log(obj2 - 1)         // toPrimitive 122

// valueOf() 和 toString() 都不返回基本数据类型时
const obj3 = {
  valueOf: () => { console.log('valueOf'); return {} },
  toString: () => { console.log('toString'); return {} },
}
console.log(obj3 - 1)         // valueOf toString TypeError
```




## 实例解析

+ `[] == ![]` 的结果
```js
console.log([] == ![])    // true
```

::: tip 解析：
1. `!` 的优先级高于 `==`，先将 `![]` 转换为 `false`
2. 转换为比较 `[] == false`，先将 `false` 转换为 `0`
3. 转换为比较 `[] == 0`，先将 `[]` 转换为 `0`
:::


+ 使 (a == 1 && a == 2 && a == 3) 返回 true
```js
const a = {
  arr: [3, 2, 1],
  valueOf: function() {
    return this.arr.pop()
  }
}
console.log(a == 1 && a == 2 && a == 3) // true
```