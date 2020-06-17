## text-shadow

+ 简介：与 `box-shadow` 类似，但是这是环绕在文本周围的阴影，同样不影响布局
+ 语法：四个取值为别为 `offset-x`/`offset-y`/`blur-radius`/`color`
  + `offset-x`：阴影的水平偏移，正值向右
  + `offset-y`：阴影的垂直偏移，正值向下
  + `blur-radius`：阴影模糊半径，默认为 0
  + `color`：阴影颜色
```css
.text {
  text-shadow: 0 0 1em blue;
}
```

::: tip 说明
+ `color` 的位置可以在前面，也可以在后面，但是三个长度参数必须按顺序
+ 同样可以设置多重阴影，它们之间用逗号隔开
```css
.text {
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
}
```
:::