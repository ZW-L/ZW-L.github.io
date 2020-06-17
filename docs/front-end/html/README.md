## 分类

+ 基础类-19个
+ 布局类-11个
+ 格式类-38个
+ 列表/表格类-19个
+ 表单类-13个
+ 多媒体类-11个
+ 对象/容器/框架类-8个

::: tip 说明：
按照以上规则对 HTML 标签进行分类，总共约 `119` 个常用标签。
:::


## 基础类

+ `<basefont>`：<font color="red">HTML5 不支持</font>。页面文本的默认字体、颜色、尺寸
+ `<hgroup>`：<font color="orange">HTML5</font>。对 `<h1>` ~ `<h6>` 进行分组
+ `<!DOCTYPE>`：文档类型
+ `<!-- -->`：注释
+ `<html>`：根文档
+ `<meta>`：关于文档的元信息
+ `<base>`：页面中所有链接的默认地址
+ `<style>`：样式信息
+ `<link>`：文档与外部资源的关系
+ `<head>`：关于文档的信息
+ `<title>`：文档标题
+ `<body>`：文档主体
+ `<script>`：客户端脚本
+ `<noscript>`：不支持客户端脚本的用户的替代内容
+ `<h1>` ~ `<h6>`：文档主体的各级标题
+ `<p>`：段落
+ `<a>`：链接
+ `<br>`：换行
+ `<hr>`：水平线

::: tip 说明：
该类标签包含了 HTML 的骨架标签(`<head>`、`<body>`)，存在于头部元素的标签(`<title>`、`<meta>`)，主体部分常用的标签(`<h1>`、`<p>`)等标签。
:::


## 布局类

+ `<header>`：<font color="orange">HTML5</font>。文档头部
+ `<footer>`：<font color="orange">HTML5</font>。文档底部
+ `<section>`：<font color="orange">HTML5</font>。文档的某个区域
+ `<article>`：<font color="orange">HTML5</font>。文章内容
+ `<aside>`：<font color="orange">HTML5</font>。 侧栏
+ `<nav>`：<font color="orange">HTML5</font>。导航条
+ `<details>`：<font color="orange">HTML5</font>。补充的细节
+ `<summary>`：<font color="orange">HTML5</font>。点击 `<details>` 时显示的内容
+ `<dialog>`：<font color="orange">HTML5</font>。对话框或窗口
+ `<div>` ：块级布局元素
+ `<span>` ：行内布局元素

::: tip 说明：
该类标签包含了传统的布局标签(`<div>`、`<span>`)，HTML5 新增的语义化布局标签(`<header>`、`<section>`)等标签。
:::

## 格式类

+ `<acronym>`：<font color="red">HTML5 不支持</font>。首字母缩写
+ `<big>`：<font color="red">HTML5 不支持</font>。大号文本
+ `<center>`：<font color="red">HTML5 不支持</font>。居中文本
+ `<font>`：<font color="red">HTML5 不支持</font>。定义文本的字体、尺寸、颜色
+ `<strike>`：<font color="red">HTML5 不支持</font>。加删除线的文本
+ `<tt>`：<font color="red">HTML5 不支持</font>。 打字机文本
+ `<bdi>` ：<font color="orange">HTML5。</font>设置一段文本，使其脱离其父元素的文本方向设置
+ `<mark>` ：<font color="orange">HTML5。</font>带有记号的文本
+ `<meter>` ：<font color="orange">HTML5。</font>度量衡，仅用于已知最大和最小值的度量
+ `<progress>` ：<font color="orange">HTML5。</font>进度条
+ `<rp> `：<font color="orange">HTML5。</font>不支持 ruby 元素的浏览器所显示的内容
+ `<rt>` ：<font color="orange">HTML5。</font>字符（中文注音或字符）的解释或发音
+ `<ruby>` ：<font color="orange">HTML5。</font>ruby 注释（中文注音或字符）
+ `<time>` ：<font color="orange">HTML5。</font>日期/时间
+ `<wbr>` ：<font color="orange">HTML5。</font>约定文本换行的位置
+ `<abbr>`：缩写
+ `<address>`：文档作者/拥有者的联系信息
+ `<bdo>`：文本方向
+ `<cite>`：引用
+ `<q>`：短引用
+ `<blockquote>`：块引用
+ `<pre>`：预格式
+ `<del>`：删除
+ `<ins>`：被插入
+ `<b>`：粗体
+ `<i>`：斜体
+ `<s>`：加删除线
+ `<u>`：下划线
+ `<small>`：小号字体
+ `<sub>`：下标
+ `<sup>`：上标
+ `<code>`：计算机代码
+ `<dfn>`：定义项目
+ `<em>`：强调
+ `<strong>`：更强烈的强调
+ `<kbd>`：键盘
+ `<samp>`：计算机代码样本
+ `<var>`：变量

