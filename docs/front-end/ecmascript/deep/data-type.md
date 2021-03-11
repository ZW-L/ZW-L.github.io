---
sidebarDepth: 2
---

## 类型简介

:::: tabs
::: tab 数据类型

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
:::

::: tab 判断数据类型的方式

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
:::

::: tab 六个假值

+ `false`
+ `undefined`
+ `null`
+ `NaN`
+ `0`
+ `''`
:::

::: tab 内置对象

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
:::
::::


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

+ `Number` 使用 64 位双精度浮点型(double)的数据类型(IEEE754)来表示数字

:::: tabs
::: tab 进制
+ 十进制：默认为十进制数字，且在算数计算时，任何进制的数字都会被转换为十进制数字
+ 八进制：以 `0` 开头，紧跟着若干个八进制字符序列(0~7)，不符合规则的将被当作十进制处理
+ 十六进制：以 `0x` 开头，紧跟着若干个十六进制字符序列(0~9、A~F)
:::

::: tab 浮点数

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
:::

::: tab NaN
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
```

+ `isNaN()` 内部会发生自动类型转换：
```js
// 传入任何能自动转换为数值的数据类型时，都会返回 false
console.log(isNaN(NaN))     // true
console.log(isNaN('hello')) // true
console.log(isNaN(12))      // false
console.log(isNaN('12'))    // false
console.log(isNaN(true))    // false

// 传入对象时，会先调用对象的 valueOf() 方法，
// 若不能转换为数值，会再调用对象的 toString() 方法，
// 若还是不能转换为数值，则返回 false
console.log(isNaN({}))      // true

var obj = {
  valueOf: function() {
    return 100
  }
}
console.log(isNaN(obj))     // false
```
:::

::: tab 数值范围
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

+ 大于 ES 能表示的最大值被转换为 `Infinity`，小于 ES 能表示的最小值被转换为 `-Infinity`
+ 当一次结果返回 `Infinity` 后再参与运算，其结果将会是 `NaN`
+ 在进行大数值计算前，建议使用 `isFinite()` 判断数值是否超出范围
:::


::: tab 数值精度
+ 处理大数字的方法
+ 小数点精度丢失的原因：`JavaScript` 中 `Number` 类型是双精度 64 位二进制格式 `IEEE 754` 值(位于 `-(2^53-1)` 和 `2^53-1` 之间的数字)
+ 避免精度丢失的方法
:::
::::


+ 数值转换：有 3 个函数能将非数值转换为数值元素
:::: tabs
::: tab Number()
+ 适用于任何数据类型，转换规则

数据类型|规则
-|-
`Boolean`|true => 1, false => 0
`Number`|返回原数
`Null`|0
`Undefined`|NaN
`String`|1.只包含数字(可以是浮点数，可以包括一个前导的正/负号) => 十进制数值，但忽略前导 '0'<br>2.有效的十六进制格式 => 相同大小的十进制数值<br>3.空串(`''`) => 0<br>4.其他 => NaN
`Object`|先调用对象的 `valueOf()` 方法，若结果是 `NaN`，再调用 `toString()` 方法返回结果

:::

::: tab parseInt()
+ 仅适用字符串，转换规则：

|场景|例子|
|-|-|
|忽略字符串前的所有空格|'  12' => 12|
|首字符不是数字字符或正/负号|'a12' => NaN|
|以正/负号开头，后面不是数字|'-+12' => NaN|
|空串(与 Number() 的结果不同)|'' => NaN|
|至少有一个字符符合时，会一直读取到不符合条件的前一个字符|'123abc' => 123|
|ES5 与 ES3 处理八进制有所不同，**建议都传递第二个参数**指定基数转换|parseInt('032', 8) => 26|

:::

::: tab parseFloat()
+ 仅适用字符串，转换规则：

|场景|例子|
|-|-|
|能识别第一个小数点|'12.34.0' => 12.34|
|始终忽略前导 0|'  012.34' => 12.34|
|十六进制字符串始终返回 0|'0x12.3' => 0|
|能转换科学计数法|'3.1e-5' => 0.000031|
|返回 `NaN`|'a12.34' => NaN<br>'-+12.34' => NaN<br>'' => NaN|

:::

::: tab 区分
+ `parseFloat()` 不同于 `parseInt()` 的点：
  + 始终忽略前导 0
  + 能识别第一个小数点
  + 仅能转换十进制浮点数，不能传递第二个参数指定基数
:::
::::




## String

+ `String` 类型用于表示零个或多个 16 位 Unicode 字符组成的字符序列，即字符串
+ 可以用单引号(`''`)或双引号(`""`)包裹
```js
let hello = "hello"
let world = 'world'
```

:::: tabs
::: tab 字符字面量
字符字面量也叫转义序列，用于表示非打印字符或有其他用途的字符
+ `\n`：换行
+ `\t`：制表
+ `\b`：空格
+ `\r`：回车
+ `\f`：进纸
+ `\\`：反斜杠
+ `\'`：单引号
+ `\"`：双引号
+ `\xnn`：以十六进制码 `nn` 表示的一个字符
+ `\unnnn`：以十六进制码 `nnnn` 表示的一个 `Unicode` 字符
:::

