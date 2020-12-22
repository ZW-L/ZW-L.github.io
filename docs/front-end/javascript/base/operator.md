---
sidebarDepth: 2
---

## 简介

**分类：**

+ 位操作符
+ 布尔操作符
+ 算术操作符
+ 关系操作符
+ 相等操作符
+ 其他


**说明：**

+ 操作符适用于很多值：数字、字符串、布尔值、对象
+ 在用于对象时，相应的操作符都会先调用对象的 `valueOf()` 和 `toString()` 方法



## 位操作符

+ 位操作符用于最基本的层次上，即按内存中表示数值的位来操作数值
+ 虽然 ECMAScript 的数值以 IEEE754 64位存储，但是位操作符不直接操作 64 位的值，而是先将其转换为 32 位的整数，再进行操作，最后将结果转换回 64 位
+ 对于有符号整数，32 位中的前 31 位(从右边开始)表示整数的值，第 32 位表示数值的符号(称作符号位，0 表示正数，1表示负数)
+ 负数使用二进制补码的形式表示，求一个数的补码的步骤：
  1. 求该数的绝对值的二进制码
  2. 对结果取反(`~`)，即将 0 变为 1，将 1 变为 0
  3. 将结果加 1
+ 对特殊数值(`NaN`，`Infinity`)执行位操作时，它们都被当成 0 处理


### 按位非

+ 按位非(`~`)返回数值的反码，效果相当于取数值的相反数再减 1，但按位非基于计算机底层，速度更快
```js
var a = 18;
console.log(~a)       // -19
console.log(-a - 1)   // -19
```


### 按位与

+ 按位与(`&`)对两个操作数进行操作，当它们对应的二进制位都为 1 时，结果位为 1，否则都为 0
```js
var a = 18
var b = 2
/* 
  10010
& 00010
-------
  00010
*/
console.log(a&b)  // 2
```


### 按位或

+ 按位或(`|`)对两个操作数进行操作，当它们对应的二进制位有一个为 1 时，结果位为 1，否则为 0
```js
var a = 18
var b = 2
/* 
  10010
& 00010
-------
  10010
*/
console.log(a|b)  // 18
```


### 按位异或

+ 按位异或(`^`)对两个操作数进行操作，当它们对应的二进制位不相同时，结果位为 1，否则为 0
```js
var a = 18
var b = 2
/* 
  10010
& 00010
-------
  10000
*/
console.log(a^b)  // 16
```


### 左移

+ 左移(`<<`)将数值的所有位向左移动指定的位数，右侧空出的位用 0 补充，每左移一位相当于将数值乘 2
```js
var a = 18
console.log(a<<3)   // 144
```


### 有符号右移

+ 有符号右移(`>>`)将数值的数值位(不包括符号位)向右移动指定的位数，左侧空出的位用符号位补充
+ 每右移一位相当于 `Math.floor(a/2)`
```js
var a = 18
console.log(a>>2)   // 4
```


### 无符号右移

+ 无符号右移(`>>>`)将数值所有位都向右移动指定的位数，左侧空出的位用 0 补充
+ 对于正数，操作结果与 `>>` 相同；对于负数，其看作正数的二进制码进行运算，结果会非常大
```js
var a = 18
var b = -18
console.log(a>>>2)  // 4
console.log(b>>>2)  // 1073741819
```



## 布尔操作符

### 逻辑非

+ 逻辑非操作符(`!`)可用于任何数据值，操作结果返回一个布尔值
+ 它会先将操作数转换为布尔值，再进行求反，转换规则如下：

类型|自动转换的布尔值|`!` 操作
-|-|-
null|false|true
NaN|false|true
undefined|false|true
数值 0|false|true
空字符串|false|true
对象|true|false
非空字符串|true|false
非 0 数值(包括 Infinity)|true|false

