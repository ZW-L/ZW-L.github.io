## 简介

[Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)：

+ 一个通用性非常强的基类，描述了所有相同种类的元素所普遍具有的方法和属性
+ 一些接口(`HTMLElement`, `SVGElement`)通过继承 `Element` 并且扩展一些额外功能


## 属性

### 尺寸

+ `clientLeft: `
+ `clientTop`: 
+ `clientWidth`: 
+ `clientHeight`: 
+ `scrollWidth`: 
+ `scrollHeight`: 
+ `scrollLeft`: 
+ `scrollTop`: 
+ `scrollLeftMax`: 
+ `scrollTopMax`: 

### 其他

+ `id`: 
+ `className`: 
+ `classList`: 
+ `attributes`: 
+ `localName`: 
+ `namespaceURI`: 
+ `computedName`: 
+ `computedRole`: 
+ `innerHTML`: 
+ `outerHTML`: 
+ `prefix`: 
+ `slot`: 
+ `tabStop`: 
+ `shadowRoot`: 
+ `undoManager`: 
+ `undoScope`: 
+ `openOrClosedShadowRoot`: 


::: tip 其他属性：
+ 从 [Node](/base/javascript/dom/node) 对象继承了属性
+ 从 [ParentNode](/base/javascript/dom/parent-node) 接口扩展了属性
+ 从 [ChildNode](/base/javascript/dom/child-node) 接口扩展了属性
+ 从 [NonDocumentTypeChildNode](/base/javascript/dom/non-cnode) 接口扩展了属性
:::

## 方法

### 属性操作

+ `hasAttribute()`: 
+ `getAttribute()`: 
+ `getAttributeNames()`: 
+ `setAttribute()`: 
+ `toggleAttribute()`: 
+ `removeAttribute()`: 

### 滚动操作

+ `scroll()`: 
+ `scrollBy()`: 
+ `scrollTo()`: 
+ `scrollIntoView()`: 

### CSS 相关

+ `attachShadow()`: 
+ `animate()`: 
+ `createShadowRoot()`: 
+ `computedStyleMap()`: 
+ `getAnimations()`: 
+ `getBoundingClientRect()`: 
+ `getClientRects()`: 

### 其他

+ `insertAdjacentHTML()`: 
+ `insertAdjacentText()`: 
+ `matches()`: 
+ `pseudo()`: 
+ `requestFullscreen()`: 
+ `requestPointerLock()`: 
+ `hasPointerCapture()`: 
+ `setCapture()`: 
+ `setPointerCapture()`: 


::: tip 其他方法：
+ 从 [Node](/base/javascript/dom/node) 对象继承了方法
+ 从 [ParentNode](/base/javascript/dom/parent-node) 接口扩展了方法
+ 从 [ChildNode](/base/javascript/dom/child-node) 接口扩展了方法
+ 从 [NonDocumentTypeChildNode](/base/javascript/dom/non-cnode) 接口扩展了方法
:::


## 事件

### 其他

+ cancel
+ error
+ scroll
+ select
+ show
+ wheel
+ fullscreenchange
+ fullscreenerror

### 剪切板

+ copy
+ cut
+ paste

### 合成

+ compositionstart
+ compositionend
+ compositionupdate

### 焦点

+ blur
+ focus
+ focusin
+ focusout

### 键盘

+ keydown
+ keypress
+ keyup

### 鼠标

+ auxclick
+ click
+ dbclick
+ contextmenu
+ mousedown
+ mouseenter
+ mouseleave
+ mousemove
+ mouseout
+ mouseover
+ mouseup

### 触摸

+ touchstart
+ touchmove
+ touchend
+ touchcancel