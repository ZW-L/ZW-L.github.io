---
sidebarDepth: 2
---

## 简介

[MDN window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) 对象：

+ 表示一个包含 `DOM` 文档的窗口，`window.document` 属性指向窗口中载入的 `DOM` 文档，而 `document.defaultView` 指向 `window`
+ 每个标签页都拥有自己的 `window` 对象；也就是说，同一个窗口的标签页之间不会共享一个 `window` 对象
+ 作为全局变量，并挂载了很多不同功能的全局对象，暴露给当前窗口的 `Javascript` 脚本


## 属性

### 对象引用

+ `console`: 返回 `console` 对象的引用
+ `document`: 返回 `document` 对象的引用
+ `frames`: 返回 `frames` 对象的引用
+ `history`: 返回 `history` 对象的引用
+ `location`: 返回 `location` 对象的引用
+ `navigator`: 返回 `navigator` 对象的引用
+ `screen`: 返回 `screen` 对象的引用
+ `localStorage`: 返回 `localStorage` 对象的引用
+ `sessionStorage`: 返回 `sessionStorage` 对象的引用
+ `caches`: 返回 `CacheStorage` 对象的引用
+ `indexedDB`: 返回 `indexedDB` 对象的引用
+ `speechSynthesis`: 返回 `speechSynthesis` 对象的引用
+ `crypto`: 返回 `crypto` 对象的引用

### 浏览器属性

+ `name`: 获取/设置窗口的名称
+ `window`: 指向这个 `window` 对象本身
+ `self`: 一个指向当前 `window` 对象的引用
+ `top`: 返回窗口层级最顶层窗口的引用
+ `parent`: 窗口的父窗口的引用
+ `opener`: 打开当前窗口的那个窗口的引用
+ `closed`: 指示当前窗口是否关闭
+ `length`: 返回窗口中的 `frames` 数量
+ `fullScreen`: 指示窗口是否全屏显示
+ `menubar`: 返回菜单条对象
+ `locationbar`: 一个包含 `visible` 属性的 `locationbar` 对象
+ `scrollbars`: 一个包含 `visible` 属性的 `scrollbars` 对象
+ `personalbar`: 一个包含 `visible` 属性的 `personalbar` 对象
+ `toolbar`: 一个包含 `visible` 属性的 `toolbar` 对象
+ `statusbar`: 一个包含 `visible` 属性的 `statusbar` 对象
+ `status`: 返回/设置浏览器底部的状态栏文本
+ `visualViewport`: 返回一个 `VisualViewport` 对象，记录给定窗口的视口属性
+ `isSecureContext`: 指示是否使用安全上下文环境
+ `event`: `IE` 引入的属性，当前正在处理的事件对象
+ `frameElement`: 嵌入当前 `window` 的元素
+ `devicePixelRatio`: 设备的物理像素分辨率与 `CSS` 像素分辨率的比值

### 页面尺寸

+ `scrollMaxX`: 文档可水平滚动的最大像素值
+ `scrollMaxY`: 文档可垂直滚动的最大像素值
+ `scrollX/pageXOffset`: 文档/页面水平方向滚动的像素值
+ `scrollY/pageYOffset`: 文档/页面垂直方向滚动的像素值
+ `screenX/screenLeft`: 返回浏览器左边界到屏幕左边的水平距离
+ `screenY/screenTop`: 返回浏览器上边界到屏幕上边的垂直距离
+ `innerWidth`: 浏览器窗口的内容区域的宽度(包含滚动条)
+ `innerHeight`: 浏览器窗口的内容区域的高度(包含滚动条)
+ `outerWidth`: 整个浏览器窗口的宽度
+ `outerHeight`: 整个浏览器窗口的高度


## 方法

### 弹窗和窗体操作

+ `alert()`: 显示一个警告弹窗
+ `prompt()`: 显示一个提示弹窗
+ `confirm()`: 显示一个确认弹窗
+ `print()`: 显示一个打印弹窗
+ `open()`: 打开一个新窗口
+ `close()`: 关闭当前窗口
+ `focus()`: 使窗口聚焦
+ `blur()`: 将焦点移出顶层窗口
+ `moveTo(xAxis, yAxis)`: 将窗口移动到指定坐标
+ `moveBy(xOffset, yOffset)`: 将窗口移动指定的偏移量
+ `resizeBy(xDelta, yDelta)`: 将窗口缩放指定的量
+ `resizeTo(width, height)`: 将窗口缩放到指定尺寸
+ `scroll((x, y) | options)`: 滚动到文档中的某个坐标
+ `scrollTo((x, y) | options)`: 等同于 `scroll()`
+ `scrollBy((x, y) | options)`: 按指定的偏移量滚动文档
+ `scrollByLines(n: Number)`: 按给定的行数滚动文档
+ `scrollByPages(n: Number)`: 按照指定的页数翻页
+ `minimize()`: 窗口最小化
+ `maximize()`: 窗口最大化
+ `sizeToContent()`: 切换用户调整窗口大小的能力
+ `setResizable()`: 根据窗口内容调整窗口大小(可以强制调整窗口为最小尺寸)

### 样式相关

