## 废弃

+ `<frameset>`：<font color="red">HTML5 不支持</font>。 框架集
+ `<frame>`：<font color="red">HTML5 不支持</font>。框架集的窗口或框架
+ `<noframes>`：<font color="red">HTML5 不支持</font>。不支持框架的用户的替代内容
+ `<applet>`：<font color="red">HTML5 不支持</font>。嵌入的 `java` 程序



## embed

+ 定义了一个容器，用来嵌入外部应用或者互动程序（插件）

属性名|描述|版本
-|-|-
src|规定被嵌入内容的 URL。<br>URL|<font color="orange">HTML5</font>
type|规定嵌入内容的 MIME 类型。<br>MIME_type|<font color="orange">HTML5</font>
width|规定嵌入内容的宽度。<br>pixels|<font color="orange">HTML5</font>
height|规定嵌入内容的高度。<br>pixels|<font color="orange">HTML5</font>
标准属性||
全局属性|支持 HTML 的全局属性|
事件属性|支持 HTML 的事件属性|




## iframe

+ 规定一个内联框架，一个内联框架被用来在当前 HTML 文档中嵌入另一个文档
+ 可以把需要的文本放置在 `<iframe>` 和 `</iframe>` 之间，这样就可以应对不支持 `<iframe>` 的浏览器
+ 使用 CSS 为 `<iframe>` （包括滚动条）定义样式

属性名|描述|版本
-|-|-
sandbox|对 `<iframe>` 的内容定义一系列额外的限制。取值：<br>`allow-forms`<br>`allow-same-origin`<br>`allow-scripts`<br>`allow-top-navigation`|<font color="orange">HTML5</font>
seamless|规定 `<iframe>` 看起来像是父文档中的一部分。取值：<br>`seamless`|<font color="orange">HTML5</font>
srcdoc|规定页面中的 HTML 内容显示在 `<iframe>` 中。取值：<br>HTML_code|<font color="orange">HTML5</font>
width|规定 `<iframe>` 的宽度。取值：<br>pixels|
height|规定 `<iframe>` 的高度。取值：<br>pixels|
name|规定 `<iframe>` 的名称。取值：<br>name|
src|规定在 `<iframe>` 中显示的文档的 URL。取值：<br>URL|
align|规定如何根据周围的元素来对齐 `<iframe>`。取值：<br>`left`<br>`right`<br>`top`<br>`bottom`<br>`middle`|<font color="red">HTML5 不支持</font>
frameborder|规定是否显示 `<iframe>` 周围的边框。取值：<br>`1`<br>`0`|<font color="red">HTML5 不支持</font>
longdesc|规定一个页面，该页面包含了有关 `<iframe>` 的较长描述。取值：<br>URL|<font color="red">HTML5 不支持</font>
marginwidth|规定 `<iframe>` 的左侧和右侧的边距。取值：<br>pixels|<font color="red">HTML5 不支持</font>
marginheight|规定 `<iframe>` 的顶部和底部的边距。取值：<br>pixels|<font color="red">HTML5 不支持</font>
scrolling|规定是否在 `<iframe>` 中显示滚动条。取值：<br>`yes`<br>`no`<br>`auto`|<font color="red">HTML5 不支持</font>
标准属性||
全局属性|支持 HTML 的全局属性|
事件属性|支持 HTML 的事件属性|





## object

+ 定义一个嵌入的对象。请使用此元素向您的 XHTML 页面添加多媒体。此元素允许您规定插入 HTML 文档中的对象的数据和参数，以及可用来显示和操作数据的代码。
+ `<object>` 标签用于包含对象，比如图像、音频、视频、Java applets、ActiveX、PDF 以及 Flash。
+ object 的初衷是取代 img 和 applet 元素。不过由于漏洞以及缺乏浏览器支持，这一点并未实现。
+ 浏览器的对象支持有赖于对象类型。不幸的是，主流浏览器都使用不同的代码来加载相同的对象类型。
+ 而幸运的是，object 对象提供了解决方案。如果未显示 object 元素，就会执行位于 `<object>` 和 `</object>` 之间的代码。通过这种方式，我们能够嵌套多个 object 元素（每个对应一个浏览器）。

属性名|描述|版本
-|-|-
form|规定对象所属的一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
data|规定对象使用的资源的 URL。取值：<br>URL|
width|规定对象的宽度。取值：<br>pixels|
height|规定对象的高度。取值：<br>pixels|
name|为对象规定名称。取值：<br>name|
type|规定 data 属性中规定的数据的 MIME 类型。取值：<br>MIME_type|
usemap|规定与对象一同使用的客户端图像映射的名称。取值：<br>#mapname|
align|规定 `<object>` 元素相对于周围元素的对齐方式。取值：<br>`left`<br>`right`<br>`top`<br>`bottom`<br>`middle`|<font color="red">HTML5 不支持</font>
archive|由空格分隔的指向档案文件的 URL 列表。取值：<br>URL|<font color="red">HTML5 不支持</font>
border|规定 `<object>` 周围的边框宽度。取值：<br>pixels|<font color="red">HTML5 不支持</font>
classid|定义嵌入 Windows Registry 中或某个 URL 中的类的 ID 值。取值：<br>class_ID|<font color="red">HTML5 不支持</font>
codebase|定义在何处可找到对象所需的代码，提供一个基准 URL。取值：<br>URL|<font color="red">HTML5 不支持</font>
codetype|通过 classid 属性所引用的代码的 MIME 类型。取值：<br>MIME_type|<font color="red">HTML5 不支持</font>
declare|定义该对象仅可被声明，但不能被创建或例示，直到该对象得到应用为止。取值：<br>`declare`|<font color="red">HTML5 不支持</font>
hspace|规定对象左侧和右侧的空白。取值：<br>pixels|<font color="red">HTML5 不支持</font>
vspace|规定对象的顶部和底部的空白。取值：<br>pixels|<font color="red">HTML5 不支持</font>
standby|定义当对象正在加载时所显示的文本。取值：<br>text|<font color="red">HTML5 不支持</font>
标准属性||
全局属性|支持 HTML 的全局属性|
事件属性|支持 HTML 的事件属性|




## param

+ 允许为插入 XHTML 文档的对象规定 run-time 设置，也就是说，此标签可为包含它的 `<object>` 或者 `<applet>` 标签提供参数

属性名|描述|版本
-|-|-
name|定义参数的名称（用在脚本中）。取值：<br>name|
value|描述参数值。取值：<br>value|
type|定义 MIME 类型参数。取值：<br>MIME_type|<font color="red">HTML5 不支持</font>
valuetype|描述值的类型。取值：<br>`data`<br>`ref`<br>`object`|<font color="red">HTML5 不支持</font>
标准属性||
全局属性|支持 HTML 的全局属性|
事件属性|支持 HTML 的事件属性|