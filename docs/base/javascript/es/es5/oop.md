---
sidebarDepth: 2
---

## 对象概述

&emsp;&emsp;对象是一个无序的集合，它包含的属性可以是基本值、对象、函数等。可以通过以下简单的方式声明和设置对象：

+ **创建一个 Object 的实例**
```js
const obj = new Object()
obj.name = 'Alice'
console.log(obj.name) // 'Alice'
```

+ **使用字面量对象**
```js
const obj = {
  name: 'Alice',
}
console.log(obj.name) // 'Alice'
```



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
+ `defineProperty()` 添加的属性若无显式设置，这三个描述符默认值为 `false`
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

console.log(obj.name) // 'Alice'
obj.name = 'Anna'
delete obj.name
console.log(obj.name)  // 'Anna'
for (let key in obj) {
  console.log(key) // '_name'
}
```

::: tip 说明：
+ 不一定要同时指定 `getter` 和 `setter`，它们的默认值为 `undefined`
+ 没有定义 `getter` 时，读取的属性是 `undefined`(严格模式下会报错)
+ 没有定义 `setter` 时，写入操作会被忽略(严格模式下会报错)
:::




## 防篡改对象

### 说明

+ 几种防篡改对象：
  + 不可扩展的对象：**不能添加成员**，但是仍**可以删除、修改已有成员**
  + 密封的对象：**不能添加、删除成员**，但是仍**可以修改已有成员**
  + 冻结的对象：**不能添加、删除、修改成员**，但是仍**可以通过 `[[Set]]` 描述符修改已有成员**
+ 相关 API：
  + `Object.preventExtensions()`：防止对象扩展
  + `Object.seal()`：密封对象
  + `Object.freeze()`：冻结对象
  + `Object.isExtensible()`：指示对象是否可扩展
  + `Object.isSealed()`：指示对象是否被密封
  + `Object.isFrozen()`：指示对象是否被冻结


::: tip 说明：
+ 一旦将对象定义为防篡改后无法撤销
+ 若进行对象禁止的操作，非严格模式下会忽略，严格模式下会抛出错误
+ 密封对象会将对象成员的 `[[Configurable]]` 特性设置为 `false`
+ 冻结对象会将对象成员的 `[[Configurable]]`/`[[Writable]]` 特性设置为 `false`
+ 因为密封的对象也是不可扩展的，所以通过 `Object.isExtensible()` 也会返回 `false`
+ 因为冻结的对象也是不可扩展且是密封的，所以通过 `Object.isSealed()`/`Object.isExtensible()` 分别返回 `true` 和 `false`
:::


### 使用

+ **不可扩展的对象**
```js
const person = {
  name: 'Alice'
}

Object.preventExtensions(person)

person.age = 24 // 严格模式下会报错 TypeError
console.log(person.age) // undefined
console.log(Object.isExtensible(person)) // false
```

+ **密封的对象**
```js
const person = {
  name: 'Alice'
}

Object.seal(person)

person.age = 24
console.log(person.age) // undefined
delete person.name
console.log(person.name) // Alice
person.name = 'Anna'
console.log(person.name) // Anna
console.log(Object.isSealed(person)) // true
console.log(Object.isExtensible(person)) // false
```

+ **冻结的对象**
```js
const person = {
  name: 'Alice'
}

Object.freeze(person)

person.age = 24
console.log(person.age) // undefined
delete person.name
console.log(person.name) // Alice
person.name = 'Anna'
console.log(person.name) // Alice
console.log(Object.isFrozen(person)) // true
console.log(Object.isSealed(person)) // true
console.log(Object.isExtensible(person)) // false
```



## 创建对象的方式

### 说明

创建对象除了本文开始提及的两种方式，还有如下常用方式，每种方式的使用因场景而异：
+ **工厂模式**：代码复用，用于快捷创建对象
+ **构造函数模式**：一般不会单独使用
+ **原型模式**：一般不会单独使用
+ **组合构造函数和原型模式**：比较完美的方式
+ **动态原型模式**：完美的方式
+ **寄生构造函数模式**：适用于需要扩展内置对象行为时
+ **稳妥构造函数模式**：适用于模拟私有变量或安全的环境(不使用 `this` 和 `new`)

### 工厂模式

```js
function createPerson(name, age) {
  var obj = new Object()
  obj.name = name
  obj.age = age
  obj.sayName = function() {
    return this.name
  }

  return obj
}

