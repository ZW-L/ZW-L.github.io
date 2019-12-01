---
sidebarDepth: 2
---

## 介绍

[Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)：

+ 表示在 `DOM` 中发生的任何事件
+ `DOM` 所有事件都继承自该接口
+ 事件对象关系图：

![事件对象关系图：](./imgs/event.png)

## 属性

|属性|类型|描述|
|-|-|-|
|`type`|`readonly String`|事件的类型(不区分大小写)|
|`bubbles`|`readonly Boolean`|指示事件是否是冒泡模式|
|`cancelable`|`readonly Boolean`|指示事件是否可以被取消|
|`composed`|`readonly Boolean`|指示事件是否可以从 Shadow DOM 传递到一般的 DOM|
|`defaultPrevented`|`readonly Boolean`|指示当前事件是否调用了 `preventDefault()`|
|`isTrusted`|`readonly Boolean`|指示事件是否由用户行为触发|
|`target`|`readonly Element`|触发事件的元素|
|`currentTarget`|`readonly Element`|绑定事件的元素|
|`timestamp`|`readonly String`|事件发生时的时间戳|
|`eventPhase`|`readonly Number`|表示事件流当前处于哪一个阶段|

::: tip 兼容老版本 IE 的几个属性：
+ `srcElement: readonly Element`: 触发事件的元素(相当于 `target`)
+ `returnValue: Boolean`: 获取/设置是否应该事件的默认行为，效果相当于 `preventDefault()`
+ `cancelBubble: Boolean`: 获取/设置是否允许事件冒泡，效果相当于 `stopPropagation()`
:::


## 方法

+ `preventDefault(): void`: 取消事件默认行为
+ `stopPropagation(): void`: 取消事件冒泡
+ `stopImmediatePropagation(): void`: 阻止事件冒泡并且阻止相同事件的其他侦听器被调用

::: tip 说明：
+ 为了兼容老版本 IE，通常会书写以下的兼容性代码：
```js
// 取消事件默认行为
if (e.preventDefault) {
  e.preventDefault()
} else {
  e.returnValue = false
}

// 取消事件冒泡
if (e.stopPropagation) {
  e.stopPropagation()
} else {
  e.cancelBubble = true
}
```
+ 一种同时取消事件冒泡和取消时间默认行为的方式为直接在事件处理函数中返回 `false`：
```js
list.addEventListener('click', function() {
  return false // 在 return 语句之后的代码都不会执行，只适用于某些特定情况
})
```
:::


## 事件绑定的方式

**事件绑定的方式有两种：**

+ 事件冒泡: 事件对象从事件目标开始，触发了自身的事件监听后开始向外冒泡，每到达一个父元素都会触发同种类型(时间名和事件绑定方式相同)的事件监听，直至到达 `window`
+ 事件捕获: 与事件冒泡相反，事件对象从 `window` 开始，触发了自身的事件监听后开始向内捕获，每到达一个子元素都会触发同种类型(时间名和事件绑定方式相同)的事件监听，直至到达事件目标


::: tip 说明：
+ 使用事件冒泡的方式可以实现事件委托(将事件监听器添加到一些元素的公共父元素，由该父元素进行事件处理，避免添加过多的事件监听影响性能)：
```html
<ul id="list">
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
```
```js
const list = document.getElementById('list')

list.addEventListener('click', e => {
  e.preventDefault()
  console.log(e.target.textContent) // 点击每个列表都会打印它们包含的文本
})
```
:::

## 事件进行的阶段

**一些列常量用于指示事件当前执行的阶段：**

|常量|值|描述|
|-|-|-|
|NONE|0|没有事件正在被处理|
|CAPTURE_PHASE|1|处于捕获阶段|
|AT-TARGET|2|处于事件目标(`target`)|
|BUBBLING_PHASE|3|处于冒泡阶段|

