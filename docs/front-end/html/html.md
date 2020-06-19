## DOCTYPE 的作用


## HTML 和 XHTML 的异同



## 元信息标签的作用和配置

+ head
+ title
+ meta



## 常用标签的默认样式 & 自带属性




## 创建锚点的方式

两种方式创建锚点：
+ 将任意标签设为锚点时，添加 `id` 属性
+ 将 `<a>` 标签设为锚点时，只需要设置 `name` 属性

```html
<h1 id="title">标题</h1>
<p>
  <a name="start">文章开始</a>
  <!-- 长文章 -->
</p>

<p>
  <a href="#title">回到标题</a>
  <a href="#start">回到文章开始</a>
</p>
```



## 超链接的表现形式

常见的表现形式：
+ 用作锚点：`<a href="#title">回到标题</a>`
+ 普通的跳转：`<a href="example.com" target="_blank">主页</a>`
+ 下载链接：`<a href="source.zip">下载</a>`
+ 电子邮件链接：`<a href="mailto:seven@example.com">Email</a>`
+ 联系我们链接：
+ 空链接：`<a href="#">返回顶部</a>`
+ 实现代码功能：`<a href="javascript:void(0)">hello</a>`



## href="#" & href=javascript:void(0)




## src 和 href 的区别

+ src：表示来源地址，用于引入资源，用在 `<img>`, `<script>`, `<iframe>` 等标签中
+ href：表示超文本引用，用于引用资源，用在 `<link>`, `<a>` 等标签中


## img 的 alt 和 title 的区别

+ 图片中的 alt 属性是在图片不能正常显示时出现的文本提示，alt 有利于 SEO 优化
+ 图片中的 title 属性是在鼠标在移动到元素上的文本提示


## iframe 的优缺点

**优点：**
+ 能够原封不动的把嵌入的网页展现出来
+ 多个网页引用 iframe 时，可以增加代码的可重用
+ 解决加载缓慢的第三方内容如图标和广告
+ 可以实现安全沙箱
+ 可以并行加载脚本

**缺点：**
+ 会阻塞主页面的 onload 事件
+ 即使内容为空，也需要时间加载，而且不利于语义化
+ 会产生很多页面，不容易管理
+ 代码复杂，无法被一些搜索引擎索引到，不利于 SEO