## 对比

标签|描述|属性|版本|兼容性
-|-|-|-|-
`<basefont>`|页面文本的默认字体、颜色、尺寸|-|<Badge type="error">废弃</Badge>|-
`<!DOCTYPE>`|文档类型|<font color="orange">html</font>|-|均支持
`<!-- -->`|注释|-|-|均支持
`<html>`|根文档|<font color="orange">manifest</font>|-|均支持
`<head>`|关于文档的信息|<font color="red">profile</font>|-|均支持
`<title>`|文档标题|-|-|均支持
`<meta>`|关于文档的元信息|<font color="orange">charset</font><br>content<br>http-equiv<br>name<br><font color="red">scheme</font>|-|均支持
`<base>`|页面中所有链接的默认地址|href<br>target|-|均支持
`<style>`|样式信息|<font color="orange">scoped</font><br>media<br>type|-|均支持
`<link>`|文档与外部资源的关系|<font color="orange">sizes</font><br>href<br>hreflang<br>media<br>rel<br>type|-|均支持
`<script>`|客户端脚本|<font color="orange">async</font><br>charset<br>defer<br>src<br>type<br><font color="red">xml:space</font>|-|均支持
`<noscript>`|不支持客户端脚本的用户的替代内容|-|-|均支持
`<body>`|文档主体|<font color="red">alink</font><br><font color="red">background</font><br><font color="red">bgcolor</font><br><font color="red">link</font><br><font color="red">text</font><br><font color="red">vlink</font>|-|均支持
`<hgroup>`|对 `<h1>` ~ `<h6>` 进行分组|-|<Badge>HTML5</Badge>|IE8 或更早不支持
`<h1>` ~ `<h6>`|文档主体的各级标题|<font color="red">align</font>|-|均支持
`<p>`|段落|<font color="red">align</font>|-|均支持
`<a>`|链接|<font color="orange">download</font><br><font color="orange">media</font><br><font color="orange">type</font><br>href<br>hreflang<br>rel<br>target<br><font color="red">charset</font><br><font color="red">coords</font><br><font color="red">name</font><br><font color="red">rev</font><br><font color="red">shape</font><br>|-|均支持
`<br>`|换行|<font color="red">align</font><br><font color="red">noshade</font><br><font color="red">size</font><br><font color="red">width</font><br>|-|均支持
`<hr>`|水平线|-|-|均支持

::: tip 备注
+ `<!DOCTYPE>`：用于指示 `HTML` 文档的格式，`HTML5` 只有一种(`<!DOCTYPE html>`)
+ `<html>`：文档的根标签，`manifest` 属性为一个 `URL`，用于描述文档的缓存信息
+ `<title>`：文档标题，只能定义一个；该标题会作为浏览器工具栏的标题、书签收藏的默认名字、出现在搜索引擎结果中的标题
+ `<noscript>`：无法支持 `<script>` 标签的浏览器显示的文本；`HTML5` 中，`<noscript>` 标签可以插入到 `<head>` 和 `<body>` 中
:::




## a

+ 作为超链接，链接到另一个页面
+ 作为锚点，跳转到页面某部分

|属性|说明|
|-|-|
|<font color="orange">download</font>|指定下载链接。取值：<br>filename|
|<font color="orange">media</font>|<font color="red">需设置 href 属性。</font>目标 URL 的媒介类型，默认值：all。取值：<br>media_query|
|<font color="orange">type</font>|<font color="red">需设置 href 属性。</font>目标 URL 的 MIME 类型。取值：<br>MIME_type|
|href|链接的目标 URL。取值：<br>URL|
|hreflang|<font color="red">需设置 href 属性。</font>目标 URL 的基准语言。取值：<br>language_code|
|rel|<font color="red">需设置 href 属性。</font>当前文档与目标 URL 之间的关系。取值：<br>alternate<br>author<br>bookmark<br>help<br>license<br>next<br>nofollow<br>noreferrer<br>prefetch<br>prev<br>search<br>tag|
target|<font color="red">需设置 href 属性。</font>在何处打开目标 URL。取值：<br>\_blank<br>\_parent<br>\_self<br>\_top<br>framename|




## base

+ 为页面上的所有的相对链接规定默认 `URL` 或默认目标
+ 最多能使用一个 `<base>` 元素，`<base>` 标签必须位于 `<head>` 元素内部
+ 使用 `<base>` 标签必须包含至少一个属性

属性|说明
-|-
href|规定页面中所有相对链接的基准 `URL`。取值：<br>URL
target|规定页面中所有的超链接和表单打开方式，会被超链接中的 `target` 属性覆盖。取值：<br>\_blank<br>\_parent<br>\_self<br>\_top<br>framename



## meta

+ 用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据
+ 元数据不会显示在客户端，但是会被浏览器解析
+ 通常位于 `<head>` 标签内以 `名称/值` 对出现，如果没有提供 `name` 属性，那么名称/值对中的名称会采用 `http-equiv` 属性的值
+ 可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用

属性|说明
-|-
<font color="orange">charset</font>|定义文档的字符编码。取值：<br>character_set
content|定义与 `http-equiv` 或 `name` 属性相关的元信息。取值：<br>text
http-equiv|把 `content` 属性关联到 `HTTP` 头部。取值：<br>content-type<br>default-style<br>refresh
name|把 `content` 属性关联到一个名称。取值：<br>application-name<br>author<br>description<br>generator<br>keywords




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