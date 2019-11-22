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

**说明：**
+ 位操作符用于最基本的层次上，即按内存中表示数值的位来操作数值
+ 虽然 ECMAScript 的数值以 IEEE-754 64位存储，但是位操作符不直接操作 64 位的值，而是先将其转换为 32 位的整数，再进行操作，最后将结果转换回 64 位
+ 对于有符号整数，32 位中的前 31 位(从右边开始)表示整数的值，第 32 位表示数值的符号(称作符号位，0 表示正数，1表示负数)
+ 负数使用二进制补码的形式表示，求一个数的补码的步骤：
  1. 求该数的绝对值的二进制码
  2. 对结果取反(`~`)，即将 0 变为 1，将 1 变为 0
  3. 将结果加 1
+ 对特殊数值(`NaN`，`Infinity`)执行位操作时，它们都被当成 0 处理

**分类：**
+ 按位非：`~`
+ 按位与：`&`
+ 按位或：`|`
+ 按位异或：`^`
+ 左移：`<<`
+ 有符号右移：`>>`
+ 无符号右移：`>>>`

### 按位非

&emsp;&emsp;按位非(`~`)返回数值的反码，效果相当于取数值的相反数再减 1，但按位非基于计算机底层，速度更快。
```js
var a = 18;
console.log(~a); // -19
console.log(-a - 1); // -19
```

### 按位与

&emsp;&emsp;按位与(`&`)对两个操作数进行操作，当它们对应的二进制位都为 1 时，结果位为 1，否则都为 0。
```js
var a = 18;
var b = 2;
/* 
  10010
& 00010
-------
  00010
*/
console.log(a&b); // 2
```

### 按位或

&emsp;&emsp;按位或(`|`)对两个操作数进行操作，当它们对应的二进制位有一个为 1 时，结果位为 1，否则为 0。
```js
var a = 18;
var b = 2;
/* 
  10010
& 00010
-------
  10010
*/
console.log(a|b); // 18
```

### 按位异或

&emsp;&emsp;按位异或(`^`)对两个操作数进行操作，当它们对应的二进制位不相同时，结果位为 1，否则为 0。
```js
var a = 18;
var b = 2;
/* 
  10010
& 00010
-------
  10000
*/
console.log(a^b); // 16
```

### 左移

&emsp;&emsp;左移(`<<`)将数值的所有位向左移动指定的位数，右侧空出的位用 0 补充，每左移一位相当于将数值乘 2；而且，左移不会影响符号位。
```js
var a = 18;
console.log(a<<3); // 144
```

### 有符号右移

&emsp;&emsp;有符号右移(`>>`)将数值的数值位(不包括符号位)向右移动指定的位数，左侧空出的位用符号位补充，但每左移一位不一定相当于将数值除以 2。
```js
var a = 18;
console.log(a>>2); // 4
```

### 无符号右移

&emsp;&emsp;无符号右移(`>>>`)将数值所有位都向右移动指定的位数，左侧空出的位用 0 补充；对于正数，操作结果与 `>>` 相同，对于负数，无符号右移将其看作正数的二进制码进行运算，结果会非常大。
```js
var a = 18;
var b = -18
console.log(a>>>2); // 4
console.log(b>>>2); // 1073741819
```


## 布尔操作符

**分类：**

+ 逻辑非：`!`
+ 逻辑与：`&&`
+ 逻辑或：`||`


### 逻辑非

&emsp;&emsp;逻辑非操作符(`!`)可用于任何数据值，操作结果返回一个布尔值。它会先将操作数转换为布尔值，再进行求反，转换规则如下：

类型|自动转换的布尔值|`!` 操作
-|-|-
null|false|true
NaN|false|true
undefined|false|true
对象|true|false
空字符串|false|true
非空字符串|true|false
数值 0|false|true
非 0 数值(包括 Infinity)|true|false

```js
console.log(!null); // true
console.log(!NaN); // true
console.log(!undefined); // true
console.log(!{}); // false
console.log(!''); // true
console.log(!'0'); // false
console.log(!0); // true
console.log(!12); // false
console.log(!Infinity); // false
```

**说明：** 

+ 常用两个逻辑非(`!!`)获取数据类型对应的布尔值，其行为等同于 `Boolean()`

```js
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!{}); // true
console.log(!!''); // false
console.log(!!'0'); // true
console.log(!!0); // false
console.log(!!12); // true
console.log(!!Infinity); // true
```

### 逻辑与

