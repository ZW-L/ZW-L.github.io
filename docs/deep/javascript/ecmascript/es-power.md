---
sidebarDepth: 2
---

## 实现原生函数

### call/apply/bind 的区别 & 实现

**区别：**
+ 三者都接收一个对象(或 `null`)作为 `this` 的绑定
+ `call()` 和 `apply()` 只是执行函数，`bind()` 不执行函数，但是会返回一个新的函数
+ `call()` 和 `apply()` 行为基本一致，只是 `call()` 的额外参数需要一个一个传入；而 `apply()` 的额外参数作为一个数组传入，而且第二个参数之后的所有参数都会忽略


**实现 `call()`：** 额外的参数列表则使用 `arguments` 获取
```js
Function.prototype._call = function (context) {
  if (typeof context === 'object' || typeof context === 'function') {
    context = context || window // 绑定 this 的值为 null 时取 window；否则取相应的对象或函数
  } else {
    context = Object.create(null) // 绑定 this 的值为空或为基本类型的值时
  }
  context.fn = this // 获取调用 _call 方法的函数，当使用 context.fn() 调用方法时，this 便指向 context 
  var paras = '' // 从 arguments 获取剩余参数，拼接参数列表
  for (var i = 1; i < arguments.length; i++) {
    paras += 'arguments[' + i + '],'
  }
  var result = eval('context.fn('+paras+')') // 用 eval 执行函数，并保存执行结果
  delete context.fn // 删除对象对外部函数的引用(否则会修改context对象本身)
  return result // 返回执行结果
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

**实现 `apply()`：** 和 `call()` 的实现类似，只是在处理额外参数的步骤不一样
```js
Function.prototype._apply = function(context, args) {
  if (typeof context === 'object' || typeof context === 'function') {
    context = context || window
  } else {
    context = Object.create(null)
  }
  context.fn = this
  args = args || [] // 兼容不存入 args 的情况
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

**实现 `bind()`：** `ES5` 可以使用 `apply()` 模拟，`ES6` 可以使用 `call()`/`apply()` 模拟
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


### 实现 Object.assign()



### 实现私有变量



### JSON.stringify() 和 JSON.parse()



### 实现 Symbol



### 实现符合 Promise/A+ 规范的 Promise



### 实现 async/await



### 实现 Set






## 实现数组方法/操作


### 实现 map()

**说明：**
+ 

```js

```


### 实现 filter()

**说明：**
+ 

```js

```


### 实现 some()

**说明：**
+ 

```js

```


### 实现 reduce()

**说明：**
+ 

```js

```


### 数组扁平化

**说明：**
+ 基本上都是利用 `concat()` 和 `apply()` (或者用 `...`) 进行扁平化
+ 用 `isArray()` 判断数组，用 `some()` 判断数组是否完全扁平化
+ 还可以用 `reduce()` 缩减代码

```js
// 1.纯数值数组，使用 toString()
const flattenDeep = arr => arr.toString().split(',').map(v => +v)
console.log(flattenDeep([1, -1, 2, [3.5, 4, [5, [6]]]])) // [ 1, -1, 2, 3.5, 4, 5, 6 ]

// 2.递归实现
const flattenDeep = function(arr) {
  return arr.reduce((temp, val) => {
    if (Array.isArray(val)) {
      temp = temp.concat(flattenDeep(val))
    } else {
      temp.push(val)
    } 
    return temp
  }, [])
}

const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr))   // [ 1, 2, 4, 2, 3, { age: [ 22, 24 ] }, 2, 1, 5, 2, 2, 1 ]

// 3.使用 apply() 或 ...
// 扁平化一层
const flatten = arr => [].concat.apply([], arr) // 可以修改为 [].concat(...arr)
console.log(flatten([1, 2, [4, [2]], 3])) // [ 1, 2, 4, [ 2 ], 3 ]

// 完全扁平化
const flattenDeep = arr => {
  let temp = arr.concat()
  while (temp.some(v => Array.isArray(v))) {
    temp = [].concat.apply([], temp) // 可以修改为 temp = [].concat(...temp)
  }
  return temp
}
const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr)) // [ 1, 2, 4, 2, 3, { age: [ 22, 24 ] }, 2, 1, 5, 2, 2, 1 ]

// 4.使用 reduce()
// 扁平化一层
const flatten = arr => arr.reduce((temp, val) => temp.concat(val), [])
console.log(flatten([1, 2, [4, [2]], 3])) // [ 1, 2, 4, [ 2 ], 3 ]

// 完全扁平化
const flattenDeep = arr => {
  const temp = arr.concat()
  return temp.reduce((accu, curr) => accu.concat(Array.isArray(curr) ? flattenDeep(curr) : curr), [])
}
const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr)) // [ 1, 2, 4, 2, 3, { age: [ 22, 24 ] }, 2, 1, 5, 2, 2, 1 ]
```



### 数组去重

```js
// 1.ES6 的 Set 和扩展运算符
const uniq = arr => [...new Set(arr)]
console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]

// 2.ES6 的 Set 和 Array.from()
const uniq = arr => Array.from(new Set(arr))
console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]

// 3.ES5 原生的 reduce() 和 indexOf()
function uniq(arr) {
  return arr.reduce((accu, curr) => {
    if (accu.indexOf(curr) === -1) {
      accu.push(curr)
    }
    return accu
  }, [])
}
console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]
```






## 实现工具函数


### 准确获取变量的数据类型

```js
var class2type = {}
var types = 'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ')
types.forEach(type => { class2type['[object ' + type + ']'] = type.toLowerCase() })
// 接着 Object 原型上纯净的 toString() 方法，配合 call() 进行判断
function type(obj) {
	if (obj == null) { // obj 为 null 或 undefined 时才会执行
		return obj + ''
	}
	return typeof obj === 'object' || typeof obj === 'function' ?
		class2type[Object.prototype.toString.call(obj) ] || 'object' :
		typeof obj
}
```


### 实现简单的 co 模块



### 实现 sleep 函数



### 实现记忆函数



### 实现柯里化工具函数 & 理解其应用场景




### 实现防抖/节流工具函数 & 理解其内部原理和应用场景

**节流：** 在指定时间间隔内只会执行一次任务。一个例子：当监听页面滚动事件时，判断是否滚动到底部，在不考虑函数节流和代码性能的情况下，会频繁触发 `onscroll` 事件，此时可添加节流函数：
```js
function throttle(fn) {
  let tag = true;
  return function() {
    if (!tag) return
    tag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      tag = true
    },500)
  }
}
```

**防抖：** 任务频繁触发的情况下，只有任务触发的时间间隔超过指定间隔的时候，任务才会执行。一个例子：在监听 input 的变化时并发送请求时，若每当数据变化便发送一次请求，会降低用户体验且加强对服务器的压力，此时可添加防抖函数：
```js
function debounce (fn) {
  let tag = null
  return function () {
    clearTimeout(tag)
    tag = setTimeout(() => {
      fn.apply(this, arguments)
    },500)
  }
}
```



### 实现模板引擎 & 解释原理



### 实现异步回调



### 手写 EventEmitter & 实现事件发布/订阅



### 实现双向绑定



### 洗牌算法



### 单例模式



### 判断数据类型

```js
const isType = function(type) {
  return function(target) {
    return `[object ${type}]` === Object.prototype.toString.call(target)
  }
}
const isArray = isType('Array')
console.log(isArray([]))
```





## 其他



### 给数字添加千分位符



### 支持占位符的函数柯里化



### 偏函数



### 斐波那契数列及其优化



