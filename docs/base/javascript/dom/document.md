## 介绍

[Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)：

+ 表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是 DOM 树
+ 向网页文档本身提供了全局操作功能(如获取页面的 URL ，在文档中创建一个新的元素等)
+ 描述了任何类型的文档的通用属性与方法

## 构造函数

```js
const doc = new Document()
```



## 属性

### 返回元素

+ `documentElement: readonly Element`: 文档的直接子节点(一般为 `<html>` 元素)
+ `head: readonly Element`: 文档的 `<head>` 元素
+ `body: readonly Element`: 文档的 `<body>` 元素
+ `all: readonly HTMLAllCollection`: 文档中所有锚点元素
+ `anchors: readonly HTMLCollection`: 文档中所有超链接元素
+ `embeds: readonly HTMLCollection`: 文档的所有 `<embed>` 元素
+ `forms: readonly HTMLCollection`: 文档的所有 `<form>` 元素
+ `images: readonly HTMLCollection`: 文档的所有 `<img>` 元素
+ `links: readonly HTMLCollection`: 文档的所有 `<a>` 元素
+ `scripts: readonly HTMLCollection`: 文档的所有 `<script>` 元素
+ `plugins: readonly HTMLCollection`: 一个可用插件列表
+ `scrollingElement: readonly Element`: 标准模式下返回 `<html>`，怪异模式下返回 `<body>`

### 返回接口

+ `fonts: FontFaceSet`: 文档的 `FontFaceSet` 接口
+ `featurePolicy: FeaturePolicy`: 文档的 `FeaturePolicy` 接口
+ `implementation: readonly DOMImplementation`: 文档的 `DOMImplementation` 接口
+ `timeline: DocumentTimeline`: 文档的 `DocumentTimeline` 接口

### 其他

+ `doctype: readonly String`: 文档的类型定义
+ `characterSet: readonly String`: 文档的字符集
+ `documentURI: readonly String`: 文档的路径
+ `compatMode: readonly Boolean`: 指示文档是否以怪异模式或严格模式显示
+ `contentType: readonly String`: 根据文档的 `MIME-header` 返回 `Content-type`
+ `hidden: readonly Boolean`: 指示页面是否隐藏
+ `visibilityState: readonly Enum`: 描述文档的可见性，取值
  + `visible`: 页面内容至少是部分可见(此页面在前景标签页中，并且窗口没有最小化)
  + `hidden`: 此时页面对用户不可见(文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于锁屏状态)
  + `prerender`: 页面此时正在渲染中, 因此是不可见的(文档只能从此状态开始，永远不能从其他值变为此状态)
  + `unloaded`: 页面从内存中卸载



::: tip 其他属性：
+ 从 [Node](/base/javascript/dom/node) 对象继承了属性
+ 从 [ParentNode](/base/javascript/dom/parent-node) 接口扩展了属性
+ 从 [HTMLDocument](/base/javascript/dom/html-document) 接口继承了属性
:::



## 方法

### 创建节点

+ `createTextNode(): Text`: 创建并返回一个 `Text` 节点
+ `createAttribute(name: String): Attr`: 创建并返回一个 `Attr` 节点
+ `createComment(data: String): Comment`: 创建并返回一个 `Comment` 节点
+ `createElement(tagName: String, options?: Object): Element`: 创建并返回一个 `Element` 节点
+ `createDocumentFragment(): DocumentFragment`: 创建并返回一个空的 `DocumentFragment` 片段
+ `createCDATASection(data): CDATASection`: 创建并返回一个 `CDATASection` 节点
+ `createProcessingInstruction(target, data: String): ProcessingInstruction`: 创建并返回一个 `ProcessingInstruction` 节点

### 返回接口对象

+ `createRange(): Range`: 返回一个 `Range` 对象
+ `createTouchList(touches*: Touch): TouchList`: 返回一个 `TouchList` 对象
+ `createRangeFromPoint(x: Number, y: Number): Range | Null`: 返回一个 `Range` 对象
+ `createTreeWalker(root: Node, toShow: Number, filter: Function): TreeWalker`: 返回一个 `TreeWalker` 对象
+ `createNodeIterator(root: Node, toShow: Number, filter: Function): NodeIterator`: 返回一个 `NodeIterator` 对象

### 其他

+ `getAnimations(): Animation[]`: 返回当前有效的所有 `Animation` 对象
+ `adoptNode(node: Node): Node`: 从其他 `document` 文档中获取一个节点
+ `enableStyleSheetsForSet(name: String): void`: 启用与当前样式表集中的指定样式表，并禁用所有其他样式表
+ `importNode(targetNode: Node, deep=true?: Boolean): resultNode`: 拷贝外部文档的一个节点插入到当前文档中
+ `exitPointerLock()`: 解锁鼠标(异步)
+ `releaseCapture(): void`: 释放鼠标捕获
+ `hasStorageAccess(): Promise`: 指示文档是否有权访问第一方存储
+ `requestStorageAccess(): Promise`: 解析是否授予对第一方存储的访问权限


::: tip 其他方法：
+ 从 [Node](/base/javascript/dom/node) 对象继承了方法
+ 从 [ParentNode](/base/javascript/dom/parent-node) 接口扩展了方法
+ 从 XPathEvaluator 接口扩展了方法：
  + `createExpression()`
  + `createNSResolver()`
  + `evaluate()`
+ 从 [HTMLDocument](/base/javascript/dom/html-document) 接口继承了方法
:::

::: tip 包括从其他接口实现，Document 一共拥有以下几种获取 Element 节点的方法：
+ `getElementsByClassName(className: String): HTMLCollection`
+ `getElementsByTagName(tagName: String): HTMLCollection`
+ `getElementsByName(name: String): HTMLCollection`
+ `getElementById(idName: String): Element`
+ `querySelector(CSSSelector: String): Element`
+ `querySelectorAll(CSSSelector: String): NodeList`
:::



## 事件

### 动画

+ `animationcancel`: 
+ `animationstart`: 
+ `animationend`: 
+ `animationiteration`: 

### 过渡

+ `transitioncancel`: 
+ `transitionstart`: 
+ `transitionend`: 
+ `transitionrun`: 

### 剪贴板

+ `copy`: 
+ `cut`: 
+ `paste`: 

### 键盘

+ `keydown`: 
+ `keypress`: 
+ `keyup`: 

### 指针

+ `gotpointercapture`: 
+ `loastpointercapture`: 
+ `pointerlockchange`: 
+ `pointerlockerror`: 
+ `pointercancel`: 
+ `pointerdown`: 
+ `pointerenter`: 
+ `pointerleave`: 
+ `pointermove`: 
+ `pointerout`: 
+ `pointerover`: 
+ `pointerup`: 

### 选择

+ `selectionchange`: 
+ `selectstart`: 

### 拖放

+ `drag`: 
+ `dragstart`: 
+ `dragenter`: 
+ `dragleave`: 
+ `dragover`: 
+ `dragend`: 
+ `dragexit`: 
+ `drop`: 

### 触摸

+ `touchcancel`: 
+ `touchstart`: 
+ `touchmove`: 
+ `touchend`: 

### 其他

+ `DOMContentLoaded`: 
+ `readystatechange`: 
+ `scroll`: 
+ `wheel`: 
+ `visibilitychange`: 
+ `fullscreenchange`: 
+ `fullscreenerror`: 