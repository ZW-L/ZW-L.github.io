## 判断变量的数据类型

```js
const isType = function(type) {
  return function(target) {
    return `[object ${type}]` === Object.prototype.toString.call(target)
  }
}
const isArray = isType('Array')
console.log(isArray([]))
```


## 获取变量的数据类型

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


## 节流函数

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


## 防抖函数

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


## 记忆函数

&emsp;&emsp;记忆函数实际上是一个闭包，它捕获了一个初始化的 `cache` 对象，然后在每次调用函数 `fn` 时都在 `cache` 对象上查找属性：读取已有属性或添加新属性。

**实现：**
```js
function memoize(fn, cache) {
  cache = (typeof cache === 'object' && cache !== null) ? cache : {}

  return function(arg) {
    if (!cache.hasOwnProperty(arg)) {
      cache[arg] = fn(arg)
    }
    
    return cache[arg]
  }
}
```

**使用：**
```js
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  
  return n * factorial(n-1)
}

const fac = memoize(factorial, { 0: 1, 1: 1 })
console.log(fac(6)) // 一段时间后，打印 720
console.log(fac(6)) // 读取缓存，打印 720
```

::: tip 说明：
+ 优点：避免重复运算，读取缓存结果速度快
+ 缺点：使用了闭包，导致内存不能回收，当缓存结果过大时影响性能
:::


## 洗牌算法




## 数字添加千分位符



## 柯里化工具函数



## 支持占位符的柯里化函数



## 偏函数




## 斐波那契数列及其优化



