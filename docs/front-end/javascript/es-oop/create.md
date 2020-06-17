## 简介

每种方式的使用因场景而异：
+ **Object 实例**：比较少使用
+ **字面量对象**：常用于快捷创建对象
+ **工厂模式**：常用于创建同类型的对象
+ **寄生构造函数模式**：常用于扩展内置对象行为
+ **稳妥构造函数模式**：常用于模拟私有变量或安全的环境
+ **构造函数模式**：一般不会单独使用
+ **原型模式**：一般不会单独使用
+ **组合构造函数和原型模式**：最常用的方式
+ **动态原型模式**：更常用的方式

::: tip 区别和联系：
+ 工厂模式：将对象创建封装在函数中，增强代码复用
+ 寄生构造函数模式：类似工厂模式，但使用时带上 `new` 操作符
+ 稳妥构造函数模式：类似工厂模式，但不使用 `new` 和 `this`，是一个安全的沙箱环境
+ 组合构造函数和原型模式：结合了构造函数模式和原型模式的优点
+ 动态原型模式：在组合构造函数和原型模式的基础上进一步优化
:::


## 工厂模式

```js
function createPerson(name, age) {
  const obj = new Object()
  obj.name = name
  obj.age = age
  obj.sayName = function() {
    return this.name
  }

  return obj
}

const person = createPerson('Alice', 24)
console.log(person.name, person.age) // Alice 24
console.log(person.sayName()) // Alice
```

::: tip 分析
+ **原理**：使用函数封装创建对象的细节
+ **解决的问题**：简化创建同类型对象的操作
+ **不足**：不能使用 `instanceof` 确定对象的类型
:::


## 寄生构造函数模式

```js
function MyArray() {
  const arr = new Array()
  arr.push.apply(arr, arguments)
  arr.toPipedString = function () {
    return this.join('|')
  }

  return arr
}

const categories = new MyArray('国语', '欧美', '韩国')
console.log(categories.toPipedString()) // 国语|欧美|韩国
```

::: tip 分析
+ **原理**：在工厂模式的基础上，使用时带上 `new` 操作符
+ **解决的问题**：在现有对象的基础上创建有特定功能的对象，而不用总是在对象的原型上添加属性和方法（这样容易发生命名冲突或修改对象的行为）
+ **不足**：不能使用 `instanceof` 确定对象的类型
:::


## 稳妥构造函数模式

```js
function Person(name, age) {
  const obj = new Object()
  let name = name
  let age = age
  obj.getName = function () {
    return name
  }
  obj.getAge = function () {
    return age
  }
  
  return obj
}

const person = Person('Alice', 24)
console.log(person.getName(), person.getAge()) // Alice 24
console.log(person.name, person.age) // undefined undefined
```

::: tip 分析
+ **原理**：在工厂模式的基础上，将内部变量私有化（不使用 `this` 和 `new`）
+ **解决的问题**：变量私有化，某些场景下仅提供特定访问数据的接口，操作更安全
+ **不足**：不能使用 `instanceof` 确定对象的类型
:::


## 构造函数模式

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    return this.name
  }
}

const person = new Person('Alice', 24)
console.log(person.name, person.age) // Alice 24
console.log(person.sayName()) // Alice
```

::: tip 分析
+ **原理**：使用构造函数创建对象
+ **解决的问题**：能够用 `instanceof` 检测对象的类型
+ **不足**：对象的属性和方法不能共享，造成代码性重复且浪费内存
:::


## 原型模式

```js
function Person() {}
Person.prototype = {
  name: 'Alice',
  age: 24,
  sayName: function () {
    return this.name
  },
}

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false, // 也可以省略，因为默认值就是 false
  value: Person,
})

const person = new Person()
for (const key in person) {
  console.log(key) // name age sayName
}
```

::: tip 分析
+ **原理**：扩展原型对象
+ **解决的问题**：对象实例能共享属性和方法
+ **不足**：当共享的属性是引用类型时，任何实例的修改都会影响彼此
:::


## 组合构造函数和原型模式

```js
function Person(name, age, like) {
  this.name = name
  this.age = age
  this.like = like
}
Person.prototype.sayName = function () {
  return this.name
}

const p1 = new Person('Alice', 24, ['coding', 'travel'])
const p2 = new Person('Anna', 22, ['singing'])
p1.like.push('reading')
p2.like.push('writing')
console.log(p1.like) // [ 'coding', 'travel', 'reading' ]
console.log(p2.like) // [ 'singing', 'writing' ]
```

::: tip 分析
+ **原理**：使用构造函数模式定义实例属性，使用原型对象让对象共享属性和方法
+ **解决的问题**：具有构造函数模式和原型模式的优点，既能够共享属性和方法又不会污染属性
+ **不足**：构造函数和原型属性的定义分开，造成逻辑分离
:::


## 动态原型模式

```js
function Person(name, age, like) {
  this.name = name
  this.age = age
  this.like = like
  // 只有首次调用构造函数时会执行
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function () {
      return this.name
    }
  }
}

const person = new Person('Alice', 24, ['coding', 'travel'])
console.log(person.sayName()) // Alice
```

::: tip 分析
+ **原理**：将原型属性的定义移入构造函数中，并动态添加
+ **解决的问题**：整合了代码逻辑
+ **不足**：基本完美
:::