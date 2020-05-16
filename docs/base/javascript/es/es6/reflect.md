## 介绍

+ `Reflect` 对象上定义了一些等价于 `Object` 对象的方法(属于语言内部的方法)，即从 `Reflect` 对象上可以拿到语言内部的方法
+ 修改某些 `Object` 对象的的返回结果，让其变得更合理
+ 让 `Object` 操作都变成函数行为(修改 `in` 和 `delete` 操作符)
+ 只要是 `Proxy` 对象的方法，就能在 `Reflect` 对象上找到对应的方法
+ `Reflect` 对象使很多操作更加易读

## 方法

**目前有 13 个方法:**
+ `Reflect.construct(target, args)`: 相当于 `new` 操作符
+ `Reflect.deleteProperty(target, name)`: 相当于 `delete` 操作符
+ `Reflect.has(target, name)`: 相当于 `in` 操作符
+ `Reflect.get(target, name, receiver)`: 相当于 `target[name]`
+ `Reflect.set(target, name, value, receiver)`: 将值分配给属性的函数
+ `Reflect.apply(target, thisArg, args)`: 类似 `Function.prototype.apply()`
+ `Reflect.defineProperty(target, name, desc)`: 类似 `Object.defineProperty()`
+ `Reflect.ownKeys(target)`: 类似 `Object.keys()`, 但不会受 `enumerable` 影响
+ `Reflect.isExtensible(target)`: 类似 `Object.isExtensible()`
+ `Reflect.preventExtensions(target)`: 类似 `Object.preventExtensions()`
+ `Reflect.getOwnPropertyDescriptor(target, name)`: 类似 `Object.getOwnPropertyDescriptor()`
+ `Reflect.getPrototypeOf(target)`: 类似 `Object.getPrototypeOf()`
+ `Reflect.setPrototypeOf(target, prototype)`: 类似 `Object.setPrototypeOf()`
