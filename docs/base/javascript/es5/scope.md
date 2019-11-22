## 基本类型和引用类型

### 区别 

+ 基本数据类型：按值访问。值保存在栈中，操作的是实际的值
+ 引用数据类型：按引用访问。值保存在堆中，值引用保存在栈中，操作的是值的引用


### 动态属性

&emsp;&emsp;可以给数据类型添加属性，但是给基本数据类型添加属性时，并不能访问：
```js
// 给基本类型添加属性
var name = 'Seven';
name.age = 24;
console.log(name.age); // undefined

// 给引用类型添加属性
var obj = {};
obj.name = 'Seven';
console.log(obj.name);  // Seven
```

### 变量的复制

&emsp;&emsp;基本数据类型的复制会创建一个新的互不影响的副本；而引用数据类型的复制只能拷贝值的引用，属于一层浅拷贝的副本，在任何一个引用中修改值，都会改变所有引用的副本：
```js
// 基本数据类型的复制
var a = 12;
var b = a;
b = 10;
console.log(a, b); // 12 10

// 引用数据类型的复制
var obj = { name: 'Seven' };
var obj2 = obj;
obj2.name = 'Anna';
console.log(obj.name, obj2.name); // Anna Anna
```

### 参数传递

&emsp;&emsp;尽管访问变量可以通过按值访问(基本数据类型)和按引用访问(引用类型)，但是参数的传递只是按值传递的；即使传递的是一个对象，传递的也是保存该对象的引用的值。

**误以为参数传递是按引用传递的例子：**
```js
var obj = { name: 'Seven' };
function setName(obj) {
  obj.name = 'Anna';
}

setName(obj);
console.log(obj.name); // 'Anna'
```

**证明参数传递是按值传递的例子：**
```js
function setName(obj) {
  obj.name = 'Alice';
  obj = new Object();
  obj.name = 'Anna';
}

var obj = new Object();
setName(obj);
console.log(obj.name); // 'Alice'
```

&emsp;&emsp;传递对象时，参数传递的是一个该对象的内存指向的指针值，在该指针上操作对象时会直接影响对象的属性；但在函数内部用一个新的对象给 obj 指针赋值时，此时的 obj 指向的是新对象，在它之后的操作只会影响新对象，不会影响原来的对象，说明传递对象时只会传递一个指针值而不是传递一个完全的对象引用。



## 作用域

### 概念

+ `执行环境`：定义了变量和函数有权访问其他的数据，决定了它们各自的行为；另外，函数有自己的执行环境
+ `变量对象`：每个执行环境都有一个关联的变量对象，它保存了执行环境中定义的所有变量和函数；我们无法访问该变量对象，但解析器会在后台使用
+ `执行流和环境栈`：当执行流进入到一个函数时，函数的环境会被推入一个执行栈；当函数完成后，栈会弹出该函数的环境，把控制权交给之前的执行环境
+ `作用域`：可以分为全局作用域和局部作用域；局部作用域由函数产生，所以也叫函数作用域
+ `作用域链`：当代码在一个环境中执行时，会创建变量对象的一个作用域链，它保证对执行环境有权访问的所有变量和函数的有序访问；内部环境很够通过作用域链访问所有的外部环境，反之则不能

### 作用域

+ 全局作用域：没有使用关键字声明的变量都是全局变量，它们处于全局作用域中，在全局作用域中声明的变量也是全局变量；全局作用域中的变量能被其他作用域访问

```js
var str = 'hello'
function foo() {
  console.log(str);
}

foo(); // hello
```

+ 局部作用域：变量的查找开始于最接近的绑定上下文来向外扩展，直到找到第一个绑定(若不能找到会返回 `undefined`)

```js
var str = 'hello'
function foo() {
  var str = 'world';
  console.log(str);
}

foo(); // world
console.log(str); // hello
```

+ 没有块级作用域：循环和流程控制并不能生成块级作用域，其中定义的变量位于全局作用域中

```js
for (var i = 0; i < 10; i++) {
  var a = i * 2;
}
console.log(i); // 10
console.log(a); // 20
```

### 延长作用域链

两种方法延长作用域链：

+ `try/catch` 块中的 `catch`
+ `with` 语句

```js
// try...catch
function foo() {
  try {
    console.log(res);
  } catch (e) {
    console.log(e.name); // ReferenceError
    var str = 'hello world';
  }
  console.log(str); // hello world
}

foo();

// with
var obj = {
  str: 'hello',
};

function foo() {
  var temp = 'world';
  with (obj) {
    var res = str + ' ' + temp;
  }
  console.log(res);
}

foo(); // hello world
```
&emsp;&emsp;由于 `with` 具有性能问题，因此不建议使用




## 垃圾收集

### 垃圾回收机制

&emsp;&emsp;Javascript 有自动的垃圾回收机制，浏览器的实现方式主要有两种：

+ `标记清除法`：当变量在一个环境中被创建时，会被标记为 "进入环境"，当其离开环境时，会被标记为 "离开环境"，垃圾回收器会定时对标记为 "离开环境" 的变量进行回收；目前大多数浏览器使用的是该种方式。
+ `引用计数法`：该方法跟踪记录每个值被引用的次数，当一个值被一个变量引用时，它的引用次数就会加 1，当一个变量解除对它的引用时，它的引用次数就会减 1，垃圾回收器会定时对引用次数为 0 的值进行回收；因为容易遇到一个循环引用的问题，该方式很少被使用。

**说明：**

+ IE9 之前的版本中的 `BOM` 和 `DOM` 对象是使用 `C++` 以 `COM` 的形式实现的，`COM` 对象的垃圾回收机制采用的就是引用计数法，因此在 IE 中涉及 `COM` 的情况下，都会容易发生循环引用的内存问题
+ 解决循环引用的方式是手动断开变量和对象的链接，将变量赋值为 `null`

### 性能问题

+ 有的浏览器能够手动触发垃圾手机过程，但是不建议使用
+ 在数据不再使用的情况下，将其设置为 `null` 来释放引用(称为解除引用)是更好的
+ 解除引用的作用是让值退出环境，不代表内存马上会被释放，因为垃圾回收器是定时执行的