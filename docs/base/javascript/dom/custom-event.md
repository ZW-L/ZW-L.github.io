## 介绍

[CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)：

+ 继承自 [Event](/base/javascript/dom/event)
+ 用于创建任意自定义功能的事件

## 构造函数

```js
const ev = new CustomEvent(typeArg: String, customEvenInit?: Object)
```

+ `typeArg`: 事件的名字
+ `customEvenInit`: 事件初始化的设置对象，有以下字段：
  + `detail`: 默认为 `null`，一个与事件相关的值
  + `bubbles`: 布尔值，表示事件是否能冒泡
  + `cancelable`: 布尔值，表示事件是否可以取消


## 属性

+ 从 [Event](/base/javascript/dom/event) 接口继承了属性

## 方法

+ 从 [Event](/base/javascript/dom/event) 接口继承了方法