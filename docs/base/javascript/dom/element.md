## 简介

[Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)：

+ 一个通用性非常强的基类，描述了所有相同种类的元素所普遍具有的方法和属性
+ 一些接口(`HTMLElement`, `SVGElement`)通过继承 `Element` 并且扩展一些额外功能


## 属性

### 尺寸

|属性|类型|说明|
|-|-|-|
|`clientLeft`|`readonly Number`|元素左边框的厚度| 
|`clientTop`|`readonly Number`|元素上边框的厚度| 
|`clientWidth`|`readonly Number`|元素的内部宽度| 
|`clientHeight`|`readonly Number`|元素的内部高度| 
|`scrollWidth`|`readonly Number`|元素的滚动内容宽度| 
|`scrollHeight`|`readonly Number`|元素的滚动内容高度| 
|`scrollLeft`|`Number`|读取/设置元素滚动条到元素左边的距离| 
|`scrollTop`|`Number`|读取/设置元素滚动条到元素顶部的距离| 

::: tip 说明：
+ `clientLeft`/`clientTop` 实际上代表左/上边框(`border`)的厚度，但是存在滚动条时会将滚动条计算在内
+ `clientWidth`/`clientHeight` 只包含元素宽高和内边距(`padding`)，不包含滚动条、边框(`border`)、外边距(`margin`)
+ `scrollWidth`/`scrollWidth` 不产生滚动时和 `clientWidth`/`clientHeight` 是一样的，若滚动时代表的是元素边框(不包括)以内和伪类(`::after`, `::before`)的值
+ `clientWidth`/`clientHeight`/`scrollWidth`/`scrollWidth` 返回的是四舍五入的整数，`getBoundingClientRect()` 会返回精确的小数
:::

### 其他

|属性|类型|说明|
|-|-|-|
|`id`|`String`|获取/设置元素的 `id` 属性| 
|`className`|`String`|获取/设置元素的 `class` 属性| 
|`classList`|`readonly  DOMTokenList`|元素 `class` 属性的实时集合| 
|`attributes`|`readonly NamedNodeMap`|元素所有属性节点的实时集合| 
|`tagName`|`readonly String`|元素的标签名|
|`localName`|`readonly String`|元素标签的本地化名称| 
|`namespaceURI`|`readonly String | Null`|元素的命名空间| 
|`prefix`|`readonly String | Null`|元素的命名空间前缀| 
|`innerHTML`|`String`|获取/设置元素内的 `HTML` 内容| 
|`outerHTML`|`String`|获取/设置元素本身的 `HTML` 内容| 
|`shadowRoot`|`readonly ShadowRoot | Null`|元素挂载的 `ShadowRoot`| 
|`slot`|`String`|元素所在的 Shadow DOM slot 的名称| 


::: tip 说明：
+ `namespaceURI` 在现在的浏览器中一般返回 `http://www.w3.org/1999/xhtml`
+ `innerHTML` 和 `outerHTML` 的异同：
  + 返回值时都会返回 `HTML` 字符实体，设置值时都会渲染 `HTML` 标签(存在安全问题)
  + 不同的地方是 `innerHTML` 返回的内容不包括自身标签，而 `outerHTML` 包含自身标签

:::


::: tip 更多属性：
+ 从 [Node](/base/javascript/dom/node) 对象继承了属性
+ 从 [ParentNode](/base/javascript/dom/parent-node) 接口扩展了属性
+ 从 [ChildNode](/base/javascript/dom/child-node) 接口扩展了属性
+ 从 [NonDocumentTypeChildNode](/base/javascript/dom/non-cnode) 接口扩展了属性
:::

## 方法

### 属性操作

+ `hasAttribute(attr: String): Boolean`: 指示元素是否包含某个属性
+ `getAttribute(attr: String): Object`: 返回元素的指定属性
+ `getAttributeNames(): Array`: 返回元素的所有属性名
+ `setAttribute(name: String, value: String | Boolean): Undefined`: 设置元素的指定属性(不存在则直接添加属性)
+ `toggleAttribute(name: String, force?: Boolean): Boolean`: 切换元素的某个布尔值属性的状态
+ `removeAttribute(attr: String): Undefined`: 删除元素的指定属性

