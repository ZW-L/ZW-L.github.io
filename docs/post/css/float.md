## 解决浮动引起的元素高度塌陷

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