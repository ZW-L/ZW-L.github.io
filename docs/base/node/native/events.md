---
sidebarDepth: 2
---


## 简介

+ [events](http://nodejs.cn/api/events.html) 模块包含一个 `EventEmitter` 类和一些方法



## EventEmitter

+ `EventEmitter` 类是包含两个事件、一个属性和若干个方法


### 事件

+ `newListener`：新增监听器前触发，回调格式如下
  + callback: `(eventName: string | symbol, listener: function)`
+ `removeListener`：移除已存在监听器后触发，回调格式如下
  + callback: `(eventName: string | symbol, listener: function)`

```js
const EventEmitter = require('events').EventEmitter
const myEmitter = new EventEmitter()

function sayHi() {
  console.log('Hello World!')
}

myEmitter.on('newListener', (eventName, listener) => {
  console.log(`Add new listener: ${eventName}`)
})
myEmitter.on('removeListener', (eventName, listener) => {
  console.log(`Remove listener: ${eventName}`)
})

myEmitter.on('A', sayHi)
myEmitter.on('B', sayHi)
myEmitter.emit('A')
myEmitter.removeListener('A', sayHi)
myEmitter.removeListener('B', sayHi)
```

打印结果：
```
Add a new listener. removeListener
Add new listener: A
Add new listener: B
Hello World!
Remove listener: A
Remove listener: B
```

::: tip 说明：
+ 可以看出，如果先监听 `newListener` 事件，后面监听 `removeListener` 事件时会触发 `newListener` 事件
+ `newListener`/`removeListener` 的事件处理函数都保留了目标事件的处理函数句柄，因此都可以调用该函数：
```js
myEmitter.on('newListener', (eventName, listener) => {
  console.log(`Add new listener: ${eventName}`)
  listener() // Hello World!
})
myEmitter.on('removeListener', (eventName, listener) => {
  console.log(`Remove listener: ${eventName}`)
  listener() // Hello World!
})
```
:::


### 属性

+ `EventEmitter.defaultMaxListeners: number`：获取/设置默认的最大事件监听器数

::: tip 说明：
+ 每个 `EventEmitter` 实例的默认最大事件监听器为 10 个
+ 设置该属性会影响所有的 `EventEmitter` 实例，当只需要对某个实例起作用时，推荐使用 `emitter.setMaxListeners(n)`
:::


### 方法

+ **添加事件监听：** 以下方法都返回 `EventEmitter` 实例
  + `emitter.on(eventName, listener)`：添加事件监听器
  + `emitter.addListener(eventName, listener)`：相当于 `emitter.on()`
  + `emitter.once(eventName, listener)`：添加事件监听器，只会触发一次
  + `emitter.prependListener(eventName, listener)`：添加一个监听器在事件的监听器数组的开头
  + `emitter.prependOnceListener(eventName, listener)`：添加一个监听器在事件的监听器数组的开头，但只会触发一次
+ **移除事件监听：** 以下方法都返回 `EventEmitter` 实例
  + `emitter.off(eventName, listener)`：移除指定事件监听器
  + `emitter.removeListener(eventName, listener)`：相当于 `emitter.off()`
  + `emitter.removeAllListeners(eventName?: Array)`：移除所有事件监听器或指定的事件监听器
+ **触发事件：**
  + `emitter.emit(eventName: string, ...args: any): boolean`：按照监听器注册的顺序，同步地调用所有监听器，并传入参数列表
+ **其他：**
  + `emitter.getMaxListeners(): number`：获取实例的最大监听数
  + `emitter.setMaxListeners(n: number): EventEmitter`：设置实例的最大监听数
  + `emitter.eventNames(): string[]`：返回已注册监听器的事件名数组
  + `emitter.listenerCount(eventName: string): number`：返回正在监听指定事件的监听器的数量
  + `emitter.listeners(eventName: string): function[]`：返回指定事件的监听器数组的副本
  + `emitter.rawListeners(eventName: string): function[]`：返回指定事件的监听器数组的拷贝


::: tip 说明：
+ `EventEmitter` 实例的 `on()`/`once()` 方法和 `events` 模块的 `on()`/`once()` 方法是不一样的；前者始终返回一个 `EventEmitter` 实例，后者分别返回一个异步迭代器和一个 `Promise`
+ `listeners()` 得到的是监听器数组的副本(类似深拷贝)，而 `rawListeners()` 得到的是监听器数组的拷贝(类似浅拷贝)，所以它们执行的结果是不一样的
```js
const EventEmitter = require('events')

const emitter = new EventEmitter()
emitter.once('log', () => console.log('只记录一次'))

const listeners = emitter.listeners('log')
const rawListeners = emitter.rawListeners('log')

// 执行时不会影响 emitter 的 log 事件
listeners[0]()
emitter.emit('log')
// 只记录一次
// 只记录一次

// 相当于执行一次 emitter.emit('log')
rawListeners[0]()
emitter.emit('log')
// 只记录一次
```
+ 但 `rawListeners()` 得到的监听器都有一个 `listener()` 方法，因此他有两种执行方式
```js
const EventEmitter = require('events')

const emitter = new EventEmitter()
emitter.once('log', () => console.log('只记录一次'))

const listeners = emitter.rawListeners('log')
const logFnWrapper = listeners[0]

// 执行方式一：不会解绑 once() 绑定的事件
logFnWrapper.listener()
emitter.emit('log')

// 打印结果：
// 只记录一次
// 只记录一次

// 执行方式二：会解绑 once() 绑定的事件
logFnWrapper()
emitter.emit('log')
// 打印结果：
// 只记录一次
```
:::



## once()

+ 返回一个 `Promise`，当一个 `EventEmitter` 实例触发指定事件时则会被 `resolve`，触发 `error` 时会被 `reject`
+ 语法：`events.once(emitter: EventEmitter, eventName: string): Promise`

```js
const { once, EventEmitter } = require('events')

async function run() {
  const ee = new EventEmitter()
  process.nextTick(() => {
    ee.emit('myevent', 42)
  })

  const [value] = await once(ee, 'myevent')
  console.log(value)

  const err = new Error('错误信息')
  process.nextTick(() => {
    ee.emit('error', err)
  })

  try {
    await once(ee, 'myevent')
  } catch (err) {
    console.log('出错:', err.message)
  }
}

run()

// 42
// 出错: 错误信息
```


## on()

+ 返回一个异步迭代器，迭代顺序为触发事件的顺序，内容为传递给事件的参数数组
+ 语法：`events.on(emitter: EventEmitter, eventName; string): AsyncIterator`

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter()
  process.nextTick(() => {
    ee.emit('foo', 'bar')
    ee.emit('foo', 42)
  })

  for await (const event of on(ee, 'foo')) {
    console.log(event)
  }
})()

// [ 'bar' ]
// [ 42 ]
```