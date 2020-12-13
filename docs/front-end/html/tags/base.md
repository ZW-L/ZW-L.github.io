---
sidebarDepth: 2
---

## 对比

标签|描述|属性|版本
-|-|-|-
`<basefont>`|页面文本的默认字体、颜色、尺寸|-|<Badge type="error">废弃</Badge>
`<!DOCTYPE>`|文档类型|<font color="orange">html</font>|-
`<!-- -->`|注释|-|-
`<html>`|根文档|<font color="orange">manifest</font>|-
`<head>`|关于文档的信息|<font color="red">profile</font>|-
`<title>`|文档标题|-|-
`<meta>`|关于文档的元信息|<font color="orange">charset</font><br>content<br>http-equiv<br>name<br><font color="red">scheme</font>|-
`<base>`|页面中所有链接的默认地址|href<br>target|-
`<style>`|样式信息|<font color="orange">scoped</font><br>media<br>type|-
`<link>`|文档与外部资源的关系|<font color="orange">sizes</font><br>href<br>hreflang<br>media<br>rel<br>type|-
`<script>`|客户端脚本|<font color="orange">async</font><br>charset<br>defer<br>src<br>type<br><font color="red">xml:space</font>|-
`<noscript>`|不支持客户端脚本的用户的替代内容|-|-
`<body>`|文档主体|<font color="red">alink</font><br><font color="red">background</font><br><font color="red">bgcolor</font><br><font color="red">link</font><br><font color="red">text</font><br><font color="red">vlink</font>|-
`<hgroup>`|对 `<h1>` ~ `<h6>` 进行分组|-|<Badge>HTML5</Badge>
`<h1>` ~ `<h6>`|文档主体的各级标题|<font color="red">align</font>|-
`<p>`|段落|<font color="red">align</font>|-
`<a>`|链接|<font color="orange">download</font><br><font color="orange">media</font><br><font color="orange">type</font><br>href<br>hreflang<br>rel<br>target<br><font color="red">charset</font><br><font color="red">coords</font><br><font color="red">name</font><br><font color="red">rev</font><br><font color="red">shape</font><br>|-
`<br>`|换行|<font color="red">align</font><br><font color="red">noshade</font><br><font color="red">size</font><br><font color="red">width</font><br>|-
`<hr>`|水平线|-|-

::: tip 备注
+ `<!DOCTYPE>`：用于指示 `HTML` 文档的格式，`HTML5` 只有一种(`<!DOCTYPE html>`)
+ `<html>`：文档的根标签，`manifest` 属性为一个 `URL`，用于描述文档的缓存信息
+ `<title>`：文档标题，只能定义一个；该标题会作为浏览器工具栏的标题、书签收藏的默认名字、出现在搜索引擎结果中的标题
+ `<noscript>`：无法支持 `<script>` 标签的浏览器显示的文本；`HTML5` 中，`<noscript>` 标签可以插入到 `<head>` 和 `<body>` 中
:::




## a

### 属性

|属性|说明|
|-|-|
|<font color="orange">download</font>|指定下载链接。取值：<br>filename|
|<font color="orange">media</font>|<font color="red">需设置 href 属性。</font>目标 URL 的媒介类型，默认值：all。取值：<br>media_query|
|<font color="orange">type</font>|<font color="red">需设置 href 属性。</font>目标 URL 的 MIME 类型。取值：<br>MIME_type|
|href|链接的目标 URL。取值：<br>URL|
|hreflang|<font color="red">需设置 href 属性。</font>目标 URL 的基准语言。取值：<br>language_code|
|rel|<font color="red">需设置 href 属性。</font>当前文档与目标 URL 之间的关系。取值：<br>alternate<br>author<br>bookmark<br>help<br>license<br>next<br>nofollow<br>noreferrer<br>prefetch<br>prev<br>search<br>tag|
target|<font color="red">需设置 href 属性。</font>在何处打开目标 URL。取值：<br>\_blank<br>\_parent<br>\_self<br>\_top<br>framename|


### 超链接



### 锚点

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



## base

+ 为页面上的所有的相对链接规定默认 `URL` 或默认目标
+ 最多能使用一个 `<base>` 元素，`<base>` 标签必须位于 `<head>` 元素内部
+ 使用 `<base>` 标签必须包含至少一个属性

属性|说明
-|-
href|规定页面中所有相对链接的基准 `URL`。取值：<br>URL
target|规定页面中所有的超链接和表单打开方式，会被超链接中的 `target` 属性覆盖。取值：<br>\_blank<br>\_parent<br>\_self<br>\_top<br>framename


::: tip 备注：
+ `<base>` 标签很少使用，特别是如果设置了 href 属性，在 html 就不能灵活地插入超链接
+ 而 target 属性可能会应用得更多，如让所有超链接都从新窗口打开
```html
<base target="_blank" />
```
:::


