## 父元素定高

+ 原理：直接为父元素设置一个高度
+ 优点：简单直接
+ 缺点：不适用父元素高度不确定的场景

```html
<div class="container">
  <div class="box"></div>
</div>
```
```css
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



## 创建 BFC

+ 原理：为父元素创建 BFC
  + `position`：absolute/fixed
  + `float`：left/right
  + `display`：inline-block/flex/table-cell 等
  + `overflow`：hidden/auto/scroll
+ 优点：设置比较简单
+ 缺点：或多或小都有些缺陷，如对溢出的处理、影响上一层布局等

```html
<div class="container">
  <div class="box"></div>
</div>
```
```css
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



## 空 div + clear

+ 原理：在浮动元素下方添加空 div，并给该元素设置 clear 属性
+ 优点：
+ 缺点：添加了额外的空元素

```html
<div class="container">
  <div class="box"></div>
  <div class="empty"></div>
</div>
```
```css
.container {
  border: 1px solid red;
}
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



## ::after + clear

+ 原理：父元素添加 `::after` 伪元素，效果相当于添加空 `div`，但不用更改 HTML
+ 优点：基本完美，适用大多数情况
+ 缺点：代码比较多

```html
<div class="container">
  <div class="box"></div>
</div>
```
```css
.container {
  border: 1px solid red;
}
.container::after {
  display: block; /* 显示为块级元素 */
  height: 0; /* 高度为 0，content 不占空间，但仍会折行 */
  content: ''; /* 任何一个字符串均可 */
  overflow: hidden; /* 隐藏 content */
  clear: both; /* 清除浮动 */
}
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```