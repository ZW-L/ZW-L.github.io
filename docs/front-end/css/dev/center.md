---
sidebarDepth: 2
---

## 水平居中

### margin: auto

+ 适用范围：static/relative 定位的元素
+ 原理：将居中块的左右 margin 设置为 auto

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.box {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
```


### absolute + 负 margin

+ 适用范围：absolute 定位的元素
+ 原理：先设置 `left: 50%` 将居中块偏移，再用负 `margin` 拉正

```css
.box {
  position: absolute;
  width: 50%;
  height: 100px;
  left: 50%;
  margin-left: -25%;
}
```


### absolute + margin

+ 适用范围：absolute 定位的元素
+ 原理：
  + 先将父元素设置为非 `static` 定位，再将居中元素设置为 `absolute` 定位
  + 先设置 `margin: auto`，再通过 `top`/`bottom` 调整 `margin` 值

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #000;
}
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: auto;
  left: 0;
  right: 0;
  background-color: #ccc;
}
```



## 垂直居中

### relative + 负 margin

+ 适用范围：需要依赖居中块的高度
+ 通过 `relative` 定位将自身向顶部偏移 50%，再用负 margin 拉正

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.box {
  position: relative;
  width: 100px;
  height: 100px;
  top: 50%;
  margin-top: -50px;
}
```

### absolute + margin

+ 适用范围：不需要依赖居中块的高度
+ 原理：
  + 先将父元素设置为非 `static` 定位，再将居中元素设置为 `absolute` 定位
  + 先设置 `margin: auto`，再通过 `right`/`left` 调整 `margin` 值

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #000;
}
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: #ccc;
}
```



## 水平垂直居中

### absolute + margin

+ 结合水平居中和垂直居中即可

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #000;
}
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: auto;
  top: 0; bottom: 0; /* 保证垂直居中 */
  left: 0; right: 0; /* 保证水平居中 */
  background-color: #ccc;
}
```