```js
console.log(!null)    // true
console.log(!NaN)     // true
console.log(!undefined)   // true
console.log(!{})      // false
console.log(!'')      // true
console.log(!'0')     // false
console.log(!0)       // true
console.log(!12)      // false
console.log(!Infinity)    // false
```
+ 常用两个逻辑非(`!!`)获取数据类型对应的布尔值，其行为等同于 `Boolean()`
```js
console.log(!!null) // false
console.log(!!NaN)  // false
console.log(!!undefined)    // false
console.log(!!{})   // true
console.log(!!'')   // false
console.log(!!'0')  // true
console.log(!!0)    // false
console.log(!!12)   // true
console.log(!!Infinity)   // true
```

::: tip 备注：
+ 无论如何，记住六个假值：`null`, `undefined`, `NAN`, `0`, `false`, `''`
+ 简单来说，对六个假值使用 `!` 操作符一定返回 `true`，而非六个假值使用 `!` 操作符一定返回 `false`
:::



### 逻辑与

+ 逻辑与(`&&`)有两个操作数，可用于任何数据类型，而且它是一个短路操作符
+ 当两个操作数都为布尔值时，会返回一个布尔值(两个操作数都为 true 时返回 true，否则返回 false)
```js
console.log(true && true)   // true
console.log(true && false)  // false
console.log(false && false) // false
```
+ 当任一操作数不是布尔值时，对第一个操作数进行假值判断：若是假值则直接返回它，否则返回第二个操作数
```js
// A 是真值，返回 B
console.log({} && 12)       // 12
console.log({} && [1, 2])   // [1, 2]
console.log('12' && {})     // {}
console.log('12' && null)   // null

// A 是假值，返回 A
console.log('' && {})       // ''
console.log(null && true)   // null
console.log(NaN && true)    // NaN
console.log(undefined && true)    // undefined
```

::: tip 简单来说：
+ 当两个操作数都是布尔值时，与其他语言的逻辑与一样，必定返回一个布尔值
+ 否则：先遇真值，直接返回第二个操作数；先遇假值，直接返回第一个操作数
:::



### 逻辑或

+ 逻辑或(`||`)有两个操作数，可用于任何数据类型，而且它是一个短路操作符
+ 当两个操作数都为布尔值时，会返回一个布尔值(有一个操作数为 true 时返回 true，否则返回 false)
```js
console.log(true && true)     // true
console.log(true && false)    // true
console.log(false && false)   // false
```
+ 当任一操作数不是布尔值时，对第一个操作数进行真值(非假值)判断：若是真值则直接返回它，否则返回第二个操作数
```js
// A 是真值
console.log({} || 12)       // {}
console.log({} || [1, 2])   // {}
console.log('12' || {})     // '12'

// A 为假值
console.log('' || {})       // {}
console.log(null || true)   // null
console.log(NaN || true)    // NaN
console.log(undefined || true)    // undefined
```

::: tip 简单来说：
+ 当两个操作数都是布尔值时，与其他语言的逻辑或一样，必定返回一个布尔值
+ 否则：先遇真值，直接返回第一个操作数；先遇假值，直接返回第二个操作数
:::



## 算术运算符

当算术运算符的操作数不是数值时，会自动使用 `Number()` 进行转换，转换规则为：
+ `null` 转换为数值 0
+ `undefined` 转换为 `NaN`
+ `true/false` 分别转换为 1/0
+ 为对象时，先调用对象的 `valueOf()` 方法取值，若取到 `NaN`，则再调用 `toString()` 取值
+ 为字符串时，若字符串不包含有效数字字符，转化为 `NaN`(加法除外，加法中任一操作数为字符串，都会执行字符串拼接)


### 加法

