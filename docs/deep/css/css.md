## 选择器和选择器的优先级

1. `!important`
2. 内联样式
3. `id` 选择器
4. `class` 选择器/属性选择器/伪类
5. 标签/伪元素
6. 通配选择器(`*`), 关系选择器(`+`, `>`, `~`, ` `, `||`), 否定伪类(`:not()`)对优先级没有影响。但是，在 `:not()` 内部声明的选择器会影响优先级。
7. 声明在同一级别的样式，后面的会覆盖前面的，如经典的红蓝盒子例子

## CSS 伪类和为元素有哪些，他们的区别和实际应用

伪类: 表示一种状态
+ `:hover`
+ `:link`
+ `:visited`
+ `:active`
+ `:focus`

伪元素: 表示文档某个部分的表现
+ `::first-letter`
+ `::first-line`
+ `::before`
+ `::after`
+ `::selection`

## 引入样式的方式，link 和 @import 的区别

+ `link` 属于 HTML 标签，`@import` 引用的 `CSS` 会等到页面被加载完再加载
+ 兼容性，`@import` 在 `IE5` 以上才适用
+ `link` 方式的样式的权重高于 `@import`

## visibility: hidden 和 display: none

+ `visibility: hidden`：隐藏元素，但仍占有物理空间
+ `display: none`：隐藏元素，不再占有空间，其空间被其他元素占有

## 自适应单位

+ `%`:
+ `em`:
+ `rem`:
+ `vw`:
+ `vh`:
+ `vm`:

## content 属性的作用


## 什么是外边距重叠


## 可以继承的样式和不可继承的样式


## 初始化样式的意义，怎样初始化样式


## 行内元素和块级元素


## BFC, IFC, GFC, FFC


## 浮动产生的问题以及解决方法

**产生问题：**
+ 父元素高度塌陷

**解决：**
+ 在浮动元素下方添加空 div，并给该元素设置 clear 属性
```css
/* 缺点：过多的空元素造成 HTML 混乱 */
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
.empty {
  clear: both;
}
```
+ 父元素固定高度
```css
/* 缺点：不适用父元素高度不确定的场景 */
.container {
  height: 100px;
  border: 1px solid red;
}
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```
+ 父元素也浮动
```css
/* 缺点：会影响上一级的布局，浮动过多时布局难以管理 */
.container {
  float: left;
  border: 1px solid red;
}
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```
+ 父元素添加 `overflow:hidden`
```css
/* 缺点：内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素 */
.container {
  overflow: hidden;
  border: 1px solid red;
}
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```
+ 父元素添加 `::after` 伪元素样式(推荐)，效果相当于添加空 `div`，但是不用更改 HTML
```css
/* 基本完美 */
.container {
  border: 1px solid red;
}
.container::after {
  content: '.'; /* 任何一个字符串均可 */
  display: block; /* 显示为块级元素 */
  height: 0; /* 高度为 0，content 不占空间，但仍会折行 */
  overflow: hidden; /* 彻底隐藏 content */
  clear: both; /* 清除浮动 */
}
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```

## absolute 和 float 的异同

+ 相同：都脱离文档流，生成一个 BFC 容器
+ 不同：absolute 相对于父元素定位，通过 z-index 值覆盖同一父元素内的其他元素，float 属性会占有位置而不是覆盖

## absolute 和 fixed 的异同

+ 相同：都是使元素脱离文本流
+ 不同：`absolute` 相对于最近一个非 `static` 定位属性的父元素定位，`fixed` 相对于浏览器窗口定位


## div 水平居中

**固定宽度：**
```css
.box {
  width: 100px; /* 或百分比 */
  height: 100px;
  margin: 0 auto;
}
```

**非 static 定位的 div：**
```css
/* 会显示 margin 边距 */
.box {
  position: absolute; /* absolute 或 relative */
  width: 50%;
  height: 100px;
  margin-left: 50%; /* 先固定偏移 50%，再用 left 负值拉正 */
  left: -25%; /* 负值，width 的一半 */
}

/* 不会显示 margin 边距 */
.box {
  position: absolute;
  width: 50%;
  height: 100px;
  left: 50%; /* 先固定偏移 50%，再用 margin 负值拉正 */
  margin-left: -25%; /* 负值，width 的一半 */
}
```

## 垂直居中

**依赖高度：**
```css
/* 非 static 定位，可以通过负 margin 居中 */
.box {
  position: relative;
  width: 100px;
  height: 100px;
  top: 50%;
  margin-top: -50px;
}
```

**不依赖高度：**
```css
/* 使用 absolute 水平垂直居中，设置对边的 margin 为 auto，且对边的偏移都为 0 */
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: auto;
  top: 0; /* top, bottom 用于垂直居中 */
  bottom: 0;
  left: 0; /* left, right 用于水平居中 */
  right: 0;
}
```

## 实现常用布局（两栏，三栏、圣杯/双飞翼、吸顶），列举多种方式以及其优缺点

**两栏：**
```html
<div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```
```css
/* 1.一栏固定宽度，设置 float，另一栏设置 margin */
.left {
  float: left;
  width: 300px;
  height: 600px;
  background-color: grey;
}
.right {
  height: 600px;
  margin-left: 300px;
  background-color: #ccc;
}

/* 2.一栏固定宽度，设置 float，另一栏创建一个 BFC 容器 */
.left {
  float: left;
  width: 300px;
  height: 600px;
  background-color: grey;
}
.right {
  overflow: hidden;
  height: 600px;
  background-color: #ccc;
}
```

