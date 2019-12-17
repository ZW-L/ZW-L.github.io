## 函数声明和函数表达式

&emsp;&emsp;定义函数常用的方式有两种：函数声明和函数表达式(一般不使用构造函数生成实例)。

**函数声明：** 一个显著的特征是函数声明提升(执行代码前会先读取函数声明)，就是说可以把调用函数的语句放在函数声明的前面
```js
foo(); // declare

function foo() {
  console.log('declare');
}
```

**函数表达式：** 也叫匿名函数(或 `lambda` 函数)，它的形式类似变量的赋值，只不过右边使用关键字 `function`，`function` 的后面可以带函数名也可以不带函数名；另外，函数表达式没有变量提升
```js
var foo = function () {
  console.log('declare');
}

foo(); // declare
console.log(foo.name); // foo

var bar = function baz() {
  console.log('declare');
}

bar(); // declare
console.log(bar.name); // baz
```

&emsp;&emsp;函数声明和函数表达式最显著的区别就是有无函数提升，以下例子出现在 《javascript 高级程序设计》:
```js
if (condition) {
  function foo() {
    console.log('foo true');
  }
} else {
  function foo() {
    console.log('foo false');
  }
}
```
&emsp;&emsp;因为函数声明会发生函数提升，导致在一些浏览器会产生不一致的行为(但我测试了谷歌和火狐浏览器，它们的行为一致，或许是后来的版本修正了)，建议使用函数表达式的语法：
```js
var foo;
if (condition) {
  foo = function () {
    console.log('foo true');
  }
} else {
  foo = function () {
    console.log('foo false');
  }
}
```


## 闭包

&emsp;&emsp;闭包指的是有权访问另一个函数作用域的变量的函数。创建闭包常见方式，就是在一个函数内部创建另一个函数，这样处于作用域链前端的函数就能访问外层作用域的变量：

```js
function foo() {
  var str = 'hello';

  return function () {
    console.log(str);
  }
}

var sayHi = foo();
sayHi(); // hello
```

&emsp;&emsp;在调用 `foo()` 后，`foo()` 的执行环境的作用域会被销毁，但是它的活动对象仍会保存在内存中，因为变量 `sayHi` 保存了对它的引用；当该引用销毁时(将 `sayHi` 赋值为 `null`)，`foo()` 的活动对象才会被销毁。

**闭包的特点：**

+ 能够捕获调用函数的变量(通过引用外部函数的活动对象)
+ 会占用更多的内存(外部函数的活动对象不能释放)


**闭包的应用：**

&emsp;&emsp;以下方法的目的是返回一个数组，该数组的元素是一系列函数，它们的调用分别返回 `0~4`：

```js
function foo() {
  var res = [];

  for (var i = 0; i < 5; i++) {
    res[i] = function() {
      return i;
    };
  }

  return res;
}
```

&emsp;&emsp;但是这个函数不会得到理想的结果，因为调用后返回的数组，它的每一个函数元素的调用都会返回 5。因为 `javascript` 没有块级作用域，所以匿名函数赋值时捕获的都是同一个活动对象，导致它们所捕获的 `i` 的值都是 5。

&emsp;&emsp;一个解决方法是在匿名函数中使用闭包，添加一层活动对象：

```js
function foo() {
  var res = [];

  for (var i = 0; i < 5; i++) {
    res[i] = (function(num) {
      return function() {
        return num;
      }
    })(i);
  }

  return res;
}
```

&emsp;&emsp;另一个解决方法是在 `for` 循环中使用 `ES6` 的 `let` 变量声明，因为 `let` 具有块级作用域：

```js
function foo() {
  var res = [];

  for (let i = 0; i < 5; i++) {
    res[i] = function() {
      return i;
    };
  }

  return res;
}
```

**内存泄漏：**

&emsp;&emsp;`IE9` 之前的 `JScript` 对象和 `COM` 对象使用不同的垃圾收集例程，因此在 `DOM` 操作中容易发生内存泄漏：

