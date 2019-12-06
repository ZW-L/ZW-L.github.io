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



## 创建对象的方式 & 优缺点 & 适用场景

**几种创建对象的方式：**
+ `对象字面量`
+ `Object 构造函数`
+ `工厂模式`：使用一个函数封装创建对象的细节
  + 优点：简化创建同类型对象的操作
  + 缺点：不能使用 `instanceof` 检测对象的类型
+ `构造函数模式`：使用自定义的构造函数创建对象
  + 优点：能用 `instanceof` 检测对象的类型
  + 缺点：创建一个实例时，会重复创建相同功能的属性和方法
+ `原型模式`：使用原型对象让实例共享属性和方法
  + 优点：创建实例时不再重复创建相同功能的属性和方法
  + 缺点：当共享的属性是引用类型时，任何实例的修改都会影响彼此
+ `组合构造函数和原型模式`：使用构造函数模式定义实例属性，使用原型对象让实例共享属性和方法
  + 优点：既能够设置动态的共享属性和方法，又不用担心属性的污染
  + 缺点：构造函数和原型属性的定义分开，看起来有些别扭
+ `动态原型模式`：组合构造函数和原型模式的动态版本
  + 优点：代码看起来舒服多了
  + 缺点：基本完美
+ `寄生构造函数模式`：使用构造函数，但内部不引用 `this`，而是使用工厂模式创建一个对象，添加属性和方法后返回该对象
  + 优点：能够在现有的对象上创建有特定功能的对象(直接在对象的原型上添加容易发生命名冲突或修改对象的行为)
  + 缺点：不能使用 `instanceof` 检测对象的类型
+ `稳妥构造函数模式`：类似寄生构造函数模式，表面看起来是构造函数，但内部不引用 `this`，而且不使用 `new` 操作符创建实例
  + 优点：变量私有化(安全)，仅提供特定访问数据的接口
  + 缺点：不能使用 `instanceof` 检测对象的类型

**适用场景：**
+ `对象字面量`、`Object 构造函数`、`工厂模式`可快捷创建对象(对对象类型无要求时)
+ `构造函数模式`和`原型模式`单独使用的情况较少
+ `组合构造函数和原型模式`和`动态原型模式`都比较完美适用大部分场合
+ `寄生构造函数模式`适用于需要扩展内置对象行为时
+ `稳妥构造函数模式`适用于模拟私有变量或安全的环境(不使用 `this` 和 `new`)

**实现：**
```js
// 对象字面量
const obj = {
  name: 'Alice',
  age: 24
}

// Object 构造函数
const obj = new Object()
obj.name = 'Alice'
obj.age = 24

// 工厂模式
function createPerson(name, age) {
  var obj = new Object()
  obj.name = name
  obj.age = age
  obj.sayName = function() {
    return this.name
  }

  return obj
}

// 构造函数模式
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    return this.name
  }
}

// 原型模式
function Person(name, age) {}
Person.prototype = {
  name: 'Alice',
  age: 24,
  sayName: function () {
    return this.name
  },
}

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false, // 禁止 constructor 被枚举
  value: Person,
})

// 组合构造函数和原型模式
function Person(name, age, like) {
  this.name = name
  this.age = age
  this.like = like
}
Person.prototype.sayName = function () {
  return this.name
}

// 动态原型模式
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

// 寄生构造函数模式
function MyArray() {
  var arr = new Array()
  arr.push.apply(arr, arguments)
  arr.toPipedString = function () {
    return this.join('|')
  }

  return arr
}

// 稳妥构造函数模式
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
```



## 实现继承的方式 & 优缺点

**几种实现继承的方式：**
+ `原型链继承`：将一个类(父类)的实例设置为另一个类(子类)的原型对象
  + 优点：子类实例能够共享超类原型上的属性和方法
  + 缺点：不能向超类的构造函数中传递不同的参数，超类原型属性中引用类型的数据会被所有实例共享
+ `借用构造函数继承`：通过 `call()` 或 `apply()` 在子类的构造函数中调用父类的构造函数
  + 优点：子类能够向超类传递参数，且子类继承的引用类型的属性不会共享(生成的是不同的实例)
  + 缺点：`instanceof` 不能识别子类实例继承于超类
