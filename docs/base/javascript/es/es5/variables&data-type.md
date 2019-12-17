## 变量声明

&emsp;&emsp;使用关键字 `var` 声明一个变量：

```js
// 仅声明
var name;

// 声明并赋值
var name = 'Zed';

// 声明和赋值分开
var name;
name = 'Zed';

// 省略关键字 var
name = 'Zed';

// 同时声明多个变量
var name = 'Zed';
    age = 22;
    sex = 'male';
```

?> **推荐使用：**
+ 永远不要省略关键字 `var`，这样能避免全局变量污染(省略关键字 `var` 时变量会上升为全局变量)
+ 尽量为已知类型的变量赋初始值
+ 不推荐将变量声明和赋值分开
+ 推荐使用多行同时声明多个变量(不是必要)，这样有利于提高可读性


!> **注意：** `ES6` 基本抛弃了 `var` 关键字，使用请查看 [ES6 const & let](docs/base/javascript/ecmascript/es6/let&const.md)


## 数据类型简介

&emsp;&emsp;`ES5` 的数据类型包含简单数据类型和复杂数据类型。

**简单数据类型：**
+ `Undefined`
+ `Null`
+ `Boolean`
+ `Number`
+ `String`

**复杂数据类型:**
+ `Object`

!> **注意：** `ES6` 新增了 `Symbol` 为简单数据类型，详情查看 [ES6 Symbol](docs/base/javascript/ecmascript/es6/symbol.md)


## Undefined

&emsp;&emsp;`Undefined` 类型只有一个取值：`undefined`，当变量声明但未初始化时，它的值就为 `undefined`。

**一些案例：**
```js
// 1.声明但未初始化时，初始值默认为 undefined
var name = 'Zed';
var age;
console.log(name);  // 'Zed'
console.log(age);  // 'undefined'

// 2.未声明便访问时，会报错
console.log(hello); // 报错，hello 并未声明

// 3.使用 typeof 操作未声明的变量时，会返回 undefined
console.log(typeof hello); // 'undefined'
```

?> **推荐使用：** 当 `typeof` 返回 `undefined` 的时候说明变量还未声明或已经声明但是没有初始化；因此，显式声明需要使用的变量是很好的做法，这样便能使 `typeof` 能得到预期的结果(返回 `undefined` 的时候说明变量是已经声明但未初始化而不是未声明)


## Null

&emsp;&emsp;`Null` 类型只有一个取值：`null`，可以把 `null` 理解为空指针对象(这样解析为什么 `typeof` 操作 `null` 时返回 `object`)。

**一些案例：**
```js
// 1.undefined 派生自 null
console.log(undefined == null); // true

// 2.对将来需要赋值为对象的变量赋值为 null
var obj = null;
obj = { name: 'Zed' };
```

?> **推荐使用：** 对将来需要赋值为对象的变量赋值为 `null`，有利于区分 `undefined` 和 `null`

!> **注意：** ES6 建议使用 `===` 代替 `==` 进行相等性比较，详情查看 [ES6 ===]()

## Boolean

&emsp;&emsp;`Boolean` 类型有两个取值：`true` 和 `false`，但可以用 `Boolean()` 函数将任意数据类型转化为 `Boolean` 类型。

```js
// 1.手动进行类型转换
var name = 'Zed';
console.log(Boolean(name)); // true

// 2.自动进行的类型转换
var age = 20;
if (age) {
  console.log(age);
}
```

**使用 `Boolean()` 函数的转换规则：**

数据类型|true|false
-|-|-
`Undefined`|没有|undefined
`Boolean`|true|false
`Number`|任何非零数字(包括 Infinite)|0 和 NaN
`String`|任何非空字符串|空字符串('')
`Object`|任何对象|null


?> **推荐使用：** 在自动进行类型转换的地方，要明确知道使用的数据类型(毕竟任何对象都会自动转换成 `true`)


## Number

&emsp;&emsp;`Number` 类型使用 `IEEE754` 格式来表示整数和浮点数(或者叫双精度数)。ES 能表示几种进制的数：

