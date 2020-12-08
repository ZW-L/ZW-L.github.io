## 简介

+ 包含传统的布局标签(`<div>`、`<span>`)，和 HTML5 新增的语义化布局标签(`<header>`、`<section>`)
+ 有了新的语义化布局标签，就不用向以前那样全是使用 `<div>` 进行布局，让 HTML 更具语义化，且有利于 SEO


## 对比

标签|描述|属性|版本
-|-|-|-
div|用于组合块级或行内元素|<font color="red">align</font>|-
span|用于组合行内元素|-|-
header|定义文档或者文档某区域的页眉|-|<font color="orange">HTML5</font>
nav|定义导航条|-|<font color="orange">HTML5</font>
section|定义文档的某个区域|-|<font color="orange">HTML5</font>
aside|定义文档/文章的侧栏|-|<font color="orange">HTML5</font>
article|定义文章内容|-|<font color="orange">HTML5</font>
footer|定义文档或者文档的某区域的页脚|-|<font color="orange">HTML5</font>
details|定义用户可见或隐藏的补充细节|<font color="orange">open</font>|<font color="orange">HTML5</font>
summary|作为 `<details>` 的可见的标题|-|<font color="orange">HTML5</font>
dialog|定义一个对话框或窗口|<font color="orange">open</font>|<font color="orange">HTML5</font>

::: tip 备注
+ `<div>` 和 `<span>` 是不具有严格语义化的布局元素，其中 `<div>` 用于组合块级或行内元素，`<span>` 用于组合行内元素
+ `<header>`，`<nav>`，`<section>`，`<aside>`，`<article>`，`<footer>` 都是块级元素，可以理解为更为语义化的 `<div>`，它们有不同的语义：
  + `<header>`：作为介绍内容的页眉或导航链接栏的容器，不要放在 `<footer>`、`<address>` 或者另一个 `<header>` 元素内部
  + `<nav>`：作为页面导航链接的容器
  + `<section>`：定义文档的某个区域，可以包含多个 `<article>` 或其他
  + `<aside>`：定义文档/文章的侧栏，可以作为文档目录等
  + `<article>`：定义文章内容，可以包含多个 `<section>` 或其他
  + `<footer>`：定义文档或者文档的一部分区域的页脚，一般会包含文档创作者的姓名、文档的版权信息、使用条款的链接、联系信息等
+ `<details>` 是一部分隐藏的信息，但是可以点击展开，以 `<summary>` 作为其标题，这个标题会显示给用户；设置 `open` 属性会展开这些信息
+ `<dialog>` 定义一个对话框或窗口；设置 `open` 属性会显示该对话框
:::