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

**备注：** 了解更多 -> [初始化样式](../unclassified/css-reset.md)


## 什么是盒子模型

+ DOM 中所有的元素都是一个个的盒子，每个元素均具有自己的 '盒子属性'，可能是显式声明的，也可能是继承或者默认的
+ 一个盒子的尺寸会收到很多因素的影响：
  + `box-sizing`
  + `width` / `height`
  + `margin` / `padding`
  + `border`
  + `BFC`
  + `flex`


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

**备注：** 了解更多 -> [BFC & IFC 的创建及应用](../unclassified/bfc&ifc.md)


## IFC 的应用 & 如何创建

**应用：**
+ 水平居中：内联盒子可以使用 `text-align: center;` 实现水平居中
+ 垂直居中：设置一个空的 IFC 元素撑开父元素的高度，再设置属性 `vertical-align:middle`，使其他同级行内元素垂直居中

**创建：**
+ 设置属性：`display` 为 `inline`/`inline-block`

**备注：** 了解更多 -> [BFC & IFC 的创建及应用](../unclassified/bfc&ifc.md)


## 浮动产生的问题 & 解决方法

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
  overflow: hidden; /* 隐藏 content */
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

**备注：** 了解更多 -> [解决子元素浮动引起的父元素高度塌陷](../unclassified/float)


## 接受负值的属性及应用

+ 负 `margin`：
  + 左右负外边距相当于会改变元素在行的排列位置，甚至会返回上一行(如圣杯布局/双飞翼布局)
+ 负 `top`/`right`/`bottom`/`left`：相当于反方向移动，用于调整元素位置


## 各种布局的优缺点

**两栏布局：** 可以通过简化双飞翼布局实现

**三栏布局：**
+ 浮动布局
  + 优点：代码逻辑简单
  + 缺点：中间块在后，最后才渲染
+ 绝对定位布局
  + 优点：中间块首先渲染
  + 缺点：左右块的高度无法撑起中间块的高度
+ 圣杯布局
  + 优点：中间块首先渲染，左右块能撑起中间块的高度
  + 缺点：中间块的宽度必须大于等于左块宽度；代码较复杂
+ 双飞翼布局
  + 优点：中间块首先渲染，左右块能撑起中间块的高度，中间块可以有更小的最小宽度
  + 缺点：dom 结构层多余，增加渲染树生成的计算


**备注：** 了解更多 -> [常用布局的实现](../effect/layout.md)


## 怎样使用媒体查询

+ 在 `<link>` 中：
```html
<link rel="stylesheet" href="main.css" media="screen and (min-width: 500px) and (max-width: 800px)">
```
+ 在 `@import` 时：
```css
@import 'main.css' screen and (min-width: 500px) and (max-width: 800px)
```
+ 在样式中：
```css
@media screen and (min-width: 500px) and (max-width: 800px) {
  body { background-color: red; }
}
```


## 简述响应式设计的方案

+ 只适配移动端：flex
+ 小型项目：百分比 + 媒体查询
+ 大型项目：栅格系统 + 媒体查询


## 响应式设计的优劣

**优：**
+ 可以用同一套代码兼容不同的设备、屏幕尺寸，例如可以设计一套兼容 web 端和 html5 移动端的代码
+ 用户体验较好，切换不同端/调整浏览器尺寸浏览页面时，都有比较好的浏览体验

**劣：**
+ 代码都比较复杂
+ 重置浏览器尺寸时，页面会跟随者重新渲染页面，降低页面性能


## Sprite 原理和优点

+ 介绍：Sprite(雪碧图)是指将多个图片集成在一个图片中
+ 原理：通过 `background-position` 定位图片在屏幕的哪个位置
+ 优点：可以有效减少网络请求的次数


## 怎样写出高效的 CSS

+ 提高解析速度：
  + 避免无意义或多余的选择器嵌套，因为选择器的解析是从右向左的
  + 选择器的解析速度：id > class > tag > universal
  + 不要用 tag 来限制 id 选择器，因为 id 选择器本身就是唯一的
+ 提高编写效率：
  + 使用 CSS 预处理工具(Sass, Less, Stylus)组织/复用样式
  + 使用 CSS 后处理工具(PostCSS)自动添加浏览器前缀


## 常见的兼容性问题及解决

+ 


## 怎样管理样式代码

+ BEM 命名法
+ scoped


## CSS 模块化方案
## 如何配置按需加载
## 如何防止 CSS 阻塞渲染

