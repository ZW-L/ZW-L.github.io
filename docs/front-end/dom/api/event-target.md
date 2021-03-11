## 介绍

[EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)：
+ 一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器
+ `Element`, `document` 和 `window` 是最常见的事件目标，其他对象也可以是事件目标(如 `XMLHttpRequest`, `AudioNode`, `AudioContext` 等)
+ 许多事件目标(`document`, `window`, `Element`)还支持 `onEvent` 的形式设置事件处理程序



## 构造函数

```js
const et = new EventTarget()
```



## 方法

+ `addEventListener(type: String, listener: Function, [useCapture: Boolean | options: Object]): Undefined`: 注册事件监听器
+ `removeEventListener(type: String, listener: Function, [useCapture: Boolean | options: Object]): Undefined`: 移除事件监听器
+ `dispatchEvent(event: Event): Boolean`: 向一个事件目标派发一个事件, 并以合适的顺序同步调用目标元素相关的事件处理函数

::: danger
+ 当 `removeEventListener` 的参数和 `addEventListener` 一致时，才能成功移除事件监听，这就意味着使用匿名函数作 `listener` 的事件监听无法被取消
:::