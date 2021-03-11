## 简介

+ `Symbol` 表示独一无二的值，属于原始数据类型

```js
let s1 = Symbol()
let s2 = Symbol()
s1 === s2 // false

let s1 = Symbol('foo')
let s2 = Symbol('foo')
s1 === s2 // false
```

+ `Symbol` 值不能与其他类型的值进行运算，但可以显式转为字符串

```js
let sym = Symbol('My symbol')

'your symbol is ' + sym // TypeError: can't convert symbol to string
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```

+ `Symbol` 值也可以转为布尔值，但是不能转为数值

```js
let sym = Symbol()

Boolean(sym) // true
!sym  // false
Number(sym) // TypeError
```

+ `Symbol` 作为属性名，遍历对象的时候，该属性不会出现在 `for...in`、`for...of` 循环中，也不会被 `Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()` 返回:

```js
const obj = {}
const foo = Symbol('foo')
obj[foo] = 'bar'

for (let i in obj) {
  console.log(i) // 无输出
}

Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [Symbol(foo)]
```



## 属性

+ `Symbol.isConcatSpreadable`: 表示该对象用于 `Array.prototype.concat()` 时是否可以展开
+ `Symbol.iterator`: 对象的 `Symbol.iterator` 属性，指向该对象的默认遍历器方法
+ `Symbol.species`: 指向一个构造函数，创建衍生对象时会使用该属性
+ `Symbol.hasInstance`: 指向一个内部方法，当其他对象使用 `instanceof` 运算符判断是否为该对象的实例时，会调用该方法
+ `Symbol.match`: 指向 `String.prototype.match()` 方法
+ `Symbol.replace`: 指向 `String.prototype.replace()` 方法
+ `Symbol.search`: 指向 `String.prototype.search()` 方法
+ `Symbol.split`: 指向 `String.prototype.split()` 方法
+ `Symbol.toPrimitive`: 指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值
+ `Symbol.toStringTag`: 指向一个方法。在对象上面调用 `toString()` 时，使用该属性覆盖 `toString()` 的返回值
+ `Symbol.unscopables`: 指向一个对象。该对象指定了使用 `with` 关键字时，哪些属性会被 `with` 环境排除



## 方法

+ `Symbol.for(str: String): Symbol`: 重新使用同一个 `Symbol` 值
+ `Symbol.keyFor(symbol: Symbol): String | undefined`: 返回一个已使用 `Symbol.for()` 登记的 `Symbol` 类型的 `key`



## 应用

+  作为对象的属性名

```js
let mySymbol = Symbol()

// 第一种写法
let a = {}
a[mySymbol] = 'Hello!'

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
}

// 第三种写法
let a = {}
Object.defineProperty(a, mySymbol, { value: 'Hello!' })

// 以上写法都得到同样结果
a[mySymbol] // 'Hello!'
```