&emsp;&emsp;逻辑与(`&&`)有两个操作数，可用于任何数据类型，而且它是一个短路操作符。
+ 当两个操作数都为布尔值时，会返回一个布尔值(两个操作数都为 true 时返回 true，否则返回 false)

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
```

+ 第一个操作数求值为 `true` 时，返回第二个操作数；求值为 `false`，返回第一个操作数
+ 任意一个操作数为六个假值时，都会返回它们，若两个操作数分别包含两个不同的假值，返回第一个假值

```js
// A 为对象
console.log({} && 12); // 12
// A，B 均为对象
console.log({} && [1, 2]); // [1, 2]
// A 求值为 false
console.log('' && {}); // ''
// A 求值为 true
console.log('12' && {}); // {}
console.log(null && true); // null
console.log(NaN && true); // NaN
console.log(undefined && true); // undefined
```

### 逻辑或

&emsp;&emsp;逻辑或(`||`)有两个操作数，可用于任何数据类型，而且它是一个短路操作符。
+ 当两个操作数都为布尔值时，会返回一个布尔值(有一个操作数为 true 时返回 true，否则返回 false)

```js
console.log(true && true); // true
console.log(true && false); // true
console.log(false && false); // false
```

+ 第一个操作数求值为 `true` 时，返回第一个操作数；求值为 `false`，返回第二个操作数：

```js
// A 为对象
console.log({} || 12); // {}
// A，B 均为对象
console.log({} || [1, 2]); // {}
// A 求值为 false
console.log('' || {}); // {}
// A 求值为 true
console.log('12' || {}); // '12'
console.log(null || true); // null
console.log(NaN || true); // NaN
console.log(undefined || true); // undefined
```


## 算术运算符

**分类：**

+ 加法：`+`
+ 减法：`-`
+ 乘法：`*`
+ 除法：`/`
+ 求模：`%`
+ 自增/自减：`++/--`

**`Number()`：** 当算术运算符的操作数不是数值时，会自动使用 `Number()` 进行转换，转换规则为：

+ 操作数为 `null` 时，转换为数值 0
+ 操作数为 `undefined` 时，直接转换为 `NaN`
+ 操作数为字符串时，若字符串不包含有效数字字符，转化为 `NaN`（加法除外，只有有一个操作数为字符串，都会执行字符串拼接）
+ 操作数为布尔值时，将 `true/false` 分别转换为 1/0
+ 操作数为对象时，先调用对象的 `valueOf()` 方法取值，若取到 `NaN`，则再调用 `toString()` 取值


### 加法

**语法：**

```js
var c = a + b;
```

**规则：**

+ 两操作数都是数值时，规则如下：
  + 其中一个为 `NaN`，返回 `NaN`
+ 操作数包含字符串时，都会执行字符串拼接：
  + 两个操作数都是字符串，执行字符串拼接
  + 一个为字符串，另一个为数值、布尔值、对象，调用它们的 `toString()` 转换为字符串，再执行字符串拼接
  + 一个为字符串，另一个为 `null` 和 `undefined`，调用 `String()` 取得 `'null'` 和 `'undefined'`，再执行字符串拼接

```js
console.log(true + 12); // 13
console.log(false + 12); // 12
console.log(null + 12); // 12
console.log(undefined + 12); // NaN
console.log('12' + 'ab'); // 12ab
console.log('12' + 10); // 1210
```

### 减法

**语法：**
```js
var c = a - b;
```

**规则：**

+ 两操作数均是数值时，根据正负号返回值
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ 返回 `NaN` 的情况：
  + 任何一个操作数为 `NaN`
  + 不能确定结果的情况：如 `Infinity - Infinity`
+ 返回 `Infinity` 的情况：
  + 正常计算溢出时
  + 与 Infinity 计算变为无穷大时：如 `-Infinity - Infinity`

```js
console.log(12 - 2); // 10
console.log(12 - 'ab'); // NaN
console.log(Infinity - Infinity); // NaN
console.log(-Infinity - (-Infinity)); // NaN
console.log(Infinity - (-Infinity)); // Infinity
console.log(-Infinity - Infinity); // -Infinity
```

### 乘法

**语法：**
```js
var c = a * b;
```

**规则：**

+ 两操作数均是数值时，根据正负号返回值
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ 返回 `NaN` 的情况：
  + 有一个操作数是 `NaN`
  + `Infinity * 0`
+ 返回 `Infinity` 的情况：
  + 正常计算溢出时
  + `Infinity * 非零数值`
  + `Infinity * Infinity`

```js
console.log(12 * 0.5); // 6
console.log('12' * '0.5'); // 6
console.log(Infinity * 0); // NaN
console.log(Infinity * -10); // -Infinity
console.log(Infinity * Infinity); // Infinity
```

### 除法

**语法：**
```js
var c = a / b;
```

**规则：**

+ 两操作数均是数值时，根据正负号返回值
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
console.log(12 / 0.5); // 24
console.log('12' / '0.5');
// 24
console.log(12 / 'a12'); // NaN
console.log(0 / 0); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Infinity / 0); // Infinity
console.log(1 / 0); // Infinity
console.log(Infinity / 10); // -Infinity
```

### 求模

**语法：**

```js
var c = a % b;
```

**规则：**

