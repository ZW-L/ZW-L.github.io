## img

+ 定义 HTML 页面中的图像，有两个必需的属性：`src` 和 `alt`
+ 从技术上看图像并不会插入 HTML 页面中(而是链接)，`<img>` 标签的作用是为被引用的图像创建占位符

属性名|描述|版本
-|-|-
crossorigin|设置图像的跨域属性。取值：<br>`anonymous`<br>`use-credentials`|<font color="orange">HTML5</font>
alt|<font color="red">必需。</font>规定图像的替代文本。取值：<br>text
src|<font color="red">必需。</font>规定显示图像的 URL。取值：<br>URL
width|规定图像的宽度。取值：<br>pixels
height|规定图像的高度。取值：<br>pixels
ismap|将图像规定为服务器端图像映射。取值：<br>`ismap`
usemap|将图像定义为客户器端图像映射。取值：<br>#mapname
align|规定如何根据周围的文本来排列图像。取值：<br>`top`<br>`right`<br>`bottom`<br>`left`<br>`middle`|<font color="red">HTML5 不支持</font>
border|规定图像周围的边框。取值：<br>pixels|<font color="red">HTML5 不支持</font>
hspace|规定图像左侧和右侧的空白。取值：<br>pixels|<font color="red">HTML5 不支持</font>
vspace|规定图像顶部和底部的空白。取值：<br>pixels|<font color="red">HTML5 不支持</font>
longdesc|指向包含长的图像描述文档的 URL。取值：<br>URL|<font color="red">HTML5 不支持</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。




## map

+ 用于客户端图像映射，图像映射指带有可点击区域的一幅图像
+ `<img>` 标签中的 `usemap` 属性与 `<map>` 元素中的 `name` 相关联，以创建图像与映射之间的关系
+ `usemap` 属性可引用 `<map>` 中的 `id` 或 `name` 属性（取决于浏览器），应同时向 `<map>` 添加 `id` 和 `name` 属性。

属性名|描述|版本
-|-|-
name|<font color="red">必需。</font>为 image-map 规定的名称。取值：<br>mapname|
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。




## area

+ 定义图像映射内部的区域，始终嵌套在 `<map>` 标签内部

属性名|描述|版本
-|-|-
hreflang|规定目标 URL 的语言。取值：<br>language_code|<font color="orange">HTML5</font>
media|规定目标 URL 是为何种媒介/设备优化的，默认：all。取值：<br>media query|<font color="orange">HTML5</font>
rel|规定当前文档与目标 URL 之间的关系。取值：<br>`alternate`<br>`author`<br>`bookmark`<br>`help`<br>`license`<br>`next`<br>`nofollow`<br>`noreferrer`<br>`prefetch`<br>`prev`<br>`search`<br>`tag`|<font color="orange">HTML5</font>
type|规定目标 URL 的 MIME 类型。取值：<br>MIME_type|<font color="orange">HTML5</font>
alt|规定区域的替代文本，如果使用 href 属性，则该属性是必需的。取值：<br>text|
coords|规定区域的坐标。取值：<br>coordinates|
href|规定区域的目标 URL。取值：<br>URL|
shape|规定区域的形状。取值：<br>`default`<br>`rect`<br>`circle`<br>`poly`|
target|规定在何处打开目标 URL。取值：<br>`_blank`<br>`_parent`<br>`_self`<br>`_top`<br>framename|
nohref|规定没有相关链接的区域。取值：<br>value|<font color="red">HTML5 不支持</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。




## figure

+ IE9 以前不支持 `<figure>` 标签
+ 规定独立的流内容（图像、图表、照片、代码等等）
+ 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的；如果被删除，则不应对文档流产生影响

属性名|描述|版本
-|-|-
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。




## figcaption

+ IE9 以前不支持 `<figcaption>` 标签
+ 为 `<figure>` 元素定义标题，应该被置于 `<figure>` 元素的第一个或最后一个子元素的位置

属性名|描述|版本
-|-|-
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。




## canvas

+ IE9 以前不支持 `<canvas>` 标签
+ 通过脚本来绘制图形（图表和其他图像）
+ `<canvas>` 作为图形容器，必须使用脚本来绘制图形

属性名|描述|版本
-|-|-
width|规定画布的高度。取值：<br>pixels|<font color="orange">HTML5</font>
height|规定画布的宽度。取值：<br>pixels|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。




## audio

+ IE9 以前不支持 `<audio>` 标签
+ 定义声音（音乐或其他音频流）
+ 目前 `<audio>` 元素支持的3种文件格式：`MP3`、`Wav`、`Ogg`
+ 可以在 `<audio>` 和 `</audio>` 之间放置文本内容，这些文本信息将会被显示在那些不支持 `<audio>` 标签的浏览器中

