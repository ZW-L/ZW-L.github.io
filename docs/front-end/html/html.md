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
