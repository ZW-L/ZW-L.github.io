## 简介

就目前来说，实现响应式离不开以下几个方面：
+ 预设 `viewport`(必须)
+ 多数情况下，都需要配置端优先的媒体查询模板(建议)
+ 使用响应式的 CSS 属性
+ 选择页面布局方式


## 预设 viewport

设置网页宽度为设备宽度、缩放始终为 1、且不允许用户缩放：
```html
<meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no'>
```


## 媒体查询

+ 使用媒体查询功能使页面在不同的设备、尺寸下有不同的显示效果
+ 以下为一套移动端优先的媒体查询模板：
```css
/* iPhone 6/7/8 */
body { background-color: red; }
/* iPhone 5/5s/se */
@media screen and (max-width: 320px) {
	body { background-color: red; }
}
/* iPhone X */
@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  body { background-color: red; }
}
/* iPhone 6/7/8 plus */
@media screen and (min-width: 414px) {
  body { background-color: red; }
}
/* iPad */
@media screen and (min-width: 768px) {
  body { background-color: red; }
}
/* iPad pro */
@media screen and (min-width: 1024px) {
  body { background-color: red; }
}
/* PC */
@media screen and (min-width: 1100px) {
  body { background-color: red; }
}
```
+ 以下为一套 PC 端优先的媒体查询模板：
```css
/* pc width > 1024px */
body { background-color: red; }
/* iPad pro */
@media screen and (max-width: 1024px) {
	body { background-color: red; }
}
/* iPad */
@media screen and (max-width: 768px) {
  body { background-color: red; }
}
/* iPhone 6/7/8 plus */
@media screen and (max-width: 414px) {
  body { background-color: red; }
}
/* iPhone X */
@media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  body { background-color: red; }
}
/* iPhone 6/7/8 */
@media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 2) {
  body { background-color: red; }
}
/* iPhone 5/5s/se */
@media screen and (max-width: 320px) {
  body { background-color: red; }
}
```



## 响应式属性

+ `rem` 相对于根元素的 `font-size` 属性，可以配合媒体查询修改 `font-size`
```css
/* 随着屏幕尺寸变化，页面字体也发生变化 */
html { font-size: 50px; }
body { font-size: .5rem; }

/* 平板 */
@media screen and (max-width: 1024px) {
  html { font-size: 40px; }
}
/* 普通或大屏手机 */
@media screen and (max-width: 375px) {
  html { font-size: 30px; }
}
/* 小屏手机 */
@media screen and (max-width: 320px) {
  html { font-size: 28px; }
}
```

+ 图片的 `max-width` 属性控制图片的最大放大倍数，高度设为 `auto` 控制图片等比缩放
```css
/* 屏幕缩小时，图片随之缩小，但放大时最大尺寸为图片自身尺寸 */
img {
  max-width: 100%;
  height: auto;
}
```



## 页面布局

+ 使用百分比进行页面布局
```html
<div class="container">
  <div class="nav"></div>
  <div class="sidebar"></div>
  <div class="main"></div>
</div>
```
```css
/* 随着屏幕尺寸的变化，页面所展示的内容也发生变化
  1. 大屏幕会显示完整的导航条和边栏
  2. 小屏幕会将导航条变小(或收起只显示一个图标)，并隐藏边栏
*/
* { margin: 0; padding: 0; }
.container {
  width: 100%;
  height: 500px;
}
.nav {
  height: 100px;
  background-color: #ace;
}
.sidebar {
  float: left;
  width: 30%;
  height: 400px;
  background-color: #eee;
}
.main {
  float: right;
  width: 70%;
  height: 400px;
  background-color: #ccc;
}

/* 在小屏幕、手机上，隐藏或缩小部分区域 */
@media screen and (max-width: 400px) {
  .nav { height: 50px; }
  .sidebar { width: 0; }
  .main { width: 100%; }
}
```

+ 使用视窗单位(`vw`/`vh`)代替百分比进行页面布局
```css
/* 设计思想与百分比布局类似 */
* { margin: 0; padding: 0; }
.container {
  width: 100vw;
  height: 100vh;
}
.nav {
  height: 10vh;
  background-color: #ace;
}
.sidebar {
  float: left;
  width: 30vw;
  height: 90vh;
  background-color: #eee;
}
.main {
  float: right;
  width: 70vw;
  height: 90vh;
  background-color: #ccc;
}

/* 在小屏幕、手机上，隐藏或缩小部分区域 */
@media screen and (max-width: 400px) {
  .nav { height: 5vh; }
  .sidebar { width: 0; }
  .main { width: 100vh; height: 95vh; }
}
```

+ 使用 flex 布局
```html
<div class="container">
  <div class="nav"></div>
  <div class="section">
    <div class="sidebar"></div>
    <div class="main"></div>
  </div>
</div>
```
```css
/* flex 配置简单，虽然页面在不同屏幕下内容大小不同，但各部分比例是一致的
  优点：只需适配移动端时，flex 是非常好的一种布局，不用写太多(设置不写)媒体查询逻辑
  缺点：在屏幕比例差别较大的设备上，显示效果差别较大，若是移动端优先，在 PC 端一般都会拉伸变形
*/
* { margin: 0; padding: 0; }
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.nav {
  width: 100%;
  height: 10%;
  background-color: #ace;
}
.section {
  display: flex;
  flex: 1;
}
.section .sidebar {
  width: 30%;
  height: auto;
  background-color: #eee;
}
.section .main {
  flex: 1;
  height: auto;
  background-color: #ccc;
}
```

+ 使用 grid 布局
```css
/* 是一种类似 table 表格和栅格布局的布局方式
  优点：
  缺点：语法比较复杂，
*/

/* todo */
```

+ 使用栅格布局
```css
/* 参考的 Bootstrap，将页面宽度细分为12等份的栅格，以栅格作单位进行布局
  优点：配合媒体查询，基于栅格继续嵌套栅格，能够实现任何的布局
  缺点：代码逻辑嵌套过多，在小型页面上显得冗余
*/

/* todo */
```
