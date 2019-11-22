## 原型和原型链

### 概念

&emsp;&emsp;javascript 中的继承是基于原型的，先了解一些概念：

+ **原型：** 即原型对象，它是一个对象，保存了可被类实例或者子类实例访问的属性。其中还包含一个 `constructor` 属性，指向于类构造函数，即 `A.prototype.constructor === A`；和一个 `__proto__` 属性，指向上一层的原型。

+ **原型链：** 基于原型继承的子类和超类之间的一种关系，可以理解为 `__proto__` 属性的指向，如果 B 继承自 A，则 `B.__proto__ === A.prototype`。

+ `instanceof`：检测构造函数的原型(`prototype`)是否出现在某个实例对象的原型链上。如果 `B.__proto__ === A.prototype`，那么 `B instanceof A` 会返回 `true`。

+ `isPrototypeOf()`：检测一个对象是否存在于另一个对象的原型链上，其实和 `instanceof` 操作符的效果一样，只是使用方式不一样。如果 `B.prototype.__proto__ === A.prototype`，那么 `A.prototype.isPrototypeOf(B.prototype)` 会返回 `true`。

&emsp;&emsp;为了简便，以下都使用 `instanceof` 操作符进行判断。

### 原型链图

&emsp;&emsp;直接从原型链图来看原型和原型链之间的关系：

![原型链图](./imgs/prototype_01.png)

**发现：**
1. 每个构造函数都有一个 `prototype` 属性指向于它的原型对象，而每个原型对象又会有一个 `constructor` 属性指向于该构造函数，就像一个环一样(图中蓝色的线条)。
2. 每个构造函数都有一个 `__proto__` 属性指向于 `Function.prototype` (图中红色的线条)；特别地，`Function` 对象的 `__proto__` 和 `prototype` 的指向是相同的。
3. 每个原型对象(除了 `Object.prototype`)都会有一个 `__proto__` 属性，它指向 `Object.prototype`；而 `Object.prototype` 的 `__proto__` 属性指向 `null` (图中绿色的线条)。
4. `Person` 对象的实例 `p` 有一个 `__proto__` 属性指向于 `Person.prototype`。

**问题分析：**

1.两条原型链？

&emsp;&emsp;既然原型继承可以看作是 `__proto__` 的指向，那么理论上原型链应该有两条(分别对应上述发现的 2 和 3)：
+ 所有构造函数都继承自 `Function` 的原型(`Function.prototype`)，理解为构造函数层面的继承，因为所有的构造函数都是由 `Function` 定义的，因此构造函数都是 `Function` 的实例。
+ 所有构造函数的原型都继承自 `Object` 的原型(`Object.prototype`)；理解为原型对象层面的继承，因为所有原型对象都是由 `Object` 定义的，因此原型对象都是 `Object` 的实例。

2.怎么实现的继承？

&emsp;&emsp;始终把 `B.__proto__ === A.prototype` 认为是 `B` 继承自 `A` 的话，再结合两条原型链，将 `Function.prototype` 看作两条原型链的 “中转”，可以看出：

```js
Object.__proto__.__proto__ === Object.prototype;
Function.__proto__.__proto__ === Object.prototype;
Array.__proto__.__proto__ === Object.prototype;
Person.__proto__.__proto__ === Object.prototype;
// Person 的实例 p
p.__proto__.__proto__ === Object.prototype;
```

&emsp;&emsp;因此，我们可以得出这样的继承关系：
1. Object -> Function -> Object
2. Object -> Function -> Function
3. Object -> Function -> Array
4. Object -> Function -> Person
5. Object -> Person -> p

&emsp;&emsp;也就是说，我们可以得出以下结论：
+ 一切构造函数都继承自 `Function`，而原型链的顶端是 `Object`，所以所有构造函数是先继承 `Function` 后再向上继承 `Object`
+ 构造函数创建的实例有自身的原型链，不影响其构造函数的原型链，且大多数不会从 `Function` 继承方法和属性(除了 `Function` 的实例)
+ 原型对象比较直观，它们都是直接继承自 `Object.prototype`

