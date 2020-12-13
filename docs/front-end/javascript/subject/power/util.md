---
sidebarDepth: 2
---

## 判断变量的数据类型

### 通用函数

+ MDN [Object.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
+ 使用高阶函数实现(柯里化函数)
```js
const isType = function(type) {
  return function(target) {
    return `[object ${type}]` === Object.prototype.toString.call(target)
  }
}

const isArray = isType('Array')
console.log(isArray([]))
```

::: tip 备注
+ 原理：借用 `Object.prototype.toString()`
```js
const toString = val => {
  const res = Object.prototype.toString.call(val)
  console.log(res)
}

// 1.基本数据类型
toString(NaN)               // [object Number]
toString('1')               // [object String]
toString(true)              // [object Boolean]
toString(null)              // [object Null]
toString(undefined)         // [object Undefined]
toString(Symbol())          // [object Symbol]
// 2.引用数据类型
toString(() => {})          // [object Function]
toString({})                // [object Object]
toString([])                // [object Array]
// 3.Date 和 RegExp
toString(new Date())        // [object Date]
toString(new RegExp('123')) // [object RegExp]
```
+ <font color="red">注意：</font>数组和函数不会识别为 `Object`，应注意使用场景
:::


### isObject

+ Lodash [isObject()](https://github.com/lodash/lodash/blob/master/isObject.js)
```js
function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}
```

::: tip 备注
+ 空对象(`{}`)、数组、函数都返回 `true`，`null` 返回 `false`
+ 推荐使用这种方式，因为数组和函数都是特殊的对象，这样的判断较为清晰合理
:::



## 获取变量的数据类型

```js
const class2type = {}
const types = 'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ')
types.forEach(type => { class2type['[object ' + type + ']'] = type.toLowerCase() })

function type(obj) {
  // 处理 null，undefined
  if (obj == null) {
    return obj + ''
  }

  return typeof obj === 'object' || typeof obj === 'function'
    ? (class2type[Object.prototype.toString.call(obj)] || 'object')
    : typeof obj
}
```


## 节流和防抖

### 节流

+ 描述：函数在指定时间间隔内只会执行一次，节流会稀释函数的执行频率
+ 实现：核心在于执行回调函数的开关
+ 应用场景：监听 `onscroll` / `onresize` 事件，为了保证页面的性能而需要控制事件的触发间隔
```js
// 两种方法实现节流函数，它们都依赖闭包
// 方法一：使用定时器实现(建议)
const throttle = (fn, timeout = 50) => {
  let canRun = true         // 第一次运行时为 true，表示可触发第一次事件
  return (...args) => {
    if (!canRun) return     // fn 还没执行，抛弃这次事件
    canRun = false          // fn 执行了，重新标记为 false 直至下次 fn 执行
    setTimeout(() => {
      fn(...args)
      canRun = true         // 在 fn 执行前始终为 false
    }, timeout)
  }
}

// 方法二：使用时间差判断
const throttle = (fn, timeout = 50) => {
  let start = Date.now()    // 获取第一次运行时的时间戳
  return (...args) => {
    const now = Date.now()  // 获取触发事件的时间戳
    // 计算时间差，符合 timeout 才执行 fn
    if (now - start >= timeout) {
      fn(...args)
      start = now           // 执行 fn 后，更新 start 时间戳
    }
  }
}

const log = () => console.log('resize...')
window.addEventListener('resize', throttle(log, 300))
```

::: tip 区分两种实现方式：
+ 定时器：当不再持续触发事件时，回调函数始终会触发最后一次(还存在定时器)
+ 时间差：当不再触发持续事件时，回调函数不会再触发(可能会在下次触发事件立即触发)
:::


### 防抖

+ 描述：触发事件后 n 秒内函数只会执行一次，如果 n 秒内事件再次触发，则重新计算时间
+ 实现：核心在于定时器的清零
+ 典型应用：监听 `input` 事件提供搜索建议，在停止输入的若干毫秒后才触发事件；有利于减少请求次数
```js
function debounce (fn, wait = 500) {
  let timer = null
  return (...args) => {
    timer && clearTimeout(timer)  // 清空之前的定时器
    timer = setTimeout(() => {    // 重新设置定时器
      fn(...args)
    }, wait)
  }
}

const log = () => console.log('input...')
document.getElementById('input').addEventListener('input', debounce(log, 1000))
```

+ **立即触发**：某些情况下需要第一次触发事件时立即触发一次函数
```js
function debounce (fn, wait = 500, immediate = false) {
  let timer = null
  return (...args) => {
    timer && clearTimeout(timer)       // 清空之前的定时器
    immediate && !timer && fn(...args) // 立即触发一次
    timer = setTimeout(() => {         // 重新设置定时器
      fn(...args)
    }, wait)
  }
}

const log = () => console.log('input...')
document.getElementById('input').addEventListener('input', debounce(log, 1000, true))
```

::: tip 备注：
+ 防抖函数类似节流，都是为了减少函数触发的次数，但它们有明显的区别：
  + 节流函数**在事件触发过程中会每隔一段时间触发一次**
  + 防抖函数只会**在停止触发事件后的一段时间后才会触发一次**，而如果在这个等待的时间内再次触发事件，防抖函数会自动重置
:::



### 结合二者

+ 思路：与节流函数类似，在没到达指定时间间隔时添加防抖逻辑，并重置等待时间
+ 场景：在一个在线编辑器中监听 `input` 事件
  + 若用户停止输入 3s 后发送请求保存至草稿(防抖)
  + 若用户思路清晰且输入速度根本停不下来，设置一个特定的时间将内容保存至草稿(节流)
  + (当然也可以只使用定时器的节流，取决于实现方式的容错性：如只使用节流时控制每 10s 保存一次；而结合二者时节流控制每 60s 保存一次，防抖控制 3s 内不再输入时保存一次)
```js
const debounceWithThrottle = (fn, timeout = 3000, wait = 1000) => {
  let start = Date.now()
  let timer = null
  return (...args) => {
    const now = Date.now()
    if (now - start >= timeout) {
      // 1.持续触发事件时，每隔一段时间触发一次函数
      console.log('throttle...')
      start = now
      fn(...args)
    } else {
      // 2.停止触发事件并经过一段事件后，触发一次函数
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        console.log('debounce...')
        // 重置时间，否则下次 throttle 触发的时间间隔为 timeout - wait
        start = now
        fn(...args)
      }, wait)
    }
  }
}

const log = () => console.log('input...')
document.getElementById('input').addEventListener('input', debounceWithThrottle(log))
```




## 睡眠函数

+ `setTimeout` 实现
```js
const sleep = (fn, timeout, ...args) => {
  setTimeout(() => {
    fn.apply(this, args)
  }, timeout)
}

const log = (...args) => { console.log(args) }
sleep(log, 1000, 1, 2, 3)
```
+ `setTimeout` + `Promise` 实现
```js
const sleep = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

const log = (...args) => { console.log(args) }
sleep(1000).then(() => {
  log(1, 2, 3)
})
```

::: tip 备注
+ `Promise` 实现的方式较为直观，不用时刻考虑参数的顺序
:::



## 记忆函数

+ 记忆函数实际上是一个闭包，它捕获了一个初始化的 `cache` 对象，然后在每次调用函数 `fn` 时都会操作 `cache` 对象：读取已有属性或添加新属性
```js
const memoize = (fn, cache) => {
  cache = (typeof cache === 'object' && cache !== null) ? cache : {}
  return function(arg) {
    if (!cache.hasOwnProperty(arg)) {
      cache[arg] = fn(arg)
    }

    return cache[arg]
  }
}

const factorial = n => {
  if (n === 1) {
    return 1
  }

  return n * factorial(n-1)
}

const fac = memoize(factorial, { 0: 1, 1: 1 })
console.log(fac(6)) // 一段时间后，打印 720
console.log(fac(6)) // 读取缓存，打印 720
```

::: tip 备注
+ 优点：避免重复运算，读取缓存结果速度快
+ 缺点：使用了闭包，导致内存不能回收，当缓存结果过大时影响性能
:::



## 洗牌算法

+ Lodash [shuffle()](https://github.com/lodash/lodash/blob/master/shuffle.js)
+ [Fisher–Yates 随机置乱算法](https://www.jianshu.com/p/6d43fa75bf85)
```js
const shuffle = arr => {
  const len = arr == null ? 0 : arr.length
  if (!len) {
    return []
  }

  let len = arr.length
  const res = [].concat(arr)
  while (len) {
    const rand = Math.floor(Math.random() * len--)
    const temp = res[len]
    res[len] = res[rand]
    res[rand] = temp
  }

  return res
}

console.log(shuffle([1, 2, 3, 4, 5]))
```



## 数字添加千分位符

+ 场景：在表示金额时，常用逗号(,)每隔千位就将数值隔开
```js
// 法1.字符串截取
const thousandTag = num => {
  const num2arr = num.toString().split('.')
  const partInt = num2arr[0].split('')
  const partFloat = num2arr[1] || ''
  const sign = partInt[0] === '-' ? partInt.shift() : ''
  let temp = []
  let ret = ''
  let len = partInt.length

  while (len >= 0) {
    temp.unshift(partInt.splice(-3, 3))
    len -= 3
  }
  // [[], ['1', '2', ''3]] -> [['1', '2', ''3]]
  if (temp[0].length === 0) {
    temp.shift()
  }
  // [['1', '2', '3'], ['4', '5', '6']] -> ['123', '456'] -> '123,456'
  ret = temp.map(v => v.join('')).join(',')
  // 是否是负数
  if (sign === '-') {
    ret = '-' + ret
  }
  // 是否包含小数部分
  if (partFloat === '') {
    return ret
  }

  return ret.concat('.', partFloat)
}

// 法2.使用正则替换


console.log(thousandTag(-1128.123))
```
