## 介绍

&emsp;&emsp;本系列笔记参考自《Javascript 函数式编程》—— Michael Fogus。此外：

+ 以 [Undescore](https://github.com/jashkenas/underscore) 作为工具库（虽然现在可以使用 [Lodash](https://www.lodashjs.com/) 或原生函数，但是了解一下也是 `Undescore` 的内部实现和设计思想也是不错的）
+ 


## 函数式编程的特点



## 函数是一等公民

&emsp;&emsp;在函数式编程中，函数是一等公民。因此，函数能够用在很多地方：

+ 作为变量
+ 作为数组的元素
+ 作为对象的属性
+ 作为另一个函数的参数
+ 作为另一个函数的返回值

```js
// 1.作为变量
var ten = function () {
  return 10;
};

// 2.作为数组的元素
var arr = [10, function() { return 12; }];

// 3.作为对象的属性
var obj = {
  name: 'Alice',
  getName: function() {
    return this.name;
  },
};

// 4.作为另一个函数的参数
function add(a, f) {
  return a + f();
}

add(10, ten); // 20

// 5.作为另一个函数的返回值
function add(a) {
  return function(b) {
    return a + b;
  };
}

add(5)(10); // 15
```

::: tip 说明：
+ 一个函数只要符合以下任意条件，就属于高阶函数：
  + **以函数作为参数**
  + **返回一个函数**
:::

## 对比命令式编程



## Applicative 编程

&emsp;&emsp;可适用性(Applicative)编程指的是