## meta

### 介绍

+ 用于定义页面的说明，关键字，最后修改日期，和其它的元数据，这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务
+ 通常位于 `<head>` 标签内以名称/值对出现，以下为 `<meta>` 标签的常用属性：

属性|说明
-|-
charset|定义文档的字符编码
name|主要用于描述网页，如网页的关键词、作者、viewport 等
http-equiv|相当于 HTTP 请求头的作用，可以定义一些属性
content|定义与 `http-equiv` 或 `name` 属性相关的元信息

::: tip 备注：
+ 元数据不会显示在客户端，但是会被浏览器解析
:::


### charset

+ charset 是 HTML5 添加的，之前都是使用 `http-equiv` 定义
```html
<!-- HTML5 之前 -->
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">

<!-- HTML 5 -->
<meta charset="UTF-8">
```


### name

+ 一些关于网站的描述，主要是用于告诉搜索引擎
```html
<meta name="title" content="优酷-中国领先视频网站,提供视频播放,视频发布,视频搜索 - 优酷视频"/>
<meta name="keywords" content="视频,视频分享,视频搜索,视频播放,优酷视频"/>
<meta name="description" content="视频服务平台,提供视频播放,视频发布,视频搜索,视频分享"/>
<!-- 网站作者 -->
<meta name="author" content="zw,1041214157@qq.com">

<!-- 网站的生成器，修改后谷歌的 Wappalyzer 插件可能识别不正确 -->
<meta name="generator" content="Vuepress">

<!-- 网站版权 -->
<meta name="copyright" content="版权归 zw 所有">
```

+ 爬虫相关
```html
<!-- 指定搜索引擎爬虫重访的时间，网站不经常更新时可设置一个短时间减轻服务器压力 -->
<meta name="revisit-after" content="7 days">

<!-- 告诉爬虫哪些页面需要索引，哪些页面不需要索引，允许取值：
+ all: （默认）搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index,follow
+ index: 搜索引擎索引此网页
+ noindex: 搜索引擎不索引此网页
+ none: 搜索引擎将忽略此网页，等价于 noindex,nofollow
+ follow: 搜索引擎继续通过此网页的链接索引搜索其它的网页
+ nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页
-->
<meta name="robots" content="none">
```

+ 为双内核浏览器(如 360)准备，指定浏览器使用的内核
```html
<meta name="renderer" content="webkit">     <!-- 使用 webkit 内核 -->
<meta name="renderer" content="ie-comp">    <!-- 使用 IE 兼容模式 -->
<meta name="renderer" content="ie-stand">   <!-- 使用 IE 标准模式 -->
```

+ viewport：用于控制网页缩放，常用于移动端页面，如 Bootstrap 响应式设计和 WebApp 都设置了该属性
```html
<!-- 定义页面宽度等于设备宽度，且初始化缩放比例为 1(不缩放) -->
<meta name="viewport" content="width=device-width,initial-scale=1">

<!-- 设置最大、最小缩放比例为 1，和禁止用户缩放，页面就可以始终保持像 App 的使用体验 -->
<meta name="viewport" content="width=device-width,initial-scale=1,
maximum-scale=1,minimum-scale=1,user-scalable=no">
```


### http-equiv

+ `X-UA-Compatible`：IE8 的专用标记，用来指定 IE8 浏览器去模拟某个特定版本的IE浏览器的渲染方式，以此来解决部分兼容问题
```html
<!-- 无论是否用 DTD 声明文档标准，IE8/9 以 IE7 引擎来渲染页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=7"> 

<!-- IE8/9 以IE8引擎来渲染页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=8">

<!-- IE8/9 及以后的版本都会以最高版本IE来渲染页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- IE 使用最新的引擎渲染网页，chrome=1 表示可以激活 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
```

::: tip 备注：
Google Chrome Frame(谷歌内嵌浏览器框架, GCF)，该插件可以让用户的 IE 浏览器外观不变，但用户在浏览网页时，实际上使用的是 Chrome 浏览器内核，而且支持 IE6/7/8 等多个版本的 IE 浏览器
:::


