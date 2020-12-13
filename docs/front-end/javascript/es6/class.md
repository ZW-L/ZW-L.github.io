## 介绍

+ 提供了一系列的语法糖，看起来更像 OOP 的方式

### class

+ `class`：声明一个类，只是一个语法糖，和用 `function` 定义的构造函数一样，只不过 `class` 将原型属性的定义也放进了其内部
```js
class A {
  sayHi () {
    console.log('Hi')
  }
}

// 等同于
function A () {}
A.prototype.sayHi = function () {
  console.log('Hi')
}
```

+ 两种写法的区别是，class 定义的原型方法是不可枚举的
```js
// class 语法
console.log(Object.keys(A.prototype)) // []

// function 语法
console.log(Object.keys(A.prototype)) // ['sayHi']
```

+ `class` 支持表达式
```js
const MyClass = class Me {
  // 只有 class 内部才能访问 Me
  getClassName() {
    return Me.name
  }
}

// 创建示例时，要使用 MyClass
const my = new MyClass()

// 当不需要使用 Me 时，可以省略
const MyClass = class {}

// “立即执行类”
let person = new class {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}('Alice')

person.sayName()
```



### constructor()

+ 构造方法，也是一个语法糖，相当于在原型上定义了一个 `constructor` 方法，在使用 `new` 操作符时调用该方法
+ 当没有指定该方法时，JS 引擎会默认添加一个空的 `constructor()` 方法
```js
class Point {}

// 等同于
class Point {
  constructor() {}
}
```
+ 该方法调用后返回 `this`，也可以控制返回另一个对象（除非你真的需要这样做）
+ 另一个特点是，它也限制了类的调用必须使用 `new`，否则会报错（ES5 不会）
+ `new.target` 属性能访问创建实例时调用的构造函数，若实例没有使用 `new` 关键字创建，其值是 `undefined`，这有利于追溯实例的创建方式；一个比较好的应用是，创建一个不能被实例化，必须被继承的类：
```js
class Shape {
  constructor() {
    // 尝试实例化时将报错
    if (new.target === Shape) {
      throw new Error('本类不能实例化')
    }
  }
}

// ES5 的实现方式
```


### static

+ `static` 目前只能声明静态方法，不能声明静态属性
+ 类的静态方法(即 ES5 中构造函数的方法)不能被继承(不是在原型上声明)，只能通过类名调用
```js
class A {
  static sayHi () {
    console.log('Hi')
  }
}

// 等同于
function A () {}
A.sayHi = function () {
  console.log('Hi')
}
```

+ 子类通过 `super` 对象调用
```js
class A {
  static sayHi () {
    console.log('Hi')
  }
}

class B extends A {
  static sayHi () {
    super.sayHi()
  }
}

B.sayHi()
```



+ `extends`：声明类的继承
+ `super()`：调用父类的构造函数


### 其他

+ 类内部默认使用严格模式（实际上 ES6 把整个语言升级到了严格模式）
+ 类没有变量提升（ES5 有）
+ `getter` / `setter`：和 ES5 一样，对应属性描述符上的 `[[getter]]` / `[[setter]]`
+ 属性名可以使用属性表达式
```js
let methodName = 'getArea'

class Square {
  constructor(length) {
    // ...
  }

  [methodName] () {
    // ...
  }
}
```




## 继承

+ 使用 `class` 语法实现继承时，子类必须要在 `constructor()` 函数内调用父类的构造函数(`super()`)，而且在这之前都不能访问 `this`
+ `super` 关键字
  + 调用变量时，在普通方法中指向父类的原型，在静态方法中指向父类
  + 调用方法时，在普通方法中指向父类的原型，在静态方法中指向父类，但是 `this` 绑定的是子类