+ `组合继承`：通过原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承
  + 优点：拥有原型链继承和借用构造函数继承的优点
  + 缺点：调用两次父类的构造函数生成多余的属性，造成性能浪费
+ `原型式继承`：借助原型的特点，由已有的对象创建新对象，类似 `Object.create()`
  + 优点：快速从已有的对象建立继承
  + 缺点：
+ `寄生式继承`：内部使用原型式继承生成实例，增强实例后将其返回，更接近 `Object.create()`
  + 优点：原型式继承的增强
  + 缺点：
+ `寄生组合继承`：通过借用构造函数来继承属性，再通过原型式继承来借用超类的原型
  + 优点：增强组合继承，不再调用两次超类的构造函数；`ES6 extends` 语法就是使用这种继承
  + 缺点：无敌

**适用场景：**
+ `原型链继承`和`借用构造函数继承`一般不会单独使用
+ `组合继承`已经比较完美了，但是`寄生组合继承`是更加通用的方法
+ `原型式继承`或`寄生式继承`用于快速从现有对象实现继承

**实现：**
```js
// 原型链继承
function Person() {}
function Student() {}
Student.prototype = new Person();

// 借用构造函数继承
function Person(name) {
  this.name = name
}
function Student(name, age, like) {
  Person.call(this, name) // 调用父类的构造函数
  this.age = age // 子类特有的属性，应该在调用父类构造函数之后定义
}

// 组合继承
function Person(name) {
  this.name = name
}
function Student(name, age) {
  Person.call(this, name) // 2.调用父类的构造函数
  this.age = age
}
Student.prototype = new Person() // 1.设置子类的原型对象
Student.prototype.constructor = Student // 修改 constructor 指向

// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

// 寄生式继承
function createObj(obj) {
  var clone = object(obj) // 原型式继承
  clone.sayHi = function() { // 增强实例的方法
    console.log('Hi')
  }

  return clone
}

// 寄生组合继承
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype) // 借用 superType 的原型生成实例
  prototype.constructor = subType // 将 constructor 属性指向子类
  subType.prototype = prototype // 将该实例作为子类的原型
}
function Person(name) {
  this.name = name
}
function Student(name, age) {
  Person.call(this, name) // 1.借用构造函数
  this.age = age
}
inheritPrototype(Student, Person) // 调用
```



## class & extends 的原理

**class：** 实际上是构造函数的语法糖
+ `constructor` 构造方法内定义实例的属性
+ `static` 定义的方法会添加到构造函数的属性上
+ 其他方法会被添加到构造函数的原型对象上

**extends：** 实际上是寄生组合继承的语法糖
+ 使用一个函数指定继承关系
+ 使用一个函数调用父类构造函数



## 介绍一种应用原型继承的开源项目




## instanceof 实现原理 & 实现 instanceof

**instanceof 的底层实现原理：**
1. `instanceof` 需要两个操作数：左操作数(L)和右操作数(R)，查找的是 R 的原型对象是否在 L 的原型链上
2. 若 L 不是一个 `Object` 类型，直接返回 `false`
3. 取得 L 的实例原型对象(`__proto__`)，比较是否等于 R 的原型对象，若相等则返回 `true`；若不相等，继续取 L 的上层实例原型对象
4. 若最后 L 到达原型链最上层(`null`)，仍然没有等于 R 的原型对象，说明 R 的原型对象不在 L 的原型链上，返回 `false` 

**实现 instanceof：**
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



## new 做了什么 & 实现 new

**new 做了什么：**
1. 创建一个对象
2. 将构造函数的作用域赋给新对象，因此 this 指向该新对象
3. 执行构造函数中的代码为对象添加属性
4. 返回新对象

**实现 new：**
```js
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw '_new function: The first param must be a function'
  }
  const obj = {}
  obj.__proto__ = Constructor.prototype // 可以用 Object.create() 或 setPrototypeOf()
  const ret = Person.apply(obj, args) // 执行构造函数，并绑定 this 为 obj
  return ret instanceof Object ? ret : obj // 若构造函数返回的不是对象则直接返回 obj
}
```