## 废弃的标签 & 新增的标签



## 介绍新特性及其用途

+ 标签变化
  + 删除的标签
  + 语义化标签
  + 新的表单属性
  + 多媒体标签：`<video>`, `<audio>`, `<source>`
+ Canvas API
+ SVG API
+ Geolocation API
+ Storage API
+ Drag and Drop API
+ WebSocket
+ WebWorker

## 标签语义化的目的 & 实现

目的：
+ 丢失样式时，页面也会有较为清晰的结构
+ 代码结构清晰，方便阅读，有利于团队合作开发
+ 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页
+ 有利于搜索引擎优化（SEO）

实现：
+ 不要滥用 `<div>`, `<span>`
+ 不要为了样式效果而使用特定的文本标签
+ 使用语义化的文本标签：`<em>`, `<strong>`, `<address>` 等
+ 使用 HTML5 新增的语义化结构标签：`<header>`, `<footer>`, `<nav>`, `<aside>`, `<section>`, `<article>`


## Canvas 和 SVG 的区别

|Canvas|SVG|
|-|-|
|依赖分辨率|不依赖分辨率|
|不支持事件处理器|支持事件处理器|
|弱的文本渲染能力|适合带有大型渲染区域的应用(如谷歌地图)|
|能够以 .png 或 .jpg 格式保存结果图像|复杂度高会减慢渲染速度(过度使用 DOM)|
|适合图像密集型的游戏，许多对象会被频繁重绘|不适合游戏应用|



## sessionStorage & localStorage

相同的属性和 API：
+ `length`：返回键值对的长度
+ `setItem(key, value)`：设置一个键值对
+ `getItem(key)`：获取一个键对应的值
+ `removeItem(key)`：删除一个键及值
+ `clear()`：删除所有键值对

区别：
+ `sessionStorage`：会话级别的存储，在浏览器关闭后清除
+ `localStorage`：持久化的存储，可长期存储数据，除非用户手动清除



## 应用缓存

+ 优势
+ 实现
+ 刷新
+ 回退
+ 网络命令



## 离线缓存原理




## 常用的浏览器存储

+ Cache
+ Cookie
+ Session
+ Storage
+ IndexedDB



## 浏览器多标签页间的通信

+ Cookie
+ localStorage



## Web Worker



## WebSocket

