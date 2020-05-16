## 简介

+ [timer](http://nodejs.cn/api/timers.html)模块暴露了一些全局的 API，用于预定在将来某个时间段调用的函数
+ 定时器函数与 Web 浏览器类似，但使用了不同的内部实现（基于 Node.js 事件循环）




## Immediate

`setImmediate()` 返回一个 `Immediate` 实例：
+ `immediate.hasRef()`：
+ `immediate.ref()`：
+ `immediate.unref()`：




## Timeout

`setTimeout()`/`setInterval()` 返回一个 `Timeout` 实例：
+ `timeout.hasRef()`：
+ `timeout.ref()`：
+ `timeout.unref()`：
+ `timeout.refresh()`：

::: tip 说明：
+ `unref()` 用于自动清除 `Interval` 定时器：
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




## 设置/清除定时器

+ `setImmediate(callback[, ...args])`：在 I/O 事件的回调之后立即执行 callback
+ `setTimeout(callback, delay[, ...args]))`：在指定延迟后执行一次 callback
+ `setInterval(callback, delay[, ...args]))`：每隔指定延迟执行一次 callback
+ `clearImmediate(immediate)`：取消由 `setImmediate()` 创建的 `Immediate` 对象
+ `clearTimeout(timeout)`：取消由 `setTimeout()` 创建的 `Timeout` 对象
+ `clearInterval(timeout)`：取消由 `setInterval()` 创建的 `Timeout` 对象

::: tip 说明：
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