::: tip 说明：
+ 一起使用 `getAttributeNames()` 和 `getAttribute()` 操作属性的方式优于直接使用 `attributes` 属性
:::

### 滚动操作

+ `scroll((x, y) | options): void`: 滚动到文档中的某个坐标
+ `scrollTo((x, y) | options): void`: 等同于 `scroll()`
+ `scrollBy((x, y) | options): void`: 按指定的偏移量滚动文档
+ `scrollIntoView(alignToTop?: Boolean | option?: Object): void`: 将元素滚动到浏览器窗口的可视区域内
  + `alignToTop`: 指定元素的顶端是否和其所在滚动区的可视区域的顶端对齐
  + `options`: 包含以下可选属性：
    + `behavior`: 动画过渡效果，取值 `auto`(默认)/`smooth`
    + `block`: 定义垂直方向的对齐，取值 `start`(默认)/`center`/`end`/`nearest`
    + `inline`: 定义水平方向对齐，取值 `start`/`center`/`end`/`nearest`(默认)

### CSS 相关

+ `animate(keyframes: Object, options?: Object): Animation`: 创建一个 `Animation`
+ `getBoundingClientRect(): DOMRect`: 返回元素的大小及其相对于视口(即文档左上角)的位置
+ `getClientRects(): DOMRect[]`: 返回一个指向客户端中每一个盒子的边界矩形的矩形集合

::: tip DOMRect 的属性：
+ `left readonly Number`: 盒子左上角相对于视口原点左侧的 x 偏移
+ `top readonly Number`: 盒子左上角相对于视口原点顶部的 y 偏移
+ `right readonly Number`: 盒子右下角相对于视口原点左侧的 x 偏移
+ `bottom readonly Number`: 盒子右下角相对于视口原点顶部的 y 偏移
+ `width readonly Number`: 盒子的宽度(等同于 `right - left`)
+ `height readonly Number`: 盒子的高度(等同于 `bottom - top`)
+ `x readonly Number`: 等同于 `left`
+ `y readonly Number`: 等同于 `top`
:::

### 其他

+ `attachShadow(init: Object): ShadowRoot`: 给指定的元素挂载一个 Shadow DOM
  + `init` 可以使用 `mode` 字段，取值为 `open`/`closed`
+ `closeSet(selectors: CSSSelector): Element | Null`: 返回特定选择器且离自身元素最近的祖先元素(可以是自身)
+ `setPointerCapture(pointerId: Number): void`: 将特定元素指定为未来指针事件的捕获目标
+ `hasPointerCapture(pointerId: Number): Boolean`: 指示元素是否有指针捕获
+ `insertAdjacentHTML(position: Enum, element: Element): Element | Null`: 将特定元素节点插入到元素的给定的位置，`position` 的取值可以为：
  + `beforebegin`: 元素的前面
  + `afterend`: 在元素的后面
  + `afterbegin`: 在元素中，且成为元素的第一个子元素
  + `beforeend`: 在元素中，且成为元素的最后一个子元素
+ `insertAdjacentText(position: Enum, text: String)`: 将指定文本解析为 `HTML` 或 `XML` 后插入到元素的指定位置
+ `matches(selectors: CSSSelector): Boolean`: 指示元素是否匹配指定的 `CSS` 选择器
+ `requestFullscreen(options?: FullscreenOptions): Promise`: 发出异步请求使元素进入全屏模式
+ `requestPointerLock(): Promise`: 发出异步请求将指针锁定在给定元素

::: tip 说明：
+ `insertAdjacentText()` 不会重新解析它正在使用的元素，因此性能优于 `innerHTML`；如果仅仅是为了插入字符串文本，使用 `Node.textContent()` 方法更好，这样不会经过 `HTML` 解析器从而提高性能
:::

::: tip 更多方法：
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