+ `getComputedStyle()`: 返回一个实时的 `CSSStyleDeclaration` 对象，记录了页面的样式
+ `getDefaultComputedStyle()`: 返回一个实时的 `CSSStyleDeclaration` 对象，记录了页面的默认样式
+ `requestAnimationFrame(callback: Function)`: 在浏览器下次重绘之前调用指定的回调函数更新动画
+ `cancelAnimationFrame()`: 取消 `requestAnimationFrame()` 计划执行的回调

### 异步回调/任务调度

+ `setImmediate()`: 添加一个在空闲时执行的回调
+ `setTimeout()`: 在指定时间后执行回调
+ `setInterval()`: 每隔一段时间执行一次回调
+ `clearImmediate()`: 清除 `setImmediate()`
+ `clearTimeout(timerId: Number)`: 清除 `setTimeout()`
+ `clearInterval(timerId: Number)`: 清除 `setInterval()`
+ `requestIdleCallback()`: 允许在空闲时间调度任务
+ `cancelIdleCallback()`: 取消调度任务

### 其他

+ `addEventListener()`: 添加事件监听
+ `removeEventListener()`: 移除事件监听
+ `dispatchEvent()`: 触发一个事件
+ `dump()`: 将消息写入控制台
+ `getSelection()`: 返回一个 `Selection` 对象，记录用户选择的文本范围或光标的当前位置
+ `matchMedia()`: 返回一个 `MediaQueryList` 对象，记录指定的媒体查询字符串解析后的结果
+ `fetch(): Promise`: 发起一个获取资源的请求
+ `postMessage()`: 发送消息到另一个窗口(不需要在同一个域中，可用于跨域)
+ `atob(str: String)`: 对 `base64` 编码的字符串进行解码
+ `btoa(str: String)`: 对字符串进行 `base64` 编码
+ `createImageBitmap(img): Promise`: 裁剪图片
+ `stop()`: 阻止页面的加载(相当于点击了取消加载按钮)
+ `find()`: 在页面中搜索指定内容
+ `setCursor()`: 在当前窗口中改变鼠的样式


## 事件

### 浏览器相关

+ `error`: 当资源加载失败或无法使用时(如脚本错误、图像错误等)
+ `languagechange`: 当用户的首选语言改变时
+ `orientationchange`: 当设备的方向改变时
+ `devicemotion`: 记录设备的物理加速度和转速(定时触发)
+ `deviceorientation`: 当设备的朝向(根据方向传感器)改变时
+ `resize`: 调整窗口大小时
+ `storage`: 当 `Storage` 发生修改时
+ `online`: 当浏览器可以访问网络(同时会将 `navigator.onLine` 设置为 `true`)
+ `offline`: 当浏览器无法访问网络(同时会将 `navigator.onLine` 设置为 `false`)
+ `message`: 当 `window` 收到一个信息时(如 `window.postMessage()`)
+ `messageerror`: 当 `window` 收到一个信息但无法反序列化时

### 过渡/动画

+ `transitionstart`: 过渡开始时
+ `transitionend`: 过渡结束时(将过渡属性删除或隐藏元素不会触发)
+ `transitionrun`: 首次创建过渡时(过渡开始之前)
+ `transitioncancel`: 过渡取消时
+ `animationstart`: 动画开始时
+ `animationend`: 动画完成前(删除元素或取消动画不会触发)
+ `animationoniteration`: 动画的一个迭代结束并且开始另一个迭代时
+ `animationcancel`: 动画取消时(如更改动画名称、隐藏动画节点)

### 剪切板

+ `copy`: 当用户使用复制功能时
+ `cut`: 当用户使用剪切功能时
+ `paste`: 当用户使用粘贴功能时
+ `clipboardchange`: 系统剪贴板内容更改时

### 焦点

+ `focus`: 当元素获得焦点时
+ `blur`: 当元素失去焦点时

### 历史记录

+ `hashchange`: 当 `URL` 的片段标识符更改时(即 `URL` 中 `#` 和它后面的部分)
+ `pageshow`: 当浏览器页面可见时(首次加载、切换到历史记录的页面)
+ `pagehide`: 当浏览器页面不可见时(包括前进、后退、从历史记录访问)
+ `popstate`: 当活动的历史记录条目更改时

### 页面加载

+ `load`: 当页面加载完成时(包括所有样式表、图像等等加载完成)
+ `unload`: 在卸载文档或子资源时
+ `beforeunload`: 在 `unload` 前
+ `DOMContentLoaded`: 当页面加载完成时(不会等待样式表、图像等加载完成)

### Manifest

+ `appinstalled`: 当页面成功安装为应用程序时
+ `beforeinstallprompt`: 当提示用户即将要安装 `web` 应用程序时

### Promise

+ `rejectionhandled`: 当 `Promise` 状态变为 `rejected` 时(无论是否有处理程序捕获)
+ `unhandledrejection`: 当 `Promise` 状态变为 `rejected` 但没有适当的处理程序捕获时

### 打印

+ `afterprint`
+ `beforeprint`

### 游戏手柄

+ `gamepadconnected`
+ `gamepaddisconnected`

### WebVR

+ `vrdisplayactivate`
+ `vrdisplaydeactivate`
+ `vrdisplayconnect`
+ `vrdisplaydisconnect`
+ `vrdisplayblur`
+ `vrdisplayfocus`
+ `vrdisplaypresentchange`
+ `vrdisplaypointerrestricted`
+ `vrdisplaypointerunrestricted`