var person = createPerson('Alice', 24)
console.log(person.name, person.age) // Alice 24
console.log(person.sayName()) // Alice
```

::: tip 分析
+ **原理**：使用一个函数封装创建对象的细节
+ **解决的问题**：简化了创建同类型对象的操作
+ **不足**：没有解决对象识别的问题，不知道一个对象的类型
:::


### 构造函数模式

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    return this.name
  }
}

var person = new Person('Alice', 24)
console.log(person.name, person.age) // Alice 24
console.log(person.sayName()) // Alice
```

::: tip 分析
+ **原理**：使用自定义的构造函数创建对象
+ **解决的问题**：能够用 `instanceof` 检测对象的类型
+ **不足**：若多个对象有相同的方法时，构造函数的代码会有些臃肿(重复)
:::


### 原型模式

```js
function Person(name, age) {}
Person.prototype = {
  name: 'Alice',
  age: 24,
  sayName: function () {
    return this.name
  },
}

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false, // 也可以省略，这种方式定义的 enumerable 默认值就是 false
  value: Person,
})

var person = new Person('Alice', 24)
for (var key in person) {
  console.log(key) // name age sayName
}
```

::: tip 分析
+ **原理**：使用原型对象让对象共享属性和方法
+ **解决的问题**：
  + 能够将对象实例共享的属性和方法包装在原型对象中
  + 能够动态添加原型对象的属性和方法，并且响应到实例中
+ **不足**：当共享的属性是引用类型时，任何实例的修改都会影响彼此
:::

### 组合构造函数和原型模式

```js
function Person(name, age, like) {
  this.name = name
  this.age = age
  this.like = like
}
Person.prototype.sayName = function () {
  return this.name
}

var person = new Person('Alice', 24, ['coding', 'travel'])
var person2 = new Person('Anna', 22, ['singing'])
person.like.push('reading')
person2.like.push('writing')
console.log(person.like) // [ 'coding', 'travel', 'reading' ]
console.log(person2.like) // [ 'singing', 'writing' ]
```

::: tip 分析
+ **原理**：使用构造函数模式定义实例属性，使用原型对象让对象共享属性和方法
+ **解决的问题**：具有构造函数模式和原型模式的优点，既能够设置动态的共享属性和方法，又不用担心属性的污染
+ **不足**：构造函数和原型属性的定义分开，导致看起来有些别扭
:::

### 动态原型模式

```js
function Person(name, age, like) {
  this.name = name
  this.age = age
  this.like = like
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function () {
      return this.name
    }
  }
}

var person = new Person('Alice', 24, ['coding', 'travel'])
console.log(person.sayName())
```

::: tip 分析
+ **原理**：与组合构造函数和原型模式类似，但是动态地组合了两者，看起来舒服多了
+ **解决的问题**：代码看起来舒服多了
+ **不足**：基本完美
:::

### 寄生构造函数模式

```js
function MyArray() {
  var arr = new Array()
  arr.push.apply(arr, arguments)
  arr.toPipedString = function () {
    return this.join('|')
  }

  return arr
}

var categories = new MyArray('国语', '欧美', '韩国')
console.log(categories.toPipedString()) // 国语|欧美|韩国
```

