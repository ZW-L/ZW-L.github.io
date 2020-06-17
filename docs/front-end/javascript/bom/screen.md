## 简介

[MDN screen](https://developer.mozilla.org/zh-CN/docs/Web/API/Screen)：

+ 表示一个屏幕窗口，往往指的是当前正在被渲染的 window 对象


## 属性

+ `availTop`: 屏幕上边边界的第一个像素点
+ `availLeft`: 屏幕左边边界的第一个像素点
+ `availWidth`: 窗口中水平方向可用空间的像素值
+ `availHeight`: 窗口中垂直方向可用空间的像素值
+ `width`: 屏幕的宽度
+ `height`: 屏幕的高度
+ `top`: 从最上边界到当前屏幕的像素值
+ `left`: 从最左边界到当前屏幕的像素值
+ `colorDepth`: 屏幕的色彩深度
+ `pixelDepth`: 屏幕的像素点
+ `orientation`: 屏幕的转向

## 方法

+ `addEventListener()`: 添加事件监听
+ `removeEventListener()`: 移除事件监听
+ `dispatchEvent()`: 派发事件
+ `lockOrientation()`: 锁定屏幕转向
+ `unlockOrientation()`: 解锁屏幕转向

## 事件

+ `onorientationchange`: 屏幕的转向改变时