::: tip 说明：
该类标签包含了短语类(`<code>`, `<dfn>`, `<em>`, `<strong>`, `<kbd>`, `<samp>`, `<var>`)，字符格式化类(`<b>`, `<i>`)，特殊功能类(`<time>`, `<progress>`)等标签。<br>在一百多个标签里，该类标签占了三分之一左右，主要是为了增强语义。
:::

## 列表/表格类

+ `<dir>`：<font color="red">HTML5 不支持</font>。目录列表
+ `<command>`：<font color="orange">HTML5</font>。用户可能调用的命令
+ `<menu>`：菜单列表
+ `<ul>`：无序列表
+ `<ol>`：有序列表
+ `<li>`：列表项
+ `<dl>`：创建一个定义列表
+ `<dt>`：该定义列表的标题
+ `<dd>`：该定义列表的描述
+ `<table>`：表格
+ `<caption>`：表格标题
+ `<thead>`：表格头部
+ `<tbody>`：表格主体
+ `<tfoot>`：表格脚注
+ `<tr>`：表格行
+ `<th>`：表头单元格
+ `<td>`：表体单元格
+ `<col>`：规定表格列的属性
+ `<colgroup>`：组合表格中的列

::: tip 说明： 
该类标签包含了列表(`<ul>`，`<ol>`)，定义列表(`<dl>`)，表格(`<table>`)等标签；其中大部分浏览器不支持 `<menu>` 和 `<command>` 标签。
:::

## 表单类

+ `<datalist>`：<font color="orange">HTML5</font>。`<input>` 元素可能的选项列表
+ `<keygen>`：<font color="orange">HTML5</font>。用于表单的密钥对生成字段
+ `<output>`：<font color="orange">HTML5</font>。计算的结果
+ `<form>`：表单
+ `<input>`：输入控件
+ `<textarea>`：多行文本输入控件
+ `<button>`：按钮
+ `<select>`：选择列表
+ `<option>`：选择列表的选项
+ `<optgroup>`：选择列表相关选项的组合
+ `<label>`：`<input>` 元素的标注
+ `<fieldset>`：围绕表单种元素的边框
+ `<legend>`：`<fieldset>` 元素的标题

::: tip 说明： 
该类标签包含了表单控件相关的标签。
:::

## 多媒体类

+ `<canvas>`：<font color="orange">HTML5</font>。通过脚本来绘制图形
+ `<figure>`：<font color="orange">HTML5</font>。对元素进行组合
+ `<figcaption>`：<font color="orange">HTML5</font>。`<figure>` 的标题
+ `<audio>`：<font color="orange">HTML5</font>。音频
+ `<video>`：<font color="orange">HTML5</font>。视频
+ `<picture>`：<font color="orange">HTML5</font>。图像
+ `<source>`：<font color="orange">HTML5</font>。媒体（音频、视频、图像）资源
+ `<track>`：<font color="orange">HTML5</font>。媒体元素的外部文本轨道
+ `<img>`：图像
+ `<map>`：图像映射
+ `<area>`：图像地图内部的区域

::: tip 说明： 
该类标签包含了图像(`<img>`，`<canvas>`)，音频(`<audio>`)，视频(`<video>`)等标签。
:::

## 对象/容器/框架类

+ `<applet>`：<font color="red">HTML5 不支持</font>。嵌入的 java 程序
+ `<frame>`：<font color="red">HTML5 不支持</font>。框架集的窗口或框架
+ `<frameset>`：<font color="red">HTML5 不支持</font>。 框架集
+ `<noframes>`：<font color="red">HTML5 不支持</font>。不支持框架的用户的替代内容
+ `<iframe>`：内联框架
+ `<embed>`：<font color="orange">HTML5</font>。用于嵌入外部应用的容器
+ `<object>`：嵌入的对象
+ `<param>`：对象的参数

::: tip 说明： 
该类标签包含了框架(`<iframe>`)，容器(`<embed>`)，对象(`<object>`，`<param>`)等标签。
:::