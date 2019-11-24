实现常用布局（两栏，三栏、圣杯/双飞翼、吸顶），列举多种方式以及其优缺点

## 两栏

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

## 三栏

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

## 圣杯

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

## 双飞翼

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

## 吸顶

```html

```

```css

```