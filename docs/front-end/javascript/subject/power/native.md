## 模拟私有变量

```js
function Person(name, age) {
  const obj = new Object()
  const name = name
  const age = age
  obj.getName = function () {
    return name
  }
  obj.getAge = function () {
    return age
  }
  
  return obj
}
```



## new

```js
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw '_new: The first param must be a function'
  }
  const obj = {}
  obj.__proto__ = Constructor.prototype     // 1.继承原型上的属性
  const ret = Person.apply(obj, args)       // 2.执行构造函数，使用 apply() 绑定 this 为 obj
  return ret instanceof Object ? ret : obj  // 3.若构造函数返回的不是对象则返回 obj
}
```



## instanceof

```js
function _instanceof (L, R) {
  if (L === null || typeof L !== 'object') return false
  const O = R.prototype
  L = L.__proto__
  while (true) {
    if (L === null) return false
    if (L === O) return true
    L = L.__proto__
  }
}
```



## call()

+ **实现 `call()`：** 额外的参数列表则使用 `arguments` 获取
```js
Function.prototype._call = function (context) {
  if (typeof context === 'object' || typeof context === 'function') {
    context = context || window     // 绑定 this 的值为 null 时取 window；否则取相应的对象或函数
  } else {
    context = Object.create(null)   // 绑定 this 的值为空或为基本类型的值时
  }
  context.fn = this  // 获取调用 _call 方法的函数，当使用 context.fn() 调用方法时，this 便指向 context 
  var paras = ''     // 从 arguments 获取剩余参数，拼接参数列表
  for (var i = 1; i < arguments.length; i++) {
    paras += 'arguments[' + i + '],'
  }
  var result = eval('context.fn('+paras+')')  // 用 eval 执行函数，并保存执行结果
  delete context.fn  // 删除对象对外部函数的引用(否则会修改 context 对象本身)
  return result      // 返回执行结果
}

// ES6 语法
Function.prototype._call = function (context, ...args) {
  if (typeof context === 'object' || typeof context === 'function') {
    context = context || window
  } else {
    context = Object.create(null)
  }
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}
```



## apply()

+ **实现 `apply()`：** 和 `call()` 的实现类似，只是在处理额外参数的步骤不一样
```js
Function.prototype._apply = function(context, args) {
  if (typeof context === 'object' || typeof context === 'function') {
    context = context || window
  } else {
    context = Object.create(null)
  }
  context.fn = this
  args = args || []   // 兼容不传入 args 的情况
  var paras = ''
  for (var i = 0; i < args.length; i++) {
    paras += 'args[' + i + '],'
  }
  var result = eval('context.fn(' + paras + ')')
  delete context.fn
  return result
}

// ES6 语法
Function.prototype._apply = function(context, args) {
  if (typeof context === 'object' || typeof context === 'function') {
    context = context || window
  } else {
    context = Object.create(null)
  }
  context.fn = this
  args = args || []
  const result = context.fn(...args)
  delete context.fn
  return result
}
```



## bind()

+ **实现 `bind()`：** `ES5` 可以使用 `apply()` 模拟，`ES6` 可以使用 `call()`/`apply()` 模拟
```js
Function.prototype._bind = function(context) {
  var that = this
  var firstArgs = Array.prototype.slice.call(arguments, 1)
  return function () {
    return that.apply(context, firstArgs.concat(Array.prototype.slice.call(arguments)))
  }
}

// ES6 apply() 实现
Function.prototype._bind = function(context, ...firstArgs) {
  return (...lastArgs) => {
    return this.apply(context, firstArgs.concat(lastArgs))
  }
}

// ES6 call() 实现
Function.prototype._bind = function(context, ...firstArgs) {
  return (...lastArgs) => {
    return this.call(context, ...firstArgs, ...lastArgs)
  }
}
```



## assign()

```js
Object.defineProperty(Object, '_assign', {
  value: function assign(target, varArgs) {
    'use strict'
    if (target == null) {         // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object')
    }
    let to = Object(target)
    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index]
      if (nextSource != null) {   // Skip over if undefined or null
        for (let nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
    }

    return to
  },
  writable: true,
  configurable: true
})
```



## JSON.stringify()

```js

```



## JSON.parse()

```js

```



## Symbol

```js

```



## Set

```js

```



## Promise

+ 实现符合 Promise/A+ 规范的 Promise
```js

```



## async/await

```js

```