+ 十进制：默认为十进制数字，且在算数计算时，任何进制的数字都会被转换为十进制数字
+ 八进制：以 `0` 开头，紧跟着若干个八进制字符序列(0~7)，不符合规则的将被当作十进制处理
+ 十六进制：以 `0x` 开头，紧跟着若干个十六进制字符序列(0~9、A~F)，

**1.浮点数**

**一些案例：**
```js
// 1.以 0 为整数部分的浮点数可以省略小数点
var a = .2;
console.log(a); // 0.2

// 2.浮点数的存储空间是整数的两倍，ES 会在有需要的时候将浮点数转换为整数
var b = 2.1;
var c = 2.0;
console.log(b, c); // 2.1 2

// 3.能够使用科学计数法表示数字
var f1 = 1.2e+7;
var f2 = 1.2e-6;
console.log(f1, f2); // 12000000 0.0000012

// 4.ES 默认将小数点后带有超过 6 个 0 的浮点数转换为科学计数法
var f = 0.00000012;
console.log(f); // 1.2e-7

// 5.浮点数的最高精度是 17 位，但是计算时往往得不到预期的结果，这是 IEEE754 数值计算的通病
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false
```

?> **推荐使用：** 不要省略浮点数的小数点，不要测试浮点数的值。

**2.数值范围**

+ 最大值：保存在常量 `Number.MAX_VALUE`，绝大多数浏览器中为 1.7976931348623157e+308
+ 最小值：保存在常量 `Number.MIN_VALUE`，绝大多数浏览器中为 5e-324

&emsp;&emsp;大于 ES 能表示的最大值被转换为 `Infinity`，小于 ES 能表示的最小值被转换为 `-Infinity`。但是，当一次结果返回 `Infinity` 后再参与运算，其结果将会是 `NaN`。

?> **推荐使用：** 在进行大数值计算前，使用 `isFinite()` 判断数值是否超出范围

**3.NaN**

&emsp;&emsp;`NaN` 代表非数值(Not a Number)，是一个特殊的数值，用于表示一个本来要返回数值的操作但未返回数值(ES 属于弱类型语言，这样就不会抛出错误了)。

**一些案例：**
```js
// 1.ES 的特点
console.log(10 / 0); // Infinite
console.log(-10 / 0); // -Infinite
console.log(0 / 0); // NaN
console.log(NaN / 10); // NaN

// 2. NaN 不等于任何值，包括自身
console.log(NaN == NaN); // false
console.log(NaN == null); // false
console.log(NaN == undefined); // false

// 3.isNaN() 的不确定性，事实上，任何能自动转换为数值的数据类型都返回 false
console.log(isNaN(NaN)); // true
console.log(isNaN('hello')); // true
console.log(isNaN(12)); // false
console.log(isNaN('12')); // false
console.log(isNaN(true)); // false

// 4.isNaN() 传入对象时
console.log(isNaN({})); // true
var obj = {
  valueOf: function() {
    return 100;
  }
};
console.log(isNaN(obj));  // false
```

**说明：**

+ `isNaN()` 传入任何能自动转换为数值的数据类型时，都会返回 `false`
+ `isNaN()` 传入对象时，会先调用对象的 `valueOf()` 方法，若不能转换为数值，会再调用对象的 `toString()` 方法，若还是不能转换为数值，则返回 `false`

**4.数值转换**

&emsp;&emsp;有 3 个函数能将非数值转换为数值元素：

+ `Number()`: 适用于任何数据类型
+ `parseInt()`: 仅适用字符串
+ `parseFloat()`: 仅适用字符串

**Number() 的转换规则：**

数据类型|规则
-|-
`Boolean`|true => 1, false => 0
`Number`|返回原数
`Null`|null => 0
`Undefined`|undefined => NaN
`String`|1.只包含数字(可以是浮点数，可以包括一个前导的正/负号) => 十进制数值，但忽略前导 '0'<br>2.有效的十六进制格式 => 相同大小的十进制数值<br>3.空串('') => 0<br>4.其他 => NaN
`Object`|先调用对象的 valueOf() 方法，若结果是 NaN，再调用 toString() 方法返回结果

