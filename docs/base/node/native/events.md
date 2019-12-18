## events

[events](http://nodejs.cn/api/events.html) 模块包含一个 `EventEmitter` 类和一个 `once()` 方法。

### EventEmitter

`EventEmitter` 类是


**事件：**

+ `newListener`：新增监听器时触发，事件回调接收参数为目标事件名、目标事件绑定的事件回调
  + callback: `(eventName: string | symbol, listener: function)`
+ `removeListener`：移除已存在监听器时触发，事件回调接收参数为目标事件名、目标事件绑定的事件回调
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

打印结果为：

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

**属性：**

+ `EventEmitter.defaultMaxListeners: number`：获取/设置默认的最大事件监听器数（会影响至所有 `EventEmitter` 实例）

**方法：**

+ 添加事件监听：
  + `emitter.addListener(eventName: string, listener: function): EventEmitter`：相当于 `emitter.on()`
  + `emitter.on(eventName: string, listener: function): EventEmitter`：添加事件监听器
  + `emitter.once(eventName: string, listener: function): EventEmitter`：添加事件监听器，只会触发一次
  + `emitter.prependListener(eventName: string, listener: function): EventEmitter`：添加一个函数在指定事件的监听器数组的开头
  + `emitter.prependOnceListener(eventName: string, listener: function): EventEmitter`：添加一个函数在指定事件的监听器数组的开头，但只触发一次

+ 移除事件监听：
  + `emitter.off(eventName: string, listener: function): EventEmitter`：移除指定事件监听器
  + `emitter.removeListener(eventName: string, listener: function): EventEmitter`：相当于 `emitter.off()`
  + `emitter.removeAllListeners(eventName?: Array): EventEmitter`：移除所有事件监听器或指定的事件监听器

+ 触发事件：
  + `emitter.emit(eventName: string, ...args: any): boolean`：按照监听器注册的顺序，同步地调用所有监听器，并传入参数列表

+ 其他：
  + `emitter.getMaxListeners(): number`：获取实例的最大监听数
  + `emitter.setMaxListeners(n: number): EventEmitter`：设置实例的最大监听数
  + `emitter.eventNames(): string[]`：返回已注册监听器的事件名数组
  + `emitter.listeners(eventName: string): function[]`：返回指定事件的监听器数组的副本
  + `emitter.listenerCount(eventName: string): number`：返回正在监听指定事件的监听器的数量
  + `emitter.rawListeners(eventName): function[]`：返回指定事件的监听器数组的拷贝

::: tip 说明：
+ 设置 `EventEmitter.defaultMaxListeners` 属性会影响所有的 `EventEmitter` 实例，当只需要对某个实例起作用时，使用 `emitter.setMaxListeners(n)` 更好
:::

### once()

&emsp;&emsp;用于创建一个 `Promise`，当一个 `EventEmitter` 实例触发指定事件时则会被 `resolve`，触发 `error` 时会被 `reject`。

**语法：** `events.once(emitter: EventEmitter, eventName: string): Promise`

```js

```


