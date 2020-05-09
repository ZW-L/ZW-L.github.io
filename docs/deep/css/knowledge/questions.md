## content 属性的作用

+ 只能用在 `::before`/`::after` 伪元素中，常用来清除浮动
+ 取值：`none`/`normal`，不产生伪元素
+ 取值：`<string>`，一段文本
+ 取值：`<url>`，一个外部资源（图片）
+ 取值：`attr(x)`：x 是该元素的 HTML 属性名，返回属性值的字符串形式(或空串)
+ 取值：`counter(counter-name)`/`counters(counter-name)`：需要在父元素和目标元素设置 `counter` 相关属性，常用于列表中(如文章目录)
+ 取值：`open-quote`/`close-quote`，引号

## 初始化样式的意义以及实现

**意义：**
+ 减少浏览器差异带来的影响(不同浏览器对某些标签的样式有不同的表现)
+ 对初始样式进行把控，减少重复代码，提高编写代码时的效率

**最简单的初始化：**
```css
* { padding: 0; margin: 0; }
```

**备注：** 了解更多 -> [初始化样式](../../../post/css/css-reset.md)


## 什么是外边距重叠

**介绍：**
+ 两个**普通文档流**中的**块级元素**的**垂直外边距**相遇时，两者的外边距会发生重叠，重叠后的高度为两者中的较大者
+ 发生外边距重叠的场景：
  + 两元素上下相邻时
  + 一个元素包围另一个元素，且两元素没有 `padding` 和 `border` 时
  + 一个只有上下 `margin` 的空元素(`content` 为空)，自身的上下边距会重叠

**解决：**
+ 将元素设置为非块级元素或脱离文档流
+ 两者是父子关系时，可以使用 `padding` 或透明的 `border`


## BFC 的应用 & 如何创建 BFC

**应用：**
+ 解决子元素浮动引起的父元素高度塌陷
+ 用于页面布局

**创建：**
+ 默认存在：`<body>` 元素
+ `position` 属性取值：`absolute`/`fixed`
+ `float` 属性取值：`left`/`right`
+ `display` 属性取值：`inline-block`/`flex`/`table-cell` 等
+ `overflow` 属性取值：`hidden`/`auto`/`scroll`

**备注：** 了解更多 -> [BFC & IFC 的创建及应用](../../../post/css/bfc&ifc.md)


## IFC 的应用 & 如何创建

**应用：**
+ 水平居中：内联盒子可以使用 `text-align: center;` 实现水平居中
+ 垂直居中：设置一个空的 IFC 元素撑开父元素的高度，再设置属性 `vertical-align:middle`，使其他同级行内元素垂直居中

**创建：**
+ 设置属性：`display` 为 `inline`/`inline-block`

**备注：** 了解更多 -> [BFC & IFC 的创建及应用](../../../post/css/bfc&ifc.md)


## 浮动产生的问题以及解决方法

**产生问题：**
+ 父元素高度塌陷

**解决：**
```css
.container {
  border: 1px solid red;
}
/* 父元素添加 ::after 伪元素样式，效果相当于添加空 div，但是不用更改 HTML */
.container::after {
  content: '.'; /* 任何一个字符串均可 */
  display: block; /* 显示为块级元素 */
  height: 0; /* 高度为 0，content 不占空间，但仍会折行 */
  overflow: hidden; /* 彻底隐藏 content */
  clear: both; /* 清除浮动 */
}
/* 子元素的样式 */
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```

**备注：** 了解更多 -> [解决子元素浮动引起的父元素高度塌陷](../../../post/css/float)


## 怎样使用媒体查询