::: tab 字符串属性
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
:::

::: tab 转换为字符串
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

+ 造成这种差异的原因是：ES 的基本数据类型中，除了 `null` 和 `undefined` 外，都有自身的[包装类对象](#包装类对象)，该包装类对象提供了 `toString()` 方法
:::
::::



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




## 装箱 vs 拆箱

+ 包装类对象
+ 基本包装类型：`Number`, `String`, `Boolean`


:::: tabs
::: tab 装箱
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
:::

::: tab 拆箱
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
:::
::::




## 基本类型 vs 引用类型

:::: tabs
::: tab 区别 

+ 基本数据类型：按值访问。值保存在栈中，操作的是实际的值
+ 引用数据类型：按引用访问。值保存在堆中，值引用保存在栈中，操作的是值的引用

**数据类型底层的数据结构：**
+ **栈**：保存基本数据类型的值或对象的引用地址指针(由系统分配存储空间、存储的值大小固定、空间小、直接操作变量效率高)
+ **堆**：保存该对象指针指向的数据(通过代码分配空间、存储的值可动态调整、空间大、使用引用地址读取效率低)

**区分原始类型和引用类型：**
+ **不可变性**：原始类型是不可变的，因为栈存储的值大小固定(有些字符串变异方法可变是因为开辟了新的内存空间)；引用类型是可变的，因为堆存储的值可动态调整
+ **变量比较**：原始类型直接比较值，引用类型会比较引用地址
:::

::: tab 动态属性

+ 可以给数据类型添加属性，但是给基本数据类型添加属性时，并不能访问：
```js
// 给基本类型添加属性
var name = 'Seven'
name.age = 24
console.log(name.age)  // undefined

// 给引用类型添加属性
var obj = {}
obj.name = 'Seven'
console.log(obj.name) // Seven
```
:::

::: tab 变量的复制

+ 基本数据类型的复制会创建一个新的互不影响的副本
```js
var a = 12
var b = a

b = 10
console.log(a, b)     // 12 10
```

+ 引用数据类型的复制只能拷贝值的引用，在任何一个引用中修改值，都会改变所有引用的副本
```js
var obj = { name: 'Seven' }
var obj2 = obj

obj2.name = 'Anna'
console.log(obj.name, obj2.name)  // Anna Anna
```

:::


::: tab 参数传递

+ 尽管访问变量可以通过按值访问(基本数据类型)和按引用访问(引用类型)，但是参数的传递只是按值传递的；即使传递的是一个对象，传递的也是保存该对象的引用的值
+ 误以为参数传递是按引用传递的例子：
```js
var obj = { name: 'Seven' }
function setName(obj) {
  obj.name = 'Anna'
}

setName(obj)
console.log(obj.name)   // 'Anna'
```
+ 证明参数传递是按值传递的例子：
```js
function setName(obj) {
  obj.name = 'Alice'
  obj = new Object()
  obj.name = 'Anna'
}

var obj = new Object()
setName(obj)
console.log(obj.name)   // 'Alice'
```

+ 传递对象时，参数传递的是一个该对象的内存指向的指针值，在该指针上操作对象时会直接影响对象的属性
+ 但在函数内部用一个新的对象给 obj 指针赋值时，此时的 obj 指向的是新对象，在它之后的操作只会影响新对象，不会影响原来的对象
+ 说明传递对象时只会传递一个指针值而不是传递一个完全的对象引用
:::


::: tab 垃圾回收机制

Javascript 有自动的垃圾回收机制，浏览器的实现方式主要有两种：
+ 标记清除法：当变量在一个环境中被创建时，会被标记为 "进入环境"，当其离开环境时，会被标记为 "离开环境"，垃圾回收器会定时对标记为 "离开环境" 的变量进行回收；**是目前大多数浏览器使用的是该种方式**
+ `引用计数法`：该方法跟踪记录每个值被引用的次数，当一个值被一个变量引用时，它的引用次数就会加 1，当一个变量解除对它的引用时，它的引用次数就会减 1，垃圾回收器会定时对引用次数为 0 的值进行回收；**因为容易遇到一个循环引用的问题，该方式很少被使用**

+ IE9 之前的版本中的 `BOM` 和 `DOM` 对象是使用 `C++` 以 `COM` 的形式实现的，`COM` 对象的垃圾回收机制采用的就是引用计数法，因此在 IE 中涉及 `COM` 的情况下，都会容易发生循环引用的内存问题
+ 解决循环引用的方式是手动断开变量和对象的链接，将变量赋值为 `null`
:::


::: tab 性能问题

+ 有的浏览器能够手动触发垃圾收集过程，但是不建议使用
+ 在数据不再使用的情况下，将其设置为 `null` 来释放引用(称为解除引用)是更好的
+ 解除引用的作用是让值退出环境，不代表内存马上会被释放，因为垃圾回收器是定时执行的
+ **内存泄漏：** 申请的内存执行完后没有及时的清理或者销毁，占用空闲内存，内存泄露过多会导致后面的程序申请不到内存
+ **堆栈溢出：** 内存空间已经被申请完，没有足够的内存提供
+ **内存泄露的原因：**
  + 全局变量
  + 闭包
  + 计时器/定时器
+ **解决：**
  + 较少不必要的全局变量
  + 减少闭包的使用
  + 在合适的时候清除计时器
  + 避免死循环
:::
::::


## 类型转换

+ 显式转换

:::: tabs
::: tab 转换为 Boolean
相当于使用 `Boolean()`
 + `false`：`0`, `NaN`, `''`, `null`, `undefined`
 + `true`：其他所有类型
:::

::: tab 转换为 Number
相当于使用 `Number()`
+ 1：`true`, `'1'`
+ 0：`false`, `''`, `null`, `[]`
+ NaN：`undefined`, 任何函数、对象、非空数组、包含非数字的字符串
+ 123：`'123'`
:::

::: tab 转换为 String
相当于使用 `String()`
+ 有 `toString()` 方法时，直接使用 `toString()` 返回的结果
+ `null` 返回 `'null'`，`undefined` 返回 `'undefined'`
:::
::::


+ 隐式转换

:::: tabs
::: tab 布尔操作符

(`!`, `&&`, `||`)理解为操作布尔值，`Boolean` 的优先级高，对非布尔值自动调用 `Boolean()`：
+ 逻辑非(`!`)：先自动转换为 `Boolean` 类型再取反
+ 逻辑与(`&&`)：先遇真值，直接返回第二个操作数；先遇假值，直接返回第一个操作数
+ 逻辑或(`||`)：先遇真值，直接返回第一个操作数；先遇假值，直接返回第二个操作数
:::

::: tab 算术运算符
(`+`, `-`, `*`, `/`, `%`, `++`, `--`)：理解为操作数值，`Number` 的优先级高，对非数值自动调用 `Number()`：
+ 加法：有一个操作数是字符串，都进行字符串拼接
+ 其他：操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
:::

::: tab 关系操作符
(`>`, `>=`, `<`, `<=`, `==`, `!=`)：理解为比较数值，`Number` 的优先级高，对非数值自动调用 `Number()`：
+ 两个操作数不同且不是对象，都是使用 `Number()` 转换为数值，再比较
+ 原始类型和引用类型比较时，对象类型会依照 `ToPrimitive` 规则转换为原始类型
:::
::::


::: tip 备注：
+ 尽量使用 `===` 代替 `==`
+ 使用 `!!variable` 将变量转换为对应的 `Boolean` 类型的值
+ `React` 使用 `&&` 作条件渲染
:::



+ 案例分析

:::: tabs
::: tab 案例1
+ `[] == ![]` 的结果
```js
console.log([] == ![])    // true
```

解析：
1. `!` 的优先级高于 `==`，先将 `![]` 转换为 `false`
2. 转换为比较 `[] == false`，先将 `false` 转换为 `0`
3. 转换为比较 `[] == 0`，先将 `[]` 转换为 `0`
:::

::: tab 案例2
+ 如何使 (a == 1 && a == 2 && a == 3) 返回 true
```js
const a = {
  arr: [3, 2, 1],
  valueOf: function() {
    return this.arr.pop()
  }
}
console.log(a == 1 && a == 2 && a == 3) // true
```
:::
::::