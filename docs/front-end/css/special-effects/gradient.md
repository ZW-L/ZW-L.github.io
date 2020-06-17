---
sidebarDepth: 2
---

## 简介

+ 渐变作为背景图像(`background-image`)的属性
+ 分为线性渐变和径向渐变
+ 它们还可以带 `repeat-` 前缀，创建指定重复逻辑的渐变


## 线性渐变

### linear-gradient

**语法：** `linear-gradient: 渐变方向? 起止颜色列表`
+ `渐变方向`：默认为从左至右(`to right`)，可以有以下几种形式的取值
  + `to corner`：从左上角到右下角(`to right bottom`)，从上到下(`to bottom`)
  + `angle`：角度，从左上角到右下角(`135deg`)，从上到下(`180deg`)
  + `turn`：与角度类似，从左上角到右下角(`0.375turn`)，从上到下(`0.5turn`)
+ `起止颜色列表`：至少有两个(起始和结束)，它们用逗号隔开，还可以设置中间位置
  + 省略中间位置：`linear-gradient(red, orange, yellow, green, blue)`
  + 设置中间位置：`linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%)`
```css
.box {
  height: 100px;
  background-image: linear-gradient(red, orange, yellow, green, blue);
  /* 等同于 */
  background-image: linear-gradient(to right, red, orange, yellow, green, blue);
  /* 等同于 */
  background-image: linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
}
```

::: tip 说明：
+ 线性渐变同样可以有多组，它们用逗号隔开：
```css
.box {
  height: 100px;
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70%),
              linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70%),
              linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70%);
}
```
+ 颜色起始位置和终止位置默认为 0 和 100%
```css
.box {
  height: 100px;
  background: linear-gradient(red, blue);
  /* 等同于 */
  background: linear-gradient(red 0%, blue 100%);
}
```
+ 有一些简写的写法，下列三种写法的效果一样
```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```
:::



### repeating-linear-gradient

**语法：** 与线性渐变基本一样，但
+ 渐变方向的默认角度是从上到下(`to bottom`)
+ 若起始位置为 0，终止位置的长度确定了渐变重复的次数(25% -> 重复四次，10% -> 重复十次)
```css
.box {
  height: 100px;
  background-image: repeating-linear-gradient(to right, red, orange, yellow, green 10%);
}
```
+ 与线性渐变不同，当任一个中间位置大于等于后面的中间位置时，将会忽略后面的设置
```css
.box {
  height: 100px;
  background-image: repeating-linear-gradient(to right, red, orange 10%, yellow, green 10%);
  /* 相当于 */
  background-image: repeating-linear-gradient(to right, red, orange 10%)
}
```



## 径向渐变

### radial-gradient






### repeating-radial-gradient



