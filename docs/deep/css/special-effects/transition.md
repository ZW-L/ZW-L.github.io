## transition

`transition` 用于设置 `CSS` 属性的过渡：
```css
.box {
  transition-property：all; /* 设置参与过渡的属性，多个属性用逗号分隔 */
  transition-duration：.8s; /* 设置过渡持续的时间，多个属性用逗号分隔 */
  transition-timing-function：ease; /* 设置过渡使用的速度函数 */
  transition-delay：1s; /* 设置延迟过渡的时间 */
  transition：all .8s ease 1s; /* 一次性设置上述值，按顺序 */
}
```

**技巧：**
+ 设置 `transition` 属性后不会产生动画，需要在指定过渡的属性发生变化时才会看得到变化
+ 可以用 `CSS` 伪类(`:hover` 等)设置元素属性变化，或者通过 `js` 事件设置元素属性变化