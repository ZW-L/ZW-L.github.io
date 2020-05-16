---
sidebarDepth: 2
---

## 微任务和宏任务

**简介：**
+ 微任务(micro task)和宏任务(macro task)分别维护一个队列，同步的任务在宏任务上执行
+ 在同一个事件循环中，微任务永远在宏任务之前执行

**常见微任务：**
+ process.nextTick()
+ promise

**常见宏任务：**
+ setTimeout()
+ setInterval()
+ setImmediate()
+ I/O



## 定时器






## nextTick()






## EventLoop

1. 从宏任务的头部取出一个任务执行
2. 执行过程中若遇到微任务则将其添加到微任务的队列中
3. 宏任务执行完毕后，若微任务的队列中存在任务，则逐个执行至全部完成
4. GUI 渲染
5. 回到步骤 1，直到宏任务执行完毕



## 异步原理

+ 当调用 Node.js API 的时候，Node.js 会将具体操作和回调函数交给 EventLoop 执行
+ EventLoop 维护了一个回调函数队列，当异步函数执行时，回调函数会被放入这个队列
+ 直至异步函数执行完成后，Javascript 引擎才会开始处理 EventLoop 维护的回调函数队列

::: tip 更多：
+ EventLoop 使用的是 C/C++ 编写的 libuv 库，而 libuv 采用了异步和事件驱动的编程风格，为开发人员提供一套基于 I/O 通知的回调函数
+ Node.js 的 异步原理类似 Ajax 原理，但是 Ajax 的核心是 XHR，而 Node.js 是 EventLoop
:::



## 事件处理方式

+ `callback`：采用错误优先回调的方式
+ `EventEmitter`：事件驱动里的事件发射器


### Callback

+ 回调函数的第一个参数为 `error` 错误对象，第二个参数是成功响应的结果数据
+ 如果成功响应时，第一个参数值为 `null`
+ API 写法约定
  + 回调函数作为函数的最后一个参数
  + 回调函数的参数遵循错误优先
  + 回调函数的函数体内优先检测错误


### EventEmitter

+ `events` 模块的一个构造函数，采用发布/订阅模式
+ `on()`：监听(订阅)事件，在某时刻触发回调函数
+ `emit()`：触发(发布)事件


::: tip 说明：
+ 类似前端的事件机制、Vue 的 `$on()`/`$emit()`、jQuery 的 `on()`/`trigger()`
:::



## 异步编程简介

+ Callback - 容易出现 “回调地狱”
+ Thunk - 让回调链式执行
+ Promise - 更优雅的 Thunk
+ Generator - 生成一切
+ async/await - 终极杀器
+ 最佳方式 - `Async` + `Promise`