::: tip 分析
+ **原理**：使用构造函数，但是内部不引用 `this`，而是在内部使用工厂模式创建一个对象，为这个对象添加属性和方法，最后返回该对象。
+ **解决的问题**：能够在现有的对象上创建有特定功能的对象，而不用总是在对象的原型上添加属性和方法(因为这样容易发生命名冲突或修改对象的行为)。
+ **不足**：
  + 不能使用 `instanceof` 确定对象的原型，虽然看起来构造函数，但是内部创建对象的方式是工厂模式
  + 只适合于特定的情况下：对一些对象(如原生对象)进行扩充
:::

### 稳妥构造函数模式

```js
function Person(name, age) {
  var obj = new Object()
  var name = name
  var age = age
  obj.getName = function () {
    return name
  }
  obj.getAge = function () {
    return age
  }
  
  return obj
}

var person = Person('Alice', 24);
console.log(person.getName(), person.getAge()); // Alice 24
console.log(person.name, person.age); // undefined undefined
```

::: tip 分析
+ **原理**：和寄生构造函数模式类似，表面看起来是构造函数，内部不引用 `this`，而且不使用 `new` 操作符创建实例。该方式常用于模拟私有变量，即只能通过暴露的接口访问变量。
+ **解决的问题**：变量私有化(安全)，仅提供特定访问数据的接口
+ **不足**：
  + 不能使用 `instanceof` 确定对象的原型，虽然看起来构造函数，但是内部创建对象的方式是工厂模式
  + 只用于特定的情况：安全的环境(这些环境禁止使用 `this` 和 `new`)，或防止数据被其他程序改动
:::






## 实现继承的方式

### 说明

继承是面向对象编程(OOP)不可或缺的一环，`Javascript` 的继承是基于原型的，主要有以下几种方式实现继承，每种方式的使用因场景而异：
+ **原型链继承**：一般不会单独使用
+ **借用构造函数继承**：一般不会单独使用
+ **组合继承**：比较完美的方式
+ **原型式继承**：最完美的方式，**ES6 Class** 使用的就是该方式
+ **寄生继承**：用于快速从现有对象实现继承
+ **寄生组合继承**：用于快速从现有对象实现继承


### 原型链继承

```js
function Person() {
  this.name = 'Alice'
  this.like = ['coding', 'singing']
}
Person.prototype.sayName = function() {
  console.log(this.name)
}

function Student() {}

Student.prototype = new Person()

var s1 = new Student()
console.log(s1.name) // Alice
s1.sayName() // Alice
console.log(s1 instanceof Student) // true
console.log(s1 instanceof Person) // true

var s2 = new Student()
s2.like.push('travel')
console.log(s1.like) // [ 'coding', 'singing', 'travel' ]
console.log(s2.like) // [ 'coding', 'singing', 'travel' ]
```

::: tip 分析
+ **原理**：将一个类(子类)的原型对象设置为另一个类(父类)的实例
+ **解决的问题**：通过原型链实现继承，子类实例能够共享超类的属性和方法
+ **不足**：
  + 创建不同的子类实例时，不能向超类的构造函数中传递不同的参数；因为子类的原型对象在一开始就定义好了
  + 超类原型属性中为引用类型的数据会被所有实例共享
:::


### 借用构造函数继承

```js
function Person(name) {
  this.type = 'Person'
  this.name = name
}

function Student(name, age, like) {
  // 调用父类的构造函数
  Person.call(this, name)
  // 以下为子类特有的属性，应该在调用父类构造函数之后定义
  this.type = 'Student'
  this.age = age
  this.like = like
}

var s1 = new Student('Alice', 24, ['coding', 'reading'])
var s2 = new Student('Anna', 22, ['singing', 'travel'])
s1.like.push('basketball')
console.log(s1.type, s2.type) // Student Student
console.log(s1.like) // [ 'coding', 'reading', 'basketball' ]
console.log(s2.like) // [ 'singing', 'travel' ]
```

