## ECMAScript & Javascript

+ `javascript` 是一种动态类型、弱类型、基于原型的解释型语言；由 `ECMAScript`, `DOM`, `BOM` 三部分组成
+ `ECMAScript` 常用的版本为 `ES3`, `ES5`, `ES6+`



## JavaScript 数据类型

+ 基本数据类型：
  + `Undefined`：只有 `undefined`
  + `Null`：只有 `null`
  + `Boolean`：`true` 或 `false`
  + `Number`：整数、浮点数、特殊值(`Infinity`, `-Infinity`, `NaN`)
  + `String`：字符序列
  + `Symbol`：唯一的不可变的数据类型
+ 引用数据类型：
  + `Object`：一组数据和功能的集合



## 原始类型 & 引用类型

**数据类型底层的数据结构：**
+ 栈：保存基本数据类型的值或对象的引用地址指针(由系统分配存储空间、存储的值大小固定、空间小、直接操作变量效率高)
+ 堆：保存该对象指针指向的数据(通过代码分配空间、存储的值可动态调整、空间大、使用引用地址读取效率低)

**区分原始类型和引用类型：**
+ 不可变性：原始类型是不可变的(有些字符串变异方法可变是因为开辟了新的内存空间)，因为栈存储的值大小固定；引用类型是可变的，因为堆存储的值可动态调整
+ 变量比较：原始类型直接比较值，引用类型会比较引用地址



## undefined & not defined

+ `undefined`：变量声明但未初始化，在初始化前使用该变量时它的值都是 `undefined`
+ `not defined`：指变量还未声明，除了 `typeof`，其他使用未声明的变量的行为都会报错(`ReferenceError`)
```js
let a
console.log(a) // undefined
console.log(typeof b) // undefined
console.log(b) // ReferenceError!
```



## null & undefined

+ 产生：
  + 遍历声明后但未初始化时，其默认值都是 `undefined`，也可以显式声明，但意义不大
  + `null` 需要显式声明
+ 语义：
  + `null` 表示一个空对象，将不再使用的对象赋值为 `null` 时表明对象将会被垃圾收集器回收以释放内存
  + `undefined` 表示声明但未赋值的变量，作为变量的默认值
+ 自动类型转换：
  + 转换为数值时 `null` 为 `0`，`undefined` 为 `NaN`
  + 转换为布尔值时都为 `false`
+ 比较：
  + `null == undefined` 返回 `true`
  + `null === undefined` 返回 `false`

```js
let a = undefined
let b = null
let c = 1

console.log(a + c) // NaN + 1 = NaN
console.log(b + c) // 0 + 1 = 1

console.log(a == b) // true
console.log(a === b) // false

if (a || b) {
  console.log('有一个为 true')
} else {
  console.log('两者都为 false') // 输出: 两者都为 false
}
```



## 有哪些假值

以下值用在 `if` 条件语句中判断时都会返回 `false`：`0`, `undefined`, `null`, `NaN`, `''`, `false`



## 小数点精度丢失的原因 & 最大数字/最大安全数字 & 处理大数字的方法 & 避免精度丢失的方法

**说明：**
+ `javascript` 中 `Number` 类型是双精度 64 位二进制格式 `IEEE 754` 值(位于 `-(2^53-1)` 和 `2^53-1` 之间的数字)
+ MIN_VALUE：最小正数值(5e-324)
+ MAX_VALUE：最大正数值(1.79E+308，或 2^1024)
+ MIN_SAFE_INTEGER：最小安全整数(-(2^53 - 1))
+ MAX_SAFE_INTEGER：最大安全整数(2^53-1)

**处理大数字：**


**避免精度丢失：**




## 判断数据类型的方式 & 如何准确判断数据类型

+ `typeof`
  + 优点：可以准确判断几个原始类型(`undefined`, `boolean`, `number`, `string`, `symbol`)
  + 缺点：基本数据类型 `null` 返回 `object`；引用数据类型除了 `function` 返回 `function` 外，其他均返回 `object`，难以确定引用类型的详细类型
+ `instanceof`
  + 优点：可以协助判断引用类型具体是什么类型的对象
  + 缺点：不会得到唯一的结果，因为只要右操作数位于原型链上，都会返回 `true`；而且有些继承方式可以修改该行为
+ `toString`
  + 优点：可以调用 `Object` 原型上未被覆盖的 `toString()` 方法，配合 `call()` 来准确判断变量的类型(`Object.prototype.toString.call(null)`)
  + 缺点：大部分引用类型均重写了 `toString()` 方法，但是这个问题可以解决
+ `constructor`
  + 返回实例的构造函数


## 有哪些内置对象

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

## 基本包装类型 & 装箱拆箱操作