+ 语法：
```js
var c = a + b
```
+ 数值和 `NaN` 运算必定返回 `NaN`
```js
console.log(12 + true)      // 13
console.log(12 + false)     // 12
console.log(12 + null)      // 12
console.log(12 + undefined) // NaN
console.log(12 + NaN)       // NaN

var obj1 = { valueOf() { return 12 }}
var obj2 = {
  valueOf() { return NaN },
  toString() { return 12 }
}

console.log(12+ obj1)       // 24
console.log(12+ obj2)       // NaN
```
+ 操作数包含字符串时，始终执行字符串拼接：
  + 另一个操作数都是字符串，执行字符串拼接
  + 另一个为数值/布尔值/对象，调用它们的 `toString()` 转换为字符串，再执行字符串拼接
  + 另一个为 `null`/`undefined`，调用 `String()` 取得 `'null'`/`'undefined'`，再执行字符串拼接
```js
// 都是字符串
console.log('12' + 'ab')      // 12ab

// 调用 toString()
var obj = { toString() { return 'obj' }}
console.log('12' + obj)       // 12obj
console.log('12' + true)      // 12true
console.log('12' + 10)        // 1210

// 调用 String()
console.log('12' + null)      // 12null
console.log('12' + undefined) // 12undefined
```


### 减法

+ 两操作数均是数值时，根据正负号返回值
```js
console.log(12 - 2)                   // 10
```
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ 返回 `NaN` 的情况：
  + 任何一个操作数为 `NaN`
  + 不能确定结果的情况：如 `Infinity - Infinity`
+ 返回 `Infinity` 的情况：
  + 正常计算溢出时
  + 与 `Infinity` 计算变为无穷大时：如 `-Infinity - Infinity`

```js
console.log(12 - 'ab')                // NaN
console.log(Infinity - Infinity)      // NaN
console.log(-Infinity - (-Infinity))  // NaN

console.log(Infinity - (-Infinity))   // Infinity
console.log(-Infinity - Infinity)     // -Infinity
```



### 乘法

+ 两操作数均是数值时，根据正负号返回值
```js
console.log(12 * 0.5)             // 6
```
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ 返回 `NaN` 的情况：
  + 有一个操作数是 `NaN`
  + `Infinity * 0`
+ 返回 `Infinity` 的情况：
  + 正常计算溢出时
  + `Infinity * 非零数值`
  + `Infinity * Infinity`

```js
console.log('12' * '0.5')         // 6
console.log(Infinity * 0)         // NaN

console.log(Infinity * (-10))     // -Infinity
console.log(Infinity * Infinity)  // Infinity
```


### 除法

+ 两操作数均是数值时，根据正负号返回值
```js
console.log(12 / 0.5)               // 24
```
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ 返回 `NaN` 的情况：
  + 有一个操作数是 `NaN`
  + `Infinity / Infinity`
  + `0 / 0`
+ 返回 `Infinity` 的情况：
  + 正常计算溢出时
  + `Infinity / 非 NaN 数值`
  + `非零、NaN数值 / 0`

```js
console.log('12' / '0.5')           // 24

console.log(12 / 'a12')             // NaN
console.log(0 / 0)                  // NaN
console.log(Infinity / Infinity)    // NaN

console.log(Infinity / 0)           // Infinity
console.log(1 / 0)                  // Infinity
console.log(Infinity / 10)          // -Infinity
```


### 求模

+ 都是数值时，返回余数
```js
console.log(21 % 5)               // 1
```
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ `数值A % Infinity` 返回 A
+ 返回 `NaN` 的情况：
  + 有一个操作数是 `NaN`
  + `Infinity % 有限数值`
  + `Infinity % Infinity`
  + `Infinity % 0`
  + `0 % 0`

```js
console.log(10 % Infinity)        // 10

console.log(10 % NaN)             // NaN
console.log(Infinity % 1)         // NaN
console.log(Infinity % Infinity)  // NaN
console.log(Infinity % 0)         // NaN
console.log(0 % 0)                // NaN
```


### 自增/自减

+ 应用于正常数值时，直接操作
```js
var a = 3;
console.log(a++)    // 3
console.log(++a)    // 5

var b = 3
console.log(b--)    // 3
console.log(--b)    // 1
```
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ 返回 `NaN` 的情况：
  + 有一个操作数是 `NaN`
