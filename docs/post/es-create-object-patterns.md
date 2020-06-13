## 简介

&emsp;&emsp;使用 Object 构造函数和字面量对象的方式能够快捷地创建对象，但是在大量使用面向对象的场景有一个缺点：会产生大量重复的代码。此外，有很多方式能够用于创建对象，每种方式的使用因场景而异。

**几种创建对象的方式：**

+ 工厂模式
+ 构造函数模式
+ 原型模式
+ 组合构造函数和原型模式
+ 动态原型模式
+ 寄生构造函数模式
+ 稳妥构造函数模式

## 工厂模式

**原理：** 使用一个函数封装创建对象的细节

**实现：**

```js{12}
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

**解决的问题：** 

+ 简化了创建同类型对象的操作

**不足：** 

+ 没有解决对象识别的问题，不知道一个对象的类型

## 构造函数模式

**原理：** 使用自定义的构造函数创建对象

**实现：**

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    return this.name;
  }
}

var person = new Person('Alice', 24);
console.log(person.name, person.age); // Alice 24
console.log(person.sayName()); // Alice
```

**解决的问题：** 

+ 能够用 `instanceof` 检测对象的类型

**不足：** 

+ 若多个对象有相同的方法时，构造函数的代码会有些臃肿(重复)

## 原型模式

**原理：** 使用原型对象让对象共享属性和方法

**实现：**

```js
function Person(name, age) {}
Person.prototype.name = 'Alice';
Person.prototype.age = 24;
Person.prototype.sayName = function() {
  return this.name;
}

var person = new Person();
console.log(person.name, person.age); // Alice 24
console.log(person.sayName()); // Alice
```

&emsp;&emsp;还可以快捷地设置对象的原型对象，但是会导致对象实例的 `constructor` 属性指向 `Object`。解决方法是显式地声明原型对象的 `constructor` 属性：

```js
function Person(name, age) {}
Person.prototype = {
  constructor: Person, // 不设置这一行会打印 [Function: Object]
  name: 'Alice',
  age: 24,
  sayName: function () {
    return this.name;
  },
};

var person = new Person('Alice', 24);
console.log(person.constructor); // [Function: Person]
```

&emsp;&emsp;这样快捷地设置对象的原型对象，还会出现一个问题：`constructor` 的 `[[enumerable]]` 属性会变为 `true`，既可以被 `for...in` 枚举：

```js
function Person(name, age) {}
Person.prototype = {
  name: 'Alice',
  age: 24,
  sayName: function () {
    return this.name;
  },
};

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false, // 也可以省略，这种方式定义的 enumerable 默认值就是 false
  value: Person,
});

var person = new Person('Alice', 24);
for (var key in person) {
  console.log(key); // name age sayName
}
```

&emsp;&emsp;虽然在原型对象上添加属性和方法是动态的，但是若通过赋值修改原型对象的指向时，这些影响不会发生至在这之前创建的对象实例，它们仍保持之前的原型对象的引用：

```js
function Person(name, age) {}

var person = new Person();

Person.prototype = {
  name: 'Alice',
  age: 24,
  sayName: function () {
    return this.name;
  },
};
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person,
});

console.log(person.name); // undefined
var person2 = new Person();
console.log(person2.name); // Alice
```

**解决的问题：** 

+ 能够将对象实例共享的属性和方法包装在原型对象中
+ 能够动态添加原型对象的属性和方法，并且响应到实例中

**不足：** 

+ 当共享的属性是引用类型时，任何实例的修改都会影响彼此

```js
function Person(name, age) {}
Person.prototype = {
  name: 'Alice',
  age: 24,
  like: ['coding, travel, reading'],
};

var person = new Person();
var person2 = new Person();
person.like.push('singing');
console.log(person2.like); // [ 'coding, travel, reading', 'singing' ]
```

## 组合构造函数和原型模式


**原理：** 使用构造函数模式定义实例属性，使用原型对象让对象共享属性和方法

**实现：** 
```js
function Person(name, age, like) {
  this.name = name;
  this.age = age;
  this.like = like;
}
Person.prototype.sayName = function () {
  return this.name;
}

var person = new Person('Alice', 24, ['coding', 'travel']);
var person2 = new Person('Anna', 22, ['singing']);
person.like.push('reading');
person2.like.push('writing');
console.log(person.like); // [ 'coding', 'travel', 'reading' ]
console.log(person2.like); // [ 'singing', 'writing' ]
```

**解决的问题：** 

+ 具有构造函数模式和原型模式的优点，既能够设置动态的共享属性和方法，又不用担心属性的污染

**不足：** 

+ 构造函数和原型属性的定义分开，导致看起来有些别扭

## 动态原型模式

**原理：** 与组合构造函数和原型模式类似，但是动态地组合了两者，看起来舒服多了

**实现：**

```js
function Person(name, age, like) {
  this.name = name;
  this.age = age;
  this.like = like;
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function () {
      return this.name;
    }
  }
}

var person = new Person('Alice', 24, ['coding', 'travel']);
console.log(person.sayName());
```

**解决的问题：** 代码看起来舒服多了

**不足：** 基本完美

## 寄生构造函数模式

**原理：** 使用构造函数，但是内部不引用 `this`，而是在内部使用工厂模式创建一个对象，为这个对象添加属性和方法，最后返回该对象。

**实现：** 

```js
function MyArray() {
  var arr = new Array();
  arr.push.apply(arr, arguments);
  arr.toPipedString = function () {
    return this.join('|');
  };

  return arr;
}

var categories = new MyArray('国语', '欧美', '韩国');
console.log(categories.toPipedString()); // 国语|欧美|韩国
```

**解决的问题：** 

+ 能够在现有的对象上创建有特定功能的对象，而不用总是在对象的原型上添加属性和方法(因为这样容易发生命名冲突或修改对象的行为)。

**不足：** 

+ 不能使用 `instanceof` 确定对象的原型，虽然看起来构造函数，但是内部创建对象的方式是工厂模式
+ 只适合于特定的情况下：对一些对象(如原生对象)进行扩充

## 稳妥构造函数模式

**原理：** 和寄生构造函数模式类似，表面看起来是构造函数，内部不引用 `this`，而且不使用 `new` 操作符创建实例。该方式常用于模拟私有变量，即只能通过暴露的接口访问变量。

**实现：**

```js
function Person(name, age) {
  var obj = new Object();
  var name = name;
  var age = age;
  obj.getName = function () {
    return name;
  };
  obj.getAge = function () {
    return age;
  };
  
  return obj;
}

var person = Person('Alice', 24);
console.log(person.getName(), person.getAge()); // Alice 24
console.log(person.name, person.age); // undefined undefined
```

**解决的问题：** 

+ 变量私有化(安全)，仅提供特定访问数据的接口

**不足：** 

+ 不能使用 `instanceof` 确定对象的原型，虽然看起来构造函数，但是内部创建对象的方式是工厂模式
+ 只用于特定的情况：安全的环境(这些环境禁止使用 `this` 和 `new`)，或防止数据被其他程序改动