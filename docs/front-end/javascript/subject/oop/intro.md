---
sidebarDepth: 2
---

## 对象概述

+ 对象是一个无序的集合，它包含的属性可以是基本值、对象、函数等
+ **创建对象**：可以通过以下简单的方式声明和设置对象
```js
// 1.创建一个 Object 的实例
const obj = new Object()
obj.name = 'Alice'
console.log(obj.name) // Alice

// 2.使用字面量对象
const obj = {
  name: 'Alice',
}
console.log(obj.name) // Alice
```
+ **访问对象成员**：可以使用 `obj.name` 或 `obj[name]` 的方式
```js
const obj = {
  name: 'Alice',
}

console.log(obj.name) // Alice
console.log(obj['name']) // Alice
```

::: tip 说明：
+ `obj.name` 和 `obj[name]` 的区别是前者引用的是一个属性字符串，而后者可以是一个变量：
```js
const obj = {
  name: 'Alice',
}

const attr = 'name'
console.log(obj[attr]) // Alice
```
+ 也就是说遍历属性时只能使用 `obj[name]`：
```js
const obj = {
  'user-name': 'Alice',
}

for (const key in obj) {
  console.log(obj[key])
}
// Alice
```
+ 当遇到属性名是中横线时，也只能使用 `obj[name]`：
```js
const obj = {
  'user-name': 'Alice',
}

console.log(obj['user-name'])
```
:::



## 原型设计模式 & 原型规则

**原型设计模式：** 
+ 每个构造函数都有一个原型(prototype)属性，这个属性是一个指针，指向一个对象，这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法
+ 这种方式的好处是不必在构造函数中定义对象实例的信息，转为直接在原型对象上定义对象实例需要共享的属性和方法

**原型规则：**
+ `prototype` 和 `constructor`：构造函数的 `prototype` 属性指向它的原型对象，同时该原型对象的 `constructor` 属性指向该构造函数
+ 实例的 `[[Prototype]]`：构造函数实例的 `[[Prototype]]` 属性(大多数浏览器实现了非标准的 `__proto__` 属性)也指向构造函数的原型对象，但是这个属性 **与构造函数无关**
+ 屏蔽而不是覆盖：当为对象实例添加一个属性时，该属性会屏蔽(并不是覆盖)原型对象中的同名属性
+ 在原型链上查找：当从一个对象或实例读取一个属性时，若在自身找不到该属性，便会在原型链上查找，都找不到时返回 `undefined`
+ 动态性：可以在原型上添加、删除、甚至是将一个新的对象引用赋值给原型，这样的影响会发生于在这之后新创建的实例中，但不会影响在这之前就创建的实例



## 属性描述符

### 说明

+ 属性描述符用于添加属性或修改属性的行为
+ 动态添加的属性使用了数据描述符的形式，并将属性中**除 `[[value]]` 外**的三个描述符都设置为 `true`
+ 属性描述符有**数据描述符**和**存储描述符**两种实现，但是每个属性**只能通过其中一种实现**
+ 与属性描述符相关的 API；
  + `Object.defineProperty()`：设置对象的单个属性描述符
  + `Object.defineProperties()`：设置对象的多个属性描述符
  + `Object.getOwnPropertyDescriptor()`：获取对象的某个属性描述符
  + `Object.getOwnPropertyDescriptors()`：获取对象的所有属性描述符


### 数据描述符

+ `[[configurable]]`：表示对象的属性是否可以被 `delete` 删除
+ `[[enumerable]]`：指示属性是否能被 `for...in` 枚举
+ `[[writable]]`：指示属性的值是否能被修改
+ `[[value]]`：属性的值

```js
const obj = {}
Object.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'Alice',
})

console.log(obj.name) // 'Alice'
obj.name = 'Anna'
console.log(obj.name) // 'Anna'
for (let key in obj) {
  console.log(key) // 'name'
}
```

::: tip 说明：
+ 通过对象实例或字面量对象添加的属性，**除 `[[value]]` 外**的三个描述符默认值为 `true`
+ `defineProperty()` 添加的属性若无显式设置，除 `[[value]]` 外三个描述符默认值为 `false`
:::


### 存储描述符

+ `[[configurable]]`：表示对象的属性是否可以被 `delete` 删除
+ `[[enumerable]]`：指示属性是否能被 `for...in` 枚举
+ `[[get]]`：读取属性时调用的函数；默认为 `undefined`
+ `[[set]]`：写入属性时调用的函数；默认为 `undefined`

```js
const obj = {
  _name: 'Alice',
}
Object.defineProperty(obj, 'name', {
  get: function() {
    return this._name
  },
  set: function(newVal) {
    this._name = newVal
  },
})

console.log(obj.name)   // 'Alice'
obj.name = 'Anna'
delete obj.name         // 删除失败
console.log(obj.name)   // 'Anna'
for (let key in obj) {
  console.log(key)      // '_name'
}
```

::: tip 说明：
+ 同样，调用 `defineProperty()` 会将 `[[configurable]]` 和 `[[enumerable]]` 的默认值设为 `false`
+ 不一定要同时指定 `getter` 和 `setter`，它们的默认值为 `undefined`
+ 没有定义 `getter` 时，读取的属性是 `undefined`(严格模式下会报错)
+ 没有定义 `setter` 时，写入操作会被忽略(严格模式下会报错)
:::



## constructor

+ `Object.prototype.constructor` 属性指向一个对象的构造函数
```js
function Person(name) {
  this.name = name
}

const p = new Person('Alice')
console.log(p.constructor) // [Function: Person]
console.log(p.constructor.prototype === Person.prototype) // true
```
+ `constructor` 就是一个简单的属性，并且是惰性的，模拟继承时需要手动修改
```js
function Person() {}
function Student() {}

Student.prototype = new Person()
const s = new Student()
console.log(s.constructor) // [Function: Person]

s.constructor = Student
console.log(s.constructor) // [Function: Student]
```