### 改变原型链

**修改父类的 `__proto__` 属性：** 

```js
function Person() {}
console.log(Person instanceof Function); // true
console.log(Person instanceof Object); // true

Person.__proto__ = null;
console.log(Person instanceof Function); // false
console.log(Person instanceof Object); // false

const p = new Person();
console.log(p instanceof Person); // true
console.log(p instanceof Object); // true
```
&emsp;&emsp;可以看出，当 `Person.__proto__` 不再指向 `Person.prototype` 时，`Person` 就不再继承于 `Object` 和 `Function` 了；但是实例 p 仍然保持着它自身的原型链：

![修改 Person 的原型链](./imgs/prototype_02.png)


**修改实例的 `__proto__` 属性：**

```js
function Person() {}
const p = new Person();

p.__proto__ = null;
console.log(p instanceof Person); // false
console.log(p instanceof Object); // false
console.log(Person instanceof Function); //true
console.log(Person instanceof Object); //true
```

&emsp;&emsp;此时打断的就是实例 p 的原型链，但是它并不会影响父类的原型链：

![修改实例 p 的原型链](./imgs/prototype_03.png)

&emsp;&emsp;由此也可以猜测，使用 `new` 关键字创建实例的时候，其中有一步就是设置实例的 `__proto__` 属性的指向。





## 原型继承

### 原型链继承和原型式继承

**原型链继承：** 将父构造函数的实例赋值为子构造函数的原型对象。

```js
function Person() {}
function Student() {}
Student.prototype = new Person();

console.log(Student instanceof Person); // false

const s = new Student();
console.log(s instanceof Student); // true
console.log(s instanceof Person); // true

console.log(Student.prototype.constructor); // [Function: Person]
console.log(s.constructor); // [Function: Person]
```

原型链图：

![原型链继承](./imgs/prototype_04.png)

&emsp;&emsp;从图中可以看出 `Student` 将其的 `prototype` 指向为 `Person` 的实例 `p`。这里修改的是 `s` 的原型链(绿色线条)，导致 `s` 也继承自 `Person`(`s.__proto__.__proto__`)，但是 `Student` 的原型链(红色线条)没有改变。

&emsp;&emsp;这里会发生一个小问题：`Student.prototype.constructor` 和 `s.constructor` 都指向了 `Person`。这个需要重新设置 `constructor` 属性的指向：

```js
function Person() {}
function Student() {}
Student.prototype = new Person();
Student.prototype.constructor = Student;

const s = new Student();
console.log(Student.prototype.constructor); // [Function: Student]
console.log(s.constructor); // [Function: Student]

for (const key in s) {
  console.log(key); // constructor
}
```

&emsp;&emsp;但是这样设置的 `constructor` 属性会被 `for...in` 遍历，可以使用 `Object.defineProperty()` 禁止属性被枚举：

```js
function Person() {}
function Student() {}
Student.prototype = new Person();
Object.defineProperty(Student.prototype, 'constructor', {
  enumerable: false,
  value: Student,
});

var s = new Student();
console.log(Student.prototype.constructor); // [Function: Student]
console.log(s.constructor); // [Function: Student]

for (const key in s) {
  console.log(key); // ''
}
```



**原型式继承：** 直接将一个构造函数的原型对象赋值为另一个构造函数的原型对象。

&emsp;&emsp;原型式继承与原型链继承不同的地方在于，`Student.prototype` 是 `Person.prototype` 属性的一个浅复制，而不是通过新建一个 `Person` 的实例来获取；这就规定了不能设置 `Student.prototype.constructor`，因为它会影响到 `Person.prototype.constructor`：

```js
function Person() {}
function Student() {}
Student.prototype = Person.prototype;
// Student.prototype.constructor = Student; 

console.log(Student instanceof Person); // false

const s = new Student();
console.log(s instanceof Student); // true
console.log(s instanceof Person); // true

console.log(Student.prototype.constructor); // [Function: Person]
console.log(s.constructor); // [Function: Person]

// 如果上面一行设置 constructor 属性：
/* 
console.log(Student.prototype.constructor); // [Function: Student]
console.log(s.constructor); // [Function: Student]
console.log(Person.prototype.constructor); // [Function: Student]
*/
```

