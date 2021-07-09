---
sidebarDepth: 2
---

## 介绍

+ `__dirname`
+ `__filename`
+ `Timer`
+ `Console`
+ [process](./process.md)
+ [buffer](./buffer.md)
+ [stream](./stream.md)


## __dirname

+ 一个变量，表示当前模块的目录名（绝对路径），等同于 `path.dirname(__filename)`
```js
console.log(__dirname)
// WIN下 d:\notes\web-docs-source
// MAC下 /Users/seven/front-end/web-docs-source
```
+ 由于操作系统的差异，常用来组合路径，该路径的分隔符自动适应操作系统：
```js
const path = require('path')

const work = path.join(__dirname, '/docs')
console.log(work)
```


## __filename

+ 当前模块的文件名的绝对路径，会解析符号链接
+ 对于主程序，不一定与命令行中使用的文件名相同
```js
console.log(__filename)
// WIN下 d:\notes\web-docs-source\test.js
// MAC下 /Users/seven/front-end/web-docs-source/test.js
```


## timer

+ [timer](http://nodejs.cn/api/timers.html)模块暴露了一些全局的 API，用于预定在将来某个时间段调用的函数
+ 定时器函数与 Web 浏览器类似，但使用了不同的内部实现（基于 Node.js 事件循环）

:::: tabs
::: tab Immediate
`setImmediate()` 返回一个 `Immediate` 实例：
+ `immediate.hasRef()`：
+ `immediate.ref()`：
+ `immediate.unref()`：
:::


::: tab Timeout
`setTimeout()`/`setInterval()` 返回一个 `Timeout` 实例：
+ `timeout.hasRef()`：
+ `timeout.ref()`：
+ `timeout.unref()`：
+ `timeout.refresh()`：


`unref()` 用于自动清除 `Interval` 定时器：
```js
const timer = setInterval(() => {
  console.log('Interval...')
}, 1000)

timer.unref()

setTimeout(() => {
  console.log('Done!')
}, 3000)
// Interval...
// Interval...
// Done!
```
:::



::: tab 设置/清除定时器
+ `setImmediate(callback[, ...args])`：在 I/O 事件的回调之后立即执行 callback
+ `setTimeout(callback, delay[, ...args]))`：在指定延迟后执行一次 callback
+ `setInterval(callback, delay[, ...args]))`：每隔指定延迟执行一次 callback
+ `clearImmediate(immediate)`：取消由 `setImmediate()` 创建的 `Immediate` 对象
+ `clearTimeout(timeout)`：取消由 `setTimeout()` 创建的 `Timeout` 对象
+ `clearInterval(timeout)`：取消由 `setInterval()` 创建的 `Timeout` 对象

说明：
+ 当 `delay` 不在区间 [1, 2147483647] 内时将设置为 1，非整数值会被截断为整数
+ `setTimeout()`/`setInterval()` 和浏览器的基本一致
+ 关于 `setImmediate()`：
  + 多次调用时，`callback` 会按照创建的顺序放入一个回调队列等待执行
  + 每次事件循环迭代都会处理整个回调队列
  + 如果是从正在执行的回调中调用，则直到下一次事件循环迭代才会执行
```js
setTimeout(() => {
  setImmediate(() => {
    console.log('immediate - 1')
    setImmediate(() => {
      console.log('immediate - 1.1')
    })
  })
  setImmediate(() => {
    console.log('immediate - 2')
  })
}, 100)
// immediate - 1
// immediate - 2
// immediate - 1.1
```
:::
::::




## console

+ console 的使用方式和 JavaScript 一样

:::: tabs
::: tab 构造函数
`Console` 类
+ `new Console(stdout[, stderr][, ignoreErrors])`: 
+ `new Console(options)`: 

方法概览：
+ `console.clear()`: 
+ `console.count([label])`: 
+ `console.countReset([label])`: 
+ `console.debug(data[, ...args])`: 
+ `console.table(tabularData[, properties])`: 
+ `console.time([label])`: 
+ `console.timeEnd([label])`: 
+ `console.timeLog([label][, ...data])`: 
+ `console.trace([message][, ...args])`: 
:::

::: tab 情景色/符号
+ `console.log([data][, ...args])`: 
+ `console.warn([data][, ...args])`: 
+ `console.error([data][, ...args])`:
+ `console.info([data][, ...args])`: 
:::

::: tab 分组
+ `console.dir(obj[, options])`: 
+ `console.dirxml(...data)`: 
+ `console.group([...label])`: 
+ `console.groupCollapsed()`: 
+ `console.groupEnd()`: 
:::

::: tab 仅用于调试的方法
+ `console.markTimeline([label])`: 
+ `console.profile([label])`: 
+ `console.profileEnd([label])`: 
+ `console.timeStamp([label])`: 
+ `console.timeline([label])`: 
+ `console.timelineEnd([label])`: 
:::

::: tab 其他
+ 断言：`console.assert(value[, ...message])`
:::
::::