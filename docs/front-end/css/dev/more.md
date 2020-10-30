## 超出文本显示省略号

+ 单行文本省略号：
```css
.ellipsis {
  overflow: hidden;         /* 超出隐藏 */
  text-overflow: ellipsis;  /* 超出显示省略号 */
  white-space: nowrap;      /* 不换行 */
}
```

+ 多行文本省略号：
```css
.ellipsis-multi {
  overflow: hidden;               /* 超出隐藏 */
  text-overflow: ellipsis;        /* 超出显示省略号 */
  display: -webkit-box;           /* 或 display: -webkit-inline-box */
  -webkit-box-orient: vertical;   /* 垂直朝向 */
  -webkit-line-clamp: 3;          /* 指定行数 */
}
```

## 蒙版
## 倒影
## 淡入/淡出
## 图片瀑布流
## 曲线运动(贝塞尔曲线)



## 绘制几何图形

### 圆形

```css
/* 原理：盒子宽高相等，并将圆角属性设置为 50%(或者宽度的一半) */
.box {
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  border-radius: 50%;
}
```

### 扇形

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


### 三角形

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