## 介绍

+ `Reflect` 对象上定义了一些等价于 `Object` 对象的方法(属于语言内部的方法)，即从 `Reflect` 对象上可以拿到语言内部的方法
+ 修改某些 `Object` 对象的的返回结果，让其变得更合理
+ 让 `Object` 操作都变成函数行为(修改 `in` 和 `delete` 操作符)
+ 只要是 `Proxy` 对象的方法，就能在 `Reflect` 对象上找到对应的方法
+ `Reflect` 对象使很多操作更加易读

## 方法

+ 都是定义在 `Reflect` 上的方法

|方法|别名|
|-|-|
|`construct(target, args)`|`new` 操作符|
|`deleteProperty(target, name)`|`delete` 操作符|
|`has(target, name)`|`in` 操作符|
|`get(target, name, receiver)`|读操作 `target[name]`|
|`set(target, name, value, receiver)`|写操作|
|`apply(target, thisArg, args)`|`call()`, `apply()`|
|`defineProperty(target, name, desc)`|`Object.defineProperty()`|
|`ownKeys(target)`|`Object.keys()`, 不会受 `enumerable` 影响|
|`isExtensible(target)`|`Object.isExtensible()`|
|`preventExtensions(target)`|`Object.preventExtensions()`|
|`getOwnPropertyDescriptor(target, name)`|`Object.getOwnPropertyDescriptor()`|
|`getPrototypeOf(target)`|`Object.getPrototypeOf()`|
|`setPrototypeOf(target, prototype)`|`Object.setPrototypeOf()`|