+ 返回 `Infinity` 的情况：
  + 正常计算溢出时
  + 对 `Infinity` 自增/自减时



## 关系操作符

+ 包括：`>`, `>=`, `<`, `<=`
+ 都是数值或都是字符串时，不会发生类型转换，会直接比较
```js
console.log(12 > 11)      // true

// 都是字符串时，比较第一个字符的字符编码值，若相等，则继续比较下一个字符，直至不相等时判断结果
console.log('12' > '2')         // false
console.log('21' > '2')         // true
console.log('23421' > '2345')   // false
```
+ 两个操作数不同且不是对象，都是使用 `Number()` 转换为数值，再比较
```js
console.log(12 > '11')    // true
console.log(12 > true)    // true
console.log(true > '12')  // false
```
+ 只要有 `NaN`/`undefined` 都返回 `false`，可以理解为无法判断结果
```js
console.log(12 > NaN)           // false
// undefined => Number(undefined) => NaN
console.log(12 > undefined)     // false
```
+ 一个操作数是对象时，先调用 `valueOf()`，若没有该方法，再调用 `toString()` 方法，将结果应用于上述规则
```js
const obj = {
  valueOf: () => '123',
  toString: () => '456'
}

console.log(obj > 120)    // true
console.log(obj > 124)    // false
```



## 相等操作符

+ 对比： 
  + `==` 和 `!=` 只比较值，在比较前会自动转换两个操作数为相同类型的操作数
  + `===`：两操作数的数据类型和值都相同时才会返回 true
  + `!==`：只要两操作数类型不同或值不相等，就会返回 true
+ `==`/`!=` 的规则：
  + 若两个操作符都是对象，只有它们的指向相同时，才返回 true
  + 规定 `null == undefined` 返回 true(两者都代表无效的值)
  + NaN 不等于任何值，包括自身，因此 `NaN == NaN` 返回 false，`NaN != NaN` 返回 true
+ `==`/`!=` 自动类型转换的过程：
  + 两个操作数不同且不是对象，都是使用 `Number()` 转换为数值，再比较
  + 一个操作数是对象时，先调用 `valueOf()` 方法，若没有该方法，再调用 `toString()` 方法，再应用上述规则
```js
// == 和 !=
console.log(12 == 12)     // true
console.log(true == 1)    // true
console.log('12' == 12)   // true
console.log({} == {})     // false
console.log(null == undefined)  // true
console.log(NaN == NaN)         // false
console.log(NaN != NaN)         // true

// === 和 !==
console.log('12' === 12)        // false
console.log(true === 1)         // false
console.log(null === undefined) // false
```

::: tip 备注：
+ 开发中尽量使用 `===` 和 `!==` 代替 `==` 和 `!=`，它们比较前不会自动转换数据的类型，因此不会得到意料之外的结果
:::



## 其他

### 条件(三元)操作符

+ 条件操作符需要包含由 `?` 和 `:` 分割的三个操作数，当 `expression` 的计算值为 `true` 时，返回 `true_value`，否则返回 `false_value`
```js
var ret = expression ? true_value : false_value
```
+ 其效果等同于使用一个 `if...else` 语句：
```js
var ret
if (expression) {
  ret = true_value
} else {
  ret = false_value
}
```


### 赋值操作符

赋值操作符除了 `=` 外，还有以下一些简写：
+ `a += b` 等同于 `a = a + b`
+ `a -= b`
+ `a *= b`
+ `a /= b`
+ `a %= b`
+ `a <<= b`
+ `a >>= b`
+ `a >>>= b`


### 逗号操作符

+ 在赋值语句中时，可将多个变量的声明或赋值写在一行
```js
var a = 1, b = 2, c = 3
```
+ 在数组、函数(函数参数)、对象中时，用于分割数据元素
```js
var arr = [1, 2, 3]

var obj = { name: 'Alice', age: 24 }
```