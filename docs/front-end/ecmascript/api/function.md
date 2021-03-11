## 简介

+ 参考 [MDN Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)




## 属性

+ 它们都是在 `Function` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`name`|值为 `'Function'`|-|
|`length`|值为 `1`|-|
|`prototype`|获取原型构造方法|-|

::: tip 备注
+ `Function.prototype` 是一个函数，它与其他构造函数的原型对象不同
```js
console.log(typeof Function.prototype)    // 'function'
console.log(typeof Object.prototype)      // 'object'
```
:::


## 原型

+ 它们都是在 `Function.prototype` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`name`|获取函数的名称(值为 `''`)|-|
|`length`|获取函数的形参个数(值为 `0`)|-|
|`constructor`|获取该原型对象所属的构造函数|-|
|`caller`|获取调用指定函数的函数(或 null)|<Badge type="warning">废弃</Badge>|
|`arguments`|获取传入函数的实参，是一个类数组对象|<Badge type="warning">废弃</Badge>|
|`call()`|将函数的调用绑定至另一个对象|5|
|`apply()`|将函数的调用绑定至另一个对象|5|
|`bind()`|从已有函数生成一个新的函数，并将它的调用绑定至另一个对象|5|
|`toString()`|获取函数的实现源码的字符串|-|
|`[Symbol.hasInstance]()`|`Symbol.hasInstance()` 的引用|<Badge>6</Badge>|

::: tip 备注
+ 这些属性都被其他内置对象继承了，除了 `constructor` 指针属性
:::