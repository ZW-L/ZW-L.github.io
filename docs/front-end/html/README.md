---
sidebarDepth: 2
---

## DOCTYPE

+ [怪异模式和标准模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
+ 在 HTML5 中，doctype 是为了防止浏览器切换到怪异模式；而更早的使用方法已经被废弃，没有必要再使用
+ **需要特别注意的是**：doctype 必须位于 HTML 的第一行，此前不能有任何内容(注释或 XML 声明)，否则会导致 IE9 或更早的浏览器触发怪异模式



## HTML 和 XHTML

+ HTML(超文本标记语言)，
+ XHTML：使用了 XML 语法规则的 HTML，其对标签的规则更严格

|比较|HTML|XHTML|
|-|-|-|
|根元素|-|必须|
|标签名小写|-|必须|
|标签名关闭|-|必须|
|标签正确嵌套|-|必须|




## iframe

### 优缺点

**优点：**
+ 能够原封不动的把嵌入的网页展现出来
+ 多个网页引用 iframe 时，可以增加代码的可重用
+ 解决加载缓慢的第三方内容如图标和广告
+ 可以实现安全沙箱
+ 可以并行加载脚本

**缺点：**
+ 会阻塞主页面的 `onload` 事件
+ 即使内容为空，也需要时间加载，而且不利于语义化
+ 会产生很多页面，不容易管理
+ 代码复杂，无法被一些搜索引擎索引到，不利于 SEO




## 区分属性

### src 和 href

+ `src`：表示来源地址，用于引入资源，用在 `<img>`, `<script>`, `<iframe>` 等标签中
+ `href`：表示超文本引用，用于引用资源，用在 `<link>`, `<a>` 等标签中


### img 的 alt 和 title

+ `title`：鼠标移动到元素上出现的文本提示
+ `alt`：在图片不能正常显示时出现的文本提示，有利于 SEO 优化


### 超链接

+ 表现形式：
```html
<!-- 用作锚点： -->
<a href="#title">回到标题</a>

<!-- 普通的跳转： -->
<a href="example.com" target="_blank">主页</a>

<!-- 下载链接： -->
<a href="source.zip">下载</a>

<!-- 电子邮件链接： -->
<a href="mailto:seven@example.com">Email</a>

<!-- 空链接： -->
<a href="#">返回顶部</a>

<!-- 实现代码功能： -->
<a href="javascript:void(0)">hello</a>
```


+ 区分 `href="#"` 和 `href="javascript:void(0)"`：
```html
<!-- 是一个锚点，会跳转到页面顶部 -->
<a href="#">返回顶部</a>

<!-- 是一个“死链接”，点击无任何反应，通常是为了保留链接的样式而不作任何操作 -->
<a href="javascript:void(0)">hello</a>
```



## 废弃 & 新增的标签

+ 删除的标签：见[首页](./README.md)
+ 新增语义化结构标签：见[布局类标签](./categories/layout.md)；`<header>`, `<footer>`, `<nav>`, `<aside>`, `<section>`, `<article>`
+ 新增多媒体标签：见[多媒体类标签](./categories/media.md)；`<video>`, `<audio>`, `<source>` 等
+ 新增表单属性：见[表单类标签](./categories/form.md)；主要赋予表单更多的功能，以及更多 type 类型的 `<input>`



## 新特性 & 用途

+ **标签变化**：
  + 删除的标签：见[首页](./README.md)
  + 新增语义化结构标签：见[布局类标签](./categories/layout.md)；`<header>`, `<footer>`, `<nav>`, `<aside>`, `<section>`, `<article>`
  + 新增多媒体标签：见[多媒体类标签](./categories/media.md)；`<video>`, `<audio>`, `<source>` 等
  + 新增表单属性：见[表单类标签](./categories/form.md)；主要赋予表单更多的功能，以及更多 type 类型的 `<input>`

+ **Canvas**：2D 绘图，像素级别的控制

+ **SVG**：可伸缩矢量图形，大量应用于图标和动画

+ **Geolocation**：地理位置 API

+ **Storage**：浏览器存储，sessionStorage 和 localStorage(持久化存储)，可用于缓存数据和多页面间通信

+ **Drag & Drop**：拖放事件

+ **WebSocket**：对 WebSocket 协议的支持，提供更快捷、实时的全双工通信

+ **WebWorker**：在后台运行的独立的新线程，可用于处理复杂的运算(不影响页面)


## 标签语义化的目的 & 实现

**目的**：
+ 丢失样式时，页面也会有较为清晰的结构
+ 代码结构清晰，方便阅读，有利于团队合作开发
+ 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页
+ 有利于搜索引擎优化（SEO）

**实现**：
+ 不要滥用 `<div>`, `<span>`
+ 不要为了样式效果而使用特定的文本标签
+ 使用语义化的文本标签：`<em>`, `<strong>`, `<address>` 等
+ 使用 HTML5 新增的语义化结构标签：`<header>`, `<footer>`, `<nav>`, `<aside>`, `<section>`, `<article>`


## 区别 Canvas & SVG

|Canvas|SVG|
|-|-|
|依赖分辨率|不依赖分辨率，可无限放大而不模糊|
|不支持事件处理器|支持事件处理器|
|弱的文本渲染能力|适合带有大型渲染区域的应用(如谷歌地图)|
|能够以 .png 或 .jpg 格式保存结果图像|复杂度高会减慢渲染速度(过度使用 DOM)|
|适合图像密集型的游戏，许多对象会被频繁重绘|不适合游戏应用|