属性名|描述|版本
-|-|-
autoplay|音频在就绪后马上播放。取值：<br>`autoplay`|<font color="orange">HTML5</font>
controls|向用户显示音频控件（比如播放/暂停按钮）。取值：<br>`controls`|<font color="orange">HTML5</font>
loop|每当音频结束时重新开始播放。取值：<br>`loop`|<font color="orange">HTML5</font>
muted|音频输出为静音。取值：<br>`muted`|<font color="orange">HTML5</font>
preload|规定当网页加载时，音频是否默认被加载以及如何被加载。取值：<br>`auto`<br>`metadata`<br>`none`|<font color="orange">HTML5</font>
src|规定音频文件的 URL。取值：<br>URL|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

+ 各浏览器支持的音频文件格式：

-|MP3|Wav|Ogg
-|-|-|-
IE|1|0|0
Chrome|1|1|1
Firefox|1|1|1
Safari|1|1|0
Opera|1|1|1




## video

+ 定义视频（电影片段或其他视频流）
+ 目前，`<video>` 元素支持三种视频格式：`MP4`、`WebM`、`Ogg`

属性名|描述|版本
-|-|-
autoplay|视频在就绪后马上播放。取值：<br>`autoplay`|<font color="orange">HTML5</font>
controls|向用户显示控件，比如播放按钮。取值：<br>`controls`|<font color="orange">HTML5</font>
width|设置视频播放器的宽度。取值：<br>pixels|<font color="orange">HTML5</font>
height|设置视频播放器的高度。取值：<br>pixels|<font color="orange">HTML5</font>
loop|当媒介文件完成播放后再次开始播放。取值：<br>`loop`|<font color="orange">HTML5</font>
muted|视频的音频输出为静音。取值：<br>`muted`|<font color="orange">HTML5</font>
poster|规定视频正在下载时显示的图像，直到用户点击播放按钮。取值：<br>URL|<font color="orange">HTML5</font>
preload|视频在页面加载时进行加载，并预备播放。使用 `autoplay` 时则忽略该属性。取值：<br>`auto`<br>`metadata`<br>`none`|<font color="orange">HTML5</font>
src|要播放的视频的 URL。取值：<br>URL|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

+ 各浏览器支持的视频文件格式：

-|MP4|WebM|Ogg
-|-|-|-
IE|1|0|0
Chrome|1|1|1
Firefox|1|1|1
Safari|1|0|0
Opera|1|1|1




## picture

+ 允许在不同的设备上显示不同的图片，一般用于响应式
+ 可以包含多个 `<source>` 元素和一个 `<img>` 元素，每个 `<source>` 元素匹配不同的设备并引用不同的图像源，若没有匹配的，则显示为 `<img>` 
+ `<img>` 元素是放在最后一个 `<source>` 元素之后，若浏览器不支持该属性则显示 `<img>` 元素的的图片。

属性名|描述|版本
-|-|-
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。





## source

+ IE9 以前不支持 `<source>` 标签
+ 为媒体元素（`<video>` 和 `<audio>`）定义媒体资源
+ 允许规定两个视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择

属性名|描述|版本
-|-|-
media|规定媒体资源的类型，供浏览器决定是否下载。取值：<br>media_query|<font color="orange">HTML5</font>
src|规定媒体文件的 URL。取值：<br>URL|<font color="orange">HTML5</font>
type|规定媒体资源的 MIME 类型。取值：<br>MIME_type|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

+ 音频格式的 MINE 类型：

格式|MIME\-type
-|-
MP3|audio/mpeg
Wav|audio/wav
Ogg|audio/ogg

+ 视频格式的 MINE 类型：

格式|MIME\-type
-|-
MP4|video/mp4
WebM|video/webm
Ogg|video/ogg



## track

+ 为媒体元素（`<audio>` and `<video>`）规定外部文本轨道
+ 用于规定字幕文件或其他包含文本的文件，当媒体播放时，这些文件是可见的

属性名|描述|版本
-|-|-
default|规定该轨道是默认的。取值：<br>`default`|<font color="orange">HTML5</font>
kind|规定文本轨道的标签和标题。取值：<br>`captions`<br>`chapters`<br>`descriptions`<br>`metadata`<br>`subtitles`|<font color="orange">HTML5</font>
label|规定文本轨道的文本类型。取值：<br>text|<font color="orange">HTML5</font>
src|<font color="red">必需。</font>规定轨道文件的 URL。取值：<br>URL|<font color="orange">HTML5</font>
srclang|规定轨道文本数据的语言；如果 `kind` 属性值是 `subtitles`，则该属性是必需的。取值：<br>language_code|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。