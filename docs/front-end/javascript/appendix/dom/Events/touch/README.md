## 事件

[touch](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent) 类事件包含以下几种：

+ touchstart：触摸开始时触发
+ touchmove：触摸并在目标对象上移动时触发
+ touchend：触摸结束时触发
+ touchcancel：触摸取消时触发


### touchstart

&emsp;&emsp;触摸开始时触发，一次触摸只会发生一次。其中：

+ 触摸后不移动而直接松开，touchstart -> touchend -> click
+ 触摸后在移动前被打断，touchstart -> touchcancel
+ 触摸后在移动中被打断，touchstart -> touchmove -> touchcancel
+ 可以调用 event.preventDefault() 来阻止 click 事件触发

### touchmove

&emsp;&emsp;触摸并发生偏移时触发，其中：

+ 该事件会持续触发
+ 该事件之后会触发 touchend 或 touchcancel(被其他原因打断时)
+ 而且即使触摸从目标元素发出，但过程中逃离了目标元素，该事件也并不会被打断
+ 当触点的半径、旋转角度以及压力大小发生变化时，也将触发该事件
+ 不同浏览器上 touchmove 事件的触发频率并不相同，这个触发频率还和硬件设备的性能有关

### touchend

&emsp;&emsp;触摸离开触摸屏面时触发，其中

+ 仅仅离开触摸的目标元素是不会触发的，因为 touchmove 事件会一直保持
+ 触摸事件打断时不会触发该事件，而是触发 touchcancel
+ 已经被从触摸平面上移除的触点，可以在 changedTouches 属性中找到

### touchcancel

&emsp;&emsp;触点由于某些原因被中断时触发，其中可能打断的原因：

+ 由于某个同步事件取消了触摸：例如触摸过程被一个模态的弹出框打断。此类事件大多由用户代理直接触发
+ 触点离开了文档窗口，而进入了浏览器的界面元素、插件或者其他外部内容区域
+ 当用户产生的触点个数超过了设备支持的个数，从而导致 TouchList 中最早的 Touch 对象被取消




## 属性

&emsp;&emsp;触摸事件对象包含以下的[属性](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8)：

属性|说明
-|-
e.altKey|布尔值，指明触摸事件触发时，键盘 alt 键是否被按下。
e.ctrlKey|布尔值，指明触摸事件触发时，键盘 ctrl 键是否被按下。
e.metaKey|布尔值，指明触摸事件触发时，键盘 meta 键是否被按下。
e.shiftKey|布尔值，指明触摸事件触发时，键盘 shift 键是否被按下。
e.changedTouches|一个 TouchList 对象，包含了代表所有从上一次触摸事件到此次事件过程中，状态发生了改变的触点的 Touch 对象。
e.targetTouches|一个 TouchList 对象，是包含了如下触点的 Touch 对象：触摸起始于当前事件的目标 element 上，并且仍然没有离开触摸平面的触点。
e.touches|一 个 TouchList 对象，包含了所有当前接触触摸平面的触点的 Touch 对象，无论它们的起始于哪个 element 上，也无论它们状态是否发生了变化。


### e.changedTouches




### e.targetTouches




### e.touches

&emsp;&emsp;只有 `touchstart` 和 `touchmove` 才具有以下所有属性，而 `touchend` 和 `touchcancel` 只有 `length` 属性，且值为 0：

属性|说明
-|-
length|取值为0、1、2、3，标识触点的个数(单点，双指，三指)
force|
identifier|
rotationAngle|
target|触摸事件的目标 DOM 元素
clientX|相对于浏览器左上角的 x 偏移
clientY|相对于浏览器左上角的 y 偏移
pageX|相对于页面左上角的 x 偏移
pageY|相对于页面左上角的 y 偏移
screenX|相对于屏幕左上角的 x 偏移
screenY|相对于屏幕左上角的 y 偏移
radiusX|
radiusY|


## 兼容性

&emsp;&emsp;[兼容性](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)

+ 电脑端 IE 和 Safari 均不支持
+ 移动端完美支持