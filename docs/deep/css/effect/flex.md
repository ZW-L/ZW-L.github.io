## flex 布局

更多参考 [Flex](https://www.runoob.com/w3cnote/flex-grammar.html)

使用 flex 布局需要分别在父元素和子元素中设置选项，需要注意的是：
+ 块级元素和行内元素都能设置 flex 布局
+ 定义 flex 布局后，子元素的 float, clear, vertical-align 属性会失效
+ flex 布局存在一个 flex 容器的概念，父元素作为容器，子元素作为项目
  + 容器默认存在两根轴线：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）
  + 项目默认沿主轴排列，单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做 `cross size`

![flex 容器](imgs/flex_01.png)

父元素（容器）：第一个为默认值
```css
.container {
  display: flex || inline-flex; /* 将容器定义为 flex 布局 */
  flex-direction: row || row-reverse || column || column-reverse; /* 项目排列的方向 */
  flex-wrap: nowrap || wrap || wrap-reverse; /* 一行排满时换行方式 */
  flex-flow: row nowrap; /* 一组 flex-direction 和 flex-wrap 的缩写 */
  justify-content: flex-start || flex-end || center || space-between || space-around; /* 项目在主轴上的对齐方式 */
  align-content: flex-start || flex-end || center || space-between || space-around || stretch; /* 多根轴线的对齐方式，只有一根轴线时不起作用 */
  align-items: flex-start || flex-end || center || baseline || stretch; /* 定义项目在交叉轴上的对齐方式 */
}
```

子元素（项目）：第一个为默认值
```css
.item {
  order: 0 || <整数>; /* 项目的排列顺序，数值越小，排列越靠前 */
  flex-grow: 0 || <正数>; /* 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大 */
  flex-shrink: 1 || <正数>; /* 定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小 */
  flex-basis: auto || <length>; /* 定义分配多余空间前项目占据的主轴空间，默认 auto */
  flex: 0 1 auto; /* flex-grow, flex-shrink, flex-basis 三者的简写，默认为：0 1 auto，后两个属性可选；有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)*/
  align-self: auto || flex-start || flex-end || center || baseline || stretch; /* 定义自身的对齐，覆盖父元素设置的 align-items 属性，默认 auto 继承自父元素，无父元素时为 stretch */
}
```

**使用技巧：**
+ 保持一个项目的属性 `flex: 1;`，它将占据容器主轴的剩余空间