+ 基本包装类型：`Number`, `String`, `Boolean`
+ 装箱：简单来说就是把基本类型转换为对应的包装类型；因为通过直接声明(不通过构造函数)创建的 `number`, `string`, `boolean` 类型的变量都属于基本数据类型，由于不是对象，理论上是不存在可调用的方法的，但是它们却可以使用包装类原型上的方法，是因为 javascript 在后台进行了装箱操作：
```js
var str = 'hello world'
var newStr = str.substring(0, 5)
console.log(newStr) // 'hello'

// 实际的装箱操作
var temp = new String(str)
var newStr = str.substring(0, 5)
temp = null
console.log(newStr) // 'hello'
```
+ 拆箱：简单来说就是把引用类型转换为基本类型；拆箱的过程中，会遵循 `ECMAScript` 规范规定的 `ToPrimitive` 原则，一般会调用引用类型的 `valueOf` 和 `toString` 方法，也可以直接重写 `toPrimitive` 方法；其中的规则如下：
  + 重写 `toPrimitive()` 时，只会调用 `toPrimitive()`
  + 引用类型转换为 `Number` 类型，先调用 `valueOf()`，再调用 `toString()`
  + 引用类型转换为 `String` 类型，先调用 `toString()`，再调用 `valueOf()`
  + 若 `valueOf()` 和 `toString()` 都不存在，或者没有返回基本类型，则抛出 `TypeError` 异常
```js
// 调用 valueOf() 和 toString() 的顺序
const obj = {
  valueOf: () => { console.log('valueOf'); return 123; },
  toString: () => { console.log('toString'); return 'hello'; },
};
console.log(obj - 1); // valueOf   122
console.log(`${obj} world`); // toString hello world

// 自定义 toPrimitive 方法
const obj2 = {
  [Symbol.toPrimitive]: () => { console.log('toPrimitive'); return 123; },
};
console.log(obj2 - 1); // toPrimitive   122

// valueOf() 和 toString() 都不返回基本数据类型时
const obj3 = {
  valueOf: () => { console.log('valueOf'); return {}; },
  toString: () => { console.log('toString'); return {}; },
};
console.log(obj3 - 1); // valueOf toString TypeError
```



## 类型转换规则 & 隐式类型转换 & 避免或应用

**类型转换规则：**
+ 转换为 `Boolean`：相当于使用 `Boolean()`
  + `false`：`0`, `NaN`, `''`, `null`, `undefined`
  + `true`：其他所有类型
+ 转换为 `Number`：相当于使用 `Number()`
  + 1：`true`, `'1'`
  + 0：`false`, `''`, `null`, `[]`
  + NaN：`undefined`, 任何函数、对象、非空数组、包含非数字的字符串
+ 转换为 `String`：相当于使用 `String()`
  + 有 `toString()` 方法时，直接使用 `toString()` 返回的结果
  + `null` 返回 `'null'`，`undefined` 返回 `'undefined'`

**可能发生隐式类型转换的场景：**
+ 单个变量或逻辑语句：理解为需要布尔值，`Boolean` 的优先级高
  + 单个变量时，自动转换为 `Boolean` 类型，谨记只有六个假值(`false`, `0`, `NaN`, `''`, `null`, `undefined`)
  + 逻辑非(`!`)：
    + `!variable`：先自动转换为 `Boolean` 类型再取反
    + `!!variable`：与单个变量类似，自动转换为 `Boolean` 类型
  + 逻辑与(`&&`)：
    + 两个操作数都为布尔值时，会返回一个布尔值
    + 第一个操作数求值为 `true` 时，返回第二个操作数；求值为 `false`，返回第一个操作数
    + 任意一个操作数为六个假值时，都会返回它们，若两个操作数分别包含两个不同的假值，返回第一个假值
  + 逻辑或(`||`)：
    + 两个操作数都为布尔值时，会返回一个布尔值
    + 第一个操作数求值为 `true` 时，返回第一个操作数；求值为 `false`，返回第二个操作数
+ 关系操作符(`>`, `>=`, `<`, `<=`, `==`)：理解为值的比较， `Number` 的优先级高
  + 都是数值时，执行数值比较
  + 都是字符串时，比较第一个字符的字符编码值，若相等，则继续比较下一个字符，直至不相等时判断结果
  + `NaN` 和其他任何类型比较永远返回 `false`(包括与自身比较)
  + `null` 和 `undefined` 比较时返回 `true`，但它们和其他任何类型比较都返回 `false`
  + `Boolean` 和其他任何类型比较，`Boolean` 首先被转换为 `Number` 类型
  + `String` 和 `Number` 比较，先将 `String` 转换为 `Number` 类型
  + 原始类型和引用类型比较时，对象类型会依照 `ToPrimitive` 规则转换为原始类型
+ 数学运算：除了字符串拼接外，理解为 `Number` 的优先级高
  + 加法(`+`)：有一个操作数是字符串，都进行字符串拼接；一个数字为 `NaN` 时，结果为 `NaN`
  + 减法(`-`)、乘法(`*`)、除法(`/`)、求模(`%`)、自增/自减(`++`/`--`)：操作数不是数值时，自动使用 `Number()` 进行转换后再进行操作


