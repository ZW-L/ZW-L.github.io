## 删除的标签

+ `<basefont>`：页面文本的默认字体、颜色、尺寸
+ `<acronym>`：首字母缩写
+ `<big>`：大号文本
+ `<center>`：居中文本
+ `<font>`：定义文本的字体、尺寸、颜色
+ `<strike>`：加删除线的文本
+ `<tt>`： 打字机文本
+ `<dir>`：目录列表
+ `<applet>`：嵌入的 `java` 程序
+ `<frame>`：框架集的窗口或框架
+ `<frameset>`： 框架集
+ `<noframes>`：不支持框架的用户的替代内容


## 新增的标签

[布局类：](../categories/layout)

+ `<header>`：文档头部
+ `<footer>`：文档底部
+ `<section>`：文档的某个区域
+ `<article>`：文章内容
+ `<aside>`：侧栏
+ `<nav>`：导航链接
+ `<hgroup>`：对 `<h1>` ~ `<h6>` 进行分组
+ `<details>`：补充的细节
+ `<summary>`：点击 `<details>` 时显示的内容
+ `<dialog>`：对话框或窗口

[格式类：](../categories/format)
+ `<bdi>`：设置一段文本，使其脱离其父元素的文本方向设置
+ `<mark>`：带有记号的文本
+ `<meter>`：度量衡，仅用于已知最大和最小值的度量
+ `<progress>`：进度条
+ `<time>`：日期/时间
+ `<wbr>`：约定文本换行的位置
+ `<ruby>`：ruby 注释（中文注音或字符）
+ `<rp>`：不支持 ruby 元素的浏览器所显示的内容
+ `<rt>`：字符（中文注音或字符）的解释或发音

[表单类：](../categories/form)

+ `<datalist>`：`<input>` 元素可能的选项列表
+ `<keygen>`：用于表单的密钥对生成字段
+ `<output>`：计算的结果

[多媒体类：](../categories/media)

+ `<audio>`：音频
+ `<video>`：视频
+ `<source>`：媒体（音频、视频、图像）资源
+ `<track>`：媒体元素的外部文本轨道
+ `<canvas>`：通过脚本来绘制图形
+ `<picture>`：图像
+ `<figure>`：对元素进行组合
+ `<figcaption>`：`<figure>` 的标题

[容器类：](../categories/container)

+ `<embed>`：用于嵌入外部应用的容器

[列表/表格类：](../categories/list&table)

+ `<command>`：用户可能调用的命令


## 新增表单元素

+ datalist: 规定 `<input>` 元素可能的选项列表
+ keygen: 规定用于表单的密钥对生成器字段
+ output: 作为计算结果输出显示(比如执行脚本的输出)

## 新增表单属性

|属性|所属标签|介绍|
|-|-|-|
|autocomplete|form|拥有自动完成功能|
|novalidate|form|在提交表单时不进行验证|
|autocomplete|input|拥有自动完成功能|
|autofocus|input|页面加载时，域自动获得焦点|
|form|input|规定输入域所属的一个或多个表单，值为所属表单的 id|
|formaction|input|重写表单的 action 属性|
|formenctype|input|重写表单的 enctype 属性|
|formmethod|input|重写表单的 method 属性|
|formnovalidate|input|重写表单的 novalidate 属性|
|formtarget|input|重写表单的 target 属性|
|width, height|input|设置 "image" 高度和宽度|
|list|input|绑定域的 datalist，值为 datalist 的 id|
|min, max, step|input|最小值, 最大值, 步长，适用于 "number", "range", "<日期>"|
|multiple|input|规定输入域中可选择多个值，适用于 "email", "file"|
|pattern|input|用于表单验证的正则表达式|
|placeholder|input|提供一种提示，输入域为空时显示，获得焦点时消失|
|required|input|规定输入域非空|

## 新增 input 类型

|类型|说明|
|-|-|
|email|email 域，会自动验证|
|url|url 域，会自动验证|
|number|number 域，会自动验证|
|range|包含一定范围内数字值的输入域|
|search|搜索域，显示为常规的文本域|
|tel|电话号码|
|color|拾色器|
|date|选取日、月、年|
|month|选取月、年|
|week|选取周和年|
|time|选取时间（小时和分钟）|
|datetime|选取时间、日、月、年（UTC 时间）|
|datetime-local|选取时间、日、月、年（本地时间）|