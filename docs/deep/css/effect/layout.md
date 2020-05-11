---
sidebarDepth: 2
---

## 简介

+ 布局方法比较多，仅用于面试
+ 三栏建议 **双飞翼布局**，性能最好，而且实现比圣杯布局简单



## 两栏

### 浮动或BFC

```html
<div id="header"></div>
<div id="container">
  <div id="left"></div>
  <div id="right"></div>
</div>
<div id="footer"></div>
```

```css
/* 右块使用 margin 调整位置 */
#left {
  float: left;
  width: 300px;
  height: 600px;
  background-color: #ace;
}
#right {
  height: 600px;
  margin-left: 300px;
  background-color: #ccc;
}
#header, #footer {
  height: 50px;
  background-color: #000;
}

/* 或者为右块创建 BFC 容器 */
#left {
  float: left;
  width: 300px;
  height: 600px;
  background-color: grey;
}
#right {
  overflow: hidden;
  height: 600px;
  background-color: #ccc;
}
#header, #footer {
  height: 50px;
  background-color: #000;
}
```

+ 优点：代码逻辑非常简单
+ 缺点：左块不能撑起中间块的高度，中间块没有优先渲染


### 仿双飞翼

```html
<div id="header"></div>
<div id="container">
  <div id="right" class="column">
    <div id="main"></div>
  </div>
  <div id="left" class="column"></div>
</div>
<div id="footer"></div>
```

```css
.column {
  float: left;
  height: 600px;
}
#left {
  float: left;
  width: 200px;
  margin-left: -100%;
  background-color: #ace;
}
#right {
  width: 100%;
  height: 600px;
  background-color: #ccc;
}
#main {
  height: 200px;
  padding-left: 200px;
}
#container {
  overflow: hidden;
}
#header, #footer {
  height: 50px;
  background-color: #000;
}
```

+ 优点：左块能撑起中间块的高度，中间块能优先渲染
+ 缺点：dom 结构层多余，增加渲染树生成的计算量


## 三栏

### 浮动布局

**原理：** 左右块分别左右浮动，中间栏设置 margin

```html
<div id="header"></div>
<div id="container">
  <div id="left"></div>
  <div id="right"></div>
  <!-- 中间栏在最后声明 -->
  <div id="center"></div>
</div>
<div id="footer"></div>
```

```css
/* 防止宽度减少时左右块折行 */
body { min-width: 600px; }

#left, #right {
  width: 200px;
  height: 600px;
  background-color: #ace;
}
#left {
  float: left;
}
#right {
  float: right;
}
#center {
  height: 600px;
  margin: 0 200px;
  background-color: #ccc;
}
#header, #footer {
  height: 50px;
  background-color: #000;
}
```

+ 优点：代码逻辑简单
+ 缺点：中间块在后，最后才渲染


### 绝对定位布局

**原理：**
+ 左右块使用 absolute 脱离文档流，再通过 `top`/`right`/`left` 精确定位

```html
<div id="header"></div>
<div id="container">
  <div id="center"></div>
  <div id="left"></div>
  <div id="right"></div>
</div>
<div id="footer"></div>
```

```css
/* 防止宽度减少时中间块无宽度 */
body { min-width: 600px; }

#container {
  position: relative;
}
#left, #right {
  position: absolute;
  width: 200px;
  height: 400px;
  top: 0;
  background-color: #ace;
}
#left {
  left: 0;
}
#right {
  right: 0;
}
#center {
  height: 400px;
  margin: 0 200px;
  background-color: #ccc;
}
#header, #footer {
  height: 50px;
  background-color: #000;
}
```

+ 优点：提高渲染效率，中间块首先渲染
+ 缺点：左右块的高度无法撑起中间块的高度



### 圣杯

**原理：**
1. 设置父元素左右内边距，后续通过调整，用左右块分别盖住这些内边距
2. 将三个块都设置为左浮，中间块在第一位，此时会出现一些问题：
    + 因为中间块占了父元素的全部宽度，所以左右两个块会被推到下一行
    + 调整了左右块后，当减少屏幕宽度导致中间块宽度小于左块宽度时，会发生错乱