::: tip 分析
+ **原理**：通过 `call()` 或 `apply()` 在一个类(子类)的构造函数中调用另一个类(父类)的构造函数
+ **解决的问题**：
  + 子类能够向超类传递参数
  + 子类继承的引用类型的属性不会共享，因为调用构造函数生成的是不同的实例
+ **不足**：`instanceof` 不能识别子类实例继承于超类，它仅仅是调用了超类的构造函数继承了属性；所以超类的原型中定义的方法，对子类不可见(不能使用)。
:::


### 组合继承

```js
function Person(name) {
  this.name = name
  this.like = ['coding', 'travel']
}
Person.prototype.sayName = function() {
  return this.name
}

function Student(name, age) {
  Person.call(this, name) // 借用构造函数
  this.age = age
}
Student.prototype = new Person() // 设置子类的原型对象，参数在借用构造函数时会传入
Student.prototype.constructor = Student // 使 constructor 指向至父类，而不是超类
Student.prototype.sayAge = function() {
  return this.age
}

var s1 = new Student('Alice', 24)
var s2 = new Student('Anna', 22)
console.log(s1.sayName(), s1.sayAge()) // Alice, 24
console.log(s2.sayName(), s2.sayAge()) // Anna, 22
s1.like.push('reading')
console.log(s1.like) // [ 'coding', 'travel', 'basketball' ]
console.log(s2.like) // [ 'coding', 'travel' ]
console.log(s1 instanceof Student, s1 instanceof Person) // true true
console.log(s2 instanceof Student, s2 instanceof Person) // true true
```

::: tip 分析
+ **原理**：使用原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承
+ **解决的问题**：
  + 融合了原型链继承和借用构造函数继承的优点
  + 能用 `instanceof` 识别实例的子类和超类的关系
+ **不足**：调用了两次父类的构造函数，生成了多余的属性，造成性能浪费。
:::


### 原型式继承

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

var person = {
  name: 'Anonymous',
  age: 18,
  like: ['coding', 'travel'],
}

var p1 = object(person)
var p2 = object(person)
p1.name = 'Alice'
p1.age = 24
p2.name = 'Anna'
p2.age = 22
console.log(p1.name, p1.age) // Alice 24
console.log(p2.name, p2.age) // Anna 22
p1.like.push('reading')
console.log(p1.like) // [ 'coding', 'travel', 'reading' ]
console.log(p2.like) // [ 'coding', 'travel', 'reading' ]
console.log(person.like) // [ 'coding', 'travel', 'reading' ]
```

::: tip 分析
+ **原理**：借助原型的特点，由已有的对象创建新对象；ES5 新增的 `Object.create()` 方法与之类似。 
+ **解决的问题**：
  + 适用于快捷实现继承，而且由这种方式生成的对象彼此之间共享了父类的引用数据类型。
  + 如果传入 `object()` 的对象是一个构造函数的原型，就可以用 `instanceof` 判断实例和超类的关系；这时可以看作是借用原型，`object()` 内部的构造函数 `F()` 借用了传入的原型。
+ **不足**：
:::


### 寄生继承

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createObj(obj) {
  var clone = object(obj)
  // 增强实例的属性或方法
  clone.sayHi = function() {
    console.log('Hi')
  }
  return clone
}

var person = {
  name: 'Alice',
  age: 24,
  sayName: function() {
    console.log(this.name)
  }
}

var p = createObj(person)
console.log(p.age) // 24
p.sayName() // Alice
p.sayHi() // Hi
```

::: tip 分析
+ **原理**：与创建对象的工厂模式和寄生构造函数模式类似：封装一个函数，在内部使用原型式继承生成实例，增强实例后再将其返回
+ **解决的问题**：这也是一种实现继承的快捷方式，它是原型式继承的增强，看起来跟 `Object.create()` 的功能一样了(`Object.create()` 本身也能利用第二个参数增强对象)
+ **不足**：
:::


### 寄生组合继承