**避免：**
+ 尽量使用 `===` 代替 `==`

**应用：**
+ 使用 `!!variable` 将变量转换为对应的 `Boolean` 类型的值
+ `React` 使用 `&&` 作条件渲染



## 解释 [] == ![]

1. `!` 的优先级高于 `==`，先将 `![]` 转换为 `false`
2. 转换为比较 `[] == false`，先将 `false` 转换为 `0`
3. 转换为比较 `[] == 0`，先将 `[]` 转换为 `0`



## 使 (a == 1 && a == 2 && a == 3) 返回 true

```js
const a = {
  arr: [3, 2, 1],
  valueOf: function() {
    return this.arr.pop()
  }
}
console.log(a == 1 && a == 2 && a == 3) // true
```



## 深拷贝和浅拷贝 & 数组和对象的深拷贝

**浅拷贝简介：** 仅拷贝引用类型的第一层数据，第二层或更深层数据拷贝的是一个引用

```js
const arr = [1, 2, [2, 3]]
const newArr = arr.concat()
// 修改第一层数据时，不会影响原数据
newArr[0] = 0
console.log(arr, newArr) // [ 1, 2, [ 2, 3 ] ] [ 0, 2, [ 2, 3 ] ]
// 修改深层数据时，会影响原数据
newArr[2][0] = 100
console.log(arr, newArr) // [ 1, 2, [ 100, 3 ] ] [ 0, 2, [ 100, 3 ] ]
```

**实现浅拷贝：**

+ 数组使用不带参数的 `slice()` 和 `concat()` 返回的就是原数组的浅拷贝
+ 对象使用展开运算符也可以获得一层浅拷贝(`obj2 = { ...obj }`)

**深拷贝简介：** 深拷贝：递归拷贝引用类型中任意层级的数据，返回是全新的变量，彼此修改都不会有影响

**实现深拷贝：**

+ 使用 `JSON.parse()` 和 `JSON.stringify()` 转化
  + 优点：语法简单，在大多数仅有 `Number`, `String`, `Boolean` 的值的情况下使用
  + 缺点：是不能转化 `RegExp`、`Function`、`Date`、`undefined` 等值

```js
const obj = {
  name: 'Alice',
  age: 24,
  likes: ['coding', 'singing']
}

const obj2 = JSON.parse(JSON.stringify(obj))
obj2.likes[1] = 'dancing'
console.log(obj) // { name: 'Alice', age: 24, likes: [ 'coding', 'singing' ] }
console.log(obj2) // { name: 'Alice', age: 24, likes: [ 'coding', 'dancing' ] }
```

+ 递归实现对象的深拷贝，能使用大部分情况

```js
// 深拷贝
function deepClone(obj) {
  if (obj == null) { return obj } // obj 为 undefined 和 null 时
  if (typeof obj === 'object') {
    const ret = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      ret[key] = deepClone(obj[key])
    }
    return ret
  }

  return obj // 其他原始类型的值或 function
}
// 举例
const obj = {
  name: 'Alice',
  age: 24,
  likes: ['coding', 'singing'],
  todo: {
    coding: false
  }
}
const obj2 = deepClone(obj)
obj2.todo.coding = true
obj2.likes[0] = 'dancing'
console.log(obj) // { name: 'Alice', age: 24, likes: [ 'coding', 'singing' ], todo: { coding: false } }
console.log(obj2) // { name: 'Alice', age: 24, likes: [ 'dancing', 'singing' ], todo: { coding: true } }
```



## var & let & const

**let/const 和 var 的区别：**

+ 块级作用域
+ 不存在变量提升
+ 暂时性死区：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
+ 不可重复声明
+ `let`、`const` 声明的全局变量不会挂在顶层对象下面：使用 var 声明的全局变量可以用 `global.a`/`window.a` 的形式获取，但使用 `let` 和 `const` 声明的则不行

**const 和 let 的区别：**

+ `const` 用于声明常量，一旦声明便不可变(引用类型除外)
+ `const` 声明常量时一定要赋值，否则报错



## 变量提升 & 函数提升

+ 变量提升：在同一作用域下，变量可以在声明之前使用，值为 `undefined`
+ 函数提升：使用函数声明方式定义的方法，调用语句可以在声明语句之前(解析器在代码开始执行前将函数提升到顶部)
```js
console.log(a) // undefined 
func() // world

var a = 'hello'
function func() { console.log('world') }
```



## 函数定义的方式

**函数定义：**
```js
// 1.函数声明
function func() {}

// 2.函数表达式
const func = function() {}

// 3.构造函数
const func = new Function('str', 'return str')
```

**区别：**
+ 函数声明会提升，函数表达式不会
+ 构造函数模式会解析两次代码，影响性能，一般不会使用