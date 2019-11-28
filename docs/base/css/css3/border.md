---
sidebarDepth: 2
---

## 概述

盒子边框相关的新属性有：

+ `border-radius`：圆角边框
+ `border-image`：图片边框
+ `box-shadow`：盒子阴影

## border-radius

&emsp;&emsp;圆角属性可以将盒子的角弯曲，甚至将盒子变成一个圆或类椭圆。

### 原理

&emsp;&emsp;将一个固定长宽的矩形对角线经过特定的扭曲，变成一段圆滑的曲线，而每个盒子都有四个角，因此会有四对值指定四个角的扭曲。完整的圆角属性是这样的：

```css
.box {
  background-color: #ccc;
  width: 100px;
  height: 100px;
  border-radius: 1px 2px 3px 4px / 1px 2px 3px 4px;
}
```

::: tip 说明：
+ 两组用 `/` 分隔的值，第一组用作四个角的长度，第二组用作四个角的宽度
+ 当每组值的参数少于 4 个时，缺省的参数取对角的值(如 `1px 2px 3px` 相当于 `1px 2px 3px 2px`)
+ 只有一组值时，第二组值与第一组相等(如 `1px 2px 3px 4px` 相当于 `1px 2px 3px 4px / 1px 2px 3px 4px`)
+ 最简单的情况是只有一个值，它应用于所有(如 `10px` 相当于 `10px 10px 10px 10px / 10px 10px 10px 10px`)
:::

### 一个圆

```css
.box {
  background-color: #ccc;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```


## border-image





## box-shadow

&emsp;&emsp;盒子阴影能在盒子的周围添加一层阴影色，构造出一些立体效果，而且不会影响盒子的布局属性。

### 原理

完整的盒子阴影：

```css
.box {
  background-color: #ccc;
  width: 100px;
  height: 100px;
  
}
```