## new

### 揭秘

+ 简单来说，`new` 用来创建一个对象的实例：
```js
function Person() {
  this.name = 'Alice'
}

const p = new Person()
console.log(p.name) // Alice
```

+ 如果没有使用 `new`，那么这仅仅是一个函数调用，返回值为 `undefined`，而且在非严格模式下污染了全局对象（因为 `this` 指向全局对象）
```js
function Person() {
  this.name = 'Alice'
}

function foo() {
  console.log(this.name)
}

const p = Person()
console.log(p)  // undefined
foo()           // Alice
```

+ 只要使用 `new` 调用函数，函数中的 `this` 就会改变(指向当前函数的一个实例，并且能使用该函数原型上的属性)
```js
function P() {
  this.sayHi()
}

P.prototype.sayHi = function() {
  console.log('Hi')
}

const p = new P() // Hi
```
+ 所以，**构造函数只是一个普通的函数，首字母大写只是一个约定；`new` 操作符是一个语法糖，它用来构造类的概念**

::: tip 使用 new 调用函数时，返回值也要依情况而定：
+ 默认返回 `this`
```js
// 1.默认返回 this
function Foo() {
  this.name = 'foo'
}

const f = new Foo()
console.log(f)  // Foo { name: 'foo' }
```
+ 如果函数的返回值不是一个对象，返回 `this`
```js
// 2.返回值不是对象
function Foo() {
  this.name = 'foo'
  return 1      // new 调用时将返回 this 而不是 1
}

const f = new Foo()
console.log(f)  // Foo { name: 'foo' }
```
+ 如果函数的返回值是一个对象，返回值维持不变
```js
// 3.返回值是对象
function Foo() {
  this.name = 'foo'
  return {}     // new 调用时将直接返回
}

const f = new Foo()
console.log(f)  // {}
```
:::



### 理解和实现

+ **Javascript 的继承是基于原型的，`new` 操作符其实做了以下几件事**：

    1. 创建一个空对象 p，并设置 `p.__proto__ = P.prototype`
    2. 执行构造函数内的代码为该对象添加属性，并将 `this` 指向该对象
    3. 若构造函数的返回值是对象则直接返回，否则返回 `this`

+ **实现一个 `new`**：
```js
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw '_new: The first param must be a function'
  }
  const obj = {}
  obj.__proto__ = Constructor.prototype     // 继承原型上的属性
  const ret = Person.apply(obj, args)       // 执行构造函数，使用 apply() 绑定 this 为 obj
  return ret instanceof Object ? ret : obj  // 若构造函数返回的不是对象则返回 obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.getName = function() {
  console.log(this.name)
}

const p = _new(Person, 'Alice', 24)
console.log(p.name, p.age)  // Alice 24
p.getName()                 // Alice
```

::: tip ES6 建议：
+ 使用 `Object.setPrototypeOf()` 来代替直接设置 `__proto__`：
```js{6}
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw '_new function: The first param must be a function'
  }
  const obj = {}
  Object.setPrototypeOf(obj, Constructor.prototype)
  const ret = Person.apply(obj, args)
  return ret instanceof Object ? ret : obj
}
```
+ 使用 `Object.getPrototypeOf()` 获取 `__proto__`：
```js{5}
function Person() {}

const p = new Person()
console.log(p.__proto__ === Person.prototype)               // true
console.log(Object.getPrototypeOf(p) === Person.prototype)  // true
```
:::



## instanceof

### 揭秘

+ `instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上
+ 严格来说，"若 `p instanceof Person === true`，则 `p` 是 `Person` 的实例" **是一个充要条件**
```js
function Person() {}

const p = new Person()
console.log(p instanceof Person)      // true
console.log(p instanceof Object)      // true
console.log(Person instanceof Object) // true
```

::: tip 备注
+ ES6 新增 `Object.prototype.isPrototypeOf()` 的功能与 `instanceof` 一样：
```js
function Person() {}

const p = new Person()
console.log(Person.prototype.isPrototypeOf(p))      // true
console.log(Object.prototype.isPrototypeOf(p))      // true
console.log(Object.prototype.isPrototypeOf(Person)) // true
```
:::


### 理解和实现

+ instanceof 的底层实现原理：
  1. `instanceof` 需要两个操作数：左操作数(L)和右操作数(R)，查找的是 R 的原型对象是否在 L 的原型链上
  2. 若 L 不是一个 `Object` 类型，直接返回 `false`
  3. 取得 L 的实例原型对象(`__proto__`)，比较是否等于 R 的原型对象，若相等则返回 `true`；若不相等，继续取 L 的上层实例原型对象
  4. 若最后 L 到达原型链最上层(`null`)，仍然没有等于 R 的原型对象，说明 R 的原型对象不在 L 的原型链上，返回 `false` 
+ 实现 instanceof：
```js
function _instanceof (L, R) {
  if (L === null || typeof L !== 'object') return false
  const O = R.prototype
  L = L.__proto__
  while (true) {
    if (L === null) return false
    if (L === O) return true
    L = L.__proto__
  }
}
```


## class & extends 的原理

**class：** 实际上是构造函数的语法糖
+ `constructor` 构造方法内定义实例的属性
+ `static` 定义的方法会添加到构造函数的属性上
+ 其他方法会被添加到构造函数的原型对象上

**extends：** 实际上是寄生组合继承的语法糖
+ 使用一个函数指定继承关系
+ 使用一个函数调用父类构造函数