```js
// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
// 核心函数
function inheritPrototype(subType, superType) {
  // 传入 superType 的原型时，object() 中的构造函数 F() 将借用该原型生成实例并返回
  var prototype = object(superType.prototype)
  // 将 constructor 属性指向子类
  prototype.constructor = subType
  // 将该实例作为子类的原型
  subType.prototype = prototype
}

function Person(name) {
  this.name = name
}
Person.prototype.sayName = function() {
  console.log(this.name)
}
function Student(name, age) {
  Person.call(this, name)
  this.age = age
}

inheritPrototype(Student, Person)
Student.prototype.sayHi = function() {
  console.log('Hi')
}

var s = new Student('Alice', 24)
console.log(s.age) // 24
s.sayName() // Alice
s.sayHi() // Hi
console.log(s instanceof Student) // true
console.log(s instanceof Person) // true
console.log(s.constructor) // [Function: Student]
```

::: tip 分析
+ **原理**：通过借用构造函数来继承属性，再通过原型式继承来借用超类的原型(而不是使用原型链继承新建一个超类的实例)。
+ **解决的问题**：
  + 增强了组合继承，不用再调用两次超类的构造函数
  + 是最理想的实现继承的方式，`ES6` 中 `extends` 语法就是使用这种继承
+ **不足**：无敌
:::



## new

### 说明

+ 简单来说，`new` 用来创建一个对象的实例：
```js
function Person() {
  this.name = 'Alice'
}

const p = new Person()
console.log(p.name) // Alice
```

+ 如果没有使用 `new`，那么这仅仅是一个函数调用，返回值为 `undefined`，而且在非严格模式下污染了全局变量
```js
function Person() {
  this.name = 'Alice'
}

function foo() {
  console.log(this.name)
}

const p = Person()
console.log(p) // undefined
foo() // Alice
```

+ 也就是说构造函数只是一个普通的函数，首字母大写只是一个约定，它需要依靠 `new` 来构造类的概念
+ 只要使用 `new` 调用函数，函数中的 `this` 就会改变（指向当前函数的一个实例，并且能使用该函数原型上的属性）：
```js
function P() {
  this.sayHi()
}

P.prototype.sayHi = function() {
  console.log('Hi')
}

const p = new P() // Hi
```
+ 也就是说，`new` 操作符就是一个语法糖


::: tip 使用 new 调用函数时，返回值也要依情况而定：
+ 如果函数的返回值不是一个对象，返回 `this`
```js
// 1.返回值不是对象
function foo() {
  this.name = 'foo'
  return 1 // new 调用时将返回 this 而不是 1
}

console.log(f) // foo { name: 'foo' }
```

+ 如果函数的返回值是一个对象，返回值维持不变
```js
// 2.返回值是对象
function foo() {
  this.name = 'foo'
  return {} // new 调用时将直接返回
}

console.log(f) // {}
```
:::


### new 做了什么

Javascript 的继承是基于原型的，`new` 操作符其实做了以下几件事：
1. 创建一个空对象 p，并设置 `p.__proto__ = P.prototype`
2. 执行构造函数内的代码为该对象添加属性，并将 `this` 指向该对象
3. 若构造函数的返回值是对象则直接返回，否则返回 `this`

+ **实现一个 `new`**
```js
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw '_new: The first param must be a function'
  }
  const obj = {}
  obj.__proto__ = Constructor.prototype // 继承原型上的属性
  const ret = Person.apply(obj, args) // 执行构造函数，使用 apply() 绑定 this 为 obj
  return ret instanceof Object ? ret : obj // 若构造函数返回的不是对象则返回 obj
}

// 使用
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function() {
  console.log(this.name)
}

const p = _new(Person, 'Alice', 24)
console.log(p.name, p.age) // Alice 24
p.getName() // Alice
```

::: tip 说明：
+ 同样可以用 `Object.create()`/`setPrototypeOf()` 实现原型继承
```js

```
:::



## constructor


## instanceof