+ `Cache-Control`：缓存控制，指定请求和响应遵循的缓存机制
```html
<!-- 允许取值：
no-store: 不缓存，每次都从服务器上下载完整的响应
no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存
maxage: 表示响应内容在多久内能被缓存和重用，如：max-age=60 表示响应可以再缓存和重用 60 秒
public: 缓存所有响应，max-age 也可以做到相同效果
private: 为单个用户缓存，因此不允许任何中继进行缓存。（如 CDN 就不允许缓存 private 的响应）
-->
<meta http-equiv="Cache-Control" content="no-cache">

<!-- 也可用于禁止百度自动转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

+ `expires`：网页到期时间，设定网页的到期时间，过期后网页必须到服务器上重新传输
```html
<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />
```

+ `Set-Cookie`：设置 Cookie
```html
<meta http-equiv="Set-Cookie" content="User=Lxxyx;path=/;expires=Sunday,10-Jan-16 10:00:00 GMT">
```

+ `refresh`：自动刷新并指向某页面，在设定的时间内，自动刷新并调向设定的网址
```html
<!-- 2s 后跳转到指定网页 -->
<meta http-equiv="refresh" content="2;URL=https://lizhiwen.online/">
```

+ `Content-Security-Policy`：允许升级 http 请求为 https 请求
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

::: tip Content-Security-Policy：
+ 使用了 https 协议的网站，会要求其所有资源和请求都是 https 协议的，当有一些资源和请求是 http 协议时，浏览器会提示：不应请求不安全的内容；通过设置该请求头，可以通知服务器将 http 升级为 https
+ 使用后，localhost 启动的应用，就不能被局域网中其他的设备访问了
:::



### 移动端常用

+ `viewport`
```html
<meta name="viewport" content="width=device-width,initial-scale=1,
maximum-scale=1,minimum-scale=1,user-scalable=no">
```

+ ios
```html
<!-- 全屏模式，隐藏导航栏、地址栏，safari 并不会隐藏，但 webapp 会隐藏 -->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- webapp 的标题，默认为 <title> 标签内容 -->
<meta name="apple-mobile-web-app-title" content="music"/>

<!-- webapp 打开时状态栏颜色，支持 white. black, black-translucent -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<!-- webapp 的图标，默认为 favicon -->
<link rel="apple-touch-icon-precomposed" href="assets/i/app-icon72x72@2x.png">

<!-- iOS 启动画面 begin -->
<link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png"/>
```

+ android
```html
<!-- 全屏模式 -->
<meta name="mobile-web-app-capable" content="yes">

<!-- webapp 的图标，默认为 favicon -->
<link rel="icon" sizes="192x192" href="assets/i/app-icon72x72@2x.png">
```

+ win8 phone
```html
<!-- 磁贴图标 -->
<meta name="msapplication-TileImage" content="assets/i/app-icon72x72@2x.png">

<!-- 磁贴颜色 -->
<meta name="msapplication-TileColor" content="#0e90d2">
```

::: tip 备注：
+ webapp 一般指于原生 App 体验相似的网页应用，一些浏览器提供了将网页添加到桌面，再通过隐藏浏览器状态栏和导航栏，其使用体验就更像原生 App 了
+ windows phone 中也有类似于添加到主屏幕的功能，称之为 “磁贴”
:::

+ 其他
```html
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
```





## style

+ 样式表，能包含多个
+ 没有使用 `scoped` 属性时，该标签必须位于 `head` 头部区域
+ 链接外部样式表时，要使用 `<link>` 标签

属性|说明
-|-
<font color="orange">scoped</font>|样式仅仅应用到 `style` 元素的父元素及其子元素。取值：<br>scoped
media|为样式表规定不同的媒体类型。取值：<br>media_query
type|规定样式表的 `MIME` 类型。取值：<br>text/css




## link

+ 链接外部资源，最常见的用途是链接样式表
+ 只能存在于 `<head>` 部分，可出现任何次数

属性|说明
-|-
<font color="orange">sizes</font>|定义链接属性大小，只对属性 `rel="icon"` 起作用。取值：<br>Height x Width<br>`any`
href|定义被链接文档的位置。取值：<br>URL
hreflang|定义被链接文档中文本的语言。取值：<br>language_code
media|规定被链接文档将显示在什么设备上。取值：<br>media_query
rel|<font color="red">必需。</font>定义当前文档与被链接文档之间的关系。取值：<br>alternate<br>archives<br>author<br>bookmark<br>external<br>first<br>help<br>icon<br>last<br>license<br>next<br>nofollow<br>noreferrer<br>pingback<br>prefetch<br>prev<br>search<br>sidebar<br>stylesheet<br>tag<br>up
type|规定被链接文档的 `MIME` 类型。取值：<br>MIME_type




## script

+ 客户端脚本，可以在 `<head>` 或 `<body>` 中引入
+ 可直接在标签内编写脚本代码，但不要再设置 `src` 属性
+ 可通过 `src` 属性指向外部脚本文件，当使用了 `src` 属性时，不要在标签之间添加其他代码

属性|说明
-|-
<font color="orange">async</font>|规定异步执行脚本（仅适用于外部脚本）。取值：<br>`async`
defer|规定当页面已完成解析后，执行脚本（仅适用于外部脚本）。取值：<br>`defer`
charset|规定在脚本中使用的字符编码（仅适用于外部脚本）。取值：<br>charset
src|规定外部脚本的 URL。取值：<br>URL
type|规定脚本的 MIME 类型。取值：<br>MIME-type