**事件流的三个阶段：**[W3C](https://www.w3.org/TR/DOM-Level-3-Events/#dom-event-architecture)

![事件流的三个阶段](./imgs/eventflow.svg)


## 特定事件对象

&emsp;&emsp;以下的事件对象都继承了 `Event` 对象，并在其之上扩展了部分属性和方法。

### [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)

**介绍：**

+ 用于创建任意自定义功能的事件

**构造函数：**

```js
const ev = new CustomEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `detail=null: All`: 一个与事件相关的值
  + `bubbles: Boolean`: 表示事件是否能冒泡
  + `cancelable: Boolean`: 表示事件是否可以取消


### [UIEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/UIEvent)

**介绍：**

+ 表示简单的用户界面事件
+ 主要为一些 UI 事件提供公共的属性和方法：
  + MouseEvent
  + TouchEvent
  + FocusEvent
  + KeyBoardEvent
  + CompositionEvent

**构造函数：**

```js
const ev = new UIEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `detail=null: All`: 一个与事件相关的值
  + `bubbles: Boolean`: 表示事件是否能冒泡
  + `cancelable: Boolean`: 表示事件是否可以取消

**属性：**

|属性|类型|描述|
|-|-|-|
|`detail`|`readonly Number`|提供当前鼠标点击数(和环境有关)|
|`layerX`|`readonly Number`|事件(鼠标点击位置)相对于当前层的水平坐标|
|`layerY`|`readonly Number`|事件(鼠标点击位置)相对于当前层的垂直坐标|
|`pageX`|`readonly Number`|事件(鼠标点击位置)相对于整个文档的水平坐标|
|`pageY`|`readonly Number`|事件(鼠标点击位置)相对于整个文档的垂直坐标|
|`which`|`readonly Number`|按下的键盘键或鼠标按键的 `keyCode`|
|`view`|`readonly WindowProxy`|返回产生该事件的视图(一般为 `window`)|

::: tip 说明：
+ `layerX`/`layerY` 返回的值是相对于定位属性不是 `static` 的父元素的，否则其效果相当于 `pageX`/`pageY`
:::

### [MouseEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)

**介绍：**

+ 继承 `UIEvent` 的属性和方法
+ 描述用户与指针设备(如鼠标)交互时发生的事件

**构造函数：**

```js
const ev = new MouseEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `screenX=0: Number`: 设置鼠标事件发生时相对于用户屏幕的水平坐标位置
  + `screenY=0: Number`: 设置鼠标事件发生时相对于用户屏幕的垂直坐标位置
  + `clientX=0: Number`: 设置鼠标事件发生时相对于客户端窗口的水平坐标位置
  + `clientY=0: Number`: 设置鼠标事件发生时相对于客户端窗口的垂直坐标位置
  + `ctrlKey=false: Boolean`: 表明是否同时按下 `ctrl` 键
  + `shiftKey=false: Boolean`: 表明是否同时按下 `shift` 键
  + `altKey=false: Boolean`: 表明是否同时按下 `alt` 键
  + `metaKey=false: Boolean`: 表明是否同时按下 `meta` 键
  + `button=0: Number`: 描述事件发生时被按下或释放的按键
    + 0: 鼠标左键
    + 1: 鼠标中键
    + 2: 鼠标右键
  + `buttons=0: Number`: 描述事件发生时哪些按键被按下
  + `relatedTarget=null: EventTarget`: 若事件为 `mouseenter`/`mouseover`，则表示刚离开的元素；若事件为 `mouseout`/`mouseleave`，则表示刚进入的元素
  + `region=null: String`: 知名点击事件影响的 DOM 的 `id`

::: tip 说明：
+ 设置的 `screenX`/`screenY`/`clientX`/`clientY` 都不会影响真实触发事件的鼠标的位置
:::

**属性：**

|属性|类型|描述|
|-|-|-|
|`altKey`|`readonly Boolean`|指示事件触发时 `alt` 键是否按下|
|`ctrlKey`|`readonly Boolean`|指示事件触发时 `ctrl` 键是否按下|
|`metaKey`|`readonly Boolean`|指示事件触发时 `meta` 键是否按下|
|`shiftKey`|`readonly Boolean`|指示事件触发时 `shift` 键是否按下|
|`clientX`|`readonly Number`|鼠标指针相对于文档左上角的 X 坐标|
|`clientY`|`readonly Number`|鼠标指针相对于文档左上角的 Y 坐标|
|`offsetX`|`readonly Number`|鼠标指针相对于目标节点左上角的 X 坐标|
|`offsetY`|`readonly Number`|鼠标指针相对于目标节点左上角的 Y 坐标|
|`screenX`|`readonly Number`|鼠标指针相对于屏幕的 X 坐标|
|`screenY`|`readonly Number`|鼠标指针相对于屏幕的 X 坐标|
|`movementX`|`readonly Number`|鼠标指针相对于最后 `mousemove` 事件位置的 X 坐标|
|`movementY`|`readonly Number`|鼠标指针相对于最后 `mousemove` 事件位置的 Y 坐标|
|`button`|`readonly Number`|触发事件的鼠标按键|
|`buttons`|`readonly Number`|事件触发时被按下的一些鼠标按键|
|`region`|`readonly String | Null`|被点击事件影响的点击区域的 id|
|`relatedTarget`|`readonly EventTarget | Null`|鼠标事件的次要目标|


::: tip 说明：
+ 区分鼠标的位置：
  + `pageX`/`pageY` 相对于文档的左上角，受页面滚动影响
  + `clientX`/`clientY` 相对于文档的左上角，不受页面滚动的影响
  + `screenX`/`screenY` 相对于屏幕的左上角，不受页面滚动影响
  + `offsetX`/`offsetY` 相对于点击元素的左上角，受元素滚动影响
:::


### [WheelEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/WheelEvent)

**介绍：**

+ 继承 `MouseEvent` 的属性和方法
+ 用户滚动鼠标滚轮时触发

**构造函数：**

```js
const ev = new WheelEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `deltaX=0.0: Number`: 滚轮的 x 轴方向上的滚动量
  + `deltaY=0.0: Number`: 滚轮的 y 轴方向上的滚动量
  + `delta=0.0: Number`: 滚轮的 z 轴方向上的滚动量
  + `deltaMode=0: Number`: 表示滚动量的单位:
    + DOM_DELTA_PIXEL(0x00): 像素
    + DOM_DELTA_LINE(0x01): 行
    + DOM_DELTA_PAGE(0x02): 页

**属性：**

|属性|类型|描述|
|-|-|-|
|`deltaX`|`readonly Number`|滚轮的 x 轴方向上的滚动量|
|`deltaY`|`readonly Number`|滚轮的 y 轴方向上的滚动量|
|`deltaZ`|`readonly Number`|滚轮的 Z 轴方向上的滚动量|
|`deltaMode`|`readonly Number`|表示滚动量的单位|

### [DragEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent)

**介绍：**

+ 继承 `MouseEvent` 的属性和方法
+ 表示拖、放交互的一类事件
+ 包含以下事件：
  + drag
  + dragstart
  + dragenter
  + dragleave
  + dragover
  + dragexit
  + dragend
  + drop
+ 其他相关接口对象
  + DataTransfer

**构造函数：**

```js
const ev = new DragEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `dataTransfer=null: DataTransfer`

**属性：**

+ `dataTransfer: DataTransfer`: 拖放事件中传输的数据对象


### [TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent)

**介绍：**

+ 继承 `UIEvent` 的属性和方法
+ 一类描述手指在触摸平面(触摸屏、触摸板等)的状态变化的事件，用于描述一个或多个触点，使开发者可以检测触点的移动、增加和减少等
+ 每个 `Touch` 对象代表一个触点，每个触点都由其位置、大小、形状、压力大小、和目标 element 描述组成，`TouchList` 对象代表多个触点的一个列表
+ 包含以下事件：
  + touchstart
  + touchmove
  + touchend
  + touchcancel
+ 其他相关接口对象
  + Touch
  + TouchList

**构造函数：**

```js
const ev = new TouchEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `touches=[]: TouchList`: 当前接触触摸平面的所有触点的 `Touch` 对象列表
  + `targetTouches=[]: TouchList`: 从上一次触摸事件到此次事件过程中，状态发生了改变的所有触点的 `Touch` 对象列表
  + `changedTouches=[]: TouchList`: 触摸起始于当前事件的目标 `element` 上，并且仍然没有离开触摸平面的所有触点的 `Touch` 对象列表
  + `ctrlKey=false: Boolean`: 表明是否同时按下 `ctrl` 键
  + `shiftKey=false: Boolean`: 表明是否同时按下 `shift` 键
  + `altKey=false: Boolean`: 表明是否同时按下 `alt` 键
  + `metaKey=false: Boolean`: 表明是否同时按下 `meta` 键

**属性：**

|属性|类型|描述|
|-|-|-|
|`touches`|`readonly TouchList`|当前接触触摸平面的所有触点的 `Touch` 对象列表|
|`targetTouches`|`readonly TouchList`|从上一次触摸事件到此次事件过程中，状态发生了改变的所有触点的 `Touch` 对象列表|
|`changedTouches`|`readonly TouchList`|触摸起始于当前事件的目标 `element` 上，并且仍然没有离开触摸平面的所有触点的 `Touch` 对象列表|
|`ctrlKey`|`readonly Boolean`|指示是否同时按下 `ctrl` 键|
|`shiftKey`|`readonly Boolean`|指示是否同时按下 `shift` 键|
|`altKey`|`readonly Boolean`|指示是否同时按下 `alt` 键|
|`metaKey`|`readonly Boolean`|指示是否同时按下 `meta` 键|

### [FocusEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/FocusEvent)

**介绍：**

+ 继承 `UIEvent` 的属性和方法
+ 表示和焦点相关的事件
+ 包含以下事件：
  + focus
  + focusin
  + focusout
  + blur

**构造函数：**

```js
const ev = new FocusEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `relatedTarget=null: EventTarget`: 事件的次要目标

**属性：**

|属性|类型|描述|
|-|-|-|
|`relatedTarget`|`readonly EventTarget | Null`|鼠标事件的次要目标|

### [KeyBoardEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyBoardEvent)

**介绍：**

+ 继承 `UIEvent` 的属性和方法
+ 描述了键盘的交互方式
+ 包含以下事件：
  + keydown
  + keyup
  + keypress

**构造函数：**

```js
const ev = new KeyBoardEvent(type: String, init?: Object)
```

+ `type`: 事件的名字
+ `init`: 事件初始化的设置对象，有以下字段：
  + `key`: 
  + `code`: 
  + `location`: 
  + `ctrlKey=false: Boolean`: 表明是否同时按下 `ctrl` 键
  + `shiftKey=false: Boolean`: 表明是否同时按下 `shift` 键
  + `altKey=false: Boolean`: 表明是否同时按下 `alt` 键
  + `metaKey=false: Boolean`: 表明是否同时按下 `meta` 键
  + `repeat=false: Boolean`: 
  + `isComposing=false: Boolean`: 
  + `charCode`: 
  + `keyCode`: 
  + `which`: 

**属性：**

|属性|类型|描述|
|-|-|-|
|`key`|||
|`code`|||
|`location`|||
|`ctrlKey`|`readonly Boolean`|表明是否同时按下 `ctrl` 键|
|`shiftKey`|`readonly Boolean`|表明是否同时按下 `shift` 键|
|`altKey`|`readonly Boolean`|表明是否同时按下 `alt` 键|
|`metaKey`|`readonly Boolean`|表明是否同时按下 `meta` 键|
|`repeat`|`readonly Boolean`||
|`isComposing`|`readonly Boolean`||
|`charCode`|||
|`keyCode`|||
|`which`|||


### [InputEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/InputEvent)

**介绍：**

**构造函数：**


### [CompositionEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CompositionEvent)

**介绍：**

**构造函数：**


### [PointerEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/PointerEvent)

**介绍：**

**构造函数：**


### [AnimationEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/AnimationEvent)

**介绍：**

**构造函数：**


### [TransitionEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TransitionEvent)

**介绍：**

**构造函数：**