+ 都是数值时，返回余数
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ `数值A % Infinity` 返回 A
+ 返回 `NaN` 的情况：
  + 有一个操作数是 `NaN`
  + `Infinity % 有限数值`
  + `Infinity % Infinity`
  + `Infinity % 0`
  + `0 % 0`

```js
console.log(21 % 5); // 1
console.log(10 % Infinity); // 10
console.log(10 % NaN); // NaN
console.log(Infinity % 1); // NaN
console.log(Infinity % Infinity); // NaN
console.log(Infinity % 0); // NaN
console.log(0 % 0); // NaN
```

### 自增/自减

**语法：**

```js
var a = 3;
console.log(a++); // 3
console.log(++a); // 5

var b = 3;
console.log(b--); // 3
console.log(--b); // 1
```

**说明：** 

+ 应用于正常数值时，直接操作
+ 操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作
+ 返回 `NaN` 的情况：
  + 有一个操作数是 `NaN`
+ 返回 `Infinity` 的情况：
  + 正常计算溢出时
  + 对 `Infinity` 自增/自减时



## 关系操作符

**分类：**

+ 大于：`>`
+ 小于：`<`
+ 大于等于：`>=`
+ 小于等于：`<=`

**规则：**

+ 都是数值时，执行数值比较
+ 都是字符串时，比较第一个字符的字符编码值，若相等，则继续比较下一个字符，直至不相等时判断结果
+ 一个操作数是数值时，自动将另一个操作数转化为数值，再进行比较
+ 一个操作数是对象时，先调用 `valueOf()`，若没有该方法，再调用 `toString()` 方法，将结果应用于上述规则
+ 一个操作数是布尔值时，先转换为数值，再进行比较
+ 任何操作数与 `NaN` 比较的结果都是 `false`，可以理解为无法判断结果(因此结果为 `false`)

```js
console.log(12 > 11); // true
console.log(12 > '11'); // true
console.log(12 > true); // true
console.log(12 > NaN); // false
console.log('12' > '2'); // false
console.log('21' > '2'); // true
console.log('23421' > '2345'); // false
console.log(12 > 'a'); // false
```

## 相等操作符

**分类：**

+ 等于：`==`
+ 不等于：`!=`
+ 全等：`===`
+ 不全等：`!==`

**规则：**

+ `==` 和 `!=` 在比较之前都会自动转换两个操作数为相同类型的操作数，再进行比较：
  + 数值和字符串比较时，先将字符串转换为数字，再进行比较
  + 一个操作数是布尔值时，先转换为数值，再进行比较
  + 一个操作数是对象时，先调用 `valueOf()` 方法，取得基本类型的值后按照上述规则比较
+ `==` 和 `!=` 执行比较时遵循的规则：
  + 若两个操作符都是对象，只有它们的指向相同时，才返回 true
  + NaN 不等于任何值，包括自身，因此 `NaN == NaN` 返回false，`NaN != NaN` 返回 true
  + `null == undefined` 返回 true
+ `===` 和 `!==` 在比较之前不会转换操作数，因此下列结果要区别于 `==` 和 `!=`
  + `===` 操作符规定两操作数的数据类型和值都相同时才会返回 true；`!==` 操作符则相反，只要两操作数类型不同或值不相等，就会返回 true
  + `'12' === 12` 返回 false，因为数据类型不相同
  + `null === undefined` 返回 false，因为数据类型不同
+ 开发中尽量使用 `===` 和 `!==` 代替 `==` 和 `!=`，它们比较前不会自动转换数据的类型，因此不会得到意料之外的结果

```js
// == 和 !=
console.log(12 == 12); // true
console.log(true == 1); // true
console.log('12' == 12); // true
console.log({} == {}); // false
console.log(null == undefined); // true
console.log(NaN == NaN); // false
console.log(NaN != NaN); // true

// === 和 !==
console.log('12' === 12); // false
console.log(true === 1); // false
console.log(null === undefined); // false
```


## 其他

### 条件(三元)操作符

&emsp;&emsp;条件操作符需要包含由 `?` 和 `:` 分割的三个操作数，当 `expression` 的计算值为 `true` 时，返回 `true_value`，否则返回 `false_value`。

**语法：**
```js
var ret = expression ? true_value : false_value;
```

其效果等同于使用一个 `if...else` 语句：

```js
var ret;
if (expression) {
  ret = true_value;
} else {
  ret = false_value;
}
```


### 赋值操作符

&emsp;&emsp;赋值操作符除了 `=` 外，还有以下一些简写：

+ `a += b` 等同于 `a = a + b`
+ `a -= b`
+ `a *= b`
+ `a /= b`
+ `a %= b`
+ `a <<= b`
+ `a >>= b`
+ `a >>>= b`


### 逗号操作符

&emsp;&emsp;逗号(`,`)主要有以下几种作用：

+ 在赋值语句中时，可将多个变量的声明或赋值写在一行
+ 在数组、函数(函数参数)、对象中时，用于分割数据元素