3. 调整左块：
    + 通过 `margin-left: -100%` 将左块向左移动(相对父元素)，此时左块的左侧与中间块的左侧重合
    + 再设置 `position: relative`，此时的 `right: 200px` 将它相对其上一步的位置向左移动(同样可以设置为 `left: -200px`)
4. 调整右块：设置 `margin-right: -200px` 将其右边距减少，导致右块被推回上一行
5. 防止再次折行：将屏幕最小宽度设置为（左块宽*2+右块宽），这里为 600px；二倍的左块宽，是因为调整左块时设置的 `right: 200px`
6. Todo：解析圣杯布局的负 margin 和双飞翼布局的负 margin 有何不同？

```html
<div id="header"></div>
<div id="container">
  <div id="center" class="column"></div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
</div>
<div id="footer"></div>
```

```css
body { min-width: 600px; }

.column {
  float: left;
  height: 600px;
}
#left {
  position: relative;
  right: 200px;
  width: 200px;
  margin-left: -100%;
  background-color: #ace;
}
#right {
  width: 200px;
  margin-right: -200px;
  background-color: #eee;
}
#center {
  width: 100%;
  background-color: #ccc;
}
#container {
  padding: 0 200px;
  overflow: hidden;
}
#header, #footer {
  height: 50px;
  background-color: #000;
}
```

+ 优点：左右块能撑起中间块的高度
+ 缺点：中间块的宽度必须大于等于左块宽度；代码较复杂


### 双飞翼

**原理：**
1. 圣杯布局的升级版，中间块仅作为一层 wrapper，它里面的 main 块才是内容块
2. 三个块都左浮，但中间块占满一行，导致左右块折行
3. main 内容块使用 `margin` 控制自身的宽度，为左右块腾出空间，用于被左右块覆盖
4. 调整左块：只需 `margin-left: -100%` 即可让左块回到上一行
5. 调整右块：同样 `margin-left: -200px` 使右块回到上一行
6. 设置屏幕最小宽度是为了防止中间块宽度过小，它可以设置更小的值(相对于圣杯布局)

```html
<div id="header"></div>
<div id="container">
  <div id="center" class="column">
    <div id="main"></div>
  </div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
</div>
<div id="footer"></div>
```

```css
body { min-width: 500px; }

.column {
  float: left;
  height: 600px;
}
#left {
  width: 200px;
  margin-left: -100%;
  background-color: #ace;
}
#right {
  width: 200px;
  margin-left: -200px;
  background-color: #eee;
}
#center {
  width: 100%;
  background-color: #ccc;
}
#main {
  height: 100px;
  margin: 0 200px;
}
#container {
  overflow: hidden;
}
#header, #footer {
  height: 50px;
  background-color: #000;
}
```

+ 优点：代码比圣杯布局简单，而且中间块可以有更小的最小宽度
+ 缺点：dom 结构层多余，增加渲染树生成的计算量


## 吸顶

### fixed

```html
<header id="header">header</header>
<section id="section">section</section>
<footer id="footer">footer</footer>
```

```css
#header, #footer {
  width: 100%;
  height: 30px;
  background-color: #ccc;
}
#section {
  height: 1000px;
  margin-top: 30px;
}
#header {
  position: fixed;
  top: 0;
}
```

+ 优点：兼容性较好
+ 缺点：没有 `sticky` 那么简便


### sticky

```html
<header id="header">header</header>
<section id="section">section</section>
<footer id="footer">footer</footer>
```

```css
#header, #footer {
  height: 30px;
  background-color: #ccc;
}
#section {
  height: 1000px;
}
#header {
  position: sticky;
  top: 0;
}
```

+ 优点：代码非常简单可控
+ 缺点：需要考虑 `sticky` 的兼容性