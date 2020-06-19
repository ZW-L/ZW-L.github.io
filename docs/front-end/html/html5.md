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




## 区分 Storage

**相同的属性和方法**：
+ `length`：返回键值对的长度
+ `setItem(key, value)`：设置一个键值对
+ `getItem(key)`：获取一个键对应的值
+ `removeItem(key)`：删除一个键及值
+ `clear()`：删除所有键值对

**区别**：
+ `sessionStorage`：会话级别的存储，在页面关闭后清除
+ `localStorage`：持久化的存储，可长期存储数据，除非用户手动清除





## 应用缓存

+ 优势
+ 实现
+ 刷新
+ 回退
+ 网络命令




## 离线缓存原理





## 浏览器存储

|存储|大小限制|说明|应用|
|-|-|-|-|
|Cache||||
|Cookie|4KB/个|最多保存50个，每次发送请求都会写进请求头|与服务端通信，鉴权等|
|Storage|5M/域|只能存储简单数据，localStorage 可持久化|本地存储/缓存|
|IndexedDB|-|直接将数据存储在浏览器端的数据库中|本地存储/缓存|

::: tip 备注
+ `Cookie` 和 `localStorage` 都可以在同源页面中共享，因此可用于跨标签通信
+ `Storage` 只能存储简单数据，复杂数据(对象)需要 JSON 化才能存储
:::



## Web Worker




## WebSocket





## 多标签页间的通信

+ **Cookie**：在同源页面中共享数据，只能读取和设置，无法监听变化
+ **localStorage**：在同源页面中共享数据，并且可以对 window 添加 `storage` 事件监听属性的修改
```html
<!-- a.html -->
<body>
  <h1>page A</h1>
  <p>Add localStorage：</p>
  <p>key: <input type="text" id="ik"></p>
  <p>value: <input type="text" id="iv"></p>
  <button id="btn">Add</button>

  <script>
    const ik = document.getElementById('ik')
    const iv = document.getElementById('iv')
    const btn = document.getElementById('btn')

    btn.addEventListener('click', e => {
      if (!iv.value || !ik.value) return alert('Not allow empty key-value.')
      // 设置键值对
      localStorage.setItem(ik.value, iv.value)
    })
  </script>
</body>

<!-- b.html -->
<body>
  <h1>page B</h1>

  <script>
    // 监听变化并打印
    window.addEventListener('storage', e => {
      console.log(e.oldValue, e.newValue)
    })
  </script>
</body>

<!-- 提示：在本地安装 serve 包，启动一个服务测试 -->
```
+ **SharedWorker**：在同源页面中通信，Worker 线程使用 `onmessage` 事件监听客户端，两端均使用 `postMessage()` 发送信息
```html

```
```js

```
+ **WebSocket**：全双工通信