```js
function assignHandle() {
  var element = document.getElementById('someId');
  element.onclick = function() {
    console.log(element.id);
  };
}
```

&emsp;&emsp;该函数创建了元素事件处理程序的闭包，而闭包又创建了一个循环引用(引用元素的 `id`)，导致 `element` 的引用计数一直是 1，它的内存不会被释放。解决方式是将元素的 `id` 赋值给另一个变量，并在 `assignHandle()` 结束前手动释放 `element` 的引用：

```js
function assignHandle() {
  var element = document.getElementById('someId');
  var id = element.id;
  element.onclick = function() {
    console.log(id); // id 来自另外声明的变量，防止循环引用
  };

  element = null; // 手动释放 element
}
```


## 模拟块级作用域

&emsp;&emsp;可以使用立即执行函数(`IIFE`)来模拟块级作用域(私有作用域)，在块级作用域内的变量，它们会在代码执行之后被回收，而且不会跟全局作用域发生命名冲突：

```js
var str = 'global';
(function() {
  // 块级作用域
  var str = 'hello';

  console.log(str); // hello
})();

console.log(str); // global
```

&emsp;&emsp;这是很多开源库使用的方式，这样子它们定义的变量就不会跟全局变量或者用户自定义的变量发生命名冲突。


## 私有变量和模块模式

&emsp;&emsp;函数具有私有作用域，因此可以使用函数和闭包来模拟私有变量：

```js
function foo() {
  var _name = 'Anonymous';
  var obj = {};

  obj.getName = function() {
    console.log(_name);
  };
  obj.setName = function(name) {
    _name = name;
  }

  return obj
}

var obj = foo();
obj.getName(); // Anonymous
obj.setName('Alice');
obj.getName(); // Alice
console.log(obj.name); // undefined
```

&emsp;&emsp;这也是实现模块模式的一种方法。



## 函数中的 this

**函数的 this：** 取决于调用函数所在的环境。

```js
var obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name);
  },
};

obj.getName(); // Alice
var getName = obj.getName;
getName(); // undefined
```

&emsp;&emsp;当在 `obj` 中调用时，`this` 会绑定为 `obj`，而在全局中调用时，`this` 绑定为全局对象。

**this 绑定的规则:**

+ 默认绑定：函数调用时没有任何修饰，仅仅以 `funcName()` 的形式调用，`this` 会默认绑定至全局对象；严格模式下为 `undefined`，尝试使用 `this` 获取属性将会报错。

```js
var obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name);
  },
};

var getName = obj.getName;
getName(); // undefined

```

+ 隐式绑定：在某个上下文中调用函数，`this` 会绑定至该执行上下文。

```js
var obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name);
  },
};
// this 绑定至 obj
obj.getName(); // Alice

var obj = {
  name: 'Alice',
  obj2: {
    name: 'Anna',
    getName: function() {
      console.log(this.name);
    },
  },
};
// this 绑定至 obj2
obj.obj2.getName(); // Anna
```

+ 显式绑定：使用 `call()`, `apply()`, `bind()` 修改 `this` 的绑定。

```js
var obj = {
  name: 'Alice',
};

function getName() {
  console.log(this.name);
}

getName(); //undefined
getName.call(obj); // Alice
```


## 高阶函数

&emsp;&emsp;能够接收一个函数作为参数或者以一个函数为返回结果的函数，叫做高阶函数。

```js
// 返回一个函数
function foo() {
  var str = 'hello';
  return function () {
    return str;
  };
}

var sayHi = foo();
console.log(sayHi()); // hello

// 接收函数作为参数并返回一个函数
function calc(fn) {
  return function(arr) {
    return fn.apply(null, arr);
  }
}

var getMax = calc(Math.max);
console.log(getMax([1, 2, 3, 4, 5])); // 5
```

## 柯里化

&emsp;&emsp;

## 递归

&emsp;&emsp;

