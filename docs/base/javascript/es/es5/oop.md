## 对象概述

&emsp;&emsp;对象是一个无序的集合，它包含的属性可以是基本值、对象、函数等。可以通过如下简单的方式声明和设置对象：

### 创建一个 Object 的实例

```js
var obj = new Object();
obj.name = 'Alice';
console.log(obj.name); // 'Alice'
```

### 使用字面量对象

```js
var obj = {
  name: 'Alice',
};
console.log(obj.name); // 'Alice'
```



## 属性描述符

&emsp;&emsp;还可以使用属性描述符的形式添加属性或修改属性的行为；实际上动态添加的属性默认就是使用了数据描述符的形式，而且将该属性的 `[[configurable]]`、`[[enumerable]]` 和 `[[writable]]` 描述符都定义为 `true`。

&emsp;&emsp;使用 `Object.defineProperty()` 或 `Object.defineProperties()` 方法可以扩展或修改对象的属性(或行为)，它们都是基于属性描述符来使用的。属性描述符有两种主要形式：**数据描述符** 和 **存储描述符**。

&emsp;&emsp;需要注意的是： **对象的每个属性只能使用其中一种属性描述符来定义，不能同时使用两者。**

**数据描述符：** 包含四个属性

+ `[[configurable]]`：表示对象的属性是否可以被 `delete` 删除
+ `[[enumerable]]`：指示属性是否能被 `for...in` 枚举
+ `[[writable]]`：指示属性的值是否能被修改
+ `[[value]]`：属性的值
+ 需要注意的是，使用对象实例或字面量对象的方法创建的属性，它的 `[[configurable]]`、`[[enumerable]]` 和 `[[writable]]` 描述符默认为 `true`；但是在 `defineProperty()` 方法中，若无显示设置，这三个描述符默认为 `false`

```js
var obj = {};
Object.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'Alice',
});

console.log(obj.name); // 'Alice'
obj.name = 'Anna';
console.log(obj.name); // 'Anna'
for (let key in obj) {
  console.log(key); // 'name'
}
```

**存储描述符：** 同样包含四个属性

+ `[[configurable]]`：表示对象的属性是否可以被 `delete` 删除
+ `[[enumerable]]`：指示属性是否能被 `for...in` 枚举
+ `[[get]]`：读取属性时调用的函数；默认为 `undefined`
+ `[[set]]`：写入属性时调用的函数；默认为 `undefined`
+ 不一定要同时指定 `getter` 和 `setter`，但是没有定义 `getter` 时，读取的属性是 `undefined`(严格模式下会报错)；没有定义 `setter` 时，写入操作会被忽略(严格模式下会报错)

```js
var obj = {
  _name: 'Alice',
};
Object.defineProperty(obj, 'name', {
  get: function() {
    return this._name;
  },
  set: function(newVal) {
    this._name = newVal;
  },
})

console.log(obj.name); // 'Alice'
obj.name = 'Anna';
delete obj.name;
console.log(obj.name);  // 'Anna'
for (let key in obj) {
  console.log(key); // '_name'
}
```

**获取属性描述符：**

&emsp;&emsp;使用 `Object.getOwnPropertyDescriptor()` 方法能获取对象的某个属性的描述符：

```js
var obj = {
  _name: 'Alice',
};
Object.defineProperty(obj, 'name', {
  get: function() {
    return this._name;
  },
  set: function(newVal) {
    this._name = newVal;
  },
})

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
/* 
{ get: [Function: get],
  set: [Function: set],
  enumerable: false,
  configurable: false } 
*/
```

## 创建对象的方式

&emsp;&emsp;使用 Object 构造函数和字面量对象的方式能够快捷地创建对象，但是在大量使用面向对象的场景有一个缺点：会产生大量重复的代码。此外，有很多方式能够用于创建对象，每种方式的使用因场景而异。

[几种创建对象的方式：](/post/es-create-object-patterns)

+ 工厂模式
+ 构造函数模式
+ 原型模式
+ 组合构造函数和原型模式
+ 动态原型模式
+ 寄生构造函数模式
+ 稳妥构造函数模式


## 实现继承的方式

[几种实现继承的方式：](/post/es-implement-extend-patterns)

+ 原型链继承
+ 借用构造函数继承
+ 组合继承
+ 原型式继承
+ 寄生继承
+ 寄生组合继承


## 防篡改对象

&emsp;&emsp;一旦把对象定义为防篡改，就无法撤销了

**几种防篡改对象；**

+ 不可扩展的对象
+ 密封的对象
+ 冻结的对象


### 不可扩展的对象

&emsp;&emsp;默认情况下，对象是可扩展的，可以动态添加属性和方法。此外：

+ 使用 `Object.preventExtensions()` 方法可以防止对象扩展，不能再给对象添加属性和方法
+ 使用 `Object.isExtensible()` 方法可以确定对象是否可扩展

```js
var person = {
  name: 'Alice'
};

Object.preventExtensions(person);

person.age = 24;
console.log(person.age); // undefined
console.log(Object.isExtensible(person)); // false
```

&emsp;&emsp;设置对象不可扩展后，非严格模式下会忽略给对象添加属性的行为，在严格模式下会抛出错误。另外，虽然对象不可扩展，但是仍可以删除和修改已有属性。

### 密封的对象

&emsp;&emsp;密封对象后，对象不可扩展，而且已有成员的 [[Configurable]] 特性被设置为 false，意味着也不能删除属性和方法；但是，属性值还是可以修改的。此外：

+ 使用 `Object.seal()` 方法密封一个对象
+ 使用 `Object.isSealed()` 方法判断对象是否被密封

```js
var person = {
  name: 'Alice'
};

Object.seal(person);

person.age = 24;
console.log(person.age); // undefined
delete person.name;
console.log(person.name); // Alice
person.name = 'Anna';
console.log(person.name); // Anna
console.log(Object.isSealed(person)); // true
```

&emsp;&emsp;同样，设置对象不可扩展后，非严格模式下会忽略给对象添加属性的行为，在严格模式下会抛出错误。


### 冻结的对象

&emsp;&emsp;冻结的对象对象既不可扩展，又是密封的，而且对象的 `[[Writable]]` 特性被设置为 `false`，即对象也不可写；但是，如果定义了 `[[Set]]` 函数，访问器属性仍然是可写的。此外：

+ 使用 `Object.freeze()` 方法冻结对象
+ 使用 `Object.isFrozen()` 方法判断对象是否被冻结

```js
var person = {
  name: 'Alice'
};

Object.freeze(person);

person.age = 24;
console.log(person.age); // undefined
delete person.name;
console.log(person.name); // Alice
person.name = 'Anna';
console.log(person.name); // Alice
console.log(Object.isFrozen(person)); // true
console.log(Object.isSealed(person)); // true
console.log(Object.isExtensible(person)); // false
```

&emsp;&emsp;因为冻结的对象不可扩展且是密封的，所以 `Object.isSealed()` 和 `Object.isExtensible()` 分别返回 `true` 和 `false`。