## 简介

**几种实现继承的方式：**

+ 原型链继承
+ 借用构造函数继承
+ 组合继承
+ 原型式继承
+ 寄生继承
+ 寄生组合继承


## 原型链继承

**原理：** 将一个类(子类)的原型对象设置为另一个类(父类)的实例

**实现：**

```js
function Person() {
  this.name = 'Alice';
  this.like = ['coding', 'singing'];
}
Person.prototype.sayName = function() {
  console.log(this.name);
}

function Student() {}

Student.prototype = new Person();

var s1 = new Student();
console.log(s1.name); // Alice
s1.sayName(); // Alice
console.log(s1 instanceof Student); // true
console.log(s1 instanceof Person); // true

var s2 = new Student();
s2.like.push('travel');
console.log(s1.like); // [ 'coding', 'singing', 'travel' ]
console.log(s2.like); // [ 'coding', 'singing', 'travel' ]
```

**解决的问题：** 

+ 通过原型链实现继承，子类实例能够共享超类的属性和方法

**不足：** 

+ 创建不同的子类实例时，不能向超类的构造函数中传递不同的参数；因为子类的原型对象在一开始就定义好了
+ 超类原型属性中为引用类型的数据会被所有实例共享

```js
function Animal() {
  this.type = 'Animal';
  this.colors = ['white', 'black', 'orange'];
}
function Dog() {}

Dog.prototype = new Animal();

var dog = new Dog();
var dog2 = new Dog();
dog.colors.push('yellow');
console.log(dog2.colors); // [ 'white', 'black', 'orange', 'yellow' ]
```


## 借用构造函数继承

**原理：** 通过 `call()` 或 `apply()` 在一个类(子类)的构造函数中调用另一个类(父类)的构造函数

**实现：** 

```js
function Person(name) {
  this.type = 'Person';
  this.name = name;
}

function Student(name, age, like) {
  // 调用父类的构造函数
  Person.call(this, name);
  // 以下为子类特有的属性，应该在调用父类构造函数之后定义
  this.type = 'Student';
  this.age = age;
  this.like = like;
}

var s1 = new Student('Alice', 24, ['coding', 'reading']);
var s2 = new Student('Anna', 22, ['singing', 'travel']);
s1.like.push('basketball');
console.log(s1.type, s2.type); // Student Student
console.log(s1.like); // [ 'coding', 'reading', 'basketball' ]
console.log(s2.like); // [ 'singing', 'travel' ]
```

**解决的问题：** 

+ 子类能够向超类传递参数
+ 子类继承的引用类型的属性不会共享，因为调用构造函数生成的是不同的实例

**不足：** 

+ `instanceof` 不能识别子类实例继承于超类，它仅仅是调用了超类的构造函数继承了属性；所以超类的原型中定义的方法，对子类不可见(不能使用)。


## 组合继承

**原理：** 使用原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承

**实现：** 

```js
function Person(name) {
  this.name = name;
  this.like = ['coding', 'travel'];
}
Person.prototype.sayName = function() {
  return this.name;
};

function Student(name, age) {
  Person.call(this, name); // 借用构造函数
  this.age = age;
}
Student.prototype = new Person(); // 设置子类的原型对象，不用传入参数，参数在借用构造函数时会传入
Student.prototype.constructor = Student; // 使 constructor 指向至父类，而不是超类
Student.prototype.sayAge = function() {
  return this.age;
};


var s1 = new Student('Alice', 24);
var s2 = new Student('Anna', 22);
console.log(s1.sayName(), s1.sayAge()); // Alice, 24
console.log(s2.sayName(), s2.sayAge()); // Anna, 22
s1.like.push('reading');
console.log(s1.like); // [ 'coding', 'travel', 'basketball' ]
console.log(s2.like); // [ 'coding', 'travel' ]
console.log(s1 instanceof Student, s1 instanceof Person); // true true
console.log(s2 instanceof Student, s2 instanceof Person); // true true
```

**解决的问题：** 

+ 融合了原型链继承和借用构造函数继承的优点
+ 能用 `instanceof` 识别实例的子类和超类的关系

**不足：** 

+ 调用了两次父类的构造函数，生成了多余的属性，造成性能浪费。


## 原型式继承

**原理：** 借助原型的特点，由已有的对象创建新对象；ES5 新增的 `Object.create()` 方法与之类似。 

**实现：**

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var person = {
  name: 'Anonymous',
  age: 18,
  like: ['coding', 'travel'],
};

var p1 = object(person);
var p2 = object(person);
p1.name = 'Alice';
p1.age = 24;
p2.name = 'Anna';
p2.age = 22;
console.log(p1.name, p1.age); // Alice 24
console.log(p2.name, p2.age); // Anna 22
p1.like.push('reading');
console.log(p1.like); // [ 'coding', 'travel', 'reading' ]
console.log(p2.like); // [ 'coding', 'travel', 'reading' ]
console.log(person.like); // [ 'coding', 'travel', 'reading' ]
```

**说明：** 

+ 适用于快捷实现继承，而且由这种方式生成的对象彼此之间共享了父类的引用数据类型。
+ 如果传入 `object()` 的对象是一个构造函数的原型，就可以用 `instanceof` 判断实例和超类的关系；这时可以看作是借用原型，`object()` 内部的构造函数 `F()` 借用了传入的原型。



## 寄生式继承

**原理：** 与创建对象的工厂模式和寄生构造函数模式类似：封装一个函数，在内部使用原型式继承生成实例，增强实例后再将其返回。

**实现：** 

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function createObj(obj) {
  var clone = object(obj);
  // 增强实例的属性或方法
  clone.sayHi = function() {
    console.log('Hi');
  };
  return clone;
}

var person = {
  name: 'Alice',
  age: 24,
  sayName: function() {
    console.log(this.name);
  }
};

var p = createObj(person);
console.log(p.age); // 24
p.sayName(); // Alice
p.sayHi(); // Hi
```

**说明：** 

+ 这也是一种实现继承的快捷方式，它是原型式继承的增强，看起来跟 `Object.create()` 的功能一样了(`Object.create()` 本身也能利用第二个参数增强对象)

## 寄生组合继承

**原理：** 通过借用构造函数来继承属性，再通过原型式继承来借用超类的原型(而不是使用原型链继承新建一个超类的实例)。

**实现：** 

```js
// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
// 核心函数
function inheritPrototype(subType, superType) {
  // 传入 superType 的原型时，object() 中的构造函数 F() 将借用该原型生成实例并返回
  var prototype = object(superType.prototype);
  // 将 constructor 属性指向子类
  prototype.constructor = subType;
  // 将该实例作为子类的原型
  subType.prototype = prototype;
}

function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(this.name);
};
function Student(name, age) {
  Person.call(this, name);
  this.age = age;
}

inheritPrototype(Student, Person);
Student.prototype.sayHi = function() {
  console.log('Hi');
};

var s = new Student('Alice', 24);
console.log(s.age); // 24
s.sayName(); // Alice
s.sayHi(); // Hi
console.log(s instanceof Student); // true
console.log(s instanceof Person); // true
console.log(s.constructor); // [Function: Student]
```

**说明：** 

+ 增强了组合继承，不用再调用两次超类的构造函数
+ 是最理想的实现继承的方式，`ES6` 中 `extends` 语法就是使用这种继承