**三栏：**
```html
<!-- 
  1.两侧元素固定宽度浮动，中间栏设置 margin

  优点：简单
  缺点：HTML 结构混乱；当中间栏宽度缩小为 0 时，右浮元素会折行(尽管少见)
 -->
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <!-- 中间栏在最后声明 -->
  <div class="center"></div>
</div>
```
```css
.left, .right {
  width: 200px;
  height: 600px;
  background-color: #f00;
}
.left {
  float: left;
}
.right {
  float: right;
}
.center {
  height: 600px;
  margin: 0 200px;
  background-color: #ccc;
}

/* 
  2.左右两栏使用 absolute 定位，中间一栏依然使用 marin 调整

  优点：不再需要在 HTML 中将中间栏放在浮动元素的后面
  缺点：需要精确定位各个元素
 */
.container {
  position: relative;
}
.left, .right {
  position: absolute;
  width: 200px;
  height: 600px;
  background-color: #f00;
}
.left {
  top: 0;
  left: 0;
}
.right {
  top: 0;
  right: 0;
}
.center {
  height: 600px;
  margin: 0 200px;
  background-color: #ccc;
}
```

**圣杯：**
```html
<div class="container">
  <div class="center"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```
```css
/* 
  三栏均浮动，父元素使用 overflow 清除浮动，左右两栏定位后通过父元素的 padding 撑开

  优点：结构简单，无多余 dom 层
  缺点：HTML 结构不正常，中间部分宽度小于左侧时布局混乱
 */
.center, .left, .right {
  position: relative;
  float: left;
  height: 600px;
}
.left {
  left: -200px;
  width: 200px;
  margin-left: -100%;
  background-color: #f00;
}
.right {
  right: -200px;
  width: 200px;
  margin-left: -200px;
  background-color: #f00;
}
.center {
  width: 100%;
  background-color: #ccc;
}
.container {
  padding: 0 200px;
  overflow: hidden;
}
```

**双飞翼：**
```html
<div class="container">
  <div class="center">
    <div class="main"></div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```
```css
/* 
  双飞翼布局是圣杯布局的升级版，在 HTML 中添加了一层 main 标签 

  优点：支持各种宽高变化，通用性强
  缺点：dom 结构多余层，增加渲染树生成的计算量
*/
.container {
  padding: 0;
  overflow: hidden;
}
.center, .left, .right {
  float: left;
  height: 600px;
}
.left {
  margin-left: -100%;
  left: -200px;
  width: 200px;
  background-color: #f00;
}
.right {
  margin-left: -200px;
  right: -200px;
  width: 200px;
  background-color: #f00;
}
.center {
  width: 100%;
  background-color: #ccc;
}
.main {
  margin: 0 100px;
  height: 100px;
}
```

**吸顶：**
```html

```
```css

```

## 手写图片瀑布流效果



## 雪碧图(Sprite)介绍和实现原理

**介绍：**
+ 多个图片集成在一个图片中的图
+ 使用雪碧图可以减少网络请求的次数

**实现原理：**
+ 通过 background-position 定位图片在屏幕的哪个位置

## 使用 CSS 绘制几何图形，圆形、扇形、三角形、菱形等

**圆形：**
```css
/* 原理：盒子宽高相等，并将圆角属性设置为 50%(或者宽度的一半) */
.box {
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  border-radius: 50%;
}
```

**扇形：**
```css
/* 半圆 */
/* 原理：盒子宽度为高度的两倍，设置圆角属性构建 */
.box {
  width: 200px;
  height: 100px;
  background-color: #ff0000;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

/* 四分之一圆 */
/* 原理：盒子宽高相等，并将某个角的圆角属性设置为 100% 100%，其他角度的圆角属性为 0 0 */
.box {
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  border-radius: 0 100% 0 0 / 0 100% 0 0;
}

/* 小于 90 度的扇形 */
/* 原理：将四分之一圆包裹在父元素内，旋转一定角度，父元素的溢出属性定义为隐藏 */
.container {
  width: 100px;
  height: 100px;
  overflow: hidden; /* 隐藏溢出 */
}
.box {
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  border-radius: 0 100% 0 0 / 0 100% 0 0;
  transform-origin: 0 100%; /* 设置转换原点 */
  transform: rotateZ(45deg); /* 旋转角度 */
}
/* HTML 结构为：
<div class="container">
  <div class="box"></div>
</div>
*/

/* 90 ~ 180 度的扇形 */
/* 原理：将半圆包裹在父元素内，旋转一定角度，父元素的溢出属性定义为隐藏 */
.container {
  width: 200px;
  height: 100px;
  overflow: hidden;
}
.box {
  width: 200px;
  height: 100px;
  background-color: #ff0000;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  transform-origin: center bottom;
  transform: rotateZ(30deg);
}
```

**三角形：**
```css
/* 
 * 原理：盒子的四边边框实际上是一个等腰梯形，对于 border-bottom，它的上边是 content 的宽度 
 * 将 content 设置为 0，上边消失，梯形变为三角形(等腰三角形)
*/
.box {
  width: 0;
  height: 0;
  /* 隐藏其他三边 */
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #ff0000;
}
```

**菱形：**
```css
/* 原理：使用 transform 属性的 skew 值 */
.box {
  margin: 100px;
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  transform: rotateZ(45deg) skew(5deg);
}
```

## 使用纯 CSS 实现曲线运动（贝塞尔曲线）


## 常见的兼容性问题


## CSS 模块化方案、如何配置按需加载、如何防止 CSS 阻塞渲染


## 掌握一套完整的响应式布局方案


## 怎样写出高效的 CSS

+ 避免无意义或多余的选择器嵌套，因为选择器的解析是从右向左的
+ 选择器的解析速度：id > class > tag > universal
+ 不要用 tag 来限制 id 选择器，因为 id 选择器本身就是唯一的
+ 使用 CSS 预处理工具(Sass, Less, Stylus)组织/复用样式
+ 使用 CSS 后处理工具(PostCSS)自动添加浏览器前缀