原型链图：

![原型式继承](./imgs/prototype_05.png)

&emsp;&emsp;事实上，原型式继承中 `Student` 构造函数有点多余，我们需要的只是 `Person` 的原型上的属性，可以定义一个函数将逻辑封装起来：
```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function Person() {}
Person.prototype.sayHi = function () {
  console.log('Hello World!');
};

const obj = object(Person.prototype);
obj.sayHi(); // Hello World!
console.log(obj instanceof Person); // true
```

&emsp;&emsp;javascript 后来也新增了一个 `Object.create()` 函数实现同样的功能，它还允许提供第二个参数，用于为生成的对象实例扩展属性，而不是定义在原型上：
```js
function Person() {}
Person.prototype.sayHi = function () {
  console.log('Hello World!');
};

const obj = Object.create(Person.prototype, {
  name: {
    writable: true,
    enumerable: true,
    value: 'Alice',
  },
  sayName: {
    enumerable: true,
    value: function() {
      console.log(this.name);
    },
  }
});

obj.sayHi(); // Hello World!
obj.sayName(); // Alice
console.log(obj instanceof Person); // true

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // name sayName
  }
}
```



### 为什么不是类继承

&emsp;&emsp;从原型链继承和原型式继承看，实现的都是子类实例继承了原型/原型链上的属性，并不是子类继承了父类的属性；那么为什么不让子类继承父类的属性呢？

看一个例子：
```js
function Person() {}
Person.prototype.sayHi = function() {
  console.log('Hello World!');
};

function Student() {}

Student.__proto__ = Person.prototype;

console.log(Student instanceof Person); // true
Student.sayHi(); // Hello World!
Student.call(null); // TypeError

const s = new Student();
console.log(s instanceof Person); // false
s.sayHi(); // TypeError
```

&emsp;&emsp;我们把 `Student` 的 `__proto__` 属性设置为 `Person` 的原型，导致 `Student` 拥有了 `Person` 原型上的方法，但失去了从 `Function` 的原型上继承的方法；**而且 `Student` 的实例 `s` 将不会得到任何 `Person` 原型上的属性和方法，所以这种方式不是我们需要的**，这也说明了 javascript 是原型继承而不是类继承。


## 结论

### 两条原型链

+ 一条是构造函数的继承，主要是让构造函数能从 `Function.prototype` 和 `Object.prototype` 上继承属性和方法；因此任何一个构造函数原生就具备一些方法。
+ 一条是原型对象的继承，主要是让构造函数生成的实例对象能够**共享原型对象或者该原型链上的原型对象的属性和方法**。

### 原型链是基于 __proto__ 属性的

&emsp;&emsp;无论是构造函数的继承，还是原型对象的继承，判断继承关系，都是依据 `__proto__` 属性，这也是 `instanceof` 操作符判断的标准：若 `B.__proto__ === A.prototype`，则 `B instanceof A` 返回 `true`。

### 区分原型链继承和原型式继承

两种继承方式看起来很类似，它们主要有以下区别：
+ 实现方式：原型链继承赋值给子类的原型的是父类的一个实例；而原型式继承赋值给子类的原型的是父类原型。
+ 生成实例：原型链继承生成了父类的实例，而原型式继承没有。
+ 扩展性：原型链继承可以扩展子类原型上的属性(`constructor`, 添加属性/方法等)；而原型式继承中子类原型是不应该扩展的，因为一旦扩展了会影响到父类的原型。
+ 应用不同：原型链继承可以用于扩展原型对象，丰富子类的行为；而原型式继承用于借用已有对象，快速创建对象实例，隐藏了子类的细节。

### 原型继承而不是类继承

&emsp;&emsp;javascript 中所说的继承都是原型继承，而不是类继承，不能混淆这一点。虽然 ES6 的语法上表现得像是类的继承，但是内部实现还是原型继承，只有实例能拥有原型链上的属性，而不是子类拥有父类的属性。