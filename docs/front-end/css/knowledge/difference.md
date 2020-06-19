## link 和 @import

+ `link` 属于 HTML 标签，`@import` 引用的 `CSS` 会等到页面被加载完再加载
+ `link` 方式的样式的权重高于 `@import`
+ 兼容性：`@import` 在 `IE5` 以上才适用

## :first-child 和 :first-of-type

+ `E:first-child` 匹配时 E 是第一个子元素，`E:first-of-type` 匹配时 E 不一定是第一个子元素
+ `E:*-of-type` 等几个伪类，匹配的是同一级的第一个 E 元素，例如多个同级 `p` 标签时匹配第一个


## visibility: hidden 和 display: none

+ `visibility: hidden`：隐藏元素，但仍占有物理空间
+ `display: none`：隐藏元素，不再占有空间，其空间被其他元素占有


## absolute 和 float

+ **相同**：都脱离文档流，生成一个 BFC 容器
+ **不同**：`absolute` 相对于父元素定位，通过 `z-index` 属性覆盖同一父元素内的其他元素，`float` 属性会占有位置而不是覆盖


## absolute 和 fixed

+ **相同**：都是使元素脱离文本流，生成一个 BFC 容器
+ **不同**：`absolute` 相对于最近一个非 `static` 定位属性的父元素定位，`fixed` 相对于浏览器窗口定位


## text-shadow 和 box-shadow

+ `text-shadow`：环绕在文本周围的阴影
+ `box-shadow`：环绕在元素盒子边框的阴影


## transition 和 animation

+ `animation` 是更高级的 `transition`，他能展示多个动画帧，`transition` 只能展示一个状态
+ `CSS` 实现的 `transition` 只能单向运动，而 `animation` 能够双向运动
+ `transition` 激活时只能运动一次，`animation` 能运动任意次数


## box-sizing 的各个值

```css
.box {
  box-sizing: content-box | border-box | padding-box;
}
```

+ 简单来说，三种取值对元素的 `content` 的宽高有影响，但只限于 `padding` 和 `border` 两个属性
+ `content-box`：（默认），元素的宽高为 `content` 的宽高，额外的 `padding` 和 `border` 会撑大盒子的实际宽高
+ `border-box`：元素的宽高为 `content` + `padding` + `border` 之和，额外的 `padding` 和 `border` 会缩小 `content` 的实际宽高
+ `padding-box`：元素的宽高为 `content` + `padding` 之和，额外的 `padding` 会缩小 `content` 的实际宽高


## 自适应单位 & 固定长度单位

+ **自适应单位**：`%`，`em`，`rem`，`vw`，`vh`，`vmin`，`vmax`
+ **固定单位**：`px` 等


## 行内元素 & 块级元素

```css
.box {
  display: block | inline | inline-block
}
```

+ 块级元素(block)可以设置宽高，独占一行，常见：`h1~h6`,`p`,`div`,`dl`,`dt`,`hr`,`ol`,`ul`,`li`,`form`,`pre`,`table`,`td`,`th`
+ 行内元素(inline)不可设置宽高，会在一行中按顺序排列，排满时会换行，常见：`span`,`button`,`input`,`label`,`select`,`img`,`textarea`以及 `strong` 等文本类标签
+ 行内块级元素(inline-block)具有两者的特点


## 伪类 & 伪元素

+ 伪元素不同于伪类，伪类表示的是元素的某个状态，伪元素表示的是文档中某个部分的表现
+ 伪类的前缀是单个冒号(`:`)，伪元素是双冒号(`::`)

## counter() 和 counters()

+ 都是用于 `content` 属性中，但 `counters()` 用于嵌套列表


## 可继承 & 不可继承的样式

+ 大多数样式是不可继承的，但所有元素都可以继承这两个样式：`visibility`/`cursor`
+ 块状元素可继承：`text-indent`/`text-align`
+ 内联元素可继承较多类型的样式：
  + 字体类样式：`font`/`font-family`/`font-size`/`font-style`/`font-variant`/`font-weight`
  + 文本颜色、描述等：`color`/`text-decoration`/`text-transform`/`direction`
  + 词间间隔、行高等：`letter-spacing`/`word-spacing`/`white-space`/`line-height`
+ 列表元素可继承：`list-style`/`list-style-type`/`list-style-position`/`list-style-image`
+ 表格元素可继承：`border-collapse`


## BFC, IFC, GFC, FFC

+ `FC(Formatting-Context)`：W3C CSS2.1 规范中的一个概念，它规定页面中的一块渲染区域有一套渲染规则，决定了其子元素将如何定位，以及和其他元素的关系和相互作用
+ `BFC(Block-FC)`：块级格式化上下文，页面上的一个独立的渲染区域，容器内子元素不会在布局上影响到外面的元素，反之也是如此
+ `IFC(Inline-FC)`：内联格式化上下文，内联盒子的高度由其包含行内元素中最高的实际高度计算而来，不受到垂直方向的 `padding`/`margin` 影响
+ `GFC(GridLayout-FC)`：网格布局格式化上下文，元素设置 `display` 属性的值为 `grid` 时产生
+ `FFC(Flex-FC)`：自适应格式化上下文，元素设置 `display` 属性的值为 `flex`/`inline-flex` 时产生