**parseInt() 转换规则：**

场景|例子
-|-
转换时会忽略字符串前的所有空格|'  12' => 12
第一个字符不是数字字符或正/负号|'a12' => NaN
以正/负号开头，后面不是数字|'-+12' => NaN
空字符串与 Number() 的结果不同|'' => NaN
至少有一个字符符合时，会一直读取到不符合条件的前一个字符|'123abc' => 123
ES5 与 ES3 处理八进制有所不同，**建议都传递第二个参数**指定基数转换|parseInt('032', 8) => 26

**parseFloat() 转换规则：**

与 `parseInt()` 类似，但也有不同：
+ 能识别第一个小数点
+ 始终忽略前导 0
+ 仅能转换十进制浮点数，不能传递第二个参数指定基数

场景|例子
-|-
能识别第一个小数点|'12.34.0' => 12.34
始终忽略前导 0|'  012.34' => 12.34
十六进制字符串始终返回 0|'0x12.3' => 0
能转换科学计数法|'3.1e-5' => 0.000031
返回 `NaN`|'a12.34' => NaN, '-+12.34' => NaN, '' => NaN



## String

&emsp;&emsp;`String` 类型用于表示零个或多个 16 位 Unicode 字符组成的字符序列，即字符串。可以用单引号(`''`)或双引号(`""`)包裹。

**1.字符字面量**

&emsp;&emsp;字符字面量，也叫转义序列，用于表示非打印字符或有其他用途的字符。

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

**2.length 属性**

&emsp;&emsp;字符串的 length 属性能返回字符串的长度；但若字符串包含双字节字符，可能不会返回正确的字符数。

**3.只读**

&emsp;&emsp;字符串是只读的，即只能对其进行读操作，不能操作单个字符(除非重新赋值整个字符串)：

```js
var str = 'hello world';
console.log(str[0]); // 'h'
str[0] = 'l';
console.log(str); // 'hello world'
str = 'hello javascript';
console.log(str); // 'hello javascript'
```

**4.转换为字符串**

&emsp;&emsp;两种方法将值转换为字符串：

+ toString(): 通过从原型继承，基本上每个值都有一个该方法，转换数值时还能指定转换的基数
+ String(): 与 `toString()` 类似，但能转换 `null` 和 `undefined`

```js
var a = 12;
var b = false;
var obj = {};
var str = 'hello';
var n = null;
var m = undefined;

// toString()
console.log(a.toString()); // '12'
console.log(a.toString(8)); // '14'
console.log(b.toString()); // 'false'
console.log(obj.toString()); // '[object Object]'
console.log(str.toString()); // 'hello'
console.log(n.toString());  // 报错
console.log(m.toString());  // 报错

// String()
console.log(String(a)); // '12'
console.log(String(b)); // 'false'
console.log(String(obj)); // '[object Object]'
console.log(String(str)); // 'hello'
console.log(String(n)); // 'null'
console.log(String(m)); // 'undefined'
```


## Object

&emsp;&emsp;`Object`(对象)是一组数据和功能的集合，能够通过 `new` 操作符创建一个对象实例。并且 `Object` 是所有实例的基础(原型链的顶端)。

**所有实例都具有的属性/方法：**

属性/方法|描述
-|-
`constructor`|保存用于创建当前对象的构造函数
`hasOwnProperty(propertyName)`|检查当前对象是否存在指定的属性
`isPrototypeOf(object)`|检查传入的对象是否是当前对象的原型
`propertyEnumerable(propertyName)`|检查指定的属性是否可枚举(能用 `for...in` 遍历)
`toLocaleString()`|返回对象的字符串表示，该字符串与执行环境的地区对应
`toString()`|返回对象的字符串表示
`valueOf()`|返回对象的字符串、数值或布尔值表示，通常与 `toString()` 的返回值相同

**创建对象实例：**
```js
// 1.创建一个对象实例
var o1 = new Object();

// 2.无参数传入时可省略 ()
var o2 = new Object;
```

**推荐使用：**

+ 即使无参数传入也不要省略 `()`